---
layout: pattern
permalink: /patterns/ask-users-for/addresses
sub-section: ask-users-for
title: Addresses
intro-text: "Follow this pattern to ask a user for an address."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Asking for an address.** For example, the address for a military base, home, or mailing address.
 
## Examples

### Single address
![contact information single address template]({{site.baseurl}}/images/patterns/ask-users-for/addresses/single-address.png)

### Mailing address
![contact information mailing address template]({{site.baseurl}}/images/patterns/ask-users-for/addresses/mailing-address.png)

### Home address

![contact information home address template]({{site.baseurl}}/images/patterns/ask-users-for/addresses/home-address.png)

### Address confirmation

{% include component-example.html alt="An Alert in a form flow that warns the user that the address they entered could not be found in U.S. Postal Service data." file="/images/patterns/ask-users-for/addresses/edit-mailing-address-confirmation.png" caption="Example of an alert warning a user that the address they entered does not match U.S. Postal service data and providing a way for them to correct their address or use the corrected address from the Postal service." width="50%" %}

## How to design and build 

### Layout details

#### Single address
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

#### Multiple addresses

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

### How this pattern works

#### Single address
- **If required, include a checkbox for United States military base address.** Under the additional information component, there should be an explanation:
 U.S. military bases are considered a domestic address and a part of the United States. When the checkbox is checked, the country select box becomes disabled. 
- **If asking for only one address on a form, be clear with the user which address (mailing or home) you’re asking for.** We recommend asking for a mailing address if you need to only ask for one address. 
- **Street address Line 3 can be omitted.** Sometimes partner databases do not support a third line of address. 

#### Multiple addresses: Mailing and Home addresses

Follow this guidance when asking for both mailing and home addresses. In some forms, we ask for both addresses because some veterans live in different homes depending on the time of year.

- **Add guidance on where users can go to edit their account information on all VA accounts.** Let the user know that when filling out contact information, they will have to edit their profile information. An example message is: *Any updates you make here to your contact information will only apply to this application. To update your contact information for all of your VA accounts, go to your profile page (link to profile).*
- **The mailing address always comes before home address.** We ask for a mailing address before home address because the majority of VA's correspondence is over mail.
- **On the mailing address form, ask users if the home address is the same as the mailing address.** If the user chooses “Yes”, they can skip the home address form. 

### Address confirmation

* **Check addresses against USPS data.** Confirm the user's address against U.S. Postal Service data and warn the user with a [warning Alert]({{ site.baseurl }}/components/alert#warning-alert) when the address they entered is potentially incorrect.
* **Provide a way to edit or use the potentially incorrect address.** Provide a link to edit the address so that a user can correct any potential errors. Also provide a way for the user to override the address check and continue with the address they provided.


## Content considerations

* If you need to display an address after it has been collected, then [follow content style guidelines on addresses](/content-style-guide/dates-and-numbers#addresses).

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