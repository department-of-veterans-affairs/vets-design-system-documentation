---
title: Margins
description: CSS classes for controlling spacing around elements.
sidebar_position: 12
---

# Margins

The margins utility provides CSS classes to control spacing around elements.

**CSS Property:** `margin`
**Responsive:** Yes

## All sides

Class format: `.vads-u-margin--[value]`

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

## Vertical margins

Class format: `.vads-u-margin-y--[value]`

Applies to both top and bottom. Supports positive and negative values (`neg0p25` to `neg9`) for overlap control.

## Horizontal margins

Class format: `.vads-u-margin-x--[value]`

Applies to both left and right. Supports positive values, negatives, and `auto` for centering.

## Individual sides

| Class pattern | Side |
|---------------|------|
| `.vads-u-margin-top--[value]` | Top only |
| `.vads-u-margin-bottom--[value]` | Bottom only |
| `.vads-u-margin-left--[value]` | Left only |
| `.vads-u-margin-right--[value]` | Right only |

## Responsive usage

```html
<div class="vads-u-margin--2 tablet:vads-u-margin--5 desktop-lg:vads-u-margin--9">
  Increasing margins at larger breakpoints
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
