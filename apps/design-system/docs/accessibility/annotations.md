---
title: Accessibility annotations
description: Guidelines for adding accessibility annotations to mockups to communicate meaning, behaviors, and interactions.
sidebar_position: 4
---

# Accessibility annotations

Accessibility annotations are explanatory notes added to mockups that communicate meaning, behaviors, and interactions in designs or applications. They document elements like heading structure, screen reader experiences, error states, and more to ensure products are accessible from the beginning.

## Purpose and audience

**Target users:**
- Designers and developers
- Platform Governance team
- End users with disabilities using assistive technologies

**Key benefits:**
Annotations push designers to incorporate accessibility as part of the design work rather than an afterthought. They reduce developer guesswork by providing clear semantic HTML and UI interaction guidance.

## When to add annotations

Designers should add annotations before design/developer handoff. The Collaboration Cycle recommends completion before midpoint review. This allows the Governance team's accessibility specialist to evaluate decisions early and suggest changes before engineering begins.

## Annotation library

The VA.gov Platform uses an open-source accessibility annotation kit from CVS, located in the Figma VADS Annotation Kit within the VA Design System folder.

## Core annotation types

### Pin stamps

Point to specific design elements, with adjustable orientation (above, below, left, right, or center).

### Lasso stamps

Highlight design areas for landmarks or components like linked cards, with customizable label positioning.

### Details cards

Numbered reference notes corresponding to pin/lasso stamps, containing:
- Interface behavior
- URLs
- Error messages
- Semantic HTML code
- ARIA attributes

## Available annotation categories

- Buttons
- Design System (DS) components
- Feedback messages
- Focus order
- Headings
- Images
- Inputs
- Landmarks
- Links
- Lists
- Notes
- Reading order
- Utilities

## What to annotate

Prioritize annotating elements where an engineer needs to make decisions about something that's not baked into a component or forms library code.

### Essential items

- **Heading levels and hierarchy** - Use pin stamps to identify semantic levels (H1-H6), especially when visual styling differs from hierarchy
- **ARIA labels and accessible names** - Annotate unique names for multiple similar elements
- **Fieldset and legend placement** - Use lasso stamps to show grouping of related form inputs
- **Error messages** - Document custom or unique error messaging for content review and testing
- **Focus management** - Indicate primary focus destination on page load and between pages
- **Custom code implementations** - Any non-standard interactions
- **Specific VADS component usage notes** - Component-specific requirements
- **Form elements** - Elements between breadcrumb and help component

## Best practices

Over-annotation is preferable to under-annotation because it:
- Encourages designer-engineer communication
- Forces deeper experience consideration
- Eliminates developer guesswork

Tailor annotation verbosity to team expertise levels. As teams mature, annotation approaches may evolve.

### Collaborative approach

Use annotations as communication tools. Teams utilize the kit differently based on their needs and should establish shared understanding with engineering partners.

## Collaboration cycle integration

Submit annotated prototypes at midpoint review for Governance team evaluation. This timing allows accessibility specialists to assess design decisions and surface open questions before engineering handoff.

## Resources

- [CVS Web Accessibility Annotation Kit Wiki](https://github.com/cvs-health/annotations/wiki/Web-Accessibility-Annotation-Kit)
- For questions: #annotation-help Slack channel (Office of the CTO @ VA)
