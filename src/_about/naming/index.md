---
layout: category
permalink: /about/naming-conventions/
title: Naming conventions
inner-title: Overview
into-text: This section defines naming conventions for components, CSS, and other parts of the VA Design System. 
sub-pages:
  - sub-page: CSS naming conventions
---

## Purpose

This document establishes a consistent approach to naming components in the VA Design System. These guidelines apply to both the web component implementation (`component-library`) and the design system documentation site (`vets-design-system-documentation`).

## Core Principles

1. **Clarity and Purpose**: Names should clearly describe the component's purpose and functionality.
2. **Consistency**: Follow consistent patterns across the entire system.
3. **Developer Experience**: Names should be intuitive for technical implementation.
4. **Scalability**: The naming system should scale as new components are added.

## Component Naming Guidelines

### Web Component Implementation

#### Folder and File Structure

- Component folders should use kebab-case (e.g., `action-bar`, `form-controls`)
- Component files should follow consistent naming patterns (e.g., `va-alert.tsx`, `va-modal.tsx`)
- Helper files should use camelCase (e.g., `alertUtils.js`, `modalHelpers.js`)

#### Web Component Names

- Custom HTML elements should use kebab-case with `va-` prefix (e.g., `<va-alert>`, `<va-modal>`, `<va-pagination>`)
- The prefix `va-` should be used consistently for all components to indicate they are part of the VA Design System
- Make names concise and descriptive, avoiding acronyms where possible

#### Attributes

- Attributes in web components should use kebab-case (e.g., `close-handler`, `is-visible`, `button-text`)
- Boolean attributes should follow HTML convention where presence indicates true (e.g., `disabled`, `required`, `closeable`)
- Boolean attributes that need explicit values should use "is-", "has-", or "should-" prefixes (e.g., `is-disabled`, `has-error`, `should-validate`)

#### Slots and Shadow DOM

- Named slots should use kebab-case (e.g., `<slot name="header-content">`)
- Internal shadow DOM class names should use Block Element Modifier (BEM) notation with kebab-case:
  - Block: `.va-component-name`
  - Element: `.va-component-name__element`
  - Modifier: `.va-component-name--modifier` or `.va-component-name__element--modifier`

### Documentation Site

#### Front Matter Component Names

- In the front matter YAML, specify the actual web component name with the `va-` prefix in kebab-case
- Example:

  ```yaml
  title: Alert - Expandable
  web-component-name: va-alert-expandable
  ```

#### Page Titles and Display Names

- Convert kebab-case web component names to Title Case with spaces for page titles
- Use plain language titles that are more human-readable
- Examples:
  - `<va-alert-expandable>` becomes "Alert - Expandable"
  - `<va-text-input>` becomes "Text Input"
  - `<va-checkbox>` becomes "Checkbox"

#### URL Structure

- Use the primary component pattern for URLs in kebab-case (without the `va-` prefix):
  - Example: `<va-alert>` → `/components/alert`

- For component variations, use hierarchical URLs:
  - First level: base component (e.g., `/components/link`)
  - Second level: variation category (e.g., `/components/link/action`)
  - Anchor links for specific variants (e.g., `/components/link/action#primary-entry`)

#### Hierarchical Component Naming

For components with multiple levels of variation:

1. **Page Title Hierarchy**

   - Primary Component: "Link"
   - Variation Category: "Link - Action"
   - Specific Variant: "Link - Action - Primary entry"

2. **Documentation Structure**

   - Use dash separators (" - ") to indicate hierarchy levels in titles
   - Each level becomes more specific about the variant or option
   - For deeply nested variants, maintain consistency across all levels

3. **Examples of Multi-level Component Naming**:

   <va-table table-type="bordered" is-stacked="false">
     <va-table-row>
       <span>Web Component</span>
       <span>Documentation Title</span>
       <span>URL Path</span>
     </va-table-row>
     <va-table-row>
       <span>va-link variant="action" type="primary-entry"</span>
       <span>Link - Action - Primary entry</span>
       <span>/components/link/action#primary-entry</span>
     </va-table-row>
     <va-table-row>
       <span>va-button big</span>
       <span>Button - Primary - Big</span>
       <span>/components/button/primary#big</span>
     </va-table-row>
     <va-table-row>
       <span>va-radio-button tile=true</span>
       <span>Radio Button - Tile</span>
       <span>/components/form/radio-button#tile</span>
     </va-table-row>
   </va-table>

## Naming Pattern Examples

### Component Examples

<va-table table-type="bordered" is-stacked="false">
  <va-table-row>
    <span>Web Component</span>
    <span>Documentation Title</span>
    <span>URL Path</span>
  </va-table-row>
  <va-table-row>
    <span>va-alert</span>
    <span>Alert</span>
    <span>/components/alert</span>
  </va-table-row>
  <va-table-row>
    <span>va-alert-expandable</span>
    <span>Alert - Expandable</span>
    <span>/components/alert-expandable</span>
  </va-table-row>
  <va-table-row>
    <span>va-modal</span>
    <span>Modal</span>
    <span>/components/modal</span>
  </va-table-row>
  <va-table-row>
    <span>va-pagination</span>
    <span>Pagination</span>
    <span>/components/pagination</span>
  </va-table-row>
</va-table>

### Variant Naming

When a component has variants, name them using these patterns:

1. **Documentation Strategy**:

   - Main component page with variants as sections
   - Separate pages for significant variants
   - Use clear titles to indicate relationship (e.g., "Button - Secondary")

2. **URL Strategy**:

   - For minor variants: Use anchor links (e.g., `/components/button#secondary`)
   - For major variants: Use subpaths (e.g., `/components/button/button-group`)

## Implementation Guidelines

### Adding New Documentation Pages

1. Create front matter that includes:

   - The actual web component name with `va-` prefix in kebab-case
   - A human-readable title in Title Case with appropriate hierarchy
   - Any additional metadata needed for the component

2. For titling the new component in documentation:

   - Transform kebab-case to Title Case
   - Use dashes with spaces (" - ") to separate hierarchical elements
   - Be consistent with existing similar components
   - Links to components or patterns should just include the title. Don't include the words "component" or "pattern" in the link text.

3. For URL structure:

   - Use appropriate depth based on the component's complexity
   - Consider the user's mental model for finding the component
   - Maintain URL patterns consistent with similar components

### Handling Complex Component Variations

For components with multiple variations or states:

1. **Simple Variations**:
   - Document on the main component page
   - Use anchor links for navigation
   - Example: "Button - Primary" as a section on the Button page

2. **Complex Variations**:
   - Create separate pages for significant variants
   - Maintain hierarchical relationship in titles
   - Example: "Link - Action" as a separate page from "Link"

3. **State Variations**:
   - Document states on the relevant component/variation page
   - Use clear state indicators in section titles
   - Example: "Radio Button - Error" as a section on the Radio Button page
