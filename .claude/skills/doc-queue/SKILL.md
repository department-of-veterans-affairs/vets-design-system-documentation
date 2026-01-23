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

## Step 0: Get User's GitHub Username

Before starting, ask for the user's GitHub username if not already known:

**Question:** "What is your GitHub username? (This is needed to assign issues to you)"

Store this for:
- Assigning issues when work begins
- Filtering out issues already assigned to the user
- Crediting work in commits

## Step 1: Locate the Documentation Epic

### Primary Epic (Current Quarter)

First, try to fetch the current quarterly documentation epic:

```bash
# Get current fiscal quarter and year
# Federal fiscal year: Q1=Oct-Dec, Q2=Jan-Mar, Q3=Apr-Jun, Q4=Jul-Sep
# Fiscal year starts October 1, so calendar year Oct-Dec is FY+1

# Fetch the known epic for Q1 2026
gh issue view 5410 --repo department-of-veterans-affairs/vets-design-system-documentation --json state,title,number | cat
```

**If epic #5410 is CLOSED**, search for the next quarterly epic:

```bash
# Calculate current fiscal quarter (FY starts October)
# Q1: Oct-Dec, Q2: Jan-Mar, Q3: Apr-Jun, Q4: Jul-Sep

gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --search "is:issue is:open \"Documentation updates to VADS\" in:title" \
  --label "Epic" \
  --json number,title,state \
  --limit 5 | cat
```

### Fallback 1: Documentation Label Issues

If no open epic is found, fall back to the oldest issues with the `documentation-design.va.gov` label:

```bash
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --label "documentation-design.va.gov" \
  --state open \
  --json number,title,createdAt,assignees \
  --limit 20 | cat | jq 'sort_by(.createdAt) | .[0:10]'
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
  --limit 20 | cat | jq 'sort_by(.createdAt) | .[0:10]'

# If none, try guidance-new label
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --label "guidance-new" \
  --state open \
  --json number,title,createdAt,assignees \
  --limit 20 | cat | jq 'sort_by(.createdAt) | .[0:10]'
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
  --limit 50 | cat | jq 'sort_by(.createdAt)'
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

### Claim the Issue

Once the user selects an issue, immediately assign it to them:

```bash
gh issue edit <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --add-assignee "<GITHUB_USERNAME>"
```

This signals to the team that someone is actively working on the issue.

## Step 3: Analyze Selected Issue

### Fetch Full Issue Details

```bash
gh issue view <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation \
  --json title,body,labels,comments,assignees | cat
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

## Step 4: Reference Contributing Guide

Before making documentation changes, fetch and review the contributing guide:

```
WebFetch: https://design.va.gov/about/contributing-to-the-design-system/contributing-to-docs
Prompt: Extract documentation guidelines including file organization, front matter requirements, formatting standards, and style guidance.
```

### Key Documentation Standards

**File Organization:**
- Components: `src/_components/[component-name]/index.md` or `src/_components/[component-name].md`
- Patterns: `src/_patterns/[category]/[pattern-name].md` (for example, `ask-users-for` or `help-users-to`)
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

## Step 5: Execute Documentation Updates

**REQUIRED SUB-SKILL:** Use writing-vads-guidance for all documentation changes.

The writing-vads-guidance skill provides detailed guidance on:
- Template compliance for components, patterns, and templates
- Required Jekyll includes (Storybook, images, code props)
- VADS style standards and permitted deviations
- Handling template deviations with designer approval
- Quality checklist for documentation

### Preflight Checks

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

**CRITICAL: YAML Front Matter Protection**
- NEVER modify YAML front matter (content between `---` lines) without explicit user approval
- Always show the user any proposed front matter changes before making them
- Front matter controls page layout, navigation, and metadata - incorrect changes can break the site

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
  --title "docs: Short summary of changes" \
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

### Update Project Board Status

After creating the PR, update the issue's status in the project board to "PR Review":

```bash
# Step 1: Get the issue's project item ID
gh api graphql -f query='
query($owner: String!, $repo: String!, $number: Int!) {
  repository(owner: $owner, name: $repo) {
    issue(number: $number) {
      projectItems(first: 10) {
        nodes {
          id
          project { title id }
        }
      }
    }
  }
}' -f owner="department-of-veterans-affairs" -f repo="vets-design-system-documentation" -F number=<ISSUE_NUMBER> | cat

# Step 2: Update the status field to "PR Review"
# Replace the placeholder IDs with values from Step 1 and your project's field configuration
gh api graphql -f query='
mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $optionId: String!) {
  updateProjectV2ItemFieldValue(input: {
    projectId: $projectId
    itemId: $itemId
    fieldId: $fieldId
    value: { singleSelectOptionId: $optionId }
  }) {
    projectV2Item { id }
  }
}' \
  -f projectId="<PROJECT_ID>" \
  -f itemId="<ITEM_ID_FROM_STEP_1>" \
  -f fieldId="<STATUS_FIELD_ID>" \
  -f optionId="<PR_REVIEW_OPTION_ID>" | cat

# The "Design System & Forms" project uses these status options:
# - "Backlog", "Ready", "In Progress", "PR Review", "Done"
```

**Note:** If automated project board updates fail, manually update the issue status in the GitHub project board to "PR Review".

### Post-Completion

1. **Notify user of PR URL**
2. **Confirm project board was updated** to "PR Review" status
3. **Ask if they want to work on another issue:**
   - "PR created! Would you like to pick up another documentation issue from the queue?"

4. **Track progress:**
   - Note that one issue has been addressed toward the 10% quarterly goal

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
| Patterns | `src/_patterns/[category]/[name].md` (categories: `ask-users-for`, `help-users-to`) |
| Templates | `src/_templates/[name].md` or `src/_templates/[category]/index.md` |
| Foundation | `src/_foundation/[topic].md` (some use `src/_foundation/[topic]/index.md`) |
| Content Guide | `src/_content-style-guide/[topic].md` |

### Issue Management Commands

```bash
# Assign an issue to yourself
gh issue edit <NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --add-assignee "<USERNAME>"

# View issue's project board status
gh issue view <NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --json projectItems | cat

# Add a comment to an issue
gh issue comment <NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --body "Working on this - PR coming soon"
```

### Useful Commands

```bash
# List all documentation issues
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation --label "documentation-design.va.gov" --state open

# List unassigned documentation issues only
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation --label "documentation-design.va.gov" --state open --json number,title,assignees | cat | jq '[.[] | select(.assignees | length == 0)]'

# Search for issues mentioning a component
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation --search "va-alert in:title,body"

# View issue with comments
gh issue view <NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --comments

# Check if file exists
ls src/_components/<component-name>/

# Search documentation content
grep -r "search term" src/_components/
```