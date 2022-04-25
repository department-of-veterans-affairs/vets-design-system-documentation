---
layout: default
permalink: /foundation/utilities/visibility
has-parent: /foundation/utilities/
title: Visibility
---

# Visibilty

<div class="va-introtext" markdown="1">
Change the visibility characteristics of an element
</div>

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=2
    header="Visibility"
    responsive=true
    css_property="visibility"
  %}
  <div class="vads-l-row">
    {% for item in site.data.visibility.visibility %}
      <div class="vads-l-col--12 site-showcase__col vads-u-display--flex vads-u-flex-direction--column {% if forloop.index == 1 %}vads-u-border-top--0{% endif %}">
        <div>
          <code class="code">.vads-u-visibility--{{ item.name }} </code>
        </div>
        <div>
          <p>{{ item.description }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

## Guidance

- If you want to hide an element visually and from screen readers as well as discard the space where it would have been, consider using a [display utility](display.html) instead.


## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

{% include iframe-preview.html src="html/visibility-iframe.html" new_tab="true" title="Visibility" height=400 %}

{% include snippet.html content='html/visibility.html' %}

### Example

```html
<div class="vads-u-visibility--hidden large-screen:vads-u-visibility--visible">
```
{% include _breakpoint-names.html %}