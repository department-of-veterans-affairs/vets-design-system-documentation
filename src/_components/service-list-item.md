---
layout: component
title: Service List Item
intro-text: The Service List Item summarizes a benefit or tool. For example, a Service List Item could show the most important details about an appointment, prescription, or benefit. It shows high-level details, offers a link to view more information, and can alert the user to any actions that need to be taken. It is always displayed in a list, as described in the “Help Users to… Manage Benefits and Tools” pattern.
status: use-with-caution-candidate
research-title: Service List Item
figma-link: https://www.figma.com/design/ZIGDfSb8D5YLBdJavzDdqi/AE-Design-Patterns---Service-list?node-id=1-129&t=52qYQM9JQBOPO71q-1
contributors: Lynn Stahl (Agile Six), Adam Whitlock (Ad Hoc), Belle Poopongpanit (Agile Six), Christine Rose Steiffer (Agile Six), Kristen Faiferlick (Ad Hoc)
draft: true
web-component: va-service-list-item
anchors:
  - anchor: Examples
  - anchor: Content considerations
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### With only the required elements (header, status, details)

{% include storybook-preview.html height="400px" story="components-va-service-list-item--minimal-base" link_text="va-service-list minimal base" %}

### With the Critical Action component

{% include storybook-preview.html height="400px" story="components-va-service-list-item--base-with-critical-action" link_text="va-service-list base with Critical Action" %}

### With the optional link

{% include storybook-preview.html height="400px" story="components-va-service-list-item--base-with-optional-link" link_text="va-service-list base with optional link" %}


### With all possible elements

{% include storybook-preview.html height="400px" story="components-va-service-list-item--maximal-base" link_text="va-service-list maximal base" %}

### Terms

* **Benefit**: Aid or assistance provided by VA to Veterans, family members, or caretakers. Examples include health care, education and training, disability compensation, life insurance, and pension.
* **Tool**: A digital product that Veterans, family members, or caretakers use to manage benefits. Examples include appointments, prescriptions, payments, secure messages,  and claims.
* **Service**: A term used to describe both benefits and tools.
* **Service List**: A list of services. The [“Help Users to… Manage Benefits and Tools” pattern]({{ site.baseurl }}/patterns/help-users-to/manage-benefits-and-tools) describes how to build a Service list.
* **Service List Item**: An item in a service list. Each item contains a summary of the benefit or tool, with a link to for the user to get more information. This component explains how to use and build a Service List Item.

### When to use Service List Item

* When you want to show benefits or tools the user is currently enrolled in or has access to.

### When not to use Service List Item

* **When you are representing items that are neither a benefit nor a tool.** Do not use the same visual appearance or structured data to represent items that are not a benefit nor a tool. If you want to group short, related pieces of information that are not benefits or tools, consider using the [Card component]({{ site.baseurl }}/components/card).
* **When you want to put links, radio buttons, or checkboxes in a container.** There are some components that have variations with containers around them. These might look like Service List Items, but they are distinct. Service List Items are exclusively for benefits and tools, offer a brief snapshot of information, and link to another page with more details. The guidance within the [Not a card]({{ site.baseurl }}/components/card#not-a-card) section of the Card component also applies to the Service List Item.
* **When you want to show benefits within a form.** Do not use this component to show benefits or services in an interactive list with checkboxes or other selection methods.
* **When you want to display content in an unordered list.** Content that can be shared with bullet points should use an unordered list. Find more information in the [List component]({{ site.baseurl }}/components/list) and the [Bulleted list style guide]({{ site.baseurl }}/content-style-guide/bulleted-lists).

### Anatomy or layout details

{% include component-example.html alt="An annotated Service List Item, calling out the header, Critical Action, status, details, and link." file="/images/components/service-list-item/annotated-service-list-item-component.png" %}

A Service List Item can have:

* **Header (required)**
  * The header consists of an icon (optional), header text, and chevron. These elements combine to create a link to a page with more details about the benefit or tool. All Service List Items must link to a details page from the header.
  * The icon should only be used when listing VA benefits. The icons should include the [standard icons](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=293-6211&t=h01Z6dAbcelp997f-1) for VA benefits, placed within a circle using the [color]({{ site.baseurl }}/foundation/color-palette#semantic-color-tokens) associated with each benefit.
  * Headers should be visually consistent in each list item within the list. For example, if some list item headers have icons, all list items in the list should have icons.
  * The header has a default, hover, active, focus, and visited state. See details in the [Header states section](#header-states) below.
* **Status (required)**
  * Status must be represented by a gray Tag component.
  * Every benefit or tool in a list has a set of internal states, which are used to track the progress of enrolling in that benefit or using that tool. A status is the way to communicate the item's state to the user (such as Active, Pending, etc).
  * Statuses do not have to mirror internal states in a one-to-one manner. (They can, but they are not required to.) Every state change does not necessarily warrant a status change.
* **Critical Action**
  * The [Critical Action]({{ site.baseurl }}/components/critical-action) component is still under development. It navigates the user to the most direct path to take action on the critical action. Future updates will include adjustments to color contrast, focus states, and more.
* **Details (required)**
  * The details provide users with helpful information, formatted in a “Label: Value” structure (for example, “Approved on: May 5, 2011”).
  * There can be anywhere from one to five lines of “Label: Value” pairs.
* **Link (optional)**
  * Some Service List Items might require an additional link, in addition to the details page linked to from the header and the actionable link offered in the [Critical Action]({{ site.baseurl }}/components/critical-action) component. In these cases, one additional link may be displayed at the bottom of the Service List Item.
The link should use the standard default, hover, focus, active, and visited link states.

### Header states
* **Default**: The link and chevron are the standard vads-color-link.
* **Hover**: The link becomes underlined and both the link and chevron turn to vads-color-link-active. There is no background shading.
* **Focus**: Similar to the default state, but with a yellow outline. The outline is similar to the focus state of action links.
* **Active**: Similar to the default state, but underlined and with a yellow outline. The outline is similar to the focus state of action links.
* **Visited**: Similar to the default state, but the color of the link and chevron turn to vads-color-link-visited once the link has been visited.

{% include component-example.html alt="A table of headers for the Service List Item. There are two columns, one for mobile and one for desktop. The five rows show each of the states described above: default, hover, focus, active and visited." file="/images/components/service-list-item/annotated-service-list-item-header-states.png" %}


## Content considerations
Teams used the Card component before this component existed. When evaluating if your team needs to use Service List Items instead of cards, consider if your content is either a “benefit” or “tool,” as defined in the [Usage](#usage) section.

Statuses should be normalized with the platform content team so that the same terms are used when the same meanings are intended (for example, “pending” versus “in-progress”). The platform content team will define which of those is correct across benefits and tools.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

- Use appropriate heading levels within the Service List Item. Headings within the component are h3 by default, but teams should adjust the heading level if the structure of the page requires them to be a different level.
- Format the optional link to express what it will do. For example, if the link is a [download link]({{ site.baseurl }}/components/link/#download), include the standard download icon. If it takes users to an external site, display the standard "(opens in new tab)" text. See additional accessibility guidance in the [Link]({{ site.baseurl }}/components/link) component.

## Related

Service List Item may be confused with several other components:
* [List]({{ site.baseurl }}/components/list): See [When not to use Service List Item]({{ site.baseurl }}/components/service-list-item#when-not-to-use-service-list-item) for information on when to use a list instead of a Service List Item.
* [Card]({{ site.baseurl }}/components/card): See [When not to use Service List Item]({{ site.baseurl }}/components/service-list-item#when-not-to-use-service-list-item) and [Content considerations]({{ site.baseurl }}/components/service-list-item#content-considerations) for information on when to use a card instead of a Service List Item.

The below components are nested within the Service List Item component:
* [Critical Action]({{ site.baseurl }}/components/critical-action)
* [Tag]({{ site.baseurl }}/components/tag)
* [Link]({{ site.baseurl }}/components/link/)

{% include _component-checklist.html component_name="va-service-list-item" %}