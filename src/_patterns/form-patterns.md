---
layout: default
title: Form patterns
anchors:
  - anchor: All or none of the above
  - anchor: Applicant information
  - anchor: Contact information
  - anchor: Dates
  - anchor: Direct deposit 
  - anchor: File upload
  - anchor: List and loop
  - anchor: Review section
  - anchor: Service history
  - anchor: Signature
  
---


# Form patterns

<div class="va-introtext" markdown="1">
Common form structures and designs used on VA.gov
</div>

## All or none of the above

In some questions, either none of the options or all of them may apply to the user. Here is how to design responses for that instance.

### Checkboxes

In the case where the response uses checkboxes, below the question, specify that the user may “select all that apply.”

<img src="{{site.baseurl}}/images/more-than-one-checkbox.png" alt="set of checkboxes" style="max-width: 376px">

We recommend that you **do not** include checkbox options for “all of these” or “none of these” since the user may already select as many or as few boxes as necessary; as stated by the text “select all that apply." Introducing these options could add unnecessary complexity to interaction design, the codebase, and even to the data model if not correctly handled on the backend.

Sometimes, due to specific requirements from the VA, may have no choice but to include all or none of the above. To avoid creating a scenario where the user would be presented with an all or none checkbox, consider the following options:

- Think about reframing the question
  - You can break the question into two separate questions, for example, start with a response using radio buttons. Then, you can present a set of checkboxes as a conditional follow-up question.
- Be explicit that the user is not required to make a selection


### Radio options
In the case of radio options, you may include options for “all of these” or “none of these” after all other options are listed.

When using an “all of these” option, ensure that under no circumstance would a partial set of options apply to the user.

### Select box
Before choosing a select box, follow the [guidance]({{site.baseurl}}/components/form-controls#usability-1) to determine if you should be using radio buttons instead.

In the case of radio options, you may include options for “all of these” or “none of these” after all other options are listed.

When using an “all of these” option, ensure that under no circumstance would a partial set of options apply to the user.

## Applicant information
*This is the current implementation of applicant information on our forms.* 

The application information section consists of:  
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

### Error message templates for names:

**When a user doesn’t enter their first name**

Say  'Please enter a first name'

**When a user doesn’t enter their last name**

Say  'Please enter a last name'


### Important numbers: Social security number & VA file number
Follow this pattern whenever you need to ask for a social security number or VA file number. 

A Social Security Number (SSN) consists of nine digits, commonly written as three fields separated by hyphens: AAA-GG-SSSS. The first three-digit field is called the "area number". The central, two-digit field is called the "group number". The final, four-digit field is called the "serial number".
A VA file number is how a veteran’s claim is tracked through the compensation system and how documents and other evidence are associated with a veteran’s file in the VA’s electronic database.

![applicant information important numbers template]({{site.baseurl}}/images/Applicant-info-important-numbers.png) 

![social security number masked]({{site.baseurl}}/images/ssn-masked-update.png) 


#### Usability guidance:
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

## Contact information 

*This is the current implementation of applicant information on our forms.* 

The contact information section consists of:  
- Addresses 
- Email address
- Phone numbers
- Preferred method of contact (if applicable)

### Addresses
Follow these patterns whenever you need to ask for a user’s address.
 
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

![contact information single address template]({{site.baseurl}}/images/Address.png)

#### Usability guidance:
- **If required, include a checkbox for United States military base address.** Under the additional information component, there should be an explanation:
 U.S. military bases are considered a domestic address and a part of the United States. When the checkbox is checked, the country select box becomes disabled. 
- **If asking for only one address on a form, be clear with the user which address (mailing or home) you’re asking for.** We recommend asking for a mailing address if you need to only ask for one address. 
- **Street address Line 3 can be omitted.** Sometimes partner databases do not support a third line of address. 

#### Multiple addresses: Mailing and Home addresses
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

#### Usability guidance: 
- **Add guidance on where users can go to edit their account information on all VA accounts.** Let the user know that when filling out contact information, they will have to edit their profile information. An example message is: *Any updates you make here to your contact information will only apply to this application. To update your contact information for all of your VA accounts, go to your profile page (link to profile).*
- **The mailing address always comes before home address.** We ask for a mailing address before home address because the majority of VA's correspondence is over mail.
- **On the mailing address form, ask users if the home address is the same as the mailing address.** If the user chooses “Yes”, they can skip the home address form. 

### Error message templates for addresses:

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

### Email address 
Follow this pattern when you want to ask for an email address. 
![contact information email address template]({{site.baseurl}}/images/contact-info-email-address.png)

#### Usability guidance:
- **If possible, tell users why you want their email address.** Users need to know that the VA won’t abuse their email and which email they’d like to provide. An example message is: *Please enter your contact information so we can get in touch with you if we have questions about your application.*
- **Validate email addresses.** You should validate email addresses so you can let users know if they have entered one incorrectly. A validation message for when a user forgets the “@”: *Please enter a valid email address.* A validation message for when a user doesn’t use the same email in the “Confirm email address” field: *This email doesn't match the one you entered above.*

### Error message templates for email addresses

**When a user doesn’t enter an email address:** 

Say  'Please enter an email address'

**When a user doesn’t enter an email address in the correct format:** 

Say  'Please enter an email address using this format: X@X.com'

**When a user doesn’t use the same email in the “Confirm email address” field:** 

Say ‘This email doesn’t match the one you entered above’.

### Phone numbers 
Follow this pattern when you want to ask for a phone number.  
![contact information phone number template]({{site.baseurl}}/images/contact-info-phone-number.png)

#### Usability guidance:
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

### Method of contact 
Follow this pattern when you want to ask a user how they’d like to be contacted. 
![contact information method of contact template]({{site.baseurl}}/images/contact-info-method-of-contact.png)

#### Usability guidance:
- **This field is dependent on the form.** Method of contact is form-dependent. Work with your stakeholders on whether your form needs a method of contact. 
- **Give users the opportunity to pick one method of contact.** Provide contact information methods in radio button list form. 

## Dates

### When to use this pattern 
Follow this pattern whenever you need users to provide a date on a form.

Dates you may need users to provide include:
- Dates a user knows, like a date of birth or marriage
- Dates a user can approximate , like February 2021
- Date ranges, like service history dates 

### Dates a user knows: 
Use the month/day/year date input component for most dates, particularly memorized dates. 

![date input for memorized dates: month day and year]({{site.baseurl}}/images/date-input.png) 

### Dates a User Can Approximate:
Use the month/year date input component for dates that a user may struggle to remember. For example: *When did you receive your high school diploma or equivalency certificate?* 

![date input for approximate dates: month and year]({{site.baseurl}}/images/date-input-month-year.png) 
 
### Date ranges:
Use  month/day/year inputs or month/year inputs depending on the question being asked. For example: Service history dates

![date ranges: service start date and service end date]({{site.baseurl}}/images/date-ranges.png) 


#### Usability guidance:
- **Write clear form labels for date ranges** Do not use “From” and “To” to when labeling form labels for date ranges. Make it clear what dates you’re asking for. Example: “Obligation start date” and “Obligation end date” 
- **Spell out full month names in the selected state** The month select box should have the full month’s name. Example: January 
- **Validate date inputs.** You should validate date inputs so you can let users know if they have entered one incorrectly. A general validation message for an incorrect date: *Please enter a valid date*
 
 ### Error message templates for dates

**If nothing is entered**
Say 'Please enter a date'

**If the date entered can’t be correct**
Say ‘Please provide a valid date'

**If the date entered is in a month year format and  can’t be correct**
Say 'Please enter a valid month and year'

**If the year needed to be within a specific range**
Say 'Please enter a year between [minimum year] and [maximum year]'

**For a date range, if the date must be after another date**
Say 'To date must be after From date'

**If the date is in the past when it needs to be today or in the future**
Say 'Please provide a valid current or future date'

**If the date is in the future when it needs to be past date or current date**
Say  'Please enter a valid current or past date'

## Direct deposit

### Input state
![Direct deposit input state]({{site.baseurl}}/images/direct_deposit_update.png)

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
The bank account number text input is required for this form pattern. 

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

#### Error message templates for direct deposit

**When a user doesn’t enter a bank account number:**

Say 'Please enter a bank account number'

**When a user enters their routing number incorrectly:**

Say 'Please enter a valid nine digit routing number'

**When a user doesn’t enter a routing number:**

Say 'Please enter a routing number'

## File upload 
Follow this pattern to help users select and upload a file

Here is the structure for asking a user to upload a file:

- Header 
- Instructions on what documents to upload
- Bulleted list of allowed file types and sizes
- Secondary button to upload 

**Note:** This content will vary depending on what you’re asking the user to upload. Work with your content specialist with how to ask for certain documents.

![file upload input state]({{site.baseurl}}/images/file-upload-input.png)


### Loading state:
The upload button will be replaced by a gray card with a [standard progress bar component](https://design.va.gov/components/progress-bars) to indicate the progress of the document upload. The user will see the name of the file, as well as, have the option to cancel the upload. 

![file upload loading state]({{site.baseurl}}/images/file-upload-loading.png)

### Review state 
When a document has successfully uploaded, the card will have the uploaded file name bolded and there will be an option to delete the file. Depending on the type of form, there can be a dropdown of selecting document types. Underneath the card there will be a secondary button to give the user the option of adding more document uploads. 

![file upload review state]({{site.baseurl}}/images/file-upload-review.png)

#### Usability guidance:
- **Don’t ask if it does not affect the delivery of a service.** You should only ask users to upload documents if absolutely necessary 
- **Avoid error states by listing out what types and sizes of files are accepted.** The types of files accepted depend on the form. Most forms accept pdf, jpg, jpeg, and png. 
- **Validate file uploads.**  A validation message for when a user skips uploading a required document: *Please upload a file.* When there needs to be at least one required document: *Please upload at least one file* 
- **Do not italicize information regarding file sizes.** Long strings of italicized text can be difficult to read for some users with low vision or reading disabilities.

### Error message templates for file upload

**When a user doesn’t upload a required document:**

Say ‘Please upload a file’’

**When there needs to be at least one required document:**

Say ‘Please upload at least one file’

**Live application examples:**

- [VA Form 21P-527EZ - Application for Pension Benefits](https://www.va.gov/pension/application/527EZ/introduction)
- [VA Form 21-526EZ - Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [VA Form 10-10EZ - Application for Health Benefits](https://staging.va.gov/health-care/apply/application/introduction)

## <a id="listandloop"></a>List and loop

Some questions in forms only have one answer, such as "what is the city and state of your birth?" Other questions can have an unknown amount of answers, such as "list all the cities and states you've lived within." List and loop is a pattern that appears in forms when we don't know how many responses to a question a user will provide, but we need to collect a number between 1 and "n," where "n" is all possible responses. This pattern appears in both simple and complex ways.

### Simple list and loop pattern diagram

A simple example of the pattern would include a small number of entry fields, such as one or two text fields in a single line. For a question like "Please list all the cities in which you've lived," a user would list a single city, be given the option to add another city, and could continue adding additional cities until all cities were entered. Then the user would choose to either continue to the next step in the form process or simply submit the completed form if they were at the end of the process.

This diagram outlines the basic components required for each state of a list and loop pattern.

![list-and-loop-diagram]({{site.baseurl}}/images/list-and-loop-contents.png)

### Complex list and loops that include multiple inputs, conditionals

Consider the question "What are the addresses of all locations where you served?" The associated inputs, such as street address, city, state, and zip code would need to be repeated for each additional address of services. However, there are going to be changes in fields and form input rules based on whether or not the address is in the United States or international, such as the elimination/variation of "state" fields or variations on how zip codes are validated. You can see an example of a complex list and loop pattern in [service history documentation](#servicehistory)

## Review section
Follow this pattern to help users review their information before submitting the form.

Here is the structure for review section:
- Show the progress bar along with the chapter title: Review application.<img width="546" alt="Screen Shot 2021-03-30 at 10 26 40 AM" src="https://user-images.githubusercontent.com/72398073/113917545-53724200-97af-11eb-8c9f-b22e9d2db0bf.png">
- Use bordered, multi-selectable accordions
- When an accordion is open, each section within a chapter should have a secondary “Edit” button in the top right.
- Underneath the accordions include the note:
Note: According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or for providing incorrect information (See 18 U.S.C. 1001).
and
-  Privacy agreement 
- Button pair: Secondary button labeled “Back” and Default blue button labeled “Submit application”
- Last saved application date and time in green background color only alert style
- Finish this application later default link 

**Note:** This content will vary depending on your form. Work with your content specialist or check out the form labels. 

#### Usability guidance:
- Each chapter should be its own accordion.
- List chapters in chronological order.
- ‘File upload’ and ‘Add another’ sections should be in the gray card style.
- ‘Add another’ primary button should be placed at the bottom left on cards that allow users to add information.
<img width="585" alt="Screen Shot 2021-03-30 at 10 30 42 AM" src="https://user-images.githubusercontent.com/72398073/113917840-ba8ff680-97af-11eb-8ed2-0e565647df39.png">
- ‘Delete file’ secondary button should be placed at the bottom left on cards that allow users to upload files

<img width="476" alt="Screen Shot 2021-03-30 at 10 25 40 AM" src="https://user-images.githubusercontent.com/72398073/113917959-e3b08700-97af-11eb-8a3d-0b1a3983267a.png">

## <a id="servicehistory"></a>Service history
Follow this pattern to ask a user about their service/military history.

The service history information section consists of:
- Service periods
- Service under another name
- Reserves and National Guard
- Federal Orders
- POW Status and Severance Pay

**Note:** Service history content varies from form to form. Let this pattern be your starting point and decide what needs to be on your form. 

### Service periods
Follow this pattern whenever you need to ask for a user’s periods of service in the military.

Here is the structure for service periods:

**Service periods**
- Heading
- Branch of service text input 
- Service start date input 
- Service end date input
- Type of service text input (if applicable)
- Character of service -- this can also be Character of discharge -- text input (if applicable) 
- ‘Add another service period’ secondary button

![pension-serviceperiods-1]({{site.baseurl}}/images/list-and-loop.png)

![pension-serviceperiods-2]({{site.baseurl}}/images/list-and-loop3.png)

#### Usability guidance:
- **Use the list and loop pattern for adding multiple service periods.** This is an example of a complex list and loop pattern with multiple form inputs. You can read more in depth about the [list and loop pattern](#listandloop) above.
- **Some forms will only require the last branch of service.** The healthcare application is an example of a form where they do not need the multiple entries of service periods, so we do not use the list and loop pattern there. 

### Service under another name
Follow this pattern whenever you need to ask a user if they served under another name. 

Here is the structure:

**Service under another name**
- ‘Did you serve under another name’ radio buttons
(If user selects yes)
  - Name form template
  - ‘Add another name’ secondary button
- ‘Place of last or anticipated separation from service’ text input

![service under another name]({{site.baseurl}}/images/service-name.png)

#### Usability guidance:
- **The name template fields are conditional fields that are revealed when a user selects “yes.”**  Conditional fields are used in forms to reveal form elements that become relevant based on a user's response to a question. The blue border should be used to create a visual relationship between the parent question and conditional fields it reveals, and should overlap the top and bottom of parent and children.  
- **Use the list and loop pattern for adding multiple names.** The user will be able to add multiple names they’ve served under. You can read more in depth about the [list and loop pattern](#listandloop) above.

### Reserves and National Guard and Federal Orders
Follow this pattern whenever you need to ask for a user’s Reserve or National Guard information. Persons in the Reserve or National Guard are not full-time active duty military personnel, although they can be deployed at any time should the need arise. 

Here is the structure:

**Reserves and National Guard** (Disability form structure)
- Obligation start date input
- Obligation end date input
- Unit name text input

![reserves and national guard disability form structure]({{site.baseurl}}/images/reserves-disability.png)

**Reserves and National Guard** (Pension form structure)
- ‘Are you currently on federal active duty in the National Guard?’ radio buttons
(If user selects yes)
  - ‘Name of reserve/National guard unit’ text input
  - Unit address form template (if applicable)
  - Unit phone number (if applicable)
  - Service start date input

![reserves and national guard pension form structure]({{site.baseurl}}/images/reserve-pension.png)

**Federal Orders**  (Disability form structure)
- ‘Are you currently activated on federal orders?’ radio buttons
(If user selects yes)
  - Activation start date input
  - Expected separation date input (This could also be Anticipated separation date)

![federal orders]({{site.baseurl}}/images/federal-orders.png)

### Prisoner of War (POW)
Follow this pattern whenever you need to ask for a user’s POW information. Former prisoners of war (POW) are Veterans who, during active military service, were forcibly detained or interned in the line of duty by an enemy government or its agents or a hostile force.

Here is the structure:

**POW Status and Severance Pay**
- ‘Are you a former POW?’ radio buttons
(If user selects yes)
  - Start of confinement date input
  - End of confinement date input
- ‘Add another  period’ secondary button (if applicable)
- ’Have you received any type of severance or separation pay?’ radio buttons
(If user selects yes)
  - ‘Pay type’ radio buttons
  - ‘Amount’ number input

![prisoner of war and severance pay]({{site.baseurl}}/images/pow-status.png)

#### Usability guidance:
- **Don’t ask if it does not benefit the user experience.** You should only ask users about POW information when absolutely necessary. 
- **Depending on the form, use the List and Loop pattern to add multiple confinement periods.** An example of adding multiple confinement periods is in the [File for disability compensation form](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction). 

**Live application examples:**

- [VA Form 21P-527EZ - Application for Pension Benefits](https://www.va.gov/pension/application/527EZ/introduction)
- [VA Form 21-526EZ - Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [VA Form 10-10EZ - Application for Health Benefits](https://staging.va.gov/health-care/apply/application/introduction)
- [VA Form 22-1990N - Application for VA Education Benefits Under the National Call to Service (NCS) Program](https://www.va.gov/education/apply-for-education-benefits/application/1990N/introduction)

## Signature

![form signature pattern]({{site.baseurl}}/images/form-signature.png)


### When to use this pattern 
Use this pattern on the review section of the form when you need a user to provide their signature as a statement of truth.

Here is the structure of a form signature:
- Instructions for the user around signing the certification
- Card
- Heading: Veteran’s statement of truth
- Content (specific to form)
- Link to [privacy policy page](https://www.va.gov/privacy-policy/)
- Text input for signature
- Checkbox for certification

#### Usability guidance:
- **Place the pattern underneath the accordions on the review section.** Do not hide this component inside an accordion. 
- **Signature pattern does not exist in every form.** If your form needs a certification statement or statement of truth, we recommend using this pattern. 
- **When using this pattern, do not add the privacy policy checkbox at the end of the form.** The user does not need to check another checkbox for  privacy policy. 

### Error message templates for signatures:

**When a user doesn’t enter the name they entered previously in the form**

Your signature must match your first and last name as previously entered.

**When a user doesn’t check the checkbox for certification**

Must certify by checking box

**Live application examples:**

[VA Form 10-10CG (Application for Family Caregiver Benefits)](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)

