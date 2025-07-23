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
 * Calculate summary statistics
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
  
  return {
    open_issues: openIssues,
    closed_this_month: closedThisMonth,
    avg_resolution_days: avgResolutionDays,
    total_issues: issues.length,
    last_updated: now.toISOString()
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
    
    // Write to file
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(metricsData, null, 2));
    
    console.log(`✅ Metrics data written to ${OUTPUT_FILE}`);
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