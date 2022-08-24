---
layout: pattern
permalink: /patterns/ask-users-for/email-address
sub-section: ask-users-for
title: Email address
intro-text: "Follow this pattern to ask a user for an email address."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **When you need to collect an email address.** For example, for contact information.
 
## Examples

![contact information email address template]({{site.baseurl}}/images/contact-info-email-address.png)

## How to design and build 

### How this pattern works

- **If possible, tell users why you want their email address.** Users need to know that the VA won’t abuse their email and which email they’d like to provide. An example message is: *Please enter your contact information so we can get in touch with you if we have questions about your application.*
- **Validate email addresses.** You should validate email addresses so you can let users know if they have entered one incorrectly. A validation message for when a user forgets the “@”: *Please enter a valid email address.* A validation message for when a user doesn’t use the same email in the “Confirm email address” field: *This email doesn't match the one you entered above.*

## Content considerations

### Error message templates for email addresses

**When a user doesn’t enter an email address:** 

Say  'Please enter an email address'

**When a user doesn’t enter an email address in the correct format:** 

Say  'Please enter an email address using this format: X@X.com'

**When a user doesn’t use the same email in the “Confirm email address” field:** 

Say ‘This email doesn’t match the one you entered above’.