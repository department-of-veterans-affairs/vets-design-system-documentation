---
layout: documentation
title: Focus management
permalink: /accessibility/focus-management
intro-text: Focus shows which element is active and ready for input. Good focus management helps everyone, but is especially important for people who navigate without a mouse and screen reader users.
anchors:
  - anchor: Focus indicator
  - anchor: Focus order
  - anchor: Focus management
---
## Related WCAG criteria

* [1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
* [2.4.7 Focus visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
* [2.4.11 Focus Not Obscured (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
* [2.4.13 Focus Appearance (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance)
* [3.2.1 On Focus (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)

## Focus appearance

When an element receives focus, it should display a distinct visual indicator that clearly conveys that the element is focused. This helps users understand where they are on the page. On VA.gov, we use a bold gold outline to indicate focus, as shown in this screenshot:

![Screenshot showing a bold gold outline around a focused button, indicating the visual focus indicator on VA.gov]({{ site.baseurl }}/images/about/accessibility/focus-management/focus-indicator.png)

### Guidelines for focus appearance

* **Don't disable the focus outline.** Without a visible focus outline, sighted users may struggle to identify the currently focused element, making navigation difficult.
* **Don't change the focus outline.** VA.gov sets focus styles globally to keep them consistent. Custom styles can create inconsistencies across the site.
* **Make sure that the focus outline is fully visible.** When elements are grouped closely together, the focus outline can get cut off or overlap with other components. Test that there is enough room around each interactive element to show the entire focus indicator.

## Focus order

As users navigate a page without a mouse, focus should move in a way that’s logical, predictable, and meaningful. A clear focus order (also called "tab order") helps users follow the content structure and understand what comes next.

### Guidelines for focus order

* **Focus order should match the visual reading order of the page.** For English pages, focus should move left to right, then top to bottom.
* **Only include interactive elements in the tab order.** Users expect focus to move only to interactive elements like buttons, links, and form fields.

## Focus management

On most static pages, you won’t need to move focus because browsers handle that automatically. However, on pages with dynamic content, you may need to move focus manually to improve usability and help users stay oriented.

Effective focus management can benefit everyone, but it’s especially important for people using screen readers or magnification tools, who might otherwise not know when page content has updated.

### Why focus management matters

* **Moving focus can help users understand where they are.** When a new element receives focus, screen readers announce it, giving users immediate context about their location.
* **Managing focus can bring users closer to the next relevant action.** Moving focus to the right location can make it easier for users to find information and complete tasks.

### Focus management can also harm usability

* **Moving focus can be disorienting for the user.** If a user is already interacting with the page, moving focus can be disruptive and confusing. Only manage focus when it’s needed.
* **Moving focus can disrupt other screen reader announcements.** Since newly focused elements tend to be prioritized in screen reader announcements, focus management can prevent aria-live from announcing as expected.

### Guidelines for focus management

* **Move focus to interactive elements like buttons, links, and inputs.** Some combinations of browsers and assistive technologies behave unpredictably when focus lands on elements that are not natively interactive.
* **Give focusable elements descriptive text or an accessible label.** This context helps users immediately understand where they are and what they need to do.
* **Scroll the focused element into view.** Don’t let sticky headers or overlays hide it.

#### Managing focus when a new page loads

* **Do not move focus when a static page loads.** Browsers automatically set focus at the top, which works well for most users.
* **For single-page applications, set focus to the top unique heading when a new page loads.**  If the new content does not have a unique heading, choose the element that gives users the most context. For multi-page forms, follow the specific guidance for [managing focus in form flows]({{ site.baseurl }}/forms/accessibility-guidelines/#managing-focus-in-form-flows).

#### Managing focus when page content is added or removed

* **Move focus to new content.** When content is added to the page as a result of user action, focus should be moved to the new content.
* **Restore focus to a logical location when content is removed.** If content is removed, set focus to the next logical spot for the user. For an example, see the [guidance for managing focus when closing a modal](#when-opening-and-closing-a-modal).
* **Do not move focus when content is loading.** Instead of moving focus to the loading indicator, use ARIA attributes to announce the loading state.

#### Managing focus when there is an error on the page

* **When an error blocks the next action, move focus to the first input with an error.**  If the error isn’t tied to a specific input, move focus instead to the first interactive element that lets the user fix it. After the error is resolved and the user successfully advances to the next view, follow the [guidance for moving focus when a new page loads](#managing-focus-when-a-new-page-loads).

#### Managing focus when opening and closing a modal

* **Move focus to the first interactive element in the modal, unless it’s a destructive action.** The element can be a button, a form input, or the "close" button. However, if the first interactive element is a destructive action, choose a safer place to focus.
* **When the modal closes, restore focus to the button that opened it.** This helps users continue their workflow without losing their place.

#### Managing focus when inside a multi-page form

* Follow the guidance for [managing focus in form flows]({{ site.baseurl }}/templates/forms/accessibility-guidelines/#managing-focus-in-form-flows)

#### Developer considerations

* **Moving focus inside the Shadow DOM can result in unexpected behavior.** For example, some browsers and assistive technologies may not announce focus changes inside custom elements, or may skip them entirely. To manage focus reliably across browsers and assistive technologies, only move focus to natively interactive elements, and test thoroughly.
