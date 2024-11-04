---
layout: default
permalink: /foundation/utilities/background-color
has-parent: /foundation/utilities/
title: Background color
---

# Background color

<div class="va-introtext">
Change the background color of an element
</div>

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=2
    header="Background color"
    responsive=false
    css_property="background-color"
  %}

  <h4>Base colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.primary %}
      {% include _background-color-example.html
        name=item.name
        token=item.token
      %}
    {% endfor %}
  </div>

  <h4>Grayscale</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.grayscale %}
      {% include _background-color-example.html
        name=item.name
        token=item.token
      %}
    {% endfor %}
  </div>

  <h4>Tertiary colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.tertiary %}
      {% include _background-color-example.html
        name=item.name
        token=item.token
      %}
    {% endfor %}
  </div>

  <h4>Hub colors</h4>
  <div class="vads-l-row vads-u-flex-direction--column">
    {% for item in site.data.colors.hub %}
      {% include _background-color-example.html
        name=item.name
        token=item.token
      %}
    {% endfor %}
  </div>
</div>
