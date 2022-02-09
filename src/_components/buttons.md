---
layout: default
sub_section: buttons
title: Buttons
---

# Buttons

<p class="va-introtext">Use buttons to signal actions.</p>

## Default buttons

The default buttons are the most commonly-used button on the site.

Examples of default buttons:
- Buttons in modals
- Buttons that advance form pages 
- Buttons that submit or save
- Buttons that prompt users to sign in 

{% include storybook-preview.html story="components-buttons--default-story" %}

## Wizard buttons

Use the **wizard** button to trigger a [wizard](https://design.va.gov/patterns/wizards) on a page.

{% include storybook-preview.html story="components-buttons--primary" %}

### What to use for primary call to actions that link to another page 
Accessibility specialists have determined that calls to action that bring a user to another page should be replaced with more visually prominent links rather than buttons due to confusion with screen readers. Read [Action link](https://design.va.gov/experimental-design/action_links) documentation for more details. We encourage using green buttons for triggering wizards only. 

## Secondary button

Use **secondary** buttons for any actions that need to be _downplayed_ against other actions.
Examples of secondary buttons:
Buttons in modals 
Buttons that advance form pages 
Buttons for editing cards

{% include storybook-preview.html story="components-buttons--secondary" %}

## Big buttons

Any button can be made bigger by adding a class name of `usa-button-big` to the button.

{% include storybook-preview.html story="components-buttons--big" %}

## Disabled buttons

Only `<button>` elements can be disabled with a `disabled` attribute. To make a `<a>` element disabled, you must use `.usa-button.usa-button-disabled` on the element.

{% include storybook-preview.html story="components-buttons--disabled" %}

## Usage

### When to use buttons

* Use buttons for clickable actions you want users to take on a page, such as “Add”, “Close”, “Cancel”, or “Save.”
* Use buttons if you want the user to trigger some kind of Javascript functionality by clicking it.

### When to consider something else
* For navigation between pages of a website, default to using links.
* For a visually prominent call to action that links to another page, use an [Action link](https://design.va.gov/experimental-design/action_links)
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
* Read more about writing for buttons in the [content style guide](https://design.va.gov/content-style-guide/button-labels)

## Accessibility considerations

* When using the `<button>` element, always specify a `type`.
* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* Include more contextual information in the button label for screen readers. You can use an aria label to specify form numbers or program names in the buttons for greater context. 
* It is important to use [Action links](https://design.va.gov/experimental-design/action_links) for calls to actions that link to another page rather than buttons, because screen readers always say “link” before links, and “button” before buttons. 
* Button and link confusion can be very frustrating for assistive technology users. A user with a screen reader may pull up a list of links and may not find a specific link because it turns out that it has actually been designated as a button in the markup. 
* Using buttons and links intentionally results in a more inclusive experience for assistive technology users. Make sure to read both button and [action link](https://design.va.gov/experimental-design/action_links) guidance to determine what is needed for a page. 

