---
title: Padding
description: CSS classes for controlling internal spacing within elements.
sidebar_position: 14
---

# Padding

The padding utility modifies internal spacing within elements.

**CSS Property:** `padding`
**Responsive:** Yes

## All sides

Class format: `.vads-u-padding--[value]`

| Value | Size |
|-------|------|
| `0` | 0px |
| `1px` | 1px |
| `0p25` | 2px |
| `0p5` | 4px |
| `1` | 8px |
| `1p5` | 12px |
| `2` | 16px |
| `2p5` | 20px |
| `3` | 24px |
| `4` | 32px |
| `5` | 40px |
| `6` | 48px |
| `7` | 56px |
| `8` | 64px |
| `9` | 72px |

## Vertical padding

Class format: `.vads-u-padding-y--[value]`

Applies to both top and bottom.

## Horizontal padding

Class format: `.vads-u-padding-x--[value]`

Applies to both left and right.

## Individual sides

| Class pattern | Side |
|---------------|------|
| `.vads-u-padding-top--[value]` | Top only |
| `.vads-u-padding-bottom--[value]` | Bottom only |
| `.vads-u-padding-left--[value]` | Left only |
| `.vads-u-padding-right--[value]` | Right only |

## Responsive usage

```html
<div class="vads-u-padding--2 tablet:vads-u-padding--5 desktop-lg:vads-u-padding--9">
  Increasing padding at larger breakpoints
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
