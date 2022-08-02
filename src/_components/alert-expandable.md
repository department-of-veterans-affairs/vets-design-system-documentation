---
layout: component
title: Alert - Expandable
github-title: va-alert-expandable
intro-text: "Mobile friendly expandable alerts combine the Additional Info component within Background Color Only alert color schemes, and includes an icon."
status: use-with-caution-candidate
contributors: Leyda Hughes (VSA Facilities Team)
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Research
---

## Examples

### Default (Informational)

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

{% include storybook-preview.html story="components-va-alert-expandable--default" link_text="va-alert-expandable" %}

### Warning alert

Used to warn a user, such as when there are negative consequences, and when something has gone wrong.

{% include storybook-preview.html story="components-va-alert-expandable--warning" link_text="va-alert-expandable" %}

<!-- ### Success alert

Used to indicate success.

{% include storybook-preview.html story="components-va-alert-expandable--success" link_text="va-alert-expandable" %} -->

<!-- ### Error alert

Used when there is a problem or something destructive is about to occur.

{% include storybook-preview.html story="components-va-alert-expandable--error" link_text="va-alert-expandable" %}

### Continue alert

{% include storybook-preview.html story="components-va-alert-expandable--continue" link_text="va-alert-expandable" %} -->

### No icon alerts

{% include storybook-preview.html story="components-va-alert-expandable--no-icon" link_text="va-alert-expandable" %}

## Usage

To be used when an alert box is too visually prominent and additional information needs to be communicated without leaving the page.

## Code usage

[Vet Center expandable alert code](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/shared/ExpandableOperatingStatus.jsx)

## Accessibility considerations

* Icon: Must provide alternative text (use sr-only text or an aria-label) so screen readers have an equivalent understanding of the purpose/nature of the message
* Heading: e.g. "Facility closed" should be one heading level below its parent

## Research

### Medical copay enhancement tool usability - July 2021

The alert was tested as part of a usability study with 9 participants. The alert was used to display copay charges referred to the Department of Treasury that needed to be resolved ASAP, so it was pertinent that the alert was immediately noticeable by Veterans. 

[View the component in the prototype here.](https://preview.uxpin.com/361636c369f65453b4880d1445911c4d9b869349#/pages/140005948/simulate/no-panels?mode=i)

**Findings:**
- The alert was often the first thing Veterans noticed when arriving on the page
- Some clicked on the alert to read more about the referred charge while others moved on to looking at other sections of the prototype 
- Veterans generally understood that they could interact with the alert. However, one asked themselves, "Can I click on this?" before clicking on it. That may have been because they were interacting with a prototype where not every element was interactive rather than because they were unsure that the alert was clickable in general. 
