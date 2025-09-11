# Metrics Dashboard Automation

This document describes the automated workflows that keep the VADS metrics dashboard up to date.

## Overview

The metrics dashboard at `/about/metrics/` is automatically updated weekly with fresh data from GitHub APIs. The automation includes:

- **Issue tracking metrics**: Quarterly and monthly issue activity
- **Experimental design tracking**: Issues with `experimental_design` label and implementation status
- **Summary statistics**: Open issues, resolution times, etc.

## Workflows

### `update-metrics.yml`

**Schedule**: Weekly on Sundays at 6:00 AM UTC (2:00 AM ET)  
**Trigger**: Automatic via cron schedule, or manual via workflow dispatch

**What it does**:
1. Fetches all GitHub issues using the GitHub CLI
2. Processes data into quarterly and monthly aggregations
3. Tracks experimental design issues and implementation status
4. Commits updated data files to the repository
5. Provides detailed summary of metrics collected

**Data generated**:
- `src/assets/data/metrics/issue-metrics.json`

## Manual Execution

### Local Development

```bash
# Install dependencies
npm install

# Collect metrics (requires GITHUB_TOKEN)
npm run collect-metrics

# Or run directly
node scripts/collect-issue-metrics.js
```

### GitHub Actions

Navigate to the **Actions** tab in the repository and manually trigger the "Update Metrics Dashboard Data" workflow.

## Data Structure

### issue-metrics.json

```json
{
  "summary": {
    "total_issues_processed": 4500,
    "open_issues": 425,
    "closed_this_month": 160,
    "avg_resolution_days": 124,
    "last_updated": "2025-01-20T10:00:00Z"
  },
  "quarterly": [
    {
      "period": "2024-Q4",
      "issues_opened": 89,
      "issues_closed": 95
    }
  ],
  "velocity": [
    {
      "period": "2025-01",
      "issues_opened": 45
    }
  ],
  "experimental_quarterly": [
    {
      "period": "2024-Q4",
      "issues_opened": 12,
      "issues_closed": 8,
      "issues_implemented": 3
    }
  ]
}
```

## Environment Variables

### Required

- `GITHUB_TOKEN`: GitHub personal access token or automatic token for API access

### GitHub Actions Context

The workflow automatically uses `GITHUB_TOKEN` provided by GitHub Actions with appropriate permissions for:
- Reading repository contents
- Accessing GitHub API
- Committing changes

## Monitoring

### Success Indicators

- ✅ Weekly commits with updated metrics data
- ✅ Dashboard displays current data
- ✅ No error notifications in Actions tab

### Troubleshooting

**Workflow fails with rate limiting**:
- Check if GITHUB_TOKEN is properly configured
- Verify token has necessary permissions

**No data appearing on dashboard**:
- Verify `issue-metrics.json` file exists in correct location
- Check browser console for JavaScript errors
- Ensure Jekyll build includes assets directory

**Stale data**:
- Check last successful workflow run
- Manually trigger workflow to update immediately

## Adding New Metrics

To add new metrics to the collection:

1. **Update collection script**: Modify `scripts/collect-issue-metrics.js`
2. **Update data structure**: Ensure new data is included in JSON output
3. **Update dashboard**: Modify `src/_about/metrics.html` to display new metrics
4. **Test workflow**: Run manually to verify changes work

## Related Files

- `.github/workflows/update-metrics.yml` - Main automation workflow
- `scripts/collect-issue-metrics.js` - Data collection script
- `src/_about/metrics.html` - Dashboard display page
- `src/assets/data/metrics/issue-metrics.json` - Generated data file

## Performance Considerations

- **Rate Limiting**: GitHub API has rate limits; the workflow uses authenticated requests for higher limits
- **Data Size**: Large datasets are paginated automatically by GitHub CLI
- **Processing Time**: Typical runtime is 2-3 minutes for full data collection
- **Storage**: Generated JSON files are small (<100KB typically)

## Future Enhancements

Planned automation additions:
- Google Analytics integration for site metrics
- Component usage data collection (pending other PR)
- Figma API integration for design metrics
- Survey data integration
