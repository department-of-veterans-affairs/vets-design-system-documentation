---
layout: component
permalink: /components/button/button-group
has-parent: /components/button/
title: Button group
aka: Button pair
research-link: Buttons
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=3109%3A381&mode=design&t=HPTk6DwbG1oCM61n-1
intro-text: The default button group arranges each button as a separate element with a gap between them. On mobile devices, the buttons are arranged vertically. 
status: use-deployed
uswds-v3: default
web-component: va-button-pair
anchors:
  - anchor: Examples - v3
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples - v3

### Default (Yes/No)

{% include storybook-preview.html story="uswds-va-button-pair--default" link_text="Default v3 button pair along with additional variations" height="60px" %}

### Update

{% include storybook-preview.html story="uswds-va-button-pair--update" link_text="Update/Cancel button pair" height="60px" %}

### Continue

{% include storybook-preview.html story="uswds-va-button-pair--continue" link_text="Back/Continue button pair" height="60px" %}

## Examples - v1

### Default (Yes/No)

{% include storybook-preview.html story="components-va-button-pair--default" link_text="Default button pair" height="60px" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/button-group/">Refer to the U.S. Web Design System for usage guidance for the Default button group</a>

### Additional guidance for VA

* NOTE: We will be changing the name of this component from button-pair to button-group to align with the USWDS.
* NOTE: We do not yet offer the Segmented button group option.

### When to consider something else

* **Navigation outside of the flow.** For navigation to pages outside of the form flow, use a [link]({{ site.baseurl }}/components/link).
* **Call-To-Action.** For a visually prominent call to action (CTA) that links to another page, use an [action link]({{ site.baseurl }}/components/action-link).

### Behavior

* **Avoid using too many buttons on a page.** Pages with many buttons may signal that the page content needs to be split up.
* **Arrows are reserved.** Arrow icons should only appear for the [Back/Continue](#backcontinue) button group.

### Mobile behavior

* Primary and secondary buttons should appear full-width up until the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) with the primary button being on top of the secondary button with [2 spacing unit]({{ site.baseurl }}/foundation/spacing-units#spacing-unit-tokens) of separation between them.
* At and after the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) the buttons left align and revert to a natural width (i.e. as wide as they need to be to accommodate their label) with the primary button continuing to appear before the secondary button.

### Choosing between variations

* Use the [default](#default-yesno) button group variation to provide primary and secondary response options to a question.
* Use the [Update/Cancel](#updatecancel) button group variation for saving form input on a form.
* Use the [Back/Continue](#backcontinue) button group variation for providing navigation options through a step by step flow of form pages.

### Placement

* A button group appears at the bottom of a form.

### Design principles

* [Fitts's Law](https://lawsofux.com/fittss-law/) is important to keep in mind when determining button sizing and placement. Touch targets should be placed where they can be easily and quickly acquired. For example, this is why we do not split the buttons far apart, aligning them to different sides of the viewport. Fitts's Law states:

> The time to acquire a target is a function of the distance to and size of the target

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* Include more contextual information in the button label for screen readers. You can use an aria label, using the ariaLabel or ariaDescribedby properties, to specify form numbers or program names in the buttons for greater context. 
* Refer to our guidance for the [Button component]({{ site.baseurl }}/components/button/#accessibility-considerations)

{% include _component-checklist.html component_name="va-button-group" %}