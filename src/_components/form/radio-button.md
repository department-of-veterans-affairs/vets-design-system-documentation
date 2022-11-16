---
layout: component
permalink: /components/form/radio-button
has-parent: /components/form/
title: Radio button
research-title: Form controls
intro-text: "Radio buttons allow users to see all available choices at once and select exactly one option."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-radio
---

{% include storybook-preview.html height="200px" story="components-va-radio--default" link_text="va-radio" %}

## Usage

### When to use radio buttons
- When users need to select only one option out of a set of mutually exclusive choices.
- When the number of available options can fit onto a mobile screen.

### When to consider something else
- Consider checkboxes if users need to select more than one option or if there is only one item to select.
- Consider a dropdown if you don’t have enough space to list out all available options.
- If users should be able to select zero of the options.

### How to use
- Users should be able to tap on or click on either the text "label" or the radio button to select or deselect an option.
- Options that are listed vertically are easier to read than those that are listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which radio button.
- If you customize, make sure selections are adequately spaced for touch screens.
- Use caution if you decide to set a default value. Setting a default value can discourage users from making conscious decisions, seem pushy, or alienate users who don’t fit into your assumptions. If you are unsure, leave nothing selected by default.

### Errors

* Radio buttons typically appear inside of `<fieldset>`s. The class name of `usa-input-error` may be placed on the `<fieldset>` that contains all of the radio buttons.
* The error message is placed just below the `<legend>`.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

<div class="site-showcase">
{% include_relative html/error-radio-buttons.html %}
</div>

{% include snippet.html content='html/error-radio-buttons.html' %}

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.
