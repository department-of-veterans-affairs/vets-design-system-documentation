#!/usr/bin/env node

/**
 * Imposter Component Instance Scanner
 *
 * Scans vets-website codebase for imposter component usage to track
 * replacement progress toward the FY26 KR: "Remove 150 imposter component
 * instances from vets-website."
 *
 * Usage:
 *   node scripts/collect-imposter-instances.js --vets-website-path <path> [--detailed]
 *
 * Options:
 *   --vets-website-path   Path to local vets-website repo (required)
 *   --detailed            Include sub-application breakdown for container apps
 *                         like simple-forms (e.g., simple-forms/21-10210)
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
let DETAILED_OUTPUT = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--vets-website-path' && i + 1 < args.length) {
    VETS_WEBSITE_PATH = path.resolve(args[i + 1]);
  }
  if (args[i] === '--detailed') {
    DETAILED_OUTPUT = true;
  }
}

const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const JEKYLL_DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const EXISTING_METRICS_FILE = path.join(JEKYLL_DATA_DIR, 'imposter-metrics.json');

/**
 * Imposter definitions from Confluence
 * Source: https://vfs.atlassian.net/wiki/spaces/DST/pages/3818717229
 *
 * Detection patterns support three types:
 * 1. Plain regex - matches anywhere in the file
 * 2. Object with pattern + pathFilter - only matches in files matching pathFilter
 * 3. Object with pattern + excludeIfWebComponent: true - skips if file uses web component patterns
 *
 * The excludeIfWebComponent flag is important for 'ui:widget' patterns because
 * proper web-component-patterns like radioUI() include BOTH 'ui:webComponentField'
 * AND 'ui:widget' (for review page compatibility). We only want to flag files
 * that use 'ui:widget' WITHOUT the corresponding web component field.
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
      /from\s+['"][^'"]*CheckboxWidget['"]/g,
      // Only flag 'ui:widget': 'checkbox' if file doesn't use web component patterns
      { pattern: /['"]ui:widget['"]\s*:\s*['"]checkbox['"]/g, excludeIfWebComponent: true }
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
      // Only flag 'ui:widget': 'radio' if file doesn't use web component patterns
      { pattern: /['"]ui:widget['"]\s*:\s*['"]radio['"]/g, excludeIfWebComponent: true }
    ]
  },
  {
    vaComponent: 'va-text-input',
    imposterName: 'TextWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/TextWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*TextWidget['"]/g,
      // Only flag 'ui:widget': 'text' if file doesn't use web component patterns
      { pattern: /['"]ui:widget['"]\s*:\s*['"]text['"]/g, excludeIfWebComponent: true }
    ]
  },
  {
    vaComponent: 'va-select',
    imposterName: 'SelectWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/SelectWidget.jsx',
    detectionPatterns: [
      /from\s+['"][^'"]*SelectWidget['"]/g,
      // Only flag 'ui:widget': 'select' if file doesn't use web component patterns
      { pattern: /['"]ui:widget['"]\s*:\s*['"]select['"]/g, excludeIfWebComponent: true }
      // NOTE: Removed enum detection - it caused too many false positives:
      // - enum: [true] patterns are checkbox confirmations, not selects
      // - enum arrays with radio patterns are handled by radioUI web components
      // - Proper detection would require parsing the schema structure
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
      /from\s+['"][^'"]*DateWidget['"]/g,
      // Only flag 'ui:widget': 'date' if file doesn't use web component patterns
      { pattern: /['"]ui:widget['"]\s*:\s*['"]date['"]/g, excludeIfWebComponent: true }
    ]
  }
];

/**
 * Check if file content uses web component patterns (proper usage, not imposter)
 *
 * Files that import from web-component-patterns or web-component-fields,
 * or that use 'ui:webComponentField', are using the proper patterns and
 * should not be flagged for 'ui:widget' usage (which is included in
 * proper patterns for review page compatibility).
 *
 * @param {string} content - File content to check
 * @returns {boolean} True if file uses web component patterns
 */
function usesWebComponentPatterns(content) {
  // Check for imports from web-component-patterns or web-component-fields
  // The pattern matches paths like:
  // - 'platform/forms-system/src/js/web-component-patterns'
  // - 'platform/forms-system/src/js/web-component-fields/VaRadioField'
  const webComponentImportPattern = /from\s+['"][^'"]*web-component-(patterns|fields)/;
  if (webComponentImportPattern.test(content)) {
    return true;
  }

  // Check for direct use of 'ui:webComponentField'
  const webComponentFieldPattern = /['"]ui:webComponentField['"]/;
  if (webComponentFieldPattern.test(content)) {
    return true;
  }

  return false;
}

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
 * Check if a file is from a mock application that should be excluded
 * Checks both top-level app names (e.g., _mock-form) and subdirectories (e.g., simple-forms/mock-*)
 */
function isMockApplication(filePath) {
  // Check top-level application name
  const appMatch = filePath.match(/src\/applications\/([^/]+)/);
  if (appMatch && appMatch[1].startsWith('_mock')) {
    return true;
  }
  // Check subdirectory name (e.g., simple-forms/mock-simple-forms-patterns)
  const subDirMatch = filePath.match(/src\/applications\/[^/]+\/([^/]+)/);
  if (subDirMatch && subDirMatch[1].startsWith('mock')) {
    return true;
  }
  return false;
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
 * Extract sub-application path for container apps (e.g., simple-forms/21-10210)
 * Returns the app/subdir path for apps with form subdirectories, or just the app name
 */
function extractSubApplicationName(filePath) {
  // Match pattern: src/applications/app-name/sub-app-name/...
  const match = filePath.match(/src\/applications\/([^/]+)\/([^/]+)/);
  if (match) {
    const appName = match[1];
    const subDir = match[2];
    // Skip common non-form subdirectories
    const skipDirs = ['components', 'containers', 'utils', 'helpers', 'actions', 'reducers', 'selectors', 'constants', 'config', 'styles', 'assets', 'tests', '__tests__'];
    if (!skipDirs.includes(subDir) && !subDir.startsWith('.')) {
      return `${appName}/${subDir}`;
    }
    return appName;
  }
  if (filePath.includes('src/platform/')) {
    return 'platform';
  }
  return 'other';
}

/**
 * Search for imposter usage in file content
 * @param {string} content - File content to search
 * @param {object} imposterDef - Imposter definition with detection patterns
 * @param {string} filePath - Path to the file being searched (for path-filtered patterns)
 * @param {boolean} fileUsesWebComponents - Whether the file uses web component patterns (pre-computed for efficiency)
 */
function searchFileForImposters(content, imposterDef, filePath = '', fileUsesWebComponents = false) {
  let matchCount = 0;

  for (const patternDef of imposterDef.detectionPatterns) {
    // Support both plain regex and objects with pattern + pathFilter + excludeIfWebComponent
    let sourcePattern, pathFilter, excludeIfWebComponent;
    if (patternDef instanceof RegExp) {
      sourcePattern = patternDef;
      pathFilter = null;
      excludeIfWebComponent = false;
    } else {
      sourcePattern = patternDef.pattern;
      pathFilter = patternDef.pathFilter;
      excludeIfWebComponent = patternDef.excludeIfWebComponent || false;
    }

    // Skip pattern if path filter doesn't match
    if (pathFilter && !pathFilter.test(filePath)) {
      continue;
    }

    // Skip 'ui:widget' patterns if the file uses proper web component patterns
    // This prevents false positives from files using radioUI(), dateOfBirthUI(), etc.
    // which include 'ui:widget' for review page compatibility but also have 'ui:webComponentField'
    if (excludeIfWebComponent && fileUsesWebComponents) {
      continue;
    }

    // Create a fresh regex instance to avoid lastIndex state issues with global patterns
    // This prevents race conditions when the same pattern is used across multiple files
    const pattern = new RegExp(sourcePattern.source, sourcePattern.flags);
    const matches = content.match(pattern);
    if (matches) {
      matchCount += matches.length;
    }
  }

  return matchCount;
}

/**
 * Aggregate scan results into final metrics structure
 * @param {Array} scanResults - Results from scanning
 * @param {string} scanSource - Source identifier (e.g., 'local')
 * @param {boolean} detailed - Whether to include sub-application breakdown
 */
function aggregateResults(scanResults, scanSource = 'local', detailed = false) {
  const byApplication = new Map();
  const bySubApplication = new Map(); // For detailed breakdown
  const subAppByComponent = new Map(); // Track which imposters each sub-app has
  let totalIdentified = 0;

  const byComponent = scanResults.map(result => {
    const applications = [...new Set(result.instances.map(i => i.application))];

    // Aggregate by application and sub-application
    for (const instance of result.instances) {
      // By application
      const currentCount = byApplication.get(instance.application) || 0;
      byApplication.set(instance.application, currentCount + instance.matchCount);

      // By sub-application (for detailed mode)
      if (detailed && instance.subApplication) {
        const subAppKey = instance.subApplication;
        const currentSubCount = bySubApplication.get(subAppKey) || 0;
        bySubApplication.set(subAppKey, currentSubCount + instance.matchCount);

        // Track component breakdown per sub-application
        if (!subAppByComponent.has(subAppKey)) {
          subAppByComponent.set(subAppKey, new Map());
        }
        const componentMap = subAppByComponent.get(subAppKey);
        const componentKey = result.imposterDef.imposterName;
        const currentCompCount = componentMap.get(componentKey) || 0;
        componentMap.set(componentKey, currentCompCount + instance.matchCount);
      }
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

  // Filter out components with zero instances and sort by instance count descending
  const filteredByComponent = byComponent.filter(c => c.instance_count > 0);
  filteredByComponent.sort((a, b) => b.instance_count - a.instance_count);

  // Convert application map to sorted array
  const byApplicationArray = Array.from(byApplication.entries())
    .map(([application, instance_count]) => ({ application, instance_count }))
    .sort((a, b) => b.instance_count - a.instance_count);

  const result = {
    total_identified: totalIdentified,
    by_component: filteredByComponent,
    by_application: byApplicationArray,
    last_scan_date: new Date().toISOString().split('T')[0],
    scan_source: scanSource
  };

  // Add detailed sub-application breakdown if requested
  if (detailed) {
    result.by_sub_application = Array.from(bySubApplication.entries())
      .map(([subApplication, instance_count]) => {
        const componentBreakdown = subAppByComponent.get(subApplication);
        const by_imposter = componentBreakdown
          ? Object.fromEntries(componentBreakdown.entries())
          : {};
        return {
          sub_application: subApplication,
          instance_count,
          by_imposter
        };
      })
      .sort((a, b) => b.instance_count - a.instance_count);
  }

  return result;
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

    // Skip mock applications
    if (isMockApplication(filePath)) {
      continue;
    }

    // Skip the imposter definition file itself
    if (filePath === imposterDef.imposterPath) {
      continue;
    }

    try {
      const fullPath = path.join(vetsWebsitePath, filePath);
      const content = await fs.readFile(fullPath, 'utf8');

      // Pre-compute whether file uses web component patterns (for excludeIfWebComponent logic)
      const fileUsesWebComponents = usesWebComponentPatterns(content);

      const matchCount = searchFileForImposters(content, imposterDef, filePath, fileUsesWebComponents);

      if (matchCount > 0) {
        const appName = extractApplicationName(filePath);
        const subAppName = extractSubApplicationName(filePath);
        instances.push({
          file: filePath,
          application: appName,
          subApplication: subAppName,
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
 * @param {string} vetsWebsitePath - Path to vets-website repo
 * @param {boolean} detailed - Whether to include sub-application breakdown
 */
async function scanAllImposters(vetsWebsitePath, detailed = false) {
  console.log('=== Imposter Component Instance Scanner ===\n');
  console.log(`Scanning: ${vetsWebsitePath}`);
  if (detailed) {
    console.log('Detailed mode: ON (will include sub-application breakdown)');
  }
  console.log('');

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

  return aggregateResults(scanResults, 'local', detailed);
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
    console.error('Usage: node scripts/collect-imposter-instances.js --vets-website-path <path> [--detailed]');
    console.error('\nOptions:');
    console.error('  --vets-website-path   Path to local vets-website repo (required)');
    console.error('  --detailed            Include sub-application breakdown (e.g., simple-forms/21-10210)');
    process.exit(1);
  }

  // Validate that the provided vets-website path exists and is a directory
  try {
    await fs.access(VETS_WEBSITE_PATH);
    const stats = await fs.stat(VETS_WEBSITE_PATH);
    if (!stats.isDirectory()) {
      console.error(`Error: Provided --vets-website-path "${VETS_WEBSITE_PATH}" is not a directory.`);
      process.exit(1);
    }
  } catch {
    console.error(`Error: Provided --vets-website-path "${VETS_WEBSITE_PATH}" does not exist or is not accessible.`);
    process.exit(1);
  }

  try {
    const instanceData = await scanAllImposters(VETS_WEBSITE_PATH, DETAILED_OUTPUT);

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

    // Print detailed sub-application breakdown if requested
    if (DETAILED_OUTPUT && instanceData.by_sub_application) {
      console.log('\n=== SUB-APPLICATION BREAKDOWN ===');
      instanceData.by_sub_application.forEach((subApp) => {
        const imposterDetails = Object.entries(subApp.by_imposter)
          .map(([name, count]) => `${name}:${count}`)
          .join(', ');
        console.log(`  ${subApp.sub_application}: ${subApp.instance_count} (${imposterDetails})`);
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
  usesWebComponentPatterns,
  isTestFile,
  isMockApplication,
  extractApplicationName,
  extractSubApplicationName,
  searchFileForImposters,
  aggregateResults,
  findJSFiles,
  scanLocalDirectory,
  scanAllImposters
};
