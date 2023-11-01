---
layout: pattern
permalink: /patterns/ask-users-for/email-address
sub-section: ask-users-for
title: Email address
intro-text: "Follow this pattern to ask a user for an email address."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx
example-link: https://staging.va.gov/mock-form-patterns/phone-and-email-address
sketch-link: https://www.sketch.com/s/dc844743-277e-41d4-81ba-a48fd0743952/p/7F447374-E091-4BA2-90FC-06AE6DF82F92/canvas
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
### Default
{% include component-example.html alt="An email address label and field." file="/images/patterns/ask-users-for/email-address/prepopulated-email-address.png" caption="A prefilled email address label and field." class="x2" %}

### Prefill information

{% include component-example.html alt="An information box in a form flow that tells the user that some information has been prefilled from their VA.gov profile." file="/images/patterns/ask-users-for/addresses/prefill.png" caption="Example of an informational message informing a user that information from their profile has been prefilled into the form below." class="x2" %}

### Asking for an email address
{% include component-example.html alt="An example of asking users for an email address." file="/images/patterns/ask-users-for/email-address/email-address.png" caption="Example of asking users for an email address." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example

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
