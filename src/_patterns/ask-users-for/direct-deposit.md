---
layout: pattern
permalink: /patterns/ask-users-for/direct-deposit
sub-section: ask-users-for
title: Direct deposit
intro-text: "Follow this pattern to ask users for their banking information in order to enable direct deposit."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern 

* **Provide banking information.** Apply the [input pattern](#how-to-design-and-build---input) when Veterans are asked to provide banking information to receive funds electronically. 
* **Review and change banking information.** Follow this [review pattern](#how-to-design-and-build---review) to provide Veterans with the ability to change their bank account information. This direct deposit information is pre-populated because the Veteran already filled these bank details beforehand. 

## Examples

{% include component-example.html alt="Edit direct deposit information." file="/images/patterns/ask-users-for/direct-deposit/direct_deposit_update.png" caption="An example of editing direct deposit information." class="x2" reverse="true" %}

{% include component-example.html alt="Add direct deposit information." file="/images/patterns/ask-users-for/direct-deposit/form-22-10203-direct-deposit-20230608.png" caption="An example from form 22-10203, Apply for the Rogers STEM Scholarship, of collecting direct deposit information." class="x2" %}

{% include component-example.html alt="Add direct deposit information in profile." file="/images/patterns/ask-users-for/direct-deposit/direct-deposit-in-profile.png" caption="How direct deposit information is collected in Profile." class="x2" reverse="true" %}

### Examples in production

* [VA Form 22-10203 (Application for the Rogers STEM Scholarship)](https://www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction)
* [Profile](https://va.gov/profile/direct-deposit)

## How to design and build - Input

### Anatomy 

#### Direct deposit

Under the form name and Progress bar - Segmented, begin with a fieldset legend of "Direct deposit". 

#### Card description

Under the card name have a short description. For example:

> Direct deposit information is not required to determine eligibility. However, benefits cannot be paid without this information per U.S. Treasury regulation 31 C.F.R. § 208.3.

#### Check image

The check image provides a guide for Veterans to find their account and routing numbers from a check when filling out direct deposit information.

#### Check image caption

Provides a caption for the check image, which is used to provide supplemental information for the image.

### Anatomy - Form controls

#### Account type

Present the account type as a radio button group since the Veteran has only two options to choose from: Checking and savings.

#### Bank routing number

The bank routing number text input is required for this form pattern. The routing number must be 9 digits. 

#### Bank account number

The bank account number text input is required for this form pattern. 

### More information

Let Veterans know how this direct deposit information is going to apply their other benefits. For example:

> Note: Any bank account information you enter here will apply to your other Veteran benefits, including compensation, pension, and Benefits for Certain Children with Disabilities (Chapter 18) payments.

> Information entered here won’t change your existing accounts for VA education or health benefits.
These updates won’t change your bank account information for [add non-affected benefits].*
 
#### Additional info component

Provide more information if Veterans do not have a bank account.

{% include component-example.html alt="What if I don't have a bank account? additional information." file="/images/patterns/ask-users-for/direct-deposit/what-if-i-dont-have-a-bank-account.png" caption="An example using the additional information component to answer to the question of what Veterans can do if they do not have a bank account, also from the application for the Rogers STEM Scholarship." class="x2" %}

<!--
## How to design and build - Review

![Direct deposit review state]({{site.baseurl}}/images/patterns/ask-users-for/direct-deposit/Direct-deposit-review-state-small.png)


#### Bank account information card
The direct deposit information will live in the bank account information card. The card will have a short description on what the information below means, *“This is the bank account information we have on file for you. This is where we’ll send your payments.”*
Under the description, the information will be displayed in the component similar to the [address block component.]({{ site.baseurl }}/components/address-block) 
Mask the routing and account number but leave the 4 last digits. This masking is for security purposes. This information is uneditable until the user clicks the call to action button below.

#### Call to action
When the “update account information” button is clicked, the bank account information card will turn into an interactive card in which the review state will revert back into the input state.
-->

## Content considerations

### Error message templates for direct deposit

**When a user doesn’t enter a bank account number:**

Say 'Enter a bank account number'

**When a user enters their routing number incorrectly:**

Say 'Enter a valid nine digit routing number'

**When a user doesn’t enter a routing number:**

Say 'Enter a routing number'
