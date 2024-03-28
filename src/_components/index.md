---
layout: default
title: Components
index: true
---

# Components

<div class="va-introtext" markdown="1">
  Components are interactive and non-interactive UI elements that can be grouped together or presented individually. They are independent, reusable chunks of a user interface.
</div>

## Upgrade to U.S. Web Design System v3

Many of the components the VA shares with the USWDS have been synced to the design, styling, and functionality of the US System while retaining elements necessary to the VA. Components that have been converted are marked with a badge <a class="site-component-badge-link site-component-badge-link--uswds" href="{{ site.uswds_link }}"><img src="{{ site.baseurl }}/assets/img/uswds-logo.svg" class="site-component-badge-link__img" width="16px" height="16px" /> USWDS v3</a> at the top of their component page.

We ask that teams begin to use these new versions of our web-components to aid in the process of upgrading VA.gov to USWDS v3. v3-based versions of the components are designed to sit alongside our current v1 based components and the foundational elements of the Design System. Thus for most converted components you may notice only slight differences in appearance or functionality. The Design System Team will be rolling out the new v3-based System over the upcoming months including syncing color, typography, and spacing with the U.S. System.

### How to use the new v3-based components

#### Designers

[Add the {{ site.design_library_name }}]({{ site.baseurl }}/about/designers/design-libraries#add-the-vads-component-library-to-your-project) in Figma to be able to use the new v3-based versions of our components.
 
#### Migration strategy

[Instructions are available for developers]({{ site.baseurl }}/about/developers/using-web-components#uswds-v1-to-v3-migration) to be able to migrate components onto their v3-based version.

<va-alert
  close-btn-aria-label="Close notification"
  status="warning"
  visible
  uswds
>
  <h2 slot="headline">
    v1 components will be deprecated on May 3, 2024
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      In late February, all components that have a v3 version will be set to default to v3. By May 3, 2024 all v1 components will be deprecated.
    </p>
  </div>
</va-alert>

### Governance rules for using v3-based components

v3-based versions of the components are designed to sit alongside our current v1 based components and the foundational elements of the Design System. Teams may begin using the new versions of our web-components with the following caveats:

* Do not mix and match different versions (v1 vs. v3) of the same component on the same page. For example, if you were to use the v3-based version of the [accordion component]({{ site.baseurl }}/components/accordion) on a page, that version must be used throughout that page (and ideally throughout your application as soon as possible).
* Do not mix and match v1 and v3 based [form components]({{ site.baseurl }}/components/form/) in the same application flow. For example, if you were to use the v3-based version of the radio button component on the first step in an application, that version must be used on all subsequent steps throughout the flow.

### Guidance for v3-based components

Guidance is in the process of being synced with the U.S. System. In the meantime, if you have a specific guidance question or concern with a v3-based component, reach out to the Design System Team.

{% include components-patterns-templates.md %}

## Create or update a component

If you have a new component, or an update to an existing component, consider contributing back to the design system. Reach out to the Design System Team if you have questions.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/about/contributing-to-the-design-system">Create or update a component</a>
