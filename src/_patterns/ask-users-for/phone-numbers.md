---
layout: pattern
permalink: /patterns/ask-users-for/phone-numbers
sub-section: ask-users-for
title: Phone numbers
intro-text: Follow this pattern when you want to ask for a phone number.
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/phonePattern.jsx
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

* **When you need to collect a phone number.** For example, for contact information.
 
## Examples

{% include component-example.html alt="Shows the form fields used to obtain home phone number and mobile phone number." file="/images/patterns/ask-users-for/phone-numbers/phone-numbers.png" caption="Example of asking for a home phone number or mobile phone number." class="x2" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
  
## How to design and build 

### Layout details

### How this pattern works

- **If possible, tell users why you want their phone number.** An example message is: *Please enter your contact information so we can get in touch with you if we have questions about your application.* This message can be at the top of the page if asking for any other contact information.
- **Validate phone numbers.** Users must provide at least a 10 digit phone number with or without dashes. Example of acceptable formats: 703-123-4567, 7031234567, 1+703-123-4567. A validation message for when a user forgets to enter the phone number: *Please enter your phone number.* A validation message for when a user’s phone number is too short: *This field should be at least 10 character(s).* 
- **If a user chooses a home or mobile phone number as their method of contact, phone numbers are required fields.** If a user chooses email or mail as their preferred method then a phone number field won’t be validated. (Note: Method of contact field is form dependent) 
- **“Mobile phone number” is a required field if the user checks (I would like to receive text messages from VA about my [  ] benefits).** An example of this is on the [VA Form 22-10203 (Application for Edith Nourse Rogers STEM Scholarship)](https://www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction)

## Content considerations

- **Do not use primary or secondary phone numbers as field labels.** Home and mobile phone numbers are more plain language-focused. 
* If you need to display a phone number after it has been collected, then [follow content style guidelines on phone numbers]({{ site.baseurl }}/content-style-guide/dates-and-numbers#phone-numbers).

### Error message templates for phone numbers

**When a user doesn’t enter a phone number:**

Say 'Please enter a phone number'

**If the telephone number is not in the correct format:**

Say  'Please enter a 10-digit phone number (with or without dashes)'
