---
layout: component
permalink: /components/form/memorable-date
has-parent: /components/form/
title: Memorable date
research-title: Memorable Date
intro-text: "Three text fields are the easiest way for users to enter most dates."
status: use-deployed
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1360%3A82038&mode=design&t=TiJHClaf3VQ6wU6B-1
uswds-v3: default
web-component: va-memorable-date
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--default" link_text="va-memorable-date" %}

### Month select

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--with-month-select" link_text="va-memorable-date with month select" %}

### Extra hint text

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--extra-hint-text" link_text="va-memorable-date with extra hint text" %}

### Custom validation

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--custom-validation" link_text="va-memorable-date with custom validation" %}

### Forms pattern single default

{% include storybook-preview.html height="300px" story="uswds-va-memorable-date--forms-pattern-single-without-month-dropdown" link_text="va-memorable-date forms pattern single default " %}

### Forms pattern multiple

{% include storybook-preview.html height="300px" story="uswds-va-memorable-date--forms-pattern-multiple" link_text="va-memorable-date forms pattern multiple" %}

### Error

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--error" link_text="va-memorable-date error" %}

### Error with month select

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--error-with-month-select" link_text="va-memorable-date error with month select" %}

### Forms pattern single error

{% include storybook-preview.html height="300px" story="uswds-va-memorable-date--forms-pattern-single-error" link_text="va-memorable-date forms pattern single error" %}

### Forms pattern multiple error

{% include storybook-preview.html height="300px" story="uswds-va-memorable-date--forms-pattern-multiple-error" link_text="va-memorable-date forms pattern multiple error" %}

### Internationalization

{% include storybook-preview.html height="200px" story="uswds-va-memorable-date--internationalization" link_text="va-memorable-date internationalization" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/memorable-date/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Choosing between variations

* Unlike the USWDS, the default component uses a text input instead of a select input for the month. This was done after user testing showed inconsistencies between field types led to [challenges for users of  assistive technology](https://github.com/uswds/uswds/issues/5945). Teams should note the maturity of this component and proceed with caution.

### Errors

* Refer to the specific error examples above.

<va-link-action
  href="{{ site.baseurl }}/components/form/#error-handling"
  text="View form error handling for additional guidance"
  type="secondary"
></va-link-action>

### Hint text

*  During workflows where dates of life events, periods of service, and more, come in heavy multiples, the default hint text can be hidden using the `remove-date-hint` attribute.
* For adding extra hint text, refer to the [hint text example](#extra-hint-text) above.

<va-link-action
  href="{{ site.baseurl }}/components/form/label#hint-text"
  text="View label hint text for additional guidance"
  type="secondary"
></va-link-action>

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/memorable-date/#accessibility-memorable-date"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

{% include _component-checklist.html component_name=page.web-component %}