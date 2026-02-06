#!/bin/bash

# Script to create three 21-4138 prefill pattern issues
# Requires: GitHub CLI (gh) to be installed and authenticated
# Usage: ./create-issues.sh

set -e

echo "Creating 21-4138 Prefill Pattern Issues..."
echo ""

# Check if gh CLI is installed and authenticated
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "Error: GitHub CLI is not authenticated."
    echo "Please run: gh auth login"
    exit 1
fi

# Create Issue 1
echo "Creating Issue 1: Identify logged in user is the Veteran..."
ISSUE1=$(gh issue create \
  --title "21-4138 prefill pattern, identify the logged in user is the Veteran" \
  --body-file issue-1-identify-veteran.md \
  --label "platform-design-system-team,21-4138,prefill-pattern" \
  --repo department-of-veterans-affairs/vets-design-system-documentation)

echo "✓ Created: $ISSUE1"
echo ""

# Create Issue 2
echo "Creating Issue 2: Implement prefill pattern as logged in Veteran..."
ISSUE2=$(gh issue create \
  --title "21-4138 implement prefill pattern as the logged in Veteran" \
  --body-file issue-2-implement-veteran-prefill.md \
  --label "platform-design-system-team,21-4138,prefill-pattern,component-update" \
  --repo department-of-veterans-affairs/vets-design-system-documentation)

echo "✓ Created: $ISSUE2"
echo ""

# Create Issue 3
echo "Creating Issue 3: Implement prefill pattern as someone else..."
ISSUE3=$(gh issue create \
  --title "21-4138 implement prefill pattern as someone else besides the Veteran" \
  --body-file issue-3-implement-non-veteran-prefill.md \
  --label "platform-design-system-team,21-4138,prefill-pattern,component-update" \
  --repo department-of-veterans-affairs/vets-design-system-documentation)

echo "✓ Created: $ISSUE3"
echo ""

echo "All issues created successfully!"
echo ""
echo "Issue 1: $ISSUE1"
echo "Issue 2: $ISSUE2"
echo "Issue 3: $ISSUE3"
echo ""
echo "Next steps:"
echo "1. Add issues to the appropriate project board"
echo "2. Link to quarterly epic if applicable"
echo "3. Assign to team members"
echo "4. Update priorities based on sprint planning"
