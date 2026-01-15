---
title: Accessibility testing
description: Standards and methodology for accessibility testing of Design System components.
sidebar_position: 5
---

# Accessibility testing

The VA.gov Platform team's accessibility specialists conduct thorough component testing before adding or updating items in the Design System. This strategy incorporates best practices and industry standards to create an inclusive digital environment.

## Product team responsibilities

### Testing requirements

Teams must independently test their products for accessibility and comply with VA.gov Experience Standards. Complete foundational accessibility testing before staging reviews and pursue advanced testing as well.

### Component evaluation in context

Design system components are tested in isolation. While we try to ensure that no accessibility barriers exist in any given component, barriers can still be introduced when components are used in an unanticipated combination or context.

Teams should evaluate:
- **Headings** - Proper hierarchy and logical content grouping
- **Button/Link text** - Meaningful language that conveys purpose
- **Labels** - Clear, concise, and understandable text
- **Plain language** - Error messages describing issues with resolution paths
- **Color contrast** - Against backgrounds and adjacent elements

### Defect reporting

Teams identifying accessibility defects should submit issues to the GitHub repository.

## Testing principles

### POUR framework

Components are tested against four accessibility principles:

| Principle | Description |
|-----------|-------------|
| **Perceivable** | Information presentable in perceivable ways |
| **Operable** | Components and navigation are operable |
| **Understandable** | Information and operation are understandable |
| **Robust** | Content interpretable by various user agents and assistive technologies |

### Standards compliance

Testing adheres to WCAG 2.2 Level AA, incorporating Section 508 of the Rehabilitation Act requirements.

### Assistive technology coverage

Testing includes screen readers, voice commands, magnification, browser settings, contrast themes, and various input methods.

## Testing methodology

### Code review

Reviewers examine:
- Proper semantic HTML usage
- Valid ARIA implementation
- Appropriate element labeling

### Automated scanning

- aXe DevTools scans via Cypress for default variations
- Browser extension scans for additional variations

### Readability evaluation

Assessment of heading hierarchy, button/link text clarity, label quality, and plain language compliance.

### Color testing

- WCAG Level AA contrast ratio compliance
- Non-color-dependent information communication
- Windows contrast theme compatibility

### Text and display adjustments

Testing covers:
- Browser font size adjustments
- Zoom levels at 200%, 300%, and 400%
- macOS Zoom and Windows Magnifier compatibility

### Screen reader testing

| Screen reader | Browser | Platform |
|---------------|---------|----------|
| JAWS | Chrome | Windows |
| NVDA | Firefox | Windows |
| Narrator | Edge | Windows |
| VoiceOver | Safari | macOS |
| TalkBack | Chrome | Android |
| VoiceOver | Safari | iOS |

Testing verifies:
- Content announcement order
- Unique accessible names
- Proper element type announcements
- Standard navigation patterns

### Input method testing

**Touch and mouse:**
- Target sizes meet WCAG AA requirements
- No multipoint or path-based gestures required
- No specific timing requirements

**Keyboard:**
- All interactive elements focusable
- Visible focus indicators with proper contrast
- Arrow key functionality for form elements
- Keyboard activation capability
- No focus trapping

**Voice commands:**
- Accessible names match visible labels
- Straightforward pronunciation for clear interaction

## Checklist result categories

| Result | Description |
|--------|-------------|
| Pass | Meets all requirements |
| Conditional pass | Passes with specific conditions |
| Pass with exceptions | Minor issues noted |
| Fail | Does not meet requirements |
| Not completed | Testing not yet performed |

Notes clarify results, such as false positives in automated scans.
