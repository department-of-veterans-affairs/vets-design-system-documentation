#!/usr/bin/env node

/**
 * Imposter Component Metrics Collection Script
 *
 * Collects issue data from the va.gov-team repository for issues labeled
 * with both 'va-imposter' AND 'collab-cycle-feedback' to track imposter
 * component findings from Governance team staging reviews.
 *
 * Usage: node scripts/collect-imposter-metrics.js
 * Requires: GITHUB_TOKEN environment variable and GitHub CLI (gh)
 *
 * Related: https://github.com/department-of-veterans-affairs/va.gov-team/issues/99341
 */

const fs = require('fs').promises;
const path = require('path');
const { execFileSync } = require('child_process');

const REPO = 'department-of-veterans-affairs/va.gov-team';
const DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const ASSETS_DIR = path.join(__dirname, '../src/assets/data/metrics');
const COMPONENT_MATURITY_FILE = path.join(__dirname, '../src/_data/component-maturity.json');
const EXISTING_METRICS_FILE = path.join(DATA_DIR, 'imposter-metrics.json');

/**
 * Load component names from component-maturity.json
 * This ensures we stay in sync with the actual design system components
 */
function loadComponentLabels() {
  try {
    const maturityData = require(COMPONENT_MATURITY_FILE);
    // Get all component names (keys), excluding the _warning field
    const components = Object.keys(maturityData).filter(key => key !== '_warning');

    // Also add common label variations (e.g., va-breadcrumb vs va-breadcrumbs)
    const variations = [];
    components.forEach(component => {
      // Add singular/plural variations
      if (component.endsWith('s')) {
        variations.push(component.slice(0, -1)); // va-breadcrumbs -> va-breadcrumb
      } else {
        variations.push(component + 's'); // va-breadcrumb -> va-breadcrumbs
      }
    });

    // Additional aliases for labels that don't match component names exactly
    // These are CSS-only implementations or legacy names
    const aliases = [
      'va-tag' // CSS class, not a true component (maps to va-tag-status conceptually)
    ];

    // Combine and deduplicate
    const allLabels = [...new Set([...components, ...variations, ...aliases])];
    console.log(`Loaded ${allLabels.length} component labels from component-maturity.json`);
    return allLabels;
  } catch (error) {
    console.error('Failed to load component-maturity.json, using empty list:', error.message);
    return [];
  }
}

// Load component labels at startup
const COMPONENT_LABELS = loadComponentLabels();

// Validate component labels were loaded successfully
if (COMPONENT_LABELS.length === 0) {
  console.warn('Warning: No component labels loaded. All issues will be categorized as "unknown".');
} else if (COMPONENT_LABELS.length < 10) {
  console.warn(`Warning: Only ${COMPONENT_LABELS.length} component labels loaded. This seems low - verify component-maturity.json is complete.`);
}

// FY26 goal for imposter replacement
const REPLACEMENT_GOAL = 150;

/**
 * Parse and validate a date string in YYYY-MM-DD format.
 * Ensures the date is a real calendar date (no rollover like 2025-02-31).
 */
function parseAndValidateDate(label, dateStr) {
  const parsed = new Date(`${dateStr}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid ${label} date value: ${dateStr}`);
  }

  // Ensure the parsed date matches the original string (detects invalid dates like 2025-02-31)
  const isoDate = parsed.toISOString().slice(0, 10);
  if (isoDate !== dateStr) {
    throw new Error(`Invalid ${label} calendar date: ${dateStr} (parsed as ${isoDate})`);
  }

  return parsed;
}

/**
 * Validate search query components to prevent injection and ensure valid dates
 */
function validateSearchQuery(repo, startDate, endDate) {
  // Validate repository format (owner/repo)
  if (!/^[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/.test(repo)) {
    throw new Error(`Invalid repository format: ${repo}`);
  }

  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
    throw new Error(`Invalid date format. Expected YYYY-MM-DD, got: ${startDate}, ${endDate}`);
  }

  // Validate dates are real calendar dates
  const start = parseAndValidateDate('start', startDate);
  const end = parseAndValidateDate('end', endDate);

  // Validate date range is logical
  if (start.getTime() > end.getTime()) {
    throw new Error(`Invalid date range: startDate (${startDate}) must be on or before endDate (${endDate})`);
  }

  return { repo, startDate, endDate };
}

/**
 * Fetch all imposter issues (no date filter) for total counts
 * Requires both va-imposter AND collab-cycle-feedback labels to filter
 * to Governance team staging review findings only
 */
async function fetchAllImposterIssues() {
  console.log('Fetching all va-imposter issues from Governance staging reviews...');

  try {
    const searchArgs = [
      'search', 'issues',
      '--repo', REPO,
      '--label', 'va-imposter',
      '--label', 'collab-cycle-feedback',
      '--limit', '1000',
      '--json', 'number,title,state,createdAt,closedAt,labels,url'
    ];

    console.log(`  Running: gh ${searchArgs.join(' ')}`);

    const output = execFileSync('gh', searchArgs, {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 120000
    });

    if (output.trim()) {
      const issues = JSON.parse(output);
      console.log(`  Found ${issues.length} total imposter issues`);
      return issues.map(issue => ({
        number: issue.number,
        title: issue.title,
        state: issue.state,
        created_at: issue.createdAt,
        closed_at: issue.closedAt,
        labels: issue.labels.map(l => l.name),
        url: issue.url
      }));
    }

    return [];
  } catch (error) {
    console.error('Failed to fetch imposter issues:', error.message);
    throw error;
  }
}

/**
 * Fetch imposter issues created within a date range
 * Requires both va-imposter AND collab-cycle-feedback labels
 */
async function fetchImposterIssuesInDateRange(startDate, endDate, filterBy = 'created') {
  console.log(`Fetching imposter issues ${filterBy} between ${startDate} and ${endDate}...`);

  try {
    validateSearchQuery(REPO, startDate, endDate);

    const searchArgs = [
      'search', 'issues',
      '--repo', REPO,
      '--label', 'va-imposter',
      '--label', 'collab-cycle-feedback',
      '--limit', '1000',
      '--json', 'number,title,state,createdAt,closedAt,labels,url'
    ];

    if (filterBy === 'closed') {
      searchArgs.push('--closed', `${startDate}..${endDate}`);
    } else {
      searchArgs.push('--created', `${startDate}..${endDate}`);
    }

    const output = execFileSync('gh', searchArgs, {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 120000
    });

    if (output.trim()) {
      const issues = JSON.parse(output);
      console.log(`  Found ${issues.length} issues`);
      return issues.map(issue => ({
        number: issue.number,
        title: issue.title,
        state: issue.state,
        created_at: issue.createdAt,
        closed_at: issue.closedAt,
        labels: issue.labels.map(l => l.name),
        url: issue.url
      }));
    }

    return [];
  } catch (error) {
    // Propagate critical errors (auth failures, gh CLI not installed)
    if (error.message.includes('gh: command not found') ||
        error.message.includes('authentication') ||
        error.message.includes('401') ||
        error.message.includes('403')) {
      throw error;
    }
    // Log non-critical errors and return empty array
    console.error(`Failed to fetch issues for ${startDate} to ${endDate}:`, error.message);
    return [];
  }
}

/**
 * Extract component type from issue labels
 */
function extractComponentType(labels) {
  for (const label of labels) {
    const normalizedLabel = label.toLowerCase();
    if (COMPONENT_LABELS.includes(normalizedLabel)) {
      return normalizedLabel;
    }
  }
  return 'unknown';
}

/**
 * Get quarter date ranges for the last 8 quarters
 */
function getQuarterDateRanges() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentQuarter = Math.floor(now.getMonth() / 3);

  const quarters = [];

  // Generate last 8 quarters (2 years of data)
  for (let i = 7; i >= 0; i--) {
    let year = currentYear;
    let quarter = currentQuarter - i;

    while (quarter < 0) {
      year -= 1;
      quarter += 4;
    }

    const startMonth = quarter * 3;
    const endMonth = startMonth + 2;

    const startDate = new Date(year, startMonth, 1);
    const endDate = new Date(year, endMonth + 1, 0); // Last day of end month

    quarters.push({
      label: `${year}-Q${quarter + 1}`,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      year,
      quarter: quarter + 1
    });
  }

  return quarters;
}

/**
 * Process issues into quarterly data
 */
async function processQuarterlyData() {
  const quarters = getQuarterDateRanges();
  const quarterlyData = [];

  for (const quarter of quarters) {
    console.log(`Processing ${quarter.label}...`);

    // Get issues created in this quarter
    const createdIssues = await fetchImposterIssuesInDateRange(
      quarter.startDate,
      quarter.endDate,
      'created'
    );

    // Get issues closed in this quarter
    const closedIssues = await fetchImposterIssuesInDateRange(
      quarter.startDate,
      quarter.endDate,
      'closed'
    );

    quarterlyData.push({
      period: quarter.label,
      issues_opened: createdIssues.length,
      issues_closed: closedIssues.length
    });
  }

  return quarterlyData;
}

/**
 * Process issues by component type
 */
function processComponentData(issues) {
  const componentCounts = new Map();

  issues.forEach(issue => {
    const component = extractComponentType(issue.labels);

    if (!componentCounts.has(component)) {
      componentCounts.set(component, { open: 0, closed: 0 });
    }

    const counts = componentCounts.get(component);
    if (issue.state === 'OPEN' || issue.state === 'open') {
      counts.open++;
    } else {
      counts.closed++;
    }
  });

  // Convert to array and sort by total (descending)
  const componentData = Array.from(componentCounts.entries())
    .map(([component, counts]) => ({
      component,
      open: counts.open,
      closed: counts.closed,
      total: counts.open + counts.closed
    }))
    .sort((a, b) => b.total - a.total);

  return componentData;
}

/**
 * Load existing metrics file to preserve instance data
 * Instance data is collected separately by collect-imposter-instances.js
 * and we don't want to overwrite it when updating issue metrics
 */
async function loadExistingMetrics() {
  try {
    const content = await fs.readFile(EXISTING_METRICS_FILE, 'utf8');
    const data = JSON.parse(content);
    console.log('Loaded existing metrics file to preserve instance data');
    if (data.instances) {
      console.log(`  - Preserving ${data.instances.total_identified || 0} instance records`);
    }
    return data;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('No existing metrics file found, will create new one');
    } else {
      console.warn('Could not load existing metrics:', error.message);
    }
    return null;
  }
}

/**
 * Calculate summary statistics
 */
function calculateSummary(issues, quarterlyData) {
  const totalOpen = issues.filter(i => i.state === 'OPEN' || i.state === 'open').length;
  const totalClosed = issues.filter(i => i.state === 'CLOSED' || i.state === 'closed').length;
  const progressPercentage = Math.round((totalClosed / REPLACEMENT_GOAL) * 100);

  // Calculate trend (compare last quarter to previous)
  let closedTrend = null;
  if (quarterlyData.length >= 2) {
    const lastQuarter = quarterlyData[quarterlyData.length - 1];
    const prevQuarter = quarterlyData[quarterlyData.length - 2];

    if (prevQuarter.issues_closed > 0) {
      const change = lastQuarter.issues_closed - prevQuarter.issues_closed;
      const percentageChange = Math.round(Math.abs(change) / prevQuarter.issues_closed * 100);

      closedTrend = {
        direction: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
        percentage: percentageChange,
        value: change
      };
    } else {
      closedTrend = {
        direction: lastQuarter.issues_closed > 0 ? 'up' : 'neutral',
        percentage: lastQuarter.issues_closed > 0 ? 100 : 0,
        value: lastQuarter.issues_closed
      };
    }
  }

  return {
    total_open: totalOpen,
    total_closed: totalClosed,
    total_issues: issues.length,
    goal: REPLACEMENT_GOAL,
    progress_percentage: progressPercentage,
    closed_trend: closedTrend,
    last_updated: new Date().toISOString()
  };
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Starting imposter component metrics collection...');

    // Check for GitHub token
    if (!process.env.GITHUB_TOKEN) {
      console.warn('Warning: GITHUB_TOKEN not set. Rate limiting may occur.');
    }

    // Ensure output directories exist
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.mkdir(ASSETS_DIR, { recursive: true });

    // Fetch all imposter issues
    const allIssues = await fetchAllImposterIssues();

    if (allIssues.length === 0) {
      console.log('No imposter issues found. Creating empty metrics file.');
    }

    // Process quarterly data
    const quarterlyData = await processQuarterlyData();

    // Process component data
    const componentData = processComponentData(allIssues);

    // Calculate summary
    const summary = calculateSummary(allIssues, quarterlyData);

    // Load existing metrics to preserve instance data
    // Instance data is collected by collect-imposter-instances.js which requires
    // a local vets-website checkout and is run separately
    const existingMetrics = await loadExistingMetrics();

    // Prepare output, preserving existing instance data if present
    const metricsData = {
      quarterly: quarterlyData,
      by_component: componentData,
      summary: summary,
      generated_at: new Date().toISOString(),
      data_source: 'va.gov-team repository',
      description: 'Imposter component replacement tracking for FY26 KR'
    };

    // Preserve instance data from previous runs of collect-imposter-instances.js
    if (existingMetrics?.instances) {
      metricsData.instances = existingMetrics.instances;
      console.log('✅ Preserved existing instance data in output');
    }

    // Write to both locations
    const jsonOutput = JSON.stringify(metricsData, null, 2);

    const dataPath = path.join(DATA_DIR, 'imposter-metrics.json');
    const assetsPath = path.join(ASSETS_DIR, 'imposter-metrics.json');

    await fs.writeFile(dataPath, jsonOutput);
    await fs.writeFile(assetsPath, jsonOutput);

    console.log(`\n✅ Imposter metrics written to ${dataPath}`);
    console.log(`✅ Imposter metrics also written to ${assetsPath}`);

    console.log(`\n📊 Summary:`);
    console.log(`   - Total issues: ${summary.total_issues}`);
    console.log(`   - Open issues: ${summary.total_open}`);
    console.log(`   - Closed issues: ${summary.total_closed}`);
    console.log(`   - Goal: ${summary.goal}`);
    console.log(`   - Progress: ${summary.progress_percentage}%`);
    console.log(`   - Quarters tracked: ${quarterlyData.length}`);
    console.log(`   - Component types found: ${componentData.length}`);

    if (componentData.length > 0) {
      console.log(`\n📋 Top components by issue count:`);
      componentData.slice(0, 5).forEach((c, i) => {
        console.log(`   ${i + 1}. ${c.component}: ${c.total} issues (${c.open} open, ${c.closed} closed)`);
      });
    }

  } catch (error) {
    console.error('❌ Error collecting imposter metrics:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  fetchAllImposterIssues,
  fetchImposterIssuesInDateRange,
  processQuarterlyData,
  processComponentData,
  calculateSummary,
  extractComponentType,
  loadExistingMetrics,
  COMPONENT_LABELS,
  REPLACEMENT_GOAL
};
