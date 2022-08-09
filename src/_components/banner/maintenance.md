---
layout: component
title: Banner - Maintenance
permalink: /components/banner/maintenance
has-parent: /components/banner/
github-title: va-banner-maintenance
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

* **System maintenance.** Before and during maintenance there are [specific system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) that we use to communicate the maintenance window to users. 

### When to consider something else

* **Anything that is not a System status message.** This component is ONLY for site-wide [system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system). There is no other appropriate use.

### How to use MaintenanceBanner

- Add a headline, type, and visible prop to have the component display on the page.
- If the banner should not be visible, have a button to be dismissible, or be dismissed to sessionStorage instead of localStorage additional props can be added to accommodate.
