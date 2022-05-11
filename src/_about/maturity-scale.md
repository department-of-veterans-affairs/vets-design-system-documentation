---
layout: default
title: Maturity scale
anchors:
  - anchor: Definitions
  - anchor: How components and patterns move through the scale
---

# {{ page.title }}

<div class="va-introtext">
  The maturity scale indicates the level of maturity of each component and pattern in the system. It helps designers and developers know if they can use the component and what level of caution they should have when doing so.
</div>

{% include _site-on-this-page.html %}

The maturity scale is divided into 3 major categories:

  
{% assign scale = site.data.maturity-scale.scale %}
{% assign use = scale | where: 'category', 'Use' %}
{% assign use_with_caution = scale | where: 'category', 'Use with caution' %}
{% assign dont_use = scale | where: 'category', "Don't use" %}
{% assign use_symbol = use.first.symbol %}
{% assign use_with_caution_symbol = use_with_caution.first.symbol %}
{% assign dont_use_symbol = dont_use.first.symbol %}

<i class="fas {{use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use"></i> <span class="usa-label site-component-status site-component-status--use">Use</span>

<i class="fas {{use_with_caution_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use-with-caution"></i> <span class="usa-label site-component-status site-component-status--use-with-caution">Use with caution</span>

<i class="fas {{dont_use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--dont-use"></i> <span class="usa-label site-component-status site-component-status--dont-use">Don't use</span>

Within each of those categories there are 2 levels:

<i class="fas {{use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use"></i> <span class="usa-label site-component-status site-component-status--use">Use</span>
  * Deployed
  * Best practice

<i class="fas {{use_with_caution_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use-with-caution"></i> <span class="usa-label site-component-status site-component-status--use-with-caution">Use with caution</span>
  * Candidate
  * Available

<i class="fas {{dont_use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--dont-use"></i> <span class="usa-label site-component-status site-component-status--dont-use">Don't use</span>
  * Proposed
  * Deprecated

Components and patterns start out as proposed, are filed in Github as [users of the system contribute](contributing-to-the-design-system), and then, typically, progress up the scale as we gain confidence in that component or pattern. That level of confidence is measured by a number of criteria which are outlined below.

The full maturity scale goes in this order:

1. [Proposed](#dont-use-proposed)
2. [Candidate](#use-with-caution-candidate)
3. [Available](#use-with-caution-available)
4. [Deployed](#use-deployed)
5. [Best Practice](#use-best-practice)
6. [Deprecated](#dont-use-deprecated)

## Definitions

<h3 id="dont-use-proposed" class="site-component-status-heading">
  <i class="fas {{dont_use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--dont-use"></i> 
  <span class="usa-label site-component-status site-component-status--dont-use-proposed">
    Don't use: Proposed
  </span>
</h3>

A team has filed a request for a component or pattern but it has not yet been reviewed by the Design System Team or Design System Council. You will not see this status in the system but it is included here to give a complete view of the lifecycle of a component.

* The Github issue may link to supporting research, a Sketch (or other tool) mock-up, or a functional instance on VA.gov. 

<h3 id="use-with-caution-candidate" class="site-component-status-heading">
  <i class="fas {{use_with_caution_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use-with-caution-candidate"></i> 
  <span class="usa-label site-component-status site-component-status--use-with-caution-candidate">
    Use with caution: Candidate
  </span>
</h3>

Design System Team and/or Design System Council have evaluated the proposal. 

* The Design System Team will be creating documentation for the component or pattern. 
* The component or pattern may be in limited use (i.e. it may have already been shipped by a team). This could also be known as: “In work”, “Draft”, "Beta", or “Give it a go! YMMV”.

<h3 id="use-with-caution-available" class="site-component-status-heading">
  <i class="fas {{use_with_caution_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use-with-caution-available"></i> 
  <span class="usa-label site-component-status site-component-status--use-with-caution-available">
    Use with caution: Available
  </span>
</h3>

The component or pattern is:

* Complete and ready to be used but may or may not have been deployed to production.
* The team that proposed the component can now use it from the system.
* There is some research that backs at least the default variation.

By “complete” we mean that the documentation of the component or pattern is complete and in sync across the Design System (design.va.gov, Storybook, and Sketch library). 

<h3 id="use-deployed" class="site-component-status-heading">
  <i class="fas {{use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use-deployed"></i> 
  <span class="usa-label site-component-status site-component-status--use-deployed">
    Use: Deployed
  </span>
</h3>

The component or pattern:

* Is deployed in production for more than 3 months
* Is in use by more than one application/project
* Has sufficient research backing one or more of the current variations

In other words, it’s out there and we have some degree of confidence in it.

<h3 id="use-best-practice" class="site-component-status-heading">
  <i class="fas {{use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--use-best-practice"></i> 
  <span class="usa-label site-component-status site-component-status--use-best-practice">
    Use: Best Practice
  </span>
</h3>

The component or pattern:

* Has been out in production for a year or more
* Has no significant issues filed against it (accessibility and usability are solid)
* Is in use in multiple projects and works well in multiple contexts
* Has supporting research

Given all of the above, the component or pattern is now considered best practice.

<h3 id="dont-use-deprecated" class="site-component-status-heading">
  <i class="fas {{dont_use_symbol}} site-sidenav-status site-sidenav-status--large site-sidenav-status--dont-use"></i> 
  <span class="usa-label site-component-status site-component-status--dont-use-deprecated">
    Don't use: Deprecated
  </span>
</h3>

A previously available or deployed component or pattern is now considered lacking and should not be used. The component or pattern: 

* May be no longer in production
* May have significant issues filed against it and/or now be considered an anti-pattern
* Teams may have moved to a different solution
* Research may have proven our design or implementation was not effective

Components or patterns in this state will direct users to preferred components or patterns and stay in the system for 3 months before being removed.

## How components and patterns move through the scale

### Principles

Once a component or pattern is “in the wild” the Design System Team will track the following determining factors in maturity: 

1. **Stability**
  * Is it in production and for how long?
  * Are there any significant issues filed against it (how solid are the usability & accessibility?)
2. **Research**
  * Are there any additional usability tests or other research that directly or indirectly covered this component?
3. **Adoption**
  * How many teams have adopted this component?
  * How widely is it used across VA.gov?

The Design System team will be auditing components & patterns on a regular basis, evaluating them for movement within the scale

### A component or pattern is proposed

Any additions to the system, either new components or patterns, updates to existing entries, or requests for replacements are requested via the [Experimental Design Process](contributing-to-the-design-system).

### Proposed to Candidate 

The Design System Team and Design System Council have evaluated the proposal and the Design System Team is now working on the component or pattern.

### Candidate to Available

The Design System Team has completed documenting and building the component or pattern.

### Available to Deployed

* Deployed in production for more than 3 months
* Is in use by more than one application/project
* There is sufficient research backing one or more of the current variations

### Deployed to Best Practice

* Out in production for a year or more
* Has no significant issues filed against it (accessibility and usability are solid)
* Is in use in multiple projects
* Has supporting research

### An example of deprecating a component

Let's use the Wizard pattern is an example. It was once considered "state of the art" and would have been categorized as "Use: Best Practice". However, over time some issues were revealed that made us reconsider and we moved to bring the pattern back to "Use with caution: Available". Essentially, the pattern was "under review". After review, we now consider the pattern to be "Don't use: Deprecated" and it has been replaced by other patterns.

In short, a component or pattern may not move backwards through the scale in a linear fashion. In fact, a component or pattern may be deprecated from any other status, if necessary. When we decide to deprecate a pattern, the Design System Team has [a process it follows to do so](contributing-to-the-design-system#deprecating-a-component).