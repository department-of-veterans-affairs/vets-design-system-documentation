---
layout: pattern
title: Know when their information is prefilled
draft: true
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
- **When users can update prefilled information.** Review [Help users to... Know how their information is updated](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) for guidance on helping users update this prefilled information.

#### Design principles
- **Visibility of system status.** This pattern demonstrates the usability principle of communicating the current state to help users feel in control and take appropriate action. [Learn more about Visibility of system status](https://www.nngroup.com/articles/visibility-system-status/).
- **User control and freedom.** This pattern also gives users control over their own information. [Learn more about User Control and Freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern
- **For unauthenticated users**. Users who aren't signed in shouldn't see their information prefilled when they interact with an application. But, when forms don't require users to be signed in, they should see an information alert describing benefits to signing in. [View the unauthenticated intro page alert](#unauthenticated-intro-page-alert) later described on this page.

### When to use caution
- **When prefilling data from a source other than VA Profile.** It is crucial to explain to the user exactly where the data is coming from so that if there are any errors in the data, it is clear how to correct them.

## How to design and build
### Anatomy or layout details
This pattern involves these types of pages found in VA.gov forms:
- **Introduction page**: The first page of a form. Introduces the process the Veteran or other beneficiary will follow to apply for a benefit or to complete a supporting form. Changes slightly after a user signs in.
- **Personal information page**: Usually the first page of a form after the user signs in. Has personal details that cannot be edited online, like name, date of birth, Social Security Number, etc.
- **Prefill check page**: Any page of a form that displays prefilled information users can edit within the form.

#### Introduction page
There are two states of an introduction page: Authenticated and Unauthenticated.

{% include component-example.html alt="A form introduction page viewed by an authenticated user with an alert that the form will fill parts of their application based on the their account details. Annotations state that alerts should be placed at the top of the page and the word 'note' in the alert should be bolded." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/intro-page-authenticated-alert.png" caption="Authenticated introduction page alert on the introduction page."  %}

{% include component-example.html alt="An alert encouraging users to sign in to save time and save work in progress. A note at the bottom shares that applicants can sign in after they start their application, but will lose any information already filled in." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/intro-page-unauthenticated-alert.png" caption="Unauthenticated introduction page alert on the introduction page."  class="x2" %}

#### Personal information page
{% include component-example.html alt="A Veteran information page in a form flow with an uneditable card containing the Veteran's name, privacy masked Social Security number, date of birth, and gender. Below the card is a note explaining why the content can't be edited in the form and how to update this information. An annotation states that the gray card might be replaced in future iterations of the pattern." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/uneditable-prefill-information.png" caption="Uneditable prefilled information on the personal information page."  %}

#### Prefill check page
{% include component-example.html alt="A Veteran information page in a form flow with an alert followed by a white editable card containing the Veteran's mailing address. The alert states that the form has prefilled some of the Veteran's information. Annotations state that alerts should be placed at the top of the page, and that the white card might be replaced in future iterations of the pattern." file="/images/patterns/help-users-to/know-when-their-information-is-prefilled/editable-prefill-information.png" caption="Editable prefilled information displayed on the Prefill check page. This is the proposed style to display data that is editable." %}

### How this pattern works

#### Communicate when and why information will be prefilled
This pattern communicates when and why information will be prefilled with:
- **Unauthenticated intro page alert.**. This tells users they should expect prefilled information in a form after they sign in.
- **Authenticated intro page alert.** This alert tells users that some of their information may be prefilled for them because they are signed in.

#### Communicate information that cannot be edited
This pattern communicates information that cannot be edited with:
- **Uneditable prefilled information displayed in a card.** Prefilled information (such as legal name, date of birth, and Social Security Number) is displayed in a card component.
- **Directions for updating uneditable information.** Helper text is added under the card that has the bolded word "note" and directions to update this information offline. For additional guidance on helping users update prefilled information, see the ["Help users to... Know how their information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern which will be updated soon.

#### Communicate information that can be edited
This pattern communicates information that can be edited with:
- **Editable prefilled information displayed in a card with an edit link.** Prefilled information that is editable is displayed in a card component with a link to edit the information. For additional guidance on helping users update prefilled information, see the ["Help users to... Know how their information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern which will be updated soon.

### Components used in this pattern

- [Alert](https://design.va.gov/components/alert/)
- [Card](https://design.va.gov/components/card)


### Page templates available for this pattern

List of links to page templates or layouts used to build any pages for this pattern.

## Examples

### Uneditable Prefill Card
{% include storybook-preview.html story="patterns-components-card--uneditable" height="200px" link_text="uneditable prefill alert" %}

### Editable Prefill Card
{% include storybook-preview.html story="patterns-components-card--editable" height="250px" link_text="editable prefill alert" %}


### Signed In Prefill Alert
{% include storybook-preview.html story="patterns-components-prefill-alert--signed-in-prefill-alert" link_text="signed in prefill alert" %}

### Unauthenticated Prefill Alert
{% include storybook-preview.html story="patterns-components-prefill-alert--unauthenticated-prefill-alert" height="350px" link_text="unauthenticated prefill alert" %}

### Prefilled Info Alert
{% include storybook-preview.html story="patterns-components-prefill-alert--prefilled-info-alert" link_text="prefilled info alert" %}


### Examples in production
Coming soon!

## Code usage

When using the `va-card` element to display prefilled information, ensure that the correct structure of the html is present. The description list `<dl>` and unordered list `<ul>` elements can be useful for displaying several pieces of uneditable data.

### Uneditable information
Here is some example markup for a card of uneditable content that utilizes a description list.

``` html
<va-card background>
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

``` html
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

### Prefilled info alert

A prefill info alert tells users that some information on a form has been prefilled.

``` html
<va-alert
  status="info"
>
  <p class="vads-u-margin-y--0">
    <strong>Note:</strong> We've prefilled some of your information from your account.
    If you need to correct anything, you can select edit below.
    All updates will be made only to this form.
  </p>
</va-alert>
```

[View mort prefill alert examples on storybook](https://design.va.gov/storybook/?path=/docs/patterns-components-prefill-alert--docs)


## Content considerations
### Directions for updating uneditable information
Directions for updating information that can't be updated online vary. So directions should be updated based on the context of the form or application used. CAIA is currently working on finalizing some base language to be included, but general guidelines are:
- If it's benefits-related, include the content that has the VA benefits hotline
- If it's health-related, include the content that has the VA benefits hotline AND the content to contact your local medical center

#### Unauthenticated intro page alert

> [heading] Sign in with a verified account
>
> [content] Here’s how signing in with an identity-verified account helps you:
> - We can fill in some of your information for you to save you time.
> - You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.
>
> After you sign in, we’ll tell you if you need to verify your identity for your account.
>
> **Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.
>
> [button] Sign in or create an account
>
> [text link] Start your form without signing in


<img src="/images/patterns/help-users-to/know-when-their-information-is-prefilled/content-unauthenticated-alert.png" width="600" alt="Unauthenticated introduction page alert">


#### Authenticated intro page alert
> [content] **Note:** Since you’re signed in to your account, we can prefill part of your form based on your account details. You can also save your form in progress and come back later to finish filling it out.

<img src="/images/patterns/help-users-to/know-when-their-information-is-prefilled/content-authenticated-alert-for-intro.png" width="600" alt="Authenticated alert for introduction page">

#### Authenticated contextual alert
> [content] **Note:** We've prefilled some of your information from your account. If you need to correct anything, you can select edit below. All updates will be made only to this form.

<img src="/images/patterns/help-users-to/know-when-their-information-is-prefilled/content-authenticated-alert-for-page.png" width="600" alt="Authenticated alert for a form application page">

## Research findings
The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill) to gather validation about this pattern.