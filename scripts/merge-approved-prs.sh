#!/usr/bin/env bash
# merge-approved-prs.sh
#
# Merges all open pull requests that you have approved on this repository.
# For each PR: updates the branch from main, waits for all CI checks to
# pass, then merges. At the end updates local main and reports remaining PR stats.
#
# Usage:
#   ./scripts/merge-approved-prs.sh [OPTIONS]
#
# Options:
#   --squash             Use squash merge (default: merge commit)
#   --rebase             Use rebase merge
#   --no-delete-branch   Keep the PR branch after merging
#   --timeout <secs>     Max seconds to wait for checks per PR (default: 900)
#   --dry-run            Show what would be done without making changes
#   -h, --help           Show this help
#
# Requires: gh CLI (authenticated), git, python3

set -uo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# Defaults
# ─────────────────────────────────────────────────────────────────────────────
readonly REPO="department-of-veterans-affairs/vets-design-system-documentation"
MERGE_FLAG="--merge"
DELETE_BRANCH_FLAG="--delete-branch"
CHECK_TIMEOUT=900   # 15 minutes per PR
POST_UPDATE_SLEEP=25 # seconds after branch update before CI checks start
CHECK_POLL_INTERVAL=15
DRY_RUN=false

# ─────────────────────────────────────────────────────────────────────────────
# Argument parsing
# ─────────────────────────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case $1 in
    --squash)            MERGE_FLAG="--squash"; shift ;;
    --rebase)            MERGE_FLAG="--rebase"; shift ;;
    --no-delete-branch)  DELETE_BRANCH_FLAG=""; shift ;;
    --timeout)
      if [[ -z ${2:-} ]]; then
        echo "Error: --timeout requires an argument (seconds)." >&2
        echo "Run with --help for usage." >&2
        exit 1
      fi
      if ! [[ $2 =~ ^[0-9]+$ ]]; then
        echo "Error: --timeout value must be a non-negative integer (seconds)." >&2
        exit 1
      fi
      CHECK_TIMEOUT="$2"
      shift 2
      ;;
    --dry-run)           DRY_RUN=true; shift ;;
    -h|--help)
      grep '^#' "$0" | grep -v '#!/' | sed 's/^# \{0,1\}//'
      exit 0 ;;
    *)
      echo "Unknown option: $1" >&2
      echo "Run with --help for usage." >&2
      exit 1 ;;
  esac
done

# ─────────────────────────────────────────────────────────────────────────────
# Colors (only when writing to a terminal)
# ─────────────────────────────────────────────────────────────────────────────
if [ -t 1 ]; then
  RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
  BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'
else
  RED=''; GREEN=''; YELLOW=''; BLUE=''; BOLD=''; NC=''
fi
HR="${BLUE}──────────────────────────────────────────────${NC}"

ok()   { echo -e "  ${GREEN}✓${NC} $*"; }
fail() { echo -e "  ${RED}✗${NC} $*"; }
info() { echo -e "  ${BLUE}→${NC} $*"; }
warn() { echo -e "  ${YELLOW}⚠${NC} $*"; }

# ─────────────────────────────────────────────────────────────────────────────
# Temp file cleanup
# ─────────────────────────────────────────────────────────────────────────────
TMPDIR_SCRIPT=$(mktemp -d)
trap 'rm -rf "$TMPDIR_SCRIPT"' EXIT

# ─────────────────────────────────────────────────────────────────────────────
# Auth check
# ─────────────────────────────────────────────────────────────────────────────
CURRENT_USER=$(gh api user --jq '.login' 2>/dev/null) || {
  fail "Not authenticated. Run: gh auth login"
  exit 1
}

echo -e "\n${BOLD}merge-approved-prs${NC}"
echo -e "  Repo:  ${REPO}"
echo -e "  User:  ${CURRENT_USER}"
echo -e "  Merge: ${MERGE_FLAG}${DELETE_BRANCH_FLAG:+ $DELETE_BRANCH_FLAG}"
[ "$DRY_RUN" = true ] && warn "DRY RUN — no changes will be made"
echo ""

# ─────────────────────────────────────────────────────────────────────────────
# Fetch all open PRs (with review data)
# ─────────────────────────────────────────────────────────────────────────────
echo "Fetching open pull requests..."
PR_JSON_FILE="$TMPDIR_SCRIPT/prs.json"
gh api graphql \
  -f owner="department-of-veterans-affairs" \
  -f repo="vets-design-system-documentation" \
  -f query='query($owner:String!,$repo:String!){
    repository(owner:$owner,name:$repo){
      pullRequests(first:100,states:OPEN){
        nodes{
          number title isDraft reviewDecision headRefName
          reviews(last:20,states:[APPROVED,CHANGES_REQUESTED,DISMISSED]){
            nodes{ author{login} state submittedAt }
          }
        }
      }
    }
  }' > "$PR_JSON_FILE" 2>&1 || {
  fail "GraphQL query failed:"
  cat "$PR_JSON_FILE"
  exit 1
}

# Find PRs where the current user's most recent review is APPROVED
APPROVED_FILE="$TMPDIR_SCRIPT/approved.txt"
python3 - "$CURRENT_USER" "$PR_JSON_FILE" <<'PYEOF' > "$APPROVED_FILE"
import json, sys
me, path = sys.argv[1], sys.argv[2]
with open(path) as f:
    data = json.load(f)
prs = data['data']['repository']['pullRequests']['nodes']
if len(prs) >= 100:
    print("WARNING: 100 open PRs returned — the list may be truncated; some approved PRs may be missing.", file=sys.stderr)
for pr in prs:
    if pr['isDraft']:
        continue
    # Skip if any reviewer has requested changes (overall decision is CHANGES_REQUESTED)
    if pr.get('reviewDecision') == 'CHANGES_REQUESTED':
        continue
    my_reviews = [r for r in pr['reviews']['nodes'] if r['author']['login'] == me]
    if not my_reviews:
        continue
    latest = max(my_reviews, key=lambda r: r['submittedAt'])
    if latest['state'] == 'APPROVED':
        # Tab delimiter — safe because GitHub PR titles won't contain tabs
        title = pr['title'].replace('\t', ' ')
        print(f"{pr['number']}\t{title}")
PYEOF

PR_COUNT=$(grep -c . "$APPROVED_FILE" 2>/dev/null || echo 0)

if [ "$PR_COUNT" -eq 0 ]; then
  echo "No approved (non-draft) PRs found."
  echo ""
else
  echo -e "Found ${BOLD}${PR_COUNT}${NC} approved PR(s) to process:"
  while IFS=$'\t' read -r num title; do
    printf "  #%-5s %s\n" "$num" "$title"
  done < "$APPROVED_FILE"
  echo ""
fi

# ─────────────────────────────────────────────────────────────────────────────
# wait_for_checks: poll gh pr checks until all complete or timeout
# Returns: 0 all pass, 1 some failed, 124 timed out
# ─────────────────────────────────────────────────────────────────────────────
wait_for_checks() {
  local pr_num=$1
  local branch_was_updated=${2:-false}
  local start=$SECONDS
  local checks_output pending failing passing total elapsed checks_ever_seen=false

  if [ "$branch_was_updated" = true ]; then
    info "Waiting ${POST_UPDATE_SLEEP}s for CI to queue new runs..."
    sleep "$POST_UPDATE_SLEEP"
  fi

  printf "  Watching checks:"
  while true; do
    local update_offset=0
    [ "$branch_was_updated" = true ] && update_offset=$POST_UPDATE_SLEEP
    elapsed=$(( SECONDS - start + update_offset ))
    if [ "$elapsed" -ge "$CHECK_TIMEOUT" ]; then
      echo ""
      if [ "$checks_ever_seen" = false ]; then
        warn "No checks detected after ${CHECK_TIMEOUT}s — proceeding to merge"
        return 0
      fi
      return 124
    fi

    checks_output=$(gh pr checks "$pr_num" --repo "$REPO" 2>/dev/null) || checks_output=""
    total=$(echo "$checks_output" | awk -F'\t' 'NF>1' | wc -l | tr -d ' ')
    pending=$(echo "$checks_output" | awk -F'\t' 'NF>1 && $2=="pending"' | wc -l | tr -d ' ')
    failing=$(echo "$checks_output" | awk -F'\t' 'NF>1 && $2=="fail"' | wc -l | tr -d ' ')
    passing=$(echo "$checks_output" | awk -F'\t' 'NF>1 && $2=="pass"' | wc -l | tr -d ' ')

    [ "$total" -gt 0 ] && checks_ever_seen=true

    printf "\r  Watching checks: [%ds] %s checks — %s ✓  %s ⏳  %s ✗" \
      "$elapsed" "$total" "$passing" "$pending" "$failing"

    # Done when nothing is pending
    if [ "$total" -gt 0 ] && [ "$pending" -eq 0 ]; then
      echo ""
      if [ "$failing" -gt 0 ]; then
        fail "Failing checks:"
        echo "$checks_output" | awk -F'\t' 'NF>1 && $2=="fail" {print "      " $1}' | head -5
        return 1
      fi
      return 0
    fi

    sleep "$CHECK_POLL_INTERVAL"
  done
}

# ─────────────────────────────────────────────────────────────────────────────
# Process each approved PR
# ─────────────────────────────────────────────────────────────────────────────
MERGED=0
FAILED=0
MERGED_NUMS=""
FAILED_ITEMS=""
WOULD_MERGE=0
WOULD_MERGE_NUMS=""

while IFS=$'\t' read -r PR_NUM PR_TITLE; do
  [ -z "$PR_NUM" ] && continue

  echo -e "$HR"
  echo -e "${BOLD}PR #${PR_NUM}${NC}  ${PR_TITLE}"

  if [ "$DRY_RUN" = true ]; then
    ok "DRY RUN: would update branch, wait for checks, then merge"
    WOULD_MERGE=$(( WOULD_MERGE + 1 ))
    WOULD_MERGE_NUMS="${WOULD_MERGE_NUMS} #${PR_NUM}"
    continue
  fi

  # ── Step 1: Update branch from main ──────────────────────────────────────
  info "Updating branch from main..."
  UPDATE_OUT=$(gh pr update-branch "$PR_NUM" --repo "$REPO" 2>&1)
  UPDATE_EXIT=$?
  BRANCH_UPDATED=false

  if [ $UPDATE_EXIT -ne 0 ]; then
    fail "Branch update failed (merge conflict?). Skipping."
    info "gh output: $UPDATE_OUT"
    FAILED=$(( FAILED + 1 ))
    FAILED_ITEMS="${FAILED_ITEMS}\n    #${PR_NUM}: branch update failed (conflict?)"
    continue
  fi

  if echo "$UPDATE_OUT" | grep -qi "already up to date"; then
    ok "Branch already up to date with main"
  else
    ok "Branch updated"
    BRANCH_UPDATED=true
  fi

  # ── Step 2: Wait for checks ───────────────────────────────────────────────
  wait_for_checks "$PR_NUM" "$BRANCH_UPDATED"
  CHECKS_EXIT=$?

  case $CHECKS_EXIT in
    0)   ok "All checks passed" ;;
    124) fail "Checks timed out after ${CHECK_TIMEOUT}s. Skipping."
         FAILED=$(( FAILED + 1 ))
         FAILED_ITEMS="${FAILED_ITEMS}\n    #${PR_NUM}: checks timed out"
         continue ;;
    *)   fail "Checks failed. Skipping."
         FAILED=$(( FAILED + 1 ))
         FAILED_ITEMS="${FAILED_ITEMS}\n    #${PR_NUM}: checks failed"
         continue ;;
  esac

  # ── Step 3: Merge ─────────────────────────────────────────────────────────
  info "Merging..."
  # shellcheck disable=SC2086
  MERGE_OUT=$(gh pr merge "$PR_NUM" --repo "$REPO" $MERGE_FLAG ${DELETE_BRANCH_FLAG} 2>&1)
  if [ $? -eq 0 ]; then
    ok "Merged successfully"
    MERGED=$(( MERGED + 1 ))
    MERGED_NUMS="${MERGED_NUMS} #${PR_NUM}"
  else
    fail "Merge failed: $MERGE_OUT"
    FAILED=$(( FAILED + 1 ))
    FAILED_ITEMS="${FAILED_ITEMS}\n    #${PR_NUM}: merge command failed"
  fi

done < "$APPROVED_FILE"

# ─────────────────────────────────────────────────────────────────────────────
# Update local main
# ─────────────────────────────────────────────────────────────────────────────
echo -e "$HR"
if [ "$MERGED" -gt 0 ] && [ "$DRY_RUN" = false ]; then
  info "Updating local main branch..."
  PREV_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
  if git checkout main --quiet 2>/dev/null && git pull origin main --quiet 2>/dev/null; then
    ok "Local main updated"
    if [ -n "$PREV_BRANCH" ] && [ "$PREV_BRANCH" != "main" ] && [ "$PREV_BRANCH" != "HEAD" ]; then
      git checkout "$PREV_BRANCH" --quiet 2>/dev/null || true
    fi
  else
    warn "Could not update local main (worktree or detached HEAD?)"
  fi
fi

# ─────────────────────────────────────────────────────────────────────────────
# Remaining PR statistics
# ─────────────────────────────────────────────────────────────────────────────
echo ""
echo "Fetching remaining PR stats..."
STATS_FILE="$TMPDIR_SCRIPT/stats.json"
gh api graphql \
  -f owner="department-of-veterans-affairs" \
  -f repo="vets-design-system-documentation" \
  -f query='query($owner:String!,$repo:String!){
    repository(owner:$owner,name:$repo){
      pullRequests(first:100,states:OPEN){
        nodes{ isDraft reviewDecision }
      }
    }
  }' > "$STATS_FILE" 2>/dev/null || echo '{}' > "$STATS_FILE"

read -r REMAINING_TOTAL REMAINING_DRAFT REMAINING_AWAITING REMAINING_APPROVED < <(
  python3 - "$STATS_FILE" <<'PYEOF'
import json, sys
try:
    with open(sys.argv[1]) as f:
        data = json.load(f)
    prs = data['data']['repository']['pullRequests']['nodes']
    draft    = sum(1 for p in prs if p['isDraft'])
    awaiting = sum(1 for p in prs if not p['isDraft'] and p['reviewDecision'] in ('REVIEW_REQUIRED', None))
    approved = sum(1 for p in prs if not p['isDraft'] and p['reviewDecision'] == 'APPROVED')
    print(len(prs), draft, awaiting, approved)
except Exception as e:
    print('? ? ? ?')
PYEOF
)

# ─────────────────────────────────────────────────────────────────────────────
# Summary
# ─────────────────────────────────────────────────────────────────────────────
echo -e "$HR"
echo -e "${BOLD}Summary${NC}\n"
if [ "$DRY_RUN" = true ]; then
  echo -e "  ${GREEN}Would merge:${NC}    $WOULD_MERGE PR(s)${WOULD_MERGE_NUMS:+  ($WOULD_MERGE_NUMS)}"
else
  echo -e "  ${GREEN}Merged:${NC}         $MERGED PR(s)${MERGED_NUMS:+  ($MERGED_NUMS)}"
  echo -e "  ${RED}Failed/Skipped:${NC} $FAILED PR(s)"
  [ -n "$FAILED_ITEMS" ] && echo -e "$FAILED_ITEMS"
fi
echo ""
echo -e "  ${BOLD}Remaining open PRs:${NC} $REMAINING_TOTAL"
echo "    Awaiting review:     $REMAINING_AWAITING"
echo "    Approved (not yet merged): $REMAINING_APPROVED"
echo "    Drafts:              $REMAINING_DRAFT"
echo -e "$HR\n"
