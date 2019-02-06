---
layout: default
sub_section: padding
title: Padding
---

# Padding

<div class="va-introtext" markdown="1">
Change the spacing inside an item. Padding classes include [responsive prefixes](#responsive-prefixes).
</div>

<div class="site-c-showcase">

  <h2>Padding on all sides</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.all %}
      {% include _padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Padding on top and bottom</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.y %}
      {% include _padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Padding on top</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.top %}
      {% include _padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Padding on bottom</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.bottom %}
      {% include _padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Padding on right and left</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.x %}
      {% include _padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Padding on right</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.right %}
      {% include _padding-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Padding on left</h2>
  <div class="vads-l-row">
    {% for item in site.data.padding.left %}
      {% include _padding-example.html
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