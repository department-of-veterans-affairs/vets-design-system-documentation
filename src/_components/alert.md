---
layout: component
title: Alert
status: use-best-practice
intro-text: "Alerts keep users informed of important and sometimes time-sensitive changes."
research-title: "Alert boxes"
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/5E24F540-2558-488C-BD6D-823F4A2F5607
anchors:
  - anchor: Examples - Default
  - anchor: Examples - Default variations
  - anchor: Examples - Background color only
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
web-component: va-alert
---

## Examples - Default

### Informational alert

{% include storybook-preview.html story="components-va-alert--default" link_text="va-alert" %}

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

### Warning alert

{% include storybook-preview.html story="components-va-alert--warning" link_text="va-alert" %}

Used to warn a user, such as when there are negative consequences, or when something has gone wrong.

### Success alert

{% include storybook-preview.html story="components-va-alert--success" link_text="va-alert" %}

Used to indicate success.

### Error alert

{% include storybook-preview.html story="components-va-alert--error" link_text="va-alert" %}

Used when there is a problem or something destructive is about to occur.

### Sign in or tool prompt

{% include storybook-preview.html story="components-va-alert--sign-in-or-tool-prompt" link_text="va-alert" %}

Used to prompt a user to sign in, create an account, or launch an online tool to access certain information.

## Examples - Default variations

### Heading level

{% include storybook-preview.html story="components-va-alert--heading-level" link_text="va-alert" %}

Alerts should contain headings.


### Dismissible 

{% include storybook-preview.html story="components-va-alert--dismissable" link_text="va-alert" %}

* Any alert variation can be dismissible, including background-color only alerts. This example shows an informational alert that can be dismissed.
* Allow a user to dismiss a notification wherever appropriate.


#### Dismissible Background Only

{% include storybook-preview.html height="80px" story="components-va-alert--dismissable-background-only" link_text="va-alert" %}

#### Dismissible Background Only Icon

{% include storybook-preview.html height="80px" story="components-va-alert--dismissable-background-only-icon" link_text="va-alert" %}

## Examples - Background color only

### Background color only alert

Any style of alert box can be modified to be a background-color-only alert. Use background alerts for immediate feedback, such as in single-page applications or Ajax forms. They shouldn’t be used for static alert messaging.

{% include storybook-preview.html story="components-va-alert--background-only" height="352px" link_text="va-alert" %}

- Some users might not be able to distinguish differences in the background color or see the color at all. Don’t rely on color alone to convey context. 
- Messaging should be direct and concise. Aim for one or two lines.
- Don’t use headings in background alerts.

### Background color only alert with icon

A background alert may be used with an icon to draw attention to important feedback. The iconography for background alerts is consistent with the way icons are used in standard alert boxes.

{% include storybook-preview.html story="components-va-alert--background-only-with-icon" height="352px" link_text="va-alert" %}

## Usage

### When to use alerts

* **User feedback.** Use Alert for [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) that respond to an action a user has taken and to draw their attention to something that they need to correct or to confirm successful completion of a task. These messages use success and error variations.
* **In-application system status.** An exception to the above is providing information to the user, unprompted, about a problem with a particular application. These [system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) typically use an error or warning variation and do not require user action.
* **Engagement messages that nudge the user to enter or update data.** [Engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement) typically use the informational variation and ask the user to take an action.
* **Access messages when a user tries to access an item that is not available to them.** [Access messages]({{ site.baseurl }}/content-style-guide/error-messages/access) typically warn the user that something they tried to access is not working correctly or is temporarily unavailable. These often use the error or warning variations. 

### When to consider something else

* **Destructive actions.** If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation [modal]({{ site.baseurl }}/components/modal) dialogue, to allow the user to confirm that this is what they want.
* **Unprompted and in-page alerts.** Consider the [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable) component to draw attention to important information on the page that is not a response to user feedback.
* **Clarifying background information.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component when clarifying outcomes for an input or a form question as well as providing background information. Keep in mind that Alert - Expandable should warrant an alert and be used sparingly. The value of any type of alert is diminished if the page is littered with alerts of equal weight.
* **System maintenance.** Most [system messages]({{ site.baseurl }}/content-style-guide/error-messages/system) related to maintenance are handled by the [Banner - Maintenance]({{ site.baseurl }}/components/banner/maintenance) component.

### How to use alerts

When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. A notification of a system change may require more contextual information than a validation message. The message should be concise, in plain language, and adhere to VA.gov voice and tone principles. 

* On long forms, always include inline validation in addition to any error messages that appear at the top of the form.
* Allow a user to dismiss a notification wherever appropriate.
* Don’t include notifications that aren’t related to the user’s current goal.
* Don’t stack alerts one after the other.
* If the alert appears within the page body content, it should be co-located with relevant content.
* Alerts should not contain other expandable components such as the [Additional info]({{ site.baseurl }}/components/) component.

### Placement

#### Default alerts

* In most cases, the Default alert (in all of its variations) should be placed directly below the H1 and intro text, near the top of the page. 
* When a Default alert is applicable to a specific section of content on a page, it should be placed directly below the header of that section.

EXAMPLES TBA

#### Background color only alerts

* Background color only alerts should be placed directly below the H1 and intro text when the alert applies to the entire page. 
* In forms, save-in-progress success and error background alerts should be placed directly below the Previous/Continue button pair. This placement allows for the page content to remain fixed in the same position even when the alert updates dynamically.  

EXAMPLES TBA

### Choosing between variations

By default use the standard Alert variation. Use the background-only variation for immediate feedback, such as in single-page applications or dynamic Javascript driven forms. 

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Be polite in error messages — don’t place blame on the user.
* Users generally won’t read documentation, but they’ll read a message that helps them resolve an error; include some educational material in your error message.
* But don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.
* Don’t use jargon and computer code in the message.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/content-style-guide/error-messages">View content for messages</a>

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/patterns/help-users-to/recover-from-errors">Review the help users to recover from errors pattern</a>

## Accessibility considerations

* Use the ARIA `role="alert"` to inform assistive technologies of a time-sensitive and important message that isn’t interactive. If the message is interactive, use the `alertdialog` role instead.
* Don’t visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
* Don't automatically dismiss an alert based on a timer or time limit.

## Related

* [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable)
* [Banner]({{ site.baseurl }}/components/banner)

{% include _component-checklist.html component_name=page.web-component %}
