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

Components the VA shares with the USWDS have been synced to the design, styling, and functionality of the US System while retaining elements necessary to the VA. Components that have been converted are marked with a badge <a class="site-component-badge-link site-component-badge-link--uswds" href="{{ site.uswds_link }}"><img src="{{ site.baseurl }}/assets/img/uswds-logo.svg" class="site-component-badge-link__img" width="16px" height="16px" /> USWDS v3</a> at the top of their component page.

There are 3 exceptions where additional work is ongoing:

1. va-table (additional variations to be added)
2. va-file-input (fully redesigned)
3. va-text-input (adding prefix, suffix and merging with number input)

All teams must now be using the v3 versions of our web-components. The Design System Team continues to roll out the new v3-based System including syncing color, typography, and spacing with the U.S. System.

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
    v1 components have now been deprecated
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      If your team is still using a v1 component, instances will be flagged in the Collab Cycle and may be considered launch blocking.
    </p>
  </div>
</va-alert>

### Governance rules for using v3-based components

v3-based versions of the components are designed to sit alongside our current v1 based components and the foundational elements of the Design System. Teams must use the new versions of our web-components and following these rules:

* Do not mix and match different versions (v1 vs. v3) of the same component on the same page. For example, if you were to use the v3-based version of the [accordion component]({{ site.baseurl }}/components/accordion) on a page, that version must be used throughout that page (and ideally throughout your application as soon as possible).
* Do not mix and match v1 and v3 based [form components]({{ site.baseurl }}/components/form/) in the same application flow. For example, if you were to use the v3-based version of the radio button component on the first step in an application, that version must be used on all subsequent steps throughout the flow.

{% include components-patterns-templates.md %}

## Create or update a component

If you have a new component, or an update to an existing component, consider contributing back to the design system. Reach out to the Design System Team if you have questions.

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/about/contributing-to-the-design-system">Create or update a component</a>
