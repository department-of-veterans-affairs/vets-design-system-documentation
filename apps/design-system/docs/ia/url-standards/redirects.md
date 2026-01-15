---
title: Redirects
description: Guidelines for implementing URL redirects on VA.gov
---

# Redirects

URL redirects forward both visitors and search engines to different URLs than originally requested. Teams must implement redirects when changing URLs or removing pages.

## Purpose

1. **User Protection**: Prevents 404 (page not found) errors by routing visitors to valid destinations
2. **Search Engine Optimization**: Informs search engines of page relocation, updating their indexes and transferring search value

## Usage Guidelines

### When to Implement Redirects

Redirects are appropriate when changes affect page availability at specific URLs:

- Page removal or discontinuation
- Merging multiple pages into consolidated content
- URL changes due to keyword or contextual modifications
- Moving pages within site architecture
- Parent page changes that cascade to child pages

### When NOT to Use Redirects

- **Temporary situations**: Use temporary redirects instead of permanent (301) redirects for anticipated returns or repurposing
- **Invalid URL variations**: Cannot claim every possible URL spelling or variation accessing a page
- **Non-VA.gov domains**: Cannot redirect pages outside va.gov domain structure
- **Forms Library pages**: Use migrations instead of redirects per Forms Library specifications

## Standards and Best Practices

### Implementation Timing

Deploy redirects simultaneously with URL changes, no later than 24 hours after new URL goes live.

### Destination Selection

Choose landing pages with similar context, purpose, and detail level. Avoid redirecting to homepage as it frustrates users seeking specific information.

### Avoid Common Issues

- **Redirect chains**: A→B→C sequences that slow page loading and dilute SEO value
- **Redirect loops**: Circular routing that prevents pages from loading
- **Improper child page handling**: Forgetting to redirect child pages when parent URLs change
- **Casing variation oversights**: URLs with different capitalization should redirect to the canonical lowercase version

### Internal Updates

Modify all VA.gov links reflecting new destinations rather than relying solely on redirects.

### Multi-page Tools

Always link to canonical URLs for flows, tools, and forms.

## Request Process

Redirect requests must be submitted to VA.gov Information Architecture for vetting before implementation, ensuring accuracy and triggering processes to update internal links across environments.

Contact #content-ia-centralized-team on Slack to submit a redirect request.
