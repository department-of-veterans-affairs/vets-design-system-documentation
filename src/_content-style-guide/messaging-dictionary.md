---
layout: default
title: Messaging dictionary
draft: true
anchors:
  - anchor: System messaging
  - anchor: Engagement messaging
  - anchor: Access messaging
  - anchor: Feedback messaging
---

# Messaging Dictionary

{% include _site-on-this-page.html %}

## System messaging

Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Scheduled downtime notice scenarios

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Notice of upcoming scheduled downtime (sitewide)</span>
    <span>VA.gov will be down for maintenance soon</span>
    <span>We’ll be doing some work on VA.gov on [DATE] between [TIME] and [TIME]. If you have trouble using the site during that time, please check back soon.</span>
    <span><va-link href="/components/modal" text="Modal"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>N/A</span>
  </va-table-row>
  <va-table-row>
    <span>Notice of upcoming scheduled downtime (application)</span>
    <span>[APPLICATION NAME] will be down for maintenance soon</span>
    <span>We'll be doing some work on [APPLICATION NAME] on [DATE] between [TIME] and [TIME]. If you have trouble using this tool during that time, please check back soon.</span>
    <span><va-link href="/components/modal" text="Modal"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>N/A</span>
  </va-table-row>
  <va-table-row>
    <span>Notice of upcoming scheduled downtime (authentication provider)</span>
    <span>[ID.ME/DS LOGON/MYHEALTHEVET] will be down for maintenance soon</span>
    <span>[ID.ME/DS LOGON/MYHEALTHEVET] will be down for maintenance on [DATE] between [TIME] and [TIME]. If you have trouble signing in to your Vets.gov account during that time, please check back soon.</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Below sign in overlay title</span>
  </va-table-row>
</va-table>

### Updates to user data (system-initiated)

*Some messages written to reflect the example; other variations will be added to expanded dictionary section.*

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Status update (e.g. claim closed)</span>
    <span><strong>Your [CLAIM TYPE] claim update</strong></span>
    <span>Our records show that your claim was closed on [DATE].</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Action required (e.g. claim evidence request)</span>
    <span><strong>We need your help to finish reviewing your claim</strong></span>
    <span>Please provide more evidence (supporting documents) so we can finish reviewing your claim.</span>
    <span>See Details</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Form prefill notice</span>
    <span><strong>We've started your form for you</strong></span>
    <span>We've filled in some of this form based on information you've given us in the past. Please double-check the information and update it as needed.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Change in application feature, neutral/positive impact (e.g. SiP now available)</span>
    <span><strong>You can now save your in-progress applications</strong></span>
    <span>Sign in to VA.gov to save your application so you can come back later to complete it. All you'll need to sign in is an email and password.</span>
    <span>Sign in to VA.gov</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
</va-table>

## Engagement messaging

Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Prompt to complete a task or enter data

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Continue a saved benefit application</span>
    <span><strong>Still want to apply for [BENEFIT NAME]?</strong></span>
    <span>The application you started for [BENEFIT NAME] will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or you can start a new application any time.</span>
    <span>[BUTTON 1] Continue your application [BUTTON 2] Start over</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row> 
  <va-table-row>
    <span>Set up 2-factor authentication</span>
    <span><strong>Want to make your VA.gov account more secure?</strong></span>
    <span>You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if someone gets your password.</span>
    <span>[BUTTON 1] Set up 2FA [BUTTON 2] Learn more</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#informational-alert" text="Informational"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row> 
</va-table>

## Access messaging

Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### System downtime

Variations in messaging will be contingent on:

- Whether or not the downtime is scheduled/expected
- If scheduled, when the application will be back up (precise time stamp if known, general estimate if not)
- If not expected, general estimate of when the application will be back up

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is not accessible (scheduled downtime)</span>
    <span><strong>VA.gov is down for maintenance right now</strong></span>
    <span>We're sorry. VA.gov isn't ready for you right now. We're doing some work to help make this site even better for Veterans, service members, and family members like you. We hope to finish our work by [DATE/TIME]. Please check back then.</span>
    <span>N/A</span>
    <span><va-link href="/design/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is not accessible (expected)</span>
    <span><strong>VA.gov isn't working right now</strong></span>
    <span>We're sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")).</span>
    <span>N/A</span>
    <span><va-link href="/design/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page</span>
  </va-table-row>
  <va-table-row>
    <span>Entire site is accessible</span>
    <span><strong>We're working on the site</strong></span>
    <span>We’re doing some work on VA.gov right now. You should still be able to use the applications and tools. But if you have any trouble, please check back soon.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Banner</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is not accessible</span>
    <span><strong>[APPLICATION NAME] is down for maintenance</strong></span>
    <span>We’re making some updates to [APPLICATION NAME]. We’re sorry it’s not working right now, and we hope to be finished by [DATE], [TIME]. Please check back soon.</span>
    <span>N/A</span>
    <span><va-link href="/design/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page below title</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is not accessible, no timeframe</span>
    <span><strong>[APPLICATION NAME] is down for maintenance</strong></span>
    <span>We're making some updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back soon.</span>
    <span>N/A</span>
    <span><va-link href="/design/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Replace page below title</span>
  </va-table-row>
  <va-table-row>
    <span>Application or page is accessible (general message; specific iterations to be added later)</span>
    <span><strong>Some parts of this may not be working</strong></span>
    <span>You can still use [APPLICATION/PAGE NAME], but some parts of it may not work for you. If you're having trouble, please try again later.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Component is not accessible (general message; specific iterations to be added later)</span>
    <span><strong>[COMPONENT NAME] isn't working right now</strong></span>
    <span>We're sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")].</span>
    <span>Go back to previous page</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Replace affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Component is accessible (general message; <va-link href="see application/component specific messages" text="see application/component specific messages"></va-link>)</span>
    <span><strong>Some information may not be up to date</strong></span>
    <span>We're sorry. Something's not working quite right. You can still use [COMPONENT NAME], but you may not be able to see all your updated information. If you're having trouble, please try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")].</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Above affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (e.g. save application in progress)</span>
    <span><strong>We couldn't save your form</strong></span>
    <span>We're sorry. Something went wrong when we tried to save your form. If you're on a secure and private computer, you can leave this page open and try saving your form again in a few minutes. If you're on a public computer, you can continue to fill out your form, but it won't automatically save as you fill it out.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task, can't proceed</span>
    <span><strong>We've run into a problem</strong></span>
    <span>We're sorry. Something went wrong on our end. Please try again.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task, can still proceed</span>
    <span><strong>We've run into a problem</strong></span>
    <span>We're sorry. Something went wrong on our end. You can try again now, or move on to the next step and come back later to complete this.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#warning-alert" text="Warning alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
</va-table>

### Network connection loss

<va-table table-type="bordered">
  <va-table-row>
    <span>Scenario</span>
    <span>Message title</span>
    <span>Message content</span>
    <span>Actions</span>
    <span>Component</span>
    <span>State</span>
    <span>Location</span>
  </va-table-row>
  <va-table-row>
    <span>Application/page/component is not accessible due to user connection loss</span>
    <span><strong>We can't load [APPLICATION/PAGE/COMPONENT NAME]</strong></span>
    <span>Please make sure you're connected to the Internet, and refresh this page to try again.</span>
    <span>Try again</span>
    <span><va-link href="/design/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Below page title</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete an automated task (e.g. save application in progress) due to user connection loss</span>
    <span><strong>We can't save your form right now</strong></span>
    <span>Please make sure you're connected to the Internet, and then try saving your form again.</span>
    <span>Try again</span>
    <span><va-link href="/design/typography" text="Plain text"></va-link></span>
    <span>N/A</span>
    <span>Below affected component</span>
  </va-table-row>
  <va-table-row>
    <span>Unable to complete a user-initiated task due to user connection loss</span>
    <span><strong>We've run into a problem</strong></span>
    <span>Please check to make sure you're connected to the Internet, and try again.</span>
    <span>N/A</span>
    <span><va-link href="/components/alert" text="Alert box"></va-link></span>
    <span><va-link href="/components/alert#error-alert" text="Error alert"></va-link></span>
    <span>Above page title</span>
  </va-table-row>
</va-table>

### Authorization

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| (Application) user's records are not found | **We don't seem to have your records** | We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET. | N/A | [Plain text](/design/typography) | N/A | Replace content below page title |
| (Page) user's records are not found | **We don't seem to have your records** | We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET.  | N/A | [Plain text](/design/typography) | N/A | Replace content below page title |
| (Component) user's records are not found | **We don't seem to have your records**  | We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET. | N/A | [Plain text](/design/typography) | N/A | Replace affected component |
| (Application) user is not eligible for a benefit because they aren't a Veteran/dependent/spouse | **You're not eligible for this benefit** | It looks like you're not eligible for this benefit based on the information you've given us. Please check your eligibility again. | Check your eligibility | N/A | [Plain text](/design/typography) | Replace content below page title |
| (Application) user is not currently enrolled in a benefit (e.g. not enrolled in Post-9/11 GI Bill benefits) | **You're not enrolled in this benefit right now** | It looks like you're not signed up for this benefit. If you think you're eligible, you can apply now.| (1) Check your eligibility (2) Apply now  | [Plain text](/design/typography) | N/A | Replace content below page title |
| (Application) user is not a VA patient | **We can't give you access to this tool right now** | We're sorry. Only patients who've received care at a VA facility can use VA.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, please call that facility to find out if you're in their records. | Find your VA facility | [Plain text](/design/typography) | N/A | Replace content below page title |

### Empty state

| Scenario                                 | Message title | Message content | Component | Location |
| ---------------------------------------- | ----- | ----------- | --------- | -------- |
| (Application) No data tied to the user or scenario | **No [DATA TYPE (ie, prescription refills or health records)] to show** | We don't have any [DATA TYPE] in our system to show here. | [Plain text](/design/typography) | Replace content below page title |
| (Page) no data tied to the user or scenario | **No [DATA TYPE] to show** | We don't have any [DATA TYPE] in our system to show here. | [Plain text](/design/typography) | Replace content below page title |
| (Component) no data tied to the user or scenario | **No [DATA TYPE] to show** | We don't have any [DATA TYPE] for you in our system. | [Plain text](/design/typography) | Replace affected component |

## Feedback messaging

The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.

***Note:** See [content style guide]({{ site.baseurl }}/content-style-guide/messaging-error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Task completion success/failure

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Form save in progress success (inline)   | **Saved** | We saved the information you've entered so far. | N/A | [Alert box](/components/alert) | [Success alert](/components/alert#success-alert) | Below affected component |
| Form save in progress success (exit page) | **Saved**  | We saved your in-progress form. Remember, you need to finish the form and click "Submit" to apply for this benefit. Continue applying now, or come back later to finish your application. | Continue your application | [Alert box](/components/alert) | [Success alert](/components/alert#success-alert) | Below page title |
| Form save in progress failure (inline)   | **Your form didn't save** | We're sorry. We couldn't save your form. Please try again.   | N/A | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Below affected component |
| Form general error | **We need you to start over with this application** | Something's not working quite right. We're sorry to make extra work for you, but please try applying again in a few minutes. | Start over | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Replace content below page title |
| Form submission success                  | **Submitted** | We received your form. Thank you. | N/A | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Below page title |
| Form submission failure, can save in progress | **Please save this application and try again** | We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow. | Save your application | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| Form submission failure, unable to save in progress | **Please start over with this application** | We're sorry. Your application didn't go through, and you'll need to start over. We suggest you wait a day while we fix this problem. | N/A | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| Required form field is empty  | N/A | Please fill in this required information. | N/A | Inline | [Error alert](/components/alert#error-alert) | N/A |
| Form field entry is not valid | N/A | Please fill in a valid [address/email address/phone number]. | N/A | Inline | [Error alert](/components/alert#error-alert) | N/A |
| File upload success | **Uploaded** | We uploaded your file. Thank you. | Dismissible | [Alert box](/components/alert) | [Success alert](/components/alert#success-alert) | Above page title |
| File upload failure | **We couldn't upload your file** | We're sorry. We weren't able to upload your file. Please try again. |  Dismissible | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| File download success | **Downloaded**  | We downloaded your file. | Dismissible | [Alert box](/components/alert) | [Success alert](/components/alert#success-alert) | Above page title |
| File download failure | **We couldn't download your file** | We're sorry. We weren't able to download your file. Please try again. | Dismissible | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| Message sent | **Message sent** | We sent your message. Thank you. | Dismissible | Alert | Success | Above page title |
| Message failed to send | **Your message didn't go through** | We're sorry. We couldn't send your message. Please try again.|  Dismissible | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| Creation success | **File created** | We created your file. Thank you. | Dismissible | Alert | Success | Above page title |
| Creation failure | **We couldn't create your file** | We're sorry. We couldn't create your file. Please try again.  |  Dismissible | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| Deletion success                         | **File deleted** | We deleted your file. Thank you. | Dismissible | [Alert box](/components/alert) | [Success alert](/components/alert#success-alert) | Above page title |
| Deletion failure | **We couldn't delete your file** | We're sorry. We couldn't delete your file. Please try again.  |  Dismissible | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |
| Update success | **File updated** | We updated your file. Thank you. | Dismissible | [Alert box](/components/alert) | [Success alert](/components/alert#success-alert) | Above page title |
| Update failure | **We couldn't update your file** | We're sorry. We couldn't update your file. Please try again.  |  Dismissible | [Alert box](/components/alert) | [Error alert](/components/alert#error-alert) | Above page title |

_Categories adapted from [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/guidelines/messaging/types)_
