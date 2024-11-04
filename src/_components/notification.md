---
layout: component
title: Notification
contributor: Angela Agosto, Allison Lu
intro-text: Provides a visually distinct card in order to surface time-sensitive updates and action items.
status: dont-use-deprecated
web-component: va-notification
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

<va-alert
  close-btn-aria-label="Close notification"
  status="warning"
  visible
>
  <h2 slot="headline">
    The Notification component is now deprecated. 
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      Teams are continuing to explore solutions to bring attention to items that have changed in a view. If you wish to use this component, please speak with the Design System Team.
    </p>
  </div>
</va-alert>

## Examples

### Default

{% include storybook-preview.html story="components-va-notification--default" link_text=page.web-component %}

### Action required

{% include storybook-preview.html story="components-va-notification--action-required" link_text=page.web-component %}

### Update

{% include storybook-preview.html story="components-va-notification--update" link_text=page.web-component %}

### With Close Icon button

{% include storybook-preview.html story="components-va-notification--with-close-text" link_text=page.web-component %}

### Header level change

{% include storybook-preview.html story="components-va-notification--header-level-change" link_text=page.web-component %}

### Not dismissible

{% include storybook-preview.html story="components-va-notification--not-dismissable" link_text=page.web-component %}

### No border

{% include storybook-preview.html story="components-va-notification--no-border" link_text=page.web-component %}

### Multiple with border

{% include storybook-preview.html story="components-va-notification--multiple-with-border" link_text=page.web-component %}

### Multiple with no border

{% include storybook-preview.html story="components-va-notification--multiple-with-no-border" link_text=page.web-component %}

## Usage

### When to use Component name

* **Time-sensitive information.** Provides a visually distinct card in order to surface time-sensitive updates and action items.
* **Highlight most important information.** Visually stands out from other cards and content on the page so the user knows it is the most important thing to pay attention to.

### When to consider something else

* **Alerts in response to user action.**: Use an [Alert]({{ site.baseurl }}/components/alert) for messages that occur in response to a user action.
* **Card collections**: Use a standard [Card]({{ site.baseurl }}/components/card) for a collection of information.

### How this component works

The component is comprised of the following elements:

1. Header
2. Status icon
3. Body
4. [Link - Active]({{ site.baseurl }}/components/link#active)
5. Close icon and text

### Choosing between variations

* **Use [Action required](#action-required) when the user needs to take action.** The action required variation is explicitly for notifications that require the user to take an action. Use [update](#update) or the [default](#default) when no specific action is required.
* **Drop the border when there are more than 3 notifications in a set.** In order to avoid visual noise and distraction use the no border variation when there are more than 3-5 notifications in a list.
* **Avoid making the notification non-dismissible.** Don't take autonomy away from the user unless there is a clear and valid use case.

### Placement

Notifications should appear below the H1 of the page and near the top of the content of the page.

### Instances of this component in production

Currently, the notification component will be used on MyVA and in MyHealtheVet. 


{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Use concise, active voice, plain language content and limit the notification body to just a few lines.

## Accessibility considerations

* Use the [header level change](#header-level-change) to set the appropriate header level within the flow of the page without altering the size and weight of the header.

## Related

* [Alert]({{ site.baseurl }}/components/alert)
* [Card]({{ site.baseurl }}/components/card) 

{% include _component-checklist.html component_name=page.web-component %}