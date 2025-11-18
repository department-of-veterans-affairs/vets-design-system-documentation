# Metrics Dashboard Data Flow Documentation

## Overview

The VA Design System metrics dashboard displays usage and health metrics for the design system. The data flows through multiple repositories and processes to create a comprehensive view of system adoption and performance.

## Architecture

```
┌─────────────────────┐    ┌──────────────────────┐    ┌────────────────────────┐
│   component-library │    │  vets-design-system- │    │    design.va.gov       │
│        repo         │───▶│    documentation     │───▶│   (metrics dashboard)  │
│                     │    │        repo          │    │                        │
└─────────────────────┘    └──────────────────────┘    └────────────────────────┘
         │                           │                           │
         ▼                           ▼                           ▼
  ds-components-*.csv        JSON metrics files            HTML + Charts
  (component usage)          (processed data)            (final dashboard)
```

## Data Sources and Processing

### 1. Component Usage Data (CSV → JSON)

**Source Repository**: `component-library`
**Location**: `packages/design-system-dashboard-cli/output/ds-components-*.csv`
**What it contains**: Usage counts for each VA design system component across all VA applications

#### Data Flow:
1. **Generation**: CSV files are generated in the component-library repo using their dashboard CLI
2. **Transfer**: GitHub Actions workflow fetches the latest CSV from component-library repo
3. **Processing**: `scripts/process-ds-components.js` converts CSV to JSON
4. **Output**: Creates `component-usage.json` in both locations:
   - `/src/assets/data/metrics/` (for JavaScript charts)
   - `/src/_data/metrics/` (for Jekyll Liquid templates)

#### CSV Structure:
```
date,component_name,uswds,static_content_templates,yellow_ribbon_schools,...[123 VA applications]
2025-09-04,VaAlert,0,2,0,5,12,...
2025-09-04,VaButton,0,8,2,15,25,...
```

#### JSON Output:
```json
{
  "top_components_overall": [
    {
      "name": "VaModal",
      "usage_count": 316,
      "totalUsage": 316,
      "applicationBreakdown": { "appointments": 5, "travel_pay": 0, ... }
    }
  ],
  "summary_stats": {
    "total_components": 50,
    "total_usages": 2404,
    "most_used": "VaModal",
    "applications_tracked": 123
  },
  "data_source": "component-library/ds-components",
  "report_date": "2025-09-04"
}
```

### 2. Issue Tracking Data (GitHub API → JSON)

**Source**: GitHub Issues API for this repository
**Script**: `scripts/collect-issue-metrics.js`
**Frequency**: Weekly via GitHub Actions

#### Data Collection:
1. **GitHub API**: Fetches all issues using `gh` CLI tool
2. **Processing**: Groups issues by quarterly and monthly periods
3. **Calculations**: Computes resolution times, trend indicators
4. **Output**: Creates `issue-metrics.json` in both locations

#### JSON Output:
```json
{
  "quarterly": [
    { "period": "2025-Q3", "issues_opened": 352, "issues_closed": 333 }
  ],
  "velocity": [
    { "period": "2025-09", "issues_opened": 28 }
  ],
  "experimental_quarterly": [
    { "period": "2025-Q3", "issues_opened": 4, "issues_closed": 12, "issues_implemented": 1 }
  ],
  "summary": {
    "open_issues": 472,
    "closed_this_month": 25,
    "avg_resolution_days": 123,
    "open_issues_trend": { "direction": "up", "percentage": 8 }
  }
}
```

### 3. Experimental Design Issues (GitHub API → JSON)

**Source**: GitHub Issues with `experimental_design` label
**Script**: `scripts/collect-experimental-metrics.js`
**Frequency**: Weekly via GitHub Actions

#### Data Collection:
1. **Filtered Query**: Only issues with `experimental_design` label
2. **Quarterly Grouping**: Groups by quarters to track design evolution
3. **Implementation Tracking**: Tracks which experimental designs become official
4. **Output**: Creates `experimental-metrics.json` in both locations

## File Locations

### Source Data (Input)
- **Component Library CSV**: `component-library/packages/design-system-dashboard-cli/output/ds-components-*.csv`
- **GitHub Issues**: Fetched via API calls to this repository

### Processed Data (Output)
Each JSON file exists in TWO locations:

#### For JavaScript (Progressive Enhancement)
- `/src/assets/data/metrics/issue-metrics.json`
- `/src/assets/data/metrics/component-usage.json`
- `/src/assets/data/metrics/experimental-metrics.json`

#### For Jekyll (Server-Side Rendering)
- `/src/_data/metrics/issue-metrics.json`
- `/src/_data/metrics/component-usage.json`
- `/src/_data/metrics/experimental-metrics.json`

### Raw CSV Data (Jekyll Processing)
- `/src/_data/metrics/ds-components-latest.csv`
- `/src/_data/metrics/ds-components-YYYY-MM-DD.csv`

## Processing Scripts

### 1. `scripts/process-ds-components.js`
- **Purpose**: Converts CSV component usage data to JSON
- **Input**: CSV files from component-library repo
- **Processing**: 
  - Parses CSV with 123+ application columns
  - Aggregates usage counts per component
  - Calculates summary statistics
  - Generates trend indicators
- **Output**: `component-usage.json` (both locations)

### 2. `scripts/collect-issue-metrics.js`
- **Purpose**: Collects GitHub issue metrics
- **Input**: GitHub Issues API data
- **Processing**:
  - Groups issues by quarter and month
  - Calculates resolution time averages
  - Generates trend comparisons
- **Output**: `issue-metrics.json` (both locations)

### 3. `scripts/collect-experimental-metrics.js`
- **Purpose**: Tracks experimental design issue lifecycle
- **Input**: GitHub Issues with `experimental_design` label
- **Processing**:
  - Filters experimental design issues
  - Tracks implementation status
  - Groups by quarterly periods
- **Output**: `experimental-metrics.json` (both locations)

### 4. `scripts/analyze_issues.js`

- **Purpose**: Analyzes open GitHub issues by component labels
- **Input**: GitHub Issues API data (open issues only)
- **Processing**:
  - Categorizes issues by component labels
  - Counts bug issues per component
  - Tracks accessibility defects by severity (0=Critical, 1=Serious, 2=Moderate, 3=Minor, 4=Enhancement)
  - When an issue has multiple a11y-defect labels, counts only the most severe
  - Generates markdown report with sortable tables and quick links
- **Output**: `component-issues-report.md` in `/src/_data/metrics/`
- **Usage**: `yarn analyze-issues` or `node scripts/analyze_issues.js`
- **Requirements**:
  - GitHub CLI (`gh`) installed and authenticated (`gh auth login`)
  - Internet connection for API calls

## Automation (GitHub Actions)

### Workflow: `.github/workflows/metrics-dashboard.yml`
**Schedule**: Weekly on Fridays at 6 PM UTC (2 PM ET/1 PM EDT)
**Trigger**: Also runs on manual dispatch and workflow file changes

#### Workflow Steps:
1. **Setup**: Node.js, GitHub CLI authentication
2. **Fetch CSV**: Clone component-library repo, find latest ds-components CSV
3. **Process CSV**: Run `scripts/process-ds-components.js`
4. **Collect Issues**: Run `scripts/collect-issue-metrics.js`
5. **Collect Experimental**: Run `scripts/collect-experimental-metrics.js`
6. **Verify**: Check all JSON files exist in both locations
7. **Commit**: Auto-commit updated metrics data
8. **Deploy**: Changes auto-deploy to design.va.gov

## Dashboard Implementation

### Server-Side (Jekyll Liquid)
**Location**: `/src/_about/metrics.html`
**Data Source**: `/src/_data/metrics/*.json`
**Rendering**: Tables and metric cards populated during Jekyll build

```liquid
{% for quarter in site.data.metrics.issue-metrics.quarterly %}
  <va-table-row>
    <span>{{ quarter_parts[1] }} {{ quarter_parts[0] }}</span>
    <span>{{ quarter.issues_opened }}</span>
    <span>{{ quarter.issues_closed }}</span>
  </va-table-row>
{% endfor %}
```

### Client-Side (JavaScript Progressive Enhancement)
**Data Source**: `/src/assets/data/metrics/*.json`
**Purpose**: D3.js charts, interactive features
**Approach**: Enhances server-rendered content, doesn't replace it

## Benefits of Current Architecture

### 1. **Accessibility First**
- Tables populated server-side work without JavaScript
- Screen readers get immediate access to data
- SEO-friendly with indexable content

### 2. **Progressive Enhancement**
- JavaScript adds charts and interactivity
- Fallback to tables when JS disabled
- Maintains functionality across all contexts

### 3. **Reliable Automation**
- Weekly data updates via GitHub Actions
- Automatic deployment to production
- Error handling and fallback data

### 4. **Performance**
- Server-side rendering reduces initial page load
- No AJAX calls needed for table data
- Charts load only when JavaScript available

## Troubleshooting

### Common Issues:

1. **Missing CSV Data**: Check if component-library repo has generated recent CSV files
2. **GitHub API Limits**: Ensure GITHUB_TOKEN has sufficient API quotas
3. **Build Failures**: Verify all JSON files exist in both locations
4. **Stale Data**: Check if GitHub Actions workflow is running weekly

### Manual Data Updates:

```bash
# Update component usage data
node scripts/process-ds-components.js

# Update issue metrics
GITHUB_TOKEN=your_token node scripts/collect-issue-metrics.js

# Update experimental metrics  
GITHUB_TOKEN=your_token node scripts/collect-experimental-metrics.js

# Analyze component issues (generates markdown report)
node scripts/analyze_issues.js
```

### Verification Commands:

```bash
# Check both locations have identical files
ls -la src/assets/data/metrics/ src/_data/metrics/

# Verify JSON is valid
cat src/_data/metrics/issue-metrics.json | jq '.' > /dev/null

# Test Jekyll build
yarn build
```

## Future Considerations

- **Data Retention**: Consider archiving historical CSV data
- **Performance**: Monitor Jekyll build times with larger datasets  
- **Caching**: Implement caching strategies for expensive calculations
- **Monitoring**: Add alerts for failed data collection workflows