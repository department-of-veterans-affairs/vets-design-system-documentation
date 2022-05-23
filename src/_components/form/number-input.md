---
layout: component
permalink: /components/form/number-input
has-parent: /components/form/
title: Number input
research-title: Form controls
intro-text: "Number input elements are used for numeric inputs."
status: use-deployed
anchors:
  - anchor: Number input
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-number-input
---

### Number input

* Number input always has the type of `number` and provides a `min` and `max` attribute to set a range on the component. 

{% include storybook-preview.html story="components-va-number-input--default" link_text="va-number-input" %}

## Usage

### When to use number input

- When a number should be the only accepted value within an input element.
- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When users want to be able to paste in a response.

### When to consider something else

- When users are choosing from a specific set of options.
- A number is not the only accepted value for the input. 
- The number should be a type other than number, ie: telephone numbers

### How to use 

- Only show error validation messages or stylings after a user has interacted with a particular field.
- Avoid using placeholder text that appears within a input field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

### Native Events

- Native events such as onInput and onBlur are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Avoid `placeholder` text for accessibility reasons. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.
