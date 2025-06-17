---
layout: documentation
title: When a screen reader needs to announce content
permalink: /about/accessibility/when-a-screen-reader-needs-to-announce-content
has-parent: /about/accessibility/
intro-text: Knowing when to announce content in a screen reader can mean the difference between a quick and helpful experience or a long and verbose experience for people who use screen readers.
anchors:
  - anchor: Accessibility problem being solved
  - anchor: How screen readers work
  - anchor: End-state requirements
  - anchor: Implementation notes
  - anchor: Further reading
---

## Accessibility problem being solved

Teams and practitioners often don’t know what content needs to be announced by screen readers. That can lead to over-indexing on the amount of content announced, resulting in increased verbosity (amount of words announced on a page) and cognitive load for people who use screen readers. Find a balance when announcing content to screen readers.

## How screen readers work

To reach an ideal state, you need to understand how screen readers work. These tools convert digital text into synthesized speech and read content linearly. Users can jump around the page using:

- headings
- paragraphs
- HTML elements (inputs, tables, links, buttons, etc.)
- HTML landmarks (header, main, footer, etc.)
- skip navigation links

Screen readers announce parts of the page and its state as people navigate them. For example ([from WebAIM](https://webaim.org/techniques/screenreader/)):

- Screen readers announce the page title (the `<title>` element in the HTML markup) when first loading a web page.
- Screen readers will read the alternative text of images, if alt text is present. JAWS precedes the alternative text with the word “graphic.” If the image is a link, JAWS precedes the alternative text with “graphic link."
- Screen readers announce headings and identify the heading level. NVDA and JAWS, for example, precede `<h1>` headings with “heading level 1.”
- Users can navigate in any direction from cell to cell in table navigation mode. If the table is marked up correctly, the screen reader will read the column and/or row heading as the user enters each new cell.
- Screen readers inform users when they have entered into a form. Users have the option to enter form navigation mode.
- Screen readers may or may not read out punctuation, depending on the user’s verbosity setting. Ensure that your intended meaning will be conveyed in either case.
- Screen readers do not read out bold or italic styling. Don’t rely on styling alone to emphasize a word or phrase. The content should convey importance without it.

## End-state requirements

Several situations require screen readers to announce content. While static HTML content gets announced through normal browsing, some situations need more urgent announcements. Without these announcements, you risk violating Web Content Accessibility Guidelines (WCAG). These situations include, but aren't limited to:

### Errors

Any time a blocking error occurs. A blocking error means that the person can't move forward in a process without addressing the error.

**Example**: A Veteran activates the Continue button in a form without correctly completing a form field. Screen readers should announce the error. This can depend on how you build the product or application (server side vs. client side). Users can generally discover other errors that occur after a full page refresh as they navigate through the page.

**Why**: Veterans can't correct errors they don't know about, which leads to frustration.

### Changes on a page

If changes occur elsewhere on a page away from the current interaction, as a result of an action by the user, that requires sight to notice the change. Usually, these changes happen dynamically via JavaScript.

**Example**: A Veteran applies filters to a search query, and the search results update dynamically without needing to activate a button. The page displays new results.

**Why**: Changes elsewhere on a page from user actions can change context. Users need to understand what happened. If they can't see the change, they need notification through other means.

### State

If the state on a component or page is important to understand to operate the interface.

**Example**: A page has an accordion component that expands and collapses to show more or less content. The accordion uses an `aria-expanded="true|false"` attribute to communicate whether it's showing content.

**Why**: State changes help users understand what's happening in the interface. This lets them know what actions they need to take next.

### Focus management

When focus shifts dynamically as part of the experience.

**Example**: A Veteran activates a cancel button and a modal appears. Focus shifts to the first focusable interactive element, and screen readers announce this element thanks to its text or label.

**Why**: A change in focus shifts context for Veterans. Without an announcement, they may feel confused about their new location.

### Images/Icons

When an image is on the page. Images must be described, or marked as decorative to intentionally hide them from screen readers.

**Example**: A page shows steps in a claim process. A green checkmark icon appears next to "completed" steps. Since the text doesn't mention "completed" anywhere, screen readers should announce the checkmark as it communicates a state.

**Why**: Icons and images often communicate important contextual information. Screen readers need to announce them so users fully understand the content.

### Contextual information

When contextual information gets surfaced during a process that's needed to complete that process with full understanding.

**Example**: When Veterans progress through forms with text inputs and radio buttons, some questions include explanatory paragraphs before the interactive fields. Veterans need this contextual information to avoid mistakes on the form.

**Why**: Contextual information helps users understand processes or pages fully. Without this extra information, they might get confused or blocked.

### Language changes

When the language changes on a page. This change can be one word, a paragraph or more.

Note: You'll need to use the HTML lang attribute (example: `lang="es"`) to achieve proper language changes. While screen readers won't announce the language change itself, they'll pronounce the words correctly in that language.

**Example**: A page contains information in English, but has a list of links in the footer that link to help content in different languages. Each link would contain the correct lang attribute in the right language.

**Why**: Without the lang attribute, screen readers won't pronounce words properly, causing confusion for users.

## Implementation notes

- Use native HTML first before resorting to more advanced techniques for announcing content in screen readers.
- If native HTML won't accomplish the task, look toward ARIA attributes and properties to announce content.
- When announcing content to screen readers, keep it as concise as the experience will allow. A more verbose experience may be harder to understand for some people.

## Further reading

- [Designing for screen reader compatibility](https://webaim.org/techniques/screenreader/) (explains more about how screen readers work)
- [Understanding screen reader interaction modes](https://tink.uk/understanding-screen-reader-interaction-modes/) (explains the different modes that screen readers can be set in, which affects how content gets announced)
- [How to document the screen reader user experience](https://bbc.github.io/accessibility-news-and-you/guides/screen-reader-ux.html) (one way to think about designing for screen readers)
