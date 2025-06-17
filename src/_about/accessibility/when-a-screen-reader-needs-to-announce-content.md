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

Teams and practitioners often don’t know what content needs to be announced by screen readers. That can lead to over-indexing on the amount of content announced, resulting in increased verbosity (amount of words announced on a page) and cognitive load for people who use screen readers. Aim for balance when announcing content to screen readers.

## How screen readers work

To get to an ideal state with this, you need to understand how screen readers work. The tools convert digital text into synthesized speech, reading in a linear fashion through a page or piece of content. People who use screen readers can jump around the page in different ways like:

- headings
- paragraphs
- HTML elements (inputs, tables, links, buttons, etc.)
- HTML landmarks (header, main, footer, etc.)
- skip navigation links

Screen readers announce parts of the page and its state as people navigate them. For example ([from WebAIM](https://webaim.org/techniques/screenreader/)):

- Screen readers announce the page title (the \<title> element in the HTML markup) when first loading a web page.
- Screen readers will read the alternative text of images, if alt text is present. JAWS precedes the alternative text with the word “graphic.” If the image is a link, JAWS precedes the alternative text with “graphic link."
- Screen readers announce headings and identify the heading level. NVDA and JAWS, for example, precede `<h1>` headings with “heading level 1.”
- Users can navigate in any direction from cell to cell in table navigation mode. If the table is marked up correctly, the screen reader will read the column and/or row heading as the user enters each new cell.
- Screen readers inform users when they have entered into a form. Users have the option to enter form navigation mode.
- Screen readers may or may not read out punctuation, depending on the user’s verbosity setting. Ensure that your intended meaning will be conveyed in either case.
- Screen readers do not read out bold or italic styling. Don’t rely on styling alone to emphasize a word or phrase. The content should convey importance without it.

## End-state requirements

Several situations can occur throughout experiences where screen readers must announce content. All static content in HTML can get announced via screen readers through browsing it. The examples provided point to situations where the announcements need to be made more urgently. Without the announcements, you run the risk of violating Web Content Accessibility Guidelines (WCAG). These include, but aren't limited to:

### Errors

Any time a blocking error occurs. A blocking error means that the person can't move forward in a process without addressing the error.

**Example**: A Veteran activates the Continue button in a form without correctly completing a form field. The error should be announced in the screen reader. Sometimes, this can change, depending on how the product or application is built (server side vs. client side). Other errors that occur after a full page refresh can generally be left for the user to discover as they navigate through the page.

**Why**: Without knowing an error exists, a Veteran can't correct it, leading to a frustrating experience.

### Changes on a page

If changes occur elsewhere on a page away from the current interaction, as a result of an action by the user, that requires sight to notice the change. Usually, these changes happen dynamically via JavaScript.

**Example**: A Veteran applies filters to a search query, and the search query updates dynamically without the need to activate a button. New results are displayed on the page.

**Why**: Changes that occur elsewhere on a page away from the current interaction, as a result of an action by the user, can result in a change in context. That context change can mean the user needs to understand what happened, and if they can't see the change, they need to be notified some other way.

### State

If the state on a component or page is important to understand to operate the interface.

**Example**: A page has an accordion component that expands and collapses to show more or less content. The accordion has an aria-expanded="true|false" attribute that communicates whether the accordion is showing or not showing content.

**Why**: State changes let the person using the interface understand more about what's happening or has happened. That allows the user to better understand the interface and what action they need to take.

### Focus management

When focus shifts dynamically as part of the experience.

**Example**: A Veteran activates a cancel button and a modal appears on the page. Focus shifts to the first focusable interactive element. That element gets announced, thanks to its text or label.

**Why**: A change in focus shifts context for the Veteran. Without announcing that, they may be confused by the new location they landed on.

### Images/Icons

When an image is on the page. Images must be described, or marked as decorative to intentionally hide them from screen readers.

**Example**: A page contains content that shows the steps in a claim process. Next to the "completed" steps is a green checkmark icon. The text doesn't mention "completed" anywhere so the checkmark communicates a kind of state. It should be announced.

**Why**: Icons and images often communicate important information about the content and need to be announced so that context is fully understood.

### Contextual information

When contextual information gets surfaced during a process that's needed to complete that process with full understanding.

**Example**: As a Veteran progresses through a form, full of text inputs and radio buttons, and some questions have a paragraph of text that comes before interactive form fields. Without reading that information, the Veteran may make a mistake on the form.

**Why**: Contextual information helps people understand a process or page fully before moving forward. Without that extra information, people could get confused or blocked in the process.

### Language changes

When the language changes on a page. This change can be one word, a paragraph or more.

Note: It's important to point out that the language change is achieved by the HTML lang attribute (example: \`lang="es"\`). The change won't be announced, but the language will get pronounced properly via the screen reader.

**Example**: A page contains information in English, but has a list of links in the footer that link to help content in different languages. Each link would contain the correct lang attribute in the right language.

**Why**: Without changing the lang attribute, the words would not announce properly in screen readers, leading to confusion for people.

## Implementation notes

- Use native HTML first before resorting to more advanced techniques for announcing content in screen readers.
- If native HTML won't accomplish the task, look toward ARIA attributes and properties to announce content.
- When announcing content to screen readers, keep it as concise as the experience will allow. A more verbose experience may be harder to understand for some people.

## Further reading

- [Designing for screen reader compatibility](https://webaim.org/techniques/screenreader/) (explains more about how screen readers work)
- [Understanding screen reader interaction modes](https://tink.uk/understanding-screen-reader-interaction-modes/) (explains the different modes that screen readers can be set in, which affects how content gets announced)
- [How to document the screen reader user experience](https://bbc.github.io/accessibility-news-and-you/guides/screen-reader-ux.html) (one way to think about designing for screen readers)
