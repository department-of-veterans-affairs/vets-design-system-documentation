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
{% include storybook-preview.html story="components-va-text-input--error" link_text="va-text-input Error" %}

See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

### Success
{% include storybook-preview.html story="components-va-text-input--success" link_text="va-text-input Success" %}

### Required
{% include storybook-preview.html story="components-va-text-input--required" link_text="va-text-input Required" %}

### Internationalization
{% include storybook-preview.html story="components-va-text-input--internationalization" link_text="va-text-input Internationalization" height="175px" %}

### Max length
{% include storybook-preview.html story="components-va-text-input--max-length" link_text="va-text-input Max length" %}

### Range
{% include storybook-preview.html story="components-va-text-input--range" link_text="va-text-input Range" %}

### Pattern
{% include storybook-preview.html story="components-va-text-input--pattern" link_text="va-text-input Pattern" %}

### With Hint Text

{% include storybook-preview.html story="components-va-text-input--with-hint-text" link_text="va-text-input with Hint text" %}

Also refer to the overall [form guidance]({{ site.baseurl }}/components/form#hint-text) for hint text examples and usage.

### With Additional Info

{% include storybook-preview.html story="components-va-text-input--with--additional-info" link_text="va-text-input with Additional info" %}

### Widths

{% include storybook-preview.html story="components-va-text-input--with--widths" link_text="va-text-input widths" height="800px" %}

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

### Behavior

* **Max length variation.** The Max length variation adds placeholder text inside the text-input. Once the user starts typing, this placeholder text disappears. Once the user has entered the same number of characters as the max length, text appears below the field in the following format: (Max. NN characters). At that point no additional text can be entered into the text-input. If the user removes one or more characters and thus goes below the max limit the text beneath the field is removed.
  * Note: When using this variation please note the [accessibility considerations](#accessibility-considerations) that you must take into account.

### Choosing between variations

* **Error.** Highlights the text input field where the user has made an error that needs to be corrected.
* **Success.** Indicates to the user in realtime that an error has been cleared and the text entry is now valid. NOTE: This isn't typically used currently.
* **Required.** Indicates to the user that the text input field is required in order to submit the form.
* **Internationalization.** Demonstrates how this components changes when used with the language toggle.
* **Max Length.** Indicates to the user when a maximum number of characters has been entered into the text input field.
* **Min Length.** Indicates to the user when a minimum number of characters must be entered into a field.
* **Range.** A combination of the above max and min length parameters indicating an acceptable range of characters to be entered into the field.
* **Pattern.** Allows for a pattern of characters to be required for a the text input entry to be valid.
* **Autocomplete.** Provides type-ahead functionality. 
* **With Hint Text.** Provides a short hint to the user on what to enter into the field.
* **With Additional Info.** Depicts how to use the [additional info component]({{ site.baseurl }}/components/additional-info) within a va-text-input. 
* **Widths.** Indicates to the user the expected length of text input by sizing the field relative to what is expected.

{% include component-docs.html component_name=page.web-component %}

### Native Events

- Native onInput and onBlur events are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

* **Avoid `placeholder` text.** Excluding our max characters variation, avoid using placeholder text. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio. Also, placeholder text is no longer visible once a user clicks into the field. Thus users will no longer have that text available when they need to review their entries. People who have cognitive or visual disabilities have additional problems with placeholder text.
* **When using placeholder text, provide screen reader accessible text.** When using the placeholder prop, which is used automatically by the Max length variation, additional work is required to make the component accessible. Screen readers such as JAWS and NVDA don't read placeholder text. Placeholder text is a visual addition only. Thus when using placeholder text to provide important information visually you must also convey this information to screen reader users as well. To do this, add screen read only text within a `<span>` using the `.sr-only` CSS class and place the span and text where you would like it to be read out, typically after the field label. 
* **Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields.** For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.