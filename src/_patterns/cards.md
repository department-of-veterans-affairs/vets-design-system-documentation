---
layout: default
title: Cards
anchors:
  - anchor: Read-only
  - anchor: Interactive
draft: true
---

# Cards

Cards group short, related pieces of information into discrete containers, similar to physical index or playing cards. Cards by nature are **actionable** and contain dynamic content -- in most cases, the goal of a card is to present a snapshot of information in one digestable chunk, with the option to navigate to more detailed content. The context of use for cards can vary widely, but at a minimum all cards share these elements:

1. Background color or border
2. Header
3. Secondary content
4. Call to action (link or action link)

![Basic card]({{site.baseurl}}/images/BasicCard2.png) 

Optional elements for cards include:

- Status label 
- Checkbox for selecting card
- Dark blue border to indicate card is selected
- Image
- Alert
- Form controls like text input fields, dropdowns, and buttons

### Usage and content guidelines

- Keep card content (especially header text) short, crisp, and to-the-point: users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link.
- Indicate status clearly, preferably through using a bold **Status:** text label, if this attribute is applicable to the card. If you are using color as a supplementary status indicator, make sure your color choices are intentional and intuitive.
- Consider whether the card will appear alone or alongside other cards in a sequence. Cards that appear in sequence should be uniform in their look and feel to enhance scannability.
- Try not to mix and match multiple card styles in a single page.
- Avoid using dynamic content within the middle of a sentence to future-proof the card for translation.

Note: the blue [Featured content](https://design.va.gov/components/featured-content) component, which is the only card-like element represented in Drupal, is meant to act as a callout for the most important information on the page. It should not be considered a card unless it contains dynamic content and a call to action.

### Design specifications

Cards are responsive to the width of the viewport and their parent container. Cards should have at least 16px white space (margins) on all sides. Starting with a mobile-first design is recommended. 

**Small screens**
- Card maximum width = 304px
- Card minimum width = 280px

**Large and medium screens**
- Card maximum width = 752px
- Card minimum width = 384px

### Accessibility considerations

- Include alt text for images and links.
- Define a tab order for elements within the card.
- If you are using multiple cards in a sequence, provide a way for keyboard users to jump between cards without having to tab through every element within each card. 

Suggested keyboard behaviors for interacting with cards:

- Tab to move to the next card or next focusable element outside of the card.
- Shift + Tab to move focus to the previous card or previous focusable element outside of the card.
- Arrow keys to move between focusable elements within the card.
- Enter/Return to execute the call to action.
- If the card is selectable using a checkbox, use the Space key to toggle select/deselect states.

## Read-only cards
Read-only cards contain dynamic, time-dependent information such as appointment details or claim/appeal status. They can also be used to highlight personalized information or how-to content. Examples of read-only cards include:

**Content card** <br/>
![Content card]({{site.baseurl}}/images/ContentCard-borderless.png)

**Status card** <br/>
![Status card]({{site.baseurl}}/images/StatusCard-borderless.png)

**Promo card** <br/>
![Promo card]({{site.baseurl}}/images/PromoCard1-borderless.png)

**Appointment card** <br/>
![Appointment card]({{site.baseurl}}/images/ApptCard-borderless.png)

## Interactive cards
While interactive cards are visually similar to read-only cards, they serve very different purposes. Interactive cards contain form elements like input fields, checkboxes, and/or buttons, and are most often used for adding, editing, or deleting chunks of information. Examples of interactive cards include:

**List and loop card** <br/>
![List and loop card]({{site.baseurl}}/images/ListLoopCard-borderless.png)

**Selectable list item card** <br/>
![Selectable list item card]({{site.baseurl}}/images/ListItem2.png)
