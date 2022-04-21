---
layout: default
title: Flexbox grid
tags: Columns, Nesting grids, Layout grid
anchors:
  - anchor: Grid elements
  - anchor: Auto-sizing columns
  - anchor: Fixed columns
  - anchor: How to nest grids
  - anchor: Responsive grid
---

# Flexbox grid

<div class="va-introtext" markdown="1">
  The flexbox grid is another option for creating grid-based layouts with the additional features that flexbox provides. You can apply more flexbox properties by using the [flexbox utility](../utilities/flexbox.html).
</div>

{% include _site-on-this-page.html %}

## Grid elements

In addition to the Flexbox grid, Formation uses a 12-column, responsive, flexbox grid to provide structure and align content.

The grid consists of three distinct pieces:

- **Container**. There are two types of containers. The standard container, using the class name `vads-l-grid-container`, centers the content and provides a max width of `1000px`. To use a grid container that uses the full width of the page, use `vads-l-grid-container--full` instead.
- **Row**: Enables the flexbox layout.
- **Columns**: By default, columns will automatically adjust to evenly fit into a row. Using the responsive prefixes, they can collapse into different lockups at different breakpoints in order provide flexibility in the design across different viewports. There are a maximum of 12 columns in each row.

Unlike the [float grid](grid.html), you will need to use the [padding utility](../utilities/padding.html) and/or the [margin utility](../utilities/margins.html) in to provide column spacing. This is intentional and it allows the grid to accept more design options than the standard float grid.

## Auto-sizing columns

Columns without a set width will automatically layout with equal widths. For example, below are four instances of `vads-l-col` which are each automatically 25% wide. The columns will automatically wrap when they don't fit a single row.

<div class="site-showcase">
{% include_relative html/flexbox-grid-basic.html %}
</div>

{% include snippet.html content='html/flexbox-grid-basic.html' %}

## Fixed columns

Column widths can be set using a modifier value on the `vads-l-col` class, such as `vads-l-col--3`. The number at the end of the class name represents the number of columns out of a 12-column grid. The total of those numbers in any `vads-l-row` should equal 12. If the total is more than 12, the grid will collapse into separate rows.

<div class="site-showcase">
{% include_relative html/flexbox-grid-basic2.html %}
</div>

{% include snippet.html content='html/flexbox-grid-basic2.html' %}

## How to nest grids

The flexbox grid can be easily nested inside other flexbox grid columns using both [padding utilities](../utilities/padding) and [margin utilities](../utilities/margins). If the grid column has a padding utility applied, use the same value of that padding utility on a negative margin left and right utility placed in the grid row.

In this example, we have `vads-u-padding--2p5` applied to each grid column, so we use `vads-u-margin-x--neg2p5` on the grid row inside the grid column.

<div class="site-showcase">
{% include_relative html/nesting-grids.html %}
</div>

{% include snippet.html content='html/nesting-grids.html' %}

## Responsive grid

Each column class can include a breakpoint prefix that allows changing the column widths at different breakpoints.

{% include iframe-preview.html src="html/flexbox-grid-responsive-iframe" new_tab="true" title="Visibility" height=400 %}

{% include snippet.html content='html/flexbox-grid-responsive.html' %}

{% include _breakpoint-names.html %}