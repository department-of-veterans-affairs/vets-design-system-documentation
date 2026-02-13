---
layout: pattern
title: Know when their information is prefilled
permalink: /patterns/help-users-to/know-when-their-information-is-prefilled
sub-section: help-users-to
intro-text: Follow this pattern to help people know when their information will be prefilled for them in an application, form, or tool.
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=13451-91712&t=eoaTAXv2PGPTU6mE-1
research-title: Help users know when their info is prefilled
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

- **When you prefill a user's information into an application, form, or other online tool.** When using this pattern, clearly tell the user where their information is being pulled from to prefill for them.
- **When users can update prefilled information.** Review the "[Help users to... Update prefilled information](/patterns/help-users-to/update-prefilled-information)" pattern for guidance on helping users update this prefilled information.

### When not to use this pattern
- **For unauthenticated users.** Users who aren't signed in shouldn't see their information prefilled when they interact with an application, form, or tool. But, when forms don't require users to be signed in, they should get the [Sign-in alert](/components/alert/alert-sign-in/) describing the benefits of signing in.
- **When there's no prefill data for the user.**

### When to use caution
- **When prefilling data from a source other than the [VA.gov API](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/in_progress_forms/getInProgressForm1).** It’s crucial to explain to users exactly where the data is coming from so that if there are any errors in the information, it’s clear how to correct those errors.

## How to design and build
### Anatomy or layout details
This pattern involves these types of pages found in VA.gov forms:

- **Introduction page:** The first page of a form. Introduces the process the Veteran or other beneficiary will follow to apply for a benefit or to complete a supporting form. Changes slightly after a user signs in.  
- **Prefilled information the user cannot update:** This is usually personal information like name, date of birth, and Social Security number.  
- **Prefilled information the user can update:** This can be many different types of information, like email addresses and mailing addresses, that the user can update directly on the screen where we display it.

#### Introduction page and sign in alerts

- Use the [form introduction page templates](/templates/forms/introduction). The existing templates are already updated to support this pattern for both the unauthenticated and authenticated experiences.
- Use the [existing sign-in alert pattern](patterns/help-users-to/sign-in) that notifies a user that we will prefill their information will be prefilled when signing in.
- Use the [prefill alert](/components/form/prefill) when the user is signed in to notify them that we prefilled some of their information.

### How this pattern works

#### Communicate information that the user can edit
Here’s how to communicate that people can update certain information online:

- **Displaying editable prefilled information in a card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as a phone number, email address, or mailing address.  
- Use the [Help users to… Update prefilled information](/patterns/help-users-to/update-prefilled-information) pattern when the user can update their information.

#### Communicate information that the user can't edit
Here’s how to communicate that people can’t update certain information online:

- **Omitting the edit link in cards with uneditable information.** For information that the user can't change online (such as legal name, date of birth, and Social Security number), remove the edit link within the card component.  
- **Include instructions for how to update uneditable information**. Under the card with the uneditable information, display a note starting with the bolded word “Note:” followed by directions to help users find out how to update this information by phone or another way. These directions will vary by form or type of information. You’ll need to confirm that the directions are accurate for updating that specific type of information. See the **Content considerations** section  
- **Consider adding a pathway for the user to correct their information for the form itself.** Since information from the person’s profile may be inaccurate, it’s helpful to have this option.  Clarify that since they can't update the information online, we'll only update the information they requested on the current form.

### Components used in this pattern
- [Alert](/components/alert/) - To inform the user about prefilled information and where we will save changes
- [Alert - Sign-in](/components/alert/alert-sign-in/) - To inform the user that they can sign so we can prefill their information
- [Card](/components/card/) - To display prefilled information in organized sections
- [Link](/components/link) - To give the user an opportunity to make changes to their prefilled information
- [Prefill](/components/form/prefill) - To inform the user before starting the form that we will prefill their information if they sign in

## Examples

### Signed in prefill alert
{% include storybook-preview.html story="patterns-components-prefill-alert--signed-in-prefill-alert" link_text="signed in prefill alert" %}

### Unauthenticated prefill alert
{% include storybook-preview.html story="patterns-components-prefill-alert--unauthenticated-prefill-alert" height="415px" link_text="unauthenticated prefill alert" %}

### Editable prefill card
![Editable prefill card]({{site.baseurl}}/images/patterns/help-users-to/know-when-their-information-is-prefilled/Editable-prefill-card.png)

{% include component-example.html alt="A card showing information that can be edited by the user." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/Editable-prefill-card.png" caption="For editable information, use a prominent note or alert to inform users that changes will be reflected in their profile. Display a success alert informing the person “We saved these changes to this form and your profile.” Place this alert at the top of the page, after the stepper and the auto-save text. Use a standard alert if the person made the changes on a form step page. Use a slim alert if the person made the changes on the final review page.
" class="x2" %}

### Uneditable prefill card
![Uneditable prefill card]({{site.baseurl}}/images/patterns/help-users-to/know-when-their-information-is-prefilled/Uneditable-prefill-card.png)

## Code Usage
Code for the [prefill pattern](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/patterns/prefill) can be found in the Forms library.

## Content considerations
### Directions for updating uneditable information
Directions for updating information that can’t be updated online vary by form and type of information. The  "[Help users to... Update Prefilled information](/patterns/help-users-to/update-prefilled-information)" pattern has guidance for these directions.

## Research findings
The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) in mid 2024 to gather validation about this pattern. The pattern was [further tested](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update%20Prefill%20Research%20Report.md) as part of a late 2024 study by the same team.
