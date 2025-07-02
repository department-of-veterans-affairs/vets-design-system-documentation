---
layout: documentation
title: Spacing units
intro-text: Spacing units are based on multiples of 8 to maintain a consistent rhythm when applied to margins, padding, and other dimensions.
tags: Grid, Spacing tokens
---

## Why multiples of 8?

The number 8 is easily broken down into smaller measurements before it approaches sub-pixel units. Additionally, many popular screen sizes are also divisible by 8.

- [Read more about the 8-point grid](https://spec.fm/specifics/8-pt-grid)

## Spacing tokens

The VA follows the USWDS spacing unit tokens and then adds additional semantic tokens.

### Primitive

{% assign spacing_primitive = site.data.tokens.vads-spacing-primitive %}
{% include spacing-tokens.html 
    spacing=spacing_primitive 
    type="primitive" 
%}

### Semantic

{% assign spacing_semantic = site.data.tokens.vads-spacing-semantic %}
{% include spacing-tokens.html 
    spacing=spacing_semantic 
    type="semantic"
%}

## Using the spacing units

In order to keep spacing consistent throughout VA.gov, it is recommended you favor using the unit tokens instead of hard coding pixels (or relative units) for margins and padding.

In order to access the unit tokens in your project, you will need to import the [variables file](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/css-library/dist/tokens/css/variables.css) into your project. [Here is how this site is doing that](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/assets/stylesheets/application.scss).

There are two ways of using the spacing tokens in your code.

### Output CSS as REM units

```css
.foo {
  margin: units(5);
  padding: units(2.5);  
}
```

will compile to:
```css
.foo {
  margin: 4rem;
  padding: 2rem;
}
```

### Output CSS as PX units

```css
.foo {
  margin: units-px(5);
  padding: units-px(2.5);  
}
```

will compile to:
```css
.foo {
  margin: 40px;
  padding: 20px;
}
```

