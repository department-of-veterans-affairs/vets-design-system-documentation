---
layout: component
title: Side Navigation
intro-text: "Hierarchical, vertical navigation to place at the side of a page."
status: dont-use-proposed
figma-link:
status: use-with-caution-proposed
web-component: va-sidenav
---

<va-alert status="info">
 <h2 slot="headline">Component in Iterative Development</h2>
  <p>This component is currently being designed, developed, and released in phases. It is intended to eventually replace several existing side navigation implementations across VA.gov, which vary in features and functionality. The process of establishing consistent site-wide requirements and functionality agreements is currently in progress.</p>
</va-alert>

## Example

### Web

#### Default
[Storybook example here]

#### With Submenu
[Storybook example here]

#### With Submenu Linked
[Storybook example here]

## Usage

### When to use Side Navigation

* To display a navigational hierarchy with one to three levels of depth.   
* To display the "sub-navigation" within a specific section of a website.   
* To present a curated group of related pages or resources in a non-hierarchical manner.

### When to consider something else

* For a small site with fewer than five pages, where a full navigational hierarchy may be overly complex.   
* For navigating within a single, long page. Use the "On this page" component instead.   
* For linking to content that is not closely related.   

### How this component works

Side Navigation provides secondary navigation within a specific section of a website. It helps users understand the scope of the current topic and move between closely related pages. This is distinct from the site-wide [Header]({{ site.baseurl }}/components/header) navigation, which covers the entire site, and the [On this page]({{ site.baseurl }}/components/on-this-page) component, which navigates within a single page.   

The component is designed to reflect a user's task-oriented goals, rather than the internal structure of the VA. 

There are two primary ways to structure side navigation item that contains child pages:

* **Non-linkable "spoke" or category label**: A top-level item can serve as a non-clickable heading for a group of child pages. This pattern is useful for organizing links into thematic categories, similar to the "spokes" on a VA.gov benefit hub page, where a title like "Manage benefits" introduces a list of related tasks.   

* **Standard parent-child links**: A parent item can be a standard link that navigates to a landing page for that section, while also containing a nested list of links to child pages. This is a common pattern for hierarchical site structures.

## Behavior

At mobile breakpoints, the navigation menu is hidden by default to save space. A trigger button, typically labeled "Related pages menu", reveals the navigation menu similarly to an [accordion]({site.baseurl}}/components/accordion) when activated.

### Placement

* The Side Navigation component should always appear in a consistent space throughout all of VA.gov whenever it is used.
* At desktop breakpoints, the component should be placed at the top of the left column in a [two-column layout]({site.baseurl}}/foundation/layout/page-layouts#two-columns-content-on-right).
* At mobile breakpoints, the Side Navigation should appear below the page title and any introductory content, but above the main body content. It should be collapsed by default behind a "Related pages menu" button that toggles visibility. This ensures mobile users can access navigation without it taking up excessive screen space. When expanded, the menu should push content downward rather than overlaying it.

## Code usage

Side Navigation is built as a flexible component using a compositional architecture. This means the final navigation menu is constructed by combining several smaller, internal child components within a parent container. This modular approach simplifies maintenance, improves future expandability, and allows for easy integration into different environments.

The component is composed of the following parts:

`va-sidenav` **(Parent Component)**: This is the main container that wraps all the navigation elements. It can include an optional header with a title and an optional icon.

`va-sidenav-item` **(Internal Child Component)**: This is the basic building block for a single, clickable navigation link. It includes properties for the link's destination (`href`) and label. It can also be flagged as the `currentPage` for distinct styling.

`va-sidenav-submenu` **(Internal Child Component)**: This component acts as a container for nesting `va-sidenav-items`, allowing for the creation of a hierarchical structure (child and grandchild links). The parent item of a submenu can optionally be a link itself.

This compositional structure allows developers to build complex navigation menus by slotting together the necessary child components. For single-page applications, the component supports router integration by firing a vaRouteChange event, which prevents native link routing and allows a routing library like React Router to handle the navigation.

## Content considerations

* Keep links in the side navigation short. They can be shorter derivatives of page titles themselves.
* If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Usability test to find the right balance between breadth and depth.

## Accessibility considerations

???

## Related

* [On this page]({{ site.baseurl }}/components/on-this-page)
* [Header]({{ site.baseurl}}/components/header)
