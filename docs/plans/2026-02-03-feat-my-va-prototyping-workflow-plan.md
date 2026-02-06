---
title: "feat: My VA Interactive Prototyping Workflow"
type: feat
date: 2026-02-03
github_issue: https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1385
---

# My VA Interactive Prototyping Workflow

## Overview

Enable designers to rapidly build and iterate on interactive prototypes of the My VA authenticated dashboard experience using real VA Design System components, without requiring developer assistance.

**Goal:** When a designer asks "How can I quickly get a functional prototype to test with users?" - we have a documented, repeatable workflow.

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

## Proposed Solution

Create a **standalone prototype kit repository** (`va-prototype-kit`) that:

1. **Lives in its own repo** - Keeps prototyping separate from design system documentation
2. **Uses Vite** for fast development with hot module replacement
3. **Deploys to GitHub Pages** for shareable usability testing URLs
4. **Uses JavaScript-based scenario switching** for instant state changes
5. **Stores mock data in editable JSON files** designers can modify
6. **Includes a Claude Code skill** (`/prototype-workflow`) for guided onboarding
7. **Documents the workflow** so it's repeatable by any designer

### Architecture Decision: Standalone Vite-based Repository

**Why a separate repo instead of extending vets-design-system-documentation:**
- Design system docs site is focused on guidance and metrics
- Prototypes have different deployment cadence and concerns
- Simpler dependency management (no Ruby/Jekyll)
- Designers can fork and customize without affecting docs site
- GitHub Pages provides easy shareable URLs for usability testing

**Why Vite:**
- Sub-second hot module replacement
- Zero-config setup for vanilla JS + web components
- Built-in dev server with instant feedback
- Simple GitHub Pages deployment
- No framework lock-in - just HTML, CSS, JS

**Self-contained environment philosophy:**
- This kit is THE prototyping tool - designers shouldn't need CodeSandbox, vets-website, or other environments
- Local development enables AI assistance (Copilot, Claude Code) that cloud sandboxes block
- Everything needed to prototype is in this repo
- No integration with external systems like Yeoman generators or Forms System (those live in vets-website)

### Architecture Decision: JavaScript Runtime Switching

The scenario switcher will use client-side JavaScript because:
- Instant feedback when switching scenarios (no page reload)
- Single HTML file per prototype (easier to maintain)
- Data can be loaded from JSON files via fetch
- Aligns with how real applications work

## Technical Approach

### Repository Structure

```
va-prototype-kit/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages deployment
├── .claude/
│   └── skills/
│       ├── prototype-workflow/
│       │   └── SKILL.md            # Claude Code skill for designers
│       ├── populate-from-figma/
│       │   └── SKILL.md            # Generate HTML from Figma exports
│       └── reproduce-page/
│           └── SKILL.md            # Reproduce external pages as mocks
├── public/
│   └── scenarios/                  # Shared scenario data
│       └── _schema.json            # Schema documentation
├── src/
│   ├── lib/
│   │   ├── prototype-loader.js     # Scenario switching logic
│   │   ├── component-binder.js     # Data binding helpers
│   │   └── controls.js             # Scenario switcher UI
│   ├── styles/
│   │   └── prototype.css           # Prototype-specific styles
│   ├── templates/                  # Reusable page templates
│   │   ├── dashboard/              # Dashboard page layouts
│   │   │   └── base.html
│   │   ├── form-step/              # Form wizard step pages
│   │   │   ├── intro.html
│   │   │   ├── step.html
│   │   │   └── review.html
│   │   ├── confirmation/           # Confirmation/success pages
│   │   │   └── base.html
│   │   ├── hub/                    # Hub/landing pages
│   │   │   └── base.html
│   │   └── static-content/         # Content pages
│   │       └── base.html
│   ├── mocks/                      # External site reproductions
│   │   └── .gitkeep
│   └── prototypes/
│       └── my-va-dashboard/
│           ├── index.html          # Main prototype page
│           └── scenarios/          # Prototype-specific scenarios
│               ├── brand-new-user.json
│               ├── active-claims.json
│               ├── incomplete-profile.json
│               ├── critical-actions.json
│               └── power-user.json
├── index.html                      # Landing page / prototype index
├── package.json
├── vite.config.js
└── README.md
```

### Page Templates

The kit includes starter templates for common VA.gov page types. These provide the structural HTML with VADS components that designers can populate with their specific content.

| Template | Use Case | Key Components |
|----------|----------|----------------|
| `dashboard/base.html` | My VA, personalized hubs | `va-service-list-item`, `va-card`, `va-alert` |
| `form-step/intro.html` | Form introduction pages | `va-process-list`, `va-alert`, `va-button` |
| `form-step/step.html` | Individual form steps | Form elements, `va-button-pair`, progress bar |
| `form-step/review.html` | Form review before submit | `va-accordion`, edit links, `va-button-pair` |
| `confirmation/base.html` | Success/confirmation pages | `va-alert` (success), next steps, print button |
| `hub/base.html` | Benefit hub landing pages | `va-link-action`, `va-card`, spoke links |
| `static-content/base.html` | Informational content | Typography, `va-accordion`, `va-alert` |

Templates are based on existing patterns from `vets-design-system-documentation/src/_templates/` and Jami's CodeSandbox scaffolding.

### Implementation Phases

#### Phase 0: Repository Setup

Create the new repository and configure basic tooling.

**Tasks:**

- [ ] **Obtain Jami's CodeSandbox templates**
  - Get access to existing CodeSandbox base template with component-library
  - Document the current structure and what's included
  - Identify reusable patterns to bring into the prototype kit
  - Note: This is the proven foundation designers are already using

- [ ] **Create `va-prototype-kit` repository**
  - Create repo in `department-of-veterans-affairs` org (or personal for initial development)
  - Initialize with README, .gitignore (Node), MIT license
  - Enable GitHub Pages (deploy from `gh-pages` branch)

- [ ] **Initialize Vite project**
  - Run `npm create vite@latest . -- --template vanilla`
  - Configure `vite.config.js` for multi-page app support
  - Add `@department-of-veterans-affairs/component-library` dependency
  - Add `@department-of-veterans-affairs/css-library` for VADS styles
  - Configure base path for GitHub Pages deployment

- [ ] **Set up GitHub Actions deployment**
  - File: `.github/workflows/deploy.yml`
  - Trigger on push to `main` branch
  - Build with Vite, deploy to `gh-pages` branch
  - Enable preview deployments for PRs (optional)

- [ ] **Create landing page**
  - File: `index.html`
  - List available prototypes with links
  - Brief explanation of what this repo is for
  - Link to documentation

#### Phase 1: Core Prototype Infrastructure

Build the reusable prototype framework.

**Tasks:**

- [ ] **Create `prototype-loader.js`**
  - File: `src/lib/prototype-loader.js`
  - Functions:
    - `loadScenario(scenarioPath)` - Fetch JSON and parse
    - `applyScenarioToComponents(data, container)` - Update component attributes
    - `initPrototype(config)` - Initialize with default scenario
  - Event handling for scenario switcher
  - URL parameter support (`?scenario=active-claims`)
  - LocalStorage persistence of last selected scenario

- [ ] **Create `component-binder.js`**
  - File: `src/lib/component-binder.js`
  - Map JSON data to VA web component attributes
  - Handle array rendering (clone templates, populate)
  - Support conditional rendering (show/hide based on data presence)
  - Use `data-bind="path.to.field"` attribute convention

- [ ] **Build scenario controls UI**
  - File: `src/lib/controls.js`
  - Dropdown for scenario selection
  - Current scenario indicator
  - Responsive breakpoint buttons (mobile/tablet/desktop)
  - Auto-discover scenarios from directory listing or config

- [ ] **Create prototype base styles**
  - File: `src/styles/prototype.css`
  - Import VADS CSS utilities
  - Scenario controls styling
  - Prototype container layout
  - Responsive preview iframe styles

- [ ] **Create page templates**
  - Directory: `src/templates/`
  - Audit existing templates in `vets-design-system-documentation/src/_templates/`
  - Adapt Jami's CodeSandbox scaffolding patterns
  - Create templates for: dashboard, form-step (intro/step/review), confirmation, hub, static-content
  - Each template includes common VADS components for that page type
  - Templates use `data-bind` attributes for dynamic content areas

#### Phase 2: My VA Dashboard Prototype

Build the first prototype as a reference implementation.

**Tasks:**

- [ ] **Define mock data JSON schema**
  - File: `public/scenarios/_schema.json` (documentation)
  - Structure:
    ```json
    {
      "user": {
        "firstName": "string",
        "lastName": "string",
        "profileComplete": "boolean"
      },
      "alerts": [{
        "type": "info|warning|error|success",
        "headline": "string",
        "content": "string",
        "dismissible": "boolean"
      }],
      "criticalActions": [{
        "text": "string",
        "link": "string",
        "deadline": "string (ISO date)"
      }],
      "benefits": [{
        "serviceName": "string",
        "serviceLink": "string",
        "serviceStatus": "string",
        "serviceDetails": [{"label": "string", "value": "string"}],
        "action": {"text": "string", "link": "string"} | null,
        "icon": "string"
      }],
      "appointments": [{
        "type": "string",
        "provider": "string",
        "date": "string",
        "time": "string",
        "location": "string",
        "status": "string"
      }],
      "claims": [{
        "type": "string",
        "status": "string",
        "lastUpdated": "string",
        "link": "string"
      }],
      "profileStatus": {
        "complete": "boolean",
        "missingFields": ["string"]
      }
    }
    ```

- [ ] **Create scenario data files**
  - Directory: `src/prototypes/my-va-dashboard/scenarios/`
  - `brand-new-user.json` - Empty/minimal data, onboarding alerts
  - `active-claims.json` - Multiple claims in progress, benefits active
  - `incomplete-profile.json` - Missing contact info, prompts to complete
  - `critical-actions.json` - Urgent deadlines, debt notices, appointment check-ins
  - `power-user.json` - Maximum data across all categories

- [ ] **Build My VA prototype page**
  - File: `src/prototypes/my-va-dashboard/index.html`
  - Layout sections:
    - Alerts/notifications area
    - Critical actions (if any)
    - Benefits and services list (`va-service-list-item`)
    - Appointments summary (`va-card`)
    - Claims status (`va-card` or `va-service-list-item`)
    - Profile completeness (`va-card-status`)
  - Use VA Design System grid and spacing utilities
  - Bind to data via `data-bind` attributes

- [ ] **Configure Vite for My VA prototype**
  - Add entry point in `vite.config.js`
  - Ensure scenarios are copied to build output
  - Test hot reload with scenario changes

#### Phase 3: Claude Code Skills

Create skills for guided designer workflows.

**Tasks:**

##### `/prototype-workflow` - Guided Onboarding

- [ ] **Create skill directory and SKILL.md**
  - File: `.claude/skills/prototype-workflow/SKILL.md`
  - Trigger phrases: "create a prototype", "prototype workflow", "build a prototype"
  - Workflow steps:
    1. Check prerequisites (repo cloned, `npm install` run)
    2. Ask what they want to prototype
    3. Select appropriate template from `src/templates/`
    4. Create scaffold files (prototype page + scenario JSONs)
    5. Explain how to run `npm run dev`
    6. Guide through editing scenarios
    7. Explain scenario switcher usage
    8. Show how to deploy to GitHub Pages
    9. Suggest iteration workflow

- [ ] **Include code templates in skill**
  - Prototype page HTML template
  - Scenario JSON template with all common fields
  - Common VA component usage examples
  - vite.config.js entry point addition

- [ ] **Add troubleshooting guidance**
  - Common errors (JSON syntax, missing components)
  - How to check dev server output
  - How to verify component loading
  - GitHub Pages deployment issues

##### `/populate-from-figma` - Generate HTML from Figma

- [ ] **Create skill directory and SKILL.md**
  - File: `.claude/skills/populate-from-figma/SKILL.md`
  - Trigger phrases: "populate from Figma", "convert Figma to code", "generate from design"
  - Workflow:
    1. Accept Figma export (image screenshot or structured export)
    2. Analyze the design to identify VA Design System components
    3. Map design elements to appropriate VADS web components
    4. Generate HTML using `@department-of-veterans-affairs/component-library`
    5. Place output in selected template or new prototype file
    6. List any components that couldn't be matched for manual review

- [ ] **Component recognition patterns**
  - Document visual patterns for each VADS component
  - Include component-library import syntax
  - Handle common component configurations (variants, states)

- [ ] **Output formatting**
  - Generate clean, properly indented HTML
  - Include data-bind attributes where appropriate
  - Add comments for sections needing manual adjustment

##### `/reproduce-page` - Mock External Sites

- [ ] **Create skill directory and SKILL.md**
  - File: `.claude/skills/reproduce-page/SKILL.md`
  - Trigger phrases: "reproduce page", "mock external site", "create page mock"
  - Workflow:
    1. Accept URL of publicly accessible page to reproduce
    2. Fetch and analyze the page structure and visual appearance
    3. Generate static HTML/CSS approximation
    4. Strip all functionality (forms don't submit, links go nowhere)
    5. Preserve visual appearance for usability testing context
    6. Save to `src/mocks/` directory
    7. Provide instructions for linking from prototype flow

- [ ] **Mock page features**
  - Static HTML with inline or scoped CSS
  - Placeholder for navigation back to VA prototype
  - Clear comment marking it as a non-functional mock
  - Screenshot fallback option for complex pages

#### Phase 4: Polish and Documentation

Refine the experience and ensure it's documented.

**Tasks:**

- [ ] **Add error handling to prototype-loader.js**
  - Catch JSON parse errors with friendly messages
  - Log missing required fields
  - Graceful degradation if scenario file not found
  - Show toast/alert for errors during development

- [ ] **Create responsive preview integration**
  - Add breakpoint buttons to prototype controls
  - Support mobile scenario variants if needed
  - Consider iframe-based preview for accurate sizing

- [ ] **Write comprehensive README**
  - Quick start guide (clone, install, run)
  - How to create a new prototype
  - How to modify scenarios
  - How to deploy to GitHub Pages
  - Link to VA Design System component docs

- [ ] **Add example prototypes**
  - My VA dashboard (primary example)
  - Consider: Simple form prototype as secondary example
  - Each with multiple well-documented scenarios

- [ ] **Test with a real designer**
  - Have someone unfamiliar with the system try it
  - Gather feedback on pain points
  - Iterate on skill instructions and README

## Acceptance Criteria

### Functional Requirements

- [ ] Designer can run `npm run dev` and access `http://localhost:5173/prototypes/my-va-dashboard/`
- [ ] Scenario switcher dropdown shows all available scenarios
- [ ] Selecting a scenario updates all components instantly (no page reload)
- [ ] Editing a scenario JSON triggers hot reload with updated data
- [ ] URL parameter `?scenario=active-claims` loads specific scenario
- [ ] All VA Design System components render correctly
- [ ] Prototype is responsive across breakpoints
- [ ] `npm run build && npm run preview` produces working static site
- [ ] GitHub Pages deployment works and is accessible via public URL

### Non-Functional Requirements

- [ ] Scenario switch takes < 500ms
- [ ] Dev server starts in < 5 seconds
- [ ] Prototype page loads in < 3 seconds on first visit (deployed)
- [ ] JSON parse errors show clear, actionable message
- [ ] Works in Chrome, Firefox, Safari (latest versions)

### Quality Gates

- [ ] At least 5 distinct scenarios demonstrating different states
- [ ] `/prototype-workflow` skill successfully guides a designer through first prototype
- [ ] `/populate-from-figma` skill generates valid HTML from Figma screenshot
- [ ] `/reproduce-page` skill creates usable mock of external page
- [ ] Page templates cover common VA.gov page types (dashboard, form step, confirmation, hub)
- [ ] No accessibility errors in prototype page (axe-core clean)
- [ ] README covers full workflow from clone to deploy
- [ ] Code review by team member

## Success Metrics

1. **Time to first prototype:** Designer can go from "I want to prototype [feature]" to "I have something I can test" in under 1 hour
2. **Iteration speed:** Changes to mock data visible in preview within 5 seconds
3. **Self-sufficiency:** Designer can complete full workflow without front-end developer help
4. **AI assistance value:** Time spent tweaking AI-generated output is less than time to build from scratch (key metric from designer interview)
5. **Adoption:** At least 2 other designers successfully use the workflow within first month

## Dependencies & Prerequisites

**Required for designers:**
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)
- Git access to the repository
- Basic familiarity with JSON syntax
- GitHub account (for forking and Pages deployment)

**Component library:**
- `@department-of-veterans-affairs/component-library` v54.5.2+ (current)
- `@department-of-veterans-affairs/css-library` for VADS utility classes
- Components used (from designer interview and common patterns):
  - Layout: `va-card`, `va-accordion`, `va-breadcrumbs`
  - Content: `va-alert`, `va-critical-action`, `va-service-list-item`, `va-card-status`, `va-address-block`, `va-need-help`
  - Navigation: `va-link-action`, `va-action-link`, `va-button-pair`, `va-segmented-progress-bar`
  - Form elements: `va-text-input`, `va-select`, `va-radio`, `va-checkbox`, `va-memorable-date`, `va-textarea`
  - Status: `va-tag-status`, `va-loading-indicator`
  - Global: Header, Footer, typography, iconography, colors

**Development tooling (auto-installed via npm):**
- Vite 5.x for dev server and builds
- No framework dependencies - vanilla JS

**Deployment:**
- GitHub Pages (free, built into GitHub)
- OR any static file hosting (Netlify, Vercel, S3, etc.)

## Risk Analysis & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| JSON editing errors frustrate designers | High | High | Add JSON validation with clear error messages; provide schema documentation; consider JSON editor integration |
| Node.js installation barrier | Medium | Medium | Provide clear installation guide; link to Node.js installer; consider Codespaces as alternative |
| Component APIs change | Medium | Low | Pin to specific component-library version; document version requirements; add renovate/dependabot |
| Designers prefer Figma anyway | Medium | Medium | Make the workflow genuinely faster; provide clear value proposition; gather feedback early |
| Prototype diverges from production patterns | Medium | Medium | Use same components and patterns; link to production My VA as reference |
| GitHub Pages URL not accessible to test participants | Low | Low | Document how to use custom domains; provide Netlify/Vercel alternatives |
| Repository maintenance burden | Medium | Low | Keep dependencies minimal; use dependabot for updates; document contribution guidelines |

## Future Considerations

**Not in scope but worth noting:**

1. **GitHub Codespaces integration:** One-click cloud development environment for designers without local Node.js
2. **PR preview deployments:** GitHub Actions to deploy prototype branches to preview URLs automatically
3. **Figma plugin integration:** Direct export from Figma to prototype kit (beyond screenshot-based `/populate-from-figma`)
4. **User testing integration:** Direct link to schedule usability sessions with deployed prototype URL
5. **Component library local linking:** For testing unreleased components in prototypes
6. **Visual regression testing:** Playwright or similar for screenshot comparison between scenarios
7. **`npm create va-prototype` command:** Scaffolding CLI for quick project initialization
8. **Forms System extraction:** Long-term goal to make vets-website Forms System portable for use in prototypes (complex, requires significant architecture work)
9. **Network preview mode:** `npm run preview:network` to serve on local network IP for quick stakeholder reviews before deploying

## References & Research

### VA Design System Documentation (this repo)

- Service List Item component: `src/_components/service-list-item.md`
- Manage Benefits pattern: `src/_patterns/help-users-to/manage-benefits-and-tools.md`
- Existing iframe preview pattern: `src/_includes/iframe-preview.html`

### External References

- GitHub Issue: https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1385
- VA Codespaces documentation: https://depo-platform-documentation.scrollhelp.site/developer-docs/automatic-public-codespace-creation
- Vite documentation: https://vitejs.dev/guide/
- GitHub Pages documentation: https://docs.github.com/en/pages

### Prior Art: Prototype Kits

**GOV.UK Prototype Kit** - https://prototype-kit.service.gov.uk/docs/
- The most directly relevant example of what we're building
- Enables rapid development of "interactive, accessible and realistic prototypes"
- Pre-built templates for common page types
- Integrated with GOV.UK Design System components
- Designed for diverse roles: designers, developers, researchers, product owners
- Key philosophy: "avoid repeating work that's already been done"

**USDS Gatsby Starter** - https://github.com/usds/gatsby-uswds-ts-starter
- Opinionated TypeScript starter for Gatsby + USWDS
- Uses Trussworks React USWDS components
- Includes testing, linting, deployment automation
- More developer-focused than our target (requires React/TypeScript knowledge)
- Good reference for tooling choices (Vitest, GitHub Actions, pnpm)

### Component Documentation

- Card: https://design.va.gov/components/card/
- Alert: https://design.va.gov/components/alert/
- Service List Item: https://design.va.gov/components/service-list-item
- Critical Action: https://design.va.gov/components/critical-action
- Tag Status: https://design.va.gov/components/tag/tag-status/

### Storybook Stories (for reference)

| Component | Story ID |
|-----------|----------|
| va-service-list-item | `components-va-service-list-item--maximal-base` |
| va-card | `components-va-card--default` |
| va-card-status | `components-va-card-status--default` |
| va-alert | `uswds-va-alert--default` |
| va-critical-action | `components-va-critical-action--default` |

---

## Appendix: Scenario Data Examples

### brand-new-user.json

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

### active-claims.json

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

### power-user.json

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
