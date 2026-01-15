---
title: Border
description: CSS classes to control border width, style, and color on HTML elements.
sidebar_position: 3
---

# Border

The border utility enables control of border width, style, and color on HTML elements using predefined CSS classes.

**CSS Property:** `border`, `border-width`, `border-style`, `border-color`
**Responsive:** Yes (width only)

## Border width

### All sides

Available widths: `0`, `1px`, `2px`, `3px`, `4px`, `5px`, `7px`, `10px`

Pattern: `.vads-u-border--{width}`

```html
<div class="vads-u-border--2px">2px border on all sides</div>
```

### Directional borders

| Class pattern | Description |
|---------------|-------------|
| `.vads-u-border-top--{width}` | Top border only |
| `.vads-u-border-right--{width}` | Right border only |
| `.vads-u-border-bottom--{width}` | Bottom border only |
| `.vads-u-border-left--{width}` | Left border only |

## Border style

Solid is the default style when using the shorthand utility.

| Class | Style |
|-------|-------|
| `.vads-u-border-style--solid` | Solid border |
| `.vads-u-border-style--dashed` | Dashed border |
| `.vads-u-border-style--dotted` | Dotted border |

:::note
Style cannot change across breakpoints and requires the border shorthand if the element lacks an existing border.
:::

## Border color

Color utilities require either the shorthand or an existing border declaration.

### Base colors

- `.vads-u-border-color--base`
- `.vads-u-border-color--white`
- `.vads-u-border-color--black`
- `.vads-u-border-color--orange`

### Primary and secondary

- `.vads-u-border-color--primary`
- `.vads-u-border-color--primary-dark`
- `.vads-u-border-color--primary-darker`
- `.vads-u-border-color--secondary`
- `.vads-u-border-color--secondary-dark`

### Grayscale

- `.vads-u-border-color--gray`
- `.vads-u-border-color--gray-dark`
- `.vads-u-border-color--gray-light`
- `.vads-u-border-color--gray-lightest`

### Hub-specific colors

- `.vads-u-border-color--hub-health-care`
- `.vads-u-border-color--hub-education`
- `.vads-u-border-color--hub-disability`
- And other hub colors...

## Responsive usage

Breakpoint prefixes follow mobile-first methodology:

```html
<div class="vads-u-border-top--1px tablet:vads-u-border-top--0 tablet:vads-u-border-left--1px">
  Top border on mobile, left border on tablet+
</div>
```

Available breakpoints:
- `tablet` (640px+)
- `medium-screen` (768px+)
- `desktop` (1024px+)
- `desktop-lg` (1201px+)
- `widescreen` (1400px+)

## Constraints

- Border color and style cannot be adjusted across different breakpoints
- Use the border shorthand utility if applying style or color to elements without existing borders
