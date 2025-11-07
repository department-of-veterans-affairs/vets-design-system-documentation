---
layout: pattern
title: Identify who is filling out a form
draft: true
permalink: /patterns/help-users-to/identify-who-is-filling-out-a-form
sub-section: help-users-to
intro-text: "This pattern helps determine two things: Who is filling out the form (the person typing or writing) and who the form is about (the person who will get the benefits). Sometimes these are the same person and sometimes they are different."
research-title: Form respondent
figma-link: https://www.figma.com/design/5RyCNn2x5LiNj15TLEh4tD/WIP---Form-Submitter-Pattern?node-id=4-47&t=4KIttqDZYZZOB26A-1
status: use-with-caution-candidate
---

## Usage

### When to use this pattern

Use this pattern when your form can be filled out by:

* Veterans for themselves
* Claimants for themselves
* Family members for a Veteran
* Third-party representatives filling out for a Veteran or claimant

### Key terms

**Veteran**: Someone who served in the military and is now a civilian.

**Claimant**: The person who is applying for benefits or has a claim. This could be a Veteran, spouse, child, parent, or someone else.

We sometimes use this term to refer to the person with the claim or the person applying for the benefit—especially if the person isn’t a Veteran, or if they aren’t the person submitting the form (for example: "I'm signing for the claimant").

Use specific plain language terms whenever possible, such as "Veteran’s spouse" or "Veteran’s child." Only use "claimant" when a more specific term does not apply, and always define it on first use as "person with the claim" or "person applying for this benefit."
For example:
> "I'm the spouse, dependent, survivor, or caregiver of a Veteran, and I have an existing claim."

**Form submitter**: The person actually filling out and sending in the form. Don't use this term when talking to Veterans — it's just for internal use.

**Third-party representative**: Someone who has official permission to help a Veteran with VA paperwork. This includes:

* **Accredited representative**: A lawyer, claims agent, or Veterans Service Organization (VSO) representative who VA has officially approved to help Veterans. They need to file VA Form 21-22 or VA Form 21-22a first.

* **Alternate signer**: Someone certified to sign certain forms for someone else who can't sign for themselves. They might be a court-appointed guardian, someone with power of attorney, or a caregiver. They need to file VA Form 21-0972 first.

**Sponsor**: The Veteran whose military service earned the benefits that someone else (like a spouse or child) is now applying for. It’s OK to use the word "sponsor" if you lead with this plain language definition.

For example:
> the Veteran you're connected to (called your "sponsor")

## How to design and build

### Question 1a: For signed-in Veterans

* If someone's already signed into VA.gov and we know they're a Veteran, ask: "Are you filling out this form for yourself?"
* If they say yes, fill in their information automatically and skip the rest of these questions.

{% include component-example.html alt="A form question asking signed-in Veterans which situation best describes them, with options to fill out the form for themselves, another Veteran, or a non-Veteran claimant." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/1b-prefill-vet-question.png" caption="Example of Question 1a for signed-in Veterans with prefilled profile information." class="x2" reverse="true" %}

### Question 1b: For everyone else

If you don't know if someone's a Veteran, ask: "Which of these best describes you?"

Options might include:

* I'm a Veteran filling this out for myself
* I'm filling this out for myself (but I'm not a Veteran)
* I'm filling this out for someone else

{% include component-example.html alt="A form question asking which situation best describes the user, with options for Veterans filling out for themselves, non-Veteran claimants, filling out for a Veteran, or filling out for a non-Veteran claimant." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/1a-form-submitter-question.png" caption="Example of Question 1b for users when their Veteran status is unknown." class="x2" reverse="true" %}

### Question 2a: Relationship to Veteran

Ask about their relationship to the Veteran whose service earned these benefits:

* Spouse
* Child
* Parent
* Other specific relationships (depends on the form)

{% include component-example.html alt="A form question asking which roles best describe the user, with placeholder options for different claimant types permitted by the form." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/2a-claimant-question.png" caption="Example of Question 2a asking about the user's relationship or role as a claimant." class="x2" reverse="true" %}

### Question 2b: For people filling out forms for others

Ask what type of representative they are:

* Accredited representative
* Alternate signer
* Family member
* Other approved representative types

{% include component-example.html alt="A form question asking what type of permission the user has to fill out a form for a Veteran, with radio tile options and an expandable help section." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/2b-third-party-question-veteran.png" caption="Example of Question 2b for third-party representatives filling out forms for Veterans." class="x2" %}

{% include component-example.html alt="A form question asking what type of permission the user has to fill out a form for a non-Veteran claimant, with radio tile options and an expandable help section." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/2b-third-party-question-non-veteran.png" caption="Example of Question 2b for third-party representatives filling out forms for non-Veteran claimants." class="x2" %}

### How this affects your form

#### Introduction page

Your form's first page should clearly explain:

* Who can get these benefits
* Who is allowed to fill out this form for someone else

#### Progress bar

Step 1 should be called "Your identity" and include questions 1 and 2.

#### Personal information pages

Always ask for the form submitter's contact information first, then ask for information about the person the form is about (if they're different people).

#### Example progress bar component in Figma for a form using the form submitter pattern

{% include component-example.html alt="An example progress bar." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/progress-bar.png" caption="This progress bar represents a form flow where a third party is filling out the form for a non-Veteran claimant." class="x2" %}

### Error messages

Keep error messages simple:

* "Please select the option that best describes you"
* "Please select the type of representative you are"

### Handling permission issues

When users don't have the proper permission to fill out a form for someone else, provide clear guidance on next steps:

{% include component-example.html alt="A warning alert page stating 'You need permission to fill out this form' with guidance on what steps to take next and how to get proper permissions." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/alert-page-permission-denied.png" caption="Example of an alert page shown when users lack proper permissions, with clear next steps and pathways to obtain authorization." class="x2" %}

## Content considerations

### Decision tree questions

Before using this pattern, ask yourself:

1. Can this form be filled out by the Veteran themselves?
2. Can family members fill it out for a Veteran?
3. Can official representatives fill it out for someone?
4. Do we need to know the exact relationship between people?

If you answered yes to multiple questions, this pattern will help organize the flow.

## Why this pattern matters

This pattern helps:

* Veterans get through forms faster when they're filling them out for themselves
* VA staff process forms correctly
* Everyone understands who they're collecting information about
* Reduce errors and confusion

## Important notes

* A person can only have one accredited representative at a time
* A person can only have one alternate signer at a time
* Family members aren't automatically representatives - they need official approval from VA
* Always require email addresses for both the person filling out the form and the person it's about (to prevent lost communications)
