---
layout: component
permalink: /components/form/radio-button
has-parent: /components/form/
title: Radio button
research-title: Form controls
intro-text: Radio buttons allow users to select exactly one choice from a group.
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1373%3A86693&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-best-practice
uswds-v3: default
web-component: va-radio
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Web

#### Default

{% include storybook-preview.html height="200px" story="uswds-va-radio--default" link_text="va-radio" %}

#### Tile

{% include storybook-preview.html height="350px" story="uswds-va-radio--tile" link_text="va-radio tile" %}

#### Hint text

{% include storybook-preview.html height="250px" story="uswds-va-radio--hint" link_text="va-radio with hint text" %}

#### Label header

{% include storybook-preview.html height="200px" story="uswds-va-radio--label-header" link_text="va-radio with label header" %}

#### On background

{% include storybook-preview.html height="100px" story="uswds-va-radio--on-background" link_text="va-radio on background" %}

#### Forms pattern single

{% include storybook-preview.html height="600px" story="uswds-va-radio--forms-pattern-single" link_text="va-radio forms pattern single" %}

#### Forms pattern multiple

{% include storybook-preview.html height="450px" story="uswds-va-radio--forms-pattern-multiple" link_text="va-radio forms pattern multiple" %}

#### Error

{% include storybook-preview.html story="uswds-va-radio--error" link_text="va-radio error" %}

#### Forms pattern single error

{% include storybook-preview.html height="600px" story="uswds-va-radio--forms-pattern-single-error" link_text="va-radio forms pattern single error" %}

#### Internationalization

{% include storybook-preview.html height="250px" story="uswds-va-radio--internationalization" link_text="va-radio internationalization" %}

---

### Mobile

#### Default

{% include storybook-preview.html height="400px" story="radio-button--default" link_text="va-mobile_radio-button--default" is_mobile=true %}


#### Tile

{% include storybook-preview.html height="400px" story="radio-button--tile" link_text="va-mobile_radio-button--tile" is_mobile=true %}

#### Error

{% include storybook-preview.html height="400px" story="radio-button--error" link_text="va-mobile_radio-button--error" is_mobile=true %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/radio-buttons/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

{% include content/select-options.md %}

### Choosing between variations

* Use the [Hint text](#hint-text) variation to provide additional information that pertains to the question being asked or all of the options presented.
* Use the [Label header](#label-header) variation when a heading is required within the `legend` that acts as a label for the radio buttons. This can aid users in navigating the form questions, particularly in the [sub-task pattern]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task)
* Use the [Description text](#description-text) variation to provide additional details about one or more radio button options. This variation is superseded by the Tile variation.
* Use the [Tile](#tile) variation to provide additional details about one or more radio button options within a large and well defined tap target.

{% include content/conditionally-revealed-fields.md %}

### Errors

* Refer to the specific error examples above.

<va-link-action
  href="{{ site.baseurl }}/components/form/#error-handling"
  text="View form error handling for additional guidance"
  type="secondary"
></va-link-action>

### Hint text

* Refer to the [hint text example](#hint-text) above.

<va-link-action
  href="{{ site.baseurl }}/components/form/label#hint-text"
  text="View label hint text for additional guidance"
  type="secondary"
></va-link-action>

{% include component-docs.html component_name=page.web-component %}

## Content considerations

<va-link-action
  href="https://design.va.gov/content-style-guide/bulleted-lists"
  text="Refer to our bulleted list guidance for punctuation and general considerations"
  type="secondary"
></va-link-action>

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/radio-buttons/#accessibility-radio-buttons"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>
### Additional accessibility considerations for VA

* When using Safari with VoiceOver, it will read out the fieldset legend for each radio item when navigating through them. However, the recommended behavior is that the legend should only be read out at the end of the first radio option when tabbing into the group. This behaves as expected in other browsers with VoiceOver, but Safari does not support this. There currently is no workaround for this.
