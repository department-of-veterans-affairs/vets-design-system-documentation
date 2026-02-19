---
layout: component
permalink: /components/button/button-icon
redirect_from:
  - /components/button-icon
has-parent: /components/button/
title: Button - Icon
aka: Button - Tertiary
research-link: Buttons
figma-link-web: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=6554%3A11058&mode=design&t=4Zo01aEkp6l4faTn-1
intro-text: The button icon variation acts as a tertiary button which has equal visual prominence to Link - Action and thus can be used in contexts that require a mix of links and buttons. 
status: use-with-caution-available
uswds-v3: default
web-component: va-button-icon
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Requesting new instances
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Privacy guidance
  - anchor: Component checklist
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

* **Icon plus action label.** These buttons are composed of an icon and a concise label. For the label, use a verb that describes the action the person is taking, and aim to limit the label text to 1 or 2 words. For example, "Change file", "Delete", or "Cancel". The component’s visual style may sometimes render labels in uppercase, but authors should always provide label text in sentence case. Refer to [Capitalization]({{ site.baseurl }}/content-style-guide/capitalization) for guidance on when we permit all caps in visual treatments.

## Requesting new instances

The 3 examples above are the only currently approved instances of this component. Use of icons in buttons of any type will be made on a case-by-case basis. If you feel you need an icon for a button, [follow the process for requesting a new icon]({{ site.baseurl }}/components/icon#requesting-a-new-icon) and indicate that you would like to use it in Button - Icon or another button type.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **Use the verb that describes exactly what will happen when the person takes the action.** For example, use "Delete" instead of "Remove" for when the action will delete a file. Note: Currently, icon and button labels are hard-coded into the component. New icons and labels must be requested following the instructions above.

### Button labels

{% include content/button-labels.md %}

## Accessibility considerations

* **Follow button considerations.** This component should follow the same considerations as a [typical button]({{ site.baseurl }}/components/button#accessibility-considerations).

## Privacy guidance

{% include content/privacy-buttons.md %}

{% include _component-checklist.html component_name=page.web-component %}
