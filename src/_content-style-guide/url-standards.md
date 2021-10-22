---
# Do NOT Edit layout
layout: default

#Page info: Edit these items below
title: [URLs]
anchors:
  - anchor: SEO considerations
  - anchor: URL standards 
  - anchor: Vanity and shortened URLs
draft: true
---

# URLs

URLs are a highly visible attribute of your content that impacts user experience, accessibility, and search rankings.  The URL of a page specifies the page's name and location within VA.gov. 

- URLs consists of a domain, sub-directories (optional), and a page name.  
- A good URL helps users AND search engines by providing: 
  - A high-level description of what the content is about
  - The location of the content within your site 
  - An indication of the priority of the content based on the depth (i.e. number of sub-directories in the URL path) of the content
  - Information about how the content is related to other content within your site.

![The structure of a URL]({{site.baseurl}}/images/url-segments.jpg)


## SEO considerations
- URLs can impact search rankings and help support other metadata driving search rankings. 
- The URL structure provides search engines (and users) context and meaning, as well as information on the priority and relationship between content on your site.
  - Content placed higher in a hierarchy (e.g. a root level page) is seen as more important than another similar deeper page. 
  - Each segment of a URL provides information about that page in order of importance based on the hierarchy. 
- The ability for users to read and understand your URL increases the likelihood of the link being clicked, which positively impacts search rankings. 
- Keywords in URLs have some impact. However, the value of a keyword in a URL diminishes the further down the URL it appears in. In other words, it will have less value in the fourth segment than in the second segment of the URL.  Strive for shorter URLs that feature only useful keywords. 
- Search engines often truncate URLs that are longer than 72 characters when displaying the URL in search results. 
- Be sure to redirect old URLs if the content is archived or the URL changes.  
  - This ensures there are no broken links and that users can still get to your site. 
  - A permanent redirect (i.e. 301) also ensures that all SEO value is passed along to the new page. 


## URL Standards 

**URLs must be unique and distinctly different.**
- Two pages with the same URL cannot exist on the same site. 
- We should not have two pages with very similar URLs. Each URL should be specific enough to clearly differentiate each page.
  - Example: www.va.gov/health-care/  and www.va.gov/healthcare/ are too similar. In this case, the URLs for both pages should be reviewed to determine what makes them unique and how the URL, along with the H1 and meta data, can help articulate the difference so users and search engines better understand what to expect. 

**URLs must adhere to formatting standards.**
- All alpha characters in URLs must be lowercase 
- All individual words should be separated by hyphens.  Do not use underscores or other characters as separators. 
- URLs cannot include spaces
- URLs cannot include special character (excluding the hyphen to separate words)
- URLs for online forms should include the VA form number in the URL. 
  - Many VA form numbers are widely known and have high search value. 
  - Example: www.va.gov/health-care/apply-for-health-care-form-10-10-ez 
- URLs cannot be longer than 2083 characters or it may not be rendered correctly by all browsers. 

**URLs must be accurate.**
- URLs must accurately represent the content of the page
  - If the content does not include information on eligibility, do not use the word “eligibility” in the URL.  This can be misleading to users and search engines. 
- URLs must accurately represent the placement and hierarchy of the content. 
  - The hierarchy and structure represented in the URL help users and search engines understand the relationship between content on the site. 
  - Example: If the content is a child of the /health-care page, then it’s URL must be www.va.gov/health-care/[child-page-name], not www.va.gov/[child-page-name].
  - Example: If the content is determined to be a health care page, the URL should not be www.va.gov/disability/[page-name].
- The segments of a URL cannot change as a user navigates to child pages.
  - Example:  If the URL of the parent page is www.va.gov/health-care, the URL of the child page cannot be www.va.gov/healthcare/[page-name] 
- URLs should not include empty sub-directories - i.e. a directory that doesn’t contain any pages.
  - Advanced users often use the URL as a means of navigation.  They often “hack a URL” by truncating it back to a sub-directory in order to get to broader content. 
  - If an empty sub-directory is necessary (for future planning for example), ensure the empty directory redirects users to a proper location so users do not get a 404.
-URLs cannot have incorrect spelling or grammar.  

**URLs must be readable, utilize plain language and include appropriate and consistent keywords.**
- Users (and search engines) must be able to easily “read” the URL and gain an understanding of its content and purpose
- URL keywords should be selected from the primary keywords used in the H1 of the page
  - Primary keywords representing the content should be consistently used across headings, links, URLs and navigation components. 
- URLs must adhere to the same content and plain language standards as the content of the page.
  - Example: Health care is two words in our standards, and should be represented as  “health-care” in a URL. 


**URLs must be clear, specific, and concise.** 
- Do not use overly broad terms that may be misinterpreted - be specific in describing the focus of the page.
  - URLs should not be shortened so much that meaning and context are lost.
  - Example: A URL such as www.va.gov/dependents uses a very broad label.  Users and search engines may see this and interpret it as a broad content page for dependents of Veterans.  Using this URL for a specific type of dependent content, could result in a frustrating experience.  It also removes that URL as an option for broader dependent content.  A better URL for a task-based feature such may be something like www.va.gov/verify-your-dependents/.
- Do not repeat keywords across multiple segments of a URL unless it is necessary to clarify meaning of the content. 
  - If a keyword is used in an earlier segment, its likely not needed in the URL again. 
  - Example:  This URL -  www.va.gov/health-care/health-care-eligibility - does not need to repeat “health-care” in the final segment, because the page is already in the health care sub-directory, so the extra words do not provide any value and only add length and repetition.  
- Do not include stop words - such as “a”, “the”, “and” - unless they are necessary to clarify meaning of the content.  
  - Example: These two URLs are similar but may be perceived differently based on the use of the word “and”: `www.va.gov/survivor-dependent-benefits/` versus `www.va.gov/survivor-and-dependent-benefits/`
  - Is the content about dependents _of_ survivors, or, dependents _and_ survivors?


### Guidelines for parameters in URLs 
When using parameters, in addition to all the URL standards above, please use these guidelines when possible to create clean and understandable URL strings. 

- Parameter labels should generally no more than 1 word
- Use a parameter label that indicates what the parameter is, not a generic word such as “parm” or “key”
- Do not expose empty/null value parameters in the URL
- If multiple parameters are used, list them in a consistent order when possible
- Use the rel=canonical attribute when the parameter-based URL is similar content to the canonical content (i.e. sorting does not change the content, but pagination and search parameters do)

### Guidelines for anchor tags (i.e. jump links) 
When using jump links, or, anchored links, in addition to all the URL standards above, please use these guidelines when possible to create clean and understandable URL strings.

- Anchor tag IDs should be treated as part of the URL and preferably follow all the same standards as URLs
- Ideally the tag ID should be plain language keywords that help provide meaning to the content, e.g. using a primary keyword from the associated heading. This works best for anchor tags on relatively static headings such as the Hub page. 
  - Example:  This link provides a user with quick access to tasks for managing their health care benefits - https://www.va.gov/health-care/#manage-your-health-and-benefits
- If the heading is lengthy, or could potentially change over time, using an ID (i.e. the content ID from drupal) is a another option.  This works well for creating anchor links to accordions that hold frequently asked questions.


## Vanity and shortened URLs 

A vanity URL is a short, simple, memorable and readable URL that utilizes the existing domain (va.gov) and redirects users to a specific page of the va.gov site.  
- Example: www.va.gov/vre takes users to https://www.va.gov/careers-employment/vocational-rehabilitation/ 


A “shortened URL” is a short, simple URL, but is generally made up of a randomized set of characters. VA does not currently provide a URL shortener service, so any external shortener services will not utilize the va.gov domain. 
- Example: http://go.usa.gov/TBUj takes users to https://www.usa.gov/Citizen/Topics/Environment-Agriculture.shtml


### About vanity URLs

- The structure of a VA.gov vanity URL is the "va.gov" plus a short keyword segment -  www.va.gov/[keyword] 
  - We do not use sub-domains for vanity urls (i.e. education.va.gov) 
  - We do not use custom top-level domains for vanity urls (i.e. www.va.apply) 
- We do not maintain the visibility of the vanity URL in a user’s browser.  Once they enter the vanity URL, they are immediately redirected to the appropriate landing page and the actual canonical URL for that page will be displayed in their browser.  

**When to use a vanity URL**
- To provide a short and memorable URL for high profile content or tools on va.gov that lives 3 or more levels deep or has a URL with 70 or more characters. 
- To provide an easy to remember and speak/type URL for a campaign landing page.

**When not to use a vanity URL:**
- For links to content that exists external to va.gov.
- For links to files or documents such as a pdf.
- For links to content or tools that live within the top 1-2 levels of the site already (i.e. www.va.gov/health-care). 
- For links to content in the Resources and Support area of the site.
- To create an acronym or abbreviation, or to use one that is not well known by Veterans.

### Guidance for choosing a vanity URL

- Vanity URLs must be easy to say and type, as they are often used in print, video and audio campaigns where users have to understand, remember and then enter them into their browser.
  - Do users need to change keyboards on a mobile device to enter the vanity URL (i.e. switching between alpha and numeric character keyboards)?
  - Can assisted tech users easily speak the URL?
- The vanity URLs should send users to content that matches the meaning and specificity of the keywords used in the URL.
- You must follow the core URL standards when determining your vanity URL, to ensure it is  unique, accurate, readable and properly formatted. 
- Examples: 
  - Good:  www.va.gov/vre - Although this uses an acronym, it is an exclusive acronym within VA and is a well-known acronym a very long program name. It also greatly shortens a long URL for a key benefit.   
  - Poor:  www.va.gov/TrustVA - This is a relatively descriptive URL, but it uses uppercase letters which means that users must type (or speak) the appropriate capitalization or the redirect will not work. 
  - Poor:  www.va.gov/dependents - The word “dependents” is a very broad term that could be interpreted a number of ways - is it a landing page for Veteran dependents to view benefits and services for them, or is it a place for Veterans to manage their dependents, etc. 



