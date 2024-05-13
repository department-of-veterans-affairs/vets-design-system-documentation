---
layout: documentation
title: Design libraries
permalink: /about/designers/design-libraries
has-parent: /about/designers/
intro-text: The Design System Team provides several Figma libraries for use by teams.
anchors:
  - anchor: Add the VADS Component Library to your project
  - anchor: Shared libraries
  - anchor: Naming conventions in project files
---

## Add the {{ site.design_library_name }} to your project

Use the core **{{ site.design_library_name }}** library to access all components. In Figma, the component library lives in the cloud. Thus you do not need to download the library. The Design System Team updates the component library in order to keep it in sync with the component-library code which contains our web components.

<a class="vads-c-action-link--blue" href="https://depo-platform-documentation.scrollhelp.site/research-design/designing-with-figma-at-va#DesigningwithFigmaatVA-HowtoenabletheVADesignLibrary">Learn how to enable the {{ site.design_library_name }}</a>

Once you’ve loaded the library, you can access the components by navigating to the **Assets** panel, and selecting **{{ site.design_library_name}}**.

**Note:** You cannot edit the component library directly. The Design System Team manages this library.

<a class="vads-c-action-link--blue" href="https://depo-platform-documentation.scrollhelp.site/research-design/designing-with-figma-at-va#DesigningwithFigmaatVA">Learn more about designing with Figma at VA</a>

### {{ site.example_library_name}}

**{{ site.example_library_name}}** demonstrates all of the components, their properties and variations, as well as common examples for you to copy and paste into your design files. 

**Note:** Copying example component instances from here to your own files will maintain the link to the main component in the **{{ site.design_library_name}}** so you will be notified of any component updates.

<a class="vads-c-action-link--blue" href="{{ site.figma_example_library }}">View {{ site.example_library_name}}</a>

### {{ site.resource_library_name }}

**{{ site.resource_library_name }}** has templates for all of our [Patterns]({{ site.baseurl }}/patterns/), including form patterns. Copy assets from here to kickstart a design.

<a class="vads-c-action-link--blue" href="{{ site.figma_templates_library }}">View {{ site.resource_library_name }}</a>

### Additional libraries and resources

Use these libraries to assist your design process. Some of the assets you can generate from these libraries are required in the <a href="https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/">Collaboration Cycle</a> process.

**VADS Web Annotation Kit** provides useful tools to document your design with accessibility, development, component identification, and many other types of helpful notes. 

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/about/accessibility/accessibility-annotations">Learn how to use the Annotation Kit</a>

<a class="vads-c-action-link--blue" href="{{ site.figma_annotations_library }}">View the Web Annotation Kit</a>

The **VADS Wireframe Library**  is currently under construction.

### User Flows

 User flows are created in Mural and should [follow this guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/standards/user-flow-guidance.md) for best practices. See [Request access to tools](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools) for additional information.

## Shared libraries

Shared libraries extend the core library with additional components that are organized by functionality. Members of teams working on Veteran-facing functionality contribute to the shared library which is then maintained by the Design System Team.

Components in a shared library are considered available for use but may not have corresponding guidance or web component code. Components that are used by a number of teams may become candidates to move into the core library.

### Shared library maintainer - Role and responsibilities

Each shared library has a maintainer who works with the Design System Team on the following:

#### Define and organize components

* Identifying, defining, and naming components
* Defining and naming symbols
* Testing components
* Reviewing contributed components for sufficient design quality

#### Supporting project teams

* Working with teams to promote components into the shared library.
* Help teams go faster by growing shared components and patterns.

#### Liaison with the Design System Team

* Acting as a committed contact for the Design System Team.
* Working with the team to determine which components move from a shared library to the Core library.

It is estimated that maintainers would spend 1-3 hours a month on these tasks.

### Contributing to a shared library

If you feel that you have a component that would be helpful to others you can contribute that component to a shared library by following these steps:

1. **Build your assets on the DRAFTS page** in the shared library you would like to contribute to. It's important to use symbols, colors, text and layer styles, wherever possible, from the Core library.
2. **Create new symbol(s) for your proposed component.** This should include any nested symbols from the Core library that you used (try not to break the symbols). Use the following naming convention for new symbols. You may also refer to the organization of the Core library for hints.
* Default: ```[component name] / [desktop | mobile ] / default / [item]```
* Variation: ```[component name] / [desktop | mobile ] / variation-name / [item]```
* Variation with states: ```[component name] / [desktop | mobile ] / variation-name / [item:state]```
* Nested elements of your component: ```[component name] / _elements / [item]```
3. **Create artboards for your components.** If your component has both mobile and desktop variations, use the Figma preset frame sizes Web / Mobile / Small, which is 360px wide, and Web / Desktop / Extra Small, which is 1024px wide. If your component does not have different mobile and desktop variations, always default to using the mobile artboard size. Leave your name, team name, and email address near your artboard(s).
4. **Contact the maintainer.** Now go ahead and let the shared library maintainer know that you have contributed. The name and contact information for the maintainer can be found on the shared library Readme page.

## Naming conventions in project files

We use naming conventions to organize files in order for other people to easily view, update, or edit your Figma files.

### Pages

Pages contain all of the frames for the product. Each page should have a specific purpose—iterations on a specific user flow, a prototype, etc.

Name pages in such a way other designers, engineers, product folks, and stakeholders can understand and navigate them. Always start version numbering with 3 digits (e.g. v001).

#### Name pages like this

[Product name - purpose - focus (optional) - version number)]

#### Examples

* VAOSR - Exploration - Calendar widget - v001
* VAOSR - Prototype - Community care - v001
* VAOSR - Direct schedule - v001

### Frames

Frame naming conventions should reflect the page they reside just like breadcrumbs on a website. Use numbers or descriptions for clarity as needed.

#### If the page name is

* VAOSR - Exploration - Calendar widget - v001

#### Then the frames would be named

* VAOSR - Exploration - Calendar widget - v001