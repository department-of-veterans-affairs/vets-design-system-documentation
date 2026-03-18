---
name: merge-approved-prs
description: Use when the user wants to merge all PRs they have approved - updates each branch from main, waits for CI checks to pass, merges, then summarizes results
---

# Merge Approved PRs Skill

## Overview

Runs the `scripts/merge-approved-prs.sh` script to batch-merge all open pull requests that the current user has approved on the `vets-design-system-documentation` repository.

**Announce at start:** "Running merge-approved-prs to batch-merge your approved PRs."

## When to Use

Trigger phrases:
- "merge my approved PRs"
- "merge-approved-prs"
- "/merge-approved-prs"
- "merge all the PRs I approved"
- "batch merge approved PRs"

## Step 1: Confirm intent (optional)

If the user hasn't explicitly passed flags, you may ask:
- Do you want to use the default merge commit, or squash/rebase?
- Should PR branches be deleted after merge? (default: yes)

If no preference is stated, use the defaults (merge commit, delete branch).

## Step 2: Run the script

**Always invoke via `bash` to work around GFE execution policy:**

```bash
bash scripts/merge-approved-prs.sh
```

Common variations:
```bash
# Squash merge instead of merge commit
bash scripts/merge-approved-prs.sh --squash

# Keep branches after merge
bash scripts/merge-approved-prs.sh --no-delete-branch

# Preview without making any changes
bash scripts/merge-approved-prs.sh --dry-run

# Increase timeout for slow CI (default 900s = 15 min per PR)
bash scripts/merge-approved-prs.sh --timeout 1800
```

## Step 3: Monitor and report

The script is fully autonomous — it will:
1. Find all open, non-draft PRs where your most recent review is APPROVED
2. For each PR in sequence:
   - Run `gh pr update-branch` to merge main into the PR branch
   - Wait 25 seconds for CI to queue new runs (if branch was updated)
   - Poll `gh pr checks` every 15 seconds until all checks pass or fail
   - Merge with `gh pr merge` if checks pass; skip if they fail
3. Run `git pull origin main` to update your local main
4. Print a summary: merged count, failures, and remaining PR stats

## Step 4: Handle failures

If any PRs fail, report them clearly:
- **Merge conflict** — the PR branch has diverged too far from main; the PR author needs to resolve conflicts
- **Checks failed** — CI failed after branch update; the PR needs attention before merging
- **Checks timed out** — CI took longer than 15 minutes; re-run the skill or increase `--timeout`

## Notes

- The script uses `gh` CLI (already authenticated as `humancompanion-usds`)
- Only non-draft PRs where your latest review state is APPROVED are processed
- PRs where the overall `reviewDecision` is `CHANGES_REQUESTED` (any reviewer requested changes) are excluded
- PRs that are awaiting additional reviewers but have no change requests may still be merged
