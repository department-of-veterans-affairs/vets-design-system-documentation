---
layout: default
sub_section: flexbox
title: Flexbox
---

<div class="usa-alert usa-alert-error vads-u-margin-top--0 vads-u-margin-bottom--3">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Proposal</h3>
    <p>This utility has not been accepted into the codebase. This page is for reference only. Do not use this utility.</p>
  </div>
</div>

# Flexbox

<div class="va-introtext" markdown="1">
The flexbox utilities provide all of the properties for flex containers and some for flex items. All are responsive. Read about [responsive prefixes](#responsive-prefixes).
</div>

Flexbox requires two components,  a *flex container* and *flex items*. Any first siblings in a flex container becomes a flex item. It is not possible for any of those siblings to not become a flex item.

## Flex

The shorthand property, `flex` encompasses three properties: `flex-grow`, `flex-shrink`, and `flex-basis`, respectively. There are several options for creating ratios for flex items. However, these ratios are imprecise, so should not be used if specific widths are desired.

<div class="site-c-showcase">
{% include_relative html/flex.html %}
</div>

{% include snippet.html content='html/flex.html' %}

### Guidance

- `vads-u-flex--1` and `vads-u-flex--fill` can be used interchangably. Both of these will fill the space of the flex container  with equal width boxes.
- `vads-u-flex--auto` will make it’s element’s width equal to that of the content within it.

## Flex Direction

Flex direction sets the main-axis, which defines the direction flex items are placed in the flex container. Unless `flex-wrap` is set to `wrap`, flexbox is a single-direction layout concept, where flex items are primarily laying out either in horizontal rows or vertical columns.

**Available values**

- `row` (default): left to right in `ltr`; right to left in `rtl`
- `row-reverse`: right to left in `ltr`; left to right in `rtl`
- `column`: same as row but top to bottom
- `column-reverse`: same as row-reverse but bottom to top

<div class="site-c-showcase">
{% include_relative html/flex-direction.html %}
</div>

{% include snippet.html content='html/flex-direction.html' %}

## Flex Wrap

The [Flexbox grid](../layout/flexbox-grid.html) is set to `wrap` by default, but flexbox will otherwise place flex items into a single row. **Note:** If the number of grid columns exceeds 12 and the grid column is set to `nowrap`, the grid columns may extend off the page.

<div class="site-c-showcase">
{% include_relative html/flex-wrap.html %}
</div>

{% include snippet.html content='html/flex-wrap.html' %}

## Align items

This defines for how flex items are arranged across the row.

**Available values**

- `stretch` (default): flex items stretch to fill the container
- `flex-start`: flex items are aligned across their top edge
- `flex-end`: flex items are aligned across their bottom edge
- `center`: flex items are centered across the row
- `baseline`: flex items are aligned to their baseline

<div class="site-c-showcase">
{% include_relative html/align-items.html %}
</div>

{% include snippet.html content='html/align-items.html' %}

## Justify content

This property helps distribute space left over.

**Available values**

- `flex-start` (default): flex items are packed toward the start of the flex container
- `flex-end`: flex items are packed toward to end of the flex container
- `center`: flex items are packed in the center of the flex container
- `space-between`: flex items are evenly distributed in the line with the first flex item start of the flex container and the last item at the end of the flex container
- `space-around`: flex items are evenly distributed across the row with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- `space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

<div class="site-c-showcase">
{% include_relative html/justify-content.html%}
</div>

{% include snippet.html content='html/justify-content.html' %}


## Order

By default, flex items are laid out in the source order. The order property controls the order in which flex items appear regardless of the source order.

This utility provides ordering for `1` thru `4` in addition to `initial`, `first`, and `last`.

<div class="site-c-showcase">
{% include_relative html/order.html%}
</div>

{% include snippet.html content='html/order.html' %}

## Responsive prefixes

Add a responsive breakpoint prefix separated with a : to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

### Example

```html
<div class="vads-u-justify-content--center large-screen:vads-u-justify-content--space-between">
```
{% include _breakpoint-names.html %}
