---
title: Breakpoints
description: Responsive design breakpoints for mobile-first development
sidebar_position: 5
---

# Breakpoints

The VA.gov Design System uses seven responsive breakpoints for adapting layouts across different screen sizes. The system employs a **mobile-first approach**, meaning styles are written by default for mobile devices and scaled up for larger viewports.

## Breakpoint Values

| VADS Name | USWDS Name | CSS Variable | Width |
|-----------|------------|--------------|-------|
| `$xsmall-screen` | `$mobile` | `--mobile` | 320px |
| `$small-screen` | `$mobile-lg` | `--mobile-lg` | 481px |
| `$tablet` | `$tablet` | `--tablet` | 640px |
| `$medium-screen` | `$medium-screen` | `--medium-screen` | 768px |
| `$small-desktop-screen` | `$desktop` | `--desktop` | 1024px |
| `$large-screen` | `$desktop-lg` | `--desktop-lg` | 1201px |
| `$widescreen` | `$widescreen` | `--widescreen` | 1400px |

## Mobile-First Approach

Write styles for mobile by default, then use breakpoints to add styles for larger screens:

```scss
.my-component {
  // Mobile styles (default)
  padding: 16px;

  @include media($tablet) {
    // Tablet and up
    padding: 24px;
  }

  @include media($desktop) {
    // Desktop and up
    padding: 32px;
  }
}
```

## Sass Mixin Usage

Use the `@media` mixin to apply styles at specific breakpoints:

```scss
@include media($medium-screen) {
  // Styles for medium screens and larger
}
```

### Nesting Options

You can place mixins within selectors:

```scss
.my-element {
  width: 100%;

  @include media($tablet) {
    width: 50%;
  }
}
```

Or selectors within mixins:

```scss
@include media($tablet) {
  .my-element {
    width: 50%;
  }

  .another-element {
    display: flex;
  }
}
```

## Responsive Utility Classes

Most utility classes support responsive prefixes:

```html
<!-- Full width on mobile, half width on tablet, third on desktop -->
<div class="vads-u-width--full tablet:vads-u-width--half desktop:vads-u-width--third">
  Responsive content
</div>
```

### Available Prefixes

| Prefix | Breakpoint | Min Width |
|--------|------------|-----------|
| (none) | Mobile | 0px |
| `mobile-lg:` | Mobile Large | 481px |
| `tablet:` | Tablet | 640px |
| `desktop:` | Desktop | 1024px |
| `desktop-lg:` | Desktop Large | 1201px |

## Best Practices

### Do

- Start with mobile styles and progressively enhance for larger screens
- Use the predefined breakpoints for consistency
- Test layouts at each breakpoint to ensure smooth transitions

### Don't

- Write desktop-first styles that override down to mobile
- Create custom breakpoints unless design elements encounter genuine stress points that cannot be resolved through design modifications
- Assume specific devices match specific breakpoints

## Common Patterns

### Stacked to Side-by-Side

```html
<div class="vads-l-row">
  <div class="vads-l-col--12 tablet:vads-l-col--6">
    Left column (full width on mobile, half on tablet+)
  </div>
  <div class="vads-l-col--12 tablet:vads-l-col--6">
    Right column (full width on mobile, half on tablet+)
  </div>
</div>
```

### Show/Hide Elements

```html
<!-- Hidden on mobile, visible on tablet+ -->
<div class="vads-u-display--none tablet:vads-u-display--block">
  Desktop navigation
</div>

<!-- Visible on mobile, hidden on tablet+ -->
<div class="tablet:vads-u-display--none">
  Mobile menu button
</div>
```
