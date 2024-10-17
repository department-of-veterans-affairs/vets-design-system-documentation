---
layout: pattern
title: Stay informed of their form submission status
permalink: /patterns/help-users-to/stay-informed-of-their-application-status
sub-section: help-users-to
intro-text: "Follow this pattern to notify users when their online form submission is in progress, when we've received their submitted form, and when a system error has caused teh submission to fail. These are required notification touch points." 
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

* **Any online form that takes data from a user and submits that data to a back-end system.** This pattern is widely applicable to any online form that accepts user data and submits that data, synchronously or asynchronously, to a system of record. We're required to notify the user at critical touch points in the submission process.

## Examples

### Email notifications

We'll add examples of these notifications soon.

### Form submission status in My VA

{% include component-example.html alt="Screen shots of 3 MyVA status cards." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/myva-status-cards.png" caption="Three Card component variations used to convey status of a user's submission in MyVA for Benefits applications." reverse="true" %}

## How to design and build

### Sending email notifications

#### For synchronous submissions

If there's no lag time between the user submitting the form and us receiving the form in a system of record, you only need to implement 1 email notification: 

1. **Received**: The notification when we've received a submitted form in the system of record. This means the form is ready for processing. **Only send this status notification when we have confirmation that the request has reached the system of record.**

**Note:** The reason you don't need "Action needed" notifications for synchronous submissions is that you show the user the error message in the form itself. If form submission can fail after the user gets a success message on the form confirmation page, your form has asynchronous submissions and you need 3 email notifications.

Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### For asynchronous submissions

If there's a lag time between the user submitting the form and us receiving the form in a system of record, you must implement 3 email notifications: 

1. **Submission in progress**: The notification we send immediately after a user selects the **Submit** button on an online form. This means that the form submission has successfully started, but it has not yet reached a system of record. During this time, data submitted by the user may travel through several systems.
2. **Received**: The notification we send when we've received a submitted form in the system of record. This means the form is ready for processing. **Only send this status notification when we have confirmation that the request has reached the system of record.**
3. **Action needed:** The error notification we send if a form submission fails to reach the system of record. This means we need the user to resubmit or take another action before we can process their form. This notification must include instructions for the user to recover from the error.

Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### Protecting PII & PHI in notifications

* **Do NOT send PII or PHI in notifications.** It is imperative that notifications not include any PII or PHI.
* **Obfuscate filenames.** File names for evidence and other uploads of documents to the VA can often include personal information. Thus we obfuscate all filenames in notifications. To do this:
  * Replace all but the first 3 and last 2 characters (numbers or letters) of the filename with the "X" character.
  * Show the MIME type of the file (e.g. ".png", ".pdf", etc.)

### Showing form submission status on the form confirmation page

#### For synchronous submissions

If there's no lag time between the user submitting the form and us receiving the form in a system of record, do these 2 things on your form confirmation page:
- Show a success message confirming that the submission was successful and we've received the form, like "You've submitted your form"
- In the What to expect section, tell the user about the next notification we'll send (in this case, that should be an email confirming we've received their form)

#### For asynchronous submissions

If there's a lag time between the user submitting the form and us receiving the form in a system of record, do these 2 things on the form confirmation page:
- Show a success message message confirming only that the submission is in progress, like "Your form submission is in progress" — explain that we'll send an email to confirm when we've received the form and an estimate for how long that will take
- In the What to expect section, tell the user about the next notifications we'll send (in this case, an email confirming the submission is in progress and then a second email confirming when we've received their form) 

### Showing form submission status in My VA

Form submissions on VA.gov or in the mobile app must show the submission status in My VA for authenticated users. These statuses appear in the **Benefit applications and forms** section of My VA. This section currently obtains status from the [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake) polling mechanism for submissions processed asynchronously.

Some forms also show a "received" status in the **Claims and appeals** section of My VA. If your form appears as a claim, decision review, or appeal in the Claim Status Tool, work with the team that manages that tool to determine how and where you should show form submission status in My VA. 

### How this pattern works

Communicating form submission status has 3 critical phases that all teams must account for in their online forms:

1. **Status notification via email or text.**
2. **Status notification in the user interface of VA.gov and the flagship mobile app.** 
3. **Providing a clear next step in the event of an error.**

#### How to provide a clear next step in the event of an error

Every time a form submission error happens, you must notify the user that about the error and provide a recovery step. At the very least, tell users to contact the Call Center.

### Components used in this pattern

* [Alert]({{site.baseurl}}/components/alert)
* [Card]({{site.baseurl}}/components/card)

### Page templates available for this pattern

* [Email templates are available in VA Notify](https://notifications.va.gov/information/emails). [VA.gov email templates](https://notifications.va.gov/services/5bda137e-689e-4532-b3d2-2c81c0324331/templates). You'll need a VA Notify account to access the sample templates. Select **Add new template**. Then select **Sample templates**.
* The sample email templates include variables you'll need to fill in for your form. If you need help adjusting the templates to work for your form, contact the Sitewide Content, Accessibility, and IA (CAIA) team.
* Email templates must be reviewed by a VA Privacy Officer in the appropriate portfolio (VBA or VHA). 
