---
layout: default
sub_section: accordions
title: Accordions
---

# Accordions

<div class="va-introtext" markdown="1">
Accordions, which employ the UX principle of progressive disclosure, are a list of headers that can be clicked to hide or reveal additional content. By default, accordions are multi-selectable and borderless, however, props can be added to make them bordered and single-select.
</div>

## Examples

### Default

{% include storybook-preview.html story="components-va-accordion--default" %}

### Bordered

{% include storybook-preview.html story="components-va-accordion--bordered" %}

### Single Select

* Adding an `open-single` prop on the `va-accordion` component will allow the user to only open one accordion at a time.

{% include storybook-preview.html story="components-va-accordion--single-select" %}

### Subheader

{% include storybook-preview.html story="components-va-accordion--subheader" %}

## Usage

### When to use accordions

Use an accordion:

* If users only need to access a few pieces of related information within a content-heavy page.
* To organize related content in a small space.

### When to consider something else

Consider another solution if:

* Users need to see most or all of the information on the page at one time. Use well-formatted text with discriptive headings instead.
* There is not enough content to warrant condensing. Accordions increase cognitive load and interaction cost, as users have to make decisions about which headers to click.
* Users would benefit from seeing additional context for a discrete piece of content. Use the [Addtional info](https://design.va.gov/components/additional-info) component instead to leverage show/hide functionality. 

See [Expandable content](https://design.va.gov/patterns/content-presentation#expandable-content) for more accordion usage guidelines.

### Behavior

* Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
* Make sure interactive elements (such as links) within the collapsible region are far enough from the header that users don’t accidentally trigger a collapse. (The exact distance will depend on the device.)

## Content considerations

* Keep content succinct – accordion height will fluctuate depending on the length of the content. 
* If the accordion has a subheading, it should not wrap to two lines. 
* In general, accordions should organize static content. Outside of the forms review page, where accordions are used to group sections of editable information, we discourage the use of form elements like radio buttons, checkboxes, and buttons within accordions. Interactive elements will not be focusable when the accordion is in a collapsed state.

## Accessibility considerations

* Code header areas in the accordion as `<buttons>` so that they are usable with both screen readers and the keyboard.
* Buttons should state if they are expanded with `aria-expanded="true"`. `The aria-expanded="false"` attributes will be added to other buttons when the accordion is initialized by the JavaScript.
* Each button has a unique name `aria-controls="id"` that associates the control to the appropriate region by referencing the controlled element’s `id`.
* Each content area will have its `aria-hidden` attribute set to either true or false by the component, depending on its corresponding button’s aria-expanded attribute. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set `aria-hidden="true"` on any of your content areas.
* Using the spacebar or enter key must toggle the expand/collapse state of the panel.
