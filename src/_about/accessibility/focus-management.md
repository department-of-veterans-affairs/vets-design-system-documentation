---
layout: documentation
title: Focus management
permalink: /about/accessibility/focus-management
has-parent: /about/accessibility/
intro-text: Focus is the element on a page that is ready for you to interact with. It's important for making websites accessible, especially for people who use keyboards or other assistive technology to use the site.
anchors:
  - anchor: Focus indicator
  - anchor: Focus order
  - anchor: Focus management

---

Testing is crucial to ensure that focus on your page functions as expected across different scenarios. Below are some things to look out for.

## Focus indicator

Sighted keyboard users must always be able to see where the keyboard focus is. If they tab through a website without knowing which element is focused, navigating can be unpredictable.

Browsers handle displaying the keyboard focus automatically, but each displays it in a different way and may be just enough to pass accessibility guidelines. VA.gov has enhanced this outline to make it more visible.

![visual focus indicator screenshot]({{ site.baseurl }}/images/about/accessibility/focus-management/focus-indicator.png)

We advise against disabling the focus outline using `outline: 0` or `outline: none` in CSS. This practice can impair navigation for users who rely on keyboard navigation, especially those with visual impairments. Without a visible focus outline, sighted users may struggle to identify the currently focused element, making navigation difficult.

## Focus order

The programmatic focus order should match the visual focus order. Focus typically follows the order in which objects appear in the page source, but may not match the order which users expect to interact with elements on the page. 

This can occur when the order of elements in the source is wrong. If an element's positioned is moved via CSS, it can move that element from where it would normally be positioned. Elements could also be hidden on a page, typically through moving it off-screen or changing it's opacity, but not taken out of the tab order. This makes them focusable even if the focus indicator cannot be seen. Because of that, be sure to test that focus is not placed on an element that is not visible.

## Focus management

Manually managing focus is necessary in some scenarios to provide a seamless and accessible user experience, especially for keyboard and screen reader users. Below are key things to know when setting focus manually.

### The focus should be intentionally set to the appropriate element when a user action requires a change of context or location

- When content is added to the screen in response to a user-triggered event, the focus should be moved to the new content.
- When content is removed from the screen in response to a user-triggered event, focus should be set to the next logical place in the interaction.
- Example: When opening a dialog, focus should be sent to that dialog. When the dialog is closed, focus is sent back to the original element that triggered it.

### Focus should not be lost or reset to the top of the page, except when the page is reloaded

- If focus is reset, keyboard users will have to start from the beginning of the page again. Screen reader users could also become disoriented and unsure if they are on a different page or if the current page reloaded.
- Example: If focus gets lost is after closing a dialog. The focus should be set to the original element that triggered it.

### When setting focus, the target element must contain text that can be programmatically determined

- If you must set focus to a non-interactive element, it should have text to allow screen readers to read the text inside the container.
  - When setting focus to a non-interactive element, the element should _not_ be added to the tab order of the page through `tabindex="0"`, the focus only needs to be set via JavaScript.
- If focus is set to an empty container, screen readers will have nothing to read, so this should be avoided.
