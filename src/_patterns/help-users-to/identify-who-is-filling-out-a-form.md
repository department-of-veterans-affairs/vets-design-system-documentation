---
layout: pattern
title: Identify who is filling out a form
draft: false
permalink: /patterns/help-users-to/identify-who-is-filling-out-a-form
sub-section: help-users-to
intro-text: "This pattern helps determine two things: Who is filling out the form (the person typing or writing) and who the form is about (the person who will get the benefits). Sometimes these are the same person and sometimes they are different."
research-title: Form respondent
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?node-id=27233-18
status: use-with-caution-candidate
uses_mermaid: true
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Related
  - anchor: How this pattern affects your form
  - anchor: Content considerations
---

## Usage

This pattern helps us figure out 2 important things for VA forms:
1. Who is filling out the form (the person typing or writing)
2. Who the form is for (the person who will get the benefits)

Sometimes they’re the same person. Sometimes they’re different.

When using this pattern, work with the Content and IA team to help with the radio options, hint text, and other content your specific form needs.

### Why this pattern matters

This pattern helps:
* Veterans get through forms faster when they’re filling it out for themselves
* Everyone understands who they’re collecting information about
* Reduces errors and confusion

### When to use this pattern

Use this pattern when your form can be filled out by the following:

* Veterans for themselves
* Family members for themselves
* Family members for a Veteran
* Someone else for a Veteran or family member of a Veteran

### When not to use this pattern

The form can only ever be completed by the Veteran for themselves

### Decision tree questions

Before using this pattern, ask yourself these 4 questions:
1. Can Veterans fill out this form for themselves?
2. Can family members fill this form out for a Veteran or themselves?
3. Can third-party representatives fill this form out for someone?
4. Do we need to know the exact relationship between the person filling out the form and the person who will receive the benefits?

If you answered yes to any of questions 2 through 4, this pattern will help organize the flow.

{% include mermaid-chart.html 
   id="form-submitter-decision-flowchart" 
   caption="Decision flowchart to help determine when to use the form submitter pattern."
   screen_reader_text="This flowchart helps you decide when to use the form submitter pattern based on four decision points: who can fill out the form, whether family members can submit it, whether third-party representatives are allowed, and whether you need to know the exact relationship between the form submitter and beneficiary."
   chart="
flowchart TD
    Start[\"<b>Is your form for a service/benefit available to Veterans only or Veterans AND Claimants?</b>\"]:::node-start
    
    Start --> VetClaimant([\"<b>VETERAN & CLAIMANT</b>\"]):::node-answer-primary
    Start --> VetOnly([\"<b>VETERAN ONLY</b>\"]):::node-answer-primary
    
    VetClaimant --> Q1[\"<b>Does the form ask the relationship of the Claimant to the Veteran?</b>\"]:::node-question
    
    Q1 --> Q1Yes([\"<b>YES</b>\"]):::node-answer-secondary
    Q1 --> Q1No([\"<b>NO</b>\"]):::node-answer-secondary
    
    Q1Yes --> Q2A[\"<b>Can your form be filled out/submitted by a third party?</b>\"]:::node-question
    Q1No --> R1([\"<b>Skip using question 2a</b>\"]):::node-context
    
    VetOnly --> Q2B[\"<b>Can your form be filled out/submitted by a third party?</b>\"]:::node-question
    
    Q2A --> Q2AYes([\"<b>YES</b>\"]):::node-answer-secondary
    Q2A --> Q2ANo([\"<b>NO</b>\"]):::node-answer-secondary
    Q2B --> Q2BYes([\"<b>YES</b>\"]):::node-answer-secondary  
    Q2B --> Q2BNo([\"<b>NO</b>\"]):::node-answer-secondary
    
    Q2AYes --> R2([\"<b>Use full pattern 2b</b>\"]):::node-result-button
    Q2ANo --> R3([\"<b>Just use question 2a from the pattern</b>\"]):::node-result-action
    Q2BYes --> R2
    Q2BNo --> R4([\"<b>No need to use form submitter pattern</b>\"]):::node-result-link
" %}

### Key terms you need to know
These terms are also defined in the [Word list](https://design.va.gov/content-style-guide/word-list) and [Claims and applications](https://design.va.gov/content-style-guide/specific-topics-and-programs/claims-and-applications) sections in the content style guide.

**Veteran**: Someone who served in the military and is now a civilian.

**Claimant**: The person who is applying for benefits or has a claim. This could be a Veteran, spouse, child, parent, or someone else.

**Form submitter**: The person actually filling out and submitting the form. (Don't use this term when talking to Veterans – it's just for internal use. In the pattern, we refer to this person as "you".)

**Third-party representative**: Someone who has official permission to help a Veteran with VA paperwork. This includes:

* **Accredited representative**: A lawyer, claims agent, or Veterans Service Organization (VSO) representative officially approved to help Veterans. Accredited representatives need to file VA Form 21-22 or 21-22a before they can submit a Veteran's paperwork. A person can only have 1 accredited representative at a time.

* **Alternate signer**: A person certified to sign certain forms for someone who can't sign for themselves. They might be a court-appointed guardian, someone with power of attorney, or a caregiver. Alternate signers need to file VA Form 21-0972 before they can sign for another person. A person can only have 1 alternate signer at a time. (Family members aren't automatically representatives. They need official VA approval.)

**Sponsor**: The Veteran whose military service earned the benefits that someone else (like a spouse or child) is now applying for. If you include this term in your form, include a plain language definition at first mention.

## How to design and build

### Question 1a: For signed-in Veterans

If a Veteran is already signed into VA.gov, we ask "Our records show that you're a Veteran. Who are you filling out this form for?"

They can choose from these options:
* I’m filling out this form for myself
* I’m filling out this form for another Veteran
* I’m filling out this form for my family member
* I’m filling out this form for the family member of another Veteran

If they’re filling out the form for themselves, we can fill in their information automatically and skip the rest of these questions.

Include hint text that explains who a claimant is: “We refer to this person as a “claimant” because they’re the person claiming the VA benefit or service.”


{% include component-example.html alt="A form question asking signed-in Veterans which situation best describes them, with options to fill out the form for themselves, another Veteran, or a non-Veteran claimant." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/1b-prefill-vet-question.png" caption="Example of Question 1a for signed-in Veterans with prefilled profile information." class="x2" reverse="true" %}

### Question 1b: For everyone else

If we don't know if someone is a Veteran, we ask: “Which of these best describes you?”

Options might include:
* I'm a Veteran filling out this form based on my own status
* I'm a family member of a Veteran filling out this form for myself
* I’m filling out this form for a Veteran
* I'm filling out this form for a family member of a Veteran


{% include component-example.html alt="A form question asking which situation best describes the user, with options for Veterans filling out for themselves or their family member, a family member filling out for a Veteran, or someone else filling out for a family member of the Veteran." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/1a-form-submitter-question.png" caption="Example of Question 1b for users when their Veteran status is unknown." class="x2" reverse="true" %}

### Question 2a: Relationship to Veteran

We ask about the person’s relationship to the Veteran: “What’s your relationship to the Veteran?”

* I’m a Veteran’s spouse
* I’m a Veteran’s dependent child
* I’m a Veteran’s parent
* Other permitted claimant type (depends on the form)

{% include component-example.html alt="A form question asking which roles best describe the user, with placeholder options for different claimant types permitted by the form." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/2a-claimant-question.png" caption="Example of Question 2a asking about the user's relationship to the Veteran." class="x2" reverse="true" %}

### Question 2b: For people filling out forms for others

We ask what type of third-party representative they are: “What type of permission do you have to fill out this form for a Veteran or family member of a Veteran?”
Options might include: 

* I’m an accredited representative
* I’m an alternate signer
* I’m a family member
* Other approved representative types (depends on the form)
* None of these options apply to me

Include hint text that explains additional forms may be needed: "You may need to submit an additional form to prove you have permission."

{% include component-example.html alt="A form question asking what type of permission the user has to fill out a form for a Veteran, with radio tile options and an expandable help section." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/2b-third-party-question-veteran.png" caption="Example of Question 2b for third-party representatives filling out forms for Veterans. Make sure you use the options that are relevant to your form." class="x2" %}

{% include component-example.html alt="A form question asking what type of permission the user has to fill out a form for a non-Veteran claimant, with radio tile options and an expandable help section." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/2b-third-party-question-non-veteran.png" caption="Example of Question 2b for third-party representatives filling out forms for non-Veteran claimants." class="x2" %}

### Handling permission issues

When users don't have the proper permission to fill out a form for someone else, provide clear guidance on next steps:

{% include component-example.html alt="A warning alert page stating 'You need permission to fill out this form' with guidance on what steps to take next and how to get proper permissions." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/alert-page-permission-denied.png" caption="Example of an alert page shown when users lack proper permissions, with clear next steps and pathways to obtain authorization." class="x2" %}

## How this pattern affects your form

#### Introduction page

Your form's first page should clearly explain:

* Who can get these benefits
* Who is allowed to fill out this form for someone else

#### Progress bar

Label step 1 as "Your identity" and include questions 1 and 2.

Always ask for the form submitter's contact information first, then ask for information about the person the form is for (if they're different people).

Always require email addresses for both the person filling out the form and the person it’s for.

#### Example progress bar component in Figma 

{% include component-example.html alt="An example progress bar." file="/images/patterns/help-users-to/identify-who-is-filling-out-a-form/progress-bar.png" caption="This progress bar represents a form flow where a third party is filling out the form for a non-Veteran claimant. Make sure you use the options that are relevant to your form." class="x2" %}

## Content considerations
Follow the [plain language standards](https://design.va.gov/content-style-guide/) in the VA.gov content style guide when creating radio options, hint text, additional information, etc. Contact the Content and IA team for help with any new content.

### Error messages and hint text

**Question 1a**
* Hint text: We refer to this person as a “claimant” because they’re the person claiming the VA benefit or service.
* Error type: No selection
* Error message: Select the option that best describes you

**Question 1b**
* Hint text: This helps us understand your relationship to the person you’re filling out this form for (called the “claimant”). The claimant is the person who is claiming the VA benefit or service.
* Error type: No selection
* Error message: Select the option that best describes you

**Question 2a**
* Hint text: None
* Error type: No selection
* Error message: Select the option that best describes you

**Question 2b**
* Hint text: You may need to submit an additional form to prove you have permission.
* Error type: No selection
* Error message: Select the option that best describes you
