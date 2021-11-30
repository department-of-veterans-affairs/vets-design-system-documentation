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

Cards group short, related pieces of information into discrete containers, similar to physical index or playing cards. The context of use for cards can vary widely, but at a minimum all cards share these three elements:

1. Header
2. Supplemental content, usually includes dynamic, time-sensitive information
3. Call to action (link or action link)

Optional elements for cards include:

- Status label 
- Checkbox for selecting card
- Dark blue border to indicate card is selected
- Image (promo card)
- Alert (facility locator card)
- Input fields (list and loop card)
- Button(s)

### Read-only cards
Read-only cards often contain dynamic, time/date-centered information like appointment details or claims status. Users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link. 

### Interactive cards
Some cards are interactive and use form elements like input fields, checkboxes, and/or buttons.
