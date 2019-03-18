---
layout: default
title: Line height
---

# Line height

<div class="va-introtext" markdown="1">
Change the line height of text. Measure classes include [responsive prefixes](#responsive-prefixes).
</div>

<div class="site-c-showcase">
  <div class="vads-l-row">
    {% for item in site.data.line-height.line_heights %}
      <div class="site-c-showcase__col vads-l-col--12 {% if forloop.index == 1 %}vads-u-border-top--0{% endif %}">
        <div class="vads-u-display--flex vads-u-justify-content--space-between">
          <code class="code">.vads-u-line-height--{{ item.name }}</code>
          <span class="site-c-utility-value">{{ item.value }}</span>
        </div>

        <div class="vads-u-display--flex vads-u-align-items--center vads-u-border-top--1px vads-u-border-color--gray-lightest vads-u-margin-top--3">
          <p class="vads-u-line-height--{{ item.name }} vads-u-measure--1">To fulfill President Lincoln's promise “To care for him who shall have borne the battle, and for his widow, and his orphan” by serving and honoring the men and women who are America’s Veterans.</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

### Example

```html
<div class="medium-screen:vads-u-line-height--2 large-screen:vads-u-line-height--5">
```
{% include _breakpoint-names.html %}