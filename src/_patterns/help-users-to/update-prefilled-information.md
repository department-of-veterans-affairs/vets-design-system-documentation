---
layout: pattern
title: Update prefilled information
permalink: /patterns/help-users-to/update-prefilled-information
sub-section: help-users-to
intro-text: Follow this pattern to help users update prefilled information in an application.
research-title: Help users know how their info is updated
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=21074-4699&t=aDYQ6bZuAQNT5KHl-1
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Examples
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Research findings
---

## Usage

### When to use this pattern

**When you prefill the user’s information into an application, form, or other online tool.** This pattern helps users filling out a form or tool understand how they can update their prefilled information, including sensitive information that they can’t update online. This pattern also informs users where we’ll save their changes—either only to the specific form or tool, or to the form or tool and their profile. The related [Help users to… Know when their information is prefilled]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) pattern has guidance on how to display the prefilled information.

### When not to use this pattern

* **When you don't prefill the user's information.**  
* **For unauthenticated users.** Users who aren't signed in shouldn't have their information prefilled when they interact with an application, or be able to update prefilled information. But, when forms don't require users to be signed in, they should see an informational alert describing benefits to signing in. [Check the unauthenticated intro page alert]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled#unauthenticated-prefill-alert) within the [Help users to... Know when their information is prefilled]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) pattern.

### When to use caution

* **When the user can't update their information online, but can update another way.** This pattern accounts for cases when the user needs to call VA or take a different step to change certain information, such as their name and Social Security number. You'll need to confirm that you're giving the correct instructions for changing that specific information.  
* **When the user can't update their information at all.** If your form prefills information that the user can't change through any means, you'll need to explain that directly.

## How to design and build

### Anatomy or layout details

This pattern involves these types of pages found in VA.gov forms:

* **Prefilled information the user cannot update:** This is usually personal information like name, date of birth, and Social Security number.  
* **Prefilled information the user can update:** This can be many different types of information, like email addresses and mailing addresses, that the user can update directly on the screen where we display it.

Refer to the related ["Help users to... Know when their information is prefilled"]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on helping users know when their information is prefilled.

#### Prefilled information the user can't update
Here's how to communicate that users can't update certain information online:
* **Omit the edit link in cards with uneditable information.**  
* **Include instructions for how to update uneditable information.** Under the card with the uneditable information, display a note starting with the bolded word “Note:” followed by directions to help users find out how to update this information by phone or another way. These directions will vary by form or type of information. You’ll need to confirm that the directions are accurate for updating that specific type of information. See the Content considerations section for more guidance.

#### Prefilled information the user can update
Here's how to communicate that users can update certain information online:

**Display editable prefilled information in a card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as phone number, email address, or mailing address.

{% include component-example.html class="x2" alt="Cards that show contact info with links to edit if needed." file="/images/patterns/help-users-to/update-prefilled-information/editable-prefill-contact-info.png" %}

When the user updates this information, there are two potential pathways.

##### If we automatically save changes to the user's profile

**In most cases, when users update information that can be edited in their profile**, we should save the changes should be saved to both the form or tool and the profile. An informational alert will indicate where we'll save the changes.

For developer documentation on saving information changes to the profile, consult [How to create the contact info Array Data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar).

{% include component-example.html class="x2" alt="A page for users to update their mailing address. Above the fields is an informational alert stating, 'Any changes you make will also be reflected on your profile.'" file="/images/patterns/help-users-to/update-prefilled-information/edit-save-to-profile.png" %}

##### If we let the user choose whether to save changes to their profile

**In certain cases, users may need more control over where we save the changes.** Instead of displaying an informational alert at the top of the page, display a question with radio button response options asking the user where they want to save their changes. Learn more about these cases in the “communicate where changes will save” section below.

Consider using this variation for information that may change frequently. For example, when reordering medical supplies, users may want to provide a temporary mailing address. But they may not want to save this temporary mailing address to save to their profile. 

After the form fields the person is updating, include this question:

>Do you want to update this information in your profile? (*Required)
>
>Hint text: If you select “yes,” we’ll update this information across multiple VA benefits and services. [LINK: Learn more about changing your address in your profile (opens in a new tab)]

The radio options should be:
- Yes, also update my profile
- No, only update this [form, application, claim, tool]

{% include component-example.html class="x2" alt="A page for users to update their mailing address. Below the address fields is a required radio button field asking, 'Do you also want to update this information in your profile?'" file="/images/patterns/help-users-to/update-prefilled-information/edit-choose-where-to-save.png" %}

##### If we let the user choose which piece of information they want to use for the form

In certain cases, users may need to choose which piece of information they want to use on the form. An example of this is if you prefill the user’s mobile and home telephone numbers, but the form only asks for a primary phone number. In these instances, after the user confirms their prefilled information, display a question with radio button response options asking the user which option they want to use on the form. 

{% include component-example.html class="x2" alt="A page for users to choose their primary phone number.'" file="/images/patterns/help-users-to/update-prefilled-information/primary-phone.png" %}

#### Prefilled information that is missing and required

There may be instances where some information that would usually be prefilled is missing from the database, but is also required by the form itself. In those instances, we'll take the user to a page with a status card that uses a colored tag to indicate that the information is missing. The card will also have the word "(\*Required)" next to the field heading text to indicate the user needs to provide that information.

{% include component-example.html class="x2" alt="A page showing users they have missing and required information they will need to add." file="/images/patterns/help-users-to/update-prefilled-information/missing-prefilled-info.png" %}

If the user does not provide the required missing information and selects the "Continue" button to try and move forward, they'll get the same page with that status card in an error state and some red error text telling them what information they need to provide. Once they select "Add" and provide the information on an edit page, they will be redirected back to this screen and can continue through the form.

{% include component-example.html class="x2" alt="A page showing users an error alert and error state of the card with missing and required information they need to add." file="/images/patterns/help-users-to/update-prefilled-information/card-with-missing-info-error-state.png" %}

Please note that there is currently a [ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4276) to update the card component to include this error state.

#### Communicate when and where we'll save updates to prefilled information

**Inform users where we saved the changes.** Display a success alert informing the user “We’ve saved these changes to this form and your profile.” or “We’ve saved these changes to this form only.” Place this alert at the top of the page, below the stepper. Use a standard alert if the user made the changes on a form step page. Use a slim alert if the user made the changes on the final review page.

### Components used in this pattern

* [Additional info]({{ site.baseurl }}/components/additional-info)  
* [Alert]({{ site.baseurl }}/components/alert)  
* [Card]({{ site.baseurl }}/components/card)
* [Card - Status]({{ site.baseurl }}/components/card/card-status)
* [Link]({{ site.baseurl }}/components/link)  
* [Radio button]({{ site.baseurl }}/components/form/radio-button)

## Examples

### Note after uneditable prefilled information

Explain the steps the user needs to take to update this information. These instructions will vary by form. For some forms, the user will need to call us to find out how to update this information. The specific number to call will vary by form.

{% include component-example.html class="x2" alt="A note to the user explaining why they can't edit personal information online. It starts with the bolded word 'Note' and ends with a link to find more detailed instructions on how to change their legal name." file="/images/patterns/help-users-to/update-prefilled-information/how-to-edit-personal-information.png" %}

### Alert informing the user we'll save changes to their profile

Inform the user that their changes will save to their profile before they make the changes. If your form does not save changes to their profile, use a radio button question instead (example in the Radio button section).

{% include component-example.html class="x2" alt="An informational alert with a bolded header saying 'Any changes you make will also be reflected on your profile.'" file="/images/patterns/help-users-to/update-prefilled-information/alert-about-where-information-will-save.png" %}

### Success alert

Inform users that we saved their change to the form and their their profile. If we only saved the change to the form, the alert should read "We saved these changes to this form only."

{% include component-example.html class="x2" alt="A success alert with the header 'We've updated your mailing address' and the body text 'We've made these changes to this form and your profile.'" file="/images/patterns/help-users-to/update-prefilled-information/success-alert.png" %}

If the user made the change on the final review page, display the slim success alert on the review page, immediately after the header of the section where they made the change.

{% include component-example.html class="x2" alt="A slim success alert with the text 'Address successfully updated on this form.'" file="/images/patterns/help-users-to/update-prefilled-information/slim-success-alert.png" %}

### Radio button

In cases where the information might change frequently (like a temporary mailing address), ask the user if they want to save their changes to their profile. Inform the user of the implications of this decision.

{% include component-example.html class="x2" alt="A required radio button field asking the user if they also want to update this information in their profile." file="/images/patterns/help-users-to/update-prefilled-information/radio-button.png" %}

## Code usage

Code for the [prefill pattern](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/patterns/prefill) can be found in the Forms library.

## Content considerations

### Directions for updating uneditable information

Directions for updating information vary by form, benefit type, and type of information. You must confirm with subject matter experts that your instructions are accurate for the way your specific form populates information and how to update it. And you must confirm with the call center that they will be able to either update the information directly. If they can’t update the information directly, give the person instructions for how to update the information.

Here's an example that tells people to call the VA benefits hotline:

> **Note:** To protect your personal information, we don't allow online changes to your name, date of birth, or Social Security number. If you need to change this information, call us at [800-827-1000](tel:+18008271000) [(TTY: 711\)](tel:711). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

[Find more detailed instructions for how to change your legal name (opens in new tab)](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

### Error messages
If the information can’t be saved onto profile, but can be used for the form

>Error alert: We can’t update your information in your profile. But you can continuing filling out this [form/application] and update your profile information later.


If the information can’t be saved for profile or for the form

>Error alert: We can’t save your current information. Try again later.


If the required information is missing

>Inline error message: Select “Add” to enter your [missing content].

## Accessibility considerations

- Aria-labels for edit links for cards should include the name of the item that’s being edited. For example: Use “Edit phone number” for an edit link for a phone number card. 
- Focus should return to the success alert when an item has been updated.

## Research findings
The Authenticated Experience Design Patterns team [conducted user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) in late 2024 about how users prefer to see their editable and uneditable information, and how they prefer to be informed about how to edit it. Most participants want updates to save to their profile, but some also want the ability to choose where the updates save, in the case that they are using a temporary address or other temporary situation.

This pattern would benefit from additional research. Specifically for the scenario where there is missing and required prefilled information, research to understand if the solution suggested here is effective and understandable for users would be helpful in strengthening this pattern guidance. 
