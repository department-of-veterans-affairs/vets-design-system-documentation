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

* Instructions for the user around signing the certification
* Card
* [Statement of truth component]({{ site.baseurl }}/components/form/statement-of-truth)

### How this pattern works

- **Signature pattern does not exist in every form.** If your form needs a certification statement or statement of truth, we recommend using this pattern. 
- **When using this pattern, do not add the privacy policy checkbox at the end of the form.** The user does not need to check another checkbox for  privacy policy. 

### Implementation details

<va-alert
  close-btn-aria-label="Close notification"
  full-width="false"
  slim
  status="warning"
  uswds
  visible="true"
>
  <p class="vads-u-margin-y--0">
    <strong>Generating a PDF:</strong> When generating a PDF for submission, for example when using the <a href="https://developer.va.gov/explore/api/benefits-intake">Benefits Intake API</a>, the following rules must be adhered to.
  </p>
</va-alert>

#### Generating a PDF

This guide is for software engineers generating a PDF for submission to the <a href="https://developer.va.gov/explore/api/benefits-intake">Benefits Intake API</a>.

* **Veteran's name from Statement of truth is entered into the Signature field.** Enter the input from the Statement of truth text-input into the Requester's or Veteran's signature field on the PDF. If the form is not using the Statement of truth component yet, use the user's signed-in name. **NOTE:** All forms should implement the Statement of truth component.
* **Current date is entered into the Date Signed field.** Enter the current date into Date Signed or Date field usually found next to the Signature field on the paper form. Entering the current date without asking the user for it is appropriate.
* **Date &amp; timestamp and authentication level are added at the bottom right of all generated pages.** At the bottom right of each page the date and time in UTC as well as the authentication level of the submitter of the form must be indicated. This takes the [Date and timestamp watermark format](#date-and-timestamp-watermark-format).
* **Date and timestamp the form in the VA DATE STAMP box, when available.** If the paper form you are populating has a VA DATE STAMP box in the upper right-hand corner, this field must be populated with the date and time in UTC that the form was submitted. This takes the [Date and timestamp VA DATE STAMP box format](#date-and-timestamp-va-date-stamp-box-format). NOTE: Older versions of some forms may not have the VA DATE STAMP box.
* **All date and time stamps are in Coordinated Universal Time (UTC).** Use the UTC timezone when generating date and time stamps on forms as this is how form submission data is stored.
* **All date and time stamps must be the date the form was initially submitted.** Date the time stamps must be the date the form was initially submitted and not the date and time the PDF was generated. This is a requirement due to potential delays or submission issues. This ensures Veterans get the earliest possible date -- when they first hit submit.

#### Date and timestamp watermark format

##### Unauthenticated

> Signed electronically and submitted via VA.gov at 11:30 UTC 2023-12-13. Signee not signed in.

##### Identity Assurance Level 1 (IAL1)

> Signed electronically and submitted via VA.gov at 11:30 UTC 2023-12-13. Signee signed in but hasn’t verified their identity.

##### Identity Assurance Level 2 (IAL2)

> Signed electronically and submitted via VA.gov at 11:30 UTC 2023-12-13. Signee signed with an identity-verified account.

#### Date and timestamp VA DATE STAMP box format

> Application Submitted:<br />
> 11:30 UTC 2023-12-13

[Example PDFs](https://www.figma.com/file/Mcspa23rssXdDqwoWumuEV/Date-Authenticated-PDF-Stamp?type=design&node-id=1-25&mode=design&t=1tySoIe8RW7XGFMu-0) are available.

### Components used in this pattern

* [Statement of truth component]({{ site.baseurl }}/components/form/statement-of-truth)

### Page templates available for this pattern

* [VADS Templates](https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates---SANDBOX-USE-WITH-CAUTION?type=design&node-id=112%3A11074&mode=design&t=jGEZxdu9cs3idXUa-1) contains a page template for the Review page which contains this pattern.
