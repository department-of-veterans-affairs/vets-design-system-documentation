---
layout: default
sub_section: Alert boxes
title: Mobile friendly expandable alert
---
Suggested by: Leyda Hughes, VSA Facilities Team

# Purpose

When an alert box is too visually prominent and additional information needs to be communicated without leaving the page.

## Description
Mobile friendly expandable alerts combine the Additional Info component within Background Color Only alert color schemes, and include an icon. 

### Example:

![image](https://user-images.githubusercontent.com/4960080/127147819-12d07cf2-b357-4058-81d5-56f0caf764a2.png)

![image](https://user-images.githubusercontent.com/4960080/127148001-517c85d7-e6d9-401d-81d7-1d3b8f1dbeb1.png)

[UXPin design specs](https://preview.uxpin.com/0a5eaacdf411fde0cb3abf4932010c29fbccb7de#/pages/138515145/simulate/sitemap?mode=i)

### Code reference:

[Vet Center expandable alert code](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/shared/ExpandableOperatingStatus.jsx)

## Accessibility requirements:

Icon: Must provide alternative text (use sr-only text or an aria-label) so screen readers have an equivalent understanding of the purpose/nature of the message

Heading: e.g. "Facility closed" should be one heading level below its parent
