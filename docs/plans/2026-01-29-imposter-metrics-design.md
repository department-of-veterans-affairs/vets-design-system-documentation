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

**Primary:** GitHub issues in `department-of-veterans-affairs/va.gov-team` with labels `va-imposter` AND `collab-cycle-feedback`

This dual-label requirement filters to Governance team staging review findings only, excluding general imposter-related issues or discussions.

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
    '--label', 'collab-cycle-feedback',  // Filter to Governance staging review findings
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

## Phase 2: Instance Counting from Codebase Scanning

Phase 2 adds actual instance counts by scanning vets-website for known imposter components. This complements Phase 1 (issue tracking) by measuring what exists in the codebase directly.

**Related Work:** This uses similar techniques to the [Pattern Adherence Tracking PR #5447](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/5447), which scans vets-website to find pattern usage. Both:
- Scan vets-website codebase (local or via GitHub API)
- Search for specific imports/file references
- Generate metrics for the dashboard

### Imposter Definitions

Source: [Confluence - Imposter Components Overview](https://vfs.atlassian.net/wiki/spaces/DST/pages/3818717229/Imposter+components+overview)

Imposters are primarily **legacy platform widgets/components** in `src/platform/forms-system/` and custom application components that should be replaced with VA web components.

| VA Component | Imposter Name | Imposter File Path | Detection Method |
|--------------|---------------|-------------------|------------------|
| va-button-pair | FormNavButtons | `src/platform/forms-system/src/js/components/FormNavButtons.jsx` | Import |
| va-file-input | FileField (platform) | `src/platform/forms-system/src/js/fields/FileField.jsx` | Import |
| va-file-input | FileField (appeals) | `src/applications/appeals/shared/components/FileField.jsx` | Import |
| va-checkbox | CheckboxWidget | `src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx` | Import |
| va-checkbox | IssueCard | `src/applications/appeals/shared/components/IssueCard.jsx` | Import |
| va-card | FryDeaEligibilityCards | `src/applications/fry-dea/components/FryDeaEligibilityCards.jsx` | Import |
| va-radio | RadioWidget | `src/platform/forms-system/src/js/widgets/RadioWidget.jsx` | Import or `'ui:widget': 'radio'` |
| va-text-input | TextWidget | `src/platform/forms-system/src/js/widgets/TextWidget.jsx` | Import |
| va-select | SelectWidget | `src/platform/forms-system/src/js/widgets/SelectWidget.jsx` | Import |
| va-breadcrumbs | MrBreadcrumbs | `src/applications/mhv-medical-records/components/MrBreadcrumbs.jsx` | Import |
| va-statement-of-truth | Attestation | `src/platform/forms-system/src/js/components/Attestation.jsx` | Import |
| va-memorable-date | DateWidget | `src/platform/forms-system/src/js/widgets/DateWidget.jsx` | Import |
| va-action-link | UpcomingAppointmentsListItemAction | `src/applications/check-in/components/UpcomingAppointmentsListItemAction.jsx` | Import |
| va-table | UpcomingAppointmentLayout | `src/applications/vaos/appointment-list/pages/AppointmentsPage/UpcomingAppointmentLayout.jsx` | Import |

### New Script: `scripts/collect-imposter-instances.js`

Follows the pattern from `collect-pattern-adherence.js`:

```javascript
const IMPOSTER_DEFINITIONS = [
  {
    vaComponent: 'va-button-pair',
    imposterName: 'FormNavButtons',
    imposterPath: 'src/platform/forms-system/src/js/components/FormNavButtons.jsx',
    detectionPattern: /from\s+['"].*FormNavButtons['"]/
  },
  {
    vaComponent: 'va-file-input',
    imposterName: 'FileField',
    imposterPath: 'src/platform/forms-system/src/js/fields/FileField.jsx',
    detectionPattern: /from\s+['"].*FileField['"]/
  },
  {
    vaComponent: 'va-radio',
    imposterName: 'RadioWidget',
    imposterPath: 'src/platform/forms-system/src/js/widgets/RadioWidget.jsx',
    detectionPattern: /['"]ui:widget['"]\s*:\s*['"]radio['"]/
  },
  // ... additional definitions
];

async function scanForImposters(vetsWebsitePath) {
  // For each imposter definition:
  // 1. Search for files that import or reference the imposter
  // 2. Count instances per application
  // 3. Exclude test files (*.spec.js, *.unit.spec.jsx)
}
```

### Detection Approach

**Option A: Import-based detection (recommended for most)**
Search for files that import the imposter component:
```javascript
// Detect: import FormNavButtons from '...FormNavButtons'
// Detect: import { FormNavButtons } from '...'
const importPattern = /import\s+(?:{[^}]*}|[A-Za-z]+)\s+from\s+['"][^'"]*FormNavButtons['"]/g;
```

**Option B: Configuration-based detection (for widgets)**
Some imposters are used via forms-system configuration:
```javascript
// Detect: 'ui:widget': 'radio' (uses RadioWidget imposter)
const configPattern = /['"]ui:widget['"]\s*:\s*['"]radio['"]/g;
```

**Option C: File existence check (baseline)**
The Confluence doc lists specific implementation files. We can verify which still exist:
```javascript
const knownImplementations = [
  './src/applications/ask-va/components/YourPersonalInformationAuthenticated.jsx',
  './src/applications/hca/components/FormPages/InsuranceInformation.jsx',
  // ... from Confluence list
];
```

### Scanning Modes

Like pattern-adherence, support both local and API-based scanning:

```bash
# Local vets-website clone (faster, more accurate)
node scripts/collect-imposter-instances.js --vets-website-path ../vets-website

# GitHub API (no local clone needed, rate-limited)
node scripts/collect-imposter-instances.js
```

### Updated Data Structure

The data structure extends Phase 1 with `instances`:

```json
{
  "quarterly": [...],
  "by_component": [...],
  "summary": {
    "total_open": 45,
    "total_closed": 85,
    "goal": 150,
    "progress_percentage": 57,
    "last_updated": "2026-01-29T18:00:00.000Z"
  },
  "instances": {
    "total_identified": 156,
    "by_component": [
      {
        "component": "va-button-pair",
        "imposter_name": "FormNavButtons",
        "instance_count": 67,
        "applications": ["ask-va", "hca", "ezr", "appeals", "caregivers"]
      },
      {
        "component": "va-radio",
        "imposter_name": "RadioWidget",
        "instance_count": 45,
        "applications": ["edu-benefits", "disability-benefits", "hca"]
      }
    ],
    "by_application": [
      { "application": "financial-status-report", "instance_count": 28 },
      { "application": "hca", "instance_count": 15 },
      { "application": "appeals", "instance_count": 12 }
    ],
    "last_scan_date": "2026-01-29",
    "scan_source": "vets-website"
  },
  "generated_at": "2026-01-29T18:00:00.000Z"
}
```

### Dashboard UI Additions (Phase 2)

Add to the "Imposter Component Tracking" section:

**New Summary Card:**
| Card | Value | Description |
|------|-------|-------------|
| **Instances in Code** | `{total_identified}` | Total imposter instances found in vets-website |

**Chart 3: Instances by Application**
- **Type:** Horizontal bar chart
- **Y-axis:** Application names (sorted by instance count)
- **X-axis:** Instance count
- **Purpose:** Shows which applications need the most work

**Chart 4: Instances by Component Type**
- **Type:** Horizontal bar chart (or treemap)
- **Y-axis:** Component types (va-button-pair, va-radio, etc.)
- **X-axis:** Instance count
- **Purpose:** Shows which component types are most prevalent

### Relationship to Pattern Adherence

| Metric | Pattern Adherence (PR #5447) | Imposter Instances (Phase 2) |
|--------|------------------------------|------------------------------|
| **Question** | "Which forms use codified patterns?" | "Which files use imposter components?" |
| **Signal** | Positive (adoption of correct patterns) | Negative (usage of incorrect implementations) |
| **Scanning** | Search for pattern imports | Search for imposter imports |
| **Scope** | Forms only (product directory) | All applications |

Both metrics are complementary:
- High pattern adherence + low imposter count = good state
- Low pattern adherence + high imposter count = work needed

### Phase 2 Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `scripts/collect-imposter-instances.js` | Create | New codebase scanning script |
| `src/_data/metrics/imposter-metrics.json` | Modify | Add `instances` field |
| `src/_about/metrics/index.html` | Modify | Add instance charts/cards |
| `.github/workflows/metrics-dashboard.yml` | Modify | Add instance collection step |

### Phase 2 Testing

1. Run with local vets-website: `node scripts/collect-imposter-instances.js --vets-website-path ../vets-website`
2. Verify counts match Confluence baseline (approximately)
3. Verify JSON structure includes `instances` field
4. Verify dashboard displays instance data
5. Test GitHub API mode (without local clone)

### Phase 2 Success Criteria

- [ ] Script scans vets-website for all defined imposter patterns
- [ ] Instance counts generated per component type
- [ ] Instance counts generated per application
- [ ] Dashboard shows "Instances in Code" summary card
- [ ] Dashboard shows instances by application chart
- [ ] Counts are reasonably close to Confluence baseline

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
