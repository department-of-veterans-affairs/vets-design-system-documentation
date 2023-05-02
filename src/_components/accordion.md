---
layout: component
title: Accordion
intro-text: "Accordions, which use the UX principle of progressive disclosure, are a list of headers that can be clicked to hide or reveal additional content. By default, accordions are multi-selectable and borderless, however, props can be added to make them bordered and single-select."
research-title: Accordions
status: use-best-practice
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/2550D408-704E-4AD4-A726-87607DB7E42B
web-component: va-accordion
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-accordion--default" link_text="va-accordion" %}

### Bordered

{% include storybook-preview.html story="components-va-accordion--bordered" link_text="va-accordion bordered" %}

### Single Select

* Adding an `open-single` prop on the `va-accordion` component will allow the user to only open one accordion at a time.

{% include storybook-preview.html story="components-va-accordion--single-select" link_text="va-accordion single select" %}

### Subheader

{% include storybook-preview.html story="components-va-accordion--subheader" link_text="va-accordion subheader" %}

### Internationalization

{% include storybook-preview.html story="components-va-accordion--internationalization" link_text="va-accordion Internationalization" %}

### Icon in header

{% include storybook-preview.html story="components-va-accordion--icon-in-header" link_text="va-accordion Icon in header" %}



## Usage

### When to use accordions

* **Organizing related sections of content to condense and chunk the content.** When you need to organize related sections of content into a smaller space use accordions to condense and group the content.
* **A series of content**: If you have a series of content in the body of a page and outside of a form or tool. For example, if you have a series of questions as part of an FAQ section or a set of options for payment that each have additional details. 
* **Reveal and compare relevant information.** When users need to reveal and compare relevant and related information accordions can make this easier.

### When to consider something else

* **Users need to see most or all of the information on the page at one time.** Use well-formatted text with descriptive headings instead.
* **There is not enough content to warrant condensing.** Accordions increase cognitive load and interaction cost, as users have to make decisions about which headers to click.
* **Users would benefit from seeing additional context for a discrete piece of content.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component instead to leverage show/hide functionality, especially in a form. 
* **Required content**: If the majority of people need the content to accomplish the main task then it should not be hidden from view.

### Behavior

* Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
* Make sure interactive elements (such as links) within the collapsible region are far enough from the header that users don’t accidentally trigger a collapse. (The exact distance will depend on the device.)

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Keep content succinct – accordion height will fluctuate depending on the length of the content. 
* If the accordion has a subheading, it should not wrap to two lines. 
* In general, accordions should organize static content. Outside of the forms review page, where accordions are used to group sections of editable information, we discourage the use of form elements like radio buttons, checkboxes, and buttons within accordions. Interactive elements will not be focusable when the accordion is in a collapsed state.

## Accessibility considerations

* Code header areas in the accordion as `<buttons>` so that they are usable with both screen readers and the keyboard.
* Buttons should state if they are expanded with `aria-expanded="true"`. `The aria-expanded="false"` attributes will be added to other buttons when the accordion is initialized by the JavaScript.
* Each button has a unique name `aria-controls="id"` that associates the control to the appropriate region by referencing the controlled element’s `id`.
* Each content area will have its `aria-hidden` attribute set to either true or false by the component, depending on its corresponding button’s aria-expanded attribute. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set `aria-hidden="true"` on any of your content areas.
* Testing: the spacebar or enter key must be able to toggle the expand/collapse state of the panel.

## Related

* [Additional info]({{ site.baseurl }}/components/additional-info)

{% include _component-checklist.html component_name=page.web-component %}