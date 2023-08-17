---
layout: component
permalink: /components/button/button-pair
has-parent: /components/button/
title: Button pair
research-link: Buttons
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/F2B3C09A-004C-4A71-BD77-E0A2C1EF2BAA
intro-text: Use button pairs to provide navigation through a form flow or a primary and secondary action.
status: use-with-caution-candidate
uswds-v3: default
web-component: va-button-pair
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Default (Yes/No)
{% include storybook-preview.html story="components-va-button-pair--default" link_text="Default button pair" %}

### Update/Cancel
{% include storybook-preview.html story="components-va-button-pair--update" link_text="Update/Cancel button pair" %}

### Back/Continue
{% include storybook-preview.html story="components-va-button-pair--continue" link_text="Back/Continue button pair" %}

## Usage

### When to use a button pair

* Use the [default](#default-yesno) button pair variation to provide primary and secondary response options to a question.
* Use the [Update/Cancel](#updatecancel) button pair variation for saving form input on a form.
* Use the [Back/Continue](#backcontinue) button pair variation for providing navigation options through a step by step flow of form pages.

### When to consider something else

* **Navigation outside of the flow.** For navigation to pages outside of the form flow, use a [link]({{ site.baseurl }}/components/link).
* **Call-To-Action.** For a visually prominent call to action (CTA) that links to another page, use an [action link]({{ site.baseurl }}/components/action-link).

### Behavior

* **Avoid using too many buttons on a page.** Pages with many buttons may signal that the page content needs to be split up.
* **Arrows are reserved.** Arrow icons should only appear for the [Back/Continue](#backcontinue) button pair.

### Mobile behavior

* Primary and secondary buttons should appear full-width up until the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) with the primary button being on top of the secondary button with [2 spacing unit]({{ site.baseurl }}/foundation/spacing-units#spacing-unit-tokens) of separation between them.
* At and after the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) the buttons left align and revert to a natural width (i.e. as wide as they need to be to accommodate their label) with the primary button continuing to appear before the secondary button.

### Placement

* A button pair appears at the bottom of a form.

### Design principles

* [Fitts's Law](https://lawsofux.com/fittss-law/) is important to keep in mind when determining button sizing and placement. Touch targets should be placed where they can be easily and quickly acquired. For example, this is why we do not split the buttons far apart, aligning them to different sides of the viewport. Fitts's Law states:

> The time to acquire a target is a function of the distance to and size of the target 

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* Include more contextual information in the button label for screen readers. You can use an aria label, using the ariaLabel or ariaDescribedby properties, to specify form numbers or program names in the buttons for greater context. 
* We follow the [WCAG 2.1 Target Size - Level AAA](https://www.w3.org/WAI/WCAG21/quickref/#target-size) criteria which states:
> "The size of the target for pointer inputs is at least 44 by 44 CSS pixels..."

That guidance agrees with [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons) which recommend that:
> "On a touchscreen, buttons need a hit target of at least 44x44 points to accommodate a fingertip. On all screens, it’s essential to include enough space around a button so that people can visually distinguish it from surrounding components and content, whether people use touch, a pointer, or a system that expands a button when it’s in focus."

* Use at least [1 spacing unit]({{ site.baseurl }}/foundation/spacing-units) separating tappable elements. 

{% include content/links-vs-buttons.md %}

{% include _component-checklist.html component_name=page.web-component %}