---
layout: default
sub_section: font-size
title: Font size
---

# Font size

<div class="va-introtext" markdown="1">
Change the font size of an element. The font-size classes include [responsive prefixes](#responsive-prefixes).
</div>

<div class="site-c-showcase">
{% include_relative html/font-size.html %}
</div>

{% include snippet.html content='html/font-size.html' %}

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

{% include iframe-preview.html src="html/font-size-responsive.html" title="Font size" height=200 %}

{% include snippet.html content='html/font-size-responsive.html' %}

{% include _breakpoint-names.html %}