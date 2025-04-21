---
layout: component
title: Critical Action
intro-text: The Critical Action component is used to highlight important and/or time-sensitive actions a user needs to take online.
status: use-with-caution-candidate
research-title: Critical Action
figma-link: https://www.figma.com/design/UOx5GSKdZW9GVAjy7078hT/AE-Design-Patterns---Critical-Action?node-id=0-1
contributors: Lynn Stahl (Agile Six), Adam Whitlock (Ad Hoc), Belle Poopongpanit (Agile Six), Christine Rose Steiffer (Agile Six), Kristen Faiferlick (Ad Hoc)
draft: false
web-component: va-critical-action
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---


## Examples

{% include storybook-preview.html story="components-va-critical-action--default" link_text="va-critical-action default" width="66%" %}

{% include storybook-preview.html story="components-va-critical-action--card-with-critical-action" link_text="va-critical-action within a card component" height="400px" width="66%" %}

## Usage

### When to use Critical Action

* **When you want to highlight a single task that will otherwise block the user from proceeding.** Use the Critical Action component for important and time-sensitive tasks that prevent the user from accessing their VA benefits or VA services. For example, they might need to request a refill to continue using a specific prescription, check into an appointment, or pay an overdue debt to prevent VA from offsetting VA benefit payments.

### When not to use Critical Action

* **When an action is not urgent, time-sensitive, or required.** Use the [Alert]({{ site.baseurl }}/components/alert/) component instead.
* **When you need to alert the user about a system error.** Use Alerts to express system errors.
* **When you're designing a form.** Use the Alert component to display important messages in forms.

### Anatomy or layout details

{% include component-example.html
  alt="An annotated display of the Critical Action component, showing a yellow background and black text. The text and chevron link to a page where the user can take action."
  caption="Critical Action components are always yellow and link to a page where the user can take the action. The link spans all the way from the text to the right-aligned chevron."
  file="/images/components/critical-action/critical-action-annotations.png" %}

#### General guidance
* The Critical Action component links to a detail page from which the user can complete the call to action.
* The Critical Action component is not dismissible. It should be removed when the user completes the call to action.

#### Placement details

In most cases, display the Critical Action component in a [Card]({{ site.baseurl }}/components/card) or [Service List Item]({{ site.baseurl }}/components/service-list-item) component. Place the component directly below the Status tag and take up the width of the component it is nested within. Include only one Critical Action component in a Card or Service List Item. Do not include multiple Critical Action components in a single Card or Service List Item.

{% include component-example.html
  class="x2"
  alt="A list of benefits a Veteran is enrolled in. Several of the benefits in the list have Critical Action components, which highlight an action the user needs to take."
  caption="In lists of Cards or Service List Items, Critical Action can highlight important or time-sensitive actions the user needs to take. This page is not currently in production."
  file="/images/components/critical-action/critical-action-in-service-list.png" %}

On the My VA page, you can stack Critical Action components at the top of the page. (Do not stack them within Cards or Service List Items.) The standalone component should take up 66% of the content width on larger screens, and expand to 100% of the width on mobile sized screens. When using it as a nested component, it should fill 100% of its parent component's width. In the future, we'll explore other placements of this component in other contexts. Currently, this component should not be stacked in any other context and should not appear outside of a container. Alerts have different [guidelines](https://design.va.gov/components/alert/#how-to-use-alerts) and should not be stacked.

{% include component-example.html
  class="x2"
  alt="My VA, with five yellow Critical Action components stacked at the top of the page under a header that says “Actions needed.”"
  caption="On dashboard pages like My VA, Critical Action components stack at the top, highlighting the most pressing actions users need to take."
  file="/images/components/critical-action/critical-action-in-my-va.png" %}

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Use the sentence structure "[Verb] by [date by which user must take the action]". For example, "Verify your life insurance dependents by June 4, 2025" or "Pay your $30 copay by May 1, 2025".
* Keep the text concise. Work with the Platform Content team to develop clear, short messages that tell the user the required action and deadline (if applicable).
* Content should be a single sentence without a period. If the Platform Content team advises using two sentences, each sentence should end with a period.
* You may display the Critical Action component inside a Card or Service List Item on My VA or other page that show multiple VA benefits. In these cases, the component will be shown outside the context of a Card or Service List Item. It’s important that the content clearly communicates the action to the user. The examples below show appropriate levels of detail.

{% include component-example.html
  alt="Two examples of how much detail to add. For example, don’t say simply “Pay” or “Check in.” Rather, say “Pay your debt of $251.42” or “Check in to your Optometry appointment now.”"
  file="/images/components/critical-action/critical-action-annotations-2.png" %}

## Accessibility considerations

- Critical Action always contains a link. Follow best practices for the [Link]({{ site.baseurl }}/components/link/) and [Link - Action]({{ site.baseurl }}/components/link/action) components.

## Related

* [Alert]({{ site.baseurl }}/components/alert/)
* [Link - Action]({{ site.baseurl }}/components/link/action)

{% include _component-checklist.html component_name="va-critical-action" %}
