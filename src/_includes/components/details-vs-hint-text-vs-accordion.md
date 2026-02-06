## Choosing between Details, hint text, and Accordion

Choose the right component to help users access additional information without overwhelming the main experience.

### Use hint text when:

* **The information is essential for completing a form field.** Most users need this information to fill out the field correctly.
* **The clarification is brief.** Keep hint text to 1-2 sentences.
* **The information doesn't need formatting.** Hint text is plain text only.

**Examples:** "Enter your 9-digit Social Security number" or "Use MM/DD/YYYY format"

### Use Details when:

* **The information is helpful but not essential.** Users can access context when they need it.
* **The content relates to a nearby form field or section.** Use for contextual help tied to specific content.
* **The content is brief** (under 500 characters) **and doesn't need its own heading.**
* **You need to explain why VA asks for information.** Provide transparency without disrupting the flow.

**Examples:** "Why we ask for this information" or "What if I don't have this document?"

### Use Accordion when:

* **The content deserves its own heading.** Use for substantial information that stands alone.
* **You're organizing multiple related topics.** Accordions work well for FAQ sections or benefit explanations.
* **The content is lengthy or complex.** Use for multiple paragraphs, detailed processes, or formatted content.
* **The information is more general** rather than tied to a specific form field.

**Examples:** FAQ sections, detailed eligibility requirements, or step-by-step guides

### Decision tree

<div class="mermaid-width mermaid-comparison">
  <h4 class="mermaid-comparison__title">Choosing the right component</h4>
  <div class="sr-only">
    If you use a screen reader: Skip the visual flowchart below and jump to the <a href="#text-based-decision-guide">text-based decision guide</a> for the same information in a more accessible format.
  </div>
  {% include mermaid-chart.html 
     id="details-hint-accordion-decision-flowchart" 
     caption="Decision flowchart for choosing between Details, hint text, or Accordion components."
     chart="
flowchart TD
    Start[\"<b>What type of additional information<br/>do you need to provide?</b>\"]:::node-start --> Q1{\"<b>Is this information essential<br/>for completing a form field?</b>\"}:::node-question
    
    Q1 --> Essential([\"<b>YES</b><br/>Field requirements,<br/>input patterns\"]):::node-answer-primary
    Essential --> ResultHint([\"Use <b>HINT TEXT</b>\"]):::node-result-hint
    
    Q1 --> NonEssential([\"<b>NO</b><br/>Background context,<br/>helpful clarifications\"]):::node-answer-secondary
    NonEssential --> Q2{\"<b>Is content related to a<br/>nearby form field or section?</b>\"}:::node-question
    
    Q2 --> DirectlyRelated([\"<b>YES</b><br/>Why we ask questions,<br/>field-specific help\"]):::node-answer-primary
    DirectlyRelated --> Q3{\"<b>Is content brief and<br/>doesn't need a heading?</b>\"}:::node-question
    
    Q3 --> Brief([\"<b>YES</b><br/>Short explanations,<br/>simple clarifications\"]):::node-answer-primary
    Brief --> ResultDetails([\"Use <b>DETAILS</b>\"]):::node-result-details
    
    Q3 --> NotBrief([\"<b>NO</b><br/>Long content,<br/>complex explanations\"]):::node-answer-secondary
    NotBrief --> ResultAccordion1([\"Use <b>ACCORDION</b>\"]):::node-result-accordion
    
    Q2 --> NotDirectlyRelated([\"<b>NO</b><br/>General information,<br/>standalone topics\"]):::node-answer-secondary
    NotDirectlyRelated --> ResultAccordion2([\"Use <b>ACCORDION</b>\"]):::node-result-accordion

    %% Styling classes
    classDef node-start fill:#0f2027,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef node-question fill:#003e73,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef node-answer-primary fill:#e1f3f8,stroke:#0071bb,stroke-width:2px,color:#0071bb
    classDef node-answer-secondary fill:#f9f9f9,stroke:#71767a,stroke-width:2px,color:#71767a
    classDef node-result-hint fill:#ecf1f7,stroke:#0071bb,stroke-width:3px,color:#0071bb
    classDef node-result-details fill:#ecf5ec,stroke:#00a91c,stroke-width:3px,color:#00a91c
    classDef node-result-accordion fill:#fef6e8,stroke:#ffbe2e,stroke-width:3px,color:#936f38
" %}
</div>

<va-details trigger="View text-based decision guide" id="text-based-decision-guide">

<h4>Text-based decision guide</h4>

<ol>
<li><strong>Is this information essential for completing a form field?</strong>
    <ul>
    <li><strong>Yes</strong> → <em>Use hint text</em></li>
    <li><strong>No</strong> → Continue to question 2</li>
    </ul>
</li>

<li><strong>Is content related to a nearby form field or section?</strong>
    <ul>
    <li><strong>Yes</strong> → Continue to question 3</li>
    <li><strong>No</strong> → <em>Use Accordion</em></li>
    </ul>
</li>

<li><strong>Is content brief and doesn't need a heading?</strong>
    <ul>
    <li><strong>Yes</strong> → <em>Use Details</em></li>
    <li><strong>No</strong> → <em>Use Accordion</em></li>
    </ul>
</li>
</ol>

</va-details>

### Content length guidelines

| Component | Recommended length |
|-----------|-------------------|
| **Hint text** | 1-2 sentences |
| **Details** | Under 500 characters |
| **Accordion** | No limit |

### Accessibility note

Don't hide critical information behind Details or Accordion components. If most users need the information, make it visible by default or use hint text.