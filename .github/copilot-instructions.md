# GitHub Copilot Instructions

See [AGENTS.md](../AGENTS.md) for full project context, architecture, and guidelines.

This file contains GitHub Copilot-specific configuration.

## Copilot Coding Agent: Groomed Documentation Issues

When assigned an issue with the `groomed` label, follow this process to write documentation changes and open a draft PR.

### 1. Read the grooming comment

The issue will have a comment starting with `## Grooming Summary`. This is your work order. It contains:

- **Summary** — What needs to happen and why
- **Files to update** — Exact file paths and what to change in each
- **Changes to make** — Checklist of specific changes per file
- **Reference material** — Links to Figma, Storybook, related issues
- **Design decisions** — Decisions already made that you must follow (do not re-ask)
- **Acceptance criteria** — How to verify the work is complete
- **Out of scope** — What NOT to change

### 2. Read the writing standards

Before making any changes, read the documentation writing standards:

```
.claude/skills/writing-vads-guidance/SKILL.md
```

- Read that file in its entirety before writing and follow all the rules and conventions it contains.

Also read the content style guide review prompt for VA.gov and VADS-specific writing rules:

```
.github/prompts/Guidance-follow-content-style-guide.prompt.md
```

- Read that file in its entirety before writing and follow all the rules and conventions it contains. 
- Refer to these guidelines when making decisions about tone, voice, formatting, and style in your documentation changes. 
- Use this prompt to validate iterations that you make.

### 3. Make the changes

- Read each file listed in "Files to update" before editing
- Follow the "Changes to make" checklist item by item
- Apply all "Design decisions" as documented — do not deviate
- Cross-reference the appropriate template (`src/_components/template.md`, `src/_patterns/template.md`, or `src/_templates/template.md`) if creating new sections

### 4. Verify

- Confirm all "Acceptance criteria" from the grooming comment are met
- Run `yarn build` to verify the site builds without errors
- Verify YAML front matter is unchanged in every edited file

### 5. Open a draft PR

Use the [PR template](PULL_REQUEST_TEMPLATE.md). Follow these conventions:

- **Title format**: Start with the page or section name, then a present-tense verb. Examples: "Capitalization: Adds all-caps exception guidance", "Alert: Updates accessibility considerations"
- **Branch name**: `docs/issue-<NUMBER>-<short-description>`
- **Always open as a draft PR** so the designer can review before it's marked ready
- **Link the issue**: Include `Closes #<ISSUE_NUMBER>` in the PR body

### Important constraints

- **The `## Grooming Summary` comment is the single authoritative work order.** If there are other comments on the issue (discussion, questions, earlier drafts), only follow the instructions in the grooming summary. It is edited in-place when corrections are needed, so it is always up to date.
- If something in the grooming comment is unclear or seems wrong, add a comment on the issue asking for clarification rather than guessing
- If you encounter a build error you cannot resolve, open the draft PR anyway with a note about the error
- Do not modify files outside the scope defined in the grooming comment
- Do not change component status values without explicit approval
- When writing multi-line content to `gh` commands, always write to a temp file and use `--body-file` (see AGENTS.md for details)

## Chatmodes

See `.github/chatmodes/4.1.chatmode.md` for the custom chatmode configuration.

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
