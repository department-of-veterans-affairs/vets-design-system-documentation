#!/usr/bin/env node

/**
 * Adds cms_editable: true to component index files (not checklists)
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../docs/components');

function findComponentIndexFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findComponentIndexFiles(fullPath));
    } else if (entry.name.endsWith('.mdx') && !entry.name.includes('checklist')) {
      files.push(fullPath);
    }
  }

  return files;
}

function addCmsEditable(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if already has cms_editable
  if (content.includes('cms_editable:')) {
    return false;
  }

  // Add cms_editable: true after the opening ---
  const newContent = content.replace(/^---\n/, '---\ncms_editable: true\n');

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }

  return false;
}

// Main execution
console.log('Adding cms_editable: true to component files...\n');

const files = findComponentIndexFiles(COMPONENTS_DIR);
let modifiedCount = 0;

for (const file of files) {
  const relativePath = path.relative(COMPONENTS_DIR, file);
  if (addCmsEditable(file)) {
    console.log(`✓ Modified: ${relativePath}`);
    modifiedCount++;
  }
}

console.log(`\nDone! Modified ${modifiedCount} files.`);
