# Mermaid Chart Templates

Reusable templates for common decision tree patterns in VA Design System documentation.

## Template 1: Simple Binary Decision

**Use case**: Yes/No decisions with two clear outcomes

```
Start["<b>[MAIN_QUESTION]</b>"]:::node-start --> Decision{"<b>[DECISION_POINT]</b>"}:::node-question

Decision --> Yes(["<b>YES</b><br/>Examples:<br/>[YES_EXAMPLES]"]):::node-answer-primary  
Decision --> No(["<b>NO</b><br/>Examples:<br/>[NO_EXAMPLES]"]):::node-answer-secondary

Yes --> ResultA["<b>[OUTCOME_A_TITLE]</b><br/>[OUTCOME_A_DETAILS]"]:::node-result-[TYPE]
No --> ResultB["<b>[OUTCOME_B_TITLE]</b><br/>[OUTCOME_B_DETAILS]"]:::node-result-[TYPE]
```

**Variables to replace:**
- `[MAIN_QUESTION]` - Primary question the chart answers
- `[DECISION_POINT]` - The specific decision being made  
- `[YES_EXAMPLES]` / `[NO_EXAMPLES]` - Concrete details for each path (no "Examples:" label)
- `[OUTCOME_A_TITLE]` / `[OUTCOME_B_TITLE]` - Result titles
- `[OUTCOME_A_DETAILS]` / `[OUTCOME_B_DETAILS]` - Additional result info
- `[TYPE]` - Result type: `button`, `link`, `action`, or `special`

## Template 2: Platform-Specific Decision Tree

**Use case**: Different behavior for Web vs Mobile platforms

```  
Start["<b>[MAIN_QUESTION]</b>"]:::node-start --> Platform{"<b>What platform?</b>"}:::node-question

%% Web Flow
Platform --> Web(["<b>Web</b>"]):::node-answer-primary
Web --> WebDecision{"<b>[WEB_QUESTION]</b>"}:::node-question

WebDecision --> WebOption1(["<b>[WEB_OPTION_1]</b><br/>Examples:<br/>[WEB_EXAMPLES_1]"]):::node-answer-primary
WebOption1 --> WebResult1["<b>[WEB_RESULT_1]</b><br/>[WEB_DETAILS_1]"]:::node-result-[TYPE]

WebDecision --> WebOption2(["<b>[WEB_OPTION_2]</b><br/>Examples:<br/>[WEB_EXAMPLES_2]"]):::node-answer-secondary  
WebOption2 --> WebResult2["<b>[WEB_RESULT_2]</b><br/>[WEB_DETAILS_2]"]:::node-result-[TYPE]

%% Mobile Flow
Platform --> Mobile(["<b>Mobile App</b>"]):::node-answer-secondary
Mobile --> MobileDecision{"<b>[MOBILE_QUESTION]</b>"}:::node-question

MobileDecision --> MobileOption1(["<b>[MOBILE_OPTION_1]</b><br/>Examples:<br/>[MOBILE_EXAMPLES_1]"]):::node-answer-primary
MobileOption1 --> MobileResult1["<b>[MOBILE_RESULT_1]</b><br/>[MOBILE_DETAILS_1]"]:::node-result-[TYPE]

MobileDecision --> MobileOption2(["<b>[MOBILE_OPTION_2]</b><br/>Examples:<br/>[MOBILE_EXAMPLES_2]"]):::node-answer-secondary
MobileOption2 --> MobileResult2["<b>[MOBILE_RESULT_2]</b><br/>[MOBILE_DETAILS_2]"]:::node-result-[TYPE]
```

## Template 3: Multi-Step Sequential Decision

**Use case**: Multiple decision points in sequence

```
Start["<b>[MAIN_QUESTION]</b>"]:::node-start --> Step1{"<b>[STEP_1_QUESTION]</b>"}:::node-question

Step1 --> Step1Option1(["<b>[STEP_1_OPTION_1]</b><br/>Examples:<br/>[STEP_1_EXAMPLES_1]"]):::node-answer-primary
Step1 --> Step1Option2(["<b>[STEP_1_OPTION_2]</b><br/>Examples:<br/>[STEP_1_EXAMPLES_2]"]):::node-answer-secondary

Step1Option1 --> Step2{"<b>[STEP_2_QUESTION]</b>"}:::node-question
Step1Option2 --> EarlyResult["<b>[EARLY_RESULT]</b><br/>[EARLY_DETAILS]"]:::node-result-[TYPE]

Step2 --> Step2Option1(["<b>[STEP_2_OPTION_1]</b><br/>Examples:<br/>[STEP_2_EXAMPLES_1]"]):::node-answer-primary  
Step2 --> Step2Option2(["<b>[STEP_2_OPTION_2]</b><br/>Examples:<br/>[STEP_2_EXAMPLES_2]"]):::node-answer-secondary

Step2Option1 --> FinalResult1["<b>[FINAL_RESULT_1]</b><br/>[FINAL_DETAILS_1]"]:::node-result-[TYPE]
Step2Option2 --> FinalResult2["<b>[FINAL_RESULT_2]</b><br/>[FINAL_DETAILS_2]"]:::node-result-[TYPE]
```

## AI Implementation Guide

### Step 1: Choose Template
Identify which template best fits the decision structure needed.

### Step 2: Replace Variables  
Systematically replace all bracketed variables with specific content.

### Step 3: Apply Styling
- Use `.mermaid-width` for simple charts (≤ 3 decision points)
- Use `.mermaid-width-wide` for complex charts (> 3 decision points)  
- Always include screen reader alternative text

### Step 4: Add Accessibility
Add text-based decision list using va-additional-info component after the chart:

```html
<va-additional-info trigger="View text-based decision list for [TOPIC]" id="[CHART_ID]-decision-list">

<h4>[Main Question]</h4>

<ul>
<li><strong>[First Decision]</strong>
    <ul>
    <li><strong>[Option 1]</strong> ([Specific details]) → <strong>[Final Outcome 1]</strong></li>
    <li><strong>[Option 2]</strong> ([Specific details]) → <strong>[Final Outcome 2]</strong></li>
    </ul>
</li>
</ul>

</va-additional-info>
```

**Critical**: The text alternative must exactly mirror the visual chart - same decision paths, questions, specific details, outcomes, and capitalization. Do not include "Example:" or "Examples:" labels.

### Step 5: Test and Refine
- Build locally to verify rendering
- Check for merged duplicate outcomes
- Ensure logical flow and clear examples
- Verify text alternative covers all decision paths

## Copy-Paste Ready Example

```html
<div class="mermaid-width-wide">
  {% include mermaid-chart.html 
   id="[CHART_ID]" 
   caption="[CHART_DESCRIPTION]"
   chart="
[PASTE_TEMPLATE_HERE_WITH_VARIABLES_REPLACED]
" %}
</div>
```