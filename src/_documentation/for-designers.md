---
layout: default
title: For designers
anchors:
  - anchor: Design resources
  - anchor: How to work with Formation
  - anchor: Working with developers
slug: designers
---

# Documentation for designers

<div class="va-introtext">
Designers are urged to read through each section of design.va.gov and see all components and patterns in use on VA.gov. The utilities section is also useful to help foster ideas in how a particular design solution can be constructed.
</div>

## Design resources

The website displays HTML and CSS examples of the various components and patterns in use on VA.gov. You can use your browser’s web inspector to view the specs for each component. However, if you use Sketch, each of these components have been added to a pattern library as well.

<ul class="usa-unstyled-list">
  <li><a href="{{ site.baseurl }}/downloads/VA-gov-Pattern-Library.sketch"><span class="fa fa-download vads-u-display--inline-block vads-u-margin-right--1"></span>Download the Sketch Pattern Library</a></li>
</ul>

## How to work with Formation

Formation is VA.gov’s front-end framework for the design system. This site documents most of the components in the Sketch library. However, some components will be migrated over the next few release cycles.

Before getting started, we recommend that you get familiar with Formation and how you can use it as part of your design process. Each section includes some helpful information:

- **[Content style guide](../content-style-guide):** Our house style guide for VA.gov. Follow the guidelines to help you create a **consistent, helpful experience for Veterans.**
- **[Design](../design):** This section explains VA.gov's **base styles and visual language**. You should set margins and padding in your design comps using the **[8pt spacing units](../design/spacing-units)**.
- **[Components](../components):** Components are the "UI fragments," such as buttons and accordions. Some of these have strict usage guidelines, so please become familiar with them.
- **[Utilities](../utilities):** This section mostly describes CSS, but that doesn't mean it is only for front-end developers. Formation guides design implementation, so **understanding the utilities may assist in how designers describe their work**. **Many of the utilities are responsive** and can be used to modify or enhance designs for different screen widths at a low development cost.
- **[Patterns](../patterns):**  How components, content strategy, information architecture, accessibility, and visual design work in tandem to solve Veterans' needs. Here, you will find information on how Hub pages are structured, how to build multi-part forms, etc.
- **[Layout](../layout):** The layout section describes the **design grid** and tools you can use to create page or design pattern structure.

## Working with developers  

In many cases, your designs will not need to introduce new components. Additionally, you should not add new components where an existing one would suffice. If you need to add a new component, you should consider whether or not it could be reusable in other contexts on the VA.gov platform or if it is a single-use pattern. You can bring other designers and front-end developers in to assist with the decision-making process.

If you have determined that a component is reusable, you will need work with the development team to ensure that it is built and scoped correctly in Formation.

If the component is not reusable, only useful in a single context or single type of application, you have two options for how to proceed.

1. Build the component using utility classes. Utilities can be used to help implement the component without committing new CSS.
2. Build the component locally within the application.