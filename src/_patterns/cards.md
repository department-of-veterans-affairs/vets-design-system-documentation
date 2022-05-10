---
layout: pattern
title: Cards
status: use-with-caution-candidate
draft: true
intro-text: "Cards group short, related pieces of personalized information into a series of discrete containers, similar to physical index or playing cards. The goal of a card is to present a snapshot of information in one digestable chunk with the option to navigate to more detailed content. The user should be able to easily scan a sequence of cards and take action on the most relevant items."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Design specifications
  - anchor: Accessibility considerations
  - anchor: Related
---

## Examples

The context of use for cards varies, but most cards share these elements:

![Basic card](/images/Mini-card-annotations.png) 

1. **Background color.** Usually gray.
2. **Title.** H3 or H4. Clearly summarizes card content.
3. **Subheader.** H4 or body text. Usually communicates a status.
4. **Secondary content.** Body text. Includes next steps and bold dates/times to draw attention to the most important details on the card.
5. **Call to action.** [Action link]({{ site.baseurl }}/components/link/action) (recommended) or link. 

Optional elements for cards include:

![Label and status badge card](/images/Card-label-badge.png) 

1. [Tag component]({{ site.baseurl }}/components/tag)
2. Status indicator badge

## Usage

- Cards will usually appear in a sequence and should be uniform in their look and feel to enhance scannability.
- You may use the Label component near the top of a card to call out appointment status such as "Canceled" or "Upcoming".
- If you are using color as a supplementary status indicator, make sure your color choices are accessible and intuitive. Never rely on color alone to communicate status.
- Maximum of three CTAs per card. An Action link will draw attention to the primary CTA on the card.

## Content considerations

- Keep card content (especially [header text]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles#section-titles)) short, crisp, and to-the-point: users should be able to glean the most important information at-a-glance, and have the option to view additional details by clicking a link or action link.
- Avoid using dynamic content within the middle of a sentence to future-proof the card for translation.

Note: the blue [Featured content]({{ site.baseurl }}/components/featured-content) component, which is the only card-like element represented in Drupal, is meant to act as a callout for the most important information on the page. Cards will usually appear in a sequence, whereas Featured content should be used sparingly on the page. 

## Design specifications

Cards are responsive to the width of the viewport and their parent container. Cards should have at least 16px white space (margins) on all sides. Starting with a mobile-first design is recommended. 

### Small screens
- Card maximum width = 304px
- Card minimum width = 280px

### Large and medium screens
- Card maximum width = 752px
- Card minimum width = 384px

## Accessibility considerations

- Include alt text for images and links.
- The tab key should bring focus to the call(s) to action within the card. 
- The enter key or spacebar should open a link or Action link.

## Related

- Action links
- Featured content
- Labels
- Links (Content style guide)
- Section titles (Content style guide)
