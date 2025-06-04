---
layout: content-style-guide
permalink: /content-style-guide/plain-language/structure-your-content
has-parent: /content-style-guide/plain-language/
title: Structure your content
intro-text: "Structure your content so it's easy to follow. Instead of long paragraphs, chunk content using hierarchical headings (H2s and H3s), bulleted lists, process lists (subway map), and groups of accordion links."
---

Here's how to structure your content.

## Headers

{% include component-example.html alt="An example of using headers." file="/images/content-style-guide/plain-language/structure-your-content-headers.png" caption="Headers give structure to your page's content. Use H1 for the page title, H2 for the first sub-heading, and H3 for sub-headings within that section." width="60%" %}

### Accessibility best practices

Headings are one of the most used HTML elements on pages. They play a vital role for a page's understandability, scanability, and navigation for screen readers.

#### Accessibility problem being solved

How might we create a heading structure on pages and forms that helps everyone? We especially want to help people who use screen readers get oriented to the page and navigate around it.

#### Ideal state

- Pages should have one - and only one - `<h1>` heading that covers the topic of the content.
  - On Drupal pages, the "Page title" field is converted to `<h1>`.
  - On non-Drupal pages, you'll need to code the `<h1>` manually.
- Don't skip heading levels. Only increase by one level at a time (h1 to h2, for example).
- Don't use HTML elements or CSS styling for bold, italics, and font sizing in place of proper headings.
- Use headings for their semantic meaning, not their styling (don't use an `<h4>` just because of its small font size, for example).
  - Use [utility classes]({{ site.baseurl }}/foundation/utilities/) to change a heading's style.
- Make headings informative and don't repeat information from other headings.
- Don't stack headings (one heading level followed by another). For example, don't place a `<h2>` immediately after a `<h1>`.

#### Implementation notes

- Arrange headings hierarchically, from most important to least important.
- Review [Page titles and section titles]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles) for content guidance.

#### Additional resources

- [HeadingsMap Chrome extension](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?pli=1)
- [HeadingsMap Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

### Further reading

- [Headings presentation (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/ADE/presentations/Headings.pptx)
- [W3C page structure tutorial](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)

## Accordions

{% include component-example.html alt="An example of using accordions." file="/images/content-style-guide/plain-language/structure-your-content-accordions.png" caption="Use accordions to condense and group content. They give users a scannable overview." width="60%" %}

## Bulleted lists

{% include component-example.html alt="An example of using bulleted lists." file="/images/content-style-guide/plain-language/structure-your-content-lists.png" caption="Use bulleted lists to make information more scannable and easier to understand. Break sentences into bulleted lists when they contain more than 3 items or ideas." width="60%" %}
