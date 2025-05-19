---
layout: component
permalink: /components/modal/
title: Modal
intro-text: "A modal disables page content and focuses the user’s attention on a single task or message."
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=861%3A1708&mode=design&t=jMcVWkPlFhZu3RTh-1
sub-pages:
  - sub-page: Crisis Line Modal
uswds-v3: default
web-component: va-modal
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

{% include _site-in-this-section.html %}

## Examples

### Default

{% include storybook-preview.html story="uswds-va-modal--default" link_text="va-modal" auto_resize=false height="300px" %}

### Info

{% include storybook-preview.html story="uswds-va-modal--info" link_text="va-modal info" auto_resize=false height="320px" %}

### Continue

{% include storybook-preview.html story="uswds-va-modal--continue" link_text="va-modal continue" auto_resize=false height="340px" %}

### Success

{% include storybook-preview.html story="uswds-va-modal--success" link_text="va-modal success" auto_resize=false height="320px" %}

### Warning

{% include storybook-preview.html story="uswds-va-modal--warning" link_text="va-modal warning" auto_resize=false height="320px" %}

### Error

{% include storybook-preview.html story="uswds-va-modal--error" link_text="va-modal error" auto_resize=false height="320px" %}

### Click outside to close

{% include storybook-preview.html story="uswds-va-modal--click-outside-to-close" link_text="va-modal click outside to close" auto_resize=false height="300px" %}

### Without buttons

{% include storybook-preview.html story="uswds-va-modal--without-buttons" link_text="va-modal without buttons" auto_resize=false height="240px" %}

### Without title

{% include storybook-preview.html story="uswds-va-modal--without-title" link_text="va-modal without title" auto_resize=false height="240px" %}

### With nested web components

{% include storybook-preview.html story="uswds-va-modal--with-nested-web-components" link_text="va-modal with nested web components" auto_resize=false height="410px" %}

### Large

{% include storybook-preview.html story="uswds-va-modal--large" link_text="va-modal large" auto_resize=false height="360px" %}

### With forced action

{% include storybook-preview.html story="uswds-va-modal--with-forced-action" link_text="va-modal with forced action" auto_resize=false height="300px" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/modal/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

#### When to consider something else

* **Content that must be linkable (have a distinct URL) or searchable.** Modals cannot be linked to or searched.
* **Modals should not contain long forms.** Modal content must be brief and not include complicated interactions.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/modal/#accessibility-select"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>