---
layout: pattern
permalink: /templates/hub
title: Hub
status: use-deployed
intro-text: "Hub pages serve as a landing page for particular benefits."
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=2607-31366&t=1fh2gr46l2FEHw8n-1
anchors:
  - anchor: About
  - anchor: Guidance
  - anchor: Example
  - anchor: Structure
---

## About

A hub page provides an overview of what is included in the section, links to the top content pages in the section, crosslinks to related resources, and contact information. 

## Guidance

### When to use

**Provide a landing page for a benefit or service category.**
Use a hub page as a parent page to a section of the site to provide an overview and navigation to the content and tools for the benefits or services offered within that section.

**Provide a landing page that includes all VA benefits available for a single core audience.**
Use a hub page to provide a list of all the benefits available for one of the 3 core audiences VA serves: Veterans, transitioning service members, and family members of Veterans. 

### When to consider something else

**A landing page for a campaign.**
Don't use a hub template to create a landing page to support a campaign.  Consider using a Campaign Landing Page for that purpose.

**A landing page for a custom mix of benefits and services.**
Don't use a hub template to create a landing page for a custom grouping of select benefits or services, for purposes such as a health condition or a small audience segment.  Consider using a Campaign Landing Page or a Resources and support page.

### Usability guidance

**Don't link to every child page in the hub.**
Don't overload visitors by presenting everything available.  Highlight the most important content and features within the hub/section and allow the visitor to drill down to explore more.

**Don't create content just to fill the template.**
Creating unnecessary content only creates an additional burden on visitors to sift through what's important. If you don't have enough content to fill the required sections, this template may not be the right one for your project. 

**Don't add sections to the template.**
This template is designed to be a simple landing page that maximizes focus on the core tasks—applying, using, managing, and tracking—for a benefit or service category.  Adding unnecessary sections or elements can create additional noise and distract from the core tasks.

**Follow section-specific guidance.**
Refer to the guidance below for the individual sections in the structure.


## Example

<a class="vads-c-action-link--blue" href="https://www.va.gov/disability/">View example: VA.gov Disability hub</a>  

![Screenshot of VA.gov disability benefits hub page]({{site.baseurl}}/images/templates/hub/benefit-hub-outline-desktop.png) 

## Structure

The hub page pattern can be broken down into an ordered set of components. 

All sections are required unless specifically noted below as optional. All sections are required to appear in the hierarchical order and placement shown.

The hub page consists of:

- [Intro section](#intro-section)
  - [Hub icon and page title (1)](#1-hub-icon-and-page-title)
  - [Intro text and On this page (2)](#2-intro-text)
  - [Critical alert (optional)](#critical-alert-optional)
- [Spokes](#spokes)
  - [Divider (3)](#3-divider)
  - ['Get benefits' spoke (4)](#4-get-benefits-spoke)
  - ['Manage benefits' spoke (5)](#5-manage-benefits-spoke) 
  - ['More resources' spoke (6)](#6-more-resources-spoke)
  - [Related benefits (7)](#7-related-benefits)
- [Right rail](#right-rail)
  - [Promo spot (8)](#8-promo-spot)
  - [Ask questions accordion (9)](#9-ask-questions-accordion)
  - [Not a Veteran accordion (optional)](#not-a-veteran-accordion--optional)
  - [Connect with us accordion (10)](#10-connect-with-us-accordion)

### Intro section

![Introduction section of mobile view of VA.gov disability benefits hub page]({{site.baseurl}}/images/templates/hub/benefit-hub-intro.png)


#### 1. Hub icon and page title

##### Icon
Each benefit or service hub is assigned a specific icon.  This icon is utilized on the hub page, the top/primary navigation, and on the home page of VA.gov.  The icon assigned to a benefit or service hub, should be consistently used.

For new benefit or service hubs, do not use an icon already in use.  

Refer to approved [icons for benefit hubs]({{site.baseurl}}/foundation/icons#hub). 

##### Page title

The page title is the name of the benefit category or service category. 

Refer to guidance on [page titles and section titles]({{site.baseurl}}/content-style-guide/page-titles-and-section-titles).

#### 2. Intro text
This paragraph gives the user a high-level understanding of the benefit category and provides SEO-rich content.

#### On this page
Refer to guidance for the ['On this page' component]({{site.baseurl}}/components/on-this-page).

#### Critical alert (optional)
This is an optional alert intended to provide critical information related to the benefit hub.
- There are only 2 alerts available for this placement - Help for visitors experiencing homelessness or help with mental health care
- Only 1 alert can be added to a hub page

Over-using these alerts can result in "banner blindness" where users unconsciously ignore banner-like or commonly repeated information.  Only include an alert if it is critical to the benefit hub. The alerts should never be on all benefit hubs, ideally, they would only be on 2 or 3 hubs at most. 

This element uses a combination of a standard alert and an expandable alert, which is not approved for use outside of this use case.  

Refer to guidance for the [Alert component]({{site.baseurl}}/components/alert) or the [Alert-Expandable component]({{site.baseurl}}/components/alert/alert-expandable). 

### Spokes

![Spokes section of mobile view of VA.gov disability benefits hub page]({{site.baseurl}}/images/templates/hub/benefit-hub-spokes.png)

Each hub is broken into sections referred to as "spokes".  All content within a hub is then categorized into one of the spokes. These spokes are required in the side navigation of a hub but are not part of a page's URL or breadcrumb.  A hub must have at least one spoke, and no more than 3 spokes. 

#### Standard spokes 
Hubs that feature a single benefit or service category use a set of standard spokes.  Examples of this are health care, disability, or decision reviews. Labels for each of these spokes on the hub page are tailored to the appropriate terminology of that hub (i.e. "Get health care and benefits" in health care vs "Request a decision review" in decision reviews).
- Get benefits - content that supports applying or filing for a benefit or service
- Manage benefits - content related to using, tracking, or, managing a benefit or service
- More resources - helpful, related content or tools such as benefit rates, discovery tools, and resources and support pages

#### Exceptions
All uses of this template should follow the standard spokes, but there are some instances where the content within the hub doesn't work with that structure. 

##### Multi-benefit hubs
- Hubs that feature multiple benefit or service groups may require different spokes since the visitor may be able to get or manage multiple types of benefits.  
- In these cases, choose a categorical grouping that meets the needs of that hub.  
- Examples:
  - The [family member benefit hub](https://www.va.gov/family-and-caregiver-benefits/) only utilizes a single "Get benefits" spoke that includes links to each benefit category (health, disability, education, etc.).
  - The 3 spokes in the [service member hub](https://www.va.gov/service-member-benefits/) are based on pre-transition, during-transition and after-transition assistance in order to emphasize the time-sensitive nature of some of the benefits.  

##### Benefit hubs with minimal content
- Hubs that have very little content to fill one of the standard spokes, may eliminate that spoke or replace it with something more meaningful to the category. 
- Examples:
  -	Burials and memorials - This hub does not have benefits that you track and manage, so a spoke for content related to planning a burial replaces the standard manage spoke.

#### 3. Divider
A divider is used before and after each spoke. 

Refer to guidance for a [divider]({{site.baseurl}}/components/divider).

#### 4. 'Get benefits' spoke  
This section contains only information related to what is required or how to get the benefits included in the hub. 
- Spoke title: The title includes the word "Get" and the benefit category name. 
- The spoke should include no more than 10 links.
- Each item in the spoke should include a link label and teaser text.
  - The label should generally match the H1 of the destination page but may have additional words to be more descriptive if needed.  
- Only include links to content and tools that live within the same hub.
  - The only exception to this is a link to family member or caregiver benefits.
- Link order should follow this general pattern:
  - Links related to the primary benefit of the hub (include pages as available)
    -	About the primary benefit
    - Eligibility for the primary benefit
    -	How to apply for the primary benefit
    - Apply online for the primary benefit
  - A single link for each secondary benefit within the hub (may be more than 1)
  - A single link for family or caregiver benefits (this will link to the family member hub)

#### 5. 'Manage benefits' Spoke  
This section contains only information related to helping visitors use, track, or manage a benefit they have already applied for.
- Spoke title: The title includes the words "Manage your" and the benefit category name. 
- The spoke should include no more than 10 links.
  - Priority should be given to content or tools most frequently used.
- Each item in the spoke should include a link label and teaser text.
  - The label should directionally match the H1 of the destination page but may have additional words to be more descriptive if needed.  
- Links in this section may lead to content or tools outside of this hub.
- Link order is determined by frequency of use within this hub.

#### 6. 'More resources' Spoke  
This section contains links to other content pages or tools related to the benefit. 
- Spoke title: The title is "More information and resources" in all hubs 
- The spoke should include no more than 10 links.
  - Priority should be given to content or tools most frequently used or referenced.
  - This section should contain links to benefit rates, helpful tools and Resources and support pages related to the benefit hub.
- Each item in the spoke should include a link label and teaser text.
  - The label should directionally match the H1 of the destination page but may have additional words to be more descriptive if needed.  
- Link order should follow this general direction:
  - Benefit rates page 
  - Tools that help users understand or evaluate the benefit, such as calculators, benefit specific search tools, or eligibility checkers
  - All other links should be ordered by page views 

#### 7. Related Benefits 
This section helps veterans find other VA benefits that don't live within this benefit hub. 
- Section title - "Other VA benefits and services"
- This section should contain no more than 5 links.
- Only include links to benefits that live outside of the current benefit hub.
- Link order is based on overall page views.

### Right rail

![Right rail/bottom section of mobile view of VA.gov disability benefits hub page]({{site.baseurl}}/images/templates/hub/benefit-hub-right-rail.png)

The right rail is the content area on the right side of the desktop view of the page. On mobile, the elements within the right rail are displayed at the bottom of the page before the footer.  It includes information related to the administration that provides the benefits and services within the hub. 

#### 8. Promo spot 
The promo spot provides a space for business lines to highlight key information, or a specific service directly related to the benefit hub.
- The image, link, and supporting text is displayed in both the hub placement as well as in the top nav fly-out (desktop view only) for each benefit hub. 
- The link label should directionally match the H1 of the destination page. 
- Only content or services for Veterans or family members should be featured. 

#### 9. 'Ask questions' accordion 
- Provides key contact info for veterans and family members to get assistance with the hub's benefits or services.

#### 'Not a Veteran?' accordion  (optional)
- Provides a space to place key links for visitors that are not Veterans or family members. 
- Maximum of 3 links.
- The link label should directionally match the H1 of the destination page and include reference to the appropriate audience it serves.

#### 10. Connect with us accordion 
- Provides links to social media accounts, an email subscription option (if applicable), and the website for the administration or VA's central office. 