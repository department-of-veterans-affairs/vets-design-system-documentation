#!/usr/bin/env node

/**
 * Adds toc export to component MDX files for Docusaurus right-side navigation
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../docs/components');

const TOC_EXPORT = `export const toc = [
  frontMatter.variations?.length > 0 && { value: 'Variations', id: 'variations', level: 2 },
  frontMatter.related?.length > 0 && { value: 'Related components', id: 'related-components', level: 2 },
  frontMatter.examples?.length > 0 && { value: 'Examples', id: 'examples', level: 2 },
  frontMatter.usage && { value: 'Usage', id: 'usage', level: 2 },
  frontMatter.usage?.when_to_use?.length > 0 && { value: 'When to use', id: 'when-to-use', level: 3 },
  frontMatter.usage?.when_to_consider_else?.length > 0 && { value: 'When to consider something else', id: 'when-to-consider-something-else', level: 3 },
  frontMatter.usage?.behavior?.length > 0 && { value: 'Behavior', id: 'behavior', level: 3 },
  frontMatter.code_usage && { value: 'Code usage', id: 'code-usage', level: 2 },
  frontMatter.content_considerations?.length > 0 && { value: 'Content considerations', id: 'content-considerations', level: 2 },
  frontMatter.accessibility?.length > 0 && { value: 'Accessibility considerations', id: 'accessibility-considerations', level: 2 },
].filter(Boolean);`;

function findComponentFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findComponentFiles(fullPath));
    } else if (entry.name.endsWith('.mdx') && !entry.name.includes('checklist')) {
      files.push(fullPath);
    }
  }

  return files;
}

function addTocExport(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if already has toc export
  if (content.includes('export const toc')) {
    return false;
  }

  // Check if this is a component file with ComponentPage
  if (!content.includes('<ComponentPage')) {
    return false;
  }

  // Insert toc export before <ComponentPage
  const newContent = content.replace(
    '<ComponentPage frontMatter={frontMatter} />',
    `${TOC_EXPORT}\n\n<ComponentPage frontMatter={frontMatter} />`
  );

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }

  return false;
}

// Main execution
console.log('Adding toc export to component MDX files...\n');

const files = findComponentFiles(COMPONENTS_DIR);
let modifiedCount = 0;

for (const file of files) {
  const relativePath = path.relative(COMPONENTS_DIR, file);
  if (addTocExport(file)) {
    console.log(`✓ Modified: ${relativePath}`);
    modifiedCount++;
  }
}

console.log(`\nDone! Modified ${modifiedCount} files.`);
