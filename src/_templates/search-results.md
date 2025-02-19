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
  - anchor: Structure
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

### Search results page

The search results page can feature all of the following, but not all aspects are required.

1. [Page title](#page-title)
2. [Search input](#search-input-component)
3. [Filter drawer](#filter-drawer)
4. [Active filters](#active-filters)
5. [Filters](#filters)
6. [Sort](#sort)
7. [Results description](#results-description)
8. [Apply filters](#apply-filters)
9. [Clear all filters](#clear-all-filters)
10. [Pagination](#pagination)
11. [Search result](#search-result)

### Search result

{% include component-example.html
  alt="An example of a single search result." 
  caption="A search result. Annotated."
  file="/images/templates/search-results/search-result-annotated.png" %}

### Single search result

1. [Link - Page title of matching page](#link---page-title-of-matching-page)
2. [Description](#description)
3. [URL](#url)

## Structure - Search results page

### Page title

H1 describing what is being searched.

### Search input component

Allows the user to enter a search query. Use the [search input]({{ site.baseurl }}/components/search-input) component.

### Filter drawer

[Accordion]({{ site.baseurl }}/components/accordion) component that contains the filters.

### Active filters

Active filter chips that show the currently applied filter values.

### Filters

[Checkbox]({{ site.baseurl }}/components/form/checkbox) and [radio button]({{ site.baseurl }}/components/form/radio-button) components allow the user to filter search results by facets.

### Sort

Changes the order of the results. Sort uses the [Select]({{ site.baseurl }}/components/form/select) component to show the sorting options.

### Results description 

Text describing how many results are being shown.

* **Showing 1-10 of results.** The implementation should follow this format:
> Showing 1-10 of results for "[query]"
* **Update when filters change.** The results description must update when filters are changed so that all users can understand that the results have been updated.

### Apply filters

[Button - Primary]({{ site.baseurl }}/components/button) component that applies filters that have been selected.

### Clear all filters

[Button - Secondary]({{ site.baseurl }}/components/button) component that removes all filters.

### Pagination

[Pagination]({{ site.baseurl }}/components/pagination) component allows users to move between pages of search results.

## Structure - Single search result

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

### Sorting

* **Add sorting when it has utility to the user.** Sorting is not required but recommended when changing the order of the search results provides utility to the user. For example, if results contain one or more facets that can be sorted.
* **Sorting does not change contents of the page.** The action of sorting must not change any information on the page. Sorting simply reorders the page contents.
* **Sort and filtering are not the same!** Do not conflate the Sort action with the Filter action.
  * Users encounter Sort in many different contexts and expect it to work the same across the board.
  * Sometimes users want to simply sort a list (and not filter anything) and should have a clear path to do so.
  * Combining them adds unnecessary complexity and cognitive load, and can force users to make more clicks or taps to simply reorder a list (Sort) while still having to navigate through the Filter options.
* **Sorting happens inline on the page.** Do not take users to a new page or screen in order to sort search results.
* **Sorting does not require an additional action.** Sorting does not require an accompanying button to trigger the sort. Changing the select menu triggers the sorting action.

### Filtering 

Faceted search is a way to filter search results by using attributes, or facets, like color, price, or size. It's also known as faceted browsing or faceted navigation. Filtering reduces the results returned by search facet. Filtering can help a user reduce search results to find things faster. 

* **Uses filters when there are facets to filter by and when there is more than one page of results.** Filtering is not required but recommended in these scenarios:
    * When there are categories of results (facets) returned AND
    * Where there is more than 1 page of results (i.e results are not pre-determined to be limited to a short list of 10-20 items)
* **Use filter chips to show the filters being applied when there are more than 3 facets.** 3 or more facets requires the use of filter chips to show what is currently selected in filters.
* **Filters collapse inside an Accordion below table width.** At mobile viewports, up until the tablet breakpoint, filters should collapse inside an Accordion component. 
    * **Use a left-hand sidebar when the main purpose of the product is to search.** If your product's main purpose is to allow users to search, then use a persistent, visible, left side navigation from the tablet breakpoint and wider viewports. For example, global Search, GI Bill Comparison tool, and Resource & Support (or other knowledge bases) feature search, filtering, and sorting as the main focus of their products thus they would use a persistent side navigation to hold filtering.
* **Sort and filtering are not the same!** Do not conflate the Sort action with the Filter action. See [guidance on sort](#sort).
* **Use a checkbox for filtering on multiple facets.** Multiple facet filtering uses the [Checkbox]({{ site.baseurl }}/components/form/checkbox) component as the interaction input.
* **Use a radio button when only one filter can be applied at a time.** If a facet only allows mutually exclusive results at a time, in other words only one filter can be applied at one time, then use the [Radio button]({{ site.baseurl }}/components/form/radio-button) component as the interaction input up to 5 items. For more than 5 items use a [Select]({{ site.baseurl }}/components/form/select) component. 
    * When there only 2-3 items within a facet that can be filtered on, use of a Segmented Button component is an option excluding task flows such as filling out a form, reviewing secure messages, etc.
* **Filtering must have a distinct button to apply filtering to the results.** Use a [button]({{ site.baseurl }}/components/button) component to apply filtering. The button must use the text "Apply filters".
* **Provide a way to clear or reset all filters.** The user must have a clear and easy way to clear or reset all filters. 
* **Filtering happens inline on the page.** Do not take users to a new page or screen in order to filter search results.
