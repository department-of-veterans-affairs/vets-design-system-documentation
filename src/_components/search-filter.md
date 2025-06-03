---
layout: component
title: Search Filter
intro-text: This component implements faceted search.
web-component: va-search-filter
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-search-filter--default" link_text="va-search-filter Default" height="750px" auto_resize=false %}

### Active filters

{% include storybook-preview.html story="components-va-search-filter--active-filters" link_text="va-search-filter Active Filters" height="750px" auto_resize=false %}

## Usage

Faceted search is a way to filter search results by using attributes, or facets, like color, price, or size. It's also known as faceted browsing or faceted navigation. Filtering reduces the results returned by search facet. Filtering can help a user reduce search results to find things faster.

### When to use search filters

* **When there are facets to filter by and when there is more than one page of results.** Filtering is not required but recommended in these scenarios:
  * When there are categories of results (facets) returned AND
  * Where there is more than 1 page of results (i.e results are not pre-determined to be limited to a short list of 10-20 items)

### When to consider something else

* **Use a radio button when only one filter can be applied at a time.** If a facet only allows mutually exclusive results at a time, in other words only one filter can be applied at one time, then you will need to roll your own version of filtering and use the [Radio button]({{ site.baseurl }}/components/form/radio-button) component as the interaction input up to 5 items. For more than 5 items use a [Select]({{ site.baseurl }}/components/form/select) component.
* **Use a segmented button as an alternative when there are limited facet items.** When there are only 2-3 items within a facet that can be filtered on, use of a [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented) component is an option excluding task flows such as filling out a form, reviewing secure messages, etc.

## Behavior

* **Filters collapse inside an Accordion below table width.** At mobile viewports, up until the tablet breakpoint, filters should collapse inside an Accordion component.
* **Checkboxes allow for filtering on multiple facets.** Multiple facet filtering uses the [Checkbox]({{ site.baseurl }}/components/form/checkbox) component as the interaction input.
* **Filtering must have a distinct button to apply filtering to the results.** This component uses a [button]({{ site.baseurl }}/components/button) component to apply filtering.
* **Filtering must provide a way to clear or reset all filters.** The user must have a clear and easy way to clear or reset all filters. Thus the inclusion of the "Clear all filters" [button]({{ site.baseurl }}/components/button).

### Placement

Refer to the [search results template]({{ site.baseurl }}/templates/search-results) for placement.

{% include component-docs.html component_name=page.web-component %}

{% include _component-checklist.html component_name=page.web-component %}
