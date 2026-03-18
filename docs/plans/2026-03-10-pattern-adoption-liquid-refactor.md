# Pattern Adoption Liquid Refactor Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `inject-pattern-adoption.js` script (which mutates markdown files) with a Liquid partial that reads adoption data from a Jekyll data file at build time.

**Architecture:** `collect-pattern-adherence.js` gains a new output — `src/_data/metrics/pattern_adoption.json` — a hash keyed by pattern permalink. A new Liquid partial (`src/_includes/pattern-adoption.html`) does a direct key lookup by `page.permalink` and renders the accordion. The `pattern.html` layout includes the partial after `{{ content }}`. The 10 pattern markdown files and `template.md` have their injected `## Adoption` sections stripped, and `inject-pattern-adoption.js` is deleted.

**Tech Stack:** Node.js (CommonJS), Jekyll/Liquid, GitHub Actions YAML

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `scripts/collect-pattern-adherence.js` | Add `saveAdoptionData()` called from `saveAdherenceData()` |
| Create | `src/_data/metrics/pattern_adoption.json` | Permalink-keyed adoption data (written by script, committed) |
| Create | `src/_includes/pattern-adoption.html` | Liquid partial — renders accordion from data lookup |
| Modify | `src/_layouts/pattern.html` | Add `{% include pattern-adoption.html %}` after `{{ content }}` |
| Modify | `src/_patterns/ask-users-for/addresses.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/dates.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/email-address.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/names.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/phone-numbers.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/relationship.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/signature.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/ask-users-for/social-security-number.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/help-users-to/keep-a-record-of-submitted-information.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/help-users-to/know-when-their-information-is-prefilled.md` | Strip injected `## Adoption` section |
| Modify | `src/_patterns/template.md` | Strip injected `## Adoption` section |
| Delete | `scripts/inject-pattern-adoption.js` | No longer needed |
| Modify | `.github/workflows/pattern-adherence.yml` | Remove inject step; update `git add` and PR body |

---

## Chunk 1: Script output + Liquid partial + layout

### Task 1: Add `saveAdoptionData` to `collect-pattern-adherence.js`

**Files:**
- Modify: `scripts/collect-pattern-adherence.js` — add new function `saveAdoptionData(data)` and call it from `saveAdherenceData`

The new file written is a plain JSON object keyed by `pattern_permalink`. Each value contains only the fields the Liquid partial needs.

- [ ] **Step 1: Add `saveAdoptionData` function and call**

In `scripts/collect-pattern-adherence.js`, find the `saveAdherenceData` function (around line 792). Add a new function directly above it and add a call to it at the end of `saveAdherenceData`:

```javascript
/**
 * Save adoption data as a permalink-keyed JSON file for Jekyll/Liquid consumption.
 * Keying by permalink avoids looping in Liquid: site.data.metrics.pattern_adoption[page.permalink]
 */
async function saveAdoptionData(data) {
  const adoptionByPermalink = {};

  for (const pattern of data.patterns) {
    if (!pattern.pattern_permalink) continue;

    adoptionByPermalink[pattern.pattern_permalink] = {
      pattern_name: pattern.pattern_name,
      usage_count: pattern.usage_count,
      total_forms: pattern.total_forms,
      compliance_percentage: pattern.compliance_percentage,
      forms_using_pattern: pattern.forms_using_pattern.map(f => ({
        product_name: f.product_name
      }))
    };
  }

  const adoptionFile = path.join(JEKYLL_DATA_DIR, 'pattern_adoption.json');
  await fs.writeFile(adoptionFile, JSON.stringify(adoptionByPermalink, null, 2), 'utf8');

  console.log(`   ${adoptionFile}`);
}
```

Then in `saveAdherenceData`, add a call at the end, just before the closing brace (after the existing `console.log` lines):

```javascript
  await saveAdoptionData(data);
```

Also add `saveAdoptionData` to the `module.exports` at the bottom of the file.

- [ ] **Step 2: Run the script locally to verify the output file is created**

```bash
node scripts/collect-pattern-adherence.js --help 2>&1 || true
# We can't run the full script (needs GitHub access), so verify the function is exported:
node -e "const m = require('./scripts/collect-pattern-adherence.js'); console.log(typeof m.saveAdoptionData)"
```

Expected output: `function`

- [ ] **Step 3: Verify the output shape manually**

```bash
# Dry-run saveAdoptionData with existing data:
node -e "
const { saveAdoptionData } = require('./scripts/collect-pattern-adherence.js');
const data = require('./src/_data/metrics/pattern-adherence.json');
saveAdoptionData(data).then(() => {
  const out = require('./src/_data/metrics/pattern_adoption.json');
  const keys = Object.keys(out);
  console.log('Keys:', keys.length);
  console.log('First key:', keys[0]);
  console.log('First value keys:', Object.keys(out[keys[0]]));
}).catch(e => console.error(e));
"
```

Expected output (exact counts may vary):
```
Keys: 10
First key: /patterns/ask-users-for/addresses
First value keys: [ 'pattern_name', 'usage_count', 'total_forms', 'compliance_percentage', 'forms_using_pattern' ]
```

- [ ] **Step 4: Commit**

```bash
git add scripts/collect-pattern-adherence.js src/_data/metrics/pattern_adoption.json
git commit -m "feat: write permalink-keyed pattern_adoption.json from collect script"
```

---

### Task 2: Create the Liquid partial

**Files:**
- Create: `src/_includes/pattern-adoption.html`

**Jekyll data access note:** The file `src/_data/metrics/pattern_adoption.json` is accessible in Liquid as `site.data.metrics.pattern_adoption` (underscore filename = no bracket-notation needed). Per-pattern lookup: `site.data.metrics.pattern_adoption[page.permalink]` — this works because `page.permalink` is a variable in bracket notation.

- [ ] **Step 1: Create `src/_includes/pattern-adoption.html`**

```html
{% assign adoption = site.data.metrics.pattern_adoption[page.permalink] %}
{% if adoption %}
<h2 id="adoption">Adoption</h2>

{% if adoption.usage_count == 0 %}
<p>No forms currently use this pattern.</p>
{% else %}
<va-accordion open-single>
  <va-accordion-item id="adoption-{{ page.permalink | split: '/' | last }}">
    <h3 slot="headline">Forms using this pattern: {{ adoption.usage_count }} of {{ adoption.total_forms }} ({{ adoption.compliance_percentage }}%)</h3>
    <ul>
      {% for form in adoption.forms_using_pattern %}
      <li>{{ form.product_name }}</li>
      {% endfor %}
    </ul>
  </va-accordion-item>
</va-accordion>
{% endif %}
{% endif %}
```

- [ ] **Step 2: Commit**

```bash
git add src/_includes/pattern-adoption.html
git commit -m "feat: add pattern-adoption Liquid partial"
```

---

### Task 3: Include the partial in the pattern layout

**Files:**
- Modify: `src/_layouts/pattern.html:48` — add include after `{{ content }}`

The current layout at line 48:
```html
          {{ content }}
```

- [ ] **Step 1: Add the include**

Replace that line with:
```html
          {{ content }}
          {% include pattern-adoption.html %}
```

- [ ] **Step 2: Commit**

```bash
git add src/_layouts/pattern.html
git commit -m "feat: include pattern-adoption partial in pattern layout"
```

---

## Chunk 2: Cleanup

### Task 4: Strip injected `## Adoption` sections from pattern markdown files

Each file has `\n## Adoption` starting at the line numbers noted below. Everything from that marker to end-of-file should be removed. The lines before the marker end with a blank line or content line — the final file should end with a single trailing newline.

**Files to strip (line where `## Adoption` appears):**
- `src/_patterns/ask-users-for/addresses.md` — line 124
- `src/_patterns/ask-users-for/dates.md` — line 100
- `src/_patterns/ask-users-for/email-address.md` — line 84
- `src/_patterns/ask-users-for/names.md` — line 71
- `src/_patterns/ask-users-for/phone-numbers.md` — line 99
- `src/_patterns/ask-users-for/relationship.md` — line 67
- `src/_patterns/ask-users-for/signature.md` — line 107
- `src/_patterns/ask-users-for/social-security-number.md` — line 122
- `src/_patterns/help-users-to/keep-a-record-of-submitted-information.md` — line 129
- `src/_patterns/help-users-to/know-when-their-information-is-prefilled.md` — line 100
- `src/_patterns/template.md` — line 78

**Approach:** For each file, read its content, find the index of `\n## Adoption`, slice everything before that index, trim trailing whitespace, append a single `\n`, and write back.

A quick node one-liner to do all 11 files at once:

- [ ] **Step 1: Strip all adoption sections**

```bash
node -e "
const fs = require('fs');
const files = [
  'src/_patterns/ask-users-for/addresses.md',
  'src/_patterns/ask-users-for/dates.md',
  'src/_patterns/ask-users-for/email-address.md',
  'src/_patterns/ask-users-for/names.md',
  'src/_patterns/ask-users-for/phone-numbers.md',
  'src/_patterns/ask-users-for/relationship.md',
  'src/_patterns/ask-users-for/signature.md',
  'src/_patterns/ask-users-for/social-security-number.md',
  'src/_patterns/help-users-to/keep-a-record-of-submitted-information.md',
  'src/_patterns/help-users-to/know-when-their-information-is-prefilled.md',
  'src/_patterns/template.md',
];
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const marker = '\n## Adoption';
  const idx = content.indexOf(marker);
  if (idx === -1) { console.log('SKIP (no marker):', f); continue; }
  fs.writeFileSync(f, content.slice(0, idx).trimEnd() + '\n', 'utf8');
  console.log('Stripped:', f);
}
"
```

Expected output: 11 lines beginning with `Stripped:`.

- [ ] **Step 2: Verify no `## Adoption` remains in any pattern file**

```bash
grep -r "## Adoption" src/_patterns/ && echo "FOUND - check above" || echo "Clean - no adoption sections remain"
```

Expected: `Clean - no adoption sections remain`

- [ ] **Step 3: Commit**

```bash
git add src/_patterns/
git commit -m "refactor: remove injected adoption sections from pattern markdown files"
```

---

### Task 5: Delete `inject-pattern-adoption.js`

- [ ] **Step 1: Delete the script**

```bash
rm scripts/inject-pattern-adoption.js
```

- [ ] **Step 2: Verify**

```bash
ls scripts/inject-pattern-adoption.js 2>&1 | grep -q "No such file" && echo "Deleted" || echo "Still exists"
```

- [ ] **Step 3: Commit**

```bash
git add scripts/inject-pattern-adoption.js
git commit -m "refactor: delete inject-pattern-adoption.js (replaced by Liquid partial)"
```

---

### Task 6: Update the GitHub Actions workflow

**Files:**
- Modify: `.github/workflows/pattern-adherence.yml`

Three changes:
1. Remove the "Inject adoption sections into pattern files" step (lines 80–84)
2. In "Check for changes", replace `git add src/_patterns/` with `git add src/_data/metrics/pattern_adoption.json`
3. In PR body, add `src/_data/metrics/pattern_adoption.json` to the Files Updated list and remove the mention of pattern files

- [ ] **Step 1: Remove the inject step**

Delete these lines from the workflow:
```yaml
      - name: Inject adoption sections into pattern files
        run: |
          echo "Injecting adoption sections into pattern markdown files..."
          node scripts/inject-pattern-adoption.js
          echo "Adoption section injection completed"
```

- [ ] **Step 2: Update `git add` in the "Check for changes" step**

Replace:
```yaml
          git add src/_patterns/
```
With:
```yaml
          git add src/_data/metrics/pattern_adoption.json
```

- [ ] **Step 3: Update PR body Files Updated list**

Replace:
```yaml
          - \`src/_data/metrics/pattern-adherence.json\`
```
With:
```yaml
          - \`src/_data/metrics/pattern-adherence.json\`
          - \`src/_data/metrics/pattern_adoption.json\`
```

- [ ] **Step 4: Verify the workflow has no remaining references to inject**

```bash
grep -n "inject" .github/workflows/pattern-adherence.yml && echo "FOUND - remove" || echo "Clean"
```

Expected: `Clean`

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/pattern-adherence.yml
git commit -m "chore: remove inject step from pattern-adherence workflow; track pattern_adoption.json"
```

---

## Verification

After all tasks are complete:

- [ ] **Confirm `src/_data/metrics/pattern_adoption.json` exists and is valid JSON**

```bash
node -e "const d = require('./src/_data/metrics/pattern_adoption.json'); console.log('Keys:', Object.keys(d).length)"
```

Expected: `Keys: 10`

- [ ] **Confirm no adoption sections remain in pattern markdown files**

```bash
grep -r "## Adoption" src/_patterns/ && echo "FAIL" || echo "PASS"
```

Expected: `PASS`

- [ ] **Confirm `inject-pattern-adoption.js` is gone**

```bash
ls scripts/ | grep inject && echo "FAIL" || echo "PASS"
```

Expected: `PASS`

- [ ] **Confirm pattern layout includes the partial**

```bash
grep "pattern-adoption" src/_layouts/pattern.html && echo "PASS" || echo "FAIL"
```

Expected: `PASS`

- [ ] **Confirm no remaining references to inject script in workflow**

```bash
grep "inject-pattern-adoption" .github/workflows/pattern-adherence.yml && echo "FAIL" || echo "PASS"
```

Expected: `PASS`
