---
layout: default
permalink: /foundation/utilities/position
has-parent: /foundation/utilities/
title: Position
---

# Position

<div class="va-introtext" markdown="1">
Change the positioning of text or elements. Position classes include [responsive prefixes](#responsive-prefixes).
</div>

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=2
    header="Position"
    responsive=true
    css_property="position"
  %}
  <div class="vads-l-row">
    {% for item in site.data.position.position %}
      <div class="vads-l-col--12 site-showcase__col vads-u-display--flex vads-u-flex-direction--column {% if forloop.index == 1 %}vads-u-border-top--0{% endif %}">
        <div>
          <code class="code">.vads-u-position--{{ item.name }} </code>
        </div>
        <div>
          <p>{{ item.description }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

{% include snippet.html content='html/position.html' %}

### Example

```html
<div class="vads-u-position--relative mobile:vads-u-position--absolute"></div>
```

{% include _breakpoint-names.html %}
