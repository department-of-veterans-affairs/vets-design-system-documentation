# Automated Content Style Guide Review Setup

This document explains how the automated content style guide review system works for the VA Design System documentation repository.

## Overview

When PRs modify guidance pages (components, patterns, templates, foundation, accessibility, IA, or about pages), the system automatically:

1. **Assigns reviewers** via CODEOWNERS
2. **Triggers GitHub Action** that posts content style guide requirements
3. **Shows checklist** in PR template for self-review

## Components

### 1. CODEOWNERS File (`.github/CODEOWNERS`)

Automatically assigns the `@department-of-veterans-affairs/platform-design-system-team` as reviewers for:

- `src/_components/**/*.md`
- `src/_patterns/**/*.md` 
- `src/_templates/**/*.md`
- `src/_content-style-guide/**/*.md`
- `src/_foundation/**/*.md`
- `src/_accessibility/**/*.md`
- `src/_ia/**/*.md`
- `src/_about/**/*.md`

### 2. GitHub Action (`.github/workflows/guidance-content-review.yml`)

Triggers on PRs that modify guidance files and:

- Posts a comment with the full content style guide prompt
- Automatically requests review from the design system team
- Ensures visibility of content requirements

### 3. PR Template (`.github/PULL_REQUEST_TEMPLATE.md`)

Includes a checklist section that reminds contributors to:

- Follow VA Content Style Guide principles
- Use active voice and plain language
- Avoid abbreviations and branded names
- Include accessibility considerations

### 4. Content Style Guide Prompt (`.github/prompts/Guidance-follow-content-style-guide.prompt.md`)

The source of truth for content requirements that:

- Gets automatically posted in PR comments
- Provides specific links to style guide sections
- Emphasizes the critical YAML front-matter protection rule

## How It Works

1. **PR Creation**: Developer creates PR that modifies guidance content
2. **Auto-Assignment**: CODEOWNERS automatically assigns design system team as reviewers
3. **Action Triggers**: GitHub Action detects guidance file changes
4. **Comment Posted**: Action posts content style guide requirements in PR
5. **Review Request**: Action requests review from design system team
6. **Self-Review**: PR author uses template checklist to validate changes
7. **Team Review**: Design system team reviews against posted requirements

## Benefits

- **Consistent Reviews**: All guidance changes get the same content review
- **Self-Service**: Contributors can validate their own changes first
- **Visible Requirements**: Content standards are posted directly in PRs
- **Automation**: No manual step required to trigger content review

## Monitoring and Maintenance

- Review GitHub Action logs for any failures
- Update content style guide prompt as requirements evolve
- Monitor PR template effectiveness and adjust checklist as needed
- Ensure CODEOWNERS stays current with team membership
