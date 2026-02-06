---
layout: component
title: Search Filter
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=29763-24650&t=RwH9qbwZGs859rIX-1
intro-text: This component implements faceted search.
web-component: va-search-filter
web: true
mobile-app: false
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

Faceted search is a way to filter search results by using attributes, or facets, like color, price, or size. It's also known as faceted browsing or faceted navigation. When you filter results, you'll narrow down what's shown based on specific facets. This helps users find what they're looking for faster.

### When to use search filters

* **When there are facets to filter by and when there is more than one page of results.** Filtering is not required but recommended in these scenarios:
  * When there are categories of results (facets) returned AND
  * Where there is more than 1 page of results (i.e results are not pre-determined to be limited to a short list of 10-20 items)

### When to consider something else

* **Use a radio button when only one filter can be applied at a time.** If a facet only allows mutually exclusive results (meaning only one filter can be applied at a time), you'll need to create your own version of filtering. Use the [Radio button]({{ site.baseurl }}/components/form/radio-button) component as the interaction input for up to 5 items. For more than 5 items, use a [Select]({{ site.baseurl }}/components/form/select) component.
* **Use a segmented button as an alternative for limited facet items.** When you have only 2-3 items within a facet that can be filtered on, consider using a [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented) component. This doesn't apply to task flows like filling out forms or reviewing secure messages.

## Behavior

* **Filters collapse inside an Accordion below tablet width.** In a mobile viewport, filters will collapse inside an Accordion component until you reach the tablet breakpoint.
* **Checkboxes allow for filtering on multiple facets.** Use the [Checkbox]({{ site.baseurl }}/components/form/checkbox) component as the interaction input for multiple facet filtering.
* **Filtering must have a distinct button to apply filtering to the results.** We use a [button]({{ site.baseurl }}/components/button) component to apply filtering.
* **Filtering must provide a way to clear or reset all filters.** Users need a clear and easy way to reset all filters. That's why we include the "Clear all filters" [button]({{ site.baseurl }}/components/button).

### Placement

* **Mobile viewport widths:** Place the Search filter below the Search Input component and above the Sort component.
* **Desktop viewport widths:** Place search filters in the left-side rail, below a full-width Search Input component.
* **Refer to the search results template.** Check out the [search results template]({{ site.baseurl }}/templates/search-results) examples for precise placement.

## Accessibility considerations

{% include a11y/search-filters.md %}

{% include component-docs.html component_name=page.web-component %}

{% include _component-checklist.html component_name=page.web-component %}
