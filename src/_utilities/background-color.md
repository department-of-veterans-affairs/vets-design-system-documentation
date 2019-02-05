---
layout: default
sub_section: background-color
title: Background Color
---

# Background Color

<div class="va-introtext">
Change the background color of an element
</div>

<div class="site-c-showcase">
<h4>Base colors</h4>
<div class="vads-l-row vads-u-flex-direction--column">
  {% for item in site.data.colors.primary %}
    {% include _background-color-example.html
      name=item.name
      hex=item.hex
    %}
  {% endfor %}
</div>

<h4>Grayscale</h4>
<div class="vads-l-row vads-u-flex-direction--column">
  {% for item in site.data.colors.grayscale %}
    {% include _background-color-example.html
      name=item.name
      hex=item.hex
    %}
  {% endfor %}
</div>

<h4>Tertiary colors</h4>
<div class="vads-l-row vads-u-flex-direction--column">
  {% for item in site.data.colors.tertiary %}
    {% include _background-color-example.html
      name=item.name
      hex=item.hex
    %}
  {% endfor %}
</div>

<h4>Hub colors</h4>
<div class="vads-l-row vads-u-flex-direction--column">
  {% for item in site.data.colors.hub %}
    {% include _background-color-example.html
      name=item.name
      hex=item.hex
    %}
  {% endfor %}
</div>
</div>
