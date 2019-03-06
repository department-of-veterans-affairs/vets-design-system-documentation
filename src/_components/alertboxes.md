---
layout: default
sub_section: alertboxes.md
title: Alert boxes
---

# Alert boxes

<p class="va-introtext">Alerts keep users informed of important and sometimes time-sensitive changes.</p>

<div class="site-c-showcase">
{% include_relative html/alertbox.html %}
</div>

{% include snippet.html content='html/alertbox.html' %}


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


