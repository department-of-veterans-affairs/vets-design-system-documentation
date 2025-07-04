---
layout: documentation
permalink: /foundation/utilities/height-and-width
has-parent: /foundation/utilities/
title: Height and width
intro-text: Reset the height and width of an element. 
---

All height and width classes include [responsive prefixes](#responsive-prefixes).

## Height

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Height"
    responsive=true
    css_property="height"
  %}
  <div class="vads-grid-row">
    {% for item in site.data.height-and-width.height %}
      {% include height-and-width-example.html
        prop="height"
        name=item.name
        value=item.value
        description=item.description
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Min-height

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Min-height"
    responsive=true
    css_property="min-height"
  %}
  <div class="vads-grid-row">
    {% for item in site.data.height-and-width.min_height %}
      {% include height-and-width-example.html
        prop="min-height"
        name=item.name
        value=item.value
        description=item.description
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Max-height  

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Max-height"
    responsive=true
    css_property="max-height"
  %}
  <div class="vads-grid-row">
    {% for item in site.data.height-and-width.max_height %}
      {% include height-and-width-example.html
        prop="max-height"
        name=item.name
        value=item.value
        description=item.description
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Width

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Width"
    responsive=true
    css_property="width"
  %}
  <div class="vads-grid-row">
    {% for item in site.data.height-and-width.width %}
      {% include height-and-width-example.html
        prop="width"
        name=item.name
        value=item.value
        description=item.description
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Min-width

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Min-width"
    responsive=true
    css_property="min-width"
  %}
  <div class="vads-grid-row">
    {% for item in site.data.height-and-width.min_width %}
      {% include height-and-width-example.html
        prop="min-width"
        name=item.name
        value=item.value
        description=item.description
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Max-width

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Max-height"
    responsive=true
    css_property="max-height"
  %}
  <div class="vads-grid-row">
    {% for item in site.data.height-and-width.max_width %}
      {% include height-and-width-example.html
        prop="max-width"
        name=item.name
        value=item.value
        description=item.description
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>


## Responsive prefixes

All height and width utilities include responsive prefixes.

```html
<div class="vads-u-min-height--viewport desktop-lg:vads-u-min-height--none">
```
{% include _breakpoint-names.html %}