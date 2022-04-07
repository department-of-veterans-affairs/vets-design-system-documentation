---
layout: default
sub_section: Links
title: Links
draft: True
---

# Links

<div class="va-introtext" markdown="1">
A link is a navigation element that can appear stand-alone, inline (embedded), or in a group with other links. A link can trigger a download, such as a PDF, but in general links go places when clicked.
</div>

## Examples
<div class="site-showcase">
  {% include_relative html/links.html %}
</div>

{% include snippet.html content='html/links.html' %}

## Usage

### When to use Links

Use a link when you want to:

- Navigate to another page (internal or external).
- Trigger a download such as a PDF.
- Play a video.
- Make email addresses and phone numbers open the relevant app by clicking or tapping them.

### When to consider something else

- Use a button when you want to make a state change or submit a form. Buttons **do things**, whereas links **go places**.
- When you want to draw attention to an important CTA on the page, such as a link that launches a benefit application, use [Action links](https://design.va.gov/experimental-design/action_links).
- When you want to make a long page of content with two or more H2s easier to navigate, use [On this page jump links](https://design.va.gov/components/on-this-page-jump-links).

### How to use Links

- Links should only open in a new tab if clicking the link will result in the user losing progress or data. Otherwise, links should open in the same window.
- Encode phone and email links with `mailto:` and `tel:`.

**PDF download links**

Use the following pattern for PDF download links. The download icon is optional:

fa-download icon + 8px margin + Link text (PDF, page count)

<!--![PDF download pattern]({{site.baseurl}}/images/PDF-download-link.png) 

For PDFs that have been translated into a language other than English, use:

fa-download icon + 8px margin + Link text (language abbreviation)(PDF, page count)

![translated PDF download pattern]({{site.baseurl}}/images/Download-link-spanish-v2.png) -->

Icon, link text, and underline color is `$color-link-default` `#004795`.

**PDF download link code example**

```html
<a 
  href="https://www.va.gov/playbook/downloads/Voices_Of_Veterans.pdf" 
  download="Voices_Of_Veterans.pdf" 
  type="application/pdf">
    <i aria-hidden="true" class="fas fa-download vads-u-padding-right--1" role="img"></i>
      Download the Voices of Veterans <dfn>(<abbr title="Portable Document Format">PDF</abbr>, 5pages)</dfn>
</a>
```

**Video links**

Use the following pattern when linking directly to a YouTube video:

fa-video icon + 8px margin + Video link text

Use the following pattern when linking to a YouTube channel:

fa-youtube icon + 8px margin + YouTube channel name

**Video play link code example**

```html
<a 
  class="video-link" 
  href="https://www.youtube.com/watch?time_continue=3&amp;v=xE0LzeRgdAk" 
  target="_blank" 
  rel="noopener ">
    <i aria-hidden="true" class="fas fa-play-circle vads-u-padding-right--1" role="img"></i>
      View video about VA disability compensation <dfn>on Youtube</dfn>
</a> 
```

## Content considerations

- Link text should describe the target and purpose of the link.
- Go to [Links in the Content style guide](https://design.va.gov/content-style-guide/links) for detailed guidance. 

## Accessibility considerations

- Do not style a link to look or behave like a button (material honesty).
- The user must be able to navigate to links using the Tab key and activate links using the Enter key.

## Related 

- [Action links](https://design.va.gov/experimental-design/action_links)
- [Buttons](https://design.va.gov/components/buttons)
- [Links (Content style guide)](https://design.va.gov/content-style-guide/links)
- [On this page jump links](https://design.va.gov/components/on-this-page-jump-links)
