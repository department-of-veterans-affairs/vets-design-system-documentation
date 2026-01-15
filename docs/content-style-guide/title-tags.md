---
title: Title tags
description: Guidelines for writing HTML title tags that appear in browsers and search results.
sidebar_position: 21
---

# Title tags

Title tags are HTML elements displayed in browsers and search results that identify page content and relevance. On VA.gov, they derive from the H1 (page title), making it crucial to include the primary keyword or phrase.

## Standard format

**Most pages:** `H1/Page Title | Veterans Affairs`

**Capitalization:** Use initial caps (for example, "Find A Form" not "Find a form")

## Character limits and truncation

Benefit hub pages maintain a 70-character maximum (including spaces) to display fully in search results. When H1s exceed this, they're truncated in the meta title tag while preserving "| Veterans Affairs" at the end.

Other content types (news releases, resources) don't have character limits.

## Exception 1: VA Medical Centers

**Format:** `H1 Page Title | VAMC Plain Language System Name | Veterans Affairs`

:::tip Examples
- Psychology Internships And Fellowships | VA Pittsburgh Health Care | Veterans Affairs
:::

- No character limit applied
- Uses plain language VAMC system names

## Exception 2: Forms and subtasks

Title tags may differ from H1s for clarity when users have multiple forms open.

:::tip Examples
- "Income Limits | Veterans Affairs" (not "What's Your Address")
- "Apply For VA Health Care | Veterans Affairs" (not "Form 10-10ez")
:::

## Privacy requirements

Title tags cannot include Personally Identifiable Information (PII) or Protected Health Information (PHI). Authenticated pages with specific personal data in H1s must use genericized title tags to prevent tracking sensitive information in analytics.

:::tip Example
**H1:** Prednisone, 25mg

**Title tag:** Medication detail - Medications | Veterans Affairs
:::

The VA 508 office approved this approach despite creating non-unique title tags, since no meaningful differentiating data exists that wouldn't expose sensitive information.
