---
title: CSS
description: CSS naming conventions using BEM syntax for the VA Design System.
sidebar_position: 2
---

# CSS naming conventions

The VA.gov Design System establishes CSS naming conventions to provide clarity and scope, keep CSS specificity low, and allow for backwards compatibility with legacy code.

## Structure

The naming format follows: `[global namespace]-[class prefix]-[BEM syntax]`

Example: `.vads-c-component-name`

## Three required parts

### 1. Global namespace

The namespace is `vads` (Veterans Affairs Design System). This identifier distinguishes Design System classes from application-specific ones.

### 2. Class prefix

Prefixes indicate function:

| Prefix | Purpose |
|--------|---------|
| `c` | Component |
| `u` | Utility |
| `l` | Layout |

### 3. BEM syntax

BEM stands for **Block**, **Element**, **Modifier**.

**Block** (base component):
```css
.alert {}
```

**Element** (child components, using `__` separator):
```css
.alert__header {}
.alert__body {}
```

**Modifier** (variations, using `--` separator):
```css
.alert--success {}
.alert--error {}
```

## Complete example

```html
<div class="alert alert--success">
  <h2 class="alert__header">This is the alert heading</h2>
  <div class="alert__body">
    <p>This is some alert text</p>
  </div>
</div>
```

## Additional variants

| Variant | Format | Example |
|---------|--------|---------|
| Breakpoint prefix | `breakpoint:namespace-prefix-name` | `mobile-lg:vads-c-component-name` |
| JavaScript hook | `js:namespace-prefix-name` | `js:vads-c-component-name` |

## Legacy components

Some existing classes don't follow this convention due to origins in the U.S. Web Design System or early development. Any new components added to the Design System must use the naming convention.
