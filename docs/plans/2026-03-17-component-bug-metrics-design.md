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
- `component-maturity.json` — source of truth for component names (used as label names). The `_warning` key must be excluded; only `va-*` keys are valid components.
- `component-usage.json` — usage counts per component from the component-library CSV pipeline. This file uses display names (e.g., `"Link"`) with a `sourceComponents` array containing the `va-*` tag forms. Join usage data by matching `component-maturity.json` keys against entries in `sourceComponents` arrays.

**Processing:**
1. Fetch all open issues labeled `bug` using `gh` CLI (same auth pattern as `collect-issue-metrics.js`)
2. Load component list from `component-maturity.json` keys, excluding `_warning` and any other non-`va-*` keys
3. For each issue, check which component labels it has (matching against the filtered component list)
4. Count bugs per component. An issue with multiple component labels increments the count for each matching component.
5. Load `component-usage.json` and match components by finding the `top_components_overall` entry whose `sourceComponents` array contains the `va-*` key
6. Calculate defect rate: `(bug_count / usage_count) * 100`, expressed as a percentage
7. If a component has no usage data, `usage_count` and `defect_rate` are `null` (displayed as "N/A")
8. If a component has `usage_count` of `0`, treat the same as no usage data — set `usage_count` to `0` and `defect_rate` to `null` (displayed as "N/A") to avoid division by zero
9. Include ALL components from `component-maturity.json` in `by_component`, even those with zero bugs (`bug_count: 0`). This ensures the table can show every component without needing a separate merge step in the UI.
10. Generate GitHub query URL per component: `https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is:issue+is:open+label:bug+label:{component}`

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
    },
    {
      "name": "va-card",
      "bug_count": 0,
      "usage_count": 45,
      "defect_rate": 0,
      "github_url": "https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is:issue+is:open+label:bug+label:va-card"
    }
  ],
  "summary": {
    "total_components_with_bugs": 15,
    "total_bug_issues": 42,
    "total_components": 55,
    "highest_defect_rate_component": "va-segmented-progress-bar",
    "most_bugs_component": "va-modal",
    "last_updated": "2026-03-17T00:00:00.000Z"
  },
  "data_source": "github-issues",
  "report_date": "2026-03-17"
}
```

Components in `by_component` are sorted by `bug_count` descending, then alphabetically by name for ties (including zero-bug components).

**Field definitions:**
- `total_bug_issues` — the count of **unique** open issues with the `bug` label in the repo. Because one issue can have multiple component labels, the sum of per-component `bug_count` values may exceed this number.
- `total_components` — the total number of components in `by_component` (including zero-bug entries).

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
    GITHUB_TOKEN: ${{ secrets.VADS_WORKFLOWS }}
```

- Runs after `collect-issue-metrics.js` (uses `secrets.VADS_WORKFLOWS`, consistent with all other steps in the workflow)
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
