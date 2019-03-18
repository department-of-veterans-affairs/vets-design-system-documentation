---
layout: default
title: Height and width
anchors:
  - anchor: Height
  - anchor: Min-height
  - anchor: Max-height
  - anchor: Width
  - anchor: Min-width
  - anchor: Max-width
  - anchor: Responsive prefixes
---

# Height and width

<div class="va-introtext" markdown="1">
Reset the height and width of an element. All height and width classes include [responsive prefixes](#responsive-prefixes).
</div>

## Height

<div class="site-c-showcase">
  <div class="vads-l-row">
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

<div class="site-c-showcase">
  <div class="vads-l-row">
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

<div class="site-c-showcase">
  <div class="vads-l-row">
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

<div class="site-c-showcase">
  <div class="vads-l-row">
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

<div class="site-c-showcase">
  <div class="vads-l-row">
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

<div class="site-c-showcase">
  <div class="vads-l-row">
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
<div class="vads-u-min-height--viewport large-screen:vads-u-min-height--none">
```
{% include _breakpoint-names.html %}