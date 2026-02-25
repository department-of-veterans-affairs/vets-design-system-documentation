# Accessibility Test Results

This directory contains accessibility test results for VA Design System components. Test results are documented in YAML files, one per component.

## Quick Start

1. **Create a new component test file**: Copy the template structure below
2. **Add test IDs**: Reference tests from the `test-library/` directory
3. **Record test results**: Add version, tester, environments, and results
4. **View results**: Test results appear on the component's documentation page

## Creating a New Component Test File

### Step 1: Create the YAML file

In the accessibility_tests directory, create a new file named after your component using the format: `{component-name}.yml`

Example: `va-button.yml` for the Button component

### Step 2: Add component metadata

```yaml
component: va-button
component_url: /components/button/
storybook_url: /storybook/?path=/docs/components-va-button--docs

tests:
  # Test results will go here
```

**Fields:**
- `component`: Component name (must match the component's identifier)
- `component_url`: Relative URL to the component's documentation page
- `storybook_url`: Relative URL to the component's Storybook documentation

### Step 3: Add test IDs

Identify which tests from the test library apply to your component. Browse the `test-library/` directory to find relevant tests.

```yaml
component: va-button
component_url: /components/button/
storybook_url: /storybook/?path=/docs/components-va-button--docs

tests:
  - id: WEB-1410        # Example: Color contrast test
  - id: WEB-212         # Example: Keyboard navigation
  - id: DST-244-001     # Example: Focus indicator subtest
  - id: WEB-321         # Example: Screen reader announcement
```

You can add tests with or without results. Tests without results will show as "Untested" on the documentation page.

## Adding Test Results

### Basic Structure

Each test can have multiple test result entries (for different versions, testers, or test sessions).

```yaml
tests:
  - id: WEB-1410
    test_results:
      - version: 54.6.1
        tester: John Doe
        date: 2026-02-03
        environments:
          - name: mac-chrome
            result: pass
```

### Required Fields

- **`version`**: Component library version tested (e.g., `54.6.1`, `55.0.0`)
- **`tester`**: Name of the person who performed the test
- **`environments`**: List of environments tested (at least one required)
  - **`name`**: Environment ID (see Environment IDs section below)
  - **`result`**: Test result value (see Test Results section below)

### Optional Fields

- **`date`**: Date the test was performed (format: `YYYY-MM-DD`)
- **`notes`**: Additional context about the test results

### Example: Single Environment

```yaml
tests:
  - id: WEB-1410
    test_results:
      - version: 54.6.1
        tester: Jane Smith
        environments:
          - name: mac-chrome
            result: pass
```

### Example: Multiple Environments

```yaml
tests:
  - id: WEB-212
    test_results:
      - version: 54.6.1
        tester: John Doe
        environments:
          - name: mac-chrome
            result: pass
          - name: windows-chrome
            result: pass
          - name: ios-safari
            result: pass
```

### Example: Conditional Result with Notes

```yaml
tests:
  - id: WEB-244
    test_results:
      - version: 54.6.1
        tester: Jane Smith
        date: 2026-02-03
        environments:
          - name: mac-chrome
            result: conditional
        notes: Focus outline is visible but does not meet 3:1 contrast ratio. This is a known issue that will be addressed in a future release.
```

### Example: Multiple Test Sessions

You can add multiple test result entries for the same test (e.g., different versions or testers):

```yaml
tests:
  - id: WEB-1410
    test_results:
      - version: 54.6.0
        tester: Jane Smith
        environments:
          - name: mac-chrome
            result: fail
        notes: Button text does not meet contrast requirements.
      - version: 54.6.1
        tester: John Doe
        environments:
          - name: mac-chrome
            result: pass
        notes: Issue fixed in this version.
```

## Environment IDs

Environment IDs use the format: `{os}-{browser}` or `{os}-{browser}-{assistive-technology}`

All environment IDs are defined in `test-library/_config.yml`.

### Desktop Browsers
- `mac-chrome` → macOS Chrome
- `mac-firefox` → macOS Firefox
- `mac-edge` → macOS Edge
- `mac-safari` → macOS Safari
- `windows-chrome` → Windows Chrome
- `windows-firefox` → Windows Firefox
- `windows-edge` → Windows Edge

### Mobile Browsers
- `android-chrome` → Android Chrome
- `ios-safari` → iOS Safari

### Screen Readers
- `mac-safari-voiceover` → macOS Safari/VoiceOver
- `mac-chrome-voiceover` → macOS Chrome/VoiceOver
- `windows-chrome-jaws` → Windows Chrome/JAWS
- `windows-edge-nvda` → Windows Edge/NVDA
- `android-chrome-talkback` → Android Chrome/Talkback
- `ios-safari-voiceover` → iOS Safari/VoiceOver

### Voice Control
- `mac-voice-control` → macOS Voice Control
- `windows-voice-recognition` → Windows Voice Recognition

## Test Results

Valid result values:
- **`pass`**: Test passed without issues
- **`fail`**: Test failed
- **`conditional`**: Test passes with conditions or caveats (explain in `notes`)
- **`untested`**: Test has not been performed (can be omitted)

## Complete Example

Here's a complete example for a fictional Alert component:

```yaml
component: va-alert
component_url: /components/alert/
storybook_url: /storybook/?path=/docs/components-va-alert--docs

tests:
  # Color contrast test - passed
  - id: WEB-1410
    test_results:
      - version: 54.6.1
        tester: Jane Smith
        date: 2026-02-15
        environments:
          - name: mac-chrome
            result: pass
          - name: windows-chrome
            result: pass

  # Screen reader test - passed with notes
  - id: WEB-111-001
    test_results:
      - version: 54.6.1
        tester: John Doe
        environments:
          - name: mac-safari-voiceover
            result: pass
          - name: windows-chrome-jaws
            result: pass
        notes: Alert role and message are announced correctly.

  # Focus indicator test - conditional
  - id: WEB-244
    test_results:
      - version: 54.6.0
        tester: Jane Smith
        environments:
          - name: mac-chrome
            result: conditional
        notes: Focus indicator is visible but contrast could be improved.

  # Keyboard navigation - not yet tested
  - id: WEB-212

  # Touch target size - failed, then fixed
  - id: WEB-258
    test_results:
      - version: 54.5.0
        tester: John Doe
        environments:
          - name: ios-safari
            result: fail
        notes: Button targets are too small on mobile.
      - version: 54.6.0
        tester: Jane Smith
        environments:
          - name: ios-safari
            result: pass
        notes: Issue resolved - targets now meet minimum size.
```

## Finding Test IDs

View the complete list of tests with descriptions, categories, and WCAG criteria at:

**[/accessibility/test-library](/accessibility/test-library)**

You can also check existing component test files (like `va-link.yml` or `va-card-status.yml`) to see which tests are commonly applied to similar components.

## Workflow

1. **Create component test file** with metadata and test IDs
2. **Perform accessibility testing** for each test ID
3. **Record results** in the YAML file with version, tester, and environment(s)
4. **Add notes** for any failures or conditional passes
5. **Update results** as new versions are tested or issues are fixed
6. **Commit changes** to the repository

Test results will automatically appear on the component's documentation page at the specified `component_url`.

## Questions?

Contact the Design System team in [#platform-design-system](https://dsva.slack.com/archives/C01K37HRUAH) Slack channel.
