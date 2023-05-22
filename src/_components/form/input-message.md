---
layout: component
permalink: /components/form/input-message
has-parent: /components/form/
title: Input message
github-title: va-input-message
intro-text: "Provides helpful, in-context information about an input, either before or immediately after a Veteran interacts with an input (e.g. on a form input that auto-saves)."
status: use-with-caution-candidate
contributors: Liz Lantz (VSA Authenticated Experience Team)
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Research
  - anchor: Component checklist
---

## Examples

**Informational**

![image]({{site.baseurl}}/images/components/input-message/input-message-info.png)

**Success**

![image]({{site.baseurl}}/images/components/input-message/input-message-success.png)

**Warning**

![image]({{site.baseurl}}/images/components/input-message/input-message-warning.png)

**Error**

![image]({{site.baseurl}}/images/components/input-message/input-message-error.png)

### Mock-ups

- [Mock-up demonstrating an update to existing settings](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141106818/simulate/sitemap?mode=i). First fieldset is interactive.
- [Mock-up demonstrating use case of a Veteran who has never updated their settings](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/sitemap?mode=i).
  - All field sets are interactive
  - Last fieldset demonstrates error state

- [Design specs](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/9P4QlQn)

## Usage

### When to use this variation

This message pattern is a mobile friendly, in-line way to communicate information about inputs. It was developed to entice users to take an action on an optional input, and has 4 states:

- Success (green) communicates the successful update of information, via an API call
- Warning (yellow) draws attention to an input, usually before an API call is made.
- Error (red) communicates the failure of an update of information, via an API call
- Information (blue)  draws attention to an input, usually before an API call is made.

### When to consider something else

If you need to tell the Veteran they've missed a required field on an application, or they've entered data in the wrong format, use the [current error pattern]({{ site.baseurl }}/storybook/?path=/docs/components-radiobuttons--error) instead.

### How to use Input Messages

- Keep message content short.
- Use the [feedback icons]({{ site.baseurl }}/foundation/icons#feedback) from the design system.
- Use the success, warning, error states on forms that don't require the user to click a button to submit the form.

### Other input message styles

#### Error messages 

- When a user is filling out an online application, use the [current error pattern]({{ site.baseurl }}/storybook/?path=/docs/components-radiobuttons--error) when a user has 
  - missed a required field
  - entered data incorrectly

### Code usage

[Radio inputs for notification settings](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/profile/components/notification-settings/NotificationRadioButtons.jsx)

## Accessibility considerations

- Icon needs to have alternative text (use sr-only text or an aria-label) so screen readers have an equivalent understanding of the purpose/nature of the message.

- When the message changes after a user interacts with an input, use `aria-live="polite"` to announce the change.

## Research

- This component was evaluated as part of a [Feb 2023 usability study for VA.gov's notification settings feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/findings-summary.md#no-one-was-confused-by-the-lack-of-a-save-button).  The feature uses an auto-save functionality and relies on the input message pattern to communicate to users after they interact with an input. 
- Participants stated the feedback provided by this compontent made them feel confident that their changes had been saved.
> It’s notifying me that it’s been saved. I’m trusting that this is going to work and I don’t need to call. -P9

{% include _component-checklist.html component_name="va-input-message" %}
