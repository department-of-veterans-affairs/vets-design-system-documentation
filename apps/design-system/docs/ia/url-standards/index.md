---
title: URL Standards
description: Guidelines for creating and managing URLs on VA.gov
---

# URL Standards

URLs serve as visible site attributes that enhance user experience, accessibility, and search rankings by:

- Indicating content location within the site hierarchy
- Signaling content priority through directory depth
- Providing high-level content descriptions
- Showing relationships between site content

A URL consists of: **domain + sub-directories (optional) + page name**

## Core URL Standards

### Uniqueness & Differentiation

- Each URL must be completely unique within a domain
- URLs must be specific enough to clearly distinguish each page

### Formatting Requirements

- All alphabetic characters must be lowercase
- Words separated by hyphens (no underscores or spaces)
- No special characters except hyphens
- Maximum 2000 characters to ensure browser compatibility

### Structural Accuracy

- URLs must accurately represent content placement and hierarchy
- Avoid invalid or empty sub-directories
- Empty directories should redirect to appropriate locations

### Readability & Plain Language

- Users and search engines must easily understand content purpose
- Keywords should derive from the page's H1 heading
- Content should match the VA content style guide standards
- No spelling or grammatical errors permitted

### Clarity & Conciseness

- Avoid overly broad terms or excessive abbreviation
- Do not repeat keywords unnecessarily
- Exclude stop words ("a," "the," "and") unless clarity requires them

### Privacy Protection

- No Personally Identifiable Information (PII) or Protected Health Information (PHI)
- This applies to parameters and anchor tags as well

## Changing URLs & Retiring Content

Always implement [redirects](./redirects) when:
- Pages are removed
- URLs change

This prevents 404 errors and preserves SEO value.

## Form Flow URL Guidelines

### Core Standards Apply

All form flow URLs must follow the core standards listed above.

### Linking Strategy

Link to the core form URL, not specific pages, to reduce broken links if pages are reorganized.

**Incorrect:** `www.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction`

**Correct:** `www.va.gov/health-care/apply-for-health-care-form-10-10ez/`

### Standardized Form Pages

- `/introduction/` - typically the first page
- `/review-and-submit/` - allows users to review before submission
- `/confirmation/` - displayed after form submission

### Flat Structure Required

Form flows should be linear with all pages at the same hierarchy level.

**Incorrect:** `form-url/page1/page2/page3/`

**Correct:** `form-url/page1/`, `form-url/page2/`, `form-url/page3/`

**Exception:** Different audience paths may be nested:
- `/form-url/veteran/page1/`
- `/form-url/family/page1/`

### Multiple Response Numbering

For list-and-loop questions, numbering starts at 1 and increments upward.

Embedded example:
- `/form-url/dependent-1/`
- `/form-url/dependent-2/`

Parameter example:
- `/form-url/dependent/?name=1`
- `/form-url/dependent/?name=2`

### Chapter Names

Avoid incorporating chapter names in URLs to prevent problems when chapters are renamed or reorganized.

### Related Steps Strategy

Use the same initial term for related pages in a flow:

**List and loop follow-ups:**
- `/dependent-1-contact`
- `/dependent-1-address`
- `/dependent-2-contact`
- `/dependent-2-address`

**Follow-up questions:**
- `/form-url/home-ownership/`
- `/form-url/home-value/`

**Topic-related series:**
- `/form-url/military-branch/`
- `/form-url/military-service-period/`
- `/form-url/military-other-names/`

## Anchor Tag Guidelines

When using jump links or anchored links:

- Treat anchor tag IDs as part of the URL
- Follow standard URL guidelines when possible
- Use plain language keywords from associated headings for static content

**Example:** `www.va.gov/health-care/#manage-your-health-and-benefits`

For lengthy or changeable headings, using content IDs works well for accordions with frequently asked questions.

## URL Parameters (Query Strings) Guidelines

Parameters filter or organize page information and are commonly used for:
- Pagination
- Anchoring
- Filtering or sorting data
- Language indication
- Searching

**Example:** `https://www.va.gov/search/?page=1&query=disability+compensation&t=true`

### Parameter Best Practices

- **No PII/PHI:** Never include names, contact information, or unique identifiers (IP addresses, ICN, EDIPI)
- **Canonical tags:** Use `rel=canonical` when parameter-based URLs contain similar content to establish the primary version for search engines
- **Parameter naming:** Keys should be single words that clearly define the parameter; avoid generic terms like "parm" or "key"
- **No empty parameters:** Do not expose null or empty value parameters
- **Multi-select values:** Combine into single parameter: `color=blue,red,white` instead of repeating the key
- **Avoid parameter links:** Link to static or canonical URLs when possible
- **Consistent ordering:** When using multiple parameters, establish priority and list them consistently

## Related

- [Redirects](./redirects) - When and how to implement URL redirects
- [Vanity URLs](./vanity-urls) - Creating short, memorable URLs for campaigns
