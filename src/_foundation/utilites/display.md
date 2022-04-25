---
layout: default
permalink: /foundation/utilities/display
has-parent: /foundation/utilities
title: Display
---

# Display

<div class="va-introtext">
Change the display property of an element.
</div>

<div class="site-showcase">
  {%
    include _showcase-header.html
    heading_level=2
    header="Display"
    responsive=true
    css_property="display"
  %}
  <div class="vads-l-row">
    {% for item in site.data.display.display %}
      <div class="vads-l-col--12 site-showcase__col vads-u-display--flex vads-u-flex-direction--column {% if forloop.index == 1 %}vads-u-border-top--0{% endif %}">
        <div>
          <code class="code">.vads-u-display--{{ item.name }} </code>
        </div>
        <div>
          <p>{{ item.description }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

## Guidance

### Accessibility

- Using code `vads-u-display--none` and its responsive prefix will hide that element from screen readers. Only use this property if you are choosing to hide from **all** users.
- If you want to hide something visual but still make it available to screen readers, consider using the [visibility utility](visibility.html) instead.

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

### Example

```html
<div class="vads-u-display--none large-screen:vads-u-display--block">
```
{% include _breakpoint-names.html %}