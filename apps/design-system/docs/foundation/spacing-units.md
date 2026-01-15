---
title: Spacing Units
description: Consistent spacing scale based on multiples of 8 for margins, padding, and dimensions
sidebar_position: 4
---

# Spacing Units

The VA.gov Design System uses **multiples of 8** for spacing to maintain consistent rhythm across margins, padding, and dimensions. This approach works because 8 is easily broken down into smaller measurements before it approaches sub-pixel units, and many screen sizes are divisible by 8.

## Spacing Scale

### Primitive Tokens

| Token | Value | Pixels |
|-------|-------|--------|
| `vads-spacing-0p25` | 0.25 units | 2px |
| `vads-spacing-0p5` | 0.5 units | 4px |
| `vads-spacing-1px` | - | 1px |
| `vads-spacing-1` | 1 unit | 8px |
| `vads-spacing-1p5` | 1.5 units | 12px |
| `vads-spacing-2` | 2 units | 16px |
| `vads-spacing-2p5` | 2.5 units | 20px |
| `vads-spacing-3` | 3 units | 24px |
| `vads-spacing-4` | 4 units | 32px |
| `vads-spacing-5` | 5 units | 40px |
| `vads-spacing-6` | 6 units | 48px |
| `vads-spacing-7` | 7 units | 56px |
| `vads-spacing-8` | 8 units | 64px |
| `vads-spacing-9` | 9 units | 72px |
| `vads-spacing-10` | 10 units | 80px |
| `vads-spacing-15` | 15 units | 120px |

### Semantic Tokens

Predefined spacing tokens are available for common use cases:

- **Form spacing** - Consistent spacing between form elements
- **Insets** - Large, medium, and small padding for containers
- **Site margins** - Standard page margins
- **Vertical stacking** - Space between stacked elements

## Implementation

### REM Output

Using the `units()` function compiles to rem values:

```scss
margin: units(5);
// Compiles to: margin: 4rem;
```

### Pixel Output

For pixel values, use the `units-px()` function:

```scss
margin: units-px(5);
// Compiles to: margin: 40px;
```

## Utility Classes

### Margin

```css
/* All sides */
.vads-u-margin--0      /* 0 */
.vads-u-margin--1      /* 8px */
.vads-u-margin--2      /* 16px */
.vads-u-margin--3      /* 24px */
.vads-u-margin--4      /* 32px */
.vads-u-margin--5      /* 40px */

/* Top */
.vads-u-margin-top--0
.vads-u-margin-top--1
.vads-u-margin-top--2
/* ... etc */

/* Bottom */
.vads-u-margin-bottom--0
.vads-u-margin-bottom--1
.vads-u-margin-bottom--2
/* ... etc */

/* Left */
.vads-u-margin-left--0
.vads-u-margin-left--1
.vads-u-margin-left--2
/* ... etc */

/* Right */
.vads-u-margin-right--0
.vads-u-margin-right--1
.vads-u-margin-right--2
/* ... etc */

/* Horizontal (left and right) */
.vads-u-margin-x--0
.vads-u-margin-x--1
.vads-u-margin-x--2
/* ... etc */

/* Vertical (top and bottom) */
.vads-u-margin-y--0
.vads-u-margin-y--1
.vads-u-margin-y--2
/* ... etc */

/* Auto margins for centering */
.vads-u-margin-x--auto
```

### Padding

```css
/* All sides */
.vads-u-padding--0      /* 0 */
.vads-u-padding--1      /* 8px */
.vads-u-padding--2      /* 16px */
.vads-u-padding--3      /* 24px */
.vads-u-padding--4      /* 32px */
.vads-u-padding--5      /* 40px */

/* Top */
.vads-u-padding-top--0
.vads-u-padding-top--1
.vads-u-padding-top--2
/* ... etc */

/* Bottom */
.vads-u-padding-bottom--0
.vads-u-padding-bottom--1
.vads-u-padding-bottom--2
/* ... etc */

/* Left */
.vads-u-padding-left--0
.vads-u-padding-left--1
.vads-u-padding-left--2
/* ... etc */

/* Right */
.vads-u-padding-right--0
.vads-u-padding-right--1
.vads-u-padding-right--2
/* ... etc */

/* Horizontal (left and right) */
.vads-u-padding-x--0
.vads-u-padding-x--1
.vads-u-padding-x--2
/* ... etc */

/* Vertical (top and bottom) */
.vads-u-padding-y--0
.vads-u-padding-y--1
.vads-u-padding-y--2
/* ... etc */
```

## Best Practices

### Do

- Use spacing tokens instead of hardcoded pixel values
- Maintain consistent spacing rhythm throughout layouts
- Use semantic tokens for common patterns (form spacing, insets)

### Don't

- Mix spacing systems or use arbitrary values
- Use odd pixel values that don't align with the 8px grid
- Override spacing tokens with custom values unless absolutely necessary

## Responsive Spacing

Spacing utilities can be combined with responsive prefixes:

```html
<div class="vads-u-padding--2 tablet:vads-u-padding--4 desktop:vads-u-padding--5">
  Content with responsive padding
</div>
```
