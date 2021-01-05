---
layout: default
title: Form templates
draft: true
anchors:
  - anchor: Address form
  - anchor: Name form
  - anchor: Direct deposit form
---

# Form patterns

<div class="va-introtext" markdown="1">
Common form structures and designs used on VA.gov
</div>


## Address form

<div class="site-showcase">
{% include_relative html/address-form.html %}
</div>

{% include snippet.html content='html/address-form.html' %}


## Name form

<div class="site-showcase">
{% include_relative html/name-form.html %}
</div>

{% include snippet.html content='html/name-form.html' %}

## Direct deposit form

### Input state
![Direct deposit input state]({{site.baseurl}}/images/Direct-deposit-input-state.png)

### When to use this pattern 
Apply this pattern when Veterans are asked to provide banking information to receive funds electronically. 

#### Direct deposit card name
Under the form name and chapter title, begin the card with a heading level 3 of “Direct deposit information” 

#### Card description
Under the card name have a short description on how VA only accepts direct deposit and what their direct deposit information is going to be used for. 

Example: *We make payments only through direct deposit, also called  electronic funds transfer (EFT).* 

#### Check image
The check image provides a guide for Veterans to find their account and routing numbers from a check when filling out direct deposit information. 

### Form controls

#### Account type
Present the account type as a radio button group since the Veteran has only two options to choose from: checking and savings.

#### Bank name
The bank name text input isn’t required for all direct deposit patterns and developers have the option of not including this text input. 
 
#### Bank routing number
The bank routing number text input is required for this form pattern. The routing number must be 9 digits. 

#### Bank account number
The bank account number text input is required for this form pattern. The maximum bank account number length is 17 digits.

#### “I don’t want to use direct deposit” checkbox
![Direct deposit checkbox]({{site.baseurl}}/images/Direct-deposit-checkbox.png)

Underneath the direct deposit  input card, give the Veteran the option to not give their direct deposit information. When the checkbox is checked, the direct deposit input card above will disappear. 

### More information
Let Veterans know how this direct deposit information is going to apply their other benefits.

Example: *Note: Any updates you make here will change your bank account information for some VA benefits, including [add affected benefits].
These updates won’t change your bank account information for [add non-affected benefits].*
 
#### Additional info component
Provide more information if Veterans do not have a bank account.

Example of additional information that can be displayed:

*What if I don’t have a bank account?*

*The [Veterans Benefits Banking Program (VBBP)](https://veteransbenefitsbanking.org/) provides a list of Veteran-friendly banks and credit unions. They’ll work with you to set up an account, or help you qualify for an account, so you can use direct deposit.
To get started, call one of the participating banks or credit unions listed on the VBBP website. Be sure to mention the Veterans Benefits Banking Program.
Note: The Department of the Treasury requires us to make electronic payments. If you don’t want to use direct deposit, you’ll need to call the Department of the Treasury at **888-224-2950**. Ask to talk with a representative who handles waiver requests. They can answer any questions or concerns you may have.*


**Live application examples:**

[VA Form 22-10203 (Application for Edith Nourse Rogers STEM Scholarship)](https://www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction)

### Review state
![Direct deposit review state]({{site.baseurl}}/images/Direct-deposit-review-state.png)

### When to use this pattern 
Follow this pattern to provide Veterans with the ability to change their bank account information. This direct deposit information is pre-populated because the veteran already filled these bank details beforehand. 

#### Bank account information card
The direct deposit information will live in the bank account information card. The card will have a short description on what the information below means, *“This is the bank account information we have on file for you. This is where we’ll send your payments.”*
Under the description, the information will be displayed in the component similar to the [address block component.](https://design.va.gov/components/address-block) 
Mask the routing and account number but leave the 4 last digits. This masking is for security purposes. This information is uneditable until the user clicks the call to action button below.


#### Call to action
When the “update account information” button is clicked, the bank account information card will turn into an interactive card in which the review state will revert back into the input state.
