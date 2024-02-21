---
layout: documentation
permalink: /about/contributing-to-the-design-system/suggest-a-removal
has-parent: /about/contributing-to-the-design-system/
title: Suggest a removal
intro-text: Follow the steps below to suggest a component or pattern be deprecated in the design system
---

Like any site on the web, we can expect VA.gov’s design to evolve. Some components might be updated and improved, while we might remove others entirely in favor of a replacement.

Deprecating a component is done only by the Design System Team. However, you can file an issue requesting that a component or pattern be deprecated. Be sure to include the following in your request:

* Justification for removing the component or pattern
* A recommendation on a replacement

You may need to come to the Design System Council with your request for discussion.

<a class="vads-c-action-link--blue" href="{{ site.request_removal_link }}">Suggest a removal</a> 

## How the Design System Team deprecates a component

When we decide to remove a component, we take the following steps:

### Deprecation

* On the component’s guidance page in design.va.gov mark the component as [deprecated]({{ site.baseurl }}/about/maturity-scale#dont-use-deprecated).
* Update the component-library version number to the next MINOR version.
* Add a note on the "What's new?" page indicating that the component is deprecated under the heading of the component-library version number mentioned above.
* Archive the component in the Figma component and example libraries.

### Removal

After a **30 day** period the component can be removed entirely. To remove the component:

* Delete the web-component.
* Since this is a breaking change, update the component-library to the next MAJOR version
* Remove the guidance page from design.va.gov
* Add a note on the "What's new?" page about the removal under the heading of the version number mentioned above