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
 * Usage: node scripts/collect-pattern-adherence.js
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const PATTERNS_DIR = path.join(__dirname, '../src/_patterns');
const PRODUCT_DIRECTORY_REPO = 'department-of-veterans-affairs/product-directory';
const VETS_WEBSITE_REPO = 'department-of-veterans-affairs/vets-website';

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

/**
 * Find which applications import a specific file from vets-website
 * Returns array of application paths that import the file
 */
async function findImporters(patternCodeFile) {
  console.log(`Analyzing imports for ${patternCodeFile}...`);

  // Validate input
  if (!patternCodeFile || typeof patternCodeFile !== 'string') {
    console.warn('Invalid pattern code file:', patternCodeFile);
    return [];
  }

  try {
    // Extract just the filename for searching (without extension)
    const filename = path.basename(patternCodeFile);
    const filenameWithoutExt = path.parse(filename).name;

    // Search vets-website for references to this filename
    // GitHub code search looks for the filename in the content
    const searchQuery = `repo:${VETS_WEBSITE_REPO} "${filenameWithoutExt}"`;

    // CRITICAL: Properly escape single quotes to prevent command injection
    const escapedQuery = searchQuery.replace(/'/g, "'\\''");

    const output = execSync(
      `gh api search/code --method GET -f q='${escapedQuery}' --paginate --jq '.items[] | select(.path | test("src/applications")) | {path: .path}'`,
      {
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
        stdio: ['pipe', 'pipe', 'ignore'], // Suppress stderr warnings
        timeout: 60000 // 60 second timeout to prevent hanging
      }
    );

    if (!output.trim()) {
      return [];
    }

    // Parse JSONL output
    const lines = output.trim().split('\n').filter(line => line.trim());
    const results = lines.map(line => {
      try {
        return JSON.parse(line);
      } catch (e) {
        console.warn(`⚠️  Failed to parse search result: ${e.message}`);
        return null;
      }
    }).filter(Boolean); // Remove nulls

    // Extract application paths from file paths
    // Format: src/applications/{app-name}/...
    const appPaths = new Set();

    results.forEach(result => {
      const match = result.path.match(/src\/applications\/([^\/]+)/);
      if (match) {
        appPaths.add(match[1]);
      }
    });

    return Array.from(appPaths);
  } catch (error) {
    // GitHub code search may fail due to rate limits or missing results
    console.warn(`Could not analyze imports for ${patternCodeFile}: ${error.message}`);
    return [];
  }
}

/**
 * Build mapping of patterns to forms that use them
 */
async function buildPatternAdherence() {
  const patterns = await getAllPatterns();
  const forms = await getFormProducts();

  // Only process patterns with code-link
  const codifiedPatterns = patterns.filter(p => p.hasCodeLink);

  console.log(`\nAnalyzing adherence for ${codifiedPatterns.length} codified patterns...`);

  const adherenceData = [];

  for (const pattern of codifiedPatterns) {
    console.log(`\nProcessing: ${pattern.title}`);

    // Find applications that import this pattern
    const importingApps = await findImporters(pattern.codeFile);

    // Cross-reference with form products
    const matchingForms = forms.filter(form => {
      if (!form.path_to_code) return false;

      // Extract app name from path_to_code (e.g., "src/applications/caregivers" -> "caregivers")
      const appName = form.path_to_code.replace(/^src\/applications\//, '').split('/')[0];
      return importingApps.includes(appName);
    });

    adherenceData.push({
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
      compliance_percentage: Math.round((matchingForms.length / forms.length) * 100)
    });

    console.log(`  ✓ ${matchingForms.length} forms use this pattern`);
  }

  return {
    generated_at: new Date().toISOString(),
    total_patterns: codifiedPatterns.length,
    total_forms: forms.length,
    patterns: adherenceData,
    forms: forms
  };
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Starting pattern adherence collection...');

    const patterns = await getAllPatterns();

    const patternsWithCodeLinks = patterns.filter(p => p.hasCodeLink);
    const patternsWithoutCodeLinks = patterns.filter(p => !p.hasCodeLink);

    console.log(`\n📊 Pattern Analysis:`);
    console.log(`   - Total patterns: ${patterns.length}`);
    console.log(`   - Patterns with code-link: ${patternsWithCodeLinks.length}`);
    console.log(`   - Patterns without code-link: ${patternsWithoutCodeLinks.length}`);

    if (patternsWithCodeLinks.length > 0) {
      console.log(`\n✅ Patterns with code links:`);
      patternsWithCodeLinks.forEach(p => {
        console.log(`   - ${p.title || p.filename}: ${p.codeFile}`);
      });
    }

    if (patternsWithoutCodeLinks.length > 0) {
      console.log(`\n⚠️  Patterns without code links:`);
      patternsWithoutCodeLinks.forEach(p => {
        console.log(`   - ${p.title || p.filename}`);
      });
    }

  } catch (error) {
    console.error('❌ Error collecting pattern adherence data:', error.message);
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
  buildPatternAdherence
};
