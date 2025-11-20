# Architectural Decision: Skills Repository Location

**Date:** 2025-11-13
**Status:** Accepted
**Deciders:** VA Design System Team
**Related:** [PRD Issue #5155](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5155)

---

## Context

The AI Skills & Agent Enablement Initiative (PRD #5155) requires creating structured documentation files (Skills) for VA Design System components, patterns, and foundations. These skills help AI coding assistants generate correct, accessible, compliant code.

The original PRD (Section 7) proposed splitting skills across two repositories:
- **`component-library`**: Component skills + foundation skills
- **`vets-design-system-documentation`**: Pattern skills + cross-cutting skills + AGENTS.md

**Rationale in PRD:** "Component mechanical details stay near code"

However, during MVP implementation, we reconsidered this approach based on operational realities.

---

## Decision

**All skills will reside in `vets-design-system-documentation`, not split between repos.**

```
vets-design-system-documentation/skills/
├── components/          # Component skills (va-text-input, va-button, etc.)
├── patterns/            # Pattern skills (form respondent, etc.)
├── foundations/         # Token skills (color, spacing, typography)
├── cross-cutting/       # Accessibility, content style, form building
├── AGENTS.md           # Orchestrator guide
└── README.md
```

---

## Rationale

### 1. **Skills Are Documentation, Not Production Code**

Skills are guidance artifacts consumed by AI tools and developers, similar to design.va.gov content. They:
- Don't get compiled, bundled, or shipped in NPM packages
- Don't affect runtime behavior of components
- Are versioned documentation, not source code

**Conclusion:** Skills belong with documentation, not production code.

### 2. **Deployment Velocity**

| Repository | Deployment Model | Speed |
|------------|-----------------|-------|
| `component-library` | Sprint-based releases (every 2 weeks) | Slow |
| `vets-design-system-documentation` | On-demand via Jekyll/GitHub Pages | Fast |

**For MVP and rapid iteration**, we need to deploy skill updates quickly without waiting for sprint cycles. The docs repo enables this.

### 3. **Existing Sync Infrastructure**

The docs repo already pulls component metadata from `component-library`:

**Path:** `component-library` (Stencil compiler) → `component-docs.json` → `vets-design-system-documentation/src/_data/component-docs.json`

**Used for:** Code Usage sections on component pages (e.g., https://design.va.gov/components/form/text-input#code-usage)

We can leverage this existing mechanism for skill synchronization instead of building new infrastructure.

### 4. **Single Source of Truth for Guidance**

Developers, designers, and content strategists already go to `vets-design-system-documentation` (design.va.gov) for all guidance. Keeping skills here:
- Maintains consistent mental model: "Guidance lives in the docs repo"
- Avoids confusion about where to find skills
- Simplifies onboarding and contribution workflow

### 5. **Editorial Workflow Alignment**

The Design System Team's existing editorial process for guidance updates lives in the docs repo:
- Content review and approval workflows
- Accessibility review integration
- Content style consistency checks

Skills fit naturally into this workflow.

### 6. **Separation of Concerns**

| Concern | Repository | Contents |
|---------|-----------|----------|
| Production code | `component-library` | Stencil components, React bindings, CSS library, tokens YAML |
| Guidance & context | `vets-design-system-documentation` | Design patterns, usage guidelines, Skills |

This clean separation makes it easier to:
- Reason about each repo's purpose
- Set appropriate CI/CD pipelines
- Manage permissions and access
- Scale each concern independently

---

## Consequences

### Positive

✅ **Faster iteration:** Deploy skill updates on-demand, not sprint-locked
✅ **Simpler mental model:** All guidance in one place
✅ **Leverage existing sync:** Use `component-docs.json` mechanism
✅ **Better workflow fit:** Aligns with editorial processes
✅ **Cleaner separation:** Code vs. documentation concerns decoupled

### Challenges

⚠️ **Cross-repo synchronization required:** Props/events tables must stay in sync with `component-library` source
⚠️ **Automation complexity:** Future automated sync will span two repos
⚠️ **Contributor confusion:** Some might expect skills near component code

### Mitigations

1. **Sync Strategy Documented:** README.md clearly explains how skills sync with component-library
2. **Future Automation:** Phase 1+ will build scripts to auto-generate props/events from component-library
3. **CI Checks:** Automated drift detection warns when skills are out of sync
4. **Clear Documentation:** ARCHITECTURE_DECISION.md (this file) explains the choice for future contributors

---

## Implementation Notes

### MVP (Current)

- **Manual sync:** Compare skill props tables against `component-docs.json` or component source
- **Last-synced date:** Documented in skill metadata for transparency
- **On-demand verification:** Update skills when components change

### Phase 1+ (Automated)

1. **Script in `component-library`:**
   ```
   npm run generate-skill-tables
   ```
   - Extracts props/events from Stencil compiler output
   - Formats as skill markdown tables
   - Outputs JSON for automated PR creation

2. **CI in `component-library`:**
   - Detects component API changes
   - Triggers skill sync workflow
   - Opens PR in `vets-design-system-documentation` with updated props/events tables

3. **CI in `vets-design-system-documentation`:**
   - Validates skill metadata
   - Checks `last-synced` date (warns if > 30 days old)
   - Compares props table hash against `component-docs.json`

4. **Human Review:**
   - DS Team approves automated props/events updates
   - Manually updates narrative sections (examples, guidance, anti-patterns)

---

## Alternatives Considered

### Alternative 1: Split Skills Across Repos (Original PRD)

**Proposal:** Component skills in `component-library`, patterns in `vets-design-system-documentation`

**Pros:**
- Component props/events stay "close to code"
- Easier to keep props in sync (same repo)

**Cons:**
- Developers must check two repos for skills
- Can't deploy component skill updates without sprint release
- Splits guidance across two locations (confusing)
- More complex mental model

**Decision:** Rejected due to deployment velocity and mental model complexity

### Alternative 2: Everything in component-library

**Proposal:** All skills in `component-library`

**Pros:**
- Single repo for all design system artifacts
- Props/events sync trivial (same repo)

**Cons:**
- Slow deployment (sprint-locked)
- Skills aren't production code, don't belong there
- Mixes concerns (code vs. documentation)
- Doesn't leverage existing docs editorial workflow

**Decision:** Rejected due to deployment velocity and separation of concerns

### Alternative 3: Separate Skills Repo

**Proposal:** New repo exclusively for skills

**Pros:**
- Clear ownership boundary
- Independent versioning and deployment

**Cons:**
- Adds third repo to maintain
- Fragments guidance across multiple locations
- No existing editorial workflow
- Overkill for MVP scope

**Decision:** Rejected due to complexity and fragmentation

---

## Related Documents

- **PRD:** [AI Skills & Agent Enablement Initiative #5155](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5155)
- **README:** `vets-design-system-documentation/skills/README.md`
- **MVP Skill:** `vets-design-system-documentation/skills/components/va-text-input.skill.md`

---

## Approval

**Accepted by:** VA Design System Team
**Date:** 2025-11-13
**Implementation Status:** ✅ Complete (MVP)

---

## Future Review

This decision should be revisited if:
- Skills become production dependencies (consumed at build time)
- Deployment velocity requirements change
- Cross-repo sync becomes untenable
- Organizational structure of repos changes significantly

**Next review:** After Phase 1 completion (5+ component skills deployed)
