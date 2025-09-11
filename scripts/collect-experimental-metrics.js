#!/usr/bin/env node

/**
 * Collect experimental design issue metrics for the VA Design System dashboard
 * 
 * This script fetches issues with the "experimental_design" label from GitHub
 * and generates quarterly metrics for opened vs closed issues.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const REPO = 'department-of-veterans-affairs/vets-design-system-documentation';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'assets', 'data', 'metrics', 'experimental-metrics.json');

/**
 * Execute a command and return the output
 */
function runCommand(command) {
  try {
    const output = execSync(command, { encoding: 'utf8' });
    return output.trim();
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

/**
 * Fetch all experimental design issues from GitHub
 */
function fetchExperimentalIssues() {
  console.log('Fetching experimental design issues from GitHub...');
  
  // Fetch all issues with experimental_design label
  const command = `gh issue list --repo ${REPO} --label "experimental_design" --state all --limit 1000 --json number,title,state,createdAt,closedAt,labels`;
  
  const output = runCommand(command);
  
  if (!output) {
    console.log('No experimental design issues found');
    return [];
  }
  
  try {
    const issues = JSON.parse(output);
    console.log(`Fetched ${issues.length} experimental design issues`);
    return issues;
  } catch (error) {
    console.error('Error parsing GitHub response:', error.message);
    process.exit(1);
  }
}

/**
 * Get the quarter for a given date
 */
function getQuarter(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-based
  
  let quarter;
  if (month <= 3) quarter = 'Q1';
  else if (month <= 6) quarter = 'Q2';
  else if (month <= 9) quarter = 'Q3';
  else quarter = 'Q4';
  
  return `${year}-${quarter}`;
}

/**
 * Process issues into quarterly metrics
 */
function processQuarterlyMetrics(issues) {
  console.log('Processing quarterly metrics...');
  
  const quarterlyData = {};
  
  // Process each issue
  issues.forEach(issue => {
    // Count opened issues by quarter
    if (issue.createdAt) {
      const openedQuarter = getQuarter(issue.createdAt);
      if (!quarterlyData[openedQuarter]) {
        quarterlyData[openedQuarter] = { period: openedQuarter, issues_opened: 0, issues_closed: 0 };
      }
      quarterlyData[openedQuarter].issues_opened++;
    }
    
    // Count closed issues by quarter
    if (issue.state === 'closed' && issue.closedAt) {
      const closedQuarter = getQuarter(issue.closedAt);
      if (!quarterlyData[closedQuarter]) {
        quarterlyData[closedQuarter] = { period: closedQuarter, issues_opened: 0, issues_closed: 0 };
      }
      quarterlyData[closedQuarter].issues_closed++;
    }
  });
  
  // Convert to sorted array
  const sortedQuarters = Object.keys(quarterlyData).sort();
  const quarterlyMetrics = sortedQuarters.map(quarter => quarterlyData[quarter]);
  
  console.log(`Generated ${quarterlyMetrics.length} quarterly data points`);
  
  return quarterlyMetrics;
}

/**
 * Generate summary statistics
 */
function generateSummary(issues) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  // Count issues
  const totalIssues = issues.length;
  const openIssues = issues.filter(issue => issue.state === 'open').length;
  
  // Count issues closed this month
  const closedThisMonth = issues.filter(issue => {
    if (issue.state !== 'closed' || !issue.closedAt) return false;
    
    const closedDate = new Date(issue.closedAt);
    return closedDate.getMonth() === currentMonth && closedDate.getFullYear() === currentYear;
  }).length;
  
  // Calculate average resolution time for closed issues
  const closedIssues = issues.filter(issue => issue.state === 'closed' && issue.closedAt);
  let avgResolutionDays = 0;
  
  if (closedIssues.length > 0) {
    const totalResolutionTime = closedIssues.reduce((sum, issue) => {
      const created = new Date(issue.createdAt);
      const closed = new Date(issue.closedAt);
      const resolutionTime = (closed - created) / (1000 * 60 * 60 * 24); // Convert to days
      return sum + resolutionTime;
    }, 0);
    
    avgResolutionDays = Math.round(totalResolutionTime / closedIssues.length);
  }
  
  return {
    total_experimental_issues: totalIssues,
    open_experimental_issues: openIssues,
    closed_experimental_this_month: closedThisMonth,
    avg_experimental_resolution_days: avgResolutionDays,
    last_updated: now.toISOString()
  };
}

/**
 * Main execution function
 */
function main() {
  console.log('Starting experimental design metrics collection...');
  
  // Check if gh CLI is available
  try {
    runCommand('gh --version');
  } catch (error) {
    console.error('GitHub CLI (gh) is not installed or not authenticated.');
    console.error('Please install it from https://cli.github.com/ and authenticate with `gh auth login`');
    process.exit(1);
  }
  
  // Fetch and process data
  const issues = fetchExperimentalIssues();
  const quarterlyMetrics = processQuarterlyMetrics(issues);
  const summary = generateSummary(issues);
  
  // Prepare output data
  const metricsData = {
    experimental_quarterly: quarterlyMetrics,
    experimental_summary: summary,
    generated_at: new Date().toISOString()
  };
  
  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write to file
  try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metricsData, null, 2));
    console.log(`✅ Experimental design metrics written to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error writing metrics file:', error.message);
    process.exit(1);
  }
  
  // Print summary
  console.log('📊 Summary:');
  console.log(`   - Total experimental issues: ${summary.total_experimental_issues}`);
  console.log(`   - Open experimental issues: ${summary.open_experimental_issues}`);
  console.log(`   - Closed this month: ${summary.closed_experimental_this_month}`);
  console.log(`   - Avg resolution: ${summary.avg_experimental_resolution_days} days`);
  console.log(`   - Quarterly data points: ${quarterlyMetrics.length}`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };
