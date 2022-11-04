---
layout: component
permalink: /components/form/textarea
has-parent: /components/form/
title: Textarea
intro-text: "Textarea allows people to enter any type of text."
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/C6340B6C-F41E-423B-BDEA-B340A81C9714
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-textarea
---

## Examples

### Default
{% include storybook-preview.html height="260px" story="components-va-textarea--default" link_text="va-textarea" %}

### Error
{% include storybook-preview.html height="260px" story="components-va-textarea--error" link_text="va-textarea error" %}

See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

### Max length
{% include storybook-preview.html height="275px" story="components-va-textarea--max-length" link_text="va-textarea max length" %}

### Required
{% include storybook-preview.html height="260px" story="components-va-textarea--required" link_text="va-textarea required" %}

### Hint text

Refer to the overall [form guidance]({{ site.baseurl }}/components/form#hint-text) for hint text examples and usage.

## Usage

### When to use textarea

- If you can’t reasonably predict a user's answer to a prompt and there might be wide variability in users’ answers.
- When users want to be able to paste in a response.
- When using another type of input will make answering more difficult. 

### When to consider something else

- When a short, single line of text is expected and sufficient.
- When users are choosing from a specific set of options.

### How to use 

- Only show error validation messages or stylings after a user has interacted with a particular field.

### Behavior

* **Max length variation.** The Max length variation adds placeholder text inside the textarea. Once the user starts typing this placeholder text disappears. Once the user has entered the same number of characters as the max length, text appears below the field in the following format: (Max. NN characters). At that point no additional text can be entered into the textarea. If the user removes one or more characters and thus goes below the max limit the text beneath the field is removed.
  * Note: When using this variation please note the [accessibility considerations](#accessibility-considerations) that you must take into account.

{% include component-docs.html component_name=page.web-component %}

### Native Events

- Native onInput and onBlur events are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

* **Avoid `placeholder` text.** Excluding our max characters variation, avoid using placeholder text. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio. Also, placeholder text is no longer visible once a user clicks into the field. Thus users will no longer have that text available when they need to review their entries. People who have cognitive or visual disabilities have additional problems with placeholder text.
* **When using placeholder text, provide screen reader accessible text.** When using the placeholder prop, which is used automatically by the Max length variation, additional work is required to make the component accessible. Screen readers such as JAWS and NVDA don't read placeholder text. Placeholder text is a visual addition only. Thus when using placeholder text to provide important information visually you must also convey this information to screen reader users as well. To do this this add screen read only text within a `<span>` using the `.sr-only` CSS class and place the span and text where you would like it to be read out, typically after the field label. 