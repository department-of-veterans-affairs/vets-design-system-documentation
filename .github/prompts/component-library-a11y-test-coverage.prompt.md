# Accessibility Test Coverage: Audit & Generate

Use this prompt in the **component-library** repo to audit automated accessibility test coverage for a VA Design System web component and generate missing tests.

## Overview

The VA Design System maintains a centralized accessibility test library in the `vets-design-system-documentation` repo at:

```
src/_data/accessibility_tests/test-library/
  1-perceivable.yml    # WCAG Principle 1 tests (WEB-1xx)
  2-operable.yml       # WCAG Principle 2 tests (WEB-2xx)
  3-understandable.yml # WCAG Principle 3 tests (WEB-3xx)
  4-robust.yml         # WCAG Principle 4 tests (WEB-4xx)
```

Note: These files are currently in the `5291-a11y-test-pilot` branch of the documentation repo. They will be merged to main after the pilot.

Each component has a YAML file listing which tests from the library apply to it:

```
src/_data/accessibility_tests/va-[component].yml
```

Every test and subtest in the library has two automation fields:

### `automation_coverage`

One of three values:
- `full` — reliably automatable in e2e/unit tests
- `partial` — structural/attribute checks automatable; SR/quality aspects need manual review
- `manual` — requires human judgment or real assistive technology

### `automation_notes`

Present on all `full` and `partial` tests. A prose field that combines applicability, axe-core coverage, assertion guidance, and manual review scope into a single string. Parse the **prefix** to determine what kind of automation is needed:

| Prefix | Meaning | Action |
|---|---|---|
| **"Covered by axeCheck '{rule}'."** | axe-core handles the automatable check | If the component already has an `axeCheck(page)` call, this test is **covered**. No additional test needed. |
| **"Custom test recommended."** | axe catches some aspects, but a custom test fills gaps | Write assertions for what axe can't cover. The note will mention which axe rule provides partial coverage. |
| **"Custom test needed."** | No axe-core coverage exists | Write assertions based on the "Assert" / "Check" / "Use" instructions in the note. |
| **"Custom test needed for page-level testing. No component-level test needed"** | Page-level only | **Skip** this test when auditing component-level coverage. |
| **"Parent test."** | Has subtests | Look at the subtests for specific automation guidance. |
| **"VA best practice"** | Beyond strict WCAG requirement | Still write a test, but note it's a VA-specific requirement. |

After the prefix, `automation_notes` follows a consistent pattern:
- **"Applies when..."** — conditions under which this test is relevant to the component (use this to skip irrelevant tests)
- **"Assert..." / "Check..." / "Use..."** — what the e2e test should assert
- **"Manual review still needed for..."** — what automation can't cover (omitted for `full` tests)
- **axe rule names in single quotes** — e.g., `'heading-order'`, `'button-name, link-name'` — the specific axe-core rules involved

Tests with `automation_coverage: manual` do not have an `automation_notes` field — `description_full` serves as the manual test script.

### axeCheck disabled rules

The component-library's `axeCheck` helper (`packages/web-components/src/testing/test-helpers.ts`) disables these axe-core rules by default:
- `document-title`
- `html-has-lang`
- `page-has-heading-one`
- `landmark-one-main`
- `region`

Tests that rely on these disabled rules will mention them explicitly in `automation_notes` (e.g., "axe-core 'page-has-heading-one' is disabled in the component-library axeCheck helper"). **You must write explicit assertions for these** — `axeCheck(page)` will NOT catch violations.

## Step 1: Identify the component

Ask the user which component to audit, or accept it as a parameter. The component name follows the `va-[name]` convention (e.g., `va-accordion`, `va-text-input`, `va-link`).

## Step 2: Gather inputs

You need three data sources:

### A. The component's test assignments

Fetch the component's accessibility test YAML from the documentation repo:

```
~Projects/vets-design-system-documentation/src/_data/accessibility_tests/va-[component].yml
```

This file lists which test IDs from the library apply to this component. Extract all `id` values from the `tests` array.

**If this file doesn't exist**, the component hasn't been assigned accessibility tests yet. Inform the user:

> This component doesn't have a test assignment file yet. Before running this audit, you need to create `src/_data/accessibility_tests/va-[component].yml` that lists which tests from the test library apply to this component.
>
> Run the `generate-component-accessibility-tests.prompt` to analyze the component and generate a draft assignment file, then re-run this audit prompt.

Then stop.

### B. The test library definitions

Fetch the four test library files to look up each assigned test ID:

```
~Projects/vets-design-system-documentation/src/_data/accessibility_tests/test-library/1-perceivable.yml
~Projects/vets-design-system-documentation/src/_data/accessibility_tests/test-library/2-operable.yml
~Projects/vets-design-system-documentation/src/_data/accessibility_tests/test-library/3-understandable.yml
~Projects/vets-design-system-documentation/src/_data/accessibility_tests/test-library/4-robust.yml
```

For each test ID assigned to the component, find its entry in the library and extract:
- `id`
- `description_short`
- `description_full`
- `automation_coverage` (full, partial, or manual)
- `automation_notes` (only present for full/partial tests — contains applicability, axe coverage, assertion guidance, and manual review scope)
- `wcag_criterion` (from parent test if this is a subtest)
- `wcag_name` (from parent test if this is a subtest)
- `category`

### C. The existing e2e tests

Read the component's existing test file(s) in the component-library repo:

```
packages/web-components/src/components/va-[component]/test/va-[component].e2e.ts
```

There may be additional test files in the same directory (e.g., `va-[component]-item.e2e.ts` for compound components like `va-accordion`). Read all `.e2e.ts` files in the `test/` directory.

## Step 3: Audit coverage

### Baseline requirement: axeCheck

**Before auditing individual tests**, verify the component has at least one `axeCheck(page)` call in its e2e test files. This is a foundational accessibility test that every component should have.

Search the e2e test files for:
```typescript
axeCheck(page)
```

**If no `axeCheck` call is found**:
- Flag this as a **critical gap** in the audit report
- Note that many tests marked "Covered by axeCheck" will be uncovered
- Include generating an axeCheck test as the **highest priority** recommendation

**If `axeCheck` is present**:
- Proceed with auditing individual test coverage
- Any test with `automation_notes` starting with "Covered by axeCheck '{rule}'" can be marked as **Covered**

### 3a. Filter out irrelevant tests

For each test ID assigned to the component where `automation_coverage` is `full` or `partial`:

Before auditing, skip tests that don't apply to this component:

- **"No component-level test needed"** — skip entirely (page-level only)
- **"Parent test. See subtests"** — skip the parent, audit the subtests instead
- **"Applies when component contains [X]"** — skip if the component doesn't contain X (e.g., skip "Applies when component contains form inputs" for `va-link`)

### 3b. Check axe-core coverage from automation_notes

Parse the `automation_notes` prefix to determine what axe-core already covers:

| automation_notes prefix | axe-core status | Action |
|---|---|---|
| **"Covered by axeCheck '{rule}'."** | Fully covered by active axe rule | Mark **Covered** if the component has an `axeCheck(page)` call. No additional test needed. |
| **"Custom test recommended. axe-core '{rule}'..."** | Partially covered by axe | `axeCheck(page)` catches some issues. Check whether the remaining assertions in the note are covered by existing tests. |
| **"Custom test needed."** (no axe mention) | No axe coverage | Rely on assertion instructions in the note to determine what to test. |
| Notes mentioning a disabled axe rule (e.g., "axe-core 'page-has-heading-one' is disabled") | Disabled — **NOT covered** by axeCheck | You must find or write explicit assertions. |

### 3c. Match existing tests to library IDs

Search the existing e2e test file(s) for assertions that match the `automation_notes` instructions. Map note patterns to e2e test patterns:

| automation_notes pattern | Look for in e2e tests |
|---|---|
| "Assert ... aria-hidden" or "role='presentation'" | `getAttribute('aria-hidden')`, `getAttribute('role')` |
| "Check ... aria-required" or "required attribute" | `getAttribute('aria-required')`, `getAttribute('required')` |
| "Verify ... heading levels" | `page.findAll('h1, h2, h3, ...')`, heading-related assertions |
| "Tab to element" / "keyboard" | `page.keyboard.press('Tab')`, `press('Enter')`, `press('Space')` |
| "Assert ... focus" / "outline" / "box-shadow" | `getComputedStyle`, focus-related assertions |
| "Assert ... aria-expanded" / "aria-checked" | `getAttribute('aria-expanded')`, `getAttribute('aria-checked')` |
| "Check ... aria-live" / "role='alert'" | `getAttribute('aria-live')`, `getAttribute('role')` |
| "Assert ... text-decoration" / "underline" | Style assertions on link elements |
| "getBoundingClientRect" / "target size" | Element dimension assertions |
| "Assert fieldset has legend" / "role='group'" | `querySelector('fieldset > legend')`, `getAttribute('role')` |
| "Assert ... window.location.href" | URL or navigation assertions |

### 3d. Classify each test

- **Covered** — an existing test assertion matches the intent of the automation_notes
- **Partially covered** — some aspects are tested but gaps remain
- **Not covered** — no matching test assertion found
- **Not automatable** — `automation_coverage: manual` (skip, but list for reference)
- **Skipped (page-level)** — test says "No component-level test needed"

Tests that require behavioral interaction (keyboard navigation, focus management, modal trapping, error states) are NOT covered by axe-core and need explicit test assertions.

## Step 4: Report coverage

Present results as a table:

```markdown
## Accessibility Test Coverage: va-[component]

### Baseline Check
- **axeCheck present**: ✅ Yes / ❌ No

### Summary
- Total tests assigned: X
- Automatable (full + partial): X
- Covered: X
- Partially covered: X
- Not covered: X
- Skipped (page-level): X
- Manual only (not audited): X

### Coverage Details

| Test ID | WCAG | Description | Coverage | Status | Notes |
|---|---|---|---|---|---|
| WEB-211 | 2.1.1 | Keyboard operable | full | ✅ Covered | Existing keyboard interaction tests |
| VADS-243-001 | 2.4.3 | Modal focus trap | full | ❌ Not covered | No modal focus trap test found |
| WEB-143 | 1.4.3 | Color contrast | full | ✅ Covered | Covered by axeCheck 'color-contrast' |
| WEB-131-003 | 1.3.1 | Page includes one H1 | full | ⏭️ Skipped | No component-level test needed (page-level) |
| ... | ... | ... | ... | ... | ... |
```

### Priority ranking for missing tests

Rank uncovered tests by priority:

**0. Baseline (if missing axeCheck)** — Add `axeCheck(page)` test first — this is the foundation that many other tests depend on

Then for remaining gaps:
1. **Critical** — `automation_coverage: full` + `508_severity: Critical` or `governance_severity: Critical`
2. **High** — `automation_coverage: full` + High severity
3. **Medium** — `automation_coverage: full` + Medium severity, or `automation_coverage: partial` + Critical severity
4. **Low** — `automation_coverage: partial` + non-critical severity

## Step 5: Generate missing tests

For each uncovered test where `automation_coverage` is `full`, generate a Stencil e2e test. Follow these conventions from the component-library repo:

### Test file structure

```typescript
import { newE2EPage } from '@stencil/core/testing';
import { axeCheck } from '../../../testing/test-helpers';
```

### Test naming convention

Use the test library ID and short description in the test name:

```typescript
// Accessibility: [TEST-ID] - [description_short]
it('[TEST-ID] - [description_short]', async () => {
  // test body
});
```

For example:

```typescript
it('VADS-243-001 - Focus is trapped inside a modal when open', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-modal visible>Modal content</va-modal>`);

  // Press Tab and verify focus stays inside the modal
  await page.keyboard.press('Tab');
  const activeElement = await page.evaluate(() => {
    return document.activeElement?.closest('va-modal') !== null;
  });
  expect(activeElement).toBe(true);
});
```

### Common test patterns

#### axe-core check (WEB-143, WEB-131-008, WEB-311, etc.)

If the component doesn't already have an `axeCheck` test, add one:

```typescript
it('passes an axe check', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-[component]>[typical content]</va-[component]>`);
  await axeCheck(page);
});
```

#### Keyboard operability (WEB-211)

```typescript
it('WEB-211 - Interactive elements are keyboard operable', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-[component]>[content]</va-[component]>`);

  // Tab to the interactive element
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => {
    return document.activeElement?.tagName.toLowerCase();
  });
  expect(focused).toBe('va-[component]');

  // Activate with Enter
  await page.keyboard.press('Enter');
  // Assert expected behavior
});
```

#### No keyboard trap (WEB-212)

```typescript
it('WEB-212 - Keyboard focus is not trapped', async () => {
  const page = await newE2EPage();
  await page.setContent(`
    <button id="before">Before</button>
    <va-[component]>[content]</va-[component]>
    <button id="after">After</button>
  `);

  // Tab into component
  await page.keyboard.press('Tab');
  // Tab out of component
  await page.keyboard.press('Tab');

  const activeId = await page.evaluate(() => document.activeElement?.id);
  expect(activeId).toBe('after');
});
```

#### Focus visible (WEB-247)

```typescript
it('WEB-247 - Focus indicator is visible', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-[component]>[content]</va-[component]>`);

  await page.keyboard.press('Tab');
  const interactiveEl = await page.find('va-[component] >>> [interactive-selector]');
  const outline = await interactiveEl.getComputedStyle().then(s => s.outline);
  expect(outline).not.toBe('none');
});
```

#### ARIA state announcements (WEB-412-002)

```typescript
it('WEB-412-002 - Component communicates state via ARIA', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-[component]>[content]</va-[component]>`);

  const el = await page.find('va-[component] >>> [interactive-selector]');
  const expanded = el.getAttribute('aria-expanded');
  expect(expanded).toBe('false');

  // Trigger state change
  await el.click();
  const expandedAfter = el.getAttribute('aria-expanded');
  expect(expandedAfter).toBe('true');
});
```

#### Error handling (VADS-331-001, VADS-331-003)

```typescript
it('VADS-331-001 - Errors are identified on blur', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-text-input required label="Name"></va-text-input>`);

  const input = await page.find('va-text-input >>> input');
  await input.focus();
  await input.press('Tab'); // blur

  const error = await page.find('va-text-input >>> .usa-error-message');
  expect(error).not.toBeNull();
});
```

#### Target size (WEB-258, VADS-258-001)

```typescript
it('VADS-258-001 - Target size is at least 24x24 pixels', async () => {
  const page = await newE2EPage();
  await page.setContent(`<va-[component]>[content]</va-[component]>`);

  const size = await page.evaluate(() => {
    const el = document.querySelector('va-[component]')
      ?.shadowRoot?.querySelector('[interactive-selector]');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });

  expect(size.width).toBeGreaterThanOrEqual(24);
  expect(size.height).toBeGreaterThanOrEqual(24);
});
```

### Test grouping

Group accessibility tests in a `describe` block at the end of the existing test file:

```typescript
describe('accessibility', () => {
  it('passes an axe check', async () => { ... });
  it('WEB-211 - Interactive elements are keyboard operable', async () => { ... });
  it('WEB-212 - Keyboard focus is not trapped', async () => { ... });
  // ... more tests
});
```

If the test file is already very large, create a separate file:

```
packages/web-components/src/components/va-[component]/test/va-[component].a11y.e2e.ts
```

## Step 6: Present the generated tests

Show the complete generated test code. For each test:
1. Note the test library ID it covers
2. Note whether it fully or partially covers the `automation_notes` assertions
3. Flag any assumptions made about component markup (selectors, slot names, etc.)

Ask the user to review selectors and component-specific behavior before committing.

## Important notes

- **Do not modify the test library YAML files** — those live in the documentation repo
- **Do not generate tests for `automation_coverage: manual` items** — just list them as manual-only in the report
- **For `automation_coverage: partial` items** — generate what's automatable per the `automation_notes` field's "Assert" / "Check" / "Use" instructions, and add a comment noting the "Manual review still needed" portion
- **Skip page-level tests** — tests with "No component-level test needed" in `automation_notes` don't apply to component-level audits
- **Shadow DOM** — VA web components use shadow DOM. Use `>>>` (deep pierce) selector in Stencil e2e tests to reach shadow DOM elements
- **The `axeCheck` helper** is imported from `../../../testing/test-helpers` and runs axe-core against the rendered page. It **disables** `document-title`, `html-has-lang`, `page-has-heading-one`, `landmark-one-main`, and `region` rules by default
- **Check `automation_notes` for axe coverage** — if a note starts with "Covered by axeCheck", an existing `axeCheck(page)` call already covers it. If the note mentions a disabled axe rule, write an explicit assertion. If the note starts with "Custom test recommended" and mentions an axe rule, write supplemental assertions for what axe doesn't cover
- **Component content** — Use realistic content in test fixtures. Check the component's Storybook stories for typical usage patterns
- **Compound components** — Some components have child components (e.g., `va-accordion` + `va-accordion-item`). Tests should use the compound structure as rendered in production
