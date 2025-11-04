#!/usr/bin/env node

/**
 * Simple test script to generate sample governance metrics data
 * This creates sample data in the expected format for development and testing
 */

const fs = require('fs').promises;
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'governance-metrics.json');
const CSV_FILE = path.join(OUTPUT_DIR, 'governance-metrics.csv');

/**
 * Generate sample quarterly data
 */
function generateSampleData() {
  const quarters = [
    '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', 
    '2024-Q4', '2025-Q1', '2025-Q2', '2025-Q3'
  ];
  
  const quarterlyData = quarters.map((quarter, index) => {
    // Generate realistic sample numbers that show growth over time
    const baseValue = 10 + index * 2;
    return {
      period: quarter,
      touchpoints_held: baseValue + Math.floor(Math.random() * 5),
      products_shipped: Math.floor(baseValue * 0.6) + Math.floor(Math.random() * 3),
      total_staging_issues: (baseValue * 2) + Math.floor(Math.random() * 8),
      launch_blocking_issues: Math.floor(baseValue * 0.3) + Math.floor(Math.random() * 2),
      launch_blocking_percentage: Math.floor(Math.random() * 15) + 5 // 5-20%
    };
  });
  
  // Calculate summary from latest quarter
  const latestQuarter = quarterlyData[quarterlyData.length - 1];
  const previousQuarter = quarterlyData[quarterlyData.length - 2];
  
  const summary = {
    current_quarter: latestQuarter.period,
    touchpoints_held: latestQuarter.touchpoints_held,
    products_shipped: latestQuarter.products_shipped,
    total_staging_issues: latestQuarter.total_staging_issues,
    launch_blocking_issues: latestQuarter.launch_blocking_issues,
    launch_blocking_percentage: latestQuarter.launch_blocking_percentage,
    participating_teams: 8, // Sample number of active teams
    last_updated: new Date().toISOString(),
    trends: {
      touchpoints_trend: calculateTrend(latestQuarter.touchpoints_held, previousQuarter.touchpoints_held),
      products_trend: calculateTrend(latestQuarter.products_shipped, previousQuarter.products_shipped),
      staging_issues_trend: calculateTrend(latestQuarter.total_staging_issues, previousQuarter.total_staging_issues)
    }
  };
  
  return {
    quarterly: quarterlyData,
    summary: summary,
    generated_at: new Date().toISOString(),
    data_source: 'sample-data',
    description: 'Sample governance metrics data for testing and development'
  };
}

/**
 * Calculate trend between two values
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
 * Export data to CSV format
 */
async function exportToCSV(quarterlyData) {
  const csvRows = [
    'Quarter,Touchpoints Held,Products Shipped,Total Staging Issues,Launch Blocking Issues,Launch Blocking Percentage'
  ];
  
  quarterlyData.forEach(row => {
    csvRows.push([
      row.period,
      row.touchpoints_held,
      row.products_shipped,
      row.total_staging_issues,
      row.launch_blocking_issues,
      row.launch_blocking_percentage
    ].join(','));
  });
  
  const csvOutput = csvRows.join('\n');
  await fs.writeFile(CSV_FILE, csvOutput);
  console.log(`✅ CSV data written to ${CSV_FILE}`);
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Generating sample governance metrics data...');
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // Generate sample data
    const governanceData = generateSampleData();
    
    // Write JSON output
    const jsonOutput = JSON.stringify(governanceData, null, 2);
    await fs.writeFile(OUTPUT_FILE, jsonOutput);
    
    // Export to CSV
    await exportToCSV(governanceData.quarterly);
    
    console.log(`✅ Sample governance metrics written to ${OUTPUT_FILE}`);
    console.log(`📊 Sample Summary for ${governanceData.summary.current_quarter}:`);
    console.log(`   - Touchpoints held: ${governanceData.summary.touchpoints_held}`);
    console.log(`   - Products shipped: ${governanceData.summary.products_shipped}`);
    console.log(`   - Total staging issues: ${governanceData.summary.total_staging_issues}`);
    console.log(`   - Launch blocking issues: ${governanceData.summary.launch_blocking_issues}`);
    console.log(`   - Launch blocking percentage: ${governanceData.summary.launch_blocking_percentage}%`);
    console.log(`   - Participating teams: ${governanceData.summary.participating_teams}`);
    console.log(`   - Quarterly data points: ${governanceData.quarterly.length}`);
    
  } catch (error) {
    console.error('❌ Error generating sample governance metrics:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSampleData, exportToCSV };