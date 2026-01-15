---
title: Flexbox Grid
description: 12-column responsive flexbox grid system
sidebar_position: 2
---

# Flexbox Grid

The VA.gov Design System uses a flexbox-based 12-column grid for building responsive layouts.

## Container

### Standard Container

Centers content with a max-width of 1000px:

```html
<div class="vads-l-grid-container">
  <!-- Content -->
</div>
```

### Full-Width Container

Uses the full page width:

```html
<div class="vads-l-grid-container--full">
  <!-- Content -->
</div>
```

## Grid Structure

### Basic Row and Columns

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <div class="vads-l-col">Column 1</div>
    <div class="vads-l-col">Column 2</div>
    <div class="vads-l-col">Column 3</div>
  </div>
</div>
```

When no width is specified, columns distribute equally and automatically wrap when space is insufficient.

## Column Widths

Use `vads-l-col--[number]` where the number represents columns out of a 12-column grid:

```html
<div class="vads-l-row">
  <div class="vads-l-col--3">3 columns (25%)</div>
  <div class="vads-l-col--9">9 columns (75%)</div>
</div>
```

### Available Widths

| Class | Width |
|-------|-------|
| `vads-l-col--1` | 8.33% |
| `vads-l-col--2` | 16.67% |
| `vads-l-col--3` | 25% |
| `vads-l-col--4` | 33.33% |
| `vads-l-col--5` | 41.67% |
| `vads-l-col--6` | 50% |
| `vads-l-col--7` | 58.33% |
| `vads-l-col--8` | 66.67% |
| `vads-l-col--9` | 75% |
| `vads-l-col--10` | 83.33% |
| `vads-l-col--11` | 91.67% |
| `vads-l-col--12` | 100% |

:::note
The row's total columns should equal 12 to prevent wrapping.
:::

## Responsive Columns

Columns can adapt across breakpoints using responsive prefixes:

| Prefix | Breakpoint |
|--------|------------|
| `mobile-lg:` | 481px |
| `tablet:` | 640px |
| `desktop:` | 1024px |
| `desktop-lg:` | 1201px |

### Example

```html
<div class="vads-l-row">
  <div class="vads-l-col--12 tablet:vads-l-col--6 desktop:vads-l-col--4">
    Full width on mobile, half on tablet, third on desktop
  </div>
  <div class="vads-l-col--12 tablet:vads-l-col--6 desktop:vads-l-col--4">
    Full width on mobile, half on tablet, third on desktop
  </div>
  <div class="vads-l-col--12 tablet:vads-l-col--12 desktop:vads-l-col--4">
    Full width on mobile and tablet, third on desktop
  </div>
</div>
```

## Column Spacing

The grid requires **padding and/or margin utilities** to provide column spacing. This offers greater design flexibility than traditional grids with built-in gutters.

```html
<div class="vads-l-row">
  <div class="vads-l-col--6 vads-u-padding-right--2">
    Left column with right padding
  </div>
  <div class="vads-l-col--6 vads-u-padding-left--2">
    Right column with left padding
  </div>
</div>
```

## Nested Grids

Grids can be nested. Use matching negative margin values to offset parent padding:

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <div class="vads-l-col--8 vads-u-padding--2">
      <div class="vads-l-row vads-u-margin-x--neg2">
        <div class="vads-l-col--6 vads-u-padding--2">Nested column</div>
        <div class="vads-l-col--6 vads-u-padding--2">Nested column</div>
      </div>
    </div>
    <div class="vads-l-col--4">
      Sidebar
    </div>
  </div>
</div>
```

## Common Patterns

### Two-Column Layout

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <div class="vads-l-col--12 tablet:vads-l-col--8">
      Main content
    </div>
    <div class="vads-l-col--12 tablet:vads-l-col--4">
      Sidebar
    </div>
  </div>
</div>
```

### Three-Column Layout

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <div class="vads-l-col--12 tablet:vads-l-col--4">Column 1</div>
    <div class="vads-l-col--12 tablet:vads-l-col--4">Column 2</div>
    <div class="vads-l-col--12 tablet:vads-l-col--4">Column 3</div>
  </div>
</div>
```

### Card Grid

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <div class="vads-l-col--12 tablet:vads-l-col--6 desktop:vads-l-col--3 vads-u-padding--2">
      <div class="vads-u-background-color--gray-lightest vads-u-padding--2">
        Card 1
      </div>
    </div>
    <div class="vads-l-col--12 tablet:vads-l-col--6 desktop:vads-l-col--3 vads-u-padding--2">
      <div class="vads-u-background-color--gray-lightest vads-u-padding--2">
        Card 2
      </div>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

## Best Practices

### Do

- Use the 12-column grid for consistent layouts
- Apply responsive prefixes for mobile-first design
- Use padding utilities for column spacing

### Don't

- Nest grids more than 2 levels deep
- Mix grid systems (stick to flexbox grid)
- Forget to account for spacing when calculating column widths
