---
layout: documentation
title: Using CSS custom properties
permalink: /about/developers/using-custom-properties
has-parent: /about/developers/
intro-text: CSS custom properties (also called CSS variables) allow you to customize specific styles on VA Design System web components.
anchors:
  - anchor: What are CSS custom properties
  - anchor: Available custom properties
  - anchor: How to use custom properties
  - anchor: Naming convention
  - anchor: When to use custom properties
---

## What are CSS custom properties

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (also known as CSS variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--vads-color-primary: #0071bc;`) and are accessed using the `var()` function (e.g., `color: var(--vads-color-primary);`).

The VA Design System uses CSS custom properties to:

- **Define design tokens**: Colors, typography, spacing, and other foundational values
- **Enable customization**: Allow approved style overrides on specific components
- **Maintain consistency**: Ensure visual coherence across VA.gov applications

## Available custom properties

The VA Design System exposes CSS custom properties at two levels:

### Design tokens

Design tokens are the foundational values that define the visual language of VA.gov. These include:

- **Colors**: `--vads-color-primary`, `--vads-color-base`, `--vads-color-link`, etc.
- **Typography**: `--font-serif`, `--font-source-sans`, `--vads-font-size-*`
- **Spacing**: `--units-1`, `--units-2`, `--vads-spacing-*`
- **Line height**: `--vads-font-line-height-2`, `--vads-font-line-height-5`

You can find the full list of design tokens on the [Color palette](/foundation/color-palette) and [Typography](/foundation/typography) pages.

### Component-level custom properties

Some components expose specific CSS custom properties for approved style overrides. These properties follow a consistent naming convention and are documented in each component's [Storybook documentation](https://design.va.gov/storybook/?path=/docs/about-introduction--docs).

**Note:** Not all components have exposed custom properties. Only use custom properties that are explicitly documented for a given component.

## How to use custom properties

### Setting custom properties on a component

To customize a component's styles, set the custom property on the component element or a parent container:

```html
<style>
  va-button {
    --vads-c-button-background-color: #005ea2;
  }
</style>

<va-button text="Custom styled button"></va-button>
```

### Scoping custom properties

You can scope custom properties to specific instances:

```html
<style>
  .my-custom-section va-button {
    --vads-c-button-background-color: #005ea2;
  }
</style>

<div class="my-custom-section">
  <va-button text="Customized button"></va-button>
</div>

<va-button text="Default button"></va-button>
```

### Using design tokens in your styles

You can also use the design system's token variables in your own CSS:

```css
.my-custom-component {
  color: var(--vads-color-base);
  background-color: var(--vads-color-base-lightest);
  font-family: var(--font-source-sans);
  padding: var(--units-2);
}
```

## Naming convention

The VA Design System follows a naming convention based on the [Salesforce Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/) approach:

```
--[namespace]-[scope]-[component]-[element]-[category]-[property]-[attribute]-[state]
```

### Parts of the naming convention

| Part | Description | Example |
|------|-------------|---------|
| **Namespace** | Always `vads` for VA Design System | `--vads-...` |
| **Scope** | The type of token: `c` for component, `color` for colors | `--vads-c-...` or `--vads-color-...` |
| **Component** | The component name | `--vads-c-button-...` |
| **Element** | A specific part of the component (optional) | `--vads-c-button-icon-...` |
| **Category** | The category of the property: `sizing`, `color`, `spacing` | `--vads-c-button-sizing-...` |
| **Property** | The CSS property being customized | `--vads-c-button-sizing-height` |
| **Attribute** | Additional specification (optional) | `--vads-c-button-color-background-hover` |
| **State** | Component state like hover, focus, active (optional) | `--vads-c-button-color-border-focus` |

### Examples

```css
/* Component sizing */
--vads-c-button-sizing-height

/* Component color with state */
--vads-c-button-color-background-hover

/* Design token */
--vads-color-primary-darker
```

## When to use custom properties

### Use custom properties when

- **A component documents them**: Only use custom properties that are explicitly exposed by a component
- **You need approved customizations**: Custom properties represent sanctioned customization points
- **You want consistent theming**: Use design tokens to maintain visual consistency

### Do not use custom properties when

- **The property isn't documented**: Don't try to override styles that aren't exposed as custom properties
- **A component prop exists**: Prefer using component properties over CSS overrides when available
- **It breaks accessibility**: Never use custom properties in ways that reduce color contrast or harm accessibility

### Requesting new custom properties

If you need a customization point that isn't currently available, [submit a request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new/choose) to the Design System Team. Include:

1. The component you want to customize
2. The specific style property you need to change
3. The use case for the customization
4. Why existing component properties don't meet your needs

## Related

- [Color palette](/foundation/color-palette) - Design tokens for colors
- [Typography](/foundation/typography) - Design tokens for fonts and text
- [Spacing](/foundation/spacing-units) - Design tokens for spacing
- [Using Web Components](/about/developers/using-web-components) - Working with VA Design System web components
- [Storybook](https://design.va.gov/storybook/) - Component documentation including custom properties
