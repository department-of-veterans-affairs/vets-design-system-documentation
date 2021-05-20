---
layout: default
title: Contributing to the design system
draft: true
---

# Contributing to the design system

<div class="va-introtext">
How to suggest a new component, update existing components, and retire components.
</div>


## Suggest a component
Anyone can suggest a new component. We currently keep a list of suggestions in the design system backlog. 

Follow these 5 steps to suggest a component for the design system.

### 1. Check the design system backlog 
Check the [backlog](https://design.va.gov/documentation/backlog) to see if your idea has already been suggested. Take a look at the "proposed" category.

If you do not see your idea in the backlog at all go to step 2.

### 2. Fill out a request
Fill out a [Experimental Design System request ticket] (https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=&template=experimental_design_request.md). You will need to provide justification for this new component and any artifacts you might want to include.

### 3. Present to Design System Council
You will present your work to the Design System Council at an upcoming meeting.
- Submit request to join an upcoming Design System Council meeting in #vsp-design-system 
- During the meeting, the Design System Council Working Group will evaluate the request and make a decision. 
If your component request is approved, add your component to the Experimental section on design.va.gov and label it "to do."

What to add to the experimental section: 
 - Name of component or pattern 
 - Purpose - Why you needed to create a new component or pattern
 - Description of component or pattern
 - Code location, if available
 - Artifact (mockups, wireframes, or prototypes)
 - Existing components used (if creating a new pattern)
 - Guidance (if available)

How to add it to the experimental design section:
    - Add a markdown file [here](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_experimental-design)


### 4. Validate your design
You or your team need to do research and usability testing to validate your component. 
If an experimental component sits on design.va.gov for 6 months, it will be removed. 

### 5. Document and submit
Once you have validated your component, provide documentation (usage guidelines), artifacts (Sketch file, and reusable code) and any links to research. 

In order for your component to be codified into the design system, three things must happen: 
1. Fill out this [Documentation GitHub template](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=&template=documentation_template.md) with usability guidance. 
 - Please include research validating the usefulness - metrics on why this component tested successfully 
2. Share any Sketch artifacts with the Design System Team 
3. Share code with the Design System Team

## Suggest an update to an existing component or pattern
If you are suggesting a change to something that already exists in the VA.gov Design System, please fill out this [Github ticket] (https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new)

## Suggest an update to documentation
For requesting more documentation or updating a piece of documentation on design.va.gov, please fill out a [documentation request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=&template=documentation_request.md)

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
