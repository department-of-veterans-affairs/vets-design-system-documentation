---
layout: default
title: For developers
tags: Installation, CSS, CSS architecture
anchors:
  - anchor: Installation
  - anchor: CSS
  - anchor: Implementing design work
slug: developers
---

# Documentation for developers

<div class="va-introtext">
How to install and use VA Design System styles and components with your project.
</div>

## Installation

**If you are working in the vets-website repository**, you can skip straight to the [developer documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/). Otherwise, proceed below.

How you implement VADS styles into your project depends on how your project is structured and your preferences. The easiest way to get started is by using `npm`. We will have a direct download available in the future.


### Install Formation into your project

We recommend using `npm` to install the formation package into your project.

```bash
$ npm install --save @department-of-veterans-affairs/formation
```

This line installs Formation as a dependency. You can use the compiled files found in the `node_modules/@department-of-veterans-affairs/formation/dist` directory.

If you would like to use the un-compiled Sass files instead, you can find those in the `node_modules/@department-of-veterans-affairs/formation/sass` directory.

If you prefer to change the location of the `fonts/` and `img/` directories relative to `formation.min.css`, set the following variables in your project:

```
$formation-asset-path: '../assets';
$formation-image-path: "#{$formation-asset-path}/img";
$formation-font-path: "#{$formation-asset-path}/fonts";
```

The example above is what is used on VA.gov, but you can customize this for your project.

### Sass functions, variables, and interactive components

If you would like to use the Sass functions, such as for [spacing](../design/spacing-units.html#using-the-spacing-tokens), and variables in your project, you can import the files from your project scss. This documentation site imports Formation’s Sass files in its [application.scss](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/src/assets/stylesheets/application.scss#L5).

## CSS

When naming components, be sure to use Formation’s [naming conventions](naming).

### Searchable selectors

Many of the features in Sass make it easy to use shorthand to reduce repetitive typing and write cleaner .scss files. However, this makes using search features in GitHub or text editors much more difficult because it is not always clear how the shorthand was written; finding the right query requires guesswork.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Write out the full name of each selector.

```css
.alert {
}

.alert--warning {
}

.alert--error {
}
```
</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
Don’t use Sass shorthand features, such as nesting with ampersands often used with BEM syntax.

```scss
.alert {
  &--warning {
  }
  &--error {
  }
}
```
</div>
</div>
</div>

### Modifying components

Sometimes you will need to modify certain default properties of a component depending on how it scaffolds with nearby elements. Use [utilites](../utilities) instead of writing new CSS.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Use utility classes to override default properties. This allows components to maintain a well-defined baseline of properties.

#### HTML
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

#### HTML
```html
<div class="a-container">
  <div class="a-component"></div>
</div>
```
#### CSS
```css
.a-container .a-component {
  margin-top: 24px;
}
```
</div>
</div>
</div>

## Implementing design work

When a designer hands off work, it is vital to work through potential implications that design may have on Formation. Are there any new variations on components? Are there any new components not present on this site? For more on that process, read about how to contribute.

In general, some rules for implementing design work include:
- Use [spacing units](../design/spacing-units) instead of hard-coding pixel values for margins and padding
- Use Sass [variables for colors](../design/color-palette) instead of hex codes
- Discuss reusability of new design components and where is the most appropriate home for CSS and JS
- Use the Formation [naming convention](naming)
- Do not use ID selectors


