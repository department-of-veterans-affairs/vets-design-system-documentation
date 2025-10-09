---
layout: component
title: Tag - Status
permalink: /components/tag/tag-status/
has-parent: /components/tag/
intro-text: A status tag indicates the current state or condition of content, processes, or items.
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=39019-83
github-title: va-tag-status
status: use-with-caution-candidate
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Examples - Colored variations
  - anchor: Usage
  - anchor: Accessibility considerations
  - anchor: Content considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

Colored tags use semantic colors to convey meaning and priority, aligning with the same color conventions used in the [Alert component]({{ site.baseurl }}/components/alert/). Each color variation has a specific semantic meaning that should be consistently applied.

### Informational status

{% include storybook-preview.html story="components-tag--info" link_text="components-tag--info" %}

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

### Warning status

{% include storybook-preview.html story="components-tag--warning" link_text="components-tag--warning" %}

Used to warn a user, such as when there are negative consequences, or when something has gone wrong.

### Success status

{% include storybook-preview.html story="components-tag--success" link_text="components-tag--success" %}

Used to indicate success.

### Error status

{% include storybook-preview.html story="components-tag--error" link_text="components-tag--error" %}

Used to indicate critical issues, failure states, or items that require immediate attention.

## Usage

### When to use a Status Tag

* **To communicate current state or progress.** Status Tags help users quickly understand the status of an item, process, or workflow—such as "Pending," "Approved," or "Error"—at a glance.
* **To indicate urgency or required action.** Use warning or error Status Tags to signal items that need attention or immediate action, helping users prioritize tasks.
* **To provide scannable feedback with semantic meaning.** Status Tags combine color and short labels to communicate meaning consistently, making it easier to scan lists, tables, or dashboards.

{% include content/tag-status-vs-tag.md %}

### When to consider something else

* **When you might confuse tags with buttons.** For example, if tags appear near buttons on the page, users may mistake them for interactive elements.
* **For labels longer than 1-3 words.** Tags work best with brief, scannable text. For longer descriptive text, consider using other options like the [Status via Tag]({{ site.baseurl }}/components/card#status-via-tag) within the Card component.
* **When the Status Tag functions as a title.** Don't use a Status Tag when the tag content is more accurately described as the title or primary identifier of the content. For example, avoid using an "Education Benefits" tag on a card about education benefits. Instead, use that text as the card's heading. You can also use the [Eyebrow](https://design.va.gov/foundation/typography#eyebrow) Header style, which is a short, descriptive title placed above the main heading to provide additional context and maintain consistency.
* **When lack of change in content makes tags ineffective.** If content updates are infrequent users may not notice or expect "new" tags. Use tags to call attention to a change in status.
* **For system-wide alerts.** Use the [Alert]({{ site.baseurl }}/components/alert/) for page-level or application-level messaging that requires more context or action from you.
* **For temporary feedback.** Consider using the [Dismissable Alert]({{ site.baseurl }}/components/alert/#dismissible) for web components and the [Snackbar]({{ site.baseurl }}/components/snackbar/) for Mobile app component for brief, dismissible feedback messages.
* **When you need to mix status tags and tags in a way that confuses their meaning.** Always use semantic colors for Status Tags and neutral or brand colors for Tags.

### How to use tags

* **Status updates within containers.** To indicate a status in a card, table, or container. See the [Card guidance]({{ site.baseurl }}/components/card/) when using a Tag within cards.
* **For data-heavy interfaces.** Use Tags - Status to help users quickly scan and prioritize information based on semantic meaning.
* **Tags should not be interactive.** Tags are designed to be static labels that convey information, not clickable elements. They should not have hover, focus, or active states that suggest interactivity.
* **Test for user confusion.** You might confuse tags with buttons. Always conduct usability testing to make sure your particular implementation is not causing frustration.
* **Use tags sparingly.** Don't overdo it — if everything on a page is called out as important, nothing is important.
* **Use semantic colors consistently.** Apply the same color meanings across all components (tags, alerts, etc.) to create a cohesive experience for you.
* **Don't rely on color alone.** Make sure the semantic meaning is also conveyed through clear text labels to maintain accessibility.
* **For status within cards.** When using tags to communicate status within card components, see the [Card component status guidance]({{ site.baseurl }}/components/card#using-status-tags-in-cards) for specific implementation details and best practices.

## Accessibility considerations

* **Color and meaning.** When colored tags are used to convey semantic meaning, ensure that the information is also available through other means such as text, icons, or context. Don't rely solely on color to communicate important information.
* **Contrast requirements.** All colored tag variations meet WCAG 2.1 AA color contrast requirements for both text and background colors.
* **Screen reader support.** Consider including visually hidden text or aria-labels that describe the semantic meaning (e.g., "Error:", "Success:", "Warning:") for screen reader users.
* **Dynamic content.** When tags are used to call out new content that is dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change.
* **Focus indicators.** For interactive tags, ensure proper focus indicators are visible for keyboard navigation users.

## Content considerations

* **Be concise.** Keep tag text brief and scannable. Use 1-3 words when possible.
* **Use consistent terminology.** Apply the same language for similar statuses across the platform (e.g., always use "Approved" rather than mixing "Approved," "Complete," and "Done").
* **Match semantic meaning.** Ensure the tag text aligns with its color meaning. Don't use error-colored tags for positive messages.
* **Consider context.** The tag's meaning should be clear within the context where it appears. Avoid jargon or technical terms that Veterans may not understand.

## Related

* [Tag]({{ site.baseurl }}/components/tag/)
* [Alert]({{ site.baseurl }}/components/alert/)
* [Card]({{ site.baseurl }}/components/card/)
* [Snackbar]({{ site.baseurl }}/components/snackbar/)

{% include _component-checklist.html component_name="va-tag-status" %}