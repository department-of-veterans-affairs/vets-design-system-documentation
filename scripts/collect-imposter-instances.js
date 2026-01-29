#!/usr/bin/env node

/**
 * Imposter Component Instance Scanner
 *
 * Scans vets-website codebase for imposter component usage to track
 * replacement progress toward the FY26 KR: "Remove 150 imposter component
 * instances from vets-website."
 *
 * Usage:
 *   node scripts/collect-imposter-instances.js [--vets-website-path <path>]
 *
 * Options:
 *   --vets-website-path   Path to local vets-website repo (required)
 *
 * Related:
 *   - Design: docs/plans/2026-01-29-imposter-metrics-design.md
 *   - Confluence: https://vfs.atlassian.net/wiki/spaces/DST/pages/3818717229
 */

const fs = require('fs').promises;
const path = require('path');

// Parse command-line arguments
const args = process.argv.slice(2);
let VETS_WEBSITE_PATH = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--vets-website-path' && i + 1 < args.length) {
    VETS_WEBSITE_PATH = path.resolve(args[i + 1]);
  }
}

const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const JEKYLL_DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const EXISTING_METRICS_FILE = path.join(JEKYLL_DATA_DIR, 'imposter-metrics.json');

/**
 * Imposter definitions from Confluence
 * Source: https://vfs.atlassian.net/wiki/spaces/DST/pages/3818717229
 */
const IMPOSTER_DEFINITIONS = [
  {
    vaComponent: 'va-button-pair',
    imposterName: 'FormNavButtons',
    imposterPath: 'src/platform/forms-system/src/js/components/FormNavButtons.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*FormNavButtons['"]/g
    ]
  },
  {
    vaComponent: 'va-file-input',
    imposterName: 'FileField (platform)',
    imposterPath: 'src/platform/forms-system/src/js/fields/FileField.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*platform\/forms-system[^'"]*FileField['"]/g,
      /from\s+['"][^'"]*platform[^'"]*FileField['"]/g
    ]
  },
  {
    vaComponent: 'va-file-input',
    imposterName: 'FileField (appeals)',
    imposterPath: 'src/applications/appeals/shared/components/FileField.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*appeals\/shared[^'"]*FileField['"]/g
    ]
  },
  {
    vaComponent: 'va-checkbox',
    imposterName: 'CheckboxWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*CheckboxWidget['"]/g
    ]
  },
  {
    vaComponent: 'va-checkbox',
    imposterName: 'IssueCard',
    imposterPath: 'src/applications/appeals/shared/components/IssueCard.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*IssueCard['"]/g
    ]
  },
  {
    vaComponent: 'va-card',
    imposterName: 'FryDeaEligibilityCards',
    imposterPath: 'src/applications/fry-dea/components/FryDeaEligibilityCards.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*FryDeaEligibilityCards['"]/g
    ]
  },
  {
    vaComponent: 'va-radio',
    imposterName: 'RadioWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/RadioWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*RadioWidget['"]/g,
      /['"]ui:widget['"]\s*:\s*['"]radio['"]/g
    ]
  },
  {
    vaComponent: 'va-text-input',
    imposterName: 'TextWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/TextWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*TextWidget['"]/g
    ]
  },
  {
    vaComponent: 'va-select',
    imposterName: 'SelectWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/SelectWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*SelectWidget['"]/g
    ]
  },
  {
    vaComponent: 'va-breadcrumbs',
    imposterName: 'MrBreadcrumbs',
    imposterPath: 'src/applications/mhv-medical-records/components/MrBreadcrumbs.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*MrBreadcrumbs['"]/g
    ]
  },
  {
    vaComponent: 'va-statement-of-truth',
    imposterName: 'Attestation',
    imposterPath: 'src/platform/forms-system/src/js/components/Attestation.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*Attestation['"]/g
    ]
  },
  {
    vaComponent: 'va-memorable-date',
    imposterName: 'DateWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/DateWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*DateWidget['"]/g
    ]
  }
];

/**
 * Check if a file is a test file that should be excluded
 */
function isTestFile(filePath) {
  return (
    filePath.includes('.spec.') ||
    filePath.includes('.test.') ||
    filePath.includes('.unit.') ||
    filePath.includes('/tests/') ||
    filePath.includes('/__tests__/') ||
    filePath.includes('.cy.') ||
    filePath.includes('.e2e.')
  );
}

/**
 * Extract application name from file path
 */
function extractApplicationName(filePath) {
  const match = filePath.match(/src\/applications\/([^/]+)/);
  if (match) {
    return match[1];
  }
  if (filePath.includes('src/platform/')) {
    return 'platform';
  }
  return 'other';
}

/**
 * Search for imposter usage in file content
 */
function searchFileForImposters(content, imposterDef) {
  let matchCount = 0;

  for (const pattern of imposterDef.detectionPatterns) {
    // Reset regex lastIndex for global patterns
    pattern.lastIndex = 0;
    const matches = content.match(pattern);
    if (matches) {
      matchCount += matches.length;
    }
  }

  return matchCount;
}

/**
 * Aggregate scan results into final metrics structure
 */
function aggregateResults(scanResults, scanSource = 'local') {
  const byApplication = new Map();
  let totalIdentified = 0;

  const byComponent = scanResults.map(result => {
    const applications = [...new Set(result.instances.map(i => i.application))];

    // Aggregate by application
    for (const instance of result.instances) {
      const currentCount = byApplication.get(instance.application) || 0;
      byApplication.set(instance.application, currentCount + instance.matchCount);
    }

    totalIdentified += result.totalCount;

    return {
      component: result.imposterDef.vaComponent,
      imposter_name: result.imposterDef.imposterName,
      imposter_path: result.imposterDef.imposterPath,
      instance_count: result.totalCount,
      file_count: result.instances.length,
      applications
    };
  });

  // Sort by instance count descending
  byComponent.sort((a, b) => b.instance_count - a.instance_count);

  // Convert application map to sorted array
  const byApplicationArray = Array.from(byApplication.entries())
    .map(([application, instance_count]) => ({ application, instance_count }))
    .sort((a, b) => b.instance_count - a.instance_count);

  return {
    total_identified: totalIdentified,
    by_component: byComponent,
    by_application: byApplicationArray,
    last_scan_date: new Date().toISOString().split('T')[0],
    scan_source: scanSource
  };
}

/**
 * Recursively find all JS/JSX files in a directory
 */
async function findJSFiles(dir, baseDir = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules and hidden directories
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) {
        return [];
      }
      return findJSFiles(fullPath, baseDir);
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) {
      return path.relative(baseDir, fullPath);
    }
    return null;
  }));
  return files.flat().filter(Boolean);
}

/**
 * Scan local vets-website directory for imposter usage
 */
async function scanLocalDirectory(vetsWebsitePath, imposterDef) {
  const srcDir = path.join(vetsWebsitePath, 'src');

  try {
    await fs.access(srcDir);
  } catch {
    console.warn(`  ⚠️  Directory not found: ${srcDir}`);
    return { instances: [], totalCount: 0 };
  }

  const allFiles = await findJSFiles(srcDir, vetsWebsitePath);
  const instances = [];
  let totalCount = 0;

  for (const filePath of allFiles) {
    // Skip test files
    if (isTestFile(filePath)) {
      continue;
    }

    // Skip the imposter definition file itself
    if (filePath === imposterDef.imposterPath) {
      continue;
    }

    try {
      const fullPath = path.join(vetsWebsitePath, filePath);
      const content = await fs.readFile(fullPath, 'utf8');

      const matchCount = searchFileForImposters(content, imposterDef);

      if (matchCount > 0) {
        const appName = extractApplicationName(filePath);
        instances.push({
          file: filePath,
          application: appName,
          matchCount
        });
        totalCount += matchCount;
      }
    } catch (error) {
      // Skip files we can't read
      if (!error.message.includes('ENOENT')) {
        console.warn(`  ⚠️  Could not read ${filePath}: ${error.message}`);
      }
    }
  }

  return { instances, totalCount };
}

/**
 * Scan for all imposters
 */
async function scanAllImposters(vetsWebsitePath) {
  console.log('=== Imposter Component Instance Scanner ===\n');
  console.log(`Scanning: ${vetsWebsitePath}\n`);

  const scanResults = [];

  for (const imposterDef of IMPOSTER_DEFINITIONS) {
    console.log(`Scanning for ${imposterDef.imposterName} (${imposterDef.vaComponent})...`);

    const result = await scanLocalDirectory(vetsWebsitePath, imposterDef);

    scanResults.push({
      imposterDef,
      instances: result.instances,
      totalCount: result.totalCount
    });

    console.log(`  ✓ Found ${result.totalCount} instances in ${result.instances.length} files`);
  }

  return aggregateResults(scanResults, 'local');
}

/**
 * Load existing metrics file if it exists
 */
async function loadExistingMetrics() {
  try {
    const content = await fs.readFile(EXISTING_METRICS_FILE, 'utf8');
    return JSON.parse(content);
  } catch {
    console.log('No existing metrics file found, will create new one.');
    return null;
  }
}

/**
 * Save metrics to files
 */
async function saveMetrics(instanceData) {
  // Ensure output directories exist
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(JEKYLL_DATA_DIR, { recursive: true });

  // Load existing metrics to preserve Phase 1 data
  const existingMetrics = await loadExistingMetrics();

  // Merge instance data with existing metrics
  const metricsData = existingMetrics || {
    quarterly: [],
    by_component: [],
    summary: {
      total_open: 0,
      total_closed: 0,
      total_issues: 0,
      goal: 150,
      progress_percentage: 0,
      last_updated: new Date().toISOString()
    },
    generated_at: new Date().toISOString(),
    data_source: 'va.gov-team repository',
    description: 'Imposter component replacement tracking for FY26 KR'
  };

  // Add/update instances data
  metricsData.instances = instanceData;
  metricsData.generated_at = new Date().toISOString();

  const jsonOutput = JSON.stringify(metricsData, null, 2);

  const dataPath = path.join(JEKYLL_DATA_DIR, 'imposter-metrics.json');
  const assetsPath = path.join(OUTPUT_DIR, 'imposter-metrics.json');

  await fs.writeFile(dataPath, jsonOutput);
  await fs.writeFile(assetsPath, jsonOutput);

  console.log(`\n✅ Metrics saved to ${dataPath}`);
  console.log(`✅ Metrics also saved to ${assetsPath}`);
}

/**
 * Main execution
 */
async function main() {
  if (!VETS_WEBSITE_PATH) {
    console.error('Error: --vets-website-path is required');
    console.error('Usage: node scripts/collect-imposter-instances.js --vets-website-path <path>');
    process.exit(1);
  }

  try {
    const instanceData = await scanAllImposters(VETS_WEBSITE_PATH);

    await saveMetrics(instanceData);

    // Print summary
    console.log('\n=== SUMMARY ===');
    console.log(`Total imposter instances found: ${instanceData.total_identified}`);
    console.log(`Components scanned: ${IMPOSTER_DEFINITIONS.length}`);

    if (instanceData.by_component.length > 0) {
      console.log('\nTop imposters by instance count:');
      instanceData.by_component.slice(0, 5).forEach((c, i) => {
        console.log(`  ${i + 1}. ${c.imposter_name} (${c.component}): ${c.instance_count} instances`);
      });
    }

    if (instanceData.by_application.length > 0) {
      console.log('\nTop applications by imposter count:');
      instanceData.by_application.slice(0, 5).forEach((a, i) => {
        console.log(`  ${i + 1}. ${a.application}: ${a.instance_count} instances`);
      });
    }

    console.log('\n✅ Imposter instance scan complete!');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  IMPOSTER_DEFINITIONS,
  isTestFile,
  extractApplicationName,
  searchFileForImposters,
  aggregateResults,
  findJSFiles,
  scanLocalDirectory,
  scanAllImposters
};
