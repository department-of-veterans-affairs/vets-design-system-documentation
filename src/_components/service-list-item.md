---
layout: component
title: Service list item
intro text: The Service list item component is used to show a brief summary of a benefit or tool. For example, a Service list item could show the most important details about an appointment, prescription, or benefit. It shows high-level details, offers a link to view more information, and can alert the user to any actions that need to be taken. It is always displayed in a list, as described in the  “Help users to… Manage benefits and tools” pattern[link]. 
status: Use with caution: Available
research-title: Service list item
figma-link: https://www.figma.com/design/ZIGDfSb8D5YLBdJavzDdqi/AE-Design-Patterns---Service-list?node-id=1-129&t=52qYQM9JQBOPO71q-1
Contributors: Lynn Stahl (Agile Six), Adam Whitlock (Ad Hoc), Belle Poopongpanit (Agile Six), Christine Rose Steiffer (Agile Six), Kristen Faiferlick (Ad Hoc)
web-component: va-service-list-item
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

### With only the required elements (header, status, details)

[Alt text: A set of information—designed to be shown within a list—that contains a header, a status tag, and one set of data formatted as a “Label: Value” pair.]

### With the Critical information component

[Alt text: A set of information—designed to be shown within a list—that contains a header, a bright call to action, a status tag, and four sets of data formatted as “Label: Value” pairs.]

### With the optional link

[Alt text: A set of information—designed to be shown within a list—that contains a header, a status tag, four sets of data formatted as “Label: Value” pairs, and a link.]

### With all possible additions 

[Alt text: A set of information—designed to be shown within a list—that contains a header, a bright call to action, a status tag, four sets of data formatted as “Label: Value” pairs, and a link.]

## Usage

### Terms

* **Benefit**: Aid or assistance provided by VA to Veterans, family members, or caretakers. Examples include health care, education and training, disability compensation, life insurance, and pension.
* **Tool**: A digital product that Veterans, family members, or caretakers use to manage benefits. Examples include appointments, prescriptions, payments, secure messages,  and claims.
* **Service**: A term used to describe both benefits and tools.
* **Service list**: A list of services. The “Help users to… Manage benefits and tools” pattern[link] describes how to build a Service list.
* **Service list item**: An item in a service list. Each item contains a summary of the benefit or tool, with a link to for the user to get more information. This component explains how to use and build a Service list item.

### When to use Service list item

* **When you want to show benefits or tools the user is currently enrolled in or has access to.** 

### When not to use Service list item

* **When you are representing items that are neither a benefit nor a tool.** Do not use the same visual appearance or structured data to represent items that are not a benefit nor a tool. If you want to group short, related pieces of information that are not benefits or tools, consider using the [Card component](https://design.va.gov/components/card).
* **When you want to put links, radio buttons, or checkboxes in a container.** There are some components that have variations with containers around them. These might look like Service list items, but they are distinct. Service list items are exclusively for benefits and tools, offer a brief snapshot of information, and link to another page with more details. The guidance within the [Not a card](https://design.va.gov/components/card#not-a-card) section of the Card component also applies to the Service list item.
* **When you want to show benefits within a form.** Do not use this component to show benefits or services in an interactive list with checkboxes or other selection methods.
* **When you want to display content in an unordered list.** Content that can be shared with bullet points should use an unordered list. Find more information in the [List component](https://design.va.gov/components/list) and the [Bulleted list style guide](https://design.va.gov/content-style-guide/bulleted-lists).

### Anatomy or layout details

[Alt text: An annotated Service list item, calling out the header, critical information, status, details, and link.] 

A Service list item can have:

* Header (required)
  * The header consists of an icon (optional), header text, and chevron. These elements combine to create a link to a page with more details about the benefit or tool. All Service list items must link to a details page from the header.
Headers should be visually consistent in each list item within the list. For example, if some list item headers have icons, all list items in the list should have icons.
  * The header has a default, hover, active, focus, and visited state. See details in the Header states section below.
* Status (required)
  * Status must be represented by a gray Tag component.
  * Every benefit or tool in a list has a set of internal states, which are used to track the progress of enrolling in that benefit or using that tool. A status is the way to communicate the item's state to the user (such as Active, Pending, etc).
  * Statuses do not have to mirror internal states in a one-to-one manner. (They can, but they are not required to.) Every state change does not necessarily warrant a status change.
* Critical information 
  * This is a new component that is currently being developed. It navigates the user to the most direct path to take action on the critical information.
* Details (required)
  * The details provide users with helpful information, formatted in a “Label: Value” structure (for example, “Approved on: May 5, 2011”).
There can be anywhere from one to five lines of “Label: Value” pairs.
* Link (optional)
  * Some service list items might require an additional link, in addition to the details page linked to from the header and the actionable link offered in the Critical information component. In these cases, one additional link may be displayed at the bottom of the Service list item. 
The link should use the standard default, hover, focus, active, and visited link states.

### Header states
* Default: The link and chevron are the standard vads-color-link. 
* Hover: The link becomes underlined and both the link and chevron turn to vads-color-link-active. There is no background shading.
* Focus: Similar to the default state, but with a yellow outline. The outline is similar to the focus state of action links. 
* Active: Similar to the default state, but underlined and with a yellow outline. The outline is similar to the focus state of action links. 
* Visited: Similar to the default state, but the color of the link and chevron turn to vads-color-link-visited once the link has been visited.

[Alt text: A table of headers for the Service list item. There are two columns, one for mobile and one for desktop. The five rows show each of the states described above: default, hover, focus, active and visited.]

## Code usage

(Coming soon)

## Content considerations
Before the development of this component, the Card component was used to accomplish similar functions. When evaluating if your team needs to use Service list items instead of cards, consider if your content is either a “benefit” or “tool,” as defined in the Usage[link] section.
Statuses should be normalized with CAIA so that the same terms are used when the same meanings are intended (for example, “pending” versus “in-progress”). CAIA will define which of those is correct across benefits and tools.

## Accessibility considerations 

See the accessibility concerns section of the following components:
* [Card](https://design.va.gov/components/card#accessibility-considerations)
* [List](https://design.va.gov/components/list#accessibility-considerations)
* [Link](https://design.va.gov/components/link/#accessibility-considerations)
* [Link - Action](https://design.va.gov/components/link/action#accessibility-considerations)
* [Tag](https://design.va.gov/components/tag#accessibility-considerations)

## Related

Service list item may be confused with several other components:
* [List](https://dev-design.va.gov/3749/components/list): See When not to use Service list item[link] for information on when to use a list instead of a Service list item.
* [Card](https://dev-design.va.gov/3749/components/card): See When not to use Service list item[link] and Content considerations[link] for information on when to use a list instead of a Service list item.

The below components are nested within the Service list item component:
* Critical information (NEW)
* [Tag](https://design.va.gov/components/tag)
* [Link](https://design.va.gov/components/link/)

## Component checklist [format as an accordion; example]
Maturity
Guidance - Examples, usage, code usage, content considerations, and accessibility considerations are all complete.
Research - VFS team conducted research on this component which is linked from this page.
Stability - Component has been in production for more than 3 months with no significant issues found.
 Adoption - Multiple teams have adopted this component.
Accessibility
Code assets
​​Variations - Storybook includes all variations (style, size, orientation, optional iconography, selection, error state, etc.)
Responsive - Component depicted in all responsive breakpoints.
Interactive states - Includes all interactive states that are applicable (hover, active, focus, keyboard focus, disabled).
Tokens - All design attributes (color, typography, layout, etc.) are available as tokens.
Internationalization - Describes i18n attributes.
Visual assets
Variations - Sketch library includes all variations (style, size, orientation, optional iconography, selection, error state, etc.)
Responsive - Component designed to work in all responsive breakpoints.
Interactive states - Includes all interactive states that are applicable (hover, active, focus, keyboard focus, disabled).
Tokens - All design attributes (color, typography, layout, etc.) are available as tokens.