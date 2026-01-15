---
title: Accessibility for Teams
description: Role-specific accessibility responsibilities
sidebar_position: 3
---

# Accessibility for Teams

Accessibility is a team responsibility. Every role contributes to creating accessible experiences. This guide outlines what each team member should focus on.

## Designers

### Responsibilities

- Design with accessibility in mind from the start
- Use accessible color combinations
- Create clear visual hierarchy
- Design focus states for all interactive elements
- Document accessibility requirements in specs

### Key Tasks

#### Color and Contrast

- Check contrast ratios for all text (4.5:1 minimum)
- Don't rely on color alone to convey meaning
- Design clear focus indicators

#### Layout and Typography

- Use a logical reading order
- Design clear heading hierarchy
- Ensure touch targets are at least 44x44px
- Design for zoom up to 200%

#### States and Feedback

- Design all interactive states (default, hover, focus, active, disabled)
- Design clear error states
- Design loading and progress indicators

### Tools

- [Figma Accessibility Plugins](https://www.figma.com/community/search?model_type=public_plugins&q=accessibility)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Oracle](https://colororacle.org/) (color blindness simulator)

## Developers

### Responsibilities

- Implement accessible HTML structure
- Ensure keyboard navigation works
- Add appropriate ARIA attributes
- Test with assistive technologies

### Key Tasks

#### Semantic HTML

```html
<!-- Use semantic elements -->
<main>
  <nav aria-label="Main navigation">...</nav>
  <article>
    <h1>Page Title</h1>
    <section>...</section>
  </article>
</main>
```

#### Keyboard Support

- All interactive elements must be focusable
- Focus order must match visual order
- Custom components need keyboard handlers

#### ARIA

```html
<!-- Add ARIA only when needed -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" hidden>...</div>
```

#### Focus Management

```javascript
// Move focus appropriately
modal.addEventListener('close', () => {
  triggerButton.focus();
});
```

### Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Content Writers

### Responsibilities

- Write in plain language
- Create descriptive link text
- Write effective alt text
- Structure content with headings

### Key Tasks

#### Plain Language

- Use simple words and short sentences
- Define acronyms and jargon
- Write at an appropriate reading level

#### Link Text

```html
<!-- Good: Descriptive link text -->
<a href="/benefits">Learn about VA health benefits</a>

<!-- Bad: Vague link text -->
<a href="/benefits">Click here</a>
```

#### Alt Text

```html
<!-- Good: Descriptive alt text -->
<img src="form.jpg" alt="Screenshot of the health care application form showing personal information fields">

<!-- Bad: Uninformative alt text -->
<img src="form.jpg" alt="Image">
```

#### Headings

- Use headings to create an outline of the page
- Don't skip heading levels
- Make headings descriptive

### Resources

- [Content Style Guide](../content/)
- [Plain Language Guidelines](../content/plain-language)
- [WebAIM Alt Text Guide](https://webaim.org/techniques/alttext/)

## Product Managers

### Responsibilities

- Include accessibility in requirements
- Allocate time for accessibility work
- Ensure accessibility testing is completed
- Track accessibility issues

### Key Tasks

#### Requirements

- Include accessibility acceptance criteria in stories
- Reference WCAG success criteria when relevant
- Require accessibility testing before launch

#### Planning

- Budget time for accessibility implementation
- Include accessibility in Definition of Done
- Plan for remediation of accessibility issues

#### Monitoring

- Track accessibility bugs with other issues
- Prioritize accessibility issues appropriately
- Report on accessibility compliance

## QA / Testers

### Responsibilities

- Perform accessibility testing
- Document accessibility issues
- Verify accessibility fixes

### Key Tasks

#### Automated Testing

Run automated tools to catch common issues:

```bash
# Example: axe-core in test suite
npm run test:a11y
```

#### Manual Testing

1. **Keyboard navigation** - Tab through entire page
2. **Screen reader** - Navigate with VoiceOver/NVDA
3. **Zoom** - Test at 200% zoom
4. **Mobile** - Test on real devices

#### Issue Reporting

Include in bug reports:
- WCAG success criterion violated
- Steps to reproduce
- Expected vs. actual behavior
- Impact on users

### Testing Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [NVDA](https://www.nvaccess.org/) (Windows screen reader)
- [VoiceOver](https://www.apple.com/accessibility/vision/) (Mac/iOS screen reader)

## Working Together

### Shift Left

Address accessibility early in the process:

1. **Design** - Design for accessibility from the start
2. **Development** - Build accessibility in, don't bolt it on
3. **Testing** - Test throughout, not just at the end
4. **Launch** - Verify compliance before release

### Communication

- Discuss accessibility in planning meetings
- Share accessibility concerns early
- Collaborate on solutions
- Celebrate accessibility wins

### Learning

- Attend accessibility training
- Share knowledge with teammates
- Stay current with guidelines
- Learn from accessibility audits
