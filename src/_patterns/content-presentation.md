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

Cards group short, related pieces of information into discrete containers, similar to physical index or playing cards. The context of use for cards can vary widely, but at a minimum most cards share these three elements:

1. Header
2. Secondary content
3. Call to action (link or action link)

Optional elements for cards include:

- Status label 
- Checkbox for selecting card
- Dark blue border to indicate card is selected
- Image
- Alert
- Input field(s)
- Button(s)

### Read-only cards
Read-only cards often contain dynamic, time/date-centered information like appointment or claim/appeal status. Avoid using dynamic content within the middle of a sentence to future-proof the card for translation. Keep card copy short, crisp, and to-the-point: users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link. 

Some examples of read-only cards include:

Featured content (this is the only card type represented in Drupal)
Promo
Appointment
Facility locator

### Interactive cards
Some cards are interactive and use form elements like input fields, checkboxes, and/or buttons. While interactive cards are visually similar to read-only cards, they serve very different purposes. Read-only cards are designed for quick scanning and navigating to more detailed information. Interactive cards 
