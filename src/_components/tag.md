---
layout: component
title: Tag
intro-text: A tag draws attention to new or important content.
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/7573C02C-6190-440F-9D70-07029D502204
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Accessibility considerations
---

## Examples

{% include storybook-preview.html height="50px" story="components-tag--default-story" %}

## Usage

### When to use a tag

* To draw attention to new, important content on a page that might otherwise be missed.
* To filter results with one or more tags.
* To indicate the number of new or unread items within a container. For example, to indicate the number of unread emails within a person’s inbox.

### When to consider something else

* When users are likely to confuse a static tag with a button. For example, when the label appears in the same area of the page as buttons.
* To call attention to new or updated content, consider changing the background color of the object itself or experiment with changing the font weight.
* When users already expect content to be updated frequently. For example, on a site dedicated to breaking news. In this case placing the new content at the top may be enough.

### How to use tags

* Users frequently confuse tags as buttons. Always conduct usability testing to make sure your particular implementation is not causing frustration.
* If your tags are not interactive, be sure to disable hover, focus, and active styles.
* Don’t mix interactive and static tags on your site. Once you establish a pattern for how tags behave, users will expect that behavior every time.
* Don’t overdo it — if everything on a page is called out as important, nothing is important.

## Accessibility considerations

When tags are used to call out new content that is dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change.
