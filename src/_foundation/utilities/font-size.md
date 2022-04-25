---
layout: default
permalink: /foundation/utilities/font-size
has-parent: /foundation/utilities/
title: Font size
---

# Font size

<div class="va-introtext" markdown="1">
Change the font size of an element. The font-size classes include [responsive prefixes](#responsive-prefixes).
</div>

The font-size utility is especially useful on headings, allowing them to be logically nested while applying a custom font size.

<div class="site-showcase">
{%
  include _showcase-header.html
  heading_level=2
  header="Font size"
  responsive=true
  css_property="font-size"
%}
{% include_relative html/font-size.html %}
</div>

{% include snippet.html content='html/font-size.html' %}

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

{% include iframe-preview.html new_tab="true" src="html/font-size-responsive-iframe.html" title="Font size" height=200 %}

{% include snippet.html content='html/font-size-responsive.html' %}

{% include _breakpoint-names.html %}