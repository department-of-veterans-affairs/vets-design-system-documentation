---
layout: component
title: Address block
intro-text: "Address block is used to highlight mailing and physical addresses and contact information for VA facilities (with some notable exceptions). It can also be used to display personal information we may have for a Veteran."
github-title: va-address-block
sketch-link: https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/p/ED3DB453-483F-49DD-A3EE-53294CE40CCD
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
---

## Examples

{% include storybook-preview.html story="components-address-block--default" %}

## Usage

### When to use address block

* **Addresses in content blocks**: Use an address block to call out an address when it sits within a content block. The blue bar will bring attention to the address block and make it easier to find when scanning a page.
* **Form intro pages**: Use an address block on form introductory pages where the mailing address is needed.

### When to consider something else

* **Clear Address header**: If the Address is directly below a clear header named "Address", as it is on VA Health Center pages, then the address block with blue border is not necessary.
* **Accordions for a series**: If you have a series of addresses in the body of a page and outside of a form or tool then an [Accordion]({{ site.baseurl }}/components/accordion) can be used. For example, if you have 3 or more addresses in succession.  
* **Phone numbers in isolation**: If you need to show one or more phone numbers, use the [Telephone]({{ site.baseurl }}/components/telephone) component.

### Placement

* Address block can appear within a block of content following a paragraph, list, or header.


### Instances of this component in production

{% include component-example.html alt="Example of this component in isolation." file="/images/components/address-block/mailing-address.png" caption="Use of this component for a VA Debt Management Center address." %}

{% capture example_like_this %}
  {% include component-example.html alt="Example of this component to show Veteran personal information." file="/images/components/address-block/veteran-personal-info.png" caption="Use of this component for Veteran personal information." %}
{% endcapture %}


{% capture example_not_this %}
  {% include component-example.html alt="Example of this component used incorrectly for phone numbers instead of addresses and by directly overriding styles to remove the blue border." file="/images/components/address-block/do-not-override-styling.png" caption="Use of this component is not for phone numbers in isolation and the blue border should not be removed." %}
{% endcapture %}

{% include _like-this-not-this.html like_this=example_like_this not_this=example_not_this %}

## Code usage

* The Address block component is created by applying the CSS class <code>.va-address-block</code> to a <code><p></code> HTML element.
* Only use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address"><code><address></code></a> HTML element for contact information related to the current page. <code><address></code> is only intended for contact information and not physical addresses (e.g. not for a Health Center facility address).


## Content considerations

{% include content/addresses.md %}