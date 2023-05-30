---
layout: documentation
title: Contributing
permalink: /about/developers/contributing
has-parent: /about/developers/
intro-text: How to contribute code to the Design System.
anchors:
  - anchor: Modifying existing components
  - anchor: Writing CSS for the Design System
  - anchor: Contributing new components
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

## Writing CSS for the Design System

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

## Contributing new components

This section details how to contribute new components. If you haven't read it already, refer to the [contributing to the design system]({{ site.baseurl }}/about/contributing-to-the-design-system) page for more information about the full process. If you're unsure if you're ready to start creating a new component, make sure you've gone through the experimental design process detailed [here]({{ site.baseurl }}/about/contributing-to-the-design-system) first.

### Writing your component

Each component should:
- Be absent of business logic and domain knowledge
- Not import application code
- Not introduce breaking changes

Developing the component as if it were a standalone library will make the code more reusable.

### Code location

Each component is located in its own directory in [`component-library`](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components) at `packages/web-components/src/components/`.

**Example:**
If your team needs an experimental button that's larger than the standard button, you would create `packages/web-components/src/components/va-large-button/va-large-button.tsx` as the entry file for your component. Other necessary files, such as CSS/SCSS and any tests, would share the same file name but a different extension, for example `va-large-button.scss`. Note that .css and .scss files are supported, but no other CSS preprocessor at this time. See this [va-accordion](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-accordion) component's folder for further examples of how to structure your code.

### StencilJS

Our web components are made using [Stencil](https://stenciljs.com/docs/introduction), which makes use of Typescript, JSX, and SCSS as part of its development tools. If you're unfamiliar with any of these technologies or with Stencil itself, you should strongly consider having someone on the Design System Team either help you with the development of your component, or do the work for you.

### CODEOWNERS
Add your team's GitHub team name to the [CODEOWNERS file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.github/CODEOWNERS) to take ownership of the experiment's code. This will mean your team will be required reviewers on all changes to this code.

### Test coverage
As with all code, test coverage is critical. This is especially true with shared code. Aim for at least 90% unit test coverage before declaring a component to be `stable`.
