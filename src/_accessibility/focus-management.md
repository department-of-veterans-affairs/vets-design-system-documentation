---
layout: documentation
title: Focus management
permalink: /accessibility/focus-management
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

This can occur when the order of elements in the source is wrong. If an element's position is moved via CSS, it can move that element from where it would normally be positioned. Elements could also be hidden on a page, typically through moving it off-screen or changing it's opacity, but not taken out of the tab order. This makes them focusable even if the focus indicator cannot be seen. Because of that, be sure to test that focus is not placed on an element that is not visible.

### Focus management

On most static pages, you won’t need to move focus because browsers handle that automatically. However, on pages and apps with dynamic content, you may need to move focus manually to improve usability and help users stay oriented.

Effective focus management can benefit everyone, but it’s especially important for people using screen readers or magnification tools, who might otherwise not know when page content has updated.

#### Why focus management matters

* **Moving focus can help users understand where they are.** When a new element receives focus, screen readers announce it, giving users immediate context about their location.
* **Managing focus can bring users closer to the next relevant action.** Moving focus to the right location can make it easier for users to find information and complete tasks.

### Focus management can also harm usability

* **Moving focus can be disorienting for the user.** If a user is already interacting with the page, moving focus can be disruptive and confusing. Only manage focus when it’s needed.
* **Moving focus can disrupt other screen reader announcements.** Since newly focused elements tend to be prioritized in screen reader announcements, focus management can prevent aria-live from announcing as expected.

### General guidelines

* **Move focus to interactive elements like buttons, links, and inputs.** Some combinations of browsers and assistive technologies behave unpredictably when focus lands on elements that are not natively interactive.
* **Give focusable elements descriptive text or an accessible label.** This context helps users immediately understand where they are and what they need to do.
* **Scroll the focused element into view.** Don’t let sticky headers or overlays hide it.

### Managing focus when a new page loads

* **Do not move focus when a static page loads.** Browsers automatically set focus at the top, which works well for most users.
* **For single-page applications, set focus to the top unique heading when a new page loads.**  If the new content does not have a unique heading, choose the element that gives users the most context. For multi-page forms, follow the specific guidance for [managing focus in form flows]({{ site.baseurl }}/forms/accessibility-guidelines/#managing-focus-in-form-flows).

### When page content is added or removed

* **Move focus to new content.** When content is added to the page as a result of user action, focus should be moved to the new content.
* **Restore focus to a logical location when content is removed.** If content is removed, set focus to the next logical spot for the user. For an example, see the [guidance for managing focus when closing a modal](#when-opening-and-closing-a-modal).
* **Do not move focus when content is loading.** Instead of moving focus to the loading indicator, use ARIA attributes to announce the loading state.

### When there is an error

* **When an error blocks the next action, move focus to the first input with an error.**  If the error isn’t tied to a specific input, move focus instead to the first interactive element that lets the user fix it. After the error is resolved and the user successfully advances to the next view, follow the [guidance for moving focus when a new page loads](#managing-focus-when-a-new-page-loads).

### When opening and closing a modal

* **Move focus to the first interactive element in the modal, unless it’s a destructive action.** The element can be a button, a form input, or the "close" button. However, if the first interactive element is a destructive action, choose a safer place to focus.
* **When the modal closes, restore focus to the button that opened it.** This helps users continue their workflow without losing their place.

### Managing focus in multi-page forms

* Follow the guidance for [managing focus in form flows]({{ site.baseurl }}/templates/forms/accessibility-guidelines#managing-focus-in-form-flows)

### Developer considerations

* **Moving focus inside the Shadow DOM can result in unexpected behavior.** To manage focus reliably across browsers and assistive technologies, only move focus to natively interactive elements, and test thoroughly.
