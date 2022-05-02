---
layout: component
title: Additional info
status: use-deployed
intro-text: "Additional info makes content easier to scan as it hides information that may not be applicable to all users or situations."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
web-component: va-additional-info
---

## Examples

### Default

{% include storybook-preview.html story="components-va-additional-info--default" link_text="va-additional-info" %}

### No Border

* Adding in the `disable-border` prop removes the left blue border from the expanded state of the component.

{% include storybook-preview.html story="components-va-additional-info--no-border" link_text="va-additional-info" %}

## Usage

### When to use Additional info

* **Revealing helpful background information**: When you have additional information you want to convey about an application, process, or a step or question in a form that is not critical. This component should be used in instances where a more prominent [Alert]({{ site.baseurl }}/components/alert) would not be appropriate.
* **Clarifying outcomes for an input**: In cases where a person's input can have large or complicated impact on outcomes we use contextual help in Additional info to locate expanded guidance next to the relevant interaction.
* **Clarifying a form question**: If a form question needs clarification, and that clarification is brief, use Additional info. If a form is a conversation, Additional info would be considered an aside. (This <a href="https://blog.navapbc.com/structuring-a-complex-eligibility-form-for-healthcare-gov-37d79a5ad6">case study on structuring complex health care questions for healthcare.gov</a> goes into greater detail on how to structure your form as a conversation.)
* **Information not applicable to all**: Additional info can hide details that may not be applicable to all users.

### When to consider something else

* **Accordions for a series**: If you have a series of content in the body of a page and outside of a form or tool then an [Accordion]({{ site.baseurl }}/components/accordion) is preferred. For example, if you have a series of questions as part of an FAQ section or a set of options for payment that each have additional details. 
* **Too much content**: You should not try to put multiple paragraphs inside Additional info. This includes form fields that require a lot of explanation. Link to another page, consider an [Accordion]({{ site.baseurl }}/components/accordion), or shorten the content.
* **Required content**: If the majority of people need the content to accomplish the main task then it should not be hidden from view.
* **Error messages or other immediate actions**: Do not use this component for error messages or other critical or timely information.
* **Floating in space**: Try to avoid using Additional info outside of the flow of the page, unattached to a section of content or another component. For example, there are instances of Additional info between a h1 and a Card. See [placement](#placement) for more.

### Behavior

The help is triggered by clicking on a uniquely styled text link with a plain language hook. The helper text is revealed with a sliding drawer type animation (like the accordion) and is typically 1-3 short paragraphs. Shorter is better, and references to static content pages is encouraged when the situation is complicated.

### Choosing between variations

Choose the [No border](#no-border) variation when using Additional info inside of an [Alert]({{ site.baseurl }}/components/Alert) as the border would be duplicative and unnecessary. However, consider not using this component inside of an Alert and instead linking to another page, especially if your content is long or complex.

### Placement

The following are places where Additional info can be used:

* After a header (h2, h3, h4) or paragraph to provide orthogonal details or provide an answer to a common question.
* Below a [primary button]({{ site.baseurl }}/components/button) to provide context about the action the button will take or to provide instructions in another language.
* Within a [Process list]({{ site.baseurl }}/components/process-list) to shorten the length of content within a step.
* Within a [Form]({{ site.baseurl }}/components/form) to provide additional help text.
* Whenever there is a chance to enhance the understanding a user has about a particular choice.

### Design principles

* **Disclosure widget**: The Additional Info component is an example of a [Disclosure widget](https://en.wikipedia.org/wiki/Disclosure_widget), as is the [&lt;details&gt; HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details). Disclosure widgets are sometimes considered examples of [staged or progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/).

### Instances of this component in production

#### Revealing helpful background information in a form 

_The following example depicts how to use contextual help to describe a medical condition if the user is unsure what to call it._

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <h5>Closed (default)</h5>
    <img src="/images/additional-info-closed.png">
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <h5>Open</h5>
    <img src="/images/additional-info-open.png">
  </div>
</div>

Most VA forms have a large amount of instructional text that tries to make VA processes, or the requirements of the application process clear. Unfortunately they are frequently several pages of tiny type that the person has to read and retain. Much of it may not even be relevant to that specific person’s situation. We use the Additional info component to situate plain language help at the point of the process where it is most relevant. For example, a group of three inputs that make sense in a particular order, and the middle one has some nuance to it.



{% include component-docs.html component_name=page.web-component %}

## Content considerations

* Use a statement (e.g. "Learn more about...") rather than a question (e.g. "What is...?") as a pattern for the title (trigger text) of the component. The question format has confused Veterans in testing when there is an input field related to that question somewhere else in the form. 
* When the component is expanded, the use of Headings (h4-h6), body text, links, ordered lists, and unordered lists are encouraged.

## Accessibility considerations

* The Additional Info component should be validated to meet the WCAG 2.1 AA accessibility guidelines.
* The Additional Info component uses aria-controls and aria-expanded attributes to convey the expand and collapse functionality to assistive technologies.
* Pressing the close button (a element with role of button) must close the Additional Info.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Alert]({{ site.baseurl }}/components/alert)
* [Content presentation - Expandable content]({{ site.baseurl }}/patterns/content-presentation#expandable-content)