---
layout: pattern
title: Sitewide maintenance banners
status: use-with-caution-candidate
intro-text: "Sitewide maintenance banners are used when we need to let Veterans know about system maintenance affecting the availability of applications and services on VA.gov."
draft: true
anchors:
  - anchor: When we use them
  - anchor: Guidance
---

## When we use them 

Sitewide maintenance banners combine the full-width banner alert component with standardized messaging text. It’s used when all (or most) unauthenticated and authenticated applications, tools, or sign in experiences across the entire site are affected (e.g., vets-api).

1. Before the site maintenance
2. During the site maintenance

### Upcoming site maintenance banner: Before downtime
The ‘before downtime’ banner helps users know when the downtime will take place, so they can plan accordingly. 

There are 2 versions of the upcoming message: one for typical downtimes, and another for when a downtime spans multiple days or is 24 hours or longer in duration. Refer to [scheduled downtime notifications messaging]({{ site.baseurl }}/content-style-guide/error-messages/system#scheduled-downtime-notifications) in the error messaging dictionary for the multi-day/24 hours+ downtime text.

Information in {brackets} show customizable details.

#### Upcoming site maintenance 

We’ll be doing some work on VA.gov. The maintenance will last {x hour}. During that time, you won’t be able to sign in or use tools. 

**Date:** {Day, Date, Year}

**Start/End time:** {0:00 a.m./p.m. to 0:00 a.m./p.m. ET}

[View the Before Maintenance React component on storybook]({{ site.baseurl }}/storybook/?path=/docs/components-banners-maintenancebanner--before-maintenance)

### During site maintenance banner: During downtime

The ‘during downtime’ banner lets users know that services and tools are affected. It helps them know when the downtime will be completed and tools and services will be available normally again.

Information in {brackets} show customizable details. 

#### Site maintenance

We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we’re finished. Thank you for your patience. 

**Date:** {Day, Date, Year} 

**Start/End time:** {0:00 a.m./p.m. to 00:00 a.m./p.m. ET}

[View the During Maintenance React component on storybook]({{ site.baseurl }}/storybook/?path=/docs/components-banners-maintenancebanner--during-maintenance)

## Guidance

The content and UX behavior of sitewide maintenance banners are standardized. Only the duration, dates, and times are customizable. 

The Public Website Team (Office of the CTO Digital Experience) publishes downtime maintenance banners.

- Specify custom dates and times. 
- Specify custom duration (how many hours or minutes) in the upcoming/before message. 
- Times are always given in ET.
- Sitewide maintenance banners are always dismissible per session.
- The ‘upcoming’ before message should be published at least 12 hours in advance. (Can be more in     advance when the outage is unusually long or comprehensive.)
- Banner expires and automatically removed when downtime is complete.
- A maximum of 3 banners are allowed simultaneously. 

**When there are multiple banners simultaneously on a page,** the FE logic will prioritize the display order of banners like this: 

1. Emergency homepage banner

2. Sitewide maintenance banner

3. Any other Veteran-action required banner
