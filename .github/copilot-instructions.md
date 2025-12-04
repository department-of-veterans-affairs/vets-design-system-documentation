# VA Design System Documentation - GitHub Copilot Instructions

This repository contains the documentation for the VA Design System (VADS), which powers the guidance site at [design.va.gov](https://design.va.gov). This Jekyll-based site provides comprehensive guidance for Veteran-facing Service (VFS) teams designing and developing for VA.gov and the VA Health and Benefits Mobile application.

## Repository Overview

### Purpose

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

## Architecture & Technology

### Tech Stack

- **Jekyll 4.3.0**: Static site generator
- **Ruby/Bundler**: Dependency management
- **Sass**: CSS preprocessing with Dart Sass
- **Gulp**: Build tooling and asset processing
- **GitHub Pages**: Hosting and deployment

### Key Directories
```
src/
├── _components/          # Component documentation
├── _patterns/           # Design pattern guidance
├── _templates/          # Page template documentation
├── _content-style-guide/ # Writing and content guidance
├── _foundation/         # Visual design fundamentals
├── _accessibility/      # Accessibility guidance
├── _ia/                # Information architecture guidance
├── _data/              # YAML data files for navigation, colors, etc.
├── _includes/          # Reusable template partials
└── _layouts/           # Page layout templates
```

### Related Systems

- **Component Library**: [department-of-veterans-affairs/component-library](https://github.com/department-of-veterans-affairs/component-library) - The actual web components and CSS
- **Storybook**: [design.va.gov/storybook](https://design.va.gov/storybook/) - Interactive component documentation
- **Figma Libraries**: Design system assets and templates
- **vets-website**: [department-of-veterans-affairs/vets-website](https://github.com/department-of-veterans-affairs/vets-website) - Primary consumer of the component library

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

## Development Workflow

### Local Development

```bash
# Install dependencies
bundle install
yarn install

# Start development server
yarn run watch
# Site available at localhost:4000

# Build for production
yarn build
```

### GitHub CLI Integration

Use the GitHub CLI (`gh`) for all GitHub-related operations:

**IMPORTANT**: When using the `--json` flag with any GitHub CLI command, ALWAYS pipe the output to `cat` (e.g., `gh issue list --json number,title | cat`) to prevent the output from going to the less pager which cannot be read by Copilot.

#### Issue Management
```bash
# Create new issues
gh issue create --title "Issue title" --body "Description"

# Update existing issues
gh issue edit [issue-number] --title "New title" --body "Updated description"

# List issues
gh issue list --state open

# List issues with JSON output (ALWAYS pipe to cat with --json flag)
gh issue list --state open --json number,title,body --limit 100 | cat

# Close issues
gh issue close [issue-number]
```

#### Pull Request Management
```bash
# Create pull requests
gh pr create --title "PR title" --body "Description" --draft

# Update pull requests
gh pr edit [pr-number] --title "New title" --body "Updated description"

# Review pull requests
gh pr review [pr-number] --approve
gh pr review [pr-number] --request-changes --body "Feedback"

# Merge pull requests
gh pr merge [pr-number] --squash
```

#### Repository Operations
```bash
# Clone repositories
gh repo clone department-of-veterans-affairs/vets-design-system-documentation

# View repository information
gh repo view
```

### Contribution Process

1. **Centralized Team**: All contributions go through the Design & Forms Systems team
2. **Review Team**: PRs reviewed by [platform-design-system-team](https://github.com/orgs/department-of-veterans-affairs/teams/platform-design-system-team)
3. **Preview Deployments**: Each PR generates a preview at `https://dev-design.va.gov/[PR#]/`
4. **Production**: Merged PRs deploy to [design.va.gov](https://design.va.gov) via GitHub Pages

### Common Tasks

- **Adding New Components**: Use `src/_components/template.md` as starting point
- **Adding New Patterns**: Use `src/_patterns/template.md` as starting point
- **Updating Guidance**: Follow content style guide standards
- **Content Updates**: Maintain consistency with existing voice/tone

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

## Playwright MCP Setup for Government Environments

This repository is configured to use Playwright MCP (Model Context Protocol) for visual testing and layout verification, with special considerations for government-furnished computers that have restricted home directory permissions.

### Government Environment Setup

On government-furnished computers, Playwright browsers are installed in a shared location due to security restrictions:

```bash
# Browsers installed in shared location
/opt/ms-playwright/
├── chromium-1187/chrome-mac/Chromium.app/Contents/MacOS/Chromium
├── chromium-1193/chrome-mac/Chromium.app/Contents/MacOS/Chromium
├── firefox-1490/
├── webkit-2203/
└── ...
```

### VS Code MCP Configuration

The repository includes VS Code settings for Playwright MCP in `.vscode/settings.json`:

```json
{
  "mcp.mcpServers": {
    "playwright": {
      "command": "node",
      "args": ["/opt/nvm/versions/node/v18.20.8/lib/node_modules/@playwright/mcp/cli.js"],
      "env": {
        "PLAYWRIGHT_BROWSERS_PATH": "/opt/ms-playwright"
      }
    }
  }
}
```

### Installation Requirements

1. **Install Playwright MCP globally** (if not already installed):
   ```bash
   npm install -g @playwright/mcp
   ```

2. **Verify browser installation**:
   ```bash
   ls -la /opt/ms-playwright
   ```

3. **Test MCP server**:
   ```bash
   PLAYWRIGHT_BROWSERS_PATH=/opt/ms-playwright node /opt/nvm/versions/node/v18.20.8/lib/node_modules/@playwright/mcp/cli.js --help
   ```

### Using Playwright MCP for Layout Testing

#### Basic Usage Pattern

When you need to visually inspect layouts, responsive behavior, or debug CSS issues:

1. **Start Jekyll development server**:
   ```bash
   bundle exec jekyll serve --port 4000
   ```

2. **Create a test script for layout verification**:
   ```javascript
   const { chromium } = require('/opt/nvm/versions/node/v18.20.8/lib/node_modules/@playwright/mcp/node_modules/playwright-core');

   (async () => {
     const browser = await chromium.launch({
       headless: true,
       executablePath: `${process.env.PLAYWRIGHT_BROWSERS_PATH}/chromium-1187/chrome-mac/Chromium.app/Contents/MacOS/Chromium`
     });

     const context = await browser.newContext();
     const page = await context.newPage();

     // Test at multiple viewport sizes
     await page.setViewportSize({ width: 1200, height: 800 });
     await page.goto('http://localhost:4000/about/metrics/');

     // Your layout testing code here

     await browser.close();
   })();
   ```

3. **Run with custom browser path**:
   ```bash
   PLAYWRIGHT_BROWSERS_PATH=/opt/ms-playwright node your-test-script.js
   ```

#### Common Layout Testing Patterns

**Check responsive grid behavior**:
```javascript
const columnWidths = await page.locator('[class*="vads-l-col"]').evaluateAll(columns => {
  return columns.map((col, index) => {
    const rect = col.getBoundingClientRect();
    return {
      index,
      width: Math.round(rect.width),
      flexBasis: window.getComputedStyle(col).flexBasis
    };
  });
});
```

**Detect text overflow**:
```javascript
const overflowCheck = await page.locator('.metric-card').evaluateAll((cards) => {
  return cards.map((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const h3 = card.querySelector('h3');
    const h3Rect = h3 ? h3.getBoundingClientRect() : null;

    const hasOverflow = h3Rect && (h3Rect.right > cardRect.right);
    return { cardIndex: index, hasOverflow };
  });
});
```

**Test flexbox layout properties**:
```javascript
const flexProperties = await page.locator('.vads-l-row').evaluate(el => {
  const styles = window.getComputedStyle(el);
  return {
    display: styles.display,
    flexDirection: styles.flexDirection,
    flexWrap: styles.flexWrap
  };
});
```

#### MCP Integration Benefits

Once VS Code is reloaded with the MCP configuration, Copilot can directly:
- Take screenshots of pages at different viewport sizes
- Inspect element properties and computed styles
- Verify responsive behavior across breakpoints
- Debug layout issues in real browsers
- Test accessibility features and keyboard navigation

#### Troubleshooting

**Common issues and solutions**:

1. **"Module not found" errors**: Ensure the full path to playwright-core is used
2. **"Executable doesn't exist"**: Verify the Chromium path matches your installed version
3. **Permission denied**: Check that `/opt/ms-playwright` is accessible
4. **MCP not available**: Restart VS Code after adding `.vscode/settings.json`

**Environment variables for consistency**:
```bash
export PLAYWRIGHT_BROWSERS_PATH=/opt/ms-playwright
export NODE_PATH=/opt/nvm/versions/node/v18.20.8/lib/node_modules
```

### Testing Workflow Example

A typical workflow for layout testing in this repository:

1. Make CSS changes to metrics dashboard
2. Start Jekyll server on localhost:4000
3. Create Playwright test to verify responsive behavior
4. Run test across mobile (375px), tablet (768px), and desktop (1200px) viewports
5. Check for text overflow, proper spacing, and flexbox behavior
6. Iterate on CSS based on test results
7. Clean up test files when satisfied

This approach ensures consistent, cross-browser layout verification without requiring manual browser testing or complex CI setup in the government environment.

## Code Generation Guidelines

When generating or modifying code for this repository:

1. **Preserve Structure**: Never modify YAML front matter in markdown files without prompting the user
   - Always maintain the integrity of the front matter, which contains critical metadata for the documentation.
   - If changes are needed, ask the user for confirmation before proceeding.
   - This includes fields like `title`, `layout`, `permalink`, and any custom fields used for navigation or metadata.
   - Only edit the markdown content below the closing `---` line.
2. **Follow Patterns**: Use existing templates and conventions
3. **Content Standards**: Apply VA content style guide principles
4. **Accessibility First**: Include accessibility considerations in all guidance
5. **Research-Based**: Reference user research and testing when available
6. **Consistency**: Maintain consistency with existing documentation patterns
7. **Plain Language**: Write for Veterans and their families, not technical audiences
8. **Cross-Reference**: Link related components, patterns, and guidance appropriately
9. **Use GitHub CLI**: For all GitHub operations (issues, PRs, repositories), use the `gh` CLI tool rather than manual web interface operations
   - Create and update issues using `gh issue` commands
   - Manage pull requests with `gh pr` commands
   - Perform repository operations with `gh repo` commands
   - This ensures consistency, traceability, and automation-friendly workflows

## Pull Request Review Guidelines

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

This prompt file contains:
- Critical YAML front matter protection guidelines
- Specific content style guide requirements and links
- Review process steps
- Comment template for providing feedback

Always refer to the latest version of this prompt file when conducting content reviews to ensure you're applying the most current standards and guidelines.

This documentation serves Veterans and the teams that serve them. Every contribution should make it easier for VFS teams to create accessible, consistent, and Veteran-centered digital experiences.
