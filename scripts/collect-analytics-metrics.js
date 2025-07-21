#!/usr/bin/env node

/**
 * Google Analytics Metrics Collection Script
 * 
 * Collects page view data from Google Analytics for design.va.gov
 * and generates metrics for the top pages accessed each month.
 * 
 * Usage: node scripts/collect-analytics-metrics.js
 * Requires: 
 *   - GOOGLE_APPLICATION_CREDENTIALS environment variable (path to service account JSON)
 *   - OR GA_SERVICE_ACCOUNT_KEY environment variable (base64 encoded service account JSON)
 *   - GA_PROPERTY_ID environment variable (Google Analytics 4 property ID)
 */

const fs = require('fs').promises;
const path = require('path');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'analytics-metrics.json');

// Default property ID for design.va.gov (you'll need to set this)
const PROPERTY_ID = process.env.GA_PROPERTY_ID || 'properties/YOUR_PROPERTY_ID';

/**
 * Initialize Google Analytics client
 */
function initializeAnalyticsClient() {
  const options = {};
  
  // Check for service account key in environment variable
  if (process.env.GA_SERVICE_ACCOUNT_KEY) {
    const keyData = Buffer.from(process.env.GA_SERVICE_ACCOUNT_KEY, 'base64').toString();
    const credentials = JSON.parse(keyData);
    options.credentials = credentials;
  }
  // Otherwise, will use GOOGLE_APPLICATION_CREDENTIALS file path
  
  return new BetaAnalyticsDataClient(options);
}

/**
 * Fetch top pages data from Google Analytics
 */
async function fetchTopPages(analyticsDataClient, startDate = '30daysAgo', endDate = 'today') {
  console.log(`Fetching top pages data from ${startDate} to ${endDate}...`);
  
  try {
    const [response] = await analyticsDataClient.runReport({
      property: PROPERTY_ID,
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
        {
          name: 'pageTitle',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
        {
          name: 'sessions',
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: 'screenPageViews',
          },
          desc: true,
        },
      ],
      limit: 25, // Top 25 pages as requested
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'BEGINS_WITH',
            value: '/', // Only include pages that start with / (exclude external links)
          },
        },
      },
    });

    return response.rows || [];
  } catch (error) {
    console.error('Failed to fetch top pages data:', error.message);
    throw error;
  }
}

/**
 * Fetch component-specific pages data
 */
async function fetchComponentPages(analyticsDataClient, startDate = '30daysAgo', endDate = 'today') {
  console.log('Fetching component pages data...');
  
  try {
    const [response] = await analyticsDataClient.runReport({
      property: PROPERTY_ID,
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
        {
          name: 'pageTitle',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
        {
          name: 'sessions',
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: 'screenPageViews',
          },
          desc: true,
        },
      ],
      limit: 15,
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'BEGINS_WITH',
            value: '/components/', // Only component pages
          },
        },
      },
    });

    return response.rows || [];
  } catch (error) {
    console.error('Failed to fetch component pages data:', error.message);
    throw error;
  }
}

/**
 * Fetch pattern-specific pages data
 */
async function fetchPatternPages(analyticsDataClient, startDate = '30daysAgo', endDate = 'today') {
  console.log('Fetching pattern pages data...');
  
  try {
    const [response] = await analyticsDataClient.runReport({
      property: PROPERTY_ID,
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
        {
          name: 'pageTitle',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
        {
          name: 'sessions',
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: 'screenPageViews',
          },
          desc: true,
        },
      ],
      limit: 15,
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'BEGINS_WITH',
            value: '/patterns/', // Only pattern pages
          },
        },
      },
    });

    return response.rows || [];
  } catch (error) {
    console.error('Failed to fetch pattern pages data:', error.message);
    throw error;
  }
}

/**
 * Fetch overall site metrics
 */
async function fetchSiteMetrics(analyticsDataClient, startDate = '30daysAgo', endDate = 'today') {
  console.log('Fetching overall site metrics...');
  
  try {
    const [response] = await analyticsDataClient.runReport({
      property: PROPERTY_ID,
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
        {
          name: 'sessions',
        },
        {
          name: 'activeUsers',
        },
      ],
    });

    return response.rows?.[0] || null;
  } catch (error) {
    console.error('Failed to fetch site metrics:', error.message);
    throw error;
  }
}

/**
 * Process raw GA data into formatted objects
 */
function processTopPagesData(rows) {
  return rows.map((row, index) => {
    const pagePath = row.dimensionValues[0].value;
    const pageTitle = row.dimensionValues[1].value;
    const pageViews = parseInt(row.metricValues[0].value, 10);
    const sessions = parseInt(row.metricValues[1].value, 10);
    
    return {
      rank: index + 1,
      path: pagePath,
      title: pageTitle,
      page_views: pageViews,
      sessions: sessions,
      clean_title: cleanPageTitle(pageTitle)
    };
  });
}

/**
 * Clean up page titles for better display
 */
function cleanPageTitle(title) {
  if (!title) return 'Untitled';
  
  // Remove common suffixes
  const cleaned = title
    .replace(/ - VA Design System$/, '')
    .replace(/ \| VA Design System$/, '')
    .replace(/ - Design System$/, '')
    .trim();
    
  return cleaned || 'Homepage';
}

/**
 * Calculate summary statistics
 */
function calculateSummary(topPages, siteMetrics, componentPages, patternPages) {
  const totalPageViews = siteMetrics ? parseInt(siteMetrics.metricValues[0].value, 10) : 0;
  const totalSessions = siteMetrics ? parseInt(siteMetrics.metricValues[1].value, 10) : 0;
  const activeUsers = siteMetrics ? parseInt(siteMetrics.metricValues[2].value, 10) : 0;
  
  const topPage = topPages.length > 0 ? topPages[0] : null;
  const topComponent = componentPages.length > 0 ? componentPages[0] : null;
  const topPattern = patternPages.length > 0 ? patternPages[0] : null;
  
  // Calculate component vs pattern page views
  const componentPageViews = componentPages.reduce((sum, page) => sum + page.page_views, 0);
  const patternPageViews = patternPages.reduce((sum, page) => sum + page.page_views, 0);
  
  return {
    total_page_views: totalPageViews,
    total_sessions: totalSessions,
    active_users: activeUsers,
    top_page: topPage ? {
      path: topPage.path,
      title: topPage.clean_title,
      page_views: topPage.page_views
    } : null,
    top_component_page: topComponent ? {
      path: topComponent.path,
      title: topComponent.clean_title,
      page_views: topComponent.page_views
    } : null,
    top_pattern_page: topPattern ? {
      path: topPattern.path,
      title: topPattern.clean_title,
      page_views: topPattern.page_views
    } : null,
    component_page_views: componentPageViews,
    pattern_page_views: patternPageViews,
    last_updated: new Date().toISOString()
  };
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('Starting Google Analytics metrics collection...');
    
    // Check for required environment variables
    if (!process.env.GA_PROPERTY_ID) {
      console.error('❌ GA_PROPERTY_ID environment variable is required');
      console.error('   Set it to your Google Analytics 4 property ID (e.g., "properties/123456789")');
      process.exit(1);
    }
    
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.GA_SERVICE_ACCOUNT_KEY) {
      console.error('❌ Authentication required:');
      console.error('   Either set GOOGLE_APPLICATION_CREDENTIALS to path of service account JSON file');
      console.error('   Or set GA_SERVICE_ACCOUNT_KEY to base64 encoded service account JSON');
      process.exit(1);
    }
    
    // Initialize Google Analytics client
    const analyticsDataClient = initializeAnalyticsClient();
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // Fetch data from Google Analytics
    const [topPagesRows, componentPagesRows, patternPagesRows, siteMetricsRow] = await Promise.all([
      fetchTopPages(analyticsDataClient),
      fetchComponentPages(analyticsDataClient),
      fetchPatternPages(analyticsDataClient),
      fetchSiteMetrics(analyticsDataClient)
    ]);
    
    // Process the data
    const topPages = processTopPagesData(topPagesRows);
    const componentPages = processTopPagesData(componentPagesRows);
    const patternPages = processTopPagesData(patternPagesRows);
    const summary = calculateSummary(topPages, siteMetricsRow, componentPages, patternPages);
    
    // Prepare output
    const analyticsData = {
      top_pages: topPages,
      component_pages: componentPages,
      pattern_pages: patternPages,
      summary: summary,
      collection_period: '30 days',
      generated_at: new Date().toISOString()
    };
    
    // Write to file
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(analyticsData, null, 2));
    
    console.log(`✅ Analytics data written to ${OUTPUT_FILE}`);
    console.log(`📊 Summary:`);
    console.log(`   - Total page views (30 days): ${summary.total_page_views.toLocaleString()}`);
    console.log(`   - Total sessions: ${summary.total_sessions.toLocaleString()}`);
    console.log(`   - Active users: ${summary.active_users.toLocaleString()}`);
    console.log(`   - Top page: ${summary.top_page?.title || 'N/A'} (${summary.top_page?.page_views.toLocaleString() || 0} views)`);
    console.log(`   - Top component: ${summary.top_component_page?.title || 'N/A'} (${summary.top_component_page?.page_views.toLocaleString() || 0} views)`);
    console.log(`   - Top pattern: ${summary.top_pattern_page?.title || 'N/A'} (${summary.top_pattern_page?.page_views.toLocaleString() || 0} views)`);
    
  } catch (error) {
    console.error('❌ Error collecting analytics metrics:', error.message);
    
    if (error.message.includes('PERMISSION_DENIED')) {
      console.error('💡 Make sure your service account has Analytics Viewer permissions');
    } else if (error.message.includes('INVALID_ARGUMENT')) {
      console.error('💡 Check that your GA_PROPERTY_ID is correct (format: properties/123456789)');
    }
    
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  fetchTopPages,
  fetchComponentPages,
  fetchPatternPages,
  fetchSiteMetrics,
  processTopPagesData,
  calculateSummary
};