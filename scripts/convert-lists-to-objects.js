#!/usr/bin/env node

/**
 * Converts simple string arrays in frontmatter to object arrays with 'value' property
 * Uses proper YAML parsing to handle quotes and special characters correctly
 */

const fs = require('fs');
const path = require('path');
const yaml = require('../../../node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml');

const COMPONENTS_DIR = path.join(__dirname, '../docs/components');

// Fields to convert at top level
const TOP_LEVEL_FIELDS = ['accessibility', 'content_considerations'];

// Nested fields under 'usage' object
const USAGE_FIELDS = ['when_to_use', 'when_to_consider_else', 'behavior'];

function findMdxFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

function convertArrayToObjects(arr) {
  if (!Array.isArray(arr)) return arr;

  return arr.map(item => {
    // If already an object with 'value' property, keep it
    if (typeof item === 'object' && item !== null && 'value' in item) {
      return item;
    }
    // Convert string to object with value property
    if (typeof item === 'string') {
      return { value: item };
    }
    // Keep other types as-is
    return item;
  });
}

function convertFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Split frontmatter and body
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { modified: false };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  let data;
  try {
    data = yaml.load(frontmatterStr);
  } catch (e) {
    console.log(`  Warning: Could not parse YAML in ${filePath}: ${e.message}`);
    return { modified: false };
  }

  if (!data) {
    return { modified: false };
  }

  let modified = false;

  // Convert top-level fields
  for (const field of TOP_LEVEL_FIELDS) {
    if (data[field] && Array.isArray(data[field])) {
      const converted = convertArrayToObjects(data[field]);
      // Check if any actual conversion happened
      if (JSON.stringify(converted) !== JSON.stringify(data[field])) {
        data[field] = converted;
        modified = true;
      }
    }
  }

  // Convert nested usage fields
  if (data.usage && typeof data.usage === 'object') {
    for (const field of USAGE_FIELDS) {
      if (data.usage[field] && Array.isArray(data.usage[field])) {
        const converted = convertArrayToObjects(data.usage[field]);
        if (JSON.stringify(converted) !== JSON.stringify(data.usage[field])) {
          data.usage[field] = converted;
          modified = true;
        }
      }
    }
  }

  if (modified) {
    // Convert back to YAML with proper formatting
    const newFrontmatter = yaml.dump(data, {
      lineWidth: -1,  // Don't wrap lines
      noRefs: true,   // Don't use anchors/aliases
      quotingType: '"',
      forceQuotes: false,
      indent: 2,
      noCompatMode: true
    });

    const newContent = `---\n${newFrontmatter}---\n${body}`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    return { modified: true };
  }

  return { modified: false };
}

// Main execution
console.log('Converting list fields to object format...\n');

const files = findMdxFiles(COMPONENTS_DIR);
let convertedCount = 0;

for (const file of files) {
  const relativePath = path.relative(COMPONENTS_DIR, file);
  const result = convertFile(file);
  if (result.modified) {
    console.log(`✓ Converted: ${relativePath}`);
    convertedCount++;
  }
}

console.log(`\nDone! Converted ${convertedCount} files.`);
