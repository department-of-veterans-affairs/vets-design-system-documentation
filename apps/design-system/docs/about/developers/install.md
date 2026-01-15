---
title: Install
description: How to install and set up the VA Design System packages.
sidebar_position: 2
---

# Installation

The VA Design System provides two main packages: the CSS-Library (stylesheets, tokens, utilities) and the Web Component library (reusable components).

## CSS-Library installation

### Install the package

```bash
yarn add @department-of-veterans-affairs/css-library
```

### Import CSS files

```scss
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/core";
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/uswds-typography";
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/utilities";
```

### Font setup

Configure font paths from the CSS-Library `fonts/` directory using SCSS variables and @font-face declarations for Source Sans Pro and other typefaces.

## Key CSS features

| Feature | Description |
|---------|-------------|
| Utilities | Single-property classes for flexible inline styling |
| Tokens | Available in CSS, SCSS, and JSON formats |
| Modules | Legacy stylesheets (Web Components recommended) |

### Recommended approach

Load CSS custom properties globally and reference via variables:

```css
color: var(--vads-color-base);
```

## Web Component library setup

### Install the package

```bash
yarn add @department-of-veterans-affairs/component-library
```

### Import CSS

```javascript
import "@department-of-veterans-affairs/component-library/dist/main.css";
```

### Initialize components

```javascript
import { defineCustomElements } from "@department-of-veterans-affairs/component-library";

defineCustomElements();
```

## Icons sprite sheet

The sprite sheet loads from `/img/sprite.svg` by default. Include the file from `/dist/img/sprite.svg` in your build process.

Override the path if needed:

```javascript
import { setVaIconSpriteLocation } from "@department-of-veterans-affairs/component-library";

setVaIconSpriteLocation("/custom/path/sprite.svg");
```

## Integration examples

Pre-built examples are available for:
- Vite + React + TypeScript
- CodeSandbox
- CodePen

These examples demonstrate setup for frameworks outside vets-website.
