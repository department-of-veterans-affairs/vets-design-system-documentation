---
title: Accessibility Checklist
description: Quick reference checklist for common accessibility requirements
sidebar_position: 2
---

# Accessibility Checklist

Use this checklist to ensure your work meets VA.gov accessibility standards. This covers the most common requirements—see individual guidelines for complete details.

## Content

- [ ] **Page has one H1** that describes the page content
- [ ] **Headings are hierarchical** (H1 → H2 → H3, no skipping levels)
- [ ] **Link text is descriptive** (avoid "click here" or "learn more" alone)
- [ ] **Images have alt text** describing the content (or empty alt="" for decorative images)
- [ ] **Content is readable** at 200% zoom without horizontal scrolling
- [ ] **Language is plain** and easy to understand

## Color & Contrast

- [ ] **Text has sufficient contrast** (4.5:1 for normal text, 3:1 for large text)
- [ ] **UI components have sufficient contrast** (3:1 minimum)
- [ ] **Color is not the only indicator** of meaning (use icons, text, patterns too)
- [ ] **Focus indicators are visible** on all interactive elements
- [ ] **Links are distinguishable** from surrounding text (not just by color)

## Keyboard

- [ ] **All functionality is keyboard accessible** (no mouse required)
- [ ] **Focus order is logical** (follows visual reading order)
- [ ] **Focus is visible** on all interactive elements
- [ ] **No keyboard traps** (user can navigate away from all elements)
- [ ] **Skip links work** (skip to main content link at page start)

## Forms

- [ ] **All inputs have visible labels** (not just placeholder text)
- [ ] **Labels are associated with inputs** (using `for`/`id` or wrapping)
- [ ] **Required fields are indicated** (not just with asterisk)
- [ ] **Error messages are clear and specific** about what's wrong
- [ ] **Error messages are associated with fields** (using aria-describedby)
- [ ] **Form can be submitted with keyboard** (Enter key works)
- [ ] **Focus moves to first error** after failed submission

## Images & Media

- [ ] **Informative images have descriptive alt text**
- [ ] **Decorative images have empty alt=""**
- [ ] **Complex images have extended descriptions** (diagrams, charts)
- [ ] **Videos have captions**
- [ ] **Audio has transcripts**
- [ ] **No auto-playing media** (or easily paused/stopped)

## Interactive Components

- [ ] **Buttons use `<button>` element** (not styled divs/spans)
- [ ] **Links use `<a>` element** with valid href
- [ ] **Custom components have ARIA roles** where needed
- [ ] **State changes are announced** to screen readers
- [ ] **Modals trap focus** while open
- [ ] **Modals return focus** when closed

## Mobile & Responsive

- [ ] **Touch targets are at least 44x44 pixels**
- [ ] **Content is usable** at all screen sizes
- [ ] **No horizontal scrolling** at 320px width
- [ ] **Orientation is not locked** (works in portrait and landscape)

## Screen Reader

- [ ] **Page has descriptive title** (`<title>` element)
- [ ] **Main content is in `<main>` element**
- [ ] **Navigation is in `<nav>` element**
- [ ] **Regions have accessible names** (aria-label on landmarks)
- [ ] **Live regions announce updates** (aria-live for dynamic content)
- [ ] **Tables have headers** (`<th>` elements with scope)

## Testing

- [ ] **Automated testing passes** (axe, WAVE, Lighthouse)
- [ ] **Keyboard testing completed** (Tab, Enter, Space, Escape)
- [ ] **Screen reader testing completed** (VoiceOver or NVDA)
- [ ] **Zoom testing completed** (up to 200%)
- [ ] **Mobile testing completed** (real device or emulator)

## Using This Checklist

### When to Use

- Before code review
- Before launching new features
- When updating existing pages
- During accessibility audits

### How to Test

1. **Automated first** - Run axe or WAVE to catch obvious issues
2. **Keyboard navigation** - Tab through the entire page
3. **Screen reader** - Navigate with VoiceOver or NVDA
4. **Visual inspection** - Check contrast, focus states, zoom

### Getting Help

If you're unsure about any item, consult with your team's accessibility specialist or contact the VA Section 508 office.
