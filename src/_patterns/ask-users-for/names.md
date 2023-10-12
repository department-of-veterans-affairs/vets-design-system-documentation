---
layout: pattern
permalink: /patterns/ask-users-for/names
sub-section: ask-users-for
title: Names
intro-text: "Follow this pattern whenever you need to ask for a person's name for an application."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/fullNamePattern.js
example-link: https://staging.va.gov/mock-form-patterns/name-and-date-of-birth
github-title: pattern-names
research-title: Ask users for names
sketch-link: https://www.sketch.com/s/dc844743-277e-41d4-81ba-a48fd0743952/p/303BA3DA-853A-471B-9A2E-53C72F08368D/canvas
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **When you need to collect a person's name.** For example, for contact information or to complete an application.

**Note:** These fields are not on every form. Work with your stakeholders to determine what fields are necessary for your application.

## Examples

{% include component-example.html alt="Shows the form fields used to obtain first, middle, and last name." file="/images/patterns/ask-users-for/names/form-names.png" caption="Example of asking for first, middle, and last names." class="x2" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>


## How to design and build 

### How this pattern works

- **Use the [web-component-patterns/fullNamePattern in the Forms Library]( {{ page.code-link }}).**

The fullNamePattern implements the following:

- **First name and last name are required fields.** Middle name and suffix fields are optional. Mother’s maiden name field is not on every form. 
- **Make sure name fields work for most veterans.** Fields must be long enough to accommodate the names of your users. Do not restrict the types of characters users can enter in any of these fields. Names can include characters outside the standard Roman alphabet.

## Content considerations

### Error message templates for names

**When a user doesn’t enter their first name**

Say  'Please enter a first name'

**When a user doesn’t enter their last name**

Say  'Please enter a last name'