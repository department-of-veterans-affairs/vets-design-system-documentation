---
layout: content-style-guide
title: Page titles and section titles
intro-text: Page and section titles do a lot of heavy lifting. A good way to test the effectiveness of your page and section titles is to hide all the text on a page, except the page title, section titles, subsection titles, and the primary call to action. If someone can still figure out what they need to do on that page or what that page is about, the page and section titles are likely working well.
---  

## Page titles

Page titles have a few important functions:

- To clearly and quickly tell people the main purpose of the page—what they can do or what information they can get on that page
- To optimize the page for search, so the information is findable through Google and other search engines
[Read more about writing for SEO]({{ site.baseurl }}/content-style-guide/seo)

Try to keep page titles to 52 characters (with spaces) maximum. Use the primary SEO keyword in the page title. On VA.gov, page titles use the H1 tag.

### Exceptions

- Articles in resources and support have a page title character limit of 70
- News releases, blog titles, community stories, and local event titles don't have a page title character limit

## Section titles

Section and subsection titles (also sometimes called headers and subheads) help organize the page into scannable chunks of information. They should provide clear guideposts and bring people deeper into the content.

- Structure section titles with H2s, subsections with H3s, and so on. This provides a natural hierarchy for your content and helps SEO.
- In sections that list several ways someone can contact us or apply for a benefit, use "Option [X]:" in the header. For example, under an H2 that says "How to apply" we might have these H3s: "Option 1: Online" and "Option 2: By mail."
- Try to keep section and subsection titles to 70 characters (with spaces) maximum. Include only details or nuances that are critical to differentiating between sections and subsections. Address other details with more depth in the paragraph copy.

[Read more about using header levels to structure sections on W3.org](https://www.w3.org/WAI/tutorials/page-structure/headings/)

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">

**H1 page title** How to apply for college

- **H2** Documents you need before you start your college application
- **H2** Ways to apply to colleges

> - **H3** Option 1: Online

> - **H3** Option 2: By mail

- **H2** What happens after you apply

> - **H3** How long it takes to get a response from colleges

- **H2** More information about applying for college

</div>
</div>
</div>

## Title tags

Title tags use the H1 as part of the tag. The Title tag section has specific information on what to use for the title tag and how to format it, depending on the context.

[Learn more in the Title tag section](https://design.va.gov/content-style-guide/title-tags)

## Privacy guidance

**Page titles (H1s) can include personally identifiable information (PII) or protected health information (PHI), but we can't populate or track this information anywhere else.**

**What to do if an H1 includes PII or PHI:**

- Ensure no part of the URL, including parameters and anchor tags, include information that can be used either by itself or in combination with other information to uncover that individual’s identity or health information. 
- Genericize the corresponding breadcrumb segment. This ensures the information isn’t tracked back into analytics or other logs through the link text for that breadcrumb segment.  
- Genericize the title tag. This ensures the information isn’t tracked back in analytics or other logs through the page title.<br>
[Learn more on the Title tag page](https://design.va.gov/content-style-guide/title-tags)
- This does create an a11y infraction where there isn’t a unique title tag for each page, but there isn’t other meaningful data that can be exposed in the title tag to differentiate it. The VA 508 office approved this approach in these use cases.

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)
