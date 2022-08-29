---
layout: component
permalink: /components/form/
title: Form
inner-title: Overview
intro-text: "Form controls allow users to enter information."
status: use-deployed
sub-pages:
  - sub-page: Checkbox
  - sub-page: Date input
  - sub-page: Memorable date
  - sub-page: File input
  - sub-page: Label
  - sub-page: Input message
  - sub-page: Number input
  - sub-page: Progress bar - Segmented
  - sub-page: Radio button
  - sub-page: Select
  - sub-page: Text input
  - sub-page: Textarea
anchors:
  - anchor: Accessibility considerations for all form elements
  - anchor: Error handling
  - anchor: How to group form controls
  - anchor: Hint text
---

{% include _site-in-this-section.html %}

<va-featured-content>
  <h3 slot="headline">Forms system documentation</h3>
  <p>The current forms library is considered a legacy product and is in maintenance mode. A new forms library is under development.</p>
  <p>View documentation for the current forms library for VA.gov on <a href="{{ site.forms_system_link }}">the platform website</a>.</p>
</va-featured-content>

## Accessibility considerations for all form elements

{% include a11y/do-not-disable-buttons.md %}

## How to group form controls

- Group each set of thematically related controls in a `fieldset` element. Use the `legend` element as a heading within each one. The `fieldset` and `legend` elements make it easier for screen reader users to navigate the form.
- Use a single legend for fieldset (this is required). One example of a common use of `fieldset` and `legend` is a question with radio button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being inside the `legend` tag.
- Embed multiple fieldsets and legends for more complex forms if the form is not broken in separate chapters.
- Keep your form inputs and labels arranged vertically along the same Y axis. This approach is ideal, from an accessibility standpoint, because of limited vision that makes it hard to scan from right to left.

## Error handling

<div class="site-showcase">
{% include_relative html/error-text-inputs.html %}
</div>
{% include snippet.html content='html/error-text-inputs.html' %}

In all cases, only show error validation messages or stylings after a user has interacted with a particular field.

In general, when there is an error on a form, a few things must happen.

* The form field and its corresponding `<label>` are wrapped in a container with a class name of `usa-input-error`. This will provide a thick border and padding to visual indicate an error message to users who might have difficulty perceiving contrast. It also changes the border of the input to red as a secondary indicator.
* An error message is placed between the label and the form field.
* The form field receives an `aria-describedby` attribute that references the `id` of the error message.
* Prepending `<span class="sr-only">Error</span>` to error messages alerts screen screen readers clearly that an error exists.

The HTML for a typical error is:

```html
<span class="usa-input-error-message undefined" role="alert" id="file-input-149-error-message">
  <span class="sr-only">Error</span>
  Error message
</span>
```

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/patterns/help-users-to/recover-from-errors">Review the help users to recover from errors pattern</a>

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
