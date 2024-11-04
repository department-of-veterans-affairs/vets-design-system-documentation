---
layout: component
title: Sidenav
intro-text: "Hierarchical, vertical navigation to place at the side of a page."
github-title: va-sidenav
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

<va-alert
  close-btn-aria-label="Close notification"
  status="warning"
  visible
  uswds
>
  <h2 slot="headline">
    This component is not officially supported
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      This component has not yet been built as a component in the Design System. Thus the Design System Team does not officially recognize nor support this component. Guidance and design assets are provided as is.
    </p>
  </div>
</va-alert>

## Example

{% include storybook-preview.html height="550px" story="components-sidenav--default-story" %}

## Usage

### When to use sidenav

* To display the “sub-navigation” within a section of the website.

### When to consider something else

* If the site has fewer than five pages, consider organizing the page without a navigational hierarchy.
* If your page already has a horizontal and vertical navigation bar, consider ways to simplify your navigation system.
* If your content is within a frame or sub-area of a page, consider ways to simplify your navigation system.

### How to use sidenav

* Typically used in a [two-column layout]({{ site.baseurl }}/foundation/layout/page-layouts#two-columns-content-on-right).
* Indicate where a user is within the navigational hierarchy. Use the “active” state to show users which page they have navigated to.
* Keep the navigation links short. They can be shorter derivatives of page titles themselves.
* If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Usability test to find the right balance between breadth and depth.

## Code usage

* All elements, including the `<script>` tag in the snippet are required.
* The `va-btn-sidebarnav-trigger` may appear anywhere in the DOM, as long as it appears in an expected place on mobile devices.

## Accessibility considerations

* Ensure the side navigational system is keyboard accessible. Users should be able to tab through each link.