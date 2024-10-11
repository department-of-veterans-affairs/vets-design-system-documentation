---
layout: pattern
permalink: /patterns/help-users-to/sign-in
sub-section: help-users-to
title: Sign-in
intro-text: "TFollow this pattern to help users sign-in to access VA online services."
status: use-with-caution-candidate
research-title: Help users to sign-in
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

When people must sign in or have the option to sign in to VA.gov or another VA online service.

### When to consider something else

If your product fits one of these descriptions, you may need to adjust the standard pattern for your situation:

* A product that either requires or allows sign-in, but accepts unverified accounts
* An online form that allows sign-in but does not support prefill
* An online form that allows sign-in and offers a different reason to sign in—like generating an automatic Intent to File (ITF)
* A health tool that requires registration with My HealtheVet (currently only applies to messages, medications, and medical records tools)

Work with the Office of the Chief Technology Officer's content/information architecture/accessibility team (CAIA) and identity teams to adjust the pattern for your product.

## How to design and build

### How this pattern works
This pattern works differently depending on the product and the account type a person uses to sign in.

**To design and build, follow these steps:**

1. Choose 1 of the 2 blue sign-in alert variations. If a person signs in with a verified account, they should only encounter an initial sign-in alert.
2. Implement both of the yellow verification alerts. If a person signs in with an unverified account, they should encounter 1 of the 2 variations. One is for unverified **Login.gov** and **ID.me** accounts, and one is for unverified **My HealtheVet** accounts.
  **Note:** This pattern is currently tailored to products that require verified (LOA3 or IAL2) accounts. If your product accepts unverified (LOA1 or IAL1) accounts, you'll need to adjust the content in the blue sign-in alert. And you won't need to implement the yellow verification alerts. Work with CAIA and the identity team to adjust for your situation.


**All teams should take these steps when using this pattern:**

* Ask the identity team to review your pull request, so they can confirm you're implementing the pattern correctly on the back end.
* Work with CAIA for a content review to confirm the standard alerts make sense for your product, or adjust content in the alerts if needed.
* **If your product has /my-health in its URL**, work with the identity and cartography teams to identify the correct sign-in pattern for your product. You may need an additional registration step on the My HealtheVet national portal, and you may need to place your form or tool behind a /my-health route guard.

**Components used in this pattern**

* [Alert - sign-in]({{ site.baseurl}}/components/alert/alert-sign-in)

## Content considerations

* Don't change content in these alerts, unless you've worked with CAIA on a tailored version.
* In most cases, the alerts in this pattern are the only sign-in-related content you'll need in your product. If you have other content related to sign-in, follow the style guide section for this topic. If you have questions, work with CAIA.
  [Go to sign-in and identity verification in the content style guide](https://design.va.gov/content-style-guide/specific-topics-and-programs/sign-in-and-identity-verification)