---
layout: component
permalink: /components/form/progress-bar-segmented
has-parent: /components/form/
title: "Progress bar - Segmented"
intro-text: "A segmented progress bar updates users on their progress through a multi-step process."
research-title: Progress bars
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/22A38EE5-A28E-41CB-829C-4D305AFEAE50
status: use-deployed
uswds-v3: default
web-component: va-segmented-progress-bar
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
---

## Examples

{% include storybook-preview.html story="components-va-segmented-progress-bar--default" link_text="va-segmented-progress-bar" height="200px" %}

## Usage

### When to use a segmented progress bar

* **Step indicator for forms**: When you need the user to complete more than one step in a process, usually completing a form.
* **Multiple steps and screens for a single interaction**: When you need to communicate which step a user is currently on as they move through a multi-step process for a single interaction. 

### When to consider something else

* **Tracking progress over an extended period of time**: If the steps in a process span multiple interactions or an extended period of time then use the [Process list]({{ site.baseurl }}/components/process-list) component.
* **Steps can be completed in any order**: If steps can be completed in any order consider the [Master/Detail screen pattern](https://designingwebinterfaces.com/designing-web-interfaces-12-screen-patterns) and provide status as to when each section is complete and when the overall process is complete.
* **Checklist**: The progress bar is not intended to handle a checklist.

### Behavior

* The segments in the progress bar should equal the total number of steps in the process or form.
* The segment corresponding to a previously completed step should be primary blue as should the current step. Upcoming steps are gray-lighter.

### Placement

* The Segmented progress bar should appear directly below the h1 title of the process and before the form itself.
* The current step number and title should appear below the step segments.
 
{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* The web component will ensure that the aria label, valuenow, valuemin, valuemax, and valuetext are all appropriately set if the correct attributes are passed.

## Related

* [Activity progress bar]({{ site.baseurl }}/components/progress-bar)
* [Process list]({{ site.baseurl }}/components/process-list)