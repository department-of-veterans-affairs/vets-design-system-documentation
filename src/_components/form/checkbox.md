---
layout: component
permalink: /components/form/checkbox
has-parent: /components/form/
title: Checkbox
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/AB01082F-B8AE-4D0A-A3FD-5B8EDEB578CD/canvas
intro-text: "Allows users to select one or more items from a list. Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list."
status: use-deployed
uswds-v3: default
web-component: va-checkbox-group
anchors:
  - anchor: Examples - Single - v1
  - anchor: Examples - Single - v3
  - anchor: Examples - Group - v1
  - anchor: Examples - Group - v3
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples - Single - v1

### Default

{% include storybook-preview.html story="components-va-checkbox--default" link_text="va-checkbox" %}

### Checked

{% include storybook-preview.html story="components-va-checkbox--checked" link_text="va-checkbox checked" %}

### Hint text

{% include storybook-preview.html story="components-va-checkbox--with-hint-text" link_text="va-checkbox with hint text" %}

### Description String

{% include storybook-preview.html story="components-va-checkbox--with-description-string" link_text="va-checkbox with description string" %}

### Description JSX

{% include storybook-preview.html story="components-va-checkbox--with-description-jsx" link_text="va-checkbox with description JSX" %}

### Tile

{% include storybook-preview.html story="components-va-checkbox--tile" link_text="va-checkbox tile" %}

### Error

{% include storybook-preview.html story="components-va-checkbox--error" link_text="va-checkbox error" %}

### Required

{% include storybook-preview.html story="components-va-checkbox--required" link_text="va-checkbox required" %}

### Internationalization

{% include storybook-preview.html story="components-va-checkbox--internationalization" link_text="va-checkbox internationalization" %}

## Examples - Single - v3

### Default

{% include storybook-preview.html story="uswds-va-checkbox--default" link_text="va-checkbox v3 default and additional variations" %}

## Examples - Group - v1

### Default

{% include storybook-preview.html height="140px" story="components-va-checkbox-group--default" link_text="va-checkbox-group default" %}

### Hint text

{% include storybook-preview.html story="components-va-checkbox-group--with-hint-text" link_text="va-checkbox group with hint text" %}

### Error

{% include storybook-preview.html story="components-va-checkbox-group--error" link_text="va-checkbox group error" %}

### Required

{% include storybook-preview.html story="components-va-checkbox-group--required" link_text="va-checkbox group required" %}

### Single checkbox

{% include storybook-preview.html story="components-va-checkbox-group--single-checkbox" link_text="va-checkbox group single checkbox" %}

### Internationalization

{% include storybook-preview.html story="components-va-checkbox-group--internationalization" link_text="va-checkbox group internationalization" %}

## Examples - Group - v3

### Default

{% include storybook-preview.html story="uswds-va-checkbox-group--default" link_text="va-checkbox-group v3 default and additional variations" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/checkbox/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### When to consider something else

- If there are too many options to display on a mobile screen.
- If a user can only select one option from a list (use radio buttons instead).

### Errors

* Checkbox groups typically appear inside of `<fieldset>`s. The class name of `usa-input-error` may be placed on the `<fieldset>` that contains all of the checkboxes.
* The error message is placed just below the `<legend>`.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

<div class="site-showcase">
{% include_relative html/error-checkbox.html %}
</div>

{% include snippet.html content='html/error-checkbox.html' %}

#### Error message with a checkbox group

<div class="site-showcase">
{% include_relative html/error-checkbox-group.html %}
</div>

{% include snippet.html content='html/error-checkbox-group.html' %}


{% include component-docs.html component_name=page.web-component %}

### Native Events

- The native onBlur event is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/checkbox/#accessibility-checkbox">Refer to the U.S. Web Design System for accessibility guidance</a>