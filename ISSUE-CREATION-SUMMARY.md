# 21-4138 Prefill Pattern - Issue Creation Summary

## What Was Created

I've prepared **three comprehensive issue templates** for the 21-4138 prefill pattern implementation, along with helper tools to streamline the issue creation process.

### Files Created

1. **`issue-1-identify-veteran.md`** - Template for identifying when the logged-in user is the Veteran
2. **`issue-2-implement-veteran-prefill.md`** - Template for implementing prefill when user is the Veteran
3. **`issue-3-implement-non-veteran-prefill.md`** - Template for implementing prefill for non-Veteran users
4. **`create-issues.sh`** - Automated script to create all three issues at once
5. **`README-issues.md`** - Comprehensive guide with multiple creation options

## Quick Start: Create the Issues Now

### Method 1: Automated (Recommended) ✨

If you have GitHub CLI installed and authenticated:

```bash
./create-issues.sh
```

This will create all three issues with proper labels in one command.

### Method 2: Using GitHub CLI Manually

```bash
# Issue 1: Identify
gh issue create \
  --title "21-4138 prefill pattern, identify the logged in user is the Veteran" \
  --body-file issue-1-identify-veteran.md \
  --label "platform-design-system-team,21-4138,prefill-pattern"

# Issue 2: Implement Veteran Prefill
gh issue create \
  --title "21-4138 implement prefill pattern as the logged in Veteran" \
  --body-file issue-2-implement-veteran-prefill.md \
  --label "platform-design-system-team,21-4138,prefill-pattern,component-update"

# Issue 3: Implement Non-Veteran Prefill
gh issue create \
  --title "21-4138 implement prefill pattern as someone else besides the Veteran" \
  --body-file issue-3-implement-non-veteran-prefill.md \
  --label "platform-design-system-team,21-4138,prefill-pattern,component-update"
```

### Method 3: Manual Creation via GitHub UI

1. Navigate to: https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new
2. Copy content from each markdown file
3. Use these exact titles:
   - `21-4138 prefill pattern, identify the logged in user is the Veteran`
   - `21-4138 implement prefill pattern as the logged in Veteran`
   - `21-4138 implement prefill pattern as someone else besides the Veteran`
4. Add labels: `platform-design-system-team`, `21-4138`, `prefill-pattern`

## Issue Details

### Issue 1: Identify Logged In User is the Veteran

**Purpose**: Establish the foundation for identifying user types  
**Key Tasks**:
- Review Figma designs for identification flow
- Document authentication state requirements
- Define technical approach for identifying Veteran status
- Identify edge cases (representative, delegate access, POA)

**Acceptance Criteria**:
- Clear criteria for identifying when logged-in user is the Veteran
- Documentation of authentication state checks
- Technical approach documented and reviewed
- Edge cases identified and documented

### Issue 2: Implement Prefill Pattern as Logged In Veteran

**Purpose**: Implement prefill when the Veteran is logged in  
**Prerequisites**: Issue 1 must be completed  
**Key Tasks**:
- Identify which fields should be prefilled
- Map data sources to form fields
- Implement prefill logic for logged-in Veteran
- Add user messaging for prefilled data
- Create unit and integration tests

**Acceptance Criteria**:
- Veteran's personal information correctly prefilled
- All required fields populated from appropriate data sources
- Veterans can review and edit prefilled information
- Clear messaging indicates prefilled information
- Comprehensive test coverage (>80%)
- Accessibility compliance verified

### Issue 3: Implement Prefill Pattern for Non-Veteran Users

**Purpose**: Handle prefill when someone other than the Veteran is submitting  
**Prerequisites**: Issues 1 and 2 must be completed  
**Key Tasks**:
- Identify user roles (representative, POA, family, VSO, attorney)
- Define role-based prefill requirements
- Implement role-based prefill logic
- Handle cases where Veteran information is unavailable
- Create comprehensive tests for all scenarios

**Acceptance Criteria**:
- System correctly identifies non-Veteran users and their relationship
- Appropriate fields prefilled based on user role
- Clear distinction between submitter and Veteran information
- Handles different representative types correctly
- Privacy and security requirements met
- All edge cases handled (expired POA, multiple representatives)

## Implementation Sequence

These issues are **sequential** and should be completed in order:

```
Issue 1: Identify User Type
    ↓
Issue 2: Veteran Prefill Implementation
    ↓
Issue 3: Non-Veteran Prefill Implementation
```

## References

- **Figma Design**: https://www.figma.com/design/w2tRlZ5qJSOF968XoWzBRg/Staging-%7C-21-4138---Submit-a-statement-to-support-a-claim?node-id=3822-19206&p=f&m=dev
- **Mock Form**: https://staging.va.gov/mock-form-prefill/introduction

## Post-Creation Steps

After creating the issues:

1. ✅ Add issues to the appropriate project board
2. ✅ Link to quarterly epic (if applicable)
3. ✅ Assign to appropriate team members
4. ✅ Update priorities based on sprint planning
5. ✅ Create an epic to track all three issues together (recommended)

## Labels Applied

Each issue includes:
- `platform-design-system-team` - Routes to Design System team
- `21-4138` - Form-specific identifier
- `prefill-pattern` - Feature category
- `component-update` - (Issues 2 & 3) Indicates component work

## Team Context

- **Team**: @department-of-veterans-affairs/platform-design-system-team
- **Slack Channel**: #platform-design-system
- **Related Repos**: This documentation repo works alongside the component-library repo

## Additional Notes

- Each issue includes comprehensive acceptance criteria to ensure quality
- Security and accessibility considerations are built into requirements
- Edge cases are explicitly called out (POA, representatives, delegates)
- Testing requirements are specific (>80% coverage, integration tests)
- Privacy requirements are included for handling Veteran data

## Questions?

For questions about these issues or the 21-4138 implementation:
- Post in #platform-design-system Slack channel
- Tag @department-of-veterans-affairs/platform-design-system-team
- Reference the Figma designs and mock form linked above

---

**Ready to create the issues?** Run `./create-issues.sh` or follow one of the methods above!
