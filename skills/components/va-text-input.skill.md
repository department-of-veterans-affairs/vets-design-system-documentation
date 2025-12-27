# VA Text Input Component Skill

:::skill-meta
id: component.va-text-input
version: 0.1.0
source-of-truth:
  guidance: https://design.va.gov/components/form/text-input
  storybook: https://design.va.gov/storybook/?path=/docs/uswds-va-text-input--default
  code: https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-text-input
last-synced: 2025-11-13
maturity: use-deployed

intent-classifiers: ["text field", "input", "form field", "text box", "input field", "form input", "user input"]
:::end

---

## Intent / Quick Trigger Phrases

Use `va-text-input` when you need to collect text-based user input in forms. This component handles:

- **Single-line text entry** (names, addresses, short answers)
- **Validated input** (email, phone, numeric values, URLs)
- **Form fields with error states** and validation feedback
- **Currency input** with automatic formatting
- **Character-limited input** with live count display

**Trigger phrases:** "text field", "input box", "form field", "text input", "user input", "collect text"

---

## When to Use

✅ **Use va-text-input when:**

- Collecting any single-line text input from users
- Building forms that need validation and error handling
- Requiring specific input patterns (email, phone, numeric)
- Implementing fields with character limits and count display
- Creating accessible, WCAG-compliant form inputs
- Supporting required fields with clear labeling
- Enabling browser autocomplete for common field types
- Collecting currency/monetary values
- Adding contextual icons or text prefixes/suffixes to inputs
- Building forms that follow VA design patterns (single/multiple field patterns)

---

## When NOT to Use

❌ **Avoid va-text-input when:**

- **Multi-line text is needed** → Use `va-textarea` instead
- **Phone numbers require masking** → Never mask phone fields; users need visual verification
- **File upload is needed** → Use `va-file-input` component instead
- **Selecting from predefined options** → Use `va-select`, `va-radio`, or `va-checkbox` instead
- **Date input is needed** → Use `va-date` or `va-memorable-date` components
- **Only placeholder text available** → Never use placeholder-only; always provide proper labels

---

## Props, Events, and Slots

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | **Required.** The label for the text input. Must always be provided for accessibility. |
| `value` | `string` | - | The current value of the input field. |
| `name` | `string` | - | The name attribute for the input element (for form submission). |
| `required` | `boolean` | `false` | Marks the field as required and displays (*Required) text. |
| `error` | `string` | - | Error message to display when validation fails. Sets `aria-invalid="true"`. |

### Validation & Input Type

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'email' \| 'number' \| 'password' \| 'search' \| 'tel' \| 'text' \| 'url'` | `'text'` | The HTML input type. Note: If `min` or `max` are set, type becomes `'number'` automatically. |
| `inputmode` | `'decimal' \| 'email' \| 'numeric' \| 'search' \| 'tel' \| 'text' \| 'url'` | - | Mobile keyboard optimization hint. |
| `pattern` | `string` | - | Regular expression for input validation. Auto-set for numeric/decimal inputmodes. |
| `autocomplete` | `string` | - | Browser autocomplete attribute (e.g., `"email"`, `"given-name"`). |
| `maxlength` | `number` | - | Maximum number of characters. Ignored if ≤ 0. |
| `min` | `number \| string` | - | Minimum value for numeric inputs. Forces `type="number"`. |
| `max` | `number \| string` | - | Maximum value for numeric inputs. Forces `type="number"`. |
| `step` | `string` | - | Increment step for numeric inputs. Defaults to `".01"` when `inputmode="decimal"`. |

### Display & Layout

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | - | Input width: `'2xs'` (4ex), `'xs'` (7ex), `'sm'`/`'small'` (10ex), `'md'`/`'medium'` (20ex), `'lg'` (30ex), `'xl'` (40ex), `'2xl'` (50ex). |
| `hint` | `string` | - | Optional hint text displayed below the label. |
| `success` | `boolean` | `false` | Displays green border for successful validation state. |
| `charcount` | `boolean` | `false` | Shows character count message. Only works when `maxlength` is set. |

### Error Display Control

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show-input-error` | `boolean` | `true` | When `false`, hides error visually but keeps it available to screen readers. Must use kebab-case. |
| `reflect-input-error` | `boolean` | `false` | Adds `usa-input--error` class even if error message is external to component. |
| `invalid` | `boolean` | `false` | Sets `aria-invalid` without showing error message. Useful when composing into larger components. |
| `error-has-pii` | `boolean` | `false` | Adds Datadog privacy class to error messages containing sensitive information. |

### Form Pattern Integration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `use-forms-pattern` | `'single' \| 'multiple'` | - | Integrates with VA forms pattern. `'single'` = one question per page; `'multiple'` = multiple inputs per page. |
| `form-heading` | `string` | - | Heading text when using forms pattern. |
| `form-heading-level` | `number` | `3` | Heading level (1-6) for the form heading. |

### Prefix/Suffix & Currency

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currency` | `boolean` | `false` | Displays "$" symbol and sets numeric validation for currency. Forces `inputmode="numeric"` and pattern for 2 decimal places. |
| `input-prefix` | `string` | - | Text displayed at the start of the input (max 25 chars). |
| `input-icon-prefix` | `string` | - | Icon name for prefix (uses `va-icon` component). |
| `input-suffix` | `string` | - | Text displayed at the end of the input (max 25 chars). |
| `input-icon-suffix` | `string` | - | Icon name for suffix (uses `va-icon` component). |

### Accessibility & Screen Reader Support

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message-aria-describedby` | `string` | - | Additional description for screen readers. **Use this instead of native `aria-describedby`** (web component limitation). |
| `hide-required-text` | `boolean` | `false` | Hides the "(*Required)" text visually. Use cautiously; may reduce clarity. |

### Analytics

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enable-analytics` | `boolean` | `false` | Emits `component-library-analytics` event on blur. |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `vaInput` | `{ value: string }` | Fires on every input change. Use this instead of native `input` event for consistency. |
| `component-library-analytics` | `{ componentName: string, action: string, details: { label: string, value: string } }` | Analytics event fired on blur when `enable-analytics` is true. |

**Note:** Native `onInput` and `onBlur` events are also available via `@nativeHandler`.

### Slots

| Slot | Description |
|------|-------------|
| (default) | Content placed between the label and input field. Rarely used. |
| `form-description` | Description content when using `use-forms-pattern`. |

---

## Accessibility Requirements

### Keyboard Navigation

- **Tab**: Moves focus to/from the input field
- **All standard text input keys**: Function as expected (typing, backspace, arrow keys, etc.)
- **Enter**: Submits the form (native browser behavior)

### Screen Reader Support

✅ **Required for accessibility:**

1. **Always provide a `label`** – Never rely on placeholder text alone
2. **Use `message-aria-describedby`** for additional context – Standard `aria-describedby` won't work due to shadow DOM
3. **Error messages are announced** – Errors automatically set `aria-invalid="true"` and link to `aria-describedby`
4. **Required fields are announced** – "(*Required)" text is read by screen readers
5. **Character count updates announced** – When `charcount` is enabled, updates are debounced (1s) and use `aria-live="polite"`

### ARIA Attributes (Auto-Managed)

- `aria-invalid`: Set to `"true"` when `error`, `invalid`, or character count exceeded
- `aria-describedby`: Auto-linked to error messages, hints, and character count
- `aria-labelledby`: Used for forms pattern heading and label association
- `role="alert"`: Applied to error message container

### Focus Management

- Component uses standard browser focus behavior
- Error messages do not steal focus
- Focus indicator visible per WCAG standards (handled by USWDS styles)

### Color Contrast

- All text meets WCAG AA standards (handled by design tokens)
- Error states use red border + text (not color alone)
- Success states use green border + semantic indication

### Internationalization

Supports English, Spanish, and Tagalog translations for:
- "(*Required)" label text
- "Error" screen reader prefix
- Character count messages ("X characters left", "X characters allowed")

---

## Examples

### Basic Text Input (Web Component)

```html
<va-text-input
  label="Full name"
  name="full-name"
  required
  value=""
></va-text-input>
```

### Basic Text Input (React)

```jsx
import { VaTextInput } from '@department-of-veterans-affairs/web-components/react-bindings';

function MyForm() {
  const [value, setValue] = useState('');

  return (
    <VaTextInput
      label="Full name"
      name="full-name"
      required
      value={value}
      onVaInput={(e) => setValue(e.detail.value)}
    />
  );
}
```

### Email Input with Validation

```html
<va-text-input
  label="Email address"
  name="email"
  type="email"
  autocomplete="email"
  required
  hint="We'll send a confirmation to this address"
  message-aria-describedby="We use your email to send updates about your application"
></va-text-input>
```

### Error State

```html
<va-text-input
  label="Social Security number"
  name="ssn"
  error="Please enter a valid 9-digit Social Security number"
  value="123"
  pattern="^[0-9]{9}$"
  inputmode="numeric"
  message-aria-describedby="Enter 9 digits with no dashes or spaces"
></va-text-input>
```

### Error State (React)

```jsx
import { VaTextInput } from '@department-of-veterans-affairs/web-components/react-bindings';

function ValidatedInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (value.length !== 9 || !/^[0-9]+$/.test(value)) {
      setError('Please enter a valid 9-digit Social Security number');
    } else {
      setError('');
    }
  };

  return (
    <VaTextInput
      label="Social Security number"
      name="ssn"
      error={error}
      value={value}
      pattern="^[0-9]{9}$"
      inputmode="numeric"
      messageAriaDescribedby="Enter 9 digits with no dashes or spaces"
      onVaInput={(e) => setValue(e.detail.value)}
      onBlur={handleBlur}
    />
  );
}
```

### Currency Input

```html
<va-text-input
  label="Amount you want to pay"
  name="payment-amount"
  currency
  required
  hint="Enter amount in dollars and cents"
></va-text-input>
```

**Note:** `currency` automatically:
- Adds "$" prefix
- Sets `inputmode="numeric"`
- Applies pattern for 2 decimal places: `^[0-9]+(.[0-9]{2})?$`
- Shows error on blur if pattern doesn't match

### Character Count

```html
<va-text-input
  label="Brief description"
  name="description"
  maxlength="100"
  charcount
  hint="Provide a short summary"
></va-text-input>
```

**Behavior:**
- Shows "100 characters allowed" on load
- Updates to "X characters left" as user types
- Shows "X characters over limit" if exceeded (with `aria-invalid="true"`)
- Screen reader announcements debounced (1s delay) to avoid interruption

### Numeric Input with Range

```html
<va-text-input
  label="Number of dependents"
  name="dependents"
  type="number"
  inputmode="numeric"
  min="0"
  max="20"
  step="1"
></va-text-input>
```

### Prefix/Suffix Examples

```html
<!-- Text prefix -->
<va-text-input
  label="Website URL"
  name="website"
  input-prefix="https://"
  type="url"
></va-text-input>

<!-- Icon prefix -->
<va-text-input
  label="Credit card number"
  name="cc-number"
  input-icon-prefix="credit_card"
  inputmode="numeric"
></va-text-input>

<!-- Text suffix -->
<va-text-input
  label="Weight"
  name="weight"
  input-suffix="lbs."
  inputmode="numeric"
></va-text-input>
```

### Forms Pattern (Single Field)

```html
<va-text-input
  label="Preferred name"
  name="preferred-name"
  use-forms-pattern="single"
  form-heading="What name would you like us to use?"
  form-heading-level="1"
>
  <p slot="form-description">
    We'll use this name when we contact you.
  </p>
</va-text-input>
```

### Forms Pattern (Multiple Fields)

```html
<va-text-input
  label="Street address"
  name="street"
  use-forms-pattern="multiple"
  form-heading="What is your mailing address?"
  form-heading-level="2"
  required
>
  <p slot="form-description">
    We'll send any important documents to this address.
  </p>
</va-text-input>

<va-text-input
  label="City"
  name="city"
  required
></va-text-input>

<va-select
  label="State"
  name="state"
  required
>
  <!-- state options -->
</va-select>
```

### Width Variations

```html
<!-- Small input for short values (e.g., ZIP code) -->
<va-text-input
  label="ZIP code"
  name="zip"
  width="sm"
  maxlength="5"
  pattern="[0-9]{5}"
  inputmode="numeric"
></va-text-input>

<!-- Medium input (default-ish) -->
<va-text-input
  label="Last name"
  name="last-name"
  width="md"
></va-text-input>

<!-- Large input for longer content -->
<va-text-input
  label="Full mailing address"
  name="address"
  width="xl"
></va-text-input>
```

---

## Tokens, Utility Classes, and Styling

### Design Tokens Used

The component uses VA design system tokens for consistent styling:

- **Colors:**
  - `--vads-color-base`: Default text color
  - Error border: Automatic via USWDS error styles
  - Success border: Green from `usa-input--success` class

- **Typography:**
  - `--font-source-sans`: Font family for labels and input text

- **Spacing:**
  - Standard USWDS spacing for margins/padding

### CSS Classes Applied

| Class | Condition | Purpose |
|-------|-----------|---------|
| `usa-label` | Always on `<label>` | USWDS label styling |
| `usa-label--error` | When `error` is set | Red label text for error state |
| `usa-label--required` | When `required` is true | Styling for "(*Required)" text |
| `usa-hint` | When `hint` is set | Styling for hint text |
| `usa-input` | Always on `<input>` | Base input styling |
| `usa-input--error` | When `error` or `reflect-input-error` | Red border and error styling |
| `usa-input--success` | When `success` is true | Green border for success state |
| `usa-input--{width}` | When `width` is set | Width constraint (e.g., `usa-input--md`) |
| `usa-error-message` | When `error` is set | Error message text styling |
| `usa-character-count__status` | When `charcount` and `maxlength` | Character count message |
| `usa-character-count__status--invalid` | When over character limit | Red styling for exceeded count |
| `usa-input-prefix` | When `input-prefix` or `input-icon-prefix` | Prefix container styling |
| `usa-input-suffix` | When `input-suffix` or `input-icon-suffix` | Suffix container styling |
| `usa-sr-only` | When `show-input-error="false"` | Hides error visually, keeps for screen readers |
| `dd-privacy-hidden` | When `error-has-pii` | Datadog privacy masking |

### Shadow Parts for Custom Styling

The component exposes shadow parts for limited style customization:

```css
va-text-input::part(label) {
  /* Customize label */
}

va-text-input::part(input) {
  /* Customize input field */
}

va-text-input::part(form-header) {
  /* Customize form pattern heading */
}

va-text-input::part(input-prefix) {
  /* Customize prefix container */
}

va-text-input::part(input-suffix) {
  /* Customize suffix container */
}

va-text-input::part(icon) {
  /* Customize prefix/suffix icons */
}
```

**Warning:** Customizing shadow parts can break design system consistency. Only use when absolutely necessary and approved by Design System team.

---

## Content Guidance

### Labels (Required)

✅ **Do:**
- Always provide a clear, concise label that describes the expected input
- Use sentence case for labels (e.g., "First name" not "First Name")
- Make labels visible and adjacent to the input
- Use specific, concrete language: "Street address" not "Address line 1"

❌ **Don't:**
- Never use placeholder text as the only label
- Don't use labels like "Input" or "Field" – be specific
- Avoid overly long labels (if needed, use `hint` for additional context)

### Hint Text

Use `hint` for clarifying instructions that help users provide the right information:

```html
<va-text-input
  label="Social Security number"
  hint="Enter 9 digits with no dashes or spaces"
></va-text-input>
```

### Error Messages

Error messages should:
1. **Be specific** – Explain exactly what went wrong
2. **Be actionable** – Tell users how to fix it
3. **Be concise** – One or two sentences maximum
4. **Avoid jargon** – Use plain language

✅ **Good error messages:**
- "Enter a 9-digit Social Security number with no dashes or spaces"
- "Enter an email address in this format: name@example.com"
- "Select a date that's in the past"

❌ **Bad error messages:**
- "Invalid input" (not specific)
- "Error" (not actionable)
- "The value you entered does not match the required pattern for this field" (jargon, too complex)

### Required Field Pattern

When using `required`, the text "(*Required)" is automatically added:

```html
<va-text-input
  label="Full name"
  required
></va-text-input>
```

**Renders as:** "Full name (*Required)"

**Note:** The internationalized "Required" text is automatically translated to Spanish ("(*Obligatorio)") or Tagalog based on the page language.

### Privacy and PII Warnings

⚠️ **CRITICAL: Text inputs have high PII/PHI risk**

- **Never track open text field responses in analytics** (even with `enable-analytics`)
- **Never pass user input in URLs** (can appear in logs)
- **Use `error-has-pii` when error messages contain sensitive data**
- **Inform users how their data will be used** (via `hint` or surrounding content)

Example for sensitive fields:

```html
<va-text-input
  label="Social Security number"
  name="ssn"
  error-has-pii
  message-aria-describedby="We'll use this to verify your identity. We keep your personal information private."
></va-text-input>
```

---

## Pitfalls and Anti-Patterns

### ❌ Anti-Pattern: Placeholder-Only Labels

```html
<!-- WRONG: No visible label -->
<va-text-input
  placeholder="Enter your email"
  name="email"
></va-text-input>
```

**Why it's wrong:**
- Placeholder text disappears when user starts typing
- Insufficient color contrast in most browsers
- Screen readers may not announce placeholders consistently

**Fix:**

```html
<!-- CORRECT: Visible label -->
<va-text-input
  label="Email address"
  name="email"
></va-text-input>
```

### ❌ Anti-Pattern: Using `aria-describedby` Directly

```html
<!-- WRONG: Web component shadow DOM breaks this -->
<va-text-input
  label="Name"
  aria-describedby="helper-text"
></va-text-input>
<div id="helper-text">Enter your full legal name</div>
```

**Fix:**

```html
<!-- CORRECT: Use message-aria-describedby prop -->
<va-text-input
  label="Name"
  message-aria-describedby="Enter your full legal name"
></va-text-input>
```

### ❌ Anti-Pattern: Password Masking on Phone Numbers

```html
<!-- WRONG: Users can't verify their phone number -->
<va-text-input
  label="Phone number"
  type="password"
  name="phone"
></va-text-input>
```

**Why it's wrong:** Users need to visually verify phone numbers before submission.

**Fix:**

```html
<!-- CORRECT: Use tel type -->
<va-text-input
  label="Phone number"
  type="tel"
  inputmode="tel"
  autocomplete="tel"
  name="phone"
></va-text-input>
```

### ❌ Anti-Pattern: Vague Error Messages

```html
<!-- WRONG: Not actionable -->
<va-text-input
  label="Email"
  error="Invalid"
></va-text-input>
```

**Fix:**

```html
<!-- CORRECT: Specific and actionable -->
<va-text-input
  label="Email address"
  error="Enter an email address in this format: name@example.com"
></va-text-input>
```

### ❌ Anti-Pattern: Tracking PII in Analytics

```jsx
// WRONG: Tracks user's actual input (PII risk!)
<VaTextInput
  label="Full name"
  name="full-name"
  enableAnalytics  // DON'T DO THIS on PII fields
/>
```

**Fix:**

```jsx
// CORRECT: No analytics on PII fields
<VaTextInput
  label="Full name"
  name="full-name"
  enableAnalytics={false}  // or omit entirely
/>
```

**Note:** Even with analytics disabled, never log or pass the `value` prop to external services.

### ❌ Anti-Pattern: Setting Width Without Semantic Meaning

```html
<!-- QUESTIONABLE: Width doesn't signal expected input length -->
<va-text-input
  label="Full name"
  width="2xs"  <!-- Too small for typical names -->
></va-text-input>
```

**Fix:**

```html
<!-- CORRECT: Width matches expected input length -->
<va-text-input
  label="ZIP code"
  width="sm"  <!-- Small width signals short input -->
  maxlength="5"
></va-text-input>

<va-text-input
  label="Full name"
  width="lg"  <!-- Larger width for longer input -->
></va-text-input>
```

### ❌ Anti-Pattern: Overusing Character Limits Without Justification

```html
<!-- QUESTIONABLE: Why limit the name to 50 characters? -->
<va-text-input
  label="Full name"
  maxlength="50"
  charcount
></va-text-input>
```

**Guidance:**
- Only use `maxlength` when there's a technical or policy reason (e.g., database constraints, regulatory requirements)
- If using `maxlength`, consider adding a `hint` to explain why: "Maximum 50 characters due to system limitations"

### ❌ Anti-Pattern: Currency Input Without Validation

```jsx
// WRONG: Currency input but no validation or hint
<VaTextInput
  label="Amount"
  currency
/>
```

**Fix:**

```jsx
// CORRECT: Add validation and helpful hint
<VaTextInput
  label="Amount you want to pay"
  currency
  required
  hint="Enter amount in dollars and cents (e.g., 125.00)"
  messageAriaDescribedby="Minimum payment is $50.00"
  min="50"
/>
```

---

## Related Skills

### Related Components

- **`component.va-textarea`** – Multi-line text input
- **`component.va-select`** – Dropdown selection
- **`component.va-radio`** – Single choice from options
- **`component.va-checkbox`** – Multiple selections
- **`component.va-date`** – Date picker
- **`component.va-memorable-date`** – Month/day/year inputs for memorable dates
- **`component.va-file-input`** – File upload

### Related Patterns

- **`pattern.ask-users-for.names`** – Name collection guidance
- **`pattern.ask-users-for.addresses`** – Address input patterns
- **`pattern.ask-users-for.phone-numbers`** – Phone number collection
- **`pattern.ask-users-for.email-addresses`** – Email input patterns
- **`pattern.help-users-to.check-answers`** – Review/confirmation patterns

### Related Cross-Cutting Skills

- **`cross-cutting.accessibility`** – Baseline accessibility standards
- **`cross-cutting.content-style`** – Voice, tone, and content guidelines
- **`cross-cutting.form-building`** – General form construction patterns

---

## Update Checklist

Use this checklist when updating this skill file:

- [ ] **Props/Events table updated** – Compare with current component source (`va-text-input.tsx`)
- [ ] **Examples tested** – Verify code examples work with latest component version
- [ ] **Links checked** – Ensure guidance, Storybook, and code URLs are valid
- [ ] **Accessibility guidance reviewed** – Confirm WCAG standards still met
- [ ] **Anti-patterns reviewed** – Add any new misuse patterns discovered
- [ ] **Version bumped** – Update `version` in metadata (semantic versioning)
- [ ] **`last-synced` date updated** – Set to current date (YYYY-MM-DD)
- [ ] **Related skills checked** – Verify related component/pattern links are current

---

## Additional Resources

- **Design System Guidance:** https://design.va.gov/components/form/text-input
- **Storybook (Interactive Examples):** https://design.va.gov/storybook/?path=/docs/uswds-va-text-input--default
- **Source Code:** https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-text-input
- **USWDS Text Input:** https://designsystem.digital.gov/components/text-input/
- **WCAG 2.2 (Level AA):** https://www.w3.org/WAI/WCAG22/quickref/

---

**Skill maintained by:** VA Design System Team
**Questions or issues?** Post in `#vfs-platform-support` or `#platform-design-system` on Slack
