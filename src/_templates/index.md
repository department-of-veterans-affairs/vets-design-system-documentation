---
layout: default
index: true
title: Templates
intro-text: "Templates, or page layouts, compose components within a single page. A layout can contain multiple variations of a component depending on the context."
---

<h1>{{ page.title }}</h1>

<div class="va-introtext">
  {{ page.intro-text }}
</div>

{% include components-patterns-templates.md %}

## Code usage

* Code details in [page layouts]({{ site.baseurl }}/foundation/layout/page-layouts)