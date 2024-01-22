---
layout: component
permalink: /components/form/statement-of-truth
has-parent: /components/form/
title: Statement of truth
contributor: Jeana Clark, Nick Sprinkle
intro-text: "The Statement of truth allows users to certify that the information they have provided in form is correct and true to the best of their knowledge and belief."
research-title: Use this to match the label in the research repo. Only use if web-component does not match the label.
sketch-link: 
status: use-with-caution-available
uswds-v3: default
web-component: va-statement-of-truth
anchors:
  - anchor: Examples - v3
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples - v3

### Default

{% include storybook-preview.html height="500px" story="uswds-va-statement-of-truth--default" link_text=page.web-component %}

### With Input Error

{% include storybook-preview.html height="600px" story="uswds-va-statement-of-truth--with-input-error" link_text=page.web-component %}

### With Prefilling

{% include storybook-preview.html height="500px" story="uswds-va-statement-of-truth--with-prefilling" link_text=page.web-component %}

## Usage

### When to use Component name

* **To collect a signature.**: This component collects a digital signature from the user to certify their submission. This component is used in the [Ask users for a signature]({{ site.baseurl }}/patterns/ask-users-for/signature) pattern.

### How this component works

The component works by asking the user to populate the text-input field with their name. That name must match the name entered earlier into the form on a previous step. If the name does not match, an error message is returned.

### Behavior

* **When using this pattern, do not add the privacy policy checkbox at the end of the form.** The user does not need to check another checkbox for privacy policy.

### Placement

* **Place the component underneath the accordions on the review page.** Do not hide this component inside an accordion.

### Instances of this component in production

* [Application for Family Caregiver Benefits (VA Form 10-10CG)](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
* [Submit a lay or witness statement to support a VA claim - Lay/Witness Statement (VA Form 21-10210)](https://www.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210/introduction)
* [Request personal records - Freedom of Information Act (FOIA) or Privacy Act (PA) Request (VA Form 20-10206)](https://www.va.gov/records/request-personal-records-form-20-10206/introduction)

{% include component-docs.html component_name=page.web-component %}

## Content considerations

### Error message templates 

**When a user doesn’t enter the name they entered previously in the form**

Your signature must match your first and last name as previously entered.

**When a user doesn’t check the checkbox for certification**

Must certify by checking box

{% include _component-checklist.html component_name=page.web-component %}