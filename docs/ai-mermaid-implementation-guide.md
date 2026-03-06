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
   chart="flowchart TD
    Start[<b>[MAIN_QUESTION]</b>]:::node-start --> Question{<b>[DECISION_POINT]</b>}:::node-question
    Question --> Answer[<b>[ANSWER_OPTION]</b><br/>[EXAMPLE_CONTEXT]]:::node-answer-primary
    Answer --> Result[<b>[FINAL_OUTCOME]</b><br/>[IMPLEMENTATION_DETAILS]]:::node-result-link" %}
</div>

<va-additional-info trigger="View text-based decision list for [TOPIC]" id="[CHART_ID]-decision-list">

<h4>[Main Question]</h4>

<ul>
[HIERARCHICAL_TEXT_DECISION_TREE]
</ul>

</va-additional-info>
```

### Bold Tag Syntax
- Use `<b>` tags inside node brackets without additional quotes: `[<b>Text</b>]`
- Avoid wrapping entire node content in quotes when using HTML tags
- Place bold tags around primary text for better readability

### Node Content Guidelines
- Keep nodes clean and concise
- Include specific details and examples directly without "Example:" or "Examples:" labels
- Use concrete, actionable descriptions
- Bold primary text with `<b>` tags (place inside node brackets without extra quotes)
- Add helpful context using line breaks (`<br/>`)

## AI Prompts for Common Tasks

### Creating a New Decision Chart
```
"Create a Mermaid decision flowchart for [TOPIC] using VA Design System standards:

1. Use the platform-specific template if web vs mobile behavior differs
2. Start with: Start["<b>[MAIN_QUESTION]</b>"]:::node-start
3. Use :::node-question for decision diamonds
4. Use :::node-answer-primary/secondary for intermediate steps with specific details
5. Use :::node-result-button/link/action for final outcomes
6. Include concrete details directly in nodes without "Example:" labels
7. Use .mermaid-width-wide for complex charts
8. Make text bold with <b> tags
9. Add screen reader alternative text in .sr-only div above chart
10. Add text-based decision list using va-additional-info component after chart
11. **Ensure text alternative exactly mirrors visual chart** (same decision paths, questions, examples, outcomes, and capitalization)"
```

### Converting Existing Content to Chart
```
"Convert this guidance text into a standardized Mermaid decision flowchart:

[PASTE_EXISTING_GUIDANCE]

Follow VA Design System patterns:
- Extract decision points as :::node-question diamonds
- Convert details into :::node-answer nodes with specific content
- Use appropriate result node types based on action type
- Merge duplicate outcomes into single result nodes
- Use .mermaid-width-wide wrapper class
- Include concrete details without "Example:" labels
- Add text-based alternative using va-additional-info component"
```

### Updating Existing Chart
```
"Update this Mermaid chart to follow current VA Design System standards:

[PASTE_EXISTING_CHART]

Apply these improvements:
- Add <b> tags to all primary text
- Remove "Example:" or "Examples:" labels for cleaner presentation
- Include specific details directly in answer nodes
- Use consistent node type classes (:::node-start, :::node-question, etc.)
- Merge any duplicate result outcomes
- Ensure proper width class for chart complexity
- Add accessible alternative text
- Add text-based decision list using va-additional-info component"
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
- [ ] Answer nodes include specific details without "Example:" labels
- [ ] Result nodes use appropriate type (button/link/action/special)
- [ ] Text is bold with `<b>` tags
- [ ] Duplicate outcomes are merged
- [ ] Appropriate width class is applied
- [ ] Screen reader alternative provided
- [ ] Chart ID is unique and descriptive
- [ ] Caption describes chart purpose
- [ ] Text-based decision list added using va-additional-info component
- [ ] **Text alternative exactly matches visual chart** (same paths, questions, examples, outcomes, capitalization)

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
- Not including helpful examples and context in answer nodes
- Using wrong width class for chart complexity
- Missing screen reader alternative text
- Inconsistent node naming/IDs
- Duplicate result outcomes that could be merged
- Adding "Example:" or "Examples:" labels (include context directly)