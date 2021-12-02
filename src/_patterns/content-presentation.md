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

Cards group short, related pieces of information into discrete containers, similar to physical index or playing cards. Most often, the goal of a card is to present a summary of information in one digestable chunk with the option to navigate to more details. The context of use for cards can vary widely, but at a minimum most cards share these elements:

1. Background color or border
2. Header
3. Secondary content
4. Call to action (link or action link)

Optional elements for cards include:

- Status label 
- Checkbox for selecting card
- Dark blue border to indicate card is selected
- Image
- Alert
- Input field(s)
- Button(s)

### Read-only cards
Read-only cards often contain dynamic, time-sensitive information such as appointment details or claim/appeal status. They can also communicate financial data like balances.

Some examples of read-only cards include:

- Content
- Promo
- Appointment
- Facility locator

### Interactive cards
While interactive cards are visually similar to read-only cards, they serve very different purposes. Interactive cards contain form elements like input fields, checkboxes, and/or buttons, and are most often used for adding, editing, or deleting chunks of information. Some examples of interactive cards include:

- List and loop
- Selectable list item

### Card do's and don'ts

Do:
- Keep card content (especially header text) short, crisp, and to-the-point: users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link.
- Indicate status clearly, preferably through using a **Status:** text label, if this attribute is applicable to the card.
- Consider whether the card will appear alone or alongside other cards in a sequence. This contextual detail will affect the visual design and information architecture of the card.
- The blue Featured content component is meant to act as a callout for the most important information on the page, use sparingly.

Don't
- Avoid using dynamic content within the middle of a sentence to future-proof the card for translation.
- Try not to mix and match multiple card styles in a single page.
