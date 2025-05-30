---
layout: component
permalink: /components/form/checkbox
has-parent: /components/form/
title: Checkbox
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=35%3A178&mode=design&t=TiJHClaf3VQ6wU6B-1
intro-text: "Allows users to select one or more items from a list. Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list."
status: use-deployed
uswds-v3: default
web-component: va-checkbox-group
anchors:
  - anchor: Examples - Single
  - anchor: Examples - Group
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples - Single

### Web

#### Default

{% include storybook-preview.html story="uswds-va-checkbox--default" link_text="va-checkbox" %}

#### Tile

{% include storybook-preview.html story="uswds-va-checkbox--tile" link_text="va-checkbox tile" %}

#### Checked

{% include storybook-preview.html story="uswds-va-checkbox--checked" link_text="va-checkbox checked" %}

#### Hint text

{% include storybook-preview.html story="uswds-va-checkbox--with-hint-text" link_text="va-checkbox with hint text" %}

#### Description String

{% include storybook-preview.html story="uswds-va-checkbox--with-description-string" link_text="va-checkbox with description string" %}

#### Description JSX

{% include storybook-preview.html story="uswds-va-checkbox--with-description-jsx" link_text="va-checkbox with description JSX" %}

#### On background

{% include storybook-preview.html story="uswds-va-checkbox--on-background" link_text="va-checkbox on a background" %}

#### Error

{% include storybook-preview.html story="uswds-va-checkbox--error" link_text="va-checkbox error" %}

#### Required

{% include storybook-preview.html story="uswds-va-checkbox--required" link_text="va-checkbox required" %}

#### Internationalization

{% include storybook-preview.html story="uswds-va-checkbox--internationalization" link_text="va-checkbox internationalization" %}

### Mobile

#### Default

{% include storybook-preview.html height="200px" story="checkbox--default" link_text="va-mobile__checkbox--default" is_mobile=true auto_resize=false %}

#### Tile

{% include storybook-preview.html height="200px" story="checkbox--tile" link_text="va-mobile__checkbox--tile" is_mobile=true auto_resize=false %}

#### Checkbox only

{% include storybook-preview.html height="80px" story="checkbox--checkbox-only" link_text="va-mobile__checkbox--checkbox-only" is_mobile=true auto_resize=false %}

#### Error

{% include storybook-preview.html height="225px" story="checkbox--error" link_text="va-mobile__checkbox--error" is_mobile=true auto_resize=false %}

## Examples - Group

### Web

#### Default

{% include storybook-preview.html height="200px" story="uswds-va-checkbox-group--default" link_text="va-checkbox-group default" %}

#### Label header

{% include storybook-preview.html story="uswds-va-checkbox-group--label-header" link_text="va-checkbox group label header" height="250px" %}

#### Hint text

{% include storybook-preview.html story="uswds-va-checkbox-group--with-hint-text" link_text="va-checkbox group with hint text" %}

#### Required

{% include storybook-preview.html story="uswds-va-checkbox-group--required" link_text="va-checkbox group required" %}

#### Single checkbox

{% include storybook-preview.html story="uswds-va-checkbox-group--single-checkbox" link_text="va-checkbox group single checkbox" %}

#### Tile

{% include storybook-preview.html story="uswds-va-checkbox-group--tile" link_text="va-checkbox group tile" %}

#### Forms pattern - Single

{% include storybook-preview.html story="uswds-va-checkbox-group--forms-pattern-single" link_text="va-checkbox group forms pattern single" height="600px" %}

#### Forms pattern - Single error

{% include storybook-preview.html story="uswds-va-checkbox-group--forms-pattern-single-error" link_text="Error state for single checkbox pattern" height="600px" %}

#### Forms pattern - Multiple

{% include storybook-preview.html story="uswds-va-checkbox-group--forms-pattern-multiple" link_text="Multiple checkbox pattern example" height="600px" %}

#### Error

{% include storybook-preview.html story="uswds-va-checkbox-group--error" link_text="Checkbox group with error state" %}

#### Internationalization

{% include storybook-preview.html story="uswds-va-checkbox-group--internationalization" link_text="Checkbox group with internationalization" %}

#### Indeterminate

Use the indeterminate state for a parent checkbox that controls a sublist of checkboxes. The parent checkbox shows this state when some (but not all) child checkboxes are selected.

See our pattern guidance on [asking users for a mutually exclusive answer](https://design.va.gov/patterns/ask-users-for/a-mutually-exclusive-answer).

{% include storybook-preview.html story="uswds-va-checkbox--indeterminate" link_text="Checkbox with indeterminate state" height="300px" %}

### Mobile

#### Default

{% include storybook-preview.html height="425px" story="checkbox-group--default" link_text="va-mobile__checkbox-group--default" is_mobile=true auto_resize=false %}

#### Tile

{% include storybook-preview.html height="400px" story="checkbox-group--tile" link_text="va-mobile__checkbox-group--tile" is_mobile=true auto_resize=false %}

#### Error

{% include storybook-preview.html height="475px" story="checkbox-group--error" link_text="va-mobile__checkbox-group--error" is_mobile=true auto_resize=false %}


## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/checkbox/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

#### When to consider something else

* If there are too many options to display on a mobile screen.
* If a user can only select one option from a list (use radio buttons instead).

#### Choosing between variations

* **Use the [Forms pattern - Single](#forms-pattern---single) and [Forms pattern - Multiple](#forms-pattern---multiple) variations for implementing the [Ask users for a single response]({{ site.baseurl }}/patterns/ask-users-for/a-single-response) pattern.** These component variations are specifically designed to help implement the single response pattern. The [Forms pattern - Single error](#forms-pattern---single-error) variation shows error handling for the component variation. For checkbox groups used outside of this pattern, for example on a longer form page, use the [Label header](#label-header) checkbox group variation.

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

{% include content/using-message-aria-describedby.md %}

### Native Events

The native onBlur event is available on this component. It can be used by adding the event handler to your component and it will then listen to the event and respond accordingly when the event fires.

## Content considerations

<va-link-action
  href="https://design.va.gov/content-style-guide/bulleted-lists"
  text="Refer to our bulleted list guidance for punctuation and general considerations"
  type="secondary"
></va-link-action>

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/checkbox/#accessibility-checkbox"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>
