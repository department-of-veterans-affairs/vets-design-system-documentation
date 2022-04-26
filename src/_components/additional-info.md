---
layout: component
title: Additional info
status: use-deployed
intro-text: "Additional info makes content easier to scan as it hides information that may not be applicable to all users or situations."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
web-component: va-additional-info
---

## Examples

### Default

{% include storybook-preview.html story="components-va-additional-info--default" link_text="va-additional-info" %}

### No Border

* Adding in the `disable-border` prop removes the left blue border from the expanded state of the component.

{% include storybook-preview.html story="components-va-additional-info--no-border" link_text="va-additional-info" %}

## Usage

### When to use Additional info

* **Small bites of information**: When you have a small piece of information you want to convey that can be less visually prominent than an [Alert]({{ site.baseurl }}/components/alert) or [Accordion]({{ site.baseurl }}/components/accordion).
* **Information not applicable to all**: Additional info can hide details that may not be applicable to all users. If a form is a conversation, Additional info would be considered an aside. (This <a href="https://blog.navapbc.com/structuring-a-complex-eligibility-form-for-healthcare-gov-37d79a5ad6">case study on structuring complex health care questions for healthcare.gov</a> goes into greater detail on how to structure your form as a conversation.)

### When to consider something else

* **Accordions for a series**: If you have a series of content an [Accordion]({{ site.baseurl }}/components/accordion) is preferred. For example, if you have a series of questions as part of an FAQ section or a set of options for payment that each have additional details.
* **Too much content**: You should not try to put multiple paragraphs inside Additional info. Link to another page or consider an [Accordion]({{ site.baseurl }}/components/accordion).
* **Required content**: If the majority of people need the content to accomplish the main task then it should not be hidden from view.
* **Floating in space**: Try to avoid using Additional info outside of the flow of the page, unattached to a section of content or another component. For example, there are instances of Additional info between an h1 and a Card. See [placement](#placement) for more.

### Placement

The following are places where Additional info can be used:

* After a header (h2, h3, h4) or paragraph to provide orthogonal details or provide an answer to a common question.
* Below a [primary button]({{ site.baseurl }}/components/button) to provide context about the action the button will take or to provide instructions in another language.
* Within a [Process list]({{ site.baseurl }}/components/process-list) to shorten the length of content within a step.
* Within a [Form]({{ site.baseurl }}/components/form) to provide additional help text.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations
