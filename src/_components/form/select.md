---
layout: component
permalink: /components/form/select
has-parent: /components/form/
title: Select
intro-text: "A select box allows users to select one option from a list."
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/93AD583C-43C8-40A6-9363-36D3CC2C2AAD
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-select
---

{% include storybook-preview.html story="components-va-select--default" link_text="va-select" %}

## Usage

### When to use select

- Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

### When to consider something else

- If the list of options is very short. Use radio buttons instead.
- If the list of options is very long. Let users type the same information into a text input that suggests possible options instead.
- If you need to allow users to select more than one option at once. Users often don’t understand how to select multiple items from select boxes. Use checkboxes instead.
- If you are intending to provide navigation. To help users navigate to a section on the same page or another page in the site, use a [text link]({{ site.baseurl }}/components/link) or the [sidenav component]({{ site.baseurl }}/components/sidenav).

### How to use

- Test select boxes thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.
- On mobile devices, select boxes use a scroll wheel rather than a dropdown, which some users find difficult to use.
- Avoid making options in one select box menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.
- When most users will (or should) pick a particular option, make it the default: `<option selected="selected">Default</option>`
- Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.

### Native Events

- The native onKeyDown event is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Make sure your select box has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).
- Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.