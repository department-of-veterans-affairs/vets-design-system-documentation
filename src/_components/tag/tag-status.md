---
layout: component
title: Tag - Status
permalink: /components/tag/tag-status/
has-parent: /components/tag/
intro-text: A Status Tag indicates the current state or condition of content, processes, or items.
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=39019-83
github-title: va-tag-status
status: use-with-caution-candidate
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Accessibility considerations
  - anchor: Content considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

Status Tags use semantic colors to convey meaning and priority, aligning with the same color conventions used in the [Alert component]({{ site.baseurl }}/components/alert/). Each color variation has a specific semantic meaning that should be consistently applied.

### Informational status

{% include storybook-preview.html story="components-va-tag-status--default" link_text="va-tag-status info" %}

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

### Warning status

{% include storybook-preview.html story="components-va-tag-status--warning" link_text="va-tag-status warning" %}

Used to warn a user, such as when there are negative consequences, or when an action cannot continue.

### Success status

{% include storybook-preview.html story="components-va-tag-status--success" link_text="va-tag-status success" %}

Used to indicate success.

### Error status

{% include storybook-preview.html story="components-va-tag-status--error" link_text="va-tag-status error" %}

Used to indicate critical issues, failure states, or items that require immediate attention.

## Usage

### When to use a Status Tag

* **To communicate current state or progress.** Status Tags help users quickly understand the status of an item, process, or workflow—such as "Pending," "Approved," or "Error"—at a glance.
* **To indicate urgency or required action.** Use warning or error Status Tags to signal items that need attention or immediate action, helping users prioritize tasks.
* **To provide scannable feedback at a glance.** Status Tags combine color, icons, and short labels to communicate meaning consistently, making it easier to scan lists, tables, or dashboards.

{% include content/tag-status-vs-tag.md %}

### When to consider something else

* **When you might confuse tags with buttons.** For example, if tags appear near buttons on the page, users may mistake them for interactive elements.
* **For labels longer than 1-3 words.** Tags work best with brief, scannable text. For longer descriptive text, consider using other options like the [Status via label with indicator]({{ site.baseurl }}/components/card#status-via-label-with-indicator) within the Card component.
* **When the Status Tag functions as a title.** Don't use a Status Tag when the Tag content is more accurately described as the title or primary identifier of the content. Instead, use that text as the Card's heading.
* **Consider the Eyebrow Header style as an alternative.** The [Eyebrow](https://design.va.gov/foundation/typography#eyebrow) Header is a short, descriptive title placed above the main heading to provide additional context and maintain consistency.
* **When lack of change in content makes Tags ineffective.** If content updates are infrequent users may not notice or expect "new" Tags. Use Tags to call attention to a change in status.
* **For system-wide alerts.** Use the [Alert]({{ site.baseurl }}/components/alert/) for page-level or application-level messaging that requires more context or action from you.
* **For temporary feedback.** Consider using the [Dismissable Alert]({{ site.baseurl }}/components/alert/#dismissible) for web components and the [Snackbar]({{ site.baseurl }}/components/snackbar) for Mobile app component for brief, dismissible feedback messages.
* **When you need to mix Status Tags and Tags in a way that confuses their meaning.** Always use semantic colors for Status Tags and neutral or brand colors for Tags.
* **When the tag functions as a link.** Tags are not intended to be interactive. Use the [Critical Action component]({{ site.baseurl }}/components/critical-action) if you're needing to turn the tag into a clickable element.

### How to use tags

* **Status updates within containers.** Use Status Tags to indicate status within containers such as cards, tables, or other UI elements. See the [Card guidance]({{ site.baseurl }}/components/card) when using a Tag within Cards.
* **For data-heavy interfaces.** Use Status Tags to help users quickly scan and prioritize information based on semantic meaning.
* **Tags shouldn't be interactive.** Tags are designed to be static labels that convey information, not clickable elements. They shouldn't have hover, focus, or active states that suggest interactivity.
* **Test for user confusion.** Users might confuse tags with buttons. Always conduct usability testing to make sure your particular implementation isn't causing frustration.
* **Use Tags sparingly.** Don't overdo it — if everything on a page is called out as important, nothing is important.
* **Use semantic colors consistently.** Apply the same color meanings across all components (tags, alerts, etc.) to create a cohesive experience for users.
* **For status within Cards.** When using Tags to communicate status within card components, see the [Card Status guidance]({{ site.baseurl }}/components/card/card-status) for specific implementation details and best practices.

## Accessibility considerations

* **Color and meaning.** When Status Tags are used to convey semantic meaning, ensure that the information is also available through other means such as descriptive text, icons, or contextual clues within the interface. Don't rely solely on color to communicate important information. Use consistent text patterns and clear language that reinforces the visual meaning.
* **Contrast requirements.** All Status Tag variations meet WCAG 2.2 AA color contrast requirements for both text and background colors, and between the tag background and the page background.
* **Context.**  Users must be able to easily identify the content that is associated with the Status Tag. The visual design and the HTML structure around the Status Tag should both make this clear. For example, if the Status Tag applies to a heading, wrap the tag inside that heading element.
* **Keyboard navigation.** Status Tags are static, non-interactive elements that shouldn't receive keyboard focus. Ensure tags don't interfere with the natural keyboard navigation flow of the page. Users navigating with the Tab key should move past tags to the next focusable element without interruption.
* **Screen reader support.** The Tag Status component announces hidden screen reader text, "Status" before the content of the tag is announced (for example: "Status, Approved" or "Status, Error"). This helps users understand that this is a status indicator and not a generic label. This additional context improves comprehension since much of the semantic meaning is communicated visually through color. Teams cannot change this announcement pattern at this time.
* **Dynamic content.** When Tags are used to indicate new or updated content that is dynamically loaded onto a page, use ARIA live regions to alert screen readers of the change. Use `aria-live="polite"` for non-urgent status updates and `aria-live="assertive"` only for critical status changes that require immediate attention. Avoid announcing rapid or frequent status changes that could overwhelm screen reader users.
* **Cognitive accessibility.** Use consistent placement and behavior of Status Tags across the application to help users with cognitive disabilities predict where to find status information. Keep tag text simple and avoid technical jargon that Veterans may not understand. Don't overwhelm users with too many status indicators on a single page or interface.

## Content considerations

* **Be concise.** Keep Tag text brief and scannable. Use 1-3 words when possible.
* **Use consistent terminology.** Apply the same language for similar statuses across the platform (e.g., always use "Approved" rather than mixing "Approved," "Complete," and "Done").
* **Match semantic meaning.** Ensure the Tag text aligns with its color meaning. Don't use error-colored Tags for positive messages.
* **Consider context.** The Tag's meaning should be clear within the context where it appears. Avoid jargon or technical terms that Veterans may not understand.

### Status examples by semantic color

The following status names are known to be in-use across VA.gov (as of October 2024):
- [Appeals](https://www.va.gov/resources/what-your-decision-review-or-appeal-status-means/) has over 40 status labels.
- Appointments:
  - Upcoming (Informational)
  - Requested (Informational)
  - Past (Informational)
  - Canceled (Error)
- [Claims](https://www.va.gov/resources/what-your-claim-status-means/):
  - Claim received (Informational)
  - Initial review (Informational)
  - Evidence gathering, review, and decision (Informational)
  - Preparation for notification (Informational)
  - Complete (Success)

## Related

* [Tag]({{ site.baseurl }}/components/tag/)
* [Alert]({{ site.baseurl }}/components/alert/)
* [Card]({{ site.baseurl }}/components/card)
* [Snackbar]({{ site.baseurl }}/components/snackbar)

{% include _component-checklist.html component_name="va-tag-status" %}
