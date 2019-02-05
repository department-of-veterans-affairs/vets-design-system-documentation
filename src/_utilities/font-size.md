---
layout: default
sub_section: font-size
title: Font Size
---

<div class="usa-alert usa-alert-error vads-u-margin-top--0 vads-u-margin-bottom--3">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Proposal</h3>
    <p>This utility has not been added to Formation. This page is for documentation only.</p>
  </div>
</div>

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