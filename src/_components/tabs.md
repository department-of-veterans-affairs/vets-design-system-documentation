---
layout: component
title: Tabs
intro-text: "Tabs organize related groups of content within the same hierarchy into parallel views that a user can easily navigate between." 
github-title: va-tabs
status: use-with-caution-available
figma-link: https://www.figma.com/design/MNfr6ScW4Sf66tN0iY20GN/Tabs?node-id=24991-2000
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Behavior
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

## Examples

### Web
Storybook example

## Usage

Because tabs stack horizontally or wrap to a second line, they're not an optimal design solution for mobile viewports. In some cases, using only 2 tabs to present a set of complementary options is acceptable. 

### When to use tabs

* **Secondary navigation.** Use tabs to help users navigate between sections of an application.
* **Related content.** Use tabs to organize related content that users don't need to view simultaneously.

### When to consider something else

* **Changing views of the same data.** To allow the user to easily toggle between a binary set of options to see different views of the same data, use a [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented) component. For example, switching between viewing a list or a map.
* **Chunking content.** Consider using an [Accordion]({{ site.baseurl }}/components/accordion) to display one chunk of content at a time.
* **Hierarchical content.** If your content is hierarchical and/or sequential, consider using a single page of well-formatted headings and body text. Use the [On this page]({{ site.baseurl }}/components/on-this-page) component to navigate within a single page. 
* **Moving up or down in navigational hierarchy.** Use the [Side Navigation]({{ site.baseurl }}/components/side-navigation) component to move up or down in hierarchy or when the content has over 4 or 5 sections.
* **Instantaneous loading.** The tabs are URL-based, so you should anticipate the whole page reloading when clicking on different tabs. 

### How this component works

Add this once final tabs component is complete.

## Behavior

* Make sure the selected tab is highlighted and visually connected to the content below it.
* Never let a row of tabs wrap to a second line.
* The first tab should be used for the default view.

### Placement

* The tabs component should appear in a consistent location across desktop and mobile views.
* Place tabs below the main header. 
* Information relevant to all tabs can be placed above the tabs.
* Tabs can be used with the [Side navigation]({{ site.baseurl }}/components/side-navigation) component. Don't add tab sections to the Side navigation, they should exist separately.
* Don't use the [On this page]({{ site.baseurl }}/components/on-this-page) component with the tabs component.
* Use 32px spacing above and below the tabs.

#### Desktop view

{% include component-example.html alt="Claims Status Desktop View with Tabs" caption="Desktop view: Tabs in Claim Status example with first tab selected and margin annotations." file="/images/components/tabs/Desktop-ClaimStatus-Status.png" %}

#### Mobile view

<figure class="site-component-example">
  <img src="{{ site.baseurl }}/images/components/tabs/Mobile-ClaimStatus-Status.png" alt="Mobile view: Tabs in Claim Status example with first tab selected and margin annotations." class="site-component-example__image" style="max-width:256px">
  <img src="{{ site.baseurl }}/images/components/tabs/Mobile-ClaimStatus-Files.png" alt="Mobile view: Tabs in Claim Status example with second tab selected." class="site-component-example__image" style="max-width:256px">
  <figcaption class="site-component-example__caption">Mobile views: Tabs shown in Claim Status tool with margin annotations.</figcaption>
</figure>

### Instances of tabs in production

See [Tabs component discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443) for more information on Tabs used in production.

## Content considerations

* Keep tab labels succinct and use plain language. Labels should be 1 to 2 words.
* Use sentence case for tab labels.

## Accessibility considerations

* Go to Mozilla's [ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) documentation for guidance.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Button - Group Segmented]({{ site.baseurl }}/components/button/button-group-segmented)
* [Side navigation]({{ site.baseurl }}/components/side-navigation)
* [On this page]({{ site.baseurl }}/components/on-this-page)

{% include _component-checklist.html component_name="va-tabs" %}
