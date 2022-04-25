---
layout: default
title: Color palette
---

# Color palette

<div class="site-showcase">
  <h4 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4">Base colors</h4>
  <div class="vads-l-row">
    {% for item in site.data.colors.primary %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4">Grayscale</h4>
  <div class="vads-l-row">
    {% for item in site.data.colors.grayscale %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4">Tertiary colors</h4>
  <div class="vads-l-row">
    {% for item in site.data.colors.tertiary %}
      {% include color-palette-example.html
        name=item.name
        hex=item.hex
      %}
    {% endfor %}
  </div>

  <h4 class="vads-u-border-bottom--1px vads-u-border-color--gray-lighter vads-u-margin-bottom--4">Hub colors</h4>
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
