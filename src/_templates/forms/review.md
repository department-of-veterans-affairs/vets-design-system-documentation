---
layout: pattern
permalink: /templates/forms/review
has-parent: /templates/forms/
title: Review
status: use-deployed
intro-text: Allows the user to review information and make edits if necessary.
sketch-link: https://www.sketch.com/s/c8df169f-5b02-4999-befb-34c7b3b62ba9/p/22D26EF0-4325-4899-AAB5-2FCF50AD12BC/canvas
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
---

## About

The Review page employs the [Help users to check their answers]({{ site.baseurl }}/patterns/help-users-to/check-answers) pattern at the end of a form flow by displaying the information the user has provided, field by field, organized by chapter and/or step.

## Example

{% include component-example.html alt="An example of a Review page for authenticated users." file="/images/templates/forms/review/template.png" caption="Anatomy of the Review page for authenticated users." class="x2" %}

The Review page consists of:

1. [Page title and subtitle](#page-title-and-subtitle)
2. [Progress bar - Segmented](#progress-bar-segmented)
3. [Review steps or chapters - Expanded](#review-steps-or-chapters---expanded)
4. [Review steps or chapters - Collapsed](#review-steps-or-chapters---collapsed)
5. [Penalty notice](#penalty-notice)
6. [Privacy agreement](#privacy-agreement)
7. [Button pair](#button-pair)
8. [Autosave](#autosave)
9. [Finish application later](#finish-application-later)
10. [Need help?](#need-help)

## Structure

### Page title and subtitle

The H1 plain language title is in the format:

> Review [Form name]

OR

> Review application

This is followed by a sub-title in the format:

> [Form number]

### Progress bar - Segmented

[Progress bar - Segmented]({{site.baseurl}}/components/form/progress-bar-segmented) component. The Review step is always the final step in the process.

### Review steps or chapters - Expanded

Each step or chapter in the form flow is represented by a bordered [Accordion]({{ site.baseurl }}/components/accordion#bordered) that contains each form field and the value entered by the user for that step or chapter. The accordions use the default multi-select mode that allows each accordion to be opened and closed independently.

* When an accordion is open, each section within a chapter should have a secondary “Edit” button in the top right.

### Review steps or chapters - Collapsed

All accordions start out collapsed.

### Penalty notice

[Penalty notice]({{site.baseurl}}/components/form/penalty-notice) component. This is a content component which is a required legal notice that must appear on this final step of an application.

### Privacy agreement

[Privacy agreement]({{site.baseurl}}/components/form/privacy-agreement) component. This component is used unless a form requires a wet signature in which case this component is replaced by the [Ask users for signature]({{ site.basurl }}/patterns/ask-users-for/signature) pattern, wet signature variation.

### Button pair

[Button pair]({{site.baseurl}}/components/button/button-pair) contains a secondary button labeled “Back” and  primary button labeled "Submit application".

### Autosave

The [Autosave]({{site.baseurl}}/components/form/autosave) component provides the last saved application date and time in a Alert - background only - Success variation.

### Finish application later

A link that allows the user to exit the process with their progress saved.

### Need help?

The [Need help?]({{site.baseurl}}/components/form/need-help) component provides contact information for reaching VA.
