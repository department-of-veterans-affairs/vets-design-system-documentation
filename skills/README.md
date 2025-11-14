# VA Design System - AI Skills for Claude Code

This directory contains AI Skills that provide authoritative, versioned context about VA Design System components, patterns, and foundations for use with Claude Code and other AI assistants.

## Overview

Skills are structured documentation files that help AI coding assistants:
- Generate correct component usage with proper props and accessibility
- Follow VA design patterns and content guidelines
- Avoid common pitfalls and anti-patterns
- Produce WCAG-compliant, accessible code

## Repository Location

**Skills live in `vets-design-system-documentation` (this repo), not `component-library`.**

**Rationale:**
- Skills are guidance/documentation artifacts, not production code
- Enables on-demand deployment (vs. component-library's sprint schedule)
- Keeps all design system guidance in one location
- Leverages existing editorial workflow for docs repo

Component props/events data is synced from `component-library` via the existing `src/_data/component-docs.json` mechanism (see "Keeping Skills in Sync" below).

## Directory Structure

```
vets-design-system-documentation/skills/
├── components/          # Component-specific skills (one per DS component)
│   ├── va-text-input.skill.md
│   ├── va-text-input.skill.json
│   └── ...
├── patterns/            # Pattern skills (future)
│   └── (future)
├── foundations/         # Design token skills (future)
│   └── (future)
├── cross-cutting/       # Accessibility, content style (future)
│   └── (future)
├── AGENTS.md           # Orchestrator guide (future)
├── README.md           # This file
├── TESTING.md          # Test scenarios
└── SKILL_DEMO.md       # Live demonstration guide
```

## Available Skills

### Components

- **`va-text-input`** - Text input field component
  - Props, events, accessibility requirements
  - Examples for web components and React
  - Content guidance, privacy warnings
  - Common pitfalls and anti-patterns

## Using Skills with Claude Code

### Method 1: Import Skill JSON

Claude Code can import `.skill.json` files directly:

1. Open Claude Code
2. Navigate to Skills settings
3. Import the skill JSON file:
   ```
   /path/to/vets-design-system-documentation/skills/components/va-text-input.skill.json
   ```
4. Reference the skill in your prompts or issues

### Method 2: Reference in Prompts

Include the skill file in your context when asking Claude Code to work with components:

```
Use the guidance in skills/components/va-text-input.skill.md
to create a form with email and name inputs
```

### Method 3: Issue Templates (Future)

GitHub issues can reference Skill IDs:

```markdown
Skill IDs: component.va-text-input, cross-cutting.accessibility
Labels: uses-skill
```

## Skill File Formats

Each skill is provided in two formats:

### Markdown (`.skill.md`)
- **Purpose:** Human-readable documentation
- **Structure:** Metadata block + comprehensive sections
- **Use case:** Reference documentation, manual review

### JSON (`.skill.json`)
- **Purpose:** Machine-readable structured data
- **Structure:** Nested JSON with typed fields
- **Use case:** Direct import into AI tools, automated processing

## Skill Metadata

All skills include metadata following this format:

```yaml
:::skill-meta
id: component.va-text-input
version: 0.1.0
source-of-truth:
  guidance: https://design.va.gov/components/form/text-input
  storybook: https://design.va.gov/storybook/...
  code: https://github.com/.../va-text-input.tsx
last-synced: 2025-11-13
maturity: use-deployed
intent-classifiers: ["text field", "input", "form field"]
:::end
```

### Metadata Fields

- **`id`**: Unique skill identifier (format: `category.component-name`)
- **`version`**: Semantic version (MAJOR.MINOR.PATCH)
- **`source-of-truth`**: Links to authoritative documentation
- **`last-synced`**: Date of last sync with component source (YYYY-MM-DD)
- **`maturity`**: Component maturity level (`use-deployed`, `caution`, `dont-use`)
- **`intent-classifiers`**: Keywords/phrases that trigger skill usage

## Skill Sections

Each skill markdown file includes these sections:

1. **Intent / Quick Trigger Phrases** - When to use this skill
2. **When to Use / When NOT to Use** - Clear decision criteria
3. **Props, Events, and Slots** - Complete API reference
4. **Accessibility Requirements** - Keyboard, screen reader, ARIA
5. **Examples** - Web Component + React with error states
6. **Tokens / Styling** - Design tokens, CSS classes, shadow parts
7. **Content Guidance** - Labels, error messages, privacy warnings
8. **Pitfalls / Anti-Patterns** - Common mistakes to avoid
9. **Related Skills** - Links to related components/patterns
10. **Update Checklist** - Maintenance guidelines

## Example: Using va-text-input Skill

### Prompt to Claude Code:

```
Create a form with the following fields:
- Full name (required)
- Email (required, with validation)
- Phone number (optional)

Use the va-text-input component following the skill guidance.
```

### Expected Output:

Claude Code will generate:
- Proper prop usage (label, required, type, autocomplete)
- Accessible markup (aria-describedby, error handling)
- Correct validation patterns
- Privacy-conscious implementation (no analytics on PII)
- React or Web Component syntax as requested

## Skill Versioning

Skills follow semantic versioning:

- **MAJOR (X.0.0)**: Breaking changes (component API changes)
- **MINOR (0.X.0)**: New features (new sections, significant additions)
- **PATCH (0.0.X)**: Bug fixes (clarifications, typo corrections)

## Keeping Skills in Sync with Component Library

### Props/Events Synchronization

Component props and events data is already synced from `component-library` to this repo via:

**Source:** `component-library` → Stencil compiler generates component metadata
**Destination:** `vets-design-system-documentation/src/_data/component-docs.json`
**Mechanism:** Gulp task pulls data on-demand
**Usage:** Powers the "Code Usage" section on component pages (e.g., https://design.va.gov/components/form/text-input#code-usage)

### Sync Strategy for Skills

**For MVP (Current):**
- Manual verification: Compare skill props table against `component-docs.json`
- Update skill files when component APIs change
- Document last-synced date in skill metadata

**For Phase 1+ (Automated):**
1. **Build a script** in `component-library` that:
   - Extracts props/events from Stencil compiler output
   - Generates props/events tables in skill format
   - Creates a PR in this repo to update skill files

2. **CI Check** that:
   - Warns if skill `last-synced` date is > 30 days old
   - Compares skill props table hash against current component API
   - Fails if drift detected (manual review required)

3. **Human Review:**
   - Approves automated props/events updates
   - Manually updates narrative sections (examples, guidance, anti-patterns)

### What Gets Synced vs. Manual Maintenance

| Content | Sync Method | Notes |
|---------|-------------|-------|
| Props table | Automated (future) | Generated from component source |
| Events table | Automated (future) | Generated from component source |
| Examples | Manual | Requires context and testing |
| Accessibility guidance | Manual | Requires design system expertise |
| Anti-patterns | Manual | Discovered through usage/review |
| Content guidance | Manual | Aligned with VA content style |

## Governance

**Owned by:** VA Design System Team
**Review triggers:**
- Component API changes
- Token updates
- Guidance edits
- Accessibility standard changes

**Update process:**
1. Update component source code
2. Regenerate props/events tables (manual for MVP, automated future)
3. Update skill markdown and JSON
4. Bump version and last-synced date
5. Validate examples still work
6. Submit PR with `ignore-for-release` label

## Contributing

Skills are maintained by the Design System Team. If you notice:
- Outdated information
- Missing examples
- New anti-patterns discovered
- Accessibility issues

Please:
1. Open an issue in the `vets-design-system-documentation` repo
2. Tag with `skill-update` label
3. Reference the specific skill ID

## Roadmap

### MVP (Completed)
- ✅ Single component skill: `va-text-input`
- ✅ Skill markdown and JSON formats
- ✅ README documentation

### Phase 1 (Planned)
- [ ] Top 5 component skills (text-input, select, button, alert, modal)
- [ ] 1 pattern skill (form respondent)
- [ ] Accessibility & content style cross-cutting skills
- [ ] Basic generation script for props/events tables

### Phase 2 (Future)
- [ ] Top 20 components
- [ ] Foundation skills (color, spacing, typography)
- [ ] Automated drift detection
- [ ] CI validation

### Phase 3 (Future)
- [ ] Full component & pattern coverage
- [ ] Embedding-based retrieval index
- [ ] MCP server integration
- [ ] IDE plugin enhancements

## Resources

- **PRD:** [GitHub Issue #5155](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5155)
- **Design System Docs:** https://design.va.gov
- **Component Library Repo:** https://github.com/department-of-veterans-affairs/component-library
- **Storybook:** https://design.va.gov/storybook

## Support

For questions or issues:
- **Slack:** `#vfs-platform-support` or `#platform-design-system`
- **GitHub Issues:** Report via component-library repo
- **Email:** Contact Design System Team

---

**Last Updated:** 2025-11-13
**MVP Status:** Complete ✅
