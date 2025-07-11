---
layout: content-style-guide
title: Title tags
intro-text: Title tags are HTML elements that are displayed in browsers and on search engine results. They help people identify what the page is about and if it’s relevant to their search query. 
anchors:
  - anchor: Example
  - anchor: Additional guidance
  - anchor: Privacy guidance
---

On VA.gov, title tags are pulled from the H1 (the page title), so it’s especially important to use the primary keyword or phrase in the page title.

* Format for most pages: H1/Page Title \| Veterans Affairs
* Use initial caps for title tags (ex: ‘Find A Form’, not ‘Find a form’)

## Example

![screenshot of browser title example]({{site.baseurl}}/images/content-style-guide/writing-for-seo/browser-title-example-va-prescription-refill-and-tracking.png)

## Additional guidance

For benefit hub pages (like [this one for disability](https://www.va.gov/disability/)), we keep title tags to 70 characters maximum (including spaces), so it displays fully in search results.

If the H1 is too long, we truncate it in the meta title tag to fit while still including "\| Veterans Affairs" at the end. Note: We don’t truncate the H1 in title tags for content types that don’t have a page title character limit, like news releases and resources and support articles.

### Exception 1 — VA medical center websites

For VA medical centers (VAMC), we format the title tag a little differently. Because it's important to call out the region and because many Veterans search for VA hospitals by the city or region, it's important to distinguish the regional nature of the page from the national content on VA.gov.

- Format: H1 Page Title \| VAMC Plain Language System Name \| Veterans Affairs
  - Example: Psychology Internships And Fellowships \| VA Pittsburgh Health Care \| Veterans Affairs
  - Example: H. John Heinz III Department Of Veterans Affairs Medical Center \| VA Pittsburgh Health Care \| Veterans Affairs
- Use the plain language VAMC system name in the title tags.
- On VA medical centers, we don't apply a character limit for the meta title.

Because the official facility location names can be very long and because we use them in the H1 page titles of location pages, we let search engines truncate according to their character limit.  

### Exception 2 — forms and subtasks

We format title tags differently for forms and multi-page subtasks. Some form components, like the [Income Limits tool](https://www.va.gov/health-care/income-limits/zip), use the question for the H1. This may be helpful for users as they fill out the form, but it’s less useful as the title tag. If a user has multiple forms open, we want them to easily be able to tell them apart with clear title tags.

Each page in the flow should have the plain language form or task name as the title tag. This may be different from the H1.

- Example: Income Limits \| Veterans Affairs
  - Instead of: What's Your Address \| Veterans Affairs
- Example: Apply For VA Health Care \| Veterans Affairs
  - Instead of: Form 10-10ez \| Veterans Affairs

## Privacy guidance 

**Title tags can’t include Personally Identifiable Information (PII) or Protected Health Information (PHI).** 

Pages with PII/PHI in H1s must genericize the title tag. This ensures the information isn’t tracked back in analytics or other logs through the page title. 

For example, a detail page within an authenticated tool may have an H1 that includes specific information about a person—a physician or clinic visited, a medication prescribed, a disability rating, an individual’s file number, etc.   

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">
H1: Prednisone, 25mg
Breadcrumb: VA.gov home > My HealtheVet > Medications > Medication detail
Title tag: Medication detail – Medications | Veterans Affairs
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Not this</h3>
<div class="do-dont__content" markdown="1">
H1: Prednisone, 25mg
Breadcrumb: VA.gov home > My HealtheVet > Medications > Prednisone, 25mg
Title tag: Prednisone, 25mg – Medications | Veterans Affairs
</div>
</div>
</div>

This does create an a11y infraction where there isn’t a unique title tag for each page, but there isn’t other meaningful data that can be exposed in the title tag to differentiate it. The VA 508 office approved this approach in these use cases.  

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii) 

