# Metrics Processing Fix Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix component usage metrics to produce reliable counts: stabilize the CLI CSV column order upstream, and make `process-ds-components.js` robust to column order regardless.

**Architecture:** Two complementary fixes. (1) In `component-library`, fix the `yarn report:csv` CLI command to sort application columns alphabetically and remove the pre-calculated `total` column — this gives us a stable, predictable CSV schema. (2) In this repo, update `process-ds-components.js` to identify application columns by exclusion (`not date/component_name/uswds`) rather than by position — this is correct behavior and a good defensive fallback. The `uswds` column is excluded from summation since the USWDS v3 migration is complete; it is no longer meaningful to count separately. The `combineComponentVariants` logic (merging `va-alert` + `VaAlert` → `Alert`, etc.) is **intentional and correct** — React wrapper usages are real DS component usages.

**Tech Stack:** Node.js (built-in modules only), GitHub CLI (`gh`)

---

## Context: How the workflow is structured

The `yarn forms` and `yarn report:csv` CLI commands live in `component-library/packages/design-system-dashboard-cli`. They used to run in a workflow inside component-library and check results into that repo. **What moved to this repo** is where those commands are invoked: `.github/workflows/metrics-dashboard.yml` now checks out `component-library` as a sibling directory and runs the CLI from there, so all metrics updates stay within this repo. The CLI source itself still lives in component-library.

## Context: Why the Numbers Were Wrong

The CLI appends new application columns to the CSV as new VA apps get tracked. Column order is **not stable** between runs — `uswds` appeared at index 2 in older files but drifted to a later position in the 2026-03-06 and 2026-03-13 runs. `process-ds-components.js` used `uswdsIndex + 1` as the start of application columns, so everything before `uswds` was silently dropped. A pre-calculated `total` column in the middle of the header was also being summed, double-counting every component. Result: `Link` showing 88 usages when the raw CSV shows `va-link` alone at 1163.

**Why `combineComponentVariants` must stay:** React wrappers (`VaAlert`, `VaButton`, etc.) are real usages of DS components. Counting them separately would undercount component adoption. They are correctly merged with their `va-*` web component counterparts.

**What we're NOT doing in this plan:** v1 component tracking, imposter metrics changes, or va-file-input specifics. Those are deferred pending team input.

---

## Files

| Repo | File | Action |
|---|---|---|
| `component-library` | `packages/design-system-dashboard-cli/src/commands/report.js` (or equivalent) | Modify — sort app columns, drop `total` column |
| `vets-design-system-documentation` | `scripts/process-ds-components.js` | Modify — exclusion-based column detection, drop uswds from sum |
| `vets-design-system-documentation` | `src/assets/data/metrics/component-usage.json` | Regenerated |
| `vets-design-system-documentation` | `src/_data/metrics/component-usage.json` | Regenerated |

---

## Task 1: Fix the CLI CSV output in `component-library`

**Repo:** `department-of-veterans-affairs/component-library`
**Goal:** Stable column order so the CSV schema doesn't change between runs.

- [ ] **Step 1: Find the forms/report CLI source**

```bash
find component-library/packages/design-system-dashboard-cli/src -name "*.js" | xargs grep -l "csv\|uswds\|component_name" 2>/dev/null
```

Also check:
```bash
cat component-library/packages/design-system-dashboard-cli/package.json | grep -A5 '"scripts"'
```

- [ ] **Step 2: Locate where the CSV header is built**

Look for where column headers are assembled. The fix is:
1. Put metadata columns first in a fixed order: `date`, `component_name`, `uswds`
2. Sort all application/repo columns alphabetically after that
3. **Remove the pre-calculated `total` column** — it is redundant (our script calculates totals) and causes double-counting when included in sums

- [ ] **Step 3: Apply the sort**

The change should look roughly like:
```js
// BEFORE (unstable — insertion order depends on when apps were added)
const headers = ['date', 'component_name', 'uswds', ...appColumns, 'total'];

// AFTER (stable — app columns sorted, total removed)
const METADATA = ['date', 'component_name', 'uswds'];
const sortedAppColumns = [...appColumns].sort();
const headers = [...METADATA, ...sortedAppColumns];
```

- [ ] **Step 4: Run the CLI locally to verify output**

```bash
cd component-library/packages/design-system-dashboard-cli
yarn report:csv --output output/test-stable-columns.csv
head -1 output/test-stable-columns.csv | tr ',' '\n' | head -10
```

Expected: `date`, `component_name`, `uswds` as the first three columns; app columns alphabetically after; no `total` at the end.

- [ ] **Step 5: Commit in component-library**

```bash
git add packages/design-system-dashboard-cli/src/...
git commit -m "fix: sort CSV app columns alphabetically, remove pre-calculated total column

Column order was non-deterministic, causing downstream processing in
vets-design-system-documentation to misidentify application columns.
The 'total' column was also redundant and caused double-counting.

Related: vets-design-system-documentation#4903"
```

---

## Task 2: Fix `process-ds-components.js` to use exclusion-based column detection

**Repo:** `vets-design-system-documentation`
**Files:** `scripts/process-ds-components.js`

This fix is correct and necessary regardless of the CLI fix in Task 1 — it makes the script robust to any future column order drift.

### The bug (lines ~78–132)

```js
// Breaks when uswds is not at index 2
const uswdsIndex = headers.findIndex(h => h.toLowerCase() === 'uswds');
const applicationStartIndex = Math.max(uswdsIndex + 1, 3);
const applicationColumns = headers.slice(applicationStartIndex);

// ...in row loop:
for (let j = applicationStartIndex; j < Math.min(values.length, headers.length); j++) {
  applicationUsage[headers[j]] = parseInt(values[j]) || 0;
  totalUsage += parseInt(values[j]) || 0;
}
```

### The fix

- [ ] **Step 1: Replace the column detection block** (around lines 78–90)

Find:
```js
    // Find column indices
    const dateIndex = headers.findIndex(h => h.toLowerCase() === 'date');
    const componentIndex = headers.findIndex(h => h.toLowerCase() === 'component_name');
    const uswdsIndex = headers.findIndex(h => h.toLowerCase() === 'uswds');

    if (dateIndex === -1 || componentIndex === -1) {
      throw new Error('Required columns (date, component_name) not found in CSV');
    }

    // Application columns start after the standard columns (date, component_name, uswds)
    const applicationStartIndex = Math.max(uswdsIndex + 1, 3);
    const applicationColumns = headers.slice(applicationStartIndex);

    console.log(`Processing ${lines.length - 1} component records...`);
    console.log(`Application columns: ${applicationColumns.length} (${applicationColumns.slice(0, 3).join(', ')}...)`);
```

Replace with:
```js
    // Find column indices
    const dateIndex = headers.findIndex(h => h.toLowerCase() === 'date');
    const componentIndex = headers.findIndex(h => h.toLowerCase() === 'component_name');

    if (dateIndex === -1 || componentIndex === -1) {
      throw new Error('Required columns (date, component_name) not found in CSV');
    }

    // Application columns: everything except known metadata and pre-calculated totals.
    // Using exclusion (not position) so column order in the CSV doesn't matter.
    // 'uswds' is excluded — the USWDS v3 migration is complete and that count is no
    // longer meaningful. 'total' is excluded to prevent double-counting.
    const EXCLUDED_COLUMNS = new Set(['date', 'component_name', 'uswds', 'total']);
    const applicationColumns = headers.filter(h => !EXCLUDED_COLUMNS.has(h.toLowerCase()));
    const applicationColumnIndices = applicationColumns.map(col => headers.indexOf(col));

    console.log(`Processing ${lines.length - 1} component records...`);
    console.log(`Application columns: ${applicationColumns.length} (${applicationColumns.slice(0, 3).join(', ')}...)`);
```

- [ ] **Step 2: Replace the row validation and summation loop** (around lines 95–132)

Find:
```js
      // Improved column count validation - handle both too few and too many columns
      if (values.length < Math.min(headers.length, applicationStartIndex + 1)) {
        console.warn(`Row ${i + 1} has ${values.length} values but expected at least ${applicationStartIndex + 1} (${headers.length} total columns), skipping`);
        continue;
      }

      // Handle rows with more columns than headers (pad headers or truncate values)
      if (values.length > headers.length) {
        console.warn(`Row ${i + 1} has ${values.length} values but only ${headers.length} headers, truncating extra values`);
        values.length = headers.length; // Truncate extra values
      }

      const date = values[dateIndex];
      const componentName = values[componentIndex];

      // Set report date from first row
      if (!reportDate) {
        reportDate = date;
      }

      if (!componentName || componentName.trim() === '') {
        continue;
      }

      // Calculate total usage across all applications (ignoring USWDS column)
      let totalUsage = 0;
      const applicationUsage = {};

      for (let j = applicationStartIndex; j < Math.min(values.length, headers.length); j++) {
        const appName = headers[j];
        const usageCount = parseInt(values[j]) || 0;
        applicationUsage[appName] = usageCount;
        totalUsage += usageCount;
      }
```

Replace with:
```js
      // Handle rows with more columns than headers
      if (values.length > headers.length) {
        console.warn(`Row ${i + 1} has ${values.length} values but only ${headers.length} headers, truncating extra values`);
        values.length = headers.length;
      }

      const date = values[dateIndex];
      const componentName = values[componentIndex];

      // Set report date from first row
      if (!reportDate) {
        reportDate = date;
      }

      if (!componentName || componentName.trim() === '') {
        continue;
      }

      // Sum only application columns. Iterating by pre-built index list means
      // column order in the CSV doesn't affect which columns are counted.
      let totalUsage = 0;
      const applicationUsage = {};

      for (let k = 0; k < applicationColumnIndices.length; k++) {
        const colIndex = applicationColumnIndices[k];
        const appName = applicationColumns[k];
        const usageCount = parseInt(values[colIndex]) || 0;
        applicationUsage[appName] = usageCount;
        totalUsage += usageCount;
      }
```

- [ ] **Step 3: Verify no leftover references to the old variable names**

```bash
grep -n "applicationStartIndex\|uswdsIndex" scripts/process-ds-components.js
```

Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add scripts/process-ds-components.js
git commit -m "fix(metrics): detect ds-components app columns by exclusion, not position

The CLI does not guarantee a stable column order — 'uswds' drifted past
column 2 in recent runs, causing applicationStartIndex to skip many real
app columns and severely undercount component usage.

Also explicitly exclude 'uswds' (USWDS v3 migration is complete, no
longer meaningful to count separately) and 'total' (pre-calculated sum
that caused double-counting).

The combineComponentVariants logic is unchanged — React wrappers are
real DS component usages and should be merged with their va-* counterparts.

Closes Copilot comments on #5902"
```

---

## Task 3: Regenerate component-usage.json

- [ ] **Step 1: Run the fixed script**

```bash
node scripts/process-ds-components.js
```

- [ ] **Step 2: Sanity-check the output**

```bash
node -e "
const d = require('./src/assets/data/metrics/component-usage.json');
console.log('total_usages:', d.summary_stats.total_usages);
console.log('applications_tracked:', d.summary_stats.applications_tracked);
console.log('Top 5:');
d.top_components_overall.slice(0,5).forEach((c,i) => console.log(i+1, c.name, c.usage_count));
"
```

Expected: `total_usages` in the tens of thousands (raw CSV shows va-telephone at ~810, va-link at ~1163, many more). `applications_tracked` should be ~140. If totals are still small (~459), stop and debug before committing.

- [ ] **Step 3: Commit the regenerated data**

```bash
git add src/assets/data/metrics/component-usage.json src/_data/metrics/component-usage.json
git commit -m "data: regenerate component-usage.json with correct column detection"
```

---

## Task 4: Resolve PR #5902 and issue #4903

- [ ] **Step 1: Comment on PR #5902 explaining the resolution**

```bash
gh pr comment 5902 \
  --repo department-of-veterans-affairs/vets-design-system-documentation \
  --body "Addressing Copilot's review comments here.

The undercounted component usage (Link: 87 vs CSV: 1221) was caused by a column-order bug in \`process-ds-components.js\` — it used \`uswds\` column position to find where application columns start. When the CLI moved \`uswds\` past column 2 in recent runs, all earlier app columns were silently dropped.

Fixed in [link to your PR] by switching to exclusion-based column detection: all columns except \`date\`, \`component_name\`, \`uswds\`, and \`total\` are treated as application columns regardless of position.

The \`total\` column is also now excluded to prevent double-counting.

The \`combineComponentVariants\` behavior (merging \`va-link\` + \`VaLink\` → \`Link\`) is intentional — React wrapper usages are real DS component usages.

The 10-10d form-apps comment is an upstream CLI formatting issue tracked in #4903."
```

- [ ] **Step 2: Close PR #5902** (it contains stale/incorrect data; the next weekly run will generate a fresh PR with the fixed script in place)

```bash
gh pr close 5902 \
  --repo department-of-veterans-affairs/vets-design-system-documentation
```

- [ ] **Step 3: Comment on issue #4903**

```bash
gh issue comment 4903 \
  --repo department-of-veterans-affairs/vets-design-system-documentation \
  --body "Partial progress: The column-order bug in \`process-ds-components.js\` that caused severely undercounted component usage is fixed. The form-apps CSV now has a header row in current output.

Remaining: form numbers are still inconsistent in the CLI output (e.g. \`10D\` instead of \`10-10D\`). That fix belongs in the \`design-system-dashboard-cli\` in component-library — filing there separately."
```

---

## Summary

| Problem | Fix location | Task |
|---|---|---|
| Unstable CSV column order | component-library CLI | Task 1 |
| Exclusion-based column detection | `process-ds-components.js` | Task 2 |
| Wrong `component-usage.json` counts | Regenerate after script fix | Task 3 |
| PR #5902 Copilot comments | Explain + close stale PR | Task 4 |
| Issue #4903 status | Comment with progress | Task 4 |
| v1 component / imposter tracking | **Deferred** — pending team input on va-file-input specifics | — |
