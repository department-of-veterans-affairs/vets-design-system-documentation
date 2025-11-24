#!/usr/bin/env node

/**
 * Collaboration Cycle Time Analytics Script
 * 
 * Uses GitHub GraphQL API to calculate collaboration cycle times across
 * fiscal years without quarter boundaries. Measures time from kick-off
 * (CC-Request) to Staging Review completion.
 * 
 * Usage: 
 *   node scripts/collect-collab-cycle-time.js                          # Current FY
 *   node scripts/collect-collab-cycle-time.js --fy 2025                # Specific FY
 *   node scripts/collect-collab-cycle-time.js --start-date 2024-10-01  # Custom date range
 *   node scripts/collect-collab-cycle-time.js --help                   # Display help
 * 
 * Requires: GITHUB_TOKEN environment variable
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');

const REPO_OWNER = 'department-of-veterans-affairs';
const REPO_NAME = 'va.gov-team';
const DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const GITHUB_API = 'https://api.github.com/graphql';

/**
 * Display help message
 */
function displayHelp() {
  console.log(`
Collaboration Cycle Time Analytics Script

Calculates collaboration cycle times from kick-off to Staging Review
across fiscal years using GitHub GraphQL API.

USAGE:
  node scripts/collect-collab-cycle-time.js [OPTIONS]

OPTIONS:
  --fy YYYY           Specify a fiscal year (e.g., 2025 = Oct 2024 - Sep 2025)
                      If not specified, uses current fiscal year.
                      
  --start-date DATE   Custom start date (YYYY-MM-DD)
  --end-date DATE     Custom end date (YYYY-MM-DD)
                      
  --help, -h          Display this help message

EXAMPLES:
  # Analyze current fiscal year
  node scripts/collect-collab-cycle-time.js
  
  # Analyze specific fiscal year
  node scripts/collect-collab-cycle-time.js --fy 2025
  
  # Analyze custom date range
  node scripts/collect-collab-cycle-time.js --start-date 2024-10-01 --end-date 2025-09-30
  
  # Display help
  node scripts/collect-collab-cycle-time.js --help

REQUIREMENTS:
  - GITHUB_TOKEN environment variable must be set

OUTPUT:
  - Saves data to: src/_data/metrics/collab-cycle-time-FY{year}.json
  - Includes: mean, median, distribution, and per-team statistics

METRICS:
  - Kick-off to Staging Review time (days)
  - Distribution by VFS team
  - Trend analysis over time
  - Outlier detection
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
    } else if (args[i] === '--fy' && i + 1 < args.length) {
      options.fy = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--start-date' && i + 1 < args.length) {
      options.startDate = args[i + 1];
      i++;
    } else if (args[i] === '--end-date' && i + 1 < args.length) {
      options.endDate = args[i + 1];
      i++;
    }
  }
  
  return options;
}

/**
 * Get fiscal year date range
 * Federal fiscal year runs Oct 1 - Sep 30
 */
function getFiscalYearDates(fy) {
  const fyYear = fy || getCurrentFiscalYear();
  const startDate = `${fyYear - 1}-10-01`;
  const endDate = `${fyYear}-09-30`;
  
  return {
    fy: fyYear,
    startDate,
    endDate,
    label: `FY${fyYear}`
  };
}

/**
 * Get current fiscal year
 */
function getCurrentFiscalYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // JavaScript months are 0-indexed
  
  // If we're in Oct-Dec, we're in the next fiscal year
  return month >= 10 ? year + 1 : year;
}

/**
 * Make a GraphQL request to GitHub API
 */
function makeGraphQLRequest(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      reject(new Error('GITHUB_TOKEN environment variable is required'));
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
 * Fetch kick-off issues with timeline events using GraphQL
 * Returns issues with CC-Request and collaboration-cycle labels plus their label addition events
 */
async function fetchKickoffIssues(startDate, endDate) {
  console.log(`Fetching kick-off issues created between ${startDate} and ${endDate}...`);
  
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
  
  // Build search query
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
      console.error(`Error fetching kick-off issues: ${error.message}`);
      hasNextPage = false;
    }
  }
  
  console.log(`  Total kick-off issues found: ${allIssues.length}`);
  return allIssues;
}

/**
 * Fetch timeline events for a specific issue to find when labels were added
 */
async function fetchIssueLabelTimeline(issueNumber) {
  const query = `
    query($owner: String!, $repo: String!, $issueNumber: Int!, $cursor: String) {
      repository(owner: $owner, name: $repo) {
        issue(number: $issueNumber) {
          timelineItems(first: 100, after: $cursor, itemTypes: [LABELED_EVENT]) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              ... on LabeledEvent {
                createdAt
                label {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;
  
  let allEvents = [];
  let hasNextPage = true;
  let cursor = null;
  
  while (hasNextPage) {
    const variables = {
      owner: REPO_OWNER,
      repo: REPO_NAME,
      issueNumber: issueNumber,
      cursor
    };
    
    try {
      const data = await makeGraphQLRequest(query, variables);
      
      if (data.repository && data.repository.issue && data.repository.issue.timelineItems) {
        const { timelineItems } = data.repository.issue;
        allEvents = allEvents.concat(timelineItems.nodes);
        hasNextPage = timelineItems.pageInfo.hasNextPage;
        cursor = timelineItems.pageInfo.endCursor;
      } else {
        hasNextPage = false;
      }
      
      // Rate limiting
      if (hasNextPage) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      console.error(`  Error fetching timeline for issue ${issueNumber}: ${error.message}`);
      hasNextPage = false;
    }
  }
  
  return allEvents;
}

/**
 * Find when the staging-review label was added to an issue
 */
function findStagingReviewLabelTime(labelEvents) {
  // Look for common staging review label names
  const stagingLabels = ['staging-review', 'Staging Review', 'staging review'];
  
  for (const event of labelEvents) {
    if (event.label && stagingLabels.includes(event.label.name)) {
      return event.createdAt;
    }
  }
  
  return null;
}

/**
 * Extract team name from kick-off issue body
 */
function extractTeamName(issueBody) {
  if (!issueBody) return null;
  
  // Look for the team name in the format:
  // ### VFS team name
  // <team-name>
  const teamNameMatch = issueBody.match(/###\s+VFS team name\s+([^\n#]+)/i);
  if (teamNameMatch && teamNameMatch[1]) {
    const teamName = teamNameMatch[1].trim();
    if (teamName && teamName !== '_No response_' && teamName.length > 0) {
      return teamName;
    }
  }
  
  return null;
}

/**
 * Calculate cycle times for kick-off issues based on when staging-review label was added
 * Returns an array of cycle time data points
 */
async function calculateCycleTimes(kickoffIssues) {
  console.log('Calculating collaboration cycle times from label events...');
  
  const cycleTimeData = [];
  let processedCount = 0;
  
  for (const issue of kickoffIssues) {
    processedCount++;
    
    if (processedCount % 10 === 0) {
      console.log(`  Processing issue ${processedCount}/${kickoffIssues.length}...`);
    }
    
    // Fetch label timeline for this issue
    const labelEvents = await fetchIssueLabelTimeline(issue.number);
    
    // Find when staging-review label was added
    const stagingReviewTime = findStagingReviewLabelTime(labelEvents);
    
    if (stagingReviewTime) {
      const kickoffDate = new Date(issue.createdAt);
      const stagingDate = new Date(stagingReviewTime);
      const days = Math.round((stagingDate - kickoffDate) / (1000 * 60 * 60 * 24));
      
      if (!isNaN(days) && days >= 0) {
        const teamName = extractTeamName(issue.body);
        
        cycleTimeData.push({
          kickoffIssue: issue.number,
          kickoffTitle: issue.title,
          kickoffDate: issue.createdAt,
          stagingReviewLabeledAt: stagingReviewTime,
          cycleTimeDays: days,
          teamName: teamName || 'Unknown'
        });
      }
    }
    
    // Rate limiting: wait between requests
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log(`  Calculated ${cycleTimeData.length} cycle times from ${kickoffIssues.length} kick-off issues`);
  return cycleTimeData;
}

/**
 * Calculate statistical metrics
 */
function calculateStatistics(cycleTimeData) {
  if (cycleTimeData.length === 0) {
    return {
      count: 0,
      mean: 0,
      median: 0,
      min: 0,
      max: 0,
      standardDeviation: 0,
      percentile25: 0,
      percentile75: 0,
      percentile90: 0
    };
  }
  
  // Sort by cycle time
  const sorted = [...cycleTimeData].sort((a, b) => a.cycleTimeDays - b.cycleTimeDays);
  const times = sorted.map(d => d.cycleTimeDays);
  
  // Calculate mean
  const sum = times.reduce((acc, val) => acc + val, 0);
  const mean = Math.round(sum / times.length);
  
  // Calculate median
  const mid = Math.floor(times.length / 2);
  const median = times.length % 2 === 0 
    ? Math.round((times[mid - 1] + times[mid]) / 2)
    : times[mid];
  
  // Calculate standard deviation
  const variance = times.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / times.length;
  const standardDeviation = Math.round(Math.sqrt(variance));
  
  // Calculate percentiles
  const getPercentile = (arr, p) => {
    const index = Math.ceil(arr.length * p) - 1;
    return arr[Math.max(0, index)];
  };
  
  return {
    count: times.length,
    mean,
    median,
    min: times[0],
    max: times[times.length - 1],
    standardDeviation,
    percentile25: getPercentile(times, 0.25),
    percentile75: getPercentile(times, 0.75),
    percentile90: getPercentile(times, 0.90)
  };
}

/**
 * Calculate per-team statistics
 */
function calculateTeamStatistics(cycleTimeData) {
  const teamMap = new Map();
  
  cycleTimeData.forEach(data => {
    const teamName = data.teamName || 'Unknown';
    if (!teamMap.has(teamName)) {
      teamMap.set(teamName, []);
    }
    teamMap.get(teamName).push(data.cycleTimeDays);
  });
  
  const teamStats = [];
  teamMap.forEach((times, teamName) => {
    const sum = times.reduce((acc, val) => acc + val, 0);
    const mean = Math.round(sum / times.length);
    
    const sorted = [...times].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0 
      ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
      : sorted[mid];
    
    teamStats.push({
      teamName,
      count: times.length,
      mean,
      median,
      min: sorted[0],
      max: sorted[sorted.length - 1]
    });
  });
  
  // Sort by count descending
  teamStats.sort((a, b) => b.count - a.count);
  
  return teamStats;
}

/**
 * Calculate monthly trends
 */
function calculateMonthlyTrends(cycleTimeData) {
  const monthMap = new Map();
  
  cycleTimeData.forEach(data => {
    const date = new Date(data.kickoffDate);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, []);
    }
    monthMap.get(monthKey).push(data.cycleTimeDays);
  });
  
  const monthlyTrends = [];
  monthMap.forEach((times, monthKey) => {
    const sum = times.reduce((acc, val) => acc + val, 0);
    const mean = Math.round(sum / times.length);
    
    const sorted = [...times].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0 
      ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
      : sorted[mid];
    
    monthlyTrends.push({
      month: monthKey,
      count: times.length,
      mean,
      median
    });
  });
  
  // Sort by month
  monthlyTrends.sort((a, b) => a.month.localeCompare(b.month));
  
  return monthlyTrends;
}

/**
 * Identify outliers (values > 1.5 * IQR above Q3 or below Q1)
 */
function identifyOutliers(cycleTimeData) {
  if (cycleTimeData.length < 4) return [];
  
  const sorted = [...cycleTimeData].sort((a, b) => a.cycleTimeDays - b.cycleTimeDays);
  const times = sorted.map(d => d.cycleTimeDays);
  
  // Calculate quartiles
  const q1Index = Math.floor(times.length * 0.25);
  const q3Index = Math.floor(times.length * 0.75);
  const q1 = times[q1Index];
  const q3 = times[q3Index];
  const iqr = q3 - q1;
  
  const lowerBound = q1 - 1.5 * iqr;
  const upperBound = q3 + 1.5 * iqr;
  
  return cycleTimeData.filter(d => 
    d.cycleTimeDays < lowerBound || d.cycleTimeDays > upperBound
  );
}

/**
 * Save cycle time data to JSON file
 */
async function saveCycleTimeData(fyLabel, cycleTimeData, statistics, teamStats, monthlyTrends, outliers, dateRange) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  
  const outputData = {
    fiscal_year: fyLabel,
    date_range: {
      start: dateRange.startDate,
      end: dateRange.endDate
    },
    statistics,
    team_statistics: teamStats,
    monthly_trends: monthlyTrends,
    outliers: outliers.map(o => ({
      kickoff_issue: o.kickoffIssue,
      team: o.teamName,
      cycle_time_days: o.cycleTimeDays
    })),
    raw_data: cycleTimeData,
    generated_at: new Date().toISOString(),
    data_source: 'GitHub GraphQL API',
    description: `Collaboration cycle times from kick-off to Staging Review for ${fyLabel}`
  };
  
  const filename = `collab-cycle-time-${fyLabel}.json`;
  const filepath = path.join(DATA_DIR, filename);
  
  await fs.writeFile(filepath, JSON.stringify(outputData, null, 2));
  console.log(`✅ Data saved to ${filename}`);
  
  return filename;
}

/**
 * Main execution
 */
async function main() {
  try {
    const options = parseArgs();
    
    if (!process.env.GITHUB_TOKEN) {
      console.error('❌ Error: GITHUB_TOKEN environment variable is required');
      console.log('Create a token at: https://github.com/settings/tokens');
      console.log('Required scopes: repo (Full control of private repositories)');
      process.exit(1);
    }
    
    // Determine date range
    let dateRange;
    if (options.startDate && options.endDate) {
      dateRange = {
        startDate: options.startDate,
        endDate: options.endDate,
        label: `${options.startDate}_to_${options.endDate}`
      };
    } else {
      dateRange = getFiscalYearDates(options.fy);
    }
    
    console.log(`\n📊 Analyzing Collaboration Cycle Times for ${dateRange.label}`);
    console.log(`   Date range: ${dateRange.startDate} to ${dateRange.endDate}\n`);
    
    // Fetch kick-off issues using GraphQL
    const kickoffIssues = await fetchKickoffIssues(dateRange.startDate, dateRange.endDate);
    
    if (kickoffIssues.length === 0) {
      console.log('❌ No kick-off issues found in this date range');
      return;
    }
    
    // Calculate cycle times from label events
    const cycleTimeData = await calculateCycleTimes(kickoffIssues);
    
    if (cycleTimeData.length === 0) {
      console.log('❌ No completed collaboration cycles found in this date range');
      return;
    }
    
    // Calculate statistics
    const statistics = calculateStatistics(cycleTimeData);
    const teamStats = calculateTeamStatistics(cycleTimeData);
    const monthlyTrends = calculateMonthlyTrends(cycleTimeData);
    const outliers = identifyOutliers(cycleTimeData);
    
    // Save data
    const filename = await saveCycleTimeData(
      dateRange.label,
      cycleTimeData,
      statistics,
      teamStats,
      monthlyTrends,
      outliers,
      dateRange
    );
    
    // Print summary
    console.log(`\n📈 Collaboration Cycle Time Summary for ${dateRange.label}:`);
    console.log(`   📊 Total Completed Cycles: ${statistics.count}`);
    console.log(`   ⏱️  Mean Time: ${statistics.mean} days`);
    console.log(`   📍 Median Time: ${statistics.median} days`);
    console.log(`   ⬇️  Min Time: ${statistics.min} days`);
    console.log(`   ⬆️  Max Time: ${statistics.max} days`);
    console.log(`   📏 Standard Deviation: ${statistics.standardDeviation} days`);
    console.log(`\n   Percentiles:`);
    console.log(`   • 25th: ${statistics.percentile25} days`);
    console.log(`   • 75th: ${statistics.percentile75} days`);
    console.log(`   • 90th: ${statistics.percentile90} days`);
    console.log(`\n   👥 Teams Analyzed: ${teamStats.length}`);
    console.log(`   ⚠️  Outliers Detected: ${outliers.length}`);
    console.log(`\n✅ Analysis complete!\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  fetchKickoffIssues,
  fetchIssueLabelTimeline,
  calculateCycleTimes,
  calculateStatistics,
  calculateTeamStatistics,
  calculateMonthlyTrends
};
