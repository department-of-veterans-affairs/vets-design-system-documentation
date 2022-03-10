---
layout: default
sub_section: telephone
title: Telephone
---

# Telephone

<div class="va-introtext" markdown="1">
The `va-telephone` component allows for a developer to create a link to a telephone number. By default, `va-telephone` components are clickable with a link and accept a value of 3 or 10 digits, however, props can be added to make provide them with an extension, make them non-clickable, and have an international phone number indicator.

The `va-telephone` component also follows the guidelines set for <a href="https://design.va.gov/content-style-guide/dates-and-numbers#phone-numbers">phone numbers</a>.
</div>

## Default

{% include storybook-preview.html story="components-va-telephone--default" height="80px" %}

## Three Digit Number

{% include storybook-preview.html story="components-va-telephone--three-digit-number" height="80px" %}

## Extension

{% include storybook-preview.html story="components-va-telephone--extension" height="80px" %}

## Not Clickable

{% include storybook-preview.html story="components-va-telephone--not-clickable" height="80px" %}

## International

{% include storybook-preview.html story="components-va-telephone--international" height="80px" %}

## Aria Described By

{% include storybook-preview.html story="components-va-telephone--aria-described-by" height="80px" %}

## Vanity Number

{% include storybook-preview.html story="components-va-telephone--vanity-number" height="80px" %}

## Usage

### When to use va-telephone

- When a phone number is to be shown on a page.

### When to consider something else

- The link text is not a phone number.

### How to use va-telephone

- Add a 3 or 10 digit phone number to the component to have it formatted correctly for usage in a page.
- If the phone number should have an `extension`, be `non-clickable`, or represent an `international` number, additional props can be added to accommodate.

### Technical Documentation on va-telephone

Props Available:
- contact 
    - This prop takes in a string of 3 or 10 digits representing the contact number and is required.
- extension	
    - This prop takes in an integer as a phone number extension and is optional.
- not-clickable
    - This prop is a boolean and is optional. When it is set to true the text will not be a hyperlink as it will be rendered as a span instead of a hyperlink.
- international
    - This prop is a boolean and is optional. When it is set to true it will prepend a +1 to the number indicating that number is to be used from outside the USA.

Events Available:
- component-library-analytics
    - This event is used to track usage of the component in Vets Website via Google Tag Manager and is emitted when clicking on an anchor link. **Note: This event is read only and cannot be customized**

## Accessibility considerations

- By default an `aria-label` will be created based off of the context entered into the component and will be formatted as a combined phone number parts within the label separated by periods, e.g. "800-555-1212" becomes "8 0 0. 5 5 5. 1 2 1 2"
- If the `non-clickable` prop is enabled `aria-hidden="true"` will be added to the span element containing the  number and a `sr-only` css class will be added to the span element displaying the number in the `aria-label` format as shown above. 