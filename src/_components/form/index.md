---
layout: component
permalink: /components/form/
title: Form
inner-title: Overview
intro-text: "Form controls allow users to enter information."
status: use-deployed
web: true
mobile-app: true
sub-pages:
  - sub-page: Autosave
  - sub-page: Checkbox
  - sub-page: Combo box
  - sub-page: Date input
  - sub-page: Memorable date
  - sub-page: File input
  - sub-page: Input message
  - sub-page: Label
  - sub-page: Need help?
  - sub-page: Penalty notice
  - sub-page: Prefill
  - sub-page: Privacy Agreement
  - sub-page: Progress bar - Segmented
  - sub-page: Radio button
  - sub-page: Select
  - sub-page: Statement of truth
  - sub-page: Telephone Input
  - sub-page: Text input
  - sub-page: Textarea
anchors:
  - anchor: Usage
  - anchor: Accessibility considerations for all form elements
  - anchor: Fieldsets, legends, and labels 
  - anchor: Error handling
  - anchor: How to group form controls
  - anchor: Hint text
---

{% include _site-in-this-section.html %}

<va-summary-box>
  <h3 slot="headline">Get help creating forms</h3>
  <p>
    Learn <a href="https://depo-platform-documentation.scrollhelp.site/developer-docs/a-guide-to-digitizing-va-forms">how to digitize a form at the VA</a>.
  </p>
  <p>
    View documentation for <a href="{{ site.forms_system_link }}">building forms using the Forms Library</a>.
  </p>
</va-summary-box>

<va-link-action
  href="https://designsystem.digital.gov/components/form/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

## Accessibility considerations for all form elements

{% include a11y/do-not-disable-buttons.md %}

{% include a11y/fieldsets-legends-labels.md %}

## Error handling

{% include components/label-errors.html %}

## Hint text

{% include components/hint-text.md %}