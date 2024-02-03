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

#### Unordered and ordered lists

<div class="site-showcase">
  {% include_relative html/lists.html %}
</div>

{% include snippet.html content='html/lists.html' %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/breadcrumb/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

### How this component works

* **Use square list-item-type for unordered lists.** The square list item type is preferred.

### Choosing between variations

* **Use unordered lists when the order of the items is not relevant.** List items in unordered lists can be in any order and are indicated with a black square.
* **Use ordered lists for sequential information.** Ordered lists are automatically enumerated by the browser. 
* **Use description lists for groups of related terms and descriptions.** List items parts in definition lists will be connected programmatically.

### Instances of this component in production

{% include component-example.html alt="Unordered lists from VA.gov." file="/images/components/list/unordered-list.png" caption="An example of unordered lists, with nested list items, from a vision care health benefits page." class="x2" %}

{% include component-example.html alt="List of appointments in VA.gov." file="/images/components/list/appointments-list.png" caption="An example of an inline list of appointments where each list item is a row containing appointment details." class="x2" %}

{% include component-example.html alt="List of claim letters in VA.gov." file="/images/components/list/claim-letter-list.png" caption="An example of a list of Claim letters." class="x2" %}

## Content considerations

{% include content/unordered-list.md %}

## Accessibility considerations

* **Unique headings and link text.** For complex list items that are comprised of more than one line of content (e.g. header, description, link, etc.) ensure that any headings and link text within the list are unique.
* **Under review: Unordered list items will read out as "black square".** We're reviewing whether this potentially unexpected behavior is problematic for users of screen readers and may adjust the list item style type appropriately in future.

## Related

* [Card]({{ site.baseurl }}/components/card)
