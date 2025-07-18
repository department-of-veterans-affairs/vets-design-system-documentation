---
layout: component
title: Side Navigation
github-title: va-sidenav
intro-text: "Vertical navigation to place at the side of a page."
status: use-with-caution-candidate
figma-link: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=34159-3535&t=w2lNwVQNDrEuZwT0-1
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code usage
  - anchor: Not a Card
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist  
---

<va-alert status="info">
  <h2 slot="headline">Enhancements Planned, Feedback Welcome</h2>
  <p>This component is available for use and will continue to evolve with additional features and functionality. It is planned to replace several existing side navigation implementations across VA.gov to promote consistency and improve usability.</p>
  <p>If you'd like you participate in future iterations, <a href="https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4252">join the discussion</a>!</p>
</va-alert>

## Examples

### Web

#### Default

{% include storybook-preview.html story="components-va-sidenav--default" link_text="va-sidenav Default" %}

#### Levels
{% include storybook-preview.html story="components-va-sidenav--levels" link_text="va-sidenav Levels" %}

#### Categorized Links
{% include storybook-preview.html story="components-va-sidenav--categorized-links" link_text="va-sidenav Categorized Links" %}

#### Nested Links
{% include storybook-preview.html story="components-va-sidenav--nested-links" link_text="va-sidenav Nested Links" %}

## Usage

### When to use side navigation

* When displaying a navigational hierarchy with one or two levels of depth.
* To show sub-navigation within a specific section of a site.
* To present a curated group of closely related pages or resources within a section.

### When to consider something else

* For small sections with fewer than five pages, where a full navigation structure may be unnecessary.
* For navigating within a single, long page. Use an [On this page]({{ site.baseurl }}/components/on-this-page) component instead.
* When linking to content that isn't closely related.
* Only one Side Navigation component should be used per page. If more are needed, consider alternative navigation solutions.

### How this component works

Side Navigation provides secondary navigation within a specific section of a website. It helps users understand the scope of the current topic and move between closely related pages. This is distinct from the site-wide [Header]({{ site.baseurl }}/components/header) navigation, which covers the entire site, and the [On this page]({{ site.baseurl }}/components/on-this-page) component, which navigates within a single page.

The component is designed to reflect a user's task-oriented goals, rather than the internal structure of the VA. 

There are two primary ways to structure side navigation item that contains child pages:

* **Categorized Links**: A top-level item can serve as a non-clickable heading for a group of child pages. This pattern is useful for organizing links into thematic categories, similar to the "spokes" on a VA.gov benefit hub page, where a title like "Manage benefits" introduces a list of related tasks.

* **Nested Links**: A parent item can be a standard link that navigates to a landing page for that section, while also containing a nested list of links to child pages. This is a common pattern for hierarchical site structures.

## Behavior

At mobile breakpoints, the navigation menu is hidden by default to save space. A trigger button, typically labeled "Related pages menu", reveals the navigation menu similarly to an [Accordion]({{site.baseurl}}/components/accordion) when activated.

### Placement

The Side Navigation component should always appear in a consistent space throughout all of VA.gov whenever it is used.

#### Desktop View

At desktop breakpoints, the component should be placed at the top of the left column in a [two-column layout]({{site.baseurl}}/foundation/layout/page-layouts#two-columns-content-on-right).

{% include component-example.html alt="Paperless Delivery with side navigation in a desktop view" caption="Desktop view: Side navigation in the Paperless Delivery example." file="/images/components/side-navigation/side-navigation-desktop.png" %}

#### Mobile View
At mobile breakpoints, the Side Navigation should appear below the page title and any introductory content, but above the main body content. It should be collapsed by default behind a "Related pages menu" button that toggles visibility. This ensures mobile users can access navigation without it taking up excessive screen space. When expanded, the menu should push content downward rather than overlaying it.

<figure class="site-component-example">
  <img src="{{ site.baseurl }}/images/components/side-navigation/side-navigation-mobile-closed.png" alt="Paperless Delivery with a collapsed side navigation in a mobile view" class="site-component-example__image" style="max-width:256px">
  <img src="{{ site.baseurl }}/images/components/side-navigation/side-navigation-mobile-open.png" alt="Paperless Delivery with an expanded side navigation in a mobile view" class="site-component-example__image" style="max-width:256px">
  <figcaption class="site-component-example__caption">Mobile views: Side navigation collapsed and expanded in the Paperless Delivery example.</figcaption>
</figure>

## Code usage

Side Navigation is built as a flexible component using a compositional architecture. This means the final navigation menu is constructed by combining several smaller, internal child components within a parent container. This modular approach simplifies maintenance, improves future expandability, and allows for easy integration into different environments.

The component is composed of the following parts:

`va-sidenav` **(Parent Component)**: This is the main container that wraps all the navigation elements. It can include an optional header with a title and an optional icon.

`va-sidenav-item` **(Internal Child Component)**: This is the basic building block for a single, clickable navigation link. It includes properties for the link's destination (`href`) and label. It can also be flagged as the `current-page` for distinct styling.

`va-sidenav-submenu` **(Internal Child Component)**: This component acts as a container for nesting `va-sidenav-items`, allowing for the creation of a hierarchical structure (child and grandchild links). The parent item of a submenu can optionally be a link itself.

This compositional structure allows developers to build complex navigation menus by slotting together the necessary child components. For single-page applications, the component supports router integration by firing a vaRouteChange event, which prevents native link routing and allows a routing library like React Router to handle the navigation.

## Content considerations

* Keep links in the side navigation short. They can be shorter derivatives of page titles themselves.
* If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Usability test to find the right balance between breadth and depth.

## Accessibility considerations

* Ensure the side navigational system is keyboard accessible. Users should be able to tab through each link.

## Related

* [On this page]({{ site.baseurl }}/components/on-this-page)
* [Header]({{ site.baseurl}}/components/header)
* [Tabs]({{ site.baseurl}}/components/tabs)

{% include _component-checklist.html component_name="va-service-list-item" %}