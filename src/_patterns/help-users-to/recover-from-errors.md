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

- When a user experiences a critical or recoverable error while interacting with a form, application, or other content on VA.gov.

## Examples

### Sign-in

- Can't sign in

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

Alerts can appear above or below the H1 and contain the following elements:

- Header
- Succinct description of what happened
- CTA

#### Background alert

Background alerts are usually triggered by a user-initiated action. They appear below the H1 and contain the following elements:

- Succinct description of what happened
- Optional CTA

#### Next steps

Some errors, such as sign-in errors, may call for content in addition to the Alert component to help a user recover from their error. Chunking this content helps break down complex processes into discrete, easy-to-follow steps. Use headers and bulleted text below the Alert to communicate next steps to a user after a critical error has occcurred. 

[include example image]

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
