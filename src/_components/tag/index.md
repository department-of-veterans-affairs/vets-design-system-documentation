---
layout: component
permalink: /components/tag/
title: Tag
intro-text: A tag draws attention to new or important content.
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1295%3A9688&mode=design&t=gIDFGH785CqLb8c6-1
github-title: va-tag
status: use-deployed
sub-pages:
  - sub-page: Tag - Status
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default tag

{% include storybook-preview.html height="50px" story="components-tag--default" link_text="View Tag" %}

Used to draw attention to new or important content, categorize information, or indicate counts. Unlike Status Tags, regular Tags use neutral colors and don't convey semantic meaning through color.

## Usage

### When to use a tag

* **To draw attention to new, important content** on a page that might otherwise be missed.
* **To categorize results** with one or more tags by topic, type, or other categorical information.
* **To indicate quantity or count** of new or unread items within a container. For example, to indicate the number of unread emails within a person's inbox.

{% include content/tag-status-vs-tag.md %}

### When to consider something else

* **For status communication.** Use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component when you need to communicate current state, condition, or progress with semantic color meanings.
* **When users are likely to confuse a static tag with a button.** For example, when the label appears in the same area of the page as buttons.
* **When the tag functions as a title.** When the tag content is more accurately described as the title or primary identifier of the content. Use the [Eyebrow](https://design.va.gov/foundation/typography#eyebrow) header style, which is a short, descriptive title placed above the main heading to provide additional context.
* **When the tag functions as a link.** Tags are not intended to be interactive. Use the [critical action component]({{ site.baseurl }}/components/critical-action/) if you're needing to turn the tag into a clickable element.

### How to use tags

* **Users frequently confuse tags as buttons.** Always conduct usability testing to make sure your particular implementation is not causing frustration.
* **Tags should not be interactive.** Tags are designed to be static labels that convey information, not clickable elements. They should not have hover, focus, or active states that suggest interactivity.
* **Don't overdo it.** If everything on a page is called out as important, nothing is important.

## Accessibility considerations

* **Contrast requirements.** All tag variations meet WCAG 2.2 AA color contrast requirements for both text and background colors, and between the tag background and the page background.
* **Keyboard navigation.** Tags are static, non-interactive elements that should not receive keyboard focus. Ensure tags don't interfere with the natural keyboard navigation flow of the page. Users navigating with the Tab key should move past tags to the next focusable element without interruption.
* **Screen reader support.** Regular Tags are announced as their text content without additional context (unlike Status Tags which include "Status" prefix). Ensure tag text is clear and meaningful when heard out of visual context. For count badges or numerical tags, screen readers will announce the number naturally.
* **Dynamic content.** When tags are used to indicate new or updated content that is dynamically loaded onto a page, use ARIA live regions to alert screen readers of the change. Use `aria-live="polite"` for non-urgent updates and `aria-live="assertive"` only for critical changes that require immediate attention. Avoid announcing rapid or frequent changes that could overwhelm screen reader users.
* **Cognitive accessibility.** Use consistent placement and behavior of Tags across the application to help users with cognitive disabilities predict where to find information. Keep tag text simple and avoid technical jargon that Veterans may not understand.


## Related

* [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)

{% include _component-checklist.html component_name="va-tag" %}
