---
layout: component
permalink: /components/form/checkbox
has-parent: /components/form/
title: Checkbox
research-title: Form controls
intro-text: "Allows users to select one or more items from a visible list."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-checkbox-group
---

{% include storybook-preview.html height="200px" story="components-va-checkbox-group--default" link_text="va-checkbox-group" %}

{% include storybook-preview.html height="200px" story="components-va-checkbox-group--single-checkbox" link_text="va-checkbox-group" %}

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

### Native Events

- The native event of onBlur is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations
- Surround a related set of checkboxes with a `<fieldset>`. The` <legend>` provides context for the grouping. Do not use fieldset and legend for a single check.
- The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with `margin-left: -2rem; opacity: 0; position: absolute; left: auto;`.
- Each input should have a semantic `id` attribute, and its corresponding `label` should have the same value in it’s `for` attribute.
- The `title` attribute can replace `<label>`.