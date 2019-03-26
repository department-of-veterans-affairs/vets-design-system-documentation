---
layout: default
title: Contributing to Formation
anchors:
  - anchor: Propose a component
  - anchor: Modifying a component
  - anchor: Removing a component
  - anchor: Pull requests
---

# Contributing to Formation

<div class="va-introtext">
How to propose, amend, or retire components.
</div>

The content on this page only applies to Formation, not Formation React.

## Propose a component

(this page is under construction)

Before proposing a pattern, you should ask:

- Does a similar component exist?
- Can it be generalized to work on more than site?

If you answer "No" to the first question and "Yes" to the second, perhaps a new component is necessary. Otherwise, you might want to implement the component locally within your site or application.

The process for proposing should follow these steps:
- Open an issue with a proposal
- Explain why the proposal is an ideal choice
- Include design files if a prototype cannot be included
- Attach any research that might support your proposal

Next, the team will evaluate the proposal for:
- Usability
- Accessibility
- Visual design
- Fit on the va.gov platform

After that, the team will add the component for beta testing.  Changes to the component can happen during this period.

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
- On the component’s page in design.va.gov, indicate that the component will be removed.
- Add a note on the "What’s new?" page about the upcoming removal under the heading of the Formation version number mentioned above.
- Remove the component from the Sketch pattern library

 Please wait for **at least 30 days** before removing the component from Formation. To remove the component:
- Delete the corresponding CSS selectors
- Since this is a breaking change, update Formation to the next MAJOR version
- Remove the documentation page design.va.gov.
- Add a note on the "What’s new?" page about the removal under the heading of the Formation version number mentioned above.

## Pull requests