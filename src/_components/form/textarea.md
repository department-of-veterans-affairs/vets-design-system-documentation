---
layout: component
permalink: /components/form/textarea
has-parent: /components/form/
title: Textarea
intro-text: "Textarea allows people to enter any type of text."
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/04A043C5-65CA-43BB-88F2-E17EF8B12D7D
status: use-deployed
anchors:
  - anchor: Textarea
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-textarea
---

## Textarea

{% include storybook-preview.html height="300px" story="components-va-textarea--default" link_text="va-textarea" %}

## Usage

### When to use textarea

- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
- When users want to be able to paste in a response.

### When to consider something else

- When users are choosing from a specific set of options.

### How to use 

- Only show error validation messages or stylings after a user has interacted with a particular field.
- Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

### Native Events

- Native onInput and onBlur events are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Avoid `placeholder` text for accessibility reasons. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.