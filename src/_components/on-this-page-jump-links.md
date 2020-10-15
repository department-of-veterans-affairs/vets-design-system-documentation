---
layout: default
title: On this page jump link
draft: true
anchors:
  - anchor: How to build it
  - anchor: When to use the On this page jump link component
  - anchor: When to consider something else
  - anchor: "Usability guidance: how to use it"
  - anchor: Accessibility
  - anchor: Implementation
  - anchor: Package information
---

# On this page jump link

The **On this page jump link** component summarizes the sections (`h2s`) at the top of long pages and allows users to jump down the page to the respective section.

## How to build it

Here is what it looks like:

![on this page jump link specifications]({{site.baseurl}}/images/on-this-page-jump-links.png)


## Guidance

### When to use the On this page jump link component
Because the content on VA.gov can be dense and require exposition, pages can get long. Use the On this page jump link component to help users navigate longer pages.
### When to consider something else
* Not all pages are tall and thusly do not warrant On this page jump links.
* If the content you want users to see is too far down the page, consider the rearranging the content to achieve the desired hierarchy.

### Usability guidance: how to use it
- **Keep the first link and its corresponding heading close together.** Keeping the links and headings in close proximity helps users make the connection that the links correspond to sections on the page.
- **For content pages, include a minimum of two H2 sections.** The article should have a minimum of two H2 sections in order to display the on this page component links.
- **Do not use components for very short sections if we can display sections on one screen.** If using this component for 2 sections, do not use components if sections are very short.

### Accessibility
- **Heading levels should only increase by one.** The proper order of heading levels conveys the structure of the page for users who use screen readers. When heading elements are applied correctly, the page becomes much easier to navigate for screen reader users and sighted users alike.
- **The focus should be on the destination.** When a user clicks on an item on this page component, the focus should move to the heading that it’s linked to.
- **Allow enough spacing between components.** Space should be 1.5 rem (36px) from the bottom of the descender to the top of the ascender.

### Implementation

### Package information

* **Package usage:**  

* **Requires:**
