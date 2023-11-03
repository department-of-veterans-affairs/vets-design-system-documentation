---
layout: component
title: Header - Minimal
permalink: /components/header/header-minimal
has-parent: /components/header/
contributor: Ben Brasso (Agile 6), Ya-ching Tsao (CivicActions), Zach Park (Agile 6), Kristen McConnell (Ad Hoc)
intro-text: The minimal header can be used when navigating away would prevent the user from easily accomplishing their main task.
sketch-link: https://www.sketch.com/s/a52734dd-00d0-44f1-9c9e-ff4016130e5c/p/224585DD-02BA-49EB-91C6-DE20869AA4AC/canvas
status: use-with-caution-candidate
web-component: va-minimal-header
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-minimal-header--default" link_text=page.web-component %}

### With Subheader

{% include storybook-preview.html story="components-va-minimal-header--with-subheader" link_text="View va-minimal-header with subheader variation" %}

## Usage

### When to use Header - Minimal

* **Reduce the chance of a user leaving a form, process, or task before completing the required steps.** The minimal header retains VA.gov branding and the [Banner - Official Gov]({{ site.baseurl }}/components/banner/official-gov) so that users still know they are on VA.gov. However, it removes elements of the standard header, such as the Sign In button and main menu navigation, in order to reduce the chances of users leaving a form or process before completing all the required steps and accomplishing their goal. While most forms support finishing the form later, we still prefer to keep users focused on the task at hand.
* **A tasks that is time-sensitive.** The minimal header is also appropriate when a user must complete a task in a timely fashion and thus navigating away would put task completion at risk.
* **An experience outside of the VA.gov site-wide information architecture.** Some experiences do not exist within the information architecture of VA.gov or have already implemented a distinct navigation pattern and thus can also use the minimal header.

### How this component works

### Behavior

* **Set form title as header and sub-header.** The minimal header has header and subheader props that allow for setting the title of the form and the form number, respectively. Use of this component is intended for form flows and in particular when the h1 of the page is being to ask the user a question in keeping with the One Thing Per Page content principle.

### Placement

* **At the top of the page.** The minimal header appears at the top of the page.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* For form titles:
  * Use a plain language description of the benefit or service.
  * Use a maximum of 52 characters.
  * The form subtitle should not have "Equal to" before the full title of the PDF form.

{% include _component-checklist.html component_name=page.web-component %}
