---
layout: default
index: true
title: Roadmap
---

# Roadmap

<div class="va-introtext" markdown="1">
  Here you can see a roadmap of the Design System team's planned work
</div>


## In Progress

<ul class="usa-accordion" data-multiselectable="true">
{% for objective in site.data.roadmap.current %}
  <li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="{{ objective.title }}">
      {{ objective.title }}
    </button>
    <div id="{{ objective.title }}" class="usa-accordion-content">
      {{ objective.description | markdownify }}
    </div>
  </li>
{% endfor %}
</ul>


## Future

<ul class="usa-accordion" data-multiselectable="true">
{% for objective in site.data.roadmap.future %}
  <li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="{{ objective.title }}">
      {{ objective.title }}
    </button>
    <div id="{{ objective.title }}" class="usa-accordion-content">
      {{ objective.description | markdownify }}
    </div>
  </li>
{% endfor %}
</ul>
