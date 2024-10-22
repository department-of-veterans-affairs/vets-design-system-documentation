---
layout: component
permalink: /components/alert/alert-sign-in
has-parent: /components/alert/
title: Alert - Sign-in
github-title: va-alert-sign-in
intro-text: An alert component with specific content focused on helping users complete the sign in process.
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

### Required sign-in (Verified)
{% include component-example.html alt="An example of a sign-in alert for all products that require sign-in with a verified account." file="/images/components/alert-sign-in/required-sign-in-verified.png" caption="An example of a sign-in alert for all products that require sign-in with a verified account" reverse=true %}

### Optional sign-in (Verified)
{% include component-example.html alt="An example of a sign-in alert for forms that support optional sign-in with a verified account." file="/images/components/alert-sign-in/verify-with-idme.png" caption="An example of a sign-in alert for forms that support optional sign-in with a verified account." reverse=true %}

### Verify with ID.me
{% include component-example.html alt="An example of a sign-in alert for unverified ID.me accounts" file="/images/components/alert-sign-in/verify-with-idme.png" caption="An example of a sign-in alert for unverified ID.me accounts" reverse=true %}

### Verify with Login.gov
{% include component-example.html alt="An example of a sign-in alert for unverified Login.gov accounts." file="/images/components/alert-sign-in/verify-with-logingov.png" caption="An example of a sign-in alert for unverified Login.gov accounts." reverse=true %}

### Sign-in with another account
{% include component-example.html alt="An example of a sign-in alert for unverified My HealtheVet accounts." file="/images/components/alert-sign-in/verify-with-logingov.png" caption="An example of a sign-in alert for unverified My HealtheVet accounts." reverse=true %}

## Usage

### When to use Alert - Sign-in

* **Static pages with entry points to online tools.** The sign-in alert appears on a static unauthenticated VA.gov page and serves as the entry point to the tool's authenticated experience. The Office of the Chief Technology Officer's content/information architecture/accessibility team (CAIA) team manages these pages in Drupal. Here's an example of a static page with a sign-in alert (note that alert is an older content variation). Work with CAIA to add the alert to the correct page.
* **Form intro pages.** The sign-in alert goes on the form intro page that the product team creates and manages. The URL for this page ends in /introduction. Here's example of a form intro page with a sign-in alert (note that alert is an older content variation).
  **Exception:** If your form is only accessible after signing in (meaning there is no unauthenticated state of the intro page), the sign-in alert must appear on the static unauthenticated page that serves as the entry point. Currently, this only applies to 2 forms in the /my-health section: the 1010EZR and the order form for CPAP and hearing aid supplies.

### Placement
* **For entry points to online tools**, work with CAIA to determine placement on the static page. Placement may vary depending on the page structure. Always place the alert directly under a header that makes it clear what the user is signing in to do (for example, "Check your claim status online").
* **On form intro pages**, place the alert directly after the process list or "what to know" section of the intro page. (Some forms have a process list and some have "what to know.")

## Behavior

### Selecting variations for the sign-in pattern in your product
**All products that require or allow sign in with verified accounts only must use 1 of these 2 sign-in variations:**

**Sign-in alert for all products that require sign-in with a verified account**
* Your product requires people to sign in, **and**
* Your product only accepts verified (LOA3 or IAL2) accounts

**Sign-in alert for forms that support optional sign-in with a verified account**

When these are true:
* Your product is a form that gives people the option to sign in, **and**
* Your form only accepts verified (LOA3 or IAL2) accounts, **and**
* Your form supports prefill and save-in-progress

**Verification alert for unverified Login.gov or ID.me accounts**

When these are true:
* Person is signed in with an unverified (LOA1 or IAL1) Login.gov or ID.me account, **and**
* Your product only accepts verified (LOA3 or IAL2) accounts

**Verification alert for unverified My HealtheVet accounts**

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

Work with the Office of the CAIA and identity teams to adjust the content in this component for your product.

## Accessibility considerations

{% include a11y/alerts.md %}

## Related

* [Alert]({{ site.baseurl}}/components/alert/alert)
* [Pattern - Help users to sign in]({{ site.baseurl}}/patterns/help-users-to/sign-in)

{% include _component-checklist.html component_name=page.web-component %}
