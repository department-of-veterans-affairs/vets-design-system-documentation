---
layout: pattern
permalink: /patterns/ask-users-for/social-security-number
sub-section: ask-users-for
title: Social security or VA file number
intro-text: "Follow this pattern whenever you need to collect a person's Social Security or VA file number for an application."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **When you need to collect a person's Social Security or VA file number.** For example, for an application for identity purposes.

## Examples

![applicant information important numbers template]({{site.baseurl}}/images/Applicant-info-important-numbers.png) 

![social security number masked]({{site.baseurl}}/images/ssn-masked-update.png) 

## How to design and build 

### How this pattern works

A Social Security Number (SSN) consists of nine digits, commonly written as three fields separated by hyphens: AAA-GG-SSSS. The first three-digit field is called the "area number". The central, two-digit field is called the "group number". The final, four-digit field is called the "serial number".

A VA file number is how a Veteran’s claim is tracked through the compensation system and how documents and other evidence are associated with a Veteran’s file in the VA’s electronic database.

- **Use a single text input for each field.**
- **Do not abbreviate.** Use ‘Social Security number’. Do not use abbreviations, such as SSN.
- **When asking for both Social Security and VA file numbers, one or the other may be provided.** VA file numbers are not on every form.If the form asks for a Social Security number and VA file number make sure to note in the VA file number label or helper text, "must have this or a Social Security number".
- **Mask Social Security number by default.** All but the last 4 numbers are masked when input loses focus. When input is in focus, the input shows the valid numbers.
- **Give user flexibility in entering their Social Security number.** A user can enter the Social Security number however they like: with spaces, without spaces, dashes, or without dashes. When the user enters their number and the input loses focus, the number will appear masked with dashes. 
- **Validate Social Security numbers.** See [content considerations](#content-considerations) for the appropriate validation messages.

## Content considerations

### Error message templates for Social Security number and VA file number:

**If nothing is entered for Social Security number**

Say 'Please enter a Social Security number'

**When a a Social Security number is entered incorrectly**

Say  'Please enter a valid 9 digit Social Security number (dashes allowed)'

**If nothing is entered for VA file number**

Say  'Please enter a VA file number'

**When a VA file number is entered incorrectly**

Say  'Your VA file number must be between 7 to 9 digits'