#!/usr/bin/env node

/**
 * Sync mobile app component documentation from VA Mobile Library
 * 
 * This script fetches component data from the VA Mobile Library GitHub repository
 * and updates the local mobile-app-component-docs-source.json file.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const GITHUB_API_BASE = 'https://api.github.com';
const MOBILE_LIBRARY_REPO = 'department-of-veterans-affairs/va-mobile-library';
const SOURCE_FILE_PATH = path.join(__dirname, '..', 'src', '_data', 'mobile-app-component-docs-source.json');

/**
 * Get correct article (a/an) for component name
 */
function getArticle(componentName) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  return vowels.includes(componentName[0].toUpperCase()) ? 'An' : 'A';
}

/**
 * Fetch data from GitHub API
 */
function fetchFromGitHub(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'VADS-Mobile-Sync-Script'
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Get the contents of a file from GitHub
 */
async function getFileContents(filePath) {
  try {
    const url = `${GITHUB_API_BASE}/repos/${MOBILE_LIBRARY_REPO}/contents/${filePath}`;
    const response = await fetchFromGitHub(url);
    
    if (response.content) {
      return Buffer.from(response.content, 'base64').toString('utf-8');
    }
    return null;
  } catch (error) {
    console.warn(`Could not fetch ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Get list of components from the mobile library
 */
async function getComponentList() {
  try {
    const componentsUrl = `${GITHUB_API_BASE}/repos/${MOBILE_LIBRARY_REPO}/contents/packages/components/src/components`;
    const components = await fetchFromGitHub(componentsUrl);
    
    if (!Array.isArray(components)) {
      throw new Error('Expected array of components');
    }
    
    return components
      .filter(item => item.type === 'dir')
      .map(item => item.name)
      .filter(name => !name.startsWith('.'))
      .filter(name => name !== 'shared'); // Filter out non-component directories
  } catch (error) {
    console.error('Failed to get component list:', error.message);
    return [];
  }
}

/**
 * Parse TypeScript interface to extract props
 */
function parsePropsFromTS(content, componentName) {
  const props = [];
  
  // Look for interface definitions like "ComponentNameProps"
  const interfaceRegex = new RegExp(`interface\\s+${componentName}Props\\s*{([^}]+)}`, 'i');
  const match = content.match(interfaceRegex);
  
  if (!match) {
    console.warn(`No props interface found for ${componentName}`);
    return props;
  }
  
  const interfaceContent = match[1];
  
  // Parse individual props - basic regex for demonstration
  const propRegex = /(\w+)(\?)?\s*:\s*([^;,\n]+)/g;
  let propMatch;
  
  while ((propMatch = propRegex.exec(interfaceContent)) !== null) {
    const [, name, optional, type] = propMatch;
    
    props.push({
      name: name.trim(),
      type: type.trim(),
      docs: `${name} property for ${componentName}`, // Placeholder - enhance with JSDoc parsing
      required: !optional
    });
  }
  
  return props;
}

/**
 * Fetch component data from mobile library
 */
async function fetchComponentData(componentName) {
  console.log(`Fetching data for ${componentName}...`);
  
  // Try common file patterns
  const possibleFiles = [
    `packages/components/src/components/${componentName}/${componentName}.tsx`,
    `packages/components/src/components/${componentName}/index.tsx`,
    `packages/components/src/components/${componentName}/${componentName}.ts`,
  ];
  
  let componentData = null;
  
  for (const filePath of possibleFiles) {
    const content = await getFileContents(filePath);
    if (content) {
      const props = parsePropsFromTS(content, componentName);
      
      componentData = {
        tag: `va-${componentName.toLowerCase()}`,
        docs: `${getArticle(componentName)} ${componentName} component for React Native applications`,
        props: props.length > 0 ? props : [
          {
            name: "testID",
            type: "string",
            docs: "Optional test ID for test suites",
            required: false
          }
        ],
        events: []
      };
      break;
    }
  }
  
  if (!componentData) {
    console.warn(`Could not fetch data for ${componentName}`);
    // Return basic structure
    return {
      tag: `va-${componentName.toLowerCase()}`,
      docs: `${getArticle(componentName)} ${componentName} component for React Native applications`,
      props: [
        {
          name: "testID",
          type: "string",
          docs: "Optional test ID for test suites",
          required: false
        }
      ],
      events: []
    };
  }
  
  return componentData;
}

/**
 * Main sync function
 */
async function syncMobileComponents() {
  try {
    console.log('Starting mobile component sync...');
    
    // Get current source file
    let currentData = { components: [] };
    if (fs.existsSync(SOURCE_FILE_PATH)) {
      currentData = JSON.parse(fs.readFileSync(SOURCE_FILE_PATH, 'utf8'));
    }
    
    // Get component list from GitHub
    console.log('Fetching component list from VA Mobile Library...');
    const componentNames = await getComponentList();
    
    if (componentNames.length === 0) {
      console.error('No components found. Check repository structure or network connection.');
      process.exit(1);
    }
    
    console.log(`Found ${componentNames.length} components:`, componentNames);
    
    // Fetch data for each component
    const newComponents = [];
    for (const componentName of componentNames) {
      const componentData = await fetchComponentData(componentName);
      if (componentData) {
        newComponents.push(componentData);
      }
    }
    
    // Update source file
    const updatedData = {
      "_comment": "Mobile app component documentation source data. This file is maintained via sync-mobile-components.js script.",
      "_instructions": "To sync mobile app components: Run 'node scripts/sync-mobile-components.js' to fetch latest data from VA Mobile Library, then run 'npx gulp process-mobile-app-component-docs' to regenerate the processed file.",
      "_lastUpdated": new Date().toISOString().split('T')[0],
      "_syncedFrom": `https://github.com/${MOBILE_LIBRARY_REPO}`,
      "components": newComponents.sort((a, b) => a.tag.localeCompare(b.tag))
    };
    
    // Write updated file
    fs.writeFileSync(SOURCE_FILE_PATH, JSON.stringify(updatedData, null, 2));
    
    console.log(`✅ Successfully synced ${newComponents.length} mobile components`);
    console.log(`📄 Updated: ${SOURCE_FILE_PATH}`);
    console.log(`🔄 Next step: Run 'npx gulp process-mobile-app-component-docs' to regenerate processed file`);
    
    // Show summary
    console.log('\n📋 Synced components:');
    newComponents.forEach(comp => {
      console.log(`   • ${comp.tag} (${comp.props.length} props)`);
    });
    
  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  syncMobileComponents();
}

module.exports = { syncMobileComponents };