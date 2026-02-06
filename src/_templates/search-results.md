---
layout: pattern
permalink: /templates/search-results
title: Search results
status: use-with-caution-candidate
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=15688-5938&t=QgRvXLVytGwafCeR-1
intro-text: "Search results show links to the user of pages that matched the search query. A search results page has certain required parts detailed in this guidance."
anchors:
  - anchor: About
  - anchor: Examples
  - anchor: Structure - Search results page
  - anchor: Structure - Single search result
  - anchor: How to design and build
---

## About

Users need a way to filter and sort information like search results, long lists (such as facilities, providers), and data sets so that they can find relevant information quickly and easily. Users encounter filter and sort actions in many different contexts, with different types of information.

Information such as:

* Search results
* Site search
* Resources and support
* Refining lists of information
* Medications
* Appointments
* Secure messages
* Claims
* History
* Data sets

Contexts such as:
* within a form
* on a search results page
* within a form AND viewing search results
* within a knowledge base such as Resources and support
* sorting data in a table

## Examples

### Results only

{% include component-example.html
  class="x2"
  reverse="true"
  alt="An example of a search results page."
  caption="Search results page without options to sort or filter. Annotated."
  file="/images/templates/search-results/site-search-results-annotated.png" %}

### Filter and sort

{% include component-example.html
  class="x2"
  reverse="true"
  alt="An example of a search results page showing filtering and sorting."
  caption="Search results page showing sorting and filtering options. Annotated."
  file="/images/templates/search-results/search-results-site-search-sort-and-filter-annotated.png" %}

### Filter and sort with active filter chips

{% include component-example.html
  reverse="true"
  alt="An example of a search results page showing filtering and sorting in a desktop width viewport."
  caption="Search results page showing sorting and filtering options with active filter chips. Annotated."
  file="/images/templates/search-results/search-results-sort-and-filter-with-chips-annotated.png" %}

### Filters

See the [Search Filter]({{ site.baseurl }}/components/search-filter) component.

### Search result

{% include component-example.html
  alt="An example of a single search result."
  caption="A search result. Annotated."
  file="/images/templates/search-results/search-result-annotated.png" %}

## Structure - Search results page

### Search results page

The search results page can feature all of the following, but not all aspects are required.

1. [Page title](#page-title)
2. [Search Input](#search-input-component)
3. [Active filters](#active-filters)
4. [Filters](#filters)
5. [Sort](#sort)
6. [Results description](#results-description)
7. [Apply filters](#apply-filters)
8. [Clear all filters](#clear-all-filters)
9. [Pagination](#pagination)
10. [Search result](#search-result)

### Page title

H1 describing what is being searched.

### Search Input component

Allows the user to enter a search query. Use the [Search Input]({{ site.baseurl }}/components/search-input) component.

### Active filters

Active filter chips that show the currently applied filter values.

### Filters

[Search Filter]({{ site.baseurl }}/components/search-filter) component which includes [checkbox]({{ site.baseurl }}/components/form/checkbox) and [radio button]({{ site.baseurl }}/components/form/radio-button) components that allow the user to filter search results by facets.

### Sort

[Sort]({{ site.baseurl }}/components/sort) component which utilizes [Select]({{ site.baseurl }}/components/form/select) as its foundation. It allows the user to change the order of the results. 

### Results description

{% include components/results-description.md %}

### Apply filters

[Button - Primary]({{ site.baseurl }}/components/button) component that applies filters that have been selected.

### Clear all filters

[Button - Secondary]({{ site.baseurl }}/components/button) component that removes all filters.

### Pagination

[Pagination]({{ site.baseurl }}/components/pagination) component allows users to move between pages of search results.

## Structure - Single search result

### Single search result

1. [Link - Page title of matching page](#link---page-title-of-matching-page)
2. [Description](#description)
3. [URL](#url)

### Link - Page title of matching page

This should match the H1 of the page that the result will link to.

* Implemented using a header, typically a H3 or H4.
* Should also increase the distance between the text and link underline as well as reduce the thickness of the underline (text-underline-offset: 3px; text-decoration-thickness should resolve to 1px)

### Description

Describes the content of the matching page. Typically using content from the meta element named description in the page itself.

* Must bold the text in the description that matches the search query.

### URL

The text of the link of the matching page. This should not be a link (the header is the link).

## How to design and build

### Filtering

<va-link-action
  href="{{ site.baseurl }}/components/search-filter"
  text="Follow the guidance for the search filter component"
  type="secondary"
></va-link-action>


### Sorting
<va-link-action
  href="{{ site.baseurl }}/components/sort"
  text="Follow the guidance for the sort component"
  type="secondary"
></va-link-action>

<!--
* **Add sorting when it has utility to the user.** Sorting is not required but recommended when changing the order of the search results provides utility to the user. For example, if results contain one or more facets that can be sorted.
* **Sorting does not change contents of the page.** The action of sorting must not change any information on the page. Sorting simply reorders the page contents.
* **Sort and filtering are not the same!** Do not conflate the Sort action with the Filter action.
  * Users encounter Sort in many different contexts and expect it to work the same across the board.
  * Sometimes users want to simply sort a list (and not filter anything) and should have a clear path to do so.
  * Combining them adds unnecessary complexity and cognitive load, and can force users to make more clicks or taps to simply reorder a list (Sort) while still having to navigate through the Filter options.
* **Sorting happens inline on the page.** Do not take users to a new page or screen in order to sort search results.
* **Sorting does not require an additional action.** Sorting does not require an accompanying button to trigger the sort. Changing the select menu triggers the sorting action.-->

## Accessibility considerations

{% include a11y/search-filters.md %}

#### Additional guidance

* **Use filter chips to show the filters being applied when there are more than 3 facets.** 3 or more facets requires the use of filter chips to show what is currently selected in filters.
* **Use a left-hand sidebar when the main purpose of the product is to search.** If your product's main purpose is to allow users to search, then use a persistent, visible, left side navigation from the tablet breakpoint and wider viewports. For example, global Search, GI Bill Comparison tool, and Resource & Support (or other knowledge bases) feature search, filtering, and sorting as the main focus of their products thus they would use a persistent side navigation to hold filtering.
* **Sort and filtering are not the same!** Do not conflate the Sort action with the Filter action. Sorting is for reordering results whereas Filtering is for narrowing them down.
* **Filtering happens inline on the page.** Do not take users to a new page or screen in order to filter search results.
