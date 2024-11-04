---
layout: documentation
title: Design tokens
intro-text: Design tokens express design decisions using a palette of options from the U.S. Web Design System.
anchors:
  - anchor: What are design tokens?
  - anchor: Taxonomy
  - anchor: Types
  - anchor: Tokens
---

## What are design tokens?

Design tokens express a design decision by applying the many color, typography, and spacing options available as [design tokens from the U.S. Web Design System (USWDS)](https://designsystem.digital.gov/design-tokens/) to specific contexts within the platforms at the VA. Design tokens allow us to propagate those design decisions to our platforms.

## Taxonomy and typology

Our tokens have a taxonomy and typology in order to give us the categorization and levels we need to define our tokens. No token use all of the taxonomy but it does define the available options.

This organizational structure is informed by the work of Nathan Curtis. Read more about <a href="https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676">Naming Tokens in Design Systems</a>.

### Namespace

**System**
: Defines the system that token originates within. Current values can be:
: * uswds: The USWDS. For primitive tokens.
: * vads: All token types. This design system.
: * vacds: The VA Clinician Design System.

**Domain**
: Currently unused. In future could be used for large areas of related tokens that run across systems (e.g. health, benefits, etc.)

### Object

These levels refer to a component, element within a component, or component group.

**Group**
: Defines a family of tokens.
: Examples include forms and navigation.

**Component**
: Component name

**Element**
: Elements within a component

### Base

**Category**
: High level grouping. Current values are:
: * Color
: * Elevation
: * Font
: * Shape
: * Size
: * Spacing

Future additions from USWDS may include flex, order, and opacity.

**Concept**
: Allows tokens to be grouped within a category.
: Current values may include action, hub, inset, vertical, etc.

Future additions may include visualization.

**Property**
: Defines the token scope.
: This can be synonymous with the CSS property name.

### Modifiers

**Variant**
: Defines variations to distinguish use cases.
: Examples include primary, secondary, tertiary and heading, body, default.

**State**
: Defines states of interactivity.
: Examples include hover, press, focus, error, etc.

**Scale**
: Places the token within an intentional, ordered range of values.
: Examples include heading levels: 1, 2, 3, 4, 5 and t-shirt sizes: small, medium, large.

**Mode**
: Defines a background setting on which elements appear thus enabling light and dark modes.
: Examples are on-light and on-dark.

## Types

There are three types of design tokens in the VA Design System:

### 1. Primitive

Primitives mainly come from the USWDS. They are the building blocks that we use. The VA Design System does not use nor add any colors, fonts, nor spacing units that are not defined in the U.S. Design System.

### 2. Semantic

Semantic tokens communicate how a primitive is used. These tokens capture a semantic meaning that should relay the context in which that token should be used.

### 3. Component

Component tokens are scoped to a specific component and represent decisions specific to that component.

## Tokens

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/foundation/color-palette">
  Colors
</a>

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/foundation/typography#typography-tokens">
  Font
</a>

<a class="vads-c-action-link--blue" href="{{ site.baseurl }}/foundation/spacing-units#spacing-tokens">
  Spacing
</a>

### Forthcoming design tokens

These tokens are not available in Figma nor are they yet represented in the CSS library. However, they do provide values that teams can coalesce around that will soon be available as tokens in our component-library.

<va-accordion bordered="false" uswds="true">
  <va-accordion-item header="Elevation" id="second" uswds>
    <h4>Elevation tokens</h4>
    {% include tokens.html tokens = site.data.tokens.vads-elevation %}
  </va-accordion-item>
  <va-accordion-item header="Shape" id="second" uswds>
    <h4>Shape tokens</h4>
    {% include tokens.html tokens = site.data.tokens.vads-shape %}
  </va-accordion-item>
  <va-accordion-item header="Size" id="first" uswds>
    <h4>Size tokens</h4>
    {% include tokens.html tokens = site.data.tokens.vads-size %}
  </va-accordion-item>
</va-accordion>