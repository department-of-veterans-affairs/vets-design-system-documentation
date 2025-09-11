---
layout: component
title: Footer
permalink: /components/footer/
intro-text: The footer provides consistent navigation to information that’s generally not part of a primary user journey. 
figma-link-web: https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Example-Library?type=design&node-id=538-7198&mode=design&t=kPk3dlhnHSGw5X0f-0
status: dont-use-proposed
web: true
mobile-app: false
sub-pages:
  - sub-page: Footer - Minimal
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
      This component has not yet been built as a component in the Design System. Thus the Design System Team does not officially support this component. The Footer - Minimal variation is supported. Guidance and design assets are provided as is.
    </p>
  </div>
</va-alert>

## Examples

### Default

{% include component-example.html alt="The VA.gov header at mobile viewport width." file="/images/components/footer/footer-mobile.png" caption="At mobile viewport width for unauthenticated users the VA.gov footer collapses the navigation into accordions." class="x2" %}

{% include component-example.html alt="The VA.gov footer at desktop viewport width." file="/images/components/footer/footer-desktop.png" caption="At desktop viewport width for unauthenticated users the VA.gov footer exposes navigation sections and language assistance." %}

## Usage

### When to use

* **The footer is required to provide additional navigation.** Navigation helps users find the information they need across all of VA.gov.

**BEWARE! The footer is injected on all pages of VA.gov.** It is important for teams working on the footer to be aware that the footer is injected across different Content Management Systems at the VA. Here are some important things to keep in mind when working on the footer: 
* The footer is not currently a web-component supported by the Design System Team. Instead, it is a shared global React component with logic onto itself.
* Web components do not currently load in Microsoft TeamSites, one of the Content Management Systems that the footer is injected into.
* The Sitewide team owns the design of the footer while the Design System Team owns the code of the footer going forward. Thus the Design System Team is currently building out the web-components and will be working with other teams to support web-components in TeamSites.

### When to consider something else

* **Use the [Footer - Minimal]({{ site.baseurl }}/components/footer/footer-minimal) variation for use cases where navigating away would prevent the user from easily accomplishing their main task.** We use the minimal footer variation when we want to guide the user to task completion and where navigating away from the current task would be counter-productive or potentially lose user input. For example, a form flow is a use case where we want to help the user get through filling out the form without interruption.

### Guidance 

**The footer will go on every page.** The footer appears at the bottom of every page within the  www.va.gov domain, but not all sub-domains. 

**Links must meet set criteria to be considered for placement.** Footer links should point to useful content that might answer a remaining question a Veteran, family member, or caregiver may have. Each section has defined criteria an option must meet. 
  
### Structure

The footer has three sections:

1. Crisis Line Modal
2. Navigation
3. Identifier

#### Section guidance

1. [**Crisis Line Modal**](https://design.va.gov/storybook/?path=/docs/components-va-crisis-line-modal--default). The Veterans Crisis Line modal is a button prominently placed over the footer at mobile viewport widths only. When interacted with it opens a modal window. 
2. **Navigation**.There are 5 sub-sections within the Navigation area of the footer. On larger screens these sub-sections are organized into 4 columns and an additional horizontal row. On mobile the navigation section is collapsed into five [accordions]({{ site.baseurl }}/components/accordion) and the order is slightly modified.
   1. **Veteran programs and services**
     We use this section to help Veterans find information about specific VA programs and services available. This section is owned and governed by
     OCTO.We determine placement in this section based on an identified rubric of key data points.

      Specifications:
      * Section title is “Veteran programs and services."
      * Information linked to must be entirely for Veterans and live on VA.gov. Links cannot go to general office content.
      * A maximum of 9 links are allowed.
    2. **Veteran resources**
        We use this section to help Veterans access resources intended to help them find, learn about, and apply for their benefits. This section is owned and governed by OCTO. We determine
        placement in this section based on an identified rubric of key data points. 
        
        Specifications:
        * Section title is “More VA resources.”
        * Information linked to must be entirely for Veterans and live on VA.gov. Links cannot go to general office content.
        * A maximum of 9 links are allowed.
    3. **VA news and social media**
         We use this section to provide links to official VA accounts for news and updates. This section is owned by OPIA and governed by OCTO. We determine placement in this section based on
         an identified rubric of key data points. 
  
        Specifications:
         * Must be links to VA-owned accounts.
         * A maximum of 9 links are allowed.
    4. **VA support options** 
            We use this section to provide Veterans, their family members, and those that care for them with ways to contact VA. On mobile screens this appears as the first accordion. This
           section is owned and governed by OCTO. We determine placement in this section based on an identified rubric of key data points.
    5. **Language options**
            We use this section to provide Veterans with easy access to VA.gov information in other languages.  

3. **Identifier**. This portion of the footer holds the VA logo, agency badge, title, and required links. While our version pre-dates the [USWDS component of the same name](https://designsystem.digital.gov/components/identifier/), it provides roughly the same information.

