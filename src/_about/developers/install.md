---
layout: documentation
title: Install
status: dont-use-deprecated
permalink: /about/developers/install
has-parent: /about/developers/
intro-text: "New guidance in coming soon. With the deprecation of Formation and the adoption off CSS Library the design system team is in the process of creating and providing guidance on using CSS Library across different projects."
anchors:
  - anchor: Install Formation into your project
  - anchor: Load the Web Component library
---

## Install Formation into your project

How you implement VA Design System (VADS) styles into your project depends on how your project is structured and your preferences. The easiest way to get started is by using `npm`. For a prototype where you need the Design System styles, you can add a `<link>` tag with the `href` set to `https://unpkg.com/@department-of-veterans-affairs/formation/dist/formation.min.css`.

We recommend using `npm` to install the formation package into your project.

```bash
$ npm install --save @department-of-veterans-affairs/formation
```

This line installs the Design System as a dependency. You can use the compiled files found in the `node_modules/@department-of-veterans-affairs/formation/dist` directory.

If you would like to use the un-compiled Sass files instead, you can find those in the `node_modules/@department-of-veterans-affairs/formation/sass` directory.

If you prefer to change the location of the `fonts/` and `img/` directories relative to `formation.min.css`, set the following variables in your project:

```
$formation-asset-path: '../assets';
$formation-image-path: "#{$formation-asset-path}/img";
$formation-font-path: "#{$formation-asset-path}/fonts";
```

The example above is what is used on VA.gov, but you can customize this for your project.

### Sass functions, variables, and interactive components

If you would like to use the Sass functions, such as for [spacing]({{ site.baseurl }}/foundation/spacing-units#using-the-spacing-tokens), and variables in your project, you can import the files from your project scss. This documentation site imports the Formation Sass files in its [application.scss](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/assets/stylesheets/application.scss#L5).

## Load the Web Component library

The Design System team is working on developing a library of reusable Web Components that can be used on any HTML page or React application.

This is already handled for the `vets-website` repository. To get our Web Component library set up in a new project, here is what we recommend:

1. Add the `component-library` dependency to your node/yarn project using `yarn add @department-of-veterans-affairs/component-library`.
1. Import the global CSS file which contains important CSS variables:
```js
import "@department-of-veterans-affairs/component-library/dist/main.css";
```
1. Import the `defineCustomElements` JS function (`applyPolyfills` is only necessary if you wish to support older browsers such as IE11):
```js
import {
  applyPolyfills,
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library";
```
1. In the same JS file, call the `defineCustomElements` function, optionally chained after a call to `applyPolyfills`:
```js
applyPolyfills().then(() => {
  defineCustomElements();
});
```
1. Make sure this script gets loaded on the HTML page - preferably near the top of the document in the `<head>` tag.
1. Copy the icon sprite.svg file found in `@department-of-veterans-affairs/component-library/dist/img/sprite.svg` to you public asset directory. By default icons will use `/img/sprite.svg` as the path, if you need to use a different path you can set the following configuration (This must be done before icons are rendered on the page):
```js
// Import the the init function from the web-components package
import { initIconSpriteLocation } from '@department-of-veterans-affairs/web-components';

// Initialize the global sprite path configuration
initIconSpriteLocation();
// Set the sprite path globally
globalThis.setVaIconSpriteLocation('[custom sprite path]');
```
*The sprite.svg path must be loaded from the same origin as you application, cannot traverse the file system using `..` and must be a `.svg` file.
