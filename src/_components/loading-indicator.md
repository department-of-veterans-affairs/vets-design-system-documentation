---
layout: component
title: "Loading indicator"
intro-text: "A loading indicator provides a clue to ongoing activity when the site needs to load additional content."
research-title: "Loading indicators"
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/F7EE9993-F4A9-4384-A074-329473A10D43
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
