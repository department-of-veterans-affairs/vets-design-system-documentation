---
layout: default
title: Color palette
---

# Color palette

<div class="site-showcase">
  <h2 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4" id="base">Base colors</h2>
  <div class="vads-l-row">
    {% for item in site.data.colors.primary %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h2 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4" id="grayscale">Grayscale</h2>
  <div class="vads-l-row">
    {% for item in site.data.colors.grayscale %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h2 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4" id="tertiary">Tertiary colors</h2>
  <div class="vads-l-row">
    {% for item in site.data.colors.tertiary %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h2 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4" id="hub">Hub colors</h2>
  <p>Hub colors are only to be used on VA.gov benefit hubs.</p>
  <div class="vads-l-row">
    {% for item in site.data.colors.hub %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>
</div>
