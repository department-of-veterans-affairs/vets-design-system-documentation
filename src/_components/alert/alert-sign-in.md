---
layout: component
permalink: /components/alert/alert-sign-in/
has-parent: /components/alert/
title: Alert - Sign-in
github-title: va-alert-sign-in
intro-text: An alert component focused on helping users complete the sign-in process.
figma-link: https://www.figma.com/design/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?node-id=5359-436
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
* **On form intro pages**, place the alert directly after the process list or "what to know" section of the intro page. (Some forms have a process list and some have "what to know." [Refer to the form intro page template for that guidance](https://design.va.gov/templates/forms/introduction).)

## Behavior
[Refer to the related sign-in pattern page for full guidance](https://design.va.gov/patterns/help-users-to/sign-in)

### Authentication level definitions

<h4 id="loa-levels">LOA levels</h4>

**LOA (Level of Assurance):** A measure of the strength of an authentication process defined by NIST. LOA refers to the level of confidence in a user's claimed identity.

* **LOA1** - Low-assurance level where self-asserted identity is acceptable with basic authentication
* **LOA3** - High-assurance level requiring verified identity and strong authentication

<h4 id="ial-levels">IAL levels</h4>

**IAL (Identity Assurance Level):** A category defined by NIST that indicates the strength of the identity proofing process.

* **IAL1** - Self-asserted identity with no verification required
* **IAL2** - Identity verified either remotely or in-person with appropriate documentation

### All products that only allow verified accounts must implement 1 of these 2 alert variations

#### Required sign-in (verified)

When these are true:

* Person is not signed in, **and**
* Your product requires people to sign in, **and**
* Your product only accepts verified ([LOA3](#loa-levels) or [IAL2](#ial-levels)) accounts

#### Optional sign-in (verified)

When these are true:

* Person is not signed in, **and**
* Your product is a form, **and**
* Your product doesn't require sign-in, but if people choose to sign in they must use verified ([LOA3](#loa-levels) or [IAL2](#ial-levels)) accounts, **and**
* Your form supports both prefill and save-in-progress

### All products that only allow verified accounts must implement all 3 of these alerts

#### Verify with ID.me

When these are true:

* Person is signed in with an unverified ([LOA1](#loa-levels) or [IAL1](#ial-levels)) ID.me account, **and**
* Your product only accepts verified ([LOA3](#loa-levels) or [IAL2](#ial-levels)) accounts

#### Verify with Login.gov

When these are true:

* Person is signed in with an unverified ([LOA1](#loa-levels) or [IAL1](#ial-levels)) Login.gov account, **and**
* Your product only accepts verified ([LOA3](#loa-levels) or [IAL2](#ial-levels)) accounts

#### Sign in with another account

This variation was used as we sunset MyHealtheVet credentials. However, a new version will be developed, if necessary, to handle the transition away from DS Logon credentials.

**NOTE:** DS Logon is to be sunset in September 2025.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

If your product fits one of these descriptions, you may need to adjust the standard sign-in alert component content for your situation:

* A product that either requires or allows sign-in, but accepts unverified accounts
* An online form that allows sign-in but does not support prefill
* An online form that allows sign-in and offers a different reason to sign in—like generating an automatic Intent to File (ITF)
* A health tool that requires registration with My HealtheVet (currently only applies to messages, medications, and medical records tools)

Work with the Content &amp; IA and Identity teams to adjust the content in this component for your product. Refer to the [Sign in and identity verification]({{ site.baseurl }}/content-style-guide/specific-topics-and-programs/sign-in-and-identity-verification) guidance for additional information on using consistent language around signing in to VA and verifying identity.

## Accessibility considerations

* **Do not assign an ARIA role.** This alert is a static alert that exists on the page when the page gets loaded and thus doesn’t need a role.
* **Use the appropriate branding images only.** See the [Login.gov brand assets](https://developers.login.gov/user-experience/sign-in-sign-out/#design-your-applications-sign-in-and-sign-out-buttons) for buttons and branding guidelines. No other images are appropriate for use in this component.

Any additional accessibility considerations should follow the parent [Alert]({{ site.baseurl }}/components/alert/#accessibility-considerations) component guidance.

## Related

* [Alert]({{ site.baseurl}}/components/alert)
* [Pattern - Help users to sign in]({{ site.baseurl}}/patterns/help-users-to/sign-in)

{% include _component-checklist.html component_name=page.web-component %}
