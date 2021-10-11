---
layout: default
sub_section: breadcrumbs
title: Breadcrumbs
draft: true
---

# Breadcrumbs

<p class="va-introtext">The breadcrumb is a sitewide navigation component that shows users where they are in the site and gives them a way to navigate up a level in the site hierarchy or backwards in a flow. In addition, the breadcrumb tells search engines how the site is structured, and it can be displayed in search results. This can improve rankings, and provide users with additional context. </p>

## Desktop
{% include storybook-preview.html height="100px" story="components-breadcrumbs--default" %}


## Mobile
{% include storybook-preview.html height="100px" story="components-breadcrumbs--mobile-first" %}


## Variations

*If multiple variations of the component exist (eg accordions can have a border or be borderless) use this section to present those variations. Include live examples from Storybook.

- The breadcrumb for online applications only shows up to the initial page in the form flow.  It does not continue to track every step/page within the flow.  In this scenario, forward and backward CTAs should be provided as part of the main content of the form flow as appropriate, and the breadcrumb only provides a link to the beginning of the form. 

## Usage

*What does this component do? Does the component look or behave differently on small vs. large screens? Talk about differences. What other details will help stakeholders use this component as you intended?*

- Breadcrumbs should be based on content hierarchy, not on the user's click path or browser history. 
- The placement of the breadcrumb must be consistent from page to page. 
- Always use consistent styling and interactons throughout the site, so users do not experience unexpected changes as they navigate through related pages. This includes using a character as a separator between segments.   
- Each breadcrumb segment must match the H1 of the corresponding page. 
- The breadcrumb should always include a link to the home page of the site. 
- The breadcrumb should always end with the current page as the last segment. The only exception to this is for display on mobile. 
- 


### When to use

*When would someone want to use this component in their solution?*

- Use a breadcrumb when it is important to the user to understand where they are in the site, and have the ability to navigate up the hierarchy. 

### When not to use

*Are there other components or patterns a designer should consider to simplify their solution? If so, link to those here. If there are no alternative solutions, this section can be called When _not_ to use.*

- Do not use a breadcrumb on the top page of a site (i.e. the home page). 
- Do not use a breadcrumb if the path or hierarchy of the page is irrelevant to the user or experience. 
- Do not use a breadcrumb for products that have a flat structure (i.e. only 2 levels of content or less)
- Do not use a breadcrumb if it would create a way for a user to exit or navigate away from a user flow that they are unable to return to, or would result in a loss of data. 


### Placement

*Where does this component appear on the page? Refer to our grid. Use spacing units (in Utilities) rather than getting too granular with pixel specifications.*

- The breadcrumb should be placed below the header and above the main content.


### Behavior

*Talk about the interaction details of the component here. What component states are there to consider? Error, empty, not enabled, etc.*

- 

## Accessibility considerations

*What does a content creator, designer, or developer need to know to implement an accessible component? Guidelines, code snippets, tests to run (if applicable), etc*

- 

## Resources

*Links to research, design files, etc.*

- 
