---
layout: default
title: Vanity URLs
permalink: /components/url-standards/vanity-urls
has-parent: /components/url-standards/
anchors:
  - anchor: About vanity URLs
  - anchor: Usage
  - anchor: Vanity URL requests and implementation process 
---

# Vanity URLs

A vanity URL is a short, simple, memorable, and readable URL that utilizes the existing domain (va.gov) and redirects users to a specific page of the VA.gov site.
- Example: `www.va.gov/trust` takes users to `https://www.va.gov/initiatives/veteran-trust-in-va/

A "shortened URL" is also a short URL, but is generally made up of a randomized set of characters. VA does not currently provide a URL-shortener service. We do not recommend using external URL-shortener services (i.e. bitly.com or tinyurl.com) as they are often blocked and not always trusted.

{% include _site-on-this-page.html %}

## About vanity URLs

- Vanity URLs at VA always begin with "www.va.gov" 
  - We do not use or create sub-domains for vanity urls (i.e. `education.va.gov`)
  - We do not use or create custom top-level domains for vanity urls (i.e. `www.va.apply`)
- The "vanity" segment of the URL should be short, easy to type, and easy to remember, and should follow the general URL standards in formatting
- We do not maintain the visibility of the vanity URL in a user's browser. Once they enter the vanity URL, they are immediately redirected to the appropriate landing page and the actual canonical URL for that page will be displayed in their browser.

## Usage

### When to use a vanity URL

- To provide a short and memorable URL for campaigns that meet the following criteria:
  - Campaign is for Veterans or their family members and caregivers
  - AND has a national level focus (not just for a local facility or single area)
  - AND has a campaign landing page that the vanity URL will point to

### When not to use a vanity URL

- For content that exists external to VA.gov
- For files or documents such as a pdf
- For general benefit content or tools (i.e. www.va.gov/health-care).
- For content in Resources and support
- To "claim" a URL that doesn't have content 

### Guidance for choosing a vanity URL

- Vanity URLs must be easy to say and type because they are often used in print, video and audio campaigns where users have to understand, remember, and sometimes manually enter them into their browser.
- Consider how well assistive technology can read and speak the URL. 
- Use keywords that match the meaning and context of the landing page and ensure the meaning is upheld when shortening titles to just a few keywords. For example, shortening a campaign called "Eligibility for disability compensation" to just `www.va.gov/eligibility` results in an overly broad URL that can be misunderstood outside of the campaign messaging. 
- A vanity URL should not include sensitive or alarming keywords that could create confusion when seen out of context on it’s own (i.e. `www.va.gov/evacuation`).  
- Follow all general URL standards to ensure it is unique, accurate, readable and properly formatted.

## Vanity URL requests and implementation process
Vanity URL requests must be submitted to VA.gov Information Architecture for validation, approval, and implementation.

<a class="vads-c-action-link--blue" href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md">Submit a vanity URL request on GitHub</a>