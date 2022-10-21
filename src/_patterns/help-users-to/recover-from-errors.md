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

- When a user experiences a critical or recoverable error while interacting with forms, apps, and other content on VA.gov.

## Examples

### Sign-in and identify verification

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
- Submission failure, must start over, etc.

## How to design and build

### Anatomy or layout details

#### Placement on page

**Alert**

**Background alert**

#### Next steps

Some errors, such as sign-in errors, may call for content in addition to the Alert component to help a user recover from their error. Chunking this content helps break down complex processes into discrete, easy-to-follow steps. Use headers and bulleted text below the Alert to communicate next steps to a user after a critical error has occcurred. 

[include image]

### How this pattern works

- Use the default Error alert when there is a problem (such as a sign in failure) or something destructive is about to occur.
- Use the default Warning alert to communicate system-wide issues.
- Use the background-only alert variation for immediate feedback, such as in single-page applications or dynamic Javascript driven forms.
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
