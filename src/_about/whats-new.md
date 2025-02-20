---
layout: default
title: What’s new?
---

# What’s new?

<div class="va-introtext">
  The latest news and updates on the Design System, Forms library and the Content style guide.
</div>

## What's Changed (Sprint 20: Jan 30 to Feb 13) 

### New Features & Components 🎉

- va-banner: add dismissed-banner-id prop by [@SnowboardTechie](https://github.com/SnowboardTechie) in [#1488](https://github.com/department-of-veterans-affairs/component-library/pull/1488)
- va-file-input: add support restricting the size of the file added by [@it-harrison](https://github.com/it-harrison) in [#1490](https://github.com/department-of-veterans-affairs/component-library/pull/1490)
### Fixes

- va-button-pair: add support for submitting form by [@jamigibbs](https://github.com/jamigibbs) in [#1482](https://github.com/department-of-veterans-affairs/component-library/pull/1482)
- va-language-toggle: accessibility updates by [@ataker](https://github.com/ataker) in [#1484](https://github.com/department-of-veterans-affairs/component-library/pull/1484)
- va-button & va-button-pair: allow custom text for continue variation by [@jamigibbs](https://github.com/jamigibbs) in [#1485](https://github.com/department-of-veterans-affairs/component-library/pull/1485)

### Other Changes

- CSS-Library: Improved font handling for source sans pro across multiple platforms by [@Andrew565](https://github.com/Andrew565) in [#1483](https://github.com/department-of-veterans-affairs/component-library/pull/1483)

### New Contributors

- [@SnowboardTechie](https://github.com/SnowboardTechie) made their first contribution in [#1488](https://github.com/department-of-veterans-affairs/component-library/pull/1488)


### Figma Changelog
[Update Figma with the new gutter specs - Design](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3413)  (Dan Brady) 
- Added specs for planned margin and grid updates within all breakpoints #3413

Color of Eyebrow incorrect / Comment #4274 (Lucas Wright) 
- Changed hex color to 3d4551

[Update guidance for process list eyebrow - documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3178) (Lucas Wright)
- Added optional eyebrow for "Default" (none), "Pending", "Active", "Checked", and "Custom" statuses. 

Update design for current links in breadcrumbs] (https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3759)  (Lucas Wright)
- To align with the treatment of the language toggle, we are making the last "leg" of the breadcrumb (the current page) bold, black font (not underline). 

### Guidance updates

- [Language toggle component- Update documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2585) (Barb Denney)
- [Update va-checkbox to include guidance for indeterminate state](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3683) (Barb Denney)
- [Combo box - Documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3567) (Barb Denney)
- [DST Staging Review: Broken link to Alert from Related section of guidance](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3672) (Dan Brady)



### **New Features & Components Jan 2025 (Sprints 19)**

[v49.0.0 of the component library](https://github.com/department-of-veterans-affairs/component-library/releases/tag/v49.0.0) 

### Breaking Changes

- va-file-input-multiple: update data for vaMultipleChange to return more detail (BREAKING) va-file-input: fix bug with upload message not resetting by [@powellkerry](https://github.com/powellkerry) in [#1460](https://github.com/department-of-veterans-affairs/component-library/pull/1460)

### New Features & Components 🎉

- va-file-input-multiple: allow for slots to be conditionally rendered on file inputs by [@powellkerry](https://github.com/powellkerry) in [#1458](https://github.com/department-of-veterans-affairs/component-library/pull/1458)
- va-file-input: display previously uploaded file by [@powellkerry](https://github.com/powellkerry) in [#1461](https://github.com/department-of-veterans-affairs/component-library/pull/1461)
- va-file-input: add statusText prop by [@powellkerry](https://github.com/powellkerry) in [#1463](https://github.com/department-of-veterans-affairs/component-library/pull/1463)

### Fixes

- va-telephone: add health resource center number to constants by [@Dr-Pongo](https://github.com/Dr-Pongo) in [#1455](https://github.com/department-of-veterans-affairs/component-library/pull/1455)
- va-select: Adding 'vaSelectBlur' event by [@Andrew565](https://github.com/Andrew565) in [#1466](https://github.com/department-of-veterans-affairs/component-library/pull/1466)
- va-checkbox and va-radio-option: Improved a11y by [@Andrew565](https://github.com/Andrew565) in [#1442](https://github.com/department-of-veterans-affairs/component-library/pull/1442)
- va-alert: Fixing it so close button on slim alerts doesn't overflow by [@Andrew565](https://github.com/Andrew565) in [#1467](https://github.com/department-of-veterans-affairs/component-library/pull/1467)

### Other Changes

- CSS-Library: Moving fonts loading to core by [@Andrew565](https://github.com/Andrew565) in [#1469](https://github.com/department-of-veterans-affairs/component-library/pull/1469)
- CSS-Library: add primitive and semantic spacing tokens by [@micahchiang](https://github.com/micahchiang) in [#1468](https://github.com/department-of-veterans-affairs/component-library/pull/1468)
    

### Figma Changelog

- [[Design] Update search input with clear search variation.](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3608) (Barb Denney)
	- Breaking Change: When updating the search input component, edited text in the input will clear and default to the term 'Search'. Text in the search button and suggestions will remain unaffected 
		- Added a clear button to search input
		- Added focus rings to the search input and the new clear button
- [Error Color mismatch between Figma and Production](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3519) (Dan Brady) 
	- Form Elements: 
		- Label
		- Error Text
		- Hint Text
		- Label Header
	- Checkbox and Checkbox Element
	- Date Input
	- File Input
	- Memorable Date
	- Privacy Agreement
	- Radio Buttons
	- Select and Select Element
	- Statement of Truth
	- Text Input and Text Input Element
	- Textarea and Textarea Element 
- [[Crisis Line Modal] - Add to VADS Component Examples and add modal contents](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2590) (Dan Brady) 
	- Update name to "Crisis Line Modal"
	- Add modal variants and content
	- Update properties for device and element
- [Layout Grid](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3413) (Dan Brady)
	- Added specs for planned margin and grid updates within all breakpoints
- [Update language toggle component - Design](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3605)  (Lucas Wright)
	- Created a new design that has the current language display (in VADS-base color) which complies with the latest WCAG guidelines.
    
### Guidance updates

- Creates a path for mobile examples. [Amends [#2391](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2391)] by [@humancompanion-usds](https://github.com/humancompanion-usds) in [#3697](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3697)
- Updates prefill docs to reflect update prefilled information pattern by [@bellepx0](https://github.com/bellepx0) in [#3701](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3701)
- Alert - Sign-in: Fix broken link by [@danbrady](https://github.com/danbrady) in [#3708](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3708)
- Update neutral-and-inclusive-language.md in content style guide by [@RLHecht](https://github.com/RLHecht) in [#3719](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3719)
- Add audit data for alert sign in by [@rsmithadhoc](https://github.com/rsmithadhoc) in [#3705](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3705)
- More fixes to style guide by [@RLHecht](https://github.com/RLHecht) in [#3722](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3722)
- Renames a file. by [@humancompanion-usds](https://github.com/humancompanion-usds) in [#3720](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3720)
- Update checkbox.md by [@babsdenney](https://github.com/babsdenney) in [#3729](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3729)
- Update content for intro page prefill alerts in prefill pattern docs by [@bellepx0](https://github.com/bellepx0) in [#3733](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3733)
- Card, Tag: Adding status to cards by [@danbrady](https://github.com/danbrady) in [#3725](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3725)
- Update link/button guidance for downloads by [@rsmithadhoc](https://github.com/rsmithadhoc) in [#3744](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3744)
- Download link update by [@rsmithadhoc](https://github.com/rsmithadhoc) in [#3758](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/3758)





## New Features & Components  (as of Jan 15, 2025)
 **[v48.4.0](https://github.com/department-of-veterans-affairs/component-library/releases/tag/v48.4.0) of the component library**

- va-button: add loading variation by [**@powellkerry**](https://github.com/powellkerry) in [#1446](https://github.com/department-of-veterans-affairs/component-library/pull/1446)
- va-search-input: add clear search button by [**@ataker**](https://github.com/ataker) in [#1450](https://github.com/department-of-veterans-affairs/component-library/pull/1450)

**Fixes**

- va-accordion: add custom event to expand/collapse all button by [**@jamigibbs**](https://github.com/jamigibbs) in [#1445](https://github.com/department-of-veterans-affairs/component-library/pull/1445)
- va-date: remove unnecessary aria labels for select by [**@powellkerry**](https://github.com/powellkerry) in [#1447](https://github.com/department-of-veterans-affairs/component-library/pull/1447)
- va-alert-sign-in: Hides no-sign-in-link when not present by [**@asg5704**](https://github.com/asg5704) in [#1452](https://github.com/department-of-veterans-affairs/component-library/pull/1452)
- va-link: add aria-label to all variations by [**@jamigibbs**](https://github.com/jamigibbs) in [#1448](https://github.com/department-of-veterans-affairs/component-library/pull/1448)

**Other Changes**

- css-library: add img folder to dist by [**@micahchiang**](https://github.com/micahchiang) in [#1441](https://github.com/department-of-veterans-affairs/component-library/pull/1441)
- css-library: fix the html element's font-size so it will respect browser settings by [**@Andrew565**](https://github.com/Andrew565) in [#1444](https://github.com/department-of-veterans-affairs/component-library/pull/1444)

**Figma Changelog**

- [Update Confirmation template screenshots & guidance](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3659)  (Dan Brady)

- Update design of Language Toggle / #3605  (Lucas Wright)
  - Created a new design that has the current language display (in VADS-base color) which complies with latest WCAG guidelines.

- [Error Color mismatch between Figma and Production](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3519) (Dan Brady) 

- Link Collection (active link) Figma update - Design #3487  (Barb Denney)
  - Fixed bug in link collection that caused the active link arrow to align to the right. 

- Update visuals based on USWDS 3.9.0 update / #3524  (Lucas Wright)

  - Updated Pagination based on USWDS 3.9.0 update (add underlines to all links) #3524

  - Update page link to 40x40

  - Add properties: Type, State

  - Updated the spacing of the icon and padding on left side to 20 px

  - Fixed the overlap of the close button (X) with text in the slim designs

  - Fixed the odd spacing issues in the layout of the variations

- Card (Dan Brady)
  - Fixed tag height  

- Button  (Dan Brady)

  - Deprecate disabled variation

  - Add loading variation


**Guidance updates**

- [[Documentation\] - Update list component documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3399)  (Barb Denney)

- [va-checkbox indeterminate state - Documentation update](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3610)  (Barb Denney)

- [Update links for Alert Sign-in](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3637)  (Barb Denney)




## Fall 2024

### New and updated components
* va-process-list-item: Add text to describe status by @powellkerry in #1362
* Add custom message to va-file-input and update message in va-file-input-multiple by @ataker in #1367
* va-table: add sorting variation by @it-harrison in #1358
* va-file-input: add support for read-only mode by @pennja in #1300
* va-date: add prop to make month optional by @it-harrison in #1377

### New content guidance
* Claims and applications (under Specific topics and programs): New page with general guidance for content about claims and applications #3504 
* Email and text notifications: New page with general guidance for email notifications #3406
* Bulleted lists: Clarification on single sentences in lists; crosslink with radio buttons and checkboxes #3268
* Use short sentences (under Plain language): New example and suggested guideline for maximum sentence length #3268 
* Sign in and identity verification (under Specific topics and programs): Updates to word list related to sign-in changes and clarification on when and when not to use "verify your identity"
* Word list: New entries for claimant, sponsor, Philippines, and Washington, DC #3513

### Bug fixes
* va-modal: set box-sizing to border-box to prevent text overflow by @powellkerry in #1357
* va-accordion: open accordion when media is print by @ataker in #1363
* va-process-list: update status eyebrow text to uppercase by @powellkerry in #1365
* va-process-list: change color variable from usa to vads by @powellkerry in #1368
* va-table: show table header for non-stacked & stacked small screen by @harshil1793 in #1364
* va-table: update va-table-inner to properly scope table header row to columns by @1Copenut in #1370
* va-select: add import for focusable mixin by @powellkerry in #1376
* va-modal: set overflow-wrap:anywhere on modal content by @powellkerry in #1372
* focusable: add tabindex selector by @powellkerry in #1380

### Other changes
* CSS Library: replace FA icons for action link and alert classes by @jamigibbs in #1371
* CSS Library: style and image path updates for alert and action link modules by @jamigibbs in #1378
* CSS Library: remove the /alerts image path by @jamigibbs in #1381

### Design updates
* [Design] Table variations #3137 
* [Design]Update Alert spacing in Figma #3231 
* Update breadcrumb spacing in Page templates - Design #3049 

### Documentation updates  
* Update guidance for Keep a record of submitted information pattern #3054 
* Add List guidance to VADS #3206 
* Alerts - Sign in - Documentation 
* Issue with downloading logos (PNG format)
* Update va-link External link variation guidance #3224
* Multiple responses pattern and flow chart #3219
* Update guidance for select component - Documentation #3251
* Guidance for international phone numbers #3316
* Update gender pattern #3289 

## Summer 2024

The team synced up typography with USWDS v3 and continues to focus on syncing up iconography and replacing v1 components with their v3 equivalents.

### New and updated components

* [File input]({{ site.baseurl }}/components/form/file-input)
* [Text input - Prefix icon]({{ site.baseurl }}/components/form/text-input#prefix-icon)
* [Text input - Suffix text]({{ site.baseurl }}/components/form/text-input#suffix-text)
* [Text input - Prefix and Suffix]({{ site.baseurl }}/components/form/text-input#prefix-and-suffix)

<a class="vads-c-action-link--blue" href="https://github.com/department-of-veterans-affairs/component-library/releases">Component Library releases</a>

### New and updated guidance

* [Breadcrumbs]({{ site.baseurl }}/components/breadcrumbs)
* [Ask users for housing status](/patterns/ask-users-for/housing-status)
* [URLs]({{ site.baseurl }}/components/url-standards/)
* [URLs - Redirects]({{ site.baseurl }}/components/url-standards/redirects)
* [Use short sentences]({{ site.baseurl }}/content-style-guide/plain-language/use-short-sentences)

### Bug fixes

[Issues closed this Summer](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is%3Aissue+is%3Aclosed+closed%3A2024-06-01..2024-08-30+) (206)

## Spring 2024

### May 2024

The team continued to synch to USWDS v3 specifically aligning typography and updated and fixed v3 components. The Figma Library continued to be built out and updated.

#### New features and components

* Experimental Design - Button - Icon (#1559)
* Experimental Design [new icon request: pill] (#2811)
* Add icons for the mobile app (#2865)

#### Updated components and bug fixes

* Allow `<va-link>` to be a white link instead of default blue (#2602)
* Add `aria-describedby` attribute/functionality to va-button (#2739)
* Formation Deprecation - Styles Migration - Swap content-build import (#2539)
* Screen Reader bug: Signature / Statement of Truth (JAWS) (#2649)
* Remove V1 Modal from Component Library and Storybook (#2661)
* Component Analytics enhancement request: Provide context for `<va-link>` (#2693)
* Cannot submit a form with va-button (#2734)
* Statement of Truth change events do not contain the form values (#2783)
* Remove the v1 components in Storybook (#2800)
* Switch any non v3 components to use USWDS icons (#2198)
* DST Staging Review: Insufficient color contrast on focus/hover states (#2833)
* Accessibility: V3 Select's options are not being read with Chrome when arrowed through (#2610)
* Tag component should use USWDS v3 background color (#2361)
* Update the "Icon Found" bot in vets-website and content-build for va-icon(#2626)
* File Input - Update v3 component to align with Figma (#2642)
* Cannot change text of a continue va-button (#2733)
* va-icon should be properly aligned to parent element and pick up font size(#2818)
* Replace content-build breadcrumb partial with V3 Component (#2742)
* Formation Deprecation - CSS Library Utility class rename (#2855)
* Fix Drag-and-Drop Handling and Add Custom Validation Example for `<va-file-input>` (#84044)
* Formation Deprecation - Typography Migration - Swap vets-website imports (#2538)
* Pill icon has hard-coded fill value (#2875)

#### Figma Library updates

* Figma rebuild: Templates - Feedback (Patterns) (#2454)
* Figma rebuild: Templates - Review (Forms) add accessibility annotations (#2545)
* Figma rebuild: Templates - Form Step (pattern) (#2778)
* [List] - Add Figma components for Lists (#2510)
* Add Table Example in Figma (#2809)
* Figma rebuild: Templates - Signature (Patterns) (#2461)
* [Figma] Update Penalty Statement in figma components(#2528)
* [va-checkbox] - Add Indeterminate State - Design (#2653)
* Figma update: Add white link variation to va-link (#2776)
* Tag component should use USWDS v3 background color (#2361)
* Update button width for mobile modals in Figma component (#2740)

#### Global Typography updates

* Typography Step 1 Completion: Merge component-library and vets-website PRs (#2681)
* Typography - Update Application REM Values - Appeals 995, 996 (#2698)
* Typography - Update Application REM Values - Appeals 10182 and Appeals/shared (#2699)
* Typography - Update Application REM Values - ask-a-question and ask-va (#2700)
* Typography - Update Application REM Values -auth and avs (#2701)
* Typography - Update Application REM Values - burials-v2 and caregivers (#2702)
* Typography - Update Application REM Values - check-in and claims-status (#2703)
* Typography - Update Application REM Values - dhp-connected-devices and discharge-wizard (#2704)
* Typography - Update Application REM Values - disability-benefits/686c-674 and disability-benefits/2346 (#2705)
* Typography - Update Application REM Values - disability-benefits/all-claims (#2706)
* Typography - Update Application REM Values - discharge-wizard and education-letters (#2707)

#### Documentation updates

* Converted v3 Borderless Table - Documentation (#2307)
* Remove v1 component guidance from v3 components (#2802)Button Icon - Documentation (#2745)
* Update documentation for `aria-describedby` attribute/functionality to va-button (#2770)

### April 2024

The team continued to synch to USWDS v3 and updated and fixed v3 components while the Figma Library continued to be built out.

#### New features and components

* Icon Button Component (#2641)
* Formation Deprecation - Add 768px Breakpoint to CSS Library (#2533)
* Conversion to USWDS v3 Borderless table component (#1860)

#### Updated components and bug fixes

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

#### Figma Library updates

* Figma rebuild: Templates - How to apply (Forms (#2464)
* Figma rebuild: Templates - Multiple Responses (Patterns) (#2457)
* Add missing icons for texting/mobile device and external link (#2381)
* Figma rebuild: Templates - Confirmation (Forms) (2466)
* Icons - Update Figma Components to use USWDS icons (#2624) 

#### Documentation updates

* Icon web component - Documentation (#2197)
* Create documentation about web component analytics (#2625) 

#### Accessibility  updates

* Discovery: Research and propose aria-describedby alternatives(#2619)
* Icon web component - Accessibility review (#1365)
* va-select needs describedby property (#2587)
  
## Winter 2024

### March 2024

The team continued to synch to USWDS v3 and made updates and fixes to v3 components while the Figma Library continues to be built out.

#### Updated components and bug fixes

* CSS-Library: add missing tokens after audit of formation (#1074)
* CSS-Library: update tokens missed in previous update (#1087)
* va-accordion: remove Font Awesome icon override (#1083)
* va-header-minimal: add optional headings (#1084)
* updated CSS-Library version in web-components (#1086)
* va-text-input and va-textarea error message not announced by screen readers (#2572)
* Updated all instances of color-primary-darker and color-primary-darkest in vets-website#2311

#### Figma Library updates

* Added v3 Borderless Table Design to the component library (#1859)
* Add Military Address pattern to templates (#2329)
* Added Direct Deposit pattern to templates (#2453)
* Added Review form pattern to templates (#2465)
* Added Introduction pattern to templates (#2484)
* Added Service History pattern to templates (#2460)
* Update the design system template screens for intro page (#2385)

#### Documentation updates

* Fixed broken link to "linking to external link" info (#2552)
* Documented pattern for Ask users for a single response (#2611)
* Wrote guidance for icon migration (#2536)

### February 2024

The team continued to deliver web components synced to USWDS v3 and made updates and fixes to v3 components while the Figma Library continues to be built out.

#### New and updated components

* va-breadcrumb: VA.gov home is now the default first label in #638
* va-flle-input: Made accessibility visual updates to the focus state and error state in #2441

#### Bug fixes

* va-modal: Fixed icon positioning in larger version in 2445
* va-file-input: Made accessibility fix so it reads out selected files correctly in #2442
* va-file-input: Disabled multiple file input dragging and dropping in #2479
* va-icon: Updated to use sprite successfully in #2353
* va-pagination: Fixed incorrect active page color in v3 in #2420
* va-maintenance-banner: Remove banner role in #2429
* Forms pattern: Updated  headings to correct serif font in #2474
* Forms pattern: Updated radio button to show title and required label in #2475

#### Deprecated React components

Modal (#1634, #2449,  #2450)

#### Figma Library updates

* Added Contact preferences pattern in #2452
* Updated expandable alert with number of lines property in #2454
* Added LinkedIn icon in #2497
* Fixed font & link color for Email Template #2506

#### Documentation updates

* Developer contribution page updates in #2446 
* va-alert and va-expandable-alert: Updated accessibility documentation for announcing alerts (role="alert") in #2145
* Design Libraries has been updated with Figma information in #2410
