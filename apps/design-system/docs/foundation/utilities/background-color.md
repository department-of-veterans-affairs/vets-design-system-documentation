---
title: Background color
description: CSS classes to modify an element's background color using the VA.gov color palette.
sidebar_position: 2
---

# Background color

The background color utility provides CSS classes to modify an element's background color using the VA.gov Design System's standardized color palette.

**CSS Property:** `background-color`
**Responsive:** Yes

## Available classes

### Base colors

| Class | Description |
|-------|-------------|
| `.vads-u-background-color--base` | Primary base color |
| `.vads-u-background-color--white` | White background |
| `.vads-u-background-color--black` | Black background |
| `.vads-u-background-color--orange` | Orange accent |
| `.vads-u-background-color--link-default` | Hyperlink color |
| `.vads-u-background-color--warning-message` | Warning state |

### Primary color variations

- `.vads-u-background-color--primary`
- `.vads-u-background-color--primary-dark`
- `.vads-u-background-color--primary-darker`
- `.vads-u-background-color--primary-alt`
- `.vads-u-background-color--primary-alt-dark`
- `.vads-u-background-color--primary-alt-darkest`
- `.vads-u-background-color--primary-alt-light`
- `.vads-u-background-color--primary-alt-lightest`

### Secondary color variations

- `.vads-u-background-color--secondary`
- `.vads-u-background-color--secondary-dark`
- `.vads-u-background-color--secondary-darkest`
- `.vads-u-background-color--secondary-light`
- `.vads-u-background-color--secondary-lightest`

### Grayscale

- `.vads-u-background-color--gray`
- `.vads-u-background-color--gray-dark`
- `.vads-u-background-color--gray-light`
- `.vads-u-background-color--gray-lightest`
- `.vads-u-background-color--gray-warm-dark`
- `.vads-u-background-color--gray-warm-light`
- `.vads-u-background-color--gray-cool-light`

### Hub-specific colors

Dedicated color classes for benefit categories:

- `.vads-u-background-color--hub-health-care`
- `.vads-u-background-color--hub-education`
- `.vads-u-background-color--hub-disability`
- `.vads-u-background-color--hub-careers`
- `.vads-u-background-color--hub-pension`
- `.vads-u-background-color--hub-records`
- `.vads-u-background-color--hub-housing`
- `.vads-u-background-color--hub-life-insurance`
- `.vads-u-background-color--hub-burials`
- `.vads-u-background-color--hub-family-members`
- `.vads-u-background-color--hub-service-members`

## Usage

Apply the desired class directly to HTML elements:

```html
<div class="vads-u-background-color--primary-alt-lightest">
  Content with light blue background
</div>
```

## Responsive

Use breakpoint prefixes for responsive backgrounds:

```html
<div class="vads-u-background-color--white desktop:vads-u-background-color--gray-lightest">
  White on mobile, light gray on desktop
</div>
```
