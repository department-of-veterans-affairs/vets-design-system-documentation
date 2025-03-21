---
layout: component
title: Icon
intro-text: "Icons help communicate meaning, actions, status, or feedback. This component provides an easy way to access the foundational iconography of the Design System."
figma-link: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=293%3A6211&mode=design&t=TEFuX0eQQAyBV7Xh-1
status: use-with-caution-available
web-component: va-icon
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-icon--default" link_text=page.web-component %}

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

By default, the web component icon will display as `--vads-color-base` which is the base color set across VA.gov. If a different icon color is needed, style can be applied directly to the web component element using CSS. For example:

```
<va-icon size="4" name="alarm" class="alarm-icon" >

.alarm-icon {
  color: var(--vads-color-white);
}

```

### Icon Sizing Reference

<va-table table-type="bordered">
  <va-table-row>
    <span>Size Attribute</span>
    <span>Icon Preview</span>
    <span>Rendered CSS Pixels</span>
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

{% include component-docs.html component_name=page.web-component %}