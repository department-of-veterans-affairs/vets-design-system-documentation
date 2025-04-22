---
layout: component
title: Link - Action
permalink: /components/link/action
has-parent: /components/link/
github-title: va-action-link
intro-text: "Action links guide users to a new page to take an action or to start an online tool or digital service."
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1312%3A10315&mode=design&t=nYOotVcwdpiMCL5C-1
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Primary

{% include storybook-preview.html height="50px" story="components-va-link-action--default" link_text="va-link-action primary"  %}

### Primary Entry

{% include storybook-preview.html height="50px" story="components-va-link-action--primary-entry" link_text="va-link-action primary entry"  %}

### Secondary

{% include storybook-preview.html height="50px" story="components-va-link-action--secondary" link_text="va-link-action secondary" %}

### Reverse

{% include storybook-preview.html height="67px" story="components-va-link-action--reverse" link_text="va-link-action reverse" %}

## Usage

Action Links replace green primary buttons that take users to another page. For example: *Apply for education benefits*

### When to use an Action Link

The action link is an eye-catching link to start a digital service. An action link entices users to take action. Example: Starting a benefit application.

* Use a primary (green) Action Link for the primary call to action on a page or the start of a digital service. Use only one primary Action link per page.
* Use a secondary (blue) Action Link when there are multiple Action Links on a page or if the actions are of equal hierarchy.
* Use a reverse (white) Action Link for a dark background.

### When to consider something else

* Don’t use an Action Link for these actions: “sign up,” “submit” or “sign out.” For these actions, use [buttons]({{ site.baseurl }}/components/button) instead.
* Don’t use Action Links to navigate between screens of an online application or tool. Use default and secondary buttons instead.
* Don’t use Action Links link to go to another page or site that isn’t taking users to start an action.

### Choosing between variations

* **Primary entry is for entry points to an application.** The Primary entry variation was added to stand out within text-heavy pages and to be distinct from a button, yet have a similar visual weight to a button for emphasis. Use a Primary entry link to enter an application. Current examples include the Form Upload tool and form-based applications.
* **Primary and secondary can go on the same page.** Primary (green) and secondary (blue) Action Links can exist on the same page, but we don’t recommend placing them side by side.

## Content considerations

* **Keep Link - Action content short.** Start with a verb. For example: “*Apply for health care benefits*” or “*Register for care*”
* Refer to the [Content Style Guide on Links]({{ site.baseurl }}/content-style-guide/links).

## Accessibility considerations

* **Purpose and target.** Link text that doesn't indicate a clear purpose or destination makes it harder for everyone--especially screen reader users--to understand where they're getting routed off to.
* **External links must indicate that they are external.** Follow the methods detailed in [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).
  * By default, the link component's external link variation will append the text, "(opens in a new tab)", instead of using an icon. This follows [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html) advice on providing users with both a spoken and visual warning that this link opens in a new tab.

{% include content/links-vs-buttons.md %}