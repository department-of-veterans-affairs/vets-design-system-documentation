---
layout: component
title: Banner - Maintenance
permalink: /components/banner/maintenance
has-parent: /components/banner/
github-title: va-banner-maintenance
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=1173%3A4614&mode=design&t=vNilCSI60pQBiKkM-1
intro-text: "Banners specifically for site-wide system messages, typically system maintenance, which are fixed to the top of the viewport."
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
---

## Examples

### Default (during maintenance)

{% include storybook-preview.html story="components-va-maintenance-banner--default" link_text="va-maintenance-banner" height="225px" %}

### Warning (upcoming maintenance)

{% include storybook-preview.html story="components-va-maintenance-banner--maintenance-warning" link_text="va-maintenance-banner maintenance warning" height="225px" %}

## Usage

### When to use Banner - Maintenance

* **System maintenance.** Before and during maintenance there are [specific system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) that we use to communicate the maintenance window to users. Maintenance messages are used when all (or most) unauthenticated and authenticated applications, tools, or sign in experiences across the entire site are affected (e.g., vets-api).

### When to consider something else

* **Anything that is not a System status message.** This component is ONLY for site-wide [system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system). There is no other appropriate use. For application-level maintenance, review the [downtime notifications guidance](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications).

## Behavior

The content and UX behavior of site-wide maintenance banners are standardized. Only the duration, dates, and times are customizable.

The Public Website Team (Office of the CTO Digital Experience) publishes downtime maintenance banners.

* Specify custom dates and times.
* Specify custom duration (how many hours or minutes) in the upcoming/before message.
* Times are always given in ET.
* Site-wide maintenance banners are always dismissible per session.
* The ‘upcoming’ before message should be published at least 12 hours in advance. (Can be more in advance when the outage is unusually long or comprehensive.)
* Banner expires and automatically removed when downtime is complete.
* A maximum of 3 banners are allowed simultaneously.