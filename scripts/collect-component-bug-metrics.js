#!/usr/bin/env node

/**
 * Component Bug Metrics Collection Script
 *
 * Collects open bug issues from the vets-design-system-documentation repository,
 * counts them per component, and calculates defect rates relative to usage.
 *
 * Usage: node scripts/collect-component-bug-metrics.js
 * Requires: GITHUB_TOKEN environment variable and GitHub CLI (gh)
 */

const fs = require('fs').promises;
const path = require('path');
const { execFileSync } = require('child_process');

const REPO = 'department-of-veterans-affairs/vets-design-system-documentation';
const DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const ASSETS_DIR = path.join(__dirname, '../src/assets/data/metrics');
const COMPONENT_MATURITY_FILE = path.join(__dirname, '../src/_data/component-maturity.json');
const COMPONENT_USAGE_FILE = path.join(DATA_DIR, 'component-usage.json');

/**
 * Load valid component names from component-maturity.json
 * Excludes _warning and any non-va-* keys
 */
function loadComponentNames() {
  try {
    const maturityData = require(COMPONENT_MATURITY_FILE);
    const components = Object.keys(maturityData).filter(
      key => key !== '_warning' && key.startsWith('va-')
    );
    console.log(`Loaded ${components.length} components from component-maturity.json`);
    return components;
  } catch (error) {
    console.error('Failed to load component-maturity.json:', error.message);
    throw error;
  }
}

/**
 * Load component usage data and build a lookup map from va-* key to usage_count
 */
function loadUsageData() {
  try {
    const usageData = require(COMPONENT_USAGE_FILE);
    const usageMap = new Map();

    if (usageData.top_components_overall) {
      usageData.top_components_overall.forEach(entry => {
        if (entry.sourceComponents) {
          entry.sourceComponents.forEach(src => {
            // Only map va-* web component names (not VaReact variants)
            if (src.startsWith('va-')) {
              usageMap.set(src, entry.usage_count);
            }
          });
        }
      });
    }

    console.log(`Loaded usage data for ${usageMap.size} component tags`);
    return usageMap;
  } catch (error) {
    console.warn('Could not load component-usage.json:', error.message);
    return new Map();
  }
}

/**
 * Fetch all open issues labeled 'bug' from the repo
 */
function fetchOpenBugIssues() {
  console.log('Fetching open bug issues...');

  const searchArgs = [
    'search', 'issues',
    '--repo', REPO,
    '--label', 'bug',
    '--state', 'open',
    '--limit', '1000',
    '--json', 'number,title,labels,url'
  ];

  console.log(`  Running: gh ${searchArgs.join(' ')}`);

  const output = execFileSync('gh', searchArgs, {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
    timeout: 120000
  });

  if (output.trim()) {
    const issues = JSON.parse(output);
    console.log(`  Found ${issues.length} open bug issues`);
    return issues.map(issue => ({
      number: issue.number,
      title: issue.title,
      labels: issue.labels.map(l => l.name),
      url: issue.url
    }));
  }

  return [];
}

/**
 * Count bugs per component from issue labels.
 * Returns a Map of component name -> bug count.
 * An issue with multiple component labels increments the count for each.
 */
function countBugsByComponent(issues, componentNames) {
  const bugCounts = new Map();

  // Initialize all components with zero
  componentNames.forEach(name => bugCounts.set(name, 0));

  const componentSet = new Set(componentNames);

  issues.forEach(issue => {
    issue.labels.forEach(label => {
      if (componentSet.has(label)) {
        bugCounts.set(label, bugCounts.get(label) + 1);
      }
    });
  });

  return bugCounts;
}

/**
 * Build the by_component array with usage and defect rate data
 */
function buildComponentMetrics(bugCounts, usageMap) {
  const components = [];

  bugCounts.forEach((bugCount, name) => {
    const rawUsage = usageMap.get(name);
    let usageCount = rawUsage !== undefined ? rawUsage : null;
    let defectRate = null;

    if (usageCount !== null && usageCount > 0) {
      defectRate = Math.round((bugCount / usageCount) * 10000) / 100; // 2 decimal places
    } else if (usageCount === 0) {
      // Keep usage_count as 0, defect_rate as null to avoid division by zero
      defectRate = null;
    }

    const githubUrl = `https://github.com/${REPO}/issues?q=is:issue+is:open+label:bug+label:${name}`;

    components.push({
      name,
      bug_count: bugCount,
      usage_count: usageCount,
      defect_rate: defectRate,
      github_url: githubUrl
    });
  });

  // Sort by bug_count descending, then alphabetically by name for ties
  components.sort((a, b) => {
    if (b.bug_count !== a.bug_count) return b.bug_count - a.bug_count;
    return a.name.localeCompare(b.name);
  });

  return components;
}

/**
 * Build summary statistics
 */
function buildSummary(components, totalUniqueIssues) {
  const componentsWithBugs = components.filter(c => c.bug_count > 0);
  const highestDefectRate = components
    .filter(c => c.defect_rate !== null && c.defect_rate > 0)
    .sort((a, b) => b.defect_rate - a.defect_rate)[0];
  const mostBugs = componentsWithBugs[0]; // Already sorted by bug_count desc

  return {
    total_components_with_bugs: componentsWithBugs.length,
    total_bug_issues: totalUniqueIssues,
    total_components: components.length,
    highest_defect_rate_component: highestDefectRate ? highestDefectRate.name : null,
    most_bugs_component: mostBugs ? mostBugs.name : null,
    last_updated: new Date().toISOString()
  };
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Starting component bug metrics collection...');

    // Check for GitHub token
    if (!process.env.GITHUB_TOKEN) {
      console.warn('Warning: GITHUB_TOKEN not set. Rate limiting may occur.');
    }

    // Ensure output directories exist
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.mkdir(ASSETS_DIR, { recursive: true });

    // Load component list and usage data
    const componentNames = loadComponentNames();
    const usageMap = loadUsageData();

    // Fetch open bug issues
    const issues = fetchOpenBugIssues();

    // Count bugs per component
    const bugCounts = countBugsByComponent(issues, componentNames);

    // Build metrics
    const byComponent = buildComponentMetrics(bugCounts, usageMap);
    const summary = buildSummary(byComponent, issues.length);

    // Prepare output
    const metricsData = {
      by_component: byComponent,
      summary,
      data_source: 'github-issues',
      report_date: new Date().toISOString().split('T')[0]
    };

    // Write to both locations
    const jsonOutput = JSON.stringify(metricsData, null, 2);

    const dataPath = path.join(DATA_DIR, 'component-bug-metrics.json');
    const assetsPath = path.join(ASSETS_DIR, 'component-bug-metrics.json');

    await fs.writeFile(dataPath, jsonOutput);
    await fs.writeFile(assetsPath, jsonOutput);

    console.log(`\n✅ Component bug metrics written to ${dataPath}`);
    console.log(`✅ Component bug metrics also written to ${assetsPath}`);

    console.log(`\n📊 Summary:`);
    console.log(`   - Total components: ${summary.total_components}`);
    console.log(`   - Components with bugs: ${summary.total_components_with_bugs}`);
    console.log(`   - Total unique bug issues: ${summary.total_bug_issues}`);
    if (summary.most_bugs_component) {
      console.log(`   - Most bugs: ${summary.most_bugs_component}`);
    }
    if (summary.highest_defect_rate_component) {
      console.log(`   - Highest defect rate: ${summary.highest_defect_rate_component}`);
    }

  } catch (error) {
    console.error('❌ Error collecting component bug metrics:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  loadComponentNames,
  loadUsageData,
  fetchOpenBugIssues,
  countBugsByComponent,
  buildComponentMetrics,
  buildSummary
};
