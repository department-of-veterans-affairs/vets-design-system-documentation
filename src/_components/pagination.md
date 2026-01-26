---
layout: component
title: Pagination
status: use-deployed
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=1047%3A3408&mode=design&t=VuR2cBxP21GQYVZc-1
intro-text: "Pagination is navigation for paginated content."
web-component: va-pagination
uswds-v3: default
web: true
mobile-app: false
anchors:
  - anchor: Examples 
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
  - anchor: Component checklist
---

## Examples

### Default

{% include storybook-preview.html story="uswds-va-pagination--default" link_text="va-pagination v3 default" %}

### With Middle

{% include storybook-preview.html story="uswds-va-pagination--with-middle" link_text="va-pagination v3 with middle" %}

### With Last

{% include storybook-preview.html story="uswds-va-pagination--with-last" link_text="va-pagination v3 with last" %}

### With Unbounded First

{% include storybook-preview.html story="uswds-va-pagination--with-unbounded-first" link_text="va-pagination v3 with unbounded first" %}

### With Unbounded Middle

{% include storybook-preview.html story="uswds-va-pagination--with-unbounded-middle" link_text="va-pagination v3 with unbounded middle" %}

### With Seven or Less

{% include storybook-preview.html story="uswds-va-pagination--with-seven-or-less" link_text="va-pagination v3 with seven or less" %}

### With Seven or Less Middle

{% include storybook-preview.html story="uswds-va-pagination--with-seven-or-less-middle" link_text="va-pagination v3 with seven or less middle" %}

### With Seven or Less Last

{% include storybook-preview.html story="uswds-va-pagination--with-seven-or-less-last" link_text="va-pagination with seven or less last" %}

### Internationalization

{% include storybook-preview.html height="300px" story="uswds-va-pagination--internationalization" link_text="va-pagination v3 internationalization" %}

## Usage

<va-link-action
  href="https://designsystem.digital.gov/components/pagination/"
  text="Refer to the U.S. Web Design System for usage guidance"
  type="secondary"
></va-link-action>

### Results description

When using pagination, include a results description above the paginated content to help users understand their position within the full set of results. This is especially important for screen reader users and provides essential context for all users.

{% include components/results-description.md %}

For more details on implementing search results with pagination, see the [Search results template]({{ site.baseurl }}/templates/search-results).

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

<va-link-action
  href="https://designsystem.digital.gov/components/pagination/#accessibility-pagination"
  text="Refer to the U.S. Web Design System for accessibility guidance"
  type="secondary"
></va-link-action>

{% include _component-checklist.html component_name=page.web-component %}