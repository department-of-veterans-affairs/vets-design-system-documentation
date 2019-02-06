---
layout: default
sub_section: color
title: Color
---

# Color

<div class="va-introtext">
Change the color of text and SVGs (using <code>fill: currentColor</code>).
</div>

**Note:** Not all of these colors are placed in accessible color combinations.

<div class="site-c-showcase">
  <h4>Base colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.primary %}
      {% include _color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Grayscale</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.grayscale %}
      {% include _color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Tertiary colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.tertiary %}
      {% include _color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4>Hub colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.hub %}
      {% include _color-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

</div>