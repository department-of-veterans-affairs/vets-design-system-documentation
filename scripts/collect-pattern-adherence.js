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
 * Read and parse all pattern files from the patterns directory
 * @returns {Promise<Array>} Array of pattern metadata objects
 */
async function collectPatternMetadata() {
  console.log('Collecting pattern metadata from markdown files...');

  // Check that patterns directory exists
  try {
    await fs.access(PATTERNS_DIR);
  } catch (error) {
    throw new Error(`Patterns directory not found: ${PATTERNS_DIR}`);
  }

  const patterns = [];

  async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        // Skip template and index files
        if (entry.name === 'template.md' || entry.name === 'index.md') {
          continue;
        }

        try {
          const content = await fs.readFile(fullPath, 'utf8');
          const metadata = parsePatternMetadata(entry.name, content);
          patterns.push(metadata);
        } catch (error) {
          console.warn(`⚠️  Could not read ${path.relative(PATTERNS_DIR, fullPath)}: ${error.message}`);
          continue;
        }
      }
    }
  }

  await processDirectory(PATTERNS_DIR);

  return patterns;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Starting pattern adherence collection...');

    const patterns = await collectPatternMetadata();

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
  collectPatternMetadata
};
