---
layout: default
title: Form templates
draft: true
anchors:
  - anchor: Address form
  - anchor: Applicant information
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


## Applicant information
There are several form patterns within the applicant information section including: 
- Name 
- Important numbers: Social security number & VA file number
- Birth information
- Gender
- Race, ethnicity, or origin

**Note:** These fields are not on every form. Work with your stakeholders to determine what fields are necessary for your application.

### Name
Follow this pattern whenever you need to ask for a user’s name for an application.

![applicant information name template]({{site.baseurl}}/images/Applicant-info-name.png)

#### Usability guidance:
- **Make sure name fields work for most veterans.** Fields must be long enough to accommodate the names of your users. Do not restrict the types of characters users can enter in any of these fields. Names can include characters outside the standard Roman alphabet.
- **First name and last name are required fields.** Middle name and suffix fields are optional. Mother’s maiden name field is not on every form. 

### Important numbers: Social security number & VA file number
Follow this pattern whenever you need to ask for a social security number or file number. 

![applicant information important numbers template]({{site.baseurl}}/images/Applicant-info-important-numbers.png) 

#### Usability guidance:
- **Use a single text input for social security and VA file number.** labelled ‘Social Security number’. Do not use abbreviations, such as SSN.
- **VA file numbers are not on every form.** If the form asks for a Social Security number and VA file number make sure to note in the VA file number helper text, “must have this or a Social Security number.”

**Note:** The Social Security number pattern is going to be iterated on in the future, specifically masking the numbers for privacy purposes

### Birth information:
Follow this pattern whenever you need to ask for a user’s date and place of birth. 

![applicant information birth information template]({{site.baseurl}}/images/Applicant-info-birth-info.png) 

#### Usability guidance:
- **Use the date input field for date of birth.** Writing out the label for each birth date string and separating them into three fields instead of one eliminates the format confusion.
- **Place of birth information is one text input.** This format is easier to fill out for both veterans born outside the United States and for veterans who were born United States citizens.

### Gender:
Follow this pattern whenever you need to ask veterans their gender. 

![applicant information gender template]({{site.baseurl}}/images/Applicant-info-gender.png) 

#### Usability guidance:
- **Don’t ask if it does not benefit the user experience.** You should only ask users about gender when absolutely necessary.  
- **Use checkboxes.** Give veterans the ability to check more than one gender they could identify with. 

**Note:** Many forms are based off of paper forms with limited fields for gender. Work with your stakeholder and see if you can expand the fields. 

### Race, ethnicity, or origin:
Follow this pattern whenever you need to ask veterans for their race, ethnicity, or origin. 

![applicant information race template]({{site.baseurl}}/images/Applicant-info-race.png) 

#### Usability guidance:
- **Don’t ask if it does not benefit the user experience.** Only collect users’ information on this topic if you are going to use the data. 
- **Give users the option of picking more than one ethnic group.** Always use checkboxes so that users can identify with multiple ethnicities. 



## Direct deposit form

### Input state
![Direct deposit input state]({{site.baseurl}}/images/Direct-deposit-input-state-small.png)

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
![Direct deposit checkbox]({{site.baseurl}}/images/Direct-deposit-checkbox-small.png)

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
![Direct deposit review state]({{site.baseurl}}/images/Direct-deposit-review-state-small.png)

### When to use this pattern 
Follow this pattern to provide Veterans with the ability to change their bank account information. This direct deposit information is pre-populated because the veteran already filled these bank details beforehand. 

#### Bank account information card
The direct deposit information will live in the bank account information card. The card will have a short description on what the information below means, *“This is the bank account information we have on file for you. This is where we’ll send your payments.”*
Under the description, the information will be displayed in the component similar to the [address block component.](https://design.va.gov/components/address-block) 
Mask the routing and account number but leave the 4 last digits. This masking is for security purposes. This information is uneditable until the user clicks the call to action button below.


#### Call to action
When the “update account information” button is clicked, the bank account information card will turn into an interactive card in which the review state will revert back into the input state.
