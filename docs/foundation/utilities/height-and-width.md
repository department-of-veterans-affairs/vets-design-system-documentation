---
title: Height and width
description: CSS classes for controlling element dimensions.
sidebar_position: 10
---

# Height and width

Utility classes to control element dimensions. All classes support responsive prefixes for breakpoint-specific adjustments.

**CSS Property:** `height`, `width`, `min-height`, `max-height`, `min-width`, `max-width`
**Responsive:** Yes

## Height classes

| Class | Value | Purpose |
|-------|-------|---------|
| `.vads-u-height--0` | 0px | Remove height |
| `.vads-u-height--full` | 100% | Match container height |
| `.vads-u-height--auto` | auto | Use content height |
| `.vads-u-height--viewport` | 100vh | Match viewport height |

## Min-height classes

| Class | Value | Purpose |
|-------|-------|---------|
| `.vads-u-min-height--none` | none | Remove constraint |
| `.vads-u-min-height--viewport` | 100vh | Enforce viewport minimum |

## Max-height classes

| Class | Value | Purpose |
|-------|-------|---------|
| `.vads-u-max-height--none` | none | Remove constraint |
| `.vads-u-max-height--viewport` | 100vh | Prevent exceeding viewport |

## Width classes

| Class | Value | Purpose |
|-------|-------|---------|
| `.vads-u-width--0` | 0px | Remove width |
| `.vads-u-width--full` | 100% | Match container width |
| `.vads-u-width--auto` | auto | Use content width |

## Min-width and max-width classes

| Class | Value | Purpose |
|-------|-------|---------|
| `.vads-u-min-width--none` | none | Remove constraint |
| `.vads-u-max-width--none` | none | Remove constraint |
| `.vads-u-max-width--100` | 100% | Prevent overflow |

## Responsive usage

```html
<div class="vads-u-width--full desktop-lg:vads-u-width--auto">
  Full width on mobile, auto on desktop-lg
</div>
```

Supported breakpoints: `mobile`, `mobile-lg`, `tablet`, `medium-screen`, `desktop`, `desktop-lg`, `widescreen`
