---
layout: component
title: Header
permalink: /components/header/
intro-text: A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
sketch-link: https://www.sketch.com/s/a52734dd-00d0-44f1-9c9e-ff4016130e5c/p/224585DD-02BA-49EB-91C6-DE20869AA4AC/canvas
sub-pages:
  - sub-page: Header - Minimal
anchors:
  - anchor: Examples
  - anchor: Usage
---

{% include _site-in-this-section.html %}

<va-alert
  close-btn-aria-label="Close notification"
  status="warning"
  visible
>
  <h2 slot="headline">
    This component is not officially supported
  </h2>
  <div>
    <p className="vads-u-margin-y--0">
      This component has not yet been built as a component in the Design System. Thus the Design System Team does not officially support this component. The Header - Minimal variation is supported. Guidance and design assets are provided as is.
    </p>
  </div>
</va-alert>

## Examples

### Default

{% include component-example.html alt="The VA.gov header at mobile viewport width." file="/images/components/header/header-mobile.png" caption="At mobile viewport width for unauthenticated users the VA.gov header shows a sign in link and a menu button." class="x2" %}

{% include component-example.html alt="The VA.gov header at desktop viewport width." file="/images/components/header/header-desktop.png" caption="At desktop viewport width for unauthenticated users the VA.gov header exposes search, contact us, and main menu navigation." %}

## Usage

### When to use Header 

* **The header is required to provide global navigation.** Global navigation helps users find the information they need across all of VA.gov. 

### How this component works

The header is made up of four parts:

1. [**Banner - Official Gov**]({{ site.baseurl }}/components/banner/official-gov). This component is required for all U.S. Government web sites.
2. **Header stripe**. This part of the header holds the VA logo, agency badge and title, sign in button, search, contact us link, and the main menu.
3. [**Crisis Line Modal**]({{ site.baseurl }}/components/crisis-line-modal). The Veterans Crisis Line modal is a button prominently placed over the Banner - Official Gov and Header stripe. When interacted with it opens a modal window. 
4. **Main menu**. The main menu provides top-level navigation across the whole of VA.gov 

### Behavior

* **BEWARE! The header is injected on all pages of VA.gov.** It is important for teams working on the header to be aware that the header is injected across different Content Management Systems at the VA. Here are some important things to keep in mind when working on the header:
  * The header is not currently a web-component supported by the Design System Team. Instead, it is a shared global React component with logic onto itself.
  * Web components do not currently load in Microsoft TeamSites, one of the Content Management Systems that the header is injected into. 
  * The Sitewide team owns the design of the header while the Design System Team owns the code of the header going forward. Thus the Design System Team is currently building out the web-components and will be working with other teams to support web-components in TeamSites.

### Choosing between variations

* **Use the [Header - Minimal]({{ site.baseurl }}/component/header/header-minimal) variation for use cases where navigating away would prevent the user from easily accomplishing their main task.** We use the minimal header variation where we want to guide the user to task completion and where navigating away from the current task would be counter-productive or potentially lose user input. For example, a form flow is a use case where we want to help the user get through filling out the form without interruption. Also, in the check-in experience we deliberately use a header with no sign in button because that button caused confusion with users and took them to sign into VA.gov when they intended to check-in to their appointment.

### Placement

* **At the top of every page.** The header appears at the top of every page within the va.gov domain, but not all sub-domains.
