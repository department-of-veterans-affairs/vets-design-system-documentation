---
layout: pattern
permalink: /patterns/ask-users-for/addresses
sub-section: ask-users-for
title: Addresses
intro-text: "Follow this pattern to ask a user for an address."
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/addressPattern.jsx
example-link: https://staging.va.gov/mock-form-patterns/mailing-address
figma-link: https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2987%3A36363&mode=design&t=93yXuwTXsWwWopry-1
github-title: pattern-addresses
research-title: Ask users for addresses
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
---

## Usage

### When to use this pattern

* **Asking for an address.** For example, the address for a military base, home, or mailing address.

## Examples

### Mailing address

{% include component-example.html alt="An example of a mailing address form." file="/images/patterns/ask-users-for/addresses/mailing-address.png" caption="Example of a form collecting a mailing address." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

### Mailing address - Military base

{% include component-example.html alt="An example of a mailing address form that includes the option for a military base." file="/images/patterns/ask-users-for/addresses/military-base-address.png" caption="Example of a form collecting a mailing address on a military base." width="50%" %}

<a class="vads-c-action-link--blue" href="{{ page.example-link }}">
  View an example
</a>

### Address confirmation

{% include component-example.html alt="An Alert in a form flow that warns the user that the address they entered could not be found in U.S. Postal Service data." file="/images/patterns/ask-users-for/addresses/edit-mailing-address-confirmation.png" caption="Example of an alert warning a user that the address they entered does not match U.S. Postal service data and providing a way for them to correct their address or use the corrected address from the Postal service." width="50%" %}

## How to design and build

### Layout details

Here is the content structure for asking a user for an address:

* Header - Mailing or Home Address
* Relevant information regarding this form and the user’s address (if applicable)
* Checkbox for military address (if applicable)
* Additional info component (if applicable)
* Country select box
* Street address text input
* Street address line 2 text input
* Street address line 3 text input (if applicable)
* City text input
* State/Province/Region select box
* Postal code text input
* Radio button component for mailing address same as home address (if applicable; this is on mailing address page only) 

### How this pattern works

#### Single address details

* **If required, include a checkbox for United States military base address.** Under the additional information component, there should be an explanation:

> The United States is automatically chosen as your country if you live on a military base outside of the country.

* **If asking for only one address on a form, be clear which address (mailing or home) you’re asking for.** We recommend asking for a mailing address if you need to only ask for one address.
* **Street address Line 3 can be omitted.** Sometimes partner databases do not support a third line of address.

#### Multiple addresses: Mailing and Home addresses details

Follow this guidance when asking for both mailing and home addresses. In some forms, we ask for both addresses because some veterans live in different homes depending on the time of year.

* **The mailing address always comes before home address.** We ask for a mailing address before home address because the majority of VA's correspondence is over mail.
* **On the mailing address form, ask users if the home address is the same as the mailing address.** If the user chooses "Yes", they can skip the home address form.
* **Indicate to users whether an update in this form will update their VA.gov profile.**  If an address addition or change will **not** update the user's VA.gov profile then use the text "*Any updates you make here to your address will only apply to this application.*" Refer to the [Help users to know how their information is updated pattern]({{ site.baseurl }}/patterns/help-users-to/know-how-their-information-is-updated) for information on how to communicate that an update will be reflected in their profile.

### Address confirmation details

* **Check addresses against USPS data.** Confirm the user's address against U.S. Postal Service data and warn the user with a [warning Alert]({{ site.baseurl }}/components/alert#warning-alert) when the address they entered is potentially incorrect.
* **Provide a way to edit or use the potentially incorrect address.** Provide a link to edit the address so that a user can correct any potential errors. Also provide a way for the user to override the address check and continue with the address they provided.

### Prefill information details

* **Inform users when prefilling information from VA.gov profile.** When information is pre-populated into a form we notify users using the [Prefill component]({{ site.baseurl }}/components/form/prefill)

### Components used in this pattern

* [Checkbox]({{ site.baseurl }}/components/form/checkbox)
* [Prefill]({{ site.baseurl }}/components/form/prefill), when profile information is pre-populated into an address.
* [Select]({{ site.baseurl }}/components/form/select)
* [Text input]({{ site.baseurl }}/components/form/text-input)

### Page templates available for this pattern

Use the [VADS templates (Patterns & Forms) for Addresses in Figma]({{ page.figma-link }}).

## Code usage

[addressPattern is a web-component pattern available in the Forms library]({{ page.code-link }}).

## Content considerations

* If you need to display an address after it has been collected, then [follow content style guidelines on addresses](/content-style-guide/dates-and-numbers#addresses).

### Labels, error messages, and hint text

{% include _field-labels.html labels=site.data.content.patterns.ask-users-for.addresses %}
