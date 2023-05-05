---
layout: documentation
title: Using Web Components
permalink: /about/developers/using-web-components
has-parent: /about/developers/
intro-text: Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. 
anchors:
  - anchor: How to create a web component
  - anchor: Vanilla JavaScript applications
  - anchor: React applications
  - anchor: Custom events
  - anchor: Native events
  - anchor: React and Web Components
  - anchor: How to migrate to Web Components
---

## How to create a web component

We can create our new component called `<va-web-component>`, with its unique styling and functionality, and use it in any JavaScript framework or library. The fact that these components are framework agnostic, helps us future proof our component library.

Web Components consist of three parts:
* A custom HTML element
  * Where you register your own HTML tag
* The shadow DOM
  * This is a separate DOM node tree for your custom HTML elements that includes scoped CSS styles
* Templates and Slots
  * You write HTML templates that you can add to your HTML elements
  * You add slots to provide additional context within the component

## Vanilla JavaScript applications

If the Design System web components will be used in a vanilla JavaScript application, you are ready to use them (identified by tags prefixed with `<va-*>`).

We make our best efforts to avoid creating web components with object or array properties in order to make them easier to use in static HTML pages.

## React applications

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

## Custom Events

Some of the Design System web components allow for custom events.

If you must use custom events and you're using JSX, you must prefix events with `on`. Given an event named `vaChange`, use `onVaChange`.

If you must use custom events and you're **not** using JSX, you must add an event listener using the event name as the event type. Given an event named `vaChange`, use: 
```js
const element = document.querySelector('va-example-component');
element.addEventListener('vaChange', event => { /* your listener */ })
```

The majority of our web components also fire a `component-library-analytics` event used to translate component library actions into analytics data layer events. The event handler for this event exists in `vets-website`.

## Native Events

Some of our web components utilize native HTML DOM events such as `click` and `blur`. We prefer to use native events when possible because it is easier for teams to test and may not require the use of React bindings.

To **use native events in JSX**, they must be prefixed with `on` and use camel case. Given the native `blur` event, use `onBlur`.

An example using the `click` event in JSX:
```jsx
<va-button text="Edit" onClick={e => console.log(e)} />
```

To **use native events in vanilla JavaScript**, they can be used inline and prefixed with `on` **or** by adding an event listener using the event name as the event type.

An example using the `blur` event in vanilla JavaScript:
```js
<va-button onblur="handleBlur()" />
```

Another example using the `blur` event in vanilla JavaScript:
```js
const element = document.querySelector('va-button');
element.addEventListener('blur', event => { /* your listener */ })
```

## React and Web Components

**Note:** Please use our VA Design System Web Components where applicable in your projects. We maintain this component library to provide VA teams with an ecosystem of vetted and tested components.

While large portions of VA.gov are built via React applications, there are some teams that cannot import React directly into their projects and have to add work around hacks in order to use React components.

Due to these issues the Design System Team recommends using our Web Components on VA.gov applications and pages.

For easy identification, all of our Web Components begin with a `va-` prefix. For example, the Web Component version of our alert component is named `va-alert`.

Benefits include:
- Future proofing as Web Components can be imported into any JS Framework
- Consistent syntax across frameworks and projects
- Actively updated and maintained - we are deprecating most React components and they will not have the latest updates
- Performance and speed

The Design System Team has specific linting and migration rules in place to help ease in the transition from React to Web Components. We also encourage all developers use Design System Components in their applications instead of creating their own similar components. If our components do not meet your needs, we would love to hear about it. Please reach out to us in Slack or [submit a bug report](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=caw310&labels=vsp-design-system-team&template=bug_template.md&title=). If you are interested, please review [how to contribute a new component to the design system]({{ site.baseurl }}/about/developers/contributing).

## How to migrate to Web Components

The Design System Team provides three ways to migrate specific React Components over to Web Components:
* **Manual** - There is an ESLint rule that informs you that the React component is deprecated but there are too many changes to automate a replacement and a guide will need to be followed ([Storybook](https://design.va.gov/storybook/?path=/story/about-introduction--page) example, Confluence documentation, or other guidance within the ESLint popup).
* **ESLint Rule** - There is an ESLint rule that informs you of the ability to convert from a React Component to a Web Component with a migration click.
* [**Migration Script**](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/README.md) - There is a script available to be used in the CLI when in the `vets-website` repo to convert the React Component to a Web Component.

Auto-migrations may not be able to perfectly migrate every component. Before you merge your PR be sure to inspect the diff and test thoroughly. Migrations also do not update test files so you will need to update those manually.

### Web component migrations

Here is a list of each Web Component and the migration available:

* `va-accordion`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2127527996/Manual+Component+Migration+Guide)
* `va-additional-info`: [Migration Script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/transformers/additionalinfo.js)
* `va-alert`: [Migration Script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/transformers/alertbox.js)
* `va-breadcrumbs`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
* `va-button`: [Manual Migration](https://design.va.gov/storybook/?path=/docs/components-va-button--primary)
* `va-checkbox`: [Manual Migration](https://design.va.gov/storybook/?path=/docs/components-va-checkbox--default)
* `va-checkbox-group`: [Manual Migration](https://design.va.gov/storybook/?path=/docs/components-va-checkbox-group--default)
* `va-file-input`: [Manual Migration](https://design.va.gov/storybook/?path=/docs/components-va-file-input--default)
* `va-loading-indicator`: [Migration Script](https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/component-migration/transformers/loadingindicator.js)
* `va-modal`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
* `va-omb-info`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
* `va-pagination`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
* `va-process-list`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2051080448/Liquid+template+migration+guidance#va-process-list)
* `va-promo-banner`: [Manual Migration](https://vfs.atlassian.net/wiki/spaces/DST/pages/2051080448/Liquid+template+migration+guidance#va-promo-banner)
* `va-select`: [Manual Migration](https://design.va.gov/storybook/?path=/docs/components-va-select--default)
* `va-table`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
* `va-telephone`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
* `va-text-input`: [ESLint Rule](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/e37233f7ed059c91bf43e92f825390bbf5991298/packages/eslint-plugin/lib/rules/prefer-web-component-library.js)
