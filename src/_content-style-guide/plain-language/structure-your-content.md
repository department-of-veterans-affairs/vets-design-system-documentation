---
layout: content-style-guide
permalink: /content-style-guide/plain-language/structure-your-content
has-parent: /content-style-guide/plain-language/
title: Structure your content
intro-text: "Structure your content so it's easy to follow for everyone, including sighted readers, people who are using an assistive device such as a screen reader, and people with cognitive conditions. Instead of long paragraphs, chunk content using hierarchical headings, bulleted lists, process lists (subway map), and groups of accordion links."
---

Here's how to structure your content.

## Headings

{% include component-example.html alt="An example of using headings on a page." file="/images/content-style-guide/plain-language/structure-your-content-headers.png" caption="Headings give structure to your page's content. Use an <h1> for the page title, an <h2> for the first sub-heading, and an <h3> for sub-headings within that section." width="60%" %}

### Content and accessibility best practices

Headings help to set expectations for each page and section within a page. They help sighted readers easily scan the content. And they help people using assistive devices, such as screen readers, quickly get oriented to the page and navigate through the information. 

Follow these best practices when using headings:
- Use only 1 H1 heading per page. The H1 should clearly and briefly capture the page topic. 
  **Note:** On Drupal pages, Drupal will convert the "Page title" to an H1. On non-Drupal pages, you'll need to code the H1 manually.
- Don't skip heading levels. Only increase by 1 level at a time. For example, follow an <h1> heading only with an <h2> heading, never with an <h3> or <h4> heading.
- Don't use HTML elements or CSS styling for bold, italics, and font sizing in place of proper headings.
- Use headings for their semantic meaning, not their styling. For example, don't use an `<h4>` just because of its small font size
  [Use utility classes]({{ site.baseurl }}/foundation/utilities/) to change a heading's style.
- Make each heading informative and distinct. Don't repeat information from other headings.
- Don't stack headings (1 heading level followed by another). For example, don't place a `<h2>` immediately after a `<h1> without any regular content in between the headings.
- Arrange headings hierarchically on the page, from most important to least important.
- [Review the "Page titles and section titles" section for more content guidance]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles)

#### Additional resources

- [HeadingsMap Chrome extension from the Chrome webstore website](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?pli=1)
- [HeadingsMap Firefox extension from the Mozilla website](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

### Further reading

- [Headings presentation (pptx) on VA's Github website](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/ADE/presentations/Headings.pptx)
- [W3C page structure tutorial on the W3.org website](https://www.w3.org/WAI/tutorials/page-structure/headings/)

## Accordions

{% include component-example.html alt="An example of using accordions." file="/images/content-style-guide/plain-language/structure-your-content-accordions.png" caption="Use accordions to condense and group content as needed. Accordions can help provide an easy-to-scan overview of related content questions or topics to help people quickly decide which content best fits their needs. Be mindful not to overuse accordions." width="60%" %}

## Bulleted lists

{% include component-example.html alt="An example of using bulleted lists." file="/images/content-style-guide/plain-language/structure-your-content-lists.png" caption="Use bulleted lists to make information easier to scan and understand. Break sentences into bulleted lists when they contain more than 3 items or ideas." width="60%" %}
