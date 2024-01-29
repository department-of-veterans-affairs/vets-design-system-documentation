---
layout: component
title: Accordion
intro-text: "Accordions, which use the UX principle of progressive disclosure, are a list of headers that can be clicked to hide or reveal additional content. By default, accordions are multi-selectable and borderless, however, props can be added to make them bordered and single-select."
research-title: Accordions
status: use-best-practice
sketch-link: https://www.sketch.com/s/a52734dd-00d0-44f1-9c9e-ff4016130e5c/p/E65548E2-EFDF-4CC9-A6FB-FC0D14B66C1B/canvas
uswds-v3: default
web-component: va-accordion
anchors:
  - anchor: Examples - v1
  - anchor: Examples - v3
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples - v1

### Default

{% include storybook-preview.html story="components-va-accordion--default" link_text="va-accordion default" %}

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

{% include storybook-preview.html story="components-va-accordion--using-icons" link_text="va-accordion Icon in header" %}

## Examples - v3

{% include storybook-preview.html story="uswds-va-accordion--default" link_text="va-accordion v3 along with additional variations" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/accordion/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### Additional uses of accordions

* **Organizing related sections of content to condense and chunk the content.** When you need to organize related sections of content into a smaller space use accordions to condense and group the content.
* **A series of content**: If you have a series of content in the body of a page and outside of a form or tool. For example, if you have a series of questions as part of an FAQ section or a set of options for payment that each have additional details. 
* **Content organized under a new heading.** If you have enough content that it makes sense to organize under a new heading that does not make sense under the same heading as the content nearby. 
* **Reveal and compare relevant information.** When users need to reveal and compare relevant and related information accordions can make this easier.

#### Additional reasons to consider something else

* **Users would benefit from seeing additional context for a discrete piece of content.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component instead to leverage show/hide functionality, especially in a form. 
* **Content that can be organized under the current heading.** Use the [Additional info]({{ site.baseurl }}/components/additional-info) component if you have additional content that provides context and makes sense under the same heading as the content nearby.
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

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/accordion/#accessibility-accordion">Refer to the U.S. Web Design System for accessibility guidance</a>

## Related

* [Additional info]({{ site.baseurl }}/components/additional-info)

{% include _component-checklist.html component_name=page.web-component %}