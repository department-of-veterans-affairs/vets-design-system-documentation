---
layout: component
title: List
intro-text: A list organizes information into discrete sequential sections.
github-title: va-list
research-title: va-list
figma-link-web: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=199%3A1182&mode=design&t=VfndjwGexPuw9yeV-1
status: use-deployed
web: true
mobile-app: false
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

#### Simple unordered and ordered lists

<div class="site-showcase">
  {% include_relative html/lists.html %}
</div>

#### More complex unordered and ordered lists

<div class="site-showcase">
  {% include_relative html/unordered-list-decision-letters.html %}
</div>

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/list/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

### Choosing between variations

* **Use unordered lists when the order of the items is not relevant.** List items in unordered lists can be in any order and are indicated with a black square.
* **Use ordered lists for sequential information.** Ordered lists are automatically enumerated by the browser.
* **Use description lists for groups of related terms and descriptions.** List items parts in definition lists will be connected programmatically.

### Instances of this component in production

{% include component-example.html alt="Unordered lists from VA.gov." file="/images/components/list/unordered-list.png" caption="An example of unordered lists, with nested list items, from a vision care health benefits page." class="x2" %}

{% include component-example.html alt="List in an accordion." file="/images/components/list/unordered-list-in-accordion.png" caption="An example of an unordered list in an Accordion component." class="x2" %}

{% include component-example.html alt="List with two connected items." file="/images/components/list/unordered-list-with-and.png" caption="An example of an unordered list in a Summary box where items are concatenated using and." class="x2" %}

{% include component-example.html alt="List of appointments in VA.gov." file="/images/components/list/appointments-list.png" caption="An example of an inline list of appointments where each list item is a row containing appointment details." class="x2" %}

{% include component-example.html alt="List of claim letters in VA.gov." file="/images/components/list/claim-letters.png" caption="An example of a list of Claim letters from VA.gov." class="x2" %}

{% include component-example.html alt="List of documents filed in VA.gov." file="/images/components/list/documents-filed.png" caption="An example of a list of documents filed with the VA." class="x2" %}

## Code usage

Lists use standard HTML elements (`<ul>`, `<ol>`, and `<dl>`) and do not require a web component. Refer to the [U.S. Web Design System list component](https://designsystem.digital.gov/components/list/) for detailed code usage guidance.

## Content considerations

{% include content/unordered-list.md %}

<va-link-action
  href="{{ site.baseurl }}/content-style-guide/bulleted-lists"
  text="Refer to the Content style guide for additional guidance for unordered lists"
  type="secondary"
></va-link-action>

## Accessibility considerations

* **Unique headings and link text.** For complex list items that are comprised of more than one line of content (e.g. header, description, link, etc.) ensure that any headings and link text within the list are unique.

## Related

* [Card]({{ site.baseurl }}/components/card)

* [Service list item]({{ site.baseurl }}/components/service-list-item)

{% include _component-checklist.html component_name=page.github-title %}
