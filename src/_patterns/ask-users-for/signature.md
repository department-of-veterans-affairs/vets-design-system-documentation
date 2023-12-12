---
layout: pattern
permalink: /patterns/ask-users-for/signature
sub-section: ask-users-for
title: Signature
intro-text: "Use this pattern when you need a user to provide their signature as a statement of truth."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/components/FormSignature.jsx
sketch-link: https://www.sketch.com/s/c8df169f-5b02-4999-befb-34c7b3b62ba9/p/97D32F6F-65D9-4A85-8828-13501931A7EE/canvas
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Certification statement or statement of truth.** Some forms will require the user to certify their submission by signature. The VA has a [directive to use electronic signatures (PDF)](https://www.va.gov/vapubs/viewPublication.asp?Pub_ID=823&FType=2) and follows guidance from OMB on ["Modernizing Access to and Consent for Disclosure of Records Subject to the Privacy Act"](https://www.osec.doc.gov/opog/Privacy/memorandums/OMB_M-21-04.pdf) as well as the [Government Paperwork Elimination Act (GPEA)](https://www.cio.gov/handbook/it-laws/gpea/), [Electronic Transactions Act (UETA)](https://www.uniformlaws.org/committees/community-home?CommunityKey=2c04b76c-2b7d-4399-977e-d5876ba7e034) and [Electronic Signatures in Global and National Commerce Act (ESIGN)](https://www.govinfo.gov/content/pkg/PLAW-106publ229/pdf/PLAW-106publ229.pdf).

> Under laws such as the Government Paperwork Elimination Act (GPEA), 44 U.S.C. 3504 note, the Uniform Electronic Transactions Act (UETA), ... and the Electronic Signatures in Global and National Commerce Act (ESIGN), 15 U.S.C. 7001, et seq., an e-signature has the same legal weight as a handwritten signature and cannot be considered invalid simply due to being electronic. The laws establish criteria for valid e-signatures, along the following lines: Intent to sign, consent to do business electronically, association of the signature with the record, attribution to the person signing, and a record of the digital transactions. The United States practices an open technology approach, meaning there’s no law requiring use of a specific signing technology for an e-signature to be legally binding, as long as it meets the criteria. 

[Federal register Vol. 87, No. 60](https://www.govinfo.gov/content/pkg/FR-2022-03-29/pdf/2022-06548.pdf)

## Examples

{% include component-example.html alt="Example of the statement of truth signature pattern." file="/images/patterns/ask-users-for/signature/form-signature.png" caption="The Statement of truth component captures a digital signature from the user." class="x2" reverse=true %}

## How to design and build 

This pattern is used at the end of a form review page.

### Layout details

- Instructions for the user around signing the certification
- Card
- Heading: Veteran’s statement of truth
- Content (specific to form)
- Link to [privacy policy page](https://www.va.gov/privacy-policy/)
- Text input for signature
- Checkbox for certification

### How this pattern works

- **Signature pattern does not exist in every form.** If your form needs a certification statement or statement of truth, we recommend using this pattern. 
- **When using this pattern, do not add the privacy policy checkbox at the end of the form.** The user does not need to check another checkbox for  privacy policy. 