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
  - anchor: Accessibility considerations
web-component: va-alert
---

## Examples - Default
### Informational alert

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

{% include storybook-preview.html story="components-va-alert--default" %}

### Warning alert

Used to warn a user, such as when there are negative consequences, and when something has gone wrong.

{% include storybook-preview.html story="components-va-alert--warning" %}

### Success alert

Used to indicate success.

{% include storybook-preview.html story="components-va-alert--success" %}

### Error alert

Used when there is a problem or something destructive is about to occur.

{% include storybook-preview.html story="components-va-alert--error" %}

### Sign in or tool prompt

Used to prompt a user to sign in, create an account, or launch an online tool to access certain information.

{% include storybook-preview.html story="components-va-alert--continue" %}

## Examples - Default variations

### Heading level

Alerts can contain headings.

{% include storybook-preview.html story="components-va-alert--heading-level" %}

### Dismissible 

* Any alert variation can be dismissible. This example shows an informational alert that can be dismissed.
* Allow a user to dismiss a notification wherever appropriate.

{% include storybook-preview.html story="components-va-alert--closeable" %}

### Full-width

Full-width alerts are used only for emergency or urgent communications and should appear below the main navigation. 

#### Warning

{% include storybook-preview.html story="components-va-alert--fullwidth" %}

#### More about the full-width variation

- Only available in `info` or `warning` alerts.
- Content inside alert remains aligned to the main page grid container. This might not be apparent on this site in smaller screens.
- Use for emergency or very urgent communications only. For example, a hurricane alert; government shutdown affecting VA services, etc. Emergency homepage alerts notify Veterans, VA employees, and the public of events that affect VA services or site features.
- To ensure that customers always know they can find critical service information in this area, don’t use emergency homepage alerts for general press, outreach, or administrative messages.
- Don’t stack - max is one full-width alert per page at any one time. (If multiple emergency issues occur at once, combine the message and link out to a landing page or to individual affected medical centers, for example.)
- Can be used on homepage or, in true emergencies, on lower-level pages.

## Examples - Background color only

### Background color only alert

Any style of alert box can be modified to be a background-color-only alert. Use background alerts for immediate feedback, such as in single-page applications or Ajax forms. They shouldn’t be used for static alert messaging.

{% include storybook-preview.html story="components-va-alert--background-only" height="352px" %}

- Some users might not be able to distinguish differences in the background color or see the color at all. Don’t rely on color alone to convey context. 
- Messaging should be direct and concise. Aim for one or two lines.
- Don’t use headings in background alerts.

### Background color only alert with icon

A background alert may be used with an icon to draw attention to important feedback. The iconography for background alerts is consistent with the way icons are used in standard alert boxes.

{% include storybook-preview.html story="components-va-alert--background-only-with-icon" height="352px" %}

## Usage

### When to use alerts

Use Alert to notify users of the status of the site, which may or may not require a user’s response. This includes errors, warnings, and general site updates. Use Alert to alert users that something they need needs to be correct or to confirm successful completion of a task.

### When to consider something else

* On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.
* If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.

### How to use alerts

When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. A notification of a system change may require more contextual information than a validation message. The message should be concise, in plain language, and adhere to VA.gov voice and tone principles. Don’t use jargon and computer code in the message.

* Be polite in error messages — don’t place blame on the user.
* Users generally won’t read documentation, but they’ll  read a message that helps them resolve an error; include some educational material in your error message.
* But don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.
* Allow a user to dismiss a notification wherever appropriate.
* Don’t include notifications that aren’t related to the user’s current goal.
* Don’t stack alerts one after the other.
* If the alert appears within the page body content, it should be co-located with relevant content.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* Use the ARIA `role="alert"` to inform assistive technologies of a time-sensitive and important message that isn’t interactive. If the message is interactive, use the `alertdialog` role instead.
* Don’t visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
