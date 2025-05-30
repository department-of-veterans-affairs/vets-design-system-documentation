---
layout: component
permalink: /components/form/progress-bar-segmented
has-parent: /components/form/
title: "Progress bar - Segmented"
intro-text: "A segmented progress bar updates users on their progress through a multi-step process."
aka: Step indicator
research-title: Progress bars
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1383%3A97673&mode=design&t=h9BoxMWwcHe2DhUd-1
status: use-deployed
uswds-v3: default
web-component: va-segmented-progress-bar
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--default" link_text="va-segmented-progress-bar v3 default" height="145px" auto_resize=false %}

### Step Labels

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--step-labels" link_text="va-segmented-progress-bar step labels" height="170px" auto_resize=false %}

### Centered Step Labels

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--centered-step-labels" link_text="va-segmented-progress-bar vcentered step labels" height="170px" auto_resize=false %}

### Counters

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--counters" link_text="va-segmented-progress-bar counters" height="205px" auto_resize=false %}

### Small Counters

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--small-counters" link_text="va-segmented-progress-bar small counters" height="190px" auto_resize=false %}

### Centered Counters

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--centered-counters" link_text="va-segmented-progress-bar centered counters" height="205px" auto_resize=false %}

### Centered Small Counters

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--centered-small-counters" link_text="va-segmented-progress-bar centered small counters" height="190px" auto_resize=false %}

### Custom Header Level

{% include storybook-preview.html story="uswds-va-segmented-progress-bar--custom-header-level" link_text="va-segmented-progress-bar custom header level" height="190px" auto_resize=false %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/step-indicator/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

### When to consider something else

* **Tracking progress over an extended period of time**: If the steps in a process span multiple interactions or an extended period of time then use the [Process list]({{ site.baseurl }}/components/process-list) component.
* **Steps can be completed in any order**: If steps can be completed in any order consider the [Master/Detail screen pattern](https://designingwebinterfaces.com/designing-web-interfaces-12-screen-patterns) and provide status as to when each section is complete and when the overall process is complete.
* **Checklist**: The progress bar is not intended to handle a checklist.

### Placement

* The progress bar should appear directly below the h1 title of the process and before the form itself.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/step-indicator/#accessibility-guidance"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

## Related

* [Activity progress bar]({{ site.baseurl }}/components/progress-bar)
* [Process list]({{ site.baseurl }}/components/process-list)