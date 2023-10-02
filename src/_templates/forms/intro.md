---
layout: pattern
permalink: /templates/forms/introduction
has-parent: /templates/forms/
title: Introduction
status: use-deployed
intro-text: "The form introduction page gives users information about what they can expect before they submit an online application. This page also provides users with steps on how to apply."
sketch-link: https://www.sketch.com/s/c8df169f-5b02-4999-befb-34c7b3b62ba9/p/A952E56D-1CFC-4545-A32C-11DDCFB7359C/canvas
anchors:
  - anchor: About
  - anchor: Example - Application
  - anchor: Structure - Application
  - anchor: Example - Non-Application
  - anchor: Structure - Non-Application
---

## About

The introduction page introduces the process that the user is about to embark on to apply to a benefit or service or to complete an ancillary form. This page sets clear expectations on the process and may provide details on when they can expect a decision on their application. This page also gives users ways to get help, as well as important information about that specific form or benefit.

Users can navigate to a form’s introduction page either from within VA.gov or through an online search. Since users can navigate to this page from outside VA.gov, it's recommended that this page include some basic benefit eligibility information or a link back to the VA.gov benefit eligibility page.

### Variations

There are 2 versions of the Introduction page:

1. **Application**: The application template is intended for introduction pages that start an application for a benefit or service.
2. **Non-application**: The non-application template is intended for introduction pages that start a standard form flow. In other words, an online form that is not for an application for a benefit or service. Typically these are for ancillary forms related to a benefit or service.

## Example - Application

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

## Structure - Application

### Title

The plain language title of a form makes it clear to the user the benefit they are applying for. The title is limited to 52 characters. For example: 

> File for [name of benefit] 

or 

> Apply for [name of benefit]

### VA Paper form title

The VA paper form title appears in a subtitle under the title in the following format:

> Full PDF form title (VA Form FormNumber)

For example:

> <h1>Authorize the release of non-VA medical information to VA</h1>
> <div class="schemaform-subtitle">Authorization to disclose information to the Department of Veterans Affairs (VA Forms 21-4142 and 21-4142a)</div>

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

### Process list

[Process list]({{ site.baseurl }}/components/process-list), describes the steps the user should take to apply.

The headings start with action words and are short/concise. We've made these consistent across forms.

#### Prepare

These steps tells the user what they need to fill out the form (Social Security number, bank information, military history, spouse information, etc). This bullet can also include some basic eligibility information or a link back to the VA.gov benefit eligibility page.

{% include component-example.html alt="An example of the Prepare step." file="/images/templates/forms/introduction/prepare-step-22-1990e.png" caption="An example of a Prepare step from the application to use transferred education benefits." class="x2" %}

Depending on the type of benefit, we sometimes include an [Alert - Informational]({{ site.baseurl }}/components/alert) with specific information about that benefit. 

This is an optional component and should only be used if there is important benefit or part of the application process to call out to the applicant.

{% include component-example.html alt="An example of a disability ratings alert." file="/images/templates/forms/introduction/disability-ratings-alert.png" caption="An example of an optional alert used in the Prepare step. This example is from the 21-526EZ form for disability compensation." class="x2" %}

#### Apply 

The is standard langauge we use across forms: 

> Complete this [benefits] form. 
> After submitting the form, you’ll get a confirmation message. You can print this page for your records.

#### VA review

The step tells applicants how much time it takes VA to review their application. The content under this heading depends on what type of benefit an applicant is applying for.

Some examples:

[Health care benefits form intro page](https://www.va.gov/health-care/apply/application/introduction) 

> We process health care claims within a week.

[Education forms intro page](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction) 

> We usually process claims within 30 days. We’ll let you know by mail if we need more information.

* [Disability compensation intro page](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction) 

> We process applications in the order we receive them. The amount of time it takes to process your claim depends on how many injuries or disabilities you claim and how long it takes us to gather evidence needed to decide your claim.

#### Decision

This step tells users when they'll be informed about the status of their application (if denied or approved) and the next steps.
It also sets the user’s expectation for how long it takes to receive a response.

### Sign-in

A [Button - Primary]({{ site.baseurl }}/components/button) that reads "Sign in to start your application" and opens a modal allowing a user to authenticate. The button is paired with a link which reads "Start your application without signing in" and allows the user to start the application process without authenticating.

### OMB information 

[OMB information]({{ site.baseurl }}/components/omb-info) is a component that appears at the bottom of the page. The information to fill the component is taken from the paper form (or provided by a VA stakeholder).

### Need help

The [Need help component]({{ site.baseurl }}/components/form/need-help) is a footer that appears on the bottom of every page of the form. This content lets users know how to get additional help with the form or the benefits. 

{% include component-example.html alt="An example of a need help footer for forms pages." file="/images/templates/forms/introduction/need-help.png" caption="An example of a Need help component used on all forms pages." class="x2" %}

## Example - Non-application

### Unauthenticated

{% include component-example.html alt="An example of a non-application introduction page for unauthenticated users." file="/images/templates/forms/introduction/template-non-app-unauth.png" caption="Layout of the non-application introduction page for unauthenticated users." class="x2" %}

The non-application introduction page for unauthenticated users consists of the same elements as the application intro page with some notable distinctions:

1. The [Sign-in to save work in-progress alert](#sign-in-to-save-work-in-progress-alert) appears towards the bottom of the page and is the only call-to-action to start the form. Note that there are two variations of this Alert: Pre-fill and no-pre-fill.
2. A [What to know before you fill out this form](#what-to-know-before-you-fill-out-this-form) section is added.

### Authenticated

{% include component-example.html alt="An example of a non-application introduction page for authenticated users." file="/images/templates/forms/introduction/template-non-app-auth.png" caption="Layout of the non-application introduction page for authenticated users." class="x2" %}

### Instances of this template in production

* [Authorize the release of non-VA medical information to VA (VA Form 21-4142)](https://www.va.gov/supporting-forms-for-claims/release-information-to-va-form-21-4142/introduction)
* [Submit a lay witness statement to support a VA claim (VA Form 21-10210)](https://www.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210/introduction)
* [Request to be a substitute claimant for a deceased claimant - VA Form 21P-0847](https://www.va.gov/supporting-forms-for-claims/substitute-claimant-form-21P-0847/introduction)


## Structure - Non-application

The structure of the non-application into template uses the same elements as the application version with the addition of on new section.

### Sign-in to save work in-progress alert

There are two variations of this alert:

1. [Pre-fill sign-in]({{ site.baseurl }}/components/alert#sign-in-to-start-your-application---pre-fill)
2. [No pre-fill sign-in]({{ site.baseurl }}/components/alert#sign-in-to-start-your-application---no-pre-fill)

### What to know before you fill out this form

* A 2-5 bulleted list of things people should know before filling out the form. This could include information such as when submitting a fom is unnecessary or if there are time limits to be aware of, etc.
* If an additional list with separate information is useful here, you may add a second h2.
