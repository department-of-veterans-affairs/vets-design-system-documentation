---
layout: component
title: Banner
status: use-deployed
intro-text: "Banners are fixed content at the top of the page used for dismissible announcements such as new tools, news, etc."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-banner
---

## Examples

### Default

{% include storybook-preview.html story="components-va-banner--default" height="172px" link_text="va-banner" %}

### Closeable

{% include storybook-preview.html story="components-va-banner--closeable" height="172px" link_text="va-banner" %}

## Usage

### When to use va-banner

- When there is very important information that should exist on the top of the webpage that should be visible to all users.

### When to consider something else

- If the information is important but can exist within the context of the webpage and could be satisfied with using a `va-alert` web component instead.

### How to use va-banner

- Add a headline, type, and visible prop to have the component display on the page.
- If the banner should not be visible, have a button to be dismissible, or be dismissed to sessionStorage instead of localStorage additional props can be added to accommodate.


{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Aria `role` of `banner` will be added to the child `va-alert` component to notify users that a banner is to be utilized as the `region`. 