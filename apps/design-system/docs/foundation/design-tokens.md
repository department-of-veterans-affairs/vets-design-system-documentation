---
title: Design Tokens
description: Standardized design decisions expressed as reusable tokens
sidebar_position: 6
---

# Design Tokens

Design tokens are the VA Design System's method of expressing design decisions by applying color, typography, and spacing options from the U.S. Web Design System to specific VA platform contexts. They standardize design choices across applications.

## What Are Design Tokens?

Design tokens are named entities that store visual design attributes. Instead of hardcoding values like `#005ea2` throughout your code, you use tokens like `vads-color-primary`. This approach:

- Ensures consistency across applications
- Makes updates easier (change the token, update everywhere)
- Documents design decisions
- Enables theming and dark mode support

## Token Taxonomy

The VA Design System organizes tokens using a structured naming convention:

### Namespace

Identifies the token origin:

| Prefix | Source |
|--------|--------|
| `uswds-` | U.S. Web Design System |
| `vads-` | VA Design System |
| `vacds-` | VA Component Design System |

### Object Levels

Tokens can be scoped to different levels:

- **Group** - Families of components (forms, navigation)
- **Component** - Specific component name
- **Element** - Parts within components

### Base Categories

| Category | Description |
|----------|-------------|
| Color | Color values |
| Elevation | Shadows and z-index levels |
| Font | Typography properties |
| Shape | Border radius values |
| Size | Dimensions and max-widths |
| Spacing | Margins and padding |

### Modifiers

| Modifier | Purpose | Example |
|----------|---------|---------|
| Variant | Style variations | `primary`, `secondary` |
| State | Interactive states | `hover`, `focus`, `error` |
| Scale | Ordered ranges | `1`, `2`, `3` |
| Mode | Background context | `on-light`, `on-dark` |

## Token Types

### 1. Primitive Tokens

Base-level building blocks from USWDS. These are raw values that other tokens reference:

```
uswds-system-color-blue-60v → #005ea2
uswds-system-spacing-3 → 24px
```

### 2. Semantic Tokens

Communicate how primitives are used contextually:

```
vads-color-primary → references uswds-system-color-blue-60v
vads-color-error → references uswds-system-color-red-warm-50v
vads-spacing-3 → references uswds-system-spacing-3
```

### 3. Component Tokens

Scoped to specific components with component-specific decisions:

```
vads-button-color-background-primary-on-light → #005ea2
vads-alert-color-border-error-on-light → #d54309
vads-input-border-color-on-light → #565c65
```

## Available Token Categories

### Color Tokens

See the [Color Palette](./color-palette) page for complete color token documentation.

### Spacing Tokens

See the [Spacing Units](./spacing-units) page for the full spacing scale.

### Elevation Tokens

Z-index levels for layering:

| Token | Value | Usage |
|-------|-------|-------|
| `vads-elevation-z-index-level-1` | 100 | Dropdowns |
| `vads-elevation-z-index-level-2` | 200 | Sticky elements |
| `vads-elevation-z-index-level-3` | 300 | Fixed navigation |
| `vads-elevation-z-index-level-4` | 400 | Modals |
| `vads-elevation-z-index-level-5` | 500 | Tooltips |

### Size Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `vads-size-max-width-body` | 70rem | Maximum body content width |
| `vads-size-line-length-5` | 72ex | Maximum line length for readability |

### Shape Tokens

Border radius values:

| Token | Value |
|-------|-------|
| `vads-shape-border-radius-sm` | 2px |
| `vads-shape-border-radius-md` | 4px |
| `vads-shape-border-radius-lg` | 8px |

## Using Tokens

### In CSS

```css
.my-component {
  color: var(--vads-color-primary);
  background-color: var(--vads-color-base-lightest);
  padding: var(--vads-spacing-2);
  border-radius: var(--vads-shape-border-radius-md);
}
```

### In Sass

```scss
.my-component {
  color: $vads-color-primary;
  background-color: $vads-color-base-lightest;
  padding: units(2);
}
```

### In JavaScript (for dynamic styling)

```javascript
const styles = {
  color: 'var(--vads-color-primary)',
  backgroundColor: 'var(--vads-color-base-lightest)',
};
```

## Best Practices

### Do

- Use semantic tokens over primitive tokens when available
- Use component tokens for component-specific styling
- Reference tokens by their full name for clarity
- Check for existing tokens before creating custom values

### Don't

- Hardcode color, spacing, or typography values
- Create custom tokens without approval
- Override token values in component styles
- Mix token systems (USWDS and VADS) inconsistently

## Token Updates

When design tokens are updated:

1. Primitive tokens may change at the USWDS level
2. Semantic tokens are updated to reference new primitives
3. Component tokens may be added or deprecated
4. Applications receive updates through package updates

Always check the changelog when updating the design system package.
