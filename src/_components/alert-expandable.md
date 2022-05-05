---
layout: component
title: Alert - Expandable
github-title: va-alert-expandable
intro-text: "Mobile friendly expandable alerts combine the Additional Info component within Background Color Only alert color schemes, and includes an icon."
status: use-with-caution-candidate
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Research
---

Suggested by: Leyda Hughes, VSA Facilities Team

## Example

![image](https://user-images.githubusercontent.com/4960080/127147819-12d07cf2-b357-4058-81d5-56f0caf764a2.png)

![image](https://user-images.githubusercontent.com/4960080/127148001-517c85d7-e6d9-401d-81d7-1d3b8f1dbeb1.png)

[UXPin design specs](https://preview.uxpin.com/0a5eaacdf411fde0cb3abf4932010c29fbccb7de#/pages/138515145/simulate/sitemap?mode=i)

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
