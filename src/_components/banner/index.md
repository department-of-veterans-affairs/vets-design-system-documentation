---
layout: component
title: Banner
permalink: /components/banner/
intro-text: "Banners are for announcements that typically prepare a Veteran to visit a VA facility or to help them maintain their health. Banners appear at the top of the page, below the header and navigation components."
status: use-deployed
sub-pages:
  - sub-page: Maintenance
  - sub-page: Official Gov
  - sub-page: Promo
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
web-component: va-banner
---

{% include _site-in-this-section.html %}

## Examples

### Default

{% include storybook-preview.html story="components-va-banner--default" height="172px" link_text="va-banner" %}

### Dismissible

{% include storybook-preview.html story="components-va-banner--dismissible" height="172px" link_text="va-banner" %}

## Usage

### When to use Banner

* **Emergency or very urgent communications.** On the home page, Banner is to be used exclusively for urgent communications which notify Veterans, VA employees, and the public of events that affect VA services. For example, a government shutdown affecting VA services.
* **Preparing a Veteran to visit a VA facility.** Many of the messages typically found in banners are managed by VA Facilities and help a Veteran prepare for their visit to a facility. Those messages include, but are not limited to:
  * Active threat training exercise warnings
  * Changes to availability, hours, or wait times for emergency or urgent care 
  * Construction on campus or in the area
  * COVID-19 operational updates
  * Holiday closures
  * Permanent facility closure
  * Utility outages (phone, water, etc.)
  * Wildfire, natural disasters, and inclement weather
  * Delays in filling prescriptions
* **Additional Veteran actions.** Finally there are additional messages that require an action from a Veteran that may use this component:
  * IRS deadline for benefit declarations
  * Sign up for notifications 

### When to consider something else

* **User feedback.** User feedback is provided via [feedback messages]({{ site.baseurl }}/content-style-guide/error-messages/feedback) that respond to an action a user has taken and to draw their attention to something that they need to correct or to confirm successful completion of a task. These messages are handled by the [Alert]({{ site.baseurl }}/components/alert) component.
* **In-application system status, engagement, and access messages.** All of the messages in our [messages dictionary]({{ site.baseurl }}/content-style-guide/error-messages) are handled by the [Alert]({{ site.baseurl }}/components/alert) component.
* **News, promotion, new tools, etc.** Promotional items or general news that may be relevant to a broad audience of Veterans is better placed in the [Banner - Promo]({{ site.baseurl }}/components/banner/promo) component. To ensure that customers always know they can find critical service information in this area, don’t use Banner for general press, outreach, or administrative messages.
* **System maintenance.** Before and during maintenance there are [specific system status messages]({{ site.baseurl }}/content-style-guide/error-messages/system) that we use to communicate the maintenance window to users which is handled by the [Banner - Maintenance]({{ site.baseurl }}/components/banner/maintenance) component. 
* **Helping a Veteran maintain their health.** Another category of messages are broadly related to helping Veterans manage their health. These messages should be managed with a combination of Content Management System (CMS) components as follows:
  * Call center/secure messaging promotion: Story with spotlight.
  * Flu shot general availability/promotion of flu clinic: Story with spotlight, Event for flu clinics, or a program page with a link to a spotlight area.
  * Learn about vaccinations: Program page with link from spotlight area or Story with spotlight. Note: Do not duplicate national content.
  * New phone numbers: News release, Story
  * Town Hall event announcement: Event with spotlight.

### How to use Banner

* **Don't stack banners.** Only one Banner may appear on any page at one time. If multiple emergency issues occur at once, combine the message and link out to a landing page or to individual affected medical centers, for example.
- **Info and warning only.** Banner is only available in `info` or `warning` styles.
- **Dismissible by default.** Banners should generally be dismissible by the user.
- **Links, not buttons.** Don't use buttons in Banner. [Buttons are reserved for actions whereas links are for navigation]({{ site.baseurl }}/components/link/#links-vs-buttons).

### Placement
- Content inside Banner remains aligned to the main page grid container. This might not be apparent on this site in smaller screens.
- Can be used on homepage or, in true emergencies, on lower-level pages.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **Short and informative headlines.** Try to keep headlines to 70 characters maximum, with spaces. Titles become hard to scan when they’re too long. Eliminate unnecessary details or nuance in titles, and address them with more depth in the message copy.
* **Short messages with links for greater detail.** Try to keep message copy to 300 characters maximum, with spaces. When more detail is needed, link to another page that has all of the details. Pages that can be linked to might include Operating status or News releases.

## Accessibility considerations

- Aria `role` of `banner` will be added to the child `va-alert` component to notify users that a banner is to be utilized as the `region`. 