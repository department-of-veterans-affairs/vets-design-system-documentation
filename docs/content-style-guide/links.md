---
title: Links
description: Guidelines for writing effective link text that tells users what action to take and where to go.
sidebar_position: 13
---

# Links

Links should tell our audience what action to take, where to go next, or what information to expect. Links connect Veterans with related information and help centralize content to reduce duplication.

## Link text guidelines

### Effective approaches

- Use natural, descriptive language that describes both purpose and destination
- Keep text concise while highlighting relevant information
- Include "(opens in a new tab)" notation when the link opens in a new window

### Patterns to avoid

:::danger Don't use
- "Click here" - excludes non-pointing input methods
- Generic phrases like "Learn more" or "Read more" used alone
- Ability-assuming words like "See," "Hear," or "Watch"
:::

:::tip Example
**Do this:** "File for a VA disability compensation increase"

**Not this:** "Click here to learn more"
:::

## Formatting standards

- Remove punctuation from link text (except question marks and colons if integral to the meaning)
- Space links adequately for touch-screen usability
- Place links on separate lines for visual clarity and scannability
- Avoid linking multiple list items to identical destinations

## URL best practices

- Use canonical URLs (the version appearing in search results)
- For form flows, link to base URL excluding specific page references
- Include trailing slashes when present in live URLs
- This prevents broken links when flows change and improves search indexing

## File-based links

- Minimize PDF links when possible
- Add relevant icons (calendar, video, XLS) from the Design System components when linking to files

## External site links

Use descriptive text that indicates the destination:

:::tip Example
Check COVID-19 symptoms on the CDC website
:::

Consider using aria-labels for screen reader-specific context when specialized circumstances require different text for visual and assistive technology users.

## Privacy requirements

When creating links, you must protect Personally Identifiable Information (PII) and Protected Health Information (PHI):

- Avoid PII/PHI in link text (click events cannot be tracked for such links)
- Cannot pass PII/PHI in URL parameters or destination URLs
- File downloads can include only the user's name and download date
- Generate non-PII identifiers for parameters

These restrictions protect user information from analytics tracking and logs.
