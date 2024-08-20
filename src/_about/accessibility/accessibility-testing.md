---
layout: documentation
title: Accessibility Testing
permalink: /about/accessibility/accessibility-testing
has-parent: /about/accessibility/
intro-text: Accessibility testing
anchors:
  - anchor: ...
---

## VFS team responsibilities

Design system components are tested in isolation. While we try to ensure that no accessibility barriers exist in any given component, barriers can still be introduced when components are used in an unanticipated combination, or when components are placed in an unanticipated context within the page.

VFS teams are responsible for testing their own products for accessibility and meeting the [VA.gov Experience Standards](https://design.va.gov/about/experience-standards/). Moreover, teams are required to complete [foundational accessibility testing](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#foundational-testing) as they prepare for a staging review, and are highly encouraged to complete [advanced accessibility testing](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#advanced-testing) as well. Using design system components alone will not guarantee that your product is accessible.

### Reporting accessibility defects

If you identify an accessibility defect in a component, please [submit an issue](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new/choose).

## Testing principles

Each component is tested for accessibility in the design system based on the four principles of accessibility.

- **Perceivable** - Information and user interface components must be presentable to users in ways they can perceive.
  - The information cannot be invisible to all of the user's senses.
- **Operable** - User interface components and navigation must be operable.
  - The interface cannot require an interaction that a user cannot perform.
- **Understandable** - Information and the operation of user interface must be understandable.
  - The information and the user interface cannot be beyond their understanding.
- **Robust** -  Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
  - The content should remain accessible, even as assistive technologies become more advanced.

These principles are the foundation of [Section 508 of the Rehabilitation Act](https://www.access-board.gov/ict/), which incorporates Web Content Accessibility Guidelines (WCAG) 2.0 Level AA success criteria. We aim to adhere to the latest version of WCAG Level AA, which at the time of writing is [WCAG 2.2](https://www.w3.org/TR/WCAG22/). We strive to not only meet those standards, but to go beyond compliance with thorough testing to ensure that we creating an inclusive and equitable experience for everyone.

Each component is also tested to ensure compatibility with common assistive technologies covering a broad set of common interaction modalities, including:

- Screen readers (text to speech)
- Voice command/speech recognition (speech to text)
- Screen magnification
- Browser display settings (eg. zoom, text size)
- Device contrast themes
- Keyboard-only
- Mouse-only
- Touch-only
- Alternative input devices

## Code review

Code reviews are essential for building inclusive and usable digital products for everyone. Well-written semantic HTML ensures that browsers faithfully convey design system components to users, and ensures maximum compatibility with assistive technologies. Here's what we look for in code:

- [Valid HTML usage](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
  - Are semantic HTML elements used properly?
- [Valid ARIA usage](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
  - Are ARIA roles and attributes used properly?
- [Controls are labeled](https://www.w3.org/WAI/tutorials/forms/labels/)
  - Are elements labeled using appropriate techniques?

## Readability

Readability is a key part of accessibility because it directly impacts how easily users can understand the content. We ensure the following are easy to understand:

- Headings and sub-headings
  - Are headings used in a hierarchical manner?
  - Is the content grouped logically?
- [Button](https://design.va.gov/content-style-guide/button-labels) and [link](https://design.va.gov/content-style-guide/links) text
  - Is the text meaningful?
  - Does the text convey a purpose?
- Labels
  - Are labels clear, concise, and easy to understand?
- [Plain language](https://design.va.gov/content-style-guide/plain-language/)
  - Is all text consistent with our plain language standards?

### VFS team considerations

Readability of an individual component is highly dependent on the context around that component. When using a component, VFS teams should check:

- Headings and sub-headings
  - Do component headings fit into the overall heading hierarchy of the page?
  - Is content in close proximity to the component grouped logically?
- Buttons and link text
  - Is any text hardcoded into the component appropriate for your user flow?
  - When adding your own text via component properties, is the text meaningful? Does it convey a purpose?
- Labels
  - Are any labels hardcoded into the component appropriate for your user flow?
  - When adding your own label text via component properties, are the labels clear, concise, and easy to understand?
- Plain language
  - Do error messages clearly describe the error and provide a clear path for resolving the error?

## Automated scans

Automated accessibility testing tools are crucial for building accessible digital products because they provide a quick and efficient way to identify potential issues. Currently, each design system component goes through:

- An Axe scan via Cypress for the default variation of the component.
- An Axe scan via the browser extension for each additional variation of the component.

## Use of color

Color plays a crucial role in accessibility because it significantly impacts how users perceive and interact with digital content, especially those with visual impairments. Here is what we test for: 

- Color contrast meets or exceeds [WCAG Level AA contrast ratios](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- Information is not communicated through color alone. Relying solely on color for communication is an accessibility barrier for individuals with visual impairments.
- Use of [Windows contrast themes](https://learn.microsoft.com/en-us/windows/apps/design/accessibility/high-contrast-themes) (formerly High Contrast Mode) does not result in any use of color regressions from the default color presentation.

### VFS team considerations

When using a component, VFS teams should check:

- Color contrast against against backgrounds and nearby or adjacent elements.

## Text resizing, zoom, and magnification.

Testing text resizing, browser zoom levels, and screen magnifications is crucial for accessibility because it ensures that your website or application remains usable for individuals who need to adjust their browser's display settings or magnify parts of their screen. Here's what we test:

- Browser font size options correctly resize the text of a component.
- Zoom levels of 200%, 300%, and 400% do not affect the usability of the component.
- Features are visible or discoverable when using [MacOS Zoom](https://support.apple.com/guide/mac-help/change-zoom-settings-for-accessibility-mh40579/mac), [Windows Magnifier](https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198), and/or similar magnification tools.

## Screen readers

Screen reader testing is important for accessibility because it ensures each component is usable for users of assistive technology. We test with the following screen reader and browser combinations to ensure a consistent experience across devices:

- [JAWS](https://www.freedomscientific.com/products/software/jaws/) + Chrome on Windows
- [NVDA](https://www.nvaccess.org/download/) + Firefox on Windows
- [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) + Edge on Windows
- [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) + Safari on MacOS
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) + Chrome on Android
- [VoiceOver](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios) + Safari on iOS

With each screen reader, here's what we test:

- All meaningful content is announced to screen reader users in a logical order consistent with the visual presentation.
- All interactive elements have a unique accessible name.
- All interactive elements are announced with their element type, current value, and current state (as appropriate).
- Common screen reader interaction patterns are supported (eg. navigating a page by heading, navigating a page by landmark, etc).

## Input and interaction methods

Each component is tested to ensure it is usable for individuals who rely on different input methods. Input methods tested include:

- Keyboard-only
- Mouse-only
- Touch-only (as appropriate, where interactions may be distinct from mouse-only)
- [Voice Control](https://support.apple.com/en-us/102225) + Safari on MacOS
- [Dragon](https://www.nuance.com/dragon.html) + Edge or Chrome on Windows

Alternative input devices such as sip-and-puff switches or eye-tracking software are not directly tested. These devices typically map user interactions to specific keystrokes or mouse movements, so robust support for keyboard and mouse combined with well-tested standards-based code should ensure support for these devices. Likewise, we do not directly test with refreshable Braille displays or other nonvisual displays, but appropriate use of ARIA and semantic HTML should ensure support for these devices as well.

For each input method, we test:

- Touch and mouse compatibility, including:
  - Target sizes meet or exceed [WCAG Level AA target size requirements](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
  - Controls do not require multipoint or path-based gestures.
  - Controls do not require specific click or tap patterns or timing.
- Keyboard compatibility, including:
  - All interactive elements are focusable using the keyboard.
  - Focus indicators are fully visible and meet color contrast requirements.
  - Form elements such as dropdowns, radio buttons, and sliders can be utilized with arrow keys.
  - Interactive elements can be activated with the keyboard.
  - Users can exit all interactive elements without being trapped.
- Voice command/speech recognition compatibility, including:
  - The accessible name of elements matches the visible label for the element; or, if not, the visible label supports
  - Pronouncability of labels
