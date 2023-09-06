---
layout: component
title: Pagination
status: use-deployed
sketch-link: https://www.sketch.com/s/a52734dd-00d0-44f1-9c9e-ff4016130e5c/p/DFDEF51F-1013-4214-A1DD-C4718E0E6BDD/canvas
intro-text: "Pagination is navigation for paginated content."
web-component: va-pagination
anchors:
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Component checklist
---

## Examples - v1

### Default

{% include storybook-preview.html story="components-va-pagination--default" link_text="va-pagination" %}

## Usage

### When to use pagination

* When it is not feasible to show all ordered data on a single page. Examples of content that should be paginated include search results or other multi-page collections of related items. 

### When to consider something else

* If your content has meaningful groupings or categories.
* Steps in a sequence
* Short collections
* When it is undesirable to have the user pause for navigation. Some alternatives include the infinite scroll pattern or simple un-numbered navigation.

{% include component-docs.html component_name=page.web-component %}


{% include _component-checklist.html component_name=page.web-component %}