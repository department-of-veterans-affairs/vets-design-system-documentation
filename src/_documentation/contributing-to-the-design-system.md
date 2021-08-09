---
layout: default
title: Contributing to the design system
---

# Contributing to the design system

<div class="va-introtext">
How to suggest a new component, update existing components, and retire components.
</div>


## Suggest a component or pattern
Veteran-facing teams are expected to use design system patterns and components when possible. If existing components or patterns will not work to address needed designs,  VFS teams can suggest new components or patterns by going through our Experimental Design process outlined below. 

All new components or patterns should go through this process. We recommend starting this process before sharing new designs widely with stakeholders. 

This process works best if started  before development begins, during the design phase.

When considering if a component or pattern should be added to the design system there are a few criteria that define a “good” candidate -
1. The component/pattern is already being used on more than one page on VA.gov, or the designer can give examples of multiple places the component could be used 
2. The component/pattern is different in more than one major way than existing components in the design system, if the component is only different in color or format, for instance, then it would be better as a variant of the existing component. Note that variants of existing components should also go through this experimental process.
3. Our existing components and patterns will not solve the user problems sufficiently.

Follow the steps below to suggest a component or pattern for the design system through our experimental process.


### 1. Check the design system backlog 
Check the [backlog](https://design.va.gov/documentation/backlog) to see if your idea has already been suggested. Take a look at the "proposed" category.

If you do not see your idea in the backlog, go to step 2. 

If you do see your idea in the backlog, message the contributors to see if they are moving forwards or not. If not and you would like to tackle the problem, move forwards with step 2.


### 2. Fill out a request
Fill out a [Experimental Design System request ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=&template=experimental_design_request.md&labels=vsp-design-system-team). This should take no more than 10-15 minutes. In the ticket, you will need to provide justification for this new component and any artifacts you might want to include. 

After filling out the ticket, post in the #vsp-design-system slack channel and tag Carol Wong to alert the team that you have filled out a ticket and would like to get on the council's agenda.

Note that you do not need to have anything coded at this point, and in fact, we suggest not having anything coded since ideally ideas would be surfaced to the council before teams put effort into new components.  

Additionally, the artifacts you include do not need to be high fidelity. They only need to be able to illustrate your concept. We do, however, encourage some thoughts on how your component or pattern works on mobile.


### 3. Present to Design System Council
You will present your work to the Design System Council at an upcoming meeting. The Design System Council meets every Friday at 1pm Eastern. Experimental design requests will always be prioritized in this meeting, and teams can assume generally that they will be able to present the same week of the request. In order to kick off this step,
- Submit a request to join an upcoming Design System Council meeting in #vsp-design-system
- During the meeting, the Design System Council will evaluate the request and make a decision.

When making the initial request, you can ask to have asynchronous approval if you feel like the change is simple and does not need further explanation. Note that your ticket will still be discussed in the council meeting, but you do not have to attend

### 4. Add your component or pattern to the Experimental section
**If your component/pattern request is approved**, add your component to the [Experimental section](https://design.va.gov/experimental-design/) on design.va.gov.

This should take no more than 30-60 minutes. To add the component/pattern, simply add a markdown file [here](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_experimental-design) - then reach out to Shawna Hein or Ryan Thurwell to merge your request.

Once merged, the markdown you update will automatically be migrated to the experimental tab of the design system. This typically takes 10-15 minutes after you’ve updated the markdown file. 

The markdown file should include most of what you put in your experimental request ticket, with a few additional details - e.g. the following:
- Name of component or pattern
- Who is suggesting it (team, contract)
- Purpose - Why you needed to create a new component or pattern
- Description of component or pattern
- Artifacts (mockups, wireframes, or prototypes)
- Code location, if available
- Existing components used (if creating a new pattern)
- Guidance (if available)

Note that code is not required at this step in the process - the main point of documenting here is visibility to other teams. However, if you have shared code you can share, great! More guidance on the code part of contribution and where to store files can be found here **Link to be added very soon!**.

**If your component or pattern request is rejected**, the council will add notes as to why and what they suggest you do instead on your initial request ticket.


### 5. Validate your design
In order to get your component or pattern moved from the Experimental section to the official design system, you or your team need to do research or usability testing to validate. When you initially submit your design to the experimental system, the council is happy to provide thoughts and feedback on your validation approach. 

Once you have data from your research, write the results of the research on your experimental component page. [An example can be seen here](https://design.va.gov/experimental-design/expandable-alert).

If an experimental component or pattern sits on design.va.gov for 6 months with no validation documented, it will be removed by the design system team.


### 6. Document and submit the component or pattern in order to add it to the official design system
Once you have validated your component or pattern, provide documentation (usage guidelines), artifacts (Sketch file, and reusable code) and any links to research.

In order for your component or pattern to be codified into the design system, three things must happen:
1. Fill out [this Documentation GitHub template](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=&template=documentation_template.md) with usability guidance.
- Please include research validating the usefulness - metrics on why this component tested successfully
2. Share any Sketch artifacts with the Design System Team
3. Share code with the Design System Team

At this point, your VFS team can move forwards to make a more shareable component yourselves with help from the design system team, or your request will go on the design system team’s backlog to codify and move to the design system.


## Suggest an update to an existing component or pattern
If you are suggesting a change to something that already exists in the VA.gov Design System, you should go through the experimental process above. If it is a small change, feel free to request an async review by the council.

## Suggest an update to documentation
For requesting more documentation or updating a piece of documentation on design.va.gov, please fill out a [documentation request.](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=&template=documentation_request.md)

## Deprecating a component

Like any site on the web, we can expect VA.gov’s design to evolve. Some components might be updated and improved, while we might remove others entirely in favor of a replacement.

Deprecating a component is done only by folks on the design system team.

The process they go through is outlined below:

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
