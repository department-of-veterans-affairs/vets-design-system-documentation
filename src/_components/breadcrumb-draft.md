---
layout: default
sub_section: breadcrumbs
title: Breadcrumbs - draft
draft: true
---

# Breadcrumbs

<p class="va-introtext">The breadcrumb is a sitewide navigation component that shows users where they are in the site and gives them a way to navigate up levels in the site hierarchy. In addition, the breadcrumb tells search engines how the site is structured, and it can be displayed in search results. This can improve rankings, and provide users with additional context. </p>

## Desktop
{% include storybook-preview.html height="100px" story="components-breadcrumbs--default" %}


## Mobile
{% include storybook-preview.html height="100px" story="components-breadcrumbs--mobile-first" %}


<!-- ## Variations

*If multiple variations of the component exist (eg accordions can have a border or be borderless) use this section to present those variations. Include live examples from Storybook.*-->



## Usage

*What does this component do? Does the component look or behave differently on small vs. large screens? Talk about differences. What other details will help stakeholders use this component as you intended?*

- Breadcrumbs should be based on content hierarchy, not on the user's click path or browser history. 
  - For online applications and forms, the breadcrumb represents the forms's placement within the site hierarchy, it does not track the steps or progress of the form flow.  In other words, the breadcrumb will only up to show the form as the current page segment, and will maintain that display while the user goes through the flow. For navigation within the form flow, forward and backward CTAs can be provided as part of the main content as appropriate. 
- If you use a breadcrumb for one page in a hierarchy, always use a breadcrumb for all other pages within that hierarchy. 
- Always use consistent styling and interactons for the breadcrumb throughout the site, so users do not experience unexpected changes as they navigate through related pages. This includes using a consistent character as a separator between segments.   
- Each breadcrumb segment should match the H1 of the corresponding page. 
- The breadcrumb path should always include a link to the home page of the site. 
- The breadcrumb path must always end with the current page as the last segment. The only exception to this is for display on mobile. 


### When to use

*When would someone want to use this component in their solution?*

- Use a breadcrumb when content is more than 2 levels deep. 
- Use a breadcrumb when it is important to the user to understand where they are in the site.
- Use a breadcrumb when the user may need to navigate up the hierarchy of their current page. 


### When not to use

*Are there other components or patterns a designer should consider to simplify their solution? If so, link to those here. If there are no alternative solutions, this section can be called When _not_ to use.*

- Do not use a breadcrumb on the top page of a site (i.e. the home page). 
- Do not use a breadcrumb if the path or hierarchy of the page is irrelevant to the user or experience. 
- Do not use a breadcrumb if the site/experience has a flat structure (i.e. only 2 levels of content or less)
- Do not use a breadcrumb if it would create a way for a user to exit or navigate away from a user flow that they are unable to return to, or would result in a loss of data. 


### Placement

*Where does this component appear on the page? Refer to our grid. Use spacing units (in Utilities) rather than getting too granular with pixel specifications.*

- The breadcrumb should be placed below the header and above the main content.
- The placement of the breadcrumb must be consistent from page to page. 


### Behavior

*Talk about the interaction details of the component here. What component states are there to consider? Error, empty, not enabled, etc.*

- All the links in the breadcrumb, except the current page, should be interactive and link to their corresponding page.
- The current page segment of the breadcrumb should not be interactive or link. 
- 


## Accessibility considerations

*What does a content creator, designer, or developer need to know to implement an accessible component? Guidelines, code snippets, tests to run (if applicable), etc*

- 

## SEO considerations

*Include any information on how the component may impact SEO.*

- Search engines utilize breadcrumbs to understand your site structure and gain additional context about your page to help in ranking.
- Breadcrumbs can also be displayed in search engine results pages (SERPs), which provides additional context to users about your page.


## Resources

*Links to research, design files, etc.*


