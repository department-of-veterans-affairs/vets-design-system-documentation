---
layout: component
title: Modal
status: use-deployed
intro-text: "A modal disables page content and focuses the user’s attention on a single task or message."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-modal
---

## Examples

{% include storybook-preview.html height="400px" story="components-va-modal--default" link_text="va-modal" %}

### Crisis Line Modal

{% include storybook-preview.html height="500px" story="components-va-modal--crisis-line-modal" link_text="va-modal" %}

## Usage

### When to use a modal

* When the focus on the user must be focused on a single, or limited number, of elements. For example, when confirming or canceling a required action.
* The flow the user is in would otherwise be interrupted by a distinct page.

### When to consider something else

* **Every time!** Before using a modal, consider whether there’s another component that might be less disruptive for the user. Modals should be a last resort.
* Content that must be linkable (have a distinct URL) or searchable.
* Modals should not contain long forms.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* Modal should have the role="dialog" attribute.
* Content behind the modal should not scroll while the modal is open.
* Modal should have an aria-labelledby attribute where the value is the ID of the modal title (you don't need or want the #).
* Modal should have an aria-describedby attribute where the value is the ID of a div that contains a description of the modal (you don't need or want the #).
* Pressing the ESC key should close the modal and return the focus to the element that triggered the modal.
* If the modal contains a form, pressing the Enter key should submit that form.
