---
layout: default
title: Back to top 
---

# Back to top
The Back to top component helps users quickly navigate back to the top of long pages of content.

{% include storybook-preview.html story="components-back-to-top--default" %}

## Usability

### When to use the Back to top component 
Use the Back to top component for pages that are longer than 4 screens

### When to consider something else
If pages are short, a back to top component isn’t necessary as a user can simply scroll. 

### How to use Back to top component
- The Back to top component is anchored to the lower right side of the main content area on desktop, and the lower right side of the viewport on smaller screens
- Have one sticky Back to top component per page instead of including multiple links in every section of the page
- On desktop, the back to top component will have the label, “Back to top” with an arrow icon on the right hand side
- On mobile, the back to top component will be the arrow icon 

## Accessibility considerations
Focus should properly set on the `body` tag when users click the  Back to top button. Users should be able to set focus on the first link or button from the top of the page after pressing TAB. 
