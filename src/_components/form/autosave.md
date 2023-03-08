---
layout: component
permalink: /components/form/autosave
has-parent: /components/form/
title: Autosave
intro-text: "Informs the user that we will, and have, automatically saved their progress in a form flow."
research-title: Form controls
sketch-link: https://www.sketch.com/s/c8df169f-5b02-4999-befb-34c7b3b62ba9/p/DD364E2A-FF85-4009-BA2C-ACA9DA452F57/canvas
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
  {% include_relative html/autosave.html %}
</div>

## Usage

### When to use

* **When saving form flow progress as a user completes an application.** This message provides confirmation to the user that their form progress is being saved as they progress through a form flow for an application. 

### When to consider something else

* **Unauthenticated users.** Users who are unauthenticated should not see this message as we cannot save their progress.

### How this component works

* **Use Alert - Background-only Success.** This component is an instance of the [Alert - Background-only with icon - Success]({{ site.baseurl }}/components/alert#background-color-only-alert-with-icon) component.

### Placement

* This component appears after the [Button pair]({{ site.baseurl }}/components/button/button-pair) on a form page and before the link to "Finish this application later" on the authenticated variation of the [Form - Step page]({{ site.baseurl }}/templates/forms/#step-form-pages).

## Code usage

Code for this component is shown in the [examples](#examples).

## Content considerations

* Message content can be found in the example above or in [engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement).
* This message is to be accompanied by text that reads: "We'll save your application on every change." and appears just below the [Progress bar - Segmented]({{ site.baseurl }}/components/progress-bar-segmented) component on [Form - Step pages]({{ site.baseurl }}/templates/forms/#step-form-pages).