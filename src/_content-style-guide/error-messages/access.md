---
layout: content-style-guide
permalink: /content-style-guide/error-messages/access
has-parent: /content-style-guide/error-messages/
title: Access messages
intro-text: Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc.
anchors:
  - anchor: System downtime
  - anchor: Network connection loss
  - anchor: Authorization
  - anchor: Empty state
---

***Note:** See [Error Messages](/patterns/error-messages#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

## System downtime

Variations in messaging will be contingent on:

- Whether or not the downtime is scheduled/expected
- If scheduled, when the application will be back up (precise time stamp if known, general estimate if not)
- If not expected, general estimate of when the application will be back up

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Entire site is not accessible (site-wide scheduled downtime) | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year **Start/End time:** 0:00 a.m. to 0:00 a.m. ET | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace page |
| Entire site is not accessible (expected) | **VA.gov isn't working right now** | We're sorry. Something went wrong on our end. Please refresh this page or try again later. | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace page |
| Application or tool is not accessible | **[APPLICATION NAME] is down for maintenance** | We're making some updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back soon. | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace page below title |
| Application or page is accessible (general message; specific iterations to be added later) | **Some parts of this may not be working** | You can still use [APPLICATION/PAGE NAME], but some parts of it may not work for you. If you're having trouble, please try again later. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Warning alert]({{ site.baseurl }}/components/alert#warning-alert) | Below page title |
| Component is not accessible (general message; specific iterations to be added later) | **[COMPONENT NAME] isn't working right now** | We're sorry. Something went wrong on our end. Please refresh this page or try again later. | Go back to previous page | [Alert box]({{ site.baseurl }}/components/alert) | [Warning alert]({{ site.baseurl }}/components/alert#warning-alert) | Replace affected component |
| Component is accessible (general message; [see application/component specific messages](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Platform/Design%20System/Guidelines/Error%20handling/Dictionary/Access%20Messaging.md))| **Some information may not be up to date** | You can still use [COMPONENT NAME], but you may not be able to see all your updated information. If you're having trouble, please try again later. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Warning alert]({{ site.baseurl }}/components/alert#warning-alert) | Above affected component |
| Unable to complete an automated task (e.g. save application in progress) | **We couldn't save your form** | We're sorry. Something went wrong when we tried to save your form. Try saving it again in a few minutes. If you're on a public computer, you can continue to fill out your form, but your information won't automatically be saved. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Below affected component |
| Unable to complete a user-initiated task, can't proceed | **We've run into a problem** | We're sorry. Something went wrong on our end. Please try again. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |
| Unable to complete a user-initiated task, can still proceed | **We've run into a problem** | We're sorry. Something went wrong on our end. You can try again now, or move on to the next step and come back later to complete this. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Warning alert]({{ site.baseurl }}/components/alert#warning-alert) | Above page title |

## Network connection loss

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Application/page/component is not accessible due to user connection loss    | **We can't load [APPLICATION/PAGE/COMPONENT NAME]** | Please refresh this page or try again later. | Try again | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Below page title |
| Unable to complete an automated task (e.g. save application in progress) due to user connection loss | **We can't save your form right now** | Please make sure you're connected to the Internet, and then try saving your form again. | Try again | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Below affected component |
| Unable to complete a user-initiated task due to user connection loss | **We've run into a problem** | Please check to make sure you're connected to the Internet, and try again. | N/A | [Alert box]({{ site.baseurl }}/components/alert) | [Error alert]({{ site.baseurl }}/components/alert#error-alert) | Above page title |

## Authorization

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| (Application) user's records are not found | **We don't seem to have your records** | We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7. | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace content below page title |
| (Page) user's records are not found | **We don't seem to have your records** | We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here 24/7.  | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace content below page title |
| (Component) user's records are not found | **We don't seem to have your records**  | We're sorry. We can't match your information to our records. If you think your information should be here, please try again later or call us at 800-698-2411 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET. | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace affected component |
| (Application) user is not eligible for a benefit because they aren't a Veteran/dependent/spouse | **You're not eligible for this benefit** | It looks like you're not eligible for this benefit based on the information you've given us. Please check your eligibility again. | Check your eligibility | N/A | [Plain text]({{ site.baseurl }}/foundation/typography) | Replace content below page title |
| (Application) user is not currently enrolled in a benefit (e.g. not enrolled in Post-9/11 GI Bill benefits) | **You're not enrolled in this benefit right now** | Our records show that you're not signed up for this benefit. If you think you're eligible for this benefit, you can apply now.| (1) Check your eligibility (2) Apply now  | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace content below page title |
| (Application) user is not a VA patient | **We can't give you access to this tool right now** | We're sorry. Only patients who've received care at a VA facility can use VA.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, please call that facility to find out if you're in their records. | Find your VA facility | [Plain text]({{ site.baseurl }}/foundation/typography) | N/A | Replace content below page title |

## Empty state

| Scenario                                 | Message title | Message content | Component | Location |
| ---------------------------------------- | ----- | ----------- | --------- | -------- |
| (Application) No data tied to the user or scenario | **We don't have any [DATA TYPE (ie, prescription refills or health records)] for you in our system** |  | [Plain text]({{ site.baseurl }}/foundation/typography) | Replace content below page title |
| (Page) no data tied to the user or scenario | **We don't have any [DATA TYPE] for you in our system** | | [Plain text]({{ site.baseurl }}/foundation/typography) | Replace content below page title |
| (Component) no data tied to the user or scenario | **We don't have any [DATA TYPE] for you in our system** |  | [Plain text]({{ site.baseurl }}/foundation/typography) | Replace affected component |
