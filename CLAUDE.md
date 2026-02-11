# CLAUDE.md

See [AGENTS.md](AGENTS.md) for full project context, architecture, and guidelines.

This file contains Claude Code-specific configuration.

## Available Skills

This repo includes Claude Code skills to help with common workflows:

### `/doc-queue` - Documentation Queue Processing
Helps designers efficiently process documentation and guidance issues from quarterly epics.

**Trigger by saying:** "work on documentation issues", "process doc queue", or "help with documentation backlog"

**What it does:**
1. Finds the current quarterly documentation epic
2. Presents oldest unassigned issues for selection
3. Assigns the issue to you and analyzes requirements
4. Guides you through making documentation changes
5. Creates a PR and updates the project board to "PR Review"

See `.claude/skills/doc-queue/SKILL.md` for full details.

### `/writing-vads-guidance` - Documentation Writing Standards
Ensures documentation follows VADS templates and style standards when writing component, pattern, or template guidance.

**Automatically invoked by:** `/doc-queue` at the "Making Changes" step

**What it does:**
1. Loads the appropriate template (component/pattern/template)
2. Ensures documentation structure matches template
3. Handles deviations when justified (with designer approval)
4. Enforces YAML front matter protection
5. Provides required Jekyll include syntax

See `.claude/skills/writing-vads-guidance/SKILL.md` for full details.
