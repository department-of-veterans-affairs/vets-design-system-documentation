---
layout: documentation
title: Contributing
permalink: /about/developers/contributing
has-parent: /about/developers/
intro-text: How to contribute code to the Design System.
anchors:
  - anchor: Modifying existing components
  - anchor: Contributing new components
  - anchor: Timeline to get component to prod
---

The two main ways for developers to contribute to the Design System are by modifying existing components and contributing new components. Regardless of which type of contribution you are making, each PR should:

- have at least 90% test coverage
- have appropriate comments/documentation for functions, classes, etc.
- have Storybook stories for new features
- minimize complexity
- include only the smallest changeset required for the feature or fix

## Modifying existing components

PRs which make a change to the Design System should be manageable in size (less than ~500 lines of code). This is to meant to:

- Save your time as the developer
- Keep PRs tightly focused
- Keep the review process short.

## Contributing new components

This section details how to contribute new components. If you haven't read it already, refer to the [contributing to the design system]({{ site.baseurl }}/about/contributing-to-the-design-system) page for more information about the full process. If you're unsure if you're ready to start creating a new component, make sure you've gone through the [experimental design process details]({{ site.baseurl }}/about/contributing-to-the-design-system) first.

### Writing your component

Each component should:
- Be absent of business logic and domain knowledge
- Not import application code
- Not introduce breaking changes

Developing the component as if it had no dependencies on anything within the vets-website repo will make the code more reusable.

### Code location

Each component is located in its own directory in the [`component-library`](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components) at `packages/web-components/src/components/`.

**Example:**
If your team needs to create a 'gizmo' component, you would create `packages/web-components/src/components/va-gizmo/va-gizmo.tsx` as the entry file for your component. Other necessary files, such as CSS/SCSS and any tests, would share the same file name but a different extension, for example `va-gizmo.scss`. Note that .css and .scss files are supported, but no other CSS preprocessor at this time. See the [va-accordion](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-accordion) component's folder for further examples of how to structure your code.

### Stencil

Our web components are made using [Stencil](https://stenciljs.com/docs/introduction), which makes use of Typescript, JSX, and SCSS as part of its development tools. Stencil's documentation outlines and defines virtually everything you need to know to develop a Typescript-based component, so be sure to rely on that as you work.

### Component front-matter

Near the top of your component, you will want to include the component front-matter content in order to aid the automatic documentation generator. Here is an example from the `va-banner` component:

```javascript
/**
 * @componentName Banner
 * @maturityCategory use
 * @maturityLevel deployed
 */
@Component({
  tag: 'va-banner',
  styleUrl: 'va-banner.css',
  shadow: true,
})
```

- `@componentName` should be the name of your component, minus the 'va-' prefix
- `@maturityCategory` should be  `caution` based on the [maturity scale]({{ site.baseurl }}/about/maturity-scale)
- `@maturityLevel` should be `candidate` based on the [maturity scale]({{ site.baseurl }}/about/maturity-scale)
- `tag` should be the 'custom element tag' that the component will use when inserted into a page
- `styleUrl` should point to the file Stencil should use as this component's stylesheet (see [Writing S(C)SS](#writing-scss-for-your-component) below for more details)
- `shadow` should always be `true`, as we make use of the shadow DOM to encapsulate all components and prevent arbitrary DOM and style changes

### Writing (S)CSS for your component

When writing style definitions for a component, it's useful to know that stylesheets are automatically encapsulated and scoped by Stencil into the component you're writing. That is, the styles defined in `va-gizmo.scss` will be automatically applied only to the component defined in `va-gizmo.tsx`.

Even so, it is frequently helpful to make use of the `:host` selector when defining your styles, especially in the context of 'legacy' styles that make use of the Formation (aka USWDS v1 + VA Design System) style library. To ensure your styles only apply to the old style framework while we transition to USWDS v3, use the `:host(:not[uswds])` selector before any other selectors. When a component has the `uswds` property (or 'flag') present, it is said to be rendering in "V3 Mode"; that is, in compliance with USWDS v3. Because this will eventually be the default, any styles that apply to "V1 Mode" or "Formation Mode" have to be excluded manually with this "Not USWDS" selector.

For example, if your va-gizmo component needs to have labels with green text in V1 mode, but blue text in V3 mode, you can do this in the va-gizmo.scss stylesheet:

```css
:host(:not[uswds]) label {
  color: green;
}

label {
  color: red;
}
```

### Test coverage
As with all code, test coverage is critical. This is especially true with shared code. Aim for at least 90% unit test coverage before declaring a component to be `stable`.

## Timeline to get component to prod

1. [Experimental design ]({{ site.baseurl }}/about/contributing-to-the-design-system)  is proposed and approved
2. New component is created
3. PR submitted, reviewed, revised, and approved
4. New version of the component-library package is released
5. PR to update the component-library package in vets-website is submitted, reviewed, and approved
6. vets-website now has access to include the new component into apps