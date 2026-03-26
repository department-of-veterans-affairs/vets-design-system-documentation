# Accessibility Test Library

The VA Design System Accessibility Test Library is a comprehensive catalog of accessibility tests organized by WCAG 2.2 principles. Each test includes specific success criteria, testing procedures, and mappings to WCAG standards and Section 508 requirements.

## Purpose

This test library provides:

- **Standardized test definitions** that can be referenced across all component test documentation
- **Consistent test IDs** for tracking accessibility testing over time
- **WCAG mappings** showing which success criteria each test validates
- **Clear descriptions** for testers to understand what to test and how to evaluate results
- **Environment specifications** defining which platforms and assistive technologies to test with

## Structure

The test library is organized into files based on the four WCAG principles:

### Test Files

- **`1-perceivable.yml`** — Tests for WCAG Principle 1: Perceivable
  *Information and user interface components must be presentable to users in ways they can perceive*
  Test IDs: `WEB-1xx` or `DST-1xx` series

- **`2-operable.yml`** — Tests for WCAG Principle 2: Operable
  *User interface components and navigation must be operable*
  Test IDs: `WEB-2xx` or `DST-2xx` series

- **`3-understandable.yml`** — Tests for WCAG Principle 3: Understandable
  *Information and the operation of user interface must be understandable*
  Test IDs: `WEB-3xx` or `DST-3xx` series

- **`4-robust.yml`** — Tests for WCAG Principle 4: Robust
  *Content must be robust enough that it can be interpreted by a wide variety of user agents*
  Test IDs: `WEB-4xx` or `DST-4xx` series

### Configuration File

- **`_config.yml`** — Shared configuration defining:
  - Environment IDs and display names
  - Test categories
  - Required environments for specific test types
  - Metadata about the test library

## Test ID Format

Test IDs follow these conventions:

### Test Prefixes

Tests use two prefixes:

- **`WEB`** — Tests from the VA governance team's accessibility testing library
  These are standardized tests used across VA.gov for governance and compliance purposes.

- **`DST`** — Design System Team customizations and additions
  These are tests created by the Design System Team for specific component requirements or to supplement the governance library.

### Primary Tests

Format: `XXX-YZZ` where:
- `XXX` = Test prefix (`WEB` or `DST`)
- `Y` = WCAG principle number (1-4)
- `ZZ` = Specific criterion or test number

Examples:
- `WEB-111` → Governance test for WCAG 1.1.1 Non-text Content
- `WEB-212` → Governance test for WCAG 2.1.2 No Keyboard Trap
- `WEB-1410` → Governance test for WCAG 1.4.10 Reflow
- `DST-211` → Design System Team test for keyboard operability

### Subtests
Format: `XXX-YYY-ZZZ` where:
- `XXX` = Test category prefix (`WEB` or `DST`)
- `YYY` = Parent test number
- `ZZZ` = Subtest number (001, 002, etc.)

Examples:
- `WEB-111-001` → Screen readers announce descriptions for meaningful images
- `DST-211-001` → Link is fully operable using only a keyboard
- `WEB-244-001` → Focus indicator is visible

Subtests allow for more granular testing of specific aspects within a broader WCAG criterion.

## Test Categories

Tests are organized into categories that indicate the testing approach:

- **`general`** — General accessibility tests applicable to most components
- **`keyboard`** — Keyboard navigation and operability tests
- **`screen_reader`** — Screen reader compatibility tests
- **`mobile`** — Mobile-specific accessibility tests
- **`structural`** — HTML structure and semantic markup tests
- **`visual`** — Visual presentation and display tests
- **`voice_control`** — Voice control navigation tests
- **`zoom`** — Text scaling and zoom behavior tests
- **`implementation`** — Component implementation and integration tests

## Test Structure

Each test in the library includes:

### Required Fields

- **`id`** — Unique test identifier (e.g., `WEB-212`)
- **`category`** — Test category (see Test Categories above)
- **`wcag_criterion`** — WCAG success criterion number (e.g., `2.1.2`)
- **`wcag_name`** — Name of the WCAG success criterion
- **`wcag_level`** — WCAG conformance level (A, AA, or AAA)
- **`508_severity`** — Section 508 severity rating
- **`governance_severity`** — VA governance severity rating
- **`wcag_url`** — Link to official WCAG documentation
- **`description_short`** — Brief description of what the test validates
- **`description_full`** — Detailed description with expected user experience

### Optional Fields

- **`subtests`** — Array of more specific subtests under this test
- **`notes`** — Additional context or special considerations
- **`related_tests`** — IDs of related tests

### Example Test Entry

```yaml
- id: WEB-212
  category: keyboard
  wcag_criterion: 2.1.2
  wcag_name: No Keyboard Trap
  wcag_level: A
  508_severity: Critical
  governance_severity: Critical
  wcag_url: https://www.w3.org/TR/WCAG22/#no-keyboard-trap
  description_short: |
    Keyboard focus does not get trapped.
  description_full: |
    When you move focus to an interactive element with a keyboard,
    you can move focus away from that element using only standard keyboard keys.
  subtests:
    - id: DST-212-001
      description_short: |
        Links do not trap keyboard focus.
      description_full: |
        When you navigate to the link using a keyboard,
        you can move focus away from the link.
```

## Environment IDs

Environment IDs are defined in `_config.yml` and specify which platforms and assistive technologies to test with.

### Format

- Desktop browsers: `{os}-{browser}` (e.g., `mac-chrome`)
- Mobile browsers: `{os}-{browser}` (e.g., `ios-safari`)
- Screen readers: `{os}-{browser}-{screen-reader}` (e.g., `mac-safari-voiceover`)
- Voice control: `{os}-{voice-control}` (e.g., `mac-voice-control`)

### Common Environment IDs

**Desktop:**
- `mac-chrome`, `mac-firefox`, `mac-safari`, `mac-edge`
- `windows-chrome`, `windows-firefox`, `windows-edge`

**Mobile:**
- `ios-safari`
- `android-chrome`

**Screen Readers:**
- `mac-safari-voiceover`
- `windows-chrome-jaws`
- `windows-edge-nvda`
- `android-chrome-talkback`
- `ios-safari-voiceover`

**Voice Control:**
- `mac-voice-control`
- `windows-voice-recognition`

See `_config.yml` for the complete list with display names.

## How to Use This Library

### For Testers

1. **Browse the test files** (`1-perceivable.yml`, `2-operable.yml`, etc.) to find tests that apply to your component
2. **Reference test IDs** in component test files (in the parent `accessibility_tests/` directory)
3. **Follow test descriptions** to understand what to test and how to evaluate results
4. **Use specified environments** listed in the test definitions

### For Component Documentation

When documenting component test results:

1. Reference test IDs from this library in your component's YAML file
2. Use the test ID to link to the full test definition and WCAG criteria
3. Record results for the environments appropriate to the test category

Example:
```yaml
# In va-button.yml
tests:
  - id: WEB-212    # References test from this library
    test_results:
      - version: 54.6.1
        tester: Jane Smith
        environments:
          - name: mac-chrome
            result: pass
```

### For Viewing Test Definitions

The complete test catalog with descriptions and WCAG mappings is available at:

**[/accessibility/test-library](/accessibility/test-library)**

This page renders all tests from the YAML files in a searchable, browsable format.

## Adding New Tests

When adding tests to the library:

1. **Choose the correct file** based on the WCAG principle (1-4)
2. **Assign a unique test ID**:
   - Use `WEB` prefix for tests from the governance library
   - Use `DST` prefix for Design System Team customizations
   - Follow the format: `XXX-YZZ` (prefix + principle + test number)
3. **Include all required fields** (see Test Structure above)
4. **Add subtests** if the test requires more granular validation
5. **Map to WCAG criteria** with accurate criterion numbers and links
6. **Write clear descriptions** from the user's perspective (first person)
7. **Specify appropriate category** (keyboard, screen_reader, etc.)
8. **Update metadata** in `_config.yml` if adding new categories or environments

### Description Writing Guidelines

- **Short descriptions** state what is being tested (1 sentence)
- **Full descriptions** explain the expected user experience using "When you..." format
- Use plain language and active voice
- Focus on the user's perspective, not technical implementation
- Describe observable behavior and expected outcomes

Example:
```yaml
description_short: |
  Keyboard focus does not get trapped.
description_full: |
  When you move focus to an interactive element with a keyboard,
  you can move focus away from that element using only standard keyboard keys.
```

## Relationship to Component Tests

This test library is the **source of truth** for test definitions. Component test files (in the parent `accessibility_tests/` directory) reference these tests by ID and record actual test results for specific component versions.

**Test Library (this directory):**
- Defines what to test
- Provides WCAG mappings
- Specifies testing procedures
- Remains stable over time

**Component Tests (parent directory):**
- Reference test IDs from this library
- Record actual test results
- Track testing history across versions
- Document component-specific outcomes

## Version History

- **Version 1.0** (2024-02-05) — Initial test library release
- Last updated: 2026-02-10

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [Section 508 Standards](https://www.section508.gov/)
- [VA Digital Modernization Strategy](https://www.va.gov/oit/digital-modernization/)
- [VADS Accessibility Guidance](/accessibility/)

## Questions?

Contact the Design System team in [#platform-design-system](https://dsva.slack.com/archives/C01K37HRUAH) Slack channel.
