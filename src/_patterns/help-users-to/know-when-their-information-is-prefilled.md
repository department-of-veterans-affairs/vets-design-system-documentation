---
layout: pattern
title: Know when their information is prefilled
permalink: /patterns/help-users-to/know-when-their-information-is-prefilled
sub-section: help-users-to
intro-text: Follow this pattern to help users know when their information will be prefilled for them in an application.
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

- **When you prefill a user's data into an application, like a form.** When using this pattern, clearly tell users where their data is being pulled from to prefill for them.
- **When users can update prefilled information.** Review the "[Help users to... Update prefilled information](/patterns/help-users-to/update-prefilled-information)" pattern for guidance on helping users update this prefilled information.

### When not to use this pattern
- **For unauthenticated users.** Users who aren't signed in shouldn't see their information prefilled when they interact with an application. But, when forms don't require users to be signed in, they should see an information alert describing benefits to signing in. [Refer to the unauthenticated intro page alert](#unauthenticated-intro-page-alert) later described on this page.
- **When there is no prefill data for the user.**

### When to use caution
- **When prefilling data from a source other than [VA.gov API](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/in_progress_forms/getInProgressForm1).** It’s crucial to explain to users exactly where the data is coming from so that if there are any errors in the data, it’s clear how to correct them.

## How to design and build
### Anatomy or layout details
This pattern involves these types of pages found in VA.gov forms:

- **Introduction page:** The first page of a form. Introduces the process the Veteran or other beneficiary will follow to apply for a benefit or to complete a supporting form. Changes slightly after a user signs in.  
- **Prefilled information the user cannot update:** This is usually personal information like name, date of birth, and Social Security number.  
- **Prefilled information the user can update:** This can be many different types of information that the user can update directly on the screen where we display it.

#### Introduction page and sign in alerts

- The existing [form introduction page templates](/templates/forms/introduction) are already updated to support this pattern for both the unauthenticated and authenticated experiences.
- Use the [existing sign-in alert pattern](patterns/help-users-to/sign-in) that notifies users that their information will be prefilled when signing in.
- Use the [prefill alert](/components/form/prefill) when the user is signed in to notify them that some of their information has been prefilled.

### How this pattern works

#### Communicate information that can be edited
This pattern communicates information that can be edited by:

- **Displaying each piece of editable prefilled information in a card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as separate cards for phone, email, or mailing address.  
- Refer to [Help users to… Update prefilled information](/patterns/help-users-to/update-prefilled-information) for a pattern to follow when allowing users to make updates.

#### Communicate information that cannot be edited
This pattern communicates information that cannot be edited by:

- **Omitting the edit link in cards with non-editable information.** For information that cannot be changed online (such as legal name, date of birth, and Social Security number), remove the edit link within the card component.  
- **Including textual instructions for updating uneditable information**. Under the card with the uneditable data, display informational text starting with the bolded word “Note:” followed by directions to update this information offline. Refer to the “content considerations” section below for sample text.  
- **Since information from the user’s profile may be inaccurate,** consider adding an additional pathway for users to be able to correct their information for the form itself. Clarify that since the information cannot be updated online, the information they’re providing would be used only for their current submission.

### Components used in this pattern
- [Alert](/components/alert/) - To inform users about prefilled information and where changes will be saved
- [Card](/components/card/) - To display prefilled information in organized sections
- [Link]({{ site.baseurl }}/components/link) - To give users an opportunity to make changes to their prefilled information
- [Prefill]({{ site.baseurl }}/components/form/prefill) - To inform users ahead of the form that there will be prefilled information if they log in

## Examples

### Signed in prefill alert
{% include storybook-preview.html story="patterns-components-prefill-alert--signed-in-prefill-alert" link_text="signed in prefill alert" %}

### Unauthenticated prefill alert
{% include storybook-preview.html story="patterns-components-prefill-alert--unauthenticated-prefill-alert" height="415px" link_text="unauthenticated prefill alert" %}

### Editable prefill card
![Editable prefill card]({{site.baseurl}}/images/patterns/help-users-to/know-when-their-information-is-prefilled/Editable-prefill-card.png)

### Uneditable prefill card
![Uneditable prefill card]({{site.baseurl}}/images/patterns/help-users-to/know-when-their-information-is-prefilled/Uneditable-prefill-card.png)

## Content considerations
### Directions for updating uneditable information
Directions for updating information that can’t be updated online vary. Refer to the "[Help users to... Update Prefilled information](/patterns/help-users-to/update-prefilled-information)" pattern for guidance.

## Research findings
The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) in mid 2024 to gather validation about this pattern. The pattern was [further tested](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update%20Prefill%20Research%20Report.md) as part of a late 2024 study by the same team.
