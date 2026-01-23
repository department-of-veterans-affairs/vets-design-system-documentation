# Documentation Queue Processing Skill Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a Claude Code Skill that helps designers efficiently process documentation and guidance update issues from quarterly epics.

**Architecture:** A single SKILL.md file in `.claude/skills/doc-queue/` that orchestrates issue fetching, analysis, and guided documentation updates. The skill uses `gh` CLI for GitHub operations, reads the contributing guide via WebFetch, and prompts users for decisions using AskUserQuestion.

**Tech Stack:** Claude Code Skill (Markdown), GitHub CLI (`gh`), WebFetch for contributing guide, Jekyll/Markdown documentation files.

---

## Task 1: Create Skill Directory Structure

**Files:**
- Create: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Create the skill directory**

```bash
mkdir -p .claude/skills/doc-queue
```

**Step 2: Verify directory exists**

Run: `ls -la .claude/skills/`
Expected: `doc-queue` directory present

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue
git commit -m "chore: create doc-queue skill directory"
```

---

## Task 2: Write Skill Front Matter and Overview

**Files:**
- Create: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Create SKILL.md with front matter**

```markdown
---
name: doc-queue
description: Use when a designer asks to work on guidance or documentation issues, process documentation queue, or close out doc tickets - fetches oldest issue from quarterly epic and guides through resolution
---

# Documentation Queue Processing Skill

## Overview

This skill helps designers efficiently process documentation and guidance update issues from the VA Design System quarterly epics. It fetches the oldest unresolved issue, analyzes requirements, and guides the designer through completing the work.

**Announce at start:** "I'm using the doc-queue skill to help you process documentation issues from the quarterly epic."

## When to Use

Use this skill when:
- A designer asks to work on guidance or documentation issues
- Someone wants to process the documentation queue
- Working through documentation backlog tickets
- Closing out doc tickets for the quarter

**Trigger phrases:**
- "work on documentation issues"
- "process doc queue"
- "close out guidance tickets"
- "work on VADS documentation"
- "help with documentation backlog"
```

**Step 2: Run test to verify file created**

Run: `head -20 .claude/skills/doc-queue/SKILL.md`
Expected: Front matter and overview section visible

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add skill front matter and overview"
```

---

## Task 3: Write Epic Discovery Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add epic discovery logic section**

Append to SKILL.md:

```markdown

## Step 1: Locate the Documentation Epic

### Primary Epic (Current Quarter)

First, try to fetch the current quarterly documentation epic:

```bash
# Get current fiscal quarter and year
# Federal fiscal year: Q1=Oct-Dec, Q2=Jan-Mar, Q3=Apr-Jun, Q4=Jul-Sep
# Fiscal year starts October 1, so calendar year Oct-Dec is FY+1

# Fetch the known epic for Q1 2026
gh issue view 5410 --repo department-of-veterans-affairs/vets-design-system-documentation --json state,title,number
```

**If epic #5410 is CLOSED**, search for the next quarterly epic:

```bash
# Calculate current fiscal quarter (FY starts October)
# Q1: Oct-Dec, Q2: Jan-Mar, Q3: Apr-Jun, Q4: Jul-Sep

gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --search "is:issue is:open \"Documentation updates to VADS\" in:title" \
  --label "Epic" \
  --json number,title,state \
  --limit 5
```

### Fallback 1: Documentation Label Issues

If no open epic is found, fall back to the oldest issues with the `documentation-design.va.gov` label:

```bash
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --label "documentation-design.va.gov" \
  --state open \
  --json number,title,createdAt,assignees \
  --limit 20 | jq 'sort_by(.createdAt) | .[0:10]'
```

If issues are found, proceed to Step 2 (Issue Selection) with these results.

### Fallback 2: Guidance Label Issues

If no `documentation-design.va.gov` issues are found, search for guidance-related issues:

```bash
# Try guidance-update label first
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --label "guidance-update" \
  --state open \
  --json number,title,createdAt,assignees \
  --limit 20 | jq 'sort_by(.createdAt) | .[0:10]'

# If none, try guidance-new label
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --label "guidance-new" \
  --state open \
  --json number,title,createdAt,assignees \
  --limit 20 | jq 'sort_by(.createdAt) | .[0:10]'
```

If issues are found with either label, proceed to Step 2 (Issue Selection) with these results.

### Fallback 3: Ask User for Epic/Issue URL

If no issues are found through any of the above methods, ask the user:

**Question:** "I couldn't find any open documentation or guidance issues. Please provide either:
1. A URL to a documentation epic to pull issues from
2. A URL to a specific documentation issue to work on"

**Accept formats:**
- `https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/XXXX`
- Issue number only: `#XXXX` or `XXXX`

### Issue Discovery Priority Summary

1. **Primary:** Current quarterly epic (#5410 or search for "Documentation updates to VADS Q[N] [YEAR]")
2. **Fallback 1:** Oldest issues with `documentation-design.va.gov` label
3. **Fallback 2:** Oldest issues with `guidance-update` or `guidance-new` labels
4. **Fallback 3:** Ask user for epic/issue URL
```

**Step 2: Verify section added**

Run: `grep -c "Epic Discovery" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add epic discovery logic"
```

---

## Task 4: Write Issue Selection Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add issue selection logic**

Append to SKILL.md:

```markdown

## Step 2: Select Issue from Queue

### Fetch Documentation Issues

Get all open documentation issues, sorted by creation date (oldest first):

```bash
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --label "documentation-design.va.gov" \
  --state open \
  --json number,title,createdAt,labels,assignees \
  --limit 50 | jq 'sort_by(.createdAt)'
```

### Selection Priority

1. **Oldest unassigned issue** - Issues with no assignees get priority
2. **Issues with component labels** (e.g., `va-alert`, `va-button`) - More scoped work
3. **Issues without complex dependencies** - Can be completed independently

### Present Options to User

Show the 5 oldest issues and ask which one to work on:

**Question header:** "Select issue"
**Question:** "Here are the 5 oldest documentation issues. Which would you like to work on?"

**Options:**
1. [Oldest issue title] (#number - created date)
2. [Second oldest] (#number - created date)
3. [Third oldest] (#number - created date)
4. [Fourth oldest] (#number - created date)
5. [Fifth oldest] (#number - created date)

**Allow "Other"** for user to specify a different issue number.
```

**Step 2: Verify section added**

Run: `grep -c "Issue Selection" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add issue selection logic"
```

---

## Task 5: Write Issue Analysis Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add issue analysis logic**

Append to SKILL.md:

```markdown

## Step 3: Analyze Selected Issue

### Fetch Full Issue Details

```bash
gh issue view <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation \
  --json title,body,labels,comments,assignees
```

### Issue Analysis Checklist

For each issue, determine:

1. **Issue Type:**
   - [ ] New documentation needed
   - [ ] Update existing documentation
   - [ ] Fix incorrect information
   - [ ] Add examples/code samples
   - [ ] Accessibility guidance update
   - [ ] Design decision documentation

2. **Affected Files:**
   - Identify which documentation files need changes
   - Search codebase for related content:
   ```bash
   # For component issues (e.g., va-alert)
   find src/_components -name "*alert*" -type f

   # For pattern issues
   find src/_patterns -name "*.md" -type f | xargs grep -l "KEYWORD"
   ```

3. **Dependencies:**
   - Does this require component-library changes?
   - Does this need design review?
   - Are there related issues to reference?

4. **Scope Assessment:**
   - Small: Single file update, minor text changes
   - Medium: Multiple sections or files, new examples needed
   - Large: New page creation, significant restructuring

### Present Summary to User

Format the analysis as:

---
**Issue #[NUMBER]: [TITLE]**

**Summary:** [2-3 sentence summary of what needs to be done]

**Type:** [Issue type from checklist]

**Files to modify:**
- `path/to/file1.md` - [what changes needed]
- `path/to/file2.md` - [what changes needed]

**Scope:** [Small/Medium/Large]

**Questions for you:**
1. [Any clarifying questions based on issue analysis]
2. [Design decisions that need input]

---
```

**Step 2: Verify section added**

Run: `grep -c "Issue Analysis" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add issue analysis section"
```

---

## Task 6: Write Contributing Guide Reference Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add contributing guide reference**

Append to SKILL.md:

```markdown

## Step 4: Reference Contributing Guide

Before making documentation changes, fetch and review the contributing guide:

```
WebFetch: https://design.va.gov/about/contributing-to-the-design-system/contributing-to-docs
Prompt: Extract documentation guidelines including file organization, front matter requirements, formatting standards, and style guidance.
```

### Key Documentation Standards

**File Organization:**
- Components: `src/_components/[component-name]/index.md` or `src/_components/[component-name].md`
- Patterns: `src/_patterns/[pattern-name]/index.md`
- Templates: `src/_templates/[template-name]/index.md`

**Front Matter Required Fields:**
```yaml
---
layout: component  # or pattern, template
title: Component Name
permalink: /components/component-name/
intro-text: "Brief description of the component"
web-component: va-component-name
# Additional fields as needed
---
```

**Content Sections (typical order):**
1. Examples (with Storybook embeds)
2. Usage guidance
3. Code usage
4. Content considerations
5. Accessibility considerations
6. Related components/patterns
7. Component checklist

**Storybook Embed Format:**
```liquid
{% include storybook-preview.html story="uswds-va-component--variant" link_text="description" %}
```

**Image Include Format:**
```liquid
{% include component-example.html alt="Description" file="/images/path/file.png" %}
```

**Style Guidelines:**
- Use title case for component/pattern names
- Define acronyms on first use
- Include AKA sections for alternative names
- Hyperlink component references: [Alert](/components/alert/)
```

**Step 2: Verify section added**

Run: `grep -c "Contributing Guide" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add contributing guide reference"
```

---

## Task 7: Write Documentation Update Workflow Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add documentation update workflow**

Append to SKILL.md:

```markdown

## Step 5: Execute Documentation Updates

### Pre-Flight Checks

Before making changes:

1. **Create working branch:**
   ```bash
   git checkout -b docs/issue-<NUMBER>-<short-description>
   ```

2. **Read existing file(s) to understand current state:**
   ```bash
   # Use Read tool on identified files
   ```

3. **Confirm approach with user** if there are multiple ways to address the issue.

### Making Changes

**For text updates:**
- Use the Edit tool for targeted changes
- Preserve existing formatting and structure
- Follow VA.gov Content Style Guide

**For new sections:**
- Follow the established section order
- Include appropriate Storybook embeds for examples
- Add accessibility considerations

**For new pages:**
- Use existing similar pages as templates
- Include all required front matter
- Add to navigation if needed

### User Decision Points

Ask the user for input when:

1. **Multiple valid approaches exist:**
   - "Should we add this as a new section or expand the existing guidance?"

2. **Design decisions are unclear:**
   - "The issue mentions [X]. How should this be presented to users?"

3. **Scope questions:**
   - "This change could also apply to [related component]. Should we update both?"

4. **Content tone:**
   - "Should this be framed as a requirement ('must') or recommendation ('should')?"

### Quality Checklist

Before completing:
- [ ] All links work (internal and external)
- [ ] Storybook previews render correctly
- [ ] Code examples are accurate
- [ ] Accessibility guidance is included where relevant
- [ ] Content follows style guide
```

**Step 2: Verify section added**

Run: `grep -c "Documentation Updates" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add documentation update workflow"
```

---

## Task 8: Write Completion and PR Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add completion workflow**

Append to SKILL.md:

```markdown

## Step 6: Complete and Submit

### Local Verification

1. **Build the site locally:**
   ```bash
   yarn build
   ```

2. **Check for build errors** - resolve any Jekyll or Gulp errors

3. **Preview changes** (optional):
   ```bash
   yarn start
   # Visit localhost:4000 to verify changes
   ```

### Commit Changes

```bash
git add -A
git commit -m "docs: [brief description of changes]

Closes #<ISSUE_NUMBER>"
```

### Create Pull Request

```bash
gh pr create \
  --title "docs: [Description matching issue title]" \
  --body "## Summary
- [Bullet points of changes made]

## Issue
Closes #<ISSUE_NUMBER>

## Testing
- [ ] Site builds without errors
- [ ] Changes render correctly on localhost
- [ ] Links are functional
- [ ] Storybook embeds work

## Screenshots
[If visual changes, include before/after]
" \
  --base main
```

### Post-Completion

1. **Notify user of PR URL**
2. **Ask if they want to work on another issue:**
   - "PR created! Would you like to pick up another documentation issue from the queue?"

3. **Track progress:**
   - Note that one issue has been addressed toward the 10% quarterly goal
```

**Step 2: Verify section added**

Run: `grep -c "Complete and Submit" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add completion and PR workflow"
```

---

## Task 9: Write Error Handling and Edge Cases Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add error handling section**

Append to SKILL.md:

```markdown

## Error Handling

### Common Issues and Resolutions

**Epic not found:**
- Search with broader terms
- Ask user for direct URL
- Check if epic label was changed

**No open documentation issues:**
- Congratulate team on clearing the queue!
- Ask if user wants to work on a different type of issue

**Issue requires component-library changes:**
- Inform user this issue needs development work first
- Suggest documenting what exists and creating a follow-up issue
- Skip to next documentation-only issue

**Issue is blocked by design decisions:**
- Present the decision needed to the user
- If user can't decide, mark issue as needing design review
- Move to next issue

**Build failures after changes:**
- Review error messages
- Check for syntax errors in Liquid templates
- Verify front matter YAML is valid
- Ensure file paths in includes are correct

### Escalation Path

If the skill cannot resolve an issue:

1. Summarize what was attempted
2. Identify the blocker
3. Suggest next steps (e.g., "This needs input from [team/person]")
4. Offer to move to the next issue in queue
```

**Step 2: Verify section added**

Run: `grep -c "Error Handling" .claude/skills/doc-queue/SKILL.md`
Expected: 1

**Step 3: Commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add error handling section"
```

---

## Task 10: Write Quick Reference Section

**Files:**
- Modify: `.claude/skills/doc-queue/SKILL.md`

**Step 1: Add quick reference**

Append to SKILL.md:

```markdown

## Quick Reference

### Fiscal Year Quarters (Federal)

| Quarter | Months | Example |
|---------|--------|---------|
| Q1 | October - December | Q1 FY2026 = Oct-Dec 2025 |
| Q2 | January - March | Q2 FY2026 = Jan-Mar 2026 |
| Q3 | April - June | Q3 FY2026 = Apr-Jun 2026 |
| Q4 | July - September | Q4 FY2026 = Jul-Sep 2026 |

### Common Documentation Labels

- `documentation-design.va.gov` - General documentation issues
- `va-[component]` - Component-specific (e.g., `va-alert`, `va-button`)
- `pattern` - Pattern documentation
- `accessibility` - Accessibility-related documentation

### File Path Patterns

| Content Type | Path Pattern |
|--------------|--------------|
| Components | `src/_components/[name]/index.md` or `src/_components/[name].md` |
| Patterns | `src/_patterns/[category]/[name].md` |
| Foundation | `src/_foundation/[topic]/index.md` |
| Content Guide | `src/_content-style-guide/[topic].md` |

### Useful Commands

```bash
# List all documentation issues
gh issue list --label "documentation-design.va.gov" --state open

# Search for issues mentioning a component
gh issue list --search "va-alert in:title,body"

# View issue with comments
gh issue view <NUMBER> --comments

# Check if file exists
ls src/_components/<component-name>/

# Search documentation content
grep -r "search term" src/_components/
```
```

**Step 2: Verify complete skill file**

Run: `wc -l .claude/skills/doc-queue/SKILL.md`
Expected: ~400+ lines

**Step 3: Final commit**

```bash
git add .claude/skills/doc-queue/SKILL.md
git commit -m "feat(doc-queue): add quick reference section

Complete documentation queue processing skill with:
- Epic discovery and fallback logic
- Issue selection from queue
- Issue analysis and summarization
- Contributing guide integration
- Documentation update workflow
- PR creation workflow
- Error handling
- Quick reference"
```

---

## Task 11: Create GitHub Issue for This Plan

**Files:**
- None (GitHub issue creation)

**Step 1: Create the issue**

```bash
gh issue create \
  --repo department-of-veterans-affairs/vets-design-system-documentation \
  --title "Create Claude Code Skill for processing documentation queue" \
  --label "platform-design-system-team,documentation-design.va.gov" \
  --body "## Description

Create a Claude Code Skill that helps designers efficiently process documentation and guidance update issues from the quarterly epics.

## Goals

- Quickly identify and select documentation issues to work on
- Analyze issue requirements and affected files
- Guide designers through documentation updates following VADS standards
- Streamline PR creation for documentation changes
- Track progress toward quarterly documentation goals

## Implementation Plan

See: \`docs/plans/2026-01-23-documentation-queue-skill.md\`

## Skill Features

1. **Epic Discovery** - Automatically finds current quarter's documentation epic
2. **Issue Selection** - Presents oldest issues for selection
3. **Issue Analysis** - Summarizes tasks and identifies affected files
4. **Guided Updates** - References contributing guide and prompts for decisions
5. **PR Creation** - Streamlines commit and PR workflow
6. **Error Handling** - Graceful handling of edge cases

## Acceptance Criteria

- [ ] Skill triggers on documentation/guidance work requests
- [ ] Can locate quarterly epic or accept user-provided URL
- [ ] Analyzes issues and presents actionable summaries
- [ ] Prompts user for design decisions when needed
- [ ] Creates properly formatted PRs
- [ ] Includes error handling for common issues

## Technical Details

- Skill location: \`.claude/skills/doc-queue/SKILL.md\`
- Uses: gh CLI, WebFetch, Edit/Write tools, AskUserQuestion
- References: https://design.va.gov/about/contributing-to-the-design-system/contributing-to-docs
"
```

**Step 2: Verify issue created**

Run: `gh issue list --search "Claude Code Skill for processing documentation" --limit 1`
Expected: New issue appears in list

**Step 3: Note issue number for reference**

---

## Summary

This plan creates a comprehensive Claude Code Skill with:

1. **10 implementation tasks** covering all skill functionality
2. **1 task** for creating the tracking GitHub issue
3. **Follows skill conventions** from existing VA skills (front matter, sections, commands)
4. **Integrates with existing workflows** (gh CLI, Jekyll build, PR process)
5. **Handles edge cases** (missing epic, blocked issues, build failures)

The skill will enable designers to efficiently process the documentation backlog by:
- Automatically finding work from quarterly epics
- Analyzing issues and identifying required changes
- Guiding through VADS documentation standards
- Prompting for design decisions when human input is needed
- Streamlining the PR submission process
