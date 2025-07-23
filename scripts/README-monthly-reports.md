# Monthly Reports Processing

This directory contains the automation tools for processing monthly Google Looker Studio reports and displaying them on the metrics dashboard.

## Quick Start

1. **Save your monthly PDF report** somewhere accessible (e.g., Downloads folder)

2. **Run the processing script:**

   ```bash
   node scripts/process-monthly-report.js path/to/your-report.pdf 2025-06
   ```

   **Important:** Replace `2025-06` with the correct year-month for your report (e.g., 2025-06 for June 2025, 2025-07 for July 2025, etc.)

3. **The script will automatically:**
   - Convert the PDF to a PNG image
   - Save it to `src/assets/img/metrics/`
   - Update the reports data file
   - Make it available on the metrics dashboard

## Example Usage

```bash
# Process January 2025 report
node scripts/process-monthly-report.js ~/Downloads/VA_Design_System_Top_25_Jan_2025.pdf 2025-01

# Process current month (auto-detects date)
node scripts/process-monthly-report.js ~/Downloads/latest-report.pdf
```

## Prerequisites

The script requires **ImageMagick** to convert PDFs to images:

### macOS (using Homebrew)

```bash
brew install imagemagick
```

### Ubuntu/Debian

```bash
sudo apt-get install imagemagick
```

### Windows

Download and install from: <https://imagemagick.org/script/download.php>

## File Structure

```text
src/assets/
├── data/metrics/
│   └── monthly-reports.json          # Tracks all uploaded reports
└── img/metrics/
    ├── looker-report-2025-01.png     # Generated report images
    └── looker-report-2025-02.png
```

## Dashboard Integration

The monthly reports automatically appear in the "Monthly Analytics Reports" section of the metrics dashboard at `/about/metrics/`. The dashboard shows:

- **Grid view** of the 6 most recent reports
- **Click to expand** - full-size modal view
- **Responsive design** - works on mobile and desktop
- **Automatic loading** - no manual updates needed

## Troubleshooting

### "ImageMagick not found" error

Install ImageMagick using the commands above.

### "Permission denied" error

Make sure the script is executable:

```bash
chmod +x scripts/process-monthly-report.js
```

### Reports not appearing on dashboard

1. Check that the PNG file was created in `src/assets/img/metrics/`
2. Verify the JSON file was updated: `src/assets/data/metrics/monthly-reports.json`
3. Clear your browser cache and reload the page

## Advanced Usage

### Custom naming

The script automatically names files as `looker-report-YYYY-MM.png`. If you need to update an existing month, just run the script again with the same date.

### Batch processing

You can process multiple reports by running the script multiple times:

```bash
node scripts/process-monthly-report.js reports/jan-2025.pdf 2025-01
node scripts/process-monthly-report.js reports/feb-2025.pdf 2025-02
node scripts/process-monthly-report.js reports/mar-2025.pdf 2025-03
```

### Data retention

The system keeps the 12 most recent reports. Older reports are automatically removed from the dashboard but the image files remain in the repository.

## Integration with CI/CD

You can automate this process by:

1. Setting up a scheduled GitHub Action
2. Connecting to Google Drive or Looker Studio API
3. Automatically processing new reports when they're available

Contact the development team if you'd like help setting up automation.
