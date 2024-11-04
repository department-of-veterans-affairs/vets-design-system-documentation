---
layout: pattern
permalink: /templates/hub
title: Hub
status: use-deployed
intro-text: "Hub pages serve as a landing page for particular benefits."
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=2607-31366&t=1fh2gr46l2FEHw8n-1
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
  - anchor: Right-rail
---

## About

A hub page page does the following:
- Provides an executive summary of this hub
- Provides links to lead users to specific sections about that benefit
- Crosslink to related benefits
- Allows users to connect via social media
- Provides contact information for this benefit

## Example

![Image of va.gov housing assistance hub page]({{site.baseurl}}/images/templates/hub/housing-assistance.png)

The hub page pattern can be broken down into an ordered set of components:
![Image of va.gov housing assistance hub page]({{site.baseurl}}/images/templates/hub/housing-assistance-markup.png)

## Structure

We surface information that is important to Veterans first. The hierarchy of a hub page is as follows:

### Page title (h1)

Tells the user what's on this page, is also important semantically for html, defined in Foundation [here]({{ site.baseurl }}/foundation/typography#headings)

### Intro text

Similar to the title, Intro text is an executive summary of page content, defined in Foundation [here]({{ site.baseurl }}/foundation/typography#paragraphs). Intro text is also important for SEO.

### Jump link navigation (On this page)

Jump link nav serves two purposes: 1) It informs users what sections are on this particular page, and 2) it allows the user to jump to the section they wish to read.

### Section breaks

In order to be clear when a section begins, we use a "—★★★★★—" visual treatment documented [here]({{ site.baseurl }}/components/divider)

### Section 1 (h2)

The first section on a Hub page template contains information about how a Veteran might go about getting this benefit. Our h2s are defined in [Foundation]({{ site.baseurl }}/foundation/typography#headings)

### Section 2 (h2)

The second section on a Hub page template contains information about how a Veteran might go about managing this benefit.

### Section 3 — optional (h2)

The third section on a Hub page template contains information about how a Veteran might go about finding more information about this benefit.

### Link and teaser component

Each section contains a set of "link + teaser" components which takes the user to a particular subsection of the benefit (e.g. a page to see if they are eligible for health care, a page to apply for health care, etc). This component doesn't have a home in our design system yet.

### Cross-reference / footnote component

At the bottom of every Hub page, we list benefits that are related to, but not part of, the current benefit the user is viewing. All of these links drive users to other hub pages, so we treat this section visually different than the Link and teaser component. This content also deserves to be component-ized.

## Right rail

The right rail is the content area on the right side of the page. It is used to house additional information that is supplemental to the main content on the page. The right rail contains distinct blocks of content that can include headers, paragraphs, links, images, and accordions.

### Promo spot

In the first position within the right rail, at the top, we include a Promo spot with a visual image that complements the main content on the page. The Promo spot is informational.

### Accordion

In the second position within the right rail, we list accordions containing specific groups of content. These accordions are the lowest priority pieces of content on a hub page, and they are positioned as such—at the bottom of the page. Some examples of accordions are:

* "Ask questions" a short list of contact emails and phone numbers
* "Not a Veteran" helpful links for folks that aren't Veterans
* "Connect with us" social media links
