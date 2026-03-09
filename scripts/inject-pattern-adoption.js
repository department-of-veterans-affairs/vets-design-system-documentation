#!/usr/bin/env node

/**
 * Inject Pattern Adoption Sections
 *
 * Reads pattern-adherence.json and injects (or updates) an ## Adoption section
 * at the end of each codified pattern's markdown file. Also updates the
 * pattern template with a static placeholder.
 *
 * Usage:
 *   node scripts/inject-pattern-adoption.js [--data-path <path>]
 *
 * Options:
 *   --data-path   Path to pattern-adherence.json
 *                 (default: src/assets/data/metrics/pattern-adherence.json)
 */

const fs = require('fs').promises;
const path = require('path');

const args = process.argv.slice(2);
let DATA_PATH = path.join(__dirname, '../src/assets/data/metrics/pattern-adherence.json');

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--data-path' && i + 1 < args.length) {
    DATA_PATH = path.resolve(args[i + 1]);
  }
}

const PATTERNS_DIR = path.join(__dirname, '../src/_patterns');
const TEMPLATE_PATH = path.join(PATTERNS_DIR, 'template.md');

/**
 * Convert a pattern name to a URL-safe slug for use as an HTML id.
 */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate the ## Adoption section for a pattern.
 */
function generateAdoptionSection(pattern) {
  const { usage_count, total_forms, compliance_percentage, forms_using_pattern, pattern_name } = pattern;

  let section = '\n## Adoption\n\n';

  if (usage_count === 0) {
    section += 'No forms currently use this pattern.\n';
    return section;
  }

  const formItems = forms_using_pattern
    .map(f => `      <li>${f.product_name}</li>`)
    .join('\n');

  section += `<va-accordion open-single>\n`;
  section += `  <va-accordion-item id="adoption-${slugify(pattern_name)}">\n`;
  section += `    <h3 slot="headline">Forms using this pattern: ${usage_count} of ${total_forms} (${compliance_percentage}%)</h3>\n`;
  section += `    <ul>\n`;
  section += formItems + '\n';
  section += `    </ul>\n`;
  section += `  </va-accordion-item>\n`;
  section += `</va-accordion>\n`;

  return section;
}

/**
 * Remove any existing ## Adoption section from the end of a file's content.
 * The section runs from ## Adoption to the end of the file.
 */
function stripAdoptionSection(content) {
  const marker = '\n## Adoption';
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

/**
 * Update a single pattern markdown file with the adoption section.
 */
async function updatePatternFile(filePath, adoptionSection) {
  let content;
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.warn(`  ⚠️  Could not read ${filePath}: ${error.message}`);
    return false;
  }

  const stripped = stripAdoptionSection(content);
  // Ensure a single trailing newline before the new section
  const trimmed = stripped.trimEnd();
  const updated = trimmed + '\n' + adoptionSection;

  await fs.writeFile(filePath, updated, 'utf8');
  return true;
}

/**
 * Update the template.md with a static adoption placeholder.
 */
async function updateTemplate() {
  let content;
  try {
    content = await fs.readFile(TEMPLATE_PATH, 'utf8');
  } catch (error) {
    console.warn(`  ⚠️  Could not read template.md: ${error.message}`);
    return;
  }

  const placeholder =
    '\n## Adoption\n\n' +
    'Adoption data is generated automatically and updated weekly.\n' +
    'Run `node scripts/inject-pattern-adoption.js` to refresh locally.\n';

  const stripped = stripAdoptionSection(content);
  const updated = stripped.trimEnd() + '\n' + placeholder;

  await fs.writeFile(TEMPLATE_PATH, updated, 'utf8');
  console.log('  ✓ Updated template.md');
}

/**
 * Main execution
 */
async function main() {
  console.log('=== Inject Pattern Adoption Sections ===\n');

  // Load adherence data
  let data;
  try {
    const json = await fs.readFile(DATA_PATH, 'utf8');
    data = JSON.parse(json);
  } catch (error) {
    console.error(`❌ Could not read data file at ${DATA_PATH}: ${error.message}`);
    process.exit(1);
  }

  console.log(`Loaded data: ${data.patterns.length} patterns, ${data.total_forms} forms\n`);

  let updated = 0;
  let skipped = 0;

  for (const pattern of data.patterns) {
    if (!pattern.pattern_file) {
      console.warn(`  ⚠️  No pattern_file for "${pattern.pattern_name}", skipping`);
      skipped++;
      continue;
    }

    const filePath = path.join(PATTERNS_DIR, pattern.pattern_file);
    const adoptionSection = generateAdoptionSection(pattern);

    console.log(`Processing: ${pattern.pattern_name}`);
    console.log(`  File: ${pattern.pattern_file}`);

    const success = await updatePatternFile(filePath, adoptionSection);
    if (success) {
      console.log(`  ✓ Injected adoption section (${pattern.usage_count}/${pattern.total_forms} forms, ${pattern.compliance_percentage}%)`);
      updated++;
    } else {
      skipped++;
    }
  }

  // Update template
  console.log('\nUpdating template.md...');
  await updateTemplate();

  console.log(`\n✅ Done. Updated ${updated} pattern files, skipped ${skipped}.`);
}

if (require.main === module) {
  main();
}

module.exports = { generateAdoptionSection, stripAdoptionSection, slugify };
