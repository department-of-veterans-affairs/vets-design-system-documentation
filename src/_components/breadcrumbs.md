---
layout: component
title: Breadcrumbs
intro-text: "Breadcrumbs provide secondary navigation to help users understand where they are in a website. In addition, the breadcrumb tells search engines how the site is structured, and it can be displayed in search results. This can improve rankings, and provide users with additional context."
status: use-deployed
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=35%3A151&mode=design&t=ep6tlGT5gNsbWqGP-1
uswds-v3: default
web-component: va-breadcrumbs
anchors:
  - anchor: Examples - v3
  - anchor: Examples - v1
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples - v3

### Default

{% include storybook-preview.html height="100px" story="uswds-va-breadcrumbs--default" link_text="va-breadcrumbs" %}

#### Default at mobile viewport width

{% include storybook-preview.html width="320px" height="100px" story="uswds-va-breadcrumbs--default" link_text="va-breadcrumbs" %}

### Rerender state

{% include storybook-preview.html story="uswds-va-breadcrumbs--rerender-state" link_text="va-breadcrumbs v3 and adjust state" %}

### Wrapping state

{% include storybook-preview.html story="uswds-va-breadcrumbs--wrapping-state" link_text="va-breadcrumbs v3 wrapping state" %}

## Examples - v1

### Default

{% include storybook-preview.html height="100px" story="components-va-breadcrumbs--default" link_text="va-breadcrumbs" %}

## Usage

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/breadcrumb/">Refer to the U.S. Web Design System for usage guidance</a>

### Additional guidance for VA

### When to use

* **Complex levels.** Use a breadcrumb when content is more than 2 levels deep. 

### When to consider something else

* **Simple sites.** Do not use a breadcrumb if the site or experience has a flat structure (i.e. only 2 levels of content or less)
* **Irrelevant hierarchy.** Do not use a breadcrumb if the path or hierarchy of the page is irrelevant to the user or experience. 
* **One way exit.** Do not use a breadcrumb if it would create a way for a user to exit or navigate away from a user flow that they are unable to return to, or would result in a loss of data. 

### Usability guidance

* **Breadcrumbs should be based on content hierarchy, not on the user's click path or browser history.** For online applications and forms, the breadcrumb represents the forms's placement within the site hierarchy, it does not track the steps or progress of the form flow. In other words, the breadcrumb will only show up to the form as the current page segment, and will maintain that display while the user goes through the flow. For navigation through the steps of the form flow, forward and backward CTAs can be provided as part of the main content as appropriate. 
* **Include one, include all.** If you use a breadcrumb for one page in a hierarchy, always use a breadcrumb for all pages within that hierarchy. 
* **Each breadcrumb segment should match the H1 of the corresponding page.** When writing H1s for a page, follow the content [styleguide for writing page titles]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles).

### Placement

* The breadcrumb should be placed below the header and above the main content.
* The placement of the breadcrumb must be consistent from page to page.

### Behavior

* All links in the breadcrumb should be interactive and link to their corresponding page, or in the case of the current page link, link to content on the current page.

### SEO considerations

* Search engines utilize breadcrumbs to understand your site structure and gain additional context about your page to help in ranking.
* Breadcrumbs can also be displayed in search engine results pages (SERPs), which provides additional context to users about your page.
* Breadcrumbs are not the only element used by search engines, go to [writing for SEO in the content styleguide]({{ site.baseurl }}/content-style-guide/seo) for more SEO assistance. 

{% include component-docs.html component_name=page.web-component %}

### Router link support

To use React Router with this component [follow these instructions](https://design.va.gov/storybook/?path=/docs/uswds-va-breadcrumbs--with-router-link-support#with-router-link-support).

## Content considerations

* **Use "VA.gov home" as the default home crumb title.** This component will default to "VA.gov home" for the first crumb. This is the preferred content for this crumb. Deviation from this should only be done with express permission from CAIA.

## Accessibility considerations

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/breadcrumb/#accessibility-select">Refer to the U.S. Web Design System for accessibility guidance</a>

### Additional accessibility guidance for VA

* **Make current page a link.** Use a link for the current page for robustness. While it may sound counterintuitive to link to the current page in this component, it makes sense to include this as a link so screen readers voice the current page link whether the user navigates by element or by tabbing. Making the current page a link rather than text makes it a focusable and clickable element. It also follows [WAI-ARIA Authoring Practices Guide (APG) guidances](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/) which states that an `a` element with `aria-current="page"` should represent the current page.
  * NOTE: The v1 version of this component has not been updated. Please use the v3 version of this component.