---
layout: default
sub_section: omb-info
title: OMB info
anchors:
  - anchor: Default
  - anchor: Without OMB Number
  - anchor: Without Response Burden
  - anchor: With Custom Respondent Burden Benefit Type
---

# OMB info

OMB Info should appear at the bottom of a form introduction page and show:
 - Respondent burden
 - OMB control number
 - Expiration date 
 - Privacy act (link)

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


### Behavior

* All text is static with the exception of privacy act
* Privacy Act is a link which opens in a modal window
