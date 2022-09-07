---
layout: component
title: On this page
intro-text: "The On this page jump links component summarizes the sections (&lt;h2&gt;s) at the top of long pages and allows users to jump down the page to the respective section."
research-title: "On this page jump link"
status: use-best-practice
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Accessibility considerations
---

## Examples

{% include storybook-preview.html height="250px" story="components-va-on-this-page--default" %}

## Usage

### When to use the On this page jump links component
- Use this component to quickly tell users what information they can get on that page. 
- This component is especially helpful for pages with a lot of content, as it helps users navigate longer pages and provides guideposts that bring users deeper into the content. 

### When to consider something else
- Don’t use the On this page jump links if the content on the page isn’t very long. To display this component, the page must have a minimum of 2 H2 section titles. 
- If the content you want users to see is too far down the page, consider rearranging the content to achieve the desired hierarchy.

### How to use the On this page jump links component
- **Keep the first link and its corresponding heading close together,** so users can more easily make the connection that the links correspond to the H2 section titles
- **The content on the page must have a minimum of two H2 section titles to use the On this page jump links.** 
- **On this page jump links component pairs well with the Back to top component.** The [Back to top component]({{ site.baseurl }}/components/back-to-top) helps users quickly navigate back to the top of long pages of content.

## Accessibility considerations
- **Heading levels should increase only by one.** The proper order of heading levels conveys the structure of the page for screen reader users and provides a natural hierarchy for your content. When heading elements are applied correctly, the page becomes much easier for both screen reader and sighted users to navigate.
- **The focus should be on the destination.** When a user clicks on an item on the On this page component, the focus should move to the heading that it links to.
- **Allow enough spacing between components.** Space should be 1.5 rem (36px) from the bottom of the descender to the top of the ascender.
- **On this page jump links should be contained in a navigation landmark** so it can be easily discovered by screen reader users.

