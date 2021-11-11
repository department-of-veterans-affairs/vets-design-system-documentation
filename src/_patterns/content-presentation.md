---
layout: default
title: Content presentation
anchors:
  - anchor: Featured content
  - anchor: Expandable content
---

# Content presentation


## Featured content

[Featured content](https://design.va.gov/components/featured-content) components are light blue boxes that call attention to important information.

<div class="site-showcase">
{% include storybook-preview.html height="250px" story="components-va-featured-content--default" %}
</div>

## Expandable content

### Accordions

Use [accordions](../components/accordions.html) to hold chunks of sibling content. They can be used in forms in review screens, but for additional context, please use [AdditionalInfo](#additionalinfo).

### AdditionalInfo

Use additional info components in forms to provide additional context. The lighter design prevents breaking up the visual progression as the user navigates the form. These can also serve as alternative to where accordions feel too heavy.

### How to Choose?

- **Is this content closely tied to a particular message or input on this screen?** Use AdditionalInfo
- **Is it more tangentially related?** Use accordions
