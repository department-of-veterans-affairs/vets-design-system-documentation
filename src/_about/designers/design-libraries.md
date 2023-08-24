---
layout: documentation
title: Design libraries
permalink: /about/designers/design-libraries
has-parent: /about/designers/
intro-text: The Design System Team provides several Sketch libraries for use by teams.
anchors:
  - anchor: Add the Component Symbol Library to your project
  - anchor: Shared libraries
  - anchor: Naming conventions in project files
---

## Add the {{ site.design_library_name }} to your project

Use the core VA.gov component library to access all components. In Sketch for Teams, the component library lives in the cloud. Thus you do not need to download the library. The Design System Team updates the component library in order to keep it in sync with the component-library code which contains our web components.

To access and enable the {{ site.design_library_name }}, follow these steps:

1. In the Sketch menu bar, navigate to Sketch > Preferences (or press `command` and `,` ) to open the **Preferences modal**
2. In the modal, select the **Libraries tab**
3. You should see a section called VA.gov Design. Select the checkbox next to the library named “**{{ site.design_library_name}}**”

Once you’ve loaded the library, you should be able to access everything in it by navigating to **Insert** > **Symbols** > **{{ site.design_library_name}}**. Note that you cannot open or edit the component library directly. The Design System Team manages this library.

### View the Example Library

You can <a href="{{ site.sketch_cloud_link}}">view the Example Library</a> in Sketch for Teams. You can open the library in Sketch by looking for the "Edit in Sketch" button. This library has examples of all of the component symbols and their variations as well as foundational elements (color, typography, and spacing).

<a class="vads-c-action-link--green" href="{{ site.sketch_cloud_link }}">View the Example Library</a>

### Templates
* [Page and email]({{ site.sketch_templates_link }}) - Page and email templates
* [Forms]({{ site.sketch_form_templates_link }}) - Form page templates

### Additional libraries

Use these libraries to assist your design process. Some of the assets you can generate from these libraries, such as user flows, are required in the CollabCycle process.

* [Annotations]({{ site.sketch_annotations_link }}) - For annotating wireframes and prototoypes
* [User flows]({{ site.sketch_user_flows_link}}) - User flows
* [Wireframes]({{ site.sketch_wireframes_link}}) - Wireframes

## Shared libraries

Shared libraries extend the core library with additional components that are organized by functionality. Members of teams working on Veteran-facing functionality contribute to the shared library which is then maintained by the Design System Team. 

Components in a shared library are considered available for use but may not have corresponding guidance or web component code. Components that are used by a number of teams may become candidates to move into the core library. 

### Current shared libraries

<a class="vads-c-action-link--blue" href="https://sketch.com/s/ab0f611b-c15c-42c4-ab71-1158ff6e01c6">Search</a>

### Shared library maintainer - Role and responsibilities

Each shared library has a maintainer who works with the Design System Team on the following:

#### Define and organize components

* Identifying, defining, and naming components
* Defining and naming symbols
* Testing components
* Reviewing contributed components for sufficient design quality

#### Supporting project teams 

* Working with teams to promote components into the shared library. 
* Help teams go faster by growing shared components and patterns

#### Liaison with the Design System Team

*  Acting as a committed contact for the Design System Team. 
* Working with the team to determine which components move from a shared library to the Core library.

It is estimated that maintainers would spend 1-3 hours a month on these tasks.

### Adding a shared library

1. Add the shared library through Sketch for Teams in the Design System workspace by clicking the contextual menu icon and selecting “Add Library”. Shared libraries pull in symbols from the Core library, so make sure you also have that file added as a library.
2. Use the Insert menu to navigate to Symbols / ```shared library name``` and place the desired symbol(s) in your prototype.

### Contributing to a shared library

If you feel that you have a component that would be helpful to others you can contribute that component to a shared library by following these steps:

1. **Build your assets on the DRAFTS page** in the shared library you would like to contribute to. It's important to use symbols, colors, text and layer styles, wherever possible, from the Core library.
2. **Create new symbol(s) for your proposed component.** This should include any nested symbols from the Core library that you used (try not to break the symbols). Use the following naming convention for new symbols. You may also refer to the organization of the Core library for hints. 
  * Default: ```[component name] / [desktop | mobile ] / default / [item]```
  * Variation: ```[component name] / [desktop | mobile ] / variation-name / [item]```
  * Variation with states: ```[component name] / [desktop | mobile ] / variation-name / [item:state]```
  * Nested elements of your component: ```[component name] / _elements / [item]```
3. **Create artboards for your symbols.** If your symbol has both mobile and desktop variations, use the Sketch preset artboard sizes Web / Mobile / Small, which is 360px wide, and Web / Desktop / Extra Small, which is 1024px wide. If your symbol does not have different mobile and desktop variations, always default to using the mobile artboard size. Leave your name, team name, and email address near your artboard(s).
4. **Contact the maintainer.** Now go ahead and let the shared library maintainer know that you have contributed. The name and contact information for the maintainer can be found on the shared library Readme page.


## Naming conventions in project files

We use naming conventions to organize Sketch files in order for other people to easily view, update, or edit your Sketch files.

### Pages

Pages contain all of the artboards for the product. Each page should have a specific purpose—iterations on a specific user flow, a prototype, etc.

Name pages in such a way other designers, engineers, product folks, and stakeholders can understand and navigate them. Always start version numbering with 3 digits (e.g. v001).

**Name pages like this:**

[Product name - purpose - focus (optional) - version number)]

**Examples**

- VAOSR - Exploration - Calendar widget - v001
- VAOSR - Prototype - Community care - v001
- VAOSR - Direct schedule - v001

### Artboards

Artboard naming conventions should reflect the page they reside just like breadcrumbs on a website. Use numbers or descriptions for clarity as needed. 

**If the page name is**

- VAOSR - Exploration - Calendar widget - v001

**Then artboards would be named**

- VAOSR - Exploration - Calendar widget - 001


### Troubleshooting

- Sometimes preview version of artboards on Sketch for Teams have display errors. Try embedding fonts or asking someone else open and close the file—weirdly this seems to work.
