---
layout: component
title: Telephone Input
status: use-with-caution-candidate
figma-link: https://www.figma.com/design/fsqR9TGOL2FhNqJ3Eoi4Ag/va-input-telephone-Add-Design?node-id=29018-58507
intro-text: "Use the telephone input component to help users enter a telephone number" 
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
web-component: va-input-telephone
---

## Examples
### Default
{% include storybook-preview.html story="components-va-input-telephone--default" link_text="va-input-telephone" %}

### Mobile
{% include storybook-preview.html  width="320px" height="230px" story="components-va-input-telephone--default" link_text="va-input-telephone" %}

## Usage

### When to use telephone input
Use this pattern if you need to collect the user’s phone number. Only ask for the phone number if you need it. This pattern is designed to support U.S. and International phone numbers and their specific formats. You may place multiple telephone input components on a page if you need to collect multiple numbers. Each label should be unique.

Users should be allowed to enter telephone numbers in whatever format is familiar to them. You should allow for additional spaces, hyphens, brackets and dashes, and be able to accommodate country and area codes.

### When to consider something else
Do not use this component if you do not need to collect a telephone number. 

### How this component works

- The component consists of a combo box for the country dialing code and a text input for the phone number. For those components please check the usability guidance for combo boxes and text inputs.
- For the country combo box, provide the user a flag icon, unabbreviated country names, and the country code to select from. Example: [flag icon] United States of America +1
- The component supports 200+ international dialing codes 
- The countries are displayed in alphabetical order, with the United States of America being listed as the default option.

* **Header** The header must be understandable and short. The header should describe the type of phone number you are collecting, options may include Home phone number, Mobile phone number, or Work phone number. We try to avoid ["Primary" and "Secondary"](https://design.va.gov/patterns/ask-users-for/phone-numbers#content-considerations) to create more plain language labels.

* **The selected option** The United States is preselected for users as 99% of addresses are US based at this time.

* **The list of options** The country list comes from the [libphonenumber-js library](https://www.npmjs.com/package/libphonenumber-js?activeTab=readme) the component is using and it is based on the [officially assigned ISO alpha-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements). This list is sorted alphabetically with the United States listed as the first choice.



### Validation
By default the telephone input component has the following validation:
- Cannot have blank values
- The phone number 'sequence' must match the valid pattern for the country code. For example `Enter a United States of America phone number in a valid format, for example, [(xxx) xxx-xxxx]`
- We use the libphonenumber library to validate phone numbers.



{% include component-docs.html component_name=page.web-component %}


## Content considerations

## Accessibility considerations

* **Keyboard Navigation:** Users can navigate to the combo box via the Tab key. Use Arrow keys to navigate through the country dropdown options. Pressing Enter selects a country, and focus moves back to the combo box field. Users then navigate to the text input via the tab key to enter a phone number.
* **Focus Indicator:** A clear visual outline is shown when the input field or dropdown has focus.
* **Screen Readers:** Announce the input field as "Phone Number Input" with the current selected country (e.g., "United States flag"). For error states, screen readers announce the error message when it appears.
* **Alt Text for Flags:** Because the flags in the combo box serve a decorative purpose, the alt text is undefined.
* **Error Prevention and Feedback:** Real-time validation provides clear feedback when input is invalid. This helps prevent submission until a valid phone number is entered.


## Related
* [Combo box]({{ site.baseurl }}/components/form/combo-box)
* [Text input]({{ site.baseurl }}/components/form/text-input)

{% include _component-checklist.html component_name=page.web-component %}
