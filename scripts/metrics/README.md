# VADS Metrics Collection

This directory contains scripts and documentation for collecting and generating metrics for the VA Design System dashboard.

## Overview

The metrics system collects data from GitHub and other sources to generate visualizations showing the health and adoption of the VA Design System. The primary focus is on issue tracking metrics including burndown and velocity charts.

## Scripts

### `collect-issue-metrics.js`

Collects issue data from the vets-design-system-documentation repository and generates metrics for burndown and velocity charts.

**Location**: `../collect-issue-metrics.js`

**What it does**:
- Fetches all issues from the GitHub repository using the `gh` CLI
- Processes issues into weekly buckets for burndown analysis
- Calculates monthly velocity metrics
- Generates summary statistics (open issues, resolution times)
- Outputs structured JSON data for dashboard consumption

**Output**: `src/assets/data/metrics/issue-metrics.json`

## Setup

### Prerequisites

1. **GitHub CLI (`gh`)**: Install from https://cli.github.com/
2. **Node.js**: Version 14 or higher
3. **GitHub Authentication**: Authenticate with `gh auth login`

### Authentication

The script uses the GitHub CLI for authentication. Make sure you're logged in:

```bash
gh auth login
```

For automated environments (CI/CD), you can also use a GitHub token:

```bash
export GITHUB_TOKEN="your_github_token_here"
```

## Usage

### Manual Execution

Run the metrics collection script from the repository root:

```bash
# From the repository root
node scripts/collect-issue-metrics.js
```

### Expected Output

```
Starting issue metrics collection...
Fetching issue data from GitHub...
Fetched 1247 issues
✅ Metrics data written to src/assets/data/metrics/issue-metrics.json
📊 Summary:
   - Open issues: 156
   - Closed this month: 23
   - Avg resolution: 14 days
   - Burndown data points: 52
   - Velocity data points: 24
```

### Viewing the Dashboard

After running the script, the metrics will be available on the dashboard:

1. Start the Jekyll development server: `yarn start`
2. Navigate to: `http://localhost:4000/about/metrics/`

## Data Structure

The generated `issue-metrics.json` file contains:

```json
{
  "burndown": [
    {
      "date": "2024-01-01",
      "opened_count": 5,
      "closed_count": 3,
      "opened_cumulative": 123,
      "closed_cumulative": 98
    }
  ],
  "velocity": [
    {
      "period": "2024-01",
      "issues_opened": 25,
      "issues_closed": 18
    }
  ],
  "summary": {
    "open_issues": 156,
    "closed_this_month": 23,
    "avg_resolution_days": 14,
    "total_issues": 1247,
    "last_updated": "2024-01-15T10:30:00.000Z"
  },
  "generated_at": "2024-01-15T10:30:00.000Z"
}
```

## Automation

### GitHub Actions (Recommended)

Create a workflow to run metrics collection weekly:

```yaml
# .github/workflows/metrics.yml
name: Update Metrics

on:
  schedule:
    - cron: '0 2 * * 1'  # Every Monday at 2 AM
  workflow_dispatch:  # Allow manual triggering

jobs:
  update-metrics:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: yarn install
        
      - name: Collect metrics
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: node scripts/collect-issue-metrics.js
        
      - name: Commit metrics data
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add src/assets/data/metrics/
          git commit -m "Update metrics data" || exit 0
          git push
```

### Local Cron Job

For local development, you can set up a cron job:

```bash
# Edit crontab
crontab -e

# Add entry to run every Monday at 2 AM
0 2 * * 1 cd /path/to/vets-design-system-documentation && node scripts/collect-issue-metrics.js
```

## Troubleshooting

### Common Issues

**Error: "gh: command not found"**
- Install GitHub CLI: https://cli.github.com/
- Make sure it's in your PATH

**Error: "HTTP 403: rate limit exceeded"**
- Authenticate with GitHub: `gh auth login`
- Or set GITHUB_TOKEN environment variable

**Error: "Failed to fetch issues"**
- Check your internet connection
- Verify repository access permissions
- Try running `gh repo view department-of-veterans-affairs/vets-design-system-documentation`

**Charts not showing on dashboard**
- Verify the JSON file was created: `ls -la src/assets/data/metrics/`
- Check browser console for JavaScript errors
- Ensure Jekyll is serving the assets directory

### Debug Mode

Add debug logging by setting the DEBUG environment variable:

```bash
DEBUG=1 node scripts/collect-issue-metrics.js
```

### Data Validation

To validate the generated metrics data:

```bash
# Check if file exists and has valid JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('src/assets/data/metrics/issue-metrics.json', 'utf8')))"
```

## Contributing

When adding new metrics or modifying the collection script:

1. Update this README with new instructions
2. Add appropriate error handling and logging
3. Test with a variety of data scenarios
4. Update the dashboard charts if data structure changes

## Related Files

- `src/_about/metrics.md` - Dashboard page
- `src/assets/data/metrics/` - Generated metrics data
- `scripts/collect-issue-metrics.js` - Main collection script

## Support

For issues with metrics collection:
1. Check this README for troubleshooting steps
2. Review the script logs for error details
3. Open an issue in the repository with debug output