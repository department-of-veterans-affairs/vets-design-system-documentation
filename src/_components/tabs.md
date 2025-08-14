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

## Usage

### When to use tabs

* **Organize related content sections.** Use tabs when you have multiple panels of content that are related but don't need to be viewed simultaneously. 
* **Reduce cognitive load.** Use tabs to present information into manageable sections, allowing users to focus on one section at a time.

### When to consider something else

* **Changing views of the same data.** To let users easily toggle between a binary set of options to see different views of the same data, use a [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented) component. For example, switching between viewing a list or a map.
* **Chunking content.** Consider using an [Accordion]({{ site.baseurl }}/components/accordion) to display 1 chunk of content at a time.
* **Hierarchical content.** If your content is hierarchical or sequential, consider using a single page of well-formatted headings and body text. Use the [On this page]({{ site.baseurl }}/components/on-this-page) component to navigate within a single page.
* **Moving up or down in navigational hierarchy.** Use the [Side Navigation]({{ site.baseurl }}/components/sidenav) component to move up or down in hierarchy or when the content has over 4 or 5 sections.

### How this component works

#### Tab overflow

**The tab component works best when 3 or fewer tabs are needed.** If the tabs overflow on small screens, a scrollbar is used so that all tabs are still navigable. This isn't ideal because horizontal scrolling makes tabs hard to find and scrollbar behavior isn't consistent across browsers. When a scrollbar is used, a shadow will show to indicate there are more tabs. The scrollbar should only appear at high zoom levels or when the screen is smaller than 320px.

{% include storybook-preview.html story="components-va-tabs--with-additional-tab-item" link_text="va-tabs--with-additional-tab-item" %}

#### Tab panel

Tab panels are used as a container for the content associated with the selected tab. A 32px space between the tab panel and tabs is recommended for both desktop and mobile views. This is already included in the tabs component. If a different spacing is required the default spacing can be overridden.

{% include component-example.html alt="Desktop view: 32px margin being shown above and below the tabs." caption="Desktop view: 32px of space is recommended above and below the tabs." file="/images/components/tabs/Desktop-ClaimStatus-Files.png" class="x2" %}

## Behavior

* Make sure the selected tab is highlighted and visually connected to the content below it.
* The first tab should be used for the default view.

### Placement

* The tabs component should appear in a consistent location across desktop and mobile views.
* Place tabs below the page title and subtitle.
* Information relevant to all tabs can be placed above the tabs.
* Tabs can be used with the [Side navigation]({{ site.baseurl }}/components/sidenav) component. Don't add tab links to the side navigation, they should exist separately.
* Don't use the [On this page]({{ site.baseurl }}/components/on-this-page) component with the tabs component.

#### Desktop view

{% include component-example.html alt="Claims Status Desktop View with Tabs" caption="Desktop view: Tabs in Claim Status example with first tab selected." file="/images/components/tabs/Desktop-ClaimStatus-Status.png" class="x2" %}

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
  <figcaption class="site-component-example__caption">Mobile views: Tabs shown in Claim Status tool.</figcaption>
</figure>

### Instances of tabs in production

See the [tabs component discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443) for more information on tabs used in production.

## Content considerations

* Keep tab labels succinct and use plain language. Labels should be 1 to 2 words.
* Use sentence case for tab labels.

## Accessibility considerations

* **Use clear, descriptive tab labels.** Tab labels should help users understand the purpose and contents of each tab panel.  Avoid vague labels like “Tab 1” or “More”.
* **Place Tabs inside the main content region.** Tabs should be located after the `h1` within the `<main>` content region.
* **Don’t use Tabs for page-level navigation.** Tabs are not a substitute for primary or secondary navigation. For navigating across different pages, use [Side Navigation]({{ site.baseurl }}/components/sidenav).
* **Keep focus on the selected tab after activation.** When a user activates a tab, focus should remain on the newly selected tab and not move into the tab panel. This helps keyboard and screen reader users stay oriented and easily navigate through the tab list. Users can choose to navigate into the panel content when they’re ready. Avoid auto-focusing inside the panel.
* **Follow standard keyboard interaction patterns.** Refer to [W3C’s guidance for standard keyboard navigation for tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction).

## Related

* [Accordion]({{ site.baseurl }}/components/accordion)
* [Button - Segmented]({{ site.baseurl }}/components/button/button-segmented)
* [Side navigation]({{ site.baseurl }}/components/sidenav)
* [On this page]({{ site.baseurl }}/components/on-this-page)

{% include _component-checklist.html component_name="va-tabs" %}
