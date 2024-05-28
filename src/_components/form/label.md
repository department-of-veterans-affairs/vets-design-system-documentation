---
layout: component
permalink: /components/form/label
has-parent: /components/form/
title: Label
intro-text: Labels associate a descriptive title with each form input used to collect information from the user.
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
---

## Examples

Examples shown here use the [va-text-input component]({{ site.baseurl }}/components/forms/text-input) to demonstrate form labels. Labels are used consistently across standard form components.

### Default

{% include storybook-preview.html story="uswds-va-text-input--default" link_text="Label default" %}

### Required

{% include storybook-preview.html story="uswds-va-text-input--required" link_text="Label required" %}

## Usage

### When to use label

* **All form inputs must have a label.** All standard form inputs must have an associated label. Thus the label elements is built into our standard form components.

### How this component works

* **Show whether a field is required or optional.** Mark required fields using the required property on the web component.

### Error handling

{% include components/label-errors.html %}

### Hint text

{% include components/hint-text.md %}

## Content considerations

### Standardized labels by form pattern

We're in the process of standardizing form field labels and their related hint text and error messages. We'll add to this list as we build out the set of standardized labels.

### Ask uses for...

* [Addresses](https://design.va.gov/patterns/ask-users-for/addresses#content-considerations)
* [Dates](https://design.va.gov/patterns/ask-users-for/dates#content-considerations)
* [Email address](https://design.va.gov/patterns/ask-users-for/email-address#content-considerations)
* [Names](https://design.va.gov/patterns/ask-users-for/names#content-considerations)
* [Phone numbers](https://design.va.gov/patterns/ask-users-for/phone-numbers#content-considerations)
* [Social Security or VA file number](https://design.va.gov/patterns/ask-users-for/social-security-number#content-considerations)
