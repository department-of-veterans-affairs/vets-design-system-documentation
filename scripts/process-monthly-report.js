#!/usr/bin/env node

/**
 * Script to process monthly Looker Studio reports
 * Converts PDF to PNG and updates the metrics data
 * 
 * Usage: node scripts/process-monthly-report.js path/to/report.pdf [YYYY-MM]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('magick -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    try {
      // Fallback to older convert command
      execSync('convert -version', { stdio: 'ignore' });
      return true;
    } catch (error2) {
      return false;
    }
  }
}

// Convert PDF to PNG using ImageMagick
function convertPdfToPng(pdfPath, outputPath) {
  if (!checkImageMagick()) {
    console.error('ImageMagick is not installed. Please install it first:');
    console.error('macOS: brew install imagemagick');
    console.error('Ubuntu: sudo apt-get install imagemagick');
    process.exit(1);
  }

  try {
    // Convert PDF to PNG with good quality - use magick command (newer) or fallback to convert
    let command;
    try {
      execSync('magick -version', { stdio: 'ignore' });
      command = `magick -density 300 "${pdfPath}" -quality 90 "${outputPath}"`;
    } catch {
      command = `convert -density 300 "${pdfPath}" -quality 90 "${outputPath}"`;
    }
    
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Converted PDF to PNG: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error converting PDF to PNG:', error.message);
    process.exit(1);
  }
}

// Update the monthly reports data file
function updateReportsData(reportDate, filename) {
  const dataFile = path.join(__dirname, '../src/assets/data/metrics/monthly-reports.json');
  
  let reportsData = [];
  if (fs.existsSync(dataFile)) {
    try {
      reportsData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    } catch (error) {
      console.log('Creating new reports data file...');
    }
  }

  // Add new report (or update existing)
  const existingIndex = reportsData.findIndex(report => report.date === reportDate);
  const newReport = {
    date: reportDate,
    filename: filename,
    title: `Top 25 Pages - ${reportDate}`,
    generated: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    reportsData[existingIndex] = newReport;
    console.log(`📝 Updated existing report for ${reportDate}`);
  } else {
    reportsData.unshift(newReport); // Add to beginning for newest first
    console.log(`📝 Added new report for ${reportDate}`);
  }

  // Keep only the last 12 months
  reportsData = reportsData.slice(0, 12);

  // Write updated data
  fs.writeFileSync(dataFile, JSON.stringify(reportsData, null, 2));
  console.log(`✅ Updated reports data: ${dataFile}`);
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/process-monthly-report.js path/to/report.pdf [YYYY-MM]');
    console.error('Example: node scripts/process-monthly-report.js ./report.pdf 2025-06');
    console.error('         (Use 2025-06 for June 2025, 2025-07 for July 2025, etc.)');
    process.exit(1);
  }

  const pdfPath = args[0];
  const reportDate = args[1] || new Date().toISOString().slice(0, 7); // Default to current YYYY-MM

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ PDF file not found: ${pdfPath}`);
    process.exit(1);
  }

  // Validate date format
  if (!/^\d{4}-\d{2}$/.test(reportDate)) {
    console.error('❌ Invalid date format. Use YYYY-MM (e.g., 2025-01)');
    process.exit(1);
  }

  const outputDir = path.join(__dirname, '../src/assets/img/metrics');
  const outputFilename = `looker-report-${reportDate}.png`;
  const outputPath = path.join(outputDir, outputFilename);

  console.log(`🔄 Processing monthly report for ${reportDate}...`);
  console.log(`📁 Input: ${pdfPath}`);
  console.log(`📁 Output: ${outputPath}`);

  // Convert PDF to PNG
  convertPdfToPng(pdfPath, outputPath);

  // Update data file
  updateReportsData(reportDate, outputFilename);

  console.log('✨ Monthly report processing complete!');
  console.log(`\n📊 Your report is now available at: /assets/img/metrics/${outputFilename}`);
  console.log('🌐 The metrics dashboard will automatically display the latest reports.');
}

if (require.main === module) {
  main();
}

module.exports = { convertPdfToPng, updateReportsData };
