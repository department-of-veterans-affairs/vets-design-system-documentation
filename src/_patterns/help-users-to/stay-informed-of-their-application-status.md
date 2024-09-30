---
layout: pattern
title: Stay informed of their application status
permalink: /patterns/help-users-to/stay-informed-of-their-application-status
sub-section: help-users-to
intro-text: "Follow this pattern to notify users when their request is submitted, received, and has hit an error. These are required notification touch points." 
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

* **Any application that takes data from a user and submits that data to a back-end system.** This pattern is widely applicable to any application or service that accepts users data and submits that data, synchronously or asynchronously, to a system of record. It is a requirement that we notify the user at critical touch points as their request is processed.


## Examples

### Email notifications

{% include component-example.html alt="Screen shots of 3 email templates." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/email-templates.png" caption="Three templates for email notification touch points sent via VA Notify." class="x2" %}

### Status in MyVA

{% include component-example.html alt="Screen shots of 3 MyVA status cards." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/myva-status-cards.png" caption="Three Card component variations used to convey status of a user's submission in MyVA for Benefits applications." reverse="true" %}

## How to design and build

### Email notification touch points

When a request reaches these 3 touch points the user must be notified via email: 

1. **Submission in progress**: The status immediately after a user clicks "submit" on a form. This is the period between the submission and when that submission reaches a system of record. During this time, data submitted by the user may travel through several systems.
  * **Not required for synchronous status.** This touch point is only necessary if the user's data submission is being handled asynchronously. If you can synchronously confirm that the user's data has reached the system of record immediately then you can skip this status notification.
2. **Received**: The status when a request has arrived in the system of record. From there it can be worked on and ultimately completed. **This status notification must not be sent unless we have confirmation that the request has reached the system of record.**
3. **Action needed:** The status which informs the user that their request has failed as it has not reached the system of record. This status may be accompanied by directions for re-submission or directions to call our call center for help.

Submit a [VA Notify intake ticket](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=christy-tongty%2C+mjones-oddball%2C+GitSamJennings&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to start the process of activating email notifications for your application.

#### Protecting PII & PHI in notifications

* **Do NOT send PII or PHI in notifications.** It is imperative that notifications not include any PII or PHI.
* **Obfuscate filenames.** File names for evidence and other uploads of documents to the VA can often include personal information. Thus we obfuscate all filenames in notifications. To do this:
  * Replace all but the first 3 and last 2 characters (numbers or letters) of the filename with the "X" character.
  * Show the MIME type of the file (e.g. ".png", ".pdf", etc.)

### Showing status in MyVA for Benefits applications

Submissions to the VA made via VA.gov or the mobile app must show the status of a request in MyVA such that authenticated users can see the status of any and all submissions. MyVA includes several sections where status can be conveyed:

* Claims and appeals
* Health care
* Outstanding debts
* Benefit payments
* Benefit applications and forms

#### Claims and appeals

Obtains status from the Claims Status Tool.

#### Benefit applications and forms

Currently obtains status from the [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake) polling mechanism for submissions processed asynchronously.

### How this pattern works

Communicating status of a request has three critical phases that all teams must account for in their applications:

1. **Status notification via email or text.**
2. **Status notification in the user interface of VA.gov and the flagship mobile app.** 
3. **Providing a clear next step in the event of an error.**

#### How to provide a clear next step in the event of an error

In the event of an error, an application may determine the next logical step a user can take to remedy that error. At the very least users must be notified that they can contact the Call Center in the event of a submission failure.

### Components used in this pattern

* [Alert]({{site.baseurl}}/components/alert)
* [Card]({{site.baseurl}}/components/card)

### Page templates available for this pattern

[Email templates are available in VA Notify](https://notifications.va.gov/information/emails). NOTE: You must have a VA Notify account to access these templates.

## Examples in production

### Claim status

{% include component-example.html alt="An example of the track your claims page." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/track-your-claims.png" caption="The Claim Status Tool uses Cards that provide details on the current step of the process." class="x2" %}

### Decision letter

{% include component-example.html alt="An example of a claim status card that shows the ability to download a decision letter" file="/images/patterns/help-users-to/stay-informed-of-their-application-status/decision-letter-status-card.png" caption="This claim Card component provides a status of the claim and indicates that a decision letter is available for download." class="x2" %}

### Certificate of eligibility

{% include component-example.html alt="An example of the Certificate of eligibility status page." file="/images/patterns/help-users-to/stay-informed-of-their-application-status/COE-automatic-download-page.png" caption="The Certificate of eligibility uses an Alert component on the confirmation page to show status of a synchronous request." class="x2" %}
