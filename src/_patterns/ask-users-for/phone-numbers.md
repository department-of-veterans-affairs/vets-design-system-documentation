---
layout: pattern
permalink: /patterns/ask-users-for/phone-numbers
sub-section: ask-users-for
title: Phone numbers
intro-text: Follow this pattern when you want to ask for a phone number.
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/phonePatterns.jsx
example-link: https://staging.va.gov/mock-form-patterns/phone-and-email-address
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates-(Patterns-%26-Forms)?type=design&node-id=2988%3A9602&mode=design&t=Y0LWxs33fRITMh6x-1
github-title: pattern-phone-numbers
research-title: Ask users for phone numbers
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

* **When you need to collect a phone number.** For example, for contact information.

## Examples

### Phone numbers with country codes

{% include component-example.html alt="Shows the form fields used to obtain home phone number and mobile phone number with a country code." file="/images/patterns/ask-users-for/phone-numbers/with-country-code-phone.png" caption="Example of asking for a home phone number or mobile phone number with a country code." class="x2" %}

<va-link-action
  href="{{ page.example-link }}"
  text="View an example"
  type="secondary"
></va-link-action>

### Phone numbers without country codes
{% include component-example.html alt="Shows the form fields used to obtain a phone number with no country code." file="/images/patterns/ask-users-for/phone-numbers/no-country-code-phone.png" caption="Example of asking for an domestic phone number." class="x2" %}
  
## How to design and build

### Layout details

### How this pattern works
  
* **Validate phone numbers.** Users must provide a valid domestic or international phone number. 

  Example of acceptable formats for U.S. phone numbers:
  * 703-123-4567
  * 7031234567

  Example of acceptable formats for international phone numbers:
  * +52 123 456-7890
  * 637031234567

* **If a user chooses a home or mobile phone number as their method of contact, phone numbers are required fields.** If a user chooses email or mail as their preferred method then a phone number field won’t be validated. (Note: Method of contact field is form dependent)
* **“Mobile phone number” is a required field if the user checks (I would like to receive text messages from VA about my [  ] benefits).** An example of this is on the [VA Form 22-10203 (Application for Edith Nourse Rogers STEM Scholarship)](https://www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction)
* **Pair with email address.** Collection of phone numbers is paired with [email address]({{ site.baseurl }}/patterns/ask-users-for/email-address). The two patterns typically appear on the same step/page.
* **If possible, tell people why you want their phone number.** This message can be at the top of the page if asking for any other contact information.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Like this</h3>
<div class="do-dont__content" markdown="1">

We may use your contact information to contact you if we have questions about your application.

We may use your contact information to contact you if there's an issue with your application.

We may use your contact information to contact you if we need more information.

</div>
</div>
</div>

### Components used in this pattern

* [Telephone input]({{ site.baseurl }}/components/form/telephone-input)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Phone numbers in Figma]({{ page.figma-link }}).

## Code usage

[phonePattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

* **Do not use primary or secondary phone numbers as headers.** Home and mobile phone numbers are more plain language-focused.
* **Display phone numbers in the appropriate way.** If you need to display a phone number after it has been collected, then [follow content style guidelines on phone numbers]({{ site.baseurl }}/content-style-guide/dates-and-numbers#phone-numbers).

### Labels, error messages, and hint text

{% include _field-labels.html labels=site.data.content.patterns.ask-users-for.phone-numbers %}
