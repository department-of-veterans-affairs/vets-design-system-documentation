---
layout: component
permalink: /components/form/textarea
has-parent: /components/form/
title: Textarea
intro-text: "Textarea allows people to enter any type of text."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1377%3A96417&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-deployed
uswds-v3: default
web-component: va-textarea
anchors:
  - anchor: Examples - v3
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples - v3

### Default

{% include storybook-preview.html height="260px" story="uswds-va-textarea--default" link_text="va-textarea default" %}

### Required

{% include storybook-preview.html height="260px" story="uswds-va-textarea--required" link_text="va-textarea required" %}

### Hint text

{% include storybook-preview.html height="260px" story="uswds-va-textarea--with-hint-text" link_text="va-textarea with hint text" %}

### With Character count

{% include storybook-preview.html story="uswds-va-textarea--with-character-count" link_text="va-textarea with character count" %}

### Forms pattern - Single

{% include storybook-preview.html story="uswds-va-textarea--forms-pattern-single" link_text="va-textarea forms pattern single" height="500px" %}

### Forms pattern - Single error

{% include storybook-preview.html story="uswds-va-textarea--forms-pattern-single-error" link_text="va-textarea forms pattern single error" height="550px" %}

### Forms pattern - Multiple

{% include storybook-preview.html story="uswds-va-textarea--forms-pattern-multiple" link_text="va-textarea forms pattern multiple" height="775px" %}

### Forms pattern - Multiple error

{% include storybook-preview.html story="uswds-va-textarea--forms-pattern-multiple-error" link_text="va-textarea forms pattern multiple error" height="800px" %}

### Error

{% include storybook-preview.html height="260px" story="uswds-va-textarea--error" link_text="va-textarea error" %}

See [form error handling]({{ site.baseurl }}/components/form/#error-handling) for additional guidance.

## Examples - v1

### Default

{% include storybook-preview.html height="260px" story="components-va-textarea--default" link_text="va-textarea v3 default with additional variations" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/text-input/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### When to consider something else

* **Predictable text.** When a short, single line of text is expected and sufficient.

{% include component-docs.html component_name=page.web-component %}

### Native Events

* Native onInput and onBlur events are available on this component. They can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/text-input/#accessibility-text-input">Refer to the U.S. Web Design System for accessibility guidance</a>

* **Avoid `placeholder` text.** Excluding our max characters variation (v1), avoid using placeholder text. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio. Also, placeholder text is no longer visible once a user clicks into the field. Thus users will no longer have that text available when they need to review their entries. People who have cognitive or visual disabilities have additional problems with placeholder text.
* **When using placeholder text, provide screen reader accessible text.** When using the placeholder prop, which is used automatically by the Max length variation (v1 only), additional work is required to make the component accessible. Screen readers such as JAWS and NVDA don't read placeholder text. Placeholder text is a visual addition only. Thus when using placeholder text to provide important information visually you must also convey this information to screen reader users as well. To do this this add screen read only text within a `<span>` using the `.sr-only` CSS class and place the span and text where you would like it to be read out, typically after the field label. 
* **Only show error validation messages or stylings after a user has interacted with a particular field.** Do not interrupt a user while they are entering text into a textarea.