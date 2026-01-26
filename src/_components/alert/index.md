---
layout: component
title: Alert
permalink: /components/alert/
intro-text: "Alerts keep users informed of important and sometimes time-sensitive changes."
research-title: "Alert boxes"
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=35%3A145&mode=design&t=ep6tlGT5gNsbWqGP-1
uswds-v3: default
web-component: va-alert
web: true
mobile-app: true
sub-pages:
  - sub-page: Alert - Expandable
  - sub-page: Alert - Sign-in
anchors:
  - anchor: Examples - Standard
  - anchor: Examples - Standard properties
  - anchor: Examples - Slim alert
  - anchor: Usage
  - anchor: Choosing between alert statuses
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples - Standard

### Web

#### Informational alert (aka default)

{% include storybook-preview.html story="uswds-va-alert--default" link_text="va-alert informational" %}

Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.

#### Alert with action link

{% include storybook-preview.html story="uswds-va-alert--with-action-link" link_text="uswds-va-alert--with-action-link" height="220px" %}

Used when an action link is needed in place of a standard link.

#### Warning alert

{% include storybook-preview.html story="uswds-va-alert--warning" link_text="va-alert warning" %}

Used to warn a user, such as when there are negative consequences, or when something has gone wrong.

#### Success alert

{% include storybook-preview.html story="uswds-va-alert--success" link_text="va-alert success" %}

Used to indicate success.

#### Error alert

{% include storybook-preview.html story="uswds-va-alert--error" link_text="va-alert error" height="220px" %}

Used to indicate critical issues, failure states, or items that require immediate attention.

### Mobile app

#### Informational alert (aka default)

{% include storybook-preview.html story="alert--info" link_text="va-mobile__alert--info" is_mobile=true height="400px" auto_resize=false %}

#### Warning alert

{% include storybook-preview.html story="alert--warning" link_text="va-mobile__alert--warning" is_mobile=true height="400px" auto_resize=false %}

#### Success alert

{% include storybook-preview.html story="alert--success" link_text="va-mobile__alert--success" is_mobile=true height="400px" auto_resize=false %}

#### Error alert

{% include storybook-preview.html story="alert--error" link_text="va-mobile__alert--error" is_mobile=true height="400px" auto_resize=false %}

## Examples - Standard properties

### Web

#### Heading level

{% include storybook-preview.html story="uswds-va-alert--heading-level" link_text="va-alert heading level" %}

* Standard alerts must contain headings as opposed to Slim alerts which do not contain headings.

#### Dismissible

{% include storybook-preview.html story="uswds-va-alert--dismissable" link_text="va-alert dismissible" %}

* Any alert variation can be dismissible, including slim alerts. This example shows an informational alert that can be dismissed.
* Allow a user to dismiss an alert wherever appropriate.
{% include a11y/dismissable-alerts.md component="alert" %}

### Mobile app

#### Expandable

{% include storybook-preview.html story="alert--info&args=expandable:!true" link_text="va-mobile__alert--info" is_mobile=true %}

* The Alert component in the mobile application can be collapsed and expanded.

## Examples - Slim alert

### Web

Any style of alert box can be modified to be a Slim alert. The iconography for Slim alerts is consistent with the way icons are used in standard Alerts.

{% include storybook-preview.html story="uswds-va-alert--slim" height="352px" link_text="va-alert Slim" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/alert/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

#### Additional uses of an alert

* **To notify users about the status of the system:**
  * **In-application system status.** An exception to the above is providing information to the user, unprompted, about a problem with a particular application. These [system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) typically use an error or warning variation and do not require user action. For application-level maintenance, review the [downtime notifications guidance](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications).
  * **Access messages when a user tries to access an item that is not available to them.** [Access messages]({{ site.baseurl }}/content-style-guide/error-messages/access) typically warn the user that something they tried to access is not working correctly or is temporarily unavailable. These often use the error or warning variations.

* **To respond to a user action:**
  * **User feedback.** Use Alert for [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) that respond to an action a user has taken and to draw their attention to something that they need to correct or to confirm successful completion of a task. These messages use success and error variations.

* **Engagement messages that nudge the user to enter or update data.** [Engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement) typically use the informational variation and ask the user to take an action.
* **Unprompted and in-page alerts.** On the website, consider the [Alert - Expandable]({{ site.baseurl }}/components/alert/alert-expandable/) component to draw attention to important information on the page that is not a response to user feedback. On the mobile app, use the expandable variation of the Alert component.

#### Additional reasons to consider something else

##### Web and mobile

* **Unprompted and in-page alerts.** Consider the [Alert - Expandable]({{ site.baseurl }}/components/alert/alert-expandable) component to draw attention to important information on the page that is not a response to user feedback.
* **Clarifying background information.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component when clarifying outcomes for an input or a form question as well as providing background information. Keep in mind that Alert - Expandable should warrant an alert and be used sparingly. The value of any type of alert is diminished if the page is littered with alerts of equal weight.
* **System maintenance on web.** Most [system messages]({{ site.baseurl }}/content-style-guide/error-messages/system) related to maintenance are handled by the [Banner - Maintenance]({{ site.baseurl }}/components/banner/maintenance) component.
* **As the only content on a page.** An Alert should not be the only, or the majority of, content on a page. Reduce the length of the alert and include context in the content well of the page.

##### Mobile app only

* **Use native components.** On the mobile app, always consider a native component before using an in-content Alert:
  * **Action Sheet.** When the user takes an action in which the system needs to clarify their intent, use an action sheet (for both iOS and Android) to offer the user a choice in how to proceed.
  * **Alert/dialogue.** When the user chooses to do something that has serious consequences, use a native modal alert (for iOS) or dialogue (for Android) to present the user with critical information related to that action.
  * **Snackbar.** If a user action triggers an API call that is successful or results in an error, consider using a Snackbar in addition to or instead of an Alert. The snackbar may allow users to take an action on the feedback such as trying again or undoing the action.
* **Sub-alerts on the page.** On the mobile app, do not use sub-alerts.

### When to use a Slim alert

#### Web

**All of the above standard alert uses cases apply however, use of a Slim alert in place of a standard alert is only appropriate when used with one of these additional constraints:**

* **Immediate feedback to the user.** When your application is using Javascript to provide an immediate response to the user without a full page load.
* **Sub-alerts on the page.** When your page has more than 1 alert and you are using the Standard and Slim alerts to create a hierarchy of alerts within the page. This does not mean stacking alerts on top of one another, this means placing them appropriately throughout the page. It can also be appropriate to convey multiple statuses using a combination of headers, text, and the Slim alert variation. An example of a sub-alert is the [Autosave alert]({{ site.baseurl }}/components/form/autosave).

### How to use alerts

When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. A notification of a system change may require more contextual information than a validation message. The message should be concise, in plain language, and adhere to VA.gov voice and tone principles.

* On long forms, always include inline validation in addition to any error messages that appear at the top of the form.
* Allow a user to dismiss a notification wherever appropriate.
* Don't include notifications that aren't related to the user's current goal.
* Don't stack alerts one after the other.
* When there are multiple alerts on the page, order them by severity with the most critical being first and ideally top of the page.
* If the alert appears within the page body content, it should be co-located with relevant content.
* Alerts should not contain other expandable components such as the [Additional info]({{ site.baseurl }}/components/) component.
* Messaging should be direct, concise, and in [plain language]({{ site.baseurl }}/content-style-guide/plain-language/).
* Standard alerts must contain headings as opposed to Slim alerts which do not contain headings.

### Choosing between alert statuses

Choose the appropriate status based on the nature of the message and its urgency. Consistency in status usage across VA.gov helps Veterans quickly understand the nature of messages.

#### Informational (info)

Use informational alerts to provide helpful context or supplementary information that doesn't require immediate action.

* **General announcements.** Information the user should be aware of but that doesn't indicate something went wrong or was completed.
* **Guidance and tips.** Helpful context for completing a task.
* **Status updates.** Neutral updates about the state of something, such as "Your application is being processed."

#### Warning

Use warning alerts when there are potential negative consequences or when something may go wrong if the user doesn't take action.

* **Potential issues.** When something might prevent the user from completing their goal if not addressed.
* **Time-sensitive information.** Deadlines or expiration dates that require attention.
* **Proceed with caution.** When an action has consequences the user should understand before proceeding.

#### Success

Use success alerts to confirm that a user-initiated action completed successfully. The key distinction is that the user took an intentional action and the system is confirming it worked.

* **Task completion.** Confirming that a form submission, save, or other intentional action was successful.
* **Updates confirmed.** When the user updates their information and the change is saved.
* **Explicit saves.** When the user actively saves their progress.

**When auto-save completes successfully:** Use a success alert when auto-save completes because the system successfully preserved the user's work. Auto-save is currently being researched and the handling of auto-save messages may change in future. At the moment, it is okay to have two success alerts on the page if one of them is the auto-save alert in a form flow.

#### Error

Use error alerts to indicate that something has gone wrong and typically requires the user to take corrective action.

* **Validation errors.** When form input doesn't meet requirements.
* **Failed actions.** When a submission, save, or other action didn't complete.
* **System failures.** When the system encountered an error that affects the user's ability to complete their task.
* **Access issues.** When the user can't access something they're trying to reach.

#### Choosing between warning and error

Use **warning** when something *might* go wrong or requires attention before proceeding. Use **error** when something *has* gone wrong and needs to be fixed. Warnings are preventative; errors are reactive.

#### Handling multiple alerts

When you need to display multiple alerts on a page:

* **Order by severity.** Place error alerts first, followed by warning, then success, and finally informational alerts.
* **Create visual hierarchy.** When multiple alerts are necessary, consider using a Standard alert for the primary message and Slim alerts for secondary messages, such as using a Standard success alert for form submission confirmation with a Slim success alert for auto-save status.
* **Don't stack alerts.** If you have multiple messages of the same type, consider combining them into a single alert with a list of items.

### Links within alerts

* **Use an action link when a link is needed.** The preferred usage of links in an alert is the [action link](#alert-with-action-link), which is a single link directing the user to a clear next step or call-to-action.
  * A [Link - Active]({{ site.baseurl }}/components/link#active) style is an acceptable variation.
* **Use the correct link variation for specific actions.** For example, use the [Link - Directions]({{ site.baseurl }}/components/link#directions) variation when linking to a Maps application for a facility location. Use the [Telephone]({{ site.baseurl }}/components/telephone) component when linking to a phone number.
* **Don't use bold text for standard links within alert messages.** The blue color and underline already provide sufficient visual distinction. Follow the same [link styling guidelines]({{ site.baseurl }}/content-style-guide/links) and [bold text guidelines]({{ site.baseurl }}/content-style-guide/bold-text) used elsewhere on VA.gov. Note that standard links are often a secondary action and appear alongside buttons, see [Alert - Sign-in]({{ site.baseurl }}/components/alert/alert-sign-in) for examples.

### Placement

#### Web

##### Standard Alert

* In most cases, the standard Alert (in all of its variations) should be placed directly below the intro text, near the top of the page.
* When a standard Alert is applicable to a specific section of content on a page, it should be placed directly below the header of that section.

##### Slim alert

* Slim alerts related to a form field or section should be placed below the label, legend, or section header.
* The Info variation of the Slim alert can be placed between sections.
* Save-in-progress success and error Slim alerts should be placed directly below the Back/Continue button pair. This placement allows for the page content to remain fixed in the same position when the alert updates dynamically.

#### Mobile app

##### Standard Alert

* Alerts always appear near the top of the screen.

### Choosing between variations

#### Web

* Use the standard Alert variation in most use cases and within static content pages. Slim alerts are not available in Drupal.
* Use the Slim alert variation for immediate feedback within forms and applications. Slim alerts are most often displayed immediately after the user has taken an action, and can also be used for save-in-progress success and error messaging.

#### Mobile app

* Use standard alerts for most use cases.
* Use expandable alerts when the information is not a response to user feedback.
* Use dismissible alerts when the content is informational and not specific to the user or their interaction. For example, displaying “what’s new” content in the app.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* When possible, keep alert and error message titles (headings) to 50 characters, including spaces. Titles should follow the general guidelines for page and section titles.<br>
[Learn more in the Page titles and section titles section of the content style guide](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
* Acknowledge when an issue is our fault. Don’t place blame on the person, even if the person's actions caused the error.<br>
**Note:** We no longer say, “please” in alert and error messages when making a request.
* People may not read documentation, but they’re more likely to read a message that helps them resolve an error. Include some educational material in your alert and error messages when needed.
* Don’t overdo it. Too many notifications can overwhelm or annoy the person, who may then ignore the messages.
* Don’t use jargon or computer code in the message.

<p>
<va-link-action
  href="{{ site.baseurl }}/content-style-guide/error-messages"
  text="View content for error messages"
  type="secondary"
></va-link-action>
</p>

<p>
<va-link-action
  href="{{ site.baseurl }}/patterns/help-users-to/recover-from-errors"
  text="Review the help users to recover from errors pattern"
  type="secondary"
></va-link-action>
</p>

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/alert/#accessibility-alert"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

### Additional accessibility considerations for VA

{% include a11y/alerts.md %}

## Related

* [Alert - Expandable]({{ site.baseurl }}/components/alert/alert-expandable/)
* [Banner]({{ site.baseurl }}/components/banner)

{% include _component-checklist.html component_name=page.web-component %}
