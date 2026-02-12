# AGENTS.md

Universal project instructions for AI coding agents working in this repository.

## Project Overview

This is the VA Design System Documentation site ([design.va.gov](https://design.va.gov)) built with Jekyll. This repo contains **documentation only** — the actual components and base styles live in the [component-library](https://github.com/department-of-veterans-affairs/component-library) repo.

The VA Design System documentation serves as the central hub for:
- **Components**: Reusable UI building blocks with usage guidelines
- **Patterns**: Common design solutions for user workflows
- **Templates**: Page-level layouts and structures
- **Content Style Guide**: Writing standards and voice/tone guidance
- **Foundation**: Visual design principles, spacing, typography, and colors
- **Information Architecture (IA)**: Content organization and navigation guidance
- **Accessibility**: Standards and testing guidance for inclusive design

### Target Audiences

- **VFS Teams**: Product teams building Veteran-facing applications
- **Developers**: Frontend engineers implementing VA.gov interfaces
- **Designers**: UX/UI designers creating Veteran experiences
- **Content Writers**: Content strategists and writers
- **Accessibility Specialists**: 508 compliance and inclusive design experts
- **IA Specialists**: Information architects organizing content and navigation

## Development Commands

```bash
# Setup
yarn install                    # Install Node dependencies
bundle install                  # Install Ruby gems (requires Ruby 3.3.8)

# Development
yarn start                      # Build and serve at localhost:4000
yarn watch                      # Build with incremental updates
yarn build                      # Run Gulp build pipeline only
```

## Architecture

### Tech Stack

- **Jekyll 4.3.x**: Static site generator
- **Ruby/Bundler**: Dependency management
- **Sass**: CSS preprocessing with Dart Sass
- **Gulp**: Build tooling and asset processing

### Build Pipeline

1. **Gulp** processes assets first (`gulp build`)
2. **Jekyll** generates static site from `/src` to `/_site`

### Key Directories

```
src/
├── _components/          # Component documentation
├── _patterns/            # Design pattern guidance
├── _templates/           # Page template documentation
├── _content-style-guide/ # Writing and content guidance
├── _foundation/          # Visual design fundamentals
├── _accessibility/       # Accessibility guidance
├── _ia/                  # Information architecture guidance
├── _data/                # YAML data files for navigation, colors, etc.
├── _includes/            # Reusable template partials
└── _layouts/             # Page layout templates
```

Other key directories:
- `/config/gulp/` — Gulp task configurations
- `/jekyll-configs/` — Environment-specific Jekyll configs

### Data Sources

- `src/_data/tokens/` — Design tokens (CSV/JSON)
- `src/_data/component-docs.json` — Auto-generated component specs from Stencil
- External packages: `@department-of-veterans-affairs/component-library` (components and base styles)

### Related Systems

- **Component Library**: [department-of-veterans-affairs/component-library](https://github.com/department-of-veterans-affairs/component-library) — The actual web components and CSS
- **Storybook**: [design.va.gov/storybook](https://design.va.gov/storybook/) — Interactive component documentation
- **Figma Libraries**: Design system assets and templates
- **vets-website**: [department-of-veterans-affairs/vets-website](https://github.com/department-of-veterans-affairs/vets-website) — Primary consumer of the component library

## Content Structure

Documentation is organized in Jekyll collections:
- `_components` — Individual component docs with examples
- `_patterns` — UX patterns and workflows
- `_templates` — Page template documentation
- `_content-style-guide` — Writing guidelines
- `_foundation` — Design tokens, colors, typography
- `_accessibility` — Accessibility guidance
- `_ia` — Information architecture guidance

## Content Guidelines & Standards

### Writing Standards

All content must follow the VA.gov Content Style Guide principles:
- **Plain Language**: Use simple, clear language that Veterans can understand
- **Veteran-First**: In Veteran-facing content, use "Veterans" or "people" instead of "users." Address Veterans as "you" and refer to VA as "we." In design system documentation, "user" is appropriate for user research, user experience, and user testing contexts.
- **Consistent**: Use standardized terminology from the word list
- **Accessible**: Write for screen readers and diverse literacy levels
- **Conversational**: Avoid bureaucratic language and jargon

### Key Content Principles

1. **Better content, not better bureaucracy**
2. **Based on Veteran feedback**
3. **Consistent voice and tone**
4. **Person-first language**

### Critical YAML Front Matter

**NEVER modify YAML front matter** (content between `---` lines) when editing markdown files without prompting the user. This includes:
- `title`, `layout`, `permalink`
- `intro-text`, `status`, `web-component`
- Navigation and metadata fields

Only edit the markdown content below the closing `---` line.

## Component & Pattern Documentation

### Component Template Structure

Components use `src/_components/template.md` as the base structure:
- **Status**: `use-with-caution-candidate`, `use-deployed`, etc.
- **Examples**: Web and mobile implementations
- **Usage Guidelines**: When/when not to use
- **Accessibility**: Screen reader and keyboard navigation notes
- **Research**: Links to user research and usability testing

### Pattern Template Structure

Patterns use `src/_patterns/template.md` with these sections:
- **Sub-sections**: `ask-users-to` or `help-users-to` categories
- **Examples**: Production implementations and external references
- **Usage**: When to use this pattern
- **Research**: Supporting user research

### Naming Conventions

Follow established naming conventions:
- **General Guidelines**: [design.va.gov/about/naming-conventions](https://design.va.gov/about/naming-conventions/)
- **CSS Conventions**: [design.va.gov/about/naming-conventions/css](https://design.va.gov/about/naming-conventions/css)

## Code Generation Guidelines

When generating or modifying code for this repository:

1. **Preserve Structure**: Never modify YAML front matter in markdown files without prompting the user
2. **Follow Patterns**: Use existing templates and conventions
3. **Content Standards**: Apply VA content style guide principles
4. **Accessibility First**: Include accessibility considerations in all guidance
5. **Research-Based**: Reference user research and testing when available
6. **Consistency**: Maintain consistency with existing documentation patterns
7. **Plain Language**: Use clear, plain language appropriate for a technical audience, following VA.gov Content Style Guide and VADS plain language guidance
8. **Cross-Reference**: Link related components, patterns, and guidance appropriately

## Deployment

- **Production**: `design.va.gov` (deploys automatically after CI completes on merges to `main`)
- **Pull request previews**: each PR generates an isolated preview environment at `https://dev-design.va.gov/[PR#]/`
- `dev-design.va.gov` is used only for PR preview environments, not as a long-lived Dev environment
- Hosted and deployed via GitHub Pages

## Testing Component Library Changes

To test local component library changes:
1. Clone `component-library` repo alongside this one
2. Update `package.json` to use local component library: `"file:../component-library"`
3. Run build commands in component library repo after changes
4. Run `yarn build` in this repo to rebuild

## Accessibility Requirements

### Compliance Standards

- **Section 508**: Federal accessibility requirements
- **WCAG 2.2 AA**: Web Content Accessibility Guidelines
- **VA 508 Office**: Internal accessibility review and approval

### Testing Requirements

- Screen reader compatibility
- Keyboard navigation
- Color contrast ratios
- Focus management
- Alternative text for images

## GitHub CLI Usage

Use the GitHub CLI (`gh`) for all GitHub-related operations.

**IMPORTANT**: When using the `--json` flag with any GitHub CLI command, ALWAYS pipe the output to `cat` (e.g., `gh issue list --json number,title | cat`) to prevent the output from going to a pager which agents cannot interact with.

### Issue Management
```bash
# Create new issues
gh issue create --title "Issue title" --body "Description"

# Update existing issues
gh issue edit [issue-number] --title "New title" --body "Updated description"

# List issues (ALWAYS pipe to cat with --json flag)
gh issue list --state open --json number,title,body --limit 100 | cat

# Close issues
gh issue close [issue-number]
```

### Pull Request Management
```bash
# Create pull requests
gh pr create --title "PR title" --body "Description" --draft

# Review pull requests
gh pr review [pr-number] --approve
gh pr review [pr-number] --request-changes --body "Feedback"

# Merge pull requests
gh pr merge [pr-number] --squash
```

### Repository Operations
```bash
# Clone repositories
gh repo clone department-of-veterans-affairs/vets-design-system-documentation

# View repository information
gh repo view
```

## Contribution Process

1. **Centralized Team**: All contributions go through the Design & Forms Systems team
2. **Review Team**: PRs reviewed by [platform-design-system-team](https://github.com/orgs/department-of-veterans-affairs/teams/platform-design-system-team)
3. **Preview Deployments**: Each PR generates a preview at `https://dev-design.va.gov/[PR#]/`
4. **Production**: Merged PRs deploy to [design.va.gov](https://design.va.gov)

### Common Tasks

- **Adding New Components**: Use `src/_components/template.md` as starting point
- **Adding New Patterns**: Use `src/_patterns/template.md` as starting point
- **Updating Guidance**: Follow content style guide standards
- **Content Updates**: Maintain consistency with existing voice/tone

## PR Review Guidelines

When reviewing pull requests that modify guidance content in the following paths:
- `src/_components/**/*.md`
- `src/_patterns/**/*.md`
- `src/_templates/**/*.md`
- `src/_content-style-guide/**/*.md`
- `src/_foundation/**/*.md`
- `src/_accessibility/**/*.md`
- `src/_ia/**/*.md`
- `src/_about/**/*.md`

**You must perform a comprehensive content style guide review** following the detailed instructions in [.github/prompts/Guidance-follow-content-style-guide.prompt.md](.github/prompts/Guidance-follow-content-style-guide.prompt.md).

## File Organization Best Practices

### Markdown Files

- Use descriptive filenames with hyphens (kebab-case)
- Include proper YAML front matter
- Follow content style guide for writing
- Link to related components/patterns

### Asset Management

- Images go in `src/assets/img/` or `src/images/`
- Use SVG for icons when possible
- Optimize images for web performance
- Include alt text for all images

### Data Files

- Navigation in `src/_data/`
- Color tokens and design tokens as YAML
- Component maturity data as JSON

## Integration Guidelines

### Storybook Integration

- Reference Storybook examples using `{% include storybook-preview.html %}`
- Maintain consistency between documentation and live examples
- Link to component library source code

### Figma Integration

- Link to specific Figma components/patterns
- Use standardized Figma URLs in front matter
- Reference design tokens and specifications

## Quality Assurance

### Content Review Checklist

- [ ] Follows VA content style guide
- [ ] Uses plain language principles
- [ ] Includes accessibility guidance
- [ ] Links to relevant research
- [ ] References correct component/pattern names
- [ ] Matches Storybook implementation

### Technical Review Checklist

- [ ] YAML front matter intact
- [ ] Proper markdown formatting
- [ ] Working internal/external links
- [ ] Optimized images with alt text
- [ ] Responsive design considerations

## Important Notes

- Local Jest test suite is available (see `__tests__/` and `jest.config.js`) — run tests locally before opening a PR
- Component development happens in separate repos
- This site consumes and documents components, doesn't implement them
- Uses Storybook integration for live component examples

## Available Workflows

This repo includes automated workflows in `.claude/skills/` to help with common tasks. These are discoverable by agents that read skill files.

### Documentation Queue Processing
Helps designers efficiently process documentation and guidance issues from quarterly epics. Finds the current quarterly documentation epic, presents oldest unassigned issues, assigns the issue, guides through making documentation changes, creates a PR, and updates the project board.

See `.claude/skills/doc-queue/SKILL.md` for full details.

### Documentation Writing Standards
Ensures documentation follows VADS templates and style standards when writing component, pattern, or template guidance. Loads the appropriate template, ensures documentation structure matches, handles deviations when justified, enforces YAML front matter protection, and provides required Jekyll include syntax.

See `.claude/skills/writing-vads-guidance/SKILL.md` for full details.

### Accessibility Knowledge Base
Provides explicit instructions for answering questions about designing and building accessible web applications using the VA Design System (VADS). All guidance is based on documented VADS accessibility standards and requirements.

See `.claude/skills/accessibility/SKILL.md` for full details.

## Support & Resources

### Internal Contacts

- **Design System Team**: #platform-design-system Slack channel
- **Content & IA Team**: #content-ia-centralized-team Slack channel
- **Accessibility**: VA 508 Office

### External Resources

- **VA Web Governance**: [digital.va.gov/web-governance](https://digital.va.gov/web-governance/)
- **U.S. Web Design System**: [designsystem.digital.gov](https://designsystem.digital.gov)
- **21st Century IDEA**: Federal digital experience requirements

### Key URLs

- **Production Site**: [design.va.gov](https://design.va.gov)
- **Component Library**: [GitHub repo](https://github.com/department-of-veterans-affairs/component-library)
- **Storybook**: [design.va.gov/storybook](https://design.va.gov/storybook/)
- **Research Repository**: [va.gov-research-repository](https://github.com/department-of-veterans-affairs/va.gov-research-repository)

### Additional Resources

- `.claude/commands/issues.md` — Complete guide for managing GitHub issues and using issue templates
- `.github/github-issue-commands.md` — GitHub CLI and workflow commands for managing issues in this repo

This documentation serves Veterans and the teams that serve them. Every contribution should make it easier for VFS teams to create accessible, consistent, and Veteran-centered digital experiences.
