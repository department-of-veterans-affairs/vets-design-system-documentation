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

### Primary Entry

{% include storybook-preview.html height="60px" story="components-va-link-action--primary-entry" link_text="va-link-action primary entry"  %}

### Primary

{% include storybook-preview.html height="50px" story="components-va-link-action--default" link_text="va-link-action primary"  %}

### Secondary

{% include storybook-preview.html height="50px" story="components-va-link-action--secondary" link_text="va-link-action secondary" %}

### Reverse

{% include storybook-preview.html height="67px" story="components-va-link-action--reverse" link_text="va-link-action reverse" %}

## Usage

### When to use an Action Link

The action link is an eye-catching link to start a digital service. An action link entices users to take action. Example: Starting a benefit application.

* **Primary Entry is for entry points to an application.** The **Primary Entry** variation was added to stand out within text-heavy pages and to be distinct from a button, yet have a similar visual weight to a button for emphasis. Use the **Primary Entry** variation to start an application. Current examples include the Form Upload tool and form-based applications. This variation replaces the **Primary** (green) variation which had been used for this purpose. Use only one **Primary Entry** per page.
* **Primary calls to action.** A **Primary** (green) variation can be used for the primary call to action on a page. A **Primary Entry** variation is preferred, but the **Primary** variation is allowed. Use only one **Primary** per page.
* **Use Secondary for additional important links.** Use the **Secondary** (blue) variation when there are multiple **Action Links** on a page or if the actions are of equal hierarchy.
* **Use Reverse (white) for a dark background.** The **Reverse** variation exists to meet contrast on dark backgrounds. This variation is used sparingly.
* **Primary and Secondary can go on the same page.** **Primary** (green) and **Secondary** (blue) instances can exist on the same page, but we don’t recommend placing them side by side.

### When to consider something else

* **Use buttons for authentication action.** Don’t use **Action Links** for these actions: “sign up,” “submit” or “sign out.” For these actions, use [**Buttons**]({{ site.baseurl }}/components/button) instead.
* **Use a button for going to the next step in a form.** Use **Primary Button** for moving between steps of an online application or tool. This is considered an action rather than navigation.
* **Don’t use Action Links for non-actions.** **Action Links** are not meant to replace all links. It should be used explicitly for actions.

## Content considerations

* **Keep Link - Action content short.** Start with a verb. For example: “*Apply for health care benefits*” or “*Register for care*”
* Refer to the [Content Style Guide on Links]({{ site.baseurl }}/content-style-guide/links).

## Accessibility considerations

* **Purpose and target.** Link text that doesn't indicate a clear purpose or destination makes it harder for everyone--especially screen reader users--to understand where they're getting routed off to.
* **External links must indicate that they are external.** Follow the methods detailed in [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).
  * By default, the link component's external link variation will append the text, "(opens in a new tab)", instead of using an icon. This follows [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html) advice on providing users with both a spoken and visual warning that this link opens in a new tab.

{% include content/links-vs-buttons.md %}
