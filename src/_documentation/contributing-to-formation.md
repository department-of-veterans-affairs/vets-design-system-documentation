---
layout: default
title: Contributing to Formation
anchors:
  - anchor: The proposal process
  - anchor: Modifying a component
  - anchor: Removing a component
---

# Contributing to Formation

<div class="va-introtext">
How to propose, amend, or retire components.
</div>

The content on this page only applies to Formation, not Formation React.

<div markdown="1">
[![decison tree]({{site.baseurl}}/images/new-item-tree.jpg)]({{site.baseurl}}/images/new-item-tree.jpg)
</div>

## The proposal process

The following steps detail what happens and who is involved when proposing a modification to Formation.

### Propose a component

(this page is under construction)

Before proposing a pattern, you should ask:

- Does a similar component exist?
- Can it be generalized to work on more than site?

If you answer "No" to the first question and "Yes" to the second, perhaps a new component is necessary. Otherwise, you might want to implement the component locally within your site or application.

The process for proposing should follow these steps:
- Open an issue with a proposal
- Explain why the proposal is an ideal choice
- Include design files if you cannot create a prototype
- Attach any research that might support your proposal

All proposals should start with a GitHub issue.

### Review

After submitting a proposal for the design system, the team will evaluate to determine what modifications might be necessary. The team will typically check for:

- **Accessibility**
- **Usability**
- **Design consistency**
- **Fit on the va.gov platform**

The design system team may also reject the proposal at any time. If the team denies the proposal, please work with the design system about options for using the proposal in your project.

### Drafting

In most cases, the design team will need to see a prototype or detailed example of the proposal in action. Please submit any relevant data or research that supports the proposal.

At this point, the design team will develop, sometimes in coordination with the project team:
- Usage guidance and documentation
- Ensure that the proposal meets accessibility and other coding guidelines


Once drafting is complete, the design system team will make the proposal publically available.

### Ready

When the component is ready:
- The design system team will update design.va.gov
- The design system team will update the Sketch library
- The development team may update the react components
- Depending on the nature of the update, update Formation to either a MINOR or MAJOR version. In most cases, adding a component is a MINOR update.

The design system will be responsible for any ongoing maintenance for the proposal, including iteration, bug fixes, and changes to documentation.

## Modifying a component

When proposing a modification, follow the same process as proposing a new component. During the review process, the team will evaluate it for injecting a [wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction?duplication) or unnecessary variations. For example, one type of question to consider is whether or not using utility classes would be more appropriate.

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