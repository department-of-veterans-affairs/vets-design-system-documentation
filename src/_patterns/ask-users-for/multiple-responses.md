---
layout: pattern
title: Multiple responses
permalink: /patterns/ask-users-for/multiple-responses
redirect_from:
  - /patterns/forms/list-and-loop
aka: List & Loop
sub-section: ask-users-for
intro-text: "Choose the most appropriate implementation of this pattern in forms when we need to collect more than one response from a user." 
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Usage 

### When to use this pattern

* **Collecting the same data in a series of questions.** Forms will often collect the same information about 1 or more items. For example, personal information about a Veteran's dependents. The paper form equivalent would be a table where each row is an item and the columns are the questions.
* **Collecting between 1 and many possible responses.** Some questions in forms only have one answer, such as "What is the city and state of your birth?". Other questions can have an unknown amount of answers, such as "list all the cities and states you've lived within." This pattern appears in forms when we don't know how many responses to a question a user will provide, but we need to collect a number between 1 and "n," where "n" is all possible responses. This pattern appears in both simple and complex ways.

### When not to use this pattern

* **Inconsistent questions being asked for each item.** If the same data isn't being collected for each item then this pattern does not lend itself well as a solution as it is meant to capture the same set of information multiple times.

## Examples

### Single page

#### Collection

{% include component-example.html alt="Form example requesting service history from a Veteran." file="/images/patterns/ask-users-for/service-history/list-and-loop.png" caption="Form collecting service history information from a Veteran." width="50%" %}

#### Review for edit and remove

{% include component-example.html alt="Form showing service history collected from a Veteran." file="/images/patterns/ask-users-for/service-history/list-and-loop3.png" caption="Form displaying service history collected from a Veteran and allowing the user to edit or remove the information collected." width="50%" %}

### Contact list

### Add item 

### Array data

## How to design and build 

### Single page

#### Collection 

Consider the question "What are the addresses of all locations where you served?" The associated inputs, such as street address, city, state, and zip code would need to be repeated for each additional address of services. However, there are going to be changes in fields and form input rules based on whether or not the address is in the United States or international, such as the elimination/variation of "state" fields or variations on how zip codes are validated. 