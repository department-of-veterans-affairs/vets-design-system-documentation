---
layout: component
title: "OMB info"
status: use-deployed
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/v/eMln5p/a/ZOZ9J47/r/nZme2g
intro-text: "Required text from the Office of Management and Budget."
anchors:
  - anchor: Examples
  - anchor: Usage
web-component: va-omb-info
---

## Examples

### Default

{% include storybook-preview.html story="components-va-omb-info--default" link_text="va-omb-info" %}

### Without OMB Number

{% include storybook-preview.html story="components-va-omb-info--without-omb-number" link_text="va-omb-info" %}

### Without Respondent Burden

{% include storybook-preview.html story="components-va-omb-info--without-response-burden" link_text="va-omb-info" %}

### With Custom Respondent Burden Benefit Type

{% include storybook-preview.html story="components-va-omb-info--with-custom-respondent-burden-benefit-type" link_text="va-omb-info" %}

### With Children
{% include storybook-preview.html story="components-va-omb-info--children" link_text="va-omb-info" %}

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
