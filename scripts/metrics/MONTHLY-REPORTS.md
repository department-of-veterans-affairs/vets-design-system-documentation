# Monthly Analytics Reports

This feature allows you to automatically process and display your monthly Google Looker Studio reports on the VA Design System metrics dashboard.

## ✨ What's New

The metrics dashboard now includes a **"Monthly Analytics Reports"** section that displays your Top 25 pages reports as interactive images that can be clicked to view full-size.

## 🚀 Quick Start

### One-Time Setup

Install required dependencies:
```bash
brew install imagemagick ghostscript
```

### Monthly Workflow

Each time you receive a new report:

1. **Save the PDF** from Google Looker Studio to your computer
2. **Run the processing command:**
   ```bash
   # Using helper script (recommended)
   ./scripts/add-monthly-report.sh path/to/your-report.pdf 2025-06
   
   # Or using npm script
   npm run process-monthly-report path/to/your-report.pdf 2025-06
   
   # Or run directly
   node scripts/process-monthly-report.js path/to/your-report.pdf 2025-06
   ```
3. **Commit and push** the changes to update the live dashboard

### Example

```bash
# Process June 2025 report
./scripts/add-monthly-report.sh ~/Downloads/VA_Design_System_Top_25_June_2025.pdf 2025-06

# Process July 2025 report  
npm run process-monthly-report ~/Downloads/VA_Design_System_Top_25_July_2025.pdf 2025-07
```

**Important:** Use the correct `YYYY-MM` format (e.g., 2025-06 for June 2025, 2025-07 for July 2025, etc.)

## How It Works

1. **PDF Processing**: The script converts your PDF to a high-quality PNG image
2. **Automatic Integration**: The image is automatically added to the dashboard and tracked in the system
3. **Responsive Display**: Reports are displayed in a responsive grid that works on all devices
4. **Modal Viewing**: Click any report to view it full-size

## What the Script Does

The `process-monthly-report.js` script:

1. **Converts PDF to PNG** at 300 DPI for crisp display
2. **Saves the image** to `src/assets/img/metrics/looker-report-YYYY-MM.png`
3. **Updates the data file** at `src/assets/data/metrics/monthly-reports.json`
4. **Provides confirmation** that everything was processed correctly

## Dashboard Features

- **Grid Layout**: Shows the 6 most recent reports in a clean grid
- **Smart Naming**: Automatically formats dates (e.g., "June 2025")
- **Click to Zoom**: Full-screen modal view with easy navigation
- **Mobile Friendly**: Responsive design works on all screen sizes
- **Auto-Loading**: No manual updates needed - reports appear automatically

## File Structure

```
src/assets/
├── data/metrics/
│   └── monthly-reports.json          # Tracks all reports metadata
└── img/metrics/
    ├── looker-report-2025-06.png     # June 2025 report
    ├── looker-report-2025-07.png     # July 2025 report
    └── ...                           # Additional monthly reports
```

## Advanced Usage

### Auto-detect Current Month
The script can auto-detect the current month if you don't specify:
```bash
npm run process-monthly-report path/to/report.pdf
# Uses current year-month automatically
```

### Batch Processing
Process multiple months at once:
```bash
npm run process-monthly-report reports/june.pdf 2025-06
npm run process-monthly-report reports/july.pdf 2025-07
npm run process-monthly-report reports/august.pdf 2025-08
```

### Replacing Reports
If you need to update a report for a specific month, just run the script again with the same date:
```bash
npm run process-monthly-report updated-june-report.pdf 2025-06
# Replaces the existing June 2025 report
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
chmod +x scripts/add-monthly-report.sh
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
# Check file sizes
ls -lh src/assets/img/metrics/

# Verify dependencies
magick -version
gs -version
```

## Installation on Different Systems

### macOS (using Homebrew)
```bash
brew install imagemagick ghostscript
```

### Ubuntu/Debian
```bash
sudo apt-get install imagemagick ghostscript
```

### Windows
Download and install from: <https://imagemagick.org/script/download.php>

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
