---
layout: component
title: Details
intro-text: "Details makes content easier to scan as it hides information that may not be applicable to all users or situations. We use the Details component to situate plain language help at the point of the process where it is most relevant."
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1350%3A22760&mode=design&t=TiJHClaf3VQ6wU6B-1
uswds-v3: default
web-component: va-details
web: true
mobile-app: false
uses_mermaid: true
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html  story="uswds-va-details--default" link_text="va-details v3 default" %}

## Usage

### When to use Details

* **Revealing helpful background information**: When you have additional information you want to convey about an application, process, or a step or question in a form that is not critical. This component should be used in instances where a more prominent [Alert]({{ site.baseurl }}/components/alert) would not be appropriate.
* **Clarifying outcomes for an input**: In cases where a person's input can have large or complicated impact on outcomes we use contextual help in Details to locate expanded guidance next to the relevant interaction.
* **Information closely tied to an input.** Use this component over an [Accordion]({{ site.baseurl }}/components/accordion) when the content is closely tied to a particular message or input on the screen. If the content is more tangentially related then use an Accordion.
* **Clarifying a form question**: If a form question needs clarification, and that clarification is brief, use Details. The lighter design prevents breaking up the visual progression as the user navigates the form. These can also serve as alternative to where accordions feel too heavy. Be sure to review the [hint text guidance]({{ site.baseurl }}/components/form/label#hint-text) for implementation details. If a form is a conversation, Details would be considered an aside. (This <a href="https://blog.navapbc.com/structuring-a-complex-eligibility-form-for-healthcare-gov-37d79a5ad6">case study on structuring complex health care questions for healthcare.gov</a> goes into greater detail on how to structure your form as a conversation.)
* **Content that can be organized under the current heading.** If you have additional content that provides context and makes sense under the same heading as the content nearby.
* **Information not applicable to all**: Details can hide details that may not be applicable to all users.

### When to consider something else

* **Accordions for a series**: If you have a series of content in the body of a page and outside of a form or tool then an [Accordion]({{ site.baseurl }}/components/accordion) is preferred. For example, if you have a series of questions as part of an FAQ section or a set of options for payment that each have additional details.
* **Too much content**: Only include critical information inside this component. This includes form fields that require a lot of explanation. Link to another page, consider an [Accordion]({{ site.baseurl }}/components/accordion), or shorten the content. Collaborate with a member of the Content and IA team to edit content and explore alternatives.
* **Required content**: If the majority of people need the content to accomplish the main task then it should not be hidden from view.
* **Content organized under a new heading.** If you have enough content that it makes sense to organize under a new heading that does not make sense under the same heading as the content nearby then use an [Accordion]({{ site.baseurl }}/components/accordion).
* **Error messages or other immediate actions**: Do not use this component for error messages or other critical or timely information.
* **Inside Alerts**: Use this component inside an [Alert]({{ site.baseurl }}/components/alert) only as a last resort and if approved in the Collaboration Cycle. Instead use the [Alert - Expandable]({{ site.baseurl }}/components/alert/alert-expandable) component, especially when the Alert is within the page content and not at the top of the page.
* **Floating in space**: Try to avoid using Details outside of the flow of the page, unattached to a section of content or another component. For example, there are instances of Details between a h1 and a Card. See [placement](#placement) for more.

{% include content/details-vs-hint-text-vs-accordion.md %}

## Behavior

The Details component uses native HTML `<details>` and `<summary>` elements, which provides several advantages over JavaScript-based implementations:

* **Searchable and discoverable content**: Browser search (Ctrl+F or Cmd+F) can find text inside collapsed Details, and search engines can index the content for better SEO.
* **Better performance and reliability**: No JavaScript required for basic functionality, improving load times and ensuring content works even when JavaScript fails.
* **Enhanced accessibility**: Native semantic meaning provides better assistive technology support without additional ARIA attributes, following web standards universally supported across browsers.

### Placement

The following are places where Details can be used:

* After a header (h2, h3, h4) or paragraph to provide orthogonal details or provide an answer to a common question.
* Within a [Process list]({{ site.baseurl }}/components/process-list) to shorten the length of content within a step.
* Within, or at the end, of a [Form]({{ site.baseurl }}/components/form/label#with-details) to provide additional help text. 
* Whenever there is a chance to enhance the understanding a user has about a particular choice.

**Note:** Placement does not alter [content considerations](#content-considerations) in any way.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **Use a statement, rather than a question.** Use a statement (like "Why we ask for this information") rather than a question (like "Why does VA ask for this information?") for the title (trigger text) of the component. Because we use questions to gather information from people in our forms, structuring additional information as questions as well can cause confusion. Keep titles to a single sentence or sentence fragment with no ending punctuation.
* **Limit the amount of expanded content.** Limit content to fewer than 500 characters (with spaces) when possible. If you need to provide more information, consider using one or more [Accordions]({{ site.baseurl }}/components/accordion) instead or providing a brief overview in the Details component with a link to another page with more information. Collaborate with a member of the Content and Information Architecture team to edit content and explore alternatives.
* **Use lists in expanded content as needed.** To make content easier to scan, we encourage you to use numbered (also called "ordered") and bulleted (also called "unordered") lists as needed.

## Accessibility considerations

<!-- TO DO: Review accessibility guidance -->
* The Details component should be validated to meet the WCAG 2.2 AA accessibility guidelines.
* The Details component uses aria-controls and aria-expanded attributes to convey the expand and collapse functionality to assistive technologies.
* Pressing the close button (a element with role of button) must close the Details.
* The link element that acts as the trigger for the drawer to open and close has a role of heading so it can be found in the page. Setting an aria-level is recommended.
* **Wrap content in HTML elements.** All text content inside `va-details` must be wrapped in an appropriate HTML element such as `<p>`, `<span>`, or `<div>`. Some screen readers, particularly NVDA, may ignore unwrapped plain text. For example, use `<p>This is the content.</p>` instead of placing text directly inside the component without a wrapper element.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Alert]({{ site.baseurl }}/components/alert)

{% include _component-checklist.html component_name=page.web-component %}