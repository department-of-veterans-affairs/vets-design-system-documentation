---
layout: default
sub_section: accordions
title: Accordions
---

# Accordions

<div class="va-introtext" markdown="1">
Accordions are a list of headers that can be clicked to hide or reveal additional content.
</div>

<div class="site-c-showcase">
{% include_relative html/accordions.html %}
</div>

{% include snippet.html content='html/accordions.html' %}


## Accessibility

* Code header areas in the accordion as `<buttons>` so that they are usable with both screen readers and the keyboard.
* Buttons should state if they are expanded with `aria-expanded="true"`. `The aria-expanded="false"` attributes will be added to other buttons when the accordion is initialized by the JavaScript.
* Each button has a unique name `aria-controls="id"` that associates the control to the appropriate region by referencing the controlled element’s `id`.
* Each content area will have its `aria-hidden` attribute set to either true or false by the component, depending on its corresponding button’s aria-expanded attribute. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set `aria-hidden="true"` on any of your content areas.

## Usability

### When to use

* Users only need a few specific pieces of content within a page.
* Information needs to be displayed in a small space.

### When to consider something else

* If visitors need to see most or all of the information on a page. Use well-formatted text instead.
* If there is not enough content to warrant condensing. Accordions increase cognitive load and interaction cost, as users have to make decisions about what headers to click on.

### Guidance

* Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
* Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)

## React

The `CollapsiblePanel` component renders the accordion. The interaction is slightly different from the default accordion behavior, where multiple panels within a set can be open at the same time.

<div class="site-c-showcase">
{% include_relative html/collapsible-panel.html %}
</div>
