---
layout: default
sub_section: Tabs
title: Tabs
---

# Tabs

<div class="va-introtext" markdown="1">
Tabs organize related groups of content (within the same hierarcy level) into discrete views that a user can easier navigate between.</div>

## Examples

### GI Bill Comparison Tool

{% include storybook-preview.html story="components-va-accordion--default" %}

### Claim Status Tool

{% include storybook-preview.html story="components-va-accordion--bordered" %}

### Facility locator mobile view

{% include storybook-preview.html story="components-va-accordion--single-select" %}

## Usage

Because tabs stack horizontally, they are not an optimal design solution for mobile viewports. The Design System Team considers tabs a deprecated component.

### When to use tabs

* To organize 2-3 pieces of related content that users do not need to see all at one time.
* To allow the user to easily switch between a binary set of options, like Search by name/Search by location or View list/View map.

### When to consider something else

* Consider using a single-select accordion to display one chunk of content at a time.
* Consider using a dropdown menu (with options that correspond to sections of content) + button to switch between content views.

### Behavior

* At a minimum, make sure selected and not selected tab styles are documented in your design, along with the focus states for each style. Hover and active states are optional for tabs.
* Allow users to click anywhere on a tab to select it.
* Never let tabs wrap to a second line.

## Content considerations

* 

## Accessibility considerations and testing

* 

## Related

* [Additional info](https://design.va.gov/components/additional-info)
* [Expandable content](https://design.va.gov/patterns/content-presentation#expandable-content)
