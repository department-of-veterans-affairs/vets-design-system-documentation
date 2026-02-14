### Choosing the right component for the task

When deciding which component to use, consider how essential the information is and how it relates to nearby content:

* **Essential information for form fields:** Use {% if page.url == '/components/form/label' %}hint text{% else %}[hint text]({{ site.baseurl }}/components/form/label#hint-text){% endif %} for brief, critical information that most users need to complete a field successfully.
* **Helpful context tied to specific content:** Use {% if page.url == '/components/details' %}Details{% else %}[Details]({{ site.baseurl }}/components/details){% endif %} for brief explanations related to nearby form fields or sections that users can access when needed.
* **Substantial standalone information:** Use {% if page.url == '/components/accordion' %}Accordion{% else %}[Accordion]({{ site.baseurl }}/components/accordion){% endif %} for lengthy content that deserves its own heading or multiple related topics like FAQ sections.

### Decision tree

<div class="mermaid-width mermaid-comparison">
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
    Essential --> ResultHint([\"Use <b>HINT TEXT</b>\"]):::node-result-button
    
    Q1 --> NonEssential([\"<b>NO</b><br/>Background context,<br/>helpful clarifications\"]):::node-answer-secondary
    NonEssential --> Q2{\"<b>Is content related to a<br/>nearby form field or section?</b>\"}:::node-question
    
    Q2 --> DirectlyRelated([\"<b>YES</b><br/>Why we ask questions,<br/>field-specific help\"]):::node-answer-primary
    DirectlyRelated --> Q3{\"<b>Is content brief and<br/>doesn't need a heading?</b>\"}:::node-question
    
    Q3 --> Brief([\"<b>YES</b><br/>Short explanations,<br/>simple clarifications\"]):::node-answer-primary
    Brief --> ResultDetails([\"Use <b>DETAILS</b>\"]):::node-result-link
    
    Q3 --> NotBrief([\"<b>NO</b><br/>Long content,<br/>complex explanations\"]):::node-answer-secondary
    NotBrief --> ResultAccordion1([\"Use <b>ACCORDION</b>\"]):::node-result-action
    
    Q2 --> NotDirectlyRelated([\"<b>NO</b><br/>General information,<br/>standalone topics\"]):::node-answer-secondary
    NotDirectlyRelated --> ResultAccordion2([\"Use <b>ACCORDION</b>\"]):::node-result-action
" %}
</div>

<va-details trigger="View text-based decision guide" id="text-based-decision-guide">

<h4>Text-based decision guide</h4>

<ol>
<li><strong>Is this information essential for completing a form field?</strong>
    <ul>
    <li><strong>Yes</strong> (Field requirements, input patterns) → <em>Use hint text</em></li>
    <li><strong>No</strong> (Background context, helpful clarifications) → Continue to question 2</li>
    </ul>
</li>

<li><strong>Is content related to a nearby form field or section?</strong>
    <ul>
    <li><strong>Yes</strong> (Why we ask questions, field-specific help) → Continue to question 3</li>
    <li><strong>No</strong> (General information, standalone topics) → <em>Use Accordion</em></li>
    </ul>
</li>

<li><strong>Is content brief and doesn't need a heading?</strong>
    <ul>
    <li><strong>Yes</strong> (Short explanations, simple clarifications) → <em>Use Details</em></li>
    <li><strong>No</strong> (Long content, complex explanations) → <em>Use Accordion</em></li>
    </ul>
</li>
</ol>

</va-details>
