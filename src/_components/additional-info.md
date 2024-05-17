---
layout: component
title: Additional info
intro-text: "Additional info makes content easier to scan as it hides information that may not be applicable to all users or situations. We use the Additional info component to situate plain language help at the point of the process where it is most relevant."
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?type=design&node-id=1350%3A22760&mode=design&t=TiJHClaf3VQ6wU6B-1
status: use-deployed
uswds-v3: default
web-component: va-additional-info
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

{% include storybook-preview.html  story="uswds-va-additional-info--default" link_text="va-additional-info v3 default" %}

### No Border

* Adding in the `disable-border` prop removes the left blue border from the expanded state of the component.

{% include storybook-preview.html story="uswds-va-additional-info--no-border" link_text="va-additional-info v3 no border" %}

## Usage

### When to use Additional info

* **Revealing helpful background information**: When you have additional information you want to convey about an application, process, or a step or question in a form that is not critical. This component should be used in instances where a more prominent [Alert]({{ site.baseurl }}/components/alert) would not be appropriate.
* **Clarifying outcomes for an input**: In cases where a person's input can have large or complicated impact on outcomes we use contextual help in Additional info to locate expanded guidance next to the relevant interaction.
* **Information closely tied to an input.** Use this component over an [Accordion]({{ site.baseurl }}/components/accordion) when the content is closely tied to a particular message or input on the screen. If the content is more tangentially related then use an Accordion.
* **Clarifying a form question**: If a form question needs clarification, and that clarification is brief, use Additional info. The lighter design prevents breaking up the visual progression as the user navigates the form. These can also serve as alternative to where accordions feel too heavy. Be sure to review the [hint text guidance]({{ site.baseurl }}/components/form/label#hint-text) for implementation details. If a form is a conversation, Additional info would be considered an aside. (This <a href="https://blog.navapbc.com/structuring-a-complex-eligibility-form-for-healthcare-gov-37d79a5ad6">case study on structuring complex health care questions for healthcare.gov</a> goes into greater detail on how to structure your form as a conversation.)
* **Content that can be organized under the current heading.** If you have additional content that provides context and makes sense under the same heading as the content nearby.
* **Information not applicable to all**: Additional info can hide details that may not be applicable to all users.

### When to consider something else

* **Accordions for a series**: If you have a series of content in the body of a page and outside of a form or tool then an [Accordion]({{ site.baseurl }}/components/accordion) is preferred. For example, if you have a series of questions as part of an FAQ section or a set of options for payment that each have additional details.
* **Too much content**: Only include critical information inside this component. This includes form fields that require a lot of explanation. Link to another page, consider an [Accordion]({{ site.baseurl }}/components/accordion), or shorten the content. Collaborate with a member of CAIA to edit content and explore alternatives.
* **Required content**: If the majority of people need the content to accomplish the main task then it should not be hidden from view.
* **Content organized under a new heading.** If you have enough content that it makes sense to organize under a new heading that does not make sense under the same heading as the content nearby then use an [Accordion]({{ site.baseurl }}/components/accordion).
* **Error messages or other immediate actions**: Do not use this component for error messages or other critical or timely information.
* **Inside Alerts**: Do not use this component inside an [Alert]({{ site.baseurl }}/components/alert). Try the [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable) component instead, especially when the Alert is within the page content and not at the top of the page.
* **Floating in space**: Try to avoid using Additional info outside of the flow of the page, unattached to a section of content or another component. For example, there are instances of Additional info between a h1 and a Card. See [placement](#placement) for more.

## Behavior

The help is triggered by clicking on a uniquely styled text link with a plain language hook. The helper text is revealed with a sliding drawer type animation (like the accordion) and is typically 1-3 short paragraphs. Shorter is better, and references to static content pages is encouraged when the situation is complicated.

### Choosing between variations

Choose the [No border](#no-border) variation when using Additional info inside of a bordered container as the border would be duplicative and unnecessary. Note however that the most common occurrence of this is using this component inside an Alert which is strongly discouraged. Consider instead linking to another page, especially if your content is long or complex, or reducing content.

### Placement

The following are places where Additional info can be used:

* After a header (h2, h3, h4) or paragraph to provide orthogonal details or provide an answer to a common question.
* Within a [Process list]({{ site.baseurl }}/components/process-list) to shorten the length of content within a step.
* Within a [Form]({{ site.baseurl }}/components/form/label#with-additional-info) to provide additional help text.
* Whenever there is a chance to enhance the understanding a user has about a particular choice.

### Design principles

* **Disclosure widget**: The Additional Info component is an example of a [Disclosure widget](https://en.wikipedia.org/wiki/Disclosure_widget), as is the [&lt;details&gt; HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details). Disclosure widgets are sometimes considered examples of [staged or progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/).

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Use a statement (e.g. "Learn more about...") rather than a question (e.g. "What is...?") as a pattern for the title (trigger text) of the component. The question format has confused Veterans in testing when there is an input field related to that question somewhere else in the form. 
* When the component is expanded, the use of Headings (h4-h6), body text, links, ordered lists, and unordered lists are encouraged.

## Accessibility considerations

* The Additional Info component should be validated to meet the WCAG 2.2 AA accessibility guidelines.
* The Additional Info component uses aria-controls and aria-expanded attributes to convey the expand and collapse functionality to assistive technologies.
* Pressing the close button (a element with role of button) must close the Additional Info.
* The link element that acts as the trigger for the drawer to open and close has a role of heading so it can be found in the page. Setting an aria-level is recommended.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Alert]({{ site.baseurl }}/components/alert)

{% include _component-checklist.html component_name=page.web-component %}
