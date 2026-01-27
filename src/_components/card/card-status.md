---
layout: component
title: Card - Status
has-parent: /components/card/
permalink: /components/card/card-status/
github-title: va-card-status
research-title: card-status
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=44355-6605&t=CELULnAK5Ke87Rc1-1
intro-text: "The Card Status is a structured card with required props that enforce a consistent pattern for status-driven scenarios."
status: use-with-caution-candidate
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
---

## Examples

### Default

{% include storybook-preview.html story="components-va-card-status--default" link_text="va-card-status default" %}

### With Label

{% include storybook-preview.html story="components-va-card-status---with-label" link_text="va-card-status with label" %}

### With Error

{% include storybook-preview.html story="components-va-card-status---with-error" link_text="va-card with error" %}

## Usage

### When to use Card Status
- **Framing a call to action.** Card Status highlights and frames a specific call to action or decision a user needs to take.
- **Conveying status.**  Card Status contains time-sensitive information with a status such as appointments, claims, or missing required information.


### When to consider something else
- **When you need flexible content structure.** Use the [Card component]({{ site.baseurl }}/components/card) when you need full control over the card's content and structure, rather than working with predefined props.
- **When status isn't the focus.** Use the [Card component]({{ site.baseurl }}/components/card) for informational cards where status communication isn't the primary purpose.
- **When you need multiple call to actions.** Use the [Card component]({{ site.baseurl }}/components/card) if you need more than one call-to-action (Card allows up to 3 CTAs).


### How this component works

**Key difference from Card:** While [Card]({{ site.baseurl }}/components/card) is a flexible container where teams build and pass in their own content, Card Status is a structured component with required props that enforce a consistent pattern for status-driven scenarios.

**Required props:**
- `heading` - The card title
- `body` - The descriptive text
- `link-text` and `link-href` - The action link
- `status` (optional) - Status tag using [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)

The component automatically handles the layout, accessibility, and visual treatment, ensuring consistency across implementations.

#### Status display

<img src="{{ site.baseurl }}/images/components/card-status/status-with-status-tag.png" alt="Status card via Tag" style="width:100%;"/>

Use the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component to display status. The component programmatically announces the status to screen readers along with the card header. See [accessibility considerations](#accessibility-considerations) for implementation details. 

#### Error state

<img src="{{ site.baseurl }}/images/components/card-status/card-status-with-error.png" alt="Card Status with error" style="width:100%;"/>

When validation errors occur (e.g., a user tries to continue without required data), Card Status visually displays inline error messages that automatically announce to screen readers. The error message clearly states what's wrong and how to fix it.

## Behavior

### Calls to action (CTA)

- **Single CTA only.** Card Status supports only one call-to-action, typically to add or edit data. This is more restrictive than the standard [Card component]({{ site.baseurl }}/components/card), which allows up to 3 CTAs.
- **Use action links.** The CTA should use a [secondary action link]({{ site.baseurl }}/components/link/action).


### Placement

Card Status uses the same placement, dimensions, and layout as described in the [Card component]({{ site.baseurl }}/components/card#placement).

## Code usage

{% include component-docs.html component_name=page.web-component %}

## Content considerations

Card Status follows the same [content considerations as the Card component]({{ site.baseurl }}/components/card#content-considerations).

Additionally:
- **Clear status labels.** Use concise, plain language status labels (e.g., "Missing", "In progress", "Completed").
- **Actionable error messages.** Error messages must follow the VA.gov pattern: state what's wrong and how to fix it.

## Accessibility considerations

Card Status follows the same [basic accessibility considerations as the Card component]({{ site.baseurl }}/components/card#accessibility-considerations), including list markup and keyboard navigation.

The Card Status component handles most status and error accessibility automatically and meets WCAG 2.2 AA criteria. Teams need to:

- **Set appropriate heading levels.** Choose the heading level that fits your page's outline structure.
- **Write clear error messages.** Follow the VA.gov pattern: state what's wrong and how to fix it.

### How Card Status handles accessibility programmatically

**Status announcements:**
- Status uses the [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/) component with `role="status"`
- Includes visually hidden "Status:" prefix for screen reader context
- Component programmatically associates status with the card heading

**Error handling:**
- Error messages wrapped in `role="alert"` for automatic announcement
- Errors linked to action links via `aria-describedby`
- Focus remains on the action link (not moved to error) to prevent disorientation

**Heading structure:**
- Card headings use semantic heading tags (teams set these based on page structure)
- Screen readers read status and heading together


## Related
- [Card]({{ site.baseurl }}/components/card) - Base component for non-status cards
- [Service list item]({{ site.baseurl }}/components/service-list-item) 
- [Link - Action]({{ site.baseurl }}/components/link/action)
- [Tag - Status]({{ site.baseurl }}/components/tag/tag-status/)


{% include _component-checklist.html component_name=page.web-component %}
