---
layout: component
title: "OMB info"
status: use-deployed
intro-text: "Required text from the Office of Management and Budget."
anchors:
  - anchor: Examples
  - anchor: Usage
---

## Examples

### Default

{% include storybook-preview.html story="components-ombinfo--default" %}

### Without OMB Number

{% include storybook-preview.html story="components-ombinfo--without-omb-number" %}

### Without Response Burden

{% include storybook-preview.html story="components-ombinfo--without-response-burden" %}

### With Custom Respondent Burden Benefit Type

{% include storybook-preview.html story="components-ombinfo--with-custom-respondent-burden-benefit-type" %}


## Usage

### When to use OMB info

Use an OMB info control at the bottom of a form introduction page.

### How to use OMB Info

OMB Info should appear at the bottom of a form introduction page and show:

 - Respondent burden
 - OMB control number
 - Expiration date 
 - Privacy act (link)

### Behavior

* All text is static with the exception of privacy act
* Privacy Act is a link which opens in a modal window
