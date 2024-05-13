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
  - anchor: Usage
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

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/form/">Refer to the U.S. Web Design System for usage guidance</a>

## Accessibility considerations for all form elements

{% include a11y/do-not-disable-buttons.md %}

## How to group form controls

* Group each set of thematically related controls in a `fieldset` element. Use the `legend` element as a heading within each one. The `fieldset` and `legend` elements make it easier for screen reader users to navigate the form.
* Use a single legend for fieldset (this is required). One example of a common use of `fieldset` and `legend` is a question with radio button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being inside the `legend` tag.
* Embed multiple fieldsets and legends for more complex forms if the form is not broken in separate chapters.
* Keep your form inputs and labels arranged vertically along the same Y axis. This approach is ideal, from an accessibility standpoint, because of limited vision that makes it hard to scan from right to left.

## Error handling

{% include components/label-errors.html %}

## Hint text

{% include components/hint-text.md %}