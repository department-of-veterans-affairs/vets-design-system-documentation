# CLAUDE.md

See [AGENTS.md](AGENTS.md) for full project context, architecture, and guidelines.

This file contains Claude Code-specific configuration.

## Available Skills

This repo includes Claude Code skills to help with common workflows:

### `/doc-queue` - Documentation Queue Processing
Helps designers efficiently process documentation and guidance issues from quarterly epics.

**Trigger by saying:** "work on documentation issues", "process doc queue", or "help with documentation backlog"

**What it does:**
1. Finds the current quarterly documentation epic
2. Presents oldest unassigned issues for selection
3. Assigns the issue to you and analyzes requirements
4. Guides you through making documentation changes
5. Creates a PR and updates the project board to "PR Review"

See `.claude/skills/doc-queue/SKILL.md` for full details.

### `/writing-vads-guidance` - Documentation Writing Standards
Ensures documentation follows VADS templates and style standards when writing component, pattern, or template guidance.

**Automatically invoked by:** `/doc-queue` at the "Making Changes" step

**What it does:**
1. Loads the appropriate template (component/pattern/template)
2. Ensures documentation structure matches template
3. Handles deviations when justified (with designer approval)
4. Enforces YAML front matter protection
5. Provides required Jekyll include syntax

See `.claude/skills/writing-vads-guidance/SKILL.md` for full details.

### `/merge-approved-prs` - Batch Merge Approved PRs
Merges all open PRs you have approved, one by one, after updating each branch from main and waiting for CI checks to pass.

**Trigger by saying:** "merge my approved PRs", "merge-approved-prs", or "batch merge approved PRs"

**What it does:**
1. Finds all open, non-draft PRs where your most recent review is APPROVED
2. For each: updates the branch from main, waits for all CI checks to pass, then merges
3. Updates your local main branch with `git pull`
4. Reports how many were merged, any failures, and remaining PR stats (awaiting review / draft)

**Run directly:** `bash scripts/merge-approved-prs.sh [--squash] [--dry-run] [--no-delete-branch]`

See `.claude/skills/merge-approved-prs/SKILL.md` for full details.
