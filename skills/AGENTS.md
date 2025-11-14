# AGENTS.md - AI Orchestration Guide for VA Design System

**Version:** 0.1.0 (MVP)
**Last Updated:** 2025-11-13
**Status:** Initial implementation with 2 component skills

---

## Purpose

This guide helps AI coding assistants (Claude Code, GitHub Copilot, Cursor, etc.) determine which VA Design System Skills to use based on user intent. It provides a decision tree and trigger patterns to ensure consistent, correct implementation of VA design patterns and components.

---

## How to Use This Guide

### For AI Assistants

When a user request mentions:
1. **Scan trigger phrases** in their prompt
2. **Match to intent classifiers** defined in skill metadata
3. **Load relevant skills** based on matches
4. **Apply skill guidance** to generate code
5. **Validate against anti-patterns** documented in skills

### For Developers

Reference this file to understand:
- Which components solve which problems
- How skills are organized
- What trigger phrases activate skills
- Decision logic for component selection

---

## Decision Tree: Component Selection

### Text Input vs. Other Input Types

```
User needs to collect input
├─ Single-line text? → va-text-input
├─ Multi-line text? → va-textarea
├─ Selection from options?
│  ├─ Many options (>10)? → va-select
│  ├─ Few options, single choice? → va-radio
│  └─ Few options, multiple choices? → va-checkbox
├─ Date input?
│  ├─ Memorable date (birth, marriage)? → va-memorable-date
│  └─ Any date? → va-date
├─ File upload? → va-file-input
└─ Numeric with constraints? → va-text-input with inputmode="numeric"
```

### Button vs. Link

```
User needs clickable element
├─ Purpose is navigation?
│  ├─ Simple navigation, no data? → <a> or va-link
│  ├─ Needs visual emphasis? → va-action-link
│  └─ Submits data to new page? → va-button with submit
└─ Purpose is action (not navigation)?
   ├─ Primary action on page? → va-button (primary)
   ├─ Secondary/cancel action? → va-button secondary
   ├─ Form progression? → va-button continue/back
   └─ Async operation? → va-button with loading
```

---

## Skill Catalog (MVP)

### Component Skills

#### va-text-input
**Skill ID:** `component.va-text-input`
**File:** `skills/components/va-text-input.skill.md`

**Intent Classifiers:**
- "text field", "input", "form field", "text box", "input field", "form input", "user input"

**Use when user mentions:**
- Text input, form field, input box
- Email, phone, address input
- Numeric input, currency input
- Validation, error messages
- Character limits, character counting

**Examples:**
- "Create a form with name and email inputs"
- "Add a text field for address"
- "Build a currency input for payment amount"
- "Validate email format"

**Key Guidance Highlights:**
- Always provide `label` prop (never placeholder-only)
- Use `messageAriaDescribedby` instead of `aria-describedby` (shadow DOM limitation)
- Never enable analytics on PII/PHI fields
- Validation on blur, not every keystroke
- Specific, actionable error messages

---

#### va-button
**Skill ID:** `component.va-button`
**File:** `skills/components/va-button.skill.md`

**Intent Classifiers:**
- "button", "action", "submit", "click", "form button", "primary button", "secondary button", "call to action"

**Use when user mentions:**
- Button, submit, save, continue, cancel
- Form submission, async action
- Primary/secondary actions
- Loading states, disabled states

**Examples:**
- "Add a submit button to the form"
- "Create save and cancel buttons"
- "Build a continue button for the form flow"
- "Show loading spinner during save"

**Key Guidance Highlights:**
- **Never use disabled buttons** without strong justification (validate on submit instead)
- Buttons are for actions, links are for navigation
- Use `loading` prop for async operations to prevent double-clicks
- Button text: sentence case, under 35 chars, clear action verbs
- Primary actions are solid, secondary are outlined

**Critical Decision:**
```
Is it navigation? → Use link, not button
Is it an action? → Use button, not link
```

---

### Pattern Skills

#### ask-users-for-email-address
**Skill ID:** `pattern.ask-users-for-email-address`
**File:** `skills/patterns/ask-users-for-email-address.skill.md`

**Intent Classifiers:**
- "email", "email address", "contact information", "email collection", "email validation", "collect email"

**Use when user mentions:**
- Collecting email addresses in forms
- Email validation patterns
- Contact information sections
- Pre-filling from profile

**Key Pattern Highlights:**
- Email is **mandatory for all digital forms** (as of Oct 2024)
- Always pre-populate from VA.gov Profile when available
- Notify user when data is pre-filled
- NO email confirmation fields (proven ineffective)
- Validate on blur with standard error messages
- Pair with phone number on same page

**Component Dependencies:**
- `component.va-text-input` (type="email")
- `component.va-alert` (prefill notification)

---

### Cross-Cutting Skills

#### forms-template
**Skill ID:** `cross-cutting.forms-template`
**File:** `skills/cross-cutting/forms-template.skill.md`

**Intent Classifiers:**
- "form", "forms", "form template", "form structure", "multi-step form", "form flow", "form design"

**Use when user mentions:**
- Building any VA form
- Multi-step form structure
- Form flow and navigation
- Form-wide patterns

**Key Principles:**
1. **One thing per page** - Reduce cognitive load
2. **Progressive disclosure** - Show only what's needed
3. **Clear progress indication** - Always show where user is
4. **Automatic progress saving** - Prevent data loss
5. **Plain language** - No jargon, use "you"

**Five-Stage Flow:**
1. How to apply page (Drupal)
2. Introduction page (expectations, steps, "Start" button)
3. Step form pages (one thing per page, progress bar, back/continue)
4. Review page (verify all info, edit links, submit)
5. Confirmation page (what happens next, tracking number)

**Applies To:** All VA forms regardless of content

---

## Trigger Pattern Matching

### High-Confidence Matches

These phrases strongly indicate specific components:

| Phrase | Component | Skill ID |
|--------|-----------|----------|
| "text input", "text field", "input box" | va-text-input | `component.va-text-input` |
| "email input", "email field" | va-text-input (type="email") | `component.va-text-input` |
| "currency", "dollar amount", "payment amount" | va-text-input (currency) | `component.va-text-input` |
| "button", "submit button" | va-button | `component.va-button` |
| "continue button", "back button" | va-button (continue/back) | `component.va-button` |
| "save button", "cancel button" | va-button (primary/secondary) | `component.va-button` |
| "email address", "collect email" | Email address pattern | `pattern.ask-users-for-email-address` |
| "build a form", "multi-step form" | Forms template | `cross-cutting.forms-template` |

### Context-Dependent Matches

These phrases require additional context:

| Phrase | Question to Ask | Component |
|--------|-----------------|-----------|
| "input field" | Single or multi-line? | va-text-input OR va-textarea |
| "dropdown" | Many options? | va-select |
| "choose one" | How many options? | va-radio OR va-select |
| "date" | Memorable or any date? | va-memorable-date OR va-date |
| "clickable" | Navigation or action? | va-link OR va-button |

### Multi-Skill Scenarios

Some requests require multiple skills:

| User Request | Skills Needed |
|--------------|---------------|
| "Create a login form" | `component.va-text-input` (email/password) + `component.va-button` (submit) |
| "Build a contact form" | `pattern.ask-users-for-email-address` + `component.va-text-input` (name) + `component.va-button` |
| "Form with validation" | `component.va-text-input` (with error prop) + `component.va-button` |
| "Multi-step form" | `cross-cutting.forms-template` + relevant component skills |
| "Collect email address" | `pattern.ask-users-for-email-address` |

---

## Orchestration Rules

### Rule 1: Component Selection Priority

1. **Match user's explicit component mention** (e.g., "use va-button")
2. **Match by intent classifier** (trigger phrases)
3. **Match by functionality description** (e.g., "collect email" → va-text-input)
4. **Ask for clarification** if ambiguous

### Rule 2: Skill Loading Strategy

**Single Component Request:**
Load only the specific component skill.

**Form/Multi-Component Request:**
1. Load all component skills mentioned
2. Load cross-cutting skills (accessibility, content-style) as needed
3. Load pattern skill if applicable (e.g., form-building)

**Example:**
```
User: "Create a registration form with email and submit button"

Load:
- component.va-text-input (for email)
- component.va-button (for submit)
- cross-cutting.accessibility (for form a11y)
- cross-cutting.content-style (for labels/errors)
```

### Rule 3: Guardrails (Prevent Common Mistakes)

Before generating code, check skills for anti-patterns:

**va-text-input anti-patterns:**
- ❌ Placeholder-only labels
- ❌ Using `aria-describedby` directly (use `messageAriaDescribedby`)
- ❌ Enabling analytics on PII fields
- ❌ Vague error messages

**va-button anti-patterns:**
- ❌ Using buttons for navigation
- ❌ Disabled buttons without clear explanation
- ❌ Vague button text ("Submit", "OK", "Click here")
- ❌ Missing loading state for async actions
- ❌ Icon-only without accessible label

### Rule 4: Accessibility is Non-Negotiable

**Always apply from skills:**
- Proper labels (visible, descriptive)
- ARIA attributes (from skill guidance)
- Keyboard navigation support
- Screen reader compatibility
- Error handling with announcements
- Color contrast compliance

**Reject user requests that:**
- Ask to remove accessibility features
- Request disabled form elements without justification
- Omit labels or use placeholder-only
- Use color alone to convey information

---

## Example Orchestration Flows

### Example 1: Simple Form Request

**User Prompt:**
```
Create a contact form with name, email, and message fields, plus submit button
```

**Agent Decision Process:**
1. **Identify components needed:**
   - Name field → va-text-input
   - Email field → va-text-input (type="email")
   - Message field → va-textarea (multi-line)
   - Submit button → va-button

2. **Load skills:**
   - `component.va-text-input`
   - `component.va-textarea` (not yet created, note for future)
   - `component.va-button`

3. **Apply guidance:**
   - va-text-input: Add `label`, `required`, `autocomplete`
   - Email: Add `type="email"`, validation pattern
   - va-button: Primary button, `text="Submit"`, `submit` prop

4. **Check anti-patterns:**
   - ✅ All inputs have labels
   - ✅ No analytics on PII (name, email)
   - ✅ Button has descriptive text
   - ✅ Button uses `submit` prop for form submission

**Output:** Accessible, compliant contact form

---

### Example 2: Validation Request

**User Prompt:**
```
Add validation to email input
```

**Agent Decision Process:**
1. **Identify component:** va-text-input (email type)

2. **Load skill:** `component.va-text-input`

3. **Apply validation guidance from skill:**
   - Use `type="email"` and `autocomplete="email"`
   - Use `pattern` or custom validation on blur
   - Use `error` prop with specific message
   - Example: "Enter an email address in this format: name@example.com"

4. **Check anti-patterns:**
   - ✅ Error message is specific and actionable
   - ✅ Validation on blur (not every keystroke)
   - ✅ No vague errors ("Invalid")

**Output:** Email input with proper validation

---

### Example 3: Ambiguous Request

**User Prompt:**
```
Add an input for the user's response
```

**Agent Decision Process:**
1. **Ambiguity detected:** What type of input?

2. **Ask clarifying questions:**
   - "What type of response are you collecting?"
   - "Is this single-line text, multi-line, a selection, or something else?"

3. **Based on answer, load appropriate skill**

**This demonstrates good orchestration:** Don't guess, ask for clarification.

---

## Skill Combination Patterns

### Pattern: Form with Validation

**Components:** va-text-input + va-button
**Skills:** `component.va-text-input`, `component.va-button`

**Key Integrations:**
1. Form submission handled by va-button `submit` prop
2. Validation errors shown via va-text-input `error` prop
3. Loading state during submit via va-button `loading` prop
4. Focus management: return focus to first error on validation failure

---

### Pattern: Multi-Step Form

**Components:** va-text-input + va-button (continue/back)
**Skills:** `component.va-text-input`, `component.va-button`

**Key Integrations:**
1. Use va-button `continue` and `back` props
2. Each step validates before allowing continue
3. Back button doesn't trigger validation
4. Progress indication (not yet a skill)

---

### Pattern: Async Action with Feedback

**Components:** va-button + form inputs
**Skills:** `component.va-button`, relevant input skills

**Key Integrations:**
1. va-button `loading={true}` during async operation
2. Disable inputs during loading (via parent component state)
3. Show success message after completion
4. Return focus to logical next step

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2025-11-13 | MVP release with va-text-input and va-button skills |

---

## Future Enhancements

### Phase 1 (Next)
- Add 3 more component skills (va-select, va-alert, va-modal)
- Add 1 pattern skill (form-respondent)
- Add cross-cutting skills (accessibility, content-style)
- Expand decision trees with new components

### Phase 2
- Add foundation skills (color, spacing, typography)
- Create pattern compositions (multi-skill patterns)
- Add negative examples (what NOT to do)
- Implement confidence scoring for matches

### Phase 3
- Embedding-based skill retrieval (semantic search)
- Auto-suggest skill combinations
- Context-aware skill selection
- Usage analytics to improve matching

---

## Support

**Questions about skill orchestration?**
- Slack: `#vfs-platform-support` or `#platform-design-system`
- GitHub: Open issue in `vets-design-system-documentation`

**Skill not matching correctly?**
- Check `intent-classifiers` in skill metadata
- Add trigger phrase to this guide
- Update skill metadata if needed

---

**Maintained by:** VA Design System Team
**Related:** [PRD Issue #5155](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5155)
