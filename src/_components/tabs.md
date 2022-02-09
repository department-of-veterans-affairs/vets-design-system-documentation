---
layout: default
sub_section: Tabs
title: Tabs
draft: true
---

# Tabs

<p class="va-introtext" markdown="1">Tabs organize related groups of content within the same hierarchy into parallel views that a user can easily navigate between.</p>

## Examples

### GI Bill Comparison Tool

![GI bill comparison tool tabs]({{site.baseurl}}/images/tabs-gibct.png) 

### Facility locator mobile view

![facility locator mobile tabs]({{site.baseurl}}/images/tabs-fac-loc-sm.png) 

## Usage

The Design System Team considers tabs a deprecated component. Because tabs stack horizontally or wrap to a second line, they are not an optimal design solution for mobile viewports. 

### When to use tabs

* To group 2-3 pieces of related content that the user does not need to see simultaneously.
* To allow the user to easily toggle between a binary set of options or views, like Search by name/Search by location or View list/View map.

### When to consider something else

* Consider using a single-select [accordion](https://design.va.gov/components/accordions) to display one chunk of content at a time.
* If your content is hierarchical and/or sequential, consider using a single page of well-formatted headings and body text.

### Behavior and design

* Allow the user to click anywhere on a tab to select it.
* The selected tab must be highlighted and visually connected to content below it.
* Never let tabs wrap to a second line.
* Keep the interaction design simple. Document selected and not selected tab styles along with the focus state for each style. Hover and active states are optional for tabs.

## Content considerations

* Keep tab labels succinct and use plain language. Labels should be 1-2 words.
* Use sentence case for tab labels.

## Accessibility considerations

* See Mozilla's [ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) documentation for guidance.

## Related

* [Accordions](https://design.va.gov/components/accordions)
