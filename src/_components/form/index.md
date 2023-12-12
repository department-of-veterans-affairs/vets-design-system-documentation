---
layout: component
permalink: /components/form/
title: Form
inner-title: Overview
intro-text: "Form controls allow users to enter information."
status: use-deployed
sub-pages:
  - sub-page: Autosave
  - sub-page: Checkbox
  - sub-page: Date input
  - sub-page: Memorable date
  - sub-page: File input
  - sub-page: Input message
  - sub-page: Label
  - sub-page: Need help?
  - sub-page: Number input
  - sub-page: Penalty notice
  - sub-page: Prefill
  - sub-page: Privacy Agreement
  - sub-page: Progress bar - Segmented
  - sub-page: Radio button
  - sub-page: Select
  - sub-page: Statement of truth
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

When a detailed form input label is not enough to convey the meaning or purpose of the input, we have three options for including additional context:

1. [Beneath the label (default)](#default-hint-text)
2. [Inline within the label](#inline-within-the-label)
3. [Additional info](#additional-info)

### Default hint text

{% include component-example.html alt="The text-input component with hint text." file="/images/components/text-input/text-input-with-hint-text.png" caption="Hint text appears between the label and text-input field." width="50%" %}

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

This should be used in the case where the needed clarification is a little longer, but less than two sentences. These should ideally not wrap more than twice for a total of three lines.

### Inline within the label

<div class="site-showcase">
  <form class="usa-form">
    <label class="vads-u-margin-top--0" for="input-type-text">Street address (20 characters maximum)</label>
    <input class="usa-input" id="input-type-text" name="input-type-text" type="text">
  </form>
</div>

This should be used in the case where the needed clarification is very short.

### With Additional info

{% include storybook-preview.html story="components-va-text-input--with-hint-text" link_text="va-text-input--with-hint-text" %}

Using the [additional info]({{ site.baseurl }}/components/additional-info) component should only be done in cases where the needed clarification is long, complex, requiring more than two sentences or multiple paragraphs, or special formatting (bullet points, links, etc.). 

We want to avoid this variation when possible. Use of this component for this purpose is a last resort when attempts at reducing the content have failed. If a field needs a lot of explanation, it should ideally be moved to a distinct page with explanation on the page itself. 
