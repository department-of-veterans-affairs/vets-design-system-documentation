---
layout: default
sub_section: alertboxes.md
title: Alert boxes
anchors:
  - anchor: Informational alert
  - anchor: Warning alert
  - anchor: Success alert
  - anchor: Error alert
  - anchor: Continue status
  - anchor: Background color only
  - anchor: Full-width alerts
---

# Alert boxes

<div class="va-introtext" markdown="1">
Alerts keep users informed of important and sometimes time-sensitive changes.
</div>



## Informational alert

Used to provide helpful information to a user or something that warrants attention. Not used for negative consequences.

<div class="site-showcase">
{% include_relative html/alert-informational.html %}
</div>

{% include snippet.html content='html/alert-informational.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/' %}

---

## Warning alert

Used to warn a user, such as when there are negative consequences, but necessary when something has gone wrong.

<div class="site-showcase">
{% include_relative html/alert-warning.html %}
</div>

{% include snippet.html content='html/alert-warning.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/' %}

---

## Success alert

Used to indicate success.

<div class="site-showcase">
{% include_relative html/alert-success.html %}
</div>

{% include snippet.html content='html/alert-success.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/' %}

---

## Error alert

Used when there is a problem or something destructive is about to occur.

<div class="site-showcase">
{% include_relative html/alert-error.html %}
</div>

{% include snippet.html content='html/alert-error.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/' %}

---

## Sign in or tool prompt

Used to prompt user to sign in, create an account, or launch a tool to access certain information.

<div class="site-showcase">
{% include_relative html/alert-continue.html %}
</div>

{% include snippet.html content='html/alert-continue.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/' %}

---

## Background color only

Any style of alert box can be made to be background color only. Background color only alerts are only to be used for immediate feedback, such as in single page applications or Ajax forms. They should not be used for static alert messaging.

<div class="site-showcase">
{% include_relative html/alert-background-color.html %}
</div>

{% include snippet.html content='html/alert-background-color.html' react_component='https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/' %}

- Some users might not be able to distinguish differences in the background color, or see the color at all. Do not rely on color alone to convey context.
- Messaging should be direct and concise. Aim for one or two lines.
- Do not use headings

---

## Full-width alerts

Full-width alerts can only appear below the main navigation and are used only for emergency or very urgent communications.

### Warning
<div class="site-showcase">
{% include_relative html/alert-full-width.html %}
</div>

{% include snippet.html content='html/alert-full-width2.html' %}

### Informational
<div class="site-showcase">
{% include_relative html/alert-full-width2.html %}
</div>

{% include snippet.html content='html/alert-full-width.html' %}

### More about full-width alerts
- Only available in `info` or `warning` variants.
- Content inside alert remains aligned the main page grid container. This might not be apparent on this site in smaller screens.
- Use for emergency or very urgent communications only. Ex: hurricane alert; government shutdown affecting VA services, etc. Emergency homepage alerts notify Veterans, VA employees, and the public of events that affect VA services or site features.
- To ensure that customers always know they can find critical service information in this area, do not use emergency homepage alerts for general press, outreach, or administrative messages.
- Do not stack - max is one per page at any one time. (If multiple emergency issues occur at once, make message content combined and link out to a landing page or to individual affected medical centers, for example.)
- Can be used on homepage or, in true emergencies, on lower level pages.

---

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
* If the alert appears within the page body content, it should be co-located with relevant content.


