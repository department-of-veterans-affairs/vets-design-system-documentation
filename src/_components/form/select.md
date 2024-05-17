---
layout: component
permalink: /components/form/select
has-parent: /components/form/
title: Select
intro-text: "A select component allows users to choose one option from a menu."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1377%3A93876&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-deployed
uswds-v3: default
web-component: va-select
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-select--default" link_text="va-select default" %}

### Required

{% include storybook-preview.html story="uswds-va-select--required" link_text="va-select required" %}

### With hint text

{% include storybook-preview.html story="uswds-va-select--with-hint-text" link_text="va-select with hint text" %}

### Read only

{% include storybook-preview.html story="uswds-va-select--read-only" link_text="va-select inert, or read only" %}

### Error

{% include storybook-preview.html story="uswds-va-select--error-message" link_text="va-select error message" %}

### Dynamic options

{% include storybook-preview.html story="uswds-va-select--dynamic-options" link_text="va-select dynamic options" %}

### Internationalization

{% include storybook-preview.html story="uswds-va-select--internationalization" link_text="va-select internationalization" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/select/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### Additional reasons to consider something else

**More than 15 options.** If the list of options is very long, we do not yet have the combo box component in our system thus an alternative is to use functionality that allows users to type the same information into a text input that suggests possible options instead as seen in our [search input]({{ site.baseurl }}/components/search-input) component.

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

### Native Events

- The native onKeyDown event is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/select/#accessibility-select">Refer to the U.S. Web Design System for accessibility guidance</a>

{% include _component-checklist.html component_name=page.web-component %}