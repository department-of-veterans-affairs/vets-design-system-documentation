---
layout: component
permalink: /components/button/
title: Button
intro-text: Use buttons to signal actions.
research-link: Buttons
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/5317C603-D6BD-4AFF-84E6-151F7A197B91
status: use-best-practice
sub-pages:
  - sub-page: Button pair
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
web-component: va-button
---

{% include _site-in-this-section.html %}

## Examples

### Primary button

{% include storybook-preview.html story="components-va-button--primary" link_text="va-button--primary" %}

### Secondary button

{% include storybook-preview.html story="components-va-button--secondary" link_text="va-button--secondary" %}

### Big buttons

Any button can be made bigger by adding a class name of `usa-button-big` to the button.

{% include storybook-preview.html story="components-va-button--big" link_text="va-button--big" %}

### Disabled buttons

{% include storybook-preview.html story="components-va-button--disabled" link_text="va-button--disabled" %}

## Usage

### When to use buttons

* **Actions.** Use buttons for clickable actions you want users to take on a page, such as “Add”, “Close”, “Cancel”, or “Save.”
* Use buttons if you want the user to trigger some kind of Javascript functionality by clicking it.

### When to use primary buttons

The primary buttons are the most commonly-used button on the site.

### When to use secondary buttons

Use **secondary** buttons for any actions that need to be _downplayed_ against other actions.

### When to consider something else

* **Non-actions.** For navigation between pages of a website, default to using links. Buttons can be used for navigation between pages within a form flow but otherwise use links. Read the guidance on [links vs. buttons](#links-vs-buttons).
* **Call-to-action.** For a visually prominent call to action that links to another page, use an [Action link]({{ site.baseurl }}/components/action-link).

### Behavior

* **Use primary for the most important action.** Use the primary button for the most important action that you want the user to take on the page, or in a section. 
* **Avoid using too many buttons on a page.** Pages with many buttons may signal that the page content needs to be split up.
* **Arrows are reserved.** Arrow icons should only appear for "Back" and "Continue" buttons that appear in forms.

### Mobile behavior

* Primary and secondary buttons should appear full-width up until the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) with the secondary button being on top of the primary button with [2 spacing unit]({{ site.baseurl }}/foundation/spacing-units#spacing-unit-tokens) of separation between them.
* At and after the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) the buttons left align and revert to a natural width (i.e. as wide as they need to be to accommodate their label). 

### Choosing between variations

* Use the primary button for the primary action and the secondary button for actions that need to be _downplayed_ against the primary action.

### Placement

* Buttons generally appear on their own line at the bottom of a form or section.
* Primary buttons usually appear first, or to the left, of a secondary button.

### Instances of this component in production

#### Examples of primary buttons

- Buttons in modals
- Buttons that advance form pages 
- Buttons that submit or save
- Buttons that prompt users to sign in 

#### Examples of secondary buttons

* Back or cancel buttons


{% include component-docs.html component_name=page.web-component %}

## Content considerations

### Button labels

{% include content/button-labels.md %}

## Accessibility considerations

* When using the `<button>` element, always specify a `type`.
* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* Include more contextual information in the button label for screen readers. You can use an aria label to specify form numbers or program names in the buttons for greater context. 
* It is important to use [Action links]({{ site.baseurl }}/components/action-link) for calls to actions that link to another page rather than buttons, because screen readers always say “link” before links, and “button” before buttons. 
* We follow [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons) which recommend that:
> On a touchscreen, buttons need a hit target of at least 44x44 points to accommodate a fingertip. On all screens, it’s essential to include enough space around a button so that people can visually distinguish it from surrounding components and content, whether people use touch, a pointer, or a system that expands a button when it’s in focus.
* Use at least 8px separating tappable elements. 

{% include content/links-vs-buttons.md %}

{% include a11y/do-not-disable-buttons.md %}