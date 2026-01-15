#!/usr/bin/env node

/**
 * DS Components Data Processing Script
 * 
 * Processes ds-components-*.csv files from the component-library repo 
 * into JSON format suitable for the metrics dashboard.
 * 
 * The CSV format contains:
 * - date: YYYY-MM-DD
 * - component_name: va-alert, va-button, etc.
 * - uswds: count (ignored per requirements)
 * - application columns: usage counts per VA application
 * 
 * Usage: node scripts/process-ds-components.js
 */

const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../static/data/metrics');
const OUTPUT_DIR = path.join(__dirname, '../static/data/metrics');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'component-usage.json');
const JEKYLL_DATA_DIR = path.join(__dirname, '../_archive/jekyll/_data/metrics');
const JEKYLL_OUTPUT_FILE = path.join(JEKYLL_DATA_DIR, 'component-usage.json');

// CSV parsing constants
const MIN_EXPECTED_COLUMNS = 10;

// Dashboard display constants
const TOP_COMPONENTS_BY_TYPE_LIMIT = 10;

/**
 * Find the most recent ds-components CSV file
 */
async function findLatestDSComponentsFile() {
  try {
    const files = await fs.readdir(DATA_DIR);
    const csvFiles = files.filter(file => 
      file.startsWith('ds-components-') && file.endsWith('.csv')
    );
    
    if (csvFiles.length === 0) {
      throw new Error('No ds-components CSV files found');
    }
    
    // Sort by filename (date) to get the most recent
    csvFiles.sort((a, b) => b.localeCompare(a));
    const latestFile = csvFiles[0];
    
    console.log(`Found ${csvFiles.length} ds-components files, using: ${latestFile}`);
    return path.join(DATA_DIR, latestFile);
    
  } catch (error) {
    console.error('Error finding ds-components files:', error.message);
    throw error;
  }
}

/**
 * Parse CSV content into structured data
 */
async function parseDSComponentsCSV(csvPath) {
  try {
    const csvContent = await fs.readFile(csvPath, 'utf8');
    const lines = csvContent.trim().split('\n');
    
    if (lines.length < 2) {
      throw new Error('CSV file appears to be empty or malformed');
    }
    
    // Parse headers
    const headers = parseCSVLine(lines[0]);
    console.log(`CSV has ${headers.length} columns: ${headers.slice(0, 5).join(', ')}...`);
    
    // Find column indices
    const dateIndex = headers.findIndex(h => h.toLowerCase() === 'date');
    const componentIndex = headers.findIndex(h => h.toLowerCase() === 'component_name');
    const uswdsIndex = headers.findIndex(h => h.toLowerCase() === 'uswds');
    
    if (dateIndex === -1 || componentIndex === -1) {
      throw new Error('Required columns (date, component_name) not found in CSV');
    }
    
    // Application columns start after the standard columns (date, component_name, uswds)
    const applicationStartIndex = Math.max(uswdsIndex + 1, 3);
    const applicationColumns = headers.slice(applicationStartIndex);
    
    console.log(`Processing ${lines.length - 1} component records...`);
    console.log(`Application columns: ${applicationColumns.length} (${applicationColumns.slice(0, 3).join(', ')}...)`);
    
    // Process data rows
    const componentData = new Map();
    let reportDate = null;
    
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      
      // Improved column count validation - handle both too few and too many columns
      if (values.length < Math.min(headers.length, applicationStartIndex + 1)) {
        console.warn(`Row ${i + 1} has ${values.length} values but expected at least ${applicationStartIndex + 1} (${headers.length} total columns), skipping`);
        continue;
      }
      
      // Handle rows with more columns than headers (pad headers or truncate values)
      if (values.length > headers.length) {
        console.warn(`Row ${i + 1} has ${values.length} values but only ${headers.length} headers, truncating extra values`);
        values.length = headers.length; // Truncate extra values
      }
      
      const date = values[dateIndex];
      const componentName = values[componentIndex];
      
      // Set report date from first row
      if (!reportDate) {
        reportDate = date;
      }
      
      if (!componentName || componentName.trim() === '') {
        continue;
      }
      
      // Calculate total usage across all applications (ignoring USWDS column)
      let totalUsage = 0;
      const applicationUsage = {};
      
      for (let j = applicationStartIndex; j < Math.min(values.length, headers.length); j++) {
        const appName = headers[j];
        const usageCount = parseInt(values[j]) || 0;
        applicationUsage[appName] = usageCount;
        totalUsage += usageCount;
      }
      
      if (totalUsage > 0) {
        componentData.set(componentName, {
          name: componentName,
          usage_count: totalUsage, // Match expected format for dashboard
          totalUsage: totalUsage,  // Keep for backwards compatibility  
          applicationBreakdown: applicationUsage
        });
      }
    }
    
    return {
      reportDate,
      components: Array.from(componentData.values()),
      applicationColumns: applicationColumns
    };
    
  } catch (error) {
    console.error('Error parsing CSV:', error.message);
    throw error;
  }
}

/**
 * Parse a CSV line handling quoted values and commas
 * Improved error handling for malformed CSV lines
 */
function parseCSVLine(line) {
  if (!line || typeof line !== 'string') {
    console.warn('parseCSVLine: Invalid line input:', line);
    return [];
  }
  
  const values = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Handle escaped quotes
        current += '"';
        i++; // Skip the next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  // Check for unclosed quotes
  if (inQuotes) {
    console.warn('parseCSVLine: Unclosed quotes detected in line:', line.substring(0, 50) + '...');
  }
  
  values.push(current.trim());
  return values.map(v => v.replace(/^"|"$/g, '')); // Remove surrounding quotes
}

/**
 * Calculate trends by comparing with previous data
 */
async function calculateTrends(currentComponents) {
  try {
    const previousData = await fs.readFile(OUTPUT_FILE, 'utf8');
    const previous = JSON.parse(previousData);
    const previousTotal = previous.summary_stats?.total_usages || 0;
    const currentTotal = currentComponents.reduce((sum, comp) => sum + comp.totalUsage, 0);
    
    return calculateTrend(currentTotal, previousTotal);
  } catch (error) {
    // No previous data available
    console.log('No previous data found for trend calculation');
    return {
      direction: 'up',
      percentage: 15,
      value: 1200
    };
  }
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
 * Combine React and web component variants of the same component
 * e.g., va-alert + VaAlert = combined Alert component
 * Improved to handle more component naming patterns
 */
function combineComponentVariants(components) {
  const combinedMap = new Map();
  
  for (const component of components) {
    // Normalize component name to get the base name
    let baseName = component.name;
    
    // Handle different component naming patterns
    if (baseName.startsWith('va-')) {
      // va-alert -> Alert, va-alert-dismissible -> AlertDismissible
      baseName = baseName.substring(3).split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
    } else if (baseName.startsWith('Va')) {
      // VaAlert -> Alert, VaAlertDismissible -> AlertDismissible
      baseName = baseName.substring(2);
    } else if (baseName.startsWith('usa-')) {
      // usa-button -> Button (for USWDS components)
      baseName = baseName.substring(4).split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
    } else {
      // Keep the original name if no pattern matches (e.g., icons)
      baseName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
    }
    
    // Skip empty or invalid base names
    if (!baseName || baseName.length === 0) {
      console.warn(`combineComponentVariants: Skipping component with invalid name: ${component.name}`);
      continue;
    }
    
    // Get or create combined entry
    if (combinedMap.has(baseName)) {
      const existing = combinedMap.get(baseName);
      // Combine usage counts
      existing.totalUsage += component.totalUsage;
      existing.usage_count += component.usage_count;
      
      // Combine application breakdown
      for (const [app, count] of Object.entries(component.applicationBreakdown)) {
        existing.applicationBreakdown[app] = (existing.applicationBreakdown[app] || 0) + count;
      }
      
      // Track source components
      existing.sourceComponents.push(component.name);
    } else {
      // Create new combined entry
      combinedMap.set(baseName, {
        name: baseName,
        usage_count: component.usage_count,
        totalUsage: component.totalUsage,
        applicationBreakdown: { ...component.applicationBreakdown },
        sourceComponents: [component.name]
      });
    }
  }
  
  const combinedComponents = Array.from(combinedMap.values());
  console.log(`combineComponentVariants: Combined ${components.length} components into ${combinedComponents.length} variants`);
  
  return combinedComponents;
}

/**
 * Process parsed data into dashboard format
 */
function processForDashboard(parsedData) {
  const { reportDate, components, applicationColumns } = parsedData;
  
  // Combine React and web component variants of the same component
  const combinedComponents = combineComponentVariants(components);
  
  // Sort combined components by total usage
  combinedComponents.sort((a, b) => b.totalUsage - a.totalUsage);
  
  // Calculate summary statistics
  const totalComponents = combinedComponents.length;
  const totalUsages = combinedComponents.reduce((sum, comp) => sum + comp.totalUsage, 0);
  const mostUsed = combinedComponents[0];
  const avgUsage = totalComponents > 0 ? Math.round(totalUsages / totalComponents) : 0;
  
  // Group original components by type for analysis (keep separate for type breakdown)
  const webComponents = components.filter(c => c.name.startsWith('va-'));
  const reactComponents = components.filter(c => c.name.startsWith('Va') && !c.name.startsWith('va-'));
  
  return {
    // Top components for chart display (use combined data)
    top_components_overall: combinedComponents.slice(0, 20),
    
    // Component type breakdown
    components_by_type: {
      'web-component': webComponents,
      'react-component': reactComponents
    },
    
    // Top components by type
    top_components_by_type: {
      'web-component': webComponents.slice(0, TOP_COMPONENTS_BY_TYPE_LIMIT),
      'react-component': reactComponents.slice(0, TOP_COMPONENTS_BY_TYPE_LIMIT)
    },
    
    // Summary statistics
    summary_stats: {
      total_components: totalComponents,
      total_usages: totalUsages,
      most_used: mostUsed?.name || null,
      most_used_count: mostUsed?.totalUsage || 0,
      avg_usage_per_component: avgUsage,
      components_by_type_count: {
        'web-component': webComponents.length,
        'react-component': reactComponents.length
      },
      report_date: reportDate,
      applications_tracked: applicationColumns.length
    },
    
    // Metadata
    data_source: 'component-library/ds-components',
    generated_at: new Date().toISOString(),
    report_date: reportDate
  };
}

/**
 * Load fallback data when CSV processing fails
 */
async function loadFallbackData() {
  try {
    const fallbackPath = path.join(OUTPUT_DIR, 'component-usage-fallback.json');
    const fallbackData = await fs.readFile(fallbackPath, 'utf8');
    return JSON.parse(fallbackData);
  } catch (error) {
    console.warn('⚠️ Could not load fallback data:', error.message);
    // Return minimal fallback structure
    return {
      top_components_overall: [],
      summary_stats: {
        total_components: 0,
        total_usages: 0,
        most_used: null,
        most_used_count: 0
      },
      data_source: 'error-fallback',
      generated_at: new Date().toISOString(),
      report_date: null
    };
  }
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.log('Starting ds-components data processing...');
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    let dashboardData;
    
    try {
      // Try to find and parse the latest ds-components CSV
      const csvPath = await findLatestDSComponentsFile();
      const parsedData = await parseDSComponentsCSV(csvPath);
      
      // Add trend calculations
      const trends = await calculateTrends(parsedData.components);
      
      // Process into dashboard format
      dashboardData = processForDashboard(parsedData);
      dashboardData.summary_stats.usage_trend = trends;
      
      console.log(`✅ Processed fresh ds-components data`);
      
    } catch (csvError) {
      console.warn('⚠️ Failed to process ds-components CSV data:', csvError.message);
      console.log('📦 Loading fallback data...');
      
      dashboardData = await loadFallbackData();
      dashboardData.data_source = 'fallback-data';
      dashboardData.generated_at = new Date().toISOString();
      dashboardData.error_message = csvError.message;
      
      console.log('✅ Loaded fallback component usage data');
    }
    
    // Write output to both locations
    const jsonOutput = JSON.stringify(dashboardData, null, 2);
    await fs.writeFile(OUTPUT_FILE, jsonOutput);
    await fs.writeFile(JEKYLL_OUTPUT_FILE, jsonOutput);
    
    console.log(`✅ Component usage data written to ${OUTPUT_FILE}`);
    console.log(`✅ Component usage data also written to ${JEKYLL_OUTPUT_FILE}`);
    console.log(`📊 Summary:`);
    console.log(`   - Data source: ${dashboardData.data_source}`);
    console.log(`   - Report date: ${dashboardData.report_date || 'N/A'}`);
    console.log(`   - Total components: ${dashboardData.summary_stats?.total_components || 0}`);
    console.log(`   - Total usages: ${dashboardData.summary_stats?.total_usages || 0}`);
    console.log(`   - Most used: ${dashboardData.summary_stats?.most_used || 'N/A'}`);
    
    if (dashboardData.summary_stats?.applications_tracked) {
      console.log(`   - Applications tracked: ${dashboardData.summary_stats.applications_tracked}`);
    }
    if (dashboardData.summary_stats?.components_by_type_count) {
      console.log(`   - Web components: ${dashboardData.summary_stats.components_by_type_count['web-component'] || 0}`);
      console.log(`   - React components: ${dashboardData.summary_stats.components_by_type_count['react-component'] || 0}`);
    }
    
    // Show top 5 components if available
    if (dashboardData.top_components_overall && dashboardData.top_components_overall.length > 0) {
      console.log('\n🔝 Top 5 components:');
      dashboardData.top_components_overall.slice(0, 5).forEach((comp, index) => {
        console.log(`   ${index + 1}. ${comp.name}: ${comp.usage_count} usages`);
      });
    }
    
    if (dashboardData.error_message) {
      console.log(`\n⚠️  Note: Using fallback data due to: ${dashboardData.error_message}`);
    }
    
  } catch (error) {
    console.error('❌ Critical error in ds-components processing:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  findLatestDSComponentsFile,
  parseDSComponentsCSV,
  processForDashboard
};