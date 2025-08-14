---
layout: component
title: Side Navigation
github-title: va-sidenav
intro-text: "Side Navigation helps users move between a group of related pages."
research-title: Sidenav
figma-link: https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=34159-3535&t=w2lNwVQNDrEuZwT0-1
web-component: va-sidenav
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Code considerations
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

<va-alert status="info">
  <h2 slot="headline">Enhancements planned, feedback welcome</h2>
  <p>This component is available for use and will continue to evolve with additional features and functionality. It is planned to replace several existing side navigation implementations across VA.gov to promote consistency and improve usability.</p>
  <p>If you want to help us continue to improve this component, <a href="https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4252">join the discussion</a>!</p>
</va-alert>

## Examples

### Default
{% include storybook-preview.html story="components-va-sidenav--default" link_text="va-sidenav Default" %}

### Categorized Links
{% include storybook-preview.html story="components-va-sidenav--categorized-links" link_text="va-sidenav Categorized Links" %}

### Nested Links
{% include storybook-preview.html story="components-va-sidenav--nested-links" link_text="va-sidenav Nested Links" %}

## Usage

### When to use Side Navigation

* To display a navigational hierarchy of one or two levels.
* To create a sub-navigation of closely related pages.

### When to consider something else

* **If you have fewer than 5 pages.** A full navigation structure may not be necessary for a small grouping of pages.
* **If you want users to navigate to different area on the same page.** Instead, use the [On this page]({{ site.baseurl }}/components/on-this-page) component.
* **If the links aren't closely related or don't live in the same section of the website.**

### How this component works

Side Navigation provides secondary navigation for a group of related pages. It helps users see where they are and easily move between related pages. This is different from the site-wide [Header]({{ site.baseurl }}/components/header) navigation, which covers the entire site, and the [On this page]({{ site.baseurl }}/components/on-this-page) component, which navigates within a single page.

There are 3 primary ways to structure Side Navigation:

* **Default**: A simple list of links without the optional header icon and text, categories, or hierarchical nested links. This is the most basic implementation of the component.

* **Categorized Links**: A top-level item can serve as a non-clickable heading for a group of child pages. This pattern is useful for organizing links into thematic categories, similar to the "spokes" on a VA.gov benefit hub page, where a title like "Manage benefits" introduces a list of related tasks.

* **Nested Links**: A parent item can be a standard link that navigates to a landing page, while also containing a nested list of links to child pages. This is a common pattern for hierarchical site structures.

## Behavior

### Placement

The Side Navigation component should appear in a consistent location across desktop views and a consistent (but distinct) location across mobile views.

#### Desktop View

At desktop breakpoints, the component should be placed at the top of the left column in a [two-column layout]({{site.baseurl}}/foundation/layout/page-layouts#two-columns-content-on-right).

{% include component-example.html alt="Paperless Delivery with Side Navigation in a desktop view" caption="Desktop view: Side Navigation in the Paperless Delivery example." file="/images/components/side-navigation/side-navigation-desktop.png" %}

#### Mobile View

At mobile breakpoints, the Side Navigation should appear below the breadcrumb but above the page title and any content. It should be collapsed by default behind a "Related pages menu" button that toggles visibility. This works similarly to an [Accordion]({{site.baseurl}}/components/accordion). This ensures mobile users can access navigation without it taking up excessive screen space. When expanded, the menu should push content downward rather than overlaying it.

<figure class="site-component-example">
  <img src="{{ site.baseurl }}/images/components/side-navigation/side-navigation-mobile-closed.png" alt="Paperless Delivery with a collapsed Side Navigation in a mobile view" class="site-component-example__image" style="max-width:256px">
  <img src="{{ site.baseurl }}/images/components/side-navigation/side-navigation-mobile-open.png" alt="Paperless Delivery with an expanded Side Navigation in a mobile view" class="site-component-example__image" style="max-width:256px">
  <figcaption class="site-component-example__caption">Mobile views: Side Navigation collapsed and expanded in the Paperless Delivery example.</figcaption>
</figure>

## Code considerations

Side Navigation is built as a flexible component using a compositional architecture. This means we construct the final navigation menu by combining several smaller, internal child components within a parent container. This modular approach simplifies maintenance, improves future expandability, and allows for easy integration into different environments.

The component is composed of the following parts:

* **Parent Container** (`va-sidenav`):  
  This is the main container that wraps all the navigation elements. It can include an optional header with a title and an optional icon.
* **Child Component** (`va-sidenav-item`):  
  This is the basic building block for a single, clickable navigation link. It includes properties for the link's destination (`href`) and label. You can also flag it as the `current-page` for distinct styling.
* **Hierarchical Child Component** (`va-sidenav-submenu`):  
  This component acts as a container for nesting `va-sidenav-items`. This allows you to create a hierarchical structure (child and grandchild links). The parent item of a submenu can optionally be a link itself.

This compositional structure allows developers to build complex navigation menus by slotting together the necessary child components. For single-page applications, the component supports router integration by firing a `vaRouteChange` event. This prevents native link routing and allows a routing library like React Router to handle the navigation.

{% include component-docs.html component_name=page.web-component %}

## Content considerations

* **[Link text]({{ site.baseurl }}/content-style-guide/links) should be concise and descriptive.** Link text should be scannable and clearly convey the purpose of the page. It does not always need to match the related page's title. 
* **Consider the impact of displaying long or complex link lists.** If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Test with real users to find the right balance between breadth and depth.

## Accessibility considerations

<va-link-action href="https://designsystem.digital.gov/components/side-navigation/accessibility-tests/" text="Refer to the U.S. Web Design System for additional accessibility testing guidance" type="secondary"></va-link-action>

### Focus order placement

- **Place the Side Navigation in the focus order immediately after the breadcrumb and before the main content.** This order helps screen reader and keyboard users understand their location in the section and how it relates to other pages nearby. Users can choose to bypass the navigation by using the "Skip to content" link that's available at the top of each page, or by using landmark navigation in their screen reader to select their desired content region.

### Markup placement

- **Place the Side Navigation outside of \<main\>.** We recommend placing the Side Navigation outside of the `<main>` element, ideally in a landmark region like `<aside>` to help define the structure of the page and support assistive technology navigation. However, we recognize this may not be technically feasible in all implementations. If the side navigation must be placed inside `<main>`, make sure it's placed above the main content in the focus order.


## Related
* [On this page]({{ site.baseurl }}/components/on-this-page)
* [Header]({{ site.baseurl}}/components/header)
* [Tabs]({{ site.baseurl}}/components/tabs)

{% include _component-checklist.html component_name=page.web-component %}
