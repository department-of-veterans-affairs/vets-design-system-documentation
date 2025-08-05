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

All teams must now be using the v3 versions of our web-components. The Design System Team continues to roll out the new v3-based System including syncing color, typography, and spacing with the U.S. System.

### How to use the new v3-based components

#### Designers

[Add the {{ site.design_library_name }}]({{ site.baseurl }}/about/designers/design-libraries#add-the-vads-component-library-to-your-project) in Figma to be able to use the new v3-based versions of our components.

#### Migration strategy

[Instructions are available for developers]({{ site.baseurl }}/about/developers/using-web-components#uswds-v1-to-v3-migration) to be able to migrate components onto their v3-based version.

### Governance rules for using components

To ensure consistency and quality across our applications, all teams must follow these rules when using design system components:

* Do not use v1 components. Only use v3 components in your applications and pages. **Using a v1 component will be considered a launch-blocking issue and must be fixed before your team can launch to production.**
  * The only exception is if there is no v3 equivalent available.
* If your team is using a user interface element outside of the [design system web components](https://design.va.gov/storybook/), that is coded to look and function like a design system web component, that is considered an imposter component and will be listed as a violation at your Staging Review. Any user interface element that can use a design system web component should use it. **Any use of an imposter component will be considered a launch-blocking issue and must be fixed before your team can launch to production.**
  * Exceptions to this are default links and buttons. HTML elements `<button>` and `<a>`, with the appropriate classes added for styling consistency, may be used. This only applies to elements styled as **[Button - Default]({{ site.baseurl }}/components/button/)** and **[Link - Default]({{ site.baseurl }}/components/link)** variations. HTML elements styled as any other variation will be considered imposter components.

Examples of design system components can be found in [Storybook](https://design.va.gov/storybook) or in this section (components are listed in the side navigation).

{% include components-patterns-templates.md %}

## Create or update a component

If you have a new component, or an update to an existing component, consider contributing back to the design system. Reach out to the Design System Team if you have questions.

<va-link-action
  href="{{ site.baseurl }}/about/contributing-to-the-design-system"
  text="Create or update a component"
  type="secondary"
></va-link-action>
