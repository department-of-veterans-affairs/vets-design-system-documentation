---
layout: pattern
permalink: /patterns/ask-users-for/multiple-responses
sub-section: ask-users-for
aka: List & Loop
title: Multiple responses
intro-text: "Follow this pattern in forms when we need to collect more than one response from a user." 
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
---

## Usage 

### When to use this pattern

Some questions in forms only have one answer, such as "What is the city and state of your birth?". Other questions can have an unknown amount of answers, such as "list all the cities and states you've lived within." This pattern appears in forms when we don't know how many responses to a question a user will provide, but we need to collect a number between 1 and "n," where "n" is all possible responses. This pattern appears in both simple and complex ways.

## Examples

### Simple

A simple example of the pattern would include a small number of entry fields, such as one or two text fields in a single line. For a question like "Please list all the cities in which you've lived," a user would list a single city, be given the option to add another city, and could continue adding additional cities until all cities were entered. Then the user would choose to either continue to the next step in the form process or simply submit the completed form if they were at the end of the process.

This diagram outlines the basic components and flow required for each state of this pattern.

{% include component-example.html alt="Simple example of asking for multiple responses." file="/images/patterns/ask-users-for/multiple-responses/contents.png" caption="Diagram of the 5 states of this pattern." %}

### Complex

Complex multiple response designs include multiple inputs and conditionals. Consider the question "What are the addresses of all locations where you served?" The associated inputs, such as street address, city, state, and zip code would need to be repeated for each additional address of services. However, there are going to be changes in fields and form input rules based on whether or not the address is in the United States or international, such as the elimination/variation of "state" fields or variations on how zip codes are validated. You can see an example of a more complex version of this pattern in [service history documentation]({{ site.baseurl }}/patterns/ask-users-for/service-history)