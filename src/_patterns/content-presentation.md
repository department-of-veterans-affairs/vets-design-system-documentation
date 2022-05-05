---
layout: pattern
title: Content presentation
status: use-deployed
into-text: "Describes how to choose the appropriate components for presenting content in certain contexts."
anchors:
  - anchor: Featured content
  - anchor: Expandable content
---

## Featured content

[Featured content]({{ site.baseurl }}/components/featured-content) components are light blue boxes that call attention to important information.

{% include storybook-preview.html height="250px" story="components-va-featured-content--default" %}

## Expandable content

### Accordions

Use [accordions]({{ site.baseurl }}/components/accordion) to hold chunks of sibling content. They can be used in forms in review screens, but for additional context, please use [AdditionalInfo](#additionalinfo).

### Additional info

Use [additional info]({{ site.baseurl }}/components/additional-info) components in forms to provide additional context. The lighter design prevents breaking up the visual progression as the user navigates the form. These can also serve as alternative to where accordions feel too heavy.

### How to Choose?

- **Is this content closely tied to a particular message or input on this screen?** Use Additional info
- **Is it more tangentially related?** Use accordions
