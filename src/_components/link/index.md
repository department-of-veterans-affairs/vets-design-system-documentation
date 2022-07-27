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
  - sub-page: Deep Content
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
{% include storybook-preview.html story="components-va-link--default" link_text="va-link" %}

### Active
- For links that have less hierarchy than an Action Link, we recommend using an Active Link. Active Links can be accompanied by a right-facing chevron icon for more emphasis. 
- Active links can be seen on [Hub pages]({{ site.baseurl }}/patterns/templates/hub#example)
- Active link text is bold.

{% include storybook-preview.html story="components-va-link--active" link_text="active va-link" %}

### Download
- Use for download links including but not limited to PDFs and Excel files. The download icon is optional but encouraged.
- When using for a PDF, use only for linking directly to a PDF, not as a trigger for a process that generates a PDF. For [generating a PDF, use a button](#links-vs-buttons).
- Structure: fa-download icon + 8px margin + Link text (PDF, page count)

{% include storybook-preview.html story="components-va-link--download" link_text="download va-link" %}

### Video
- Use when linking directly to a YouTube video.
- Structure: fa-play-circle icon + 8px margin + Video link text

{% include storybook-preview.html story="components-va-link--video" link_text="video va-link" %}

### Channel
- Use when linking to a YouTube channel.
- Structure: fa-youtube icon + 8px margin + YouTube channel name

{% include storybook-preview.html story="components-va-link--channel" link_text="channel va-link" %}

## Usage

### When to use Links

Use a link when you want to:

- Navigate to another page (internal or external)
- Anchor, or jump, to a specific header and section on a page
- Trigger a download such as a PDF
- Play a video
- Make email addresses and phone numbers open the relevant app by clicking or tapping them

### When to consider something else

- **Use buttons for actions.** Use a [Button]({{ site.baseurl }}/components/button) when you want to make a state change or submit a form. Example actions include, but are not limited to, "Add", "Close", "Cancel", or "Save". Buttons **do things**, links **go places**. Refer to guidance on [Links vs. buttons]({{ site.baseurl }}/components/link/action#links-vs-buttons)
- **Use action links for calls-to-action.** When you want to draw attention to an important call-to-action (CTA) on the page, such as a link that launches a benefit application, use an [Action link]({{ site.baseurl }}/components/link/action). Calls-to-action are not actions themselves (see the previous point). 
- **Table of contents.** When you want to make a long page of content with two or more H2s easier to navigate, use an [On this page link]({{ site.baseurl }} /components/on-this-page).

### How to use Links

- **Open in the same window except in certain instances.** Links should only open in a new tab if clicking the link will result in the user losing progress or data. Otherwise, links should open in the same window.
- **Use semantically appropriate encodings.** Encode email and phone links with `mailto:` and `tel:`, respectively.
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
