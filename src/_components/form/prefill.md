---
layout: component
permalink: /components/form/prefill
has-parent: /components/form/
title: Prefill
intro-text: "Informs the user that information from their profile has been used to prefill form fields."
research-title: Form controls
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1372%3A86470&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: How to use
  - anchor: Code usage
  - anchor: Content considerations
---

## Examples

### Intro

<div class="site-showcase">
  {% include_relative html/prefill-intro.html %}
</div>

### Step 

<div class="site-showcase">
  {% include_relative html/prefill-step.html %}
</div>

## Usage

### When to use

* **When prefilling information from the user's profile.** These messages communicate to the user that their profile information has been leveraged to pre-populate the form that they are filling out. The Intro variation, used on the Introduction page, also informs the user that their progress will be saved as they complete the form.

### When to consider something else

* **Unauthenticated users.** Users who are unauthenticated should not see this message as we cannot use their profile data to prefill the form.

### How this component works

* **Intro variation uses Alert - Informational.** The Intro variation of this component is an instance of the [Alert - Informational]({{ site.baseurl }}/components/alert#informational-alert) component, but without a header.
* **Step variation uses Alert - Background-only Informational.** The Step variations of this component is an instance of the [Alert - Background-only with icon - Informational]({{ site.baseurl }}/components/alert#background-color-only-alert-with-icon) component. 

### Placement

* The Intro variation of this component appears after the subtitle of the form and before the action link to start the form process on the authenticated variation of the [Form - Introduction]({{ site.baseurl }}/templates/forms/introduction#authenticated) page.
* The Step variation of this component appears after the [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) component on a step of the form.

## Code usage

Code for both variations of this component is shown in the [examples](#examples).

## Content considerations

Message content for both variations can be found in [engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement).