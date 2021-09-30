---
layout: default
sub_section: Back to top
title: Back to top
draft: true
---

# Back to top

<p class="va-introtext">The Back to top component is a button shortcut that allows the user to quickly navigate to the top of a long page of content.</p>

{% include storybook-preview.html height="300px" story="components-table--default" %}

## Usage
* On large and medium screens, the Back to top component will have the label, “Back to top” with an arrow icon to the left of the label. On small screens, the Back to top component will be the arrow icon. Use one sticky Back to top component per page (instead of including multiple links in every section of the page).

### When to use Back to top
* In pages with static content that is _more than_ 600 pixels in height

### When _not_ to use Back to top
* In pages with dynamic content
* In pages with static content that is _less than_ 600 pixels in height

### Placement
* The Back to top component is anchored to the lower right edge of the main content container on desktop, and the lower right edge of the viewport on smaller screens.
* In the desktop view there should be at least 40 pixels/5 spacing units white space above the Back to top component and 20 pixels/2.5 spacing units white space below. In smaller screens where the Back to top component is the arrow icon, there should 16 pixels/2 spacing units margin above and 32 pixels/4 spacing units below the component.  

### Behavior
* As the user scrolls down the page, the Back to top component reveals as a sticky button in the lower right edge of the main content area
* As the component is revealed, it will slide up from the bottom in a micro-animation
* The component will slide down as it hides if the user scrolls up
* The Back to top button will be anchored to the width of its parent
* Docking  

## Accessibility considerations
*
