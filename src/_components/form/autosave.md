---
layout: component
permalink: /components/form/autosave
has-parent: /components/form/
title: Autosave
intro-text: "Informs the user that we will, and have, automatically saved their progress in a form flow."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1350%3A24511&mode=design&t=TiJHClaf3VQ6wU6B-1
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
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

* **Use Alert - Slim.** This component is an instance of the [Alert - Slim]({{ site.baseurl }}/components/alert#background-color-only-alert-with-icon) component in the success state.

### Placement

* This component appears after the [Button pair]({{ site.baseurl }}/components/button/button-pair) on a form page and before the link to "Finish this application later" on the authenticated variation of the [Form - Step page]({{ site.baseurl }}/templates/forms/#step-form-pages).

## Code usage

Code for this component is shown in the [examples](#examples).

## Content considerations

* Message content can be found in the example above or in [engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement).
* This message is to be accompanied by text that reads: "We'll save your application on every change." and appears just below the [Progress bar - Segmented]({{ site.baseurl }}/components/progress-bar-segmented) component on [Form - Step pages]({{ site.baseurl }}/templates/forms/#step-form-pages).

## Accessibility considerations

* Use `aria-describedby` to link a portion of the autosave message to the continue button. To do this add `aria-describedby="save"` to the Continue button and add a `<span id="save">` around the first line of text in this component. This achieves the following:
    * Better ensures screen reader users will not miss the auto save message (which is located below the continue button)
    * Does not change the visual design of the page
    * Is flexible to the level of screen reader use (beginners are more likely to hear the auto-save message whereas advanced users won't be bothered by it)