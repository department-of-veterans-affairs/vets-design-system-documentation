---
layout: documentation
title: Implementing design work
permalink: /about/developers/implementing-design-work
has-parent: /about/developers/
intro-text: When a designer hands off work, it is vital to work through potential implications that design may have on the Design System. 
anchors:
  - anchor: Implementation rules
  - anchor: Use design system utilities
---

Are there any new variations on components? Are there any new components not present on this site? For more on that process, read about [how to contribute]({{ site.baseurl }}/about/developers/contributing).

## Implementation rules

In general, some rules for implementing design work include:

- Use [spacing units]({{ site.baseurl }}/foundation/spacing-units) instead of hard-coding pixel values for margins and padding.
- Use Sass [variables for colors]({{ site.baseurl }}/foundation/color-palette) instead of hex codes.
- Discuss reusability of new design components and where is the most appropriate home for CSS and JS.
- Use the Formation [naming convention](naming).
- Do not use ID selectors

## Use design system utilities

Sometimes you will need to modify certain default properties of a component depending on how it scaffolds with nearby elements. Use [utilites]({{ site.baseurl }}/foundation/utilities) instead of writing new CSS.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Use utility classes to override default properties. This allows components to maintain a well-defined baseline of properties.

##### HTML
```html
<div class="a-container">
  <div class="a-component vads-u-margin-top--3"></div>
</div>
```
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
Don’t change CSS properties based on a container or other context. This makes baseline properties for components unclear.

##### HTML
```html
<div class="a-container">
  <div class="a-component"></div>
</div>
```
##### CSS
```css
.a-container .a-component {
  margin-top: 24px;
}
```
</div>
</div>
</div>