---
layout: category
title: Accessibility
permalink: /about/accessibility/
intro-text: Current accessibility standards for the VA Design System
---

[Accessibility is core to all design decisions]({{ site.baseurl }}/about/principles#usable-by-everyone) made in our Design System. New components or patterns must complete the following to be admitted into the design system.

## Foundational accessibility tests

As part of staging reviews, new components must complete [foundational accessibility testing using this GitHub ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&projects=&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D). Foundational testing requires evaluating:

1.   Color and color contrast
2.   Automated testing with [axe by Deque](https://www.deque.com/axe/)
3.   Content zoom and reflow
4.   Keyboard navigation

## Advanced testing with mobile and desktop screen readers

As part of staging reviews, new components must also complete [advanced testing with an accessibility specialist](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Advancedaccessibilitytests(recommended)advanced-testing) using a screen reader on both mobile and desktop. As a default, based on recommendations from the [Blinded Veterans Association](https://bva.org/), we recommend testing with:

* iOS with Safari using VoiceOver (Mobile)
* Windows 11 with Chrome using JAWs (Desktop)

**Note:** The testing tools above may be replaced, depending on context, with NVDA and TalkBack.

It is the intention of this team to improve our testing standards to more accurately reflect the full disabled experience. Today our compliance testing sets a minimal standard that we are striving to raise.

## Get accessibility guidance early from the CAIA team

The Sitewide Content, Accessibility, and Information Architecture (CAIA) team can help you meet VA.gov’s accessibility standards. Whether you’re starting a new product or refining an existing one, contact the CAIA team as early as possible to create accurate, consistent, accessible, and equitable content for Veterans.

Submit a [Sitewide Content, Accessibility, and IA intake form ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=RLHecht%2C+coforma-terry%2C+kristinoletmuskat%2C+laurwill%2C+sara-amanda&labels=sitewide+CAIA%2C+sitewide+content-product+support%2C+Sitewide+IA%2C+sitewide+content%2C+sitewide+accessibility&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E) in GitHub to get started.
