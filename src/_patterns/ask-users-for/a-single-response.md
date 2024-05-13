---
layout: pattern
title: A single response
permalink: /patterns/ask-users-for/a-single-response
aka: One Thing per Page
contributors: Jeana Clark (Ad Hoc), Jamie Klenetsky Fay (Coforma)
sub-section: ask-users-for
intro-text: "Asking for one logical thing at a time allows users to focus on what you are asking from them. Choose the most appropriate implementation of this pattern in forms when we need to collect a single response from a user." 
github-title: pattern-a-single-response
research-title: Ask users for a single response
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Usage

### What is One thing per page?

We should always divide long forms into multiple smaller sections that make up a logical series of pages or steps. This helps make a long form less daunting, and easier to understand by allowing the user to focus on smaller tasks.

This is often referred to as the "[One thing per page](#design-principles)" design principle. While there is often only one form field element on the page, it does not necessarily mean that there can be only one element. The "One thing" refers to the information being gathered and not the actual number of form fields.

We have a number of patterns that use the One thing per page principle and below we outline how to implement this principle as a pattern using our form components.

### When to use this pattern

* **Collecting one, or a few, responses to gather related information from the user.**  A page with too many "things" - unrelated concepts - can be difficult to understand. When a page covers multiple topics, it's hard to narrow down what the purpose of the page is, and what actions the user should take. Use this pattern to avoid this problem and to clearly divide the information being collected into logical parts.

### When not to use this pattern

* **Collecting the same data in a series of questions.** Forms will often collect the same information about 1 or more items. For example, personal information about a Veteran's dependents. The paper form equivalent would be a table where each row is an item and the columns are the questions. For this scenario, use the [Ask users for multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) pattern. Note that the multiple responses pattern does leverage the single response pattern but does so in a loop so as to collect multiple instances of information.
* **Collecting many possible responses.** Some questions can have an unknown amount of answers, such as "list all the cities and states you've lived within." When we don't know how many responses to a question a user will provide, but we need to collect a number between 1 and "n," where "n" is all possible responses, use the [Ask users for multiple responses]({{ site.baseurl }}/patterns/ask-users-for/multiple-responses) pattern.

### Why we prefer this pattern

1. **Reduces cognitive load.** The [W3C Cognitive Accessibility Guidance](https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance) provides more details on how to better meet the accessibility needs of people with cognitive and learning disabilities.
2. **Simplified error handling.** Shorter, focused pages make it easier for the user to find and correct errors.
3. **Faster page loads.** Shorter pages load and respond to user interaction faster than longer pages.
4. **Easier progress tracking.** When users drop out of the "funnel" of completing a form it is simple to tell which questions may have contributed to that drop off.
5. **Simplified navigation.** Returning to previous steps is easier as each step is focused and clear. This also makes returning to a step to make an edit easier.
6. **Improved experience on mobile.** Shorter pages are easier to scan, navigate, and move through quickly.
7. **Simplified branching and conditional logic.** Less complex pages are easier to code for conditional branches.
8. **Easier for screen readers.** Less complex pages are easier for users of screen readers to use.
9. **Improved pattern reuse.** Simple pages make pattern reuse more likely and thus simplify the design process.
10. **Simpler screens despite more clicks.** While breaking forms into smaller chunks does result in more clicks, research both here and [in the UK](https://designnotes.blog.gov.uk/2014/07/14/things-we-learnt-designing-register-to-vote/) has shown that the process feels simple and easy and users do not get stuck.  

## Examples

### Annotated

{% include component-example.html alt="An annotated example of using radio buttons to collect the answer to a single response." file="/images/patterns/ask-users-for/a-single-response/single-response-annotated.png" caption="An annotated example of using radio buttons to collect the answer to a single response." class="x2" %}

### With form description

{% include component-example.html alt="An annotated example that includes a form description." file="/images/patterns/ask-users-for/a-single-response/single-response-with-form-description.png" caption="An annotated example that adds a form description to the single response." class="x2" %}

### Examples in production

* [Sign VA claim forms as an alternate signer (VA Form 21-0972)](https://www.va.gov/supporting-forms-for-claims/alternate-signer-form-21-0972/introduction)
* [Submit a lay or witness statement to support a VA claim - Lay/Witness Statement (VA Form 21-10210)](https://www.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210/introduction)
* [File a Supplemental Claim (VA Form 20-0995)](https://www.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/start)
* [Request personal records - Freedom of Information Act (FOIA) or Privacy Act (PA) Request (VA Form 20-10206)](https://www.va.gov/records/request-personal-records-form-20-10206/introduction)

### Other relevant examples

* [gov.uk Service Manual - Structuring forms](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)
* [Cognitive Accessibility Design Pattern: Make the Purpose of Your Page Clear](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o1p01-clear-purpose/)
* [Cognitive Accessibility Design Pattern: Avoid Too Much Content](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o5p03-manageable-quantity/)
* [The Question Protocol: How to make sure every form field is necessary](https://www.uxmatters.com/mt/archives/2010/06/the-question-protocol-how-to-make-sure-every-form-field-is-necessary.php)

## How to design and build

### Anatomy and layout details

Follow the annotated [examples](#examples) above and use the [component variations listed below](#code-usage).

### How this pattern works

Your goal is to figure out how users think of the "things" - the concepts, topics, or questions - you're presenting to them. Which stand alone, and which go together?

Here are steps you can take to determine what the “things” are on your form or static web page:

1. Brainstorm what concepts you’re trying to get across. Use sticky notes to create an unorganized list of concepts.
2. Start with one concept - i.e., one sticky - per page. Assume, for the time being, that the concepts are individual “things” that belong on separate pages.
3. Do a card sorting exercise. What concepts, to you, “go” together? Try it with your team.
4. Do some desk research - how are these concepts linked together in the wild?
5. Re-organize your stickies into related concept groups, where applicable. (Some stickies won’t be in a group - that means they’re a concept all their own!)
6. Map out your flow with these groupings in mind.
7. Test your new user flow with users. Note when users are either:
  * Frustrated by the number of steps, or
  * Confused by the amount of concepts on a page
8. Iterate.

### Components used in this pattern

[View the full list of available component variations below](#code-usage).

### Page templates available for this pattern

Page templates are available in the specific patterns that leverage this pattern in the "[Ask users for...]({{ site.baseurl }}/patterns)" section.

### Design principles

**[One thing per page](https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page)** is a content design principle that can be employed when structuring forms. It exists within a broader principle of splitting, or chunking, content in order to break it up for easier understanding. This pattern is an example of this principle and this principle can be applied to other patterns or form structure in general.

The "One thing" can be:

* One piece of information you’re telling a user
* One decision a user has to make
* One question a user has to answer

That one decision or question may require more than one input from the user as they fill out a form. However, by following this pattern you can [reduce the cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/) required to complete the form by focusing the user on a specific question and its answer.


{% include content/conditionally-revealed-fields.md %}




## Code usage

Refer to the following component variations to implement this pattern:

### Checkbox

* [Single]({{ site.baseurl }}/components/form/checkbox#forms-pattern---single)
* [Single - error]({{ site.baseurl }}/components/form/checkbox#forms-pattern---single-error)
* [Multiple]({{ site.baseurl }}/components/form/checkbox#forms-pattern---multiple)

### Memorable date

* [Single]({{ site.baseurl }}/components/form/memorable-date#forms-pattern-single-default)
* [Multiple]({{ site.baseurl }}/components/form/memorable-date#forms-pattern-multiple)

### Number input

* [Single]({{ site.baseurl }}/components/form/number-input#forms-pattern-single)
* [Multiple]({{ site.baseurl }}/components/form/number-input#forms-pattern-multiple)

### Radio button

* [Single]({{ site.baseurl }}/components/form/radio-button#forms-pattern-single)
* [Single - error]({{ site.baseurl }}/components/form/radio-button#forms-pattern-single-error)
* [Multiple]({{ site.baseurl }}/components/form/radio-button#forms-pattern-multiple)

### Text input

* [Single]({{ site.baseurl }}/components/form/text-input#forms-pattern---single)
* [Single - error]({{ site.baseurl }}/components/form/text-input#forms-pattern---single-error)
* [Multiple]({{ site.baseurl }}/components/form/text-input#forms-pattern---multiple)

### Textarea

* [Single]({{ site.baseurl }}/components/form/textarea#forms-pattern---single)
* [Single - error]({{ site.baseurl }}/components/form/textarea#forms-pattern---single-error)
* [Multiple]({{ site.baseurl }}/components/form/textarea#forms-pattern---multiple)

## Accessibility considerations

Users with cognitive disabilities may have difficulties keeping focus, retaining information, and/or determining what actions they can take on a page. [According to the W3C](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o5p03-manageable-quantity/):

> "Keeping content down to a small number of important points reduces the clutter, calms the user, and allows for better understanding while aiding memory."

One way to do this is by following the "One thing per page" principle.
