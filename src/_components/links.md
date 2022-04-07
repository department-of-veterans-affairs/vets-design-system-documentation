---
layout: default
sub_section: Links
title: Links
draft: True
---

# Links

<div class="va-introtext" markdown="1">
A link is a navigation element that can appear alone, inline (embedded), or in a group with other links. A link can trigger a download, such as a PDF, but in general links go places when clicked.
</div>

## Examples
<div class="site-showcase">
  {% include_relative html/links.html %}
</div>

{% include snippet.html content='html/links.html' %}

## Usage

### When to use Links

Use a link when you want to:

- Navigate to another page or jump to a different section on the current page.
- Trigger a download such as a PDF.
- Launch a video.
- Make email addresses, dates, and phone numbers open the relevant app by clicking or tapping them.

### When to consider something else

- Use a button when you want to make a state change or submit a form. Buttons **do things**, whereas links **go places**.
- When you want to draw attention to an important CTA on the page, such as a link that launches a benefit application, use [Action links](https://design.va.gov/experimental-design/action_links).

### How to use Links

- Links should only open in a new tab if clicking the link will result in the user losing progress or data. Otherwise, links should open in the same window.

**PDF download links**

Use the following pattern (icon is optional):

fa-download icon + 8px margin + Link text (PDF, page count)

Icon, link text, and underline color is `$color-link-default` `#004795`.

![PDF download pattern]({{site.baseurl}}/images/PDF-download-link.png) 

For PDFs that have been translated into a language other than English, use:

fa-download icon + 8px margin + Link text (PDF, page count, language abbreviation)

**PDF download link code example**

```HTML
<a 
  href="https://www.va.gov/playbook/downloads/Voices_Of_Veterans.pdf" 
  download="Voices_Of_Veterans.pdf" 
  type="application/pdf">
    <i aria-hidden="true" class="fas fa-download vads-u-padding-right--1" role="img"></i>
      Download the Voices of Veterans <dfn>(<abbr title="Portable Document Format">PDF</abbr>, 5pages)</dfn>
</a>
```

**Video links**



## Content considerations

- Reference [Links in the Content style guide](https://design.va.gov/content-style-guide/links) for detailed guidance. 

## Accessibility considerations

- In order to be materially honest, do not style a link to look or behave like a button.
- The user must be able to navigate to links using the Tab key and activate links using the Enter key.

## Related 

- [Action links](https://design.va.gov/experimental-design/action_links)
- [Buttons](https://design.va.gov/components/buttons)
- [Links (Content style guide)](https://design.va.gov/content-style-guide/links)
- [On this page jump links](https://design.va.gov/components/on-this-page-jump-links)
