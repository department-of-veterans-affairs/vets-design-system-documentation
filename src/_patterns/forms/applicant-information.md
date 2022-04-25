---
layout: pattern
permalink: /patterns/forms/applicant-information
has-parent: /patterns/forms
title: Applicant information
intro-text: "The current implementation of applicant information on VA.gov forms."
status: use-deployed
anchors:
  - anchor: Name
  - anchor: Important numbers - Social security number & VA file number
  - anchor: Birth information
  - anchor: Gender
  - anchor: Race, ethnicity, or origin
---


**Note:** These fields are not on every form. Work with your stakeholders to determine what fields are necessary for your application.

## Name
Follow this pattern whenever you need to ask for a user’s name for an application.

![applicant information name template]({{site.baseurl}}/images/Applicant-info-name.png)

### Usage

- **Make sure name fields work for most veterans.** Fields must be long enough to accommodate the names of your users. Do not restrict the types of characters users can enter in any of these fields. Names can include characters outside the standard Roman alphabet.
- **First name and last name are required fields.** Middle name and suffix fields are optional. Mother’s maiden name field is not on every form. 

### Error message templates for names

**When a user doesn’t enter their first name**

Say  'Please enter a first name'

**When a user doesn’t enter their last name**

Say  'Please enter a last name'


## Important numbers: Social security number & VA file number
Follow this pattern whenever you need to ask for a social security number or VA file number. 

A Social Security Number (SSN) consists of nine digits, commonly written as three fields separated by hyphens: AAA-GG-SSSS. The first three-digit field is called the "area number". The central, two-digit field is called the "group number". The final, four-digit field is called the "serial number".
A VA file number is how a veteran’s claim is tracked through the compensation system and how documents and other evidence are associated with a veteran’s file in the VA’s electronic database.

![applicant information important numbers template]({{site.baseurl}}/images/Applicant-info-important-numbers.png) 

![social security number masked]({{site.baseurl}}/images/ssn-masked-update.png) 


### Usage
- **Use a single text input for social security and VA file number.** Label the text input ‘Social Security number.’ Do not use abbreviations, such as SSN.
- **VA file numbers are not on every form.** If the form asks for a Social Security number and VA file number make sure to note in the VA file number helper text, “must have this or a Social Security number.”
- **Mask Social Security number by default.** All but the last 4 numbers are masked when input loses focus. When input is in focus, the input shows the valid numbers.
- **Give user flexibility in entering their Social Security number.** A user  can enter the Social Security number however they like: with spaces, without spaces, dashes, or without dashes. When the user enters their number and the input loses focus, the number will appear masked with dashes. 
- **Validate Social Security numbers.** A validation message for when the Social Security number is required: *Please enter a Social Security number.* A validation message for when a Social Security number is entered incorrectly: *Please enter a valid 9 digit Social Security number (dashes allowed).*

### Error message templates for Social Security number and VA file number:

**If nothing is entered for Social Security number**

Say 'Please enter a Social Security number'

**When a a Social Security number is entered incorrectly**

Say  'Please enter a valid 9 digit Social Security number (dashes allowed)'

**If nothing is entered for VA file number**

Say  'Please enter a VA file number'

**When a VA file number is entered incorrectly**

Say  'Your VA file number must be between 7 to 9 digits'

### Birth information

Follow this pattern whenever you need to ask for a user’s date and place of birth. 

![applicant information birth information template]({{site.baseurl}}/images/Applicant-info-birth-info.png) 

### Usage

- **Use the date input field for date of birth.** Writing out the label for each birth date string and separating them into three fields instead of one eliminates the format confusion.
- **Place of birth information is one text input.** This format is easier to fill out for both veterans born outside the United States and for veterans who were born United States citizens.

## Gender

Follow this pattern whenever you need to ask veterans their gender. 

![applicant information gender template]({{site.baseurl}}/images/Applicant-info-gender.png) 

### Usage

- **Don’t ask if it does not benefit the user experience.** You should only ask users about gender when absolutely necessary.  
- **Use checkboxes.** Give veterans the ability to check more than one gender they could identify with. 

**Note:** Many forms are based off of paper forms with limited fields for gender. Work with your stakeholder and see if you can expand the fields. 

## Race, ethnicity, or origin

Follow this pattern whenever you need to ask veterans for their race, ethnicity, or origin. 

![applicant information race template]({{site.baseurl}}/images/Applicant-info-race.png) 

### Usage
- **Don’t ask if it does not benefit the user experience.** Only collect users’ information on this topic if you are going to use the data. 
- **Give users the option of picking more than one ethnic group.** Always use checkboxes so that users can identify with multiple ethnicities. 