---
layout: default
title: What’s new?
---

# What’s new?

<div class="va-introtext">
The latest news and updates on Formation and the content style guide
</div>

---

### July 3

**6.7.0**
- [Accordion]({{ site.baseurl }}/components/accordions) component now supports a multi-selectable feature, allowing multiple accordions within a set to be open at the same time.

---

### June 21

**Site updates**
- Documentation for the new [promo banner component](/components/promo-banners)
- Note about how U.S. Web Design System has been implemented into the Formation design system

**6.6.3**
- Corrects font size in the [font size utility]({{site.base-url}}/utilities/font-size). The issue affected the normal font size utility, which was incorrectly set to `300`. The correct value is `400`.

---

### June 20

**6.6.1 and 6.6.2**
- Corrects display bug in the promo banner component

**6.6.0**
- Adds new promo banner component

---

### June 10

**Site updates**
- New pattern documentation for handling supplemental content.

---

### June 6

**6.5.1**
- Patches line-height mismatch for paragraphs inside of a  `va-introtext` div.

**6.5.0**
- Update [loading indicator component]({{ site.baseurl }}/components/loading-indicators): Uses CSS for animation instead of animated SVG, which was unsupported in IE.

**Site updates**
- Removed USWDS `npm` notes from JavaScript documentation since it is no longer needed as a dependency
- Fixed bug where anchors were hidden behind sticky navigation

---

### May 30, 2019

**Content style guide update**

- New topic added for VA [trademarks](https://design.va.gov/content-style-guide/trademarks).


---

### May 21, 2019

**Site updates**

- Removed examples of alert boxes with expandable content.


**Content style guide updates**

Summary of new guidance or change in guidance (either from the vets.gov or OPIA style guides):

- [Sentence casing](https://design.va.gov/content-style-guide/capitalization), except for “Veterans,” global header, global footer, global top nav labels, and proper nouns.
- [Service member](https://design.va.gov/content-style-guide/word-list#s) spelling change, per latest OPIA and DOD style guides.
- [Times and time zones](https://design.va.gov/content-style-guide/dates-and-numbers): Omit daylight savings/standard reference; use ET, MT, CT, PT without parentheses; and other style updates.
- [Phone numbers and vanity numbers](https://design.va.gov/content-style-guide/dates-and-numbers) style change.
- [Use "select" instead of "press"](https://design.va.gov/content-style-guide/dates-and-numbers) for phone menu options. It's more 508-friendly.
- Numbers: [When to use 1, when to spell out "one."](https://design.va.gov/content-style-guide/numbers)
- [Use we, us, you](https://design.va.gov/content-style-guide/we-us-you) when talking with Veterans.
- [Use they and their](https://design.va.gov/content-style-guide/they-their) as gender-neutral pronouns.
- Changes to [how we display links](https://design.va.gov/content-style-guide/links) and use embedded links.
- Guidance and tips for [writing health content](https://design.va.gov/content-style-guide/health-content).
- Writing for SEO: format and character count updates for [title tags and meta descriptions](https://design.va.gov/content-style-guide/seo).
- [Bulleted lists](https://design.va.gov/content-style-guide/bulleted-lists): Clarification on punctuating; on when multiple lists on the same page.
- Clarification on [contractions](https://design.va.gov/content-style-guide/punctuation#contractions). (Contractions are conversational. We use them.)
- Change of house reference from Chicago Manual to AP Style. This aligns with OPIA house reference.


---

### May 20, 2019

**6.3.5**

- Patch to Fix a bugg affecting accordions

**Site updates**

- Redesigned code snippet previews and improved links to the react versions for some components.

---

### May 13, 2019

**6.3.3**

- Imports missing Sidenav component CSS

---

### May 13, 2019

**6.3.2**

- Patch for Sidenav component Javascript.  Fixes bug where screen would be stuck if screen was resized while navigation flyout was open.

---

### May 9, 2019

**6.3.0**

- Added Sidenav component JavaScript to Formation

---

### April 30, 2019

**6.2.3**

- Adds missing Sass variables for cool blue colors

---

### April 25, 2019

**6.2.1**

- Address bug in accordion script where bordered accordions were not declared
- Fixes second bug in accordion where the DOM was traversed incorrectly
- Fixes interaction on accordions where accordion content is opened below the fold

**Site updates**

- Updates to the content style guide
- Removed browser autocomplete from search
- Fixes issue where content in responsive previews generated 404 in production

---

### April 17, 2019

**6.2.0**

Packages Formation’s Javascript to function as a standalone package. Formation can now be installed with node on a project without any other dependencies.

**Site updates**

- Updated documentation to the content style guide

---

### April 12, 2019

**Site updates**

- Improved documentation for running the site locally
- Updates to some content guidance in the style guide

**6.1.3**

- Adds `autoprefixer` to address display bug in select boxes

---

### April 4, 2019

**Site updates**

- Added examples to showcase how to nest flexbox grids inside other grid columns.

**6.1.0**

- Updates Formation’s USWDS backbone to version 1.6.10.

---

### April 3, 2019

**6.0.0 & 6.0.1**

Image paths in Formation are now relative, so the images and fonts folder are not *required* to be in your site root.

**Site updates**
- Better indicators for responsive utilities
- Updates to contribution documentation (still work in progress)
- Updates to content style guide

---

### March 29, 2019

**Site updates**
- Added search feature

---

### March 25, 2019

**5.6.1**
- Removes padding property on U.S. Web Design System grid that is overridden on VA.gov

**Site updates**
- Updated documentation for designers, developers, and naming conventions

---

### March 21, 2019

**5.5.2**
- Adds heading level names to font-size utility

**5.5.1**
- Adds more images used in background image CSS from va.gov

**Site updates**
- Update to documentation about headings in the typography section
- Update to documentation on heading utilities

---


### March 13, 2019

**Site updates**
- Updates external [link icon documentation](../design/typography.html#links);

---

### March 12, 2019

**5.4.2**
- Adds external link icon CSS into Formation design system

---

### March 11, 2019

**5.4.1**
- Creats Sass variables for hub colors that are consistent with the rest of color variable naming conventions
- Adds two new hub colors to utility classes for color, background color, and border color

**Site updates**
- New layout for [system color palette](../design/color-palette.html)
- Updated documentation for color, background color, and border color to include new hub colors and Sass variable names

---

### March 6, 2019

**Site updates**
- Update documentation for alerts

---

### March 4, 2019

**Site updates**

- Added form control documentation
- Added image aspect ratio documentation

---

### February 21, 2019

**5.3.0**

- Added line-height utility

**5.2.0**

- Added measure

**Site updates**
- Improved documentation pages for some utilities

---

### February 20, 2019

**5.1.0**

- Added height and width utility

---

### February 14, 2019

**3.14.0**

- Added a border utility

---

### February 12, 2019

**3.13.0**

- Added a font-weight utility

**3.12.1**

- Added a transparent option for color and background color utility.

**3.12.0**

- Added a new `font-style` utility.

---

### February 11, 2019

**Site updates**

- Hover on any `h2`, `h3`, or `h4` to get an anchor link. This feature will allow users to easily copy deep links to share and discuss.

---

### February 8, 2019

**3.11.0**
- Added a text-decoration utility

**3.10.0**
- Added a text-alignment utility

---

### February 6, 2019

**3.9.0**
- Added a spacing units function for margin and padding

**Site Updates**
- Added documentation for spacing units

---

### February 6, 2019

**3.8.0**
- Added font-family utility

**Site Updates**

- Updated the documentation presentation for the color utility and added hex keys.
- Updated icon documentation to include HTML snippets

---

### February 5, 2019

**3.7.0**

Adds a font-size utility

**Site Updates**

Updated the documentation for background colors and added hex keys.

---

### February 1, 2019

**3.6.0**

Adds a background-color utility

**3.5.0**

Adds a color utility

---

### January 30, 2019

**3.4.0**

Adds a suite Flexbox utilities.

---

### January 29, 2019

**3.3.0**

Moves the Add Another button to the bottom of array lists in support of updates to the U.S. Forms System.

---

### January 25, 2019

**3.2.0**

Includes Font Awesome regular and Fontawesome brand fonts.

**3.1.0**

This release adds a new flexbox grid system.

---

### January 23, 2019

**3.0.0**

In this release we are splitting Formation into two modules: formation and formation-react. The regular formation module contains the styles and assets used to render a site using the VA design system. In the future it will also include plain JS implementations of components with interactivity.

The `formation-react` module contains all the React component implementations we've built for design system patterns.

Both are starting on v3, but will not necessarily be kept in sync going forward.

To upgrade, update any paths in your React code to point to `formation-react` instead of `formation`.

---

### January 21, 2019

**2.0.0**

- Updated icon font set to Fontawesome 5 solid

---

### January 17, 2019

**Site updates**

- Created page to show recent updates

---

### January 15, 2019

**1.18.0**

- Accessibility fixes for the module component
