---
layout: component
title: Icon
intro-text: "Icons help communicate meaning, actions, status, or feedback. This component provides an easy way to access the foundational iconography of the Design System."
figma-link-web: https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&node-id=293%3A6211&mode=design&t=TEFuX0eQQAyBV7Xh-1
web-component: va-icon
web: true
mobile-app: true
anchors:
  - anchor: Preview
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Requesting a new icon
  - anchor: Component checklist
---

<style>
  /* Custom Page Styles */ 
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #1b1b1b;
    text-align: center;
    background-color: #fff;
    aspect-ratio: 1 / 1;
  }

  .icon-label {
    margin-top: .5rem;
  }

  .icon-example {
    align-items: center;
    display: flex;
    gap: .5rem;
    margin-bottom: 1rem;
  }

  .icon {
    background-color: var(--vads-color-primary);
    border-radius: 50%;
    color: var(--vads-color-white);
    padding: .5rem;
  }

  .icon-table {
    background: #fff;
    border-collapse: collapse;
    width: 100%;
  }

  .icon-table th {
    background: #dfe1e2;
    width: 33%;
  }

  .icon-table th:last-child {
    width: 67%;
    text-align: left;
  }

  .icon-table tr > * {
    border: 1px solid #1b1b1b;
    padding: .5rem;
  }

  /* TODO: Normalize Roboto Mono */
  /* Reference: https://designsystem.digital.gov/design-tokens/typesetting/overview/ */
  code {
    font-size: calc(1rem * .95);
  }

</style>

## Preview
<div class="vads-u-margin-bottom--3">
  <va-radio
    label="Sort icons by:"
    id="sort-icons-radio"
    onChange="sortIcons()"
  >
    <va-radio-option
      label="Category"
      name="sort-icons"
      value="category"
    />
    <va-radio-option
      label="Icon Name (A-Z)"
      name="sort-icons"
      value="name"
      checked
    />
  </va-radio> 
</div>

<div id="icons-container" class="icons-container vads-u-margin-bottom--3">
  <!-- The table will be dynamically rendered here -->
</div>

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

This web component provides access to the full suite of U.S. Web Design System iconography as well as additions specific to the VA. The list of available icons is shown [in the preview above](#preview) and is a foundational element of the Design System.

### Choosing between icons

Each icon has a chosen semantic meaning and should be used in a manner that is consistent with that meaning. For example, a clock icon is used to represent time and thus should not be ambiguously used to represent a date. Some icons are intentionally used in different applications because they share the same meaning.

Before introducing a new icon check the list to be see if the meaning of the icon you need corresponds to an existing icon. If you have questions about a new icon, or icon usage, feel free to reach out to the Design System team.

### Icon Color

By default, the web component icon will display as `--vads-color-base` which is the base color set across VA.gov. If a different icon color is needed, a `color` style can be applied directly to the web component element using CSS. You may also add a `background-color` as seen in the example below.

<div class="icon-example">
  Example: <va-icon size="3" icon="medical_services" class="icon" />
</div>

```
.icon {
    color: var(--vads-color-white);
    background-color: var(--vads-color-primary);
    border-radius: 50%;
    padding: units(1);
}

<va-icon size="3" icon="medical_services" class="icon" />
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


### Placement

Some icons may have specific placement guidance defined here.

#### When icons are paired with text

- **For single-line text, both leading and trailing icons should be vertically centered with the text.** When text wraps, leading icons should remain static by staying aligned to the top of the full text block, while trailing icons should align to the vertical center of the full text block.
  - **Examples:** [Additional Info]({{ site.baseurl }}/components/additional-info) and [Accordion - Subheader]({{ site.baseurl }}/components/accordion#subheader).
- **Icons with high visual weight, like filled icons, should generally appear before the text.** For example, filled chevrons, such as *expand_circle_right*, should appear before links.


### Special usage considerations

#### Chevrons

- **Right-facing chevrons are reserved for links, but may be used on buttons that open additional content.** In the latter case, chevrons of all directions can be used to indicate the direction in which additional content opens, like in drawers, flyout menus, and dropdowns.
  * **Examples:** Nested menu items within "VA Benefits and Health Care" in the [Header]({{ site.baseurl }}/components/header/), [Additional Info]({{ site.baseurl }}/components/additional-info), and [Alert - Expandable]({{ site.baseurl }}/components/alert/alert-expandable/).

## Accessibility considerations
Icon usage typically falls into two categories, decorative and semantic.

- **Decorative icons** are icons that are only used for visual reinforcement. If these were removed from the page, users would still be able to understand and use the page.
- **Semantic icons** are icons that convey meaning, rather than only being decorative. This includes icons without text next to them that are used as interactive elements such as buttons.

### Using decorative icons

If your icons are only decorative, _do not_ include <code>srtext</code> on the component. The component will add an <code>aria-hidden</code> attribute to the icon for accessibility.

Icon buttons containing a decorative icon plus a visual label are supported with <a href="{{ site.baseurl }}/components/button-icon">Button - Icon</a>, but with limited options. Rather than supporting any text and icon combination, these will be added on a case-by-case basis. Generally, we feel that icons in buttons are not necessary.

### Using semantic icons

We do not advise using icons as links or buttons on their own. Links and buttons should always have a visible label.

Exceptions to this are a close button on a modal or an alert. However, it is advised to use the design system component for these scenarios, as they are coded with the proper accessibility attributes.

## Requesting a new icon

### When to request a new icon

Consider requesting a new icon to be added to the Design System when:

- **No existing icon conveys the intended meaning**: After thoroughly searching both VADS and USWDS icon libraries, you cannot find an icon that clearly represents the concept or action you need to communicate.
- **The icon serves a broad, reusable purpose**: The icon would be useful across multiple VA applications and teams, not just for a single, specific use case.

### When not to request a new icon

Avoid requesting a new icon when:

- **An existing icon is "close enough"**: If an existing icon can reasonably represent your concept, use it instead of requesting a similar variation
- **It's purely decorative**: Icons that serve only visual decoration and don't convey meaning should use existing options
- **It's highly specific to one use case**: Icons that would only be useful in a single application or context should be handled locally rather than added to the system
- **It duplicates existing functionality**: Multiple icons that serve the same semantic purpose create inconsistency and confusion

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
      <p>If VADS and USWDS do not contain a suitable icon, you may search <a href="https://fonts.google.com/icons">Material
          Icons</a> or browse the official <a href="https://www.figma.com/community/file/1014241558898418245/material-design-icons">Material Design Icons</a> Figma plugin by Google. Note that we typically use the "filled" icon style.</p>
      </li>
  <li>
    <strong>Submit Your Icon Request</strong>: If you've identified an icon that meets your needs and aligns with VADS guidelines, you can propose its addition to the Design System using the link below:
    <p>
      <va-link-action href="https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?template=DST-add-icon.md" text="Request a new addition to the Design System">Request a new addition to the Design System</va-link-action>
    </p>
    If your request is part of an experimental initiative, please link any related tickets to provide context and ensure visibility for the Design System team.
  </li>
</ol>

<script>
  const icons = {{ site.data.icons | jsonify }};

  function sortIcons() {
    const sortBy = document.querySelector('#sort-icons-radio :checked').value;

    if (sortBy === 'name') {
      renderIconTable(icons.sort((a, b) => a.id.localeCompare(b.id)));
    } else if (sortBy === 'category') {
      const categoryGroups = icons.reduce((groups, icon) => {
        icon.category.split(',').map((cat) => cat.trim()).forEach((category) => {
          if (!groups[category]) groups[category] = [];
          groups[category].push(icon);
        });
        return groups;
      }, {});
      renderCategoryTables(categoryGroups);
    }
  }

  function renderIconTable(sortedIcons) {
    const container = document.getElementById('icons-container');
    container.innerHTML = `
      <div class="icon-grid">
        ${sortedIcons
          .map(
            (icon) => `
            <div class="icon-card">
              <va-icon icon="${icon.id}" size="3"></va-icon>
              <div class="icon-label">
                <code>${icon.id}</code>
              </div>
            </div>
          `
          )
          .join('')}
      </div>
    `;
  }

  function renderCategoryTables(categoryGroups) {
    const container = document.getElementById('icons-container');
    const sortedCategories = Object.keys(categoryGroups).sort();
    container.innerHTML = sortedCategories
      .map(
        (category) => `
          <h3>${category}</h3>
          <table class="icon-table">
            <thead>
              <tr>
                <th>Preview</th>
                <th><code>icon</code></th>
              </tr>
            </thead>
            <tbody>
            ${categoryGroups[category]
              .map(
                (icon) => `
              <tr>
                <td class="vads-u-text-align--center">
                  <va-icon icon="${icon.id}" size="3" />
                </td>
                <td>
                  <code>${icon.id}</code>
                </td>
              </tr>
            `
              )
              .join('')}
            </tbody>
          </table>
        `
      )
      .join('');
  }

  // Initial render
  renderIconTable(icons);
</script>

{% include _component-checklist.html component_name=page.web-component %}