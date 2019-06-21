---
layout: default
index: true
title: Documentation
---

# Getting started with design.va.gov

<div class="va-introtext">
This site provides design guidelines and code to help you quickly create trustworthy, accessible, and consistent digital services on the VA.gov platform. Its primary audience includes designers, content writers, and front-end developers who work on VA.gov.
</div>

**Here are some relevant guides to get started for:**

- [Designers](designers)
- [Developers](developers)
- [Content writers](content-writers)

## About Formation

Throughout this site, you will see references to Formation. Formation is VA.gov’s front-end framework.

### U.S. Web Design System already included

Formation is built on top of a fork of [U.S. Web Design System](https://designsystem.digital.gov) (USWDS) v1.6.10. In other words, there is no need to include the USWDS into your Formation project because Formation already includes the USWDS.

We have added components, design patterns, and other features unique to the needs of the VA.gov platform, all tested with Veterans to meet our usability and accessibility guidelines.

We will not be update to version to USWDS v2, primarily because:
- Many of the naming conventions have changed between the two versions
- The design of some of the base components has changed based on specific needs for VA.gov
- Formation includes its own set of utility classes and design tokens

If USWDS introduces a new component that would be useful on VA.gov, implement it individually in a way that works with VA.gov's design system and naming convention.

### Browser support

Formation supports older and newer browsers through progressive enhancement. We follow the 2% rule: we support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov).

<div class="site-showcase">
  <div class="vads-u-display--flex site-showcase__col vads-u-margin-top--0 vads-u-border--0 vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--cool-blue-light ">
      <i class="fab fa-internet-explorer vads-u-font-size--2xl"></i>
    </div>
    <div class="vads-u-font-weight--bold">
      IE 11 and up
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--cool-blue-light ">
      <i class="fab fa-edge vads-u-font-size--2xl"></i>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Microsoft Edge
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--gold">
      <i class="fab fa-chrome vads-u-font-size--2xl"></i>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Google Chrome
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--orange">
      <i class="fab fa-firefox vads-u-font-size--2xl"></i>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Firefox
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--primary-alt-dark">
      <i class="fab fa-safari vads-u-font-size--2xl"></i>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Safari
    </div>
  </div>
</div>