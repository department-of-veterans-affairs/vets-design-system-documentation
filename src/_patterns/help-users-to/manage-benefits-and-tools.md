---
layout: pattern
title: Help users to manage benefits and tools
draft: true
permalink: /patterns/help-users-to/manage-benefits-and-tools
sub-section: help-users-to
intro-text: In order to help users to manage their benefits and tools we have defined this pattern of surfacing important information about both to the user. Users can enroll in benefits from the VA. Once enrolled, a user has active benefits. A user then uses tools from the VA to manage aspects of their benefits.
status: use-with-caution-available
anchors:
  - anchor: Usage
  - anchor: Examples
  - anchor: How to design and build
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples




### Benefits

An incomplete list of potential benefits a Veteran or family member may enroll in:

* Burials
* Careers & Employment
* Disability compensation
* Education
* Housing assistance
* Life Insurance
* Pension
* Vocational rehab (VRE)

### Tools (aka Products)

An incomplete list of tools that a Veteran, family member, or caretaker may use to manage a Veteran's benefits:

* Appointments
* Claims
* Forms
* Letters
* Medical records
* Payments
* Prescriptions
* Secure messages

### Variations

There are 4 variations of a benefit or tool:

1. Base. Header link, status, and one to five lines of detail.
2. Base plus an optional link. This variation adds a link to a non-detail page.
3. Base plus critical information. This variation uses the header link with the (forthcoming) critical information (aka Check Engine Light) component. 
4. Base plus critical information and optional link. All of the above.

## Usage

### When to use this pattern

* **Show benefits the user is currently enrolled in.** Use this pattern when you want to show a user which benefits they are currently enrolled in. 
* **Show benefits the user may enroll in.** Use this pattern when you want to show a user which benefits they may be eligible to enroll in.
* **Show tools the user may use to manage their active benefits and interactions with the VA.** Use this pattern when you want to show the user tools that they can use to manage some aspect of their active benefits or to engage with the VA.

### When not to use this pattern

* **Representing items that are neither a benefit nor a tool.** Do not use the same visual appearance or structured data to represent items that are not a benefit nor a tool. 

## Design Principles

1. **Scannable—limited amount of information per list object.** The job of the list view is to display a summary of the object, not the entire object
2. **Consistency of content and hierarchy**
  * The content should be consistent from object to object meaning the same types of information are present. Example: Every appointment should have the same details (time, date, status, appointment type, etc)
  * The hierarchy of the content should be consistent from service list to service list.  
3. **Consistent implementation of supporting functionality**
  * Sort or Filter should interact the same despite different needs, for example Sort should work the same, even if the way you sort is different (eg. one list can sort by date, another can sort A to Z, but the interaction works the same.) 
  * Pagination shall always be the same
        1. Mobile and web might do this differently, but they should be the same within their specific modality

## How to design and build

Benefits and tools can share certain properties. For the sake of brevity, this pattern will shorten Benefits and tools to Service in order to discuss the display of both in a list an individually.

### Benefits and tools list (aka Service list)

* Lists contain benefits and tools, also known as services.
* The data displayed to users in a service list must add clarity. The list should have more signal than noise.
* The service list view of services should provide a thumbnail or summary of each service, not all possible details. 

### Anatomy or layout details

Each service in a list can have:

* Header
  * Header and chevron create a link. The header and chevron combine to create a link within the object to a detail page. At the moment these are not underlined (this decision will be A/B tested)
  * Headers should be visually consistent in each object and from service list to service list while respective the appropriate header hierarchy in context.
* Status
  * Every service in the list that has an internal state and must have a status.
  * Uses the Tag component by default except for the Read/Unread variation.
* Critical information (aka Check Engine Light)
  * A new component which contains a Link - Action with a background color.
* Details
  * Provides users with helpful information.
  * Should be limited to 5 or less lines of information. 
  * May contain 1 additional link.

#### Status

* Every benefit or tools in a list has a set of internal states, which are used to track the progress of enrolling in that benefit or using that tool.
* A status is the user visible version of a state.
* Statuses do not have to mirror, 1 to 1, internal states. They can, but they are not required to. Every state change does not necessarily warrant a status change.
* Statues must both hide complexity from the user and add clarity.
* Status must be represented by the Tag component except in these specific cases:
  * Read and unread can be communicated via the Status light component (aka Dot)

### How this pattern works

Details the design decisions inherent to the pattern, describes the interactions, and provides usability guidance.

### Components used in this pattern

* Critical information (NEW)
  * Should navigate to the most direct path learn or take action on the critical information.
* Service list item (NEW)
* Status light component (NEW)
    * Used only for read and unread.
* Tag component


### Page templates available for this pattern

List of links to page templates or layouts used to build any pages for this pattern.

## Code usage

A link to the page.code-link, when available.

## Content considerations

* Statuses should be normalized with CAIA so that the same terms are used when the same meanings are intended. For example, pending vs. in-progress. CAIA will define which of those is correct across in the content style guide across benefits and tools.   

## Accessibility considerations

Calling out specific accessibility concerns and considerations.