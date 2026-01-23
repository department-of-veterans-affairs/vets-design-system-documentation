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