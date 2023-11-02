---
layout: component
title: Header - Minimal
permalink: /components/header/header-minimal
has-parent: /components/header/
contributor: Ben Brasso (Agile 6), Ya-ching Tsao (CivicActions), Zach Park (Agile 6), Kristen McConnell (Ad Hoc)
intro-text: A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
sketch-link: https://www.sketch.com/s/a52734dd-00d0-44f1-9c9e-ff4016130e5c/p/224585DD-02BA-49EB-91C6-DE20869AA4AC/canvas
status: use-with-caution-candidate
web-component: va-minimal-header
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
  - anchor: Component checklist
---

The simplified header notifies Veterans that they are on a VA website and what section or form they are viewing. It doesn’t contain some aspects of the standard header, such as Sign In and navigation, in order to reduce the chances of users leaving a form or process (that doesn’t support finishing the form later) before completing all the required steps.

## Examples

### Default

### Minimal

{% include storybook-preview.html story="components-va-minimal-header--default" link_text=page.web-component %}

## Usage

### When to use Header - Simplified

For forms or processes that don’t support finishing it later, are time-sensitive, and/or are not part of the VA.gov sitewide information architecture or include a related navigation pattern on the page.


### When to consider something else

TODO

### How this component works

TODO

### Behavior

* Forms or processes using a subtitle can be included immediately after the form title in normal case.
* Hide the VA seal on desktop screens to anchor all pages with the form title as a replacement for a traditional h1 that's persistent across all form pages.

### Choosing between variations

TODO

### Placement

TODO

### Design principles

TODO

### Instances of this component in production

TODO
This isn't quite in production yet within the check-in product.

This is the Code Usage section. Note that the header is inside this include.
<!-- include component-docs.html component_name=page.web-component  -->

## Content considerations

TODO

## Accessibility considerations

* The form title should take on the banner landmark for assistive technologies. A banner landmark role overwrites the implicit ARIA role for the container element upon which it is applied. It should be reserved for globally repeating sitewide content that is generally located at the top of every page.

## Related

TODO

This is the Component checklist section. Note that the header is inside this include.
<!-- include _component-checklist.html component_name=page.web-component -->
