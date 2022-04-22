---
layout: default
title: Contributing to the design system
anchors:
  - anchor: Overview
  - anchor: How to add a component or pattern
  - anchor: Suggest an update to an existing component or pattern
  - anchor: Suggest an update to documentation
  - anchor: Deprecating a component
---

# Contributing to the design system

<div class="va-introtext">
  How to suggest a new component, update existing components, and retire components.
</div>

{% include _site-on-this-page.html %}

## Overview

Veteran-facing teams are expected to use design system patterns and components when possible. If existing components or patterns will not work to address needed designs,  VFS teams can suggest new components or patterns by going through our Experimental Design process outlined below. 

All new components or patterns should go through this process. We recommend starting this process before sharing new designs widely with stakeholders. 

This process works best if started before development begins, during the design phase.

When considering if a component or pattern should be added to the design system there are a few criteria that define a “good” candidate:

1. The component/pattern is already being used on more than one page on VA.gov, or the designer can give examples of multiple places the component could be used 
2. The component/pattern is different in more than one major way than existing components in the design system, if the component is only different in color or format, for instance, then it would be better as a variant of the existing component. Note that variants of existing components should also go through this experimental process.
3. Our existing components and patterns will not solve the user problems sufficiently.

### What is an experimental component or pattern?

An experimental component or pattern is something that is being explored by a team on VA.gov, but has not yet been validated sufficiently by our Veterans and caregivers to become an official design system component or pattern. Thus on the [maturity scale it will be marked as "Use with caution"]({{ site.baseurl }}/about/maturity-scale/) at the top of any component or pattern page.

### Why showcase experimental components and patterns?

Since our community has many people across different contracts and companies building on VA.gov, we often have teams trying out new component or pattern designs. However, before this, there was no place for folks to get visibility into what was happening, resulting in team members working on the same problem spaces without being aware that that was the case.

Additionally, we wanted to create a light-weight process where teams building applications could contribute back to our design system.

### Can I use an experimental component or pattern in my application?

Yes. However, if you are using an experimental component or pattern, be aware that it hasn’t necessarily been fully validated. Use with caution and give the component or pattern a try but understand that it may not work in your specific context. Please include any research you have done on the experimental component or pattern on its documentation page for others to see.

## How to add a component or pattern 

Follow the steps below to suggest a component or pattern for the design system through our experimental process.

### 1. Check the design system backlog 

Check the backlog to see if your idea has already been suggested:

* [vets-design-system-documentation]({{ site.github_issues_link_1 }})
* [va.gov-team]({{ site.github_issues_link_2 }})

If you do not see your idea in the backlog, go to step 2. 

If you do see your idea in the backlog, message the contributors to see if they are moving forward or not. If not, and you would like to tackle the problem, move forward with step 2.


### 2. Fill out a request

Fill out an Experimental Design System request ticket. This should take no more than 10-15 minutes. In the ticket you will need to provide justification for this new component or pattern, and link to any artifacts you want to include. 

<a class="vads-c-action-link--green" href="{{ site.request_addition_link }}">Request a new addition to the Design System</a>

After filling out the ticket, post in the <a href="{{ site.slack_channel_link }}">{{ site.slack_channel_name }}</a> slack channel and tag Carol Wong to alert the team that you have filled out a ticket and would like to get on the council's agenda.

Note that you do not need to have anything coded at this point, and in fact, we suggest not having anything coded since ideally ideas would be surfaced to the council before teams put effort into building new components.  

Additionally, the artifacts you include do not need to be high fidelity. They only need to be able to illustrate your concept. We do, however, encourage some thoughts on how your component or pattern works on mobile.


### 3. Present to Design System Council

You will present your work to the Design System Council at an upcoming meeting. The Design System Council meets every Friday at 1pm Eastern. Experimental design requests will always be prioritized in this meeting, and teams can assume generally that they will be able to present the same week of the request. In order to kick off this step,
- Submit a request to join an upcoming Design System Council meeting in <a href="{{ site.slack_channel_link }}">{{ site.slack_channel_name }}</a>. 
- During the meeting, the Design System Council will evaluate the request and make a decision.

When making the initial request, you can ask to have asynchronous approval if you feel like the change is simple and does not need further explanation. Note that your ticket will still be discussed in the council meeting, but you do not have to attend


### 4. Add your component or pattern to the system

**If your component/pattern request is approved**, add your component or pattern to the Design System. New component will enter at the start of the [maturity scale at "Use with caution: Candidate"]({{ site.baseurl }}/about/maturity-scale#use-with-caution-candidate). This signals to others that the candidate has been evaluated and may be something they could consider using.

This should take no more than 30-60 minutes. 

#### Add the component or pattern

Use the [Experimental Design Template]({{ site.new_component_template_link }}) to add and document your component or pattern. It will be created under components but don't worry, we'll move it to the appropriate place if it is a pattern.

If you are including an example image, please use the [Anatomy callouts Sketch library](https://www.sketch.com/s/aaa5c25f-6991-4aac-a6ed-d378bdff7727) for annotations. You may contact {{ site.sketch_for_teams_admin }} if you need access to Sketch for Teams.

##### Adding a component or pattern via GitHub

1. Go to [`src/_components/`](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_components)
2. Open the `Add file` menu
3. Copy the contents of [the template]({{ site.new_component_template_raw_link }}) and fill in the sections for your component or pattern.
4. When you're ready, commit the changes to a branch, and create a pull request for peer review.

##### Documenting your component or pattern

Your documentation should include most of what you put in your experimental request ticket, with a few additional details - e.g. the following (these items are also captured in the Experimental design template markdown file):

- Name of component or pattern
- Who is suggesting it (team, contract)
- Purpose - Why you needed to create a new component or pattern
- Description of component or pattern
- Artifacts (mockups, wireframes, or prototypes)
  - If you need to embed images, videos, or other assets in your markdown file, add them to the assets folder [here](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/master/src/_experimental-design/assets).
- Code location, if available
- Existing components used (if creating a new pattern)
- Usage and accessibility guidance (if available)

Note that code is not required at this step in the process - the main point of documenting here is visibility to other teams. However, if you have shared code you can share, great! [More guidance on the code part of contribution and where to store files can be found here](developers#contributing-experimental-design-code).

#### Ask for your component or pattern to be merged

After your component or pattern has been added reach out to {{ site.experimental_reviewer_1 }} or {{ site.experimental_reviewer_2 }} to merge your request. 

Once merged, the markdown you update will automatically be migrated to the experimental tab of the design system. This typically takes 10-15 minutes after you’ve updated the markdown file. 

**If your component or pattern request is rejected**, the council will add notes as to why and what they suggest you do instead on your initial request ticket.


### 5. Validate your design
In order to get your component or pattern moved from the Experimental section to the official design system, you or your team need to do research or usability testing to validate. When you initially submit your design to the experimental system, the council is happy to provide thoughts and feedback on your validation approach. 

Once you have data from your research, write the results of the research on your experimental component page. [An example can be seen here]({{ site.baseurl }}/experimental-design/expandable-alert).

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
