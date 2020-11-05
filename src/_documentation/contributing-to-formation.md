---
layout: default
title: Contributing to the VA.gov Design System
anchors:
  - anchor: How to contribute
  - anchor: Modifying a component
  - anchor: Removing a component
---

# Contributing to the VA.gov Design System

<div class="va-introtext">
How to propose, amend, or retire components.
</div>

## How to contribute

The following steps detail what happens and who is involved when proposing a modification to the VA.gov Design System.

In most cases, you should strive to design with and code with existing components and patterns in the VA.gov Design System. But it's possible you'll encounter a business problem that existing design system components and patterns can't solve, and might require a modification or an addition to the design system.

The following sections detail what happens and who is involved when proposing an addition or modification to the design system.

## Adding a new component or pattern

### Define the VA business problem

Before designing a new component or pattern, consider the following questions:
- What problem do you need to solve? 
- What user need do you need to meet?
- Have you tried solving the problem with existing design system components?
- Have you experimented with modifying existing design system components?

If neither existing components, nor modifications of them will solve the problem...


### Propose a new design system component or pattern

The process for proposing should follow these steps:
- Open a [GitHub issue on the design system board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?template=feature_request.md) with a proposal
- Explain the business case and user need your proposal meets
- Explain why the proposal is an ideal choice
- Include screenshots of the component or pattern and source design files
- Attach any research that might support your proposal

All proposals should start with a GitHub issue.

### Design System Council reviews the proposal

After submitting a proposal for the design system, the Design System Council will evaluate to determine what modifications might be necessary. The team will typically check for:

- **Accessibility**
- **Usability**
- **Design consistency**
- **Fit on the VA.gov platform**

The platform team may also reject the proposal at any time. If the team denies the proposal, please work with the design system about options for using the proposal in your project.

### Drafting (Platform team)

In most cases, the design team will need to see a prototype or detailed example of the proposal in action. Please submit any relevant data or research that supports the proposal.

At this point, the design team will develop, sometimes in coordination with the project team:
- Usage guidance and documentation
- Ensure that the proposal meets accessibility and other coding guidelines

Once drafting is complete, the platform team will make the proposal publically available.

### Ready (Platform team)

When the component is ready:
- The platform team will update design.va.gov
- The platform team will update the Sketch library
- The development team may update the react components
- Depending on the nature of the update, update Formation to either a MINOR or MAJOR version. In most cases, adding a component is a MINOR update.

The design system will be responsible for any ongoing maintenance for the proposal, including iteration, bug fixes, and changes to documentation.

## Modifying a component

When proposing a modification, follow the same process as proposing a new component. During the review process, the team will evaluate it for injecting a [wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction?duplication) or unnecessary variations. For example, one type of question to consider is whether or not using [utility classes]({{ site.baseurl }}/utilities) would be more appropriate.

Once the team has accepted the modifier into Formation, you must also:
- Update Formation to the next MINOR version number
- Write any supplementary  documentation for the component on design.va.gov
- Update the Sketch library

## Removing a component

Like any site on the web, we can expect VA.gov’s design to evolve. Some components might be updated and improved, while we might remove others entirely in favor of a replacement.

When we decide to remove a component, please take the following steps:
- In the Formation codebase, we will move the component’s CSS into a `deprecating.scss` file (empty placeholder file still needs to be added to Formation)
- Update Formation’s version number to the next MINOR version.
- On the component’s page in design.va.gov, indicate that the component for removal.
- Add a note on the "What’s new?" page about the upcoming removal under the heading of the Formation version number mentioned above.
- Remove the component from the Sketch pattern library

 Please wait for **at least 30 days** before removing the component from Formation. To remove the component:
- Delete the corresponding CSS selectors
- Since this is a breaking change, update Formation to the next MAJOR version
- Remove the documentation page design.va.gov.
- Add a note on the "What’s new?" page about the removal under the heading of the Formation version number mentioned above.
