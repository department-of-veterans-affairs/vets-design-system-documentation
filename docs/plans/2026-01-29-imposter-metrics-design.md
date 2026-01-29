# Imposter Component Metrics Design

**Date:** 2026-01-29
**Status:** Approved
**Related Issue:** [va.gov-team #99341](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99341)

## Overview

Automate tracking of imposter component replacement progress to measure the KR: "Remove 150 imposter component instances from vets-website by end of FY26."

This is **Phase 1** of a two-phase approach:
- **Phase 1 (this design):** Track GitHub issues labeled `va-imposter` in va.gov-team repo
- **Phase 2 (future):** Add actual instance counts from vets-website codebase scanning

## Goals

1. Track total imposter issues opened vs closed over time (quarterly)
2. Break down progress by component type (va-alert, va-radio, etc.)
3. Display progress toward the 150-instance goal on the metrics dashboard
4. Integrate with existing weekly automated metrics collection

## Data Sources

**Primary:** GitHub issues in `department-of-veterans-affairs/va.gov-team` with label `va-imposter`

**Component type detection:** Issues often have component-specific labels like:
- `va-alert`
- `va-radio`
- `va-text-input`
- `va-tabs`
- `va-select`

## Data Collection

### New Script: `scripts/collect-imposter-metrics.js`

Follows the established pattern from `collect-governance-metrics.js`:

```javascript
const { execFileSync } = require('child_process');

const REPO = 'department-of-veterans-affairs/va.gov-team';

async function fetchImposterIssues(startDate, endDate, filterBy = 'created') {
  const searchArgs = [
    'search', 'issues',
    '--repo', REPO,
    '--label', 'va-imposter',
    '--limit', '1000',
    '--json', 'number,title,state,createdAt,closedAt,labels,url'
  ];

  if (filterBy === 'closed') {
    searchArgs.push('--closed', `${startDate}..${endDate}`);
  } else {
    searchArgs.push('--created', `${startDate}..${endDate}`);
  }

  const output = execFileSync('gh', searchArgs, {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
    timeout: 120000
  });

  return JSON.parse(output);
}
```

### Data Structure

Output file: `src/_data/metrics/imposter-metrics.json`

```json
{
  "quarterly": [
    {
      "period": "2025-Q4",
      "issues_opened": 12,
      "issues_closed": 8
    },
    {
      "period": "2026-Q1",
      "issues_opened": 5,
      "issues_closed": 15
    }
  ],
  "by_component": [
    {
      "component": "va-alert",
      "open": 3,
      "closed": 5,
      "total": 8
    },
    {
      "component": "va-radio",
      "open": 2,
      "closed": 4,
      "total": 6
    },
    {
      "component": "va-text-input",
      "open": 1,
      "closed": 3,
      "total": 4
    }
  ],
  "summary": {
    "total_open": 45,
    "total_closed": 85,
    "goal": 150,
    "progress_percentage": 57,
    "last_updated": "2026-01-29T18:00:00.000Z"
  },
  "generated_at": "2026-01-29T18:00:00.000Z"
}
```

### Component Type Extraction

The script will extract component types from issue labels by matching known VA Design System component patterns:

```javascript
const COMPONENT_LABELS = [
  'va-alert', 'va-radio', 'va-text-input', 'va-select',
  'va-checkbox', 'va-button', 'va-tabs', 'va-card',
  'va-breadcrumbs', 'va-file-input', 'va-telephone',
  'va-memorable-date', 'va-statement-of-truth'
  // Add more as discovered
];

function extractComponentType(labels) {
  for (const label of labels) {
    if (COMPONENT_LABELS.includes(label.toLowerCase())) {
      return label.toLowerCase();
    }
  }
  return 'unknown';
}
```

## Dashboard UI

### Location

New section on `/about/metrics/index.html` titled "Imposter Component Tracking"

### Summary Cards

Three metric cards at the top of the section:

| Card | Value | Description |
|------|-------|-------------|
| **Total Replaced** | `{total_closed}` | Closed imposter issues with trend indicator |
| **Goal Progress** | `{progress_percentage}%` | Progress bar toward 150 goal |
| **Open Issues** | `{total_open}` | Remaining open imposter issues |

### Chart 1: Quarterly Progress

- **Type:** Grouped bar chart (matches existing "Issue Activity by Quarter" style)
- **X-axis:** Quarters (2025-Q1, Q2, Q3, Q4, 2026-Q1, etc.)
- **Y-axis:** Issue count
- **Bars:** Issues opened (blue) vs Issues closed (dark blue)
- **Accessibility:** Table view toggle with sortable columns

### Chart 2: Progress by Component

- **Type:** Horizontal bar chart
- **Y-axis:** Component names (va-alert, va-radio, etc.)
- **X-axis:** Issue count
- **Bars:** Stacked or grouped showing open vs closed per component
- **Sort order:** By total issues (most active at top)
- **Accessibility:** Table view toggle

### Data Freshness

Display last update date at section level, consistent with other dashboard sections.

## Workflow Integration

### GitHub Actions Changes

Add to `.github/workflows/metrics-dashboard.yml`:

**New step** (after "Collect governance metrics"):

```yaml
- name: Collect imposter metrics
  run: |
    echo "Starting imposter component metrics collection..."
    node scripts/collect-imposter-metrics.js
    echo "Imposter metrics collection completed"
  env:
    GITHUB_TOKEN: ${{ secrets.VADS_WORKFLOWS }}
```

**Add to file verification step:**

```yaml
# Check imposter metrics
if [ -f "src/_data/metrics/imposter-metrics.json" ]; then
  echo "✅ imposter-metrics.json generated successfully"
  echo "File size: $(du -h src/_data/metrics/imposter-metrics.json)"
else
  echo "❌ imposter-metrics.json not found"
  exit 1
fi
```

**Add to "Check for changes" step** (files to stage):

```yaml
src/assets/data/metrics/imposter-metrics.json \
src/_data/metrics/imposter-metrics.json \
```

**Update PR description** to mention imposter metrics.

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `scripts/collect-imposter-metrics.js` | Create | New collection script |
| `src/_data/metrics/imposter-metrics.json` | Create | Generated data (Jekyll) |
| `src/assets/data/metrics/imposter-metrics.json` | Create | Generated data (client fetch) |
| `src/_about/metrics/index.html` | Modify | Add new dashboard section |
| `src/assets/stylesheets/_layout/metrics.scss` | Modify | Add progress bar styles |
| `.github/workflows/metrics-dashboard.yml` | Modify | Add collection step |

## Future Phase 2: Instance Counting

The data structure is designed to accommodate Phase 2 additions:

```json
{
  "quarterly": [...],
  "by_component": [...],
  "summary": {...},
  "instances": {
    "total_identified": 500,
    "total_replaced": 85,
    "by_component": [
      { "component": "va-alert", "identified": 120, "replaced": 45 }
    ],
    "last_scan_date": "2026-01-29",
    "scan_source": "vets-website"
  }
}
```

Phase 2 would involve:
1. Scanning vets-website for known imposter patterns
2. Cross-referencing with the Confluence list
3. Tracking actual instance reduction over time

## Testing

1. Run script locally: `node scripts/collect-imposter-metrics.js`
2. Verify JSON output structure matches spec
3. Build site locally: `yarn start`
4. Check dashboard section renders correctly
5. Verify charts display with real data
6. Test table view accessibility
7. Verify workflow runs successfully in CI

## Success Criteria

- [ ] Script collects all `va-imposter` labeled issues from va.gov-team
- [ ] Quarterly data shows issues opened vs closed by quarter
- [ ] Component breakdown correctly categorizes issues by type
- [ ] Summary shows progress toward 150 goal
- [ ] Dashboard section displays all three metric cards
- [ ] Both charts render with real data
- [ ] Table views are accessible and sortable
- [ ] Weekly workflow updates data automatically
