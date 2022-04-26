---
layout: component
title: Input message
github-title: va-input-message
intro-text: "Provides helpful, in-context information about an input, either before or immediately after a Veteran interacts with an input (e.g. on a form input that auto-saves)."
status: use-with-caution-candidate
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Research
---

Suggested by: Liz Lantz, VSA Authenticated Experience Team

## Examples

**Informational**

![image]({{site.baseurl}}/images/experimental-design/input-message-info.png)

**Success**

![image]({{site.baseurl}}/images/experimental-design/input-message-success.png)

**Warning**

![image]({{site.baseurl}}/images/experimental-design/input-message-warning.png)

**Error**

![image]({{site.baseurl}}/images/experimental-design/input-message-error.png)

### Mock-ups

- [Mock-up demonstrating an update to existing settings](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141106818/simulate/sitemap?mode=i). First fieldset is interactive.
- [Mock-up demonstrating use case of a Veteran who has never updated their settings](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/sitemap?mode=i).
  - All field sets are interactive
  - Last fieldset demonstrates error state

- [UXPin design specs](https://preview.uxpin.com/ed1067b8f73e8f3501bc476bb03bb4b46a261a39#/pages//simulate/no-panels)

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
- Use the [feedback icons]({{ site.baseurl }}/design/icons#feedback) from the design system.
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

- No research conducted as of 8/16/21.
- Internal usability study with colleagues who are also Veterans planned for late Aug/early Sept 2021.
- External study planned for notification settings post-MVP Oct/Nov 2021.
