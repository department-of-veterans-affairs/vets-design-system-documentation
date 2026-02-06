---
title: Add Team Metrics to Governance Dashboard
type: feat
date: 2026-02-03
---

# Add Team Metrics to Governance Dashboard

## Overview

Enhance the Governance Metrics Dashboard with three new team-related metrics:
1. **Total teams active on Platform** - fetched dynamically from Teams Manifest
2. **Unique teams through Collab Cycle** - parsed from kickoff issue body text per quarter
3. **Average staging review findings per team** - calculated per quarter

## Problem Statement / Motivation

The Governance team needs visibility into team engagement with the Platform and Collaboration Cycle process. Currently, the dashboard tracks touchpoints and staging findings but lacks:
- How many teams are active on the Platform overall
- How many unique teams participate in Collab Cycle each quarter
- The average burden of staging review findings per team

These metrics will help the Governance team understand adoption, identify trends, and allocate resources effectively.

## Proposed Solution

### High-Level Approach

1. **Extend `collect-governance-metrics.js`** to fetch additional data:
   - Query `va.gov-team-sensitive/teams/team-lookup.json` for total active teams
   - Use GraphQL API to fetch kickoff issues with body text (reuse pattern from `collect-collab-cycle-time.js`)
   - Parse "VFS team name" from issue bodies and count unique teams
   - Calculate average staging findings per unique team

2. **Update governance JSON schema** with new fields:
   - `total_platform_teams`
   - `unique_teams_in_collab_cycle`
   - `avg_staging_findings_per_team`

3. **Add new metric cards** to `governance.html` dashboard in a dedicated "Team Metrics" section

### Architecture

```
┌─────────────────────────────────┐
│   collect-governance-metrics.js │
├─────────────────────────────────┤
│  ┌─────────────────────────┐    │
│  │ Fetch Teams Manifest    │────┼──► GitHub API (va.gov-team-sensitive)
│  │ team-lookup.json        │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Fetch Kickoff Issues    │────┼──► GraphQL API (va.gov-team)
│  │ with body text          │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Extract Team Names      │    │    Reuse extractTeamName() pattern
│  │ Count Unique Teams      │    │    from collect-collab-cycle-time.js
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Calculate Average       │    │    total_staging_issues / unique_teams
│  │ Findings Per Team       │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  governance-metrics-YYYYQN.json │
│  + total_platform_teams         │
│  + unique_teams_in_collab_cycle │
│  + avg_staging_findings_per_team│
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│     governance.html             │
│  ┌───────────────────────────┐  │
│  │   New "Team Metrics"      │  │
│  │   Section with 3 cards    │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

## Technical Considerations

### Cross-Repository Access

The `va.gov-team-sensitive` repository is **private**. The existing `GITHUB_TOKEN` may need verification for access scope.

**Mitigation:**
- Test API access early in implementation
- Add graceful fallback if access is denied (log warning, set metric to null)
- Document required token scopes in script help text

### Team Name Normalization

Team names in kickoff issues have inconsistent formatting:
- Case variations: "AEDP" vs "Authenticated Experience Design Patterns (AEDP)"
- Format variations: `[Team Name](URL)` markdown links vs plain text

**Solution:**
- Update `extractTeamName()` regex to handle markdown link format
- Apply case-insensitive comparison for unique counting
- Do NOT implement fuzzy matching (keep it simple)

**Updated Regex Pattern:**
```javascript
// Handle markdown links: [Team Name](URL)
const linkMatch = issueBody.match(/###\s+VFS team name\s*\n?\s*\[([^\]]+)\]/i);
if (linkMatch) return linkMatch[1].trim();

// Handle plain text
const textMatch = issueBody.match(/###\s+VFS team name\s*\n?\s*([^\n#\[]+)/i);
if (textMatch) return textMatch[1].trim();
```

### Average Calculation Definition

The "average staging review findings per team" needs a clear definition:

**Recommended Formula:**
```
avg_staging_findings_per_team = total_staging_issues / unique_teams_in_collab_cycle
```

**Rationale:** This measures the average findings burden for teams that went through Collab Cycle that quarter. Teams that didn't go through Collab Cycle aren't counted in the denominator.

**Edge Case Handling:**
- If `unique_teams_in_collab_cycle = 0`, set `avg_staging_findings_per_team = 0` (avoid division by zero)

### Performance

The script will need to:
1. Make one API call to va.gov-team-sensitive (small payload)
2. Fetch kickoff issues via GraphQL (already done in existing script)
3. Parse issue bodies (CPU-bound, fast)

No significant performance concerns expected.

## Acceptance Criteria

### Functional Requirements

- [x] Script fetches total team count from `va.gov-team-sensitive/teams/team-lookup.json`
- [x] Script extracts "VFS team name" from kickoff issues using GraphQL API
- [x] Script handles both markdown link format (`[Team](URL)`) and plain text team names
- [x] Script counts unique teams (case-insensitive) per quarter
- [x] Script calculates average staging findings per team per quarter
- [x] JSON output includes new fields: `total_platform_teams`, `unique_teams_in_collab_cycle`, `avg_staging_findings_per_team`
- [x] Dashboard displays new metrics in a "Team Metrics" section
- [x] Dashboard shows appropriate fallback when data is unavailable (N/A or 0)

### Non-Functional Requirements

- [ ] Script completes within existing 10-minute GitHub Actions timeout
- [ ] Script handles va.gov-team-sensitive access failure gracefully (logs warning, continues)
- [ ] Dashboard remains accessible (WCAG 2.1 AA compliant)
- [ ] New metric cards match existing va-card styling

### Quality Gates

- [ ] Manual testing against 2025Q4 data
- [ ] Script runs successfully in GitHub Actions workflow
- [ ] PR reviewed by Governance team member

## Dependencies & Prerequisites

1. **GitHub Token Access** - Verify current `GITHUB_TOKEN` can access `va.gov-team-sensitive`
2. **GraphQL API Pattern** - Reference `collect-collab-cycle-time.js` for implementation
3. **Existing Infrastructure** - No new dependencies; uses existing Node.js scripts and Jekyll templates

## Success Metrics

- Team metrics display correctly on dashboard
- Unique team count for 2025Q4 approximately matches `team_statistics | size` from collab-cycle-time-FY2025.json (~35 teams)
- Average staging findings per team is a reasonable number (2025Q4: 477 findings / ~35 teams ≈ 13-14 per team)

## Implementation Phases

### Phase 1: Data Collection Updates

**Files to modify:**
- `scripts/collect-governance-metrics.js`

**Tasks:**
- [x] Add function to fetch team count from `va.gov-team-sensitive/teams/team-lookup.json`
- [x] Add GraphQL query to fetch kickoff issues with body text
- [x] Copy/adapt `extractTeamName()` from `collect-collab-cycle-time.js`
- [x] Update regex to handle markdown link format
- [x] Implement unique team counting (case-insensitive Set)
- [x] Calculate average staging findings per team
- [x] Update `saveQuarterlyData()` to include new fields
- [x] Add error handling for va.gov-team-sensitive access failure

**Test:**
```bash
GITHUB_TOKEN=xxx node scripts/collect-governance-metrics.js --quarter 2025Q4
```

### Phase 2: Dashboard Display

**Files to modify:**
- `src/_about/metrics/governance.html`

**Tasks:**
- [x] Add new "Team Metrics" section after Summary section
- [x] Add three va-card components for new metrics
- [x] Add trend calculations for new metrics (vs previous quarter)
- [ ] Update quarterly table to include new columns (optional)
- [x] Add metric definitions to "About This Data" section

**Layout:**
```html
<!-- Team Metrics Section -->
<section aria-labelledby="team-metrics-heading">
  <h2 id="team-metrics-heading">Team Metrics</h2>
  <div class="vads-l-row vads-u-justify-content--center">
    <!-- Total Platform Teams -->
    <div class="vads-l-col--12 medium-screen:vads-l-col--4">
      <va-card class="metric-card">
        <h3>Total Platform Teams</h3>
        <div class="metric-value">{{ latest_quarter_data.data.total_platform_teams }}</div>
      </va-card>
    </div>
    <!-- Teams in Collab Cycle -->
    <div class="vads-l-col--12 medium-screen:vads-l-col--4">
      <va-card class="metric-card">
        <h3>Teams in Collab Cycle</h3>
        <div class="metric-value">{{ latest_quarter_data.data.unique_teams_in_collab_cycle }}</div>
      </va-card>
    </div>
    <!-- Avg Findings Per Team -->
    <div class="vads-l-col--12 medium-screen:vads-l-col--4">
      <va-card class="metric-card">
        <h3>Avg Findings Per Team</h3>
        <div class="metric-value">{{ latest_quarter_data.data.avg_staging_findings_per_team }}</div>
      </va-card>
    </div>
  </div>
</section>
```

### Phase 3: Documentation & Testing

**Files to modify:**
- `docs/METRICS-DASHBOARD.md` (add new metrics documentation)

**Tasks:**
- [x] Update metric definitions section
- [x] Document new JSON schema fields
- [x] Add troubleshooting guidance for va.gov-team-sensitive access
- [ ] Manual verification against expected values

## Open Questions (Require Clarification)

### Critical

1. **Token Access Verification** - Can current `GITHUB_TOKEN` access `va.gov-team-sensitive`?
   - *Test needed before implementation*
   - *Fallback: Set `total_platform_teams` to null if access denied*

2. **Team-lookup.json Structure** - What fields in `team-lookup.json` should be counted?
   - *Clarify: `team-lookup.json` is a JSON object (not an array). The implementation in `fetchTotalPlatformTeams()` counts `Object.keys()` length*
   - *Counting rule: Count all top-level entries (`Object.keys` length), optionally filtering by an `"active"` field if one exists*

### Important

3. **Historical Backfill** - Should we re-run collection for past quarters (2024Q1-2025Q3)?
   - *Recommendation: Start with current quarter only; backfill later if requested*

4. **Dashboard Layout Preference** - Separate "Team Metrics" section vs adding to existing Summary?
   - *Recommendation: Separate section keeps cards balanced (4 + 3)*

## Files Reference

| File | Purpose | Line Numbers |
|------|---------|--------------|
| `scripts/collect-governance-metrics.js` | Main script to modify | Add new functions after line 406 |
| `scripts/collect-collab-cycle-time.js` | Reference for GraphQL and extractTeamName | Lines 193-260 (GraphQL), 345-360 (extractTeamName) |
| `src/_about/metrics/governance.html` | Dashboard template | Add section after line 158 |
| `src/_data/metrics/governance-metrics-2025Q4.json` | Example JSON schema | Update data object structure |
| `src/_data/metrics/governance-index.json` | Index file | No changes needed |
| `docs/METRICS-DASHBOARD.md` | Documentation | Add new metric definitions |

## JSON Schema Update

**Current schema (governance-metrics-YYYYQN.json):**
```json
{
  "quarter": "2025Q4",
  "data": {
    "period": "2025-Q4",
    "total_kickoffs": 30,
    "touchpoints_held": 64,
    "total_staging_issues": 477,
    "launch_blocking_issues": 128,
    "launch_blocking_percentage": 27
    // ... existing fields
  }
}
```

**New schema additions:**
```json
{
  "quarter": "2025Q4",
  "data": {
    // ... existing fields ...
    "total_platform_teams": 85,
    "unique_teams_in_collab_cycle": 35,
    "avg_staging_findings_per_team": 13.6
  }
}
```

## References & Research

### Internal References
- GraphQL pattern: `scripts/collect-collab-cycle-time.js:193-260`
- Team extraction: `scripts/collect-collab-cycle-time.js:345-360`
- Dashboard cards: `src/_about/metrics/governance.html:66-158`
- JSON schema: `src/_data/metrics/governance-metrics-2025Q4.json`

### External References
- Teams Manifest: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams
- GitHub GraphQL API: https://docs.github.com/en/graphql
- VA Design System Cards: https://design.va.gov/components/card
