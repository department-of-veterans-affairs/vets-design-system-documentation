---
layout: default
title: Float grid
anchors:
  - anchor: Grid examples
  - anchor: Implementation
---

# Float grid

<div class="va-introtext" markdown="1">
  The float grid is the grid provided by the U.S. Web Design System v1. For a grid that offers more flexibility, see the [flexbox grid](flexbox-grid.html).
</div>

{% include _site-on-this-page.html %}

## Grid examples

<div class="site-showcase">
{% include_relative html/grid.html %}
</div>

{% include snippet.html content='html/grid.html' %}

## Implementation

To use the grid, wrap each grid row in a block-level element (e.g. <section>, <div>, etc...) with the usa-grid class. To use a grid without padding on the right and left, use the usa-grid-full class instead.

Each grid item is written semantically by its width. For example: usa-width-one-half = 1/2 grid item, usa-width-two-thirds = 2/3 grid item.

Medium breakpoints are used for 1/6 and 1/12 grid items, which both transform into a 1/3 grid item at medium screen sizes.

All grid items are full-width at small screen sizes.

### Accessibility

- Low-vision users should be able to increase the size of the text by up to 200 percent without breaking the layout.

### Usability

#### When to use

- Almost always use a grid layout — visitors can read more quickly on pages that use grids. Choose a single grid system for your entire site.

#### When to consider something else

- Avoid mixing this grid and other grid systems.

#### Guidance

- Choose a 12-column grid with flexible column widths and fixed gutters. The width of the padding on the left and right edge of the grid depends on device size.
- Avoid text lines longer than 75 characters. Place text in narrower grid boxes to keep text lines from becoming too wide.

