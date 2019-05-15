---
layout: default
title: Border
anchors:
  - anchor: Border shorthand
  - anchor: Border style
  - anchor: Border color
---

# Border

<div class="va-introtext" markdown="1">
Set width, style, and color of an item’s borders.
</div>

## Border shorthand

The border shorthand utility provides border widths for all sides, as well as `top`, `right`, `bottom`, and `left`, using `solid` as the default `border-style`.

<div class="site-showcase">

  {%
    include _showcase-header.html
    heading_level=3
    header="Border"
    responsive=true
    css_property="border"
  %}

  <h3>Border on all sides</h3>
  <div class="vads-l-row">
    {% for item in site.data.borders.widths %}
      {% include border-example.html
        class="border"
        value=item.width
      %}
    {% endfor %}
  </div>

  <h3>Border top</h3>
  <div class="vads-l-row">
    {% for item in site.data.borders.widths %}
      {% include border-example.html
        class="border-top"
        value=item.width
      %}
    {% endfor %}
  </div>

  <h3>Border right</h3>
  <div class="vads-l-row">
    {% for item in site.data.borders.widths %}
      {% include border-example.html
        class="border-right"
        value=item.width
      %}
    {% endfor %}
  </div>

  <h3>Border bottom</h3>
  <div class="vads-l-row">
    {% for item in site.data.borders.widths %}
      {% include border-example.html
        class="border-bottom"
        value=item.width
      %}
    {% endfor %}
  </div>

  <h3>Border left</h3>
  <div class="vads-l-row">
    {% for item in site.data.borders.widths %}
      {% include border-example.html
        class="border-left"
        value=item.width
      %}
    {% endfor %}
  </div>
</div>


## Border style
**Note:** To use the utility for `border-style`, you must use the [border shorthand](#border-shorthand) if your element does not already have a border. Border style cannot be changed across different breakpoints

<div class="site-showcase">

  {%
    include _showcase-header.html
    heading_level=3
    header="Border style"
    responsive=false
    css_property="border-style"
  %}

  <div class="vads-l-row">
    {% for item in site.data.borders.styles %}
      {% include border-example.html
        class="border-style"
        value=item.name
        extra_class="vads-u-border--1px"
      %}
    {% endfor %}
  </div>
</div>

## Border color
**Note:** To use the utility for `border-color`, you must use the [border shorthand](#border-shorthand) if your element does not already have a border. Border color cannot be changed across different breakpoints.

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Border color"
    responsive=false
    css_property="border-color"
  %}

  <h4>Base colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.primary %}
      {% include border-color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Grayscale</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.grayscale %}
      {% include border-color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Tertiary colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.tertiary %}
      {% include border-color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Hub colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.hub %}
      {% include border-color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>
</div>

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology. Only the [border shorthand](#border-shorthand) property is available with responsive prefixes.

### Example

{% include iframe-preview.html src="html/borders-responsive.html" title="Borders" height=200 %}

{% include snippet.html content='html/borders-responsive.html' %}

{% include _breakpoint-names.html %}