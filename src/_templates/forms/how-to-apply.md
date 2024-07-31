---
layout: pattern
permalink: /templates/forms/how-to-apply
has-parent: /templates/forms/
title: How to apply
status: use-deployed
intro-text: "A page that outlines eligibility requirements, provides details on how to apply, and what happens after an application is submitted."
sketch-link: https://www.sketch.com/s/c8df169f-5b02-4999-befb-34c7b3b62ba9/p/9D078D44-1887-4A5B-BCAB-1254CFA0A17C/canvas
anchors:
  - anchor: About
  - anchor: Example
  - anchor: Structure
---

## About

The How to apply page, aka landing page, provides details around eligibility for a benefit and gives details instructions on applying online as well as by other means (e.g. phone, mail, in person, VSO). This page is managed by the Content Management System.

## Example

{% include component-example.html alt="An example of a How to apply page for unauthenticated users." file="/images/templates/forms/how-to-apply/template-unauth.png" caption="Anatomy of the How to apply page for unauthenticated users." class="x2" %}

The How to apply page consists of:

1. [Page title and subtitle](#page-title-and-subtitle)
2. [How to prepare](#how-to-prepare)
3. [How do I apply?](#how-do-i-apply)
4. [What happens after I apply?](#what-happens-after-i-apply)
5. [How long does it take VA to make a decision?](#how-long-does-it-take-va-to-make-a-decision)
6. [More information](#more-information)
7. [Back-to-top component](#back-to-top-component)
8. [Ask users for feedback pattern](#ask-users-for-feedback-pattern)

### Instances of this template in production

* [How to apply for VA health care](https://www.va.gov/health-care/how-to-apply/)
* [How to apply for hte GI Bill and related benefits](https://www.va.gov/education/how-to-apply/)
* [How to apply for disability](https://www.va.gov/disability/how-to-file-claim/)

## Structure

### Page title and subtitle

The H1 plain language title is in the format:

> How to apply for [name of benefit] 

This is followed by a sub-title in the format:

> Find out how to apply for [name of benefit] as a [audience].

Examples of audience include:

* Veteran or service member
* Veteran, service member, or qualified family member

### How to prepare

This section tells the user what information they need to gather in order to fill out the form (Social Security number, bank information, military history, spouse information, DD214, etc). This section starts with a link to the Eligibility page for the benefit which details who is eligible to apply.

This section can be presented using the [Summary box]({{ site.baseurl }}/components/summary-box) component. Alternatively, it can be broken out into two content sections:

1. How do I prepare before starting my application?
2. What documents and information do I need to apply?

### How do I apply?

Details the options a user has to apply, including but not limited to:

* Online
* Phone
* Mail
* In person
* With support from a trained professional

Note: While some versions of this page use a primary button to navigate to the form Introduction page, the correct component to use is the [Link - Action]({{ site.baseurl }}/components/link/action).

### What happens after I apply?

Provides a link to a separate page that provides details on what happens after an application is submitted. May also link to signing the user in so that they may track their application.

### How long does it take VA to make a decision?

Uses a [Number highlight Card variation]({{ site.baseurl }}/components/card#number-highlight) to provide a typical time period for responding to an application. In addition, instructions on how to contact the VA should the time period expire are included.

### More information

More information can be provided using the [Accordion]({{ site.baseurl }}/components/accordion) component or the [Related or Major links]({{ site.baseurl }}/components/link/collection) link collection variations. 

### Back-to-top component

The [Back-to-top]({{ site.baseurl }}/components/back-to-top) component allows the user to quickly navigate back to the top of the page.

### Ask users for feedback pattern

Finally, at the bottom of the page the [Ask users for feedback]({{ site.baseurl }}/patterns/ask-users-for/feedback) pattern is employed.
