/**
 * Generates the shared_content select options from partial files.
 * Reads the first heading from each partial to get the title.
 * Updates config.yml with the generated options.
 *
 * Run: node scripts/generate-partials-config.js
 */

const fs = require('fs');
const path = require('path');

const PARTIALS_DIR = path.join(__dirname, '../docs/_partials');
const CONFIG_PATH = path.join(__dirname, '../static/admin/config.yml');

/**
 * Recursively find all .mdx files in a directory
 */
function findMdxFiles(dir, baseDir = dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.mdx')) {
      const relativePath = path.relative(baseDir, fullPath).replace(/\.mdx$/, '');
      files.push({ fullPath, relativePath });
    }
  }

  return files;
}

/**
 * Extract title from partial file content
 * Looks for: 1) Title comment in MDX, 2) First ## or ### heading
 */
function extractTitle(content, filename) {
  // Try to find a Title comment: {/* Title: Some Title */}
  const titleCommentMatch = content.match(/\{\/\*\s*Title:\s*(.+?)\s*\*\/\}/);
  if (titleCommentMatch) {
    return titleCommentMatch[1].trim();
  }

  // Try to find first heading (## or ###)
  const headingMatch = content.match(/^#{2,3}\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }

  // Fall back to converting filename to title
  return filename
    .split('/').pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Generate options array for the select widget
 */
function generateOptions() {
  const files = findMdxFiles(PARTIALS_DIR);
  const options = [];

  for (const { fullPath, relativePath } of files) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const slug = relativePath.split('/').pop(); // Just the filename without path
    const title = extractTitle(content, relativePath);

    options.push({
      label: title,
      value: slug
    });
  }

  // Sort alphabetically by label
  options.sort((a, b) => a.label.localeCompare(b.label));

  return options;
}

/**
 * Escape special characters for YAML string values
 */
function escapeYamlString(str) {
  // If string contains special characters, wrap in quotes and escape internal quotes
  if (/[":{}[\],&*#?|<>=!%@`]/.test(str) || str.includes("'")) {
    return '"' + str.replace(/"/g, '\\"') + '"';
  }
  return '"' + str + '"';
}

/**
 * Detect indentation from an existing option line
 */
function detectIndentation(lines, startLine, endLine) {
  for (let i = startLine; i < endLine && i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^(\s*)- \{ label:/);
    if (match) {
      return match[1]; // Return the whitespace prefix
    }
  }
  // Default to 10 spaces if we can't detect
  return '          ';
}

/**
 * Update the config.yml with new options
 */
function updateConfig(options) {
  const configContent = fs.readFileSync(CONFIG_PATH, 'utf-8');

  // Pattern to match the shared_content options section
  // Matches from "options:" until the next section (# --- or - name:)
  const lines = configContent.split('\n');
  let inSharedContent = false;
  let inOptions = false;
  let startLine = -1;
  let endLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('# --- SHARED CONTENT BLOCKS ---')) {
      inSharedContent = true;
      continue;
    }

    if (inSharedContent && line.trim().startsWith('options:')) {
      inOptions = true;
      startLine = i + 1;
      continue;
    }

    if (inOptions) {
      // Check if we've reached the end of options (next section or different indent)
      const trimmed = line.trim();
      if (trimmed.startsWith('# ---') ||
          (trimmed.startsWith('- name:') && !trimmed.startsWith('- { label:'))) {
        endLine = i;
        break;
      }
      // Also end if we hit a non-option line that's not empty
      if (trimmed && !trimmed.startsWith('- {') && !trimmed.startsWith('#')) {
        endLine = i;
        break;
      }
    }
  }

  if (startLine === -1) {
    console.log('Warning: Could not find shared_content options section');
    return false;
  }

  if (endLine === -1) {
    endLine = lines.length;
  }

  // Detect the indentation from existing options
  const indent = detectIndentation(lines, startLine, endLine);

  // Generate the YAML for options using detected indentation
  const optionsYaml = options.map(opt =>
    `${indent}- { label: ${escapeYamlString(opt.label)}, value: ${escapeYamlString(opt.value)} }`
  ).join('\n');

  // Replace the options section
  const newLines = [
    ...lines.slice(0, startLine),
    optionsYaml,
    '',
    ...lines.slice(endLine)
  ];

  fs.writeFileSync(CONFIG_PATH, newLines.join('\n'));
  return true;
}

/**
 * Quick validation of the config after update
 */
function validateConfig() {
  const content = fs.readFileSync(CONFIG_PATH, 'utf-8');
  const lines = content.split('\n');
  const errors = [];

  // Check for duplicate collection names
  const collectionNames = [];
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^  - name: (.+)/);
    if (match) {
      const name = match[1].trim();
      if (collectionNames.includes(name)) {
        errors.push(`Duplicate collection "${name}" at line ${i + 1}`);
      }
      collectionNames.push(name);
    }

    // Check for tabs
    if (lines[i].includes('\t')) {
      errors.push(`Tab character at line ${i + 1} (use spaces)`);
    }

    // Check for broken YAML structure in options
    if (lines[i].includes('- { label:') && !lines[i].includes('value:')) {
      errors.push(`Malformed option at line ${i + 1}: missing value`);
    }
  }

  return { valid: errors.length === 0, errors, collectionCount: collectionNames.length };
}

// Main execution
console.log('Scanning partials directory...');
const options = generateOptions();

console.log(`Found ${options.length} partials:`);
options.forEach(opt => console.log(`  - ${opt.label} (${opt.value})`));

console.log('\nUpdating config.yml...');
if (updateConfig(options)) {
  console.log('✓ Config updated successfully!');

  // Validate after update
  console.log('\nValidating config...');
  const validation = validateConfig();
  if (validation.valid) {
    console.log(`✓ Config valid (${validation.collectionCount} collections)`);
  } else {
    console.log('✗ Config validation failed:');
    validation.errors.forEach(e => console.log(`  - ${e}`));
    console.log('\nRun "node scripts/validate-cms-config.js" for detailed diagnostics');
    process.exit(1);
  }
} else {
  console.log('✗ Failed to update config');
  process.exit(1);
}
