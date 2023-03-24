---
layout: component
permalink: /components/form/need-help
has-parent: /components/form/
title: Need help?
intro-text: A footer found on application pages that provides contact information for the VA.
research-title: Form controls
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/A0AFFFF0-CFBB-4E0E-992E-175AFBF7E7AD/canvas
status: use-with-caution-candidate
web-component: va-need-help
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Content considerations
---

## Examples

### Default

{% include storybook-preview.html story="components-va-need-help--default" link_text="va-need-help" %}

## Usage

### When to use

* **As a footer for form pages in an application.** This component should appear at the bottom of [introduction]({{site.baseurl}}/templates/forms/introduction) and form pages within an application, above the standard VA footer.

### How this component works

* Need help? is in a `<h2>` element followed by one or more paragraphs that contain contact information for the VA.
* Telephone numbers should use the [telephone]({{site.baseurl}}/components/telephone) component.

### Placement

* This component appears at the bottom of the page, just before the standard VA footer.

## Code usage

Code for this component is shown in Storybook. Follow the link provided in [examples](#examples).

## Content considerations

* Content can vary by form and should be discussed with the content team before deploying your application.