---
layout: default
title: For developers
tags: Installation, CSS, CSS architecture
anchors:
  - anchor: Using the Design System
  - anchor: Using Web Components
  - anchor: Implementing design work
  - anchor: Contributing to the Design System
  - anchor: Contributing experimental design code
  - anchor: Writing experimental design code
  - anchor: Sharing experimental design code
  - anchor: Using shared experimental designs
  - anchor: Ending the experiment
slug: developers
---

# Documentation for developers

<div class="va-introtext">
  How to install and use VA Design System styles and components with your project.
</div>

{% include _site-on-this-page.html %}

## Parts of the Design System
- [Formation](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation) is the name of the VA.gov design system styles
- [Component library](https://github.com/department-of-veterans-affairs/component-library)

## Using the Design System

**If you are working in the vets-website repository**, you can skip straight to the [developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/Frontend-developer-documentation.687931428.html). Otherwise, proceed below.

How you implement VADS styles into your project depends on how your project is structured and your preferences. The easiest way to get started is by using `npm`. For a prototype where you need the `formation` styles, you can add a `<link>` tag with the `href` set to `https://unpkg.com/@department-of-veterans-affairs/formation/dist/formation.min.css`.


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

If you would like to use the Sass functions, such as for [spacing]({{ site.baseurl }}/foundation/spacing-units#using-the-spacing-tokens), and variables in your project, you can import the files from your project scss. This documentation site imports Formation’s Sass files in its [application.scss](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/src/assets/stylesheets/application.scss#L5).

### Load the Web Component library

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

## Using Web Components

### What are Web Components
Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. We can create our new component called `<va-web-component>`, with its unique styling and functionality, and use it in any JavaScript framework or library. The fact that these components are framework agnostic, helps us future proof our component library.

Web Components consist of three parts:
* A custom HTML element
  * Where you register your own HTML tag
* The shadow DOM
  * This is a separate DOM node tree for your custom HTML elements that includes scoped CSS styles
* Templates and Slots
  * You write HTML templates that you can add to your HTML elements
  * You add slots to provide additional context within the component

### Vanilla JavaScript Applications

If the Design System web components will be used in a vanilla JavaScript application, you are ready to use them (identified by tags prefixed with `<va-*>`).

We make our best efforts to avoid creating web components with object or array properties in order to make them easier to use in static HTML pages.

### React Applications

If the Design System web components will be used in a React application, you are ready to use them unless:

- You must pass in a function, object or array to a web component's properties
- You must use custom events

**If your use case is listed above, you will have to use our web component bindings for React.** If you are not sure if you need to use a custom event, please refer to the web component's Storybook documentation to see its events and properties.

Bindings are component wrappers that allow our web components to work as first-class React components, allowing us to handle custom events and to pass in more than strings and numbers to a web component's properties. You will have to import each web component's bindings like you would with a React component.
```jsx
import { VaExampleComponent } from "@department-of-veterans-affairs/component-library/dist/react-bindings";

const exampleFunction = () => console.log("Hello, World!");

<VaExampleComponent exampleProp={exampleFunction} />
```

### Custom Events
Some of the Design System web components allow for custom events.

If you must use custom events and you're using JSX, you must prefix events with `on`. Given an event named `vaChange`, use `onVaChange`.

If you must use custom events and you're **not** using JSX, you must add an event listener using the event name as the event type. Given an event named `vaChange`, use: 
```js
const element = document.querySelector('va-example-component');
element.addEventListener('vaChange', event => { /* your listener */ })
```

The majority of our web components also fire a `component-library-analytics` event used to translate component library actions into analytics data layer events. The event handler for this event exists in `vets-website`.

### React and Web Components
**Note:** Please use our VA Design System Web Components where applicable in your projects. We maintain this component library to provide VA teams with an ecosystem of vetted and tested components.

While large portions of VA.gov are built via React applications, there are some teams that cannot import React directly into their projects and have to add work around hacks in order to use React components.

Due to these issues the Design System Team recommends using our Web Components on VA.gov applications and pages.

For easy identification, all of our Web Components begin with a `va-` prefix. For example, the Web Component version of our alert component is named `va-alert`.

Benefits include:
- Future proofing as Web Components can be imported into any JS Framework
- Consistent syntax across frameworks and projects
- Actively updated and maintained - we are deprecating most React components and they will not have the latest updates
- Performance and speed

The Design System Team has specific linting and migration rules in place to help ease in the transition from React to Web Components. We also encourage all developers use Design System Components in their applications instead of creating their own similar components. If our components do not meet your needs, we would love to hear about it. Please reach out to us in Slack or [submit a bug report](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=caw310&labels=vsp-design-system-team&template=bug_template.md&title=). If you are interested in contributing a new component to the design system, please review our [documentation about that process](contributing-to-the-design-system).

### How to migrate to Web Components
The Design System Team provides three ways to migrate specific React Components over to Web Components:
* **Manual** - There are too many changes to automate and a guide will need to be followed.
* **ESLint Rule** - In the `vets-website` repo there is a ESLint rule that informs you of the ability to convert from a React Component to a Web Component
* [**Migration Script**](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/README.md) - There is a script available to be used in the CLI when in the `vets-website` repo to convert the React Component to a Web Component.

Here is a list of each Web Component and the migration available:
* `va-accordion`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2127527996/Manual+Component+Migration+Guide)
* `va-additional-info`: [Migration Script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/transformers/additionalinfo.js)
* `va-alert`: [Migration Script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/transformers/alertbox.js)
* `va-alert-expandable`: N/A
* `va-back-to-top`: N/A
* `va-banner`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2051080448/Liquid+template+migration+guidance#va-banner)
* `va-breadcrumbs`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/eslint-plugin/lib/rules/prefer-web-component-library.js#L418)
* `va-button`: N/A
* `va-checkbox`: N/A
* `va-checkbox-group`: N/A
* `va-date`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2127527996/Manual+Component+Migration+Guide#Date-or-SimpleDate-to-va-date%3A)
* `va-date-text-input`: N/A
* `va-featured-content`: N/A
* `va-loading-indicator`: [Migration Script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/transformers/loadingindicator.js)
* `va-modal`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js#L421)
* `va-number-input`: N/A
* `va-on-this-page`: N/A
* `va-pagination`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js#L424)
* `va-process-list`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2051080448/Liquid+template+migration+guidance#va-process-list)
* `va-progress-bar`: N/A
* `va-promo-banner`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2051080448/Liquid+template+migration+guidance#va-promo-banner)
* `va-radio`: N/A
* `va-search-input`: N/A
* `va-segmented-progress-bar`: N/A
* `va-select`: N/A
* `va-table`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js#L427)
* `va-telephone`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js#L430)
* `va-text-input`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js#L433)
* `va-textarea`: N/A

## Implementing design work

When a designer hands off work, it is vital to work through potential implications that design may have on Formation. Are there any new variations on components? Are there any new components not present on this site? For more on that process, read about how to contribute.

In general, some rules for implementing design work include:
- Use [spacing units]({{ site.baseurl }}/foundation/spacing-units) instead of hard-coding pixel values for margins and padding
- Use Sass [variables for colors]({{ site.baseurl }}/foundation/color-palette) instead of hex codes
- Discuss reusability of new design components and where is the most appropriate home for CSS and JS
- Use the Formation [naming convention](naming)
- Do not use ID selectors

#### Use design system utilities

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

## Contributing to the Design System

The two main ways for developers to contribute to the Design System are by writing new components or by modifying existing components. Regardless of which type of contribution you are making, each PR should:

- have at least 90% test coverage
- have appropriate comments/documentation for functions, classes, etc.
- have Storybook stories for new features
- minimize complexity
- include only the smallest changeset required for the feature or fix

### New components

If you want to contribute something to the Design System, see the [Contributing to the Design System]({{ site.baseurl }}/about/contributing-to-the-design-system) page.

<!-- This is commented out until we have something to link to.
In order for a component to be included in the _official_ Design System, we expect [these criteria to be met]().
-->


### Modifying existing code

PRs which make a change to the Design System should be manageable in size (less than ~500 lines of code). This is to meant to:

- Save your time as the developer
- Keep PRs tightly focused
- Keep the review process short.

### Writing CSS for the design system

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

## Contributing experimental design code
This document explains the process for contributing code for experimental designs and the reasoning behind that process.

If you haven't read it already, refer to the [contributing to the design system]({{ site.baseurl }}/about/contributing-to-the-design-system) page for more information about the full process.

### Writing experimental design code
Each experimental design should:
- Be absent of business logic and domain knowledge
- Not import application code
- Not introduce breaking changes

Developing the experiment as if it were a standalone library will make the code more reusable and graduating the component or pattern into the official design system smoother.

Each experimental design should [include a README](#readme) and be [owned by a team](#codeowners).

### Sharing experimental design code
Sharing code between applications is necessarily more involved than writing code for a single application. To avoid the overhead that sharing code introduces (reporting development status, managing breaking changes, deprecating the code etc.), it's recommended to develop experimental designs in the application directory and not import it from another application.

If the time comes that another application needs to use the experiment, the rest of this section describes the process for how to share this code.

#### Code location
Each experimental design is located in its own directory in [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website/) at `src/experimental/` unless otherwise noted in its documentation on this site.

**Example:**  
If your team needs an experimental button that's larger than the standard button, you would create `src/experimental/large-button/index.jsx` as the entry file for your "library."

#### README
Each experimental design should have a README that contains the following information:
- Development status: `stable`, `unstable`, or `deprecated`
     - The `unstable` status means the code is under active development and the public API may change without notice
     - The `stable` status means the public API is finalized, but the code may still receive backward-compatible updates such as accessibility improvements and bug fixes
     - The `deprecated` status means the code should no longer be used in applications
          - This may be because of a breaking change (see [Breaking changes](#breaking-changes) below), official adoption into the design system, or research which indicates the experiment was unsuccessful
          - See [Ending the experiment](#ending-the-experiment) below for instructions on what to do when deprecating code
- API documentation (optional but encouraged)

#### Breaking changes
"Breaking changes" is defined here In `semver` terms as a backwards incompatible change to the public API of your component or pattern. (See the [Semantic Versioning Specification](https://semver.org/#spec-item-8) for more details.)

Once the code for an experimental design is stable, **breaking changes should not be introduced.** Other applications may depend on this code, but are unable to pin the version because it's not a "proper" library.

If you need to introduce breaking changes, **do not modify the existing code.** Instead, copy the contents of the directory to a sibling directory post-fixed with a version number.

**Example:**  
The `LargeButton` you created accepted `children`, but because of reasons, you need to limit the content of the button to only text. You've decided to remove the `children` prop and add a `label` prop instead which accepts only strings. To introduce this change, you would:
1. Copy the contents of `src/experimental/large-button/` to `src/experimental/large-button-2`
2. Update the status in `src/experimental/large-button/README` to `deprecated` and indicate why (because there's a new version)
3. Make the breaking changes to `src/experimental/large-button-2`
4. Change the import statements `'experimental/large-button-2'` in your application
5. Update the [CODEOWNERS file](#codeowners) to add the new directory
6. Make an announcement for anybody who may be using the deprecated code

#### CODEOWNERS
Add your team's GitHub team name to the [CODEOWNERS file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.github/CODEOWNERS) to take ownership of the experiment's code. This will mean your team will be required reviewers on all changes to this code.

#### Test coverage
As with all code, test coverage is critical. This is especially true with shared code. Aim for at least 90% unit test coverage before declaring an experiment to be `stable`.

### Using shared experimental designs
Before using an experimental design, first check the `src/experimental/` directory in `vets-website` to see if it's been shared yet. If not, work with the authoring team to move the code into `src/experimental/`. See [Sharing experimental design code](#sharing-experimental-design-code) above for more information.

The babel module resolver plugin has the `root` set to `"./src"`, so you can import your experimental design with the following:

 ```js
import LargeButton from '~/experimental/large-button';
```

### Ending the experiment
Experimental designs are meant to be short-lived. The experimental design code may no longer be needed because:
- The design was approved for adoption into the design system
- The design was rejected for adoption into the design system
- A breaking change was introduced and a new version was created

When code is deprecated for any of these reasons, the goal is to delete the code. If there are no applications using the deprecated code, simply delete the directory.

If there are applications using the deprecated code:
1. In the README: Mark the code as `deprecated`
1. In the REAMDE: Clearly outline what engineers should do to stop using the experiment
    - This may be something like "upgrade to `~/experimental/large-button-2`," "use `@department-of-veterans-affairs/component-library/LargeButton`," or "discontinue use; the experiment has been rejected"
1. In Slack: Notify teams that the code has been deprecated, either via an announcement or reaching out directly to the teams using the experiment
1. Check in weekly to see if there are still applications using the experiment; delete the directory when no applications are dependent on it

It's the responsibility of the code owners to delete deprecated code when it's no longer in use.
