---
layout: component
title: Telephone
status: use-best-practice
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1296%3A9773&mode=design&t=nYOotVcwdpiMCL5C-1
intro-text: "The telephone component captures the many variations of phone numbers displayed on VA.gov." 
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
web-component: va-telephone
---

## Examples

### Default

{% include storybook-preview.html story="components-va-telephone--default" height="80px" %}

### Three Digit Number

{% include storybook-preview.html story="components-va-telephone--three-digit-number" height="80px" %}

### Extension

{% include storybook-preview.html story="components-va-telephone--extension" height="80px" %}

### Not Clickable

{% include storybook-preview.html story="components-va-telephone--not-clickable" height="80px" %}

### International

{% include storybook-preview.html story="components-va-telephone--international" height="80px" %}

### Aria Described By

{% include storybook-preview.html story="components-va-telephone--aria-described-by" height="80px" %}

### TTY

{% include storybook-preview.html story="components-va-telephone--tty" height="80px" %}

### SMS

{% include storybook-preview.html story="components-va-telephone--sms" height="80px" %}

### Vanity Number

{% include storybook-preview.html story="components-va-telephone--vanity-number" height="80px" %}

## Usage

### When to use Telephone

* When a phone number is to be shown on a page. The component can be configured to have selecting the number make a phone call, call a teletypewriter/teleprinter, or send an SMS text message.

### When to consider something else

* When the link text is not a phone number to be called or messaged.

### How this component works

* **Creates a clickable phone number link.** By default, phone numbers provided to this component are clickable with a link and accept a value of 3, 5, 6, or 10 digits.
* **Alter behavior using props.** Props can be added to provide phone numbers with an extension, make them non-clickable, and to include an international phone number indicator.
* **Do not use a country code for US-based audiences.** Use +1 only when the information is specifically addressing Veterans or people who are living outside the U.S. In other words, do not prepend a U.S. phone number with the U.S. country code unless the audience is living outside the U.S. in which case you may then use the international prop which will automatically prepend a +1.

### Behavior

* By default selecting the link will trigger a phone call, opening the default program on the computer or device for placing phone calls.

### Choosing between variations

* If the phone number should have an `extension`, be `non-clickable`, or represent an `international` number, additional props can be added to accommodate.
* For TTY numbers, pass the `tty` boolean prop to have appropriate indicators in the link text and the `aria-label`.
* For text messages, pass the `sms` boolean prop to have the link trigger a SMS text message instead of placing a phone call. This will open the default program on the computer or device for sending messages.

### Placement

* Phone numbers can appear within a sentence or on their own line.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

{% include content/phone-numbers.md %}

## Accessibility considerations

* By default an `aria-label` will be created based off of the context entered into the component and will be formatted as a combined phone number with parts within the label separated by periods, e.g. "800-555-1212" becomes "8 0 0. 5 5 5. 1 2 1 2"
* If the `non-clickable` prop is enabled `aria-hidden="true"` will be added to the span element containing the  number and a `sr-only` CSS class will be added to the span element displaying the number in the `aria-label` format as shown above.
