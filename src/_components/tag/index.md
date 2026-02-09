---
layout: component
permalink: /components/tag/
title: Tag
intro-text: A Tag draws attention to new or important content.
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
  - anchor: Code usage
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
* **When users are likely to confuse a static Tag with a button.** For example, when the label appears in the same area of the page as buttons.
* **When the Tag functions as a title.** When the Tag content is more accurately described as the title or primary identifier of the content. Use the [Eyebrow](https://design.va.gov/foundation/typography#eyebrow) header style, which is a short, descriptive title placed above the main heading to provide additional context.
* **When the Tag functions as a link.** Tags are not intended to be interactive. Use the [Critical Action component]({{ site.baseurl }}/components/critical-action/) if you're needing to turn the Tag into a clickable element.

### How to use tags

* **Users frequently confuse tags as buttons.** Always conduct usability testing to make sure your particular implementation isn't causing frustration.
* **Tags shouldn't be interactive.** Tags are designed to be static labels that convey information, not clickable elements. They shouldn't have hover, focus, or active states that suggest interactivity.
* **Don't overdo it.** If everything on a page is called out as important, nothing is important.

## Code usage

Refer to the [Tag component in Storybook]({{ site.baseurl }}/storybook/?path=/docs/components-tag--docs) for detailed code usage documentation.

## Accessibility considerations

* **Contrast requirements.** All Tag variations meet WCAG 2.2 AA color contrast requirements for both text and background colors, and between the Tag background and the page background.
* **Keyboard navigation.** Tags are static, non-interactive elements that shouldn't receive keyboard focus. Ensure Tags don't interfere with the natural keyboard navigation flow of the page. Users navigating with the Tab key should move past Tags to the next focusable element without interruption.
* **Screen reader support.** Regular Tags are announced as their text content without additional context (unlike Status Tags which include "Status" prefix). Ensure Tag text is clear and meaningful when heard out of visual context. For count badges or numerical Tags, screen readers will announce the number naturally.
* **Dynamic content.** When Tags are used to indicate new or updated content that is dynamically loaded onto a page, use ARIA live regions to alert screen readers of the change. Use `aria-live="polite"` for non-urgent updates and `aria-live="assertive"` only for critical changes that require immediate attention. Avoid announcing rapid or frequent changes that could overwhelm screen reader users.
* **Cognitive accessibility.** Use consistent placement and behavior of Tags across the application to help users with cognitive disabilities predict where to find information. Keep Tag text simple and avoid technical jargon that Veterans may not understand.


## Related

* [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)

{% include _component-checklist.html component_name="va-tag" %}
