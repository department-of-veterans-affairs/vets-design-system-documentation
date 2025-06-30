# GitHub Issues Commands & Workflows

This guide provides Claude Code with context on handling GitHub issues for the VA Design System Documentation repository.

## Repository Context

- **Primary Team**: `@department-of-veterans-affairs/platform-design-system-team`
- **Project Board**: Issues automatically added via GitHub Actions
- **Primary Labels**: `platform-design-system-team`, component-specific labels
- **Communication**: Issues discussed in `#platform-design-system` Slack channel

## Key GitHub CLI Commands

### Viewing Issues

```bash
# List all open issues
gh issue list

# List issues with specific labels
gh issue list --label "platform-design-system-team"
gh issue list --label "bug"
gh issue list --label "va-alert"

# View specific issue
gh issue view <issue-number>

# Search issues
gh issue list --search "accessibility"
gh issue list --assignee "@me"
```

### Creating Issues

```bash
# Create issue interactively
gh issue create

# Create issue with template
gh issue create --template "1_bug_template.md"
gh issue create --template "2_documentation_request_form.yml"

# Create issue with specific details
gh issue create --title "Bug: Component not rendering" --body "Description..." --label "bug,platform-design-system-team"
```

### Managing Issues

```bash
# Assign issue
gh issue edit <issue-number> --add-assignee "username"

# Add/remove labels
gh issue edit <issue-number> --add-label "component-update"
gh issue edit <issue-number> --remove-label "needs-triage"

# Close issue
gh issue close <issue-number> --comment "Fixed in PR #123"

# Reopen issue
gh issue reopen <issue-number>
```

## Issue Templates & When to Use

### 1. Bug Report (`1_bug_template.md`)

**Use for**: Component malfunctions, documentation errors, broken functionality
**Labels**: `platform-design-system-team`, `bug`
**Required Info**: 
- Formation version
- Device/browser
- Reproduction steps
- Urgency level

### 2. Documentation Request (`2_documentation_request_form.yml`)

**Use for**: Missing docs, outdated guidance, new component documentation
**Labels**: `platform-design-system-team`
**Categories**: Component, Pattern, Utility, Content style guide, Forms Library

### 3. Support Question (`4_support_question.md`)

**Use for**: Implementation help, usage questions, best practices
**Process**: Often redirected to Slack for faster resolution

### 4. DST Internal Templates (DST-*)

**Use for**: Internal Design System Team workflows
**Templates**:
- `DST-basic_issue_template.md` - General team tasks
- `DST-component_development.md` - New component development
- `DST-component_design.md` - Design phase tasks
- `DST-component_documentation.md` - Documentation creation
- `DST-component_accessibility_review.md` - A11y audits
- `DST-component_final_review.md` - Pre-release review

## Component-Specific Workflows

### Component Labels

Common component labels to use:

- `va-alert`, `va-button`, `va-accordion`, `va-breadcrumbs`
- `va-card`, `va-checkbox`, `va-date-input`, `va-file-input`
- `va-header`, `va-footer`, `va-modal`, `va-pagination`

### Component Lifecycle Labels

- `component-new` - Brand new component request
- `component-update` - Enhancement to existing component
- `needs-design` - Requires design work
- `needs-development` - Ready for development
- `needs-documentation` - Requires documentation
- `needs-review` - Ready for review

## Issue Triage Process

1. **Auto-labeling**: New issues get `platform-design-system-team` label
2. **Auto-assignment**: Issues added to project board automatically
3. **Manual triage**: Team adds component labels and status labels
4. **Epic assignment**: Link to appropriate epic/milestone

## Common Issue Management Workflows

### Bug Triage

```bash
# Create bug issue
gh issue create --template "1_bug_template.md"

# Add component label after creation
gh issue edit <issue-number> --add-label "va-alert"

# Assign to team member
gh issue edit <issue-number> --add-assignee "developer-username"
```

### Documentation Updates

```bash
# Create documentation request
gh issue create --template "2_documentation_request_form.yml"

# Link to related component issue
gh issue comment <issue-number> --body "Related to component issue #456"
```

### Component Development Tracking

```bash
# Create development epic with related issues
gh issue create --title "Epic: New va-toast component" --label "epic,component-new"

# Create sub-tasks
gh issue create --title "Design: va-toast component" --template "DST-component_design.md"
gh issue create --title "Development: va-toast component" --template "DST-component_development.md"
gh issue create --title "Documentation: va-toast component" --template "DST-component_documentation.md"
```

## Integration with External Repos

### Component Library Integration

- Component issues may reference `department-of-veterans-affairs/component-library`
- Implementation happens in component-library repo
- Documentation updates happen in this repo

### Cross-repo Issue Management

```bash
# Reference issues across repos
gh issue comment <issue-number> --body "Implementation tracked in department-of-veterans-affairs/component-library#123"

# Search issues across VA org
gh search issues --owner department-of-veterans-affairs "va-alert accessibility"
```

## Automation & Webhooks

- **Project Integration**: All new issues automatically added to project board
- **Slack Integration**: Issue updates posted to `#platform-design-system`
- **Label-based Routing**: Certain labels trigger team notifications

## Best Practices for Claude

1. **Always check existing issues** before creating new ones
2. **Use appropriate templates** based on issue type
3. **Add component-specific labels** when applicable
4. **Reference related issues/PRs** for context
5. **Include reproduction steps** for bugs
6. **Specify urgency level** for bugs affecting production
7. **Cross-reference** component-library repo when relevant