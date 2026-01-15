---
title: Measure
description: CSS classes for setting maximum width using character units.
sidebar_position: 13
---

# Measure

The measure utility sets maximum width constraints using character units (`ch`) rather than pixels. This ensures that line length scales proportionally with font size for optimal readability.

**CSS Property:** `max-width`
**Responsive:** Yes

## Available classes

| Class | Width | Use case |
|-------|-------|----------|
| `.vads-u-measure--1` | 40ch | Narrow measure for tight layouts |
| `.vads-u-measure--2` | 60ch | Standard measure |
| `.vads-u-measure--3` | 66ch | Reading-optimized width |
| `.vads-u-measure--4` | 72ch | Wider measure |
| `.vads-u-measure--5` | 77ch | Maximum readable width |
| `.vads-u-measure--none` | none | Remove width constraints |

## Usage

```html
<p class="vads-u-measure--3">
  This paragraph has a reading-optimized line length of 66 characters.
</p>
```

## Responsive usage

```html
<div class="vads-u-measure--2 desktop:vads-u-measure--4">
  Narrow on mobile, wider on desktop
</div>
```

## Why use character units?

Character units (`ch`) are based on the width of the "0" character in the current font. This ensures readable line lengths regardless of font size, improving accessibility and readability across different contexts.
