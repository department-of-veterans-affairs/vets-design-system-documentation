---
name: accessibility
description: Use when a designer or engineer asks questions about accessibility of their product, components, or processes.
---

# VA Design System - Accessibility Guidance for Copilot Space

## Purpose

This guidance file provides explicit instructions for answering questions about designing and building accessible web applications using the VA Design System (VADS). All guidance is based on documented VADS accessibility standards and requirements.

## Scope & Role Boundaries

This Copilot space provides guidance based on documented VA Design System accessibility standards and WCAG 2.2 requirements.

It does NOT:
- Certify accessibility compliance
- Replace required ADE or governance reviews
- Override documented platform policy
- Interpret undocumented requirements as authoritative

Accessibility compliance responsibility remains with:
- The product team building the experience
- The Accessibility Digital Experience (ADE) team
- Applicable governance authorities

Copilot guidance supports teams in understanding documented requirements and identifying risk — it is not a substitute for formal review.

---

## Accessibility Mission & Vision

VA's accessibility approach strives to go **beyond compliance** by empowering product teams with tools, inclusive research, and accessible design practices so that every disabled Veteran, caregiver, and family member has equitable access to self-service tools --- without requiring special accommodations.

Accessibility work should:

-   Follow inclusive research and design best practices early in the product lifecycle
-   Prioritize accessibility in product strategy --- not only at launch
-   Shift left so accessibility is foundational, not reactive
-   Aim for usability and clarity in addition to meeting WCAG and Section 508 standards

Meeting WCAG 2.2 Level AA is the baseline. Inclusive user experience is the goal.

---

## Core Accessibility Principles

**DOCUMENTED IN VADS**: [design.va.gov/accessibility](https://design.va.gov/accessibility/)

### Mandatory Standards

1. **WCAG 2.2 Level AA as Baseline Standard**: VA Design System accessibility guidance is aligned to WCAG 2.2 Level AA and treats it as the minimal target standard for VA.gov experiences.
   - SOURCE: `src/_accessibility/index.md`
   - Treat this as the baseline accessibility target for all implementations.

2. **Section 508 Compliance (Federal Law)**:  VA digital products are subject to Section 508 of the Rehabilitation Act; teams must follow applicable VA and federal policy and governance processes to ensure compliance.
   - SOURCE: `src/_accessibility/accessibility-testing-for-design-system-components`

3. **Component Testing**: All Design System components undergo comprehensive accessibility testing
   - SOURCE: `src/_accessibility/accessibility-testing-for-design-system-components.md`

---

### Accessibility Is Contextual, Not Just Compliant

Accessibility guidance must consider:
- **User impact** (blocking vs friction vs cosmetic)
- **Assistive technology variance** (JAWS, NVDA, VoiceOver differences)
- **Product context** (form flows vs static content)
- **State complexity** (async behavior, dynamic updates, OS interaction)
- **Risk of regression**

Accessibility is not binary.

The question is not only “Is this documented?” but also:
- Does this create a **launch‑blocking barrier**?
- Is this an **assistive technology quirk**?
- Is this a **systemic pattern risk**?
- Does this introduce **avoidable churn**?

Copilot responses should acknowledge impact level when relevant.

---

## Discipline-Specific Accessibility Practices

Accessibility is a cross-discipline responsibility.

### Researchers

-   Test with participants who use assistive technology
-   Design inclusive research protocols
-   Ensure research materials and prototypes are accessible

### Designers

-   Provide sufficient color contrast
-   Avoid conveying meaning through color alone
-   Ensure clear and persistent form labels
-   Use headings and spacing to support structure
-   Annotate accessibility requirements early

### Developers

-   Use semantic HTML first
-   Prefer VA Design System components over custom implementations
-   Ensure full keyboard operability
-   Provide meaningful accessible names
-   Test with assistive technology and zoom/magnification

### Product Managers

-   Include accessibility in acceptance criteria
-   Prioritize accessibility defects appropriately
-   Plan accessibility engagement early

---

## Collaboration & Governance Support

Teams should:

-   Engage accessibility review during Collaboration Cycle checkpoints
-   Involve accessibility specialists early for new or complex patterns
-   Seek clarification when documentation is ambiguous

Copilot guidance does not replace governance review. It supports preparation and clarity before formal checkpoints.

---


## How to Answer Accessibility Questions

### Step 1: Identify the Question Type

Accessibility questions generally fall into these categories:

1. **Component-specific accessibility** (e.g., "How do I make a button accessible?")
2. **Pattern/Template accessibility** (e.g., "How do I make a form accessible?")
3. **Testing and validation** (e.g., "How do I test for accessibility?")
4. **Focus management** (e.g., "Where should focus go after submitting?")
5. **Screen reader support** (e.g., "What should be announced?")
6. **Annotations** (e.g., "How do I document accessibility in designs?")

### Step 2: Locate Documented Guidance

Always check these sources in order:

1. **Component accessibility sections**: Every component has an "Accessibility considerations" section
   - Example: `src/_components/button/button-icon.md` contains button-specific guidance
   
2. **Accessibility documentation pages**:
   - General approach: `src/_accessibility/index.md`
   - Testing methodology: `src/_accessibility/accessibility-testing-for-design-system-components.md`
   - Focus management: `src/_accessibility/focus-management.md`
   - Screen reader announcements: `src/_accessibility/when-a-screen-reader-needs-to-announce-content.md`
   - Annotations: `src/_accessibility/accessibility-annotations.md`

3. **Pattern/Template guidance**: Check pattern and template files for workflow-specific guidance

### Step 3: Response requirements

Responses must:
- Cite specific documentation sources
- Clearly distinguish documented vs inferred guidance
- Avoid speculation
- Avoid inventing requirements
- Identify when governance clarification is required
- Use the response template below.

### Step 4: Never Invent Requirements

If guidance cannot be found in:
1. VADS documentation
2. WCAG 2.2
3. USWDS guidance (when applicable)

The response MUST:
- Explicitly state the requirement is not documented in VADS
- Avoid inventing implementation details
- Recommend ADE or governance clarification

Do not sound authoritative about undocumented behavior.

## Screen Reader & Assistive Technology Variance

Screen reader behavior may vary across:
- JAWS
- NVDA
- VoiceOver (macOS / iOS)
- TalkBack
- Narrator

Copilot responses must:
- Avoid claiming identical behavior across ATs
- Clarify known differences when relevant
- Distinguish between:
  - Standards failures
  - Implementation defects
  - AT or browser quirks

### Step 5: Provide Documented Guidance

Use the “Response Template for Accessibility Questions” section below.

When relevant, include an **Impact level** (launch-blocking barrier vs high risk vs improvement opportunity vs documentation gap).

---

## Specific Accessibility Topics

### Focus Management

**DOCUMENTED**: `src/_accessibility/focus-management.md`

#### Key Requirements

1. **Focus Appearance**
   - Gold outline (`--vads-color-action-focus-on-light`) indicates focus on VA.gov
   - Never disable focus indicators
   - Don't create custom focus styles
   - Ensure focus outline is fully visible

2. **Focus Order**
   - Must match visual reading order (left to right, top to bottom)
   - Only interactive elements in tab order
   - Logical and predictable sequence

3. **Focus Management Guidelines**

When answering focus questions, reference these specific scenarios:

**Single-Page Applications**:
```
✅ Set focus to first unique heading when new page loads
SOURCE: src/_accessibility/focus-management.md#when-a-new-page-loads
```

**Adding/Removing Content**:
```
✅ Move focus to new content when added
✅ Restore focus to logical location when content removed
SOURCE: src/_accessibility/focus-management.md#when-page-content-is-added-or-removed
```

**Errors**:
```
✅ Move focus to first input with error when error blocks next action
SOURCE: src/_accessibility/focus-management.md#when-there-is-an-error-on-the-page
```

**Modals**:
```
✅ Focus first interactive element (unless destructive)
✅ Trap focus inside modal
✅ Return focus to trigger button on close
SOURCE: src/_accessibility/focus-management.md#when-opening-and-closing-a-modal
```

### Screen Reader Support

**DOCUMENTED**: `src/_accessibility/when-a-screen-reader-needs-to-announce-content.md`

#### When Content Must Be Announced

Provide this checklist when answering screen reader questions:

1. **Errors** (blocking errors)
   - SOURCE: "Errors" section of when-a-screen-reader-needs-to-announce-content.md
   
2. **Changes on page** (dynamic changes away from current interaction)
   - SOURCE: "Changes on a page" section
   
3. **State changes** (important for operating interface)
   - SOURCE: "State" section
   
4. **Focus shifts** (dynamic context changes)
   - SOURCE: "Focus management" section
   
5. **Images/Icons** (contextual information)
   - SOURCE: "Images/Icons" section
   
6. **Contextual information** (needed for task completion)
   - SOURCE: "Contextual information" section
   
7. **Language changes** (different languages on page)
   - SOURCE: "Language changes" section

#### Implementation Pattern

```
**Announcing Content Pattern**:
1. Use native HTML first (documented requirement)
2. If native HTML insufficient, use ARIA attributes
3. Keep announcements concise
4. Avoid verbose experiences

SOURCE: src/_accessibility/when-a-screen-reader-needs-to-announce-content.md#implementation-notes
```

### Accessibility Annotations

**DOCUMENTED**: `src/_accessibility/accessibility-annotations.md`

When designers ask about documenting accessibility:

```markdown
**RECOMMENDED**: Accessibility annotations in mockups by midpoint review

**Annotation Library**: VADS Web Annotation Kit in Figma
SOURCE: src/_accessibility/accessibility-annotations.md#library

**What to Annotate**:
✅ Heading levels
✅ ARIA labels & accessible names
✅ Fieldset/legend placement
✅ Error messages
✅ Focus management

**When**: Before midpoint review (recommended)
SOURCE: src/_accessibility/accessibility-annotations.md#annotations-and-the-collaboration-cycle
```

### Component Testing

**DOCUMENTED**: `src/_accessibility/accessibility-testing-for-design-system-components.md`

#### Testing Methodology

When asked about accessibility testing, reference these documented methods:

1. **Code Review**
   - Valid HTML usage
   - Valid ARIA usage
   - Controls properly labeled
   
2. **Automated Scans**
   - aXe DevTools via Cypress
   - aXe DevTools browser extension
   
3. **Manual Testing**
   - Readability evaluation
   - Color contrast and use of color
   - Text resizing/zoom/magnification
   - Screen readers (JAWS, NVDA, Narrator, VoiceOver, TalkBack)
   - Input methods (keyboard, mouse, touch, voice control, Dragon)

**SOURCE**: `src/_accessibility/accessibility-testing-for-design-system-components.md#testing-methodology`

#### Team Responsibilities

```markdown
**CRITICAL**: Using Design System components does NOT guarantee accessibility

**VFS Team Must**:
✅ Test their own products for accessibility
✅ Evaluate components in product context
✅ Check readability in context
✅ Verify color contrast against backgrounds
✅ Report accessibility defects

SOURCE: src/_accessibility/accessibility-testing-for-design-system-components.md#responsibilities-for-teams-building-products-on-vagov
```

## Component-Specific Accessibility

### How to Answer Component Accessibility Questions

1. **Check component file**: Look for "Accessibility considerations" section
2. **Reference component checklist**: Every component has accessibility testing status
3. **Check USWDS guidance**: When component uses USWDS foundation

### Example: Button Accessibility

When asked "How do I make a button accessible?":

```markdown
**DOCUMENTED IN VADS**: Yes
**SOURCE**: Multiple button component files

## Button Accessibility Requirements

### General Requirements (All Buttons)
✅ Descriptive button labels starting with verbs
✅ Target size minimum 24×24 CSS pixels (WCAG 2.2 Level AA)
✅ Keyboard accessible (Enter and Space activate)
✅ Visible focus indicator
✅ Don't rely on color alone for meaning

SOURCE: src/_components/button/* files

### Button vs Link
❌ NEVER use button for navigation
✅ ALWAYS use link for navigation to other pages
✅ Button = action, Link = navigation

SOURCE: src/_components/link/#choose-the-right-element-buttons-vs-links

### Specific Button Types

**Button - Icon**:
✅ Follow standard button considerations
✅ Icon plus uppercase label
✅ Very concise (1-2 words)
SOURCE: src/_components/button/button-icon.md

**Reference**: design.va.gov/components/button

**DOCUMENTATION STATUS**:
- ✅ Explicitly documented: Button labels, keyboard access, focus indicators, button vs link
- ⚠️ Inferred from WCAG: Specific touch target sizes
- ❓ Not documented: [None - comprehensively covered]
```

## Form Accessibility

### Critical Form Accessibility Requirements

When answering questions about accessible forms:

```markdown
**DOCUMENTED**: Multiple sources

### Label Requirements
✅ ALL form inputs MUST have labels
✅ Show required/optional status
✅ Use required property on web component
SOURCE: src/_components/form/label.md

### Error Handling
✅ Only show errors AFTER user interaction
✅ Associate error messages with fields
✅ Clear, actionable error text
✅ Use Alert component for form-level errors

### Hint Text
✅ Provide context WITHOUT placeholder text
✅ Associate hint text programmatically
✅ Use hint-text property on components

### Field Types

**Text Input**:
✅ Appropriate input types
✅ Autocomplete attributes
✅ No placeholder as primary instruction
SOURCE: src/_components/form/text-input.md

**Radio Button**:
✅ Fieldset/legend for groups
✅ All options keyboard accessible
✅ One option must be selectable
SOURCE: src/_components/form/radio-button.md

**Checkbox**:
✅ Clear labels
✅ Logical grouping
✅ Accessible indeterminate state
SOURCE: src/_components/form/checkbox.md

**Select**:
✅ First option not placeholder
✅ Logical option order
✅ Consider alternatives for long lists
SOURCE: src/_components/form/select.md
```

## Privacy and Accessibility

**DOCUMENTED**: Privacy guidance in multiple components

When accessibility intersects with privacy (PII/PHI):

```markdown
### Privacy Considerations

**Selection Fields** (Radio, Checkbox, Select):
⚠️ Can reveal sensitive choices through:
- Browser autocomplete
- Form data exposure
- Session storage

**Open Text Fields** (Textarea, Text Input, Search):
⚠️ HIGH RISK for PII/PHI entry
✅ Implement proper logging procedures
✅ Strip/redact PII/PHI from logs

**Links and Buttons**:
⚠️ URLs can't include PII/PHI
✅ No PII/PHI in parameters or anchors

SOURCE: Various component files (privacy guidance sections)
REFERENCE: VA Platform PII/PHI guidelines
```

## Response Template for Accessibility Questions

Use this template structure:

```markdown
**DOCUMENTED IN VADS**: [Yes/Partial/No]
**SOURCE**: [Specific file(s)]

## [Question Topic]

[Direct answer based on documentation]

### Requirements

[Bulleted list of documented requirements]

### Implementation Example

[Code or pattern example if available]

### WCAG Success Criteria

[Relevant WCAG criteria if documented]

### Testing

[How to verify - if documented]

**Reference**: [Link to design.va.gov documentation]

---
**DOCUMENTATION STATUS**:
- ✅ Explicitly documented: [specific items]
- ⚠️ Inferred from [WCAG/USWDS/etc]: [specific items]
- ❓ Not documented: [specific items]
- 💡 Recommendation: [If not documented, suggest contacting #accessibility-help in Slack]

---

**AI Verification Notice**
⚠️ This is AI-generated guidance. Always verify requirements against official VADS documentation, ADE Support and governance processes. If you notice incorrect or unclear information, report it so the knowledge base can improve.

Copilot does not certify accessibility compliance.

```

## When Accessibility Guidance is Missing

If a specific accessibility requirement is NOT documented in VADS:

1. **Check USWDS** if component uses USWDS foundation
2. **Check WCAG 2.2** for standard requirements
3. **Clearly label as NOT DOCUMENTED in VADS**
4. **Recommend contacting VA accessibility team**

Example response:

```markdown
**DOCUMENTED IN VADS**: No

**NOT DOCUMENTED**: Specific guidance for [topic] is not explicitly covered in VADS documentation.

**General Accessibility Principles** (WCAG 2.2):
[Provide relevant WCAG guidance]

**Recommendation**: 
- Contact the Accessibility Digital Experience (ADE) team via #accessibility-help on Slack
- Submit an ADE intake form ticket on GitHub
- Reference WCAG 2.2 Level AA requirements

**This is not explicitly documented in VADS.** Based on WCAG 2.2, I infer that [reasoning], but this should be verified with the VA accessibility team.

---
**DOCUMENTATION STATUS**:
- ✅ Explicitly documented: None
- ⚠️ Inferred from WCAG 2.2: [what you're inferring]
- ❓ Not documented in VADS: [the specific question]
- 💡 Action required: Contact ADE team for guidance
```

## Common Accessibility Questions & Documented Answers

### "How do I make my component keyboard accessible?"

**DOCUMENTED**: Yes
**SOURCE**: Multiple component files

✅ All interactive elements must be focusable using Tab key
✅ Enter and Space must activate controls
✅ Arrow keys for form elements (dropdowns, radio buttons, sliders)
✅ Users must be able to exit all elements (no keyboard traps)
✅ Focus order must be logical and match visual order

### "What screen readers should I test with?"

**DOCUMENTED**: Yes
**SOURCE**: `src/_accessibility/index.md`, `src/_accessibility/accessibility-testing-for-design-system-components.md`

**Minimum Required**:
- iOS + Safari + VoiceOver (Mobile)
- Windows 11 + Chrome + JAWS (Desktop)

**Comprehensive**:
- Add: Android + Chrome + TalkBack
- Add: Windows 11 + Chrome + NVDA

### "Do I need to annotate my designs for accessibility?"

**DOCUMENTED**: Yes
**SOURCE**: `src/_accessibility/accessibility-annotations.md`

✅ YES - Annotations recommended by midpoint review and before handoff to engineering
✅ Use VADS Accessibility Annotation Kit in Figma
✅ Strongly recommended at midpoint review
✅ Annotate: headings, ARIA labels, fieldsets, errors, focus order

### "Can I disable the focus indicator?"

**DOCUMENTED**: Yes
**SOURCE**: `src/_accessibility/focus-management.md`

❌ NO - NEVER disable focus indicators
This is a documented requirement and WCAG failure

### "Can I use placeholder text instead of labels?"

**DOCUMENTED**: Yes
**SOURCE**: Multiple form component files

❌ NO - Avoid placeholder text
✅ All inputs require visible labels
⚠️ Placeholder text has contrast and cognitive accessibility issues
✅ Use hint-text property for additional context

## Resources to Reference

Always direct users to these official resources:

1. **VA.gov Accessibility Hub**: design.va.gov/accessibility
2. **ADE Team**: #accessibility-help on Slack
3. **Platform Documentation**: depo-platform-documentation.scrollhelp.site
4. **WCAG 2.2**: w3.org/WAI/WCAG22
5. **Component Documentation**: design.va.gov/components/[component-name]

## Critical Reminders

1. **Accessibility is MANDATORY** - Not optional, not "nice to have"
2. **Components alone ≠ Accessible product** - Teams must test in context
3. **WCAG 2.2 Level AA** - Minimum required standard
4. **Annotations recommended** - For midpoint review and before handoff to engineering
5. **Test with real users** - Including assistive technology users

---

## Example Full Response

Question: "How do I make an accessible modal?"

```markdown
**DOCUMENTED IN VADS**: Yes
**SOURCE**: 
- src/_accessibility/focus-management.md#when-opening-and-closing-a-modal
- src/_components/modal/* (component files)

## Accessible Modal Requirements

### Focus Management (DOCUMENTED)

**When Modal Opens**:
✅ Move focus to first interactive element in modal
⚠️ Exception: If first element is destructive action, focus elsewhere
✅ Options: Button, form input, or close button

**While Modal is Open**:
✅ Trap keyboard focus inside modal
✅ Tab cycles through modal elements only
✅ Background content not accessible

**When Modal Closes**:
✅ Restore focus to button that opened modal
✅ Helps users continue workflow

SOURCE: src/_accessibility/focus-management.md

### ARIA Requirements

✅ role="dialog" or role="alertdialog"
✅ aria-modal="true"
✅ aria-labelledby (references modal title)
✅ aria-describedby (references modal description, if present)

### Keyboard Requirements

✅ Escape key closes modal
✅ Tab and Shift+Tab navigate within modal
✅ Enter/Space activate buttons
✅ No keyboard trap (can always close)

### Visual Requirements

✅ Visible focus indicator
✅ Clear close button or method
✅ Contrast meets WCAG 2.2 AA
✅ Backdrop indicates modal state

### Testing

**Required Screen Readers**:
- JAWS + Chrome (Windows 11)
- VoiceOver + Safari (iOS)

**Required Keyboard Testing**:
- Open, navigate, and close using only keyboard
- Verify focus trap
- Verify focus return

**Reference**: design.va.gov/components/modal

---
**DOCUMENTATION STATUS**:
- ✅ Explicitly documented: Focus management, ARIA requirements, keyboard requirements
- ⚠️ Inferred from WCAG 2.2: Specific contrast ratios (use VADS color tokens)
- ❓ Not documented: [None - comprehensively covered]
```

⚠️ This is AI-generated guidance. Always verify requirements against official VADS documentation and governance processes. If you notice incorrect or unclear information, report it so the knowledge base can improve.

Copilot does not certify accessibility compliance.

---

## Final Checklist for Accessibility Responses

Before providing an accessibility answer, verify:

- [ ] Checked relevant component file(s)
- [ ] Checked accessibility documentation pages
- [ ] Clearly labeled what IS vs IS NOT documented
- [ ] Provided specific file sources
- [ ] Included design.va.gov reference links
- [ ] Stated WCAG 2.2 Level AA requirements
- [ ] Included testing guidance if applicable
- [ ] Added documentation status section
- [ ] Recommended ADE team contact if not documented
- [ ] Used VADS components in any code examples
- [ ] Verified requirements are mandatory vs. recommended
- [ ] Included AI verification notice
- [ ] Respected governance and role boundaries

**CRITICAL**: Every accessibility response MUST clearly distinguish between:
1. What's explicitly documented in VADS
2. What's required by WCAG 2.2 Level AA
3. What's inferred or interpreted
4. What requires verification from ADE team
