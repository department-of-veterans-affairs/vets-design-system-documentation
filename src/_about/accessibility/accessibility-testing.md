---
layout: documentation
title: Accessibility Testing
permalink: /about/accessibility/accessibility-testing
has-parent: /about/accessibility/
intro-text: Accessibility testing
anchors:
  - anchor: ...
---

TBD - Versioning these criteria? So we can say this component was testing according to Version 1.0.

Each component is tested for accessibility in the design system based on the four principles of accessibility.

- **Perceivable** - Information and user interface components must be presentable to users in ways they can perceive.
  - The information cannot be invisible to all of the user's senses.
- **Operable** - User interface components and navigation must be operable.
  - The interface cannot require an interaction that a user cannot perform.
- **Understandable** - Information and the operation of user interface must be understandable.
  - The information and the user interface cannot be beyond their understanding.
- **Robust** -  Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
  - The content should remain accessible, even as assistive technologies become more advanced.

These principles are the foundation of [Section 508 of the Rehabilitation Act](https://www.access-board.gov/ict/), which incorporates Web Content Accessibility Guidelines (WCAG) 2.0 Level AA success criteria. We aim to adhere to the latest version of WCAG Level AA, which at the time of writing is WCAG 2.2. We strive to not only meet those standards, but to go beyond compliance with thorough testing to ensure that we creating an inclusive and equitable experience for everyone. 

## Design Review

TBD

## Code Review

Code reviews are essential for building inclusive and usable digital products for everyone. Here's what we look for:

- [Valid HTML usage](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [Valid ARIA usage](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)

## Readability

Readability is a key part of accessibility because it directly impacts how easily users can understand the content. We ensure the following are easy to understand:

- Headings and sub-headings
- Button and link text
- Labels
- Plain language 

## Automated Scans

Automated accessibility testing tools are crucial for building accessible digital products because they provide a quick and efficient way to identify potential issues. Currently, each design system component goes through:

- An Axe scan via Cypress.
- An Axe scan via the browser extension.

## Use of Color

Color plays a crucial role in accessibility because it significantly impacts how users perceive and interact with digital content, especially those with visual impairments. Here is what we test for: 

- Color contrast meets or exceeds WCAG Level AA contrast ratios.
- Information is not communicated through color alone. Relying solely on color for communication is an accessibility barrier for individuals with visual impairments.

## Text Resizing, Zoom, and Magnification.

Testing zoom levels and text resizing is crucial for accessibility because it ensures that your website or application remains usable for individuals who need to adjust their screen's display settings. Here's what we test:

Testing with text resizing, zoom, and magnification is crucial for accessibility because it ensures that the website remains usable for individuals that rely on adjusting their display settings. Here's what we test for:

- Browser font size options correctly resize the text of a component.
- Zoom levels of 200%, 300%, and 400% do not affect the usability of the component.

## Screen Readers

Screen reader testing is important for accessibility because it ensures each component is usable for users of assistive technology. We test with the following screen reader and browser combinations to ensure a consistent experience across devices:

- JAWS + Chrome
- NVDA + Firefox
- VoiceOver + Safari

## Input Methods

Mouse and keyboard testing are essential for accessibility because they ensure each component is usable for individuals who rely on different input methods.

- Click target sizes
- Mouse compatibility
- Keyboard compatibility

## Other

Testing beyond the key areas of accessibility ensures an inclusive experience for a wider range of users with diverse needs. Here are some other things we test for:

- TBD
