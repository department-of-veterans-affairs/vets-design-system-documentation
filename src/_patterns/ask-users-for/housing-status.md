---
layout: pattern
permalink: /patterns/ask-users-for/housing-status
sub-section: ask-users-for
title: Housing status
intro-text: Provides a way to ask Veterans about their current housing situation that allows them to answer questions accurately.
research-title: Use this to match the label in the research repo. 
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?node-id=8905-15414&t=zIXSM2l7K3qLfeQr-1
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Usage

### When to use this pattern

* **Asking users for their housing or living situation or status.** For example, when asking whether a user is facing housing instability or may not have a permanent mailing address.

### When not to use this pattern

* **When the API used by the form cannot accommodate the information.** This pattern can potentially gather additional information beyond address, such as point of contact, that must be stored in a system of record and thus must be handled by an API.

## Examples

{% include component-example.html alt="An example of asking users for their housing status in a mobile viewport." file="/images/patterns/ask-users-for/housing-status/housing-status-questions-mobile.png" caption="An example of asking users for housing status in a mobile viewport." class="x2" %}

### Examples in production

* [20-10207 Request priority processing for an existing claim](https://va.gov/supporting-forms-for-claims/request-priority-processing-form-20-10207)

### Other relevant examples

* A similar set of questions were used in Treasury's [Emergency Rental Assistance](https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/example-application-screens#risk-of-housing-instability) programs. Questions were co-created and reviewed by members of Treasury and HUD.

## How to design and build

### Anatomy

{% include component-example.html alt="An annotated example of asking users for their housing status." file="/images/patterns/ask-users-for/housing-status/housing-status-annotated.png" caption="An annotated example of asking users for housing status." %}

### How this pattern works

Using a list of questions or criteria has been found in some situations to be more effective than asking a yes/no question about homelessness. The series of criteria help users to self-identify and communicate that they are experiencing housing instability.

Answering in the affirmative to any of the first 5 options (seen in the examples above) sends the user to a conditional page that asks if the user has a mailing address:

{% include component-example.html alt="An example of asking users if they have a current mailing address." file="/images/patterns/ask-users-for/housing-status/current-mailing-address.png" caption="An example of asking users if they have a current mailing address." class="x2" %}

Answering in the affirmative to "I have another housing risk not listed here" sends the user to a page that collects other housing risks and then to the page asking the user for a mailing address.

{% include component-example.html alt="An example of asking users for other housing risks." file="/images/patterns/ask-users-for/housing-status/other-housing-risks.png" caption="An example of asking a user if they have other housing risks." class="x2" %}

Answering in the affirmative to "None of these situations apply to me" sends the user to the mailing address page which users our [address pattern]({{ site.baseurl }}/patterns/ask-users-for/addresses). They do not see the conditional page asking if they have a mailing address or not.

In addition, it may be appropriate to ask the user for a point of contact to assist us in contacting the person submitting the form.

{% include component-example.html alt="An example of asking the user for a point of contact." file="/images/patterns/ask-users-for/housing-status/point-of-contact.png" caption="An example of asking a user for a point of contact." class="x2" %}

### Components used in this pattern

* [Additional info]({{ site.baseurl }}/components/additional-info)
* [Checkbox]({{ site.baseurl }}/components/form/checkbox)
* [Radio Button]({{ site.baseurl }}/components/form/radio-button)
