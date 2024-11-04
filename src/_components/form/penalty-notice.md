---
layout: component
permalink: /components/form/penalty-notice
has-parent: /components/form/
title: Penalty notice
intro-text: A required legal notice for all forms.
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1372%3A86436&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Content considerations
---

## Examples

### Default

<div class="site-showcase">
  {% include_relative html/penalty-notice.html %}
</div>

## Usage

### When to use

* **When a user reaches the review step of an application.** This message is required on all forms at the review step. 

### How this component works

* **Simple paragraph.** This component has no specific code requirements and can be placed in a simple paragraph element.

### Placement

* This component appears before the [Privacy agreement]({{ site.baseurl }}/components/form/privacy-agreement) on the [Review form page]({{site.baseurl}}/templates/forms/review) and before the button to submit the application.

## Code usage

Code for this component is shown in the [examples](#examples).

## Content considerations

* Do not alter this content without legal review.