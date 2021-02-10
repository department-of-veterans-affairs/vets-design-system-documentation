---
layout: default
draft: true
title: Sitewide banners
anchors:
  - anchor: Scheduled sitewide maintenance banners
 
---

# Sitewide banners
<div class="va-introtext" markdown="1">
Sitewide banners are only used when VA needs to communicate an emergency or system maintenance affecting the availablility of applications. This pattern is preset and cannot be modified, except to provide emergency instructions or the timing of system maintenance. 
</div>

## Scheduled sitewide maintenence banners
Scheduled sitewide maintenence banners are a combination of alert components and messaging used when all (or most) unauthenticated and authenticated applications, tools, or sign in experiences across the entire site are affected (e.g. vets-api). The Office of the CTO Digital Experience Team and is responsible for enabling publishing downtime maintenance banners.

### When we use sitewide maintenance banners
Use sitewide maintenance banners when VA.gov has to undergo scheduled maintenance, or when a service or API that VA.gov utilizes to fetch data is unavailable for a scheduled period of time. 
- We should tell users the duration the service will be unavailable beforehand, if this information is known.
- We need to alert users the service is unavailable while it's down

### Here’s how users should encounter maintenance banners
1. Before a service is down, alert users there will be an outage using the [Before Maintenence banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--before-maintenance). We recommend at least 5 business days advance notice.
2. While the service is down, alert users that services or tools are currently and temporarily unavailable using the [During Maintenence banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance)
3. After the maintenance is complete, the banner is removed.

### Before maintenence banner

Use the [Before Maintenence banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--before-maintenance) for communicating system downtimes that affect many to all services or tools sitewide across VA.gov before it happens. This helps users know when a tool or application will be available and plan accordingly. 

**Text for the Before maintenance banner** 

> **Upcoming site maintenance**
> We’ll be doing some work on VA.gov. The maintenance will last x hour. During that time, you won’t be able to sign in or use tools.
> **Date:** Day, Date, Year
> **Start/End time:** 0:00 a.m. to 0:00 a.m. ET

- Always specify time and date. Refer to [scheduled downtime notifications messaging](https://design.va.gov/patterns/messaging-dictionary#scheduled-downtime-notifications) in the content style guide.
- Maintenance banners are always dismissable
- Besides the date and time, text is not customizable

[View the Before Maintenance React component on storybook](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--before-maintenance)

### During maintenence banner

Use the [During Maintenence banner](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance) for communicating system downtimes that affect all services or tools sitewide across VA.gov. This helps users know when a tool or application will be available. 

**Text for the Before maintenance banner will always be**

> Site maintenance**
> We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we’re finished. Thank you for your patience.
> **Date:** Day, Date, Year
> **Start/End time:** 0:00 a.m. to 00:00 a.m. ET

- Always specify time and date. Refer to [scheduled downtime notifications messaging](https://design.va.gov/patterns/messaging-dictionary#scheduled-downtime-notifications) in the content style guide.
- Maintenance banners are always dismissable
- Besides the date and time, text is not customizable

[View the During Maintenance React component on storybook](https://design.va.gov/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance)
