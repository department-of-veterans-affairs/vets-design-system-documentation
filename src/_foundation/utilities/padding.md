---
layout: default
permalink: /foundation/utilities/padding
has-parent: /foundation/utilities/
title: Padding
anchors:
  - anchor: Padding on all sides
  - anchor: Padding top and bottom
  - anchor: Padding top
  - anchor: Padding bottom
  - anchor: Padding right and left
  - anchor: Padding right
  - anchor: Padding left
  - anchor: Responsive prefixes
---

# Padding

<div class="va-introtext" markdown="1">
  Change the spacing inside an item. Padding classes include [responsive prefixes](#responsive-prefixes).
</div>

{% include _site-on-this-page.html %}

## Padding on all sides
<div class="site-showcase">

  {%
    include _showcase-header.html
    heading_level=3
    header="Padding"
    responsive=true
    css_property="padding"
  %}

  <div class="vads-l-row">
    {% for item in site.data.padding.all %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
    </div>
  </div>

## Padding top and bottom
<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Padding top and bottom"
    responsive=true
    css_property="padding-top, padding-bottom"
  %}
  <div class="vads-l-row">
    {% for item in site.data.padding.y %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Padding top
<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Padding top"
    responsive=true
    css_property="padding-top"
  %}
  <div class="vads-l-row">
    {% for item in site.data.padding.top %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Padding bottom
<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Padding bottom"
    responsive=true
    css_property="padding-bottom"
  %}
  <div class="vads-l-row">
    {% for item in site.data.padding.bottom %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Padding right and left
<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Padding right and left"
    responsive=true
    css_property="padding-right, padding-left"
  %}
  <div class="vads-l-row">
    {% for item in site.data.padding.x %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Padding right
<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Padding right"
    responsive=true
    css_property="padding-right"
  %}
  <div class="vads-l-row">
    {% for item in site.data.padding.right %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>

## Padding left
<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Padding left"
    responsive=true
    css_property="padding-left"
  %}
  <div class="vads-l-row">
    {% for item in site.data.padding.left %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
        index=forloop.index
      %}
    {% endfor %}
  </div>
</div>


## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

### Example

<div class="site-showcase">
{% include_relative html/padding-responsive.html %}
</div>

{% include snippet.html content='html/padding-responsive.html' %}

{% include _breakpoint-names.html %}