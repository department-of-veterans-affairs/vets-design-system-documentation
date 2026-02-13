---
layout: documentation
title: Accessibility Test Library
permalink: /accessibility/test-library
anchors:
  - anchor: Overview
  - anchor: Test categories
  - anchor: Complete test list
---

## Overview

The VA Design System maintains a comprehensive library of accessibility tests based on the Web Content Accessibility Guidelines (WCAG) 2.1 and 2.2. These tests are organized by the four WCAG principles: Perceivable, Operable, Understandable, and Robust.

Each test in this library includes:
- **Test ID**: A unique identifier for the test
- **Category**: The type of testing required (general, keyboard, screen reader, mobile, zoom)
- **Description**: What the test verifies
- **WCAG Criterion**: The specific WCAG success criterion the test validates
- **WCAG Level**: The conformance level (A, AA, or AAA)

## Test categories

Tests are categorized by the type of testing methodology required:

- **General**: Visual inspection, code review, or automated testing tools
- **Keyboard**: Testing with keyboard-only navigation
- **Screen Reader**: Testing with assistive technologies like NVDA, JAWS, or VoiceOver
- **Mobile**: Testing on mobile devices or responsive viewports
- **Zoom**: Testing with browser zoom or text spacing adjustments

## Complete test list

The table below lists all tests in the library in numerical order. Component teams can reference these test IDs when documenting accessibility testing for their components.

{% include accessibility-test-library-list.html %}

## Using the test library

To apply tests to a component:

1. Review the component's functionality and interaction patterns
2. Select relevant tests from this library
3. Document the selected tests in the component's accessibility test data file
4. Execute tests according to the specified test category requirements
5. Record test results including version, environment, and pass/fail status

For questions about which tests apply to your component, consult with the Design System team in the [#platform-design-system Slack channel]({{ site.slack_channel_link }}).
