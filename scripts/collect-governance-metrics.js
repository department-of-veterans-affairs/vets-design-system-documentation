#!/usr/bin/env node

/**
 * GitHub Governance Metrics Collection Script
 * 
 * Collects governance issue data from the va.gov-team repository
 * to track Collaboration Cycle metrics for the VADS governance dashboard.
 * 
 * Usage: 
 *   node scripts/collect-governance-metrics.js                    # Process most recent complete quarter (default)
 *   node scripts/collect-governance-metrics.js --quarter 2025Q3   # Process specific quarter
 *   node scripts/collect-governance-metrics.js --help             # Display help message
 * 
 * Requires: GITHUB_TOKEN environment variable and GitHub CLI (gh)
 */

const fs = require('fs').promises;
const path = require('path');
// We use execFileSync to invoke GitHub CLI commands directly, rather than the Octokit library.
// This approach leverages existing CLI tooling and simplifies authentication and output parsing.
// Arguments are always passed as separate parameters to prevent command injection.
const { execFileSync } = require('child_process');

const REPO = 'department-of-veterans-affairs/va.gov-team';
const DATA_DIR = path.join(__dirname, '../src/_data/metrics');

/**
 * Get the current quarter based on today's date
 */
function getCurrentQuarter() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // JavaScript months are 0-indexed
  const quarter = Math.ceil(month / 3);
  return `${year}Q${quarter}`;
}

/**
 * Get the most recent completed quarter
 */
function getMostRecentCompleteQuarter() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // JavaScript months are 0-indexed
  const quarter = Math.ceil(month / 3);
  
  // If we're in the first month of a quarter, the previous quarter is complete
  // Otherwise, we need to go back one quarter
  let completeYear = year;
  let completeQuarter = quarter - 1;
  
  if (completeQuarter === 0) {
    completeYear = year - 1;
    completeQuarter = 4;
  }
  
  return `${completeYear}Q${completeQuarter}`;
}

/**
 * Display help message
 */
function displayHelp() {
  console.log(`
GitHub Governance Metrics Collection Script

Collects governance issue data from the va.gov-team repository
to track Collaboration Cycle metrics for the VADS governance dashboard.

USAGE:
  node scripts/collect-governance-metrics.js [OPTIONS]

OPTIONS:
  --quarter YYYYQN    Specify a quarter to process (e.g., 2025Q3)
                      If not specified, processes the most recent complete quarter.
                      
  --help, -h          Display this help message

EXAMPLES:
  # Process the most recent complete quarter (recommended)
  node scripts/collect-governance-metrics.js
  
  # Process a specific quarter
  node scripts/collect-governance-metrics.js --quarter 2025Q3
  
  # Display help
  node scripts/collect-governance-metrics.js --help

REQUIREMENTS:
  - GITHUB_TOKEN environment variable must be set for API access
  - GitHub CLI (gh) must be installed and authenticated

OUTPUT:
  - Saves data to: src/_data/metrics/governance-metrics-YYYYQN.json
  - Updates index: src/_data/metrics/governance-index.json

NOTE:
  This script processes ONE quarter at a time to avoid GitHub API rate limits
  and timeout issues when fetching large numbers of issues.
`);
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--help' || args[i] === '-h') {
      displayHelp();
      process.exit(0);
    } else if (args[i] === '--quarter' && i + 1 < args.length) {
      options.quarter = args[i + 1];
      i++; // Skip the next argument since we consumed it
    }
  }
  
  return options;
}

/**
 * Validate and sanitize search query components to prevent injection
 */
function validateSearchQuery(labels, repo, startDate, endDate) {
  // Validate repository format (owner/repo)
  if (!/^[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/.test(repo)) {
    throw new Error(`Invalid repository format: ${repo}`);
  }
  
  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
    throw new Error(`Invalid date format. Expected YYYY-MM-DD, got: ${startDate}, ${endDate}`);
  }
  
  // Validate and sanitize labels (alphanumeric, hyphens, underscores only)
  const sanitizedLabels = labels.map(label => {
    if (!/^[a-zA-Z0-9._-]+$/.test(label)) {
      throw new Error(`Invalid label format: ${label}. Only alphanumeric characters, periods, hyphens, and underscores are allowed.`);
    }
    return label;
  });
  
  return {
    repo,
    labels: sanitizedLabels,
    startDate,
    endDate
  };
}

/**
 * Parse quarter string (e.g., "2025Q3") into quarter object
 */
function parseQuarter(quarterString) {
  const match = quarterString.match(/^(\d{4})Q(\d)$/);
  if (!match) {
    throw new Error(`Invalid quarter format: ${quarterString}. Expected format: YYYYQN (e.g., 2025Q3)`);
  }
  
  const year = parseInt(match[1], 10);
  const quarter = parseInt(match[2], 10);
  
  if (quarter < 1 || quarter > 4) {
    throw new Error(`Invalid quarter number: ${quarter}. Must be 1, 2, 3, or 4.`);
  }
  
  const startMonth = (quarter - 1) * 3;
  const endMonth = startMonth + 2;
  
  const startDate = new Date(year, startMonth, 1);
  const endDate = new Date(year, endMonth + 1, 0); // Last day of end month
  
  return {
    label: `${year}-Q${quarter}`,
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
    year,
    quarter
  };
}



/**
 * Fetch issues created within a specific date range using targeted search
 */
async function fetchIssuesInDateRange(labels, startDate, endDate, filterBy = 'created') {
  return await fetchIssuesWithDateFilter(labels, startDate, endDate, filterBy);
}

/**
 * Fetch issues using GitHub search API with date filtering and pagination
 */
async function fetchIssuesWithDateFilter(labels, startDate, endDate, filterBy = 'created') {
  console.log(`Searching for issues with labels: ${labels.join(', ')} ${filterBy} between ${startDate} and ${endDate}`);
  
  try {
    // Validate and sanitize input parameters
    const validated = validateSearchQuery(labels, REPO, startDate, endDate);
    
    // Build search arguments for gh search issues command
    const searchArgs = [
      'search', 'issues',
      '--repo', validated.repo,
      '--limit', '1000', // Max limit per page
      '--json', 'number,title,state,createdAt,closedAt,labels,url'
    ];
    
    // Add label filters
    validated.labels.forEach(label => {
      searchArgs.push('--label', label);
    });
    
    // Add date filter based on filterBy parameter
    if (filterBy === 'closed') {
      searchArgs.push('--closed', `${startDate}..${endDate}`);
    } else {
      searchArgs.push('--created', `${startDate}..${endDate}`);
    }
    
    console.log(`  Running: gh ${searchArgs.join(' ')}`);
    
    // Execute gh search issues command
    const output = execFileSync('gh', searchArgs, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024, // 50MB buffer for large result sets
      timeout: 120000 // 2 minute timeout
    });
    
    if (output.trim()) {
      const issues = JSON.parse(output);
      console.log(`  Found ${issues.length} matching issues`);
      
      // Transform the output to match the expected format
      return issues.map(issue => ({
        number: issue.number,
        title: issue.title,
        state: issue.state,
        created_at: issue.createdAt,
        closed_at: issue.closedAt,
        labels: issue.labels.map(l => l.name),
        url: issue.url
      }));
    } else {
      console.log(`  Found 0 matching issues`);
      return [];
    }
  } catch (error) {
    console.error(`Failed to search for issues with labels ${labels.join(', ')}:`, error.message);
    return [];
  }
}

/**
 * Get quarter date ranges for the current and previous quarters
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
    
    if (quarter < 0) {
      year -= Math.ceil(Math.abs(quarter) / 4);
      quarter = (quarter % 4 + 4) % 4;
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
 * Process collaboration cycle issues by quarter
 */
async function processCollaborationCycleMetrics(specificQuarter = null) {
  let quarters;
  
  if (specificQuarter) {
    // Process only the specified quarter
    quarters = [parseQuarter(specificQuarter)];
    console.log(`Processing specific quarter: ${specificQuarter}`);
  } else {
    // Process all quarters (default behavior)
    quarters = getQuarterDateRanges();
  }
  
  const quarterlyData = [];
  
  for (const quarter of quarters) {
    console.log(`Processing data for ${quarter.label}...`);
    
    // 1. Total kick-offs - Issues with "CC-Request" and "collaboration-cycle" labels created in this quarter
    const kickoffIssues = await fetchIssuesInDateRange(
      ['CC-Request', 'collaboration-cycle'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    const totalKickoffs = kickoffIssues.length;
    
    // 2. Individual touchpoint types held - Issues with governance-team + specific touchpoint labels created in this quarter
    const designIntentIssues = await fetchIssuesInDateRange(
      ['governance-team', 'design-intent'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    const designIntentHeld = designIntentIssues.length;

    const midpointReviewIssues = await fetchIssuesInDateRange(
      ['governance-team', 'midpoint-review'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    const midpointReviewHeld = midpointReviewIssues.length;

    const stagingReviewHeldIssues = await fetchIssuesInDateRange(
      ['governance-team', 'staging-review'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    const stagingReviewHeld = stagingReviewHeldIssues.length;

    // Total touchpoints held is the sum of all three types
    const touchpointsHeld = designIntentHeld + midpointReviewHeld + stagingReviewHeld;
    
    // 3. Products shipped - Issues with both "collaboration-cycle" and "staging-review" that were closed in this quarter
    const stagingReviewIssues = await fetchIssuesInDateRange(
      ['collaboration-cycle', 'staging-review'], 
      quarter.startDate, 
      quarter.endDate,
      'closed'
    );
    const productsShipped = stagingReviewIssues.length; // All returned issues are already closed
    
    // 4. Total issues filed at Staging Review
    const stagingIssues = await fetchIssuesInDateRange(
      ['CC-Dashboard', 'Staging', 'collab-cycle-feedback'], 
      quarter.startDate, 
      quarter.endDate
    );
    const totalStagingIssues = stagingIssues.length;
    
    // 5. Launch-blocking issues at Staging Review
    const launchBlockingIssues = await fetchIssuesInDateRange(
      ['CC-Dashboard', 'Staging', 'collab-cycle-feedback', 'launch-blocking'], 
      quarter.startDate, 
      quarter.endDate
    );
    const totalLaunchBlockingIssues = launchBlockingIssues.length;
    
    // 6. Percentage of launch-blocking issues
    const launchBlockingPercentage = totalStagingIssues > 0 ? 
      Math.round((totalLaunchBlockingIssues / totalStagingIssues) * 100) : 0;
    
    quarterlyData.push({
      period: quarter.label,
      total_kickoffs: totalKickoffs,
      touchpoints_held: touchpointsHeld,
      design_intent_held: designIntentHeld,
      midpoint_review_held: midpointReviewHeld,
      staging_review_held: stagingReviewHeld,
      products_shipped: productsShipped,
      total_staging_issues: totalStagingIssues,
      launch_blocking_issues: totalLaunchBlockingIssues,
      launch_blocking_percentage: launchBlockingPercentage
    });
  }
  
  return quarterlyData;
}

/**
 * Get current VFS teams participating (In Progress issues in Collaboration Cycle)
 */
async function getCurrentParticipatingTeams() {
  try {
    console.log('Searching for currently open collaboration-cycle issues...');
    
    const output = execFileSync('gh', [
      'search', 'issues',
      '--repo', REPO,
      '--label', 'collaboration-cycle',
      '--state', 'open',
      '--limit', '1', // Just get count, not all issues
      '--json', 'number'
    ], {
      encoding: 'utf8',
      maxBuffer: 1 * 1024 * 1024,
      timeout: 30000 // 30 second timeout
    });
    
    // Parse to get actual count from the search
    // Note: gh search issues doesn't return total count directly,
    // so we need to get all results up to limit
    const issues = JSON.parse(output);
    
    // For a more accurate count, we can search with a higher limit
    // But to avoid timeout, we'll use the limit of 1000 which is the max
    const countOutput = execFileSync('gh', [
      'search', 'issues',
      '--repo', REPO,
      '--label', 'collaboration-cycle',
      '--state', 'open',
      '--limit', '1000',
      '--json', 'number'
    ], {
      encoding: 'utf8',
      maxBuffer: 5 * 1024 * 1024,
      timeout: 45000 // 45 second timeout for larger result set
    });
    
    const allIssues = JSON.parse(countOutput);
    const count = allIssues.length;
    console.log(`  Found ${count} open collaboration-cycle issues`);
    return count;
  } catch (error) {
    console.error('Failed to fetch participating teams:', error.message);
    console.log('  Continuing with 0 for participating teams count...');
    return 0;
  }
}

/**
 * Calculate summary statistics
 */
function calculateSummary(quarterlyData) {
  if (!quarterlyData || quarterlyData.length === 0) {
    return {
      current_quarter: 'N/A',
      total_kickoffs: 0,
      touchpoints_held: 0,
      design_intent_held: 0,
      midpoint_review_held: 0,
      staging_review_held: 0,
      products_shipped: 0,
      total_staging_issues: 0,
      launch_blocking_issues: 0,
      launch_blocking_percentage: 0,
      participating_teams: 0,
      last_updated: new Date().toISOString()
    };
  }

  // Find the most recent quarter with complete data (all touchpoint types represented)
  let latestQuarterWithData = null;
  let previousQuarterWithData = null;
  
  // Look through quarters from most recent to oldest
  for (let i = quarterlyData.length - 1; i >= 0; i--) {
    const quarter = quarterlyData[i];
    // A complete quarter should have meaningful kickoffs AND touchpoints including multiple types
    const hasCompleteData = quarter.total_kickoffs > 0 && 
                           quarter.touchpoints_held > 0 &&
                           (quarter.design_intent_held > 0 || quarter.midpoint_review_held > 0 || quarter.staging_review_held > 0) &&
                           // Either have multiple touchpoint types OR be from 2024 (known complete data)
                           (quarter.period.includes('2024') || 
                            (quarter.design_intent_held > 0 && quarter.midpoint_review_held > 0) ||
                            (quarter.design_intent_held > 0 && quarter.staging_review_held > 0) ||
                            (quarter.midpoint_review_held > 0 && quarter.staging_review_held > 0));
    
    if (hasCompleteData) {
      if (!latestQuarterWithData) {
        latestQuarterWithData = quarter;
      } else if (!previousQuarterWithData) {
        previousQuarterWithData = quarter;
        break; // We have both quarters we need
      }
    }
  }
  
  // Use the latest quarter with data, fallback to the actual latest quarter
  const latestQuarter = latestQuarterWithData || quarterlyData[quarterlyData.length - 1];
  const previousQuarter = previousQuarterWithData || quarterlyData[quarterlyData.length - 2];
  
  return {
    current_quarter: latestQuarter.period,
    total_kickoffs: latestQuarter.total_kickoffs,
    touchpoints_held: latestQuarter.touchpoints_held,
    design_intent_held: latestQuarter.design_intent_held,
    midpoint_review_held: latestQuarter.midpoint_review_held,
    staging_review_held: latestQuarter.staging_review_held,
    products_shipped: latestQuarter.products_shipped,
    total_staging_issues: latestQuarter.total_staging_issues,
    launch_blocking_issues: latestQuarter.launch_blocking_issues,
    launch_blocking_percentage: latestQuarter.launch_blocking_percentage,
    participating_teams: 0, // Will be updated by getCurrentParticipatingTeams
    last_updated: new Date().toISOString(),
    // Add trends if we have previous quarter data
    trends: previousQuarter ? {
      kickoffs_trend: calculateTrend(latestQuarter.total_kickoffs, previousQuarter.total_kickoffs),
      touchpoints_trend: calculateTrend(latestQuarter.touchpoints_held, previousQuarter.touchpoints_held),
      design_intent_trend: calculateTrend(latestQuarter.design_intent_held, previousQuarter.design_intent_held),
      midpoint_review_trend: calculateTrend(latestQuarter.midpoint_review_held, previousQuarter.midpoint_review_held),
      staging_review_trend: calculateTrend(latestQuarter.staging_review_held, previousQuarter.staging_review_held),
      products_trend: calculateTrend(latestQuarter.products_shipped, previousQuarter.products_shipped),
      staging_issues_trend: calculateTrend(latestQuarter.total_staging_issues, previousQuarter.total_staging_issues)
    } : null
  };
}

/**
 * Generic trend calculation helper
 */
function calculateTrend(current, previous) {
  if (previous === 0) {
    return {
      direction: current > 0 ? 'up' : 'neutral',
      percentage: current > 0 ? 100 : 0,
      value: current
    };
  }
  
  const change = current - previous;
  const percentageChange = Math.round(Math.abs(change) / previous * 100);
  
  return {
    direction: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
    percentage: percentageChange,
    value: change
  };
}

/**
 * Print detailed results for a single quarter
 */
function printQuarterDetails(quarterData) {
  console.log(`\n🔍 Detailed Results for ${quarterData.period}:`);
  console.log(`   📋 Total Kickoffs: ${quarterData.total_kickoffs}`);
  console.log(`      - Issues labeled with CC-Request + collaboration-cycle created in this period`);
  console.log(`   ✅ Total Touchpoints Held: ${quarterData.touchpoints_held}`);
  console.log(`      - Sum of all three touchpoint types held by governance team in this period:`);
  console.log(`      - 🎨 Design Intent: ${quarterData.design_intent_held} (governance-team + design-intent labels)`);
  console.log(`      - 🔄 Midpoint Review: ${quarterData.midpoint_review_held} (governance-team + midpoint-review labels)`);
  console.log(`      - 🚀 Staging Review: ${quarterData.staging_review_held} (governance-team + staging-review labels)`);
  console.log(`   � Products Shipped: ${quarterData.products_shipped}`);
  console.log(`      - Issues labeled with collaboration-cycle + staging-review closed in this period`);
  console.log(`   ⚠️  Total Staging Issues: ${quarterData.total_staging_issues}`);
  console.log(`      - Issues labeled with CC-Dashboard + Staging + collab-cycle-feedback created in this period`);
  console.log(`   🚫 Launch Blocking Issues: ${quarterData.launch_blocking_issues}`);
  console.log(`      - Same as staging issues but also labeled with launch-blocking`);
  console.log(`   📊 Launch Blocking Percentage: ${quarterData.launch_blocking_percentage}%`);
  console.log(`      - Percentage of staging issues that are launch-blocking\n`);
}

/**
 * Export data to CSV format
 */
async function exportToCSV(quarterlyData) {
  const csvRows = [
    'Quarter,Total Kickoffs,Touchpoints Held,Design Intent Held,Midpoint Review Held,Staging Review Held,Products Shipped,Total Staging Issues,Launch Blocking Issues,Launch Blocking Percentage'
  ];
  
  quarterlyData.forEach(row => {
    csvRows.push([
      row.period,
      row.total_kickoffs,
      row.touchpoints_held,
      row.design_intent_held,
      row.midpoint_review_held,
      row.staging_review_held,
      row.products_shipped,
      row.total_staging_issues,
      row.launch_blocking_issues,
      row.launch_blocking_percentage
    ].join(','));
  });
  
  const csvOutput = csvRows.join('\n');
  const csvFile = path.join(DATA_DIR, 'governance-metrics.csv');
  await fs.writeFile(csvFile, csvOutput);
  console.log(`✅ CSV data written to ${csvFile}`);
}

/**
 * Save governance data for a specific quarter
 */
async function saveQuarterlyData(quarterString, quarterData, participatingTeams = 0) {
  // Ensure data directory exists
  await fs.mkdir(DATA_DIR, { recursive: true });
  
  const governanceData = {
    quarter: quarterString,
    data: quarterData,
    participating_teams: participatingTeams,
    generated_at: new Date().toISOString(),
    data_source: 'va.gov-team repository',
    description: `Governance metrics for ${quarterString}`
  };
  
  // Write to data directory (Jekyll will expose as site.data.metrics.*)
  const quarterFile = `governance-metrics-${quarterString}.json`;
  const dataPath = path.join(DATA_DIR, quarterFile);
  
  const jsonOutput = JSON.stringify(governanceData, null, 2);
  await fs.writeFile(dataPath, jsonOutput);
  
  console.log(`✅ Quarter data saved to ${quarterFile}`);
  return quarterFile;
}

/**
 * Update the governance index with most recent complete quarter info
 */
async function updateGovernanceIndex() {
  const mostRecentQuarter = getMostRecentCompleteQuarter();
  const currentQuarter = getCurrentQuarter();
  
  const indexData = {
    current_quarter: currentQuarter,
    latest_complete_quarter: mostRecentQuarter,
    latest_complete_quarter_file: `governance-metrics-${mostRecentQuarter}.json`,
    last_updated: new Date().toISOString(),
    description: 'Index pointing to the most recent complete governance metrics data'
  };
  
  const indexOutput = JSON.stringify(indexData, null, 2);
  const dataPath = path.join(DATA_DIR, 'governance-index.json');
  
  await fs.writeFile(dataPath, indexOutput);
  
  console.log(`✅ Governance index updated - latest complete quarter: ${mostRecentQuarter}`);
  return indexData;
}

/**
 * Main execution
 */
async function main() {
  try {
    const options = parseArgs();
    
    if (!process.env.GITHUB_TOKEN) {
      console.log('Warning: GITHUB_TOKEN not set. Rate limiting may occur.');
    }
    
    // Determine which quarter to process
    let targetQuarter = options.quarter;
    if (!targetQuarter) {
      // Default to the most recent complete quarter
      targetQuarter = getMostRecentCompleteQuarter();
      console.log(`No quarter specified. Processing most recent complete quarter: ${targetQuarter}`);
    }
    
    console.log(`Starting governance metrics collection for ${targetQuarter}...`);
    
    // Process the specific quarter
    const quarterlyData = await processCollaborationCycleMetrics(targetQuarter);
    
    if (quarterlyData.length === 0) {
      console.log(`❌ No data found for quarter ${targetQuarter}`);
      return;
    }
    
    // Get participating teams
    console.log('Getting current participating teams...');
    const participatingTeams = await getCurrentParticipatingTeams();
    
    // Save the quarterly data
    await saveQuarterlyData(targetQuarter, quarterlyData[0], participatingTeams);
    
    // Update the governance index
    const indexData = await updateGovernanceIndex();
    
    // Show quarter details
    const quarter = quarterlyData[0];
    console.log(`\n📊 Summary for ${quarter.period}:`);
    console.log(`   - Total kickoffs: ${quarter.total_kickoffs}`);
    console.log(`   - Total touchpoints held: ${quarter.touchpoints_held}`);
    console.log(`     - Design intent: ${quarter.design_intent_held}`);
    console.log(`     - Midpoint review: ${quarter.midpoint_review_held}`);
    console.log(`     - Staging review: ${quarter.staging_review_held}`);
    console.log(`   - Products shipped: ${quarter.products_shipped}`);
    console.log(`   - Total staging issues: ${quarter.total_staging_issues}`);
    console.log(`   - Launch blocking issues: ${quarter.launch_blocking_issues}`);
    console.log(`   - Launch blocking percentage: ${quarter.launch_blocking_percentage}%`);
    console.log(`   - Participating teams: ${participatingTeams}`);
    console.log(`\n🔄 Current quarter: ${indexData.current_quarter}`);
    console.log(`📈 Latest complete quarter for reporting: ${indexData.latest_complete_quarter}`);
    
  } catch (error) {
    console.error('❌ Error collecting governance metrics:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  fetchIssuesInDateRange,
  processCollaborationCycleMetrics,
  getCurrentParticipatingTeams,
  calculateSummary
};