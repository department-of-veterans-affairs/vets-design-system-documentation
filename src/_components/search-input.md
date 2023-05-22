---
layout: component
title: Search Input
intro-text: "The Search input component lives in the global header of VA.gov and on search results pages, and can be paired with type-ahead functionality. Type-ahead displays up to five suggested search terms in a dropdown below the Search input field while the user is typing a query. The goal of type-ahead is to help Veterans navigate to relevant content more quickly by providing them with suggestions that match the characters they type."
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Type-ahead behavior
  - anchor: Code usage
web-component: va-search-input
---

## Examples

### Default

{% include storybook-preview.html story="components-va-search-input--default" link_text="va-search-input" %}

### With button text

{% include storybook-preview.html story="components-va-search-input--with-button-text" link_text="va-search-input" %}

### With Type-ahead

{% include storybook-preview.html story="components-va-search-input--with-typeahead" link_text="va-search-input" %}

## Usage

### When to use search input with type-ahead

* The search input for site search should always be available as there will always be users who benefit from being able to search across VA.gov.
* The search input for site search should always be used in concert with type-ahead functionality as type-ahead reduces cognitive load and can assist the user in building useful search queries quickly. 
* Type-ahead when used in a search input on a results page allows a user to filter a long list of search results. 
* Type-ahead should be used in mobile search where typing a query on a small, hand-held keyboard can be difficult.

### When to consider something else

* When free text input is allowed, do not use type-ahead in form fields where the user might assume they are limited to selecting a suggested term. Alternatively, provide a clear way for the user to add an entry if you do use type-ahead in a form field.

### Placement

* The search input component should only appear in the global header, on search results pages, and in search-related tools such as Resources and Support and Find a VA Form. 
* The search input component is revealed when a user interacts with the Search va-dropdown in the global header.
* On search results pages, the search input appears below the header of the page and above the count of results in the main content well.
* On search-related tools pages, the search input appears below the header of the page and above the linked resources or form links in the main content well.

### How to use Search input with type-ahead

* When adding Search input with type-ahead to a search results page, match [the global search results implementation](https://www.va.gov/search/) on VA.gov.

## Type-ahead behavior

Up to five suggestions are presented to the user in a dropdown menu after they have typed three characters or more in the query input box. Selecting an item in the dropdown list will navigate the user to the search results page. 

Suggestions are derived using two methods:

### 1. Search Algorithm that leverages the searches performed on VA.gov website.

- A given term/phrase must be searched five times in a 24-hour period to appear as a suggestion.
- If a suggestion does not meet those requirements, then it will be removed from circulation after a 30-day period.
- Certain queries will not appear as suggestions for privacy and security purposes. (e.g., Names, SIN, etc.)
- Terms related to geographical locations will not appear including cities and states.

### 2. A hardcoded list of specific terms curated to align with VA topics. 

Terms that are added to this list include:

- Hard to spell terms, particularly long ones (benefits, government)
- Alphanumeric form titles (10-10ez)
- Common veteran tasks
- Top va.gov searches (benefits)
- Best bets (e.g., Covid-19 vaccine)
- Promoting va content to aid in wayfinding (e.g., Find a form or how do I?)

### Ranking of suggestions

The five suggestions that are presented to users are selected from the suggestion database (combination of both the algorithm terms and the hardcoded terms).

The suggestions are ranked using the following rules:

* Use query to find ALL possible matches
* Sorted list by hardcoded/canned suggestion
* Remove any hardcoded suggestions from the algorithm list 
* Then by algorithm / non-canned suggestion
* Sort by best match (still preserving the above order)
* Take the top five

Search.gov's implementation of type-ahead does support fuzzy string matching to help with typos.

{% include component-docs.html component_name=page.web-component %}

### API calls and dependent systems

* [Search.gov type-ahead suggestions API](https://open.gsa.gov/api/searchgov-suggestions/)

### Additional coding guidelines for type-ahead

The va-search component behaves as an input field with a submit button by default. In order to add type-ahead functionality, pass an array of suggestions that will be displayed below the input field. However, this component does not include logic to generate those suggestions.
