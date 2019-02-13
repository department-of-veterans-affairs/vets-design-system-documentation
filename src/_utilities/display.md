---
layout: default
sub_section: display
title: Display
anchors:
  - anchor: Responsive prefixes
---

# Display

<div class="va-introtext">
Change the display property of an element.
</div>

<div class="site-c-showcase">
{% include_relative html/display.html %}
</div>

{% include snippet.html content='html/display.html' %}

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