---
title: Font size
description: CSS classes for modifying text sizing with responsive support.
sidebar_position: 7
---

# Font size

The font size utility enables modification of element text sizing. These classes are particularly valuable for styling headings with logical nesting while applying custom sizes.

**CSS Property:** `font-size`
**Responsive:** Yes

## Named sizing

| Class | Size |
|-------|------|
| `.vads-u-font-size--sm` | 15px |
| `.vads-u-font-size--root` | 16px |
| `.vads-u-font-size--md` | 17px |
| `.vads-u-font-size--lg` | 20px |
| `.vads-u-font-size--xl` | 30px |
| `.vads-u-font-size--2xl` | 40px |

## Heading-based sizing

| Class | Size |
|-------|------|
| `.vads-u-font-size--h1` | 40px |
| `.vads-u-font-size--h2` | 30px |
| `.vads-u-font-size--h3` | 24px |
| `.vads-u-font-size--h4` | 20px |
| `.vads-u-font-size--h5` | 17px |
| `.vads-u-font-size--h6` | 15px |

## Font-specific classes

### Sans serif

| Class | Size |
|-------|------|
| `.vads-u-font-size--sans-2xs` | 14.88px |
| `.vads-u-font-size--sans-xs` | 16px |
| `.vads-u-font-size--sans-sm` | 18.56px |
| `.vads-u-font-size--sans-md` | 21.28px |
| `.vads-u-font-size--sans-lg` | 26.56px |
| `.vads-u-font-size--sans-xl` | 33.12px |
| `.vads-u-font-size--sans-2xl` | 42.56px |

### Serif

| Class | Size |
|-------|------|
| `.vads-u-font-size--serif-2xs` | 13.92px |
| `.vads-u-font-size--serif-xs` | 16px |
| `.vads-u-font-size--serif-sm` | 17.28px |
| `.vads-u-font-size--serif-md` | 19.84px |
| `.vads-u-font-size--serif-lg` | 24.8px |
| `.vads-u-font-size--serif-xl` | 30.88px |
| `.vads-u-font-size--serif-2xl` | 39.68px |

### Monospace

| Class | Size |
|-------|------|
| `.vads-u-font-size--mono-2xs` | 13.28px |
| `.vads-u-font-size--mono-xs` | 14.88px |
| `.vads-u-font-size--mono-sm` | 16.48px |
| `.vads-u-font-size--mono-md` | 18.88px |
| `.vads-u-font-size--mono-lg` | 23.68px |
| `.vads-u-font-size--mono-xl` | 29.6px |
| `.vads-u-font-size--mono-2xl` | 38.08px |

## Responsive usage

Apply breakpoint prefixes using mobile-first methodology:

```html
<h2 class="vads-u-font-size--h3 desktop:vads-u-font-size--h2">
  Smaller on mobile, larger on desktop
</h2>
```
