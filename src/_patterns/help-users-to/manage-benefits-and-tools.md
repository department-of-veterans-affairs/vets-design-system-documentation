---
layout: pattern
title: Manage Benefits and Tools
draft: false
permalink: /patterns/help-users-to/manage-benefits-and-tools
aka: Service List
contributors: Lynn Stahl (Agile Six), Adam Whitlock (Ad Hoc), Belle Poopongpanit (Agile Six), Christine Rose Steiffer (Agile Six), Kristen Faiferlick (Ad Hoc)
sub-section: help-users-to
intro-text: Follow this pattern to help users manage their benefits and tools.
figma-link: https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?m=auto&node-id=21042-10&t=eoaTAXv2PGPTU6mE-1
github-title: manage-benefits-and-tools
research-title: Help Users to Manage Benefits and Tools
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Examples
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Research findings
---

## Usage

### Terms

* **Benefit**: Aid or assistance provided by VA to Veterans, family members, or caretakers. Examples include health care, education and training, disability compensation, life insurance, and pension.
* **Tool**: A digital product that Veterans, family members, or caretakers use to manage benefits. Examples include appointments, prescriptions, payments, secure messages,  and claims.
* **Service**: A term used to describe both benefits and tools.
* **Service List**: A list of services. This pattern explains how to design a Service List.
* **Service List Item**: An item in a service list. Each item contains a summary of the benefit or tool, with a link to for the user to get more information. See more details in the [Service List Item]({{ site.baseurl }}/components/service-list-item) component.

### When to use this pattern

* When you want to show benefits or tools the user is currently enrolled in or has access to.
* When you are using the [Service List Item]({{ site.baseurl }}/components/service-list-item) component.

### When not to use this pattern

* **When you are representing items that are not a benefit or a tool.** Do not use the same visual appearance or structured data to represent items that are not a benefit or a tool.
* **When you want to show benefits within a form.** Do not use this pattern to show benefits or services in an interactive list with checkboxes or other selection methods.
* **When you want to display content in an unordered list.** Content that can be shared with bullet points should use an unordered list. Find more information in the [List component]({{ site.baseurl }}/components/list) and the [Bulleted list style guide]({{ site.baseurl }}/content-style-guide/bulleted-lists).
* **When you want to display search results on a global search results page** Content on a search results page should use the [Search Results Template]({{ site.baseurl }}/templates/search-results).

## Design Principles

* **Scannable—limited amount of information per list object**: The job of the list view is to display a summary of the object, not the entire object.
* **Consistency of content and hierarchy**: Content in each list item should be consistent. Each list item shows the same types of information. For example, in a list of appointments, every appointment should have the same details (time, date, status, appointment type, etc.).
* **Consistent supporting functionality**: If used, sort or filter functionality should interact the same. For example, one list might sort items by date. Another sorts items alphabetically. The interaction should work the same though.

## How to design and build

### How this pattern works

This pattern vertically stacks Service List Items to form a list, called a “Service list.” Users can access a page with more details about each list item by clicking or tapping the header. Other elements in the list item all convey more information to the user. Other elements can include the Critical Action component and status tag. Learn more about these elements and their interactivity in the [Service List Item]({{ site.baseurl }}/components/service-list-item) component.

### Display order

* Display list items in an order that best suits the content. Common options include ordering alphabetically or by date. Check with subject matter experts and conduct UX research to decide the display order for your content.

* Display items that have a Critical Action component at the top of the list, regardless of the chosen display order. This helps surface items that need review or action for users.

### Components used in this pattern

* [Service List Item]({{ site.baseurl }}/components/service-list-item)
* [Critical Action]({{ site.baseurl }}/components/critical-action)
* [Tag]({{ site.baseurl }}/components/tag)

## Examples

### Benefits

Below are some potential benefits a Veteran or family member may enroll in, which might use this pattern:

* Burials
* Careers and employment
* Disability compensation
* Education
* Housing assistance
* Life Insurance
* Pension
* Vocational rehabilitation (VRE)

{% include component-example.html alt="A list of benefits a Veteran is currently enrolled in. Two of the benefits have Critical Action components shown, linking the user to a page where they can take important actions." file="/images/patterns/help-users-to/manage-benefits-and-tools/service-list-example.png" caption="An example of how this pattern can be applied to help users navigate and learn about their benefits." class="x2" %}

### Tools

Below are some  tools that a Veteran, family member, or caretaker may use to manage a Veteran’s benefits, which might use this pattern:

* Appointments
* Claims
* Forms
* Letters
* Medical records
* Payments
* Prescriptions
* Secure messages

## Content considerations

Check with the Content Platform team for writing status content. This is especially important for statuses with similar definitions. For example, “pending” and “in-progress” have similar definitions. The Content Platform team will help you decide status content.

## Accessibility considerations

Within the pattern, headings and links should be descriptive and unique. This will help screen reader users navigate through a list of stacked Service List Items.

## Research findings

[Secondary research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/810) suggests users like lists. Users should be able to navigate through lists easily. This pattern still needs direct user testing.
