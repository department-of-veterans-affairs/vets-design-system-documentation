---
layout: default
title: Error messages
anchors:
  - anchor: System messaging
  - anchor: Engagement messaging
  - anchor: Access messaging
  - anchor: Feedback messaging
---

# Error messages

## System messaging

Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.

***Note:** See [Error Messages](/patterns/error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Scheduled downtime notifications

| Scenario                                 | Message title | Message content | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | --------- | ------ | --------  |
| **Sitewide**                             |        |             |           |        |          |
| Advance notification | **Upcoming site maintenance**  | We’ll be doing some work on VA.gov. The maintenance will last x hour. During that time, you won’t be able to sign in or use tools.<br> **Date:** Day, Date, Year <br>**Start/End time:** 0:00 a.m. to 0:00 a.m. ET | [System maintenance banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | [Warning](/components/alertboxes#warning/) | N/A |
| Advance notification/24 hour | **Upcoming site maintenance** | We’ll be doing some work on VA.gov. The maintenance will last 24 hours. During that time, you won’t be able to sign in or use tools. <br>**Start:** Day, Date, Year, at 0:00 a.m. ET <br>**End:** Day, Date, Year, at 0:00 a.m. ET | [System maintenance banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | [Warning](/components/alertboxes#warning/) | N/A |
| During downtime | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year <br>**Start/End time:** 0:00 a.m. to 00:00 a.m. ET  | [System maintenance banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | [Banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | N/A |
| During downtime/24 hour | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Start:** Day, Date, Year at 0:00 a.m. ET <br>**End:** Day, Date, Year at 0:00 a.m. ET | [System maintenance banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | [Banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | N/A |
| **In-app**                                |  |  | |   |  |
| During downtime | **We're working on [APP name] right now** | If you have trouble using this tool, please check back after [Month, Date] at [00:00 a.m./p.m. ET]. | [React component](/components/modal) | [Warning](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | N/A |
| Partial downtime notification | **Some online tools or services aren't working right now** | You may have trouble accessing some features on VA.gov at this time. We’re working to fix this. Please check back soon. | [Alert box](/components/alertboxes) | [Warning](/components/alertboxes#warning-alert) | N/A |
| **Sign-in page**                                |  |  | |   |  |
| During downtime | **You may have trouble signing in with [DS Logon, MyHealtheVet, ID.me]** | We’re sorry. We’re working to fix some problems with our [DS Logon, MyHealtheVet,ID.me] sign in process. If you’d like to sign in to VA.gov with this account, please check back later. | [Alert box](/components/alertboxes) | [Warning](/components/alertboxes#warning-alert) | N/A |

### Unscheduled downtime notifications

| Scenario                                 | Message title | Message content | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | --------- | ------ | -------- |
| **Sitewide**                             |        |             |           |        |          |
| During downtime | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year <br>**Start/End time:** 0:00 a.m. to 00:00 a.m. ET  | [System maintenance banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | [Banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) | N/A |
| **In-app**                             |        |             |           |        |          |
| During downtime | **This application is down for maintenance** | We’re making some updates to this tool. We’re sorry it’s not working right now. Please check back soon. | [Modal](/components/modal) | [Informational](/components/alertboxes#informational-alert) | N/A |
| **Sign-in page**                             |        |             |           |        |          |
| During downtime | **You may have trouble signing in with [DS Logon, MyHealtheVet, ID.me]**  | We’re sorry. We’re working to fix some problems with our [DS Logon, MyHealtheVet,ID.me] sign in process. If you’d like to sign in to VA.gov with this account, please check back later. | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | N/A |



### Updates to user data (system-initiated)

*Some messages written to reflect the example; other variations will be added to expanded dictionary section.*

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Status update (e.g. claim closed)        | **Your [CLAIM TYPE] claim update** | Our records show that your claim was closed on [DATE].| N/A | [Alert box](/components/alertboxes) | [Informational](/components/alertboxes#informational-alert) | Replace affected component |
| Action required (e.g. claim evidence request) | **We need your help to finish reviewing your claim** | Please provide more evidence (supporting documents) so we can finish reviewing your claim.| See Details | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | Above affected component |
| Form prefill notice | **We've started your form for you** | We've filled in some of this form based on information you gave us. Please check and update the information as needed. | N/A | [Alert box](/components/alertboxes) | [Informational](/components/alertboxes#informational-alert) | Above affected component |
| Change in application feature, neutral/positive impact (e.g. SiP now available) | **You can save your in-progress application** | Sign in to VA.gov to save your application so you can come back later to complete it. All you'll need to sign in is an email and password. | Sign in to VA.gov | [Alert box](/components/alertboxes) | [Informational](/components/alertboxes#informational-alert) | Above affected component |

## Engagement messaging

Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.

***Note:** See [Error Messages](/patterns/error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Prompt to complete a task or enter data

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Continue a saved benefit application | **Still want to apply for [BENEFIT NAME]?** | Your application will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or you can start a new application any time. | [BUTTON 1] Continue your application [BUTTON 2] Start over | [Alert box](/components/alertboxes) | [Informational](/components/alertboxes#informational-alert) | Replace affected component |
| Set up 2-factor authentication       | **Want to make your VA.gov account more secure?** | You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if someone gets your password. | Secure your account | [Alert box](/components/alertboxes) | [Informational](/components/alertboxes#informational-alert) | Replace affected component |

## Access messaging

Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc.

***Note:** See [Error Messages](/patterns/error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### System downtime

Variations in messaging will be contingent on:

- Whether or not the downtime is scheduled/expected
- If scheduled, when the application will be back up (precise time stamp if known, general estimate if not)
- If not expected, general estimate of when the application will be back up

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Entire site is not accessible (site-wide scheduled downtime) | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year **Start/End time:** 0:00 a.m. to 0:00 a.m. ET | N/A | [Plain text](/design/typography) | N/A | Replace page |
| Entire site is not accessible (expected) | **VA.gov isn't working right now** | We're sorry. Something went wrong on our end. Please refresh this page or try again later. | N/A | [Plain text](/design/typography) | N/A | Replace page |
| Entire site is accessible | **We're working on the site** | We’re working on VA.gov right now. You should still be able to use the applications and tools. But if you have any trouble, please check back soon. | N/A | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | Banner |
| Application or tool is not accessible | **[APPLICATION NAME] is down for maintenance** | We're making some updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back soon. | N/A | [Plain text](/design/typography) | N/A | Replace page below title |
| Application or page is accessible (general message; specific iterations to be added later) | **Some parts of this may not be working** | You can still use [APPLICATION/PAGE NAME], but some parts of it may not work for you. If you're having trouble, please try again later. | N/A | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | Below page title |
| Component is not accessible (general message; specific iterations to be added later) | **[COMPONENT NAME] isn't working right now** | We're sorry. Something went wrong on our end. Please refresh this page or try again later. | Go back to previous page | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | Replace affected component |
| Component is accessible (general message; [see application/component specific messages](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Platform/Design%20System/Guidelines/Error%20handling/Dictionary/Access%20Messaging.md))| **Some information may not be up to date** | You can still use [COMPONENT NAME], but you may not be able to see all your updated information. If you're having trouble, please try again later. | N/A | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | Above affected component |
| Unable to complete an automated task (e.g. save application in progress) | **We couldn't save your form** | We're sorry. Something went wrong when we tried to save your form. Try saving it again in a few minutes. If you're on a public computer, you can continue to fill out your form, but your information won't automatically be saved. | N/A | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Below affected component |
| Unable to complete a user-initiated task, can't proceed | **We've run into a problem** | We're sorry. Something went wrong on our end. Please try again. | N/A | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Unable to complete a user-initiated task, can still proceed | **We've run into a problem** | We're sorry. Something went wrong on our end. You can try again now, or move on to the next step and come back later to complete this. | N/A | [Alert box](/components/alertboxes) | [Warning alert](/components/alertboxes#warning-alert) | Above page title |

### Network connection loss

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Application/page/component is not accessible due to user connection loss    | **We can't load [APPLICATION/PAGE/COMPONENT NAME]** | Please refresh this page or try again later. | Try again | [Plain text](/design/typography) | N/A | Below page title |
| Unable to complete an automated task (e.g. save application in progress) due to user connection loss | **We can't save your form right now** | Please make sure you're connected to the Internet, and then try saving your form again. | Try again | [Plain text](/design/typography) | N/A | Below affected component |
| Unable to complete a user-initiated task due to user connection loss | **We've run into a problem** | Please check to make sure you're connected to the Internet, and try again. | N/A | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |

### Authorization

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| (Application) user's records are not found | **We don't seem to have your records** | We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7. | N/A | [Plain text](/design/typography) | N/A | Replace content below page title |
| (Page) user's records are not found | **We don't seem to have your records** | We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7.  | N/A | [Plain text](/design/typography) | N/A | Replace content below page title |
| (Component) user's records are not found | **We don't seem to have your records**  | We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET. | N/A | [Plain text](/design/typography) | N/A | Replace affected component |
| (Application) user is not eligible for a benefit because they aren't a Veteran/dependent/spouse | **You're not eligible for this benefit** | It looks like you're not eligible for this benefit based on the information you've given us. Please check your eligibility again. | Check your eligibility | N/A | [Plain text](/design/typography) | Replace content below page title |
| (Application) user is not currently enrolled in a benefit (e.g. not enrolled in Post-9/11 GI Bill benefits) | **You're not enrolled in this benefit right now** | Our records show that you're not signed up for this benefit. If you think you're eligible for this benefit, you can apply now.| (1) Check your eligibility (2) Apply now  | [Plain text](/design/typography) | N/A | Replace content below page title |
| (Application) user is not a VA patient | **We can't give you access to this tool right now** | We're sorry. Only patients who've received care at a VA facility can use VA.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, please call that facility to find out if you're in their records. | Find your VA facility | [Plain text](/design/typography) | N/A | Replace content below page title |

### Empty state

| Scenario                                 | Message title | Message content | Component | Location |
| ---------------------------------------- | ----- | ----------- | --------- | -------- |
| (Application) No data tied to the user or scenario | **We don't have any [DATA TYPE (ie, prescription refills or health records)] for you in our system** |  | [Plain text](/design/typography) | Replace content below page title |
| (Page) no data tied to the user or scenario | **We don't have any [DATA TYPE] for you in our system** | | [Plain text](/design/typography) | Replace content below page title |
| (Component) no data tied to the user or scenario | **We don't have any [DATA TYPE] for you in our system** |  | [Plain text](/design/typography) | Replace affected component |

## Feedback messaging

The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.

***Note:** See [Error Messages](/patterns/error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

### Task completion success/failure

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Form save in progress success (inline)   | **We've saved the information you've entered so far** | | N/A | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Below affected component |
| Form save in progress success (exit page) | **We've saved your in-progress application**  | You'll need to finish the application and click "Submit" to apply for this benefit. Continue applying now, or come back later to finish. | Continue your application | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Below page title |
| Form save in progress success (inline)   | **We’re saving your new mobile phone number** |  We’ll show it here once it’s saved. | N/A | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Below affected component |
| Form save in progress failure (inline)   | **Your form didn't save** |  Please try again.   | N/A | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Below affected component |
| Form general error | **We need you to start over with this application** | Something's not working quite right. We're sorry to make extra work for you, but please try applying again in a few minutes. | Start over | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Replace content below page title |
| Form submission success                  | **We've received your application** | | N/A | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Below page title |
| Form submission failure, can save in progress | **Please save this application and try again** | We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow. | Save your application | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Form submission failure, unable to save in progress | **Please start over with this application** | We're sorry. Your application didn't go through, and you'll need to start over. We suggest you wait a day while we fix this problem. | N/A | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Required form field is empty  | N/A | Please enter your [required information]. | N/A | Inline | [Error alert](/components/alertboxes#error-alert) | N/A |
| Form field entry is not valid | N/A | Please enter a valid [address/email address/phone number/city/state]. | N/A | Inline | [Error alert](/components/alertboxes#error-alert) | N/A |
| File upload success | **Your file has been uploaded** |  | Dismissible | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Above page title |
| File upload failure | **We couldn't upload your file** | Please try again. |  Dismissible | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| File download success | **We downloaded your file**  |  | Dismissible | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Above page title |
| File download failure | **We couldn't download your file** |  Please try again. | Dismissible | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Message sent | **We sent your message** |  | Dismissible | Alert | Success | Above page title |
| Message failed to send | **Your message didn't go through** | Please try again.|  Dismissible | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Creation success | **We created your file** | | Dismissible | Alert | Success | Above page title |
| Creation failure | **We couldn't create your file** | Please try again.  |  Dismissible | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Deletion success                         | **We've deleted your file** | | Dismissible | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Above page title |
| Deletion failure | **We couldn't delete your file** | Please try again.  |  Dismissible | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |
| Update success | **We updated your file** |  | Dismissible | [Alert box](/components/alertboxes) | [Success alert](/components/alertboxes#success-alert) | Above page title |
| Update failure | **We couldn't update your file** | Please try again.  |  Dismissible | [Alert box](/components/alertboxes) | [Error alert](/components/alertboxes#error-alert) | Above page title |

_Categories adapted from [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/guidelines/messaging/types)_
