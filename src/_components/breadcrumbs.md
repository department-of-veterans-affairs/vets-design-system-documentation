---
layout: component
title: Breadcrumbs
intro-text: "Breadcrumbs provide secondary navigation to help users understand where they are in a website. In addition, the breadcrumb tells search engines how the site is structured, and it can be displayed in search results (for unauthenticated content that doesn’t require users to be logged in). This can improve rankings, and provide users with additional context."
status: use-deployed
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=35%3A151&mode=design&t=ep6tlGT5gNsbWqGP-1
uswds-v3: default
web-component: va-breadcrumbs
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples

### Default

{% include storybook-preview.html height="100px" story="uswds-va-breadcrumbs--default" link_text="va-breadcrumbs" %}

#### Default at mobile viewport width

{% include storybook-preview.html width="320px" height="100px" story="uswds-va-breadcrumbs--default" link_text="va-breadcrumbs" %}

### Rerender state

{% include storybook-preview.html story="uswds-va-breadcrumbs--rerender-state" link_text="va-breadcrumbs v3 and adjust state" %}

### Wrapping state

{% include storybook-preview.html story="uswds-va-breadcrumbs--wrapping-state" link_text="va-breadcrumbs v3 wrapping state" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/breadcrumb/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Additional guidance for VA

### When to use

* **For pages in hierarchies with more than 2 levels.** Use a breadcrumb for sections of content that have more than 2 levels. The breadcrumb should be displayed starting at the level 2 page and persist on all child pages in the hierarchy. For example, if a level 2 page has child pages, all pages starting at that level 2 page would need a breadcrumb.  
* **To provide a consistent experience for similar pages.** A breadcrumb can be used if similar pages or sections of a site are using breadcrumbs even if it doesn’t meet the requirements. For example, the Service Members benefit hub page is a level 2 page with no hierarchy and therefore wouldn’t normally have a breadcrumb. However, all other benefit hubs do have a breadcrumb, so providing one on this page creates a consistent experience when navigating various benefit hubs to learn about benefits. 

### When to consider something else

* **The top level page of your site.** A breadcrumb is not necessary for the top level page of your site. For example, the VA.gov home page should not have a breadcrumb.
* **Level 2 pages with no children.** A breadcrumb is not necessary for pages that are 2 levels deep and do not have any child pages.  For example, the My VA page lives at `VA.gov home > My VA`. Since this page is only 2 levels deep and does not have any child pages, it does not need a breadcrumb. 
* **When using the minimal header component.** When the [Header - Minimal]({{ site.baseurl }}/components/header/header-minimal) component is used, the breadcrumb can be removed to further prevent the user from easily navigating away and inadvertently interrupting their main task.

### Usability guidance

#### The breadcrumb should be placed below the header and above the main content.
The placement of the breadcrumb must be consistent from page to page and across the entire site.

Spacing for the breadcrumb is built in to the component and should be consistent throughout all layouts. The correct spacing is specified in the images below:

{% include component-example.html alt="Breadcrumbs have 20px / 2.5 spacing units above and 32px / 4 spacing units below at a mobile breakpoint." file="/images/components/breadcrumbs/breadcrumbs-spacing-mobile.png" caption="Breadcrumbs have 20px or 2.5 spacing units above and 32px or 4 spacing units below at a mobile breakpoint." %}

{% include component-example.html alt="Breadcrumbs have 20px / 2.5 spacing units above and 48px / 6 spacing units below at a desktop breakpoint." file="/images/components/breadcrumbs/breadcrumbs-spacing-desktop.png" caption="Breadcrumbs have 20px or 2.5 spacing units above and 48px or 6 spacing units below at a desktop breakpoint." %}

#### Use a descriptive label for  the first segment of the breadcrumb. 
For the home page of a site, do not use icons or just `Home`.  This ensures that the main site home page is differentiated from other types of landing pages on the site.  For www.va.gov, the home page label should be `VA.gov home`.

#### Breadcrumbs must represent content hierarchy, not the user’s click path. 
Breadcrumbs represent hierarchical relationships between pages and their placement in that hierarchy, giving the user a sense of where they are in the overall site. 

#### Each breadcrumb segment should use the full page title of the corresponding page.
Do not shorten or truncate titles of a page (the H1) in the breadcrumb to reduce or eliminate wrapping.  Consider alternative, shorter page titles if possible. Always follow the content style guide for writing [page titles]({{ site.baseurl }}/content-style-guide/page-titles-and-section-titles).

#### All segments of the breadcrumb should be interactive and link to their corresponding page. 
Each breadcrumb segment, including the current page segment,  should link to its corresponding page. Making every segment a link allows screen readers to voice the page link whether the user navigates by element or by tabbing.  Making the current page a link rather than text makes it a focusable and clickable element. This follows [WAI-ARIA Authoring Practices Guide (APG) guidance](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/), which states that an element with `aria-current="page"` should represent the current page.

### Breadcrumbs for linear page flows
When a user starts a linear flow on the site (i.e. a form flow or task flow), the breadcrumb should represent the placement of the start of that flow within the site, but not follow the user as they step through the pages of the flow.

* The breadcrumb only represents the hierarchy up to the first page of the linear flow (i.e. often the introduction page for forms). As the user progresses through the flow, the breadcrumb does not change or progress with them, and instead remains displaying only up to that initial page.
  * Example: for a form with the title ‘Apply for VA health care’, the breadcrumb for the introduction page, all pages within the flow, and confirmation page would be `VA.gov home > Health care > Apply for VA health care`
* This allows a user to use the breadcrumb to return to the beginning of the form flow. The breadcrumb combined with the [Progress bar - Segmented]({{ site.baseurl }}/components/form/progress-bar-segmented) component, provides context for where a user is on the site and within the flow
* Other CTAs on the page, such as the [Button group]({{ site.baseurl }}/components/button/button-group) component, can be used to navigate between pages of the flow. 

{% include component-docs.html component_name=page.web-component %}

### Router link support

To use React Router with this component [follow these instructions](https://design.va.gov/storybook/?path=/docs/uswds-va-breadcrumbs--with-router-link-support#with-router-link-support).

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/breadcrumb/#accessibility-select"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>
