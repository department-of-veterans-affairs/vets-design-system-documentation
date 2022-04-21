---
layout: component
title: "Process list"
status: use-deployed
intro-text: "The process list, also known as the subway map, is used in a static informational context to describe the process to apply for a benefit or to provide tracking information to a user where they are in a given process."
web-component: va-process-list
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
---

## Examples

{% include storybook-preview.html height="300px" story="components-va-process-list--default" %}

## Usage

### When to use a process list

- When users need to see a list of sequential steps.
- In a multi-step process where the user may need to track progress over an extended period.

### When to consider something else

- The list is a checklist.
- The information is not sequential.

### How to use a process list

- Can be used to display up to 20 steps.
- List headings should start with a verb.
- Make headings clear and concise. You can always write more content in paragraphs and other HTML elements below the heading.
- Do not stack.

{% include component-docs.html component_name=page.web-component %}