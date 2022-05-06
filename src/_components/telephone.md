---
layout: component
title: Telephone
status: use-best-practice
intro-text: "The telephone component captures the many variations of phone numbers displayed on VA.gov." 
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-telephone
---

By default, `va-telephone` components are clickable with a link and accept a value of 3 or 10 digits, however, props can be added to provide them with an extension, make them non-clickable, and have an international phone number indicator.

The `va-telephone` component also follows the guidelines set for <a href="{{ site.baseurl }}/content-style-guide/dates-and-numbers#phone-numbers">phone numbers</a>.

## Examples

### Default

{% include storybook-preview.html story="components-va-telephone--default" height="80px" %}

### Three Digit Number

{% include storybook-preview.html story="components-va-telephone--three-digit-number" height="80px" %}

### Extension

{% include storybook-preview.html story="components-va-telephone--extension" height="80px" %}

### Not Clickable

{% include storybook-preview.html story="components-va-telephone--not-clickable" height="80px" %}

### International

{% include storybook-preview.html story="components-va-telephone--international" height="80px" %}

### Aria Described By

{% include storybook-preview.html story="components-va-telephone--aria-described-by" height="80px" %}

### Vanity Number

{% include storybook-preview.html story="components-va-telephone--vanity-number" height="80px" %}

## Usage

### When to use va-telephone

- When a phone number is to be shown on a page.

### When to consider something else

- The link text is not a phone number.

### How to use va-telephone

- Add a 3 or 10 digit phone number to the component to have it formatted correctly for usage in a page.
- If the phone number should have an `extension`, be `non-clickable`, or represent an `international` number, additional props can be added to accommodate.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- By default an `aria-label` will be created based off of the context entered into the component and will be formatted as a combined phone number parts within the label separated by periods, e.g. "800-555-1212" becomes "8 0 0. 5 5 5. 1 2 1 2"
- If the `non-clickable` prop is enabled `aria-hidden="true"` will be added to the span element containing the  number and a `sr-only` css class will be added to the span element displaying the number in the `aria-label` format as shown above. 