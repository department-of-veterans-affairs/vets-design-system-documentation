## Choosing between Details, hint text, and Accordion

When providing additional information or clarification to users, it's important to choose the right component for the job. Here's guidance on when to use each option:

### Use hint text when:

* **The clarification is brief and directly related to a specific form field.** Hint text should be short (1-2 sentences) and provide immediate context for what the user should enter.
* **The information is essential for completing the form field correctly.** If most users need this information to successfully complete the field, use hint text rather than hiding it.
* **The clarification can be provided in plain text without special formatting.** Hint text doesn't support rich formatting like links, lists, or emphasis.

**Examples:**
- "Enter your 9-digit Social Security number"
- "Use the format MM/DD/YYYY"
- "This is the email address we'll use to contact you"

### Use Details when:

* **The information is helpful but not essential for all users.** Details allows users to access additional context when they need it without cluttering the interface.
* **The content is closely tied to a specific form field, section, or piece of content.** Use Details for contextual help that relates directly to nearby content.
* **The clarification is brief to moderate in length** (ideally under 500 characters) and **can include some formatting** like links or simple lists.
* **You need to explain why VA asks for certain information.** Use Details to provide transparency about data collection without overwhelming the main flow.
* **The content doesn't warrant its own heading.** If the additional information makes sense under the current heading structure, Details is appropriate.

**Examples:**
- "Why we ask for this information"
- "What if I don't have this document?"
- "How we use your personal information"
- Clarifying edge cases or special situations

### Use Accordion when:

* **You have substantial content that deserves its own heading.** If the additional information is comprehensive enough to warrant a distinct section, use Accordion.
* **You're organizing a series of related items or topics.** Accordions work well for FAQ sections, lists of benefits, or multiple related concepts.
* **The content is more tangentially related** to the main task rather than directly supporting a specific form field or interaction.
* **You need to present multiple options or detailed explanations** that users can explore independently.
* **The content is lengthy, complex, or requires significant formatting** (multiple paragraphs, complex lists, tables, etc.).

**Examples:**
- FAQ sections
- Detailed benefit explanations
- Step-by-step processes
- Lists of eligibility requirements
- Comprehensive troubleshooting guides

### Decision tree

<div class="mermaid-width mermaid-comparison">
  <h4 class="mermaid-comparison__title">Choosing the right component</h4>
  <div class="sr-only">
    If you use a screen reader: Skip the visual flowchart below and jump to the <a href="#text-based-decision-guide">text-based decision guide</a> for the same information in a more accessible format.
  </div>
  {% include mermaid-chart.html 
     id="details-hint-accordion-decision-flowchart" 
     caption="Decision flowchart to help determine whether to use Details, hint text, or Accordion components."
     chart="
flowchart TD
    Start[\"<b>What type of additional information<br/>do you need to provide?</b>\"]:::node-start --> Q1{\"<b>Is this information essential<br/>for completing a form field?</b>\"}:::node-question
    
    %% Essential Information Path
    Q1 --> Essential([\"<b>YES</b><br/>Examples:<br/> Field format requirements,<br/> required input patterns,<br/> validation criteria\"]):::node-answer-primary
    Essential --> ResultHint([\"Use <b>HINT TEXT</b>\"]):::node-result-hint
    
    %% Non-Essential Information Path  
    Q1 --> NonEssential([\"<b>NO</b><br/>Examples:<br/> Background context,<br/> why we ask questions,<br/> help for edge cases\"]):::node-answer-secondary
    NonEssential --> Q2{\"<b>Is this content directly related<br/>to a nearby form field or<br/>specific piece of content?</b>\"}:::node-question
    
    %% Directly Related Path
    Q2 --> DirectlyRelated([\"<b>YES</b><br/>Examples:<br/> Why we ask for this info,<br/> What if scenarios,<br/> Field-specific help\"]):::node-answer-primary
    DirectlyRelated --> Q3{\"<b>Is the content brief<br/>(under 500 characters) and<br/>doesn't need its own heading?</b>\"}:::node-question
    
    Q3 --> Brief([\"<b>YES</b><br/>Examples:<br/> Short explanations,<br/> Simple clarifications,<br/> Brief contextual help\"]):::node-answer-primary
    Brief --> ResultDetails([\"Use <b>DETAILS</b>\"]):::node-result-details
    
    Q3 --> NotBrief([\"<b>NO</b><br/>Examples:<br/> Multi-paragraph content,<br/> Complex explanations,<br/> Detailed processes\"]):::node-answer-secondary
    NotBrief --> ResultAccordion1([\"Use <b>ACCORDION</b>\"]):::node-result-accordion
    
    %% Not Directly Related Path
    Q2 --> NotDirectlyRelated([\"<b>NO</b><br/>Examples:<br/> General FAQs,<br/> Benefit explanations,<br/> Process overviews\"]):::node-answer-secondary
    NotDirectlyRelated --> Q4{\"<b>Does this content deserve<br/>its own heading or is it<br/>part of a series?</b>\"}:::node-question
    
    Q4 --> DeservesHeading([\"<b>YES</b><br/>Examples:<br/> FAQ sections,<br/> Multiple related topics,<br/> Comprehensive guides\"]):::node-answer-primary
    DeservesHeading --> ResultAccordion2([\"Use <b>ACCORDION</b>\"]):::node-result-accordion
    
    Q4 --> NoHeading([\"<b>NO</b><br/>Examples:<br/> Contextual asides,<br/> Optional clarifications\"]):::node-answer-secondary
    NoHeading --> Q5{\"<b>Is the information<br/>really necessary?</b>\"}:::node-question
    
    Q5 --> Necessary([\"<b>YES</b>\"]):::node-answer-primary
    Necessary --> ResultDetails2([\"Use <b>DETAILS</b>\"]):::node-result-details
    
    Q5 --> NotNecessary([\"<b>NO</b>\"]):::node-answer-secondary
    NotNecessary --> ResultRemove([\"<b>CONSIDER REMOVING</b><br/>the information\"]):::node-result-remove

    %% Styling classes
    classDef node-start fill:#0f2027,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef node-question fill:#003e73,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef node-answer-primary fill:#e1f3f8,stroke:#0071bb,stroke-width:2px,color:#0071bb
    classDef node-answer-secondary fill:#f9f9f9,stroke:#71767a,stroke-width:2px,color:#71767a
    classDef node-result-hint fill:#ecf1f7,stroke:#0071bb,stroke-width:3px,color:#0071bb
    classDef node-result-details fill:#ecf5ec,stroke:#00a91c,stroke-width:3px,color:#00a91c
    classDef node-result-accordion fill:#fef6e8,stroke:#ffbe2e,stroke-width:3px,color:#936f38
    classDef node-result-remove fill:#fce4e3,stroke:#d83933,stroke-width:3px,color:#d83933
" %}
</div>

<va-additional-info trigger="View text-based decision guide for choosing components" id="text-based-decision-guide">

<h4>Choosing the right component - Text Guide</h4>

<ol>
<li><strong>Is this information essential for completing a form field?</strong>
    <ul>
    <li><strong>Yes</strong>
      <ul>
      <li>Examples: Field format requirements, required input patterns, validation criteria</li>
      <li><em>Use Hint Text</em></li>
      </ul>
    </li>
    <li><strong>No</strong> → Continue to question 2</li>
    </ul>
</li>

<li><strong>Is this content directly related to a nearby form field or specific piece of content?</strong>
    <ul>
    <li><strong>Yes</strong>
      <ul>
      <li>Examples: Why we ask for this info, What if scenarios, Field-specific help</li>
      <li><strong>Is the content brief (under 500 characters) and doesn't need its own heading?</strong>
        <ul>
        <li><strong>Yes</strong>
          <ul>
          <li>Examples: Short explanations, Simple clarifications, Brief contextual help</li>
          <li><em>Use Details</em></li>
          </ul>
        </li>
        <li><strong>No</strong>
          <ul>
          <li>Examples: Multi-paragraph content, Complex explanations, Detailed processes</li>
          <li><em>Use Accordion</em></li>
          </ul>
        </li>
        </ul>
      </li>
      </ul>
    </li>
    <li><strong>No</strong>
      <ul>
      <li>Examples: General FAQs, Benefit explanations, Process overviews</li>
      <li><strong>Does this content deserve its own heading or is it part of a series?</strong>
        <ul>
        <li><strong>Yes</strong>
          <ul>
          <li>Examples: FAQ sections, Multiple related topics, Comprehensive guides</li>
          <li><em>Use Accordion</em></li>
          </ul>
        </li>
        <li><strong>No</strong>
          <ul>
          <li>Examples: Contextual asides, Optional clarifications</li>
          <li><strong>Is the information really necessary?</strong>
            <ul>
            <li><strong>Yes</strong> → <em>Use Details</em></li>
            <li><strong>No</strong> → <em>Consider removing the information</em></li>
            </ul>
          </li>
          </ul>
        </li>
        </ul>
      </li>
      </ul>
    </li>
    </ul>
</li>
</ol>

</va-additional-info>

1. **Is this information essential for completing a form field?**
   - Yes → Use **hint text**
   - No → Continue to question 2

2. **Is this content directly related to a nearby form field or piece of content?**
   - Yes → Continue to question 3
   - No → Continue to question 4

3. **Is the content brief (under 500 characters) and doesn't need its own heading?**
   - Yes → Use **Details**
   - No → Use **Accordion**

4. **Does this content deserve its own heading or is it part of a series?**
   - Yes → Use **Accordion**
   - No → Use **Details** (if content is contextual) or consider if the information is necessary

### Content length guidelines

| Component | Recommended length | Maximum recommended |
|-----------|-------------------|-------------------|
| **Hint text** | 1-2 sentences | 3 sentences |
| **Details** | 1-3 sentences | 500 characters with spaces |
| **Accordion** | 1+ paragraphs | No specific limit |

### Accessibility considerations

* **Hint text** is always visible and directly associated with form fields, making it immediately available to all users including those using assistive technology.
* **Details and Accordion** both use disclosure patterns that require user interaction, so ensure the trigger text clearly indicates what information will be revealed.
* **Don't hide critical information** behind Details or Accordion components—if the majority of users need the information, make it visible by default or use hint text.