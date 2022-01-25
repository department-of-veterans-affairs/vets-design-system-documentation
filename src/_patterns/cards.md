---
layout: default
title: Cards
draft: true
---

# Cards

Cards group short, related pieces of personalized information into a series of discrete containers, similar to physical index or playing cards. The goal of a card is to present a snapshot of information in one digestable chunk with the option to navigate to more detailed content. The user should be able to easily scan a sequence of cards and take action on the most relevant items. 

The context of use for cards varies, but at a minimum all cards share these elements:

1. Background color
2. Header
3. Secondary content (subheaders, body text)
4. Call to action (link or action link)

Optional elements for cards include:

- Label component
- Color status indicator badge
- Image

### Usage guidelines

- Cards will usually appear in a sequence and should be uniform in their look and feel to enhance scannability.
- You may use the Label component near the top of a card to call out appointment status such as "Canceled" or "Upcoming".
- If you are using color as a supplementary status indicator, make sure your color choices are intentional, accessible, and intuitive. Never rely on color alone to communicate status.
- Maximum of three CTAs per card. An Action link will draw attention to the primary CTA on the card.

### Content considerations

- Keep card content (especially header text) short, crisp, and to-the-point: users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link.
- Avoid using dynamic content within the middle of a sentence to future-proof the card for translation.

Note: the blue [Featured content](https://design.va.gov/components/featured-content) component, which is the only card-like element represented in Drupal, is meant to act as a callout for the most important information on the page. It should not be considered a card unless it contains personalized content and a call to action.

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
- The tab key should bring focus to the call(s) to action within the card. 
- The enter key or spacebar should open a link or Action link.
