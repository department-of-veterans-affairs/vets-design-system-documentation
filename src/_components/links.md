---
layout: default
sub_section: Links
title: Links
draft: True
---

# Links

<div class="va-introtext" markdown="1">
A link is a navigation element that can appear alone, inline (embedded), or in a group with other links. A link can be used to trigger a download, such as a PDF, but in general links go places when clicked.
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
- Make email addresses, dates, and phone numbers open the relevant app by clicking or tapping them.

**PDF download links**

Use the following pattern:

fa-download icon + 8 px spacing + link text (file type)

Icon and link text color is `$color-link-default` `#004795`.

![PDF download pattern]({{site.baseurl}}/images/PDF-download-link.png) 

For PDFs that have been translated into a language other than English, use:

fa-download icon + 8 px spacing + link text (file type, language abbreviation)

![PDF download pattern, Spanish]({{site.baseurl}}/images/PDF-download-link-esp.png) 

### When to consider something else

- Use a button when you want to make a state change or submit a form. Buttons **do things**, whereas links **go places**.
- When you want to draw attention to an important CTA on the page, such as a link that launches a benefit application, use [Action links](https://design.va.gov/experimental-design/action_links).

## Content considerations

- Link text should clearly communicate purpose and target (in that order), so users know where they'll be taken before clicking.
- Clearly label external links that go to other federal agencies.
- For non-federal external links, explicitly state that the content is not endorsed by the federal government.  
- See [Links in the Content style guide](https://design.va.gov/content-style-guide/links) for information on when to use embedded links vs. CTA links. 

## Accessibility considerations

- In order to be materially honest, a link must not be styled to look or behave like a button.
- The user must be able to navigate to and select links with a keyboard.

## Related 

- [Action links](https://design.va.gov/experimental-design/action_links)
- [Buttons](https://design.va.gov/components/buttons)
- [Links (Content style guide)](https://design.va.gov/content-style-guide/links)
- [On this page jump links](https://design.va.gov/components/on-this-page-jump-links)
