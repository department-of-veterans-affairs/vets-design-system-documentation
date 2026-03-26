# generate-component-accessibility-tests

Generate an accessibility test file for a VA Design System web component. This file documents which accessibility tests from the test library apply to a specific component.

## Purpose

Create a YAML file in `src/_data/accessibility_tests/` that:
- Identifies the component and its documentation URLs
- Lists all applicable accessibility test IDs from the test library
- Provides a foundation for recording test results over time

## File Format

```yaml
component: [component-name]
component_url: /components/[component-path]/
storybook_url: /storybook/?path=/docs/components-[component-name]--docs

# Tests applied to this component
tests:
  - id: [test-id-without-required-environments]
    test_results:
      - version: [version]
        tester: [tester-name]
        date: [date]
        environments:
          - name:
            result:
  - id: [test-id-with-required-environments]
    test_results:
      - version: [version]
        tester: [tester-name]
        date: [date]
        environments:
          - name: [required-environment-1]
            result:
          - name: [required-environment-2]
            result:
```

**Note**: All tests include an empty `test_results` entry with tester name, version, and date pre-populated. All tests also include an `environments` array. Tests with categories that have required environments (`mobile`, `screen_reader`, `voice_control`) have those environments pre-populated with empty `result` fields. Tests without required environments have a single empty environment entry that testers will fill in when performing testing.

## How to Generate the File

### Step 1: Gather Component Information

**Component name**: Use the web component tag name (e.g., `va-button`, `va-text-input`, `va-alert`)

**Component URL**: Find the documentation URL pattern:
- Most components: `/components/[component-name]/`
- Form components: `/components/form/[component-name]/`
- Check existing documentation at `design.va.gov/components/` if unsure

**Storybook URL**: Use the pattern:
```
/storybook/?path=/docs/components-[component-name]--docs
```

### Step 2: Analyze Component Implementation

Review the component's source code to understand its features:

**Local path** (if you have component-library cloned):
```
component-library/packages/web-components/src/components/[component-name]/
```

**GitHub path**:
```
https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/[component-name]/
```

**Key files to review**:
- `[component-name].tsx` — Main component implementation
- `[component-name].stories.tsx` — Storybook examples showing component variations
- `README.md` — Component documentation
- `test/` directory — Unit and integration tests

### Step 3: Identify Applicable Tests

Reference the test library at `src/_data/accessibility_tests/test-library/` to determine which tests apply.

#### Subtest Selection Priority

**IMPORTANT**: Always prefer the most specific subtest over the parent test when available.

**Subtest format**: `XXX-YYY-ZZZ` where `ZZZ` is the subtest number (e.g., `WEB-111-001`, `DST-211-002`)

**Rules**:
1. **Use specific subtests when they exist** — If a parent test (e.g., `WEB-111`) has subtests (e.g., `WEB-111-001`, `WEB-111-002`, `WEB-111-003`), use the specific subtests that apply to your component, not the parent test.

2. **Include multiple subtests when relevant** — A component may need multiple subtests from the same parent test if different aspects apply (e.g., both `WEB-111-001` for informative images AND `WEB-111-003` for decorative images).

3. **Use parent test only when no specific subtest applies** — Only reference the parent test (e.g., `WEB-412`) if:
   - No subtests exist for that test, OR
   - The parent test applies broadly and no specific subtest is more appropriate

**Examples**:
- ❌ **Wrong**: `WEB-111` for a component with images
- ✅ **Right**: `WEB-111-001` for informative images, `WEB-111-003` for decorative icons

- ❌ **Wrong**: `DST-211` for a button component
- ✅ **Right**: `DST-211-001` for link operability OR `DST-211-002` for form input operability

- ✅ **Acceptable**: `WEB-412` when no subtests exist and the general test applies

**How to find subtests**:
1. Browse the test library YAML files at `src/_data/accessibility_tests/test-library/`
2. Look for `subtests:` array under each parent test
3. Read subtest descriptions to determine which apply to your component
4. Include all relevant subtests, even if multiple from the same parent

#### Test Selection Guidelines

**For ALL components**, include:
- `WEB-134` - Orientation
- `WEB-1410` — Reflow (content adapts to small screens and zoom)

**For MOST components with multiple elements**, include:
- `WEB-132` - Meaningful sequence (content is presented in a meaningful order)

**For ALL COMPONENTS WITH TEXT**, include:
- `WEB-143` — Contrast (Minimum) - text has sufficient contrast
- `WEB-144` — Resize Text (text resizes to 200% without loss of content or functionality)
- `WEB-145` — Images of Text (text is not presented as images)
- `WEB-1412` — Text Spacing (text remains readable when spacing is adjusted)

**For ALL COMPONENTS WITH HEADINGS**, include:
- `WEB-131-001` — Headings are used to organize content (if applicable)
- `WEB-131-002` — Headings are used in a logical order (if applicable)
- `WEB-246` or specific subtests — Headings and labels describe topic or purpose (review subtests: `WEB-246-001` for heading descriptions, `WEB-246-002` for input labels)

**For ALL INTERACTIVE ELEMENTS** (applies to all buttons, links, and form controls):
- `WEB-1411` or specific subtests — Non-text Contrast (review subtests based on component features)
- `WEB-212` — No Keyboard Trap (keyboard focus does not get trapped)
- `WEB-243` — Focus Order (tab order follows a logical sequence)
- `WEB-247` — Focus Visible (interactive elements display a clear focus indicator)
- `WEB-2411` — Focus Not Obscured (focused elements are fully visible)
- `WEB-253` or specific subtests — Label in Name (review subtests: `DST-253-001` for screen reader announcement matching if applicable)
- `WEB-258` or specific subtests — Target Size (review subtests based on element type)
- `WEB-412` or specific subtests — Name, Role, Value (review subtests based on element type and behavior)

**For LINKS** (in addition to all interactive element tests above):
- `WEB-141` or specific subtests — Use of Color (review subtests: `DST-141-001` for links indicated by color)
- `WEB-211` or specific subtests — Keyboard operability (review subtests: typically `DST-211-001` for links)
- `WEB-244` — Link Purpose (In Context) - link text is clear and descriptive
- `WEB-412` or specific subtests — Name, Role, Value (review subtests: `WEB-412-003` for proper element types, `DST-412-001` for link navigation)

**For BUTTONS** (in addition to all interactive element tests above):
- `WEB-211` — Keyboard operability (buttons must be keyboard accessible)
- `WEB-412` or specific subtests — Name, Role, Value (review subtests: `WEB-412-002` for state announcements if stateful, `WEB-412-003` for proper element types, `DST-412-002` for button actions)

**For FORM INPUTS** (text-input, select, checkbox, radio, textarea) — in addition to all interactive element tests above:
- `WEB-131` or specific subtests — Info and Relationships (review subtests: e.g., `WEB-131-005` for grouped elements, `WEB-131-006` for input labels and instructions, `WEB-131-007` for required fields)
- `WEB-135` - Identify input purpose (if applicable)
- `WEB-1413` — Content on Hover or Focus (users can dismiss content that appears on hover or focus)
- `WEB-211` or specific subtests — Keyboard operability (review subtests: typically `DST-211-002` for form inputs)
- `WEB-246` or specific subtests — Headings and labels (review subtests: `WEB-246-002` for input labels)
- `WEB-321` or `DST-321-001` (subtest) — On Focus (review subtests: use `DST-321-001` for input-specific focus behavior if applicable)
- `WEB-322` — On Input (changing the input value does not trigger unexpected changes)
- `WEB-331` or specific subtests — Error Identification (review subtests: e.g., `DST-331-001` for errors on blur, `DST-331-002` for error descriptions, `DST-331-003` for error styles, `DST-331-004` for screen reader announcements, `DST-331-005` for error placement)
- `WEB-332` or specific subtests — Labels or Instructions (review subtests: `WEB-332-001` for visible labels, `WEB-332-002` for format instructions, `WEB-332-003` for required field marking)
- `WEB-333` — Error Suggestion (error messages explain how to fix the error)

**For COMPONENTS WITH IMAGES/ICONS**:
- `WEB-111` or specific subtests — Non-text content (review subtests based on image type: `WEB-111-001` for informative images, `WEB-111-003` for decorative images, `WEB-111-005` for video/audio descriptions; include multiple if component has different image types)

**For DYNAMIC CONTENT** (alerts, modals, accordions, expandable content):
- `WEB-253` or specific subtests — Label in Name (review subtests: `DST-253-001` if component label/content changes dynamically)
- `WEB-412` or specific subtests — Name, Role, Value (review subtests: `WEB-412-002` for screen reader state announcements when content expands/collapses or shows/hides)
- `WEB-413` — Status Messages (screen readers announce important updates without moving focus)

**For COMPONENTS WITH COLOR CODING** (components that use color to convey information or status, such as alerts, status badges, or color-coded indicators):
- `WEB-141` or specific subtests — Use of Color (review subtests: `DST-141-001` if component has links indicated by color)
- `WEB-1411` or specific subtests — Non-text Contrast (review subtests based on component features: `DST-1411-001` for icons, `DST-1411-002` for form input borders, `WEB-1411-001` for interactive elements, `WEB-1411-002` for meaningful graphics)

**Additional considerations:**
- **Navigation components** (breadcrumbs, pagination, menus) — These are typically collections of links, so apply the "For LINKS" category. If the component includes skip navigation functionality, also include `WEB-241` or `DST-241-001` (Bypass Blocks)

### Step 4: Reference the Test Library

Browse test definitions at:
- `src/_data/accessibility_tests/test-library/1-perceivable.yml` — Visual and sensory tests (WEB-1xx, DST-1xx)
- `src/_data/accessibility_tests/test-library/2-operable.yml` — Interaction and navigation tests (WEB-2xx, DST-2xx)
- `src/_data/accessibility_tests/test-library/3-understandable.yml` — Content clarity and input assistance (WEB-3xx, DST-3xx)
- `src/_data/accessibility_tests/test-library/4-robust.yml` — ARIA and semantic markup (WEB-4xx, DST-4xx)

**Test ID Prefixes**:
- `WEB` — Tests from VA governance team's accessibility testing library
- `DST` — Design System Team customizations and component-specific tests

**Finding Subtests**:
When browsing the test library YAML files, look for the `subtests:` array under each parent test. Subtests have their own `id` and `description_short`/`description_full` fields. Always prefer using the specific subtest ID rather than the parent test ID when a relevant subtest exists.

**Test Categories and Required Environments**:
Each test in the library has a `category` field. Some categories have required environments. Reference `src/_data/accessibility_tests/test-library/_config.yml` for:
- The complete list of required environments for `screen_reader`, `mobile`, and `voice_control` categories
- Available environment definitions and their display names
- Categories that do not have required environments (general, keyboard, structural, visual, zoom, implementation)

### Step 5: Generate the File

Create `src/_data/accessibility_tests/[component-name].yml` with:

1. Component metadata (name, URLs)
2. Sorted list of test IDs with **ALL tests including an empty test_results entry**
3. **Use specific subtests** wherever they exist (e.g., `WEB-111-003` instead of `WEB-111`)
4. **Pre-populate common metadata** in all test_results entries:
   - `version`: Component library version from user input
   - `tester`: Tester name from user input
   - `date`: Test date from user input
5. **Add environments array for all tests**:
   - Check each test's category in the test library YAML files
   - If the category is `screen_reader`, `mobile`, or `voice_control`, add `environments` array with required environments and empty `result` fields
   - For all other categories, add an `environments` array with a single empty entry (empty `name` and `result` fields)
6. Sort order: numerical by test ID (WEB-111-003, WEB-143, DST-211-001, WEB-212, etc.)

**Do NOT include**:
- Actual result values (leave `result:` empty)
- Notes text
- Summary statistics
- Parent test IDs when specific subtests are more appropriate

**Test Results Template for tests WITHOUT required environments**:
```yaml
- id: [test-id]
  test_results:
    - version: [user-provided-version]
      tester: [user-provided-name]
      date: [user-provided-date]
      environments:
        - name:
          result:
```

**Test Results Template for tests WITH required environments**:
```yaml
- id: [test-id]
  test_results:
    - version: [user-provided-version]
      tester: [user-provided-name]
      date: [user-provided-date]
      environments:
        - name: [required-environment-1]
          result:
        - name: [required-environment-2]
          result:
```

## Examples

Reference these complete example files to see proper test selection and structure:

### Example Files

- **`src/_data/accessibility_tests/va-link.yml`** — Simple interactive component
  - Shows link-specific tests (`DST-211-001`) and focus management
  - Demonstrates mobile category test with required environments (`DST-258-001`)
  - 11 tests total

- **`src/_data/accessibility_tests/va-text-input.yml`** — Form input component
  - Shows form-specific subtests (`WEB-131-006`, `DST-211-002`, `WEB-246-002`)
  - Demonstrates screen_reader category tests with required environments (`DST-321-001`)
  - Includes multiple error-related subtests (`DST-331-002`, `DST-331-003`, `DST-331-004`, `DST-331-005`)
  - 19 tests total

- **`src/_data/accessibility_tests/va-accordion.yml`** — Dynamic content component
  - Shows expandable/collapsible component tests
  - Demonstrates parent-child relationship test (`WEB-131-010`)
  - Includes state announcement test (`WEB-412-002`)
  - 12 tests total

- **`src/_data/accessibility_tests/va-card-status.yml`** — Status component
  - Shows color-coding tests (`DST-141-001`)
  - Demonstrates icon contrast tests (`DST-1411-001`)

- **`src/_data/accessibility_tests/va-details.yml`** — Interactive disclosure
  - Shows focus management for disclosure patterns (`DST-253-001`)
  - Demonstrates screen reader announcements for state changes

**Key patterns demonstrated**:
- All tests include pre-populated metadata (version, tester, date)
- Tests with `screen_reader`, `mobile`, or `voice_control` categories have pre-populated required environments
- All other tests have a single empty environment entry
- Specific subtests are used instead of parent tests (e.g., `DST-211-001` not `DST-211`)

## Component Analysis Checklist

When analyzing a component, ask:

- [ ] **Is it a link?** (navigates to another page or section) → Include link-specific tests (keyboard operability, link purpose, target size)
- [ ] **Is it a button?** (performs an action) → Include button-specific tests (keyboard operability, focus, proper element type)
- [ ] **Is it a form input?** → Include all form-related tests (labels, errors, validation)
- [ ] **Does it use color to convey information?** → Include color contrast and color-not-sole-indicator tests
- [ ] **Does it contain images or icons?** → Include alternative text tests
- [ ] **Does it have dynamic content or state changes?** → Include screen reader announcement and focus management tests (note: screen_reader category tests need required environments)
- [ ] **Does it expand/collapse or show/hide content?** → Include state announcement tests
- [ ] **Is it used on mobile?** → Include touch target size tests (note: mobile category tests need required environments)
- [ ] **Does it display error messages?** → Include error identification and suggestion tests
- [ ] **Does it need voice control testing?** → Include voice control tests (note: voice_control category tests need required environments)

## Validation

Before saving the file:

1. **Check component name** matches the web component tag (e.g., `va-button`, not `Button`)
2. **Verify URLs** follow the correct pattern for the component type
3. **Ensure test IDs exist** in the test library files
4. **Prefer specific subtests** over parent tests — Verify that you're using subtests (e.g., `WEB-111-003`) rather than parent tests (e.g., `WEB-111`) when subtests exist
5. **All tests have test_results** — Every test should have an empty `test_results` entry with version, tester, and date pre-populated
6. **Check for environments array** — All tests should have an `environments` array. Tests with `screen_reader`, `mobile`, or `voice_control` categories should have required environments pre-populated; other tests should have a single empty environment entry
7. **Sort test IDs** numerically (WEB-111, WEB-143, DST-211-001, WEB-212, etc.)
8. **Verify metadata is pre-populated** — Version, tester name, and date should be filled in from user input
9. **Result fields are empty** — For tests with required environments, `result:` should be present but empty
10. **Use 2-space indentation** for YAML

## Resources

- **Test Library**: `src/_data/accessibility_tests/test-library/`
- **Test Library README**: `src/_data/accessibility_tests/test-library/README.md`
- **Test Library Config**: `src/_data/accessibility_tests/test-library/_config.yml` (defines required environments by category)
- **Accessibility Tests README**: `src/_data/accessibility_tests/README.md`
- **GitHub Component Library**: `https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/`
- **Existing Component Tests**: `src/_data/accessibility_tests/*.yml`

## Usage

When this prompt is invoked:

1. **Ask for the component name**: "Which component would you like to create a test file for? Please provide the web component element name with the `va-` prefix (e.g., `va-button`, `va-alert`, `va-text-input`)."

2. **Wait for user response** and validate the format:
   - Component name must start with `va-`
   - Component name must be lowercase kebab-case
   - If the user provides incorrect format (e.g., `button`, `VaButton`, `Button`), prompt them to provide it with the `va-` prefix in lowercase
   - Examples of correct format: `va-button`, `va-alert`, `va-text-input`, `va-accordion`

3. **Collect testing metadata**: Ask the user for:
   - **Tester name**: "What is your name (as you'd like it to appear in test results)?"
   - **Component version**: "What component library version are you testing? (e.g., 54.6.1, 55.0.0)"
   - **Test date**: "What is today's date or the date you performed/will perform testing? (format: YYYY-MM-DD)"

4. **Review the component implementation** using the paths above

5. **Apply the test selection guidelines** based on component features
   - **CRITICAL**: Always check if specific subtests exist for each applicable test
   - Browse the test library YAML files to find `subtests:` arrays
   - Use the most specific subtest ID rather than the parent test ID
   - Include multiple subtests from the same parent if multiple aspects apply
   - **Check the `category` field** for each test to determine if it has required environments

6. **Generate the YAML file** following the format above
   - **ALL tests get an empty test_results entry** with the tester name, version, and date pre-populated
   - **ALL tests get an environments array**
   - For tests with `screen_reader`, `mobile`, or `voice_control` categories, pre-populate the `environments` array with required environments
   - For all other tests, include a single empty environment entry (empty `name` and `result`)

7. **Validate** using the checklist

8. **Save** to `src/_data/accessibility_tests/[component-name].yml`
10. **Update the component documentation page** at `src/_components/[component-name].md`:
    - Read the component markdown file
    - **Add "Accessibility tests" to the anchors list** in the YAML front matter:
      - Find the `anchors:` list
      - Add `- anchor: Accessibility tests` after "Accessibility considerations" (if present) and before "Related" or "Component checklist"
    - **Add the accessibility tests section** to the markdown body:
      - If an "Accessibility considerations" section exists, add the new section immediately after it
      - If no "Accessibility considerations" section exists, add it before the "Related" section
      - If neither exists, add it at the end of the page before the component checklist include
      - Use this exact format:
        ```markdown
        ## Accessibility tests

        {% include accessibility-test-results.html component_name="[component-name]" %}
        ```
      - Replace `[component-name]` with the component's web-component value from the front matter (e.g., `va-accordion`, `va-details`)
Do not check what test files already exist or suggest components unless specifically asked.

The file you create will serve as the foundation for accessibility testing. Testers will fill in actual test results and environments as testing is completed.
