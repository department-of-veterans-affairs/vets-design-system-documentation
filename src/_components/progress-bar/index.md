---
layout: component
permalink: /components/progress-bar/
title: "Progress bar - Activity"
intro-text: "A progress bar provides status as the system is taking an action on behalf of the user."
research-title: Progress bars
status: use-deployed
web-component: va-progress-bar
sub-pages:
  - sub-page: Segmented
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
---

{% include _site-in-this-section.html %}

## Examples

{% include storybook-preview.html story="components-va-progress-bar--default" link_text="va-progress-bar" height="80px" %}

## Usage

### When to use an activity progress bar

* **System status feedback**: When you need to provide feedback to the user that an action they initiated is progressing. The most common example is when a user must upload a document and needs feedback that the upload is progressing.
* **When the action is determinate**:  When the progress accomplished thus far and the remaining progress to be taken can be shown. This component takes a percentage as input to display the progress of the activity.

### When to consider something else

* **Step indicator for forms**: When you are providing feedback on the number of steps in a process, for example when a user is filling out a form, use the [segmented progress bar]({{ site.baseurl }}/components/progress-bar/segmented). 
* **Unknown or indeterminate time**: When the wait time for a process, such as loading a page, is unknown use the [loading indicator]({{ site.baseurl }}/components/loading-indicator). 

### Behavior

* The activity progress bar should fill until the activity is complete.
* The activity progress bar should not return or retreat once it progresses. In other words, progress should never go backwards.

### Placement

* The activity progress bar should be placed [near or, or proximate, to](https://lawsofux.com/law-of-proximity/) the interface element that trigger the activity (e.g. a file upload button) 

### Design principles

* **Visibility of System Status**: This is the [first of 10 usability heuristics](https://www.nngroup.com/articles/visibility-system-status/) defined by Jackob Nielsen. 

> The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.

{% include component-docs.html component_name=page.web-component %}

## Related

* [Segmented progress bar]({{ site.baseurl }}/components/progress-bar/segmented)
* [Loading indicator]({{ site.baseurl }}/components/loading-indicator)