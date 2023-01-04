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
<img width="699" alt="prepopulated-email-address" src="https://user-images.githubusercontent.com/97645218/209711675-f76129e5-a64d-4378-9cf5-f4ed49c2e21f.png">


![prefill-information](https://user-images.githubusercontent.com/97645218/209711684-9c8aa414-14b7-4e3c-9e3f-c7aaa15967b1.png)

## How to design and build 

### How this pattern works

- **Prepopulate email address from profile whenever possible.** This makes it easier for users as they have one less field to complete.
- **Adding an email confirmation field.** The email confirmation field is unnecessary if we're using the email from a profile. Also, it's not useful for catching errors as most users copy and paste and don't review their initial entry.
- **If possible, tell users why you want their email address.** Users need to know that the VA won't abuse their email and which email they'd like to provide. An example message is: *We may use your contact information so we can get in touch with you if we have questions about your application.*
- **Validate email addresses.** You should validate email addresses so you can let users know if they have entered one incorrectly.
- **Inform users when prefilling information from VA.gov profile.** Notify users that information from their profile has been prefilled into the form. An example message is: *We've prefilled some of your information from your account.*
- **Indicate to users whether an update in this form will update their VA.gov profile.** Notify users that a change will not update their VA.gov profile. An example message is: *Any updates you make here will only apply to this application.*

## Content considerations

### Error message templates for email addresses

**When a user doesn’t enter an email address:** 

Say  'Please enter an email address'

**When a user enters an invalid email address:** 

Say  'Please enter a valid email address'

**When an email address is above the 50-character limit:**

Say 'We don't support email addresses that exceed 50 characters'
