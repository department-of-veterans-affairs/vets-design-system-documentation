---
layout: default
sub_section: sidenav
title: Sidenav
---

# Sidenav

<p class="va-introtext">Hierarchical, vertical navigation to place at the side of a page.</p>

<div class="site-c-showcase">
{% include_relative html/sidenav.html %}
</div>

```html
{% include_relative html/sidenav.html %}
```

## Accessibility
* Ensure the side navigational system is keyboard accessible. Users should be able to tab through each link.

## Usability

### When to use
* To display a navigational hierarchy with one to three levels.
* To display the “sub-navigation” within a section of the website.

### When to consider something else
* If the site has fewer than five pages, consider organizing the page without a navigational hierarchy.
* If your page already has a horizontal and vertical navigation bar, consider ways to simplify your navigation system.
* If your content is within a frame or sub-area of a page, consider ways to simplify your navigation system.

### Guidance
* Indicate where a user is within the navigational hierarchy. Use the “active” state to show users which page they have navigated to.
* Keep the navigation links short. They can be shorter derivatives of page titles themselves.
* If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Usability test to find the right balance between breadth and depth.
