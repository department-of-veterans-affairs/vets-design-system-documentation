---
layout: documentation
title: Contributing
permalink: /about/developers/contributing
has-parent: /about/developers/
intro-text: How to contribute code to the Design System.
anchors:
  - anchor: Getting started
  - anchor: Modifying existing components
  - anchor: Contributing new components
  - anchor: Timeline to get a new component to prod
---

## Getting started

The [Component Library](https://github.com/department-of-veterans-affairs/component-library) is a monorepo that contains various Design System packages including a package for web components.

To begin local development, clone the Component Library repo and follow the steps in the readme file for [Running the Build via Storybook](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#running-build-via-storybook). After following each of these steps, a local instance of Storybook will load at `localhost:6006` where development can occur.

Other important sections to review:

- [Branch Naming](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#branch-naming)
- [How to choose a version number](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#how-to-choose-a-version-number)
- [Testing](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#testing)

### Ways to contribute

The two main ways for developers to contribute to the Design System are by modifying existing components (fixes, new features, enhancements) and contributing new components. 

Regardless of which type of contribution you are making, each PR should:

- Include or update tests where applicable
- Have appropriate comments and documentation for functions, classes, logic, as well as descriptive pull requests
- Have Storybook stories added or updated where applicable
- Minimize complexity
- Include only the smallest changeset required for the feature or fix

## Modifying existing components

The Design System welcomes all pull requests that will help us improve the component library. This includes fixes for [existing issues](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues), issues that you've identified yourself, or enhancements. Thank you for your contribution!

### General considerations

PRs which make a change to the Design System should be manageable in size. This is meant to:

- Save your time as the developer
- Keep PRs tightly focused
- Keep the review process short

Be sure to follow the steps outlined in the [Getting Started](/about/developers/contributing#getting-started) section above and submit your pull request when its ready. You can reach out to the #platform-design-system Slack channel with any other questions.

## Contributing new components

This section details how to contribute new components. If you haven't read it already, refer to the [contributing to the design system]({{ site.baseurl }}/about/contributing-to-the-design-system) page for more information about the full process. If you're unsure if you're ready to start creating a new component, make sure you've gone through the [experimental design process details]({{ site.baseurl }}/about/contributing-to-the-design-system) first. 

Reach out to the #platform-design-system Slack channel with any other questions.

### General considerations

Each component should:
- Be absent of business logic and domain knowledge
- Not import application code
- Not introduce breaking changes

Developing the component as if it had no dependencies on anything within the vets-website will make the code more reusable.

### Creating a new component

Each component is located in its own directory within the `web-components` package of the [`component-library`](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components)

The library leverages [Stencil](https://stenciljs.com/docs/introduction) for generating web components which makes use of Typescript, JSX, and CSS. Stencil's documentation outlines and defines virtually everything you need to know to develop a Stencil generated web component, so be sure to rely on that as you work.

To create a new component, run the Stencil interactive generator in the web-components package: 

`yarn stencil generate va-new-component`

The generator will create files for your component in the `packages/web-components/src/components/` director to include a `.jsx` entry file as well as a stylesheet and testing files for your component.

Additional Stencil documentation: [https://stenciljs.com/docs/cli#stencil-generate](https://stenciljs.com/docs/cli#stencil-generate)

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
- `@maturityCategory` should be assigned based on the [maturity scale]({{ site.baseurl }}/about/maturity-scale) which for a new component should be `caution`
- `@maturityLevel` should be assigned based on the [maturity scale]({{ site.baseurl }}/about/maturity-scale) which for a new component should be `candidate`
- `tag` should be the 'custom element tag' that the component will use when inserted into a page
- `styleUrl` should point to the file Stencil should use as this component's stylesheet
- `shadow` should be `true`, as we make use of the shadow DOM to encapsulate all components and prevent arbitrary DOM and style changes

### Writing Style for your component

Web component styles are scoped to the component's shadow dom which means that styles are encapsulated.

Design System web components will support either `.css` or `.scss` stylesheet types. The Stencil generator will automatically create the component's stylesheet as `.css` but in some cases it will be necessary or preferred to update the stylesheet extension to `.scss` which you are encouraged to do.

It can be helpful to make use of the `:host` pseudo-class function when defining your styles. Read more about the [:host function](https://developer.mozilla.org/en-US/docs/Web/CSS/:host_function) and review existing components for examples of where it may be appropriate to use in your stylesheet.

### Test coverage

As with all code, test coverage is critical. This is especially true with shared code. 

All components are required to have end-to-end tests located in the `web-components/src/components/va-new-component/test/` folder having the `.e2e.ts` extension. Stencil E2E tests verify your components in a real browser using Puppeteer.

Stencil provides many utility functions to help write e2e tests using Jest and Puppeteer. Review the Stencil documentation on [End-to-end Testing](https://stenciljs.com/docs/end-to-end-testing) for more information or review existing component tests for guidance.

Unit testing is also encourage where appropriate. The [va-telephone component unit tests](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-telephone/test/va-telephone.spec.tsx) can be used as an example.

## Timeline to get a new component to prod

1. [Experimental design ]({{ site.baseurl }}/about/contributing-to-the-design-system) is proposed and approved
2. New component is created
3. PR submitted, reviewed, revised, and approved
4. New version of the component-library package is released
5. PR to update the component-library package in vets-website is submitted, reviewed, and approved
6. vets-website now has access to include the new component into apps