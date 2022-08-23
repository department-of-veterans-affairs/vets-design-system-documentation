---
layout: pattern
permalink: /patterns/ask-users-for/signature
sub-section: ask-users-for
title: Signature
intro-text: "Use this pattern when you need a user to provide their signature as a statement of truth."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Certification statement or statement of truth.** Some forms will require the user to certify their submission by signature.

## Examples

![form signature pattern]({{site.baseurl}}/images/form-signature.png)

## How to design and build 

This patterns is used at the end of a form review page.

### Layout details

- Instructions for the user around signing the certification
- Card
- Heading: Veteran’s statement of truth
- Content (specific to form)
- Link to [privacy policy page](https://www.va.gov/privacy-policy/)
- Text input for signature
- Checkbox for certification

### How this pattern works

- **Place the pattern underneath the accordions on the review section.** Do not hide this component inside an accordion. 
- **Signature pattern does not exist in every form.** If your form needs a certification statement or statement of truth, we recommend using this pattern. 
- **When using this pattern, do not add the privacy policy checkbox at the end of the form.** The user does not need to check another checkbox for  privacy policy. 


## Content considerations

### Error message templates 

**When a user doesn’t enter the name they entered previously in the form**

Your signature must match your first and last name as previously entered.

**When a user doesn’t check the checkbox for certification**

Must certify by checking box

**Live application examples:**

[VA Form 10-10CG (Application for Family Caregiver Benefits)](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
