---
layout: default
title: Breakpoints
tags: media queries, media, responsive
anchors:
  - anchor: Names and values
  - anchor: Sass mixins
---

# Breakpoints

<p class="va-introtext">
  VA.gov uses media queries to support responsive design. It is constructed using a mobile-first approach, meaning that styles are written by default for mobile devices and scaled up for larger viewports.
</p>

{% include _site-on-this-page.html %}

## Names and values

<va-alert status="info" slim>
  <p class="vads-u-margin-y--0">The VA Design System is currently transitioning to breakpoint names that more closely align with USWDS. The table below lists the original VADS breakpoint names and its new corresponding name.</p>
</va-alert>

There are six key breakpoints where the design of any page layout, utility, or component may change.

{% include _breakpoint-names.html hide_link=true %}

### What if you need to create a different breakpoint?

In some cases, you will need to have a breakpoint that is not included in the core set. This should only be done sparingly and only in cases where the design element reaches a stress point that cannot resolved through modifying the design. This breakpoint should be declared locally within a .scss partial and named to reflect the element it pertains.

```scss
$nav-width: 702px;

.theoretical-nav {
  //Some styles

  @include media($nav-width) {
    //Some styles
  }
}
```

## Sass mixins

The CSS library includes the `@media` mixin to make it easier for developers to create breakpoints in their styles.

```scss
@include media($medium-screen) {
  //Some styles
}
```

This is will compile to:

```scss
@media screen and (min-width: 768px) {
  //Some styles
}
```

### Using the Sass mixin

You may place the `@media` mixin inside of a selector or places selectors inside of a `@media` mixin, whichever option makes the code you are writing easiest for other developers to understand. Always start with the smaller breakpoint and work your way up to larger ones.

```scss
.some-component {
  margin: units(1);

  @include media($medium-screen) {
    margin: units(2);
  }

  @include media($large-screen) {
    margin: units(3);
  }
}
```
