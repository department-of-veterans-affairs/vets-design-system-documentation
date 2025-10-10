---
layout: component
permalink: /components/form/telephone-input
has-parent: /components/form/
title: Telephone Input
intro-text: "Use the telephone input component to help users enter a telephone number."
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=31366-83
web-component: va-telephone-input
web: true
mobile-app: false
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

## Examples
### Default
{% include storybook-preview.html story="components-va-telephone-input--default" link_text="va-telephone-input" %}

### Mobile
{% include storybook-preview.html  width="320px" height="230px" story="components-va-telephone-input--default" link_text="va-telephone-input" %}

## Usage

Only ask for a phone number if you need it.

### When to use the telephone input
* **Collect domestic United States and international phone numbers.** You can place more than one telephone input component on a page if you need to collect multiple numbers. Make each label unique.

* **Let users enter telephone numbers in any format familiar to them.** Accept extra spaces, hyphens, brackets, and dashes. Allow country and area codes.


### When to consider something else
* Don't use this component if you don't need to collect a telephone number.

### How this component works

* **Label:** The label should be clear and concise. It should describe the type of phone number you're collecting, such as Home phone number, Mobile phone number, or Work phone number. Don't use labels like ["Primary" and "Secondary"](https://design.va.gov/patterns/ask-users-for/phone-numbers#content-considerations) to keep language plain.

* **Phone number:** The component has a combo box for the country dialing code and a text input for the phone number. For these, check the usability guidance for [combo boxes]({{ site.baseurl }}/components/form/combo-box) and [text inputs]({{ site.baseurl }}/components/form/text-input).
  * For the country combo box, show a flag icon, full country names, and the country code. Example: [flag icon] United States of America +1.
  * Countries appear in alphabetical order, with the United States of America as the default option.
  * The country list of 200+ countries comes from the [libphonenumber-js library](https://www.npmjs.com/package/libphonenumber-js?activeTab=readme), which uses [official ISO alpha-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements). The list is sorted alphabetically, with the United States first.
  * The United States is preselected because 99% of addresses are US-based.

### Validation
By default, the telephone input component has these validation rules:
- Values can't be blank.
- The phone number must match the valid pattern for the selected country code. For example: `Enter a United States of America phone number in a valid format, for example, (xxx) xxx-xxxx`.
- The libphonenumber library validates phone numbers.

{% include component-docs.html component_name=page.web-component %}

### Event payload
Whenever the component is modified it emits a `vaContact` event that includes the following properties:
* `contact`: the national phone number the user entered, e.g. `2345678910`
* `countryCode`: the two letter ISO country code for the country the user selected, e.g. `US`
* `callingCode`: the prefix for the country the user selected, e.g. `1`


## Content considerations
Content for both variations can be found in [Ask users for... Phone numbers pattern]({{ site.baseurl }}/patterns/ask-users-for/phone-numbers).

## Accessibility considerations

* **Keyboard navigation:** Users can tab to the combo box. Use the Arrow keys to move through the country dropdown options. Press Enter to select a country. Focus returns to the combo box field. Users can then tab to the text input to enter a phone number.
* **Focus indicator:** A clear outline appears when the input field or dropdown has focus.
* **Screen readers:** The combo box is announced as "Country code" with the current selected country (for example, "United States +1"). The phone number input is announced as a text input field. For error states, screen readers announce the error message when it appears.
* **Alt text for flags:** The flags in the combo box are decorative, so the alt text is undefined.
* **Error prevention and feedback:** Real-time validation gives clear feedback when input is invalid. This prevents submission until a valid phone number is entered.


## Related
* [Combo box]({{ site.baseurl }}/components/form/combo-box)
* [Text input]({{ site.baseurl }}/components/form/text-input)

{% include _component-checklist.html component_name=page.web-component %}
