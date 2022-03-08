---
layout: default
sub_section: telephone
title: Telephone
---

# Telephone
The `va-telephone` Web Component follows the guidelines set for <a href="https://design.va.gov/content-style-guide/dates-and-numbers#phone-numbers">phone numbers</a> and allows to easy usage inside of the component.

The props that are available are the following:
- contact 
    - This prop takes in a string of 3 or 10 digits representing the contact number and is required.
- extension	
    - This prop takes in an integer as a phone number extension and is optional.
- not-clickable
    - This prop is a boolean and is optional. When it is set to true the text will not be a hyperlink as it will be rendered as a span instead of a hyperlink.
- international
    - This prop is a boolean and is optional. When it is set to true it will prepend a +1 to the number indicating that number is to be used from outside the USA.

The events that are available are the following:
- component-library-analytics
    - This event is used to track usage of the component in Vets Website via Google Tag Manager and is emitted when clicking on an anchor link. **Note - This event is read only and cannot be customized**

## Default

{% include storybook-preview.html story=components-va-telephone--default" height="80px" %}

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