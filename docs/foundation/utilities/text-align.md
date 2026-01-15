---
title: Text align
description: CSS classes for controlling text alignment.
sidebar_position: 16
---

# Text align

The text align utility modifies text alignment within elements.

**CSS Property:** `text-align`
**Responsive:** Yes

## Available classes

| Class | Alignment |
|-------|-----------|
| `.vads-u-text-align--left` | Left-aligned text |
| `.vads-u-text-align--center` | Center-aligned text |
| `.vads-u-text-align--right` | Right-aligned text |
| `.vads-u-text-align--justify` | Justified text |

## Usage

```html
<p class="vads-u-text-align--center">
  This text is centered.
</p>
```

## Responsive usage

```html
<p class="vads-u-text-align--center tablet:vads-u-text-align--left">
  Centered on mobile, left-aligned on tablet and up
</p>
```

## Breakpoints

| Breakpoint | Min-width |
|------------|-----------|
| `mobile` | 320px |
| `mobile-lg` | 481px |
| `tablet` | 640px |
| `medium-screen` | 768px |
| `desktop` | 1024px |
| `desktop-lg` | 1201px |
| `widescreen` | 1400px |
