---
layout: default
sub_section: alertboxes.md
title: Alert boxes
anchors:
  - anchor: Information status
  - anchor: Warning status
  - anchor: Success status
  - anchor: Error status
  - anchor: Continue status
  - anchor: Alert boxes with expandable content
  - anchor: Background color only
---

# Alert boxes

<p class="va-introtext">Alerts keep users informed of important and sometimes time-sensitive changes.</p>



## Information status

Used to provide helpful information to a user or something that warrants attention. Not used for negative consequences.

<div class="site-c-showcase">
{% include_relative html/alert-informational.html %}
</div>

{% include snippet.html content='html/alert-informational.html' %}

## Warning status

Used to warn a user, such as when there are negative consequences, but necessary when something has gone wrong.

<div class="site-c-showcase">
{% include_relative html/alert-warning.html %}
</div>

{% include snippet.html content='html/alert-warning.html' %}

## Success status

Used to indicate success.

<div class="site-c-showcase">
{% include_relative html/alert-success.html %}
</div>

{% include snippet.html content='html/alert-success.html' %}

## Error status

Used when there is a problem or something destructive is about to occur.

<div class="site-c-showcase">
{% include_relative html/alert-error.html %}
</div>

{% include snippet.html content='html/alert-error.html' %}

## Continue status

Used to prompt user to sign in or create an account to access certain information.

<div class="site-c-showcase">
{% include_relative html/alert-continue.html %}
</div>

{% include snippet.html content='html/alert-continue.html' %}

## Alert boxes with expandable content

Any style of alert box may be made to include expandable content.

<div class="site-c-showcase">
{% include_relative html/alert-expandable.html %}
</div>

{% include snippet.html content='html/alert-expandable.html' %}

## Background color only

Any style of alert box can be made to be a background color only. Background color only alerts are only to be used for immediate feedback, such as in single page applications or Ajax forms. They should not be used for static alert messaging.

<div class="site-c-showcase">
{% include_relative html/alert-background-color.html %}
</div>

{% include snippet.html content='html/alert-background-color.html' %}

### Guidance

- Some users might not be able to distinguish differences in the background color, or see the color at all. Do not rely on color alone to convey context.
- Messaging should be direct and concise. Aim for one or two lines.
- Do not use headings

## Accessibility

Use the ARIA `role="alert"` to inform assistive technologies of a time-sensitive and important message that is not interactive. If the message is interactive, use the `alertdialog` role instead.
Do not visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.

## Usability

### When to use

As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.
As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.

### When to consider something else

* On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.
* If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.

### Guidance

When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human readable language; avoid jargon and computer code.

* Be polite in error messages — don’t place blame on the user.
* Users generally won’t read documentation but will read a message that helps them resolve an error; include some educational material in your error message.
* But don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.
* Allow a user to dismiss a notification wherever appropriate.
* Don’t include notifications that aren’t related to the user’s current goal.
* Do not stack alerts one after another


