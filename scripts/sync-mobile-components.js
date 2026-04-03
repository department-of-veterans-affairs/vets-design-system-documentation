#!/usr/bin/env node

/**
 * Enhanced Mobile Component Sync - GitHub API Version
 * 
 * Syncs mobile app component documentation from VA Mobile Library via GitHub API.
 * Features:
 * - GitHub token authentication for higher rate limits (5000/hour vs 60/hour)
 * - Intelligent caching to minimize API calls
 * - Enhanced TypeScript parsing with intersection types
 * - Progress tracking and detailed error messages
 * - Rate limiting detection and helpful guidance
 * 
 * Usage:
 *   Basic: node scripts/sync-mobile-components.js
 *   With auth: GITHUB_TOKEN=your_token node scripts/sync-mobile-components.js
 *   Force refresh: node scripts/sync-mobile-components.js --force
 * 
 * Setup GitHub Token (recommended):
 *   1. Go to https://github.com/settings/tokens
 *   2. Generate token with 'public_repo' scope
 *   3. Export: export GITHUB_TOKEN=your_token_here
 *   4. Run sync script
 * 
 * This script fetches component data from the VA Mobile Library GitHub repository,
 * parses TypeScript interfaces to extract props, and updates the local
 * mobile-app-component-docs-source.json file with enhanced component documentation.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const GITHUB_API_BASE = 'https://api.github.com';
const MOBILE_LIBRARY_REPO = 'department-of-veterans-affairs/va-mobile-library';
const SOURCE_FILE_PATH = path.join(__dirname, '..', 'src', '_data', 'mobile-app-component-docs-source.json');

// GitHub token from environment for higher rate limits (5000/hour vs 60/hour)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const CACHE_FILE = path.join(__dirname, '..', '.mobile-components-cache.json');

/**
 * Get correct article (a/an) for component name
 */
function getArticle(componentName) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  return vowels.includes(componentName[0].toUpperCase()) ? 'An' : 'A';
}

/**
 * Enhanced GitHub API fetch with authentication and rate limiting
 */
function fetchFromGitHub(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'VADS-Mobile-Sync-Script/2.0',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    // Add authentication if token provided
    if (GITHUB_TOKEN) {
      options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
      console.log('🔐 Using authenticated requests (5000/hour rate limit)');
    } else {
      console.log('⚠️ Using anonymous requests (60/hour rate limit)');
      console.log('💡 Set GITHUB_TOKEN environment variable for higher limits');
    }

    https.get(url, options, (res) => {
      let data = '';
      
      // Log rate limiting info
      if (res.headers['x-ratelimit-remaining']) {
        const remaining = res.headers['x-ratelimit-remaining'];
        const limit = res.headers['x-ratelimit-limit'];
        console.log(`📊 API Rate Limit: ${remaining}/${limit} remaining`);
        
        // Warn if getting low on requests
        if (remaining < 10 && limit < 1000) { // Anonymous limit
          console.warn(`⚠️ Low on API requests! Consider using GITHUB_TOKEN`);
        }
      }

      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error(`Failed to parse JSON: ${error.message}`));
          }
        } else if (res.statusCode === 403) {
          // Handle rate limiting specifically
          if (data.includes('rate limit')) {
            const resetTime = res.headers['x-ratelimit-reset'];
            const resetDate = new Date(resetTime * 1000);
            const message = `❌ GitHub API rate limit exceeded!\n` +
                          `⏰ Resets at: ${resetDate.toLocaleTimeString()}\n` +
                          `💡 Solutions:\n` +
                          `   1. Set GITHUB_TOKEN environment variable (5000/hour vs 60/hour)\n` +
                          `   2. Wait ${Math.ceil((resetDate - Date.now()) / 60000)} minutes\n` +
                          `   3. Use: export GITHUB_TOKEN=your_token_here`;
            reject(new Error(message));
          } else {
            reject(new Error(`GitHub API forbidden: ${data}`));
          }
        } else if (res.statusCode === 404) {
          resolve(null); // File not found, return null
        } else {
          reject(new Error(`GitHub API error ${res.statusCode}: ${data}`));
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
      .filter(name => name !== 'shared') // Filter out non-component directories
      .sort();  // Sort for consistent logging
  } catch (error) {
    console.error('Failed to get component list:', error.message);
    return [];
  }
}

/**
 * Enhanced TypeScript parser that follows imports and intersection types
 */
async function parsePropsFromTSWithImports(content, componentName, filePath) {
  const props = [];
  
  console.log(`    🔍 Analyzing ${componentName} component structure...`);
  
  // Step 1: Look for the component's destructured props in the function signature
  const componentFunctionMatch = content.match(new RegExp(`export\\s+const\\s+${componentName}[^=]*=\\s*\\([^)]*{([^}]+)}[^)]*\\)\\s*=>`));
  
  if (componentFunctionMatch) {
    const destructuredProps = componentFunctionMatch[1];
    const propNames = destructuredProps.split(',').map(p => p.trim()).filter(p => p);
    console.log(`    📋 Found destructured props in component: ${propNames.join(', ')}`);
    
    // Step 2: Find the props type interface used by the component
    const propsTypeMatch = content.match(new RegExp(`${componentName}:\\s*FC<([^>]+)>`));
    if (propsTypeMatch) {
      const propsTypeName = propsTypeMatch[1].trim();
      console.log(`    🎯 Props type: ${propsTypeName}`);
      
      // Step 3: Check if the props type is imported from another file
      const importMatch = content.match(new RegExp(`import\\s*{[^}]*${propsTypeName}[^}]*}\\s*from\\s*['"]([^'"]+)['"]`));
      
      if (importMatch) {
        const importPath = importMatch[1];
        console.log(`    📥 Props imported from: ${importPath}`);
        
        // Step 4: Fetch and parse the imported type definition file
        const typeFileProps = await fetchAndParseTypeFile(importPath, filePath, propsTypeName);
        if (typeFileProps.length > 0) {
          props.push(...typeFileProps);
          console.log(`    ✅ Extracted ${typeFileProps.length} props from type file`);
        }
      } else {
        // Try parsing props from current file if not imported
        const localProps = parsePropsFromTS(content, componentName);
        props.push(...localProps);
      }
    }
    
    // Step 5: Ensure all destructured props are captured (fallback)
    const existingPropNames = new Set(props.map(p => p.name));
    propNames.forEach(propName => {
      if (!existingPropNames.has(propName) && propName !== '...props') {
        props.push({
          name: propName,
          type: 'unknown',
          docs: `${propName} property for ${componentName} (detected from component signature)`,
          required: false
        });
      }
    });
  } else {
    // Fallback to original parsing method
    const fallbackProps = parsePropsFromTS(content, componentName);
    props.push(...fallbackProps);
  }
  
  return props;
}

/**
 * Fetch and parse TypeScript type definition file
 */
async function fetchAndParseTypeFile(relativePath, currentFilePath, typeName) {
  try {
    // Convert relative import to absolute GitHub path
    const pathParts = currentFilePath.split('/');
    pathParts.pop(); // Remove filename
    
    // Handle relative imports (../../types/forms.ts)
    let targetPath = pathParts.join('/');
    const importParts = relativePath.split('/');
    
    for (const part of importParts) {
      if (part === '..') {
        pathParts.pop();
      } else if (part === '.') {
        // Stay in current directory
      } else {
        pathParts.push(part);
      }
    }
    
    const fullTypePath = pathParts.join('/') + '.ts';
    console.log(`    📁 Fetching type file: ${fullTypePath}`);
    
    const typeFileContent = await getFileContents(fullTypePath);
    if (!typeFileContent) {
      console.warn(`    ❌ Could not fetch type file: ${fullTypePath}`);
      return [];
    }
    
    // Parse the specific type from the file
    return parseComplexTypeFromContent(typeFileContent, typeName);
    
  } catch (error) {
    console.warn(`    ⚠️ Error parsing type file: ${error.message}`);
    return [];
  }
}

/**
 * Parse complex TypeScript types including intersections and unions
 */
function parseComplexTypeFromContent(content, typeName) {
  const props = [];
  
  console.log(`    🔬 Parsing type: ${typeName}`);
  
  // Look for intersection types: type TypeName = BaseType & AnotherType & { ... }
  const intersectionPattern = new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*([^=;]+)`, 'i');
  const intersectionMatch = content.match(intersectionPattern);
  
  if (intersectionMatch) {
    const typeDefinition = intersectionMatch[1];
    console.log(`    📐 Type definition: ${typeDefinition.substring(0, 100)}...`);
    
    // Split by & to find all intersected types
    const intersectedTypes = typeDefinition.split('&').map(t => t.trim());
    
    for (const typeRef of intersectedTypes) {
      if (typeRef.includes('{')) {
        // Inline type definition - extract props directly
        const inlinePropsMatch = typeRef.match(/{([^}]+)}/);
        if (inlinePropsMatch) {
          const inlineProps = parsePropsFromInterface(inlinePropsMatch[1], typeName);
          props.push(...inlineProps);
        }
      } else {
        // Reference to another type - find its definition (including union types)
        const referencedTypeName = typeRef.replace(/\s/g, '');
        const referencedProps = parseTypeReference(content, referencedTypeName);
        if (referencedProps.length > 0) {
          console.log(`    🔗 Found ${referencedProps.length} props from referenced type: ${referencedTypeName}`);
          props.push(...referencedProps);
        }
      }
    }
  } else {
    // Try finding a simple interface definition
    const interfacePattern = new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*{([^}]+)}`, 'i');
    const interfaceMatch = content.match(interfacePattern);
    
    if (interfaceMatch) {
      const interfaceProps = parsePropsFromInterface(interfaceMatch[1], typeName);
      props.push(...interfaceProps);
    }
  }
  
  return props;
}

/**
 * Parse a type reference and find its definition in the content
 */
function parseTypeReference(content, typeName) {
  const props = [];
  
  // Look for type definition including union types
  const patterns = [
    `export\\s+type\\s+${typeName}\\s*=\\s*{([^}]+)}`,
    `type\\s+${typeName}\\s*=\\s*{([^}]+)}`,
    `interface\\s+${typeName}\\s*{([^}]+)}`,
    // Union types: type TypeName = { prop1 } | { prop2 }
    `type\\s+${typeName}\\s*=\\s*([^;]+);?`,
    `export\\s+type\\s+${typeName}\\s*=\\s*([^;]+);?`
  ];
  
  for (const pattern of patterns) {
    const regex = new RegExp(pattern, 'is');
    const match = content.match(regex);
    if (match) {
      console.log(`    🎯 Found type definition for: ${typeName}`);
      
      const typeDefinition = match[1];
      
      // Check if this is a union type (contains |)
      if (typeDefinition.includes('|')) {
        console.log(`    🔀 Parsing union type: ${typeName}`);
        const unionProps = parseUnionType(typeDefinition, typeName);
        props.push(...unionProps);
      } else if (typeDefinition.includes('{')) {
        // Regular object type
        const typeProps = parsePropsFromInterface(typeDefinition, typeName);
        props.push(...typeProps);
      }
      break;
    }
  }
  
  return props;
}

/**
 * Parse union types like: { prop1?: type } | { prop2?: type }
 */
function parseUnionType(unionDefinition, typeName) {
  const props = [];
  
  console.log(`    🔀 Union definition: ${unionDefinition.substring(0, 150)}...`);
  
  // Split by | to get union variants
  const unionParts = unionDefinition.split('|').map(part => part.trim());
  
  for (const part of unionParts) {
    // Extract props from each union variant
    const braceMatch = part.match(/{([^}]+)}/);
    if (braceMatch) {
      const variantProps = parsePropsFromInterface(braceMatch[1], `${typeName}_variant`);
      
      // Add props that aren't "never" type
      const validProps = variantProps.filter(prop => 
        prop.type !== 'never' && 
        !prop.type.includes('never') &&
        prop.name !== 'never'
      );
      
      if (validProps.length > 0) {
        console.log(`    🎯 Found ${validProps.length} valid props from union variant: ${validProps.map(p => p.name).join(', ')}`);
        props.push(...validProps);
      }
    }
  }
  
  return props;
}

/**
 * Original TypeScript parser (fallback for simple cases)
 */
function parsePropsFromTS(content, componentName) {
  const props = [];
  
  // Core interface patterns used by mobile components
  const possiblePatterns = [
    `interface\\s+${componentName}Props\\s*{([^}]+)}`, // ComponentProps
    `type\\s+${componentName}Props\\s*=\\s*{([^}]+)}`, // type ComponentProps = {...}
    `export\\s+interface\\s+${componentName}Props\\s*{([^}]+)}`, // export interface ComponentProps
  ];
  
  for (const pattern of possiblePatterns) {
    const regex = new RegExp(pattern, 'i');
    const match = content.match(regex);
    if (match) {
      return parsePropsFromInterface(match[1], componentName);
    }
  }
  
  return props;
}

/**
 * Parse props from interface content
 */
function parsePropsFromInterface(interfaceContent, componentName) {
  const props = [];
  
  // Parse individual props - enhanced regex for TypeScript
  const propRegex = /(?:\/\*\*[\s\S]*?\*\/\s*)?(\w+)(\?)?\s*:\s*([^;,\n]+)/g;
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
  
  // Core file patterns for mobile components
  const possibleFiles = [
    // Primary patterns (covers 95% of cases)
    `packages/components/src/components/${componentName}/${componentName}.tsx`,
    `packages/components/src/components/${componentName}/index.tsx`,
    
    // Alternative casing
    `packages/components/src/components/${componentName.toLowerCase()}/${componentName.toLowerCase()}.tsx`,
    `packages/components/src/components/${componentName.toLowerCase()}/index.tsx`,
  ];
  
  let componentData = null;
  
  for (const filePath of possibleFiles) {
    console.log(`  📁 Trying: ${filePath}`);
    const content = await getFileContents(filePath);
    if (content) {
      console.log(`  ✅ Found file! Size: ${content.length} characters`);
      const props = await parsePropsFromTSWithImports(content, componentName, filePath);
      
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
    } else {
      console.log(`  ❌ Not found: ${filePath}`);
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
 * Load cache from disk
 */
function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (error) {
      console.warn('📦 Cache file corrupted, starting fresh');
      return {};
    }
  }
  return {};
}

/**
 * Save cache to disk
 */
function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

/**
 * Check if we should use cached data (less than 1 hour old)
 */
function shouldUseCache(lastUpdated) {
  if (!lastUpdated) return false;
  const cacheAge = Date.now() - new Date(lastUpdated).getTime();
  const oneHour = 60 * 60 * 1000;
  return cacheAge < oneHour;
}

/**
 * Main sync function with enhanced API features
 */
async function syncMobileComponents() {
  try {
    console.log('🚀 Starting enhanced mobile component sync...');
    
    // Load cache to minimize API calls
    const cache = loadCache();
    
    // Check if we can use cached data
    if (cache.lastUpdated && shouldUseCache(cache.lastUpdated)) {
      console.log('📦 Using cached data (less than 1 hour old)');
      console.log('💡 Use --force flag to force refresh');
      
      if (process.argv.includes('--force')) {
        console.log('🔄 Force refresh requested, fetching fresh data...');
      } else {
        console.log('✅ Mobile components are up to date');
        return;
      }
    }
    
    // Get current source file
    let currentData = { components: [] };
    if (fs.existsSync(SOURCE_FILE_PATH)) {
      currentData = JSON.parse(fs.readFileSync(SOURCE_FILE_PATH, 'utf8'));
    }
    
    // Get component list from GitHub
    console.log('📡 Fetching component list from VA Mobile Library...');
    const componentNames = await getComponentList();
    
    if (componentNames.length === 0) {
      console.error('❌ No components found. Check repository structure or network connection.');
      
      if (!GITHUB_TOKEN) {
        console.error('💡 This might be a rate limiting issue. Try setting GITHUB_TOKEN:');
        console.error('   export GITHUB_TOKEN=your_github_token_here');
      }
      
      process.exit(1);
    }
    
    console.log(`Found ${componentNames.length} components:`, componentNames);
    
    // Fetch component data with progress tracking
    console.log(`📊 Found ${componentNames.length} components to process`);
    const newComponents = [];
    let completed = 0;
    
    for (const componentName of componentNames) {
      completed++;
      console.log(`[${completed}/${componentNames.length}] Processing ${componentName}...`);
      
      const componentData = await fetchComponentData(componentName);
      if (componentData) {
        newComponents.push(componentData);
        console.log(`  ✅ ${componentData.tag} (${componentData.props.length} props)`);
      } else {
        console.log(`  ❌ Failed to fetch ${componentName}`);
      }
      
      // Add small delay to be respectful to GitHub API
      if (completed < componentNames.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    // Update source file
    const updatedData = {
      "_comment": "Mobile app component documentation source data. Enhanced API sync with authentication and caching.",
      "_instructions": "To sync: 'node scripts/sync-mobile-components.js' (with GITHUB_TOKEN for best results), then 'npx gulp process-mobile-app-component-docs'",
      "_lastUpdated": new Date().toISOString().split('T')[0],
      "_syncedFrom": `https://github.com/${MOBILE_LIBRARY_REPO}`,
      "_syncMethod": "GitHub API with enhanced parsing",
      "_authStatus": GITHUB_TOKEN ? "authenticated" : "anonymous",
      "components": newComponents.sort((a, b) => a.tag.localeCompare(b.tag))
    };
    
    // Update cache
    cache.lastUpdated = new Date().toISOString();
    cache.componentCount = newComponents.length;
    saveCache(cache);
    
    // Write updated file
    fs.writeFileSync(SOURCE_FILE_PATH, JSON.stringify(updatedData, null, 2));
    
    console.log(`\n✅ Successfully synced ${newComponents.length} mobile components`);
    console.log(`📄 Updated: ${SOURCE_FILE_PATH}`);
    console.log(`💾 Cached results for faster subsequent runs`);
    console.log(`🔄 Next step: Run 'npx gulp process-mobile-app-component-docs' to regenerate processed file`);
    
    // Show summary with prop counts
    console.log('\n📋 Synced components:');
    let totalProps = 0;
    newComponents.forEach(comp => {
      totalProps += comp.props.length;
      const propsInfo = comp.props.length === 1 && comp.props[0].name === 'testID' 
        ? '1 prop (basic)' 
        : `${comp.props.length} props`;
      console.log(`   • ${comp.tag} (${propsInfo})`);
    });
    
    console.log(`\n📈 Total: ${newComponents.length} components, ${totalProps} props extracted`);
    console.log(`🚀 API-based sync complete! ${GITHUB_TOKEN ? 'Authenticated' : 'Anonymous'} mode`);
    
  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    
    if (error.message.includes('rate limit')) {
      console.error('\n💡 Quick fixes:');
      console.error('   1. Set GITHUB_TOKEN: export GITHUB_TOKEN=your_token_here');
      console.error('   2. Wait for rate limit reset');
      console.error('   3. Use --force to bypass cache');
    }
    
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  syncMobileComponents();
}

module.exports = { syncMobileComponents };