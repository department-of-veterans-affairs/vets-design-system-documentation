---
layout: documentation
title: Accessibility Test Library
permalink: /accessibility/test-library
anchors:
  - anchor: About this library
  - anchor: How we use it
  - anchor: How other teams can use it
  - anchor: Test library
---

## About this library

The VA.gov Design System accessibility test library is a collection of tests mapped to WCAG 2.2 success criteria. Each test describes what to verify and which environments to test in, such as screen readers, keyboards, and mobile devices.

This library is for the Design System team, VFS teams, and anyone building accessible experiences on VA.gov.

### How we use it

The Design System team uses this library to audit each component and publish results. You can find accessibility test results in the **Accessibility tests** section of each component page. We're actively auditing components, so not all components have test results yet.

### How other teams can use it

Teams building on VA.gov can use the same tests to verify accessibility in their own products. Some tests are context-dependent, meaning they can only be evaluated within a specific product or workflow. These are marked as "Conditional" in component test results and are the responsibility of the implementing team.

## Test library
{% include accessibility-test-library-list.html %}
