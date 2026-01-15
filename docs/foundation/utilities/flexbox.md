---
title: Flexbox
description: Flexbox utilities for controlling flex container and flex item properties.
sidebar_position: 5
---

# Flexbox

The flexbox utilities provide all of the properties for flex containers and some for flex items. All are responsive and complement the flexbox grid system.

**CSS Property:** Various flex properties
**Responsive:** Yes

## Core concepts

Flexbox requires two components: a **flex container** and **flex items**. First-level siblings in a flex container automatically become flex items.

## Flex (shorthand)

The `flex` property encompasses `flex-grow`, `flex-shrink`, and `flex-basis`.

| Class | Description |
|-------|-------------|
| `.vads-u-flex--1` | Proportional sizing (1) |
| `.vads-u-flex--2` | Proportional sizing (2) |
| `.vads-u-flex--3` | Proportional sizing (3) |
| `.vads-u-flex--4` | Proportional sizing (4) |
| `.vads-u-flex--fill` | Distributes equal width across flex items |
| `.vads-u-flex--auto` | Sizes based on content width |

:::note
These ratios are imprecise and should not be used if specific widths are desired.
:::

## Flex direction

Controls the main axis and item placement.

| Class | Direction |
|-------|-----------|
| `.vads-u-flex-direction--row` | Left to right (default) |
| `.vads-u-flex-direction--row-reverse` | Right to left |
| `.vads-u-flex-direction--column` | Top to bottom |
| `.vads-u-flex-direction--column-reverse` | Bottom to top |

## Flex wrap

Determines item wrapping behavior.

| Class | Behavior |
|-------|----------|
| `.vads-u-flex-wrap--nowrap` | No wrapping (default) |
| `.vads-u-flex-wrap--wrap` | Wrap to next line |
| `.vads-u-flex-wrap--wrap-reverse` | Wrap in reverse |

## Align items

Arranges items across the cross axis.

| Class | Alignment |
|-------|-----------|
| `.vads-u-align-items--stretch` | Stretch to fill (default) |
| `.vads-u-align-items--flex-start` | Align to start |
| `.vads-u-align-items--flex-end` | Align to end |
| `.vads-u-align-items--center` | Center alignment |
| `.vads-u-align-items--baseline` | Align to baseline |

## Justify content

Distributes space along the main axis.

| Class | Distribution |
|-------|--------------|
| `.vads-u-justify-content--flex-start` | Pack at start (default) |
| `.vads-u-justify-content--flex-end` | Pack at end |
| `.vads-u-justify-content--center` | Center items |
| `.vads-u-justify-content--space-between` | Space between items |
| `.vads-u-justify-content--space-around` | Space around items |
| `.vads-u-justify-content--space-evenly` | Even space distribution |

## Align content

Handles flex container lines with extra cross-axis space.

| Class | Alignment |
|-------|-----------|
| `.vads-u-align-content--flex-start` | Pack at start |
| `.vads-u-align-content--flex-end` | Pack at end |
| `.vads-u-align-content--center` | Center lines |
| `.vads-u-align-content--space-between` | Space between lines |
| `.vads-u-align-content--space-around` | Space around lines |
| `.vads-u-align-content--stretch` | Stretch to fill (default) |

## Order

Controls visual ordering independent of source order.

| Class | Order |
|-------|-------|
| `.vads-u-order--1` | Order 1 |
| `.vads-u-order--2` | Order 2 |
| `.vads-u-order--3` | Order 3 |
| `.vads-u-order--4` | Order 4 |
| `.vads-u-order--first` | First position |
| `.vads-u-order--last` | Last position |
| `.vads-u-order--initial` | Initial order |

## Responsive usage

Use breakpoint prefixes for responsive flexbox:

```html
<div class="vads-u-display--flex vads-u-flex-direction--column desktop-lg:vads-u-flex-direction--row">
  Column on mobile, row on desktop-lg
</div>
```

Available breakpoints: `mobile`, `mobile-lg`, `tablet`, `medium-screen`, `desktop`, `desktop-lg`, `widescreen`
