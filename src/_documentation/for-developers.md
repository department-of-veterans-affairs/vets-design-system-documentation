---
layout: default
title: For developers
tags: Installation, CSS, CSS architecture
anchors:
  - anchor: Using the Design System
  - anchor: Contributing to the Design System
slug: developers
---

# Documentation for developers

<div class="va-introtext">
How to install and use VA Design System styles and components with your project.
</div>

## Using the Design System

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

#### Sass functions, variables, and interactive components

If you would like to use the Sass functions, such as for [spacing](../design/spacing-units.html#using-the-spacing-tokens), and variables in your project, you can import the files from your project scss. This documentation site imports Formation’s Sass files in its [application.scss](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/src/assets/stylesheets/application.scss#L5).

### Load the Web Component library

The Design System team is working on developing a library of reusable Web Components that can be used on any HTML page or React application.

This is already handled for the `vets-website` repository. To get our Web Component library set up in a new project, here is what we recommend:

1. Add the `web-components` dependency to your node/yarn project using `yarn add web-components@https://github.com/department-of-veterans-affairs/component-library.git#wc-vX.Y.Z`. Replace `X.Y.Z` with the [release number you want from the 'Releases' page](https://github.com/department-of-veterans-affairs/component-library/releases).
1. Import the global CSS file which contains important CSS variables:
  ```js
  import 'web-components/dist/component-library/component-library.css';
  ```
1. Import the `defineCustomElements` JS function (`applyPolyfills` is only necessary if you wish to support older browsers such as IE11):
  ```js
  import { applyPolyfills, defineCustomElements } from 'web-components/loader';
  ```
1. In the same JS file, call the `defineCustomElements` function, optionally chained after a call to `applyPolyfills`:
  ```js
  applyPolyfills().then(() => {
      defineCustomElements();
  });
  ```
1. Make sure this script gets loaded on the HTML page - preferably near the top of the document in the `<head>` tag.
1. Any Web Components from the Design System (identified by tags prefixed with `<va-*>`) should now work as expected on your page.


### CSS

When naming components, be sure to use Formation’s [naming conventions](naming).

#### Searchable selectors

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

#### Modifying components

Sometimes you will need to modify certain default properties of a component depending on how it scaffolds with nearby elements. Use [utilites](../utilities) instead of writing new CSS.

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

### Implementing design work

When a designer hands off work, it is vital to work through potential implications that design may have on Formation. Are there any new variations on components? Are there any new components not present on this site? For more on that process, read about how to contribute.

In general, some rules for implementing design work include:
- Use [spacing units](../design/spacing-units) instead of hard-coding pixel values for margins and padding
- Use Sass [variables for colors](../design/color-palette) instead of hex codes
- Discuss reusability of new design components and where is the most appropriate home for CSS and JS
- Use the Formation [naming convention](naming)
- Do not use ID selectors

## Contributing to the Design System

The Design System currently has an ["Experimental" Design System](../experimental-design) with less oversight which VFS application teams can contribute to. In order for a component to be included in the _official_ Design System, here is what we expect to see:

1. Research on why this new addition is useful/necessary.
1. Guidance on how to use it.
1. 90%+ test coverage
1. Any PR should be manageable in size (less than ~500 lines of code)
