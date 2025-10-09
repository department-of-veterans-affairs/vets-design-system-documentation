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
---

## Examples

{% include storybook-preview.html height="50px" story="components-tag--default" link_text="View Tag" %}

## Usage

### When to use a tag

* **To draw attention to new, important content** on a page that might otherwise be missed.
* **To filter or categorize results** with one or more tags by topic, type, or other categorical information.
* **To indicate quantity or count** of new or unread items within a container. For example, to indicate the number of unread emails within a person's inbox.

{% include content/tag-status-vs-tag.md %}

### When to consider something else

* **For status communication.** Use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component when you need to communicate current state, condition, or progress with semantic color meanings.
* **When users are likely to confuse a static tag with a button.** For example, when the label appears in the same area of the page as buttons.
* **When the tag functions as a title.** When the tag content is more accurately described as the title or primary identifier of the content. Use the [Eyebrow](https://design.va.gov/foundation/typography#eyebrow) header style, which is a short, descriptive title placed above the main heading to provide additional context.
* **When users already expect content to be updated frequently.** For example, on a site dedicated to breaking news. In this case placing the new content at the top may be enough.


### How to use tags

* Users frequently confuse tags as buttons. Always conduct usability testing to make sure your particular implementation is not causing frustration.
* If your tags are not interactive, be sure to disable hover, focus, and active styles.
* Don't mix interactive and static tags on your site. Once you establish a pattern for how tags behave, users will expect that behavior every time.
* Don't overdo it — if everything on a page is called out as important, nothing is important.

## Accessibility considerations

When tags are used to call out new content that is dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change.

## Related

* [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)
* [Card]({{ site.baseurl }}/components/card/)
