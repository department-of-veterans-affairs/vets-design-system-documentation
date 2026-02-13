---
title: "feat: My VA Interactive Prototyping Workflow"
type: feat
date: 2026-02-03
updated: 2026-02-13
implementation_started: 2026-02-13
github_issue: https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1385
---

# My VA Interactive Prototyping Workflow

## Current Status (2026-02-13)

| Phase | Status | Notes |
|-------|--------|-------|
| **M0: Foundation** | ✅ Complete | MCP server with 3 tools, resources, prompt. 27 tests. Local at `~/repos/vads-mcp-server`. |
| **M1: Tokens & Validation** | ✅ Complete | Token parser, token tools (`get_tokens`, `find_tokens`), token resources. 33 new tests. |
| **M2: Guides & Utilities** | ✅ Complete | 5 guides, utility classes data, `get_guide` + `get_utility_classes` tools, guide resources. 13 new tests. |
| **M3: Figma Mapping** | ✅ Complete | `figma-component-map.json` (68 entries from live Figma audit), `map_figma_component` tool with fuzzy matching + variant mapping, `figma-to-code.md` guide. 29 new tests. |
| **P0: Prototype Kit Setup** | ✅ Complete | Repo at `~/repos/va-prototype-kit`. 2 commits on `main`. 27 files. Vite build, deploy workflow, AI configs, 7 templates, MCP server configs for 3 tools. |
| **P1: Reference Prototype** | ✅ Complete | PRD (343 lines), 5 scenario data files, TypeScript types, app.ts with 7 section renderers. 5 commits on `main`. |
| **P2: Workflow Docs** | ✅ Complete | 5 guides (prototype-workflow, setup-figma-mcp, figma-to-prototype, populate-from-figma, reproduce-page). 3 Claude Code skill wrappers. |
| **P3: Polish** | ⬜ Not started | README, designer testing, iteration. |

**MCP server totals:** 8 tools, 5 resources, 1 prompt, 102 tests across 7 test files.

**Prototype Kit totals:** 8 commits on `main`, ~40 tracked files. My VA Dashboard prototype with 5 scenario states, 7 section renderers, dynamic JSON import. 5 workflow guides, 3 Claude Code skills.

**To resume:** P3 — Write comprehensive README, test with a real designer, iterate.

**Key P1 discovery:** PRD-driven approach worked well. TypeScript types caught data structure issues at compile time. Dynamic JSON import makes scenario switching trivial. All 11 VADS components mapped correctly on first try.

---

## Overview

Enable designers to rapidly build and iterate on interactive prototypes of VA.gov experiences using real VA Design System components, powered by AI that accurately understands our component library.

**Goal:** A designer drops a PDF or Figma screenshot into Claude Code and gets a working, deployable prototype in minutes — not hours. When they ask "How can I quickly get a functional prototype to test with users?" the answer is clear and repeatable.

**Key constraints:**
- Must use VA Design System web components from `@department-of-veterans-affairs/component-library`
- Must allow iteration without full-stack development knowledge
- Must support multiple user states (new user, active claims, incomplete profile, etc.)
- Must provide live preview with instant feedback on changes
- Must be deployable to GitHub Pages for usability testing sessions

## Problem Statement

Designers currently have two suboptimal paths for prototyping:
1. **Figma:** Familiar but limited - vector-based prototypes can't truly replicate interactive component behavior
2. **Full vets-website setup:** Powerful but complex - requires significant developer involvement and infrastructure knowledge

There's a gap for a middle-ground workflow that lets designers work with real code and real components in a lightweight, purpose-built environment.

### Insights from Designer Interview (Joseph Lee, Feb 2026)

Key findings from interviewing a UX designer about their prototyping needs:

- **Current tools:** Uses CodeSandbox with Jami's base template (component-library integrated)
- **Pain point:** Always requires front-end support for logic, especially forms
- **Pain point:** Can't use Copilot/AI assistants to debug in CodeSandbox - local dev would fix this
- **Pain point:** Multiple user states are "super hard in code"
- **Requirement:** Shareable URL required (security prevents localhost access during testing)
- **Requirement:** Need to mock external sites visually (e.g., pay.gov in payment flows)
- **Expectation:** "AI gets you close, then you go through each page and tweak. As long as tweaking doesn't take longer than doing it yourself, it's still worthwhile."

These insights inform the skills and templates included in this plan.

### Inspiration: NY State Design System (Feb 2026)

The NYSDS team demonstrated turning a PDF form into a fully functional, accessible web application in ~10 minutes using Claude Code and a Design System MCP server. Their approach:

- **MCP server** (`@nysds/mcp-server`) provides AI coding agents with structured knowledge of components, tokens, and patterns — eliminating hallucinated APIs
- **PRD-driven generation:** A PRD file describes what to build; an AI coding agent generates the entire application
- **Vanilla TypeScript + Vite:** No framework — web components are the UI layer
- **Minimal dependencies:** Component library, style library, and Lit runtime — that's it
- **GitHub Pages deployment** for shareable URLs

Repository: https://github.com/ITS-HCD/project-adoptive-application
MCP Server: https://github.com/ITS-HCD/nysds/tree/feature/mcp-server-updates/packages/mcp-server

This plan adopts their approach: **build the MCP server first** (the enabling infrastructure), then the prototype kit becomes simple.

## Proposed Solution

Two deliverables, in dependency order:

### 1. VADS MCP Server (`@department-of-veterans-affairs/vads-mcp-server`)

An MCP server that gives AI coding agents (Claude Code, GitHub Copilot, Cursor, etc.) structured, accurate knowledge of the VA Design System — components, tokens, patterns, and usage guidance. This is the **critical enabler** that makes AI-assisted prototyping work correctly. MCP is an open protocol supported by all major AI coding tools.

### 2. VA Prototype Kit (`va-prototype-kit`)

A lightweight Vite + vanilla JS/TS repository where designers use any AI coding agent (backed by the MCP server) to generate prototypes from PRDs, Figma screenshots, or PDF forms. The kit provides the scaffolding; AI does the heavy lifting.

### Architecture Decision: AI-Agent-Agnostic Configuration

The prototype kit must work with **any AI coding agent**, not just Claude Code. Most VA designers use GitHub Copilot, not Claude Code. Our configuration strategy:

- **`AGENTS.md`** (root) — Primary AI instruction file. An [open standard](https://agents.md/) supported by 20+ tools including Claude Code, Copilot, Cursor, Zed, Devin, and Google Jules. Contains project context, build commands, coding conventions, and references to PRDs and skills.
- **`.github/copilot-instructions.md`** — Copilot-specific repo instructions, auto-applied to all Copilot requests. Can be lightweight and reference `AGENTS.md` for details.
- **`.github/instructions/*.instructions.md`** — Path-specific Copilot instructions with `applyTo` glob patterns (e.g., instructions for working in `src/prototypes/`).
- **`CLAUDE.md`** (root) — Claude Code-specific additions (if any). Can reference `AGENTS.md` for shared content.
- **`docs/skills/`** — Workflow documentation as plain markdown files. Any AI agent can read these when directed by `AGENTS.md`. Claude Code users get them as `/skills`; Copilot users reference them via `AGENTS.md`.
- **MCP server** — Cross-tool. Configured per-tool (Claude Code in `.claude/settings.json`, Copilot in VS Code settings, Cursor in `.cursor/mcp.json`), but the server itself is universal.
- **PRDs** — Plain markdown files. Any AI agent can read them. No tool-specific format.

### Architecture Decision: MCP Server First

**Why the MCP server is prerequisite to everything else:**
- Without accurate component knowledge, AI generates incorrect HTML attributes, uses wrong event names, and invents non-existent components
- The NYSDS demo succeeded because their MCP server made Claude Code's output correct on the first try
- The MCP server benefits ALL AI-assisted VA development, not just prototyping — it's infrastructure with broad value
- Stencil's `component-docs.json` (77+ components, full prop/event/slot/parts data) is directly analogous to NYSDS's Custom Elements Manifest

### Architecture Decision: PRD-Driven Generation (replaces custom framework)

The previous version of this plan proposed a custom scenario-switching framework (prototype-loader, component-binder, controls UI). The NYSDS approach eliminates the need for this:

- **Before:** Build a framework that binds JSON data to components → designers edit JSON → framework renders
- **After:** Write a PRD → AI generates the entire application with state management built in → designers tweak the output

This is simpler, more flexible, and directly addresses the designer's expectation: *"AI gets you close, then you go through each page and tweak."*

State management (sessionStorage, scenario switching, form persistence) becomes generated application code rather than a reusable framework — just as NYSDS did.

### Architecture Decision: Standalone Vite-based Repository

**Why a separate repo instead of extending vets-design-system-documentation:**
- Design system docs site is focused on guidance and metrics
- Prototypes have different deployment cadence and concerns
- Simpler dependency management (no Ruby/Jekyll)
- Designers can fork and customize without affecting docs site
- GitHub Pages provides easy shareable URLs for usability testing

**Why Vite:**
- Sub-second hot module replacement
- Zero-config setup for vanilla JS/TS + web components
- Built-in dev server with instant feedback
- Simple GitHub Pages deployment
- No framework lock-in — just HTML, CSS, JS/TS

**Self-contained environment philosophy:**
- This kit is THE prototyping tool — designers shouldn't need CodeSandbox, vets-website, or other environments
- Local development enables AI assistance (Copilot, Claude Code) that cloud sandboxes block
- Everything needed to prototype is in this repo

### Architecture Decision: Figma-to-Code via Dual MCP Servers

Designers will often start from a Figma design rather than a blank PRD. The workflow uses **two MCP servers together** — the [southleft/figma-console-mcp](https://github.com/southleft/figma-console-mcp) server to read the design, and the VADS MCP server to map it to correct web components.

**The problem:** VA Design System Figma components and web components are not yet connected via [Figma Code Connect](https://www.figma.com/developers/code-connect). This means there's no automatic mapping from Figma component instances to `<va-*>` web component tags.

**The solution: A Figma-to-VADS component mapping maintained in the VADS MCP server.** The mapping bridges the gap between Figma component names (e.g., "Alert - Warning") and web component tags (e.g., `<va-alert status="warning">`). This is a manual mapping table that we maintain until CodeConnect is established.

#### How the Figma-to-Code Workflow Works

**Step 1: Read the Figma design** (southleft/figma-console-mcp)

The AI agent calls Figma Console MCP tools to extract design information:

1. **`figma_get_file_data`** — Gets the full file structure: layer hierarchy, names, types, positions, sizes. This reveals the page structure (what sections exist, nesting, ordering) and identifies component instances by their Figma component names.
2. **`figma_get_component`** — Gets detailed component metadata for specific component instances. Returns component properties, variants, and configuration.
3. **`figma_get_variables`** — Extracts design tokens (colors, spacing, typography variables) used in the design. These map to VADS design tokens.
4. **`figma_get_styles`** — Gets color, text, and effect styles applied to elements.
5. **`figma_take_screenshot`** — Captures visual screenshots for reference, ensuring the AI can see what the final result should look like.

**Step 2: Identify the page layout** (AI reasoning + local templates)

From the Figma metadata, the AI identifies the page type by recognizing structural patterns:

| Figma Structure Pattern | VA.gov Page Type | Template |
|------------------------|------------------|----------|
| Header + progress bar + form fields + button pair | Form step | `form-step/step.html` |
| Header + process list + start button | Form intro | `form-step/intro.html` |
| Header + accordion sections with edit links + submit | Form review | `form-step/review.html` |
| Success alert + summary + next steps | Confirmation | `confirmation/base.html` |
| Greeting + cards/service-list-items in sections | Dashboard | `dashboard/base.html` |
| Hero + card grid + spoke links | Hub page | `hub/base.html` |
| Typography-heavy + accordions | Static content | `static-content/base.html` |

The prototype kit ships these layout templates locally in `src/templates/`. The AI selects the appropriate template as a starting point, then populates it with the specific content and components from the Figma design.

**Step 3: Map Figma components to VADS web components** (VADS MCP server)

For each Figma component instance found in step 1, the AI:

1. Calls VADS MCP `map_figma_component` with the Figma component name
2. Gets back the matching `<va-*>` web component tag, required attributes, and an HTML example
3. If no exact match exists, calls `find_components` with a search query derived from the Figma component name
4. Uses `get_component` to get the full API of the matched component
5. Applies the properties/variants from the Figma design to the correct HTML attributes

**Step 4: Map Figma variables to VADS tokens** (VADS MCP server)

Figma variables (colors, spacing, typography) need to map to VADS CSS custom properties:
1. AI calls `figma_get_variables` from Figma Console MCP to get the variable names and values
2. AI calls VADS MCP `find_tokens` to find the matching VADS token by value or name pattern
3. Uses the VADS CSS custom property name (e.g., `--vads-color-base`) instead of raw hex values

**Step 5: Generate the code** (AI agent)

The AI combines:
- The page layout template (from local `src/templates/`)
- The mapped VADS web components (from VADS MCP server)
- The mapped design tokens (from VADS MCP server)
- The text content and structure (from Figma MCP server)

Into a complete, working prototype page.

#### Figma-to-VADS Component Mapping

The VADS MCP server includes a `map_figma_component` tool that maintains the mapping between Figma component names and web component tags. This is the critical bridge until CodeConnect is established.

Example mapping entries:

| Figma Component Name | VADS Web Component | Key Attribute Mapping |
|---------------------|-------------------|----------------------|
| `Alert` / `Alert - Warning` | `<va-alert>` | Figma variant "Type" → `status` attr |
| `Text Input` / `Text input` | `<va-text-input>` | Figma "Label" → `label` attr |
| `Button - Primary` | `<va-button>` | Figma variant → no attr (primary is default) |
| `Button - Secondary` | `<va-button>` | → `secondary` attr |
| `Button Pair` | `<va-button-pair>` | — |
| `Accordion` | `<va-accordion>` | — |
| `Card` | `<va-card>` | — |
| `Service List Item` | `<va-service-list-item>` | Complex: multiple sub-properties |
| `Critical Action` | `<va-critical-action>` | — |
| `Tag - Status` | `<va-tag-status>` | Figma variant → `type` attr |
| `Select` | `<va-select>` | Figma "Label" → `label` attr |
| `Radio Group` | `<va-radio>` | — |
| `Checkbox Group` | `<va-checkbox-group>` | — |
| `Memorable Date` | `<va-memorable-date>` | — |
| `Segmented Progress Bar` | `<va-segmented-progress-bar>` | — |
| `Process List` | `<va-process-list>` | — |
| `Breadcrumbs` | `<va-breadcrumbs>` | — |
| `Link - Action` | `<va-link-action>` | — |
| `Additional Info` | `<va-additional-info>` | — |
| `Loading Indicator` | `<va-loading-indicator>` | — |

This mapping table is maintained as a JSON file shipped with the MCP server (`data/figma-component-map.json`). It should be updated whenever new components are added to the Figma library or web component library.

**Future: CodeConnect replaces this mapping.** Once Figma CodeConnect is configured for the VADS Figma library, Figma-aware tools will return the correct web component for each Figma instance automatically. At that point, the `map_figma_component` tool becomes a fallback for unmapped components.

---

## Part 1: VADS MCP Server

### What It Does

The MCP server exposes VA Design System knowledge through the [Model Context Protocol](https://modelcontextprotocol.io/), an open standard supported by all major AI coding tools (Claude Code, GitHub Copilot, Cursor, Windsurf, Zed, etc.). When an AI needs to generate a `<va-text-input>`, it queries the MCP server for the exact attributes, events, slots, and usage patterns rather than guessing.

### Data Sources

| Data Source | Package | What It Provides |
|-------------|---------|------------------|
| Stencil `component-docs.json` | `@department-of-veterans-affairs/web-components` | 77+ components with props, events, slots, parts, dependency graphs |
| CSS Library | `@department-of-veterans-affairs/css-library` | VADS utility classes, grid system, spacing, typography, **and design tokens as CSS custom properties** (canonical token source for now) |
| Design Tokens (future) | `@department-of-veterans-affairs/va-design-system-resources` | Color, spacing, font, elevation tokens in JSON + CSS. Will become the canonical token source later this quarter when published as a distinct npm package. |
| Documentation site | `design.va.gov` | Component guidance, patterns, accessibility notes, usage examples |

#### Component Data Schema (from Stencil)

Each component in `component-docs.json` includes:

```json
{
  "tag": "va-text-input",
  "encapsulation": "shadow",
  "docs": "...",
  "docsTags": [
    {"name": "componentName", "text": "Text input"},
    {"name": "maturityCategory", "text": "use"},
    {"name": "maturityLevel", "text": "best_practice"}
  ],
  "props": [
    {
      "name": "label",
      "type": "string",
      "attr": "label",
      "docs": "The label for the text input.",
      "required": true,
      "default": "undefined"
    }
  ],
  "events": [
    {
      "event": "vaInput",
      "docs": "The event emitted when the input value changes"
    }
  ],
  "slots": [],
  "parts": [
    {"name": "input", "docs": ""},
    {"name": "label", "docs": ""}
  ],
  "dependencies": [],
  "dependents": []
}
```

#### Token Data (from CSS Library)

Tokens are currently sourced as CSS custom properties from `@department-of-veterans-affairs/css-library`:

```css
:root {
  --vads-color-base: #1b1b1b;
  --vads-color-base-lightest: #f0f0f0;
  --vads-color-background-default-on-light: var(--vads-color-base-lightest);
  --vads-spacing-unit-1: 0.5rem;
  /* ... 200+ tokens */
}
```

Token categories (inferred from naming convention): `color` (semantic, component, primitive), `font` (family, size, lineHeight, letterSpacing, typography), `spacing`, `elevation`, `shape`, `size`.

**Future:** When `@department-of-veterans-affairs/va-design-system-resources` publishes tokens as structured JSON (later this quarter), the parser will switch to the richer JSON format with alias references and metadata.

### MCP Server Architecture

```
vads-mcp-server/
├── package.json
├── tsconfig.json
├── README.md
├── data/
│   ├── figma-component-map.json       # Figma component name → VADS web component mapping
│   └── guides/                        # Static markdown guides
│       ├── installation.md            # How to install component-library
│       ├── page-structure.md          # VA.gov page layout (header, footer, breadcrumbs)
│       ├── form-patterns.md           # Multi-step form patterns
│       ├── accessibility.md           # VADS accessibility requirements
│       └── frameworks/
│           └── vanilla.md             # Vanilla JS/TS usage (primary for prototyping)
└── src/
    ├── index.ts                       # CLI entry point (#!/usr/bin/env node)
    ├── server.ts                      # McpServer setup, registers tools/resources/prompts
    ├── lib/
    │   ├── component-parser.ts        # Parse Stencil component-docs.json
    │   ├── token-parser.ts            # Parse token JSON + CSS
    │   ├── search.ts                  # Fuzzy search for components/tokens
    │   └── format.ts                  # Response formatting utilities
    ├── tools/
    │   ├── index.ts                   # Tool registration orchestrator
    │   ├── component-tools.ts         # find_components, get_component
    │   ├── token-tools.ts             # get_tokens, find_tokens
    │   ├── validation-tools.ts        # validate_component_api
    │   ├── utility-tools.ts           # get_utility_classes
    │   ├── figma-tools.ts             # map_figma_component
    │   └── guide-tools.ts            # get_guide
    ├── resources/
    │   ├── index.ts                   # Resource registration
    │   ├── components.ts              # vads://components, vads://component/{tag}
    │   ├── tokens.ts                  # vads://tokens, vads://tokens/color, etc.
    │   └── guides.ts                  # vads://guides/{topic}
    └── prompts/
        └── vads-mode.ts               # System prompt for VADS-aware mode
```

### MCP Tools (MVP)

| Tool | Parameters | Returns |
|------|-----------|---------|
| `find_components` | `query?: string` | List of matching components with tag names and summaries. No query = list all. |
| `get_component` | `tag: string`, `includeExamples?: boolean` | Full component docs: props (with `attr` name, type, default, required), events, slots, CSS parts, dependency graph. Optionally includes HTML usage examples. |
| `validate_component_api` | `tag: string`, `attributes: string[]` | Validates attributes against component spec. Returns valid/invalid status with corrections. |
| `get_tokens` | `category?: string` | Tokens filtered by category (color, font, spacing, etc.). Returns CSS variable names and resolved values. |
| `find_tokens` | `query: string` | Search tokens by CSS variable name, value, or description. |
| `get_utility_classes` | `category?: string` | VADS CSS utility classes for grid, spacing, display, typography. |
| `get_guide` | `topic: string` | Guides for installation, page-structure, form-patterns, accessibility, vanilla JS usage. |
| `map_figma_component` | `figmaComponentName: string` | Maps a Figma component name to the corresponding VADS web component tag, with attribute mapping and HTML example. Returns best match or candidates if ambiguous. |

### MCP Resources (MVP)

| URI | Content |
|-----|---------|
| `vads://components` | JSON list of all 77+ components with tag names and summaries |
| `vads://component/{tag}` | Full component documentation as JSON |
| `vads://tokens` | All tokens with CSS variable names |
| `vads://tokens/{category}` | Tokens filtered by category (color, font, spacing, etc.) |
| `vads://guides/{topic}` | Static guides (installation, page-structure, etc.) |

### MCP Prompts (MVP)

**`vads_mode`** — A system prompt that activates VADS-aware coding assistance:

- Declares available tools and their purposes
- Instructs: "Always use semantic VADS components (e.g., `<va-text-input>` instead of `<input>`)"
- Instructs: "Use VADS design tokens via CSS custom properties for consistent styling"
- Instructs: "Follow accessibility guidelines built into VADS components"
- References design.va.gov for component documentation
- Lists the 77+ available components by category

### Key Implementation Details

#### Component Parser (`component-parser.ts`)

Reads `component-docs.json` from the installed `@department-of-veterans-affairs/web-components` package. The file is auto-generated by Stencil and includes the full API surface.

File resolution order (to support dev and installed contexts):
1. `node_modules/@department-of-veterans-affairs/web-components/component-docs.json`
2. `{cwd}/component-docs.json` (for local development)

Key transformations:
- Extract `props` into a clean attributes list with `attr` (HTML attribute name), `type`, `default`, `required`, `docs`
- Filter `docsTags` to surface `@componentName`, `@maturityCategory`, `@maturityLevel`
- Parse `events` into event name + description
- Build a component-name-to-tag-name lookup (e.g., "Text input" → `va-text-input`)
- Cache parsed data in memory after first load

#### Token Parser (`token-parser.ts`)

Reads design tokens from `@department-of-veterans-affairs/css-library` CSS custom properties (the current canonical source). Later this quarter, the canonical source will migrate to `@department-of-veterans-affairs/va-design-system-resources` as a distinct npm package with JSON + CSS formats.

Parsing approach:
- Extract CSS custom properties matching `--vads-*` from the CSS library stylesheet
- Classify tokens by category based on naming convention (e.g., `--vads-color-*` → color, `--vads-font-*` → font, `--vads-spacing-*` → spacing)
- Resolve alias references where possible from CSS `var()` declarations
- Support token search by name, value, or description
- **Future migration path:** When `va-design-system-resources` publishes tokens as JSON, switch to parsing structured JSON (with alias references) and fall back to CSS parsing

#### Validation Tool (`validation-tools.ts`)

Cross-references provided HTML attributes against the component's `props` array. Particularly valuable because:
- VA components use `attr` names that differ from `prop` names (e.g., prop `openSingle` → attr `open-single`)
- Events use VA-specific names (e.g., `vaInput`, `component-library-analytics`)
- Prevents common mistakes like using `onChange` instead of `vaInput`

#### Static Guides (`data/guides/`)

Hand-authored markdown for procedural knowledge that can't be derived from component specs:

- **`installation.md`** — How to install and import `@department-of-veterans-affairs/component-library` and `@department-of-veterans-affairs/css-library`
- **`page-structure.md`** — Required VA.gov page layout: `va-official-gov-banner`, `va-header-minimal` or full header, `va-breadcrumbs`, main content area, `va-back-to-top`, `va-minimal-footer` or full footer, `va-crisis-line-modal`
- **`form-patterns.md`** — Multi-step form patterns with `va-segmented-progress-bar`, `va-button-pair`, `va-process-list`, review pages, confirmation pages
- **`accessibility.md`** — VADS-specific accessibility requirements, focus management, screen reader considerations
- **`frameworks/vanilla.md`** — Vanilla JS/TS usage patterns (the primary mode for prototyping)

### MCP Server Implementation Phases

> **Phase parallelism:** Prototype Kit Phase P0 (repo setup, scaffolding) can run in parallel with MCP Server Phases M0-M1. Phase P1 (reference prototype) requires M0 to be complete.

#### Phase M0: Foundation ✅ COMPLETE

> **Local repo:** `~/repos/vads-mcp-server` (4 commits on `main`)
>
> **GFE note:** Government-furnished equipment blocks execution of files in dot-directories (e.g., `node_modules/.bin/`). Workarounds applied: npm scripts use `node node_modules/...` paths directly; `esbuild-wasm` override replaces native esbuild binary. See `~/.claude/CLAUDE.md` for details.

- [x] **Create `vads-mcp-server` repository** (`3b9ba03`)
  - Created at `~/repos/vads-mcp-server` (not yet pushed to GitHub org)
  - TypeScript, `@modelcontextprotocol/sdk` (^1.26.0), Vitest, Zod
  - CLI binary entry point: `dist/index.js`
  - Dependencies: `@department-of-veterans-affairs/web-components` (^22.6.2), `@department-of-veterans-affairs/css-library` (^0.30.0-rc2)
  - `esbuild-wasm` npm override for GFE compatibility
  - npm scripts use `node node_modules/...` paths to bypass `.bin` restriction

- [x] **Implement component parser** (`5bcab18`)
  - File: `src/lib/component-parser.ts`
  - Reads and caches `component-docs.json` from installed `web-components` package
  - Parses 67 components (count from installed v22.6.2) into structured format
  - Extracts props (with `attr` names), events, slots, CSS parts, maturity info, dependency graphs
  - Search by tag name, component name, or description (case-insensitive)
  - 16 unit tests in `test/lib/component-parser.test.ts`

- [x] **Implement `find_components`, `get_component`, and `validate_component_api` tools** (`9bfbd77`)
  - File: `src/tools/component-tools.ts` — pure handler functions (testable without MCP)
  - File: `src/server.ts` — McpServer with `server.tool()` registration using Zod schemas
  - File: `src/index.ts` — CLI entry point with stdio transport
  - `validate_component_api` catches prop-name vs attr-name mistakes (e.g., `openSingle` → `open-single`)
  - 11 unit tests in `test/tools/component-tools.test.ts`

- [x] **Implement component resources** (`d647eee`)
  - File: `src/resources/components.ts`
  - `vads://components`: JSON list of all 67 components
  - `vads://component/{tag}`: full docs for a specific component (ResourceTemplate)

- [x] **Implement `vads_mode` prompt** (`d647eee`)
  - File: `src/prompts/vads-mode.ts`
  - 3,774-char system prompt with coding rules, all component tags, VA.gov page structure, a11y guidance

- [x] **Integration test** (manual, not yet configured in Claude Code)
  - All 3 tools verified via JSON-RPC over stdio
  - Resources and prompt verified via JSON-RPC
  - 27 unit tests passing (262ms)
  - **Remaining:** Configure MCP server in Claude Code settings and test live generation

#### Phase M1: Tokens & Validation ✅ COMPLETE

- [x] **Implement token parser**
  - File: `src/lib/token-parser.ts`
  - Parse CSS custom properties (`--vads-*`) from `@department-of-veterans-affairs/css-library` stylesheet
  - Extract variable names, values, and classify by naming convention (color, font, spacing, elevation, shape, size)
  - Build search index by name and value

- [x] **Implement token tools**
  - File: `src/tools/token-tools.ts`
  - `get_tokens`: filter by category
  - `find_tokens`: search by name/value/description

- [x] **Implement `validate_component_api` tool** (completed in M0, `9bfbd77`)
  - Implemented in `src/tools/component-tools.ts` (co-located with other component tools)
  - Accepts tag name + list of attributes
  - Cross-references against `props` array (using `attr` field for HTML attribute names)
  - Returns valid/invalid with suggestions for corrections (e.g., prop name → attr name)

- [x] **Implement token resources**
  - File: `src/resources/tokens.ts`
  - `vads://tokens`: all tokens
  - `vads://tokens/{category}`: filtered by category

#### Phase M2: Guides & Utilities ✅ COMPLETE

- [x] **Write static guide markdown files**
  - `data/guides/installation.md`
  - `data/guides/page-structure.md`
  - `data/guides/form-patterns.md`
  - `data/guides/accessibility.md`
  - `data/guides/frameworks/vanilla.md`

- [x] **Implement guide and utility tools**
  - File: `src/tools/guide-tools.ts` — `get_guide` tool
  - File: `src/tools/utility-tools.ts` — `get_utility_classes` tool
  - Data source: Static `data/utility-classes.json` catalogue with 11 categories of VADS utility classes

- [x] **Implement guide resources**
  - File: `src/resources/guides.ts`
  - `vads://guides/{topic}`: serve guide markdown

- [ ] **Package for distribution**
  - Configure `package.json` bin field for `vads-mcp` CLI
  - Document setup for each AI tool:
    - Claude Code: `.claude/settings.json`
    - GitHub Copilot: `.vscode/mcp.json`
    - Cursor: `.cursor/mcp.json`
  - **Initial distribution:** Publish to GitHub Packages (`@department-of-veterans-affairs` scope on GitHub npm registry)
  - **Future:** Publish to public npm registry once per-package approval is obtained
  - Install command (GitHub Packages): `npx @department-of-veterans-affairs/vads-mcp-server` (requires `.npmrc` with GitHub Packages registry config)

#### Phase M3: Figma Component Mapping ✅ COMPLETE

- [x] **Create Figma-to-VADS component mapping data**
  - File: `data/figma-component-map.json`
  - Audited the VADS Figma library via Figma Console MCP (`figma_execute`) against live file `afurtw4iqQe6y4gXfNfkkk`
  - 68 component entries covering all public component sets and standalone components
  - Maps each Figma component name to its `<va-*>` web component tag (or `null` for Figma-only patterns)
  - Includes variant-to-attribute mappings (e.g., Alert `Status=Warning` → `status="warning"`, Button `Type=Secondary` → `secondary` attr)
  - Includes HTML example snippets for each mapping
  - Documents components without web component equivalents (Divider, Eyebrow, Address Block, Tag, Autosave, etc.)
  - Includes `figmaAliases` for common naming variations

- [x] **Implement `map_figma_component` tool**
  - File: `src/tools/figma-tools.ts`
  - Accepts Figma component name with optional variant info (e.g., "Alert", "Alert - Warning", "Button, Type=Secondary")
  - Exact match against name and aliases (case-insensitive, dash-normalized)
  - Dash-separated variant hints: "Alert - Warning" → matches Alert, extracts "Warning" as variant hint
  - Key=Value variant hints: "Button, Type=Secondary" → matches Button, maps Type=Secondary to `secondary` attr
  - On no match: returns up to 5 candidates ranked by token-based similarity, plus suggestion to use `find_components`
  - 29 unit tests in `test/tools/figma-tools.test.ts`

- [x] **Write Figma-to-code guide**
  - File: `data/guides/figma-to-code.md`
  - Step-by-step workflow for the dual MCP server approach (Figma Console MCP + VADS MCP)
  - Setup instructions for both MCP servers (VS Code / Copilot and Claude Code configs)
  - 5-step workflow: read design → identify layout → map components → map tokens → generate code
  - Page type identification table (form step, dashboard, hub page, etc.)
  - Common component mapping reference table
  - Components without web component equivalents
  - Troubleshooting section for no-match, variant mapping, and tips for better results
  - Future Code Connect migration notes

- [ ] **Test the Figma-to-code workflow end-to-end**
  - Select a real VADS Figma design (e.g., My VA dashboard mockup)
  - Run the dual MCP workflow (southleft/figma-console-mcp + VADS MCP) with an AI agent
  - Measure: how many components mapped correctly on first pass?
  - Identify gaps in the mapping table, iterate

---

## Part 2: VA Prototype Kit

### What It Does

A Vite-based repository where each prototype lives as a self-contained directory. Designers use any AI coding agent (backed by the VADS MCP server and optionally the Figma MCP server) to generate prototypes from PRDs, Figma designs, or PDF forms. The kit provides the project scaffolding, deployment pipeline, layout templates, and AI agent configuration.

### Repository Structure

```
va-prototype-kit/
├── .github/
│   ├── copilot-instructions.md        # Copilot-specific instructions (references AGENTS.md)
│   ├── instructions/
│   │   └── prototypes.instructions.md # Path-specific Copilot instructions for src/prototypes/
│   └── workflows/
│       └── deploy.yml                 # GitHub Pages deployment
├── .claude/
│   ├── settings.json                  # Claude Code MCP server configuration
│   └── agents/                        # Claude Code agent definitions (optional)
│       ├── a11y-reviewer.md
│       └── prototype-dev.md
├── .cursor/
│   └── mcp.json                       # Cursor MCP server configuration
├── .vscode/
│   ├── mcp.json                       # Copilot MCP server configuration
│   └── settings.json                  # Recommended VS Code settings
├── AGENTS.md                          # Primary AI instructions (cross-tool, open standard)
├── CLAUDE.md                          # Claude Code additions (references AGENTS.md)
├── docs/
│   ├── prd-template.md                # PRD template for designers
│   └── skills/                        # Workflow docs as plain markdown (any AI can read)
│       ├── prototype-workflow.md       # How to create a new prototype
│       ├── figma-to-prototype.md       # Build a prototype from a Figma design link
│       ├── setup-figma-mcp.md          # How to configure the Figma MCP server
│       ├── populate-from-figma.md      # Generate HTML from Figma screenshots (no MCP)
│       └── reproduce-page.md          # Mock external sites
├── src/
│   ├── main.ts                        # Global imports: component-library + css-library
│   ├── style.css                      # App-level styles using VADS tokens
│   ├── templates/                     # Layout templates for common VA.gov page types
│   │   ├── dashboard/
│   │   │   └── base.html              # My VA, personalized hubs
│   │   ├── form-step/
│   │   │   ├── intro.html             # Form introduction (process list + start)
│   │   │   ├── step.html              # Individual form step
│   │   │   └── review.html            # Form review before submit
│   │   ├── confirmation/
│   │   │   └── base.html              # Success/confirmation page
│   │   ├── hub/
│   │   │   └── base.html              # Benefit hub landing page
│   │   └── static-content/
│   │       └── base.html              # Informational content page
│   └── prototypes/
│       └── my-va-dashboard/           # Example prototype
│           ├── index.html             # Entry point
│           ├── prd.md                 # Prototype-specific PRD
│           └── src/
│               ├── app.ts             # Application logic
│               ├── components/        # Page components (generated by AI)
│               ├── steps/             # Form steps (if applicable)
│               ├── types/             # TypeScript interfaces
│               └── utils/             # State management, validation
├── index.html                         # Landing page listing all prototypes
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### How It Works: The Designer Workflow

**One-time setup:**

1. **Designer clones the repo** and runs `npm install`
2. **Designer configures MCP servers** for their AI tool:
   - **VADS MCP server:** Pre-configured in `.claude/settings.json`, `.vscode/mcp.json`, `.cursor/mcp.json`
   - **Figma Console MCP server (optional):** Designer follows `docs/skills/setup-figma-mcp.md` to connect their Figma account via [southleft/figma-console-mcp](https://github.com/southleft/figma-console-mcp). Requires a Figma Personal Access Token.

**Per-prototype workflow — two paths:**

#### Path A: Starting from a PRD

3. **Designer writes a PRD** in `src/prototypes/<name>/prd.md`
   - Describes the experience they want to prototype
   - Lists pages, user flows, states, and data
   - Can include Figma screenshots or PDF form images
4. **Designer runs their AI coding agent** which reads the PRD (via `AGENTS.md` instructions) and uses the VADS MCP server
   - AI generates all HTML/TS/CSS using correct VADS components
   - AI creates state management for multi-page flows
   - AI creates scenario data for different user states

#### Path B: Starting from a Figma design

3. **Designer shares a Figma link** with their AI agent (frame or page URL)
4. **AI agent reads the Figma design** via the southleft/figma-console-mcp server:
   - Calls `figma_get_file_data` to understand the page structure and identify components
   - Calls `figma_get_component` for detailed component metadata and properties
   - Calls `figma_get_variables` for design tokens used
   - Calls `figma_get_styles` for color, text, and effect styles
   - Calls `figma_take_screenshot` for visual reference
5. **AI agent maps to VADS web components** via the VADS MCP server:
   - Calls `map_figma_component` for each Figma component instance found
   - Calls `get_component` to get the full API for matched web components
   - Calls `find_tokens` to map Figma variables to VADS CSS custom properties
   - Selects appropriate layout template from `src/templates/` based on page structure
6. **AI generates the prototype** combining layouts, components, tokens, and content

#### Both paths continue:

7. **Designer runs `npm run dev`** to see the prototype with hot reload
8. **Designer iterates** — tweaks generated code, asks AI for changes, shares more Figma frames
9. **Designer deploys** — pushes to GitHub, Pages deployment is automatic

### PRD Template

The `docs/prd-template.md` provides a template designers fill in:

```markdown
# [Prototype Name] PRD

## What are we prototyping?
[Brief description of the experience]

## Pages
1. [Page name] - [Description of what this page shows]
2. [Page name] - [Description]
...

## User States / Scenarios
- [State name]: [Description of what's different]
- [State name]: [Description]

## Key Interactions
- [What happens when user does X]
- [Form fields and validation rules]

## Components Needed
[List any specific VA components or patterns]

## Reference
[Links to Figma, existing pages, PDFs, etc.]
```

### AI Agent Configuration

#### `AGENTS.md` (Primary — all tools)

The root `AGENTS.md` file is read by all AI coding agents. It contains:

- **Project overview:** What the prototype kit is and how it works
- **Build commands:** `npm install`, `npm run dev`, `npm run build`
- **Coding conventions:** Use VADS web components (`<va-*>`), VADS design tokens, no hardcoded styles
- **MCP server usage:** Directs agents to use `find_components`, `get_component`, `validate_component_api` tools before generating component HTML
- **PRD workflow:** Points agents to `docs/prd-template.md` and explains the generation workflow
- **Skills reference:** Points agents to `docs/skills/*.md` for guided workflows
- **Page structure:** Required VA.gov page layout (official gov banner, header, breadcrumbs, main, footer, crisis line modal)
- **Accessibility:** WCAG 2.1 AA requirements, focus management, screen reader considerations

#### `.github/copilot-instructions.md` (Copilot-specific)

Lightweight file that:
- References `AGENTS.md` for full project context
- Adds any Copilot-specific instructions (if needed)
- Auto-applied to all Copilot requests in this repo

#### `.github/instructions/prototypes.instructions.md` (Copilot path-specific)

```yaml
---
applyTo: "src/prototypes/**/*"
---
```

Activates when editing prototype files. Instructs Copilot to:
- Use VADS MCP server tools for component lookups
- Follow the prototype's `prd.md` for requirements
- Use VADS design tokens exclusively

#### `.claude/agents/` (Claude Code-specific, optional)

Claude Code agent definitions with model selection (sonnet/haiku) for specialized tasks:

- **`prototype-dev.md`** — VADS-aware prototype developer (reads PRDs, generates code, uses MCP server)
- **`a11y-reviewer.md`** — WCAG 2.1 AA accessibility reviewer (reviews generated HTML, validates focus management)

These provide Claude Code users with specialized agent behavior but are not required for the workflow to function. Copilot and Cursor users get equivalent behavior through `AGENTS.md` + MCP server.

#### `docs/skills/` (Plain markdown — all tools)

Workflow documentation written as plain markdown. Any AI agent can read these files when directed by `AGENTS.md`:

- **`prototype-workflow.md`** — Step-by-step guide for creating a new prototype
- **`populate-from-figma.md`** — How to generate HTML from Figma exports
- **`reproduce-page.md`** — How to create static mocks of external sites

Claude Code users can also invoke these as `/skills` if we add symlinks or references in `.claude/skills/`. Copilot users reference them by asking their AI to "follow the instructions in docs/skills/prototype-workflow.md".

### Key Differences from Previous Plan

| Aspect | Previous Plan | Updated Plan |
|--------|---------------|--------------|
| **Core approach** | Custom framework (loader, binder, controls) | PRD-driven AI generation via MCP server |
| **Scenario switching** | Client-side JS framework with JSON fetch | AI-generated state management (sessionStorage/URL params) |
| **Data binding** | `data-bind="path.to.field"` attribute convention | Direct DOM manipulation in generated TypeScript |
| **Page templates** | Pre-built HTML templates designers fill in | Layout templates as AI starting points; AI selects appropriate template and populates with content |
| **Designer edits** | JSON scenario files | Generated TypeScript/HTML code |
| **State management** | Reusable prototype-state.js library | Per-prototype generated code |
| **AI dependency** | Optional (Claude Code skills for onboarding) | Central (MCP server enables correct generation) |
| **AI tool support** | Claude Code only (`.claude/skills/`) | Cross-tool (`AGENTS.md` + MCP for Copilot, Claude Code, Cursor) |
| **Reusable infra** | Prototype kit framework | MCP server (benefits all VA AI development) |

### Prototype Kit Implementation Phases

#### Phase P0: Repository Setup

- [x] **Create `va-prototype-kit` repository**
  - Created at `~/repos/va-prototype-kit` (not yet pushed to GitHub org)
  - Initialized with README.md, .gitignore (Node), MIT LICENSE
  - Git init with `main` branch

- [x] **Initialize Vite project**
  - Manually scaffolded (skipped `npm create vite` to avoid GFE `.bin` execution issues)
  - `package.json`: `type: "module"`, npm scripts use `node node_modules/...` paths, `esbuild-wasm` override
  - `vite.config.ts`: auto-glob discovery for `src/prototypes/*/index.html`
  - `tsconfig.json`: ES2020 target, bundler moduleResolution, strict
  - Dependencies: `@department-of-veterans-affairs/web-components` (^22.6.0), `@department-of-veterans-affairs/css-library` (^0.30.0-rc2)
  - **Removed `component-library`** — React wrapper not needed for vanilla TS prototyping
  - Installed with `--ignore-scripts --legacy-peer-deps` (web-components has stale React peer dep)
  - Build verified: `vite build` completes in 1.32s, all 67+ web component chunks output

- [x] **Set up global imports and landing page**
  - `src/main.ts`: `defineCustomElements()` + CSS library imports (`core.css`, `utilities.css`) + app styles
  - `src/style.css`: App-level styles using VADS design tokens
  - `src/va-web-components.d.ts`: TypeScript declaration for web-components loader module
  - `src/vite-env.d.ts`: Vite client types
  - `index.html`: Landing page with `va-official-gov-banner`, `va-header-minimal`, prototype list, `va-accordion` for getting started, `va-minimal-footer`
  - TypeScript check passes (`tsc --noEmit`)

- [ ] **Set up GitHub Actions deployment**
  - File: `.github/workflows/deploy.yml`
  - Trigger on push to `main` branch
  - Build with Vite (`npm ci && npm run build`)
  - Deploy `dist/` to GitHub Pages

- [ ] **Configure AI agent instructions**
  - Write `AGENTS.md` at repo root (primary instructions for all AI tools)
  - Write `.github/copilot-instructions.md` (Copilot-specific, references AGENTS.md)
  - Write `.github/instructions/prototypes.instructions.md` (path-specific for prototype files)
  - Write `CLAUDE.md` at repo root (Claude Code additions, references AGENTS.md)
  - Configure VADS MCP server for all tools:
    - `.claude/settings.json` (Claude Code)
    - `.vscode/mcp.json` (Copilot)
    - `.cursor/mcp.json` (Cursor)
  - Include southleft/figma-console-mcp config stubs (designer adds their own PAT):
    - Document NPX setup (recommended, full capabilities) and remote SSE (`https://figma-console-mcp.southleft.com/sse`, read-only)
  - Write PRD template in `docs/prd-template.md`
  - Create Claude Code agent definitions in `.claude/agents/` (optional enhancement)

- [ ] **Create layout templates**
  - Directory: `src/templates/`
  - Create templates for common VA.gov page types:
    - `dashboard/base.html` — personalized dashboard (va-service-list-item, va-card, va-alert)
    - `form-step/intro.html` — form introduction (va-process-list, va-alert, va-button)
    - `form-step/step.html` — form step (form elements, va-button-pair, progress bar)
    - `form-step/review.html` — form review (va-accordion, edit links, va-button-pair)
    - `confirmation/base.html` — confirmation page (va-alert success, next steps)
    - `hub/base.html` — benefit hub landing (va-link-action, va-card, spoke links)
    - `static-content/base.html` — informational content (typography, va-accordion)
  - Each template uses correct VA.gov page structure (gov banner, header, breadcrumbs, main, footer)
  - Templates use VADS components and design tokens exclusively
  - AI agents select from these templates when recognizing page patterns from Figma designs

- [x] **Create landing page** (completed as part of P0 global imports task)
  - File: `index.html` — VA gov banner, minimal header, prototype list with getting-started accordion, minimal footer
  - Uses VADS web components (`va-official-gov-banner`, `va-header-minimal`, `va-accordion`, `va-minimal-footer`)

#### Phase P1: My VA Dashboard Prototype (Reference Implementation)

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement these tasks.

Build the first prototype using the PRD-driven workflow to validate the approach. This is the real test — does a PRD + AI + MCP server produce a working prototype?

**Goal:** A working My VA Dashboard prototype with 5 user scenarios, rendered entirely with VADS web components, deployable to GitHub Pages.

**Prerequisites:** P0 complete (repo scaffolded, Vite building, MCP server configured).

##### Task P1.1: Write My VA Dashboard PRD

**Files:**
- Create: `src/prototypes/my-va-dashboard/prd.md`

**Step 1: Create prototype directory**

```bash
mkdir -p ~/repos/va-prototype-kit/src/prototypes/my-va-dashboard/src/{data,types,components}
```

**Step 2: Write the PRD**

Create `src/prototypes/my-va-dashboard/prd.md` with the following sections:

1. **Overview:** My VA personalized dashboard — the authenticated homepage for VA.gov
2. **Page structure:** VA.gov standard layout (gov banner, minimal header w/ subheader "My VA", breadcrumbs [Home > My VA], main content, back-to-top, minimal footer, crisis line modal)
3. **Dashboard sections** (top to bottom):
   - **Alerts** — `va-alert` components for system messages, dismissible
   - **Critical actions** — `va-critical-action` cards for time-sensitive tasks with deadlines
   - **Benefits and services** — `va-service-list-item` components showing enrolled benefits with status, details, and action links. Each item uses the `icon` attribute for the benefit category icon.
   - **Appointments** — `va-card` components showing upcoming appointments with type, provider, date, time, location, status
   - **Claims** — `va-card` components showing active claims with type, status, last updated, link
   - **Profile status** — `va-alert` (info or warning) showing profile completeness, with link to complete profile if missing fields
4. **User state scenarios** (5 total):
   - `brand-new-user` — Welcome alert, no benefits/appointments/claims, incomplete profile
   - `active-claims` — 1 critical action, 2 benefits, 1 appointment, 2 claims, complete profile
   - `incomplete-profile` — Warning alert, 1 benefit, profile status with missing fields
   - `critical-actions` — 2 critical actions, 3 benefits, copay + enrollment deadlines
   - `power-user` — Warning alert, 2 critical actions, 5 benefits, 3 appointments, 1 claim
5. **Scenario switching:** URL param `?scenario=brand-new-user` selects the scenario. A floating scenario picker `<select>` at top-right lets users switch during testing. Default: `active-claims`.
6. **Key interactions:** Scenario switching reloads dashboard sections. Dismissing alerts uses `va-alert` `closeEvent`. Clicking action links navigates (or shows stub pages). Critical action cards link to relevant pages.
7. **Components needed:** `va-official-gov-banner`, `va-header-minimal`, `va-breadcrumbs`, `va-alert`, `va-critical-action`, `va-service-list-item`, `va-card`, `va-tag-status`, `va-back-to-top`, `va-minimal-footer`, `va-crisis-line-modal`
8. **Reference:** Scenario data in plan appendix (Appendix B)

**Step 3: Commit**

```bash
git add src/prototypes/my-va-dashboard/prd.md
git commit -m "feat(my-va): add My VA Dashboard prototype PRD"
```

##### Task P1.2: Create scenario data files

**Files:**
- Create: `src/prototypes/my-va-dashboard/src/types/scenarios.ts`
- Create: `src/prototypes/my-va-dashboard/src/data/brand-new-user.json`
- Create: `src/prototypes/my-va-dashboard/src/data/active-claims.json`
- Create: `src/prototypes/my-va-dashboard/src/data/incomplete-profile.json`
- Create: `src/prototypes/my-va-dashboard/src/data/critical-actions.json`
- Create: `src/prototypes/my-va-dashboard/src/data/power-user.json`

**Step 1: Define TypeScript types**

Create `src/prototypes/my-va-dashboard/src/types/scenarios.ts`:

```ts
export interface Alert {
  type: 'info' | 'warning' | 'error' | 'success';
  headline: string;
  content: string;
  dismissible: boolean;
}

export interface CriticalAction {
  text: string;
  link: string;
  deadline: string;
}

export interface BenefitDetail {
  label: string;
  value: string;
}

export interface Benefit {
  serviceName: string;
  serviceLink: string;
  serviceStatus: string;
  serviceDetails: BenefitDetail[];
  action: { text: string; link: string } | null;
  icon: string;
}

export interface Appointment {
  type: string;
  provider: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

export interface Claim {
  type: string;
  status: string;
  lastUpdated: string;
  link: string;
}

export interface ProfileStatus {
  complete: boolean;
  missingFields: string[];
}

export interface ScenarioData {
  user: { firstName: string; lastName: string; profileComplete: boolean };
  alerts: Alert[];
  criticalActions: CriticalAction[];
  benefits: Benefit[];
  appointments: Appointment[];
  claims: Claim[];
  profileStatus: ProfileStatus;
}
```

**Step 2: Create JSON data files**

Create 5 JSON files in `src/prototypes/my-va-dashboard/src/data/`. Use the scenario data from plan Appendix B for `brand-new-user.json`, `active-claims.json`, and `power-user.json`. Create two additional scenarios:

`incomplete-profile.json`:
```json
{
  "user": { "firstName": "Riley", "lastName": "Davis", "profileComplete": false },
  "alerts": [
    { "type": "warning", "headline": "Complete your profile", "content": "We need more information to personalize your VA.gov experience.", "dismissible": false }
  ],
  "criticalActions": [],
  "benefits": [
    {
      "serviceName": "VA health care",
      "serviceLink": "/health-care",
      "serviceStatus": "Enrolled",
      "serviceDetails": [
        { "label": "Enrolled since", "value": "November 2025" },
        { "label": "Priority group", "value": "Group 3" }
      ],
      "action": null,
      "icon": "health_care"
    }
  ],
  "appointments": [],
  "claims": [],
  "profileStatus": { "complete": false, "missingFields": ["contact-email", "mailing-address"] }
}
```

`critical-actions.json`: Combine elements from `active-claims` and `power-user` scenarios — 2 critical actions (copay + document upload), 3 benefits, 1 appointment, 1 claim.

**Step 3: Commit**

```bash
git add src/prototypes/my-va-dashboard/src/
git commit -m "feat(my-va): add scenario types and data files"
```

##### Task P1.3: Create prototype entry point and app shell

**Files:**
- Create: `src/prototypes/my-va-dashboard/index.html`
- Create: `src/prototypes/my-va-dashboard/src/app.ts`

**Step 1: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My VA | Veterans Affairs</title>
    <script type="module" src="/src/main.ts"></script>
    <script type="module" src="./src/app.ts"></script>
  </head>
  <body>
    <va-official-gov-banner></va-official-gov-banner>
    <va-header-minimal header="VA.gov" subheader="My VA"></va-header-minimal>

    <div class="vads-grid-container">
      <va-breadcrumbs
        breadcrumb-list='[{"href":"/","label":"Home"},{"href":"/my-va","label":"My VA"}]'
        label="Breadcrumb"
      ></va-breadcrumbs>
    </div>

    <!-- Scenario picker (testing UI) -->
    <div class="vads-grid-container vads-u-padding-y--1">
      <div class="vads-u-display--flex vads-u-justify-content--flex-end">
        <label for="scenario-picker" class="vads-u-margin-right--1">Scenario:</label>
        <select id="scenario-picker">
          <option value="active-claims">Active claims</option>
          <option value="brand-new-user">Brand new user</option>
          <option value="incomplete-profile">Incomplete profile</option>
          <option value="critical-actions">Critical actions</option>
          <option value="power-user">Power user</option>
        </select>
      </div>
    </div>

    <main id="main-content">
      <div class="vads-grid-container">
        <div class="vads-grid-row">
          <div class="vads-grid-col-12 medium-screen:vads-grid-col-8">
            <h1 id="greeting"></h1>
            <div id="alerts-section"></div>
            <div id="critical-actions-section"></div>
            <div id="benefits-section"></div>
            <div id="appointments-section"></div>
            <div id="claims-section"></div>
            <div id="profile-section"></div>
          </div>
        </div>
      </div>
    </main>

    <va-back-to-top></va-back-to-top>
    <va-minimal-footer></va-minimal-footer>
    <va-crisis-line-modal></va-crisis-line-modal>
  </body>
</html>
```

**Step 2: Create `app.ts` — scenario loading and rendering**

Create `src/prototypes/my-va-dashboard/src/app.ts` with:

1. **Scenario loader:** Read `?scenario=` URL param (default: `active-claims`). Import the matching JSON file. Wire up the `<select>` to change `window.location.search`.
2. **Section renderers:** One function per dashboard section that takes scenario data and populates the corresponding `<div>`:
   - `renderGreeting(data)` → sets `#greeting` to `"Welcome, {firstName}"`
   - `renderAlerts(data)` → creates `<va-alert>` elements with `status`, `visible`, slot headline + body, `closeEvent` listener for dismissible
   - `renderCriticalActions(data)` → creates `<va-critical-action>` elements with `text`, `link`, `deadline`
   - `renderBenefits(data)` → creates `<va-service-list-item>` elements with `service-name`, `service-link`, `service-status`, `icon`, and `<li>` children for details + action
   - `renderAppointments(data)` → creates `<va-card>` elements with appointment info
   - `renderClaims(data)` → creates `<va-card>` elements with claim info
   - `renderProfileStatus(data)` → creates `<va-alert>` (info if complete, warning if incomplete) with link to profile
3. **Init:** `DOMContentLoaded` listener that loads scenario, calls all renderers, syncs `<select>` value

**Important:** Use `setAttribute()` for all VADS component attributes (kebab-case HTML attributes, not camelCase JS properties). Use `document.createElement()` for dynamic component creation. Set slot content via `element.slot = 'headline'` pattern. Reference `data/guides/frameworks/vanilla.md` in MCP server for exact patterns.

**Step 3: Verify Vite auto-discovers the prototype**

```bash
cd ~/repos/va-prototype-kit && node node_modules/vite/bin/vite.js build 2>&1 | head -5
# Should show the my-va-dashboard entry in the build
```

**Step 4: Commit**

```bash
git add src/prototypes/my-va-dashboard/
git commit -m "feat(my-va): add prototype entry point and app shell"
```

##### Task P1.4: Generate dashboard rendering code with AI + MCP server

This is the core test of the PRD-driven workflow.

**Step 1: Configure VADS MCP server in Claude Code**

Ensure `~/repos/va-prototype-kit/.claude/settings.json` has the VADS MCP server configured (should be done in P0 task 5). If not yet done, add it now.

**Step 2: Generate from PRD**

In Claude Code, working from `~/repos/va-prototype-kit`:

> "Read the PRD at src/prototypes/my-va-dashboard/prd.md. Use the VADS MCP server to look up each component's API (get_component), then generate the app.ts rendering code. Use the scenario data files in src/data/. Follow the vanilla JS patterns from the MCP server's vanilla guide (get_guide topic='vanilla')."

**Step 3: Document the experience**

Note in the PRD or a separate `src/prototypes/my-va-dashboard/NOTES.md`:
- Which components mapped correctly on first try
- Which attributes needed correction
- How many manual tweaks were needed
- Time from PRD → working prototype

**Step 4: Verify all scenarios render**

```bash
cd ~/repos/va-prototype-kit && node node_modules/vite/bin/vite.js --open
# Test each scenario via the picker
```

Check:
- [ ] `active-claims`: 1 critical action, 2 benefits, 1 appointment, 2 claims
- [ ] `brand-new-user`: Welcome alert, empty sections, incomplete profile
- [ ] `incomplete-profile`: Warning alert, 1 benefit, profile warning
- [ ] `critical-actions`: 2 critical actions, 3 benefits, 1 appointment, 1 claim
- [ ] `power-user`: Warning alert, 2 critical actions, 5 benefits, 3 appointments, 1 claim

**Step 5: Commit**

```bash
git add -A && git commit -m "feat(my-va): generate dashboard rendering from PRD"
```

##### Task P1.5: Validate and polish

**Step 1: Validate component attributes**

Use the MCP server's `validate_component_api` tool on each component used:

```
validate_component_api({ tag: "va-alert", attributes: ["status", "visible"] })
validate_component_api({ tag: "va-service-list-item", attributes: ["service-name", "service-link", "service-status", "icon"] })
validate_component_api({ tag: "va-critical-action", attributes: ["text", "link", "deadline"] })
```

Fix any invalid attributes.

**Step 2: Test responsive behavior**

Open dev tools, test at these breakpoints:
- Mobile: 320px
- Mobile large: 480px
- Tablet: 640px
- Desktop: 1024px

Verify: grid columns stack on mobile, content readable at all sizes.

**Step 3: Test production build**

```bash
cd ~/repos/va-prototype-kit && node node_modules/vite/bin/vite.js build && node node_modules/vite/bin/vite.js preview
# Verify at http://localhost:4173
```

**Step 4: Commit final version**

```bash
git add -A && git commit -m "fix(my-va): polish component attributes and responsive layout"
```

---

#### Phase P2: Workflow Documentation & Skills

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement these tasks.

**Goal:** Documentation that enables any designer to create prototypes without reading source code. Written as plain markdown usable by any AI coding agent.

**Architecture:** Guides live in `docs/skills/` in the prototype kit repo. Each guide is a standalone workflow document. Claude Code users get them as `/skills`; Copilot/Cursor users reference them via `AGENTS.md`.

##### Task P2.1: Write prototype workflow guide

**Files:**
- Create: `~/repos/va-prototype-kit/docs/skills/prototype-workflow.md`

Write a step-by-step guide covering:

1. **Prerequisites check** — Node.js 18+, npm, AI coding tool with MCP support, git
2. **Setup** — Clone repo, `npm install`, verify `npm run dev` works
3. **Create prototype directory** — `mkdir -p src/prototypes/<name>/`, create `index.html` from template
4. **Write PRD** — Copy `docs/prd-template.md`, fill in sections, include Figma links or screenshots
5. **Generate with AI** — Open AI coding tool, point it at the PRD, let it generate code using VADS MCP server
6. **Preview** — `npm run dev`, open browser, iterate
7. **Deploy** — Push to GitHub, Pages deploys automatically
8. **Share** — Share the GitHub Pages URL for usability testing

Include:
- Link to `docs/prd-template.md`
- Link to `docs/skills/setup-figma-mcp.md` for Figma integration
- Reminder to use VADS MCP server for component lookups
- Common troubleshooting (components not rendering → check `defineCustomElements`, wrong attributes → use MCP `validate_component_api`)

**Commit:**

```bash
git add docs/skills/prototype-workflow.md
git commit -m "docs: add prototype workflow guide"
```

##### Task P2.2: Write Figma MCP setup guide

**Files:**
- Create: `~/repos/va-prototype-kit/docs/skills/setup-figma-mcp.md`

Write setup instructions for three options:

1. **NPX setup (recommended)**
   - Install Figma Desktop app
   - Get Figma Personal Access Token (Settings → Account → Personal access tokens)
   - Import Desktop Bridge plugin in Figma (Plugins → Import plugin from manifest → point to `node_modules/@anthropic-ai/figma-console-mcp/figma-plugin/manifest.json`)
   - Run the plugin in Figma file (Plugins → Figma Console Desktop Bridge → click "Connect")
   - AI tool config: `"command": "npx", "args": ["-y", "@anthropic-ai/figma-console-mcp"]` with `FIGMA_ACCESS_TOKEN` env
   - 56+ tools, full capabilities including design creation
   - ~10 min setup

2. **Remote SSE setup (quick start)**
   - No local install needed
   - AI tool config: `"url": "https://figma-console-mcp.southleft.com/sse"`
   - Automatic OAuth when first connecting
   - 21 read-only tools
   - ~2 min setup

3. **Local Git setup**
   - Clone `southleft/figma-console-mcp`, build, configure with local dist path
   - For advanced users or when NPX is blocked (e.g., GFE)

**Verification:** After setup, ask AI agent to call `figma_list_open_files` — should return your open Figma files.

**Troubleshooting:** Common issues with Desktop Bridge not connecting, PAT expired, permission errors.

**Commit:**

```bash
git add docs/skills/setup-figma-mcp.md
git commit -m "docs: add Figma MCP setup guide"
```

##### Task P2.3: Write Figma-to-prototype guide (with MCP)

**Files:**
- Create: `~/repos/va-prototype-kit/docs/skills/figma-to-prototype.md`

Write the full dual-MCP workflow as AI agent instructions:

1. **Read the Figma design** (Figma Console MCP)
   - `figma_list_open_files` → identify target file
   - `figma_execute` → traverse layer tree, find component instances
   - `figma_get_component_for_development` → get component specs
   - `figma_capture_screenshot` → visual reference

2. **Identify page type** — Match against page type table (form step, dashboard, hub, etc.) and select layout template from `src/templates/`

3. **Map components** (VADS MCP)
   - For each Figma component: `map_figma_component({ figmaComponentName: "..." })`
   - For full API details: `get_component({ tag: "va-..." })`
   - For unmapped components: `find_components({ query: "..." })`

4. **Map tokens** (VADS MCP)
   - `find_tokens({ query: "..." })` for color, spacing, typography values

5. **Generate code** — Combine template + mapped components + content into working prototype page

6. **Verify** — Run `npm run dev`, check visual match, validate with `validate_component_api`

Include:
- Page type identification table (from plan section "Step 2: Identify the page layout")
- Common component mapping quick reference
- Fallback handling for unmapped components
- Tips for designers: clear layer names, auto layout, VADS variables

Reference: `data/guides/figma-to-code.md` in the MCP server (already written).

**Commit:**

```bash
git add docs/skills/figma-to-prototype.md
git commit -m "docs: add Figma-to-prototype workflow guide"
```

##### Task P2.4: Write Figma screenshot guide (without MCP)

**Files:**
- Create: `~/repos/va-prototype-kit/docs/skills/populate-from-figma.md`

Write a fallback workflow for designers who can't set up Figma Console MCP:

1. **Export screenshots** from Figma (frame → Export → PNG @2x)
2. **Share with AI** — Drop screenshot into AI conversation (Claude Code, Copilot Chat with image support)
3. **AI identifies components** — AI visually recognizes VADS components and asks the MCP server:
   - `find_components({ query: "alert" })` to find matching web components
   - `get_component({ tag: "va-alert" })` for the full API
4. **AI generates HTML** — Using identified components + visual layout from screenshot
5. **Validate** — `validate_component_api` on generated attributes

This is the lower-fidelity path but works with any AI tool that supports images. No Figma API access required.

**Commit:**

```bash
git add docs/skills/populate-from-figma.md
git commit -m "docs: add Figma screenshot workflow guide"
```

##### Task P2.5: Write page reproduction guide

**Files:**
- Create: `~/repos/va-prototype-kit/docs/skills/reproduce-page.md`

Write a guide for creating static mocks of external sites (for usability testing context):

1. **Purpose:** During testing, users sometimes navigate to external sites (e.g., pay.gov for payments). Mock these pages to keep the test flow coherent.
2. **Process:** Give AI agent the URL. It creates a static HTML/CSS mock at `src/mocks/<site-name>/index.html`. Uses VADS-neutral styling (plain HTML/CSS, not VADS components — these are non-VA pages).
3. **Wiring:** Link from prototype pages to mock pages. Back navigation returns to prototype.
4. **Limitations:** Static only — no real functionality. Visual approximation, not pixel-perfect.

**Commit:**

```bash
git add docs/skills/reproduce-page.md
git commit -m "docs: add page reproduction guide for external site mocks"
```

##### Task P2.6: Wire up Claude Code skills (optional)

**Files:**
- Create: `~/repos/va-prototype-kit/.claude/skills/prototype-workflow/SKILL.md`
- Create: `~/repos/va-prototype-kit/.claude/skills/figma-to-prototype/SKILL.md`
- Create: `~/repos/va-prototype-kit/.claude/skills/populate-from-figma/SKILL.md`

Each SKILL.md is a thin wrapper that loads the corresponding `docs/skills/*.md` content. This lets Claude Code users invoke workflows via `/prototype-workflow`, `/figma-to-prototype`, etc.

This is optional — the same workflows work by asking the AI to "follow the instructions in docs/skills/prototype-workflow.md".

**Commit:**

```bash
git add .claude/skills/
git commit -m "feat: add Claude Code skill wrappers for workflow guides"
```

#### Phase P3: Polish and Documentation

- [ ] **Write comprehensive README**
  - Quick start (clone, install, configure MCP server for your AI tool, run)
  - How to create a new prototype (write PRD, run your AI coding agent)
  - How to iterate and deploy
  - MCP server setup instructions for Copilot, Claude Code, and Cursor

- [ ] **Test with a real designer**
  - Have someone unfamiliar with the system try it
  - Measure: time from "I want to prototype X" to "I have something testable"
  - Gather feedback on pain points
  - Iterate on PRD template, agent instructions, README

---

## Acceptance Criteria

### VADS MCP Server

- [ ] `find_components` returns all 77+ components with correct tag names
- [ ] `get_component` returns complete API (props, events, slots, parts) for any component
- [ ] `validate_component_api` correctly identifies invalid attributes and suggests corrections
- [ ] `get_tokens` returns tokens by category with CSS variable names
- [ ] `find_tokens` finds tokens by name, value, or description
- [ ] `get_utility_classes` returns VADS CSS utility class reference
- [ ] `get_guide` returns installation, page-structure, form-patterns guides
- [ ] `map_figma_component` returns correct VADS web component for common Figma component names
- [ ] MCP server works with Claude Code, GitHub Copilot, and Cursor
- [ ] MCP server starts successfully via `npx` (GitHub Packages) or local `node dist/index.js`
- [ ] MCP server configuration files ship in repo for all three tools (`.claude/`, `.vscode/`, `.cursor/`)

### VA Prototype Kit

- [ ] Designer can run `npm run dev` and see prototype at `localhost:5173`
- [ ] All VA Design System components render correctly
- [ ] Prototype is responsive across breakpoints
- [ ] `npm run build && npm run preview` produces working static site
- [ ] GitHub Pages deployment works and is accessible via public URL
- [ ] AI coding agent with MCP server generates valid VADS component usage
- [ ] PRD-driven generation produces a functional prototype

### End-to-End Workflow

- [ ] **Path A (PRD):** Designer writes a PRD, runs an AI coding agent, and gets a working prototype
- [ ] **Path B (Figma):** Designer shares a Figma link, AI reads design via Figma MCP, maps to VADS components via VADS MCP, and generates a working prototype
- [ ] Generated prototype uses correct VADS components (no hallucinated APIs)
- [ ] Figma components are correctly mapped to `<va-*>` web components with proper attributes
- [ ] Layout templates are selected appropriately based on page structure
- [ ] Prototype deploys to GitHub Pages with a shareable URL
- [ ] Multiple user states/scenarios are testable in the prototype
- [ ] Designer can iterate on generated code without developer assistance
- [ ] Workflow works with both GitHub Copilot and Claude Code

## Success Metrics

1. **Time to first prototype:** Designer can go from "I want to prototype [feature]" to "I have something I can test" in under 30 minutes (improved from 1 hour target — MCP server makes AI generation faster)
2. **AI accuracy:** Generated code uses correct VADS component APIs on first generation (MCP server eliminates hallucinated attributes)
3. **Iteration speed:** Changes visible in preview within 5 seconds (Vite HMR)
4. **Self-sufficiency:** Designer can complete full workflow without front-end developer help
5. **AI assistance value:** Time spent tweaking AI-generated output is less than time to build from scratch
6. **Adoption:** At least 2 other designers successfully use the workflow within first month
7. **MCP server reuse:** MCP server is used beyond prototyping (e.g., in vets-website development, component-library development)
8. **Cross-tool compatibility:** Workflow succeeds with both Copilot and Claude Code users

## Dependencies & Prerequisites

**Required for designers:**
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)
- An AI coding agent with MCP support (GitHub Copilot, Claude Code, Cursor, etc.)
- Git access to the repository
- GitHub account (for forking and Pages deployment)

**Component library:**
- `@department-of-veterans-affairs/component-library` v54.6.0+ (Stencil web components)
- `@department-of-veterans-affairs/css-library` v0.29.0+ (VADS utility classes)
- Design tokens: sourced from `@department-of-veterans-affairs/css-library` CSS custom properties (migrating to `@department-of-veterans-affairs/va-design-system-resources` later this quarter)
- Components available (77+ total, key components listed below):
  - Layout: `va-card`, `va-accordion`, `va-breadcrumbs`, `va-tabs`
  - Content: `va-alert`, `va-critical-action`, `va-service-list-item`, `va-card-status`, `va-need-help`, `va-summary-box`
  - Navigation: `va-link`, `va-link-action`, `va-button`, `va-button-pair`, `va-segmented-progress-bar`, `va-pagination`
  - Form: `va-text-input`, `va-select`, `va-radio`, `va-checkbox`, `va-checkbox-group`, `va-combo-box`, `va-memorable-date`, `va-textarea`, `va-file-input`, `va-date`
  - Status: `va-tag-status`, `va-loading-indicator`, `va-progress-bar`
  - Global: `va-official-gov-banner`, `va-header-minimal`, `va-minimal-footer`, `va-back-to-top`, `va-crisis-line-modal`

**MCP server:**
- `@modelcontextprotocol/sdk` (^1.26.0) — runtime dependency
- `@department-of-veterans-affairs/web-components` — for `component-docs.json`
- `@department-of-veterans-affairs/css-library` — for design tokens and utility classes
- TypeScript for build, Vitest for TDD
- Initially published to GitHub Packages; public npm later

**Development tooling (auto-installed via npm):**
- Vite 6.x for dev server and builds
- TypeScript for type safety (optional for designers — can use plain JS)

**Deployment:**
- GitHub Pages (free, built into GitHub)
- OR any static file hosting

## Risk Analysis & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| AI generates incorrect component APIs despite MCP server | High | Low | MCP server provides real-time validation; `validate_component_api` tool catches errors |
| Stencil `component-docs.json` missing information | Medium | Medium | Supplement with design.va.gov scraping or static guides; improve JSDoc in component-library source |
| Node.js installation barrier for designers | Medium | Medium | Provide clear installation guide; consider Codespaces as alternative |
| MCP server maintenance burden when component-library updates | Medium | Low | Auto-read from installed package — updates come via `npm update` |
| Designers prefer Figma anyway | Medium | Medium | Make the workflow genuinely faster; provide clear value proposition; gather feedback early |
| PRD-driven approach produces inconsistent results | Medium | Medium | Provide a detailed PRD template; create good agent instructions; iterate based on feedback |
| Figma-to-VADS component mapping is incomplete or stale | High | High | Audit VADS Figma library thoroughly at launch; automate mapping updates when possible; fallback to `find_components` fuzzy search for unmapped components |
| Figma Console MCP server setup complexity | Medium | Medium | Document all three setup options (NPX, remote SSE, local); provide screenshot-based fallback (`populate-from-figma.md`) for designers who can't set up the MCP server |
| Figma designs use non-VADS components or custom elements | Medium | High | Guide instructs AI to flag unmapped elements; designer manually resolves or AI uses closest VADS equivalent |
| Component library auth/access issues in npm | Low | Low | Package is public on npm; document fallback for internal registry |

## Future Considerations

**Not in scope but worth noting:**

1. **GitHub Codespaces integration:** One-click cloud development environment for designers without local Node.js
2. **PR preview deployments:** GitHub Actions to deploy prototype branches to preview URLs automatically
3. **Figma CodeConnect:** Establish CodeConnect mappings between VADS Figma library components and `<va-*>` web components. Once configured, Figma-aware tools will automatically return the correct web component for each Figma instance, replacing the manual `figma-component-map.json` maintained in the VADS MCP server.
4. **MCP server for vets-website:** Extend MCP server with vets-website-specific patterns (Forms System, platform utilities)
5. **Component library contribution:** Improve JSDoc annotations in component-library source to enrich MCP server data (following NYSDS's approach of improving source docs for better AI output)
6. **Visual regression testing:** Playwright for screenshot comparison of generated prototypes
7. **Token dependency graph:** `get_token_graph` tool showing which tokens reference which (like NYSDS's `get_token_graph`)
8. **Context-aware token validation:** Warn when surface tokens are used for text, etc. (like NYSDS's `get_token_info` with context parameter)
9. **MCP server for mobile:** Extend to cover VA mobile design system components
10. **Network preview mode:** `npm run preview:network` for local network sharing before deploying

## References & Research

### VA Design System Ecosystem

- Component Library: https://github.com/department-of-veterans-affairs/component-library (Stencil, 77+ components)
- CSS Library: `@department-of-veterans-affairs/css-library` (VADS utility classes)
- Design System Resources: https://github.com/department-of-veterans-affairs/va-design-system-resources (tokens, assets — will become canonical token source later this quarter)
- Documentation Site: https://design.va.gov/components/
- Storybook: https://design.va.gov/storybook/

### VA Design System Documentation (this repo)

- Service List Item component: `src/_components/service-list-item.md`
- Manage Benefits pattern: `src/_patterns/help-users-to/manage-benefits-and-tools.md`
- Component docs data: `src/_data/component-docs.json` (Stencil-generated, 77+ components)
- Token CSVs: `src/_data/tokens/vads-color-semantic.csv`, `vads-spacing-semantic.csv`, etc.

### NYSDS Prior Art (Primary Inspiration)

- **Adoptive Application Demo:** https://github.com/ITS-HCD/project-adoptive-application
  - Vanilla TypeScript + Vite, deployed to GitHub Pages
  - Generated from PRD using Claude Code + NYSDS MCP server
  - `.claude/prd.md` + `.claude/tasks.md` + `.claude/agents/` structure
  - 3 production deps: `@nysds/components`, `@nysds/styles`, `lit`

- **NYSDS MCP Server:** https://github.com/ITS-HCD/nysds/tree/feature/mcp-server-updates/packages/mcp-server
  - 8 tools: find_components, get_component, validate_component_api, get_tokens, find_tokens, get_token_info, get_token_graph, get_utility_classes, get_guide
  - Primary data source: Custom Elements Manifest (auto-generated from Lit component JSDoc)
  - Secondary: DTCG tokens JSON/CSS, static markdown guides, hardcoded utility docs
  - Only runtime dependency: `@modelcontextprotocol/sdk`
  - Serves as our architectural reference for `vads-mcp-server`

### Other Prior Art

- **GOV.UK Prototype Kit:** https://prototype-kit.service.gov.uk/docs/
- **USDS Gatsby Starter:** https://github.com/usds/gatsby-uswds-ts-starter
- **MCP Protocol:** https://modelcontextprotocol.io/
- **AGENTS.md Specification:** https://agents.md/ — Open standard for AI agent instructions, supported by 20+ tools
- **Copilot Custom Instructions:** https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
- **Figma Console MCP Server:** https://github.com/southleft/figma-console-mcp — southleft's Figma MCP server (56+ tools, design extraction and creation)
- **Figma MCP Server (Official):** https://developers.figma.com/docs/figma-mcp-server/ — Official Figma MCP server (alternative option)
- **Figma Code Connect:** https://www.figma.com/developers/code-connect — Design-to-code component mapping (future)

### External References

- GitHub Issue: https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1385
- Vite documentation: https://vitejs.dev/guide/
- GitHub Pages documentation: https://docs.github.com/en/pages
- MCP SDK: https://github.com/modelcontextprotocol/typescript-sdk

---

## Appendix A: VADS MCP Server vs. NYSDS MCP Server Mapping

| NYSDS | VADS | Notes |
|-------|------|-------|
| Custom Elements Manifest (CEM) from `@custom-elements-manifest/analyzer` | `component-docs.json` from Stencil `@stencil/core` | Different generators, same concept. Stencil's format has `props` with `attr` field; CEM has `attributes`. Both provide events, slots, parts. |
| DTCG tokens JSON (`tokens.json`) | CSS custom properties from `@department-of-veterans-affairs/css-library` (migrating to `va-design-system-resources` JSON later) | NYSDS uses DTCG format natively. VA tokens are currently consumed as CSS custom properties. Structured JSON format coming later this quarter. |
| `tokens.css` (generated) | CSS from `@department-of-veterans-affairs/css-library` | Both provide CSS custom properties. VA's also includes utility classes. |
| Lit web components | Stencil web components | Both compile to standard web components. Stencil generates shadow DOM components. Usage in HTML is identical. |
| `@nysds/styles` (full bundle) | `@department-of-veterans-affairs/css-library` | Both provide reset, typography, and utility classes. |
| 8 agency themes | N/A (single VA theme) | VA has one brand; no multi-theme support needed. |
| `get_token_graph` (dependency graph) | Future consideration | Token alias resolution is simpler in VA's token structure. |
| `get_token_info` with context validation | Future consideration | Could warn "surface tokens shouldn't be used for text" etc. |

## Appendix B: Scenario Data Examples

These remain valid as PRD reference material for the My VA Dashboard prototype. The AI will generate state management code to support these scenarios.

### brand-new-user scenario

```json
{
  "user": {
    "firstName": "Jamie",
    "lastName": "Smith",
    "profileComplete": false
  },
  "alerts": [
    {
      "type": "info",
      "headline": "Welcome to VA.gov",
      "content": "Complete your profile to get personalized recommendations for benefits and services.",
      "dismissible": true
    }
  ],
  "criticalActions": [],
  "benefits": [],
  "appointments": [],
  "claims": [],
  "profileStatus": {
    "complete": false,
    "missingFields": ["contact-email", "mailing-address", "phone-number"]
  }
}
```

### active-claims scenario

```json
{
  "user": {
    "firstName": "Alex",
    "lastName": "Johnson",
    "profileComplete": true
  },
  "alerts": [],
  "criticalActions": [
    {
      "text": "Submit requested documents by March 15, 2026",
      "link": "/track-claims/upload-documents",
      "deadline": "2026-03-15"
    }
  ],
  "benefits": [
    {
      "serviceName": "Disability compensation",
      "serviceLink": "/disability",
      "serviceStatus": "Active",
      "serviceDetails": [
        {"label": "Combined rating", "value": "70%"},
        {"label": "Monthly amount", "value": "$1,716.28"}
      ],
      "action": {
        "text": "Submit requested documents by March 15, 2026",
        "link": "/track-claims/upload-documents"
      },
      "icon": "disability"
    },
    {
      "serviceName": "VA health care",
      "serviceLink": "/health-care",
      "serviceStatus": "Enrolled",
      "serviceDetails": [
        {"label": "Enrolled since", "value": "January 2020"},
        {"label": "Priority group", "value": "Group 2"}
      ],
      "action": null,
      "icon": "health_care"
    }
  ],
  "appointments": [
    {
      "type": "Primary care",
      "provider": "Dr. Sarah Chen",
      "date": "February 15, 2026",
      "time": "10:30 a.m. PT",
      "location": "VA Portland Medical Center",
      "status": "Confirmed"
    }
  ],
  "claims": [
    {
      "type": "Disability compensation claim",
      "status": "Evidence gathering",
      "lastUpdated": "January 28, 2026",
      "link": "/track-claims/123456"
    },
    {
      "type": "Decision review (Supplemental claim)",
      "status": "Initial review",
      "lastUpdated": "February 1, 2026",
      "link": "/track-claims/789012"
    }
  ],
  "profileStatus": {
    "complete": true,
    "missingFields": []
  }
}
```

### power-user scenario

```json
{
  "user": {
    "firstName": "Morgan",
    "lastName": "Williams",
    "profileComplete": true
  },
  "alerts": [
    {
      "type": "warning",
      "headline": "Upcoming changes to your benefits",
      "content": "New legislation may affect your education benefits. Review the changes by April 1, 2026.",
      "dismissible": true
    }
  ],
  "criticalActions": [
    {
      "text": "Pay your $251.42 copay by February 28, 2026",
      "link": "/health-care/pay-copay-bill",
      "deadline": "2026-02-28"
    },
    {
      "text": "Verify your school enrollment by March 1, 2026",
      "link": "/education/verify-enrollment",
      "deadline": "2026-03-01"
    }
  ],
  "benefits": [
    {
      "serviceName": "Disability compensation",
      "serviceLink": "/disability",
      "serviceStatus": "Active",
      "serviceDetails": [
        {"label": "Combined rating", "value": "90%"},
        {"label": "Monthly amount", "value": "$2,241.91"}
      ],
      "action": null,
      "icon": "disability"
    },
    {
      "serviceName": "Post-9/11 GI Bill",
      "serviceLink": "/education",
      "serviceStatus": "Active",
      "serviceDetails": [
        {"label": "Remaining entitlement", "value": "14 months, 12 days"},
        {"label": "Current enrollment", "value": "Portland State University"}
      ],
      "action": {
        "text": "Verify your enrollment by March 1, 2026",
        "link": "/education/verify-enrollment"
      },
      "icon": "school"
    },
    {
      "serviceName": "VA health care",
      "serviceLink": "/health-care",
      "serviceStatus": "Enrolled",
      "serviceDetails": [
        {"label": "Enrolled since", "value": "March 2018"},
        {"label": "Priority group", "value": "Group 1"}
      ],
      "action": {
        "text": "Pay your $251.42 copay by February 28, 2026",
        "link": "/health-care/pay-copay-bill"
      },
      "icon": "health_care"
    },
    {
      "serviceName": "VA home loan",
      "serviceLink": "/housing-assistance/home-loans",
      "serviceStatus": "COE on file",
      "serviceDetails": [
        {"label": "COE issued", "value": "June 15, 2023"},
        {"label": "Loan status", "value": "Active mortgage"}
      ],
      "action": null,
      "icon": "home"
    },
    {
      "serviceName": "VA life insurance",
      "serviceLink": "/life-insurance",
      "serviceStatus": "Active",
      "serviceDetails": [
        {"label": "Policy type", "value": "SGLI"},
        {"label": "Coverage amount", "value": "$400,000"}
      ],
      "action": null,
      "icon": "account_balance"
    }
  ],
  "appointments": [
    {
      "type": "Primary care",
      "provider": "Dr. Sarah Chen",
      "date": "February 15, 2026",
      "time": "10:30 a.m. PT",
      "location": "VA Portland Medical Center",
      "status": "Confirmed"
    },
    {
      "type": "Mental health",
      "provider": "Dr. Michael Torres",
      "date": "February 22, 2026",
      "time": "2:00 p.m. PT",
      "location": "VA Portland Medical Center",
      "status": "Confirmed"
    },
    {
      "type": "Optometry",
      "provider": "Dr. Lisa Park",
      "date": "March 5, 2026",
      "time": "9:00 a.m. PT",
      "location": "VA Portland Medical Center",
      "status": "Requested"
    }
  ],
  "claims": [
    {
      "type": "Disability compensation claim",
      "status": "Decision phase",
      "lastUpdated": "February 2, 2026",
      "link": "/track-claims/345678"
    }
  ],
  "profileStatus": {
    "complete": true,
    "missingFields": []
  }
}
```
