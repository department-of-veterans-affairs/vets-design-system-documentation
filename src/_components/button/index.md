---
layout: component
permalink: /components/button/
title: Button
intro-text: Use buttons to signal actions.
research-link: Buttons
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/5317C603-D6BD-4AFF-84E6-151F7A197B91
status: use-best-practice
sub-pages:
  - sub-page: Progress button
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
web-component: va-button
---

{% include _site-in-this-section.html %}

## Examples

### Primary button

The primary buttons are the most commonly-used button on the site.

Examples of primary buttons:
- Buttons in modals
- Buttons that advance form pages 
- Buttons that submit or save
- Buttons that prompt users to sign in 

{% include storybook-preview.html story="components-va-button--primary" link_text="va-button--primary" %}

### Secondary button

Use **secondary** buttons for any actions that need to be _downplayed_ against other actions.

Examples of secondary buttons:
* Buttons in modals 
* Buttons that advance form pages 
* Buttons for editing cards

{% include storybook-preview.html story="components-va-button--secondary" link_text="va-button--secondary" %}

### Big buttons

Any button can be made bigger by adding a class name of `usa-button-big` to the button.

{% include storybook-preview.html story="components-va-button--big" link_text="va-button--big" %}

### Disabled buttons

Only `<button>` elements can be disabled with a `disabled` attribute. To make a `<a>` element disabled, you must use `.usa-button.usa-button-disabled` on the element.

{% include storybook-preview.html story="components-buttons-button--disabled" %}

## Usage

### When to use buttons

* Use buttons for clickable actions you want users to take on a page, such as “Add”, “Close”, “Cancel”, or “Save.”
* Use buttons if you want the user to trigger some kind of Javascript functionality by clicking it.

### When to consider something else
* For navigation between pages of a website, default to using links.
* For a visually prominent call to action that links to another page, use an [Action link]({{ site.baseurl }}/components/action-link)
* Buttons vs text links can be confusing. A good rule is if the action changes the url, it should not be a button.

### How to use buttons
* Buttons can be applied to `<button>`, which are used for actions
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons look clickable—use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Only use  arrow icons  in buttons for "Back" and "Continue" buttons that appear in forms 
* Use sentence case for button labels.
* Keep the character limit for button labels to 35 characters. Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”). 
* Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc).
* Read more about writing for buttons in the [content style guide]({{ site.baseurl }}/content-style-guide/button-labels)

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