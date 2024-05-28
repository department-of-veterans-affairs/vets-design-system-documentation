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

<a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/icon/">Refer to the U.S. Web Design System for usage guidance</a>

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

### How to migrate from Font Awesome to va-icon

Follow our detailed instructions on [how to migrate to va-icon]({{ site.baseurl }}/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon).

### Icon Sizing Reference

<table class="usa-table-borderless" style="width:auto">
  <thead>
    <tr>
      <th>Size Attribute</th>
      <th>Icon Preview</th>
      <th>Rendered CSS Pixels</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">3</code></td>
      <td><va-icon icon="search" size="3" /></td>
      <td>24 x 24</td>
    </tr>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">4</code></td>
      <td><va-icon icon="search" size="4" /></td>
      <td>32 x 32</td>
    </tr>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">5</code></td>
      <td><va-icon icon="search" size="5" /></td>
      <td>40 x 40</td>
    </tr>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">6</code></td>
      <td><va-icon icon="search" size="6" /></td>
      <td>48 x 48</td>
    </tr>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">7</code></td>
      <td><va-icon icon="search" size="7" /></td>
      <td>56 x 56</td>
    </tr>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">8</code></td>
      <td><va-icon icon="search" size="8" /></td>
      <td>64 x 64</td>
    </tr>
    <tr>
      <td><code class="code vads-u-border--1px vads-u-border-color--gray-light">9</code></td>
      <td><va-icon icon="search" size="9" /></td>
      <td>72 x 72</td>
    </tr>
  </tbody>
</table>

{% include component-docs.html component_name=page.web-component %}