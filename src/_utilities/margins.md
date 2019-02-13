---
layout: default
sub_section: margins
title: Margins
anchors:
  - anchor: Margin on all sides
  - anchor: Margin top and bottom
  - anchor: Margin top
  - anchor: Margin bottom
  - anchor: Margin right and left
  - anchor: Margin right
  - anchor: Margin left
  - anchor: Responsive prefixes
---

# Margins

<div class="va-introtext" markdown="1">
Change the spacing around an item. Margin classes include [responsive prefixes](#responsive-prefixes).
</div>


## Margin on all sides

<div class="site-c-showcase">

  <div class="vads-l-row">
    {% for item in site.data.margins.all %}
      {% include margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Margin top and bottom

<div class="site-c-showcase">
  <p>The ghosted square represents another element just below the example in the DOM to depict a negative bottom margin.</p>
  <div class="vads-l-row">
    {% for item in site.data.margins.y %}
      {% include margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Margin top
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.margins.top %}
      {% include margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>


## Margin bottom
<div class="site-c-showcase">
  <p>The ghosted square represents another element just below the example in the DOM to depict a negative bottom margin.</p>
  <div class="vads-l-row">
    {% for item in site.data.margins.bottom %}
      {% include margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Margin right and left
<div class="site-c-showcase">
  <p>The squares in this example are set to display inline.The ghosted square represents another element just below the example in the DOM to depict a negative right margin.</p>
  <div class="vads-l-row">

    {% for item in site.data.margins.x %}
      {% include margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Margin right
<div class="site-c-showcase">
  <p>The squares in this example are set to display inline.The ghosted square represents another element just below the example in the DOM to depict a negative right margin.</p>
  <div class="vads-l-row">

    {% for item in site.data.margins.right %}
      {% include margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>
</div>

## Margin left
<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.margins.left %}
      {% include margin-example.html
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

```html
<div class="medium-screen:vads-u-margin--3 large-screen:vads-u-margin--5">
```
{% include _breakpoint-names.html %}