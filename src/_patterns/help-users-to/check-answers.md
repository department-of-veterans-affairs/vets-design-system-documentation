---
layout: pattern
title: Check answers
permalink: /patterns/help-users-to/check-answers
redirect_from:
  - /patterns/forms/review
sub-section: help-users-to
intro-text: "Follow this pattern to help users check their answers before submitting a form."
research-title: Help users to check answers 
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to design and build
---

## Usage

### When to use this pattern

* **At the end of a form flow.** Allowing users to check their answers before submitting their form allows them an opportunity to catch any mistakes they have made and allows for them to reconsider their answers.

## How to design and build 

### How this pattern works

- Use the [Review page template]({{ site.baseurl }}/templates/forms/review).
- Each chapter or step should have a corresponding [Accordion]({{ site.baseurl }}/components/accordion).
- Chapters or steps are listed in chronological order matching the flow of the process.
- ‘File upload’ and ‘Add another’ sections should use the same presentation style used on their step pages. For example, the [grey Card]{{site.baseurl}}/components/card) variation.

### Components used in this pattern

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Button pair]({{ site.baseurl }}/components/button/button-pair)
* [Privacy agreement]({{ site.baseurl }}/components/privacy-agreement)
* [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented)