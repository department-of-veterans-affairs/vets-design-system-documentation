---
layout: pattern
permalink: /patterns/ask-users-for/names
sub-section: ask-users-for
title: Names
intro-text: "Follow this pattern whenever you need to ask for a person's name for an application."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/fullNamePattern.js
example-link: https://staging.va.gov/mock-form-patterns/name-and-date-of-birth
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates-(Patterns-%26-Forms)?type=design&node-id=2988%3A2763&mode=design&t=Y0LWxs33fRITMh6x-1
github-title: pattern-names
research-title: Ask users for names
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **When you need to collect a person's name.** For example, for contact information or to complete an application.

**Note:** These fields are not on every form. Work with your stakeholders to determine which fields are necessary for your application.

## Examples

{% include component-example.html alt="Shows the form fields used to obtain first, middle, and last name." file="/images/patterns/ask-users-for/names/form-names.png" caption="Example of asking for first, middle, and last names." class="x2" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

## How to design and build

### How this pattern works

The names pattern implements the following:

* **First name and last name are required fields.** Optional fields include:
  * Middle name
  * Suffix
  * Mother’s maiden name
* **Make sure name fields work for most veterans.** Fields must be long enough to accommodate the names of your users. Do not restrict the types of characters users can enter in any of these fields. Names can include characters outside the standard Roman alphabet.
* **Pair with date of birth.** Collection of full name is paired with [date of birth]({{ site.baseurl }}/patterns/ask-users-for/dates). The two patterns typically appear on the same step/page.

### Components used in this pattern

* [Select]({{ site.baseurl }}/components/form/select) for suffix, when necessary
* [Text input]({{ site.baseurl }}/components/form/text-input)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Names in Figma]({{ page.figma-link }}).

## Code usage

[fullNamePattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

### Error message templates for names

**When a user doesn’t enter their first name...**
: Say "Please enter a first name"

**When a user doesn’t enter their last name...**
: Say "Please enter a last name"

**When a user enters a character that we cannot accept...**
: Say "You entered a character we can’t accept. Try removing [invalid character]"
