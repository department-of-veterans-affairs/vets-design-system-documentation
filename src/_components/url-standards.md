---
# Do NOT Edit layout
layout: default

#Page info: Edit these items below
title: URLs
anchors:
  - anchor: URL standards 
  - anchor: Vanity URLs
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
 
**Changing URLs or retiring content**
- Always implement a redirect when pages are taken down or the URL changes.
- This ensures users do not encounter a 404 page or a broken link. 
- This also tells search engines to no longer index a page, and to pass any SEO value along to the new page. 

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


### Guidelines for anchor tags (i.e. jump links) 
When using jump links, or, anchored links, in addition to all the URL standards above, please use these guidelines when possible to create clean and understandable URL strings.

- Anchor tag IDs should be treated as part of the URL and preferably follow all the same standards as URLs.
- Ideally the tag ID should be plain language keywords that help provide meaning to the content, e.g. using a primary keyword from the associated heading. This works best for anchor tags on relatively static headings such as the Hub page. 
  - Example:  This link provides a user with quick access to tasks for managing their health care benefits - https://www.va.gov/health-care/#manage-your-health-and-benefits
- If the heading is lengthy, or could potentially change over time, using an ID (i.e. the content ID from drupal) is a another option. This works well for creating anchor links to accordions that hold frequently asked questions.


### Guidelines for parameters in URLs 

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


## Vanity URLs 

A vanity URL is a short, simple, memorable and readable URL that utilizes the existing domain (va.gov) and redirects users to a specific page of the va.gov site.  
- Example: www.va.gov/vre takes users to https://www.va.gov/careers-employment/vocational-rehabilitation/ 


A “shortened URL” is a short, simple URL, but is generally made up of a randomized set of characters. VA does not currently provide a URL shortener service. We also do not recommend using external shortening services (i.e. bitly.com) as they can often be blocked and not always trusted by Veterans. 


### About vanity URLs

- The structure of a VA.gov vanity URL is the "va.gov" plus a short 1-2 keyword segment -  www.va.gov/[keyword-keyword] 
  - We do not use sub-domains for vanity urls (i.e. education.va.gov) 
  - We do not use custom top-level domains for vanity urls (i.e. www.va.apply) 
- We do not maintain the visibility of the vanity URL in a user’s browser.  Once they enter the vanity URL, they are immediately redirected to the appropriate landing page and the actual canonical URL for that page will be displayed in their browser.  

**When to use a vanity URL**
- To provide a short and memorable URL for high profile content or tool on va.gov that lives 3 or more levels deep or has a URL with 70 or more characters. 
- To provide an easy to remember and speak/type URL for a campaign landing page.

**When not to use a vanity URL:**
- For content that exists external to va.gov.
- For files or documents such as a pdf.
- For content or tools that live within the top 1-2 levels of the site already (i.e. www.va.gov/health-care). 
- For content in the Resources and Support area of the site.

### Guidance for choosing a vanity URL

- Vanity URLs must be easy to say and type, as they are often used in print, video and audio campaigns where users have to understand, remember and then enter them into their browser.
- Avoid the need to change keyboards on a device to enter the vanity URL (i.e. switching between alpha and numeric character keyboards) when possible.
- Ensure assisted tech users easily speak the URL to access it. 
- Use keywords that match the meaning and context of the landing page. 
- Vanity URL cannot create confusion or alarm when seen out of on it's own. Vanity URLs are top level URLs of VA.gov, so creating a vanity URL using sensitive or alarming keywords can create confusion if someone encounters it without the context of the campaign message.   
- Follow all URL standards when determining your vanity URL, to ensure it is unique, accurate, readable and properly formatted. 


