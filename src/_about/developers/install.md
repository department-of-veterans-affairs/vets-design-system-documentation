---
layout: documentation
title: Install
permalink: /about/developers/install
has-parent: /about/developers/
intro-text: "The VA Design System has two main packages that can be used to build custom applications: the CSS-Library and the Web Component library. The CSS-Library provides a set of stylesheets, tokens, and utilities. The Web Component library provides a set of reusable Web Components."
anchors:
  - anchor: Install the CSS-Library into your project
  - anchor: Load the Web Component library
  - anchor: Integration Examples
---

## Install the CSS-Library into your project

How you implement VA Design System (VADS) into your project depends on how your project is structured and your preferences. The easiest way to get started is by using yarn to install the CSS-Library package into your project:

```bash
yarn add @department-of-veterans-affairs/css-library
```

Once the package is installed, import the main CSS files into your project:

```js
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/core";
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/uswds-typography";
@import "@department-of-veterans-affairs/css-library/dist/stylesheets/utilities";
```

Fonts will need to be loaded from the CSS-Library `fonts/` directory. [For example](https://github.com/department-of-veterans-affairs/component-library/blob/add-react-vite-ts-example/packages/integration-examples/vite-react-typescript/src/fonts/font-face.scss):

```scss
$css-library-font-path: "../../node_modules/@department-of-veterans-affairs/css-library/dist/fonts";

/* latin - Source Sans Pro Regular */
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  src:
    local("Source Sans Pro Regular"),
    local("SourceSansPro-Regular"),
    url('#{$css-library-font-path}/sourcesanspro-regular-webfont.woff2') format("woff2"),
    url('#{$css-library-font-path}/sourcesanspro-regular-webfont.woff') format("woff");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

[... other font-face declarations ...]
```

### Tokens, utilities, and modules

The CSS-Library provides a set of tokens, utilities, and modules that can be used in your project.

#### Utilities

The utility classes are helpful, single-property classes that can provide more flexibility for inline styling. You can review the [utilities](https://design.va.gov/foundation/utilities/) in the design system documentation for more information.

#### Tokens

The tokens are variables that can be used to style your project inline or in your stylesheets. Review the [tokens](https://design.va.gov/foundation/design-tokens) in the design system documentation for more information.

The CSS-Library provides design tokens in a number of formats: CSS, SCSS, and JSON. Review the available [token formats in the CSS-Library repository](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/css-library/dist/tokens).

We recommend using the CSS custom properties format by loading the CSS file globally just once and using the custom properties in the stylesheets across your application like this:

```html
<link rel="stylesheet" href="@department-of-veterans-affairs/css-library/dist/tokens/css/variables.css">
```
<br />
```css
.your-class {
  background-color: var(--vads-color-base);
}
```

#### Modules

While many of the original modules have been converted to web components, some are still available in the CSS-Library. If there is a comparable web component available in the Web Component library, we recommend using that instead.

If you would like to use a module stylesheet, reference this documentation site which [imports the CSS Library Sass file modules into the application.scss stylesheet](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/main/src/assets/stylesheets/application.scss).

## Load the Web Component library

The Design System team has developed a library of reusable Web Components that can be used on any HTML page or React application.

This is already handled for the `vets-website` repository. To get the Web Component library set up in a new project, here is what we recommend:

- Add the `component-library` dependency to your node/yarn project: 

```bash
yarn add @department-of-veterans-affairs/component-library
```

- Import the global CSS file:

```js
import "@department-of-veterans-affairs/component-library/dist/main.css";
```

- Import the `defineCustomElements` JS function:

```js
import {
  applyPolyfills, // Only necessary if you wish to support older browsers such as IE11
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library";
```

- In the same JS file, call the `defineCustomElements` function, optionally chained after a call to `applyPolyfills`:

```js
applyPolyfills().then(() => {
  defineCustomElements();
});
```

### Icons Sprite Sheet

If you're using a component that requires the icons sprite sheet (e.g. `va-icon`), the sprite sheet must be loaded from the same origin as your application. By default, the sprite sheet is loaded inside of the components from the `/img/sprite.svg` path.

The sprite sheet is included in the `@department-of-veterans-affairs/component-library` package at `/dist/img/sprite.svg`. We recommend adding that file to your project as part of your build process to ensure you're receiving the most recent version of the sprite sheet and that it's available at the correct path.

If you need to override the default sprite sheet path from `/img/sprite.svg` to a different path within your project, you can do so by calling `initIconSpriteLocation` as part of the component library initialization and setting the sprite sheet path using `globalThis.setVaIconSpriteLocation`:

```js
import { initIconSpriteLocation  } from '@department-of-veterans-affairs/web-components';
import {
  applyPolyfills,
  defineCustomElements,
} from '@department-of-veterans-affairs/component-library/src/main';

applyPolyfills().then(() => {
  defineCustomElements();
  initIconSpriteLocation();
  globalThis.setVaIconSpriteLocation('/your/path/to/sprite.svg');
});
```

## Integration Examples

This [integration-examples](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/integration-examples) directory contains examples of how to install the VA Design System into different frameworks and build tools outside of vets-website ([VA.gov](https://VA.gov)).

### Available Examples

- [Vite + React + TypeScript](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/integration-examples/vite-react-typescript#readme)
- [CodeSandbox](https://codesandbox.io/p/sandbox/suspicious-stonebraker-vzfzhw)
- [CodePen](https://codepen.io/jamigibbs-the-sans/pen/jEEdOmY)
