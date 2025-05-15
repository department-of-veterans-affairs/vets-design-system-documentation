---
layout: component
title: Text
intro-text: "Text is a mobile app typography component for headings, body copy, and display text."
research-title: Text (mobile)
figma-link: https://www.figma.com/design/rdLIEaC9rVwX70QbIGkMvG/VA-Mobile---Design-Tokens-Library?m=auto&node-id=2321-2925&t=IbOdMq31rx8WXOoc-1
status: use-best-practice
web-component: va-mobile__text
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
---

## Examples

### Body

{% include storybook-preview.html height="350px" story="text--body" link_text="va-mobile_text--body" is_mobile=true auto_resize=false %}

### Display

{% include storybook-preview.html height="190px" story="text--display" link_text="va-mobile_text--display" is_mobile=true auto_resize=false %}

### Heading

{% include storybook-preview.html height="100px" story="text--heading" link_text="va-mobile_text--heading" is_mobile=true auto_resize=false %}

## Usage

### When to use Text

* **To add content to a mobile application screen.**

### When to consider something else

* **Bulleted or numbered lists.** Use the Text list component (coming soon).
* **Smaller Navigation copy.** Apply the Navigation text style directly to a text box, such as the bottom tab bar.

### How this component works

* **Use composite typography tokens.** This component is built using the composite typography tokens. Designers and engineers are encouraged to use typography tokens to ensure a consistent look and feel throughout the app. Multiple typography tokens are combined to create composite tokens (aka text styles).
* **Minimum paragraph spacing meets WCAG guidelines.** Paragraph spacing is set to the minimum recommended values to align with accessibility guidelines ([WCAG SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)). While you can increase the amount of paragraph spacing, you should not decrease without consulting an accessibility specialist.

## Behavior

### Choosing between web variations

There are 9 variations of the Text component.

* Use a Heading variation (large, medium, small, x-small) for headings.
* Use a Body variation (large, medium, small, x-small) for body copy.
* Use the Display variation for larger display text.

## Code usage

<va-link-action
  href="https://design.va.gov/storybook/?path=/docs/va-mobile_text--docs"
  text="View code usage documentation in Storybook"
  type="secondary"
/>
