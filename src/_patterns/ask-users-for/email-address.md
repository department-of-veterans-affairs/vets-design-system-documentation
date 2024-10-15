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
research-title: Ask users for email address
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

* **For collecting an email address, which is required for online forms.** As of October 2024, collecting an email address is required for online forms. Digital submissions require following up with the user digitally which requires an email address.

## Examples

### Default

{% include component-example.html alt="An email address text-input field." file="/images/patterns/ask-users-for/email-address/email-address.png" caption="An example of asking users for an email address. NOTE: This screenshot pre-dates email becoming a required field." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

## How to design and build

### How this pattern works

* **Collect an email address for the Veteran and, if not the same person, the person completing the form.** It is a requirement to capture the email address of the person completing the form. If this is not the Veteran it is also necessary to collect the email address of the Veteran. Both should be [notified at the appropriate touch points for a form submission]({{ site.baseurl }}/patterns/help-users-to/stay-informed-of-their-application-status).
* **Pre-populate email address from VA.gov Profile whenever possible.** This makes it easier for users as they have one less field to complete.
* **If possible, tell users why you want their email address.** Users need to know that the VA won't abuse their email and which email they'd like to provide. An example message is: *We may use your contact information so we can get in touch with you if we have questions about your application.*
* **Do not use an email confirmation field.** The email confirmation field is unnecessary if we're using the email from a profile. Also, it's not useful for catching errors as most users copy and paste and don't review their initial entry.
* **Validate email addresses upon entry.** You should validate email addresses for formatting so you can let users know if they have entered an email incorrectly.
* **Inform users when prefilling information from VA.gov profile.** Notify users that information from their profile has been prefilled into the form using the [prefill component]({{ site.baseurl }}/components/form/prefill).
* **Pair with phone numbers.** Collection of email address is paired with [phone numbers]({{ site.baseurl }}/patterns/ask-users-for/phone-numbers). The two patterns typically appear on the same step/page.

### Components used in this pattern

* [Text input]({{ site.baseurl }}/components/form/text-input)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Names in Figma]({{ page.figma-link }}).

## Code usage

[emailPattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

### Labels, error messages, and hint text

{% include _field-labels.html labels=site.data.content.patterns.ask-users-for.email %}