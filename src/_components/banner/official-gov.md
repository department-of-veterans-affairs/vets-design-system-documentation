---
layout: component
title: Banner - Official Gov
permalink: /components/banner/official-gov
has-parent: /components/banner/
github-title: va-official-gov-banner
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=1173%3A5542&mode=design&t=vNilCSI60pQBiKkM-1
status: use-deployed
intro-text: "This banner identifies official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure."
web-component: va-official-gov-banner
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
---

## Examples

### Default

{% include storybook-preview.html story="components-va-official-gov-banner--default"  link_text="va-official-gov-banner" %}

### Internationalization

{% include storybook-preview.html story="components-va-official-gov-banner--internationalization"  link_text="va-official-gov-banner internationalization" %}

## Usage

<va-featured-content>
  <h3 slot="headline">USWDS v3 component</h3>
  <p>This component comes directly from the U.S. Web Design System (USWDS). Thus we follow the guidance and considerations documented in the USWDS for this component. The guidance below augments the USWDS guidance to give specifics on how we use the component at the VA.</p>
  <a class="vads-c-action-link--blue" href="https://designsystem.digital.gov/components/banner/">View USWDS guidance on Banner</a>
</va-featured-content>

### When to use Banner - Official Gov

**Always.** The official government banner should appear on every VA.gov page at the very top of the page. 

### How to use Banner

**Auto-injected.** The official government banner is automatically injected onto all VA.gov pages using our [content-build](https://github.com/department-of-veterans-affairs/content-build) process.

### Placement

**Above header.** The official government banner appears directly above the VA.gov header and 

{% include component-docs.html component_name=page.web-component %}