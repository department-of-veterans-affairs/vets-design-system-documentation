#!/usr/bin/env node
/**
 * Cleanup script to remove extracted sections from MDX body.
 * Run this after extract-content.js to remove duplicated content.
 */

const fs = require('fs');
const path = require('path');

/**
 * Parse YAML frontmatter
 */
function parseFrontmatter(content) {
  const fmRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(fmRegex);

  if (!match) return { hasFm: false, fmContent: '', body: content };

  return {
    hasFm: true,
    fmContent: match[1],
    fmFull: match[0],
    body: content.substring(match[0].length).trim()
  };
}

/**
 * Check if frontmatter has a field
 */
function hasField(fmContent, field) {
  const regex = new RegExp(`^${field}:`, 'm');
  return regex.test(fmContent);
}

/**
 * Remove a section from body content
 */
function removeSection(body, sectionName) {
  // Match ## Section Name followed by content until next ## or ---
  const regex = new RegExp(
    `\\n##\\s+${sectionName}\\s*\\n\\n[\\s\\S]*?(?=\\n##\\s|\\n---|$)`,
    'i'
  );
  return body.replace(regex, '');
}

/**
 * Remove simple bullet list content from Usage section, keeping complex content
 */
function cleanUsageSection(body) {
  // Find the Usage section
  const usageMatch = body.match(/(##\s+Usage\s*\n\n)([\s\S]*?)(?=\n##\s[^#]|\n---|$)/i);
  if (!usageMatch) return body;

  let usageContent = usageMatch[2];
  const usageStart = usageMatch[1];

  // Remove ### When to use subsection if it's just bullets
  usageContent = usageContent.replace(
    /###\s+When to use\s*\n\n(?:-[^\n]+\n?)+\n*/gi,
    ''
  );

  // Remove ### When to consider something else subsection if it's just bullets
  usageContent = usageContent.replace(
    /###\s+When to consider something else\s*\n\n(?:-[^\n]+\n?)+\n*/gi,
    ''
  );

  // Remove ### Behavior subsection if it's just bullets
  usageContent = usageContent.replace(
    /###\s+Behavior\s*\n\n(?:-[^\n]+\n?)+\n*/gi,
    ''
  );

  // Remove ### Placement subsection if it's just bullets (not extracted but often simple)
  // Keep this one for now as it wasn't extracted

  // If Usage section is now empty (just whitespace), remove the whole section
  if (usageContent.trim() === '') {
    return body.replace(usageMatch[0], '');
  }

  // Otherwise, reconstruct with remaining content
  return body.replace(usageMatch[0], usageStart + usageContent.trim() + '\n\n');
}

/**
 * Remove Content considerations section if it was extracted (simple bullets only)
 */
function cleanContentConsiderations(body, fmContent) {
  if (!hasField(fmContent, 'content_considerations')) return body;

  // Only remove if it doesn't contain complex content
  const match = body.match(/##\s+Content considerations\s*\n\n([\s\S]*?)(?=\n##\s[^#]|\n---|$)/i);
  if (!match) return body;

  const content = match[1];

  // If it contains DosDonts or other complex elements, keep it
  if (content.includes('<DosDonts>') || content.includes('<')) return body;

  // Remove the section
  return body.replace(match[0], '');
}

/**
 * Remove Accessibility considerations section if it was extracted (simple bullets only)
 */
function cleanAccessibility(body, fmContent) {
  if (!hasField(fmContent, 'accessibility')) return body;

  // Only remove if it doesn't contain complex content
  const match = body.match(/##\s+Accessibility considerations\s*\n\n([\s\S]*?)(?=\n##\s[^#]|\n---|$)/i);
  if (!match) return body;

  const content = match[1];

  // If it contains complex elements, keep it
  if (content.includes('<') || content.includes('```mermaid')) return body;

  // Remove the section
  return body.replace(match[0], '');
}

/**
 * Remove Related components section if it was extracted
 */
function cleanRelated(body, fmContent) {
  if (!hasField(fmContent, 'related')) return body;

  // Remove ## Related components section (usually just a list of links)
  // But be careful - some have this section twice (at top and bottom)
  // Only remove the first occurrence
  const match = body.match(/\n##\s+Related components\s*\n\n(?:-[^\n]+\n?)+\n*---/i);
  if (match) {
    return body.replace(match[0], '\n---');
  }

  return body;
}

/**
 * Clean up excessive blank lines
 */
function cleanBlankLines(body) {
  return body
    .replace(/\n{4,}/g, '\n\n\n')  // Max 2 blank lines
    .replace(/---\n\n\n+---/g, '---\n\n---')  // Clean between dividers
    .replace(/\n\n\n+---/g, '\n\n---')  // Clean before dividers
    .trim();
}

/**
 * Process a single file
 */
function processFile(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check if it has ComponentPage
  if (!content.includes('<ComponentPage frontMatter={frontMatter}>')) {
    console.log('  Not a ComponentPage file, skipping.');
    return false;
  }

  const { hasFm, fmContent, fmFull, body } = parseFrontmatter(content);
  if (!hasFm) {
    console.log('  No frontmatter, skipping.');
    return false;
  }

  let newBody = body;
  let changes = [];

  // Clean up Usage section
  if (hasField(fmContent, 'usage')) {
    const before = newBody;
    newBody = cleanUsageSection(newBody);
    if (newBody !== before) changes.push('usage');
  }

  // Clean up Related components
  if (hasField(fmContent, 'related')) {
    const before = newBody;
    newBody = cleanRelated(newBody, fmContent);
    if (newBody !== before) changes.push('related');
  }

  // Clean up Content considerations
  const beforeCC = newBody;
  newBody = cleanContentConsiderations(newBody, fmContent);
  if (newBody !== beforeCC) changes.push('content_considerations');

  // Clean up Accessibility
  const beforeA11y = newBody;
  newBody = cleanAccessibility(newBody, fmContent);
  if (newBody !== beforeA11y) changes.push('accessibility');

  // Clean up blank lines
  newBody = cleanBlankLines(newBody);

  if (changes.length === 0) {
    console.log('  No sections to clean.');
    return false;
  }

  // Write the updated file
  const newContent = fmFull + '\n\n' + newBody + '\n';
  fs.writeFileSync(filePath, newContent);
  console.log(`  ✓ Cleaned: ${changes.join(', ')}`);

  return true;
}

/**
 * Find all component MDX files
 */
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name !== 'deprecated') {
        files.push(...findFiles(fullPath));
      }
    } else if (item.name.endsWith('.mdx') && item.name !== 'checklist.mdx') {
      files.push(fullPath);
    }
  }

  return files;
}

// Main
const componentsDir = path.join(__dirname, '../docs/components');
console.log('Body Cleanup Script');
console.log('===================');

const files = findFiles(componentsDir);
console.log(`Found ${files.length} files to process.`);

let cleaned = 0;
for (const file of files) {
  try {
    if (processFile(file)) cleaned++;
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }
}

console.log('\n===================');
console.log(`Cleanup complete! ${cleaned} files updated.`);
