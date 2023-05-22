---
layout: component
permalink: /components/form/radio-button
has-parent: /components/form/
title: Radio button
research-title: Form controls
intro-text: "Radio buttons allow users to see all available choices at once and select exactly one option."
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-radio
---

## Examples

### Default

{% include storybook-preview.html story="components-va-radio--default" link_text="va-radio" %}

### Hint text

{% include storybook-preview.html story="components-va-radio--with-hint-text" link_text="va-radio with hint text" %}

### Label header

{% include storybook-preview.html story="components-va-radio--label-header" link_text="va-radio with label header" %}

### Description text

{% include storybook-preview.html story="components-va-radio--with-description-text" link_text="va-radio with description text" %}

### Tile

{% include storybook-preview.html height="250px" story="components-va-radio--tile" link_text="va-radio tile" %}

### Error

{% include storybook-preview.html story="components-va-radio--error" link_text="va-radio error" %}

### Internationalization

{% include storybook-preview.html height="200px" story="components-va-radio--internationalization" link_text="va-radio internationalization" %}

## Usage

### When to use radio buttons
- When users need to select only one option out of a set of mutually exclusive choices.
- When the number of available options can fit onto a mobile screen.
* Use the [Hint text](#hint-text) variation to provide additional information that pertains to the question being asked or all of the options presented.
* Use the [Label header](#label-header) variation when a heading is required within the `legend` that acts as a label for the radio buttons. This can aid users in navigating the form questions, particularly in the [sub-task pattern]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task)
* Use the [Description text](#description-text) variation to provide additional details about one or more radio button options. This variation is superseded by the Tile variation.
* Use the [Tile](#tile) variation to provide additional details about one or more radio button options within a large and well defined tap target. 

### When to consider something else

- Use checkboxes if users need to select more than one option or if there is only one item to select.
- Consider a dropdown if you don’t have enough space to list out all available options.
- If users should be able to select none of the options.

### How to use

- **Use the label as a target.** Users should be able to tap on or click on either the text "label" or the radio button to select or deselect an option.
- **List items vertically.** Vertically-listed options are easier to read than those that are listed horizontally. A horizontal layout can make it difficult to tell which label belongs to which radio button.
- **Set default values with caution.** Setting a default value can bias a decision, seem pushy, or alienate users who don’t fit your assumptions. Only use a default selection if you have data to back it up.
- **Variations cannot be mixed.** Different variations cannot be mixed within a single set of radio buttons.
- **Use a logical order.** Make sure the selection options are organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they’re looking for.


### Errors

* Radio buttons typically appear inside of `<fieldset>`s. The class name of `usa-input-error` may be placed on the `<fieldset>` that contains all of the radio buttons.
* The error message is placed just below the `<legend>`.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

{% include snippet.html content='html/error-radio-buttons.html' %}

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- **Use fieldset and legend.** Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- **Use proper labels and attributes.** Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.
