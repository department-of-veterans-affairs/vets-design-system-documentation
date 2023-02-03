---
layout: pattern
permalink: /templates/forms/introduction
has-parent: /templates/forms/
title: Introduction
status: use-deployed
intro-text: "The form introduction page gives users information about what they can expect before they submit an online application. This page also provides users with steps on how to apply."
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
---

## About

This page gives users step-by-step information on how to apply for a benefit. It also sets clear expectations on when they can expect a decision on their application. This page also gives users ways to get help, as well as important information about that specific form or benefit.

Users can navigate to a form’s introduction page either from within VA.gov or through an online search. Since users can navigate to this page from outside VA.gov, it's recommended that this page include some basic benefit eligibility information or a link back to the VA.gov benefit eligibility page.

## Example

{% include component-example.html alt="An example of an introduction page for unauthenticated users." file="/images/templates/forms/introduction/template-unauth.png" caption="Anatomy of the Introduction page for unauthenticated users." class="x2" %}

{% include component-example.html alt="An example of an introduction page for unauthenticated users." file="/images/templates/forms/introduction/template-auth.png" caption="Anatomy of the Introduction page for authenticated users." class="x2" %}

The form confirmation page consists of:

1. [H1 Plain language title of benefit](#h1)
2. [VA Paper form equivalency](#va-paper-form-equivalency)
3. Message 
  * Unauthenticated users: [Save work in-progress alert](#save-work-in-progress-alert)
  * Authenticated users: [Prefill notification](#prefill-notification)
4. [Start form link](#start-form-link)
5. [Process list](#process-list)
6. [Start form link](#start-form-link)
7. [OMB Information](#omb-information)
8. [Need help](#need-help)
9. [Optional components](#optional-components)

### Instances of this template in production

* https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction
* https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction
* https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction
* https://www.va.gov/pension/application/527EZ/introduction
* https://www.va.gov/health-care/apply/application/introduction

## Structure

### H1

The H1 plain language title of benefit makes it clear to the user the benefit they are applying for. For example: 

> File for [name of benefit] 

or 

> Apply for [name of benefit]

### VA Paper form equivalency

The VA paper form equivalency statement appears under this H1.

For example:

>  File for disability compensation</h1>
> Equal to VA Form 21-526EZ (Application for Disability Compensation and Related Compensation Benefits).

### Save work in progress alert

The Save work in progress in message uses the [Alert - Informational]({{ site.baseurl }}/components/alert#informational-alert) component and encourages users to sign-in in order to save their progress while completing a form.

The message content is captured in [engagement messages]({{ site.baseurl }}/content-style-guide/error-messages/engagement).

This alert for most online applications will give users the option to start the form without signing in. The exception is the Disability Compensation form where users must sign in in order to start that application.

{% include component-example.html alt="An example of save work in progress alert." file="/images/templates/forms/introduction/save-work-in-progress-alert.png" caption="An example of a save work in progress alert used in the Introduction page." class="x2" %}

### Start form link

The Start form link is an [action link]({{ site.baseurl }}/components/link/action) that navigates the user to the first main form page.

### Process list

[Process list]({{ site.baseurl }}/components/process-list), describes the steps the user should take to apply.

The headings start with action words and are short/concise. We've made these consistent across forms.

#### Prepare

This steps tells the user what they need to fill out the form (Social Security number, bank information, military history, spouse information, etc). This bullet can also include some basic eligibility information or a link back to the VA.gov benefit eligibility page.

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

### OMB information 

[OMB information]({{ site.baseurl }}/components/omb-info) is a component that appears at the bottom of the page. The information to fill the component is taken from the paper form (or provided by a VA stakeholder).

### Need help

The Need help component is a footer that appears on the bottom of every page of the form. This content lets users know how to get additional help with the form or the benefits. 

{% include component-example.html alt="An example of a need help footer for forms pages." file="/images/templates/forms/introduction/need-help.png" caption="An example of a Need help component used on all forms pages." class="x2" %}

