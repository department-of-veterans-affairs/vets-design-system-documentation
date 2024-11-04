---
layout: component
title: Footer - Minimal
permalink: /components/footer/footer-minimal
has-parent: /components/footer/
contributors: Ben Brasso (Agile 6), Ya-ching Tsao (CivicActions), Zach Park (Agile 6), Kristen McConnell (Ad Hoc)
intro-text: The minimal footer can be used when navigating away would prevent the user from easily accomplishing their main task.
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=538-7198&mode=design&t=kPk3dlhnHSGw5X0f-0
status: use-with-caution-candidate
web-component: va-minimal-footer
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-minimal-footer--default" link_text=page.web-component %}

## Usage

### When to use Footer - Minimal

* **Reduce the chance of a user leaving a form, process, or task before completing the required steps.** The minimal footer retains VA branding so that users still know they are on VA.gov. However, it removes elements of the standard footer, such additional navigation, in order to reduce the chances of users leaving a form or process before completing all the required steps and accomplishing their goal. While most forms support finishing the form later, we still prefer to keep users focused on the task at hand.
* **A tasks that is time-sensitive.** The minimal footer is also appropriate when a user must complete a task in a timely fashion and thus navigating away would put task completion at risk.
* **An experience outside of the VA.gov site-wide information architecture.** Some experiences do not exist within the information architecture of VA.gov or have already implemented a distinct navigation pattern and thus can also use the minimal footer.

### How this component works

* **Use with the [Header - Minimal]({{ site.baseurl }}/components/header/header-minimal).** The minimal footer should be used in conjunction with the minimal header.

### Placement

* **At the bottom of the page.** The minimal footer appears at the bottom of the page.

{% include component-docs.html component_name=page.web-component %}

{% include _component-checklist.html component_name=page.web-component %}
