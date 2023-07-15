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