---
layout: default
sub_section: index
title: Utilities
---

# Utilities

<div class="va-introtext">
Utilities are helpful, usually single-property classes that can provide more flexibility into a design system at a high specificity. Designers and developers can use them to test new components or build prototypes without committing unnecessary one-time-use selectors into production.
</div>.

## Using in components

Utility classes can be used in design system components to increase their modularity without requiring additional markup or modifier classes.

Some types of components may contain an unpredictable variety of layout and organization within. Rather than spending energy on semantic naming or building in anticipated iterations, it might be more practical to take advantage of utility classes.

### Overriding defaults

Design system components are built for maximum reusability. However, there are always cases where the spacing between two components or block-level elements create a visual distraction. In this case, you can use utility classes help make the margins between those two items just right.

## Built for consistency

Some of the utilities, such as margin and padding, are built to maintain a consistent horizontal and vertical rhythm. Rather than hard-coding pixel values, it is recommended to use either the utility classes or equivalent Sass variables.

## Utilities for designers

Designers should explore the available utilities in Formation. Because designs will be implemented with the styles in formation, knowledge of the utilities may assist in how designers describe their work.

## Naming

Be descriptive, use the global & utility prefixes, and avoid creating ambiguity in how one may interpret the utility class names.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Use descriptive class names that clearly indicate the associated CSS property.

#### Example
```css
.vads-u-margin-bottom--5
```
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
Don’t use acroynms or shorthand, ambiguous class names that do not clearly indicate the associated CSS property.

#### Example
```css
.vads-u-mb5
```
</div>
</div>
</div>
