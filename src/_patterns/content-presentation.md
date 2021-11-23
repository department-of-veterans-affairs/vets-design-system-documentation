---
layout: default
title: Content presentation
draft: true
anchors:
  - anchor: Featured content
  - anchor: Expandable content
  - anchor: Cards
---

# Content presentation

## Featured content

[Featured content](https://design.va.gov/components/featured-content) components are light blue boxes that call attention to important information.

{% include storybook-preview.html height="250px" story="components-va-featured-content--default" %}

## Expandable content

### Accordions

Use [accordions](../components/accordions.html) to hold chunks of sibling content. They can be used in forms in review screens, but for additional context, please use [AdditionalInfo](#additionalinfo).

### AdditionalInfo

Use additional info components in forms to provide additional context. The lighter design prevents breaking up the visual progression as the user navigates the form. These can also serve as alternative to where accordions feel too heavy.

### How to Choose?

- **Is this content closely tied to a particular message or input on this screen?** Use AdditionalInfo
- **Is it more tangentially related?** Use accordions

## Cards

Cards group short, related pieces of information into discrete containers, similar to index or playing cards. The context of use for cards can vary widely, but at a minimum all cards share these common elements:

1. Headline
2. Date/status
3. Call to action (link or action link)

Optional elements for cards include:

1. Checkbox
2. Blue border to indicate card is selected
3. Image (promo card)
4. Body text (featured content card)
5. Alert (facility locator card)
6. Input fields (list and loop card)
7. Buttons

Cards often contain non-static, time-sensitive information like appointment details. Users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link. 

Some cards are interactive and use form elements like input fields, checkboxes, and/or buttons.
