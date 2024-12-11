---
layout: pattern
title: Update prefilled information
draft: true
permalink: /patterns/help-users-to/update-prefilled-information
sub-section: help-users-to
intro-text: Follow this pattern to help users update prefilled information in an application.
research-title: Help users update prefilled information
figma-link: https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=4013-14358&t=GYX9RT423zMZrhat-1
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

- **When you prefill the user’s data into an application, like a form.** This pattern helps users understand how they can edit their prefilled information, especially sensitive information that requires calling a VA center to change. Additionally, this pattern informs users where their changes will be saved—either to the form, or to their form and VA.gov profile. See the related ["Help users to... Know when their information is prefilled"](/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on how to display the prefilled information.

#### Design principals

- **Visibility of system status.** This pattern demonstrates the usability principle of communicating the current state to help users feel in control and take appropriate action. [Learn more about Visibility of system status](https://www.nngroup.com/articles/visibility-system-status/).

- **User control and freedom.** This pattern also gives users control over their own information. [Learn more about User Control and Freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern

- **When prefilled information is not used.** If the form does not include prefilled information, there is no need to inform users how to update their prefilled information.

### When to use caution

- **When data cannot be changed online.** This pattern accounts for cases when the user needs to call VA to change their information, such as changing their name and Social Security number. Form developers should confirm that the phone number listed is the correct number for Veterans to call and update this specific information. If there are cases where information cannot be changed, even by calling VA, explain this to the user.

## How to design and build

### Anatomy or layout details

This pattern involves these types of pages found in VA.gov forms:

- **Personal information page:** Usually the first page of a form after the user signs in. Has personal details that typically cannot be edited online, like name, date of birth, Social Security number, etc.

- **Prefill check page:** Any page of a form that displays prefilled information users can edit within the form.

See the related ["Help users to... Know when their information is prefilled"](/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on helping users know when their information is prefilled.

#### Personal information page

{% include component-example.html
  class="x2"
  alt="The first step of a form, asking users to confirm their personal information, such as legal name, date of birth, and Social Security number. That information is contained in a white card. Below the white card is a string of text explaining why this information cannot be edited online."
  file="/images/patterns/help-users-to/update-prefilled-information/personal-information-page.png" %}

#### Prefill check page

In most cases, changes should save to the VA Profile. An informational alert informs users where the changes will be saved.

{% include component-example.html
  class="x2"
  alt="A page for users to update their mailing address. Above the fields is an informational alert stating, 'Any changes you make will also be reflected on your VA.gov profile.'"
  file="/images/patterns/help-users-to/update-prefilled-information/edit-save-to-profile.png" %}

In cases where users may need more control over where the data saves, instead of displaying the alert at the top of the page, display a radio button asking the user where they want the information to save. Learn more about these cases in the "communicate where changes will save" section below.

{% include component-example.html
  class="x2"
  alt="A page for users to update their mailing address. Below the address fields is a required radio button field asking, 'Do you also want to update this information in your VA.gov profile?'"
  file="/images/patterns/help-users-to/update-prefilled-information/edit-choose-where-to-save.png" %}

### How this pattern works

#### Communicate information that cannot be edited

This pattern communicates information that cannot be edited with:

- **Uneditable prefilled information displayed in a gray card.** Display prefilled information that cannot be changed online (such as legal name, date of birth, and Social Security number) in a card component. This is often one of the first pages in a form.
- **Directions for updating uneditable information displayed as text.** Add informational text under the card that has the bolded word “note” and directions to update this information offline.

#### Communicate information that can be edited

This pattern communicates information that can be edited with:

- **Editable prefilled information displayed in a white card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as phone, email, or mailing address.

#### Communicate where changes will save

- **In most cases, save changes to the VA.gov profile.** In [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill), most users indicated that they want changes they make to their information to update the information stored on their VA.gov profile. On the edit page, display an informational alert informing users that these changes will impact their profile information.

#### Where needed, give users the choice of where to save

- **In some cases, users want to choose where to save their information.** This is especially relevant for information that may change over time, like mailing address. This might be especially relevant in cases where forms or prescriptions will be sent to users within the coming days or weeks. In this case, on the edit page, do not display the informational alert informing them where their changes will save. Instead, display a required radio button below the fields asking them if they also want to update this information in their VA.gov profile.

#### Display success alerts when information has been saved

- **Inform users where the changes were saved.** Display a success alert informing users "We've made these changes to this form and your VA.gov profile" or "We've made these changes to only this form.” Use a standard alert within the form steps. Use a slim alert if the user made changes from the final review page.

### Components used in this pattern

- [Alert](/components/alert/)
- [Radio button](/components/form/radio-button)
- [Additional info](/components/additional-info)

## Examples

### Informational text after a set of uneditable information

Inform the user that they need to call VA to update this information. The specific numbers to call may vary by form.

{% include component-example.html
  class="x2"
  alt="A note to the user explaining why they can't edit personal information online. It starts with the bolded word 'Note' and ends with a link to find more detailed instructions on how to change their legal name."
  file="/images/patterns/help-users-to/update-prefilled-information/how-to-edit-personal-information.png" %}

### Alert about where information will save

Inform users that their information will save to their profile before they make the changes. If your form does not save changes to VA profile by default, or you have a compelling reason why a specific field should not save to the profile, see the Radio button example below.

{% include component-example.html
  class="x2"
  alt="An informational alert with a bolded header saying 'Any changes you make will also be reflected on your VA.gov profile.'"
  file="/images/patterns/help-users-to/update-prefilled-information/alert-about-where-information-will-save.png" %}

### Success alert

Inform users their change has been saved to the form and their VA Profile. If the change was only saved to the form, the alert should read "We've made these changes to only this form."

{% include component-example.html
  class="x2"
  alt="A success alert with the header 'We've updated your mailing address' and the body text 'We've made these changes to this form and your VA.gov profile.'"
  file="/images/patterns/help-users-to/update-prefilled-information/success-alert.png" %}

If the user made the edit from the final review page, display the slim success alert on the review page, immediately under the header of the section that was edited.

{% include component-example.html
  class="x2"
  alt="A slim success alert with the text 'Address successfully updated on this form.'"
  file="/images/patterns/help-users-to/update-prefilled-information/slim-success-alert.png" %}

### Radio button

In cases where the information might be subject to change (especially mailing addresses), ask users if they want to save their changes to their VA Profile.

{% include component-example.html
  class="x2"
  alt="A required radio button field asking the user if they also want to update this information in their VA.gov profile."
  file="/images/patterns/help-users-to/update-prefilled-information/radio-button.png" %}

### Examples in production

Coming soon!

## Code usage

Coming soon!

## Content considerations

### Directions for updating uneditable information

Directions for updating information that can’t be updated online vary. Instructions should be updated based on the context of the form or application used. General guidelines are:

- If it’s **benefits**-related, include the content that has the VA benefits hotline. For example:

  > **Note:** To protect your personal information, we don't allow online changes to your name, date of birth, or Social Security number. If you need to change this information, call the VA benefits hotline at 800-827-1000 (TTY: 711), Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
  >
  > [Find more detailed instructions for how to change your legal name (opens in new tab)](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

- If it’s **health**-related, include the content that has the VA benefits hotline _and_ the content to contact your local medical center.

  > **Note:** To protect your personal information, we don't allow online changes to your name, date of birth, or Social Security number. If you need to change this information, call your local VA medical center ([find a VA location tool](https://www.va.gov/find-locations/)) to get help changing your name on file with VA. Ask for the eligibility department.
  >
  > [Find more detailed instructions for how to change your legal name (opens in new tab)](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

## Research findings

The Authenticated Experience Design Patterns team [conducted user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill) in late 2024 about how users prefer to see their editable and non-editable information, and how they prefer to be informed about how to edit it. The majority of participants want updates to save to their VA.gov profile, but some also want the ability to choose where the data saves, in the case that they are using a temporary address or other temporary situation.
