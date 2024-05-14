---
layout: component
permalink: /components/form/checkbox
has-parent: /components/form/
title: Checkbox
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=35%3A178&mode=design&t=TiJHClaf3VQ6wU6B-1
intro-text: "Allows users to select one or more items from a list. Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list."
status: use-deployed
uswds-v3: default
web-component: va-checkbox-group
anchors:
  - anchor: Examples - Single
  - anchor: Examples - Group
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples - Single

### Default

{% include storybook-preview.html story="uswds-va-checkbox--default" link_text="va-checkbox" %}

### Tile

{% include storybook-preview.html story="uswds-va-checkbox--tile" link_text="va-checkbox tile" %}

### Checked

{% include storybook-preview.html story="uswds-va-checkbox--checked" link_text="va-checkbox checked" %}

### Hint text

{% include storybook-preview.html story="uswds-va-checkbox--with-hint-text" link_text="va-checkbox with hint text" %}

### Description String

{% include storybook-preview.html story="uswds-va-checkbox--with-description-string" link_text="va-checkbox with description string" %}

### Description JSX

{% include storybook-preview.html story="uswds-va-checkbox--with-description-jsx" link_text="va-checkbox with description JSX" %}

### On background

{% include storybook-preview.html story="uswds-va-checkbox--on-background" link_text="va-checkbox on a background" %}

### Error

{% include storybook-preview.html story="uswds-va-checkbox--error" link_text="va-checkbox error" %}

### Required

{% include storybook-preview.html story="uswds-va-checkbox--required" link_text="va-checkbox required" %}

### Internationalization

{% include storybook-preview.html story="uswds-va-checkbox--internationalization" link_text="va-checkbox internationalization" %}

## Examples - Group

### Default

{% include storybook-preview.html height="200px" story="uswds-va-checkbox-group--default" link_text="va-checkbox-group default" %}

### Label header

{% include storybook-preview.html story="uswds-va-checkbox-group--label-header" link_text="va-checkbox group label header" height="250px" %}

### Hint text

{% include storybook-preview.html story="uswds-va-checkbox-group--with-hint-text" link_text="va-checkbox group with hint text" %}

### Required

{% include storybook-preview.html story="uswds-va-checkbox-group--required" link_text="va-checkbox group required" %}

### Single checkbox

{% include storybook-preview.html story="uswds-va-checkbox-group--single-checkbox" link_text="va-checkbox group single checkbox" %}

### Tile

{% include storybook-preview.html story="uswds-va-checkbox-group--tile" link_text="va-checkbox group tile" %}

### Forms pattern - Single

{% include storybook-preview.html story="uswds-va-checkbox-group--forms-pattern-single" link_text="va-checkbox group forms pattern single" height="600px" %}

### Forms pattern - Single error

{% include storybook-preview.html story="uswds-va-checkbox-group--forms-pattern-single-error" link_text="va-checkbox group forms pattern single error" height="600px" %}

### Forms pattern - Multiple

{% include storybook-preview.html story="uswds-va-checkbox-group--forms-pattern-multiple" link_text="va-checkbox group forms pattern multiple" height="600px" %}

### Error

{% include storybook-preview.html story="uswds-va-checkbox-group--error" link_text="va-checkbox group error" %}

### Internationalization

{% include storybook-preview.html story="uswds-va-checkbox-group--internationalization" link_text="va-checkbox group internationalization" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/checkbox/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### When to consider something else

* If there are too many options to display on a mobile screen.
* If a user can only select one option from a list (use radio buttons instead).

{% include content/conditionally-revealed-fields.md %}

### Errors

* Refer to the specific error examples above.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/#error-handling">
  View form error handling for additional guidance
</a>
  
### Hint text

* Refer to the [hint text example](#hint-text) above.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/label#hint-text">
  View label hint text for additional guidance
</a>

{% include component-docs.html component_name=page.web-component %}

{% include content/using-message-aria-describedby.md %}

### Native Events

The native onBlur event is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/checkbox/#accessibility-checkbox">Refer to the U.S. Web Design System for accessibility guidance</a>