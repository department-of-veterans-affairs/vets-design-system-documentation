---
title: System messages
description: Guidelines for system messages that alert users to important system-related issues or status changes.
sidebar_position: 2
---

# System messages

System messages alert the user of important system-related issues or status. These messages are initiated by the system rather than user actions.

## Scheduled downtime notifications

### Advance notification

Use "Upcoming site maintenance" messaging that specifies the duration and affected capabilities.

:::tip Example
**Upcoming site maintenance**

We'll be doing some work on VA.gov on [DATE] between [TIME] and [TIME] ET. During this time, you won't be able to [AFFECTED ACTIONS].
:::

### 24-hour advance notice

Include specific start and end dates and times.

:::tip Example
**Upcoming site maintenance**

We'll be doing some work on VA.gov starting on [DATE] at [TIME] ET. We expect the maintenance to last until [DATE] at [TIME] ET. During this time, you won't be able to [AFFECTED ACTIONS].
:::

### During maintenance

Shift to "Site maintenance" messaging with reassurance.

:::tip Example
**Site maintenance**

We're working on VA.gov right now. If you have trouble using this site, check back later. We expect to finish our work by [DATE] at [TIME] ET.
:::

## Unscheduled downtime

### Site-wide issues

:::tip Example
**VA.gov isn't working right now**

We're sorry. Something went wrong on our end. Please check back soon.
:::

### In-app problems

:::tip Example
**[APPLICATION NAME] is down for maintenance**

We're making some updates to [APPLICATION NAME]. We're sorry it's not working right now. Please check back soon.
:::

### Partial page or application access

Use a warning alert when some parts of a page aren't working.

:::tip Example
**Some parts of this page may not be working**

We're sorry. Something went wrong on our end. Some parts of this page may not be working. Please try again later, or check back soon.
:::

## Data update messages

### Claim status updates

Alert users when their claim status has changed.

### Evidence requests

Notify users when VA needs additional documentation to process their claim.

### Prefill notifications

For authenticated users, let them know their information has been pre-populated.

:::tip Example
**We've prefilled some of your information**

We've prefilled some of your information from your account. If you need to make changes, you can edit the information.
:::

### Work-in-progress save reminders

For unauthenticated users, remind them to sign in to save their progress.

:::tip Example
**Sign in now to save time and save your work in progress**

If you're signed in to your VA.gov account, we can prefill some of your information. This can save you time. You'll also be able to save your work in progress for up to 60 days.
:::

## Components and placement

- Use Alert components, Maintenance Banners, and Modals with appropriate states (Informational, Warning)
- Place messages above affected components, within alerts on form introduction pages, or in site-wide banners as appropriate
