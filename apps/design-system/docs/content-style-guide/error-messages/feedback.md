---
title: Feedback messages
description: Guidelines for feedback messages that respond to user actions, especially for create, read, update, and delete operations.
sidebar_position: 5
---

# Feedback messages

Feedback messages respond to user actions, particularly for create, read, update, and delete (CRUD) operations.

## Success messages

### Form save in progress

**State:** Success

:::tip Example
**We've saved your information**

We've saved the information you've entered so far.
:::

### Form save on exit

**State:** Success

:::tip Example
**We've saved your in-progress application**

Your application ID number is [ID NUMBER]. You can continue your application at any time.
:::

### File upload

**State:** Success

:::tip Example
**Your file has been uploaded**

[FILENAME] was successfully uploaded.
:::

### Form submission

**State:** Success

:::tip Example
**We've received your application**

Thank you for submitting your application. We'll review your information and contact you if we need anything else.

Your confirmation number is [NUMBER].
:::

### Deletion

**State:** Success

:::tip Example
**We've deleted your file**

[FILENAME] has been removed.
:::

## Failure messages

### Form save failed

**State:** Error

:::danger Example
**Your form didn't save**

We're sorry. We couldn't save your form. Please try saving again.
:::

### General form error

**State:** Error

:::danger Example
**We need you to start over with this application**

We're sorry. Something went wrong when you tried to submit your application. You'll need to start over.
:::

### Submission failure (saveable forms)

**State:** Error

:::danger Example
**We couldn't submit your application**

We're sorry. Something went wrong when you tried to submit your application. Please save your application and try again.
:::

### Submission failure (non-saveable forms)

**State:** Error

:::danger Example
**We couldn't submit your application**

We're sorry. Something went wrong when you tried to submit your application. Please start over with this application.
:::

### File upload failure

**State:** Error

:::danger Example
**We couldn't upload your file**

We're sorry. Something went wrong and we couldn't upload your file. Please try again.
:::

### File download failure

**State:** Error

:::danger Example
**We couldn't download your file**

We're sorry. Something went wrong and we couldn't download your file. Please try again.
:::

### File creation failure

**State:** Error

:::danger Example
**We couldn't create your file**

We're sorry. Something went wrong and we couldn't create your file. Please try again.
:::

### File update failure

**State:** Error

:::danger Example
**We couldn't update your file**

We're sorry. Something went wrong and we couldn't update your file. Please try again.
:::

### File deletion failure

**State:** Error

:::danger Example
**We couldn't delete your file**

We're sorry. Something went wrong and we couldn't delete your file. Please try again.
:::

## Technical specifications

Each message should include:

| Element | Description |
|---------|-------------|
| **Message title** | Primary text that summarizes the status |
| **Message content** | Supporting text with additional context |
| **Actions** | Associated buttons or links for next steps |
| **Component type** | Usually an Alert box |
| **Alert state** | Success or Error |
| **Location** | Where the message appears on the page |

## Related guidance

For guidance on help desk contact information and next-step calls to action, see the [Help users to recover from errors](/docs/patterns/help-users-to/recover-from-errors) pattern.
