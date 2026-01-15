---
title: Focus management
description: Best practices for managing keyboard focus to ensure accessible navigation.
sidebar_position: 6
---

# Focus management

Focus management involves guiding where keyboard attention lands on a page. Focus shows which element is active and ready for input, with particular importance for non-mouse users and screen reader reliance.

## Related WCAG standards

| Criterion | Level | Description |
|-----------|-------|-------------|
| 1.4.13 Content on Hover or Focus | AA | Content triggered by hover/focus must be dismissible, hoverable, and persistent |
| 2.4.3 Focus Order | A | Focus order preserves meaning and operability |
| 2.4.7 Focus Visible | AA | Keyboard focus indicator is visible |
| 2.4.11 Focus Not Obscured | AA | Focused element is not entirely hidden |
| 2.4.13 Focus Appearance | AAA | Enhanced focus indicator requirements |
| 3.2.1 On Focus | A | Focus doesn't trigger unexpected context changes |

## Focus appearance

### Visual indicator

VA.gov uses a thick gold outline to indicate focus on interactive elements.

### Key guidelines

- Never eliminate focus indicators from interactive components
- Avoid custom focus styling; leverage system-wide defaults
- Ensure complete visibility of the outline around grouped elements

## Focus order

### Principle

Focus order should match the visual reading order of the page, progressing left-to-right and top-to-bottom for English content.

### Requirements

- Include only interactive elements (buttons, links, inputs) in tab sequences
- Maintain predictability and logical progression

## Focus management strategies

### Benefits

- Provides screen reader context when elements receive focus
- Directs users toward relevant next actions

### Risks

- Can disorient users if triggered unexpectedly
- May interfere with aria-live announcements

## Implementation scenarios

### Page load

For single-page applications, set focus to the first unique heading when a new page loads.

### Content changes

- Move focus to newly added content
- Restore focus logically when content is removed

### Error states

Direct focus to the first problematic input requiring correction.

### Modals

**On open:**
- Move focus to the modal's first interactive element
- Avoid focusing on destructive actions (like "Delete") first

**On close:**
- Restore focus to the triggering button

## Developer notes

- Moving focus into Shadow DOM elements produces unpredictable outcomes across browsers
- Consider prioritizing focus announcements over aria-live when both apply
