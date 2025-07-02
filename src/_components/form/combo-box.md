---
layout: component
permalink: /components/form/combo-box
has-parent: /components/form/
title: Combo box
intro-text: "A combo box helps users select an item from a large list of options."
research-title: Form controls
status: use-with-caution-candidate
figma-link: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=19200-2377
uswds-v3: default
web-component: va-combo-box
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-combo-box--default" link_text="va-combo-box default" height="300px" %}

### With default value

{% include storybook-preview.html story="uswds-va-combo-box--with-default-value" link_text="va-combo-box with default value" height="300px" %}

### With error

{% include storybook-preview.html story="uswds-va-combo-box--with-error" link_text="va-combo-box with error" height="300px" %}

### Required

{% include storybook-preview.html story="uswds-va-combo-box--required" link_text="va-combo-box required" height="300px" %}

### With placeholder text

{% include storybook-preview.html story="uswds-va-combo-box--with-placeholder-text" link_text="va-combo-box with placeholder text" height="300px" %}

### With hint text

{% include storybook-preview.html story="uswds-va-combo-box--with-hint-text" link_text="va-combo-box with hint text" height="300px" %}

### With message aria described by

{% include storybook-preview.html story="uswds-va-combo-box--with-message-aria-described-by" link_text="uswds-va-combo-box with message aria described by" height="300px" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/combo-box/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

{% include content/select-options.md %}

### Errors

* Refer to the specific [error example](#with-error) above.

<va-link-action
  href="{{ site.baseurl }}/components/form/#error-handling"
  text="View form error handling for additional guidance"
  type="secondary"
></va-link-action>

### Hint text

* Refer to the [hint text example](#with-hint-text) above.

<va-link-action
  href="{{ site.baseurl }}/components/form/label#hint-text"
  text="View label hint text for additional guidance"
  type="secondary"
></va-link-action>

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/combo-box/#accessibility-guidance"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

## Privacy guidance 
 {% include content/privacy-selection-fields.md %}

## Related

* [Select]({{ site.baseurl }}/components/form/select)
* [Radio button]({{ site.baseurl }}/components/form/radio-button)
* [Search input]({{ site.baseurl }}/components/search-input)

{% include _component-checklist.html component_name=page.web-component %}
