---
layout: component
permalink: /components/button/
title: Button
intro-text: Use buttons to signal actions.
research-link: Buttons
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/5317C603-D6BD-4AFF-84E6-151F7A197B91
status: use-with-caution-candidate
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

### Big button

Any button can be made bigger by adding a class name of `usa-button-big` to the button.

{% include storybook-preview.html story="components-va-button--big" link_text="va-button--big" %}

### Disabled button

{% include storybook-preview.html story="components-va-button--disabled" link_text="va-button--disabled" %}

## Usage

### When to use a button

* **Actions.** Use buttons for clickable actions you want users to take on a page, such as “Add”, “Close”, “Cancel”, or “Save.” Buttons **do things**, links **go places**. Refer to guidance on [Links vs. buttons](#links-vs-buttons).
* **Triggers.** Buttons can also trigger functionality via Javascript. For example, closing a modal window. 

### When to use a primary button

* **Use primary for the most important action.** Use the primary button for the most important action that you want the user to take on the page, or in a section. 

### When to use a secondary button

* **Use secondary for non-primary actions.** Use secondary buttons for any actions that need to be _downplayed_ against other actions on the page, or in a section.

### When to consider something else

* **Non-actions.** For navigation between pages of a website, default to using links. Buttons can be used for navigation between pages within a form flow but otherwise use links. Read the guidance on [links vs. buttons](#links-vs-buttons).
* **Call-to-action.** For a visually prominent call to action that links to another page, use an [Action link]({{ site.baseurl }}/components/action-link).

### Behavior

* **Avoid using too many buttons on a page.** Pages with many buttons may signal that the page content needs to be split up.
* **Avoid using many primary buttons on a single page or section.** Pages with many primary buttons reduces their impact and make it harder for users to know what to do next.
* **Arrows are reserved.** Arrow icons should only appear for "Back" and "Continue" buttons that appear in forms.
* **Avoid disabling buttons.** [Disabling buttons is strongly discouraged.](#do-not-disable-buttons)

### Mobile behavior

* Primary and secondary buttons should appear full-width up until the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) with the secondary button being on top of the primary button with [2 spacing unit]({{ site.baseurl }}/foundation/spacing-units#spacing-unit-tokens) of separation between them.
* At and after the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) the buttons left align and revert to a natural width (i.e. as wide as they need to be to accommodate their label). 

### Choosing between variations

* Use the primary button for the primary action and the secondary button for actions that need to be _downplayed_ against the primary action.

### Placement

* Buttons generally appear on their own line at the bottom of a form or section.
* Primary buttons usually appear first, or to the left, of a secondary button.

### Instances of this component in production

#### Primary button with a secondary link

* **Links can substitute for secondary buttons.** It is not always necessary to pair a secondary button with a primary button. In the example below a link can also suffice for a non-primary action.

{% include component-example.html alt="Example of a primary button with a secondary link." file="/images/components/button/primary-with-secondary-link.png" caption="An example of a primary button used with a secondary link." reverse=true %}


#### Secondary button as radio button

This variation substitutes the large tap target of a button where a radio button would traditionally be used. This serves a similar purpose to the [USWDS Tile variation of a Radio button](https://designsystem.digital.gov/components/radio-buttons/). 

* **Limit to Yes/No.** This variation should be limited to Yes/No questions rather than used as a substitute for radio buttons which can more readily handle 3 or more responses.
* **Reflect selections.** The response of the user must change the button from a secondary button to a ```$color-primary-darker``` background in order to reflect the state of the user's response.

{% include component-example.html alt="Example of the secondary button as radio button substitution." file="/images/components/button/button-as-radio.png" caption="The COVID-19 Screener uses secondary buttons instead of radio buttons for Yes/No questions." %}

{% include component-docs.html component_name=page.web-component %}

## Content considerations

### Button labels

{% include content/button-labels.md %}

## Accessibility considerations

* When using the `<button>` element, always specify a `type`.
* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* Include more contextual information in the button label for screen readers. You can use an aria label to specify form numbers or program names in the buttons for greater context. 
* We follow the [WCAG 2.1 Target Size - Level AAA](https://www.w3.org/WAI/WCAG21/quickref/#target-size) criteria which states:
> "The size of the target for pointer inputs is at least 44 by 44 CSS pixels..."

That guidance agrees with [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons) which recommend that:
> "On a touchscreen, buttons need a hit target of at least 44x44 points to accommodate a fingertip. On all screens, it’s essential to include enough space around a button so that people can visually distinguish it from surrounding components and content, whether people use touch, a pointer, or a system that expands a button when it’s in focus."

* Use at least [1 spacing unit]({{ site.baseurl }}/foundation/spacing-units) separating tappable elements. 

{% include content/links-vs-buttons.md %}

{% include a11y/do-not-disable-buttons.md %}