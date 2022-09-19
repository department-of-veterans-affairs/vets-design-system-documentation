---
layout: component
title: "Privacy Agreement"
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/a/l13oDA7
intro-text: "Used to provide a link to the privacy policy content and provide a confirmation checkbox."
status: use-with-caution-available
web-component: va-privacy-agreement
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Default

{% include storybook-preview.html height="100px" story="components-va-privacy-agreement--default" link_text="va-privacy-agreement" %}

### With Error

{% include storybook-preview.html height="100px" story="components-va-privacy-agreement--with-error" link_text="va-privacy-agreement" %}

## Usage

### When to use Privacy Agreement

Use a Privacy Agreement component where it's required that the privacy policy content page is reviewed.

* **In this context**: Explain the scenario or user context where this component is, or could be, used.
* **In this task**: Explain the user task or tasks where this component is, or could be, used.

### When to consider something else

* **Not in this context**: Explain which scenarios or user context where this component is not, or should not, be used.
* **Not for these tasks**: Explain the user tasks where this component is not, or should not, be used.
* **Use this instead**: Explain when another component should be used instead.

### How this component works

Details the design decisions inherent to the component.

### Behavior

Describe the key interactions for this component. 

**Privacy Policy Link** When clicked, the link will open in a new browser tab. This behavior is identified by an icon with the arrow pointing up and screen reader text "opens in new tab".
**Checkbox Toggle** After reviewing the privacy policy content in a new browser tab, they should select the checkbox confirming that it's been read.

* **Trigger**: What does the user do to start the interaction with this component.
* **Rules**: What rules govern how the component behaves. How does it work?
* **Feedback**: What the user sees, hears, and feels that help them understand the rules.
* **Loops and modes**: Meta rules that govern the interaction.

### Choosing between variations

Help the designer and developer understand when to choose between any variations of this component.

### Placement

Where the component appears visually, and if necessary to clarify, where it may appear in the source code. Can also comment on where the component is not to be placed.

### Design principles

* List of design or UX principles that this component is an example or or adheres to.

### Instances of this component in production

Images with captions that describe different instances of this component being used in production.

<!-- include component-example.html alt="Explain what is in the image." file="/images/components/component-name/filename.png" caption="Describe what this example image is depicting." --> 


This is the Code Usage section. Note that the header is inside this include.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Bulleted list of content related instructions to the designer.
* May be an include is shared with the Content style guide section.

## Accessibility considerations

* Bulleted list of a11y related instructions to the designer and developer.
