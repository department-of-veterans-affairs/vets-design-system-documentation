---
layout: pattern
permalink: /patterns/ask-users-for/names
sub-section: ask-users-for
title: Names
intro-text: "Follow this pattern whenever you need to ask for a person's name for an application."
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

![applicant information name template]({{site.baseurl}}/images/Applicant-info-name.png)

## How to design and build 

### How this pattern works
- **First name and last name are required fields.** Middle name and suffix fields are optional. Mother’s maiden name field is not on every form. 
- **Make sure name fields work for most veterans.** Fields must be long enough to accommodate the names of your users. Do not restrict the types of characters users can enter in any of these fields. Names can include characters outside the standard Roman alphabet.

## Content considerations

### Error message templates for names

**When a user doesn’t enter their first name**

Say  'Please enter a first name'

**When a user doesn’t enter their last name**

Say  'Please enter a last name'