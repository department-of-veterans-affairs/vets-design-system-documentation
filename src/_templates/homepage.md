---
layout: pattern
permalink: /templates/homepage
title: Homepage
status: use-deployed
intro-text: "The homepage serves as the main landing page for VA.gov."
figma-link: 
anchors:
  - anchor: About
  - anchor: Guidance
  - anchor: Example
  - anchor: Structure
---

## About

The VA.gov homepage provides an overview of what VA offers for our core audience—Veterans, service members, their family members, and their caregivers. The homepage provides navigation to key features and areas of the site and is a place for visitors to return to when they need to re-orient themselves. The homepage helps Veterans and other beneficiaries explore and manage their VA benefits and services, get the latest information, and sign in for a more personalized experience. 

## Guidance

### When to use

**Only used as the single homepage for www.va.gov.**
This template provides a specific design for the single, unique homepage of **www.va.gov** for all site visitors. Do not use this template as a landing page for any other sections, sub-directories, or sub-domains of VA.gov.

### When to consider something else

**For pages that are not the homepage of www.va.gov.**
No other landing page within www.va.gov or within a subdomain of va.gov should use the homepage template. This ensures the homepage is easily recognizable as the only homepage for the only homepage for the main www.va.gov experience. Re-using this template or similar design on other pages can create confusion around where a visitor is on the site. 


### Usability guidance

**Follow section-specific guidance.**
Refer to the guidance for each section on this page.

## Example

<a class="vads-c-action-link--blue" href="https://www.va.gov/">View the VA.gov homepage</a>  

![Screenshot of VA.gov homepage]({{site.baseurl}}/images/templates/homepage/homepage-sections.png) 

## Structure

All sections are required unless noted as optional, and they must appear in the order shown.

The homepage consists of:

1.	Header
2.	Page title
3.	Main promo
4.	Create account 
5.	Search tools
6.	Top pages
7.	Featured news
8.	Benefit hubs
9.	Feedback survey
10.	Email sign-up widget
11.	Footer

### 1. Header

The homepage requires the [standard header]({{site.baseurl}}/components/header/) component.

### 2. Page title

The page title/H1 ("Welcome to VA.gov" in the screenshot) is always displayed and must remain regardless of the content within the promo section.

### 3. Main promo
We use this section to communicate either an evergreen “Let us help you get started with VA’ message for Veterans and their family members or critical new information about the benefits and services available to Veterans and their family members. This section is only for a single message. To make sure we are delivering the clearest and most accessible experience possible for all Veterans and family members, we do not allow multiple or rotating messages.
This section is owned by OPIA and governed by OCTO.  
Specifications:
 - The promo heading is an H2, is required, and has a maximum of 35 characters 
 - The promo text is required and has a maximum of 125 characters
 - 1 action link is required, and the link text is a maximum of 40 characters 
 - Must link to content within the VA.gov benefit experience

### 4. Create account 
We use this section is to encourage Veterans and family members to create an account and give them quick access to that flow. 
This section is owned and governed by OCTO.
Specifications:
 - The initial sentence is an H2 and is required
 - A maximum of one button that opens the sign-in modal
 - A maximum of one link that goes to a support page 

### 5. Search tools
We use this section to give Veterans and beneficiaries quick access to top VA-built search tools that provide clear and distinct scoped searches across VA.gov information relevant to their benefit journey.

This section is owned and governed by OCTO. 
We determine placement in this section based on an identified rubric of key data points. 
Specifications:
 - Section title ("Search" in the screenshot) is an H2 and is required
 - Global site search is provided at the top with the standard [search input component]({{site.baseurl}}/components/search-input)
 - Minimum of 2, maximum of 4 links to other VA.gov search tools can be displayed below the global search

### 6. Top pages
We use this section to help Veterans and family members quickly access the most commonly used tools for managing their benefits and health care while not overwhelming them with choices.
This section is owned and governed by OCTO. 
We determine placement in this section based on an identified rubric of key data points.
Specifications:
 - Section heading ("Top pages" in screenshot) is an H2 and is required
 - A minimum of 8 and maximum of 10 links are displayed across 2 columns

### 7. Featured news
This section is used to highlight a key VA news article related to benefits and services available to Veterans and their family members. This section is for a single news article. To make sure we are delivering the clearest and most accessible experience possible for all Veterans and family members, we do not allow multiple or rotating messages.

This section is owned by OPIA and governed by OCTO. 
Specifications:
 - Section title ("VA NEWS" in the screenshot) is an H2, and cannot be changed
 - The photo is required, uses a 1:1 aspect ratio (square), must be less than 2MB, and must be a png, gif, jpg, or jpeg file type 
 - The photo only displays on large screens 
 - Article title is the primary link, is required, and has a maximum of 55 characters
 - Teaser text is required and is a maximum of 125 characters
 - "Read the full article" link is required
 - "More VA news" link is required

### 8. Benefit hubs
We use this section to give Veterans and family members quick access to each of the main VA benefit categories. This section includes a short description and link for each benefit hub, as well as a link to the department and administration site.
This section is owned and governed by OCTO.
Specifications:
 - Section title "Explore VA benefits and health care" is an H2 and is required
 - Icon is required and is the same icon used within the benefit hub
 - Benefit hub name links to the benefit hub landing page and must match the benefit hub name
 - Teaser text for each hub is required and has a maximum of 500 characters

### 9. Feedback survey
We use this section to give all visitors access to an anonymous feedback survey. This section uses the standard [feedback pattern]({{site.baseurl}}/patterns/ask-users-for/feedback). 
This section is owned and governed by OCTO.

### 10. Email sign-up 
We use this section to help Veterans and any visitor to sign up for VA emails. 
This section is owned and governed by OCTO. 
Specifications:
 - Section title "Sign up to get the latest VA updates" is an H2 and is required
 - A standard [text input component]({{site.baseurl}}/components/form/text-input) is displayed along with a "Sign up" CTA to submit their input

### 11. Footer
The homepage must use the standard [footer component]({{site.baseurl}}/components/footer/).