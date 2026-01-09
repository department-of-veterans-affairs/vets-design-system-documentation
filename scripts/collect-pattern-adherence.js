#!/usr/bin/env node

/**
 * Pattern Adherence Tracking Script
 *
 * Analyzes which VA.gov forms use which codified patterns by:
 * 1. Parsing pattern metadata from markdown frontmatter
 * 2. Fetching product directory to map forms to repositories
 * 3. Analyzing vets-website code to identify pattern usage
 * 4. Generating compliance reports
 *
 * Usage:
 *   node scripts/collect-pattern-adherence.js [--vets-website-path <path>]
 *
 * Options:
 *   --vets-website-path   Path to local vets-website repo (default: use GitHub API)
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// Parse command-line arguments
const args = process.argv.slice(2);
let VETS_WEBSITE_PATH = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--vets-website-path' && i + 1 < args.length) {
    VETS_WEBSITE_PATH = path.resolve(args[i + 1]);
  }
}

const PATTERNS_DIR = path.join(__dirname, '../src/_patterns');
const PRODUCT_DIRECTORY_REPO = 'department-of-veterans-affairs/product-directory';
const VETS_WEBSITE_REPO = 'department-of-veterans-affairs/vets-website';
const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const JEKYLL_DATA_DIR = path.join(__dirname, '../src/_data/metrics');

/**
 * Parse pattern metadata from markdown file
 * @param {string} filename - Name of the pattern file
 * @param {string} content - Content of the markdown file
 * @returns {Object} Pattern metadata including code-link information
 */
function parsePatternMetadata(filename, content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    return {
      filename,
      hasCodeLink: false,
      codeFile: null,
      title: null,
      permalink: null
    };
  }

  const frontmatter = frontmatterMatch[1];
  const lines = frontmatter.split('\n');

  let title = null;
  let permalink = null;
  let codeLink = null;

  lines.forEach(line => {
    const titleMatch = line.match(/^title:\s*(.+)$/);
    if (titleMatch) {
      title = titleMatch[1].replace(/^["']|["']$/g, '').trim();
    }

    const permalinkMatch = line.match(/^permalink:\s*(.+)$/);
    if (permalinkMatch) {
      permalink = permalinkMatch[1].trim();
    }

    const codeLinkMatch = line.match(/^code-link:\s*(.+)$/);
    if (codeLinkMatch) {
      codeLink = codeLinkMatch[1].trim();
    }
  });

  // Extract file path from GitHub URL
  let codeFile = null;
  if (codeLink) {
    // Validate that code-link is a GitHub URL
    if (!codeLink.startsWith('https://github.com/')) {
      console.warn(`⚠️  Invalid code-link URL in ${filename}: ${codeLink}`);
      return {
        filename,
        title,
        permalink,
        hasCodeLink: false,
        codeLink: codeLink,
        codeFile: null
      };
    }

    // Extract path after /blob/main/ or /blob/master/
    const pathMatch = codeLink.match(/\/blob\/(?:main|master)\/(.*)/);
    if (!pathMatch) {
      console.warn(`⚠️  Could not extract file path from code-link in ${filename}: ${codeLink}`);
      return {
        filename,
        title,
        permalink,
        hasCodeLink: true,
        codeLink,
        codeFile: null
      };
    }
    codeFile = pathMatch[1];
  }

  return {
    filename,
    hasCodeLink: !!codeLink,
    codeFile,
    codeLink,
    title,
    permalink
  };
}

/**
 * Recursively find all pattern markdown files
 */
async function findPatternFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip HTML directories and other non-pattern dirs
      if (entry.name !== 'html') {
        files.push(...await findPatternFiles(fullPath));
      }
    } else if (entry.isFile() && entry.name.endsWith('.md') &&
               entry.name !== 'index.md' &&
               entry.name !== 'template.md' &&
               entry.name !== 'intentional-omissions.md' &&
               entry.name !== 'wizards.md') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Get all patterns with their metadata
 */
async function getAllPatterns() {
  console.log('Discovering patterns...');

  // Check that patterns directory exists
  try {
    await fs.access(PATTERNS_DIR);
  } catch (error) {
    throw new Error(`Patterns directory not found: ${PATTERNS_DIR}`);
  }

  const patternFiles = await findPatternFiles(PATTERNS_DIR);
  const patterns = [];

  for (const filePath of patternFiles) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const relativePath = path.relative(PATTERNS_DIR, filePath);
      const metadata = parsePatternMetadata(relativePath, content);
      patterns.push(metadata);
    } catch (error) {
      console.warn(`⚠️  Could not read ${path.relative(PATTERNS_DIR, filePath)}: ${error.message}`);
      continue;
    }
  }

  console.log(`Found ${patterns.length} patterns`);
  const withCodeLinks = patterns.filter(p => p.hasCodeLink).length;
  console.log(`${withCodeLinks} patterns have code-link defined`);

  return patterns;
}

/**
 * Fetch product directory JSON from GitHub
 */
async function fetchProductDirectory() {
  console.log('Fetching product directory...');

  try {
    const output = execSync(
      `gh api repos/${PRODUCT_DIRECTORY_REPO}/contents/product-directory.json --jq '.content'`,
      { encoding: 'utf8', timeout: 30000 }
    );

    // Decode base64 content
    const jsonContent = Buffer.from(output.trim(), 'base64').toString('utf8');
    return JSON.parse(jsonContent);
  } catch (error) {
    console.error('Failed to fetch product directory:', error.message);
    throw error;
  }
}

/**
 * Filter products to only include forms
 */
async function getFormProducts() {
  const products = await fetchProductDirectory();

  if (!Array.isArray(products)) {
    throw new Error('Product directory did not return an array');
  }

  const forms = products.filter(product =>
    product.analytics_category === 'Forms' ||
    product.platform_console_category === 'Forms'
  );

  console.log(`Found ${forms.length} form products in product directory`);

  return forms.map(form => ({
    product_id: form.product_id,
    product_name: form.product_name,
    path_to_code: form.path_to_code,
    analytics_category: form.analytics_category,
    github_product_label: form.github_product_label
  }));
}

// Pattern export mapping - maps pattern filenames to their exported names
// This helps identify which forms use which patterns
const PATTERN_EXPORT_MAPPING = {
  'ssnPattern.jsx': ['ssn', 'vaFileNumber', 'serviceNumber', 'ssnOrVaFileNumber', 'ssnOrServiceNumber'],
  'emailPattern.jsx': ['email'],
  'phonePatterns.jsx': ['phone', 'Phone'], // note: some use capitalized
  'fullNamePattern.js': ['fullName'],
  'datePatterns.jsx': ['date', 'currentOrPastDate', 'currentOrFutureDate', 'monthYear'],
  'addressPattern.jsx': ['address', 'Address'],
  'relationshipToVeteranPattern.jsx': ['relationshipToVeteran'],
  'FormSignature.jsx': ['FormSignature'],
};

/**
 * Recursively find all .js/.jsx files in a directory
 */
async function findJSFiles(dir, baseDir = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return findJSFiles(fullPath, baseDir);
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) {
      return path.relative(baseDir, fullPath);
    }
    return null;
  }));
  return files.flat().filter(Boolean);
}

/**
 * Find applications using the Signature pattern (FormSignature.jsx)
 *
 * This pattern is special because forms don't import it - they use
 * declarative config with `statementOfTruth:` in preSubmitInfo.
 */
async function findSignaturePattern() {
  console.log(`  Looking for statementOfTruth configuration in form configs...`);

  if (VETS_WEBSITE_PATH) {
    // Use local filesystem
    console.log(`  Using local vets-website at: ${VETS_WEBSITE_PATH}`);
    const applicationsDir = path.join(VETS_WEBSITE_PATH, 'src/applications');

    try {
      await fs.access(applicationsDir);
    } catch {
      console.warn(`  ⚠️  Directory not found: ${applicationsDir}`);
      return [];
    }

    // Find all config/form.js files
    const allFiles = await findJSFiles(applicationsDir);
    const configFiles = allFiles.filter(p =>
      p.endsWith('/config/form.js') || p.endsWith('/config/form.jsx')
    );

    console.log(`  Found ${configFiles.length} form config files`);

    const appPaths = new Set();
    let checked = 0;
    let found = 0;

    for (const filePath of configFiles) {
      try {
        checked++;
        const fullPath = path.join(applicationsDir, filePath);
        const content = await fs.readFile(fullPath, 'utf8');

        // Look for statementOfTruth configuration
        if (content.includes('statementOfTruth')) {
          found++;
          // Extract app name from path (handle optional leading slash)
          const match = filePath.match(/^\/?([^\/]+)/);
          if (match && match[1]) {
            appPaths.add(match[1]);
          }
        }
      } catch (error) {
        // Skip files we can't read
        if (!error.message.includes('ENOENT')) {
          console.warn(`⚠️  Could not read ${filePath}: ${error.message}`);
        }
      }
    }

    const apps = Array.from(appPaths);
    console.log(`  ✓ Found ${apps.length} apps using this pattern (checked ${checked} files, ${found} matches)`);
    return apps;

  } else {
    // GitHub API mode - not implemented for this special case
    console.warn(`  ⚠️  Signature pattern detection via GitHub API not yet implemented`);
    console.warn(`  ⚠️  Please use --vets-website-path for accurate Signature pattern detection`);
    return [];
  }
}

/**
 * Find which applications import a specific file from vets-website
 * Two-step approach:
 * 1. Find all files that import from web-component-patterns directory
 * 2. Check which ones use exports from this specific pattern
 *
 * Special case: FormSignature.jsx uses declarative config (statementOfTruth)
 * rather than imports, so it requires different detection logic.
 */
async function findImporters(patternCodeFile) {
  console.log(`Analyzing imports for ${patternCodeFile}...`);

  // Validate input
  if (!patternCodeFile || typeof patternCodeFile !== 'string') {
    console.warn('Invalid pattern code file:', patternCodeFile);
    return [];
  }

  try {
    const filename = path.basename(patternCodeFile);

    // Special case: FormSignature pattern uses declarative config
    if (filename === 'FormSignature.jsx') {
      return await findSignaturePattern();
    }

    // Get the export names for this pattern
    const exportNames = PATTERN_EXPORT_MAPPING[filename];
    if (!exportNames || exportNames.length === 0) {
      console.warn(`⚠️  No export mapping defined for ${filename}`);
      return [];
    }

    console.log(`  Looking for exports: ${exportNames.join(', ')}`);

    let filePaths;

    if (VETS_WEBSITE_PATH) {
      // Use local filesystem
      console.log(`  Using local vets-website at: ${VETS_WEBSITE_PATH}`);
      const applicationsDir = path.join(VETS_WEBSITE_PATH, 'src/applications');

      try {
        await fs.access(applicationsDir);
      } catch {
        console.warn(`  ⚠️  Directory not found: ${applicationsDir}`);
        return [];
      }

      // Find all .js/.jsx files
      const allFiles = await findJSFiles(applicationsDir);

      // Filter to config and pages files
      filePaths = allFiles.filter(p =>
        p.includes('/pages/') || p.includes('/config/')
      );

      console.log(`  Found ${filePaths.length} config/page files`);
    } else {
      // Use GitHub API
      console.log(`  Using GitHub API for ${VETS_WEBSITE_REPO}`);

      const repoInfo = execSync(
        `gh api repos/${VETS_WEBSITE_REPO} --jq '.default_branch'`,
        { encoding: 'utf8', timeout: 10000 }
      ).trim();

      const treeOutput = execSync(
        `gh api repos/${VETS_WEBSITE_REPO}/git/trees/${repoInfo}?recursive=1 --jq '.tree[] | select(.path | startswith("src/applications/")) | select(.path | endswith(".js") or endswith(".jsx")) | select(.path | contains("/pages/") or contains("/config/")) | .path'`,
        {
          encoding: 'utf8',
          maxBuffer: 20 * 1024 * 1024,
          timeout: 60000
        }
      );

      if (!treeOutput.trim()) {
        console.log(`  No files found in src/applications`);
        return [];
      }

      filePaths = treeOutput.trim().split('\n').filter(p => p.trim());
      console.log(`  Found ${filePaths.length} config/page files`);
    }

    const appPaths = new Set();
    let checked = 0;
    let found = 0;

    for (const filePath of filePaths) {
      try {
        checked++;
        if (checked % 100 === 0) {
          console.log(`    Progress: ${checked}/${filePaths.length} files checked, ${found} matches found`);
        }

        let content;

        if (VETS_WEBSITE_PATH) {
          // Read from local filesystem
          const fullPath = path.join(VETS_WEBSITE_PATH, 'src/applications', filePath);
          content = await fs.readFile(fullPath, 'utf8');
        } else {
          // Fetch from GitHub API
          const fileContent = execSync(
            `gh api repos/${VETS_WEBSITE_REPO}/contents/src/applications/${filePath} --jq '.content'`,
            { encoding: 'utf8', timeout: 10000, stdio: ['pipe', 'pipe', 'ignore'] }
          );
          content = Buffer.from(fileContent.trim(), 'base64').toString('utf8');
        }

        // First check if it imports from web-component-patterns
        if (!content.includes('web-component-patterns')) {
          continue;
        }

        // Check if this file uses any of this pattern's exports
        const usesPattern = exportNames.some(exportName => {
          // Match export name with any combination of suffixes
          // e.g., ssnOrVaFileNumber, ssnOrVaFileNumberUI, ssnOrVaFileNumberNoHintUI, etc.
          const regex = new RegExp(`\\b${exportName}(NoHint)?(UI|Schema|Pattern)?\\b`, 'i');
          return regex.test(content);
        });

        if (usesPattern) {
          found++;
          // Extract app name from path (handle optional leading slash)
          const match = filePath.match(/^\/?([^\/]+)/);
          if (match && match[1]) {
            appPaths.add(match[1]);
          }
        }
      } catch (error) {
        // Skip files we can't read
        if (!error.message.includes('404') && !error.message.includes('ENOENT')) {
          console.warn(`⚠️  Could not read ${filePath}: ${error.message}`);
        }
      }
    }

    const apps = Array.from(appPaths);
    console.log(`  ✓ Found ${apps.length} apps using this pattern (checked ${checked} files)`);
    return apps;

  } catch (error) {
    console.warn(`Could not analyze imports for ${patternCodeFile}: ${error.message}`);
    return [];
  }
}

/**
 * Build mapping of patterns to forms that use them
 * @returns {Promise<Object>} Object containing:
 *   - generated_at: ISO timestamp
 *   - total_patterns: Number of codified patterns analyzed
 *   - total_forms: Total number of forms in product directory
 *   - patterns: Array of pattern adherence data
 *   - forms: Array of all form products
 */
async function buildPatternAdherence() {
  const patterns = await getAllPatterns();
  const forms = await getFormProducts();

  // Only process patterns with code-link
  const codifiedPatterns = patterns.filter(p => p.hasCodeLink);

  console.log(`\nAnalyzing adherence for ${codifiedPatterns.length} codified patterns...`);

  // Process all patterns in parallel
  const adherenceDataPromises = codifiedPatterns.map(async (pattern) => {
    console.log(`\nProcessing: ${pattern.title}`);

    // Find applications that import this pattern
    const importingApps = pattern.codeFile
      ? await findImporters(pattern.codeFile)
      : [];

    // Cross-reference with form products
    const matchingForms = forms.filter(form => {
      if (!form.path_to_code) return false;

      // Extract app name from path_to_code
      // Handle both "src/applications/app" and "/src/applications/app" formats
      const appName = form.path_to_code.replace(/^\/?src\/applications\//, '').split('/')[0];
      return importingApps.includes(appName);
    });

    console.log(`  ✓ ${matchingForms.length} forms use this pattern`);

    return {
      pattern_name: pattern.title,
      pattern_file: pattern.filename,
      pattern_permalink: pattern.permalink,
      code_file: pattern.codeFile,
      forms_using_pattern: matchingForms.map(f => ({
        product_name: f.product_name,
        path_to_code: f.path_to_code,
        github_label: f.github_product_label
      })),
      usage_count: matchingForms.length,
      total_forms: forms.length,
      compliance_percentage: forms.length > 0
        ? Math.round((matchingForms.length / forms.length) * 100)
        : 0
    };
  });

  const adherenceData = await Promise.all(adherenceDataPromises);

  return {
    generated_at: new Date().toISOString(),
    total_patterns: codifiedPatterns.length,
    total_forms: forms.length,
    patterns: adherenceData,
    forms: forms
  };
}

/**
 * Save adherence data as JSON
 */
async function saveAdherenceData(data) {
  // Ensure output directories exist
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(JEKYLL_DATA_DIR, { recursive: true });

  const outputFile = path.join(OUTPUT_DIR, 'pattern-adherence.json');
  const jekyllFile = path.join(JEKYLL_DATA_DIR, 'pattern-adherence.json');

  const jsonContent = JSON.stringify(data, null, 2);

  await fs.writeFile(outputFile, jsonContent, 'utf8');
  await fs.writeFile(jekyllFile, jsonContent, 'utf8');

  console.log(`\n✅ Saved pattern adherence data to:`);
  console.log(`   ${outputFile}`);
  console.log(`   ${jekyllFile}`);
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(data) {
  const lines = [];

  lines.push('# Pattern Adherence Report');
  lines.push('');
  lines.push(`Generated: ${new Date(data.generated_at).toLocaleString()}`);
  lines.push('');

  // Summary section
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total Patterns Analyzed:** ${data.total_patterns}`);
  lines.push(`- **Total Forms:** ${data.total_forms}`);
  lines.push('');

  // Sort patterns by usage count (descending)
  const sortedPatterns = [...data.patterns].sort((a, b) => b.usage_count - a.usage_count);

  lines.push('## Pattern Compliance Summary');
  lines.push('');
  lines.push('| Pattern | Forms Using | Compliance % |');
  lines.push('|---------|-------------|--------------|');

  sortedPatterns.forEach(pattern => {
    lines.push(`| ${pattern.pattern_name} | ${pattern.usage_count}/${pattern.total_forms} | ${pattern.compliance_percentage}% |`);
  });

  lines.push('');

  // Detailed section
  lines.push('## Detailed Pattern Usage');
  lines.push('');

  sortedPatterns.forEach(pattern => {
    lines.push(`### ${pattern.pattern_name}`);
    lines.push('');
    lines.push(`**Code:** [\`${pattern.code_file}\`](${pattern.pattern_permalink || '#'})`);
    lines.push('');
    lines.push(`**Usage:** ${pattern.usage_count} forms (${pattern.compliance_percentage}%)`);
    lines.push('');

    if (pattern.forms_using_pattern.length > 0) {
      lines.push('**Forms using this pattern:**');
      lines.push('');
      pattern.forms_using_pattern.forEach(form => {
        lines.push(`- ${form.product_name}`);
      });
      lines.push('');
    } else {
      lines.push('*No forms currently use this pattern*');
      lines.push('');
    }
  });

  // Forms matrix
  lines.push('## Forms × Patterns Matrix');
  lines.push('');

  // Build lookup map for O(1) form-pattern checks
  const formPatternMap = new Map();
  data.patterns.forEach(pattern => {
    pattern.forms_using_pattern.forEach(form => {
      const key = `${form.product_name}|${pattern.pattern_name}`;
      formPatternMap.set(key, true);
    });
  });

  // Create matrix header
  const patternNames = sortedPatterns.map(p => p.pattern_name);
  lines.push('| Form | ' + patternNames.join(' | ') + ' |');
  lines.push('|------|' + patternNames.map(() => '---').join('|') + '|');

  // Create matrix rows
  data.forms.forEach(form => {
    const row = [form.product_name];

    patternNames.forEach(patternName => {
      const usesPattern = formPatternMap.has(`${form.product_name}|${patternName}`);
      row.push(usesPattern ? '✅' : '');
    });

    lines.push('| ' + row.join(' | ') + ' |');
  });

  return lines.join('\n');
}

/**
 * Save markdown report
 */
async function saveMarkdownReport(data) {
  const reportContent = generateMarkdownReport(data);
  const reportFile = path.join(OUTPUT_DIR, 'pattern-adherence-report.md');

  await fs.writeFile(reportFile, reportContent, 'utf8');

  console.log(`✅ Saved markdown report to: ${reportFile}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('=== VA.gov Pattern Adherence Analysis ===\n');

  if (VETS_WEBSITE_PATH) {
    console.log(`Using local vets-website repository: ${VETS_WEBSITE_PATH}\n`);
  } else {
    console.log(`Using GitHub API for vets-website analysis\n`);
  }

  try {
    const data = await buildPatternAdherence();

    await saveAdherenceData(data);
    await saveMarkdownReport(data);

    console.log('\n✅ Pattern adherence analysis complete!');

    // Print summary
    console.log('\n=== SUMMARY ===');
    console.log(`Analyzed ${data.total_patterns} patterns across ${data.total_forms} forms`);
    console.log('\nTop patterns by usage:');

    const top5 = [...data.patterns]
      .sort((a, b) => b.usage_count - a.usage_count)
      .slice(0, 5);

    top5.forEach((pattern, i) => {
      console.log(`  ${i + 1}. ${pattern.pattern_name}: ${pattern.usage_count} forms (${pattern.compliance_percentage}%)`);
    });

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  parsePatternMetadata,
  parseFrontmatter: parsePatternMetadata, // Alias for consistency
  getAllPatterns,
  findPatternFiles,
  fetchProductDirectory,
  getFormProducts,
  findImporters,
  buildPatternAdherence,
  generateMarkdownReport,
  saveMarkdownReport,
  saveAdherenceData,
  main
};
