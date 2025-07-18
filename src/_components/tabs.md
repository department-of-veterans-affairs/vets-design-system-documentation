---
layout: component
title: Tabs
intro-text: "Tabs organize related groups of content within the same hierarchy into parallel views that a user can easily navigate between." 
github-title: va-tabs
status: use-with-caution-available
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

<!-- ### GI Bill Comparison Tool

![GI bill comparison tool tabs]({{site.baseurl}}/images/tabs-gibct.png)

### Facility locator mobile view

![facility locator mobile tabs]({{site.baseurl}}/images/tabs-fac-loc-sm.png) -->

### Web
Storybook example

## Usage

Because tabs stack horizontally or wrap to a second line, they're not an optimal design solution for mobile viewports. In some cases, using 2 tabs (only) to present a set of complementary options is acceptable.

### When to use tabs

* **Secondary navigation within an application.** Tabs allow users to navigate to sections of an application.
* **Related content within an application.** To group related content that the user doesn't need to read at the same time.

### When to consider something else

* **Changing views of the same data.** To allow the user to easily toggle between a binary set of options to see different views of the same data, use a [Button - Group Segmented]({{ site.baseurl }}/components/button/button-group-segmented) component. For example, for switching between viewing a list or a map.
* **Chunking content.** Consider using an [Accordion]({{ site.baseurl }}/components/accordion) to display one chunk of content at a time.
* **Hierarchical content.** If your content is hierarchical and/or sequential, consider using a single page of well-formatted headings and body text.
* **Moving up or down in navigational hierachy**. Use the [Side Navigation]({{ site.baseurl }}/components/side-navigation) component to move up or down in hierarchy.

### Behavior

* Allow the user to click anywhere on a tab to select it.
* Make sure the selected tab is highlighted and visually connected to the content below it.
* Never let a row of tabs wrap to a second line.
* Keep the interaction design simple. Document selected and not selected tab styles along with the focus state for each style. Hover and active states are optional for tabs.

## Content considerations

* Keep tab labels succinct and use plain language. Labels should be 1 to 2 words.
* Use sentence case for tab labels.

## Accessibility considerations

* Go to Mozilla's [ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) documentation for guidance.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Button - Group Segmented]({{ site.baseurl }}/components/button/button-group-segmented)
* [Side Navigation]({{ site.baseurl }}/components/side-navigation)

{% include _component-checklist.html component_name="va-tabs" %}
