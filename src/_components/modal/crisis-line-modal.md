---
layout: component
permalink: /components/modal/crisis-line-modal
has-parent: /components/modal/
title: Crisis Line Modal
research-link: Modals
figma-link: 
intro-text: The Crisis Line Modal is found in the Header of VA.gov and provides contact information for the Veteran Crisis Line.
status: use-with-caution-candidate
web-component: va-crisis-line-modal
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-crisis-line-modal--default" link_text="va-crisis-line-modal default" %}

## Usage

* **Provided by default in the VA.gov header.** The Crisis Line modal is a sub-component of the [header component]({{ site.baseurl }}/components/header). The web-component version of this modal will be included in the injected VA.gov header web-component when that component is built.

### Placement

* This modal must always appear in the VA.gov header, including the [minimal variation]({{ site.baseurl }}/components/header/header-minimal).

## Content considerations

* **Do not alter the contents of this component.** The contents of this component are governed by CAIA.

{% include component-docs.html component_name=page.web-component %}

{% include _component-checklist.html component_name=page.web-component %}