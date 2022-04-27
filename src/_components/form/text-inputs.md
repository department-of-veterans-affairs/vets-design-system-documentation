---
layout: component
permalink: /components/form/text-inputs
has-parent: /components/form/
title: Text inputs
research-title: Form controls
intro-text: "Text inputs (text-input and textarea) allow people to enter any type of text unless otherwise restricted."
status: use-deployed
anchors:
  - anchor: Text input
  - anchor: Text area
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-text-input
---

## Text input

#### Default

{% include storybook-preview.html story="components-va-text-input--default" link_text="va-text-input" %}

#### Success

{% include storybook-preview.html story="components-va-text-input--success" link_text="va-text-input" %}

### Text input with hint text

This should be used in cases where the needed clarification is long or complex, requiring more than two sentences, multiple paragraphs, or special formatting, such as bullet points or links. 

Note that in general we want to avoid this pattern - if a field needs a lot of explanation, it should ideally be moved to its own page with explanation on the page itself. [See other options for Hint text](#hint-text)

{% include storybook-preview.html story="components-va-text-input--with-hint-text" link_text="va-text-input--with-hint-text" %}

## Text area

{% include storybook-preview.html height="300px" story="components-textarea--default" %}

## Usage

### When to use text inputs

- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
- When users want to be able to paste in a response.

### When to consider something else

- When users are choosing from a specific set of options.

### How to use 

- The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.
- Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users. Consider using specific `pattern` attributes or `type="tel"` or `type="number"` to trigger specific mobile keyboards.
- Only show error validation messages or stylings after a user has interacted with a particular field.
- Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Avoid `placeholder` text for accessibility reasons. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.