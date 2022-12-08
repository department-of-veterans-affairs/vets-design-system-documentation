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
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

{% include storybook-preview.html height="300px" story="components-va-process-list--default" link_text="va-process-list" %}

## Usage

### When to use a process list

- **Displaying high-level sequential steps.** Use process lists to create a clear hierarchy and help users easily differentiate between individual steps or stages in a process.
- **For multi-step processes.** In a multi-step process where the user may need to track progress over an extended period.

### When to consider something else

* **Step indicator for forms.**: When you need the user to complete more than one step in a process, usually completing a form, use the [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) component.
* **When showing current status or progress.** Use the [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) component to show the user the current step in a multi-step process.
* **In-page navigation.** Use the [side navigation]({{ site.baseurl }}/components/sidenav) component to display the "sub-navigation" within a section or page of the website.
* **The steps are non-sequential.** Use lists to display text that doesn’t have a clear, logical order to it.
* **The listed content is meant to improve readability of a complex sentence.** Use the ordered and unordered list components to break up sentences and paragraphs with lists. These lists are part of the general content of the page and don’t need the typographical hierarchy or visual impact of the process list.


### How this component works

* **Be thoughtful about the number of steps.** A process list should include between three and ten steps to prevent it from getting too unwieldy or confusing.
* **Do not stack.** Only one instance of this component should appear on a page.
* **Do not mash up this component with other components.** This component should not be combined with an Accordion acting as the header for a step in the process. Content should be edited to fit the step, providing key information, and be visible by default. 

### Placement

The Process list usually appears towards the top of the page after the title and any informational alerts. Calls-to-action to start the application or process that the process list describes can be found above, within (in the case of apply), and below the list.

### Instances of this component in production

{% include component-example.html alt="An example of the process list component on an Education benefits application." file="/images/components/process-list/education-apply-for-education-benefits-application-1995-introduction-2022.png" caption="The Education benefits application form 1995 uses a process list on the introduction page of the application." width="50%" %}

{% include component-docs.html component_name=page.web-component %}

## Content considerations
* **List headings should start with a verb.** Examples include "Prepare", "Apply", "Review", etc.
* **Make headings clear and concise.** You can always write more content in paragraphs and other HTML elements below the heading.
* **Make process step content clear and concise.** Process list should not be a container for many other components and text. Content should be brief and to the point when explaining a step in the process.

## Accessibility considerations

* **Use semantic heading levels.** While our examples uses a `<h3>`, use the appropriate heading level within your page.