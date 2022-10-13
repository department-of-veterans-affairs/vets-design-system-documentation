---
layout: default
title: What’s new?
---

# What’s new?

<div class="va-introtext">
  The latest news and updates on the Design System, Forms library and the Content style guide.
</div>

## September 2022

### New and updated components

* [Privacy agreement]({{ site.baseurl }}/components/privacy-agreement)
* **Translation indicator.** Components that have Spanish translation now have a label next to their maturity level at the top of the page (e.g. [Accordion]({{ site.baseurl }}/components/accordion)).
* A [number of fixes](https://github.com/department-of-veterans-affairs/component-library/releases?q=created%3A2022-09-01..2022-09-30+prerelease%3Afalse&expanded=true) including:
  * Fixed va-checkbox label alignment
  * Added label prop value to va-button in the va-file-input component 
  * Fixed month validation utility 
  * Aligned web component labels, descriptions, and error message font weights
  * Adjust va-checkbox margin from error-message to label
  * Fixed alert expandable component calc-max-height

### Sketch Library updates

* We created our first ["Shared library" for Search components](https://www.sketch.com/s/ab0f611b-c15c-42c4-ab71-1158ff6e01c6). Shared libraries extend the core library with additional components that are organized by functionality. Read more about [shared libraries]({{ site.baseurl }}/about/designers/design-libraries#shared-libraries).
 
### Documentation updates

 * We also updated documentation on all of our [design libraries]({{ site.baseurl }}/about/designers/design-libraries).
 * Added a new pattern: [Ask users for pronouns]({{ site.baseurl }}/patterns/ask-users-for/pronouns). This pattern also covers how to provide a way to give an answer not in the list of options. 
 * Revised the pattern detailing how to [Ask users for gender]({{ site.baseurl }}/patterns/ask-users-for/gender)

## August 2022

### New and updated components

#### Use with caution

* [File input]({{ site.baseurl }}/components/form/file-input)
* [Memorable date]({{ site.baseurl }}/components/form/memorable-date)
* [Month/year]({{ site.baseurl }}/components/form/date-input#monthyear)

### Sketch Library updates

* Added the [Privacy agreement component](https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/symbols?g=Privacy%2520agreement).
* Organized text and layer styles, deleted duplicates.

### Documentation updates

* [Alert]({{ site.baseurl }}/components/alert), [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable), [Additional information]({{ site.baseurl }}/components/additional-info), [Banner]({{ site.baseurl }}/components/banner), [Banner - Maintenance]({{ site.baseurl }}/components/banner/maintenance), and [Banner - Promo]({{ site.baseurl }}/components/banner/promo) all received guidance clarifications on their uses and how to choose between them.

### Pattern updates

* [Patterns]({{ site.baseurl }}/patterns/) reorganization. We’ve reorganized the Patterns section around user tasks: Asking a user for information and helping users to accomplish a task. We’ve put in redirects as well so that you can find where your favorite pattern has gone.

## July 2022

### New and updated components
#### Use: Deployed
* [Link]({{site.baseurl}}/components/link)
* [Textarea]({{site.baseurl}}/components/form/textarea)

#### Use with caution

- [Button]({{ site.baseurl }}/components/button)
- [Button pair]({{ site.baseurl }}/components/button/button-pair)
- [Alert - Expandable]({{ site.baseurl }}/components/alert-expandable)
- [Memorable date]({{ site.baseurl }}/components/form/memorable-date)

### Sketch Library updates

New component symbols:
* Promo banner
* Button Pair
* OMB Info 
* Active link variation 
* File Input
* Table
* Alert - expandable (Info and Warning variations)
* Telephone 
* Decreased form control error state margins to align with USWDS
* Increased width of error state borders from 2px to 4px for Date input, Memorable date, Number input, Select, Text input, Text area to align with USWDS
* New layer styles for default, disabled, focus, error, and success borders on form controls

### Documentation updates

* [Button pair]({{ site.baseurl }}/components/button/button-pair)
* Consolidation of [error message related content]({{ site.baseurl }}/content-style-guide/error-messages/)
* [Link]({{site.baseurl}}/components/link)

### Pattern updates

* [Help users to navigate a long list]({{ site.baseurl }}/patterns/help-users-to/navigate-a-long-list) (aka Show more options) - documentation and Sketch library.

## June 2022

- [Textarea web component]({{ site.baseurl }}/components/form/textarea)
- The va-button-primary utility class has been deprecated. Please visit the [Button component page]({{ site.baseurl }}/components/button/) for guidance on buttons.

## May 2022

- [Documentation on native events in form controls]({{ site.baseurl }}/components/form/)
- [Search input web component]({{ site.baseurl }}/components/search-input)
- [Modal web component]({{ site.baseurl }}/components/modal)
- [Date web component]({{ site.baseurl }}/components/form/date-input)
- [Number input web component]({{ site.baseurl }}/components/form/number-input)

## April 2022

- System wide navigation changes
  - The side navigation now shows sub-pages rather than in-page anchor links. Anchor links are now reflected using the "On this page" component which you'll find at the top of any lengthy page.
  - Experimental Design components and patterns moved into their respective Components and Patterns sections.
  - The "Documentation" section was renamed "About".
  - The "Design" section was renamed "Foundation".
  - Utilities and Layout moved into the Foundation section.
- [Maturity scale]({{ site.baseurl }}/about/maturity-scale): We've introduced a maturity scale to track the lifecycle of components and patterns. This allows experimental design elements to come into the system and have visibility in the Components and Patterns sections. Each component and pattern has been assigned a maturity level on the scale which is indicated by a tag and dot in the side navigation.
- Section pages: Top-level navigation sections, such as Patterns and Foundation, now have sub-sections that group similar elements. These new section pages will also have general guidance that applies to everything in that section. This will allow us to grow the system. 
  - New sections:
    - [Foundation > Layout]({{ site.baseurl }}/foundation/layout/) 
    - [Foundation > Utilities]({{ site.baseurl }}/foundation/utilities/) 
- Table web component