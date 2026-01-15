---
title: Access messages
description: Guidelines for access messages that appear when users cannot access content or features.
sidebar_position: 4
---

# Access messages

Access messages appear when users attempt to access unavailable items due to deletion, lack of permissions, or system issues.

## System downtime

### Site-wide scheduled maintenance

**Component:** Alert box (Warning state)

:::tip Example
**Site maintenance**

We're working on VA.gov right now. We expect to finish our work by [DATE] at [TIME] ET.
:::

### Unexpected site unavailability

:::tip Example
**VA.gov isn't working right now**

We're sorry. Something went wrong on our end. Please check back soon.
:::

### Application or tool maintenance

:::tip Example
**[APPLICATION NAME] is down for maintenance**

We're making updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back later.
:::

### Partial page or application access

**Component:** Alert box (Warning state)

:::tip Example
**Some parts of this page may not be working**

We're sorry. Something went wrong on our end. Some parts of this page may not be working right now. Please try again later.
:::

### Component-level issues

Provide component-specific messaging with refresh or retry options.

### Automated task failures

:::tip Example
**We couldn't save your form**

We're sorry. We couldn't save your form. Please try again.
:::

## Network connection loss

### Page or application loading failures

:::tip Example
**We can't load this page right now**

Please check your internet connection and try again.
:::

### Form save failures during connection loss

:::tip Example
**We couldn't save your form**

Please check your internet connection. Then try saving your form again.
:::

### User-initiated task failures

Recommend retry actions and provide appropriate alert components.

## Authorization issues

### Records not found

:::tip Example
**We couldn't find any records for you**

We searched all available records and couldn't find any matching your information.

If you think this is an error, call us at 800-698-2411 (TTY: 711). We're here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
:::

### User ineligibility for benefits

:::tip Example
**You're not eligible for this benefit**

Our records show that you're not currently eligible for [BENEFIT NAME]. If you think this is an error, call us at 800-698-2411 (TTY: 711).
:::

### Non-enrollment in specific benefits

:::tip Example
**You're not enrolled in [BENEFIT NAME]**

To use this tool, you'll need to enroll in [BENEFIT NAME] first.

[Learn how to enroll]
:::

### Non-VA-patient status access restrictions

:::tip Example
**You're not currently registered as a VA patient**

To use this tool, you'll need to be registered as a VA patient. Call us at 800-698-2411 (TTY: 711) to learn more.
:::

## Empty state

When no data exists for a particular type:

:::tip Example
**We don't have any [DATA TYPE] for you in our system**

If you think this is an error, call us at 800-698-2411 (TTY: 711).
:::

## Design standards

- **Components:** Use Alert boxes (warning or error states) or plain text as appropriate
- **Placement:** Position below title, above page title, or replace affected components
- **Tone:** Be apologetic, clear, and action-oriented with CTAs when appropriate
