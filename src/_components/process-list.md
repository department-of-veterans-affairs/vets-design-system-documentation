---
layout: component
title: "Process list"
intro-text: "The process list, also known as the subway map, is used in a static informational context to describe the process to apply for a benefit or to provide tracking information to a user where they are in a given process."
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=35%3A169&mode=design&t=J32RmU6Fjbjuh9bD-1
status: use-deployed
uswds-v3: default
web-component: va-process-list
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html height="605px" story="uswds-va-process-list--default" link_text="va-process-list default" %}

### Status

{% include storybook-preview.html height="350px" story="uswds-va-process-list--status" link_text="va-process-list status" %}

### Header Size

{% include storybook-preview.html height="375px" story="uswds-va-process-list--header-size" link_text="va-process-list header size" %}

### Custom Sizing

{% include storybook-preview.html height="300px" story="uswds-va-process-list--custom-sizing" link_text="va-process-list custom sizing" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/process-list/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

#### Additional uses of a process list

* **For multi-step processes.** In a multi-step process where the user may need to track progress over an extended period.

#### Additional reasons to consider something else

* **When instructing users to take specific actions that don't require explanation, not describing high-level steps.** This component isn't appropriate for a list of instructions such as "Click the login button" or "Right-click and select Save As" that don't require any additional description.

### How this component works

* **Be thoughtful about the number of steps.** A process list should include between three and ten steps to prevent it from getting too unwieldy or confusing.
* **Do not stack.** Only one instance of this component should appear on a page.
* **Do not mash up this component with other components.** The functionality of this component should not be combined with the functionality for other components. For example, using an Accordion to act as the header for a step in the process would be inappropriate usage.. Content should be edited to fit the step, provide key information, and be visible by default. Use of the [additional info]({{ site.baseurl }}/components/additional-info#within-a-process-list) component to condense content within a step is permissible. 
* **Each step must have visible content.** Each step should have both a heading and content that helps describe the step in more detail. Do not collapse or hide all content within a step. An explanation of the step is minimally required.

### Placement

The Process list appears after a start form link on the form [Introduction page]({{ site.baseurl }}/templates/forms/introduction#process-list). Additional calls-to-action to start the application or process that the process list describes can be found within (in the case of apply) and below the list.

### Instances of this component in production

{% include component-example.html alt="An example of the process list component on an Education benefits application." file="/images/components/process-list/education-apply-for-education-benefits-application-1995-introduction-2022.png" caption="The Education benefits application form 1995 uses a process list on the introduction page of the application." width="50%" %}

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **List headings should start with a verb.** Examples include "Prepare", "Apply", "Review", etc.
* **Make headings clear and concise.** You can always write more content in paragraphs and other HTML elements below the heading.
* **Make process step content clear and concise.** Process list should not be a container for many other components and text. Use plain language and briefly explain the step in the process.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/process-list/#accessibility-process-list">Refer to the U.S. Web Design System for accessibility guidance</a>

### Additional accessibility considerations for VA

* **Don't use headings alone.** Each step should have both a heading and content that helps describe the step in more detail.

{% include _component-checklist.html component_name=page.web-component %}