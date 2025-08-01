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

#### Default

{% include storybook-preview.html story="components-va-tabs--default" link_text="va-tabs--default" %}

#### With second tab selected

{% include storybook-preview.html story="components-va-tabs--with-second-tab-selected" link_text="va-tabs--with-second-tab-selected" %}

#### Without panel heading

{% include storybook-preview.html story="components-va-tabs--without-panel-heading" link_text="va-tabs--without-panel-heading" %}

#### With heading not matching tab

{% include storybook-preview.html story="components-va-tabs--with-heading-not-matching-tab" link_text="va-tabs--with-heading-not-matching-tab" %}

#### With meaningful content

{% include storybook-preview.html story="/story/components-va-tabs--with-meaningful-content" link_text="va-tabs--with-meaningful-content" %}

## Usage

### When to use tabs

* **Secondary navigation.** Use tabs to help users navigate between sections of the page.
* **Related content.** Use tabs to organize related content that users don't need to view simultaneously.

### When to consider something else

* **Changing views of the same data.** To let users easily toggle between a binary set of options to see different views of the same data, use a [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented) component. For example, switching between viewing a list or a map.
* **Chunking content.** Consider using an [Accordion]({{ site.baseurl }}/components/accordion) to display 1 chunk of content at a time.
* **Hierarchical content.** If your content is hierarchical or sequential, consider using a single page of well-formatted headings and body text. Use the [On this page]({{ site.baseurl }}/components/on-this-page) component to navigate within a single page.
* **Moving up or down in navigational hierarchy.** Use the [Side Navigation]({{ site.baseurl }}/components/side-navigation) component to move up or down in hierarchy or when the content has over 4 or 5 sections.
* **Instant loading.** The tabs are URL-based, which will reload the entire page when users click between tabs. This Nielsen Norman Group article [Tabs, Used Right](https://www.nngroup.com/articles/tabs-used-right/) provides more details on the differences between navigation tabs and in-page tabs.  

### How this component works

#### Tab overflow

The Tab component works best when 3 or fewer tabs are needed. If the Tabs overflow on small screens a scrollbar is used so that all tabs are still navigable. This isn't ideal because horizontal scrolling makes tabs hard to find and scrollbar behavior isn't consistent across browsers. When using Tabs be mindful of how many tabs can fit on small screens to minimize scrolling.

#### Tab panel

The Tabs use a tab panel as a container for the content associated with the selected Tab. A 32px space is the recommended spacing between the content within the tab panel and tabs and is included in the Tabs component. If a different spacing is required the default spacing can be overridden. 

## Behavior

* Make sure the selected tab is highlighted and visually connected to the content below it.
* The first tab should be used for the default view.

### Placement

* The tabs component should appear in a consistent location across desktop and mobile views.
* Place tabs below the Page title and subtitle.
* Information relevant to all tabs can be placed above the tabs.
* Tabs can be used with the [Side navigation]({{ site.baseurl }}/components/side-navigation) component. Don't add tab links to the Side navigation, they should exist separately.
* Don't use the [On this page]({{ site.baseurl }}/components/on-this-page) component with the Tabs component.

#### Desktop view

{% include component-example.html alt="Claims Status Desktop View with Tabs" caption="Desktop view: Tabs in Claim Status example with first tab selected and margin annotations." file="/images/components/tabs/Desktop-ClaimStatus-Status.png" class="x2" %}

#### Placement guidance
<ol>
<li>Page title and subtitle</li>
<li>Relevant content to all tabs</li>
<li>Tabs component (full width of content area)</li>
<li>Tab panel</li>
</ol>

#### Mobile view

<figure class="site-component-example">
  <img src="{{ site.baseurl }}/images/components/tabs/Mobile-ClaimStatus-Status.png" alt="Mobile view: Tabs in Claim Status example with first tab selected and margin annotations." class="site-component-example__image" style="max-width:256px; vertical-align: top;">
  <img src="{{ site.baseurl }}/images/components/tabs/Mobile-ClaimStatus-Files.png" alt="Mobile view: Tabs in Claim Status example with second tab selected." class="site-component-example__image" style="max-width:256px; vertical-align: top;">
  <figcaption class="site-component-example__caption">Mobile views: Tabs shown in Claim Status tool with margin annotations.</figcaption>
</figure>

### Instances of tabs in production

See the [Tabs component discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443) for more information on Tabs used in production.

## Content considerations

* Keep tab labels succinct and use plain language. Labels should be 1 to 2 words.
* Use sentence case for tab labels.

## Accessibility considerations

* Go to Mozilla's [ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) documentation for guidance.

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented)
* [Side navigation]({{ site.baseurl }}/components/side-navigation)
* [On this page]({{ site.baseurl }}/components/on-this-page)

{% include _component-checklist.html component_name="va-tabs" %}
