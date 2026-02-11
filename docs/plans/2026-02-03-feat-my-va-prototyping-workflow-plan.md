---
title: "feat: My VA Interactive Prototyping Workflow"
type: feat
date: 2026-02-03
updated: 2026-02-11
github_issue: https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1385
---

# My VA Interactive Prototyping Workflow

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
- Stencil's `component-docs.json` (67 components, full prop/event/slot/parts data) is directly analogous to NYSDS's Custom Elements Manifest

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

Designers will often start from a Figma design rather than a blank PRD. The workflow uses **two MCP servers together** — the Figma MCP server to read the design, and the VADS MCP server to map it to correct web components.

**The problem:** VA Design System Figma components and web components are not yet connected via [Figma Code Connect](https://www.figma.com/developers/code-connect). This means the Figma MCP server's `get_code_connect_map` tool returns nothing useful — the AI agent has no automatic mapping from Figma component instances to `<va-*>` web component tags.

**The solution: A Figma-to-VADS component mapping maintained in the VADS MCP server.** The mapping bridges the gap between Figma component names (e.g., "Alert - Warning") and web component tags (e.g., `<va-alert status="warning">`). This is a manual mapping table that we maintain until CodeConnect is established.

#### How the Figma-to-Code Workflow Works

**Step 1: Read the Figma design** (Figma MCP server)

The AI agent calls Figma MCP tools in sequence:

1. **`get_metadata`** — Gets the sparse node tree: layer IDs, names, types, positions, sizes, and screenshots. This reveals the page structure (what sections exist, nesting, ordering) and identifies component instances by their Figma component names.
2. **`get_design_context`** — Gets the full structured representation for specific nodes. Returns layout properties (auto layout direction, gap, padding → translates to flex/grid), component properties (variants, states, overrides), and text content.
3. **`get_variable_defs`** — Gets Figma variables used in the design (colors, spacing, typography). These map to VADS design tokens.
4. **`get_screenshot`** — Gets visual screenshots for reference, ensuring the AI can see what the final result should look like.

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
1. AI calls `get_variable_defs` from Figma MCP to get the variable names and values
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

**Future: CodeConnect replaces this mapping.** Once Figma CodeConnect is configured for the VADS Figma library, the Figma MCP server's `get_code_connect_map` will return the correct web component for each Figma instance automatically. At that point, the `map_figma_component` tool becomes a fallback for unmapped components.

---

## Part 1: VADS MCP Server

### What It Does

The MCP server exposes VA Design System knowledge through the [Model Context Protocol](https://modelcontextprotocol.io/), an open standard supported by all major AI coding tools (Claude Code, GitHub Copilot, Cursor, Windsurf, Zed, etc.). When an AI needs to generate a `<va-text-input>`, it queries the MCP server for the exact attributes, events, slots, and usage patterns rather than guessing.

### Data Sources

| Data Source | Package | What It Provides |
|-------------|---------|------------------|
| Stencil `component-docs.json` | `@department-of-veterans-affairs/component-library` | 67 components with props, events, slots, parts, dependency graphs |
| CSS Library | `@department-of-veterans-affairs/css-library` | VADS utility classes, grid system, spacing, typography |
| Design Tokens | `@department-of-veterans-affairs/va-design-system-tokens` | Color, spacing, font, elevation tokens in JSON + CSS |
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

#### Token Data Schema (from va-design-system-resources)

Tokens are available in JSON source format with alias references:

```json
{
  "vads-color-background-default-on-light": {
    "name": "vads-color-background-default-on-light",
    "value": "{vads-color-base-lightest.*}",
    "attributes": { "category": "color" }
  }
}
```

Categories: `color` (semantic, component, primitive), `font` (family, size, lineHeight, letterSpacing, typography), `spacing`, `elevation`, `shape`, `size`.

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
| `vads://components` | JSON list of all 67 components with tag names and summaries |
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
- Lists the 67 available components by category

### Key Implementation Details

#### Component Parser (`component-parser.ts`)

Reads `component-docs.json` from the installed `@department-of-veterans-affairs/component-library` package (or `web-components` sub-package). The file is auto-generated by Stencil and includes the full API surface.

File resolution order (to support dev and installed contexts):
1. `node_modules/@department-of-veterans-affairs/web-components/component-docs.json`
2. `node_modules/@department-of-veterans-affairs/component-library/component-docs.json`
3. `{cwd}/component-docs.json` (for local development)

Key transformations:
- Extract `props` into a clean attributes list with `attr` (HTML attribute name), `type`, `default`, `required`, `docs`
- Filter `docsTags` to surface `@componentName`, `@maturityCategory`, `@maturityLevel`
- Parse `events` into event name + description
- Build a component-name-to-tag-name lookup (e.g., "Text input" → `va-text-input`)
- Cache parsed data in memory after first load

#### Token Parser (`token-parser.ts`)

Reads token JSON from `@department-of-veterans-affairs/va-design-system-tokens`. Transforms source format into CSS-centric representation:
- Convert token names to CSS custom properties (e.g., `vads-color-base` → `--vads-color-base`)
- Resolve alias references (e.g., `{vads-color-base-lightest.*}` → resolved hex value)
- Classify tokens by category and layer (primitive, semantic, component)
- Support token search by name, value, or description

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

#### Phase M0: Foundation

- [ ] **Create `vads-mcp-server` repository (or package directory)**
  - Initialize with TypeScript, `@modelcontextprotocol/sdk` dependency
  - Configure as CLI binary (`vads-mcp` entry point)
  - Add `@department-of-veterans-affairs/component-library` as a dependency (for `component-docs.json`)
  - Set up build script (`tsc` — no bundler needed)

- [ ] **Implement component parser**
  - File: `src/lib/component-parser.ts`
  - Read and cache `component-docs.json` from installed package
  - Parse 67 components into structured format
  - Build name → tag lookup, fuzzy search index

- [ ] **Implement `find_components` and `get_component` tools**
  - File: `src/tools/component-tools.ts`
  - `find_components`: list all or search by name/description
  - `get_component`: full component docs with props, events, slots, parts
  - Register tools with `server.tool()` using Zod schemas for parameters

- [ ] **Implement component resources**
  - File: `src/resources/components.ts`
  - `vads://components`: JSON list of all components
  - `vads://component/{tag}`: full docs for a specific component

- [ ] **Implement `vads_mode` prompt**
  - File: `src/prompts/vads-mode.ts`
  - System prompt listing capabilities, best practices, available tools
  - Component categories and available tag names

- [ ] **Test with Claude Code**
  - Configure MCP server in Claude Code settings
  - Verify `find_components` returns correct results
  - Verify `get_component` returns full API for `va-text-input`, `va-alert`, etc.
  - Generate a simple page using VADS components — confirm correct attribute names

#### Phase M1: Tokens & Validation

- [ ] **Implement token parser**
  - File: `src/lib/token-parser.ts`
  - Read tokens from `@department-of-veterans-affairs/va-design-system-tokens` or fallback to local CSV/JSON
  - Parse into CSS variable names with resolved values
  - Classify by category (color, font, spacing, elevation, shape, size)
  - Build search index

- [ ] **Implement token tools**
  - File: `src/tools/token-tools.ts`
  - `get_tokens`: filter by category
  - `find_tokens`: search by name/value/description

- [ ] **Implement `validate_component_api` tool**
  - File: `src/tools/validation-tools.ts`
  - Accept tag name + list of attributes
  - Cross-reference against `props` array (using `attr` field for HTML attribute names)
  - Return valid/invalid with suggestions for corrections

- [ ] **Implement token resources**
  - File: `src/resources/tokens.ts`
  - `vads://tokens`: all tokens
  - `vads://tokens/{category}`: filtered by category

#### Phase M2: Guides & Utilities

- [ ] **Write static guide markdown files**
  - `data/guides/installation.md`
  - `data/guides/page-structure.md`
  - `data/guides/form-patterns.md`
  - `data/guides/accessibility.md`
  - `data/guides/frameworks/vanilla.md`

- [ ] **Implement guide and utility tools**
  - File: `src/tools/guide-tools.ts` — `get_guide` tool
  - File: `src/tools/utility-tools.ts` — `get_utility_classes` tool with VADS CSS class reference

- [ ] **Implement guide resources**
  - File: `src/resources/guides.ts`
  - `vads://guides/{topic}`: serve guide markdown

- [ ] **Package for distribution**
  - Configure `package.json` bin field for `vads-mcp` CLI
  - Document setup for each AI tool:
    - Claude Code: `.claude/settings.json`
    - GitHub Copilot: `.vscode/mcp.json`
    - Cursor: `.cursor/mcp.json`
  - All use the same command: `npx @department-of-veterans-affairs/vads-mcp-server`
  - Publish to npm (or internal registry)

#### Phase M3: Figma Component Mapping

- [ ] **Create Figma-to-VADS component mapping data**
  - File: `data/figma-component-map.json`
  - Audit the VADS Figma library to catalog all component names and variants
  - Map each Figma component name to its `<va-*>` web component tag
  - Include variant-to-attribute mappings (e.g., Figma "Type: Warning" → `status="warning"`)
  - Include HTML example snippets for each mapping
  - Document unmapped or partially mapped components

- [ ] **Implement `map_figma_component` tool**
  - File: `src/tools/figma-tools.ts`
  - Accept a Figma component name (may include variant info, e.g., "Alert - Warning")
  - Fuzzy match against `figma-component-map.json`
  - Return: matched `<va-*>` tag, attribute mappings, HTML example
  - If no exact match: return candidates ranked by similarity, plus a suggestion to use `find_components` for manual lookup
  - Handle common naming variations (capitalization, dashes vs spaces, with/without variant suffixes)

- [ ] **Write Figma-to-code guide**
  - File: `data/guides/figma-to-code.md`
  - Step-by-step workflow for the dual MCP server approach
  - How to set up the Figma MCP server (desktop and remote options)
  - How to select frames in Figma and pass links to the AI agent
  - How the AI uses `get_metadata` → `get_design_context` → `map_figma_component` → `get_component`
  - Troubleshooting unmapped components
  - Tips for Figma file structure that produces better results (named layers, auto layout, variables)

- [ ] **Test the Figma-to-code workflow end-to-end**
  - Select a real VADS Figma design (e.g., My VA dashboard mockup)
  - Run the dual MCP workflow with an AI agent
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
   - **Figma MCP server (optional):** Designer follows `docs/skills/setup-figma-mcp.md` to connect their Figma account. Requires Figma Dev seat for full access.

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
4. **AI agent reads the Figma design** via the Figma MCP server:
   - Calls `get_metadata` to understand the page structure and identify components
   - Calls `get_design_context` for detailed layout and component properties
   - Calls `get_variable_defs` for design tokens used
   - Calls `get_screenshot` for visual reference
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
| **Page templates** | Pre-built HTML templates designers fill in | AI generates pages from PRD descriptions |
| **Designer edits** | JSON scenario files | Generated TypeScript/HTML code |
| **State management** | Reusable prototype-state.js library | Per-prototype generated code |
| **AI dependency** | Optional (Claude Code skills for onboarding) | Central (MCP server enables correct generation) |
| **AI tool support** | Claude Code only (`.claude/skills/`) | Cross-tool (`AGENTS.md` + MCP for Copilot, Claude Code, Cursor) |
| **Reusable infra** | Prototype kit framework | MCP server (benefits all VA AI development) |

### Prototype Kit Implementation Phases

#### Phase P0: Repository Setup

- [ ] **Create `va-prototype-kit` repository**
  - Create repo in `department-of-veterans-affairs` org (or personal for initial development)
  - Initialize with README, .gitignore (Node), MIT license
  - Enable GitHub Pages (deploy from `gh-pages` branch)

- [ ] **Initialize Vite project**
  - `npm create vite@latest . -- --template vanilla-ts`
  - Configure `vite.config.ts` for multi-page app support (one entry per prototype)
  - Add dependencies:
    - `@department-of-veterans-affairs/component-library` (^54.6.0)
    - `@department-of-veterans-affairs/css-library` (^0.29.0)
  - Configure base path for GitHub Pages deployment

- [ ] **Set up global imports**
  - File: `src/main.ts`
  - Import component-library (registers all custom elements)
  - Import css-library for VADS utility classes
  - Import app-level styles

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
  - Include Figma MCP server config stubs (designer adds their own auth):
    - Document both desktop (`http://127.0.0.1:3845/mcp`) and remote (`https://mcp.figma.com/mcp`) options
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

- [ ] **Create landing page**
  - File: `index.html`
  - List available prototypes with links
  - Brief explanation of what this repo is for

#### Phase P1: My VA Dashboard Prototype (Reference Implementation)

Build the first prototype using the PRD-driven workflow to validate the approach.

- [ ] **Write My VA Dashboard PRD**
  - File: `src/prototypes/my-va-dashboard/prd.md`
  - Describe all dashboard sections: alerts, critical actions, benefits/services, appointments, claims, profile status
  - Define 5 user state scenarios (brand new user, active claims, incomplete profile, critical actions, power user)
  - Specify VADS components to use for each section
  - Include page structure requirements (header, breadcrumbs, footer)

- [ ] **Generate prototype using Claude Code + MCP server**
  - Use Claude Code with VADS MCP server configured
  - Generate from PRD — this is the real test of the workflow
  - Document the experience: what worked, what needed manual tweaking

- [ ] **Validate generated output**
  - All VADS components render correctly
  - Correct attributes used (validated by MCP server)
  - Scenario switching works between user states
  - Responsive across breakpoints
  - No accessibility errors (axe-core)

- [ ] **Configure Vite for prototype**
  - Add entry point in `vite.config.ts`
  - Test hot reload
  - Test production build and preview

#### Phase P2: Workflow Documentation & Skills

- [ ] **Create prototype workflow guide**
  - File: `docs/skills/prototype-workflow.md`
  - Guided onboarding: check prerequisites, ask what to prototype, generate scaffold
  - References PRD template, VADS MCP server tools
  - Deployment instructions for GitHub Pages
  - Written as plain markdown any AI agent can follow
  - Optionally symlink/reference from `.claude/skills/` for Claude Code `/skill` access

- [ ] **Create Figma MCP setup guide**
  - File: `docs/skills/setup-figma-mcp.md`
  - How to configure the Figma MCP server for each AI tool
  - Desktop server setup (requires Figma Desktop app, connects at `http://127.0.0.1:3845/mcp`)
  - Remote server setup (connects to `https://mcp.figma.com/mcp`, requires OAuth)
  - Figma seat requirements (Dev or Full seat on paid plans for reasonable rate limits; Starter/View/Collab limited to 6 tool calls/month)
  - How to verify the connection works
  - Troubleshooting common issues

- [ ] **Create Figma-to-prototype guide (with MCP)**
  - File: `docs/skills/figma-to-prototype.md`
  - The full dual-MCP workflow: Figma link → design analysis → component mapping → code generation
  - Step-by-step instructions the AI agent follows:
    1. Call Figma `get_metadata` to understand page structure
    2. Call Figma `get_design_context` for each major section
    3. Call Figma `get_variable_defs` for tokens
    4. Call Figma `get_screenshot` for visual reference
    5. Call VADS `map_figma_component` for each Figma component found
    6. Call VADS `get_component` for full API of matched components
    7. Select layout template from `src/templates/` based on identified page type
    8. Generate code combining template + components + content
  - How to handle unmapped components (fallback to `find_components` search)
  - How to handle custom/one-off Figma elements that aren't VADS components
  - Tips for designers: name your Figma layers well, use auto layout, use VADS variables

- [ ] **Create Figma screenshot guide (without MCP)**
  - File: `docs/skills/populate-from-figma.md`
  - Fallback for designers without Figma MCP setup or Dev seats
  - Accept Figma screenshot image, visually identify VADS components, generate HTML
  - Instruct AI to use VADS MCP server `find_components` and `validate_component_api`
  - Works with any AI agent that supports image input

- [ ] **Create page reproduction guide**
  - File: `docs/skills/reproduce-page.md`
  - Accept URL, generate static HTML/CSS mock
  - Save to `src/mocks/` directory for usability testing context

- [ ] **Wire up Claude Code skills (optional)**
  - Create `.claude/skills/` entries that reference `docs/skills/` markdown files
  - Enables Claude Code users to invoke workflows via `/skill` commands
  - Not required — same workflows work by referencing docs directly

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

- [ ] `find_components` returns all 67 components with correct tag names
- [ ] `get_component` returns complete API (props, events, slots, parts) for any component
- [ ] `validate_component_api` correctly identifies invalid attributes and suggests corrections
- [ ] `get_tokens` returns tokens by category with CSS variable names
- [ ] `find_tokens` finds tokens by name, value, or description
- [ ] `get_utility_classes` returns VADS CSS utility class reference
- [ ] `get_guide` returns installation, page-structure, form-patterns guides
- [ ] `map_figma_component` returns correct VADS web component for common Figma component names
- [ ] MCP server works with Claude Code, GitHub Copilot, and Cursor
- [ ] `npx @department-of-veterans-affairs/vads-mcp-server` starts successfully
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
- `@department-of-veterans-affairs/va-design-system-tokens` v0.0.10+ (design tokens)
- Components available (67 total):
  - Layout: `va-card`, `va-accordion`, `va-breadcrumbs`, `va-tabs`
  - Content: `va-alert`, `va-critical-action`, `va-service-list-item`, `va-card-status`, `va-need-help`, `va-summary-box`
  - Navigation: `va-link`, `va-link-action`, `va-button`, `va-button-pair`, `va-segmented-progress-bar`, `va-pagination`
  - Form: `va-text-input`, `va-select`, `va-radio`, `va-checkbox`, `va-checkbox-group`, `va-combo-box`, `va-memorable-date`, `va-textarea`, `va-file-input`, `va-date`
  - Status: `va-tag-status`, `va-loading-indicator`, `va-progress-bar`
  - Global: `va-official-gov-banner`, `va-header-minimal`, `va-minimal-footer`, `va-back-to-top`, `va-crisis-line-modal`

**MCP server:**
- `@modelcontextprotocol/sdk` (^1.0.0) — only runtime dependency
- TypeScript for build
- Published as npm package with CLI binary

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
| Figma MCP server access limited by seat type | Medium | Medium | Document seat requirements clearly; provide screenshot-based fallback (`populate-from-figma.md`) for designers without Dev seats |
| Figma designs use non-VADS components or custom elements | Medium | High | Guide instructs AI to flag unmapped elements; designer manually resolves or AI uses closest VADS equivalent |
| Component library auth/access issues in npm | Low | Low | Package is public on npm; document fallback for internal registry |

## Future Considerations

**Not in scope but worth noting:**

1. **GitHub Codespaces integration:** One-click cloud development environment for designers without local Node.js
2. **PR preview deployments:** GitHub Actions to deploy prototype branches to preview URLs automatically
3. **Figma CodeConnect:** Establish CodeConnect mappings between VADS Figma library components and `<va-*>` web components. Once configured, the Figma MCP server's `get_code_connect_map` tool will automatically return the correct web component for each Figma instance, replacing the manual `figma-component-map.json` maintained in the VADS MCP server.
4. **MCP server for vets-website:** Extend MCP server with vets-website-specific patterns (Forms System, platform utilities)
5. **Component library contribution:** Improve JSDoc annotations in component-library source to enrich MCP server data (following NYSDS's approach of improving source docs for better AI output)
6. **Visual regression testing:** Playwright for screenshot comparison of generated prototypes
7. **Token dependency graph:** `get_token_graph` tool showing which tokens reference which (like NYSDS's `get_token_graph`)
8. **Context-aware token validation:** Warn when surface tokens are used for text, etc. (like NYSDS's `get_token_info` with context parameter)
9. **MCP server for mobile:** Extend to cover VA mobile design system components
10. **Network preview mode:** `npm run preview:network` for local network sharing before deploying

## References & Research

### VA Design System Ecosystem

- Component Library: https://github.com/department-of-veterans-affairs/component-library (Stencil, 67 components)
- CSS Library: `@department-of-veterans-affairs/css-library` (VADS utility classes)
- Design System Resources: https://github.com/department-of-veterans-affairs/va-design-system-resources (tokens, assets)
- Design Tokens: `@department-of-veterans-affairs/va-design-system-tokens` (color, font, spacing in JSON)
- Documentation Site: https://design.va.gov/components/
- Storybook: https://design.va.gov/storybook/

### VA Design System Documentation (this repo)

- Service List Item component: `src/_components/service-list-item.md`
- Manage Benefits pattern: `src/_patterns/help-users-to/manage-benefits-and-tools.md`
- Component docs data: `src/_data/component-docs.json` (Stencil-generated, 67 components)
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
- **Figma MCP Server:** https://developers.figma.com/docs/figma-mcp-server/ — Official Figma MCP server documentation
- **Figma MCP Tools & Prompts:** https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/ — Tool reference
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
| DTCG tokens JSON (`tokens.json`) | Token JSON from `@department-of-veterans-affairs/va-design-system-tokens` | NYSDS uses DTCG format natively. VA tokens use a simpler `{name, value, attributes}` format with alias references. |
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
