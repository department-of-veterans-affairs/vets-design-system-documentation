---
layout: component
permalink: /components/link/
title: Link
intro-text: "A link is a navigation element that can appear alone, inline (embedded), or in a group with other links. A link can trigger a download, but in general links go to internal or external pages when clicked."
research-title: Links
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1312%3A10138&mode=design&t=nYOotVcwdpiMCL5C-1
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

### Calendar

{% include storybook-preview.html story="components-va-link--calendar" link_text="calendar va-link" height="25px" %}

### Channel

{% include storybook-preview.html story="components-va-link--channel" link_text="channel va-link" height="25px" %}

### Download

{% include storybook-preview.html story="components-va-link--download" link_text="download va-link" height="25px" %}

### Video

{% include storybook-preview.html story="components-va-link--video" link_text="video va-link" height="25px" %}

## Usage

### When to use a default link

* **Navigation between pages.** Navigating to another page (internal or external).
* **Navigation within a page.** Anchor, or jump, to a specific header and section on a page.
* **Trigger an appropriate supporting application.** Make email addresses and phone numbers open the relevant app by clicking or tapping them.

### When to use an Active link

* **Collections, such as Hub pages.** Active links can be seen on [Hub pages]({{ site.baseurl }}/templates/hub#example)
* **Less prominent links.** For links that need less prominence than an [Action link]({{ site.baseurl }}/components/link/action) and may appear in a [collection]({{ site.baseurl }}/components/link/collection), we recommend using an Active Link. Active Links have a hover behavior that includes a background color change and an animated right-facing chevron icon for more emphasis. 

### When to use a Calendar link
* **Adding an event to a calendar.** Use when the link adds an event to a digital calendar.

### When to use a Channel link
* **YouTube channel.** Use when linking to a YouTube channel.

### When to use a Download link
* **Downloading files.** Use for download links including but not limited to PDFs and Excel files.

### When to use a Video link
* **YouTube Video.** Use when linking directly to a YouTube video.


### When to consider something else

* **Use buttons for actions.** Use a [Button]({{ site.baseurl }}/components/button) when you want to make a state change or submit a form. Example actions include, but are not limited to, "Add", "Close", "Cancel", or "Save". Buttons **do things**, links **go places**. Refer to guidance on [Links vs. buttons]({{ site.baseurl }}/components/link/action#links-vs-buttons)
* **Use action links for calls-to-action.** When you want to draw attention to an important call-to-action (CTA) on the page, such as a link that launches a benefit application, use an [Action link]({{ site.baseurl }}/components/link/action). Calls-to-action are not actions themselves (see the previous point). 
* **Table of contents.** When you want to make a long page of content with two or more H2s easier to navigate, use an [On this page link]({{ site.baseurl }} /components/on-this-page).
* **Triggering the generation of a PDF.** When using for a PDF, use only for linking directly to a PDF, not as a trigger for a process that generates a PDF. For [generating a PDF, use a button](#links-vs-buttons).

### How this component works

* **Use icons as defined.** [Icons]({{ site.baseurl }}/foundation/icons/) defined in the link variations above are reserved for that distinct usage. These icons should not be used for another purpose without explicit permission to do so from the Design System Council.

#### Implementation details

If for some reason you do not use a link web-component links must meet the following criteria:

- All links use Source Sans Pro (Regular), underlined, at 16px.
- All links share the same color (`$color-link-default` `#004795`) for icon, link text, and underline. 
- All text links should be underlined. This is especially important for low-vision users. (Exception: [side navigation links]({{ site.baseurl }}/components/sidenav) should not be underlined.)

### Behavior

* **Open all links in the same window except in certain instances.** Links on VA.gov should open in a new tab only if clicking the link will result in the user losing progress or data. This scenario should be avoided when possible. In all other instances, links should open in the same window. See [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites) in the content style guide for additional information.
- **Use semantically appropriate encodings.** Encode email and phone links with `mailto:` and `tel:`, respectively.

### Choosing between variations

Review "[Usage](#usage)" for guidance.

## Content considerations

Refer to the [Content Style Guide on Links]({{ site.baseurl }}/content-style-guide/links).

## Accessibility considerations

- **Material honesty.** Do not style a link to look or behave like a button ([material honesty](https://alistapart.com/article/material-honesty-on-the-web/)).
- **Keyboard navigation.** The user must be able to navigate to links using the Tab key and activate links using the Enter key.
- **Purpose and target.** Link text that doesn't indicate a clear purpose or destination makes it harder for everyone--especially screen reader users--to understand where they're getting routed off to.
- **External links must indicate that they are external.** Follow the methods detailed in [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).

{% include content/links-vs-buttons.md %}

## Related 

- [Button]({{ site.baseurl }}/components/button)
- [On this page]({{ site.baseurl }}/components/on-this-page)
