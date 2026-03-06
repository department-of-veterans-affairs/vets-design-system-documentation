# merge-approved-prs

Batch-merges all open pull requests that you have approved on this repository.

For each approved PR the workflow: updates the branch from main → waits for all CI checks to pass → merges → moves to the next PR. At the end it updates local main and reports remaining PR statistics.

## How to run

**Always prefix with `bash` on this machine (GFE policy blocks direct script execution):**

```bash
bash scripts/merge-approved-prs.sh
```

### Options

| Flag | Description |
|------|-------------|
| `--squash` | Squash merge (default: merge commit) |
| `--rebase` | Rebase merge |
| `--no-delete-branch` | Keep PR branches after merging |
| `--timeout <secs>` | Max seconds to wait for checks per PR (default: 900) |
| `--dry-run` | Preview what would be merged without making changes |

### Examples

```bash
# Default — merge commit, delete branch, 15-min check timeout
bash scripts/merge-approved-prs.sh

# Squash merge, keep branches
bash scripts/merge-approved-prs.sh --squash --no-delete-branch

# Dry run to preview
bash scripts/merge-approved-prs.sh --dry-run
```

## What the script does

1. Authenticates via `gh` CLI (`gh api user`)
2. Queries all open PRs via GraphQL, filtering for non-draft PRs where your most recent review is `APPROVED`
3. For each PR:
   - `gh pr update-branch` — merges main into the PR branch
   - Waits 25 seconds for CI to queue new workflow runs (if branch was updated)
   - Polls `gh pr checks` every 15 seconds until all checks complete
   - Skips if any checks fail; merges with `gh pr merge --merge --delete-branch` if all pass
4. Runs `git pull origin main` to update your local main branch
5. Reports: PRs merged, PRs failed/skipped, and counts of remaining open PRs (awaiting review / approved / draft)

## Requirements

- `gh` CLI authenticated (`gh auth login`)
- `git` in PATH
- `python3` in PATH
- Repository: `department-of-veterans-affairs/vets-design-system-documentation`
