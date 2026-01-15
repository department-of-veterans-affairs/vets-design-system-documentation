---
title: Display
description: CSS classes to control an element's display property for layout and visibility.
sidebar_position: 4
---

# Display

The display utility modifies an element's CSS display property to control layout behavior and visibility.

**CSS Property:** `display`
**Responsive:** Yes

## Available classes

| Class | Description |
|-------|-------------|
| `.vads-u-display--block` | Sets display to block - starts on a new line and takes entire width |
| `.vads-u-display--inline` | Sets display to inline - height, width, margin, and padding have no effect |
| `.vads-u-display--inline-block` | Sets display to inline-block - can be arranged beside other elements, accepts height, width, margin, and padding |
| `.vads-u-display--flex` | Sets display to flex - behaves as a flex container |
| `.vads-u-display--none` | Sets display to none - hides visually and from screen readers |

## Usage example

```html
<div class="vads-u-display--none desktop-lg:vads-u-display--block">
  Hidden on mobile, visible on desktop-lg and above
</div>
```

This applies `display: none` on mobile devices and switches to `display: block` at the `desktop-lg` breakpoint, following mobile-first methodology.

## Responsive breakpoints

Prefix utilities with responsive breakpoint names using colon syntax:

| Breakpoint | Min-width |
|------------|-----------|
| `mobile` | 320px |
| `mobile-lg` | 481px |
| `tablet` | 640px |
| `medium-screen` | 768px |
| `desktop` | 1024px |
| `desktop-lg` | 1201px |
| `widescreen` | 1400px |

## Accessibility guidance

:::warning
The `.vads-u-display--none` class hides content from both visual users and screen readers. Use only when hiding is intentional for all users.

To hide visual elements while preserving screen reader access, use the [visibility utility](./visibility) instead.
:::
