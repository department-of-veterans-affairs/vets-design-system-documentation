---
layout: component
permalink: /components/alert/alert-sign-in/
has-parent: /components/alert/
title: Alert - Sign-in
github-title: va-alert-sign-in
intro-text: An alert component with specific content focused on helping users complete the sign-in process.
figma-link: https://www.figma.com/design/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?node-id=5359-436
status: use-with-caution-candidate
web-component: va-alert-sign-in
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples
{% include content/sign-in-alert-examples.md %}

## Usage

### When to use Alert - Sign-in

* **Static pages with entry points to online tools.** The sign-in alert appears on a static unauthenticated VA.gov page and serves as the entry point to the tool's authenticated experience. The Office of the Chief Technology Officer's content/information architecture/accessibility team (CAIA) team manages these pages in Drupal. Work with CAIA to add the alert to the correct page. 
* **Form intro pages.** The sign-in alert goes on the form intro page that the product team creates and manages. The URL for this page ends in /introduction. 
  **Exception:** If your form is only accessible after signing in (meaning there is no unauthenticated state of the intro page), the sign-in alert must appear on the static unauthenticated page that serves as the entry point. Currently, this only applies to 2 forms in the /my-health section: the 1010EZR and the order form for CPAP and hearing aid supplies.

### Placement
* **For entry points to online tools**, work with CAIA to determine placement on the static page. Placement may vary depending on the page structure. Always place the alert directly under a header that makes it clear what the user is signing in to do (for example, "Check your claim status online").
* **On form intro pages**, place the alert directly after the process list or "what to know" section of the intro page. (Some forms have a process list and some have "what to know." [Refer to the form into page template for that guidance](https://design.va.gov/templates/forms/introduction).)

## Behavior
[Refer to the related sign-in pattern page for full guidance](https://design.va.gov/patterns/help-users-to/sign-in) 

### All products that only allow verified accounts must implement 1 of these 2 alert variations

#### Required sign-in (verified)

When these are true:
* Person is not signed in, **and**
* Your product requires people to sign in, **and**
* Your product only accepts verified (LOA3 or IAL2) accounts

#### Optional sign-in (verified)

When these are true:
* Person is not signed in, **and**
* Your product is a form, **and**
* Your product doesn't require sign-in, but if people choose to sign in they must use verified (LOA3 or IAL2) accounts, **and**
* Your form supports both prefill and save-in-progress

### All products that only allow verified accounts must implement all 3 of these alerts

#### Verify with ID.me

When these are true:
* Person is signed in with an unverified (LOA1 or IAL1) ID.me account, **and**
* Your product only accepts verified (LOA3 or IAL2) accounts

#### Verify with Login.gov

When these are true:
* Person is signed in with an unverified (LOA1 or IAL1) Login.gov account, **and**
* Your product only accepts verified (LOA3 or IAL2) accounts

#### Sign in with another account

When these are true:
* Person is signed in with an unverified (LOA1 or IAL1) My HealtheVet account, **and**
* Your product only accepts verified (LOA3 or IAL2) accounts

{% include component-docs.html component_name=page.web-component %}

## Content considerations
If your product fits one of these descriptions, you may need to adjust the standard sign-in alert component content for your situation:

* A product that either requires or allows sign-in, but accepts unverified accounts
* An online form that allows sign-in but does not support prefill
* An online form that allows sign-in and offers a different reason to sign in—like generating an automatic Intent to File (ITF)
* A health tool that requires registration with My HealtheVet (currently only applies to messages, medications, and medical records tools)

Work with the CAIA and identity teams to adjust the content in this component for your product.

## Accessibility considerations

{% include a11y/alerts.md %}

## Related

* [Alert]({{ site.baseurl}}/components/alert)
* [Pattern - Help users to sign in]({{ site.baseurl}}/patterns/help-users-to/sign-in)

{% include _component-checklist.html component_name=page.web-component %}
