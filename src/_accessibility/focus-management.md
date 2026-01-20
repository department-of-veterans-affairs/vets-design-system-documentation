---
layout: documentation
title: Focus management
permalink: /accessibility/focus-management
intro-text: Focus shows which element is active and ready for input. Good focus management helps everyone, and is especially important for people who navigate without a mouse and people who use screen readers.
anchors:
  - anchor: Related WCAG criteria
  - anchor: Focus appearance
  - anchor: Focus order
  - anchor: Focus management
---
## Related WCAG criteria

* [1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
* [2.4.3 Focus Order (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
* [2.4.7 Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
* [2.4.11 Focus Not Obscured (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
* [2.4.13 Focus Appearance (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
* [3.2.1 On Focus (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)

## Focus appearance

When an element receives focus, it should show a clear visual indicator that it’s active and ready for input. This helps people who don’t use a mouse know where they are on the page, and makes interacting with the page more predictable.

On VA.gov, we use a thick gold outline to indicate focus, as shown in this screenshot:

![Screenshot showing a bold gold outline around a focused button, indicating the visual focus indicator on VA.gov]({{ site.baseurl }}/images/about/accessibility/focus-management/focus-indicator.png)

### Guidelines for focus appearance

* **Don't disable the focus indicator.** Without a visible focus outline, sighted users may struggle to identify the currently focused element, making navigation difficult.
* **Don't create custom focus styles.** The design system provides global focus styles to keep them consistent across the website.
* **Make sure that the focus outline is fully visible.** When elements are grouped closely together, the focus outline can get cut off or overlap with other components. Test that there is enough room around each interactive element to show the entire focus indicator.

## Focus order

As users navigate a page without a mouse, focus should move through the page elements in a way that’s logical, predictable, and meaningful. A sequential focus order (also called "tab order") helps users follow the content structure and understand what comes next.

### Guidelines for focus order

* **Focus order should match the visual reading order of the page.** For English pages, focus should move left to right, then top to bottom.
* **Only include interactive elements in the tab order.** Users expect focus to move only to interactive elements like buttons, links, and form fields.

## Focus management

On most static pages, you won’t need to move focus because browsers handle that automatically. However, on pages with dynamic content, you may need to move focus manually to improve usability and help users stay oriented when page content changes.

{% include a11y/focus-management-benefits-risks.md %}

### Guidelines for focus management

#### General guidelines

* **When available, move focus to interactive elements like buttons, links, and inputs.** Some combinations of browsers and assistive technologies behave unpredictably when focus lands on elements that are not natively interactive.
* **Give focusable elements descriptive text or an accessible label.** This context helps users immediately understand where they are and what they need to do.
* **Scroll the focused element into view.** Don’t let sticky headers or overlays hide it.

#### When a new page loads

* **Don't move focus when a static page loads.** Browsers automatically set focus at the top, which works well for most users.
* **For single-page applications, set focus to the first unique heading when a new page loads.** If the new content does not have a unique heading, choose the element that gives users the most context. For multi-page forms, follow the specific guidance for [managing focus in form flows]({{ site.baseurl }}/templates/forms/accessibility-guidelines#managing-focus-in-form-flows).

#### When page content is added or removed

* **Move focus to new content.** When content is added to the page as a result of user action, focus should be moved to the new content.
* **Restore focus to a logical location when content is removed.** If content is removed, set focus to the next logical spot for the user. For an example, see the [guidance for focus management when opening or closing a modal](#when-opening-and-closing-a-modal).
* **Don't move focus when content is loading.** Instead of moving focus to the loading indicator, use ARIA attributes to announce the loading state. Once loading is complete, move focus to the new content.

#### When there is an error on the page

* **When an error blocks the next action, move focus to the first input with an error.** If the error isn’t tied to a specific input, move focus to the first interactive element that lets the user fix it. After the error is resolved and the user successfully advances to the next view, follow the [guidance for moving focus when a new page loads](#when-a-new-page-loads).

#### When opening and closing a modal

* **When the modal opens, move focus to the first interactive element in the modal, unless it’s a destructive action.** The element can be a button, a form input, or the "close" button. However, if the first interactive element is a destructive action, choose a safer place to focus.
* **Ensure keyboard focus is trapped inside the modal.** While the modal is open, focus should stay inside the modal and should not move to the page elements behind it.
* **When the modal closes, restore focus to the button that opened it.** This helps users continue their workflow without losing their place.

#### When inside a multi-page form

* **Follow the guidance for [managing focus in form flows]({{ site.baseurl }}/templates/forms/accessibility-guidelines#managing-focus-in-form-flows).**

#### Developer considerations

* **Moving focus to an element inside the Shadow DOM can result in unexpected behavior.** For example, some browsers and screen readers may not announce focus changes inside custom elements, or may skip them entirely. To manage focus reliably across browsers and assistive technologies, only move focus to natively interactive elements, and test thoroughly.
* **Consider removing aria-live when you’re also managing focus.** These two announcement methods can conflict if they fire at the same time. Focus changes are usually announced more reliably, so prefer focus announcements whenever possible.
