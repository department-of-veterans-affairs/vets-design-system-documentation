---
layout: pattern
title: Manage benefits and tools
draft: true
permalink: /patterns/help-users-to/manage-benefits-and-tools
sub-section: help-users-to
intro-text: Follow this pattern to help users manage their benefits and tools.
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: How to design and build
  - anchor: Examples
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Research findings
---

## Usage

### Terms

* **Benefit**: Aid or assistance provided by VA to Veterans, family members, or caretakers. Examples include health care, education and training, disability compensation, life insurance, and pension.
* **Tool**: A digital product that Veterans, family members, or caretakers use to manage benefits. Examples include appointments, prescriptions, payments, secure messages,  and claims.
* **Service**: A term used to describe both benefits and tools.
* **Service list**: A list of services. This pattern articulates how to design a Service list.
* **Service list item**: An item in a service list. Each item contains a summary of the benefit or tool, with a link to for the user to get more information. See more details in the Service list item component[link].

### When to use this pattern

* **When you are using the Service list item component[link].** 
* **When you want to show benefits or tools the user is currently enrolled in or has access to.**

### When not to use this pattern

* **When you are representing items that are neither a benefit nor a tool. Do not use the same visual appearance or structured data to represent items that are not a benefit nor a tool.**
* **When you want to show benefits within a form.** Do not use this pattern to show benefits or services in an interactive list with checkboxes or other selection methods.
* **When you want to display content in an unordered list.** Content that can be shared with bullet points should use an unordered list. Find more information in the [List component](https://design.va.gov/components/list) and the [Bulleted list style guide](https://design.va.gov/content-style-guide/bulleted-lists).

## Design Principles

1. **Scannable—limited amount of information per list object.** The job of the list view is to display a summary of the object, not the entire object.
2. **Consistency of content and hierarchy**
  * The content should be consistent from item to item in the list and show the same types of information in each list item. For example, in a list of appointments, every appointment should have the same details (time, date, status, appointment type, etc.).
3. **Consistent implementation of supporting functionality**
  * If used, sort or filter functionality should interact the same despite different needs. For example, one list might sort items by date while another sorts items alphabetically, but the interaction should work the same. 

## How to design and build

### How this pattern works

This pattern vertically stacks Service list items to form a list, called a “Service list.” As noted in the Service list item component[link], the user can access a page with more details about each list item by clicking or tapping on the header. Various other elements of the list item–such as a Critical information component, Status light component, and status–all convey additional information to the user. View more information about these elements and their interactivity in the Service list item component.

### Display order

List items should be displayed in an order that best suits the content. Common options include ordering alphabetically or by date. Check with subject matter experts and consider running usability studies to confirm the most appropriate display order for your content.

Note that when list items include a Critical information component[link] or Status light component[link], these items should be displayed at the top of the list, regardless of the chosen display order. This avoids burying items that need review or action at the bottom of a list or on a subsequent page. 

### Components used in this pattern

* Service list item (NEW)
* Critical information (NEW)
* [Tag component](https://design.va.gov/components/tag])

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

## Code usage

A link to the page.code-link, when available.

## Content considerations

* Statuses should be normalized with CAIA so that the same terms are used when the same meanings are intended (for example, "pending" versus "in-progress"). CAIA will define which of those is correct across across benefits and tools.   

## Accessibility considerations

Review the accessibility considerations for the Service list component[link].

## Research findings

[Secondary research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/810) suggests that users view lists positively and should be able to navigate through them with relative ease. This particular pattern has not yet been tested directly with users.