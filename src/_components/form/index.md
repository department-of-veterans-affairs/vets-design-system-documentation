---
layout: component
permalink: /components/form/
title: Form
intro-text: "Form controls allow users to enter information."
sub-pages:
  - sub-page: Text inputs
  - sub-page: Number input
  - sub-page: Select
  - sub-page: Checkbox
  - sub-page: Radio button
  - sub-page: Date input
---

{% include _site-in-this-section.html %}

## How to group form controls

<div class="feature">
  <h3>Forms system documentation</h3>
  <p>The current forms library is considered a legacy product and is in maintenance mode. A new forms library is under development.</p>
  <p>View documentation for the current forms library for VA.gov on <a href="{{ site.forms_system_link }}">the platform website</a>.</p>
</div>

- Group each set of thematically related controls in a `fieldset` element. Use the `legend` element as a heading within each one. The `fieldset` and `legend` elements make it easier for screen reader users to navigate the form.
- Use a single legend for fieldset (this is required). One example of a common use of `fieldset` and `legend` is a question with radio button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being inside the `legend` tag.
- Embed multiple fieldsets and legends for more complex forms if the form is not broken in separate chapters.
- Keep your form inputs and labels arranged vertically along the same Y axis. This approach is ideal, from an accessibility standpoint, because of limited vision that makes it hard to scan from right to left.

## Hint text

When a detailed form input label is not enough to convey the meaning or purpose of the input, we have three options for including additional information:

### Inline with the label

This should be used in the case where the needed clarification is very short.

#### Example

<div class="site-showcase">
  <form class="usa-form">
    <label class="vads-u-margin-top--0" for="input-type-text">Street address (20 characters maximum)</label>
    <input class="usa-input" id="input-type-text" name="input-type-text" type="text">
  </form>
</div>

### As subtext beneath the label

This should be used in the case where the needed clarification is a little longer, but less than two sentences. These should likely not wrap more than twice for a total of three lines.

#### Example

<div class="site-showcase">
  <form class="usa-form">
    <label class="vads-u-margin-top--0" for="input-type-text">
      Case or docket number
      <span class="vads-u-color--gray-medium vads-u-display--block">
        You'll find this number on your case documents
      </span>
    </label>
    <input class="usa-input" name="input-type-text" type="text">
  </form>
</div>
