---
layout: pattern
title: Stay informed of their form submission status
permalink: /patterns/help-users-to/stay-informed-of-their-application-status
sub-section: help-users-to
intro-text: "Follow this pattern to notify people when their online form submission is in progress, when we receive their submitted form, and when a system error has caused the submission to fail. These are required notification touch points." 
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=5600-63725&t=WnCXwOVti1WHXnIP-1
status: use-with-caution-candidate
research-title: Help users to stay informed of app status
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Examples in production
---

## Usage

### When to use this pattern

* **Any online form that takes data from someone and submits that data to a back-end system.** This pattern is widely applicable to any online form that accepts someone's data and submits that data, synchronously or asynchronously, to the system of record. We're required to notify that person at critical touch points in the submission process.

## Examples

### Email notifications

{% include component-example.html alt="Screen shots of 5 email templates." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/email-templates.png" caption="Five template examples for email notification touch points sent via VA Notify." class="x2" %}

### Form submission status in My VA

{% include component-example.html alt="Screen shots of 3 My VA status cards." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/myva-status-cards.png" caption="Three Card component variations used to show the status of someone's submission in My VA for Benefits applications." reverse="true" %}

## How to design and build

### Sending email notifications

#### For synchronous submissions

If there’s no lag time between when someone submits a form and when we receive it—the form was received in the system of record in time for us to show a success message on the confirmation page—then we consider it a synchronous form. In this case, you need to implement only one email notification: 

1. **Received**: The notification when we've received a submitted form in the system of record. This means the form is ready for processing. **Only send this status notification when we have confirmation that the request has reached the system of record.**

**Note:** The reason you don't need "Action needed" notifications for synchronous submissions is that you show the person the error message in the form itself. If form submission can fail after the person gets a success message on the form confirmation page, your form has asynchronous submissions and you need to implement 3 email notifications.

Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### For asynchronous submissions

If there's a lag time between when someone submits the form and when VA receives it in the system of record, you must implement these 3 email notifications: 

1. **Submission in progress**: The notification we send immediately after someone selects the **Submit** button on an online form. This means that the form submission has successfully started, but it has not yet reached the system of record. During this time, data submitted by the person may travel through several systems.
2. **Received**: The notification we send when we've received a submitted form in the system of record. This means the form is ready for processing. **Only send this status notification when we have confirmation that the request has reached the system of record.**
3. **Action needed:** The error notification we send if a form submission fails to reach the system of record. This means we need the person to resubmit or take another action before we can process their form. This notification must include instructions for the person to recover from the error. There are different templates available based on the remediation steps specific to the form.

Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### Protecting PII & PHI in notifications

* **Do not send personally identifiable information (PII) or protected health information (PHI) in notifications.** It's imperative that notifications do not include any PII or PHI.
* **Hide filenames.** File names for evidence and other uploads of documents to the VA can often include personal information. So we hide all filenames in notifications. To do this:
  * Replace all but the first 3 and last 2 characters (numbers or letters) of the filename with the "X" character.
  * Show the MIME type of the file (like ".png", ".pdf", etc.)

#### Recovering from an action needed notification failure

In the event that an action needed notification fails to reach the person who submitted the form, then it is imperative that we make multiple attempts to reach the person. 

First, if appropriate, attempt to manually re-submit the form one last time. If successful, an action needed email is no longer necessary. If unsuccessful, move on to the following recommended communication paths:

1. **Email to primary email address.** Our first communication attempt should be to the primary email address provided in the form, or collected from the user's profile.
2. **Email to alternative email address.** If the primary email notification fails, as determined via callback to VA Notify or other mechanism, fallback to any alternative email addresses available.
3. **Text message to primary phone number.** If the secondary email notification fails, fallback to sending a text message via VA Notify to the primary phone number either collected in the form or obtained from the user's profile. Users do not need to opt-in to this message as it is a critical communication.

Finally, if all attempts to reach the person fail, the submission should be logged as a silent failure. Regardless of the notification status, the status of the form submission should be visible in the user interface of VA.gov or the Health and Benefits mobile application. This may be accomplished via [My VA](#form-submission-status-in-my-va), Claim Status Tool, or another service. 

### Showing form submission status on the form confirmation page

#### For synchronous submissions

If there's no lag time between when someone submits the form and when VA receives it in the system of record, do these 2 things on your form confirmation page:
- Show a success message confirming that the submission was successful and we've received the form, like "You've submitted your form"
- In the **What to expect** section, tell the person about the next notification we'll send (in this case, that should be an email confirming we've received their form)

#### For asynchronous submissions

If there's a lag time between when someone submits the form and when VA receives it in the system of record, do these 2 things on the form confirmation page:
- Show a success message confirming only that the submission is in progress, like "Your form submission is in progress" — and explain that we'll send an email to confirm when we've received the form and an estimate for how long that will take
- In the **What to expect** section, tell the person about the next notifications we'll send (in this case, an email confirming the submission is in progress and then a second email confirming when we've received their form) 

### Showing form submission status in My VA

Form submissions on VA.gov or in the mobile app must show the submission status in My VA for people who are authenticated. These statuses appear in the **Benefit applications and forms** section of My VA. This section currently gets statuses from the [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake) polling mechanism for submissions processed asynchronously.

Some forms also show a "received" status in the **Claims and appeals** section of My VA. If your form appears as a claim, decision review, or appeal in the claim status tool, work with the team that manages that tool to determine how and where you should show form submission status in My VA.

#### How to handle forms submitted within the process of another form (sub-forms)

For sub-forms such as the Authorization to Disclose Information to the Department of Veterans Affairs (21-4142), submitted within the process of completing an Application for Disability Compensation and Related Compensation Benefits (21-526EZ) or Decision Review Request: Supplemental Claim (20-0995), the status of the sub-forms should be communicated independently from the status of the main form. In other words, each sub-form would send a separate email notification and would have a separate status card shown in My VA, independent from the notifications and cards of the main form.

#### How to show status for uploaded documents

Indicate to the user on the status card shown in My VA the count of uploaded documents. For example, "You uploaded 22 documents. We'll email you if we can't successfully deliver any of them." 

> NOTE: The exact language and how to convey this to users is currently being designed and is subject to change.

In addition, documents uploaded in the claims status tool do not need to be reflected in My VA.

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
* The sample email templates include customizable content you'll need to fill in for your form. Try to use as much of the template content as possible and only adjust where needed. If you have questions or need help adjusting the templates for your form, you can contact #sitewide-content-accessibility-ia
* Email templates must be reviewed by a VA Privacy Officer in the appropriate portfolio (VBA or VHA). 
