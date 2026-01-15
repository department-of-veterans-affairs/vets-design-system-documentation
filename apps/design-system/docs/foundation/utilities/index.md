---
title: Utilities
description: Single-property CSS classes that provide flexibility within the design system.
sidebar_position: 1
---

# Utilities

Utilities are helpful, usually single-property classes that can provide more flexibility into a design system at a high specificity. They enable designers and developers to test new components or build prototypes without creating unnecessary one-time-use selectors for production.

## Key applications

### For components

Utility classes increase modularity in design system components without requiring additional markup or modifier classes. They're particularly useful for components with unpredictable internal layouts.

### Overriding defaults

Utility classes help adjust spacing between components when visual distraction occurs from default spacing.

### Design consistency

Utilities like margin and padding maintain consistent horizontal and vertical rhythm by using design tokens and Sass variables rather than hard-coded pixel values.

## Available utilities

| Utility | Description |
|---------|-------------|
| [Background color](./background-color) | Set background colors |
| [Border](./border) | Add and style borders |
| [Display](./display) | Control display property |
| [Flexbox](./flexbox) | Flexbox layout utilities |
| [Font family](./font-family) | Set font families |
| [Font size](./font-size) | Control font sizes |
| [Font style](./font-style) | Set italic or normal styles |
| [Font weight](./font-weight) | Control font weights |
| [Height and width](./height-and-width) | Set dimensions |
| [Line height](./line-height) | Control line heights |
| [Margins](./margins) | Set margin spacing |
| [Measure](./measure) | Control text measure/line length |
| [Padding](./padding) | Set padding spacing |
| [Position](./position) | Control positioning |
| [Text align](./text-align) | Align text content |
| [Text color](./text-color) | Set text colors |
| [Text decoration](./text-decoration) | Add underlines, strikethroughs |
| [Visibility](./visibility) | Show or hide elements |

## Naming conventions

**Do:** Use descriptive names indicating the CSS property

```css
.vads-u-margin-bottom--5
```

**Don't:** Employ acronyms or ambiguous shorthand

```css
.vads-u-mb5
```
