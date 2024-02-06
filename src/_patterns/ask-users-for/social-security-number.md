---
layout: pattern
permalink: /patterns/ask-users-for/social-security-number
sub-section: ask-users-for
title: Social security or VA file number
intro-text: "Follow this pattern whenever you need to collect a person's Social Security or VA file number for an application."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/ssnPattern.jsx
example-link: https://staging.va.gov/mock-form-patterns/identification-information
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988%3A23560&mode=design&t=93yXuwTXsWwWopry-1
github-title: pattern-ssn
research-title: Ask users for social security number
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

* **When you need to collect a person's Social Security or VA file number.** For example, for an application for identity purposes.

## Examples

{% include component-example.html alt="Shows the form fields used to obtain Social Security number and VA file number." file="/images/patterns/ask-users-for/social-security-number/form-ssn.png" caption="Example of asking for a Social security or VA file number." class="x2" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

## How to design and build

### How this pattern works

A Social Security Number (SSN) consists of nine digits, commonly written as three fields separated by hyphens: AAA-GG-SSSS. The first three-digit field is called the "area number". The central, two-digit field is called the "group number". The final, four-digit field is called the "serial number".

A VA file number is how a Veteran’s claim is tracked through the compensation system and how documents and other evidence are associated with a Veteran’s file in the VA’s electronic database.

* **Use the [web-component-patterns/ssnPattern in the Forms Library]( {{ page.code-link }}).**

The ssnPattern implements the following:

* **Use a single text input for each field.**
* **Do not abbreviate.** Use ‘Social Security number’. Do not use abbreviations, such as SSN.
* **When asking for both Social Security and VA file numbers, one or the other may be provided.** VA file numbers are not on every form.If the form asks for a Social Security number and VA file number make sure to note in the VA file number label or helper text, "must have this or a Social Security number".
* **Give user flexibility in entering their Social Security number.** A user can enter the Social Security number however they like: with spaces, without spaces, dashes, or without dashes. When the user enters their number and the input loses focus, the number will appear masked with dashes. 
* **Validate Social Security numbers.** See [content considerations](#content-considerations) for the appropriate validation messages.

### Components used in this pattern

* [Text input]({{ site.baseurl }}/components/form/text-input)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Social Security or VA file number in Figma]({{ page.figma-link }}).

## Code usage

[ssnPattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

### Error message templates for Social Security number and VA file number

**If nothing is entered for Social Security number**
: Say "Please enter a Social Security number"

**When a a Social Security number is entered incorrectly**
: Say "Please enter a valid 9 digit Social Security number (dashes allowed)"

**If nothing is entered for VA file number**
: Say "Please enter a VA file number"

**When a VA file number is entered incorrectly**
: Say "Your VA file number must be 8 or 9 digits"