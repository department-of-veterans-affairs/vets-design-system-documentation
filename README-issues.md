# 21-4138 Prefill Pattern Issues - Creation Guide

This directory contains three issue templates for implementing the 21-4138 prefill pattern.

## Overview

The 21-4138 form ("Submit a statement to support a claim") requires a comprehensive prefill pattern implementation. This work is broken down into three sequential issues:

1. **Issue 1**: Identify the logged in user is the Veteran
2. **Issue 2**: Implement prefill pattern as the logged in Veteran
3. **Issue 3**: Implement prefill pattern as someone else besides the Veteran

## Files

- `issue-1-identify-veteran.md` - Issue template for user identification
- `issue-2-implement-veteran-prefill.md` - Issue template for Veteran prefill implementation
- `issue-3-implement-non-veteran-prefill.md` - Issue template for non-Veteran prefill implementation
- `create-issues.sh` - Helper script to create all three issues

## References

- **Figma Design**: https://www.figma.com/design/w2tRlZ5qJSOF968XoWzBRg/Staging-%7C-21-4138---Submit-a-statement-to-support-a-claim?node-id=3822-19206&p=f&m=dev
- **Mock Form**: https://staging.va.gov/mock-form-prefill/introduction

## How to Create the Issues

### Option 1: Using the GitHub CLI (Recommended)

Run the provided script:

```bash
./create-issues.sh
```

This will create all three issues with the proper labels and formatting.

### Option 2: Manual Creation

1. Go to https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new
2. Copy the content from each markdown file
3. Create issues with these titles:
   - "21-4138 prefill pattern, identify the logged in user is the Veteran"
   - "21-4138 implement prefill pattern as the logged in Veteran"
   - "21-4138 implement prefill pattern as someone else besides the Veteran"
4. Add labels: `platform-design-system-team`, `21-4138`, `prefill-pattern`

### Option 3: Using GitHub API

```bash
# Set your GitHub token
export GITHUB_TOKEN="your_token_here"

# Create Issue 1
gh issue create --title "21-4138 prefill pattern, identify the logged in user is the Veteran" \
  --body-file issue-1-identify-veteran.md \
  --label "platform-design-system-team,21-4138,prefill-pattern"

# Create Issue 2
gh issue create --title "21-4138 implement prefill pattern as the logged in Veteran" \
  --body-file issue-2-implement-veteran-prefill.md \
  --label "platform-design-system-team,21-4138,prefill-pattern,component-update"

# Create Issue 3
gh issue create --title "21-4138 implement prefill pattern as someone else besides the Veteran" \
  --body-file issue-3-implement-non-veteran-prefill.md \
  --label "platform-design-system-team,21-4138,prefill-pattern,component-update"
```

## Issue Relationships

These issues should be completed sequentially:

1. **Issue 1** establishes the foundation for identifying user types
2. **Issue 2** builds on Issue 1 to implement Veteran prefill
3. **Issue 3** builds on Issues 1 and 2 to handle non-Veteran scenarios

Consider linking these issues to an epic for better project tracking.

## Next Steps After Creation

1. Add issues to the appropriate project board
2. Link to the quarterly epic if applicable
3. Assign to the appropriate team members
4. Update issue priorities based on sprint planning
5. Add any additional context or requirements discovered during planning

## Questions or Issues?

Contact the Design & Forms Systems team via:
- Slack: `#platform-design-system`
- GitHub: @department-of-veterans-affairs/platform-design-system-team
