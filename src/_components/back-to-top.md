---
layout: component
sub_section: Back to top
title: "Back to top"
status: use-deployed
figma-link: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Example-Library?type=design&node-id=1110%3A4128&mode=design&t=vNilCSI60pQBiKkM-1
intro-text: "The Back to top component is a shortcut that allows the user to quickly navigate to the top of a long page of content."
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Accessibility considerations
---

## Examples

### Desktop

{% include storybook-preview.html height="300px" story="components-va-back-to-top--default" link_text="va-back-to-top" %}

## Usage

* On large and medium screens, the Back to top component will have the label, “Back to top” with an arrow icon to the left of the label. On small screens, the Back to top component will only have the arrow icon. Use one Back to top component per page.

### When to use Back to top

* In pages with static content that is more than two screens in length on large and medium screens, or more than four screens in length on small screens.

### When not to use Back to top

* In pages with static content that is short in length.

### Placement

* The Back to top component is anchored to the lower right edge of its parent container (the main content area) on desktop, and the lower right edge of the viewport on smaller screens.
* In the desktop view there should be at least 5 spacing units (40 pixels) of white space above the Back to top component and 2.5 spacing units (20 pixels) white space below.
* In smaller screens where the Back to top component is the arrow icon, there should be at least 4 spacing units (32 pixels) of white space above and 2 spacing units (16 pixels) below the component.

### Behavior

* As the user scrolls down the page, the Back to top component reveals as a sticky element in the lower right edge of the main content area.
* The Back to top component stays fixed in the lower right edge of the main content area when the user reaches the bottom of the page.
* Clicking Back to top takes the user to the top of the page.

{% include component-docs.html component_name=page.web-component %}

## Accessibility considerations

* Animations can be distracting to users with vestibular conditions.
* Some users may have smooth scrolling turned off in their preferences, which will affect the transition going back to the top of the page.
* After the user has clicked Back to top, the code should call focus on an element near the top of the page, such as the H1.
