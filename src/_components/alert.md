---
layout: component
title: Alert
status: use-best-practice
intro-text: "Alerts keep users informed of important and sometimes time-sensitive changes."
research-title: "Alert boxes"
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=35%3A145&mode=design&t=ep6tlGT5gNsbWqGP-1
uswds-v3: default
web-component: va-alert
anchors:
  - anchor: Examples - Standard - v3
  - anchor: Examples - Standard properties - v3
  - anchor: Examples - Slim alert - v3
  - anchor: Examples - Standard - v1
  - anchor: Examples - Slim alert - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples - Standard - v3

### Informational alert (aka default)

{% include storybook-preview.html story="uswds-va-alert--default" link_text="va-alert informational" %}

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

### Warning alert

{% include storybook-preview.html story="uswds-va-alert--warning" link_text="va-alert warning" %}

Used to warn a user, such as when there are negative consequences, or when something has gone wrong.

### Success alert

{% include storybook-preview.html story="uswds-va-alert--success" link_text="va-alert success" %}

Used to indicate success.

### Error alert

{% include storybook-preview.html story="uswds-va-alert--error" link_text="va-alert error" height="220px" %}

Used when there is a problem or something destructive is about to occur.

### Sign in or tool prompt

{% include storybook-preview.html story="uswds-va-alert--sign-in-or-tool-prompt" link_text="va-alert sign in or tool prompt" height="220px" %}

Used to prompt a user to sign in, create an account, or launch an online tool to access certain information.

### Sign-in to start your application - Pre-fill

{% include storybook-preview.html story="uswds-va-alert--sign-in-to-start-your-application" link_text="va-alert sign in to start your application" height="330px" %}

Used to inform the user of the benefits of signing in. Mainly, that information can be prefilled into some forms from Profile data and that information entered into a form will be saved as the user progresses from step to step.

### Sign-in to start your application - No-pre-fill

{% include component-example.html alt="An example of a sign-in to start your application alert, no-pre-fill variation." file="/images/components/alert/sign-in-no-prefill.png" caption="The Sign-in to start your application alert, no-pre-fill variation." reverse=true class="x2" %}

This variation can be used when pre-fill is not offered on a form (which should be avoided).

## Examples - Standard properties - v3

### Heading level

{% include storybook-preview.html story="uswds-va-alert--heading-level" link_text="va-alert heading level" %}

* Standard alerts must contain headings as opposed to Slim alerts which do not contain headings.

### Dismissible

{% include storybook-preview.html story="uswds-va-alert--dismissable" link_text="va-alert dismissible" %}

* Any alert variation can be dismissible, including slim alerts. This example shows an informational alert that can be dismissed.
* Allow a user to dismiss a notification wherever appropriate.

## Examples - Slim alert - v3

Any style of alert box can be modified to be a Slim alert. The iconography for Slim alerts is consistent with the way icons are used in standard Alerts.

{% include storybook-preview.html story="uswds-va-alert--slim" height="352px" link_text="va-alert Slim" %}

## Examples - Standard - v1

### Informational alert (aka default)

{% include storybook-preview.html story="components-va-alert--default" link_text="va-alert informational v1 and additional variations" %}

## Examples - Slim alert - v1

{% include storybook-preview.html story="components-va-alert--slim" height="352px" link_text="va-alert Slim v3 and additional variations" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/alert/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### Additional uses of an alert

* **User feedback.** Use Alert for [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) that respond to an action a user has taken and to draw their attention to something that they need to correct or to confirm successful completion of a task. These messages use success and error variations.
* **In-application system status.** An exception to the above is providing information to the user, unprompted, about a problem with a particular application. These [system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) typically use an error or warning variation and do not require user action.
* **Engagement messages that nudge the user to enter or update data.** [Engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement) typically use the informational variation and ask the user to take an action.
* **Access messages when a user tries to access an item that is not available to them.** [Access messages]({{ site.baseurl }}/content-style-guide/error-messages/access) typically warn the user that something they tried to access is not working correctly or is temporarily unavailable. These often use the error or warning variations.

#### Additional reasons to consider something else

* **Destructive actions.** If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation [modal]({{ site.baseurl }}/components/modal) dialogue, to allow the user to confirm that this is what they want.
* **Unprompted and in-page alerts.** Consider the [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable) component to draw attention to important information on the page that is not a response to user feedback.
* **Clarifying background information.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component when clarifying outcomes for an input or a form question as well as providing background information. Keep in mind that Alert - Expandable should warrant an alert and be used sparingly. The value of any type of alert is diminished if the page is littered with alerts of equal weight.
* **System maintenance.** Most [system messages]({{ site.baseurl }}/content-style-guide/error-messages/system) related to maintenance are handled by the [Banner - Maintenance]({{ site.baseurl }}/components/banner/maintenance) component.

### When to use a Slim alert

**All of the above standard alert uses cases apply however, use of a Slim alert in place of a standard alert is only appropriate when used with one of these additional constraints:**

* **Immediate feedback to the user.** When your application is using Javascript to provide an immediate response to the user without a full page load.
* **Sub-alerts on the page.** When your page has more than 1 alert and you are using the Standard and Slim alerts to create a hierarchy of alerts within the page. This does not mean stacking alerts on top of one another, this means placing them appropriately throughout the page. It can also be appropriate to convey multiple statuses using a combination of headers, text, and the Slim alert variation. An example of a sub-alert is the [Autosave alert]({{ site.baseurl }}/components/form/autosave).

### How to use alerts

When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. A notification of a system change may require more contextual information than a validation message. The message should be concise, in plain language, and adhere to VA.gov voice and tone principles.

* On long forms, always include inline validation in addition to any error messages that appear at the top of the form.
* Allow a user to dismiss a notification wherever appropriate.
* Don't include notifications that aren't related to the user's current goal.
* Don't stack alerts one after the other.
* If the alert appears within the page body content, it should be co-located with relevant content.
* Alerts should not contain other expandable components such as the [Additional info]({{ site.baseurl }}/components/) component.
* Messaging should be direct, concise, and in [plain language]({{ site.baseurl }}/content-style-guide/plain-language/).
* Standard alerts must contain headings as opposed to Slim alerts which do not contain headings.

### Placement

#### Standard Alert

* In most cases, the standard Alert (in all of its variations) should be placed directly below the intro text, near the top of the page.
* When a standard Alert is applicable to a specific section of content on a page, it should be placed directly below the header of that section.

#### Slim alert

* Slim alerts related to a form field or section should be placed below the label, legend, or section header.
* The Info variation of the Slim alert can be placed between sections.
* Save-in-progress success and error Slim alerts should be placed directly below the Back/Continue button pair. This placement allows for the page content to remain fixed in the same position when the alert updates dynamically.

### Choosing between variations

* Use the standard Alert variation in most use cases and within static content pages. Slim alerts are not available in Drupal.
* Use the Slim alert variation for immediate feedback within forms and applications. Slim alerts are most often displayed immediately after the user has taken an action, and can also be used for save-in-progress success and error messaging.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Be polite in error messages — don’t place blame on the user.
* Users generally won’t read documentation, but they’ll read a message that helps them resolve an error; include some educational material in your error message.
* But don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.
* Don’t use jargon and computer code in the message.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/content-style-guide/error-messages">View content for error messages</a>

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/patterns/help-users-to/recover-from-errors">Review the help users to recover from errors pattern</a>

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/alert/#accessibility-alert">Refer to the U.S. Web Design System for accessibility guidance</a>

### Additional accessibility considerations for VA

{% include a11y/alerts.md %}

## Related

* [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable)
* [Banner]({{ site.baseurl }}/components/banner)

{% include _component-checklist.html component_name=page.web-component %}
