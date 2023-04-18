---
layout: component
permalink: /components/form/checkbox
has-parent: /components/form/
title: Checkbox
research-title: Form controls
intro-text: "Allows users to select one or more items from a visible list."
status: use-deployed
anchors:
  - anchor: Examples - Single
  - anchor: Examples - Group
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-checkbox-group
---

## Examples - Single

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

### Error

{% include storybook-preview.html story="components-va-checkbox--error" link_text="va-checkbox error" %}

### Required

{% include storybook-preview.html story="components-va-checkbox--required" link_text="va-checkbox required" %}

### Internationalization

{% include storybook-preview.html story="components-va-checkbox--internationalization" link_text="va-checkbox internationalization" %}

## Examples - Group

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


## Usage

### When to use checkboxes
- When a user can select any number of choices from a set list.
- When a user needs to choose “yes” or “no” on only one option (use a stand-alone checkbox). For example, to toggle a setting on or off.
- When users need to see all the available options at a glance.

### When to consider something else
- If there are too many options to display on a mobile screen.
- If a user can only select one option from a list (use radio buttons instead).

### How to use 
- Users should be able to tap on or click on either the text label or the checkbox to select or deselect an option.
- List options vertically if possible; horizontal listings can make it difficult to tell which label pertains to which checkbox.
- Avoid using negative language in labels as they can be counterintuitive. For example, “I want to receive a promotional email” instead of “I don’t want to receive promotional email.”
- If you customize, make sure selections are adequately spaced for touch screens.

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


### Native Events

- The native onBlur event is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations
- Surround a related set of checkboxes with a `<fieldset>`. The` <legend>` provides context for the grouping. Do not use fieldset and legend for a single check.
- The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with `margin-left: -2rem; opacity: 0; position: absolute; left: auto;`.
- Each input should have a semantic `id` attribute, and its corresponding `label` should have the same value in it’s `for` attribute.
- The `title` attribute can replace `<label>`.