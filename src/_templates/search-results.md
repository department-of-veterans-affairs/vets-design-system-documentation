---
layout: pattern
permalink: /templates/search-results
title: Search results
status: use-with-caution-candidate
intro-text: "Search results show links to the user of pages that matched the search query."
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
---

## About

A search results page has certain requisite parts detailed in this guidance.

## Example

### Search results page

1. [Page title](#page-title)
2. [Search input component](#search-input-component)
3. [Results description](#results-description)
4. [Sort](#sort) (optional)
5. [Filter](#filter)

### Single search result

1. [Link - Page title of matching page](#link---page-title-of-matching-page)
2. [Description](#description)
3. [URL](#url)

## Structure - Search results page

### Page title

H1 describing what is being searched.

### Search input component

Allows the user to enter a search query. Use the [search input]({{ site.baseurl }}/components/search-input) component.

### Results description 

Text describing how many results are being shown.

1. Implementation: Showing 1-10 of results for "[query]"
2. Must update when filters are changed.

### Sort

Changes the order of the results.

* Sorting is not required but recommend when changing the order of the search results provides utility to the user. For example, if results contain one or more facets that 
* The Sort action does not change any information, it simply reorders it.
* Do not conflate the Sort action with the Filter action.
    * Users encounter Sort in many different contexts, and expect it to work the same across the board.
    * Sometimes users want to simply sort a list (and not filter anything) and should have a clear path to do so.
    * Combining them adds unnecessary complexity and cognitive load, and can force users more clicks or taps to simply reorder a list (Sort) but still have to navigate through the Filter options.
* Do not take users to a new page or screen in order to sort.
* The sort action does not require an accompanying button to trigger the sort. 
* Uses the Select component.

### Filter 

Reduces the results returned by search facet.

Filtering can help a user reduce search results to find things faster. 

* Filtering is not required but recommended in these scenarios:
    * When there are categories of results (facets) returned AND
    * Where there is more than 1 page of results (i.e results are not pre-determined to be limited to a short list of 10-20 items)
* 3 or more facets requires the use of filter chips to show what is currently selected in filters.
* At mobile viewports, up until the tablet breakpoint, filters should collapse inside an Accordion component. 
    * If your product's main purpose is to allow users to search, then use a persistent, visible, left side navigation from the tablet breakpoint and wider viewports. For example, global Search, GI Bill Comparison tool, and Resource & Support (or other knowledge bases) feature search, filtering, and sorting as the main focus of their products thus they would use a persistent side navigation to hold filtering.
* Filters and sorting are separate.
* If a facet only allows mutually exclusive results at a time, in other words only one filter can be applied at one time, then use the Radio button component as the interaction input up to 7 items. For more than 7 items use a Select component. 
    * When there only 2-3 items within a facet that can be filtered on, use of a Segmented Button component is an option excluding task flows such as filling out a form, reviewing secure messages, etc.
* Multiple facet filtering uses the Checkbox component as the interaction input.
* Filtering must have a distinct action to apply filtering to the results. This must be a button and use the text "Apply filters" (TBD)
* Filtering must have a way to clear or reset all filters. 
* Do not take users to a new page or screen in order to filter.

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
