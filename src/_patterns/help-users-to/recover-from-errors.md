---
layout: pattern
title: Recover from errors
permalink: /patterns/help-users-to/recover-from-errors
redirect_from:
  - /patterns/messaging-error-messages
aka: Error messages
sub-section: help-users-to
intro-text: "This pattern shows how to present actionable content to help users recover from errors."
status: use-deployed
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Accessibility considerations
  - anchor: Content considerations
  - anchor: Additional guidance
---

## Usage

### When to use this pattern

- **Critical errors.** Critical errors occur when a user can't complete a task, such as signing in, and may require calling Help Desk in order to resolve. A critical error may be the result of user error or system/network outages.
- **Recoverable errors.** Recoverable errors can be resolved by a user completing required information or correcting a validation error.

## Examples

### Sign-in

- Sign-in error

### System

- System maintenance and downtime

### Access and authorization

- Can't access app, system, etc.
- User data not found or incomplete
- Eligibility requirements not met

### Feedback

- Inline field validation
- Missing required data
- Save and save-in-progress errors
- Form submission failure

## How to design and build

### Anatomy or layout details

#### Alerts

Use [Warning](https://design.va.gov/components/alert#warning-alert) and [Error](https://design.va.gov/components/alert#error-alert) Alert variations to help a user recognize an issue has occurred or is about to occur. Alerts appear at the top of the page, below the H1 and intro text, or co-located near the content they describe, and contain the following building blocks:

- Header
- Succinct description of what happened
- Optional CTA

Visit the [Alert component page](https://design.va.gov/components/alert#usage) for usage guidelines.

#### Background alerts

Background alerts are triggered by a user-initiated action and contain the following elements:

- Succinct description of what happened
- Optional CTA

#### Next steps

Alert and Background alert content should be brief. Some errors may not be resolved through initial feedback to user (ie, "Try again later"). In these cases, next steps content may be necessary. Whenever this content is more than a couple of sentences in length, use headers and bulleted text to chunk out the steps.

<img src="{{site.baseurl}}/images/sign-in_error.png" alt="sign-in error and next steps" style="max-width: 376px">

### How this pattern works

- Use the default Error alert when there is a problem (such as a sign in failure).
- Use the default Warning alert to communicate system-wide issues.
- Use the Background alert variation for immediate feedback, such as in single-page applications or dynamic Javascript driven forms.
- Use inline error messaging when an issue has occurred within a form field. In all cases, only show error validation messages or stylings after a user has interacted with a particular field. 

### Components used in this pattern

#### Alert

#### Background alert

#### Form field error states

## Content considerations

## Accessibility considerations

### Screen reader users

## Additional guidance

- Error messages (Content style guide)
