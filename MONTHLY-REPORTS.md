# Metrics Dashboard - Monthly Analytics Reports

This feature allows you to automatically process and display your monthly Google Looker Studio reports on the VA Design System metrics dashboard.

## What's New

The metrics dashboard now includes a **"Monthly Analytics Reports"** section that displays your Top 25 pages reports as interactive images that can be clicked to view full-size.

## How It Works

1. **PDF Processing**: When you receive your monthly PDF from Google Looker Studio, a simple script converts it to a high-quality PNG image
2. **Automatic Integration**: The image is automatically added to the dashboard and tracked in the system
3. **Responsive Display**: Reports are displayed in a responsive grid that works on all devices
4. **Modal Viewing**: Click any report to view it full-size with zoom capabilities

## Quick Setup Guide

### One-Time Setup

Ensure you have the required dependencies:

```bash
# Install ImageMagick and Ghostscript (required for PDF conversion)
brew install imagemagick ghostscript
```

### Monthly Workflow

Each time you receive a new report:

1. **Save the PDF** from Google Looker Studio to your computer
2. **Run the processing command:**
   ```bash
   # Using npm script (recommended)
   npm run process-monthly-report path/to/your-report.pdf 2025-01
   
   # Or run directly
   node scripts/process-monthly-report.js path/to/your-report.pdf 2025-01
   ```
3. **Commit and push** the changes to update the live dashboard

### Example

```bash
# Process January 2025 report
npm run process-monthly-report ~/Downloads/VA_Design_System_Top_25_Jan_2025.pdf 2025-01

# Process February 2025 report  
npm run process-monthly-report ~/Downloads/VA_Design_System_Top_25_Feb_2025.pdf 2025-02
```

## What the Script Does

The `process-monthly-report.js` script:

1. **Converts PDF to PNG** at 300 DPI for crisp display
2. **Saves the image** to `src/assets/img/metrics/looker-report-YYYY-MM.png`
3. **Updates the data file** at `src/assets/data/metrics/monthly-reports.json`
4. **Provides confirmation** that everything was processed correctly

## Dashboard Features

- **Grid Layout**: Shows the 6 most recent reports in a clean grid
- **Smart Naming**: Automatically formats dates (e.g., "January 2025")
- **Click to Zoom**: Full-screen modal view with easy navigation
- **Mobile Friendly**: Responsive design works on all screen sizes
- **Auto-Loading**: No manual updates needed - reports appear automatically

## File Structure

```
src/assets/
├── data/metrics/
│   └── monthly-reports.json          # Tracks all reports metadata
└── img/metrics/
    ├── looker-report-2025-01.png     # January 2025 report
    ├── looker-report-2025-02.png     # February 2025 report
    └── ...                           # Additional monthly reports
```

## Customization Options

### Different Date Formats
The script auto-detects the current month if you don't specify:
```bash
npm run process-monthly-report path/to/report.pdf
# Uses current year-month automatically
```

### Batch Processing
Process multiple months at once:
```bash
npm run process-monthly-report reports/jan.pdf 2025-01
npm run process-monthly-report reports/feb.pdf 2025-02
npm run process-monthly-report reports/mar.pdf 2025-03
```

### Replacing Reports
If you need to update a report for a specific month, just run the script again with the same date:
```bash
npm run process-monthly-report updated-jan-report.pdf 2025-01
# Replaces the existing January 2025 report
```

## Technical Details

### Image Quality
- **Resolution**: 300 DPI for crisp display
- **Format**: PNG for lossless quality and transparency support
- **Compression**: Optimized for web delivery while maintaining readability

### Data Management
- **Retention**: System keeps metadata for the 12 most recent reports
- **Storage**: Image files remain in the repository indefinitely
- **Performance**: Images are lazy-loaded for faster page performance

### Browser Compatibility
- **Modern Browsers**: Full feature support (Chrome, Firefox, Safari, Edge)
- **Mobile Devices**: Touch-friendly modal interactions
- **Accessibility**: Keyboard navigation and screen reader support

## Troubleshooting

### Common Issues

**"ImageMagick not found"**
```bash
brew install imagemagick ghostscript
```

**"Permission denied"**
```bash
chmod +x scripts/process-monthly-report.js
```

**Reports not appearing**
1. Check the PNG was created: `ls src/assets/img/metrics/`
2. Verify JSON was updated: `cat src/assets/data/metrics/monthly-reports.json`
3. Clear browser cache and reload

**Low image quality**
The script uses 300 DPI by default. For higher quality, edit the script and change `-density 300` to `-density 600`.

### Advanced Debugging

View processing details:
```bash
# Run with verbose output
node scripts/process-monthly-report.js your-report.pdf 2025-01 --verbose
```

Check file sizes:
```bash
ls -lh src/assets/img/metrics/
```

## Future Enhancements

Potential improvements for future development:

1. **API Integration**: Direct connection to Google Looker Studio API
2. **Automated Scheduling**: GitHub Actions to process reports automatically
3. **Email Notifications**: Alert when new reports are available
4. **Comparison Views**: Side-by-side report comparisons
5. **Data Extraction**: Parse key metrics from PDFs into structured data

## Support

For technical issues or feature requests:
1. Check the troubleshooting section above
2. Verify all dependencies are installed correctly
3. Contact the development team with specific error messages
4. Include sample files (without sensitive data) when reporting issues

The monthly reports feature is designed to be simple and reliable - most issues can be resolved quickly with the troubleshooting steps above.
