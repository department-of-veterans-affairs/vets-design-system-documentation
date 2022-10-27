---
layout: component
permalink: /components/link/
title: Link
intro-text: "A link is a navigation element that can appear alone, inline (embedded), or in a group with other links. A link can trigger a download, but in general links go to internal or external pages when clicked."
research-title: Links
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/D58429E9-064C-48EE-8681-0389401F887C
status: use-deployed
sub-pages:
  - sub-page: Action
  - sub-page: Collection
  - sub-page: Deep content
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Variations
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

{% include _site-in-this-section.html %}

## Examples

### Default
{% include storybook-preview.html story="components-va-link--default" link_text="va-link" height="75px" %}

### Active

{% include storybook-preview.html story="components-va-link--active" link_text="active va-link" height="25px" %}

### Download

{% include storybook-preview.html story="components-va-link--download" link_text="download va-link" height="25px" %}

### Video

{% include storybook-preview.html story="components-va-link--video" link_text="video va-link" height="25px" %}

- Use when linking directly to a YouTube video.

### Channel

{% include storybook-preview.html story="components-va-link--channel" link_text="channel va-link" height="25px" %}

- Use when linking to a YouTube channel.

## Usage

### When to use a default link

* **Navigation between pages.** Navigating to another page (internal or external).
* **Navigation within a page.** Anchor, or jump, to a specific header and section on a page.
* **Trigger an appropriate supporting application.** Make email addresses and phone numbers open the relevant app by clicking or tapping them.

### When to use an Active link

* **Collections, such as Hub pages.** Active links can be seen on [Hub pages]({{ site.baseurl }}/templates/hub#example)
* **Less prominent links.** For links that need less prominence than an [Action link]({{ site.baseurl }}/components/link/action) and may appear in a [collection]({{ site.baseurl }}/components/link/collection), we recommend using an Active Link. Active Links are accompanied by a right-facing chevron icon for more emphasis. 

### When to use a Download link
* **Downloading files.** Use for download links including but not limited to PDFs and Excel files. The download icon is optional but encouraged.


### When to consider something else

* **Use buttons for actions.** Use a [Button]({{ site.baseurl }}/components/button) when you want to make a state change or submit a form. Example actions include, but are not limited to, "Add", "Close", "Cancel", or "Save". Buttons **do things**, links **go places**. Refer to guidance on [Links vs. buttons]({{ site.baseurl }}/components/link/action#links-vs-buttons)
* **Use action links for calls-to-action.** When you want to draw attention to an important call-to-action (CTA) on the page, such as a link that launches a benefit application, use an [Action link]({{ site.baseurl }}/components/link/action). Calls-to-action are not actions themselves (see the previous point). 
* **Table of contents.** When you want to make a long page of content with two or more H2s easier to navigate, use an [On this page link]({{ site.baseurl }} /components/on-this-page).
* **Triggering the generation of a PDF.** When using for a PDF, use only for linking directly to a PDF, not as a trigger for a process that generates a PDF. For [generating a PDF, use a button](#links-vs-buttons).

### Behavior

- **Open in the same window except in certain instances.** Links should only open in a new tab if clicking the link will result in the user losing progress or data. Otherwise, links should open in the same window.
- **Use semantically appropriate encodings.** Encode email and phone links with `mailto:` and `tel:`, respectively.

### Implementation details

If for some reason you do not use a link web-component links must meet the following criteria:

- All links use Source Sans Pro (Regular), underlined, at 16px.
- All links share the same color (`$color-link-default` `#004795`) for icon, link text, and underline. 
- All text links should be underlined. This is especially important for low-vision users. (Exception: [side navigation links]({{ site.baseurl }}/components/sidenav) should not be underlined.)

## Content considerations

{% include content/links.md %}

## Accessibility considerations

- **Material honesty**: Do not style a link to look or behave like a button ([material honesty](https://alistapart.com/article/material-honesty-on-the-web/)).
- **Keyboard navigation**: The user must be able to navigate to links using the Tab key and activate links using the Enter key.
- **Purpose and target**: Without a purpose and target, everyone-- but especially screen reader users-- will struggle to understand where they may be routed off to.

{% include content/links-vs-buttons.md %}

## Related 

- [Button]({{ site.baseurl }}/components/button)
- [On this page]({{ site.baseurl }}/components/on-this-page)
