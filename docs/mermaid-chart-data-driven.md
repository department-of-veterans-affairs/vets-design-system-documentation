# Data-Driven Mermaid Chart Generator

This approach allows charts to be generated from structured JSON data, making it easier for AI tools to create and maintain charts.

## Example: JSON Decision Tree Structure

```json
{
  "chart_id": "link-opening-decision", 
  "title": "Should this link open in a new tab?",
  "width_class": "mermaid-width-wide",
  "caption": "Decision flowchart for determining when links should open in the same window versus a new tab.",
  "nodes": {
    "start": {
      "type": "start",
      "text": "Should this link open in a new tab?"
    },
    "platform": {
      "type": "question", 
      "text": "What platform?"
    },
    "web": {
      "type": "answer-primary",
      "text": "Web",
      "examples": ["Desktop browser", "Mobile browser"]
    },
    "mobile": {
      "type": "answer-secondary", 
      "text": "Mobile App",
      "examples": ["iOS app", "Android app"]
    },
    "web_destination": {
      "type": "question",
      "text": "Where does the link go?"
    },
    "external_site": {
      "type": "answer-primary",
      "text": "External site", 
      "examples": ["Link to another website"]
    },
    "new_tab": {
      "type": "result-button",
      "text": "Open in NEW TAB",
      "details": ["Add '(opens in a new tab)' text", "Use external link variation"]
    }
  },
  "connections": [
    {"from": "start", "to": "platform"},
    {"from": "platform", "to": "web"},
    {"from": "platform", "to": "mobile"}, 
    {"from": "web", "to": "web_destination"},
    {"from": "external_site", "to": "new_tab"}
  ]
}
```

## Jekyll Include for Data-Driven Charts

```liquid
<!-- _includes/mermaid-chart-from-data.html -->
<!-- Usage: {% include mermaid-chart-from-data.html data=page.chart_data %} -->

<div class="{{ include.data.width_class | default: 'mermaid-width' }}">
  {% include mermaid-chart.html 
   id="{{ include.data.chart_id }}" 
   caption="{{ include.data.caption }}"
   chart="
flowchart TD
{% for node_name, node in include.data.nodes %}
    {% capture node_label %}<b>{{ node.text }}</b>{% if node.examples %}<br/>Examples:<br/>{{ node.examples | join: ',<br/>' }}{% endif %}{% if node.details %}<br/>{{ node.details | join: '<br/>' }}{% endif %}{% endcapture %}
    {% if node.type == 'question' %}
    {{ node_name | capitalize }}{\"{{ node_label }}\"}:::node-{{ node.type }}
    {% elsif node.type contains 'answer' or node.type == 'context' %}
    {{ node_name | capitalize }}([\"{{ node_label }}\"]):::node-{{ node.type }}
    {% else %}
    {{ node_name | capitalize }}[\"{{ node_label }}\"]:::node-{{ node.type }}
    {% endif %}{% endfor %}
{% for connection in include.data.connections %}
    {{ connection.from | capitalize }} --> {{ connection.to | capitalize }}
{% endfor %}
" %}
</div>
```

## AI-Friendly Prompts

### For generating new charts:
"Create a decision tree chart using the VA Design System Mermaid standards. Include:
- Start node with main question
- Question nodes (diamond shape) for decision points  
- Answer nodes with examples for context
- Result nodes with appropriate type (button/link/action)
- Use bold text and follow the established node type patterns"

### For updating existing charts:
"Update this Mermaid chart following VA Design System standards:
- Ensure all text uses `<b>` tags for headers
- Add examples to answer nodes where helpful
- Use appropriate node types (:::node-start, :::node-question, etc.)
- Merge duplicate result outcomes
- Follow the established visual hierarchy"