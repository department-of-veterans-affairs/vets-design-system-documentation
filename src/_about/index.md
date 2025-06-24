---
layout: default
index: true
title: Getting started with design.va.gov
intro-text: This site provides design guidelines and code to help you quickly create trustworthy, accessible, and consistent digital services on the VA.gov platform. Its primary audience includes content writers, designers, and front-end developers who work on VA.gov.
---

# {{ page.title }}

<div class="va-introtext" markdown="1">
  {{ page.intro-text }}
</div>

## Guides by audience

<div class="vads-grid-container vads-u-margin-bottom--2">
  <div class="vads-grid-row">
    <div class="vads-grid-col-12 tablet:vads-grid-col-4">
      <va-link-action
        href="{{ site.baseurl }}/about/content-writers"
        text="Content writers"
        type="secondary"
      ></va-link-action>
    </div>
    <div class="vads-grid-col-12 tablet:vads-grid-col-4">
      <va-link-action
        href="{{ site.baseurl }}/about/designers"
        text="Designers"
        type="secondary"
      ></va-link-action>
    </div>
    <div class="vads-grid-col-12 tablet:vads-grid-col-4">
      <va-link-action
        href="{{ site.baseurl }}/about/developers"
        text="Developers"
        type="secondary"
      ></va-link-action>
    </div>
  </div>
</div>

## Quick, easy, secure, and accessible

### Design principles

[VA.gov design principles]({{ site.baseurl }}/about/principles) are fundamental pieces of guidance that help teams building on the platform make their applications consistent with the Office of the Chief Technology Officer's (OCTO) standards of quality in the user experience. 

### 21st Century Integrated Digital Experience Act (IDEA)

The VA Design System complies with the [21st Century IDEA](https://digital.gov/resources/21st-century-integrated-digital-experience-act/), signed into law in December 2018, as it is built on top of a fork of the [U.S. Web Design System](https://designsystem.digital.gov) (USWDS v1.6.10). In other words, there is no need to include the USWDS into your project because the VA Design System already includes the USWDS.

We have added components, patterns, and other features unique to the needs of the VA.gov platform, all tested with Veterans to meet our usability and accessibility guidelines.

### Browser support

The Design System supports older and newer browsers through progressive enhancement. We follow the 2% rule: we support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov).

<div class="site-showcase">
  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-color--orange">
      <svg class="usa-icon site-showcase__browser-icon firefox" aria-hidden="true" focusable="false" role="img">
        <use href="{{ site.baseurl }}/assets/img/browser-logos.svg#firefox"></use>
      </svg>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Firefox
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--gold">
      <svg class="usa-icon site-showcase__browser-icon chrome" aria-hidden="true" focusable="false" role="img">
        <use href="{{ site.baseurl }}/assets/img/browser-logos.svg#chrome"></use>
      </svg>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Google Chrome
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--cool-blue-light ">
      <svg class="usa-icon site-showcase__browser-icon edge" aria-hidden="true" focusable="false" role="img">
        <use href="{{ site.baseurl }}/assets/img/browser-logos.svg#edge"></use>
      </svg>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Microsoft Edge
    </div>
  </div>

  <div class="vads-u-display--flex site-showcase__col vads-u-align-items--center">
    <div class="vads-u-padding-right--5 vads-u-color--primary-alt-dark">
      <svg class="usa-icon site-showcase__browser-icon safari" aria-hidden="true" focusable="false" role="img">
        <use href="{{ site.baseurl }}/assets/img/browser-logos.svg#safari"></use>
      </svg>
    </div>
    <div class="vads-u-font-weight--bold">
      Latest versions of Safari
    </div>
  </div>
</div>

### Use of this Design System beyond VA.gov

The [21st Century Integrated Digital Experience Act (IDEA)](https://digital.gov/resources/21st-century-integrated-digital-experience-act/), signed into law in December 2018, requires teams at VA to consider using the [U.S. Web Design System](https://designsystem.digital.gov/), and to coordinate and ensure alignment of internal and external programs. Thus we strongly encourage you to use the VA design system and/or the US Web Design System as you're building products, whether for an internal or external audience. However, there is currently no requirement to follow the guidance in this design system for internal tools.

From [21st Century IDEA](https://www.congress.gov/bill/115th-congress/house-bill/5759/text):

> (c) Internal Digital Services.--The head of each executive agency shall ensure, to the greatest extent practicable, that any Intranet established after the date of enactment of this Act conforms to the requirements described in subsection (a).

While Subsection A does not mandate use of the U.S. Design System for internal tools, it does indicate that it is part of the strategy an agency should employ:

> coordinate and ensure alignment of the internal and external customer experience programs and strategy of the executive agency; and Compliance With United States Website Standards.--Any website of an executive agency that is made available to the public after the date of enactment of this Act shall be in compliance with the website standards of the Technology Transformation Services of the General Services Administration.
