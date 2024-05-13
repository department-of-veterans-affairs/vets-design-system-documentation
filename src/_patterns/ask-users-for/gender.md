---
layout: pattern
permalink: /patterns/ask-users-for/gender
sub-section: ask-users-for
title: Gender
intro-text: Follow this pattern whenever you need to ask Veterans their gender. 
github-title: pattern-gender
research-title: Ask users for gender
status: use-with-caution-candidate
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
---

## Usage

### When to use this pattern

* **Don’t ask if it does not benefit the user experience.** You should only ask users about gender when absolutely necessary.  

**Note:** Many forms are based off of paper forms with limited fields for gender. Work with your stakeholder to expand the fields.

## Examples

{% include component-example.html alt="Asking for gender in the VA.gov Profile." file="/images/patterns/ask-users-for/gender/gender-identity-profile.png" caption="Asking for gender in the VA.gov Profile, personal information section." width="75%" %}

{% include component-example.html alt="Contents of the What to know, additional information component." file="/images/patterns/ask-users-for/gender/gender-identity-profile-what-to-know.png" caption="Contents of the What to know before you decide to share your gender identity additional information component in Profile." width="75%" %}

## How to design and build

### How this pattern works

<!-- We didn't do this due to a backend constraint. * **Give Veterans the option of picking more than one gender they could identify with.** Always use checkboxes so that Veterans can identify with multiple descriptions. -->
* **Provide a way to opt-out of answering.** A checkbox labeled "Prefer not to answer" should be provided.
* **Provide a way to give a 'None of the above' answer.** A checkbox labeled "A gender not listed here." should be provided.
* **Explain what happens to the information collected.** Always explain to Veterans how the information they provide is used, shared, and protected.