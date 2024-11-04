---
layout: component
title: List
intro-text: A list organizes information into discrete sequential sections.
github-title: va-list
research-title: va-list
figma-link: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=199%3A1182&mode=design&t=VfndjwGexPuw9yeV-1
status: use-best-practice
anchors:
  - anchor: Examples
  - anchor: Usage
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

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/list/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

### How this component works

* **Use square list-item-type for unordered lists.** The square list item type is preferred.
* **Two or more items.** Lists with 2 or more items are acceptable.

### Choosing between variations

* **Use unordered lists when the order of the items is not relevant.** List items in unordered lists can be in any order and are indicated with a black square.
* **Use ordered lists for sequential information.** Ordered lists are automatically enumerated by the browser. 
* **Use description lists for groups of related terms and descriptions.** List items parts in definition lists will be connected programmatically.

### Instances of this component in production

{% include component-example.html alt="Unordered lists from VA.gov." file="/images/components/list/unordered-list.png" caption="An example of unordered lists, with nested list items, from a vision care health benefits page." class="x2" %}

{% include component-example.html alt="List in an accordion." file="/images/components/list/unordered-list-in-accordion.png" caption="An example of an unordered list in an Accordion component." class="x2" %}

{% include component-example.html alt="List in a Summary box." file="/images/components/list/unordered-list-in-summary-box.png" caption="An example of an unordered list in a Summary box component." class="x2" %}

{% include component-example.html alt="List with two connected items." file="/images/components/list/unordered-list-with-and.png" caption="An example of an unordered list where items are concatenated using and." class="x2" %}

{% include component-example.html alt="List of appointments in VA.gov." file="/images/components/list/appointments-list.png" caption="An example of an inline list of appointments where each list item is a row containing appointment details." class="x2" %}

{% include component-example.html alt="List of claim letters in VA.gov." file="/images/components/list/claim-letters.png" caption="An example of a list of Claim letters from VA.gov." class="x2" %}

{% include component-example.html alt="List of documents filed in VA.gov." file="/images/components/list/documents-filed.png" caption="An example of a list of documents filed with the VA." class="x2" %}

## Content considerations

{% include content/unordered-list.md %}

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/content-style-guide/bulleted-lists">Refer to the Content style guide for additional guidance for unordered lists</a>

## Accessibility considerations

* **Unique headings and link text.** For complex list items that are comprised of more than one line of content (e.g. header, description, link, etc.) ensure that any headings and link text within the list are unique.
* **Under review: Unordered list items will read out as "black square".** We're reviewing whether this potentially unexpected behavior is problematic for users of screen readers and may adjust the list item style type appropriately in future.

## Related

* [Card]({{ site.baseurl }}/components/card)

{% include _component-checklist.html component_name=page.github-title %}