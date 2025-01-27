---
layout: pattern
title: Know when their information is prefilled
permalink: /patterns/help-users-to/know-when-their-information-is-prefilled
sub-section: help-users-to
intro-text: Follow this pattern to help users know when their information will be prefilled for them in an application.
research-title: Help users know when their info is prefilled
status: use-with-caution-candidate
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

- **When you prefill the user's data into an application, like a form.** When using this pattern, clearly inform the user of where their data is being pulled from to prefill for them.
- **When users can update prefilled information.** Review [Help users to... Update prefilled information](/patterns/help-users-to/update-prefilled-information) for guidance on helping users update this prefilled information.

#### Design principles
* **Visibility of system status.** This pattern demonstrates the [usability principle of communicating the current state](https://www.nngroup.com/articles/visibility-system-status/) in order to allow users to feel in control and to be able to take appropriate action.
* **User control and freedom.** This pattern also gives users control over their own information thereby providing [control and freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern
- **For unauthenticated users.** Users who aren't signed in shouldn't see their information prefilled when they interact with an application. But, when forms don't require users to be signed in, they should see an information alert describing benefits to signing in. [View the unauthenticated intro page alert](#unauthenticated-intro-page-alert) later described on this page.

### When to use caution
- **When prefilling data from a source other than VA Profile.** It is crucial to explain to the user exactly where the data is coming from so that if there are any errors in the data, it is clear how to correct them.

## How to design and build
### Anatomy or layout details
This pattern involves these types of pages found in VA.gov forms:
- **Introduction page**: The first page of a form. Introduces the process the Veteran or other beneficiary will follow to apply for a benefit or to complete a supporting form. Changes slightly after a user signs in.
- **Personal information page**: Usually the first page of a form after the user signs in. Has personal details that cannot be edited online, like name, date of birth, Social Security number, etc.
- **Prefill edit pages**: Any pages on which users edit prefilled data.

#### Introduction page
There are two states of an introduction page: Authenticated and Unauthenticated.

{% include component-example.html alt="A form introduction page viewed by an authenticated user with an alert that the form will fill parts of their application based on the their account details. Annotations state that alert header is an H2, and that alerts should be placed at the top of the page and the word 'note' in the alert should be bolded." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/intro-page-authenticated-alert.png" caption="Authenticated introduction page alert on the introduction page."  %}

{% include component-example.html alt="An alert encouraging users to sign in to save time and save work in progress. A note at the bottom shares that applicants can sign in after they start their application, but will lose any information already filled in." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/unauthenticated-alert.png" caption="Unauthenticated introduction page alert on the introduction page."  class="x2" %}

#### Personal information page
{% include component-example.html alt="A Veteran information page in a form flow with a white card containing  Veteran's uneditable information, including name, privacy masked Social Security number, date of birth, and gender. Below the card is a note explaining why the content can't be edited in the form and how to update this information." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/uneditable-prefill-information.png" caption="Uneditable prefilled information on the personal information page."  %}

#### Prefill check page
{% include component-example.html alt="A Veteran information page in a form flow with an alert followed by a card containing the Veteran's editable mailing address. The alert states that the form has prefilled some of the Veteran's information." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/editable-prefill-information.png" caption="Editable prefilled information displayed on the prefill check page. This is the proposed style to display data that is editable." %}

### How this pattern works

#### Communicate information that cannot be edited
This pattern communicates information that cannot be edited by:
- **Omitting the edit link in cards with non-editable information.** For information that cannot be changed online (such as legal name, date of birth, and Social Security number), remove the edit link within the card component.
- **Including textual instructions for updating uneditable information.** Under the card with the uneditable data, display informational text starting with the bolded word “Note:” followed by directions to update this information offline. See the "content considerations" section below for sample text.

#### Communicate information that can be edited
This pattern communicates information that can be edited by:
- **Displaying editable prefilled information in a card with an edit link.** Display prefilled information in a card component with a link to edit the information. This information may include contact information, such as phone, email, or mailing address.

#### Communicate where changes will save
- **In most cases, save changes to the VA Profile.** In [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md), most users indicated that they want changes made to their information to update the information stored on their VA Profile. On the edit page, display an informational alert informing users that these changes will impact their profile information. This alert and others should be placed at the top of the page, directly under the form name.

#### Where needed, give users the choice of where to save
- **In some cases, users want to choose where to save their information.** This is especially relevant for information that may change semi-frequently. For example, when applying to refill and track VA prescriptions or medical devices, users may want to send to a temporary mailing address, and may not want this temporary mailing address to save to their VA Profile. In these cases, on the edit page, do not display the informational alert informing them where their changes will save. Instead, display a required radio button below the fields asking them if they also want to update this information in their VA Profile.

#### Display success alerts when information has been saved
- **Inform users where the changes were saved.** Display a success alert informing users "We've made these changes to this form and your VA.gov profile" or "We've made these changes to only this form.” This alert should be placed at the top of the page, below the stepper and text "We’ll save your application on every change." Use a standard alert within the form steps. Use a slim alert if the user made changes from the final review page.

### Components used in this pattern
- [Alert](/components/alert/)
- [Radio button](/components/form/radio-button)
- [Additional info](/components/additional-info)


## Examples

### Uneditable Prefill Card
{% include storybook-preview.html story="patterns-components-card--uneditable" height="250px" link_text="uneditable prefill alert" %}

### Editable Prefill Card
{% include storybook-preview.html story="patterns-components-card--editable" height="190px" link_text="editable prefill alert" %}


### Signed In Prefill Alert
{% include storybook-preview.html story="patterns-components-prefill-alert--signed-in-prefill-alert" link_text="signed in prefill alert" %}

### Unauthenticated Prefill Alert
{% include storybook-preview.html story="patterns-components-prefill-alert--unauthenticated-prefill-alert" height="415px" link_text="unauthenticated prefill alert" %}



### Examples in production
Coming soon!

## Code usage

When using the `va-card` element to display prefilled information, ensure that the correct structure of the html is present. The description list `<dl>` and unordered list `<ul>` elements can be useful for displaying several pieces of uneditable data.

### Uneditable information
Here is some example markup for a card of uneditable content that utilizes a description list.

```html
<va-card>
  <div class="vads-u-padding--4 vads-u-margin--0">
    <dl>
      <dt class="vads-u-font-weight--bold">Name</dt>
      <dd>Godzilla</dd>
      <dt class="vads-u-font-weight--bold">Born</dt>
      <dd>1952</dd>
      <dt class="vads-u-font-weight--bold">Birthplace</dt>
      <dd>Japan</dd>
      <dt class="vads-u-font-weight--bold">Color</dt>
      <dd>Green</dd>
    </dl>
  </div>
</va-card>
```

### Editable information

If a user can update their information, than pieces of information can be shown with a heading followed by the information itself, along with an edit link.

```html
<va-card show-shadow="true">

  <h4 class="vads-u-width--auto vads-u-margin-top--0">
    Email address
  </h4>

  <p>testemail1234@unattended.com</p>

  <va-link
    label="Edit email address"
    href="/link-here"
    text="Edit"
    active
  />

</va-card>
```

[View more prefill card examples on storybook](https://design.va.gov/storybook/?path=/docs/patterns-components-card--docs)

## Content considerations
### Directions for updating uneditable information
Directions for updating information that can’t be updated online vary. See the ["Help users to... Update Prefilled information" pattern](/patterns/help-users-to/update-prefilled-information) for guidance.

#### Unauthenticated intro page alert

> [heading] Sign in with a verified account
>
> [content] Here’s how signing in with an identity-verified account helps you:
> - We can fill in some of your information for you to save you time.
> - You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.
>
> **Don't yet have a verified account?** Create a Login.gov or ID.me account. We’ll help you verify your identity for your account now.
>
> **Not sure if your account is verified?** Sign in here. If you still need to verify your identity, we'll help you do that now.
>
> **Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.
>
> [button] Sign in or create an account
>
> [text link] Start your form without signing in


<img src="/images/patterns/help-users-to/know-when-their-information-is-prefilled/unauthenticated-alert.png" width="600" alt="An alert encouraging users to sign in to save time and save work in progress. A note at the bottom shares that applicants can sign in after they start their application, but will lose any information already filled in.">


#### Authenticated intro page alert
> [heading] We've prefilled some of your information
>
> [content] Since you’re signed in, we've prefilled part of your application based on your profile details. You can also save your application in progress and come back later to finish filling it out.

<img src="/images/patterns/help-users-to/know-when-their-information-is-prefilled/authenticated-intro-alert.png" width="600" alt="An informational alert with the header 'We've prefilled some of your information.' It informs users that if they sign in, we can prefill some information for them, and they can leave and return to the form later to finish filling it out.">


## Research findings
The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) in mid 2024 to gather validation about this pattern. The pattern was [further tested](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update%20Prefill%20Research%20Report.md) as part of a late 2024 study by the same team.
