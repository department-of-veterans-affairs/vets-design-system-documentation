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

## Downtime notifications

| Scenario                                 | Message title | Message content | Component | State  | 
| ---------------------------------------- | ------------- | --------------- | --------- | ------ | 
| **Site-wide**                            |               |                 |           |        | 
| Advance notification for single date | **Upcoming site maintenance**  | We’ll be doing some work on VA.gov. The maintenance will last x hour. During that time, you won’t be able to sign in or use tools.<br> **Date:** Day, Date, Year <br>**Start and end time:** 0:00 a.m. to 0:00 a.m. ET | [Maintenance banner]({{ site.baseurl }}/components/banner#before-maintenance) | Before maintenance |
| Advance notification for multi-date | **Upcoming site maintenance**  | We’ll be doing some work on VA.gov. The maintenance will last x hour. During that time, you won’t be able to sign in or use tools.<br>**Start:** Day, Date, Year at 0:00 a.m. ET <br>**End:** Day, Date, Year at 0:00 a.m. ET | [Maintenance banner]({{ site.baseurl }}/components/banner#during-maintenance) | Before maintenance |
| During downtime for single date | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Date:** Day, Date, Year <br>**Start and end time:** 0:00 a.m. to 00:00 a.m. ET  | [Maintenance banner]({{ site.baseurl }}/components/banner#during-maintenance) | During maintenance| 
| During downtime for multi-date | **Site maintenance** | We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience. <br>**Start:** Day, Date, Year at 0:00 a.m. ET <br>**End:** Day, Date, Year at 0:00 a.m. ET | [Maintenance banner]({{ site.baseurl }}/components/banner#during-maintenance) | During maintenance |
| Entire site is accessible | **We're working on the site** | We’re working on VA.gov right now. You should still be able to use the applications and tools. But if you have any trouble, please check back soon. | [Maintenance Banner]({{ site.baseurl }}/components/banner) | Warning |
| **In-app**                                |  |  | |   | 
| During downtime | **We're working on [APP name] right now** | If you have trouble using this tool, check back after [Month, Date] at [00:00 a.m./p.m. ET]. | [Modal]({{ site.baseurl }}/components/modal) | Warning |
| Partial downtime notification | **Some online tools or services aren't working right now** | You may have trouble accessing some features on VA.gov at this time. We’re working to fix this. Check back soon. | [Alert]({{ site.baseurl }}/components/alert#warning-alert) | Warning |
| **Sign-in modal**                                |  |  | |   | 
