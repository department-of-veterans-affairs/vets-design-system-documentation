# AI/Copilot Guide for VA Design System Mermaid Charts

This guide provides specific instructions for AI tools to efficiently implement standardized Mermaid charts in the VA Design System documentation.

## Quick Reference for AI

### Available Files
- `/docs/mermaid-chart-templates.md` - Ready-to-use templates  
- `/docs/mermaid-node-types.md` - Standardized node types and styling reference
- `/docs/mermaid-chart-data-driven.md` - JSON-based approach for complex charts

### Standard Implementation Pattern

```html
<div class="[WIDTH_CLASS]">
  {% include mermaid-chart.html 
   id="[unique-chart-id]" 
   caption="[Descriptive caption for accessibility]"
   chart="
[MERMAID_FLOWCHART_SYNTAX]
" %}
</div>
```

## AI Prompts for Common Tasks

### Creating a New Decision Chart
```
"Create a Mermaid decision flowchart for [TOPIC] using VA Design System standards:

1. Use the platform-specific template if web vs mobile behavior differs
2. Start with: Start["<b>[MAIN_QUESTION]</b>"]:::node-start
3. Use :::node-question for decision diamonds
4. Use :::node-answer-primary/secondary for intermediate steps with examples
5. Use :::node-result-button/link/action for final outcomes
6. Include concrete examples in answer nodes
7. Use .mermaid-width-wide for complex charts
8. Make text bold with <b> tags
9. Add screen reader alternative text in .sr-only div above chart"
```

### Converting Existing Content to Chart
```
"Convert this guidance text into a standardized Mermaid decision flowchart:

[PASTE_EXISTING_GUIDANCE]

Follow VA Design System patterns:
- Extract decision points as :::node-question diamonds
- Convert examples into :::node-answer nodes  
- Use appropriate result node types based on action type
- Merge duplicate outcomes into single result nodes
- Use .mermaid-width-wide wrapper class"
```

### Updating Existing Chart
```
"Update this Mermaid chart to follow current VA Design System standards:

[PASTE_EXISTING_CHART]

Apply these improvements:
- Add <b> tags to all primary text
- Include examples in answer nodes where helpful
- Use consistent node type classes (:::node-start, :::node-question, etc.)
- Merge any duplicate result outcomes
- Ensure proper width class for chart complexity
- Add accessible alternative text"
```

## Decision Tree for Chart Width

```
Simple linear flow (≤ 3 decisions) → .mermaid-width (528px)
Complex branching (> 3 decisions) → .mermaid-width-wide (800px) 
Very complex multi-platform → .mermaid-chart-container (full width with responsive)
```

## Quality Checklist for AI

Before implementation, verify:

- [ ] Start node uses :::node-start
- [ ] All questions use :::node-question with diamond syntax `{}`
- [ ] Answer nodes include examples where helpful
- [ ] Result nodes use appropriate type (button/link/action/special)
- [ ] Text is bold with `<b>` tags
- [ ] Duplicate outcomes are merged
- [ ] Appropriate width class is applied
- [ ] Screen reader alternative provided
- [ ] Chart ID is unique and descriptive
- [ ] Caption describes chart purpose

## Common Patterns by Use Case

| Use Case | Template | Width Class | Typical Node Count |
|----------|----------|-------------|-------------------|
| Button vs Link decisions | Simple Binary | `.mermaid-width` | 3-5 nodes |
| Platform-specific behavior | Platform-Specific | `.mermaid-width-wide` | 8-12 nodes |  
| Multi-step form flows | Multi-Step Sequential | `.mermaid-width-wide` | 10+ nodes |
| Component usage decisions | Custom (adapt templates) | `.mermaid-width` | 5-8 nodes |

## File Output Structure

When created, AI should generate:

1. **Markdown content** with chart embedded
2. **Screen reader alternative** in `.sr-only` div
3. **Proper Jekyll include** syntax with all required parameters
4. **Responsive wrapper** with appropriate width class  

## Error Prevention

Common mistakes AI should avoid:
- Missing `:::` class syntax on nodes
- Forgetting `<b>` tags for primary text  
- Not including examples in answer nodes
- Using wrong width class for chart complexity
- Missing screen reader alternative text
- Inconsistent node naming/IDs
- Duplicate result outcomes that could be merged