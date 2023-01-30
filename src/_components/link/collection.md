---
layout: component
title: Link - Collection
permalink: /components/link/collection
has-parent: /components/link/
github-title: va-link-collection
intro-text: "Collections of links that allow users to navigate to related content within and outside of the current content section."
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/2842568E-5650-4F60-BB25-15C03C4073B3
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Related links

{% include component-example.html alt="Example of Related links to show a list of links." file="/images/components/link/collection-related.png" caption="Use the Related links variation for a collection of links that navigate to closely related programs and services within a content section." reverse=true width="75%" %}

### Section links

{% include component-example.html alt="Example of the Link, Collection, Section links component to show a list of links." file="/images/components/link/collection-section.png" caption="Use the Section links variation for a collection of links that navigate to pages related to a specific topic." class="x2" %}

{% include component-example.html alt="Example of the Link, Collection, Section links component to show a list of links near a header." file="/images/components/link/collection-section-with-header.png" caption="Section links may be the only content within a section and thus positioned near a section header." class="x2" %}

### Major links

{% include component-example.html alt="Example of the Link, Collection, Related links component to show a list of links." file="/images/components/link/collection-major.png" caption="Use the Major links variation for a collection of links that navigate to pages outside of a content section." width="75%" %}

### Quick links

{% include component-example.html alt="Example of the Link, Collection, Quick links component to show a list of links." file="/images/components/link/collection-quick.png" caption="Use the Quick links variation for a collection of links that navigate to related topics outside of a content section." width="25%" %}

## Usage

### When to use a Collection

* **Link to related programs and services.** Use **Related links** for links to closely related programs and services within a content section.
* **Link to related programs and services within a specific topic.** Use **Section links** for links to closely related programs and services within a specific topic section.
* **Link to pages outside a content section.** Use **Major links** for links to pages outside of a content section.
* **Link to related topics outside a content section.** Use **Quick links** for navigating users to related topics outside of a content section.

### When to consider something else

* **Calls to action.** Calls to action (CTA) links should be an [action link]({{ site.baseurl }}/components/link/action) or appropriate [link variation]({{ site.baseurl }}/components/link). CTA [buttons]({{ site.baseurl }}/components/button) are for launching an application, signing in, or other primary and essential actions on a page.
* **Table of contents.** Use the [On this page]({{ site.baseurl }}/components/on-this-page)

### How this component works

* **Default or Active link variations.** The collections may use either the [default]({{ site.baseurl }}/components/link#default) or [active]({{ site.baseurl }}/components/link#active) link variations.
* **Use appropriate icons.** [Icons]({{ site.baseurl }}/foundation/icons/) defined in the system for a particular usage should be used for that distinct purpose. Icons that are reused for another purpose must receive explicit permission to do so from the Design System Council.

### Choosing between variations

Review ["When to use a Collection"](#when-to-use-a-collection) for guidance.

### Placement

* Related links generally appear at the bottom of the page in the main content well.
* Section links appear within a section of a page which has a header.
* Major links can appear throughout the main content well.
* Quick links are rarely used but can appear in the right rail in certain instances.


### Design principles

For collections of links, the [Law of Proximity](https://lawsofux.com/law-of-proximity/) applies which states: 

> Objects that are near, or proximate to each other, tend to be grouped together.

Collections of links, given their close proximity, will be perceived to share similar traits or properties. Also, proximity helps users to understand and organize the information faster and more efficiently. 

### Instances of this component in production

Our [examples](#examples) are all from production. Once these link styles are converted into web-components we will swap the examples out for code examples and move the current examples to this section.

## Content considerations

* Refer to the [usage](#usage) section as well as the [content style guide for links]({{ site.baseurl }}/content-style-guide/links).

## Accessibility considerations

* Refer to the [link accessibility considerations]({{ site.baseurl }}/components/link/#accessibility-considerations).
