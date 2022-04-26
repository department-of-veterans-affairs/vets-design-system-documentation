---
layout: default
permalink: /foundation/layout/page-layouts
has-parent: /foundation/layout/
title: Page layouts
anchors:
  - anchor: Guidance
  - anchor: Two columns, content on right
  - anchor: Two columns, content on left
---

# Page templates

<p class="va-introtext">
  These are the most common layouts used on VA.gov. The templates on this page are not full-page layouts, as main header and footer are not currently part of Formation, but snippets here are for everything in between to help you establish for page grid.
</p>

{% include _site-on-this-page.html %}

## Guidance for all examples

The following guidance applies to all page templates. The page templates are built with a combination of [flexbox grid]({{ site.baseurl }}/foundation/layout/flexbox-grid), the [negative margin utility]({{ site.baseurl }}/foundation/utilities/margins#margin-right-and-left) and the [padding utility]({{ site.baseurl }}/foundation/utilities/padding#padding-right-and-left).

### Accessibility

- Do not use CSS to swap source order from the visual order. In other words, what is placed towards the top of the page in small screens should be placed on the left in larger screens.
- The main content of the page should always be wrapped in `<main>`.
- Always use the proper semantic heading order in your page content.

## Two columns, content on right

In this example, the nav bar is what usually appears on the left-hand side of the page. When viewing this layout on VA.gov using a mobile device, the containing `div` sits on top of the main content. However, because the side navigation is converted to a flyout menu, and no vertical `padding` is associated with it, the side navigation's containing `div` appears to have disappeared.

<div class="site-showcase">
  {% include_relative html/2-col-content-right-iframe.html %}
</div>
{% include snippet.html content='html/2-col-content-right-iframe.html' %}

## Two columns, content on left

In this layout on VA.gov, the content is on the left and section on the left is often for promo content. When viewing this layout on a mobile device, the right column moves underneath the left column.

<div class="site-showcase">
  {% include_relative html/2-col-content-left-iframe.html %}
</div>
{% include snippet.html content='html/2-col-content-left.html' %}