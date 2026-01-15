---
title: Screen reader announcements
description: Guidelines for when and how to use screen reader announcements effectively.
sidebar_position: 7
---

# Screen reader announcements

This guidance explains when and how to use screen readers to announce content effectively, balancing accessibility with user experience.

## The challenge

Teams often struggle knowing which content needs screen reader announcement, leading to over-verbosity and increased cognitive load for users relying on screen readers.

## How screen readers function

Screen readers convert digital text to synthesized speech, reading content sequentially. Users navigate via:

- Headings
- Paragraphs
- HTML elements (inputs, tables, links, buttons)
- Landmarks (header, main, footer)
- Skip navigation links

### Key behaviors

- Announce page titles on load
- Read image alt text
- Identify heading levels
- Respect user verbosity settings

## Seven key announcement scenarios

### 1. Errors

Any time a blocking error occurs preventing forward progress requires announcement. Users need immediate feedback when something goes wrong.

### 2. Dynamic page changes

When user actions trigger updates elsewhere on the page via JavaScript, announcements prevent confusion. Users need to know content has changed without having to search for it.

### 3. State changes

Component states (like accordion expansion) using `aria-expanded` attributes need communication. Users should understand when interactive elements change state.

### 4. Focus shifts

Dynamic focus changes, such as modals appearing, require announcement of new locations. Users need context about where focus has moved and why.

### 5. Images and icons

Visual elements communicating important information must be described or marked decorative. Meaningful images need alt text; decorative images should be hidden from screen readers.

### 6. Contextual information

Supporting content during processes needs announcement for complete understanding. Help text, hints, and supplementary information should be accessible.

### 7. Language changes

The HTML `lang` attribute enables proper pronunciation of content in different languages. Screen readers adjust pronunciation based on language attributes.

## Implementation guidance

### Prioritize native HTML

Use semantic HTML elements before reaching for ARIA attributes. Native elements have built-in accessibility support.

### Keep announcements concise

Reduce cognitive burden while maintaining clarity. Long announcements can overwhelm users and cause them to miss important information.

### Avoid over-announcement

Not everything needs to be announced. Focus on critical information that users need to complete tasks successfully.

## Related guidance

- [Focus management](./focus-management)
- [Accessibility testing](./testing)
