---
layout: component
permalink: /components/form/date-input
has-parent: /components/form/
title: Date Input
research-title: Form controls
intro-text: "Use the date input component to help users enter a date they would know or a date they can approximate."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to use
  - anchor: Accessibility considerations
web-component: va-date
---

{% include storybook-preview.html story="components-va-date--default" link_text="va-date" %}

## Usage

### When to use date inputs
- Use a month, day, year date input component for a date a user knows, like a date of birth or marriage.  (Example: July 21, 1992). 
- Use a month year date input component for a date a user can approximate, like a date they graduated from high school or a GED equivalent. (Example: May 2010) 

### When to consider something else

If users are trying to schedule something, consider using a calendar picker.

**Note:** We do not currently have a calendar picker as part of the design system. For reference, visit the VA online scheduling tool (VAOS) to see an experimental version of a calendar picker. 

### How to use date inputs

- The component consists of two select boxes for month and day inputs and a text input for year input. For those components please check the usability guidance for select boxes and text inputs
- For the month select box, provide the user unabbreviated months to choose from. Example: January

## Accessibility considerations

Follow text input and select box guidance. The component consists of two select boxes for month and day inputs and a text input for year input.

{% include component-docs.html component_name=page.web-component %}