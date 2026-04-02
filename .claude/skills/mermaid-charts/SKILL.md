---
name: mermaid-charts
description: Creates and standardizes Mermaid decision flowcharts in VA Design System documentation, including templates, node types, accessibility alternatives, and the standard Jekyll include pattern.
triggers:
  - mermaid chart
  - decision flowchart
  - mermaid diagram
  - flowchart TD
  - create a chart
  - add a chart
---

# SKILL: Mermaid Chart Implementation

## Overview
This skill enables efficient creation and standardization of Mermaid decision flowcharts in the VA Design System documentation following established patterns and best practices.

## When to use this skill
- Creating new decision flowcharts for component or pattern guidance  
- Converting existing text-based guidance into visual flowcharts
- Updating existing Mermaid charts to follow current standards
- Implementing charts that help users make decisions about design system usage

## Key files and resources
- `/docs/ai-mermaid-implementation-guide.md` - Complete AI implementation guide
- `/docs/mermaid-chart-templates.md` - Ready-to-use templates for common patterns  
- `/docs/mermaid-node-types.md` - Standardized node types and styling reference
- `/docs/mermaid-chart-data-driven.md` - JSON-based approach for complex charts
- `/src/assets/stylesheets/application.scss` - Chart styling (lines 145-230)

## Quick implementation checklist
1. Choose appropriate template based on decision structure
2. Replace template variables with specific content
3. Use correct width class (.mermaid-width or .mermaid-width-wide)
4. Apply standardized node types (:::node-start, :::node-question, etc.)
5. Add specific details to answer nodes without "Example:" labels
6. Ensure all primary text uses `<b>` tags
7. Merge duplicate result outcomes
8. Include screen reader alternative text
9. Add text-based decision list using va-additional-info component
10. Test build locally

## Standard pattern
```html
<div class="mermaid-width-wide">
  {% include mermaid-chart.html 
   id="unique-chart-id" 
   caption="Descriptive caption for accessibility"
   chart="
flowchart TD
    Start[\"<b>Main question</b>\"]:::node-start --> Decision{\"<b>Decision point?</b>\"}:::node-question
    Decision --> Option1([\"<b>Option 1</b><br/>Examples:<br/>Example A, Example B\"]):::node-answer-primary  
    Decision --> Option2([\"<b>Option 2</b><br/>Examples:<br/>Example C, Example D\"]):::node-answer-secondary
    Option1 --> Result1[\"<b>Outcome A</b><br/>Additional details\"]:::node-result-button
    Option2 --> Result2[\"<b>Outcome B</b><br/>Additional details\"]:::node-result-link
" %}
</div>

<va-additional-info trigger="View text-based decision list for [topic]" id="chart-id-decision-list">

<h4>Main question</h4>

<ul>
<li><strong>Decision point?</strong>
    <ul>
    <li><strong>Option 1</strong> (Example A, Example B) → <strong>Outcome A</strong></li>
    <li><strong>Option 2</strong> (Example C, Example D) → <strong>Outcome B</strong></li>
    </ul>
</li>
</ul>

</va-additional-info>
```

## Templates available
- **Simple Binary Decision**: For yes/no decisions with two clear outcomes
- **Platform-Specific Decision Tree**: For different web vs mobile app behavior
- **Multi-Step Sequential Decision**: For multiple decision points in sequence

## Success criteria
- Chart renders correctly without errors
- All nodes use appropriate styling classes
- Decision flow is logical and easy to follow  
- Specific details make options concrete and clear
- Screen reader users can understand the decision process
- Chart width is appropriate for content complexity
- Text-based alternative provided using va-additional-info component
- **Text alternative exactly matches visual chart** (same paths, questions, details, outcomes, capitalization)
- No unnecessary "Example:" labels cluttering the design