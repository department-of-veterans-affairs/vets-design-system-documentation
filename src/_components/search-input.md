---
layout: component
title: Search Input
intro-text: "The Search Input component lives in the global header of VA.gov and on search results pages, and can be paired with type-ahead functionality. Type-ahead displays up to five suggested search terms in a dropdown below the search input field while the user is typing a query. The goal of type-ahead is to help Veterans navigate to relevant content more quickly by providing them with suggestions that match the characters they type."
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1276%3A4463&mode=design&t=q1Wbhw4ZIogPDFEb-1
uswds-v3: primary
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
web-component: va-search-input
web: true
mobile-app: false
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-search-input--default" link_text="va-search-input Default" %}

### With button text

{% include storybook-preview.html story="uswds-va-search-input--with-button-text" link_text="va-search-input with Button text" %}

### Big

{% include storybook-preview.html story="uswds-va-search-input--big" link_text="va-search-input Big" %}

### Small

{% include storybook-preview.html story="uswds-va-search-input--small" link_text="va-search-input small" %}

### With Type-ahead

{% include storybook-preview.html story="uswds-va-search-input--with-typeahead" link_text="va-search-input with typeahead" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/search"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

### When to use Search Input with type-ahead

* The Search Input for site search should always be available as there will always be users who benefit from being able to search across VA.gov.
* The Search Input for site search should always be used in concert with type-ahead functionality as type-ahead reduces cognitive load and can assist the user in building useful search queries quickly.
* Type-ahead when used in a Search Input on a results page allows a user to filter a long list of search results.
* Type-ahead should be used in mobile search where typing a query on a small, hand-held keyboard can be difficult.

### When to consider something else

* When free text input is allowed, do not use type-ahead in form fields where the user might assume they are limited to selecting a suggested term. Alternatively, provide a clear way for the user to add an entry if you do use type-ahead in a form field.

{% include content/select-options.md %}

## Behavior

Up to five suggestions are presented to the user in a dropdown menu after they have typed three characters or more in the query input box. Selecting an item in the dropdown list will navigate the user to the search results page.

Suggestions are derived using two methods:

### 1. Search Algorithm that leverages the searches performed on VA.gov website

* A given term/phrase must be searched five times in a 24-hour period to appear as a suggestion.
* If a suggestion does not meet those requirements, then it will be removed from circulation after a 30-day period.
* Certain queries will not appear as suggestions for privacy and security purposes. (e.g., Names, SIN, etc.)
* Terms related to geographical locations will not appear including cities and states.

### 2. A hardcoded list of specific terms curated to align with VA topics

Terms that are added to this list include:

* Hard to spell terms, particularly long ones (benefits, government)
* Alphanumeric form titles (10-10ez)
* Common Veteran tasks
* Top VA.gov searches (benefits)
* Best bets (e.g., Covid-19 vaccine)
* Promoting VA content to aid in wayfinding (e.g., Find a form or how do I?)

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

* When adding Search Input with type-ahead to a search results page, match [the global search results implementation](https://www.va.gov/search/) on VA.gov.
* The Search Input component behaves as an input field with a submit button by default. In order to add type-ahead functionality, pass an array of suggestions that will be displayed below the input field. However, this component does not include logic to generate those suggestions.

### Placement

* The search input component should only appear in the global header, on search results pages, and in search-related tools such as Resources and Support and Find a VA Form.
* The search input component is revealed when a user interacts with the Search via the dropdown in the global header.
* On search results pages, the search input appears below the header of the page and above the count of results in the main content well.
* On search-related tools pages, the search input appears below the header of the page and above the linked resources or form links in the main content well.

### Choosing between web variations

There are 3 size variations of the Search Input component.

* **Use the default variation for standard search patterns.** Use the default size when the search input is embedded in a content area alongside other page elements, such as on search results pages, tool-specific pages (Resources and Support, Find a Form), and the homepage search. This is the most common variation.
* **Use the big variation when search is the primary action on the page.** Use the big size when the search input serves as a prominent, standalone call to action and is not paired with a results list on the same page. For example, a reference number lookup that navigates the user to a new view or displays an inline status.
* **Use the small variation when space or visual hierarchy is a constraint.** The small size can be appropriate in compact interfaces where a full-sized search input would dominate the layout, such as in toolbars or panels. This variation has no defined production usage pattern at this time. Consult the Design System team if you are considering this variation.

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/search/#accessibility-search"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

## Privacy guidance

**An open text field that allows users to enter a search query has a high risk for users to enter Personally Identifiable Information (PII) or Protected Health Information (PHI).**

If search entries are tracked, proper procedures must be in place for stripping/redacting PII/PHI from logs.

If the user’s entered query is passed in a URL parameter, that parameter value should be stripped from any logs.

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)
