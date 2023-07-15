---
layout: component
permalink: /components/form/privacy-agreement
redirect_from:
  - /components/privacy-agreement
has-parent: /components/form/
title: Privacy Agreement
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/a/l13oDA7
intro-text: "Used on the review step of a form flow to provide a link to the privacy policy content and provide a confirmation checkbox."
status: use-deployed
web-component: va-privacy-agreement
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html height="100px" story="components-va-privacy-agreement--default" link_text="va-privacy-agreement" %}

### With Error

{% include storybook-preview.html height="100px" story="components-va-privacy-agreement--with-error" link_text="va-privacy-agreement" %}

## Usage

### When to use Privacy Agreement

**For all forms that collect Personally Identifiable Information (PII).** As stated in the [VA Privacy Policy](https://www.va.gov/privacy-policy/):

>  The VA.gov web pages that collect personal information will have a hyperlink to the Limited Privacy Policy that applies to that particular web page.

This is a requirement of the Privacy Act of 1974.

### How this component works

This component is used on the [Review page]({{ site.baseurl }}/patterns/help-users-to/check-answers) of a form which is the last page in a [form flow]({{ site.baseurl }}/templates/forms/#the-structure-of-a-form).

### Behavior

* **Privacy Policy link.** When clicked, the link will open in a new browser tab. This behavior is identified by an icon with the arrow pointing up and screen reader text "opens in new tab".
* **Checkbox Toggle** After reviewing the privacy policy content in a new browser tab, the user can select the checkbox to confirm that they have read and accept the privacy policy.

### Placement

This component appears at the bottom of a form, above the link to "Finish this application later" which is directly above the [button pair]({{ site.baseurl }}/components/button/button-pair) for submitting the form.

### Instances of this component in production

{% include component-example.html alt="An example of this component in use on VA.gov." file="/images/components/privacy-agreement/10-10EZ-privacy-agreement.png" caption="An example of this component in use on the 10-10EZ form on VA.gov" %}


{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

**Privacy policy opens in new tab or window.** This component must detail to all users that the privacy policy link opens in a new window. This indication should be visible and auditory.

{% include _component-checklist.html component_name=page.web-component %}