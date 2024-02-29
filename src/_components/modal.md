---
layout: component
title: Modal
status: use-deployed
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=861%3A1708&mode=design&t=jMcVWkPlFhZu3RTh-1
intro-text: "A modal disables page content and focuses the user’s attention on a single task or message."
uswds-v3: default
web-component: va-modal
anchors:
  - anchor: Examples - v3
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples - v3

### Default

{% include storybook-preview.html story="uswds-va-modal--default" link_text="va-modal v3 along with additional variations" %}

### With forced action

{% include storybook-preview.html story="uswds-va-modal--with-forced-action" link_text="va-modal v3 with forced action" %}

## Examples - v1

### Default

{% include storybook-preview.html height="400px" story="components-va-modal--default" link_text="va-modal" %}

### Info

{% include storybook-preview.html story="components-va-modal--info" link_text="va-modal info" %}

### Continue

{% include storybook-preview.html story="components-va-modal--continue" link_text="va-modal continue" %}

### Success

{% include storybook-preview.html story="components-va-modal--success" link_text="va-modal success" %}

### Warning

{% include storybook-preview.html story="components-va-modal--warning" link_text="va-modal warning" %}

### Error

{% include storybook-preview.html story="components-va-modal--error" link_text="va-modal error" %}

### Click outside to close

{% include storybook-preview.html story="components-va-modal--click-outside-to-close" link_text="va-modal click outside to close" %}

### Without buttons

{% include storybook-preview.html story="components-va-modal--without-buttons" link_text="va-modal without buttons" %}

### Without title

{% include storybook-preview.html story="components-va-modal--without-title" link_text="va-modal without title" %}

### With nested web components

{% include storybook-preview.html story="components-va-modal--with-nested-web-components" link_text="va-modal with nested web components" %}

### Crisis Line Modal

{% include storybook-preview.html story="components-va-crisis-line-modal--default" link_text="va-crisis-line-modal" %}

### Large

{% include storybook-preview.html story="components-va-modal--large" link_text="va-modal large" %}

### With button pair

{% include storybook-preview.html story="components-va-modal--with-button-pair" link_text="va-modal with button pair" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/modal/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### When to consider something else

* **Content that must be linkable (have a distinct URL) or searchable.** Modals cannot be linked to or searched.
* **Modals should not contain long forms.** Modal content must be brief and not include complicated interactions.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/modal/#accessibility-select">Refer to the U.S. Web Design System for accessibility guidance</a>