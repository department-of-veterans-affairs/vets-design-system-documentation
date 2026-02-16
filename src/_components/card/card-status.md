---
layout: component
title: Card - Status
has-parent: /components/card/
permalink: /components/card/card-status/
github-title: va-card-status
research-title: card-status
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=44355-6605&t=CELULnAK5Ke87Rc1-1
intro-text: "Card Status displays information that users can edit, such as appointments or contact details. It can show a status and provides a single action link. The component uses required fields to maintain consistency."
web-component: va-card-status
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-card-status--default" link_text="va-card-status default" %}

### With Label

{% include storybook-preview.html story="components-va-card-status--missing-content-state" link_text="va-card-status with label" %}

### With Error

{% include storybook-preview.html story="components-va-card-status--error-state" link_text="va-card-status with error" %}

## Usage

### When to use Card Status
- **Framing a call to action.** Card Status highlights and frames a specific call to action or decision a user needs to make.
- **Conveying status.** Card Status contains information with a status such as appointments, claims, or missing required information.
- **Giving feedback for data within the card.** Card Status allows for an error state that conveys immediate feedback for users to correct their data.

### When to consider something else
- **When you need flexible content structure.** Use the [Card component]({{ site.baseurl }}/components/card) when you need full control over the card's content and structure, rather than working with predefined props.
- **When status isn't the focus.** Use the [Card component]({{ site.baseurl }}/components/card) for informational cards where status communication isn't the primary purpose.
- **When you need multiple calls to action.** Use the [Card component]({{ site.baseurl }}/components/card) if you need more than one call to action (Card allows up to 3 CTAs).

### How this component works

Card Status differs from Card in its structure. While [Card]({{ site.baseurl }}/components/card) is a flexible container where teams build their own content, Card Status uses required fields to maintain consistency. Use Card Status for information users can edit, with an optional status when information is missing or needs action.

#### Default

{% include component-example.html alt="The default Card Status shows a heading, body text, and a link" file="/images/components/card-status/card-status.png" caption="The default Card Status displays a heading, body text, and action link." width="480" %}

Card Status requires specific props to enforce a consistent pattern:

**Required props:**
- `heading` - The card title
- `body` - The descriptive text
- `link-text` and `link-href` - The action link
- `status` (optional) - Status tag using [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)

The component automatically handles the layout, accessibility, and visual treatment, ensuring consistency across implementations.

#### Status display

{% include component-example.html alt="Card Status shows a status label, a heading, body text, and a link" file="/images/components/card-status/card-status-with-tag.png" caption="Card Status with a status label displays the label, heading, body text, and action link." width="480" %}

The `status` prop uses the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component to indicate when information is missing or requires user attention. The component programmatically announces the status to screen readers along with the card header. See [accessibility considerations](#accessibility-considerations) for implementation details.

#### Error state

{% include component-example.html alt="Card Status with an error state, showing a status label, a heading, error text, body text, and a link. The card is wrapped in a red border to indicate an error." file="/images/components/card-status/card-status-with-error.png" caption="Card Status in an error state displays a red border, status label, heading, error message, body text, and action link." width="480" %}

This state is triggered when validation errors occur, such as when a user tries to proceed in a form flow without providing required information. Card Status, in the error state, follows VADS error styling and displays inline error messages that automatically announce to screen readers. The error message clearly states what's wrong and how to fix it. After the user provides the missing information, the card returns to its default state.

## Behavior

### Calls to action (CTA)

* **Single CTA only.** Card Status supports only one call to action, typically to add or edit data. This is more restrictive than the standard [Card component]({{ site.baseurl }}/components/card), which allows up to 3 CTAs.
* **Use action links.** The CTA should use a [secondary action link]({{ site.baseurl }}/components/link/action).

### Placement

Card Status uses the same placement, dimensions, and layout as described in the [Card component]({{ site.baseurl }}/components/card#placement).

{% include component-docs.html component_name=page.web-component %}

## Content considerations

Card Status follows the same [content considerations as the Card component]({{ site.baseurl }}/components/card#content-considerations).

Additionally:
* **Clear status labels.** Use concise, plain language status labels (e.g., "Missing", "In progress", "Completed").
* **Actionable error messages.** Error messages must follow the VA.gov pattern: state what's wrong and how to fix it.

## Accessibility considerations

Card Status follows the same [basic accessibility considerations as the Card component]({{ site.baseurl }}/components/card#accessibility-considerations), including list markup and keyboard navigation.

The Card Status component handles most status and error accessibility automatically and meets WCAG 2.2 AA criteria. Teams need to:

* **Set appropriate heading levels.** Choose the heading level that fits your page's outline structure. For example, if Card Status appears in a section under an `<h2>`, use `<h3>` for card headings.
* **Write clear error messages.** Follow the VA.gov pattern: state what's wrong and how to fix it.

### How Card Status handles accessibility programmatically

**Status announcements:**
* Status uses the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component with `role="status"`. The Tag Status component includes visually hidden text that announces "Status" before the tag text (for example, "Status, Error"), and teams can't change this announcement pattern.
* The component programmatically associates status with the card heading.

**Error handling:**
* Error messages wrapped in `role="alert"` for automatic announcement
* Errors linked to action links via `aria-describedby`
* Focus remains on the action link (not moved to error) to prevent disorientation
* Error state visually indicated by icon and text, not color alone

**Heading structure:**
* Card headings use semantic heading tags (teams set these based on page structure)
* Screen readers read status and heading together

**Keyboard navigation:**
* Tab key navigates to the action link within the card
* Enter key or spacebar activates the link

## Related
* [Card]({{ site.baseurl }}/components/card) - Base component for non-status cards
* [Service list item]({{ site.baseurl }}/components/service-list-item)
* [Link - Action]({{ site.baseurl }}/components/link/action)
* [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)

{% include _component-checklist.html component_name="va-card-status" %}
