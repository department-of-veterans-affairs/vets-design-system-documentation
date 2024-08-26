---
layout: documentation
title: Using Web Components
permalink: /about/developers/using-web-components
has-parent: /about/developers/
intro-text: Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.
anchors:
  - anchor: How to use a web component
  - anchor: React and Web Components
  - anchor: Vanilla JavaScript applications
  - anchor: React applications
  - anchor: Custom events
  - anchor: Native events
  - anchor: How to migrate to Web Components
---

## How to use a web component

A web component looks like an HTML element such as `<va-example-component>`. It has unique styling and functionality and can work in any JavaScript framework or library. The fact that these components are framework agnostic, helps us future proof our component library.

[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) consist of three parts:
* A custom HTML element
  * Where you register your own HTML tag
* The shadow DOM
  * This is a separate DOM node tree for your custom HTML elements that includes scoped CSS styles
* Templates and Slots
  * You write HTML templates that you can add to your HTML elements
  * You add slots to provide additional context within the component

## React and Web Components

Use our VA Design System Web Components where applicable in your projects. We maintain this component library to provide VA teams with an ecosystem of vetted and tested components.

While large portions of VA.gov are built via React applications, there are some teams that cannot import React directly into their projects and have to add work around hacks in order to use React components.

Due to these issues the Design System Team has moved to using Web Components on VA.gov applications and pages.

For easy identification, all of our Web Components begin with a `va-` prefix. For example, the Web Component version of our alert component is named `va-alert` (or `VaAlert` as the React binding).

The benefits of using Design System Web Components include:

* Web Components can be imported into any JS Framework
* Consistent syntax across frameworks and projects
* Actively updated and maintained - we are deprecating most React components and they will not have the latest updates
* Performance and speed

The Design System Team has specific linting and migration rules in place to help ease in the transition from React to Web Components. We also encourage all developers use Design System Components in their applications instead of creating their own similar components.

If our components do not meet your needs, we would love to hear about it. Reach out to us in Slack at #platform-design-system or [submit a bug report](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new/choose). And if you are interested in contributing to the Design System, review [how to contribute a new component to the design system]({{ site.baseurl }}/about/developers/contributing).

## USWDS V1 to V3 migration

The current version of the Design System is compatible with the US Web Design System (USWDS) version 1. To use components compatible with version 3 of the USWDS, add a `uswds` flag to the component, as in this example:

```html
<va-gizmo uswds>
```

To check if the component you want to use has a v3 version, go to the [VA Design System's Storybook](https://design.va.gov/storybook/?path=/docs/uswds-va-additional-info--default) site and look under the "USWDS" section. Here you will find a list of available components as well as implementation details and examples.

To migrate, if the `uswds` prop has been set to false, explicitly set it to true. **Run all of your application test suites and address any tests that break due to migration.**

## Vanilla JavaScript applications

If a Design System web component will be used without the need for passing in a function, object, array, or custom event, you are ready to use it without any additional imports.

A vanilla web component is used like `<va-example-component>` (identified by tags prefixed with `<va-*>`).

We make our best efforts to avoid creating web components with object or array properties in order to make them easier to use in static HTML pages.


## React applications

React application have an option of either using the web component directly like `<va-example-component>` or importing the React binding for the web component which would look like this `<VaExampleComponent>`. Both of these implementations render as web components though.

**How to choose to use the vanilla component or React binding?**

If either of these are true, we would recommend using the React binding for ease of use:

- You must pass in a function, object or array to a web component's properties
- You must use custom events

If you are not sure if you need either of those features, refer to the web component's [Storybook documentation](https://design.va.gov/storybook/?path=/docs/about-introduction--page) to review its events and properties.

**Importing a React binding of a web component**

Bindings are component wrappers that allow our web components to work as first-class React components. This allows them to handle custom events and to pass in more than primitives to a web component's properties.

Example of importing the React binding of a web component:

<hr>

```jsx
import {
  VaExampleComponent
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";

const exampleFunction = () => { return "Hello, World!" };

<VaExampleComponent exampleProp={exampleFunction} />
```

<hr>

The equivalent vanilla Web Component version using `<va-example-component>` would be this:

<hr>

```html
<script>
  const component = document.querySelector('va-example-component');
  const exampleFunction = () => { return "Hello, World!" };
  component.exampleProp = exampleFunction();
</script>

<va-example-component />
```

<hr>

It can be more convenient to use the React binding version of the Web Component in React when a function is needed to be passed into a prop. But if you don't require passing in a function or listening to events, use the vanilla Web Component and avoid an import entirely.

## Custom Events

Some of the Design System Web Components allow for custom events.

If the Web Component has a custom event that you need to use and you're using the React binding, you will need to prefix events with `on`. Given an event named `vaChange`, use `onVaChange`.

<hr>

```jsx
import {
  VaExampleComponent
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";

const exampleCallback = (event) => { console.log(event.detail) }

<VaExampleComponent onVaChange={exampleCallback} />
```

<hr>

If the Web Component has a custom event that you need to use and you're **not** using the React binding, you will add an event listener using the event name as the event type:

<hr>

```html
<script>
  const element = document.querySelector('va-example-component');
  const exampleCallback = event => { console.log(event.detail) }
  element.addEventListener('vaChange', exampleCallback)
<script>

<va-example-component>
```


The majority of our web components also fire a `component-library-analytics` event used to send component library interactions into analytics data layer events. The [handler for the Google Analytics event](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/component-library-analytics-setup.js) exists in vets-website.

For more information about custom events for specific components, refer to the [Storybook documentation](https://design.va.gov/storybook/?path=/docs/about-introduction--page).

## Native Events

Some of our web components utilize native HTML DOM events such as `click` and `blur`. We prefer to use native events when possible because it is easier for teams to test and may not require the use of React bindings.

To **use native events in JSX**, they must be prefixed with `on` and use camel case. Given the native `blur` event, use `onBlur`.


An example using the `click` event in JSX:

<hr>

```jsx
<va-button text="Edit" onClick={ (event) => console.log(event.detail) } />
```

<hr>

To **use native events in vanilla JavaScript**, they can be used inline and prefixed with `on` **or** by adding an event listener using the event name as the event type.

An example using the `blur` event in vanilla JavaScript:

<hr>

```js
<va-button onblur="handleBlur()" />
```

<hr>

Another example using the `blur` event in vanilla JavaScript:

<hr>

```html
<script>
  const element = document.querySelector('va-button');
  element.addEventListener('blur', (event) => { console.log(event.detail) })
</script>

<va-button>
```

<hr>

For more information about native events in a specific component, refer to the [Storybook documentation](https://design.va.gov/storybook/?path=/docs/about-introduction--page).

## How to migrate to Web Components

The Design System Team provides three ways to migrate specific React Components over to Web Components:
* **Manual** - There is an ESLint rule that informs you that the React component is deprecated but there are too many changes to automate a replacement and a guide will need to be followed ([Storybook](https://design.va.gov/storybook/?path=/story/about-introduction--page) example, Confluence documentation, or other guidance within the ESLint popup).
* **ESLint Rule** - There is an ESLint rule that informs you of the ability to convert from a React Component to a Web Component with a migration click.
* [**Migration Script**](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/README.md) - There is a script available to be used in the CLI when in the `vets-website` repo to convert the React Component to a Web Component.

Auto-migrations may not be able to perfectly migrate every component. Before you merge your PR be sure to inspect the diff and test thoroughly. Migrations also do not update test files so you will need to update those manually.

### Web component migrations

Here is a list of each Web Component and the migration available:

* `va-modal`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)