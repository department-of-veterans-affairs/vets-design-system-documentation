---
layout: pattern
title: Know how their information is updated
permalink: /patterns/help-users-to/know-how-their-information-is-updated
sub-section: help-users-to
intro-text: Follow this pattern to help users know how and when their personal information will be updated in their profile when the user is updating information in an application.
research-title: Help users know how their info is updated
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Research findings
---

## Usage

### When to use this pattern

* **Prefilled Profile data is being displayed and is editable.** When pre-filling a form with data stored in the user's Profile, it is appropriate to explain which data we have stored for a user and make it clear if that data will be changed if edited in this form.

#### Design principles

* **Visibility of system status.** This pattern demonstrates the [usability principle of communicating the current state](https://www.nngroup.com/articles/visibility-system-status/) in order to allow users to feel in control and to be able to take appropriate action.
* **User control and freedom.** This pattern also gives users control over their own information thereby providing [control and freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern

* **When an update in this form will not update their VA.gov profile.**  If a contact information addition or change will **not** update the user's VA.gov profile then use the text "*Any updates you make here to your [type of contact information] will only apply to this application.*" 

### When to use caution

* **Data that cannot be changed.** This pattern should not be used if the data cannot reliably be updated to reflect the user's intent. If most of the instances of user information can be updated with some exceptions then those exceptions may be called out to the user.

## How to design and build 

### How this pattern works

#### Communicate information that is on file

{% include component-example.html alt="Veteran details from the Request a Board Appeal application." file="/images/patterns/help-users-to/know-how-their-information-is-updated/board-appeal-personal-information.png" caption="The user is shown personal information that is on file and will be used as part of the application process." width="50%" %}

* In this example, at the start of the Request a Board Appeal process, the user is shown information that we have on file but that cannot be changed in this application. A note below the information calls out how to get the information updated.

#### Communicate information that can be edited 

{% include component-example.html alt="Contact information from the Request a Board Appeal application." file="/images/patterns/help-users-to/know-how-their-information-is-updated/board-appeal-contact-information.png" caption="The user is shown contact information stored in their profile that can be edited before continuing with the process." width="50%" %}

* Here the contact information stored in the user's profile that may be used as part of this request is shown to the user with a chance to edit that information. The introduction paragraph explains how the information will be used as part of this application process.
  * **A**: A note informs the user that updates made as a part of this application will also update their VA.gov profile.
  * **B**: Relevant contact information is shown with a left blue border and using headers for labels with links to edit each part of the profile information.

#### Editing relevant information to the current application

{% include component-example.html alt="Edit mailing address form from the Request a Board Appeal application." file="/images/patterns/help-users-to/know-how-their-information-is-updated/board-appeal-edit-mailing-address.png" caption="The user is able to edit their mailing address and then is returned to the previous screen where the updated information is reflected." width="50%" %}

* If the user chooses to edit their contact information the "Edit" links from the previous screen take the user to a relevant form for editing their information. The context, reflected in the page title and progress bar step reflect that the user is still within the application process.
* Clicking "Update" saves the edited information to the user's VA.gov profile and returns them to the previous screen where the updated information is reflected. From there the user can edit additional information or continue with the current process. The updated information is used in the current application.

## Research findings

* The Check-in team [performed research on reviewing, then editing, contact information within a workflow/form](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/36). Some findings are relevant to this pattern despite not yet being implemented in the check-in experience:
  * Staff explained that keeping this information up-to-date was important, because it impacts where medications are sent, "patient safety", accurate beneficiary travel calculations, wellness checks and more. There is also VHA Directive 1604, which specifies the review and collection of contact information frequently.
  * Veterans want the flexibility to be able to edit this information while performing another task. [50% of participants in another study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/38) wanted to edit contact information when checking in at a VA facility.