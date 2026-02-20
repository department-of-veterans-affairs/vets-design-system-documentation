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

- **When you prefill the user’s information into a form or other online tool.** This pattern helps users understand how they can update their prefilled information, including sensitive information that they can't update online. This pattern also informs users where we'll save their changes—either only to the specific form or tool, or to the form or tool and their VA.gov profile. See the related ["Help users to... Know when their information is prefilled"]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on how to display the prefilled information.


#### Design principles
- **Visibility of system status.** This pattern demonstrates the [usability principle of communicating the current state](https://www.nngroup.com/articles/visibility-system-status/) in order to allow users to feel in control and to be able to take appropriate action.

- **User control and freedom.** This pattern also gives users control over their own information, thereby providing [control and freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern

- **When you don't prefill the user's information.**

- **For unauthenticated users.** Users who aren't signed in shouldn't see their information prefilled when they interact with an application, or be able to update prefilled information. But, when forms don't require users to be signed in, they should see an information alert describing benefits to signing in. [View the unauthenticated intro page alert]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled#unauthenticated-intro-page-alert) within the [Help users to... Know when their information is prefilled](/patterns/help-users-to/know-when-their-information-is-prefilled) pattern.

### When to use caution

- **When the user can't update their information online, but can update another way.** This pattern accounts for cases when the user needs to call VA or take a different step to change certain information, such as their name and Social Security number. You'll need to confirm that you're giving the correct instructions for changing that specific information.
- **When the user can't update their information at all.** If your form prefills information that the user can't change through any means, you'll need to explain that directly.

## How to design and build

### Anatomy or layout details

This pattern involves these types of pages found in VA.gov forms:

- **Prefilled information the user cannot update:** This is usually personal information like name, date of birth, and Social Security number.
- **Prefilled information the user can update:** This can be many different types of information that the user can update directly on the screen where we display it.

See the related ["Help users to... Know when their information is prefilled"]({{ site.baseurl }}/patterns/help-users-to/know-when-their-information-is-prefilled) pattern for guidance on helping users know when their information is prefilled.

#### Prefilled information the user can't update

{% include component-example.html
  class="x2"
  alt="A form page asking users to confirm their personal information, such as legal name, date of birth, and Social Security number. That information is contained in a white card. Below the white card is a string of text explaining why users can't update that information online."
  file="/images/patterns/help-users-to/update-prefilled-information/personal-information-page.png" %}

#### Prefilled information the user can update

{% include component-example.html
  class="x2"
  alt="A card that shows the address information along with a link to edit if needed."
  file="/images/patterns/help-users-to/update-prefilled-information/address-page.png" %}

When the user updates this information, there are two potential pathways.

##### If we automatically save changes to VA.gov profile
In most cases, changes should save to both the form or tool and to VA.gov profile. An informational alert informs users where we'll save their changes.

For developer documentation on saving contact information changes to VA.gov profile, see [How to create the contact info Array Data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar).

{% include component-example.html
  class="x2"
  alt="A page for users to update their mailing address. Above the fields is an informational alert stating, 'Any changes you make will also be reflected on your VA.gov profile.'"
  file="/images/patterns/help-users-to/update-prefilled-information/edit-save-to-profile.png" %}

##### If we let the user choose whether to save changes to VA.gov profile
In certain cases, users may need more control over where the changes will save. Instead of displaying an informational alert at the top of the page, display a question with radio button response options asking the user where they want to save their changes. Learn more about these cases in the "communicate where changes will save" section below.

{% include component-example.html
  class="x2"
  alt="A page for users to update their mailing address. Below the address fields is a required radio button field asking, 'Do you also want to update this information in your VA.gov profile?'"
  file="/images/patterns/help-users-to/update-prefilled-information/edit-choose-where-to-save.png" %}

#### Prefilled information that is missing and required
There may be instances where some information that would otherwise be prefilled is missing from the database, but also required by the form itself. In those instances, users will be brought to a page with a card that utilizes a colored tag to indicate that the information is missing, along with the word "(*Required)" next to the field heading text to indicate the user needs to provide that information.

{% include component-example.html
  class="x2"
  alt="A page showing users they have missing and required information they will need to add."
  file="/images/patterns/help-users-to/update-prefilled-information/missing-prefilled-info.png" %}

If the user does not provide the required missing information and hits the "Continue" button to try and move forward, they will see the same page with that card in an error state and some red error text telling them what information they need to provide. Once they click "Add" and provide the information on an edit page, they will be redirected back to this screen and able to continue through the form.

{% include component-example.html
  class="x2"
  alt="A page showing users an error state of the card with missing and required information they need to add."
  file="/images/patterns/help-users-to/update-prefilled-information/card-with-missing-info-error-state.png" %}

Please note that there is currently a [ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4276) to update the card component to include this error state. It may not yet be available for use in the VADS Figma design files.

### How this pattern works

#### Communicate whether or not users can update their prefilled information online

Here's how to communicate that users can't update certain information online:

- **Omit the edit link in cards with non-editable information.**
- **Include instructions for how to update uneditable information.** Under the card with the uneditable information, display a note starting with the bolded word “Note:” followed by directions to help users find out how to update this information by phone or another way. See the "content considerations" section for sample text.

Here's how to communicate that users can update certain information online:

- **Display editable prefilled information in a card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as phone, email, or mailing address.

#### Communicate that changes will also save to VA.gov profile — or let users choose whether to save to profile
- **In most cases, tell users that we'll automatically save changes to their VA.gov profile.** In [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md), most users indicated that they want changes they make to their information to update their VA.gov profile. On the edit page, display an informational alert informing users that these changes will impact their profile information.

- **In certain cases, let users choose where to save their information.** Consider using this variation for information that may change frequently. For example, when reordering medical supplies, users may want to provide a temporary mailing address. But they may not want this temporary mailing address to save to their VA.gov profile. In these cases, on the edit page, don't display the informational alert informing them where their changes will save. Instead, display a required radio button below the editable fields asking them if they also want to update this information in their VA.gov profile.

#### Communicate when updates to prefilled information are successful
- **Inform users where the changes were saved.** Display a success alert informing users "We've made these changes to this form and your VA.gov profile" or "We've made these changes to only this form.” Place this alert at the top of the page, below the stepper and the auto-save text. Use a standard alert if the user made the changes on a form step page. Use a slim alert if the user made the changes on the final review page.

### Components used in this pattern

- [Details]({{ site.baseurl }}/components/details)
- [Alert]({{ site.baseurl }}/components/alert)
- [Card]({{ site.baseurl }}/components/card)
- [Link]({{ site.baseurl }}/components/link)
- [Radio button]({{ site.baseurl }}/components/form/radio-button)
- [Telephone]({{ site.baseurl }}/components/telephone)

## Examples

### Note after uneditable prefilled information

Inform the user that they need to call VA to find out how to update this information. The specific number to call will vary by form.

{% include component-example.html
  class="x2"
  alt="A note to the user explaining why they can't edit personal information online. It starts with the bolded word 'Note' and ends with a link to find more detailed instructions on how to change their legal name."
  file="/images/patterns/help-users-to/update-prefilled-information/how-to-edit-personal-information.png" %}

### Alert informing user we'll save changes to VA.gov profile

Inform users that their changes will save to their profile before they make the changes. If your form does not save changes to VA.gov profile, use a radio button question instead (example below).

{% include component-example.html
  class="x2"
  alt="An informational alert with a bolded header saying 'Any changes you make will also be reflected on your VA.gov profile.'"
  file="/images/patterns/help-users-to/update-prefilled-information/alert-about-where-information-will-save.png" %}

### Success alert

Inform users their change has been saved to the form and their VA.gov profile. If the change was only saved to the form, the alert should read "We've made these changes to only this form."

{% include component-example.html
  class="x2"
  alt="A success alert with the header 'We've updated your mailing address' and the body text 'We've made these changes to this form and your VA.gov profile.'"
  file="/images/patterns/help-users-to/update-prefilled-information/success-alert.png" %}

If the user made the change from the final review page, display the slim success alert on the review page, immediately under the header of the section where they made the change.

{% include component-example.html
  class="x2"
  alt="A slim success alert with the text 'Address successfully updated on this form.'"
  file="/images/patterns/help-users-to/update-prefilled-information/slim-success-alert.png" %}

### Radio button

In cases where the information might change frequently (like a temporary mailing address), ask users if they want to save their changes to their VA.gov profile. Inform the user of the implications of this decision.

{% include component-example.html
  class="x2"
  alt="A required radio button field asking the user if they also want to update this information in their VA.gov profile."
  file="/images/patterns/help-users-to/update-prefilled-information/radio-button.png" %}

## Code usage

Contact the [Authenticated Experience Design Patterns team via slack](https://dsva.slack.com/archives/C07909N7U8Z) for code examples or more information on technical implementation.

## Content considerations

### Directions for updating uneditable information
Directions for updating information vary by form, benefit type, and type of information. You must confirm with subject matter experts that your instructions are accurate for the way your specific form populates information and how to update it. And you must confirm with the call center that they will be able to either update the information directly, or give the person instructions for how to update the information.

Here's an example that tells people to call the VA benefits hotline:
> **Note:** To protect your personal information, we don't allow online changes to your name, date of birth, or Social Security number. If you need to change this information, call us at [800-827-1000](tel:+18008271000) [(TTY: 711)](tel:711). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
>
> [Find more detailed instructions for how to change your legal name (opens in new tab)](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

## Research findings
The Authenticated Experience Design Patterns team [conducted user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) in late 2024 about how users prefer to see their editable and non-editable information, and how they prefer to be informed about how to edit it. The majority of participants want updates to save to their VA.gov profile, but some also want the ability to choose where the updates save, in the case that they are using a temporary address or other temporary situation.

This pattern would benefit from additional research. Specifically for the scenario where there is missing and required prefilled information, research to understand if the solution suggested here is effective and understandable for users would be helpful in strengthening this pattern guidance. 
