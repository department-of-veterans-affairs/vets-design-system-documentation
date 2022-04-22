---
layout: component
title: "Loading indicator"
status: use-best-practice
intro-text: "A loading indicator provides a clue to ongoing activity when the site needs to load additional content."
web-component: va-loading-indicator
---

## Example

{% include storybook-preview.html height="150px" story="components-va-loading-indicator--default" link_text="va-loading-indicator" %}

## Usage

### When to use the Loading indicator

* When the wait time for a process, such as loading a page, is unknown. 

### When to consider something else

* Use the [Standard progress bar](https://design.va.gov/components/progress-bars) for file uploads where the wait time is determinate.
* Use the [Segmented progress bar](https://design.va.gov/components/progress-bars) in forms to communicate the number of steps required to complete the form.

## Content considerations

* The Indeterminate loading indicator can appear with or without a text label.

## Accessibility considerations

* The loading indicator component is used to notify user’s that the page content is loading. W3C WAI-ARIA `aria-live="polite"`, `aria-label` and `aria-valuetext` are used to ensure screen reader users are also provided the same information.
* Make sure that the loading indicator message is clear and concise.

{% include component-docs.html component_name=page.web-component %}
