---
layout: content-style-guide
permalink: /content-style-guide/error-messages/system
has-parent: /content-style-guide/error-messages/
title: System messages
intro-text: Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.
anchors:
  - anchor: Scheduled downtime notifications
  - anchor: Unscheduled downtime notifications
  - anchor: Updates to user data (system initiated)
---

***Note:** See the [help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

## Scheduled downtime notifications

| Scenario                                 | Message title | Message content | Component | State  | 
| ---------------------------------------- | ------------- | --------------- | --------- | ------ | 
| **Site-wide**                            |               |                 |           |        | 
| Advance notification | **Upcoming site maintenance**  | We’ll be doing some work on VA.gov. The maintenance will last x hour. During that time, you won’t be able to sign in or use tools.<br> **Date:** Day, Date, Year <br>**Start/End time:** 0:00 a.m. to 0:00 a.m. ET | [Maintenance banner]({{ site.baseurl }}/components/banner#before-maintenance) | Before maintenance |
| Advance notification/24 hour | **Upcoming site maintenance** | We’ll be doing some work on VA.gov. The maintenance will last 24 hours. During that time, you won’t be able to sign in or use tools. <br>**Start:** Day, Date, Year, at 0:00 a.m. ET <br>**End:** Day, Date, Year, at 0:00 a.m. ET | [Maintenance banner]({{ site.baseurl }}/components/banner#before-maintenance) | Before maintenance | 
| During downtime | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year <br>**Start/End time:** 0:00 a.m. to 00:00 a.m. ET  | [Maintenance banner]({{ site.baseurl }}/components/banner#during-maintenance) | During maintenance| 
| During downtime/24 hour | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Start:** Day, Date, Year at 0:00 a.m. ET <br>**End:** Day, Date, Year at 0:00 a.m. ET | [Maintenance banner]({{ site.baseurl }}/components/banner#during-maintenance) | During maintenance |
| Entire site is accessible | **We're working on the site** | We’re working on VA.gov right now. You should still be able to use the applications and tools. But if you have any trouble, please check back soon. | [Maintenance Banner]({{ site.baseurl }}/components/banner) | Warning |
| **In-app**                                |  |  | |   | 
| During downtime | **We're working on [APP name] right now** | If you have trouble using this tool, please check back after [Month, Date] at [00:00 a.m./p.m. ET]. | [Modal]({{ site.baseurl }}/components/modal) | Warning |
| Partial downtime notification | **Some online tools or services aren't working right now** | You may have trouble accessing some features on VA.gov at this time. We’re working to fix this. Please check back soon. | [Alert]({{ site.baseurl }}/components/alert#warning-alert) | Warning |
| **Sign-in page**                                |  |  | |   | 
| During downtime | **You may have trouble signing in with [DS Logon, MyHealtheVet, ID.me]** | We’re sorry. We’re working to fix some problems with our [DS Logon, MyHealtheVet,ID.me] sign in process. If you’d like to sign in to VA.gov with this account, please check back later. | [Alert]({{ site.baseurl }}/components/alert#warning-alert) | Warning | 

## Unscheduled downtime notifications

| Scenario                                 | Message title | Message content | Component | State  |
| ---------------------------------------- | ------------- | --------------- | --------- | ------ | 
| **Site-wide**                            |               |                 |           |        |
| During downtime | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year <br>**Start/End time:** 0:00 a.m. to 00:00 a.m. ET  | [Maintenance banner]({{ site.baseurl }}/components/banner#during-maintenance) | During maintenance |
| **In-app**                             |        |             |           |        |
| During downtime | **This application is down for maintenance** | We’re making some updates to this tool. We’re sorry it’s not working right now. Please check back soon. | [Modal]({{ site.baseurl }}/components/modal) | Informational |
| **Sign-in page**                             |        |             |           |        |
| During downtime | **You may have trouble signing in with [DS Logon, MyHealtheVet, ID.me]**  | We’re sorry. We’re working to fix some problems with our [DS Logon, MyHealtheVet,ID.me] sign in process. If you’d like to sign in to VA.gov with this account, please check back later. | [Alert]({{ site.baseurl }}/components/alert#warning-alert) | Warning |

## Updates to user data (system-initiated)

*Some messages written to reflect the example; other variations will be added to expanded dictionary section.*

| Scenario                                 | Message title | Message content | Actions | Component | State  | Location |
| ---------------------------------------- | ------------- | --------------- | ------- | --------- | ------ | -------- |
| Status update (e.g. claim closed)        | **Your [CLAIM TYPE] claim update** | Our records show that your claim was closed on [DATE].| N/A | [Alert]({{ site.baseurl }}/components/alert#informational-alert) | Informational | Replace affected component |
| Action required (e.g. claim evidence request) | **We need your help to finish reviewing your claim** | Please provide more evidence (supporting documents) so we can finish reviewing your claim.| See Details | [Alert]({{ site.baseurl }}/components/alert#warning-alert) | Warning | Above affected component |
| Form prefill notice | **We've started your form for you** | We've filled in some of this form based on information you gave us. Please check and update the information as needed. | N/A | [Alert]({{ site.baseurl }}/components/alert#informational-alert) | Informational | Above affected component |
| Change in application feature, neutral/positive impact (e.g. SiP now available) | **You can save your in-progress application** | Sign in to VA.gov to save your application so you can come back later to complete it. All you'll need to sign in is an email and password. | Sign in to VA.gov | [Alert]({{ site.baseurl }}/components/alert#informational-alert) | Informational | Above affected component |
