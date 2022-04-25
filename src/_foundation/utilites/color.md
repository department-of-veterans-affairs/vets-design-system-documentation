---
layout: default
permalink: /foundation/utilities/color
has-parent: /foundation/utilities
title: Color
---

# Color

<div class="va-introtext">
Change the color of text and SVGs (using <code>fill: currentColor</code>).
</div>

**Note:** Not all of these colors are placed in accessible color combinations.

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=3
    header="Color"
    responsive=false
    css_property="color"
  %}

  <h4>Base colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.primary %}
      {% include color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Grayscale</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.grayscale %}
      {% include color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Tertiary colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.tertiary %}
      {% include color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Hub colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.hub %}
      {% include color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

</div>