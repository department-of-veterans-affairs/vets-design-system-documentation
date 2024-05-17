---
layout: default
title: What’s new?
---

# What’s new?

<div class="va-introtext">
  The latest news and updates on the Design System, Forms library and the Content style guide.
</div>

<va-alert
  close-btn-aria-label="Close notification"
  status="warning"
  visible
  uswds
>
  <h2 slot="headline">
    v1 components have now been deprecated
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      If your team is still using a v1 component, instances will be flagged in the Collab Cycle and may be considered launch blocking. <a href="{{ site.baseurl }}/about/developers/using-web-components#uswds-v1-to-v3-migration">Learn how to migrate a component</a>.
    </p>
  </div>
</va-alert>

## April 2024

The team continued to synch to USWDS v3 and updated and fixed v3 components while the Figma Library continued to be built out.

### New features and components

* Icon Button Component (#2641)
* Formation Deprecation - Add 768px Breakpoint to CSS Library (#2533)
* Conversion to USWDS v3 Borderless table component (#1860)

### Updated components and bug fixes

* [Alert] - Remove background-only prop from Alert In Figma (#2394)
* Review & submit - fix accordion error styling (#77064)
* Injected Header - Add eslint warning & inline comments for React Modals that should not be touched (#2541)
* Remove V1 Memorable Date from Component Library and Storybook (#2660)
* Search Typeahead component does not close as expected when the component loads with a value prefilled (#2676)
* Formation Deprecation - Typography base size migration QA vets-website, content-build and vagov-content (#2525)
* Formation Deprecation - Typography base size migration QA component-library (#2566)
* Rename medium-mobile breakpoint to tablet (#2679)
* va-summary-box should require that a header be present (#2557)
* Update components section in Storybook(#2589)
* Update remaining Formation color variables to their css-library counterparts (#79489)
* Review & submit - fix accordion error styling(#77064)
* Update remaining Formation color variables to their css-library counterparts (#79489)
* Formation Deprecation - Migrate font settings from Formation to CSS Library (#2537)
* Remove Font Awesome icon overrides in USWDS components (#2577)

### Figma Library updates

* Figma rebuild: Templates - How to apply (Forms (#2464)
* Figma rebuild: Templates - Multiple Responses (Patterns) (#2457)
* Add missing icons for texting/mobile device and external link (#2381)
* Figma rebuild: Templates - Confirmation (Forms) (2466)
* Icons - Update Figma Components to use USWDS icons (#2624) 

### Documentation updates

* Icon web component - Documentation (#2197)
* Create documentation about web component analytics (#2625) 

### Accessibility  updates

* Discovery: Research and propose aria-describedby alternatives(#2619)
* Icon web component - Accessibility review (#1365)
* va-select needs describedby property (#2587)
  
## March 2024

The team continued to synch to USWDS v3 and made updates and fixes to v3 components while the Figma Library continues to be built out. 

### Updated components and bug fixes

*  CSS-Library: add missing tokens after audit of formation (#1074)
*  CSS-Library: update tokens missed in previous update (#1087)
* va-accordion: remove Font Awesome icon override (#1083)
* va-header-minimal: add optional headings (#1084)
* updated CSS-Library version in web-components (#1086)
* va-text-input and va-textarea error message not announced by screen readers (#2572)
* Updated all instances of color-primary-darker and color-primary-darkest in vets-website#2311

### Figma Library updates

* Added v3 Borderless Table Design to the component library (#1859)
* Add Military Address pattern to templates (#2329)
* Added Direct Deposit pattern to templates (#2453)
* Added Review form pattern to templates (#2465)
* Added Introduction pattern to templates (#2484)
* Added Service History pattern to templates (#2460)
* Update the design system template screens for intro page (#2385)

### Documentation updates

* Fixed broken link to "linking to external link" info (#2552)
* Documented pattern for Ask users for a single response (#2611)
* Wrote guidance for icon migration (#2536)

## Leap Year February 2024

The team continued to deliver web components synced to USWDS v3 and made updates and fixes to v3 components while the Figma Library continues to be built out.

### New and updated components

* va-breadcrumb: VA.gov home is now the default first label in #638
* va-flle-input: Made accessibility visual updates to the focus state and error state in #2441 

### Bug fixes

* va-modal: Fixed icon positioning in larger version in 2445
* va-file-input: Made accessibility fix so it reads out selected files correctly in #2442
* va-file-input: Disabled multiple file input dragging and dropping in #2479
* va-icon: Updated to use sprite successfully in #2353
* va-pagination: Fixed incorrect active page color in v3 in #2420
* va-maintenance-banner: Remove banner role in #2429
* Forms pattern: Updated  headings to correct serif font in #2474
* Forms pattern: Updated radio button to show title and required label in #2475

### Deprecated React components

Modal (#1634, #2449,  #2450)

### Figma Library updates

* Added Contact preferences pattern in #2452
* Updated expandable alert with number of lines property in #2454
* Added LinkedIn icon in #2497
* Fixed font & link color for Email Template #2506

### Documentation updates

* Developer contribution page updates in #2446 
* va-alert and va-expandable-alert: Updated accessibility documentation for announcing alerts (role="alert") in #2145
* Design Libraries has been updated with Figma information in #2410

## Winter 2024

The team continued to deliver web components synced to USWDS v3 and brought the platform inline with the v3 color palette.

### Global system changes to upgrade to USWDS v3

* Update colors to USWDS v3 by @powellkerry in #1002
* Update primary blues in CSS Library by @micahchiang in #974

### New and updated components

* Added USWDS v3 va-file-input by @Andrew565 in #1017
* Added USWDS v3 va-featured-content (aka Summary box) by @ataker in #956
* Added USWDS v3 va-search-input by @jamigibbs in #947
* Added USWDS v3 va-modal by @harshil173 in #943
* Added va-footer-minimal by @it-harrison in #937
* va-checkbox-group: New form pattern support by @harshil1793 in #1034
* va-text-input: Deprecating Max Length variation for V3 by @Andrew565 in #1025
* va-radio: New form pattern support by @harshil1793 in #1009
* va-card: add prop to display a gray background by @jamigibbs in #1029
* va-banner: Set data-role to 'region' and create property data-label to set aria-label on first div child of nested va-alert by @eselkin in #1020
* va-memorable-date: add new form pattern support by @ataker in #1013
* va-textarea: add new form pattern support by @ataker in #1008
* va-text-input & va-number-input: add new form pattern support to USWDS variations by @it-harrison in #985
* va-breadcrumbs: add support for React Router via custom event by @it-harrison in #979

### Bug fixes

* va-text-input: require inclusion of charcount prop on component instances to enable character count by @it-harrison in #1049va-text-input: require inclusion of charcount prop on component instances to enable character count by @it-harrison in #1049
* va-file-input: Disable multiple file inputs by @Andrew565 in #1046
* va-alert: remove Background only variation for USWDS v3 by @powellkerry in #1035
* va-alert: fix close button position on full-width by @it-harrison in #1033
* va-memorable-date: make month default to input instead of select by @it-harrison in #1014
* va-checkbox-group, va-radio: move hint to legend by @powellkerry in #1028
* va-featured-content: Add ARIA label to featured content region by @rsmithadhoc in #1011
* va-pagination: fix USWDS variation not showing next/previous page in list by @ataker in #977
* va-alert: update uswds background and border colors by @harshil1793 in #1004
* va-checkbox: Add error message styling by @Mottie in #1007
* va-checkbox-group: make legend font match design spec by @it-harrison in #969
* va-modal: fix for screen readers when using Storybook by @Andrew565 in #966
* va-official-gov-banner: Fix for medium screens wrapping wrongly by @Andrew565 in #973
* va-telephone: Add prop for passing a string to aria-describedby by @jamigibbs in #970
* va-on-this-page: Fix left margin alignment by @nickjg231 in #957
* va-footer-minimal: Add focus outline to logo by @jamigibbs in #954
* Updated web-components to use variables from css-library by @it-harrison in #945
* va-segmented-progress-bar: Hiding steps from JAWS by @Andrew565 in #960
* va-omb-info, va-crisis-line-modal, va-minimal-header: Fix for focus trapping by @Andrew565 in #951

See the [component-library release notes](https://github.com/department-of-veterans-affairs/component-library/releases) for more detailed issues on component fixes.

### Deprecated React components

* Breadcrumb
* ExpandingGroup
* IconBase
* IconSearch
* TextInput

### Figma Library updates

* Shipped new libraries for components and templates in Figma.
* Updated the [design libraries documentation]({{ site.baseurl }}/about/designers/design-libraries).

### Content style guide updates

* Updated the [Abbreviations and acronyms]({{ site.baseurl }}/content-style-guide/abbreviations-and-acronyms).
* Updated the [Word list]({{ site.baseurl }}/content-style-guide/word-list).
* Updated the [Dates, times, phone numbers, and addresses]({{ site.baseurl }}/content-style-guide/dates-and-numbers) content.

### Documentation updates

* Updated accessibility guidance around the use of role in [Alert]({{ site.baseurl }}/components/alert#assign-an-appropriate-aria-role).
* Renamed Featured Content to [Summary box]({{ site.baseurl }}/components/summary-box).
* Added [Design tokens]({{ site.baseurl }}/foundation/design-tokens) to the Foundation section.
* Updated the [Contributing]({{ site.baseurl }}/about/developers/contributing) page for developers.
* Added the [Language toggle]({{ site.baseurl }}/components/language-toggle) component.
* Added the [Header - Minimal]({{ site.baseurl }}/components/header/header-minimal) component.
* Added the [Footer - Minimal]({{ site.baseurl }}/components/header/footer-minimal) component.
* Updated the [Design libraries]({{ site.baseurl }}/about/designers/design-libraries) page to go from Sketch to Figma.
* Added an example of an Alert - Slim in a [Card]({{ site.baseurl }}/components/card#claims-status).
* Updated the too much content guidance in [Additional info]({{ site.baseurl }}/components/additional-info#when-to-consider-something-else)
* Updated the accessibility guidance for the [Ask users for files]({{ site.baseurl }}/patterns/ask-users-for/files#accessibility-considerations) pattern.
* Standardized guidance for [Alert]({{ site.baseurl }}/components/alert).
* Added guidance for conditional revealing fields in the [Ask users for relationship to Veteran]({{ site.baseurl }}/patterns/ask-users-for/relationship#conditionally-revealed-fields).
* Removed unhelpful examples from the [Help users to navigate a long list]({{ site.baseurl }}/patterns/help-users-to/navigate-a-long-list#examples) pattern.
* Deprecated the [Notification]({{ site.baseurl }}/components/notification) component.
* Deprecated the [Link - Deep content]({{ site.baseurl }}/components/link/deep-content) component.
* Updated [accessibility considerations for icons]({{ site.baseurl }}/foundation/icons#accessibility-considerations).

All [documentation updates can be viewed in GitHub](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pulls?q=is%3Apr+is%3Aclosed).

## Summer 2023

The team continues to focus on building out new variations of our components based on USWDS v3. 

### New and updated components

* [va-back-to-top]({{ site.baseurl }}/components/back-to-top) changed from a button to a link by @jamigibbs in #746
* [va-button](https://design.va.gov/storybook/?path=/docs/components-va-button--primary-alternate): Add alternate (green) version to primary button by @powellkerry in #771
* Added [va-maintenance-banner]({{ site.baseurl }}/components/banner/maintenance) web component by @powellkerry in #713
* Added [va-notification]({{ site.baseurl }}/components/notification) web component by @allisonlu in #702

### USWDS v3-based components

* Added va-accordion USWDS v3 variation by @powellkerry in #728
* Added Additional info v3 by @harshil1793 in #703
* Added va-breadcrumbs: Add USWDS variation by @harshil1793 in #711
* [va-icon](https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default): Add new web component @it-harrison in #772
* Added va-process-list: Add USWDS variation by @ataker in #770

#### Bug fixes

A long list of bug fixes can be found in our [component release notes](https://github.com/department-of-veterans-affairs/component-library/releases).

### Content style guide updates

* Added guidance on [linking to external sites]({{ site.baseurl }}/content-style-guide/links#linking-to-external-sites).

### Deprecated React components

* Table
* CheckboxGroup