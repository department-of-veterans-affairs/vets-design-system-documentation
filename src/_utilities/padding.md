---
layout: default
sub_section: padding
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

## Padding on all sides
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.all %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
    </div>
  </div>

## Padding top and bottom
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.y %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Padding top
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.top %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Padding bottom
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.bottom %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Padding right and left
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.x %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Padding right
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.right %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Padding left
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.padding.left %}
      {% include padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>


## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

### Example

{% include iframe-preview.html src="html/padding-responsive.html" title="Padding" height=200 %}

{% include snippet.html content='html/padding-responsive.html' %}


{% include _breakpoint-names.html %}