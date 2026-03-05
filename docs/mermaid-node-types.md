# Mermaid Chart Node Types - Design System Standards

This document defines the standardized node types available for Mermaid charts in the VA Design System documentation.

## Available Node Types

### Start Nodes
- **Class**: `:::node-start`
- **Usage**: Initial entry point of flowchart
- **Style**: Rectangular with bold text and start styling
- **Example**: `Start["<b>Should this link open in a new tab?</b>"]:::node-start`

### Question/Decision Nodes  
- **Class**: `:::node-question`
- **Usage**: Decision points that branch the flow
- **Style**: Diamond shape with question styling
- **Example**: `Question{"<b>What platform?</b>"}:::node-question`

### Answer Nodes
- **Primary**: `:::node-answer-primary` (for "yes" or primary path answers)
- **Secondary**: `:::node-answer-secondary` (for "no" or secondary path answers)
- **Usage**: Intermediate nodes that provide context before next decision
- **Style**: Rounded rectangle with examples
- **Example**: `Answer(["<b>Web</b><br/>Examples:<br/>Desktop, mobile browser"]):::node-answer-primary`

### Result Nodes
- **Button**: `:::node-result-button` (for button-like actions)
- **Link**: `:::node-result-link` (for navigation actions)  
- **Action**: `:::node-result-action` (for system actions)
- **Special**: `:::node-special` (for unique cases)
- **Usage**: Final outcomes of the decision tree
- **Style**: Rectangular with specific result styling
- **Example**: `Result["<b>Open in NEW TAB</b><br/>Add '(opens in a new tab)' text"]:::node-result-button`

### Context Nodes
- **Class**: `:::node-context`
- **Usage**: Platform or environment indicators
- **Style**: Simple labeling for context
- **Example**: `Platform(["Web"]):::node-context`

## Chart Width Classes

- `.mermaid-width` - 528px (for simple linear charts)
- `.mermaid-width-wide` - 800px (for complex decision trees)
- `.mermaid-chart-container` - Full width with responsive behavior

## Best Practices for AI/Copilot

1. **Consistent Naming**: Always use descriptive variable names (Start, Question1, Answer1, etc.)
2. **Bold Headers**: Use `<b>` tags for main text in all nodes
3. **Examples in Answers**: Include concrete examples in answer nodes for clarity
4. **Logical Flow**: Follow the pattern: Start → Question → Answer → Question/Result
5. **Merge Duplicate Outcomes**: Combine nodes that lead to the same result

## Template Patterns

### Simple Binary Decision
```
Start["<b>Question?</b>"]:::node-start --> Decision{"<b>Decision point?</b>"}:::node-question
Decision --> Yes(["<b>YES</b><br/>Examples"]):::node-answer-primary
Decision --> No(["<b>NO</b><br/>Examples"]):::node-answer-secondary  
Yes --> ResultA["<b>Outcome A</b>"]:::node-result-button
No --> ResultB["<b>Outcome B</b>"]:::node-result-link
```

### Platform-Based Decision Tree
```
Start --> Platform{"<b>Platform?</b>"}:::node-question
Platform --> Web(["<b>Web</b>"]):::node-answer-primary
Platform --> Mobile(["<b>Mobile</b>"]):::node-answer-secondary
Web --> WebDecision{"<b>Web-specific question?</b>"}:::node-question
Mobile --> MobileDecision{"<b>Mobile-specific question?</b>"}:::node-question
```