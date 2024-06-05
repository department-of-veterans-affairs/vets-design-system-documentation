---
layout: category
title: Accessibility
permalink: /about/accessibility/
intro-text: How to follow accessibility standards when using or contributing to the VA Design System (VADS)
sub-pages:
  - sub-page: Accessibility annotations
---

{% include _site-in-this-section.html %}

VA is here to serve Veterans of the United States military, and [approximately 40% have an identified disability](https://www.statista.com/statistics/250316/us-veterans-by-disability-status/). 

Therefore, [accessibility is core to all design decisions]({{ site.baseurl }}/about/principles#usable-by-everyone) made in our Design System. All components must be tested before admission into the Design System, and all VA products must be tested before launch.

## Our holistic approach to accessibility

The VA Design System provides accessible components, the guidance to implement these components, and the tools to customize and extend the design system accessibly. It was built on top of a fork of the U.S. Web Design System (USWDS), which prioritizes accessibility throughout. [Learn more about how USWDS practices accessibility.](https://designsystem.digital.gov/documentation/accessibility/)

Components don’t live in a vacuum. As standalone elements, they can only be tested atomically. For a product to launch, you need to test holistically; you should review the product as a whole before launch. 

The surest way to make an accessible product is to “shift left,” or prioritize accessibility during an entire project’s lifecycle.


## Create accessible products using the Design System

Whenever you make a new component, feature, or product, follow these steps to ensure that, in the end, your creation is accessible. 

We recommend a mix of automated, semi-automated, and manual testing. You should also research with real people who use assistive technology to access services online.


### Design

- Review your mockups for accessibility issues before development ([learn how to design with with accessibility in mind](https://www.w3.org/WAI/tips/designing/))
- Add [accessibility annotations](https://www.figma.com/file/CZcnWfQOwtLqPm4WA5paYG/VADS-Annotation-Kit?type=design&node-id=415-1135&mode=design&t=Ld7dhuyaPcerrnPF-0) to your mockups to communicate important semantic information (heading levels, aria-labels, etc.) to designers, developers, and accessibility specialists


### Development

Manually test your product:

- Color and color contrast
- Content zoom and reflow
- Keyboard navigation
- Heading levels ([HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) is a useful Chrome extension)
- With screen readers
   - Based on recommendations from the [Blinded Veterans Association](https://bva.org/), we recommend testing with the following as a minimum:
       - iOS with Safari using VoiceOver (Mobile)
       - Windows 11 with Chrome using JAWS (Desktop)
- Conduct automated testing with [axe DevTools by Deque](https://www.deque.com/axe/)

### Research

- [Test with people who use assistive technology](https://depo-platform-documentation.scrollhelp.site/research-design/research-assistive-technology-sessions) (at least 20% of your participants)


## Contribute accessible components to the Design System

### Foundational accessibility tests

As part of staging reviews, new components must complete [foundational accessibility testing using this GitHub ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&projects=&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D). Foundational testing requires evaluating:

1.   Color and color contrast
2.   Automated testing with [axe by Deque](https://www.deque.com/axe/)
3.   Content zoom and reflow
4.   Keyboard navigation

### Advanced testing with mobile and desktop screen readers

As part of staging reviews, new components must also complete [advanced testing with an accessibility specialist](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Advancedaccessibilitytests(recommended)advanced-testing) using a screen reader on both mobile and desktop. As a default, based on recommendations from the [Blinded Veterans Association](https://bva.org/), we recommend testing with the following at a minimum:

* iOS with Safari using VoiceOver (Mobile)
* Windows 11 with Chrome using JAWs (Desktop)

If time and resources allow, do a more comprehensive review by testing with:
* Android with Chrome using TalkBack (Mobile)
* Windows 11 with Chrome using NVDA (Desktop)

It is the intention of this team to improve our testing standards to more accurately reflect the full experience of users with disabilities. Today our compliance testing sets a minimal standard (WCAG 2.1 AA) that we are striving to raise.

## Resources for Veteran-facing service teams

### Get accessibility guidance early from the CAIA team

The Sitewide Content, Accessibility, and Information Architecture (CAIA) team can help you meet VA.gov’s accessibility standards. Whether you’re starting a new product or refining an existing one, contact the CAIA team as early as possible to create accurate, consistent, accessible, and equitable digital services for Veterans.

- Submit a [Sitewide Content, Accessibility, and IA intake form ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=RLHecht%2C+coforma-terry%2C+kristinoletmuskat%2C+laurwill%2C+sara-amanda&labels=sitewide+CAIA%2C+sitewide+content-product+support%2C+Sitewide+IA%2C+sitewide+content%2C+sitewide+accessibility&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E) in GitHub
- [Contact CAIA on Slack
](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/sitewide-content-and-ia-intake-request#Content,Accessibility,andInformationArchitecturesupport-SitewideCAIA-Contactus)

### Learn how to make accessible products on the modernized VA.gov platform

- [Resources for researchers](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov#AccessibilityonVA.gov-ResourcesforResearchers)
- [Resources for designers](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov#AccessibilityonVA.gov-ResourcesforDesigners)
- [Resources for developers](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov#AccessibilityonVA.gov-ResourcesforDevelopers)
- [Resources for product managers](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov#AccessibilityonVA.gov-ResourcesforProductManagers)
- [How to prepare for an accessibility staging review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review)
- [Our plain language guidelines](https://design.va.gov/content-style-guide/plain-language/)
