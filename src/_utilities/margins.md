---
layout: default
sub_section: margins
title: Margins
---



<div class="usa-alert usa-alert-warning vads-u-margin-top--0 vads-u-margin-bottom--3">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Draft</h3>
    <p>Use this item with caution. There might be some revisions as we gather feedback.</p>
  </div>
</div>



# Margins

Change the spacing around an item. Margin classes include [responsive prefixes](#responsive-prefixes).


<div class="site-c-showcase">

  <h2>Margin on all sides</h2>

  <div class="vads-l-row">
    {% for item in site.data.margins.all %}
      {% include _margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>


  <h2>Margin top and bottom</h2>
  <p>The ghosted square represents another element just below the example in the DOM to depict a negative bottom margin.</p>
  <div class="vads-l-row">
    {% for item in site.data.margins.y %}
      {% include _margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>


  <h2>Margin top</h2>
  <div class="vads-l-row">
    {% for item in site.data.margins.top %}
      {% include _margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Margin bottom</h2>
  <p>The ghosted square represents another element just below the example in the DOM to depict a negative bottom margin.</p>
  <div class="vads-l-row">
    {% for item in site.data.margins.bottom %}
      {% include _margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>


  <h2>Margin right and left</h2>
  <p>The squares in this example are set to display inline.The ghosted square represents another element just below the example in the DOM to depict a negative right margin.</p>
  <div class="vads-l-row">

    {% for item in site.data.margins.x %}
      {% include _margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Margin right</h2>
  <p>The squares in this example are set to display inline.The ghosted square represents another element just below the example in the DOM to depict a negative right margin.</p>
  <div class="vads-l-row">

    {% for item in site.data.margins.right %}
      {% include _margin-example.html
        class=item.class
        value=item.value
        grid_cols=item.grid_cols
        show_square2=item.show_square2
        outer_classes=item.outer_classes
      %}
    {% endfor %}
  </div>

  <h2>Margin left</h2>
  <div class="vads-l-row">

    {% for item in site.data.margins.left %}
      {% include _margin-example.html
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