#!/usr/bin/env node

/**
 * GitHub Issues Metrics Collection Script
 * 
 * Collects issue data from the vets-design-system-documentation repository
 * and generates metrics for burndown and velocity charts.
 * 
 * Usage: node scripts/collect-issue-metrics.js
 * Requires: GITHUB_TOKEN environment variable
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const REPO = 'department-of-veterans-affairs/vets-design-system-documentation';
const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'issue-metrics.json');
const JEKYLL_DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const JEKYLL_OUTPUT_FILE = path.join(JEKYLL_DATA_DIR, 'issue-metrics.json');

/**
 * Fetch all issues from GitHub API using gh CLI
 */
async function fetchAllIssues() {
  console.log('Fetching issue data from GitHub...');
  
  try {
    const output = execSync(`gh api repos/${REPO}/issues?state=all --paginate --jq '.[] | {number, title, state, created_at, closed_at, labels: [.labels[].name]}'`, {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer for large datasets
    });
    
    // Parse JSONL output (one JSON object per line)
    const lines = output.trim().split('\n').filter(line => line.trim());
    return lines.map(line => JSON.parse(line));
  } catch (error) {
    console.error('Failed to fetch issues:', error.message);
    throw error;
  }
}

/**
 * Process issues into quarterly buckets for activity chart
 */
function processQuarterlyData(issues) {
  const quarterlyData = new Map();
  
  issues.forEach(issue => {
    const created = new Date(issue.created_at);
    const quarterKey = getQuarterKey(created);
    
    if (!quarterlyData.has(quarterKey)) {
      quarterlyData.set(quarterKey, {
        period: quarterKey,
        issues_opened: 0,
        issues_closed: 0
      });
    }
    
    quarterlyData.get(quarterKey).issues_opened++;
    
    if (issue.closed_at) {
      const closed = new Date(issue.closed_at);
      const closedQuarterKey = getQuarterKey(closed);
      
      if (!quarterlyData.has(closedQuarterKey)) {
        quarterlyData.set(closedQuarterKey, {
          period: closedQuarterKey,
          issues_opened: 0,
          issues_closed: 0
        });
      }
      
      quarterlyData.get(closedQuarterKey).issues_closed++;
    }
  });
  
  return Array.from(quarterlyData.values()).sort((a, b) => 
    a.period.localeCompare(b.period)
  );
}

/**
 * Process issues into monthly velocity data
 */
function processVelocityData(issues) {
  const monthlyData = new Map();
  
  issues.forEach(issue => {
    const created = new Date(issue.created_at);
    const monthKey = `${created.getFullYear()}-${String(created.getMonth() + 1).padStart(2, '0')}`;
    
    if (!monthlyData.has(monthKey)) {
      monthlyData.set(monthKey, {
        period: monthKey,
        issues_opened: 0,
        issues_closed: 0
      });
    }
    
    monthlyData.get(monthKey).issues_opened++;
    
    if (issue.closed_at) {
      const closed = new Date(issue.closed_at);
      const closedMonthKey = `${closed.getFullYear()}-${String(closed.getMonth() + 1).padStart(2, '0')}`;
      
      if (!monthlyData.has(closedMonthKey)) {
        monthlyData.set(closedMonthKey, {
          period: closedMonthKey,
          issues_opened: 0,
          issues_closed: 0
        });
      }
      
      monthlyData.get(closedMonthKey).issues_closed++;
    }
  });
  
  return Array.from(monthlyData.values()).sort((a, b) => 
    a.period.localeCompare(b.period)
  );
}

/**
 * Process experimental design issues into quarterly data
 */
function processExperimentalQuarterlyData(issues) {
  // Filter for experimental design issues
  const experimentalIssues = issues.filter(issue => 
    issue.labels && issue.labels.includes('experimental_design')
  );
  
  if (experimentalIssues.length === 0) {
    return [];
  }
  
  const quarterlyData = new Map();
  
  experimentalIssues.forEach(issue => {
    const created = new Date(issue.created_at);
    const quarterKey = getQuarterKey(created);
    
    if (!quarterlyData.has(quarterKey)) {
      quarterlyData.set(quarterKey, {
        period: quarterKey,
        issues_opened: 0,
        issues_closed: 0,
        issues_implemented: 0
      });
    }
    
    quarterlyData.get(quarterKey).issues_opened++;
    
    if (issue.closed_at) {
      const closed = new Date(issue.closed_at);
      const closedQuarterKey = getQuarterKey(closed);
      
      if (!quarterlyData.has(closedQuarterKey)) {
        quarterlyData.set(closedQuarterKey, {
          period: closedQuarterKey,
          issues_opened: 0,
          issues_closed: 0,
          issues_implemented: 0
        });
      }
      
      quarterlyData.get(closedQuarterKey).issues_closed++;
      
      // Check if this issue was added to the system
      if (issue.labels && issue.labels.includes('added-to-system')) {
        quarterlyData.get(closedQuarterKey).issues_implemented++;
      }
    }
  });
  
  return Array.from(quarterlyData.values()).sort((a, b) => 
    a.period.localeCompare(b.period)
  );
}

/**
 * Calculate trend for open issues (compare this month vs last month)
 */
function calculateOpenIssuesTrend(issues) {
  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  
  // Count open issues as of the start of this month and last month
  const openThisMonth = issues.filter(issue => {
    const created = new Date(issue.created_at);
    return created <= thisMonth && (issue.state === 'open' || 
      (issue.closed_at && new Date(issue.closed_at) > thisMonth));
  }).length;
  
  const openLastMonth = issues.filter(issue => {
    const created = new Date(issue.created_at);
    return created <= lastMonth && (issue.state === 'open' || 
      (issue.closed_at && new Date(issue.closed_at) > lastMonth));
  }).length;
  
  return calculateTrend(openThisMonth, openLastMonth);
}

/**
 * Calculate trend for closed issues this month vs previous month
 */
function calculateClosedMonthTrend(issues) {
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  
  const closedThisMonth = issues.filter(issue => {
    if (!issue.closed_at) return false;
    const closed = new Date(issue.closed_at);
    return closed.getMonth() === thisMonth && closed.getFullYear() === thisYear;
  }).length;
  
  // Previous month
  const prevMonth = thisMonth === 0 ? 11 : thisMonth - 1;
  const prevYear = thisMonth === 0 ? thisYear - 1 : thisYear;
  
  const closedPrevMonth = issues.filter(issue => {
    if (!issue.closed_at) return false;
    const closed = new Date(issue.closed_at);
    return closed.getMonth() === prevMonth && closed.getFullYear() === prevYear;
  }).length;
  
  // Check for insufficient data periods (early in month + holiday periods)
  if (isInsufficientDataPeriod(now, closedThisMonth)) {
    return {
      direction: null,
      percentage: null,
      value: closedThisMonth - closedPrevMonth,
      reliability: "low",
      reason: getInsufficientDataReason(now, closedThisMonth)
    };
  }
  
  return calculateTrend(closedThisMonth, closedPrevMonth);
}

/**
 * Calculate trend for resolution time (compare this quarter vs last quarter)
 */
function calculateResolutionTimeTrend(issues) {
  const now = new Date();
  const currentQuarter = Math.floor(now.getMonth() / 3);
  const currentYear = now.getFullYear();
  
  // Calculate average resolution time for current quarter
  const currentQuarterStart = new Date(currentYear, currentQuarter * 3, 1);
  const currentQuarterIssues = issues.filter(issue => {
    if (!issue.closed_at) return false;
    const closed = new Date(issue.closed_at);
    return closed >= currentQuarterStart;
  });
  
  const currentAvg = calculateAverageResolutionTime(currentQuarterIssues);
  
  // Calculate average resolution time for previous quarter
  const prevQuarter = currentQuarter === 0 ? 3 : currentQuarter - 1;
  const prevYear = currentQuarter === 0 ? currentYear - 1 : currentYear;
  const prevQuarterStart = new Date(prevYear, prevQuarter * 3, 1);
  const prevQuarterEnd = new Date(prevYear, (prevQuarter + 1) * 3, 1);
  
  const prevQuarterIssues = issues.filter(issue => {
    if (!issue.closed_at) return false;
    const closed = new Date(issue.closed_at);
    return closed >= prevQuarterStart && closed < prevQuarterEnd;
  });
  
  const prevAvg = calculateAverageResolutionTime(prevQuarterIssues);
  
  return calculateTrend(currentAvg, prevAvg);
}

/**
 * Helper function to calculate average resolution time for a set of issues
 */
function calculateAverageResolutionTime(issues) {
  if (issues.length === 0) return 0;
  
  let totalResolutionDays = 0;
  issues.forEach(issue => {
    const created = new Date(issue.created_at);
    const closed = new Date(issue.closed_at);
    const diffDays = Math.ceil((closed - created) / (1000 * 60 * 60 * 24));
    totalResolutionDays += diffDays;
  });
  
  return Math.round(totalResolutionDays / issues.length);
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
 * Check if current period has insufficient data for reliable trend calculation
 */
function isInsufficientDataPeriod(date, closedThisMonth) {
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Early in month (first 3 days)
  if (dayOfMonth <= 3) {
    return true;
  }
  
  // Holiday periods (major US holidays where issue activity is typically low)
  if (isHolidayPeriod(date)) {
    return true;
  }
  
  // Weekend with very low activity
  if ((dayOfWeek === 0 || dayOfWeek === 6) && closedThisMonth === 0) {
    return true;
  }
  
  return false;
}

/**
 * Get reason for insufficient data
 */
function getInsufficientDataReason(date, closedThisMonth) {
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();
  
  if (dayOfMonth <= 3) {
    return "early_month_period";
  }
  
  if (isHolidayPeriod(date)) {
    return "holiday_period";
  }
  
  if ((dayOfWeek === 0 || dayOfWeek === 6) && closedThisMonth === 0) {
    return "weekend_low_activity";
  }
  
  return "insufficient_data";
}

/**
 * Check if date falls in a major holiday period
 */
function isHolidayPeriod(date) {
  const month = date.getMonth(); // 0-based
  const day = date.getDate();
  
  // New Year's Day period (Dec 30 - Jan 3)
  if ((month === 11 && day >= 30) || (month === 0 && day <= 3)) {
    return true;
  }
  
  // Christmas period (Dec 23-26)
  if (month === 11 && day >= 23 && day <= 26) {
    return true;
  }
  
  // Thanksgiving week (4th Thursday of November + Friday)
  if (month === 10) { // November
    const thanksgiving = getNthWeekdayOfMonth(date.getFullYear(), 10, 4, 4); // 4th Thursday
    if (day >= thanksgiving && day <= thanksgiving + 1) {
      return true;
    }
  }
  
  // July 4th weekend
  if (month === 6 && day >= 3 && day <= 5) {
    return true;
  }
  
  return false;
}

/**
 * Get the nth occurrence of a weekday in a month
 */
function getNthWeekdayOfMonth(year, month, weekday, n) {
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekday = firstOfMonth.getDay();
  const offset = (weekday - firstWeekday + 7) % 7;
  return 1 + offset + (n - 1) * 7;
}

/**
 * Calculate summary statistics with trend data
 */
function calculateSummary(issues) {
  const openIssues = issues.filter(issue => issue.state === 'open').length;
  
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  
  const closedThisMonth = issues.filter(issue => {
    if (!issue.closed_at) return false;
    const closed = new Date(issue.closed_at);
    return closed.getMonth() === thisMonth && closed.getFullYear() === thisYear;
  }).length;
  
  // Calculate average resolution time for closed issues
  const closedIssues = issues.filter(issue => issue.closed_at);
  let totalResolutionDays = 0;
  
  closedIssues.forEach(issue => {
    const created = new Date(issue.created_at);
    const closed = new Date(issue.closed_at);
    const diffDays = Math.ceil((closed - created) / (1000 * 60 * 60 * 24));
    totalResolutionDays += diffDays;
  });
  
  const avgResolutionDays = closedIssues.length > 0 ? 
    Math.round(totalResolutionDays / closedIssues.length) : 0;

  // Calculate trend data
  const openIssuesTrend = calculateOpenIssuesTrend(issues);
  const closedMonthTrend = calculateClosedMonthTrend(issues);
  const resolutionTimeTrend = calculateResolutionTimeTrend(issues);
  
  return {
    open_issues: openIssues,
    closed_this_month: closedThisMonth,
    avg_resolution_days: avgResolutionDays,
    total_issues: issues.length,
    last_updated: now.toISOString(),
    // Add trend indicators
    open_issues_trend: openIssuesTrend,
    closed_month_trend: closedMonthTrend,
    resolution_time_trend: resolutionTimeTrend
  };
}

/**
 * Utility functions
 */
function getQuarterKey(date) {
  const year = date.getFullYear();
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  return `${year}-Q${quarter}`;
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Starting issue metrics collection...');
    
    // Check for GitHub token
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.warn('Warning: GITHUB_TOKEN not set. Rate limiting may occur.');
    }
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // Fetch and process data
    const issues = await fetchAllIssues();
    console.log(`Fetched ${issues.length} issues`);
    
    const quarterlyData = processQuarterlyData(issues);
    const velocityData = processVelocityData(issues);
    const experimentalQuarterlyData = processExperimentalQuarterlyData(issues);
    const summary = calculateSummary(issues);
    
    // Prepare output
    const metricsData = {
      quarterly: quarterlyData,
      velocity: velocityData,
      experimental_quarterly: experimentalQuarterlyData,
      summary: summary,
      generated_at: new Date().toISOString()
    };
    
    // Write to both locations
    const jsonOutput = JSON.stringify(metricsData, null, 2);
    await fs.writeFile(OUTPUT_FILE, jsonOutput);
    await fs.writeFile(JEKYLL_OUTPUT_FILE, jsonOutput);
    
    console.log(`✅ Metrics data written to ${OUTPUT_FILE}`);
    console.log(`✅ Metrics data also written to ${JEKYLL_OUTPUT_FILE}`);
    console.log(`📊 Summary:`);
    console.log(`   - Open issues: ${summary.open_issues}`);
    console.log(`   - Closed this month: ${summary.closed_this_month}`);
    console.log(`   - Avg resolution: ${summary.avg_resolution_days} days`);
    console.log(`   - Quarterly data points: ${quarterlyData.length}`);
    console.log(`   - Velocity data points: ${velocityData.length}`);
    console.log(`   - Experimental design quarters: ${experimentalQuarterlyData.length}`);
    
  } catch (error) {
    console.error('❌ Error collecting metrics:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  fetchAllIssues,
  processQuarterlyData,
  processVelocityData,
  processExperimentalQuarterlyData,
  calculateSummary
};