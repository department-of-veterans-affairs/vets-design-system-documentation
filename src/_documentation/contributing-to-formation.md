---
layout: default
title: Contributing to Formation
anchors:
  - anchor: How to contribute
  - anchor: Modifying a component
  - anchor: Removing a component
---

# Contributing to Formation

<div class="va-introtext">
How to propose, amend, or retire components.
</div>

The content on this page only applies to Formation, not Formation React.



## How to contribute

The following steps detail what happens and who is involved when proposing a modification to Formation.
Before proposing an update to Formation, use this decision tree to do determine how you should proceed.

<div markdown="1">
[![decison tree]({{site.baseurl}}/images/new-item-tree.jpg)]({{site.baseurl}}/images/new-item-tree.jpg)
</div>

If the best course of action is to build the item directly into your project, you should still consult with the platform team to ensure the user experience and content style remain consistent with VA.gov at large.

In most cases, you should strive to design with and code with existing components and patterns in Formation.


<div class="vads-u-background-color--primary-alt-lightest vads-u-padding--3" markdown="1">
<div class="va-introtext vads-u-font-family--sans" markdown="1">
Here are some scenarios that may help with the decision process:
</div>

---

<div class="vads-u-measure--5" markdown="1">

*The designer has created a page with a new element that reveals additional content when the user clicks a button.*

**Recommendation:** The designer should modify her design to use the accordion or additional info component
</div>
---

<div class="vads-u-measure--5" markdown="1">
*The designer is working on an application where a user will have the option to make a destructive action that cannot be undone. The designer would like to use a red button to convey to the user that they should use caution, but there is currently no red buttons available in Formation.*

**Recommendation:** The designer should propose a modification to the button component to add a variant that conveys destructive actions.
</div>

---
<div class="vads-u-measure--5" markdown="1">
*The designer is building an interactive tool that allows the user to sort and organize results from a search query. It seems to be a one-off tool, but the results placed in way that looks like UI cards.*

**Recommendation:** The designer should build the feature directly into their application, trying to use utility classes to implement the visual presentation if that appropriate. The platform team will work with the designer to determine if the work may be suitable for adding to Formation at a later date.
</div>
---
<div class="vads-u-measure--5" markdown="1">
*The designer made a page with an alert box with another heading directly below it. These two items are little too close together, creating a bit of visual tension between them. The designer would like to make a modification on the alert box with additional margins for similar scenarios.*

**Recommendation:** The developer should not accept the recommendation to add a modifier to the alert. Instead, the developer should use the margin utility to provide the additional spacing.
</div>
---
<div class="vads-u-measure--5" markdown="1">
*The designer is making a form in which the user needs to select from a long list of options. A select box would introduce usability issues, especially on mobile devices. The designer has determined that a combobox feature would the best option, but there is currently no combobox in Formation.*

**Recommendation:** Comboboxes are very useful, and could be used by other teams as well. The designer should propose the new component.
</div>
</div>

### Propose an update (Project team)

The process for proposing should follow these steps:
- Open a [GitHub issue](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?template=feature_request.md) with a proposal
- Explain why the proposal is an ideal choice
- Include design files if you cannot create a prototype
- Attach any research that might support your proposal

All proposals should start with a GitHub issue.

### Review (Platform team)

After submitting a proposal for the design system, the team will evaluate to determine what modifications might be necessary. The team will typically check for:

- **Accessibility**
- **Usability**
- **Design consistency**
- **Fit on the va.gov platform**

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