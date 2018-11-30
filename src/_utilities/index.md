---
layout: default
sub_section: index
title: Utilities
---

# Utilities

Utilities are helpful, usually single-property classes that can provide more flexibility into a design system at a high specificity. Designers and developers can use them to test new components or build prototypes without committing unnecessary one-time-use selectors into production.

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

Utilities should be given descriptive class names that clearly reflect their property.

**Bad**
```
.vads-u-mb5
```

**Good**
```
.vads-u-margin-bottom--5
```