---
layout: component
title: "Loading indicator"
intro-text: "A loading indicator provides a clue to ongoing activity when the site needs to load additional content."
research-title: "Loading indicators"
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=35%3A161&mode=design&t=vNilCSI60pQBiKkM-1
status: use-best-practice
web-component: va-loading-indicator
---

## Example

{% include storybook-preview.html height="150px" story="components-va-loading-indicator--default" link_text="va-loading-indicator" %}

## Usage

### When to use the Loading indicator

* When the wait time for a process, such as loading a page, is unknown. 

### When to consider something else

* Use the [Standard progress bar]({{ site.baseurl }}/components/progress-bar) for file uploads where the wait time is determinate.
* Use the [Segmented progress bar]({{ site.baseurl }}/components/progress-bar) in forms to communicate the number of steps required to complete the form.

## Content considerations

* Make sure that the loading indicator message is clear and concise.

## Accessibility considerations

* The loading indicator component is used to notify user’s that the page content is loading. W3C WAI-ARIA `aria-live="polite"`, `aria-label` and `aria-valuetext` are used to ensure screen reader users are also provided the same information.

{% include component-docs.html component_name=page.web-component %}
