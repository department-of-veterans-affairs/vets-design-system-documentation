---
layout: pattern
title: Stay informed of their form submission status
permalink: /patterns/help-users-to/stay-informed-of-their-application-status
sub-section: help-users-to
intro-text: "Follow this pattern to notify people when their online form submission is in progress, when we receive their submitted form, and when a system error has caused the submission to fail. These are required notification touch points." 
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=5600-63725&t=WnCXwOVti1WHXnIP-1
status: use-with-caution-available
research-title: Help users to stay informed of app status
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
---

## Usage

### When to use this pattern

* **Any online form that takes data from someone and submits that data to a back-end system.** This pattern is widely applicable to any online form that accepts someone's data and submits that data, synchronously or asynchronously, to the system of record. We're required to notify that person at critical touch points in the submission process.

## Examples

### Email notifications

{% include component-example.html alt="Screen shots of 5 email templates." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/email-templates.png" caption="Five template examples for email notification touch points sent via VA Notify." class="x2" %}

### Form submission status in My VA

{% include component-example.html alt="Screen shots of 3 My VA status cards." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/myva-status-cards.png" caption="Four Card component variations used to show the status of someone's form or application submission in My VA." reverse="true" %}

## How to design and build

### Sending email notifications

#### For synchronous submissions

If there’s no lag time between when someone submits a form and when we receive it—the form was received in the system of record in time for us to show a success message on the confirmation page—then we consider it a synchronous form. In this case, you need to implement only one email notification:

1. **Received**: The notification when we've received a submitted form in the system of record. This means the form is ready for processing. **Only send this status notification when we have confirmation that the request has reached the system of record.**

**Note:** The reason you don't need "Action needed" notifications for synchronous submissions is that you show the person the error message in the form itself. If form submission can fail after the person gets a success message on the form confirmation page, your form has asynchronous submissions, and you need to implement 3 email notifications.

Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### For asynchronous submissions

If there's a lag time between when someone submits the form and when VA receives it in the system of record, you must implement these 3 email notifications:

1. **Submission in progress:** The notification we send immediately after someone selects the Submit button on an online form. This means that the form submission has successfully started, but it has not yet reached the system of record. During this time, data submitted by the person may travel through several systems.
2. **Received:** The notification we send when we've received a submitted form in the system of record. This means the form is ready for processing. Only send this status notification when we have confirmation that the request has reached the system of record.
3. **Action needed:** The error notification we send if a form submission fails to reach the system of record. This means we need the person to resubmit or take another action before we can process their form. This notification must include instructions for the person to recover from the error. There are different templates available based on the remediation steps specific to the form.

VA Notify templates are available for these 3 email notifications. Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### Protecting PII & PHI in notifications

* **Do not send personally identifiable information (PII) or protected health information (PHI) in notifications.** It's imperative that notifications don't include any PII or PHI.
* **Hide filenames.** File names for evidence and other uploads of documents to the VA can often include personal information. So we hide all filenames in notifications. To do this:
  * Replace all but the first 3 and last 2 characters (numbers or letters) of the filename with the "X" character.
  * Show the Multipurpose Internet Mail Extensions (MIME) type of the file (like ".png", ".pdf", etc.)

#### Recovering from an action needed notification failure

In the event that an action needed notification to the form submitter's primary email address fails to reach them, then it's imperative that we make multiple attempts to reach the person.

**Important!** Regardless of the notification status, the status of the form submission should be visible in the user interface of VA.gov or the Health and Benefits mobile application. This may be accomplished via [My VA](#form-submission-status-in-my-va), Claim Status Tool, or another service.

1. **Email to alternative email address.** If the primary email notification fails, as determined via callback to VA Notify or other mechanism, fallback to any alternative email addresses available. **Note:** This only applies to a limited set of applications that obtain a secondary email address.
2. **Text message to mobile phone number.** If the secondary email notification fails, fallback to sending a text message via VA Notify to the mobile phone number either collected in the form or obtained from the user's profile. Users don't need to opt-in to this message as it's a critical communication.
3. **Hand-off to Veteran Support team.** At this point, if all of the notification mechanisms have returned a failure then teams must hand off contacting the Veteran to the Veteran support team (use Slack channel #vsp-contact-center-support). A Support team member will contact the Veteran and assist them with re-submitting their request.

### Showing form submission status on the form confirmation page

#### For synchronous submissions

If there's no lag time between when someone submits the form and when VA receives it in the system of record, do these 2 things on your form confirmation page:

* Show a success message confirming that the submission was successful and we've received the form, like "You've submitted your form"
* In the **What to expect** section, tell the person about the next notification we'll send (in this case, that should be an email confirming we've received their form)

#### For asynchronous submissions

If there's a lag time between when someone submits the form and when VA receives it in the system of record, do these 2 things on the form confirmation page:

* Show a success message confirming only that the submission is in progress, like "Your form submission is in progress" — and explain that we'll send an email to confirm when we've received the form and an estimate for how long that will take
* In the **What to expect** section, tell the person about the next notifications we'll send (in this case, an email confirming the submission is in progress and then a second email confirming when we've received their form)

### Showing form submission status in My VA

Form submissions on VA.gov or in the mobile app must show the submission status in My VA for people who are authenticated. These statuses appear in the **Forms and application** section of My VA. This section currently gets statuses from an API on page load for submissions processed asynchronously. Once complete, cards stay on My VA for 60 days, then are removed for security purposes.

If your form or application is linked to claims status tool, the current status will also appear in the **Claims and appeals** section of My VA.

Refer to the [My VA documentation on displaying form status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/adding-a-form.md) for more information.

#### How to display status for VA form and application submissions

VA form and application submissions on My VA display statuses to help people stay informed about their submission. Follow this guidance and backend workflow for new forms or patterns.

#### Supported statuses

**Forms and applications** card statuses is retrieved by vets-api, but forms are managed by various APIs, and can show the following statuses:

| Status | Description |
| :---- | :---- |
| Draft | User has a form or application |
| Submission in progress | VA is processing your submission | 
| Received | VA received your submission and it is being reviewed |
| Action needed | VA needs additional info from you |

#### Status card variants

There are two card variants for displaying form status:

* **Uploaded Forms:** fallback title, e.g., "VA Form XX-XXXX"
* **Online Forms:** product title with subheading (from application configuration)

#### How to handle forms submitted within the process of another form (sub-forms)

For sub-forms such as the Authorization to Disclose Information to the Department of Veterans Affairs (21-4142), submitted within the process of completing an Application for Disability Compensation and Related Compensation Benefits (21-526EZ) or Decision Review Request: Supplemental Claim (20-0995), the status of the sub-forms should be communicated independently from the status of the main form. In other words, each sub-form would send a separate email notification and each would have a separate status card shown in My VA, independent from the notifications and cards of the main form.

#### How to show status for uploaded documents

In the email, show the list of documents uploaded within the application on the confirmation page and email.

In the future, also indicate to the user on the status card shown in My VA the count of uploaded documents. For example, "You uploaded 22 documents. We'll email you if we can't successfully deliver any of them."

### Showing form processing status after we receive it in the system of record

Some forms show processing status after point of receipt in the claim status tool. In the future, all forms should work toward allowing people to track the processing status through to the point of a VA decision or other ultimate end point.

### How this pattern works

Communicating form submission status has 3 critical phases that all teams must account for in their online forms:

1. **Status notification via email or text**
2. **Status notification in the user interface of VA.gov and the flagship mobile app**
3. **A clear next step in the event of an error**

#### How to provide a clear next step in the event of an error

Every time a form submission error happens, you must notify the person about that error and provide a recovery step. At the very least, tell people to contact the Call Center.

### Components used in this pattern

* [Alert]({{site.baseurl}}/components/alert)
* [Card]({{site.baseurl}}/components/card)

### Page templates available for this pattern

* [Email templates are available in VA Notify](https://staging.notifications.va.gov/). You'll need a VA Notify account to access the sample templates. Select a service. If you're not assigned to a service contact #va-notify-public. Select **Add template**. Then select **Sample templates**.
* The sample email templates include customizable content you'll need to fill in for your form. Try to use as much of the template content as possible and only adjust where needed. If you have questions or need help adjusting the templates for your form, you can contact #content-ia-centralized-team in Slack.
* Email templates must be reviewed by a VA Privacy Officer in the appropriate portfolio (Veterans Benefits Administration or Veterans Health Administration).
