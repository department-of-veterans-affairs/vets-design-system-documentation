---
layout: default
title: Page templates
draft: true
anchors:
  - anchor: Two columns, content on right
  - anchor: Two columns, content on left
---

# Page templates

<p class="va-introtext">These are the most common layouts used on VA.gov. The templates on this page are not full-page layouts, as main header and footer are not currently part of Formation, but snippets here are for everything in between to help you establish for page grid.</p>

## Two columns, content on right

In this example, the nav bar is what usually appears on the left-hand side of the page. When viewing this layout on VA.gov using a mobile device, the containing `div` sits on top of the main content. However, because the side navigation is converted to a flyout menu, and no vertical `padding` is associated with it, the side navigation's containing `div` appears to have disappeared.

{% include iframe-preview.html src="html/2-col-content-right-iframe.html" title="2 columns" height=200 %}

{% include snippet.html content='html/2-col-content-right.html' %}

## Two columns, content on left

In this layout on VA.gov, the content is on the left and section on the left is often for promo content. When viewing this layout on a mobile device, the right column moves underneath the left column.

{% include iframe-preview.html src="html/2-col-content-left-iframe.html" title="2 columns with content on the left" height=200 %}

{% include snippet.html content='html/2-col-content-left.html' %}