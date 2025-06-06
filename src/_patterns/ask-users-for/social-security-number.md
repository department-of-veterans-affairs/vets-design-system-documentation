---
layout: pattern
permalink: /patterns/ask-users-for/social-security-number
sub-section: ask-users-for
title: Social security or VA file number
intro-text: "Follow this pattern whenever you need to collect a person's Social Security or VA file number for an application."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/ssnPattern.jsx
code-link-mask-string: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/utilities/ui/mask-string.jsx
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

* **When you need to collect or display a person's Social Security or VA file number.** For example, for an application for identity purposes.

### When not to use this pattern

* **When a user is authenticated, identity proofed, and we have their SSN on file.** When we have a SSN on file for the user we should use that information and not allow the user to change the SSN in the form. Follow the [Help users to know how their information is prefilled pattern]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) for uneditable data.

## Examples

### Collect

{% include component-example.html alt="Shows the form fields used to obtain Social Security number and VA file number." file="/images/patterns/ask-users-for/social-security-number/form-ssn.png" caption="Example of asking for a Social security or VA file number." class="x2" %}

<va-link-action
  href="{{ page.example-link }}"
  text="View an example"
  type="secondary"
></va-link-action>

### Display

{% include component-example.html alt="Example of a prefilled Social Security number with a label that reads Last four digits of Social Security number' followed by the numbers 6784." file="/images/patterns/ask-users-for/social-security-number/card-ssn.png" caption="Example of a prefilled Social Security number." class="x2" %}

## How to design and build

### How this pattern works

A **Social Security Number (SSN)** consists of nine digits, commonly written as three fields separated by hyphens: AAA-GG-SSSS. The first three-digit field is called the "area number". The central, two-digit field is called the "group number". The final, four-digit field is called the "serial number".

A **VA file number** consists of eight or nine digits and is a claims folder number assigned through the Beneficiary Identification and Records Locator Subsystem (BIRLS). This is how a Veteran’s claim is tracked through the compensation system and how documents and other evidence are associated with a Veteran. Also known as "C-file numbers", or CNA, VA file numbers were assigned prior to VA converting to the use of SSNs, which is why some older Veterans have C-File numbers even if they also have a Social Security Number.

A **Military Service number** is a unique identifier that was assigned to members of the United States Armed Forces before the Social Security number became the standard identifier.

#### Social Security Number is uneditable for IAL2 authenticated users

When a user is authenticated, identity proofed, and we have their SSN on file we should use that information and not allow the user to change the SSN in the form. Follow the [Help users to know how their information is prefilled pattern]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) for uneditable data.

Decision review forms all use this variation of the pattern, including the 526, the 20-0995, and the 20-0996.

#### Unauthenticated or un-identity proofed (IAL1) users

The most common variation of this pattern is to offer both the Social Security number and VA file number. Most paper forms feature both and thus, for online forms that must map fields to a paper form, the fields match. For paper forms that only feature one or the other, either Social Security number or VA file number can be supplied. The VA has the ability to identify the Veteran using either. While this is a manual process, it's less burdensome for the user. Both fields are the same number of digits.

#### Non-Veteran users

When a form is directed towards a non-Veteran, for example a caregiver or spouse may be filling out the form on the Veteran's behalf, we may ask that person for their Social Security number only. For example, in the 21P-0847 form, we ask for the submitter's Social Security number only on one step. In a later step, when asking for their Veteran's information, we ask for Social Security number (required) and VA file number (optional). In this case, that matches the fields in the paper form.

### Using the ssnPattern

**Use the [web-component-patterns/ssnPattern in the Forms Library]( {{ page.code-link }}).**

The ssnPattern implements the following best practices:

* **Prefill Social Security number when possible.** Don't ask users to input their SSN if you can prefill it instead.
* **Use a single text input for each field.** Don't split the SSN into 3 text inputs.
* **Do not abbreviate.** Use ‘Social Security number’. Do not use abbreviations, such as SSN.
* **When asking for both Social Security and VA file numbers, one or the other may be provided.** VA file numbers are not on every form. If the form asks for a Social Security number and VA file number, make sure to note in the VA file number label or helper text, "must have this or a Social Security number".
* **Give user flexibility in entering their Social Security number.** A user can enter the Social Security number however they like: with spaces, without spaces, dashes, or without dashes. When the user enters their number and the input loses focus, the number will appear masked with dashes.
* **Validate Social Security numbers.** See [content considerations](#content-considerations) for the appropriate validation messages.

### Components used in this pattern

* [Text input]({{ site.baseurl }}/components/form/text-input)
* [Card]({{ site.baseurl }}/components/card)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Social Security or VA file number in Figma]({{ page.figma-link }}).

### Related patterns to this pattern

* [Help users to... Know when their information is prefilled]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled)
* [Help users to... Update prefilled information]({{ site.baseurl }}/patterns/help-users-to/update-prefilled-information)

## Code usage

[ssnPattern is a web component driven pattern available in the Forms library]({{ page.code-link }}).

[formatNumberForScreenReader is a utility function available in the Forms library]({{ page.code-link-mask-string }}). This utility function can be used to format a number for screen readers, such as a Social Security number when it is prefilled.

Example:

```jsx
const formattedNumber = formatNumberForScreenReader(123456789);
const ssnPrefillText = () => (
  <p>
    Last 4 digits of Social Security number: {formattedNumber}
  </p>
)
```

## Content considerations

### Labels, error messages, and hint text

{% include _field-labels.html labels=site.data.content.patterns.ask-users-for.social-security-and-va-file-number %}
