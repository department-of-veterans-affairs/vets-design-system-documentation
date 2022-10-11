---
layout: component
title: Tabs
status: use-with-caution-available
intro-text: "Tabs organize related groups of content within the same hierarchy into parallel views that a user can easily navigate between." 
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---


## Examples

### GI Bill Comparison Tool

![GI bill comparison tool tabs]({{site.baseurl}}/images/tabs-gibct.png) 

### Facility locator mobile view

![facility locator mobile tabs]({{site.baseurl}}/images/tabs-fac-loc-sm.png) 

## Usage

Because tabs stack horizontally or wrap to a second line, they're not an optimal design solution for mobile viewports. In some cases, using 2 tabs (only) to present a set of complementary options is acceptable.

### When to use tabs

* To group 2 to 3 pieces of related content that the user doesn't need to read at the same time.
* To allow the user to easily toggle between a binary set of options, like Search by name/Search by location or View list/View map.

### When to consider something else

* Consider using a single-select [accordion]({{ site.baseurl }}/components/accordion) to display one chunk of content at a time.
* If your content is hierarchical and/or sequential, consider using a single page of well-formatted headings and body text.

### Behavior and design

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

{% include _component-checklist.html component_name="va-tabs" %}