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
const https = require('https');
// We use execFileSync to invoke GitHub CLI commands directly, rather than the Octokit library.
// This approach leverages existing CLI tooling and simplifies authentication and output parsing.
// We use execFileSync (not execSync/exec) and pass arguments as array elements rather than string concatenation to prevent command injection attacks.
const { execFileSync } = require('child_process');

const REPO = 'department-of-veterans-affairs/va.gov-team';
const REPO_OWNER = 'department-of-veterans-affairs';
const REPO_NAME = 'va.gov-team';
const SENSITIVE_REPO = 'department-of-veterans-affairs/va.gov-team-sensitive';
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
 * Make a GraphQL request to GitHub API
 */
function makeGraphQLRequest(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      reject(new Error('GITHUB_TOKEN environment variable is required for GraphQL requests'));
      return;
    }

    const data = JSON.stringify({ query, variables });

    const options = {
      hostname: 'api.github.com',
      path: '/graphql',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'User-Agent': 'VA-Design-System-Metrics'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(body);

          if (response.errors) {
            reject(new Error(`GraphQL errors: ${JSON.stringify(response.errors)}`));
            return;
          }

          resolve(response.data);
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

/**
 * Fetch total team count from va.gov-team-sensitive/teams/team-lookup.json
 * Returns the count of teams, or null if access is denied
 */
async function fetchTotalPlatformTeams() {
  console.log('Fetching total platform teams from va.gov-team-sensitive...');

  try {
    const output = execFileSync('gh', [
      'api',
      `repos/${SENSITIVE_REPO}/contents/teams/team-lookup.json`,
      '--jq', '.content'
    ], {
      encoding: 'utf8',
      timeout: 30000
    });

    if (output.trim()) {
      // Decode base64 content
      const jsonContent = Buffer.from(output.trim(), 'base64').toString('utf8');
      const teamData = JSON.parse(jsonContent);

      // Count teams - team-lookup.json is an object with team keys
      const teamCount = Object.keys(teamData).length;
      console.log(`  Found ${teamCount} teams in team-lookup.json`);
      return teamCount;
    }

    return null;
  } catch (error) {
    console.warn(`  Warning: Could not fetch team-lookup.json from va.gov-team-sensitive: ${error.message}`);
    console.warn('  This may be due to missing repository access. Continuing without total platform teams count.');
    return null;
  }
}

/**
 * Fetch kick-off issues with body text using GraphQL API
 * This is needed to extract team names from issue bodies
 */
async function fetchKickoffIssuesWithBody(startDate, endDate) {
  console.log(`Fetching kick-off issues with body text (${startDate} to ${endDate})...`);

  const query = `
    query($searchQuery: String!, $cursor: String) {
      search(query: $searchQuery, type: ISSUE, first: 50, after: $cursor) {
        issueCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          ... on Issue {
            number
            title
            createdAt
            body
            labels(first: 50) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `;

  // Build search query for kick-off issues
  const searchQuery = `repo:${REPO_OWNER}/${REPO_NAME} is:issue label:CC-Request label:collaboration-cycle created:${startDate}..${endDate}`;

  let allIssues = [];
  let hasNextPage = true;
  let cursor = null;

  while (hasNextPage) {
    const variables = {
      searchQuery,
      cursor
    };

    try {
      const data = await makeGraphQLRequest(query, variables);
      const { search } = data;

      if (search && search.nodes) {
        allIssues = allIssues.concat(search.nodes);
        hasNextPage = search.pageInfo.hasNextPage;
        cursor = search.pageInfo.endCursor;

        console.log(`  Fetched ${allIssues.length} kick-off issues so far...`);
      } else {
        hasNextPage = false;
      }

      // Rate limiting: wait 1 second between requests
      if (hasNextPage) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`  Error fetching kick-off issues via GraphQL: ${error.message}`);
      if (allIssues.length === 0) {
        console.error('  No issues were fetched before error. Returning null to indicate data unavailable.');
        return null;
      }
      console.warn(`  Returning ${allIssues.length} issues fetched before error.`);
      hasNextPage = false;
    }
  }

  console.log(`  Total kick-off issues found: ${allIssues.length}`);
  return allIssues;
}

/**
 * Extract team name from kick-off issue body
 * Handles both markdown link format [Team Name](URL) and plain text
 */
function extractTeamName(issueBody) {
  if (!issueBody) return null;

  // First, try to match markdown link format: [Team Name](URL)
  // Pattern: ### VFS team name followed by [text](url)
  const linkMatch = issueBody.match(/###\s+VFS team name\s*\n+\s*\[([^\]]+)\]/i);
  if (linkMatch && linkMatch[1]) {
    const teamName = linkMatch[1].trim();
    if (teamName && teamName !== '_No response_' && teamName.length > 0) {
      return teamName;
    }
  }

  // Fall back to plain text format
  // Pattern: ### VFS team name followed by text (not starting with [ or #)
  const textMatch = issueBody.match(/###\s+VFS team name\s*\n+\s*([^\n#\[]+)/i);
  if (textMatch && textMatch[1]) {
    const teamName = textMatch[1].trim();
    if (teamName && teamName !== '_No response_' && teamName.length > 0) {
      return teamName;
    }
  }

  return null;
}

/**
 * Count unique teams from kick-off issues (case-insensitive)
 */
function countUniqueTeams(kickoffIssues) {
  const teamNames = new Set();

  kickoffIssues.forEach(issue => {
    const teamName = extractTeamName(issue.body);
    if (teamName) {
      // Use lowercase for case-insensitive comparison
      teamNames.add(teamName.toLowerCase());
    }
  });

  return teamNames.size;
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
      maxBuffer: 10 * 1024 * 1024, // 10MB buffer is generous for JSON output
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

  // Fetch total platform teams once (this is a point-in-time count, not quarterly)
  const totalPlatformTeams = await fetchTotalPlatformTeams();

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

    // 1b. Fetch kickoff issues with body text via GraphQL to extract team names
    const kickoffIssuesWithBody = await fetchKickoffIssuesWithBody(quarter.startDate, quarter.endDate);

    // 1c. Count unique teams in Collab Cycle this quarter
    // If kickoffIssuesWithBody is null, the GraphQL fetch failed entirely — use null to signal data unavailable
    const uniqueTeamsInCollabCycle = kickoffIssuesWithBody !== null ? countUniqueTeams(kickoffIssuesWithBody) : null;
    
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

    // PO Sync touchpoints - Issues with PO-Sync-approved label created in this quarter
    const poSyncIssues = await fetchIssuesInDateRange(
      ['PO-Sync-approved'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    const poSyncHeld = poSyncIssues.length;

    // Architecture Intent touchpoints - Issues with architecture-intent label created in this quarter
    const architectureIntentIssues = await fetchIssuesInDateRange(
      ['architecture-intent'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    const architectureIntentHeld = architectureIntentIssues.length;

    // Total touchpoints held is the sum of all touchpoint types
    const touchpointsHeld = poSyncHeld + architectureIntentHeld + designIntentHeld + midpointReviewHeld + stagingReviewHeld;
    
    // 3. Get all staging-review finding issues created in this quarter
    const stagingFindingIssues = await fetchIssuesInDateRange(
      ['CC-Dashboard', 'Staging', 'collab-cycle-feedback'], 
      quarter.startDate, 
      quarter.endDate,
      'created'
    );
    
    // Total issues filed at Staging Review
    const totalStagingIssues = stagingFindingIssues.length;
    
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

    // 7. Calculate average staging findings per team
    // Formula: total_staging_issues / unique_teams_in_collab_cycle
    // If uniqueTeamsInCollabCycle is null (data fetch failed), preserve null to render N/A on dashboard
    const avgStagingFindingsPerTeam = uniqueTeamsInCollabCycle !== null && uniqueTeamsInCollabCycle > 0 ?
      Math.round((totalStagingIssues / uniqueTeamsInCollabCycle) * 10) / 10 : uniqueTeamsInCollabCycle === null ? null : 0;

    quarterlyData.push({
      period: quarter.label,
      total_kickoffs: totalKickoffs,
      touchpoints_held: touchpointsHeld,
      po_sync_held: poSyncHeld,
      architecture_intent_held: architectureIntentHeld,
      design_intent_held: designIntentHeld,
      midpoint_review_held: midpointReviewHeld,
      staging_review_held: stagingReviewHeld,
      total_staging_issues: totalStagingIssues,
      launch_blocking_issues: totalLaunchBlockingIssues,
      launch_blocking_percentage: launchBlockingPercentage,
      // New team metrics
      total_platform_teams: totalPlatformTeams,
      unique_teams_in_collab_cycle: uniqueTeamsInCollabCycle,
      avg_staging_findings_per_team: avgStagingFindingsPerTeam
    });
  }

  return quarterlyData;
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
      total_staging_issues: 0,
      launch_blocking_issues: 0,
      launch_blocking_percentage: 0,
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
    // Use a more robust check for complete data rather than hardcoded year assumptions
    const hasMultipleTouchpointTypes = (quarter.design_intent_held > 0 && quarter.midpoint_review_held > 0) ||
                                     (quarter.design_intent_held > 0 && quarter.staging_review_held > 0) ||
                                     (quarter.midpoint_review_held > 0 && quarter.staging_review_held > 0);
    
    // Minimum thresholds for considering a quarter "complete"
    const hasMinimumActivity = quarter.total_kickoffs >= 3 && quarter.touchpoints_held >= 5;
    
    const hasCompleteData = quarter.total_kickoffs > 0 && 
                           quarter.touchpoints_held > 0 &&
                           (quarter.design_intent_held > 0 || quarter.midpoint_review_held > 0 || quarter.staging_review_held > 0) &&
                           // Either have multiple touchpoint types OR meet minimum activity thresholds
                           (hasMultipleTouchpointTypes || hasMinimumActivity);
    
    if (hasCompleteData) {
      if (!latestQuarterWithData) {
        latestQuarterWithData = quarter;
      } else {
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
    total_staging_issues: latestQuarter.total_staging_issues,
    launch_blocking_issues: latestQuarter.launch_blocking_issues,
    launch_blocking_percentage: latestQuarter.launch_blocking_percentage,
    last_updated: new Date().toISOString(),
    // Add trends if we have previous quarter data
    trends: previousQuarter ? {
      kickoffs_trend: calculateTrend(latestQuarter.total_kickoffs, previousQuarter.total_kickoffs),
      touchpoints_trend: calculateTrend(latestQuarter.touchpoints_held, previousQuarter.touchpoints_held),
      design_intent_trend: calculateTrend(latestQuarter.design_intent_held, previousQuarter.design_intent_held),
      midpoint_review_trend: calculateTrend(latestQuarter.midpoint_review_held, previousQuarter.midpoint_review_held),
      staging_review_trend: calculateTrend(latestQuarter.staging_review_held, previousQuarter.staging_review_held),
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
  console.log(`      - Sum of all touchpoint types held by governance team in this period:`);
  console.log(`      - 🤝 PO Sync: ${quarterData.po_sync_held} (PO-Sync-approved label)`);
  console.log(`      - 🏗️ Architecture Intent: ${quarterData.architecture_intent_held} (architecture-intent label)`);
  console.log(`      - 🎨 Design Intent: ${quarterData.design_intent_held} (governance-team + design-intent labels)`);
  console.log(`      - 🔄 Midpoint Review: ${quarterData.midpoint_review_held} (governance-team + midpoint-review labels)`);
  console.log(`      - 🚀 Staging Review: ${quarterData.staging_review_held} (governance-team + staging-review labels)`);
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
    'Quarter,Total Kickoffs,Touchpoints Held,PO Sync Held,Architecture Intent Held,Design Intent Held,Midpoint Review Held,Staging Review Held,Total Staging Issues,Launch Blocking Issues,Launch Blocking Percentage'
  ];
  
  quarterlyData.forEach(row => {
    csvRows.push([
      row.period,
      row.total_kickoffs,
      row.touchpoints_held,
      row.po_sync_held,
      row.architecture_intent_held,
      row.design_intent_held,
      row.midpoint_review_held,
      row.staging_review_held,
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
async function saveQuarterlyData(quarterString, quarterData) {
  // Ensure data directory exists
  await fs.mkdir(DATA_DIR, { recursive: true });
  
  const governanceData = {
    quarter: quarterString,
    data: quarterData,
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
    
    // Save the quarterly data
    await saveQuarterlyData(targetQuarter, quarterlyData[0]);
    
    // Update the governance index
    const indexData = await updateGovernanceIndex();
    
    // Show quarter details
    const quarter = quarterlyData[0];
    console.log(`\n📊 Summary for ${quarter.period}:`);
    console.log(`   - Total kickoffs: ${quarter.total_kickoffs}`);
    console.log(`   - Total touchpoints held: ${quarter.touchpoints_held}`);
    console.log(`     - PO sync: ${quarter.po_sync_held}`);
    console.log(`     - Architecture intent: ${quarter.architecture_intent_held}`);
    console.log(`     - Design intent: ${quarter.design_intent_held}`);
    console.log(`     - Midpoint review: ${quarter.midpoint_review_held}`);
    console.log(`     - Staging review: ${quarter.staging_review_held}`);
    console.log(`   - Total staging issues: ${quarter.total_staging_issues}`);
    console.log(`   - Launch blocking issues: ${quarter.launch_blocking_issues}`);
    console.log(`   - Launch blocking percentage: ${quarter.launch_blocking_percentage}%`);
    console.log(`\n👥 Team Metrics:`);
    console.log(`   - Total platform teams: ${quarter.total_platform_teams !== null ? quarter.total_platform_teams : 'N/A (access denied)'}`);
    console.log(`   - Unique teams in Collab Cycle: ${quarter.unique_teams_in_collab_cycle}`);
    console.log(`   - Avg staging findings per team: ${quarter.avg_staging_findings_per_team}`);
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
  calculateSummary,
  fetchTotalPlatformTeams,
  fetchKickoffIssuesWithBody,
  extractTeamName,
  countUniqueTeams
};