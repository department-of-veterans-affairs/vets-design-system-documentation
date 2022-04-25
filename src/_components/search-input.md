---
layout: component
title: Search Input
intro-text: "Search Input......"
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
web-component: va-search-input
---

# Search input

<p class="va-introtext"> The Search input component lives in the global header of VA.gov and on search results pages, and can be paired with type-ahead functionality. Type-ahead displays up to five suggested search terms in a dropdowon below the Search input field while the user is typing a query. The goal of type-ahead is to help Veterans navigate to relevant content more quickly by providing them with suggestions that match the characters they type.</p>

## Examples

### Default

{% include storybook-preview.html story="components-va-search-do-not-use-yet--default" %}

### With button text

{% include storybook-preview.html story="components-va-search-do-not-use-yet--with-button-text" %}

## Usage

### When to use Search input with type-ahead

* In the global header and on search results pages, only. Type-ahead reduces cognitive load and can assist the user in building useful search queries quickly. When adding the Search input with type-ahead to a search results page, match [this implementation](https://www.va.gov/search/).
* To allow the user to filter a long list of search results. 
* In mobile search UIs where typing a query on a small, hand-held keyboard can be difficult.

### When to consider something else

* When free text input is allowed, do not use type-ahead in form fields where the user might assume they are limited to selecting a suggested term. Alternatively, provide a clear way for the user to add an entry if you do use type-ahead in a form field.

## Search behavior

Up to five suggestions are presented to the user in a dropdown menu after they have typed three characters or more in the query input box. Selecting an item in the dropdown list will navigate the user to the search results page. 

Suggestions are derived using two methods:

1) **Search Algorithm** that leverages the searches performed on VA.gov website.
     - A given term/phrase must be searched five times in a 24-hour period to appear as a suggestion.
     - If a suggestion does not meet those requirements, then it will be removed from circulation after a 30-day period.
     - Certain queries will not appear as suggestions for privacy and security purposes. (e.g., Names, SIN, etc.)
     - Terms related to geographical locations will not appear including cities and states.

2. A **hardcoded list of specific terms** curated to align with VA topics. Terms that are added to this list include:
   - hard to spell terms, particularly long ones (benefits, government)
   - alphanumeric form titles (10-10ez)
   - common veteran tasks
   - top va.gov searches (benefits)
   - best bets (e.g., Covid-19 vaccine)
   - promoting va content to aid in wayfinding (e.g., Find a form or how do I?)

The five suggestions that are presented to users are selected from the suggestion database (combination of both the algorithm terms and the hardcoded terms).

The suggestions are ranked using the following rules:
* Use query to find ALL possible matches
* Sorted list by hardcoded/canned suggestion
* Remove any hardcoded suggestions from the algorithm list 
* Then by algorithm / non-canned suggestion
* Sort by best match (still preserving the above order)
* Take the top five

Search.gov's implementation of type-ahead does support fuzzy string matching to help with typos.

### API calls and dependent systems

* Search.gov  [Type-Ahead suggestions API](https://open.gsa.gov/api/searchgov-suggestions/)

<!-- ## Accessibility considerations -->

