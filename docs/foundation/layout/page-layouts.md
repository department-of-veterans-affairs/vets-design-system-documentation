---
title: Page Layouts
description: Common page layout templates for VA.gov
sidebar_position: 3
---

# Page Layouts

Page layouts are pre-built templates that demonstrate how to structure common VA.gov pages using the flexbox grid.

## Two Columns, Content on Right

This layout positions navigation or secondary content on the left sidebar with main content occupying the right column.

### Desktop View

- Left sidebar: 4 columns (3 on desktop-lg)
- Main content: 8 columns (9 on desktop-lg)

### Mobile View

On mobile devices, the sidebar converts to a flyout menu and appears above the main content.

### Example

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <!-- Sidebar -->
    <div class="vads-l-col--12 tablet:vads-l-col--4 desktop-lg:vads-l-col--3">
      <nav aria-label="Secondary navigation">
        <!-- Navigation items -->
      </nav>
    </div>

    <!-- Main content -->
    <main class="vads-l-col--12 tablet:vads-l-col--8 desktop-lg:vads-l-col--9">
      <h1>Page Title</h1>
      <!-- Page content -->
    </main>
  </div>
</div>
```

## Two Columns, Content on Left

This layout places primary content on the left and promotional or supplementary content on the right.

### Desktop View

- Main content: 8 columns
- Right sidebar: 4 columns

### Mobile View

On mobile, the right column moves below the main content.

### Example

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <!-- Main content -->
    <main class="vads-l-col--12 tablet:vads-l-col--8">
      <h1>Page Title</h1>
      <!-- Page content -->
    </main>

    <!-- Sidebar -->
    <aside class="vads-l-col--12 tablet:vads-l-col--4">
      <!-- Promotional content, related links, etc. -->
    </aside>
  </div>
</div>
```

## Full-Width Layout

For pages that need maximum content width:

```html
<div class="vads-l-grid-container--full">
  <main>
    <h1>Page Title</h1>
    <!-- Full-width content -->
  </main>
</div>
```

## Technical Structure

Both two-column layouts use:

- **Flexbox grid container** with appropriate margin utilities for consistent spacing
- **Responsive breakpoints** (mobile, tablet, desktop-lg)
- **Padding utilities** using standardized spacing units
- **`<main>` semantic tag** wrapping core page content

## Accessibility

### Semantic Structure

The main content of the page should always be wrapped in `<main>`:

```html
<main>
  <!-- Primary page content -->
</main>
```

### Source Order

Maintain visual-to-DOM order consistency across all screen sizes. Avoid CSS-based source reordering that could confuse screen reader users.

```html
<!-- Good: DOM order matches visual order -->
<div class="vads-l-row">
  <div class="vads-l-col--12 tablet:vads-l-col--4">Sidebar (appears first on mobile)</div>
  <main class="vads-l-col--12 tablet:vads-l-col--8">Content</main>
</div>
```

### Landmarks

Use appropriate ARIA landmarks:

```html
<nav aria-label="Primary navigation">...</nav>
<main>...</main>
<aside aria-label="Related content">...</aside>
<footer>...</footer>
```

## Best Practices

### Do

- Use semantic HTML elements (`<main>`, `<nav>`, `<aside>`, `<footer>`)
- Ensure content is accessible in all viewport sizes
- Test layouts at each breakpoint
- Maintain consistent spacing using utility classes

### Don't

- Reorder content visually in ways that differ from DOM order
- Nest main content areas
- Use layout classes for non-layout purposes
- Override grid behavior with conflicting CSS
