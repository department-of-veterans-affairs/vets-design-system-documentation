---
layout: component
title: Banner - Maintenance
permalink: /components/banner/maintenance
has-parent: /components/banner/
github-title: va-banner-maintenance
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/960E1D9A-BF6D-40AB-82E4-DC335D00990C/canvas
status: use-deployed
intro-text: "Banners specifically for site-wide system messages, typically system maintenance, which are fixed to the top of the viewport."
anchors:
  - anchor: Examples
  - anchor: Usage
---

## Examples

### Before maintenance

{% include storybook-preview.html story="components-banners-maintenancebanner--before-maintenance" height="214px" link_text="MaintenanceBanner" %}

### During maintenance

{% include storybook-preview.html story="components-banners-maintenancebanner--during-maintenance" height="214px" link_text="MaintenanceBanner" %}

## Usage

### When to use MaintenanceBanner

* **System maintenance.** Before and during maintenance there are [specific system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) that we use to communicate the maintenance window to users. Maintenance messages are used when all (or most) unauthenticated and authenticated applications, tools, or sign in experiences across the entire site are affected (e.g., vets-api).

### When to consider something else

* **Anything that is not a System status message.** This component is ONLY for site-wide [system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system). There is no other appropriate use.

### Behavior

The content and UX behavior of sitewide maintenance banners are standardized. Only the duration, dates, and times are customizable. 

The Public Website Team (Office of the CTO Digital Experience) publishes downtime maintenance banners.

- Specify custom dates and times. 
- Specify custom duration (how many hours or minutes) in the upcoming/before message. 
- Times are always given in ET.
- Sitewide maintenance banners are always dismissible per session.
- The ‘upcoming’ before message should be published at least 12 hours in advance. (Can be more in advance when the outage is unusually long or comprehensive.)
- Banner expires and automatically removed when downtime is complete.
- A maximum of 3 banners are allowed simultaneously. 

<!--
#### When there are multiple banners simultaneously on a page 

The front-end logic will prioritize the display order of banners like this: 

1. Emergency homepage banner
2. Site-wide maintenance banner
3. Any other Veteran-action required banner
-->