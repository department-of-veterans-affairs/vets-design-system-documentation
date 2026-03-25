---
layout: component
title: Details
status: use-with-caution-candidate
intro-text: "The Details component reveals optional, supporting information that is not required for most users to complete a task. It is used to provide plain language help at the point where it is most relevant."
figma-link-web: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=42924-290
uswds-v3: default
web-component: va-details
web: true
mobile-app: false
uses_mermaid: true
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="components-va-details--default" link_text="va-details default" %}

### Different widths
Use a reduced width when you need Details to take up less space on the page.

{% include storybook-preview.html story="components-va-details--widths" link_text="va-details widths" %}

## Usage

### When to use Details

* **Revealing helpful background information.** Use this component when you have additional information about an application, process, or form step that isn't critical. Use this component in instances where a more prominent [Alert]({{ site.baseurl }}/components/alert) wouldn't be appropriate.
* **Explaining the impact of a choice.** If a user's answer will significantly affect their results or next steps, use Details to put that explanation right next to the relevant field.
* **Information closely tied to an input.** Use this component over an [Accordion]({{ site.baseurl }}/components/accordion) when the content is closely tied to a particular message or input on the screen. If the content is only loosely related, use an Accordion instead.
* **Clarifying a form question.** If a form question needs clarification, and that clarification is brief, use Details. The lighter design doesn't interrupt the flow of the form. These can also serve as an alternative when accordions feel too heavy or when hint text isn't enough. Be sure to review the [hint text guidance]({{ site.baseurl }}/components/form/label#hint-text) for more information. If your form is a conversation, treat Details as an aside. (This <a href="https://blog.navapbc.com/structuring-a-complex-eligibility-form-for-healthcare-gov-37d79a5ad6">case study on structuring complex health care questions for healthcare.gov</a> goes into greater detail on how to structure your form as a conversation.)
* **Content that can be organized under the current heading.** If you have additional content that provides context and makes sense under the same heading as the content nearby.
* **Information not applicable to all.** The Details component can hide information that doesn't apply to all users.

### When to consider something else

* **Accordions for a series.** If you have a series of content in the body of a page and outside of a form or tool, use an [Accordion]({{ site.baseurl }}/components/accordion) instead. For example, a series of FAQ questions or a set of payment options that each have additional information.
* **Too much content.** Only include critical information inside this component. This includes form fields that require a lot of explanation. Link to another page, consider an [Accordion]({{ site.baseurl }}/components/accordion), or shorten the content. Collaborate with a member of the Content and Information Architecture (IA) team to edit content and explore alternatives.
* **Required content.** If most people need the content to accomplish the main task, don't hide it from view.
* **Content organized under a new heading.** If the content warrants a new heading that doesn't belong under the same heading as nearby content, use an [Accordion]({{ site.baseurl }}/components/accordion) instead.
* **Error messages or other immediate actions.** Don't use this component for error messages or other critical or timely information.
* **Inside Alerts.** Use this component inside an [Alert]({{ site.baseurl }}/components/alert) only as a last resort and if approved in the Collaboration Cycle. Instead use the [Alert - Expandable]({{ site.baseurl }}/components/alert/alert-expandable) component, especially when the Alert is within the page content and not at the top of the page.
* **Floating in space.** Try to avoid using Details outside of the flow of the page, unattached to a section of content or another component. See [placement](#placement) guidance on this page for more information.

{% include content/details-vs-hint-text-vs-accordion.md %}

### How this component works

The Details component uses native HTML `<details>` and `<summary>` elements, which provide several advantages over JavaScript-based implementations:

* **Searchable and discoverable content.** Browser search (Ctrl+F or Cmd+F) can find text inside collapsed Details, and search engines can index the content for better search engine optimization (SEO).
* **Better performance and reliability.** This component requires no JavaScript for basic functionality, improving load times and ensuring content works even when JavaScript fails.
* **Enhanced accessibility.** Native semantic meaning provides better assistive technology support without additional ARIA attributes, following web standards universally supported across browsers.

### Placement

You can use Details in these places:

* After a header (h2, h3, or h4) or paragraph to provide supplementary information or answer a common question
* Within a [Process list]({{ site.baseurl }}/components/process-list) to shorten the length of content within a step
* Within, or at the end, of a [Form]({{ site.baseurl }}/components/form/label#with-details) to provide additional help text
* When you need to help users understand a particular choice

**Note:** Placement of Details doesn't change the [content considerations](#content-considerations) for this copmonent.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **Use a statement, rather than a question.** Use a statement (like "Why we ask for this information") rather than a question (like "Why does VA ask for this information?") for the label of the component. Framing help text as questions can confuse people who expect questions to ask for their input. Keep titles to a single sentence or sentence fragment with no ending punctuation.
* **Limit the amount of expanded content.** Limit content to fewer than 500 characters (with spaces) when possible. If you need to provide more information, use 1 or more [Accordions]({{ site.baseurl }}/components/accordion) instead. You can also include a brief overview in Details with a link to a page that has more detail. Collaborate with a member of the Content and Information Architecture team to edit content and explore alternatives.
* **Use lists in expanded content as needed.** Use numbered (ordered) and bulleted (unordered) lists to make content easier to scan.

## Accessibility considerations

* **Wrap content in HTML elements.** Place all text content inside `va-details` within an appropriate HTML element such as `<p>`, `<span>`, or `<div>`. Some screen readers, particularly NVDA, may ignore unwrapped plain text. For example, use `<p>This is the content.</p>` instead of placing text directly inside the component without a wrapper element.
* **Don't add ARIA roles or state attributes.** The Details component uses the `<details>` HTML element that exposes expanded/collapsed state and interactive behavior natively. Adding any `role="button"` or `aria-expanded` is redundant and can create conflicting announcements in assistive technology.
* **Native keyboard interaction.** Users can tab to the component and toggle it open or closed with Enter or Space. If the component contains interactive elements, the next Tab keypress moves focus to those elements.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Alert]({{ site.baseurl }}/components/alert)

{% include _component-checklist.html component_name=page.web-component %}
