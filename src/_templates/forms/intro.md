---
layout: pattern
permalink: /templates/forms/introduction
has-parent: /templates/forms/
title: Introduction
status: use-deployed
intro-text: "The form introduction page introduces the process the Veteran or other beneficiary will follow to apply for a benefit or to complete a supporting form."
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=4546-6220&mode=design
anchors:
  - anchor: About
  - anchor: Variations
  - anchor: Structure
  - anchor: Process list (for applications)
  - anchor: What to know section (for non-applications)
  - anchor: Sign-in widget, prefill alert, or "continue saved form" alert
  - anchor: OMB and Need help sections
  - anchor: Examples (application)
  - anchor: Examples (non-application)
---

## About

The form intro page does 3 things:

- Sets clear expectations about the process of using this form
- Helps the person prepare to fill out the form by gathering required information and documents before they start
- Provides ways to get help and to find more information about the related benefit

Since people can navigate directly to this page from outside VA.gov, this intro page should include basic information they need to understand if this is the correct form.

## Variations

There are 2 versions of the Introduction page:

- **Application**: Use this variation if the form is an application for a benefit or service.
- **Non-application**: In most cases, use this variation if the form is **not** an application for a benefit or service. For example, use this for [supporting forms](https://www.va.gov/supporting-forms-for-claims/) that people need to submit along with their application and for claims for reimbursement under VA health care programs.

Both variations mostly follow the same structure. The only difference is the section after the intro:

- Applications use a process list
- Non-applications use a "What to know before you fill out this form" section

**Note:** Some straightforward applications may not require a process list. It's OK to use the same structure as Non-application for those forms.  

## Structure

### Title, subtitle, and intro

**Plain language title**

For the H1, use a plain language CTA that starts with an action verb, like "Apply for VA health care" or "File for disability compensation"

Aim for 52 characters or less, but exceptions to character length are OK if a slightly longer description adds clarity (like "Authorize the release of non-VA medical information to VA")

**Subtitle**

In general, use the full, official name of the form in title case, followed by the VA form number in parentheses. If the plain language title is nearly the same as the original form name--and has all the relevant keywords--then it's OK to use just the form number in parentheses.

Example:

[Title] Apply for VA health care
[Subtitle] Application for Health Benefits (VA Form 10-10EZ) 

Alternate example: 

[Title] Request a Higher-Level Review
[Subtitle] (VA Form 20-0996)

**Intro paragraph**

- Add a brief intro describing when to use this form (1 to 3 sentences, no more than 25 words per sentence).
- Try reusing the "When to use" blurb from the form detail page in Find a Form. For example, using the Veterans Pension blurb from the form detail page, this intro could be "Use this form if you’re a wartime Veteran and want to file a pension claim."

**Note:** Guidance on this part of the template is evolving. Check back for updates.

### Save work in progress alert

The Save work in progress in message uses the [Alert - Informational]({{ site.baseurl }}/components/alert#informational-alert) component and encourages users to sign-in in order to save their progress while completing a form.

The message content is captured in [engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement).

This alert gives users the option to start the form without signing in, excluding the Disability Compensation form where users are required to sign in.

{% include component-example.html alt="An example of save work in progress alert." file="/images/templates/forms/introduction/save-work-in-progress-alert.png" caption="An example of a save work in progress alert used in the Introduction page." class="x2" %}

### Prefill alert

The [Prefill]({{ site.baseurl }}/components/form/prefill) alert uses the [Alert - Informational]({{ site.baseurl }}/components/alert#informational-alert) component and informs users who are signed-in that their progress will be saved while completing a form.

The message content is captured in [engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement).

### Start form link

The Start form link is an [action link]({{ site.baseurl }}/components/link/action) that navigates the user to the first main form page.

## Process list (for applications)

- Use a [process list]({{ site.baseurl }}/components/process-list) to describe the steps to apply.
- Use this H2 above the list: "Follow these steps to get started"
- Use the numbered process steps listed here as H3s
- Add tailored need-to-know information about the specific form under each step, but aim to keep this section as brief as possible
- Consider how the information in this process list aligns with information on the related VA.gov pages for this benefit — if you need to add or update information on those pages, talk with the **Sitewide content/accessibility/information architecture (CAIA)** team that manages all benefit pages in the Drupal CMS

**1. Check your eligibility**

- Link to the static page that explains eligibility using link text "Find out if you're eligible for [name of benefit]"
- **Variations:** If the form is a decision review request, you can use the H3 variation "Check if this is the right decision review option for you" and adjust content in this section as needed

**Note:** Guidance on this part of the template is evolving. Check back for updates.

Example:

> Check our eligibility requirements before you apply. If you think you may be eligible, but you're not sure, we encourage you to apply.
> [Find out if you're eligible for VA health care benefits](https://www.va.gov/health-care/eligibility/)

**2. Gather your information**

- List the information and documents needed to complete the form
- Aim for 5 bullets max, and consider separate lists for required and optional info
- If a form requires several different types of supporting documents, or different supporting documents depending on the user story, link to the static "How to apply" page for this information
- If the form requires especially private or sensitive information (like detailed financial or medical information), consider adding an additional info component with this header: "Why we need this information"

Example intros to bulleted lists of information and documents:

- Here's what you'll need to [apply/file your claim/submit your request]:
- We may also ask you for this information:
- You'll need to submit copies of these documents:

**3. Start your application**

- Use this exact text under the header: "We’ll take you through each step of the process. It should take about [estimated time burden] minutes."
- Include an additional info component at the end of this section with the header "What happens after you apply." Use this component to explain how we'll contact them with our decision and provide an estimated time to get a decision, if available.
- **Variations:** You can vary this H3 and other content in this section if the form is not called an "application." For example, H3 could be "Start your claim" or "Start your request."

Example:

> What happens after you apply [additional info component header]
> We process health care applications within about a week. We’ll send you a letter in the mail with our decision.

## What to know section (for non-applications)

- Use the H2 "What to know before you fill out this form"
- Use a short bulleted list (2 to 5 bullets) to explain the most important things people need to know related to the form, like who can submit this form, when submitting this form is unnecessary, or time limits to be aware of
- If you need an additional list with more information about this form, you can add a second bulleted list in this section, or add another H2 section for that information

## Sign-in widget, prefill alert, or "continue saved form" alert

Dynamically display one of these options. Sign-in widgets and prefill alerts should appear directly under the process list or "what to know" section. The "continue saved form" alert should appear above the process list or "what to know" section, because the person has already gotten that information when they started the form in a past session.
**Note:** The sign-in and prefill variations assume that the form prefills information for people who are signed in to VA.gov.

### If the person is already signed in

**If the person has no saved forms,** use the standard [prefill alert](https://design.va.gov/components/form/prefill) component.

**If the person has saved forms,** use the "Continue your form" alert.

> [H2] You have a form in progress
> You last saved your [Full Name of VA Form (VA Form ##)] on [date and time]. You can continue filling out this form with your saved information until [expiration date]. If you don't submit your form by that date, you'll need to start over.

> [button] Continue your form

> [text link] Start a new form

### If the person is not signed in yet

Choose the correct sign-in widget for your form.

**Note:** The [alert component page]({{ site.baseurl }}/components/alert) has examples of sign-in widget alerts, but we're currently updating our guidance for sign-in and verification widgets in online forms. Check back here for updates, and in the meantime reach out to the Sitewide CAIA team in our sitewide-content-accessibility-ia slack channel for support.

## OMB and Need help sections

### OMB information

[OMB information]({{ site.baseurl }}/components/omb-info) is a component that appears at the bottom of the page. The information to fill the component is taken from the paper form (or provided by a VA partner).

### Need help

The [Need help component]({{ site.baseurl }}/components/form/need-help) is a footer that appears on the bottom of every page of the form. This content lets people know how to get additional help with the form or the benefits. 

{% include component-example.html alt="An example of a need help footer for forms pages." file="/images/templates/forms/introduction/need-help.png" caption="An example of a Need help component used on all forms pages." class="x2" %}

## Examples (application)

### Unauthenticated

{% include component-example.html alt="An example of an introduction page for unauthenticated users." file="/images/templates/forms/introduction/template-app-unauth.png" caption="Anatomy of the Introduction page for unauthenticated users." class="x2" %}

The introduction form page for unauthenticated users consists of:

1. [H1 Plain language title of benefit](#title)
2. [VA Paper form title](#va-paper-form-title)
3. [Save work in-progress alert](#save-work-in-progress-alert)
4. [Process list](#process-list)
5. [Sign-in](#sign-in)
6. [OMB Information](#omb-information)
7. [Need help](#need-help)

### Authenticated

{% include component-example.html alt="An example of an introduction page for unauthenticated users." file="/images/templates/forms/introduction/template-app-auth.png" caption="Anatomy of the Introduction page for authenticated users." class="x2" %}

The introduction form page for authenticated users consists of:

1. [H1 Plain language title of benefit](#title)
2. [VA Paper form title](#va-paper-form-title)
3. [Prefill alert](#prefill-alert)
4. [Start form link](#start-form-link)
5. [Process list](#process-list)
6. [Start form link](#start-form-link)
7. [OMB Information](#omb-information)
8. [Need help](#need-help)

### Instances of this template in production

* [https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
* [https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction)
* [https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction](https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction)
* [https://www.va.gov/pension/application/527EZ/introduction](https://www.va.gov/pension/application/527EZ/introduction)
* [https://www.va.gov/health-care/apply/application/introduction](https://www.va.gov/health-care/apply/application/introduction)

## Examples (non-application)

### Unauthenticated

{% include component-example.html alt="An example of a non-application introduction page for unauthenticated users." file="/images/templates/forms/introduction/template-non-app-unauth.png" caption="Layout of the non-application introduction page for unauthenticated users." class="x2" %}

### Authenticated

{% include component-example.html alt="An example of a non-application introduction page for authenticated users." file="/images/templates/forms/introduction/template-non-app-auth.png" caption="Example of the non-application introduction page for authenticated users." class="x2" %}

### Instances of this template in production

* [Authorize the release of non-VA medical information to VA (VA Form 21-4142)](https://www.va.gov/supporting-forms-for-claims/release-information-to-va-form-21-4142/introduction)
* [Submit a lay witness statement to support a VA claim (VA Form 21-10210)](https://www.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210/introduction)
* [Request to be a substitute claimant for a deceased claimant - VA Form 21P-0847](https://www.va.gov/supporting-forms-for-claims/substitute-claimant-form-21P-0847/introduction)

