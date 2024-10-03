---
# Do NOT Edit layout
layout: default

#Page info: Edit these items below
title: URLs
permalink: /components/url-standards/
sub-pages:
  - sub-page: Redirects
  - sub-page: Vanity URLs
anchors:
  - anchor: URL standards
  - anchor: Changing URLs or retiring content
  - anchor: Guidelines for URLs in form flows
  - anchor: Guidelines for anchor tags
  - anchor: Guidelines for parameters in URLs
redirect_from:
  - /content-style-guide/url-standards
---

# URLs

URLs are a highly visible attribute of your content that improve user experience, accessibility, and search rankings by providing:
- The location of the content within your site 
- An indication of the priority of the content based on the depth (i.e. number of sub-directories in the URL path) of the content
- A high-level description of what the content is about
- Information about how the content is related to other content within your site.

A URL consists of a domain, sub-directories (optional), and a page name.

![The structure of a URL. Includes illustrations of URL segments including the domain, any subdirectories, and current page name]({{site.baseurl}}/images/url-segments.jpg)

{% include _site-on-this-page.html %}

## URL standards 

### URLs must be unique and distinctly different.
- Each URL must be completely unique within a domain.  Two pages with the same URL cannot exist on the same site. 
- Each URL must be specific enough to clearly differentiate each page. We cannot have multiple pages with very similar URLs. 

### URLs must adhere to formatting standards.
- All alpha characters in URLs must be lowercase. 
- All individual words must be separated by hyphens.  Do not use underscores or other characters as separators. 
- URLs cannot include spaces.
- URLs cannot include special characters (excluding the hyphen to separate words).
- URLs cannot be longer than 2000 characters or it may not be rendered correctly by all browsers. 

### URLs must be structurally accurate.
- URLs must accurately represent the placement and hierarchy of the content/page. 
  - The hierarchy and structure represented in the URL help users and search engines understand the location and relationship between content on the site. 
- URLs should not include invalid or empty sub-directories (i.e. a directory that doesn’t contain any pages). 
  - Advanced users often use the URL as a means of navigation.  They often “hack a URL” by truncating it back to a sub-directory in order to get to broader content. 
  - If an empty sub-directory is absolutely necessary (i.e. for future planning), ensure the empty directory redirects users to a proper location so users do not get a 404.

### URLs must be readable, utilize plain language and include appropriate and consistent keywords.
- Users (and search engines) must be able to easily “read” the URL and gain an understanding of its content and purpose..
- URL keywords should be selected from the primary keywords used in the H1 of the page and accurately represent the content of the page. 
  - If the content does not include information on eligibility, do not use the word “eligibility” in the URL.  This can be misleading to users and search engines. 
  - Primary keywords representing the content should be consistently used across headings, links, URLs and navigation components. 
- URLs must adhere to the same content styleguide and plain language standards as the content of the page.
- URLs cannot have incorrect spelling or grammatical errors.  

### URLs must be clear, specific, and concise.
- Do not use overly broad terms that may be misinterpreted, or shorten URLs so much that meaning and context are lost.  Be specific in describing the focus of the page.
- Do not repeat keywords across multiple segments of a URL unless it is necessary to clarify meaning of the content. 
- Do not include stop words - such as “a”, “the”, “and” - unless they are necessary to clarify meaning of the content.  

## Changing URLs or retiring content
- Always implement a [redirect](/components/url-standards/redirects) when pages are taken down or the URL changes.
- This ensures users do not encounter a 404 page or a broken link. 
- This also tells search engines to no longer index a page, and to pass any SEO value along to the new page. 

## Guidelines for URLs in form flows

These are the guidelines for the individual pages within a form flow or other sequential flow.  

URL slugs used in form flows must follow all core URL standards in this guidance document.

### Links to your form should point to the core URL of your form, not a specific page.
When linking to your form from another page, a navigation component, or external communication, always link to the core URL and not to a specific page. 

This will reduce the risk of breaking links if specific pages in your form flow are changed, reorganized, or removed.

Example:
- Incorrect link: www.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction
- Correct link: www.va.gov/health-care/apply-for-health-care-form-10-10ez/

### Utilize standard URL slugs for core form pages.
The following form flow pages have been standardized in the forms system:
- `/introduction/`: typically the first page of the form flow
- `/review-and-submit/`: step that allows the user to review their entered information prior to submitting
- `/confirmation/`: final page of a form flow displayed after form submission

### Avoid using sub-directories, child pages, or nested pages in your flow.
Form flows are linear and should have a flat, sequential structure - in other words, all pages in a form flow live at the same level in the hierarchy.
- Incorrect:  `form-url/page1/page2/page3/`
- Correct: `form-url/page1/`, `form-url/page2/`, `form-url/page3/`, etc.

An exception to this would be if there is a clear fork in your form flow for different scenarios that would be ideal to track separately. For example, if one form is for Veterans and family members, but each audience has slightly different form flows, the structure would be:
- `/form-url/veteran/page1/`
- `/form-url/family/page1/`

### Use logical numbering when collecting multiple responses to a single question.

For questions in a form that allow users to enter multiple responses - also known as a list and loop - numbering of those responses should start at 1 and increment upwards.

The numbering can be embedded in the URL slug or be appended to the URL as a parameter.

Embedded URL example:
- `/form-url/dependent-1/`
- `/form-url/dependent-2/`

Parameter example
- `/form-url/dependent/?name=1`
- `/form-url/dependent/?name=2`

If using parameters, see the [standards for URL parameters](#guidelines-for-parameters-in-urls).

### Avoid incorporating chapter names in the URL structure.
For forms using chapter labels, incorporating those labels into each page slug can make it more challenging if chapters are renamed or reorganized.

An alternative is to use a similar initial term for pages that are directly related.

### For related steps in a flow, consider using the same initial term.
Using the same initial term in a URL slug can help to identify related pages in analytics.

Examples:
- Collecting more information on entries from a list and loop pattern
  - `/dependent-1-contact` 
  - `/dependent-1-address` 
  - `/dependent-2-contact` 
  - `/dependent-2-address` 
- A question where the response results in a follow-up question
  - `/form-url/home-ownership/`
  - `/form-url/home-value/`
- A series of questions all related to the same topic 
  - `/form-url/military-branch/`
  - `/form-url/military-service-period/`
  - `/form-url/military-other-names/`

## Guidelines for anchor tags 
When using anchored links or "jump links", in addition to all the URL standards above, please use these guidelines when possible to create clean and understandable URL strings.

- Anchor tag IDs should be treated as part of the URL and preferably follow all the same standards as URLs.
- Ideally the tag ID should be plain language keywords that help provide meaning to the content, e.g. using a primary keyword from the associated heading. This works best for anchor tags on relatively static headings such as the Hub page. 
  - Example:  This link provides a user with quick access to tasks for managing their health care benefits - `www.va.gov/health-care/#manage-your-health-and-benefits`
- If the heading is lengthy, or could potentially change over time, using an ID (i.e. the content ID from drupal) is a another option. This works well for creating anchor links to accordions that hold frequently asked questions.

## Guidelines for parameters in URLs 

URL parameters - also known as query strings - are values added to the end of a URL that filter or organize the information on a page. Parameters are used for a number of reasons - most commonly for pagination, anchoring, filtering or sorting data, indicating language, or searching.

An example of a query string and parameter values in use on VA.gov is on our existing search functionality. The `?` indicates the beginning of the query string, followed by one or more parameters (i.e. `page=1`). Each parameter includes a key and a value, and multiple parameters are separated by an ampersand.

    https://www.va.gov/search/?page=1&query=disability+compensation&t=true

Like the core URL, parameters must also be readable and understandable to the user, so they know what information is being used to display the content of the page, and do not make the URL look untrustworthy. Parameters also impact SEO because they create unique URLs, so care must be taken to ensure they do not dilute the SEO value of the static, or, canonical version of the page.

When adding parameters to your URL, in addition to all the URL standards above, please follow the guidelines below.

- Do not use any PII in parameter values, or any other data that should not be logged or tracked. This includes everything from names and contact information to unique identifiers used that an be used to identify a specific person such as IP address, ICN, or EDIPI.
- Set the static, or main, URL as the canonical page using the `rel=canonical` attribute when the parameter-based URL is similar content to the canonical content. An example is when using parameters for sorting. The data returned is the same, but is in a different order, therefore include the `rel=canonical` attribute to tell search engines that the resorted page is the same as the original page.
- Parameter keys should be no more than 1 word for a label and must clearly define what the parameter is. Do not use generic terms such as “parm” or “key”.
- Do not expose empty or null value parameters in the URL.
- For multi-select type values, combine the values into a single parameter rather than exposing the key multiple times in a URL multiple times (i.e. `color=blue,red,white` vs `color=blue&color=red&color=white`).
- Avoid linking to URLs with parameters. Link to the static or canonical URL when possible.
- If multiple parameters are used in a query string, set a priority and list them in a consistent order.
