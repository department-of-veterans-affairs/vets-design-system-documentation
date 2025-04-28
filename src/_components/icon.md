---
layout: component
title: Icon
intro-text: "Icons help communicate meaning, actions, status, or feedback. This component provides an easy way to access the foundational iconography of the Design System."
figma-link: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=293%3A6211&mode=design&t=TEFuX0eQQAyBV7Xh-1
status: use-with-caution-available
web-component: va-icon
anchors:
  - anchor: Preview
  - anchor: Usage
  - anchor: Accessibility considerations
  - anchor: Requesting a new icon
---

## Preview

{% assign icons = site.data.icons %}

<va-table table-type="bordered" full-width>
  <va-table-row>
    <span class="vads-u-text-align--center vads-u-display--block">Preview</span>
    <span><code>icon</code></span>
    <span>Known Usage</span>
  </va-table-row>

  {% for icon in icons %}
    <va-table-row>
      <span class="vads-u-text-align--center vads-u-display--block">
        <va-icon icon="{{icon.id}}" size=3 />
      </span>
      <span><code><small>{{ icon.id }}</small></code></span>
      <span>{{ icon.usage }}</span>
    </va-table-row>
  {% endfor %}
</va-table>

<va-alert status="info" slim>
  Note: The icons listed above show their known uses on VA.gov and are only a subset of the full icon set. <a href="{{ storybook_path }}/storybook/?path=/story/uswds-va-icon--icons">View all available icons</a>
</va-alert>

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/icon/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### How this component works

This web component provides access to the full suite of U.S. Web Design System iconography as well as additions specific to the VA. The [list of available icons is a foundational element]({{ site.baseurl }}/foundation/icons) of the Design System.

### Choosing between icons

Each icon has a chosen semantic meaning and should be used in a manner that is consistent with that meaning. For example, a clock icon is used to represent time and thus should not be ambiguously used to represent a date. Some icons are intentionally used in different applications because they share the same meaning.

Before introducing a new icon check the list to be see if the meaning of the icon you need corresponds to an existing icon. If you have questions about a new icon, or icon usage, feel free to reach out to the Design System team.

### Icon Color

By default, the web component icon will display as `--vads-color-base` which is the base color set across VA.gov. If a different icon color is needed, a `color` style can be applied directly to the web component element using CSS.

<style>
  .icon-example {
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 1rem;
  }

  .info-icon {
    background-color: var(--vads-color-primary);
    border-radius: 50%;
    color: var(--vads-color-white);
    padding: 8px;
  }
</style>

<div class="icon-example">
  Example: <va-icon size="3" icon="medical_services" class="info-icon" />
</div>


```
.info-icon {
    color: var(--vads-color-white);
    background-color: var(--vads-color-primary);
    border-radius: 50%;
    padding: units(1);
}

<va-icon size="3" icon="medical_services" class="info-icon" />

```

### Icon Sizing Reference

<va-table table-type="bordered">
  <va-table-row>
    <span>Size Attribute</span>
    <span>Icon Preview</span>
    <span>Rendered CSS Pixels</span>
  </va-table-row>
  <va-table-row>
    <span><i>(none)</i></span>
    <span><va-icon icon="search" /></span>
    <span>1em x 1em</span>
  </va-table-row>
  <va-table-row>
    <span><code class="code vads-u-border--1px vads-u-border-color--gray-light">3</code></span>
    <span><va-icon icon="search" size="3" /></span>
    <span>24 x 24</span>
  </va-table-row>
  <va-table-row>
    <span><code class="code vads-u-border--1px vads-u-border-color--gray-light">4</code></span>
    <span><va-icon icon="search" size="4" /></span>
    <span>32 x 32</span>
  </va-table-row>
  <va-table-row>
    <span><code class="code vads-u-border--1px vads-u-border-color--gray-light">5</code></span>
    <span><va-icon icon="search" size="5" /></span>
    <span>40 x 40</span>
  </va-table-row>
  <va-table-row>
    <span><code class="code vads-u-border--1px vads-u-border-color--gray-light">6</code></span>
    <span><va-icon icon="search" size="6" /></span>
    <span>48 x 48</span>
  </va-table-row>
  <va-table-row>
    <span><code class="code vads-u-border--1px vads-u-border-color--gray-light">7</code></span>
    <span><va-icon icon="search" size="7" /></span>
    <span>56 x 56</span>
  </va-table-row>
  <va-table-row>
    <span><code class="code vads-u-border--1px vads-u-border-color--gray-light">8</code></span>
    <span><va-icon icon="search" size="8" /></span>
    <span>64 x 64</span>
  </va-table-row>
</va-table>

## Accessibility considerations
Icon usage typically falls into two categories, decorative and semantic.

- **Decorative icons** are icons that are only used for visual reinforcement. If these were removed from the page, users would still be able to understand and use the page.</li>
- **Semantic icons** are icons that convey meaning, rather than only being decorative. This includes icons without text next to them that are used as interactive elements such as buttons.

### Using decorative icons

If your icons are only decorative, _do not_ include <code>srtext</code> on the component. The component will add an <code>aria-hidden</code> attribute to the icon for accessibility.

Icon buttons containing a decorative icon plus a visual label are supported with <a href="{{ site.baseurl }}/components/button-icon">Button - Icon</a>, but with limited options. Rather than supporting any text and icon combination, these will be added on a case-by-case basis. Generally, we feel that icons in buttons are not necessary.

### Using semantic icons

We do not advise using icons as links or buttons on their own. Links and buttons should always have a visible label.

Exceptions to this are a close button on a modal or an alert. However, it is advised to use the design system component for these scenarios, as they are coded with the proper accessibility attributes.

## Requesting a new icon
<p>
  If your team needs a new icon and wants to suggest adding it to the design system, follow these steps:
</p>

<ol>
  <li>
    <strong>Check Existing VADS Icons</strong>:
    Look through the entire icon set to ensure a similar icon does not already exist. We aim to maintain consistency in semantic use by avoiding duplicating similar icons.
    </li>
    <li>
      <strong>Explore USWDS Icons</strong>:
      Search
      <a href="https://designsystem.digital.gov/components/icon/">USWDS Icon</a> to see if another existing icon suits your
      needs. Preferably, choose generic icons that could be reused in various applications.

      <p>If VADS and USWDS do not contain a suitable icon, you
        may search <a href="https://fonts.google.com/icons">Material
          Icons</a> or browse the official <a
          href="https://www.figma.com/community/file/1014241558898418245/material-design-icons">Material Design Icons</a>
        Figma
        plugin by Google. Note that we typically use the "filled" icon style.</p>
      </li>
  <li>
    <strong>Submit Your Icon</strong>:
    Once you've found a suitable icon for VADS, submit it using the following link:
    <p>
      <va-action-link href="{{ site.request_addition_link }}">Request a new addition to the Design System</va-action-link>
    </p>
  </li>
</ol>

{% include component-docs.html component_name=page.web-component %}