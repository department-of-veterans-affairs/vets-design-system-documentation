---
layout: content-style-guide
title: Page titles and section titles
intro-text: Page and section titles do a lot of heavy lifting. A good rule of thumb is to hide all the text on a page, except the page title, section titles, subsection titles, and the primary CTA.
---

If someone can still figure out what they need to do on that page or what that page is about, it's a good sign that the page and section titles are working well.  

## Page titles

Page titles have a few important functions:

- To clearly and quickly tell people the main purpose of the page—what they can do or what information they can get on that page.
- To [optimize the page for search]({{ site.baseurl }}/content-style-guide/seo), so the information is findable through Google and other search engines.

Try to keep page titles to 52 characters maximum, with spaces. Use the primary SEO keyword in the page title. On VA.gov, page titles use the H1 tag.

### Exceptions

- Articles in resources and support have a page title character limit of 70.
- News releases, blog titles, community stories, and local event titles don't have a page title character limit.

## Section titles

Section and subsection titles (also sometimes called headers and subheads) help organize the page into scannable, user-friendly chunks. They should provide clear guideposts and bring people deeper into the content.

- Structure section titles with H2s and subsections with H3s, and so on. This provides a natural hierarchy for your content, and helps SEO.
- In sections that list several ways someone can contact VA or apply for a benefit, use "Option [X]:" in the header. For example, under an H2 that says "How to apply" we might have these H3s: "Option 1: Online" and "Option 2: By mail"
- Try to keep section and subsection titles to 70 characters maximum, with spaces.

We allow a little more character count for sections and subsections than page titles. But in general, sections become hard to scan when they're too long. Eliminate unnecessary details or nuance in section and subsection titles, and address them with more depth in the paragraph copy.

[Read more about using header levels to structure sections on W3.org](https://www.w3.org/WAI/tutorials/page-structure/headings/)

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">

**H1 page title** How to apply for college

- **H2** Documents you need before you start your college application
- **H2** Ways to apply to colleges

> - H3 Option 1: Online

> - H3 Option 2: By mail

- **H2** What happens after you apply

> - H3 How long it takes to hear back from colleges

- **H2** More information about applying for college

</div>
</div>
</div>

## Privacy guidance

**Page titles (H1s) can include Personally Identifiable Information (PII) or Protected Health Information (PHI), but this information can’t be populated or tracked anywhere else.**

**If an H1 includes PII or PHI:**

- Ensure no part of the URL, including parameters and anchor tags, include information that can be used either by itself or in combination with other information to uncover that individual’s identity or health information. 
- Genericize the corresponding breadcrumb segment. This ensures the information isn’t tracked back into analytics or other logs through the link text for that breadcrumb segment.  
- Genericize the title tag. This ensures the information isn’t tracked back in analytics or other logs through the page title.<br>
[Learn more on the Title tag page](https://design.va.gov/content-style-guide/title-tags)
- This does create an a11y infraction where there isn’t a unique title tag for each page, but there isn’t other meaningful data that can be exposed in the title tag to differentiate it. The VA 508 office approved this approach in these use cases.

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)
