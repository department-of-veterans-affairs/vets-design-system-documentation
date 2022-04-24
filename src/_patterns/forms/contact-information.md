---
layout: pattern
permalink: /patterns/forms/contact-information
has-parent: /patterns/forms
title: Contact information
intro-text: "The current implementation of contact information on VA.gov forms."
status: use-deployed
anchors:
  - anchor: Addresses 
  - anchor: Email address
  - anchor: Phone numbers
  - anchor: Preferred method of contact (if applicable)
---

## Addresses

Follow these patterns whenever you need to ask for a user’s address.
 
### Single address

Here is the content structure for asking a user for a single address:

- Checkbox for military address (if applicable)
- Additional info component (if applicable)
- Country select box
- Street address text input
- Street address line 2 text input
- Street address line 3 text input (if applicable)
- City text input
- State/Province/Region select box
- Postal code text input

![contact information single address template]({{site.baseurl}}/images/Address.png)

### Usage

- **If required, include a checkbox for United States military base address.** Under the additional information component, there should be an explanation:
 U.S. military bases are considered a domestic address and a part of the United States. When the checkbox is checked, the country select box becomes disabled. 
- **If asking for only one address on a form, be clear with the user which address (mailing or home) you’re asking for.** We recommend asking for a mailing address if you need to only ask for one address. 
- **Street address Line 3 can be omitted.** Sometimes partner databases do not support a third line of address. 

### Multiple addresses: Mailing and Home addresses

Follow this pattern when asking for both mailing and home addresses. In some forms, we ask for both addresses because some veterans live in different homes depending on the time of year.

Here is the content structure for asking a user for multiple addresses:
- Header - Mailing or Home Address
- Relevant information regarding this form and the user’s address (if applicable)
- Checkbox for military address (if applicable)
- Additional info component (if applicable)
- Country select box
- Street address text input
- Street address line 2 text input
- Street address line 3 text input (if applicable)
- City text input
- State/Province/Region select box
- Postal code text input
- Radio button component for mailing address same as home address (this is on mailing address page only) 

**Mailing address**

![contact information mailing address template]({{site.baseurl}}/images/Mailing-address.png)

**Home address**

![contact information home address template]({{site.baseurl}}/images/Home-address.png)

### Usage

- **Add guidance on where users can go to edit their account information on all VA accounts.** Let the user know that when filling out contact information, they will have to edit their profile information. An example message is: *Any updates you make here to your contact information will only apply to this application. To update your contact information for all of your VA accounts, go to your profile page (link to profile).*
- **The mailing address always comes before home address.** We ask for a mailing address before home address because the majority of VA's correspondence is over mail.
- **On the mailing address form, ask users if the home address is the same as the mailing address.** If the user chooses “Yes”, they can skip the home address form. 

### Error message templates for addresses

**When a user doesn’t enter a street address:**

Say 'Please enter a street address'

**When a user doesn’t enter a city:**

 Say 'Please enter a city'

**When a user doesn’t enter a state:**

Say  'Please enter a state'

**When a user doesn’t enter a postal code:**

Say  'Please enter a postal code'

**When a postal code is entered incorrectly:**

Say  'Please enter a valid 5- or 9-digit postal code (dashes allowed)'

**When a postal code can’t be correct:**

Say 'Please provide a valid postal code'

**When a user doesn’t select a state or province:**

Say 'Please select a state or province'

## Email address 

Follow this pattern when you want to ask for an email address. 
![contact information email address template]({{site.baseurl}}/images/contact-info-email-address.png)

### Usage

- **If possible, tell users why you want their email address.** Users need to know that the VA won’t abuse their email and which email they’d like to provide. An example message is: *Please enter your contact information so we can get in touch with you if we have questions about your application.*
- **Validate email addresses.** You should validate email addresses so you can let users know if they have entered one incorrectly. A validation message for when a user forgets the “@”: *Please enter a valid email address.* A validation message for when a user doesn’t use the same email in the “Confirm email address” field: *This email doesn't match the one you entered above.*

### Error message templates for email addresses

**When a user doesn’t enter an email address:** 

Say  'Please enter an email address'

**When a user doesn’t enter an email address in the correct format:** 

Say  'Please enter an email address using this format: X@X.com'

**When a user doesn’t use the same email in the “Confirm email address” field:** 

Say ‘This email doesn’t match the one you entered above’.

## Phone numbers 

Follow this pattern when you want to ask for a phone number.  
![contact information phone number template]({{site.baseurl}}/images/contact-info-phone-number.png)

### Usage

- **If possible, tell users why you want their phone number.** An example message is: *Please enter your contact information so we can get in touch with you if we have questions about your application.* This message can be at the top of the page if asking for any other contact information.
- **Validate phone numbers.** Users must provide at least a 10 digit phone number with or without dashes. Example of acceptable formats: 703-123-4567, 7031234567, 1+703-123-4567. A validation message for when a user forgets to enter the phone number: *Please enter your phone number.* A validation message for when a user’s phone number is too short: *This field should be at least 10 character(s).* 
- **If a user chooses a home or mobile phone number as their method of contact, phone numbers are required fields.** If a user chooses email or mail as their preferred method then a phone number field won’t be validated. (Note: Method of contact field is form dependent) 
- **“Mobile phone number” is a required field if the user checks (I would like to receive text messages from VA about my [  ] benefits).** An example of this is on the [VA Form 22-10203 (Application for Edith Nourse Rogers STEM Scholarship)](https://www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction)
- **Do not use primary or secondary phone numbers as field labels.** Home and mobile phone numbers are more plain language-focused. 

### Error message templates for phone numbers

**When a user doesn’t enter a phone number:**

Say 'Please enter a phone number'

**If the telephone number is not in the correct format:**

Say  'Please enter a 10-digit phone number (with or without dashes)'

## Method of contact 

Follow this pattern when you want to ask a user how they’d like to be contacted. 
![contact information method of contact template]({{site.baseurl}}/images/contact-info-method-of-contact.png)

### Usage

- **This field is dependent on the form.** Method of contact is form-dependent. Work with your stakeholders on whether your form needs a method of contact. 
- **Give users the opportunity to pick one method of contact.** Provide contact information methods in radio button list form. 