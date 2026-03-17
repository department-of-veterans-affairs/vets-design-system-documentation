# Component Bug Metrics — Design Spec

**Date:** 2026-03-17
**Status:** Approved
**Location in dashboard:** Components section, after "Top Components by Usage", before "Imposter Component Tracking"

## Problem

The metrics dashboard tracks component usage and overall issue counts, but doesn't show bug issues broken down by component. PMs and engineers can't easily answer "which components have the most bugs?" or "which components are disproportionately buggy relative to their usage?" without manually searching GitHub.

## Goals

1. Show open bug count per component on the dashboard
2. Calculate defect rate (bugs as a percentage of usage) to normalize for component popularity
3. Provide click-through links from each component to its filtered GitHub Issues query
4. Integrate into the existing weekly automation pipeline

## Data Collection

### New Script: `scripts/collect-component-bug-metrics.js`

**Inputs:**
- GitHub Issues API via `gh` CLI — all open issues with `bug` label in this repo
- `component-maturity.json` — source of truth for component names (used as label names)
- `component-usage.json` — usage counts per component from the component-library CSV pipeline

**Processing:**
1. Fetch all open issues labeled `bug` using `gh` CLI (same auth pattern as `collect-issue-metrics.js`)
2. For each issue, check which `va-*` component labels it has (from `component-maturity.json` keys)
3. Count bugs per component
4. Load `component-usage.json` and match components to get usage counts
5. Calculate defect rate: `(bug_count / usage_count) * 100`, expressed as a percentage
6. If a component has no usage data, `usage_count` and `defect_rate` are `null` (displayed as "N/A")
7. Generate GitHub query URL per component: `https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is:issue+is:open+label:bug+label:{component}`

**Output:** `component-bug-metrics.json` written to both:
- `/src/_data/metrics/` (for Jekyll Liquid templates)
- `/src/assets/data/metrics/` (for JavaScript charts)

### JSON Structure

```json
{
  "by_component": [
    {
      "name": "va-modal",
      "bug_count": 8,
      "usage_count": 316,
      "defect_rate": 2.53,
      "github_url": "https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is:issue+is:open+label:bug+label:va-modal"
    },
    {
      "name": "va-text-input",
      "bug_count": 3,
      "usage_count": null,
      "defect_rate": null,
      "github_url": "https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is:issue+is:open+label:bug+label:va-text-input"
    }
  ],
  "summary": {
    "total_components_with_bugs": 15,
    "total_bug_issues": 42,
    "highest_defect_rate_component": "va-segmented-progress-bar",
    "most_bugs_component": "va-modal",
    "last_updated": "2026-03-17T00:00:00.000Z"
  },
  "data_source": "github-issues",
  "report_date": "2026-03-17"
}
```

Components in `by_component` are sorted by `bug_count` descending.

## Dashboard Display

### Section Header

```html
<h3>Bug Issues by Component</h3>
<p>Open bug issues per component, with defect rate calculated relative to usage
across VA applications. Click a component name to view its bug issues on GitHub.</p>
```

### Graph Tab

- Horizontal bar chart showing top 10 components by bug count
- Uses existing D3 chart pattern and VA blue color (`#0071bb`)
- Only components with at least 1 bug are shown
- Matches responsive behavior of other charts (mobile breakpoints, debounced resize)

### Table Tab

Sortable `va-table` with four columns:

| Component | Bug Count | Usage Count | Defect Rate |
|-----------|-----------|-------------|-------------|
| [va-modal](github-link) | 8 | 316 | 2.53% |
| [va-text-input](github-link) | 3 | N/A | N/A |

- Shows ALL components (including those with zero bugs)
- Sorted by bug count descending by default
- Component names are `<a>` links to pre-filtered GitHub Issues queries (opens in new tab)
- Sortable on wider viewports via existing `updateTableSortable` pattern
- Stacked layout on mobile via existing `stacked="true"` pattern
- `right-align-cols` on numeric columns

### Data Freshness

- Shows `last_updated` date below the section heading
- Staleness warning if data is older than 7 days (matching existing `enhanceDataFreshness` pattern)

## Automation Integration

### GitHub Actions Workflow

Add a new step in `.github/workflows/metrics-dashboard.yml`:

```yaml
- name: Collect component bug metrics
  run: node scripts/collect-component-bug-metrics.js
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

- Runs after `collect-issue-metrics.js` (shares the same token)
- Add `component-bug-metrics.json` to the verification step that checks both output locations

## JavaScript Integration

### Chart Rendering

Add `renderComponentBugChart(data)` function in `index.html` inline script:
- Follows existing horizontal bar chart pattern
- Registered in `renderVisibleChartsIfNeeded()` for tab-switch rendering
- Registered in resize handler for responsive re-rendering
- Loads data from `/assets/data/metrics/component-bug-metrics.json`

### Data Loading

- Fetch `component-bug-metrics.json` alongside existing data loads
- Store in a module-level variable (same pattern as `imposterData`)

## Out of Scope (Future Iterations)

- Historical trend of bugs opened/closed per component over time
- Severity breakdown within the bug category
- Changes to the existing `analyze_issues.js` markdown report (stays as-is)
- Per-component trend sparklines
