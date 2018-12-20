---
layout: default
sub_section: visibility
title: Visibility
---

<div class="usa-alert usa-alert-warning vads-u-margin-top--0 vads-u-margin-bottom--3">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Draft</h3>
    <p>Use this item with caution. There might be some revisions as we gather feedback.</p>
  </div>
</div>

# Visibilty

<div class="va-introtext" markdown="1">
Change the visibility characteristics of an element
</div>

## Available utility classes
- `vads-u-visibility--hidden` - Hides an element while leaving the space where it would have been
- `vads-u-visibility--visible`
- `vads-u-visibility--screen-reader` - Hides an element visually, but can still be read by a screen reader.

## Guidance

- If you want to hide an element visually and from screen readers as well as discard the space where it would have been, consider using a [display utility](display.html) instead.


## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

{% include iframe-preview.html src="html/visibility.html" title="Visibility" height=400 %}

{% include snippet.html content='html/visibility.html' %}

### Example

```html
<div class="vads-u-visibility--hidden large-screen:vads-u-visibility--visible">
```
{% include _breakpoint-names.html %}