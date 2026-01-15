---
title: Visibility
description: CSS classes for controlling how elements are displayed or hidden.
sidebar_position: 19
---

# Visibility

The visibility utility controls how elements are displayed or hidden.

**CSS Property:** `visibility`
**Responsive:** Yes

## Available classes

| Class | Effect |
|-------|--------|
| `.vads-u-visibility--hidden` | Conceals element while preserving its space in the layout |
| `.vads-u-visibility--visible` | Reveals a previously hidden element |
| `.vads-u-visibility--screen-reader` | Hides visual content while keeping it accessible to assistive technology |

## Usage

```html
<div class="vads-u-visibility--hidden">
  Hidden but takes up space
</div>

<span class="vads-u-visibility--screen-reader">
  Only announced by screen readers
</span>
```

## Visibility vs Display

| Need | Use |
|------|-----|
| Hide visually but keep in layout | `.vads-u-visibility--hidden` |
| Hide from everyone and remove from layout | `.vads-u-display--none` |
| Hide visually but accessible to screen readers | `.vads-u-visibility--screen-reader` |

:::tip
Consider using [display utilities](./display) if you need to hide an element visually and from screen readers while removing it from the page flow entirely.
:::

## Responsive usage

```html
<div class="vads-u-visibility--hidden desktop-lg:vads-u-visibility--visible">
  Hidden on mobile, visible on desktop-lg and up
</div>
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
