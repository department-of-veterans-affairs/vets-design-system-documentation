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
      { encoding: 'utf8' }
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
  getFormProducts
};
