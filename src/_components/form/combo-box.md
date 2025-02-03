---
layout: component
permalink: /components/form/combo-box
has-parent: /components/form/
title: Combo box
intro-text: "A combo box helps users select an item from a large list of options."
research-title: Form controls
status: use-with-caution-candidate
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1384%3A10963&mode=design&t=9GU46tVahgdMFZSW-1
uswds-v3: default
web-component: va-combo-box
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-combo-box--default" link_text="va-combo-box default" %}

### With Default Value

{% include storybook-preview.html story="uswds-va-combo-box--with-default-value" link_text="va-combo-box with default value" %}

### With Error

{% include storybook-preview.html story="uswds-va-combo-box--with-error" link_text="va-combo-box with error" %}

### Required

{% include storybook-preview.html story="uswds-va-combo-box--required" link_text="va-combo-box required" %}

### With Placeholder Text

{% include storybook-preview.html story="uswds-va-combo-box--with-placeholder-text" link_text="va-combo-box with placeholder text" %}

### With Hint Text

{% include storybook-preview.html story="va-combo-box--with-hint-text" link_text="va-combo-box with hint text" %}

### With Message Aria Described By

{% include storybook-preview.html story="uswds-va-combo-box--with-message-aria-described-by" link_text="uswds-va-combo-box with message aria described by" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/combo-box/">Refer to the U.S. Web Design System for usage guidance</a>

### When to use the Combo Box
* **When you have between 5 to 15 options.** Use the combo box when there are more than 5 options but less than 15 options.
* **When the options are known and memorable.** Use the combobox when the user will know what is in the dropdown like a list of countries or states. See the USWDS address pattern for an example.

### When to use something else
**More than 15 options.** When you have more than 15 options use the typeahead featured in the [Search Input](https://design.va.gov/components/search-input#usage) component.

### Errors

* Refer to the specific [error example](#error) above.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/#error-handling">
  View form error handling for additional guidance
</a>

### Hint text

* Refer to the [hint text example](#hint-text) above.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/label#hint-text">
  View label hint text for additional guidance
</a>

{% include component-docs.html component_name=page.web-component %}

### Behavior


{% include component-docs.html component_name=page.web-component %}

## Content considerations


## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/accordion/#accessibility-accordion">Refer to the U.S. Web Design System for accessibility guidance</a>

## Related

* [Additional info]({{ site.baseurl }}/components/additional-info)

{% include _component-checklist.html component_name=page.web-component %}