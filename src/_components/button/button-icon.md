---
layout: component
permalink: /components/button/button-icon
redirect_from:
  - /components/button-icon
has-parent: /components/button/
title: Button - Icon
aka: Button - Tertiary
research-link: Buttons
figma-link: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=6554%3A11058&mode=design&t=4Zo01aEkp6l4faTn-1
intro-text: The button icon variation acts as a tertiary button which has equal visual prominence to Link - Action and thus can be used in contexts that require a mix of links and buttons. 
status: use-with-caution-candidate
uswds-v3: default
web-component: va-button-icon
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Requesting a new instance
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Change file

{% include storybook-preview.html story="components-va-button-icon--change-file" link_text="Change file, used in the File input component" height="75px" %}

### Delete

{% include storybook-preview.html story="components-va-button-icon--delete" link_text="Delete, used in the File input component" height="75px" %}

### Cancel

{% include storybook-preview.html story="components-va-button-icon--cancel" link_text="va-button-icon cancel variation" height="75px" %}

## Usage

### When to use Button - Icon

* **In a Card or other container alongside a primary link.** This component is mainly intended to sit alongside a primary link, typically a [Link - Active]({{ site.baseurl }}/components/link#active) variation, within a [Card]({{ site.baseurl }}/components/card). This allows the link to visually have the affordance as the primary action and the Button - Icon the affordance of a secondary action.

### When to consider something else

* **When a secondary button will suffice.** Button - Icon does not replace the [Button - Secondary]({{ site.baseurl }}/components/button#default---secondary). Only use Button - Icon when Button - Secondary would visually dwarf a link primary action.

### How this component works

* **Icon plus uppercase label.** These buttons are composed of an icon and an uppercase label. The label is a verb that represents an action that the user is taking. Because the visual style of this button uses uppercase text, labels must be very concise actions and thus are limited to one or two words only.

## Requesting a new instances

The 3 examples above are the only currently approved instances of this component. Use of icons in buttons of any type will be made on a case-by-case basis. If you feel you need an icon for a button, [follow the process for requesting a new icon]({{ site.baseurl }}/foundation/icons#requesting-a-new-icon) and indicate that you would like to use it in Button - Icon or another button type.

## Content considerations

* **Delete is preferred to remove.** We prefer words that describe exactly what will happen when you tap or click. Note: Currently, icon and button labels are hard-coded into the component. New icons and labels must be requested following the instructions above.

## Accessibility considerations

* **Follow button considerations.** This component should follow the same considerations as a [typical button]({{ site.baseurl }}/components/button#accessibility-considerations).
