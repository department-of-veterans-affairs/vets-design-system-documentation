---
layout: component
permalink: /components/button/button-pair
has-parent: /components/button/
title: Button pair
research-link: Buttons
intro-text: Use button pairs to provide navigation through a form flow.
status: use-deployed
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
---

## Examples

### Progress
{% include storybook-preview.html story="components-buttons-progressbutton--button-pairs" %}

## Usage

### When to use a button pair

* Use a button pair for providing navigation options through a form flow. 

### When to consider something else

* **Navigation outside of the flow.** For navigation to pages outside of the form flow, use a [link]({{ site.baseurl }}/components/link).
* **Call-To-Action.** For a visually prominent call to action (CTA) that links to another page, use an [action link]({{ site.baseurl }}/components/action-link).

### Behavior

* **Avoid using too many buttons on a page.** Pages with many buttons may signal that the page content needs to be split up.
* **Arrows are reserved.** Arrow icons should only appear for "Back" and "Continue" buttons that appear in forms.

### Mobile behavior

* Primary and secondary buttons should appear full-width up until the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) with the secondary button being on top of the primary button with [2 spacing unit]({{ site.baseurl }}/foundation/spacing-units#spacing-unit-tokens) of separation between them.
* At and after the [small-screen breakpoint]({{ site.baseurl }}/foundation/breakpoints#names-and-values) the buttons left align and revert to a natural width (i.e. as wide as they need to be to accommodate their label) with the secondary button continuing to appear before the primary button.

### Placement

* A button pair appears at the bottom of a form.

### Design principles

* [Fitts's Law](https://lawsofux.com/fittss-law/) is important to keep in mind when determining button sizing and placement. Touch targets should be placed where they can be easily and quickly acquired. For example, this is why we do not split the buttons far apart, aligning them to different sides of the viewport. Fitts's Law states:

> The time to acquire a target is a function of the distance to and size of the target 



<!--- {% include component-docs.html component_name=page.web-component %} -->
<h2 id="code-usage">Code usage</h2>
<h3>Attributes and Properties</h3>
<table>
  <tr>
    <th><strong>Property</strong></th>
    <th><strong>Attribute</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Default</strong></th>
    <th><strong>Description</strong></th>
  </tr>
  <div>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">afterText</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">afterText</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">string</code></th>
      <th></th>
      <th>A character to appear after the button text. This is wrapped in a `span.button-icon`.</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">ariaDescribedby</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">ariaDescribedby</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">string</code></th>
      <th></th>
      <th>Element ID containing additional content read by a screenreader</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">ariaLabel</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">ariaLabel</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">string</code></th>
      <th></th>
      <th>Text read by a screenreader instead of content within the button</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">beforeText</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">beforeText</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">string</code></th>
      <th></th>
      <th>A character to appear before the button text. This is wrapped in a `span.button-icon`.</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">buttonClass</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">buttonClass</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">string</code></th>
      <th></th>
      <th>CSS class(es) to apply to the button</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">buttonText</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">buttonText</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">string</code></th>
      <th></th>
      <th>The text of the button</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">disabled</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">disabled</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">boolean</code></th>
      <th></th>
      <th>Whether the button is disabled</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">onButtonClick</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">onButtonClick</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">function</code></th>
      <th></th>
      <th>Function called when the button is clicked.</th>
    </tr>
    <tr>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">submitButton</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">submitButton</code></th>
      <th><code class="code vads-u-border--1px vads-u-border-color--gray-light">boolean</code></th>
      <th></th>
      <th>Whether the button is a submit button</th>
    </tr>
  </div>
</table>

## Content considerations

### Button labels

{% include content/button-labels.md %}

## Accessibility considerations

* Include more contextual information in the button label for screen readers. You can use an aria label, using the ariaLabel or ariaDescribedby properties, to specify form numbers or program names in the buttons for greater context. 
* It is important to use [Action links]({{ site.baseurl }}/components/action-link) for calls to actions that link to another page rather than buttons, because screen readers always say “link” before links, and “button” before buttons. 
* Button and link confusion can be very frustrating for assistive technology users. A user with a screen reader may pull up a list of links and may not find a specific link because it turns out that it has actually been designated as a button in the markup. 
* Using buttons and links intentionally results in a more inclusive experience for assistive technology users. Make sure to read both button and [action link]({{ site.baseurl }}/components/action-link) guidance to determine what is needed for a page. 
* A button's tap target size should be at least 48 x 48 px, with at least 8 px separating tappable elements. 