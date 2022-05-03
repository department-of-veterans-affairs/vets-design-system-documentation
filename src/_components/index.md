---
layout: default
title: Components
index: true
---

# Components

Some stuff here - deployed to dev?

<div class="va-introtext" markdown="1">
Components are interactive and non-interactive UI elements that can be grouped together or presented individually. They are independent, reusable chunks of a user interface.
</div>

## How are components different from patterns?

Components, as noted above, can be considered UI chunks, whereas patterns are design solutions to recurring problems. In Formation, components have a class prefix and patterns, typically built with a combination of components and utility classes, do not.

Components can be considered concrete, a finite list: buttons, accordions, tables, etc. Patterns might be unique to a site or or an application, and may evolve with changes in technology or after competitive analysis.

## Naming conventions

Components have class prefix of `c`, for *component*.

### Adding variants

Any variants to a component should use the BEM syntax. In Formation, you should include both the base class and the modifier class on an element.

```html
<button class="vads-c-button vads-c-button--small"></button>
```
