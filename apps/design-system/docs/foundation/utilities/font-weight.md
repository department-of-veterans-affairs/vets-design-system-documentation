---
title: Font weight
description: CSS classes for controlling text weight (bold or normal).
sidebar_position: 9
---

# Font weight

The font weight utility modifies the weight of text elements.

**CSS Property:** `font-weight`
**Responsive:** Yes

## Available classes

| Class | CSS Value | Usage |
|-------|-----------|-------|
| `.vads-u-font-weight--bold` | `font-weight: 700` | Apply to elements requiring emphasis |
| `.vads-u-font-weight--normal` | `font-weight: 400` | Apply to elements with standard text weight |

## Usage

```html
<p class="vads-u-font-weight--bold">
  This text is bold.
</p>

<strong class="vads-u-font-weight--normal">
  This strong text appears with normal weight.
</strong>
```

## Responsive usage

```html
<span class="vads-u-font-weight--normal desktop:vads-u-font-weight--bold">
  Normal on mobile, bold on desktop
</span>
```
