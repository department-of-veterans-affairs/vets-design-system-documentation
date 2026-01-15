#!/usr/bin/env node

/**
 * Script to add dynamic TOC generation to all component pages.
 * Adds the import and toc export after the frontmatter.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DOCS_DIR = path.join(__dirname, '..', 'docs', 'components');

// Find all component MDX files that use ComponentPage
const files = execSync(
  `find "${DOCS_DIR}" -name "index.mdx" -exec grep -l "ComponentPage" {} \\;`,
  { encoding: 'utf-8' }
).trim().split('\n').filter(Boolean);

console.log(`Found ${files.length} component pages to update.\n`);

const importLine = `import { generateComponentToc } from '@site/src/utils/generateComponentToc';`;
const tocExport = `export const toc = generateComponentToc(frontMatter);`;

let updated = 0;
let skipped = 0;

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has the import
  if (content.includes('generateComponentToc')) {
    console.log(`⏭️  Skipping (already has TOC): ${path.relative(DOCS_DIR, filePath)}`);
    skipped++;
    return;
  }

  // Find the end of frontmatter (second ---)
  const frontmatterEndMatch = content.match(/^---\n[\s\S]*?\n---/);
  if (!frontmatterEndMatch) {
    console.log(`⚠️  Skipping (no frontmatter found): ${path.relative(DOCS_DIR, filePath)}`);
    skipped++;
    return;
  }

  const frontmatterEnd = frontmatterEndMatch[0].length;
  const beforeContent = content.slice(0, frontmatterEnd);
  const afterContent = content.slice(frontmatterEnd);

  // Build the new content
  const newContent = `${beforeContent}

${importLine}

${tocExport}
${afterContent.replace(/^\n+/, '\n')}`;

  fs.writeFileSync(filePath, newContent);
  console.log(`✅ Updated: ${path.relative(DOCS_DIR, filePath)}`);
  updated++;
});

console.log(`\n✨ Done! Updated ${updated} files, skipped ${skipped} files.`);
