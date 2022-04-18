---
layout: default
title: Type-ahead
draft: true
---

# Type-ahead

<p class="va-introtext">The type-ahead component displays up to five suggested search terms in a dropdowon below the input field while the user is typing a query.</p>

## Example

{% include storybook-preview.html story="components-va-search--default" %}

## Usage

### When to use Type-ahead

Use type-ahead:

* In global search and other places where predictive text can help the user complete their query. 
* To allow the user to filter a list of search results. 

### When to consider something else

* The type-ahead component is designed for search and filter use cases. Do not use type-ahead in form fields where the user might assume they are limited to selecting a suggested term in the dropdown menu (where free text input is also allowed).

### Behavior

* When the third character is typed in the input field, a dropdown with up to five suggested terms will display.
* The autocompleted characters in the dropdown are in bold typeface.  
* The Tab key and Shift + Tab moves focus between the input field and search button.
* The Up/Down arrow keys move focus between items in the dropdown list.
* Selecting a term in the list through clicking with a mouse or using the Enter key will navigate the user to that page.

## Accessibility considerations

## Related
