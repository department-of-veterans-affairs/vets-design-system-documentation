---
layout: component
permalink: /components/form/date-input
has-parent: /components/form/
title: Date input
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/CA9FE309-1C2C-4ED2-A694-DEE858342A1A/canvas
intro-text: "Use the date input component to help users enter a date they would know or a date they can approximate."
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-date
---

## Examples

### Default
{% include storybook-preview.html story="components-va-date--default" link_text="va-date" %}

### Month/Year
{% include storybook-preview.html story="components-va-date--month-year" link_text="va-date month/year variant" %}

### With hint text
{% include storybook-preview.html story="components-va-date--with-hint-text" link_text="va-date with hint text" %}

### With a custom required message
{% include storybook-preview.html story="components-va-date--custom-required-message" link_text="va-date with a custom required message" %}

### Default with error
{% include storybook-preview.html story="components-va-date--error" link_text="va-date with error" %}

### With hint text and error
{% include storybook-preview.html story="components-va-date--with-hint-text-error" link_text="va-date with hint text and error" %}

### With custom validation
{% include storybook-preview.html story="components-va-date--custom-validation" link_text="va-date with custom validation" %}

## Usage

### When to use date input

- Use a month, day, year date input component for a date a user knows, like a date of birth or marriage.  (Example: July 21, 1992). 
- Use the [month year](#monthyear) variant for a date a user can approximate, like a date they graduated from high school or a GED equivalent. (Example: May 2010) 

### When to consider something else

If users are trying to schedule something, consider using a calendar picker.

**Note:** We do not currently have a calendar picker as part of the design system. For reference, visit the VA online scheduling tool (VAOS) to see an experimental version of a calendar picker. 

### How to use date inputs

- The component consists of two select boxes for month and day inputs and a text input for year input. For those components please check the usability guidance for select boxes and text inputs
- For the month select box, provide the user unabbreviated months to choose from. Example: January

### Validation
By default all date components have the following validation:
- Cannot have blank values
- Month and Day must be valid numbers
- The Year cannot fall outside of the range of 1900 through the current year plus 100 years

The option to add [custom validation](#with-custom-validation) is available as well.


{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

Follow text input and select box guidance. The component consists of two select boxes for month and day inputs and a text input for year input.