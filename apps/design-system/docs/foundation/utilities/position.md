---
title: Position
description: CSS classes for controlling element positioning behavior.
sidebar_position: 15
---

# Position

The position utility modifies element positioning behavior, controlling how elements are rendered in the document flow.

**CSS Property:** `position`
**Responsive:** Yes

## Available classes

| Class | Behavior |
|-------|----------|
| `.vads-u-position--absolute` | Removed from document flow, positioned relative to nearest positioned ancestor |
| `.vads-u-position--relative` | Positioned according to normal flow, then offset relative to itself |
| `.vads-u-position--fixed` | Removed from document flow, positioned relative to viewport |
| `.vads-u-position--static` | Default positioning in normal document flow |

## Usage

```html
<div class="vads-u-position--relative">
  <div class="vads-u-position--absolute">
    Absolutely positioned child
  </div>
</div>
```

## Responsive usage

```html
<div class="vads-u-position--relative desktop:vads-u-position--absolute">
  Relative on mobile, absolute on desktop
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
| `widescreen` | 1400px |
