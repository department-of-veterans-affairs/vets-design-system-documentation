---
layout: component
permalink: /components/form/text-input
has-parent: /components/form/
title: Text input
intro-text: "Text input allows people to enter any type of text unless otherwise restricted."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1377%3A95544&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-deployed
uswds-v3: default
web-component: va-text-input
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-text-input--default" link_text="va-text-input" %}

### Required

{% include storybook-preview.html story="uswds-va-text-input--required" link_text="va-text-input Required" %}

### Pattern

{% include storybook-preview.html story="uswds-va-text-input--pattern" link_text="va-text-input Pattern" %}

### Valid Range

{% include storybook-preview.html story="uswds-va-text-input--valid-range" link_text="va-text-input valid range" %}

### Autocomplete

{% include storybook-preview.html story="uswds-va-text-input--autocomplete" link_text="va-text-input Autocomplete" %}

### Hint Text

{% include storybook-preview.html story="uswds-va-text-input--with-hint-text" link_text="va-text-input with Hint text" %}

Also refer to the overall [form guidance]({{ site.baseurl }}/components/form#hint-text) for hint text examples and usage.

### Inline Hint Text

{% include storybook-preview.html story="uswds-va-text-input--with-inline-hint-text" link_text="va-text-input with inline Hint text" %}

### Additional Info

{% include storybook-preview.html story="uswds-va-text-input--with-additional-info" link_text="va-text-input with Additional info" %}

### Character count

{% include storybook-preview.html story="uswds-va-text-input--with-character-count" link_text="va-text-input with character count" %}

### Currency

{% include storybook-preview.html story="uswds-va-text-input--with-currency" link_text="va-text-input with currency" %}

### Forms pattern - Single

{% include storybook-preview.html story="uswds-va-text-input--forms-pattern-single" link_text="va-text-input forms pattern single" height="500px" %}

### Forms pattern - Single error

{% include storybook-preview.html story="uswds-va-text-input--forms-pattern-single-error" link_text="va-text-input forms pattern single error" height="500px" %}

### Forms pattern - Multiple

{% include storybook-preview.html story="uswds-va-text-input--forms-pattern-multiple" link_text="va-text-input forms pattern multiple" height="500px" %}

### Error

{% include storybook-preview.html story="uswds-va-text-input--error" link_text="va-text-input Error" %}

See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

### Success

{% include storybook-preview.html story="uswds-va-text-input--success" link_text="va-text-input Success" %}

### Internationalization

{% include storybook-preview.html story="uswds-va-text-input--internationalization" link_text="va-text-input Internationalization" height="175px" %}

### Prefix (Icon)

{% include storybook-preview.html story="uswds-va-text-input--with-icon" link_text="va-text-input with prefix" height="175px" %}

### Suffix (Text)

{% include storybook-preview.html story="uswds-va-text-input--with-suffix" link_text="va-text-input with suffix" height="175px" %}

### Prefix and Suffix

{% include storybook-preview.html story="uswds-va-text-input--with-icon-and-suffix" link_text="va-text-input with icon and suffix" height="175px" %}
  
### Widths

{% include storybook-preview.html story="uswds-va-text-input--widths" link_text="va-text-input widths" height="800px" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/text-input/">Refer to the U.S. Web Design System for usage guidance</a>

### Choosing between variations

* **Required.** Indicates to the user that the text input field is required in order to submit the form.
* **Pattern.** Allows for a pattern of characters to be required for the text input entry to be valid.
* **Valid range.** Allows for a range of numeric values to be required for the text input entry to be valid.
* **Autocomplete.** Specifies what if any permission the user agent has to provide automated assistance in filling out form field values, as well as guidance to the browser as to the type of information expected in the field.
* **Hint Text.** Provides a short hint to the user on what to enter into the field.
* **Inline Hint Text.** Provides a very short hint to the user within the label on what to enter into the field. Hint text is preferred to inline hint text.
* **Additional Info.** Depicts how to use the [additional info component]({{ site.baseurl }}/components/additional-info) within a va-text-input.
* **Character count.** Implements the [USWDS Character count](https://designsystem.digital.gov/components/character-count/) functionality which displays the character count below the text input. However, our implementation differs from USWDS in that it does not allow for entering more text after the maxlength.
* **Currency.** Indicates that the input accepts a dollar amount.
* **Forms pattern - Single.** This variation can be used to support the [One thing per page content principle]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task#design-principles) where we gather one decision, question, or piece of information on the page.
* **Forms pattern - Single error.** Shows the error state for the single form field pattern.
* **Forms pattern - Multiple .** This variation also can be used to support the [One thing per page content principle]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task#design-principles) where we gather one decision, question, or piece of information on the page.
* **Error.** Highlights the text input field where the user has made an error that needs to be corrected.
* **Success.** Indicates to the user in realtime that an error has been cleared and the text entry is now valid. NOTE: This isn't typically used currently.
* **Internationalization.** Demonstrates how this components changes when used with the language toggle.
* **Prefix and Suffix.** Allows an icon or text to be set as an input prefix and/or suffix. See [USWDS Input Prefix and Suffix](https://designsystem.digital.gov/components/input-prefix-suffix/) for additional guidance. 
* **Widths.** Indicates to the user the expected length of text input by sizing the field relative to what is expected.

### Errors

* Refer to the specific error examples above.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/#error-handling">
  View form error handling for additional guidance
</a>

### Hint text

* Refer to the [hint text example](#hint-text) above.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/components/form/label#hint-text">
  View label hint text for additional guidance
</a>

{% include component-docs.html component_name=page.web-component %}

{% include content/using-message-aria-describedby.md %}

### Native Events

* Native onInput and onBlur events are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/text-input/#accessibility-text-input">Refer to the U.S. Web Design System for accessibility guidance</a>

### Additional accessibility considerations for VA

* **Avoid `placeholder` text.** Excluding our max characters variation (v1), avoid using placeholder text. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio. Also, placeholder text is no longer visible once a user clicks into the field. Thus users will no longer have that text available when they need to review their entries. People who have cognitive or visual disabilities have additional problems with placeholder text.