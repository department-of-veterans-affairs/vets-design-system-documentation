---
layout: component
permalink: /components/button/progress-button
has-parent: /components/button/
title: Progress button
research-link: Buttons
intro-text: Use the progress button in form flows to proceed forward or go back.
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to use
  - anchor: Accessibility considerations
---

## Examples

### Progress button
{% include storybook-preview.html story="components-buttons-progressbutton--default" %}

### Button pairs
{% include storybook-preview.html story="components-buttons-progressbutton--button-pairs" %}

## Usage

### When to use progress button
* Use progress buttons for clickable actions you want users to take on a page, such as “Continue” or Back.”
* Use progress buttons if you want the user to trigger some kind of Javascript functionality by clicking it.

### When to consider something else
* For navigation between pages of a website, default to using links.
* For a visually prominent call to action that links to another page, use an [Action link]({{ site.baseurl }}/components/action-link)
* Buttons vs text links can be confusing. A good rule is if the action changes the url, it should not be a button.

### How to use 
* Avoid using too many buttons on a page.
* Only use  arrow icons  in buttons for "Back" and "Continue" buttons that appear in forms 
* Use sentence case for button labels.
* Keep the character limit for button labels to 35 characters. Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “Back" or "Continue"). 
* Read more about writing for buttons in the [content style guide]({{ site.baseurl }}/content-style-guide/button-labels)

<!--- {% include component-docs.html component_name=page.web-component %} -->

## Accessibility considerations

* Include more contextual information in the button label for screen readers. You can use an aria label, using the ariaLabel or ariaDescribedby properties, to specify form numbers or program names in the buttons for greater context. 
* It is important to use [Action links]({{ site.baseurl }}/components/action-link) for calls to actions that link to another page rather than buttons, because screen readers always say “link” before links, and “button” before buttons. 
* Button and link confusion can be very frustrating for assistive technology users. A user with a screen reader may pull up a list of links and may not find a specific link because it turns out that it has actually been designated as a button in the markup. 
* Using buttons and links intentionally results in a more inclusive experience for assistive technology users. Make sure to read both button and [action link]({{ site.baseurl }}/components/action-link) guidance to determine what is needed for a page. 
* A button's tap target size should be at least 48 x 48 px, with at least 8 px separating tappable elements. 