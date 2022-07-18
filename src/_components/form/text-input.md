---
layout: component
permalink: /components/form/text-input
has-parent: /components/form/
title: Text input
intro-text: "Text input allows people to enter any type of text unless otherwise restricted."
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/04A043C5-65CA-43BB-88F2-E17EF8B12D7D
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-text-input
---

## Examples

### Default

{% include storybook-preview.html story="components-va-text-input--default" link_text="va-text-input" %}

### Error

{% include storybook-preview.html story="components-va-text-input--error" link_text="va-text-input" %}

### Success

{% include storybook-preview.html story="components-va-text-input--success" link_text="va-text-input" %}

### Required

{% include storybook-preview.html story="components-va-text-input--required" link_text="va-text-input" %}

### Text input with hint text

This should be used in cases where the needed clarification is long or complex, requiring more than two sentences, multiple paragraphs, or special formatting, such as bullet points or links. 

Note that in general we want to avoid this pattern - if a field needs a lot of explanation, it should ideally be moved to its own page with explanation on the page itself. [See other options for Hint text]({{ site.baseurl }}/components/form/#hint-text)

{% include storybook-preview.html story="components-va-text-input--with-hint-text" link_text="va-text-input--with-hint-text" %}

## Usage

### When to use text input

- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
- When users want to be able to paste in a response.

### When to consider something else

- When users are choosing from a specific set of options.

### How to use 

- The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a [textarea]({{ site.baseurl }}/components/form/textarea) instead.
- Text input is among the easiest type of input for desktop users but are more difficult for mobile users. Consider using specific `pattern` attributes or `type="tel"` or `type="number"` to trigger specific mobile keyboards.
- [Required fields](#required) are indicated within the label with the text "(*Required)". All required fields must be indicated. All fields not marked as required are optional.

### Errors

* For all text inputs, the error message is placed between the label and the input.
* See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

<div class="site-showcase">
{% include_relative html/error-text-inputs.html %}
</div>
{% include snippet.html content='html/error-text-inputs.html' %}

### Native Events

- Native onInput and onBlur events are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Avoid `placeholder` text as most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio. Also, placeholder text is no longer visible once a user clicks into the field. Thus users will no longer have that text available when they need to review their entries. People who have cognitive or visual disabilities have additional problems with placeholder text.
- Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.