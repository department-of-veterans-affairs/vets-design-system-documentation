---
layout: pattern
permalink: /patterns/ask-users-for/email-address
sub-section: ask-users-for
title: Email address
intro-text: "Follow this pattern to ask a user for an email address."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx
example-link: https://staging.va.gov/mock-form-patterns/phone-and-email-address
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates-(Patterns-%26-Forms)?type=design&node-id=2987%3A39070&mode=design&t=Y0LWxs33fRITMh6x-1
github-title: pattern-email
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

* **When you need to collect an email address.** For example, for contact information.

## Examples

### Default

{% include component-example.html alt="An email address text-input field." file="/images/patterns/ask-users-for/email-address/email-address.png" caption="An example of asking users for an email address." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

## How to design and build

### How this pattern works

* **Prepopulate email address from profile whenever possible.** This makes it easier for users as they have one less field to complete.
* **Adding an email confirmation field.** The email confirmation field is unnecessary if we're using the email from a profile. Also, it's not useful for catching errors as most users copy and paste and don't review their initial entry.
* **If possible, tell users why you want their email address.** Users need to know that the VA won't abuse their email and which email they'd like to provide. An example message is: *We may use your contact information so we can get in touch with you if we have questions about your application.*
* **Validate email addresses.** You should validate email addresses so you can let users know if they have entered one incorrectly.
* **Inform users when prefilling information from VA.gov profile.** Notify users that information from their profile has been prefilled into the form. An example message is: *We've prefilled some of your information from your account.*
* **Indicate to users whether an update in this form will update their VA.gov profile.** Notify users that a change will not update their VA.gov profile. An example message is: *Any updates you make here will only apply to this application.*
* **Pair with phone numbers.** Collection of email address is paired with [phone numbers]({{ site.baseurl }}/patterns/ask-users-for/phone-numbers). The two patterns typically appear on the same step/page.

### Components used in this pattern

* [Text input]({{ site.baseurl }}/components/form/text-input)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Names in Figma]({{ page.figma-link }}).

## Code usage

[emailPattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

### Error message templates for email addresses

**When a user doesn’t enter an email address...**
: Say "Please enter an email address"

**When a user enters a blank or invalid email address...**
: Say "Enter a valid email address without spaces using this format: email@domain.com"

**When a user enters an unacceptable character...**
: Say "You entered a character we can’t accept. Try removing spaces and any special characters like commas or brackets."

**When an email address is above the 50-character limit...**
: Say "We don't support email addresses that exceed 50 characters"