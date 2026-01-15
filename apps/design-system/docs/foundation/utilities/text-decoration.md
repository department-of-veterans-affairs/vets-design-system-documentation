---
title: Text decoration
description: CSS classes for modifying text decoration (underline, strikethrough).
sidebar_position: 18
---

# Text decoration

Utility classes for modifying text decoration properties.

**CSS Property:** `text-decoration`
**Responsive:** Yes

## Available classes

| Class | Effect |
|-------|--------|
| `.vads-u-text-decoration--none` | Removes text decoration |
| `.vads-u-text-decoration--underline` | Applies underline |
| `.vads-u-text-decoration--line-through` | Applies strikethrough |

## Usage

```html
<a href="#" class="vads-u-text-decoration--none">
  Link without underline
</a>

<span class="vads-u-text-decoration--line-through">
  Strikethrough text
</span>
```

## Accessibility guidance

:::warning Link affordance
Underlines are an important link affordance for users who may experience difficulties perceiving contrast. Remove the underline from links only when the context clearly implies interaction.
:::

:::warning Emphasis
Do not use underlines for emphasis purposes, as underlines signal interactive elements. Use bold text formatting instead for emphasis.
:::
