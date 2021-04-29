---
layout: default
title: Contributing to the design system
draft: true
---

# Contributing to the design system

<div class="va-introtext">
How to suggest and retire components.
</div>


## Suggest a component
Anyone can suggest a new component. We currently keep a list of suggestions in the backlog. (LINK)

Follow these 5 steps to suggest a component for the Design System.

### 1. Check the DST backlog 
Check the backlog to see if your idea has already been suggested.
If your idea is in the backlog, check the status. 
- If the status is To Do, go to the GitHub issue to read more information.
- If the status is In Progress, go to the GitHub issue to find out more.
- If the status is Experimental, you can see the current version in the Experimental section. 

If you do not see your idea in the backlog at all go to step 2.

### 2. Fill out a request
Fill out a ‘suggest a component ticket’ (LINK). You will need to provide justification for this new component and any artifacts you might want to include.

### 3. Present to Design System Council
You will present your work to the Design System Council at an upcoming meeting.
- Submit request to join an upcoming Design System Council meeting in #vsp-design-system 
- During the meeting, the Design System Council Working Group will evaluate the request and make a decision. 
If your component request is approved, the Design System Team will add your component to the Experimental section on design.va.gov and label it "to do."

### 4. Validate your design
You or your team need to do research and usability testing to validate your component. 
If an experimental component sits on design.va.gov for 3 months, it will be removed. 

### 5. Document and submit
Once you have validated your component, provide documentation (usage guidelines), artifacts (Sketch file, and reusable code) and any links to research. 

In order for your component to be codified into the design system, three things must happen: 
1. Fill out this GitHub template with usability guidance. 
2. Share any Sketch artifacts with the DST 
3. Share code with the DST

## Update a component
If you are suggesting a change to something that already exists in the VA.gov Design System, please propose it by commenting on the issue for that component or pattern. You can find issues for all published components in patterns on the individual component and pattern pages, as well as, here (LINK)

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
