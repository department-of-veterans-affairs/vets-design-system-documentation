# M2: Guides & Utilities Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add static guides, a `get_guide` tool, a `get_utility_classes` tool, guide resources, and update the vads_mode prompt to complete Phase M2 of the VADS MCP server.

**Architecture:** Static markdown guides in `data/guides/` are read by a `get_guide` tool. Utility classes are catalogued in a static JSON file and served by a `get_utility_classes` tool. Guide resources expose markdown via MCP `vads://guides/{topic}` URIs. All follows the same pure-handler + Zod-schema-registration pattern used in M0/M1.

**Tech Stack:** TypeScript, Vitest (TDD), `@modelcontextprotocol/sdk`, `zod`, Node `fs` for reading static files.

**Working directory:** `~/repos/vads-mcp-server`

**GFE note:** npm scripts use `node node_modules/...` paths directly. Build: `node node_modules/typescript/bin/tsc`. Test: `node node_modules/vitest/vitest.mjs run`.

**Existing state:**
- 5 tools registered: `find_components`, `get_component`, `validate_component_api`, `get_tokens`, `find_tokens`
- 4 resources: `vads://components`, `vads://component/{tag}`, `vads://tokens`, `vads://tokens/{category}`
- 1 prompt: `vads_mode`
- 60 tests passing across 4 test files
- `data/guides/` directory exists but is empty

---

### Task 1: Write the installation guide

**Files:**
- Create: `data/guides/installation.md`

**Step 1: Write the guide**

Create `data/guides/installation.md` with the following content. This is distilled from `design.va.gov/about/developers/install` for AI consumption — concise, code-heavy, no marketing:

```markdown
# Installing the VA Design System

## Install packages

```bash
npm install @department-of-veterans-affairs/component-library @department-of-veterans-affairs/css-library
```

## Load web components

In your main entry file (e.g., `main.ts` or `main.js`):

```ts
import { defineCustomElements } from '@department-of-veterans-affairs/component-library';
defineCustomElements();
```

This registers all `<va-*>` custom elements globally. Call it once at application startup.

## Import CSS

Import the three required CSS files:

```css
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/core";
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/uswds-typography";
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/utilities";
```

## Load design tokens

Load the CSS custom properties file globally:

```html
<link rel="stylesheet" href="node_modules/@department-of-veterans-affairs/css-library/dist/tokens/css/variables.css">
```

Or import it in your CSS/SCSS:

```css
@import "@department-of-veterans-affairs/css-library/dist/tokens/css/variables.css";
```

Use tokens via CSS custom properties:

```css
.my-class {
  color: var(--vads-color-base);
  padding: var(--vads-spacing-2);
  font-family: var(--font-family-sans);
}
```

## Import component CSS

Import the component library's global CSS:

```ts
import "@department-of-veterans-affairs/component-library/dist/main.css";
```

## Icons sprite sheet

Components using `va-icon` need the sprite sheet served from your app's origin. Copy it during your build:

```bash
cp node_modules/@department-of-veterans-affairs/component-library/dist/img/sprite.svg public/img/sprite.svg
```

Default path is `/img/sprite.svg`. To use a different path:

```ts
import { initIconSpriteLocation } from '@department-of-veterans-affairs/web-components';
defineCustomElements();
initIconSpriteLocation();
globalThis.setVaIconSpriteLocation('/your/path/to/sprite.svg');
```

## Using components in HTML

All VADS web components use the `va-` prefix:

```html
<va-alert status="info" visible>
  <h2 slot="headline">Information</h2>
  <p>This is an informational alert.</p>
</va-alert>

<va-text-input label="Full name" name="fullName" required></va-text-input>

<va-button text="Continue"></va-button>
```

## Event handling (vanilla JS)

VADS components fire custom events prefixed with `va`:

```html
<va-text-input label="Email" name="email" id="email-input"></va-text-input>

<script>
  document.querySelector('#email-input')
    .addEventListener('vaInput', (event) => {
      console.log('New value:', event.detail.value);
    });
</script>
```

Common events: `vaInput`, `vaChange`, `vaSubmit`, `component-library-analytics`.
```

**Step 2: Verify the file was created**

Run: `cat data/guides/installation.md | head -5`
Expected: Shows the title line

**Step 3: Commit**

```bash
git add data/guides/installation.md
git commit -m "docs: add installation guide for MCP server"
```

---

### Task 2: Write the page-structure guide

**Files:**
- Create: `data/guides/page-structure.md`

**Step 1: Write the guide**

Create `data/guides/page-structure.md`:

```markdown
# VA.gov Page Structure

Every VA.gov page follows a consistent layout. Use these components in this order.

## Required page skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Veterans Affairs</title>
</head>
<body>
  <!-- 1. Official government banner (always first) -->
  <va-official-gov-banner></va-official-gov-banner>

  <!-- 2. Header (choose one) -->
  <!-- Full header for general pages: -->
  <va-header-minimal header="VA.gov" subheader=""></va-header-minimal>
  <!-- Minimal header for forms/focused tasks: -->
  <!-- <va-header-minimal header="Form Title" subheader="VA Form 12-3456"></va-header-minimal> -->

  <!-- 3. Breadcrumbs (below header, above content) -->
  <va-breadcrumbs>
    <a href="/">Home</a>
    <a href="/section">Section</a>
    <a href="/section/page">Current Page</a>
  </va-breadcrumbs>

  <!-- 4. Main content -->
  <main>
    <div class="vads-grid-container">
      <div class="vads-grid-row">
        <div class="vads-grid-col">
          <h1>Page Title</h1>
          <!-- Page content here -->
        </div>
      </div>
    </div>
  </main>

  <!-- 5. Back to top -->
  <va-back-to-top></va-back-to-top>

  <!-- 6. Footer (choose one) -->
  <!-- Minimal footer for forms/focused tasks: -->
  <va-minimal-footer></va-minimal-footer>
  <!-- Full footer for general pages is not yet a web component -->

  <!-- 7. Crisis line modal (always last) -->
  <va-crisis-line-modal></va-crisis-line-modal>
</body>
</html>
```

## Grid system

VADS uses a 12-column flexbox grid:

```html
<!-- Centered container (max-width: 1024px) -->
<div class="vads-grid-container">
  <div class="vads-grid-row">
    <!-- Full width -->
    <div class="vads-grid-col">Content</div>
  </div>
</div>

<!-- Two-column layout -->
<div class="vads-grid-container">
  <div class="vads-grid-row">
    <div class="vads-grid-col--8">Main content (8/12)</div>
    <div class="vads-grid-col--4">Sidebar (4/12)</div>
  </div>
</div>

<!-- Full-width container -->
<div class="vads-grid-container--full">
  <div class="vads-grid-row">
    <div class="vads-grid-col">Full width content</div>
  </div>
</div>
```

## Header options

| Use case | Component | Key props |
|----------|-----------|-----------|
| General pages | `<va-header-minimal>` | `header`, `subheader` |
| Forms / focused tasks | `<va-header-minimal>` | `header="Form Title"`, `subheader="VA Form XX-XXXX"` |

Use the minimal header + minimal footer together for forms and focused tasks to reduce navigation distractions.

## Breadcrumb rules

- Use for pages with hierarchy deeper than 2 levels
- Each segment must be a link
- Last item gets `aria-current="page"`
- In multi-step forms, breadcrumbs stay static at the form entry point
- Breadcrumbs sit between header and main content

## Responsive behavior

- Grid columns stack vertically on mobile (< 768px)
- Use responsive utility classes: `vads-u-margin-top--2 medium-screen:vads-u-margin-top--4`
- Content should make sense when read top-to-bottom (mobile order = DOM order)
```

**Step 2: Commit**

```bash
git add data/guides/page-structure.md
git commit -m "docs: add page structure guide for MCP server"
```

---

### Task 3: Write the form-patterns guide

**Files:**
- Create: `data/guides/form-patterns.md`

**Step 1: Write the guide**

Create `data/guides/form-patterns.md`:

```markdown
# VA.gov Form Patterns

Multi-step forms on VA.gov follow a standardized template with progress tracking, autosave, and consistent navigation.

## Form step template anatomy

A standard authenticated form step page includes (top to bottom):

1. `<va-breadcrumbs>` — static across all form steps
2. Form title (H1) and subtitle — same on every page
3. `<va-segmented-progress-bar>` — shows step progress (also serves as H2)
4. "Saved as" message with application ID (authenticated only)
5. Prefill alert (authenticated only, on pages with prefilled data)
6. Form step content — the actual form fields (H3 page title + fields)
7. "Finish this application later" link (authenticated only)
8. `<va-button-pair>` — Back/Continue navigation
9. Autosave success alert (authenticated only)
10. `<va-need-help>` — contact information

## Progress bar

```html
<va-segmented-progress-bar
  current="2"
  total="6"
  heading-text="Your personal information"
  header-level="2"
></va-segmented-progress-bar>
```

- Step header (H2) = general category: "Your personal information"
- Page title (H3) = specific topic: "Your name and date of birth"
- Limit forms to 13 steps maximum
- Use `labels` prop to show step labels (optional)

## Button pair navigation

```html
<!-- Back/Continue (default for form steps) -->
<va-button-pair continue></va-button-pair>

<!-- Update/Cancel (for edit modes) -->
<va-button-pair update></va-button-pair>

<!-- Submit/Back (for review page) -->
<va-button-pair submit></va-button-pair>
```

The `continue` variation renders Back (secondary) and Continue (primary) buttons. On mobile, buttons stack full-width.

## Form introduction page

```html
<h1>Apply for [benefit name]</h1>
<p class="va-introtext">Equal to VA Form XX-XXXX</p>

<va-process-list>
  <va-process-list-item header="Prepare">
    <p>Gather required documents...</p>
  </va-process-list-item>
  <va-process-list-item header="Apply">
    <p>Complete this application...</p>
  </va-process-list-item>
  <va-process-list-item header="Review">
    <p>We'll review your application...</p>
  </va-process-list-item>
</va-process-list>

<va-button text="Start the application" />
```

## Form review page

```html
<va-segmented-progress-bar current="6" total="6" heading-text="Review" header-level="2"></va-segmented-progress-bar>

<h3>Review your information</h3>

<va-accordion open-single>
  <va-accordion-item header="Personal information">
    <dl>
      <dt>Full name</dt><dd>John Smith</dd>
      <dt>Date of birth</dt><dd>January 1, 1990</dd>
    </dl>
    <va-link href="#" text="Edit" />
  </va-accordion-item>
  <va-accordion-item header="Contact information">
    <!-- review content -->
  </va-accordion-item>
</va-accordion>

<va-button-pair submit></va-button-pair>
```

## Confirmation page

```html
<va-alert status="success" visible>
  <h2 slot="headline">You've submitted your application</h2>
  <p>Your submission was received on February 13, 2026.</p>
</va-alert>

<h3>What to expect next</h3>
<p>We'll review your application and send you a decision letter.</p>

<h3>Your information</h3>
<dl>
  <dt>Confirmation number</dt><dd>V-ABC-1234</dd>
  <dt>Date submitted</dt><dd>February 13, 2026</dd>
</dl>
```

## Common form components

| Purpose | Component | Key props |
|---------|-----------|-----------|
| Text field | `<va-text-input>` | `label`, `name`, `required`, `error` |
| Dropdown | `<va-select>` | `label`, `name`, `required` |
| Radio buttons | `<va-radio>` | `label`, `required` + `<va-radio-option>` children |
| Checkboxes | `<va-checkbox-group>` | `label`, `required` + `<va-checkbox>` children |
| Date of birth | `<va-memorable-date>` | `label`, `name`, `required` |
| Date picker | `<va-date>` | `label`, `name`, `required` |
| File upload | `<va-file-input>` | `label`, `name`, `accept`, `required` |
| Textarea | `<va-textarea>` | `label`, `name`, `required` |

## State management for prototypes

For prototyping multi-step forms, use sessionStorage to persist data across pages:

```ts
// Save form data
function saveStep(stepName: string, data: Record<string, string>) {
  const formData = JSON.parse(sessionStorage.getItem('formData') || '{}');
  formData[stepName] = data;
  sessionStorage.setItem('formData', JSON.stringify(formData));
}

// Load form data
function loadStep(stepName: string): Record<string, string> {
  const formData = JSON.parse(sessionStorage.getItem('formData') || '{}');
  return formData[stepName] || {};
}
```
```

**Step 2: Commit**

```bash
git add data/guides/form-patterns.md
git commit -m "docs: add form patterns guide for MCP server"
```

---

### Task 4: Write the accessibility guide

**Files:**
- Create: `data/guides/accessibility.md`

**Step 1: Write the guide**

Create `data/guides/accessibility.md`:

```markdown
# VADS Accessibility Requirements

VA.gov requires WCAG 2.2 AA compliance. ~40% of Veterans have an identified disability.

## Built-in component accessibility

VADS web components (`<va-*>`) include built-in accessibility:

- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Color contrast compliance

**Do not override** the accessibility features built into VADS components. If you need to customize, use the component's props (e.g., `label`, `error`, `hint`) rather than adding raw ARIA attributes.

## Heading hierarchy

- Use one `<h1>` per page (the page title)
- Follow sequential heading order: h1 → h2 → h3 (never skip levels)
- In forms: H1 = form title, H2 = step header (via progress bar), H3 = page title
- Use heading props on components that support them (e.g., `header-level` on `va-segmented-progress-bar`)

## Focus management

- When navigating between form steps, move focus to the top of the new content (the H1 or the progress bar)
- After dismissing a modal, return focus to the element that triggered it
- After form submission errors, move focus to the first error or the error summary
- Use `tabindex="-1"` on target elements when setting focus programmatically:

```ts
const heading = document.querySelector('h1');
heading.setAttribute('tabindex', '-1');
heading.focus();
```

## Keyboard navigation

- All interactive elements must be reachable via Tab key
- Buttons and links must be activatable via Enter and Space keys
- Custom components must support Escape to close (modals, dropdowns)
- Tab order must match visual order (left-to-right, top-to-bottom)

## Screen reader considerations

- Use `aria-live="polite"` for dynamic content updates that aren't focus-driven
- Use `va-alert` for important status messages (it handles aria-live internally)
- Provide descriptive link text (not "click here")
- Use `aria-label` or `aria-describedby` when visual context is insufficient

## Color and contrast

- VADS design tokens meet contrast requirements — use them instead of custom colors
- Text must have 4.5:1 contrast ratio against background (normal text)
- Large text (18px+ bold or 24px+ regular) requires 3:1 contrast ratio
- Don't rely on color alone to convey information

## Testing checklist

1. **Automated:** Run axe DevTools (catches ~30% of issues)
2. **Keyboard:** Tab through the entire page, verify all interactions work
3. **Zoom:** Content reflows correctly at 200% and 400% zoom
4. **Headings:** Verify sequential heading order (use HeadingsMap browser extension)
5. **Screen reader:** Test with VoiceOver (macOS/iOS) or NVDA/JAWS (Windows)
```

**Step 2: Commit**

```bash
git add data/guides/accessibility.md
git commit -m "docs: add accessibility guide for MCP server"
```

---

### Task 5: Write the vanilla JS framework guide

**Files:**
- Create: `data/guides/frameworks/vanilla.md`

**Step 1: Write the guide**

Create `data/guides/frameworks/vanilla.md`:

```markdown
# Vanilla JS/TS Usage Patterns

This guide covers using VADS web components in vanilla JavaScript or TypeScript projects (no React, no framework). This is the primary mode for prototyping.

## Basic component usage

VADS web components are standard HTML elements. No imports needed per component:

```html
<va-text-input
  label="First name"
  name="firstName"
  required
></va-text-input>
```

## Setting properties vs attributes

Most VADS component props are primitives (string, boolean, number) and can be set as HTML attributes:

```html
<!-- String attribute -->
<va-text-input label="Email address" name="email"></va-text-input>

<!-- Boolean attribute (presence = true, absence = false) -->
<va-text-input label="Email" required></va-text-input>

<!-- Numeric attribute (passed as string in HTML) -->
<va-segmented-progress-bar current="3" total="7"></va-segmented-progress-bar>
```

**Important:** Use HTML attribute names, not JavaScript property names:
- ✅ `open-single` (HTML attribute)
- ❌ `openSingle` (JS property — won't work in HTML)

For non-primitive props (objects, arrays), set them via JavaScript:

```ts
const select = document.querySelector('va-select');
select.options = [
  { value: 'army', label: 'Army' },
  { value: 'navy', label: 'Navy' },
];
```

## Listening to events

VADS components emit custom events prefixed with `va`:

```ts
// Text input change
document.querySelector('va-text-input')
  .addEventListener('vaInput', (e: CustomEvent) => {
    console.log(e.detail.value);
  });

// Button click (uses native click event)
document.querySelector('va-button')
  .addEventListener('click', () => {
    console.log('Button clicked');
  });

// Select change
document.querySelector('va-select')
  .addEventListener('vaSelect', (e: CustomEvent) => {
    console.log(e.detail.value);
  });

// Radio change
document.querySelector('va-radio')
  .addEventListener('vaValueChange', (e: CustomEvent) => {
    console.log(e.detail.value);
  });

// Checkbox change
document.querySelector('va-checkbox')
  .addEventListener('vaChange', (e: CustomEvent) => {
    console.log(e.detail.checked);
  });
```

## Dynamic content

Create components dynamically with `document.createElement`:

```ts
function createAlert(status: string, headline: string, body: string): HTMLElement {
  const alert = document.createElement('va-alert');
  alert.setAttribute('status', status);
  alert.setAttribute('visible', '');

  const h2 = document.createElement('h2');
  h2.slot = 'headline';
  h2.textContent = headline;

  const p = document.createElement('p');
  p.textContent = body;

  alert.appendChild(h2);
  alert.appendChild(p);
  return alert;
}

document.querySelector('#alerts-container')
  .appendChild(createAlert('info', 'Welcome', 'You have new updates.'));
```

## Slot content

Some VADS components use slots for rich content:

```html
<!-- Named slot -->
<va-alert status="warning" visible>
  <h2 slot="headline">Warning title</h2>
  <p>This is the default slot content.</p>
</va-alert>

<!-- va-accordion uses child va-accordion-item elements -->
<va-accordion>
  <va-accordion-item header="Section 1">
    <p>Content for section 1</p>
  </va-accordion-item>
</va-accordion>
```

## Multi-page navigation (for prototypes)

For multi-page prototypes, use separate HTML files with shared state:

```ts
// Navigate between prototype pages
function navigate(path: string) {
  window.location.href = path;
}

// Store state across pages
sessionStorage.setItem('currentScenario', 'active-claims');
const scenario = sessionStorage.getItem('currentScenario');
```

## TypeScript types

For TypeScript projects, VADS custom events use `CustomEvent`:

```ts
const input = document.querySelector('va-text-input')!;
input.addEventListener('vaInput', ((e: CustomEvent<{ value: string }>) => {
  const value: string = e.detail.value;
}) as EventListener);
```
```

**Step 2: Commit**

```bash
git add data/guides/frameworks/vanilla.md
git commit -m "docs: add vanilla JS framework guide for MCP server"
```

---

### Task 6: Write failing tests for `get_guide` tool

**Files:**
- Create: `test/tools/guide-tools.test.ts`

**Step 1: Write the test file**

```ts
import { describe, it, expect } from 'vitest';
import { handleGetGuide, listGuideTopics } from '../../src/tools/guide-tools.js';

describe('listGuideTopics', () => {
  it('returns available guide topics', () => {
    const topics = listGuideTopics();
    expect(topics).toContain('installation');
    expect(topics).toContain('page-structure');
    expect(topics).toContain('form-patterns');
    expect(topics).toContain('accessibility');
    expect(topics).toContain('frameworks/vanilla');
  });
});

describe('handleGetGuide', () => {
  it('returns installation guide content', () => {
    const result = handleGetGuide({ topic: 'installation' });
    expect(result.topic).toBe('installation');
    expect(result.content).toContain('Installing the VA Design System');
    expect(result.content).toContain('defineCustomElements');
  });

  it('returns page-structure guide content', () => {
    const result = handleGetGuide({ topic: 'page-structure' });
    expect(result.topic).toBe('page-structure');
    expect(result.content).toContain('va-official-gov-banner');
    expect(result.content).toContain('vads-grid-container');
  });

  it('returns form-patterns guide content', () => {
    const result = handleGetGuide({ topic: 'form-patterns' });
    expect(result.topic).toBe('form-patterns');
    expect(result.content).toContain('va-segmented-progress-bar');
    expect(result.content).toContain('va-button-pair');
  });

  it('returns accessibility guide content', () => {
    const result = handleGetGuide({ topic: 'accessibility' });
    expect(result.topic).toBe('accessibility');
    expect(result.content).toContain('WCAG');
    expect(result.content).toContain('focus management');
  });

  it('returns frameworks/vanilla guide content', () => {
    const result = handleGetGuide({ topic: 'frameworks/vanilla' });
    expect(result.topic).toBe('frameworks/vanilla');
    expect(result.content).toContain('vanilla');
    expect(result.content).toContain('addEventListener');
  });

  it('throws for non-existent guide topic', () => {
    expect(() => handleGetGuide({ topic: 'nonexistent' })).toThrow(/not found/i);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `node node_modules/vitest/vitest.mjs run test/tools/guide-tools.test.ts`
Expected: FAIL with "Cannot find module"

---

### Task 7: Implement `get_guide` tool

**Files:**
- Create: `src/tools/guide-tools.ts`
- Modify: `src/server.ts` (add tool registration)

**Step 1: Implement the handler**

Create `src/tools/guide-tools.ts`:

```ts
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

// --- Types ---

export interface GetGuideParams {
  topic: string;
}

export interface GetGuideResult {
  topic: string;
  content: string;
}

// --- Helpers ---

const guidesDir = join(fileURLToPath(import.meta.url), '..', '..', '..', 'data', 'guides');

function collectMarkdownFiles(dir: string, basePath = ''): string[] {
  const topics: string[] = [];
  if (!existsSync(dir)) return topics;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      topics.push(...collectMarkdownFiles(join(dir, entry.name), `${basePath}${entry.name}/`));
    } else if (entry.name.endsWith('.md')) {
      topics.push(`${basePath}${entry.name.replace('.md', '')}`);
    }
  }
  return topics;
}

// --- Handlers ---

export function listGuideTopics(): string[] {
  return collectMarkdownFiles(guidesDir);
}

export function handleGetGuide(params: GetGuideParams): GetGuideResult {
  const filePath = join(guidesDir, `${params.topic}.md`);

  if (!existsSync(filePath)) {
    const available = listGuideTopics();
    throw new Error(
      `Guide "${params.topic}" not found. Available topics: ${available.join(', ')}`,
    );
  }

  const content = readFileSync(filePath, 'utf-8');
  return {
    topic: params.topic,
    content,
  };
}
```

**Step 2: Register in server.ts**

Add to imports at top of `src/server.ts`:

```ts
import { handleGetGuide, listGuideTopics } from './tools/guide-tools.js';
```

Add tool registration after the `find_tokens` tool block (before `// --- Resources ---`):

```ts
  server.tool(
    'get_guide',
    'Get a VA Design System guide by topic. Topics: installation, page-structure, form-patterns, accessibility, frameworks/vanilla.',
    { topic: z.string().describe('Guide topic (e.g., "installation", "page-structure", "form-patterns", "accessibility", "frameworks/vanilla")') },
    async ({ topic }) => {
      const result = handleGetGuide({ topic });
      return {
        content: [
          {
            type: 'text' as const,
            text: result.content,
          },
        ],
      };
    },
  );
```

**Step 3: Run tests**

Run: `node node_modules/vitest/vitest.mjs run test/tools/guide-tools.test.ts`
Expected: All 7 tests PASS

**Step 4: Run all tests**

Run: `node node_modules/vitest/vitest.mjs run`
Expected: 67+ tests PASS across 5 test files

**Step 5: Build**

Run: `node node_modules/typescript/bin/tsc`
Expected: No errors

**Step 6: Commit**

```bash
git add src/tools/guide-tools.ts test/tools/guide-tools.test.ts src/server.ts
git commit -m "feat: implement get_guide tool with static markdown guides"
```

---

### Task 8: Create utility classes data file

**Files:**
- Create: `data/utility-classes.json`

**Step 1: Write the data file**

Create `data/utility-classes.json` — a structured catalogue of VADS utility classes by category, with descriptions and example class names. This is more useful to AI agents than parsing raw CSS.

```json
{
  "prefix": "vads-u-",
  "layoutPrefix": "vads-l-",
  "responsivePrefixes": ["mobile-lg:", "tablet:", "desktop:"],
  "categories": [
    {
      "name": "margin",
      "description": "Margin spacing utilities. Values: 0, 0p25, 0p5, 1-10, 15, 1px, neg variants.",
      "classes": [
        "vads-u-margin--{value}",
        "vads-u-margin-top--{value}",
        "vads-u-margin-bottom--{value}",
        "vads-u-margin-left--{value}",
        "vads-u-margin-right--{value}",
        "vads-u-margin-x--{value}",
        "vads-u-margin-y--{value}"
      ],
      "values": ["0", "0p25", "0p5", "1", "1p5", "2", "2p5", "3", "4", "5", "6", "7", "8", "9", "10", "15", "1px", "auto", "neg1px", "neg0p25", "neg0p5", "neg1", "neg1p5", "neg2", "neg2p5", "neg3", "neg4", "neg5"],
      "examples": ["vads-u-margin-top--2", "vads-u-margin-bottom--0", "vads-u-margin-x--auto"]
    },
    {
      "name": "padding",
      "description": "Padding spacing utilities. Same values as margin (except no auto/neg).",
      "classes": [
        "vads-u-padding--{value}",
        "vads-u-padding-top--{value}",
        "vads-u-padding-bottom--{value}",
        "vads-u-padding-left--{value}",
        "vads-u-padding-right--{value}",
        "vads-u-padding-x--{value}",
        "vads-u-padding-y--{value}"
      ],
      "values": ["0", "0p25", "0p5", "1", "1p5", "2", "2p5", "3", "4", "5", "6", "7", "8", "9", "10", "15", "1px"],
      "examples": ["vads-u-padding--2", "vads-u-padding-y--3", "vads-u-padding-left--0"]
    },
    {
      "name": "display",
      "description": "Display property utilities.",
      "classes": ["vads-u-display--{value}"],
      "values": ["block", "flex", "inline", "inline-block", "none"],
      "examples": ["vads-u-display--flex", "vads-u-display--none"]
    },
    {
      "name": "flexbox",
      "description": "Flexbox layout utilities.",
      "classes": [
        "vads-u-flex--{value}",
        "vads-u-flex-direction--{value}",
        "vads-u-flex-wrap--{value}",
        "vads-u-justify-content--{value}",
        "vads-u-align-content--{value}",
        "vads-u-align-items--{value}",
        "vads-u-align-self--{value}",
        "vads-u-order--{value}"
      ],
      "values": {
        "flex": ["1", "2", "3", "4", "auto", "fill"],
        "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
        "flex-wrap": ["wrap", "nowrap"],
        "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
        "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
        "align-self": ["flex-start", "flex-end", "center", "baseline", "stretch", "auto"]
      },
      "examples": ["vads-u-display--flex vads-u-justify-content--space-between", "vads-u-flex-direction--column"]
    },
    {
      "name": "typography",
      "description": "Font family, size, weight, style, line-height, and text alignment.",
      "classes": [
        "vads-u-font-family--{value}",
        "vads-u-font-size--{value}",
        "vads-u-font-weight--{value}",
        "vads-u-font-style--{value}",
        "vads-u-line-height--{value}",
        "vads-u-text-align--{value}",
        "vads-u-text-decoration--{value}"
      ],
      "values": {
        "font-family": ["sans", "serif", "mono"],
        "font-size": ["2xs", "xs", "sm", "source-sans-normalized", "md", "lg", "xl", "2xl"],
        "font-weight": ["normal", "bold"],
        "font-style": ["normal", "italic"],
        "line-height": ["1", "2", "3", "4", "5", "6"],
        "text-align": ["left", "center", "right", "justify"],
        "text-decoration": ["none", "underline"]
      },
      "examples": ["vads-u-font-size--lg", "vads-u-font-weight--bold", "vads-u-text-align--center"]
    },
    {
      "name": "color",
      "description": "Text color and background color utilities. Uses VADS color token names.",
      "classes": [
        "vads-u-color--{value}",
        "vads-u-background-color--{value}"
      ],
      "values": ["base", "base-lightest", "white", "black", "gray-medium", "gray-warm-dark", "primary", "primary-dark", "primary-darker", "secondary", "secondary-dark", "error", "success", "warning", "info", "link"],
      "examples": ["vads-u-color--base", "vads-u-background-color--primary", "vads-u-color--white"]
    },
    {
      "name": "border",
      "description": "Border utilities.",
      "classes": [
        "vads-u-border--{value}",
        "vads-u-border-top--{value}",
        "vads-u-border-bottom--{value}",
        "vads-u-border-left--{value}",
        "vads-u-border-right--{value}",
        "vads-u-border-color--{value}",
        "vads-u-border-style--{value}"
      ],
      "values": {
        "border": ["0", "1px", "2px", "3px", "4px", "5px", "7px", "10px"],
        "border-color": ["base", "base-light", "base-lighter", "base-lightest", "white", "primary", "secondary", "error", "success", "warning", "info"],
        "border-style": ["solid", "dashed", "dotted", "none"]
      },
      "examples": ["vads-u-border--1px", "vads-u-border-bottom--2px", "vads-u-border-color--primary"]
    },
    {
      "name": "sizing",
      "description": "Width, height, min/max sizing utilities.",
      "classes": [
        "vads-u-width--{value}",
        "vads-u-height--{value}",
        "vads-u-measure--{value}"
      ],
      "values": {
        "width": ["0", "auto", "full"],
        "height": ["0", "auto", "full", "viewport"],
        "measure": ["1", "2", "3", "4", "5", "none"]
      },
      "examples": ["vads-u-width--full", "vads-u-measure--3"]
    },
    {
      "name": "position",
      "description": "Positioning utilities.",
      "classes": ["vads-u-position--{value}"],
      "values": ["absolute", "fixed", "relative", "static", "sticky"],
      "examples": ["vads-u-position--relative"]
    },
    {
      "name": "visibility",
      "description": "Visibility and screen reader utilities.",
      "classes": ["vads-u-visibility--{value}"],
      "values": ["visible", "hidden", "screen-reader"],
      "examples": ["vads-u-visibility--hidden", "vads-u-visibility--screen-reader"]
    },
    {
      "name": "grid",
      "description": "Flexbox grid layout (not vads-u- prefixed).",
      "classes": [
        "vads-grid-container",
        "vads-grid-container--full",
        "vads-grid-row",
        "vads-grid-col",
        "vads-grid-col--{1-12}",
        "vads-grid-col--auto",
        "vads-grid-col--fill"
      ],
      "values": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "auto", "fill"],
      "examples": [
        "<div class=\"vads-grid-container\"><div class=\"vads-grid-row\"><div class=\"vads-grid-col--8\">Main</div><div class=\"vads-grid-col--4\">Sidebar</div></div></div>"
      ]
    }
  ]
}
```

**Step 2: Commit**

```bash
git add data/utility-classes.json
git commit -m "data: add utility classes catalogue for MCP server"
```

---

### Task 9: Write failing tests for `get_utility_classes` tool

**Files:**
- Create: `test/tools/utility-tools.test.ts`

**Step 1: Write the test file**

```ts
import { describe, it, expect } from 'vitest';
import {
  handleGetUtilityClasses,
  listUtilityCategories,
} from '../../src/tools/utility-tools.js';

describe('listUtilityCategories', () => {
  it('returns available utility class categories', () => {
    const categories = listUtilityCategories();
    expect(categories).toContain('margin');
    expect(categories).toContain('padding');
    expect(categories).toContain('display');
    expect(categories).toContain('flexbox');
    expect(categories).toContain('typography');
    expect(categories).toContain('color');
    expect(categories).toContain('grid');
  });
});

describe('handleGetUtilityClasses', () => {
  it('returns all categories when no filter given', () => {
    const result = handleGetUtilityClasses({});
    expect(result.categories.length).toBeGreaterThan(8);
    expect(result.prefix).toBe('vads-u-');
  });

  it('filters by category name', () => {
    const result = handleGetUtilityClasses({ category: 'margin' });
    expect(result.categories.length).toBe(1);
    expect(result.categories[0].name).toBe('margin');
    expect(result.categories[0].classes.length).toBeGreaterThan(0);
    expect(result.categories[0].examples.length).toBeGreaterThan(0);
  });

  it('returns empty categories array for unknown category', () => {
    const result = handleGetUtilityClasses({ category: 'nonexistent' });
    expect(result.categories).toEqual([]);
  });

  it('includes responsive prefixes', () => {
    const result = handleGetUtilityClasses({});
    expect(result.responsivePrefixes).toContain('mobile-lg:');
    expect(result.responsivePrefixes).toContain('tablet:');
    expect(result.responsivePrefixes).toContain('desktop:');
  });

  it('grid category has grid-specific classes', () => {
    const result = handleGetUtilityClasses({ category: 'grid' });
    expect(result.categories[0].classes).toContain('vads-grid-container');
    expect(result.categories[0].classes).toContain('vads-grid-row');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `node node_modules/vitest/vitest.mjs run test/tools/utility-tools.test.ts`
Expected: FAIL with "Cannot find module"

---

### Task 10: Implement `get_utility_classes` tool

**Files:**
- Create: `src/tools/utility-tools.ts`
- Modify: `src/server.ts` (add tool registration)

**Step 1: Implement the handler**

Create `src/tools/utility-tools.ts`:

```ts
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// --- Types ---

export interface UtilityCategory {
  name: string;
  description: string;
  classes: string[];
  values: string[] | Record<string, string[]>;
  examples: string[];
}

export interface UtilityClassesData {
  prefix: string;
  layoutPrefix: string;
  responsivePrefixes: string[];
  categories: UtilityCategory[];
}

export interface GetUtilityClassesParams {
  category?: string;
}

export interface GetUtilityClassesResult {
  prefix: string;
  responsivePrefixes: string[];
  categories: UtilityCategory[];
}

// --- Data loading ---

let cachedData: UtilityClassesData | null = null;

function loadUtilityData(): UtilityClassesData {
  if (cachedData) return cachedData;
  const filePath = join(fileURLToPath(import.meta.url), '..', '..', '..', 'data', 'utility-classes.json');
  cachedData = JSON.parse(readFileSync(filePath, 'utf-8')) as UtilityClassesData;
  return cachedData;
}

// --- Handlers ---

export function listUtilityCategories(): string[] {
  const data = loadUtilityData();
  return data.categories.map(c => c.name);
}

export function handleGetUtilityClasses(params: GetUtilityClassesParams): GetUtilityClassesResult {
  const data = loadUtilityData();

  const categories = params.category
    ? data.categories.filter(c => c.name === params.category)
    : data.categories;

  return {
    prefix: data.prefix,
    responsivePrefixes: data.responsivePrefixes,
    categories,
  };
}
```

**Step 2: Register in server.ts**

Add to imports at top of `src/server.ts`:

```ts
import { handleGetUtilityClasses } from './tools/utility-tools.js';
```

Add tool registration after the `get_guide` tool block:

```ts
  server.tool(
    'get_utility_classes',
    'Get VADS CSS utility classes by category. Categories: margin, padding, display, flexbox, typography, color, border, sizing, position, visibility, grid.',
    { category: z.string().optional().describe('Utility category (e.g., "margin", "flexbox", "grid")') },
    async ({ category }) => {
      const result = handleGetUtilityClasses({ category });
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    },
  );
```

**Step 3: Run tests**

Run: `node node_modules/vitest/vitest.mjs run test/tools/utility-tools.test.ts`
Expected: All 6 tests PASS

**Step 4: Run all tests**

Run: `node node_modules/vitest/vitest.mjs run`
Expected: 73+ tests PASS across 6 test files

**Step 5: Build**

Run: `node node_modules/typescript/bin/tsc`
Expected: No errors

**Step 6: Commit**

```bash
git add src/tools/utility-tools.ts test/tools/utility-tools.test.ts src/server.ts data/utility-classes.json
git commit -m "feat: implement get_utility_classes tool with static data catalogue"
```

---

### Task 11: Implement guide resources

**Files:**
- Create: `src/resources/guides.ts`
- Modify: `src/server.ts` (register resources)

**Step 1: Implement the resource**

Create `src/resources/guides.ts`:

```ts
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { handleGetGuide, listGuideTopics } from '../tools/guide-tools.js';

export function registerGuideResources(server: McpServer): void {
  // vads://guides/{topic} — guide content by topic
  server.resource(
    'guide-by-topic',
    new ResourceTemplate('vads://guides/{topic}', { list: undefined }),
    { description: 'VA Design System guide by topic (installation, page-structure, form-patterns, accessibility, frameworks/vanilla)' },
    async (uri, { topic }) => {
      try {
        const result = handleGetGuide({ topic: topic as string });
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/markdown',
              text: result.content,
            },
          ],
        };
      } catch {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'application/json',
              text: JSON.stringify({
                error: `Guide "${topic}" not found`,
                available: listGuideTopics(),
              }),
            },
          ],
        };
      }
    },
  );
}
```

**Step 2: Register in server.ts**

Add import:

```ts
import { registerGuideResources } from './resources/guides.js';
```

Add after `registerTokenResources(server);`:

```ts
  registerGuideResources(server);
```

**Step 3: Build and test**

Run: `node node_modules/typescript/bin/tsc && node node_modules/vitest/vitest.mjs run`
Expected: Build clean, all tests pass

**Step 4: Commit**

```bash
git add src/resources/guides.ts src/server.ts
git commit -m "feat: implement guide resources (vads://guides/{topic})"
```

---

### Task 12: Update vads_mode prompt and verify

**Files:**
- Modify: `src/prompts/vads-mode.ts`

**Step 1: Update the prompt**

In `src/prompts/vads-mode.ts`, add the new tools to the Available Tools section (after `find_tokens`):

```ts
- **get_guide** — Get guides on installation, page-structure, form-patterns, accessibility, or vanilla JS usage
- **get_utility_classes** — Get VADS CSS utility classes by category (margin, padding, flexbox, grid, typography, color, etc.)
```

**Step 2: Build and run all tests**

Run: `node node_modules/typescript/bin/tsc && node node_modules/vitest/vitest.mjs run`
Expected: Build clean, all 73+ tests pass

**Step 3: Verify MCP server starts**

Run: `echo '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}},"id":1}' | node dist/index.js 2>/dev/null | head -1`
Expected: JSON response with server capabilities (tools, resources, prompts)

**Step 4: Commit**

```bash
git add src/prompts/vads-mode.ts
git commit -m "feat: update vads_mode prompt with guide and utility tools"
```

---

### Task 13: Update plan status and verify full suite

**Files:**
- Modify: `~/repos/vets-design-system-documentation/docs/plans/2026-02-03-feat-my-va-prototyping-workflow-plan.md` (status table only)

**Step 1: Run full test suite one final time**

Run: `cd ~/repos/vads-mcp-server && node node_modules/vitest/vitest.mjs run`
Expected: 73+ tests PASS across 6 test files

**Step 2: Verify build**

Run: `node node_modules/typescript/bin/tsc`
Expected: No errors

**Step 3: List all files to confirm completeness**

Run: `find src test data -type f | sort`

Expected new files:
- `data/guides/installation.md`
- `data/guides/page-structure.md`
- `data/guides/form-patterns.md`
- `data/guides/accessibility.md`
- `data/guides/frameworks/vanilla.md`
- `data/utility-classes.json`
- `src/tools/guide-tools.ts`
- `src/tools/utility-tools.ts`
- `src/resources/guides.ts`
- `test/tools/guide-tools.test.ts`
- `test/tools/utility-tools.test.ts`

**Step 4: Update the parent plan status table**

In `~/repos/vets-design-system-documentation/docs/plans/2026-02-03-feat-my-va-prototyping-workflow-plan.md`, update the M1 and M2 rows in the status table:

```markdown
| **M1: Tokens & Validation** | ✅ Complete | Token parser, token tools, token resources. 33 new tests. |
| **M2: Guides & Utilities** | ✅ Complete | 5 guides, utility classes data, get_guide + get_utility_classes tools, guide resources. |
```

**Step 5: Commit the plan update**

```bash
cd ~/repos/vets-design-system-documentation
git add docs/plans/2026-02-03-feat-my-va-prototyping-workflow-plan.md
git commit -m "Update prototyping plan: M1 and M2 complete"
```

---

## Summary

After completing all 13 tasks, the MCP server will have:

| Category | Before M2 | After M2 |
|----------|-----------|----------|
| **Tools** | 5 | 7 (+get_guide, +get_utility_classes) |
| **Resources** | 4 | 5 (+vads://guides/{topic}) |
| **Prompts** | 1 | 1 (updated with new tools) |
| **Test files** | 4 | 6 |
| **Tests** | 60 | ~73 |
| **Static data** | 0 | 6 files (5 guides + 1 utility classes JSON) |

The MCP server will then have all tools specified in the plan except `map_figma_component` (M3). The packaging-for-distribution items from M2 (npm publish, MCP config docs) are deferred to M3/P0 since they depend on having a GitHub repo to publish from.
