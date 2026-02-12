---
name: guidance-grooming
description: Use after selecting a documentation issue from the doc-queue to groom it - analyzes the issue, identifies gaps, prompts the designer for clarity, and posts a structured grooming comment so the issue is ready for the writing-vads-guidance skill or an async agent
---

# Guidance Issue Grooming Skill

## Overview

Groom a documentation or guidance issue so it contains everything needed for a writer (human or agent) to complete it without further clarification. This skill bridges issue selection (doc-queue) and documentation writing (writing-vads-guidance) by turning vague or incomplete issues into well-scoped, actionable work items.

**Announce at start:** "I'm using the guidance-grooming skill to analyze this issue and make sure it's ready to work on."

**Called by:** doc-queue (after Step 2: Select Issue from Queue)
**Hands off to:** writing-vads-guidance (when grooming is complete and user is ready to write)

## When to Use

- After selecting a documentation issue from the queue
- An issue needs clarification before writing can begin
- Preparing issues for async agent work
- Reviewing whether an issue has enough context to act on

**Trigger phrases:**
- "groom this issue"
- "prepare this issue for writing"
- "is this issue ready to work on?"
- "what's missing from this issue?"

## Step 1: Gather Issue Context

### Fetch Full Issue Details

```bash
gh issue view <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation \
  --json title,body,labels,comments,assignees,createdAt,milestone | cat
```

### Identify Content Type from Labels and Title

Determine the content type to set the right expectations:

| Signal | Content Type |
|--------|-------------|
| `va-*` label or component name in title | Component |
| `pattern` label or "pattern" in title | Pattern |
| `template` label or "template" in title | Template |
| `content-style-guide` label | Content Style Guide |
| `foundation` label | Foundation |
| `accessibility` label only | Accessibility |
| None of the above | Ask the user |

### Search for Affected Files

```bash
# For components
find src/_components -iname "*<component-name>*" -type f

# For patterns
find src/_patterns -iname "*<keyword>*" -type f

# For broader searches
grep -rl "<keyword>" src/_components/ src/_patterns/ src/_templates/ --include="*.md" | head -20
```

### Read Current State of Affected Files

For each file identified, read the current content to understand:
- What sections already exist
- What guidance is currently published
- What front matter is set (layout, status, web-component, etc.)
- Where gaps exist relative to the template

```bash
# Read the file
cat src/_components/<name>/index.md

# Also read the relevant template for comparison
cat src/_components/template.md   # or src/_patterns/template.md, etc.
```

### Check for Related Context

```bash
# Related issues
gh issue list --repo department-of-veterans-affairs/vets-design-system-documentation \
  --search "<component-or-topic> in:title,body" \
  --state all \
  --json number,title,state \
  --limit 10 | cat

# Check component-library for technical details (if component)
# Look at Storybook stories, component props, etc.
```

## Step 2: Analyze Completeness

### Required Information Checklist

For every documentation issue, the following must be clear before writing can begin. Check each item against the issue body, comments, and labels:

#### Universal (all content types)

- [ ] **What is changing and why** — Is the intent of the issue clear?
- [ ] **Which files to update** — Can we identify exact file paths?
- [ ] **What sections are affected** — Do we know which parts of the page change?
- [ ] **Source of truth** — Is there a Figma file, Storybook story, or design spec to reference?
- [ ] **Scope boundary** — Is it clear what is NOT in scope?

#### Component-specific

- [ ] **Web component name** — e.g., `va-alert`
- [ ] **Storybook stories** — Which variants/stories exist to embed?
- [ ] **Mobile variant** — Does this component have a mobile app version?
- [ ] **Props/API changes** — Any new or changed properties to document?
- [ ] **Accessibility notes** — Screen reader, keyboard, or ARIA changes?

#### Pattern-specific

- [ ] **Category** — `ask-users-for` or `help-users-to`?
- [ ] **Production examples** — Where is this pattern used on VA.gov?
- [ ] **Components used** — Which components make up this pattern?

#### Template-specific

- [ ] **Structure/anatomy** — Is the page layout defined?
- [ ] **Variations** — Are there different versions of this template?

### Gap Classification

Classify each missing item:

| Classification | Action |
|---------------|--------|
| **Resolvable from codebase** | Agent can fill in by reading files, Storybook, or component-library |
| **Resolvable from issue context** | Buried in comments or linked issues — extract and confirm |
| **Needs designer input** | Must ask the user — cannot be inferred |
| **Blocked** | Requires external action (e.g., component not yet built) |

## Step 3: Prompt for Missing Context

### Ask Targeted Questions

Only ask about items classified as "Needs designer input." Batch questions to minimize back-and-forth.

**Format questions as:**

```
I've analyzed issue #[NUMBER] and have a few questions before we can start writing:

1. **[Topic]**: [Specific question with context about why it matters]
   - Option A: [suggestion]
   - Option B: [alternative]

2. **[Topic]**: [Question]

3. **[Topic]**: [Question]
```

### Common Questions by Type

**Scope questions:**
- "The issue mentions [X]. Should we also update [related section Y], or keep this focused on just [X]?"
- "This component has both web and mobile variants. Should we update both, or just web?"

**Content questions:**
- "What's the key user behavior this guidance should address?"
- "Are there any 'when not to use' scenarios we should call out?"
- "Should this match the pattern used in [similar component]?"

**Design decision questions:**
- "The current status is `[status]`. Should it stay the same or change?"
- "The template calls for [section], but [similar component] omits it. Should we include it?"
- "There's conflicting guidance between [source A] and [source B]. Which takes precedence?"

**Source of truth questions:**
- "Is there a Figma file or design spec for this? (Link appreciated)"
- "Which Storybook stories should we embed as examples?"

### Record Answers

Capture all answers — they will be included in the grooming comment.

## Step 4: Post Grooming Comment

Once all gaps are resolved, post a structured comment on the issue. This comment serves as the work order for the writing-vads-guidance skill or a future async agent.

### Comment Format

Write the comment body to a temp file and use `--body-file` to avoid shell escaping issues with markdown content. See AGENTS.md for details.

```bash
# Write the grooming comment to a temp file
cat > /tmp/grooming-comment.md << 'GHEOF'
<COMMENT_BODY>
GHEOF

# Post using --body-file and capture the comment URL
gh issue comment <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --body-file /tmp/grooming-comment.md
```

After posting, retrieve and store the comment ID for future edits:

```bash
# Get the grooming comment ID (find the comment starting with "## Grooming Summary")
COMMENT_ID=$(gh api /repos/department-of-veterans-affairs/vets-design-system-documentation/issues/<ISSUE_NUMBER>/comments \
  --jq '.[] | select(.body | startswith("## Grooming Summary")) | .id' | tail -1)
echo "Grooming comment ID: $COMMENT_ID"
```

### Updating the Grooming Comment

**IMPORTANT:** When corrections or clarifications arise after posting the grooming comment, always **edit the original comment** rather than posting a follow-up. This ensures the grooming comment remains a single, authoritative work order — especially critical for async agents that read the comment as their instructions.

```bash
# Write updated content to temp file
cat > /tmp/grooming-comment.md << 'GHEOF'
<UPDATED_COMMENT_BODY>
GHEOF

# Edit the existing comment in-place
gh api --method PATCH /repos/department-of-veterans-affairs/vets-design-system-documentation/issues/comments/$COMMENT_ID \
  --field body="$(cat /tmp/grooming-comment.md)"
```

**When to edit vs. when to post a new comment:**
- **Edit the grooming comment** for: scope changes, corrected file lists, updated design decisions, revised acceptance criteria — anything that changes the work order
- **Post a separate comment** for: status updates, questions to the team, or notes that don't change the work instructions

**Comment template:**

```markdown
## Grooming Summary

> This issue has been groomed and is ready for documentation work.

### Summary

[2-3 sentences describing what needs to happen and why. Be specific enough that someone unfamiliar with the issue history could understand the task.]

### Content type

[Component / Pattern / Template / Content Style Guide / Foundation / Accessibility]

### Scope

[Small / Medium / Large]
- **Small**: Single file, minor text changes, adding a note or link
- **Medium**: Multiple sections or files, new examples needed, restructuring a section
- **Large**: New page creation, significant content overhaul, multiple cross-references

### Files to update

| File | Action | Details |
|------|--------|---------|
| `src/_components/[name]/index.md` | Update | [Which sections, what changes] |
| `src/_patterns/[category]/[name].md` | Create | [New file following template] |

### Changes to make

For each file, describe the specific changes:

**`[file path]`**
- [ ] [Specific change 1 — e.g., "Add 'When not to use' section with guidance about X"]
- [ ] [Specific change 2 — e.g., "Update Storybook embed to include new variant Y"]
- [ ] [Specific change 3]

### Reference material

- **Figma**: [URL or "N/A"]
- **Storybook**: [URL or story name]
- **Component library source**: [URL if relevant]
- **Related issues**: #[number], #[number]
- **Existing documentation**: [URL to current live page]

### Design decisions

[Decisions made during grooming that the writer should follow. If none, write "None — follow existing patterns."]

- [Decision 1 — e.g., "Omit mobile section — no mobile variant exists"]
- [Decision 2 — e.g., "Use same structure as Alert component for consistency"]

### Acceptance criteria

- [ ] [Criterion 1 — e.g., "Usage section includes when-to-use and when-not-to-use guidance"]
- [ ] [Criterion 2 — e.g., "Storybook preview embeds render correctly"]
- [ ] [Criterion 3 — e.g., "All component cross-references are hyperlinked"]
- [ ] Site builds without errors
- [ ] Content follows VADS style standards

### Out of scope

[Items explicitly excluded from this issue. Helps prevent scope creep.]

- [Item 1 — e.g., "Component library code changes"]
- [Item 2 — e.g., "Mobile app documentation"]
```

### Add Groomed Label

```bash
gh issue edit <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --add-label "groomed"
```

**Note:** If the `groomed` label doesn't exist yet, create it:

```bash
gh label create "groomed" --repo department-of-veterans-affairs/vets-design-system-documentation \
  --description "Issue has been groomed and is ready for documentation work" \
  --color "0E8A16"
```

## Step 5: Hand Off

### If Continuing to Write (Current Flow)

Present the grooming summary to the user and ask:

**Question:** "This issue is now groomed. Would you like to:"

- **Write it now** → Proceed to writing-vads-guidance skill (Step 5 in doc-queue)
- **Assign to Copilot** → Hand off to the Copilot coding agent (see below)
- **Come back later** → Confirm the grooming comment was posted and the issue is ready

### If Assigning to Copilot Coding Agent

The Copilot coding agent can work on groomed issues asynchronously. The agent reads `.github/copilot-instructions.md`, which contains step-by-step instructions for processing groomed issues.

To assign the issue to Copilot:

```bash
# Assign to Copilot
gh issue edit <ISSUE_NUMBER> --repo department-of-veterans-affairs/vets-design-system-documentation --add-assignee "copilot"
```

**What happens next:**
1. Copilot picks up the issue and reads the grooming comment
2. It follows the instructions in `.github/copilot-instructions.md` to read writing standards
3. It makes the documentation changes and opens a **draft PR**
4. The designer reviews the draft PR and iterates as needed

**Important:** Remind the user that draft PRs from agents should be reviewed carefully, especially for:
- Tone and voice matching VA content standards
- YAML front matter untouched
- Accurate cross-references and hyperlinks
- No changes outside the defined scope

### If Stopping Here

Confirm:
1. Grooming comment is posted on the issue
2. `groomed` label is applied
3. Issue is assigned to the user (or to Copilot if agent handoff was chosen)
4. Summary of what was decided

## Error Handling

### Issue is Too Vague

If the issue body is empty or provides almost no context:

1. Check issue comments for additional context
2. Check linked issues or referenced PRs
3. Search for related closed issues that might provide history
4. If still insufficient, ask the user:
   - "This issue doesn't have enough detail for me to analyze. Can you describe what documentation change is needed?"

### Issue Requires Non-Documentation Work

If grooming reveals the issue is blocked by:
- Component library changes not yet made
- Design work not yet completed
- Accessibility review needed first

**Action:**
1. Inform the user of the blocker
2. Add a comment to the issue noting the dependency
3. Suggest skipping to the next issue
4. Offer to add a `blocked` label

### Conflicting Information

If the issue body, comments, and codebase contradict each other:

1. Present all conflicting sources to the user
2. Ask which takes precedence
3. Document the resolution in the grooming comment under "Design decisions"

### Scope Creep Detection

If analyzing the issue reveals it should be split:

1. Suggest splitting: "This issue covers [A] and [B], which could be independent changes. Should we split it?"
2. If yes, help create the new issue and scope down the current one
3. If no, document the broader scope in the grooming comment

## Quick Reference

### Grooming Checklist

Before posting the grooming comment, verify:

- [ ] Summary is clear enough for someone unfamiliar with the issue
- [ ] All files to update are identified with exact paths
- [ ] Changes are specific and actionable (not "update documentation")
- [ ] Reference material is linked (Figma, Storybook, related issues)
- [ ] Design decisions are documented
- [ ] Acceptance criteria are measurable
- [ ] Out-of-scope items are noted
- [ ] User has answered all clarifying questions

### Content Type → Template Mapping

| Content Type | Template Path | Key Sections |
|-------------|---------------|---------------|
| Component | `src/_components/template.md` | Examples, Usage, Behavior, Code Usage, Content, Accessibility |
| Pattern | `src/_patterns/template.md` | Examples, Usage, How to design and build, Code, Content, Accessibility |
| Template | `src/_templates/template.md` | About, Usage, Structure, Variations, Content, Accessibility |

### Scope Guidelines

| Scope | Typical Changes | Estimated Effort |
|-------|----------------|-----------------|
| Small | Fix typo, add a link, update a note | < 30 minutes |
| Medium | Add/rewrite a section, add examples, update multiple sections | 30 min – 2 hours |
| Large | New page, major restructure, cross-cutting changes | 2+ hours |
