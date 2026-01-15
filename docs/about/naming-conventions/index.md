---
title: Naming conventions
description: Guidelines for naming components, patterns, and technical implementations.
sidebar_label: Overview
sidebar_position: 1
---

# Naming conventions

The naming conventions provide clarity and scope, keep CSS specificity low, and allow for backwards compatibility with legacy code.

## Core principles

1. **Clarity and purpose** - Names should clearly describe the component's purpose and functionality
2. **Consistency** - Maintain uniform patterns across the entire design system
3. **Developer experience** - Technical naming should be intuitive for implementation
4. **Scalability** - The approach should accommodate future component additions

## General guidelines

### Components, templates, and patterns

Names should align with VA content principles—clear, concise, and user-focused. The ideal length is 1-2 words, though exceptions exist (for example, "On This Page").

Generic web tools should share standard names (for example, accordions).

### Pattern naming format

Patterns follow a structured format:
- "Ask Users for [Topic]" (for example, Files, Addresses)
- "Help Users to [Action]" (for example, Sign In, Check Answers)

## Web component implementation

### Naming structure

| Element | Convention | Example |
|---------|------------|---------|
| Folders and files | kebab-case | `action-bar`, `form-controls` |
| Component names | `va-` prefix + kebab-case | `<va-alert>`, `<va-modal>` |
| Attributes | kebab-case | `close-handler`, `is-visible` |
| Boolean attributes | `is-`, `has-`, `should-` prefixes | `is-visible`, `has-error` |

### Shadow DOM and slots

Named slots use kebab-case: `<slot name="header-content">`

Internal classes follow Block Element Modifier (BEM) notation:
- Block: `.va-component-name`
- Element: `.va-component-name__element`
- Modifier: `.va-component-name--modifier`

## Documentation site conventions

### Front matter

Specify actual web component names with `va-` prefix in kebab-case.

### Page titles

Convert kebab-case to Title Case with spaces (for example, `va-alert-expandable` → "Alert - Expandable").

### URL structure

Use kebab-case without the `va-` prefix. Employ hierarchical paths for variations:
- Base: `/components/alert`
- Variations: `/components/link/action`
- Specific variants: Use anchor links (for example, `#primary-entry`)

## Variant naming strategy

| Type | Approach |
|------|----------|
| Simple variations | Document on main component page with anchor links |
| Complex variations | Create separate pages maintaining hierarchical titles |
| State variations | Document on relevant component/variation page with clear state indicators |

## Implementation checklist

When adding new documentation:
- Include web component name with `va-` prefix in front matter
- Transform kebab-case to Title Case for human readability
- Use " - " separators for hierarchical elements
- Avoid words like "component" or "pattern" in link text
- Maintain URL consistency with similar components
