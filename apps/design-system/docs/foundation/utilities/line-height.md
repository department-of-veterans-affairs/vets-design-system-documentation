---
title: Line height
description: CSS classes for controlling spacing between lines of text.
sidebar_position: 11
---

# Line height

The line height utility modifies the spacing between lines of text.

**CSS Property:** `line-height`
**Responsive:** Yes

## Available classes

| Class | Value | Purpose |
|-------|-------|---------|
| `.vads-u-line-height--1` | 1 | Tight spacing |
| `.vads-u-line-height--2` | 1.15 | Slightly increased spacing |
| `.vads-u-line-height--3` | 1.35 | Moderate spacing |
| `.vads-u-line-height--4` | 1.5 | Standard spacing |
| `.vads-u-line-height--5` | 1.62 | Generous spacing |
| `.vads-u-line-height--6` | 1.75 | Expanded spacing |
| `.vads-u-line-height--serif` | 1.9 | Serif-optimized spacing |
| `.vads-u-line-height--mono` | 1.7 | Monospace-optimized spacing |

## Responsive usage

Apply breakpoint prefixes using mobile-first methodology:

```html
<p class="vads-u-line-height--4 desktop:vads-u-line-height--5">
  Standard spacing on mobile, generous on desktop
</p>
```

## Supported breakpoints

| Breakpoint | Min-width |
|------------|-----------|
| `mobile` | 320px |
| `mobile-lg` | 481px |
| `tablet` | 640px |
| `medium-screen` | 768px |
| `desktop` | 1024px |
| `desktop-lg` | 1201px |
| `widescreen` | 1400px |
