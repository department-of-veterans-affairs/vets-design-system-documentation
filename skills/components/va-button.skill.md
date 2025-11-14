# VA Button Component Skill

:::skill-meta
id: component.va-button
version: 0.1.0
source-of-truth:
  guidance: https://design.va.gov/components/button
  storybook: https://design.va.gov/storybook/?path=/docs/components-va-button--default
  code: https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-button
last-synced: 2025-11-13
maturity: use-deployed

intent-classifiers: ["button", "action", "submit", "click", "form button", "primary button", "secondary button", "call to action"]
:::end

---

## Intent / Quick Trigger Phrases

Use `va-button` for triggering actions, not navigation. Buttons perform actions like submitting forms, closing modals, saving data, or advancing through workflows.

**Trigger phrases:** "button", "submit", "action", "click", "save", "continue", "back", "form action"

---

## When to Use

✅ **Use va-button when:**

- **Performing actions**: Add, close, cancel, save, delete, edit operations
- **Triggering JavaScript functionality**: Opening/closing modals, expanding sections
- **Form progression**: Continue, back, submit buttons in form workflows
- **Single-execution actions**: Operations requiring loading states (prevent double-clicks)
- **Page-level primary actions**: Most important action on a page or section

---

## When NOT to Use

❌ **Avoid va-button when:**

- **Navigation between pages** → Use `<a>` links or `va-link` instead
- **General website navigation** → Use links in headers, footers, sidebars
- **Prominent CTAs that navigate** → Use `va-action-link` component instead
- **Inline content links** → Use standard links
- **Destructive actions without confirmation** → Pair with confirmation dialog first

---

## Buttons vs. Links Decision Tree

| Question | Answer | Component to Use |
|----------|--------|------------------|
| Is purpose navigation? | Yes, no data submitted | `<a>` or `va-link` |
| Is purpose navigation with data submission? | Yes (e.g., search) | `va-button` with `submit` |
| Does navigation need visual emphasis? | Yes | `va-action-link` |
| Is purpose an action (not navigation)? | Yes | `va-button` |

---

## Props and Events

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | The text displayed on the button. If not provided, defaults from `continue`/`back` props or "Loading..." when loading. |
| `label` | `string` | - | The `aria-label` for the button. Use when button text alone isn't descriptive enough. |
| `disabled` | `boolean` | `false` | **WARNING: Avoid using.** If true, button appears disabled and click events won't fire. Poor for accessibility. |

### Variants

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `secondary` | `boolean` | `false` | Use for non-primary actions (cancel, reset, actions on current page). |
| `big` | `boolean` | `false` | Large button variant. Use when it's the only action on a page. |
| `primaryAlternate` | `boolean` | `false` | Alternate primary button styling. |
| `back` | `boolean` | `false` | Back button with left arrow icon. Text defaults to "Back". Use in form flows. |
| `continue` | `boolean` | `false` | Continue button with right arrow icon. Text defaults to "Continue". Use in form flows. |

### State & Behavior

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Shows loading spinner, disables button, announces "Loading" to screen readers. Use for async actions. |
| `submit` | `string` | - | Sets `type="submit"` for form submission. Values: `"prevent"` (trigger onsubmit but don't submit), `"skip"` (submit without onsubmit), or any other value (both). |
| `fullWidth` | `boolean` | `false` | Button expands to full width of container. |

### Accessibility

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messageAriaDescribedby` | `string` | - | Additional description for screen readers. Use this instead of native `aria-describedby` (web component limitation). |
| `disableAnalytics` | `boolean` | `false` | If true, disables `component-library-analytics` event. Use when button contains or references PII/PHI. |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `component-library-analytics` | `{ componentName: string, action: string, details: { type: string, label: string } }` | Fired on click unless `disableAnalytics` is true. |

**Note:** Native `onClick` handler is also available via `@nativeHandler`.

---

## Accessibility Requirements

### Keyboard Navigation

- **Tab**: Moves focus to/from the button
- **Space** or **Enter**: Activates the button
- **Disabled buttons remain focusable** (uses `aria-disabled` instead of HTML `disabled` attribute)

### Screen Reader Support

✅ **Required for accessibility:**

1. **Button text must be descriptive** – Avoid vague labels like "Click here" or "Submit"
2. **Use `label` prop for additional context** – When button text alone isn't clear (e.g., icon-only buttons)
3. **Use `messageAriaDescribedby`** for extra information – E.g., "This will save your changes and send you to the next page"
4. **Loading state is announced** – "Loading" when `loading={true}`, "Loading complete" when it finishes
5. **Never rely on color alone** – Use text and icons to indicate button purpose

### ARIA Attributes (Auto-Managed)

- `aria-disabled`: Set to `"true"` when `disabled` or `loading` (button remains focusable)
- `aria-busy`: Set to `"true"` when `loading`
- `aria-label`: Set from `label` prop
- `aria-describedby`: Auto-linked to `messageAriaDescribedby` content
- `role="status"`: Applied to loading message container

### Target Size (WCAG 2.2 Level AAA)

- Minimum **44x44 CSS pixels** for touch targets
- Separate tappable elements with at least **1 spacing unit**
- Default button sizing meets this requirement

### Critical Accessibility Rule

⚠️ **NEVER USE DISABLED BUTTONS WITHOUT STRONG JUSTIFICATION**

**Why:** Disabled buttons:
- Don't explain to users what's wrong
- Can't be focused or explored with screen readers
- Are particularly problematic for cognitive disabilities
- Hide information users need to proceed

**Better approach:**
1. Allow button to be clicked
2. Validate on submission
3. Display specific error messages
4. Highlight unfilled required fields
5. Shift focus to first error

**Only use `disabled` when:**
- Operation is genuinely unavailable (e.g., "Next" before page loads)
- Providing clear, persistent explanation nearby
- Alternative accessible feedback is present

---

## Examples

### Basic Primary Button (Web Component)

```html
<va-button text="Save changes"></va-button>
```

### Basic Primary Button (React)

```jsx
import { VaButton } from '@department-of-veterans-affairs/web-components/react-bindings';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <VaButton
      text="Save changes"
      onClick={handleClick}
    />
  );
}
```

### Secondary Button

```html
<va-button
  text="Cancel"
  secondary
></va-button>
```

### Form Submit Button

```html
<form onsubmit="handleSubmit(event)">
  <va-text-input
    label="Email"
    name="email"
    required
  ></va-text-input>

  <va-button
    text="Submit form"
    submit
  ></va-button>
</form>
```

```jsx
// React
function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <VaTextInput
        label="Email"
        name="email"
        required
      />

      <VaButton
        text="Submit form"
        submit
      />
    </form>
  );
}
```

### Continue/Back Buttons in Form Flow

```html
<!-- Step 1 of form -->
<va-button
  continue
></va-button>

<!-- Step 2 of form -->
<va-button
  back
></va-button>
<va-button
  continue
></va-button>
```

**Note:** `continue` and `back` props automatically set button text and add appropriate icons. You can override text with the `text` prop.

### Loading State for Async Actions

```jsx
import { VaButton } from '@department-of-veterans-affairs/web-components/react-bindings';
import { useState } from 'react';

function SaveButton() {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await saveData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <VaButton
      text="Save and continue"
      loading={loading}
      onClick={handleSave}
    />
  );
}
```

**Behavior:**
- Shows loading spinner
- Button becomes non-interactive
- Announces "Loading" to screen readers
- Announces "Loading complete" when done
- Prevents double-clicks

### Big Button (Single Page Action)

```html
<va-button
  text="Create an account"
  big
></va-button>
```

### Full Width Button

```html
<va-button
  text="Apply now"
  fullWidth
></va-button>
```

### Button with Accessible Description

```html
<va-button
  text="Delete account"
  messageAriaDescribedby="This action cannot be undone. All your data will be permanently deleted."
></va-button>
```

### Button Pair (Primary + Secondary)

```html
<div class="button-group">
  <va-button
    text="Save changes"
  ></va-button>

  <va-button
    text="Cancel"
    secondary
  ></va-button>
</div>
```

**Placement:** Primary button typically appears first (left) or on its own line above secondary button.

### Submit with Validation (Avoid Disabled)

```jsx
// ✅ GOOD: Validate on submit, show errors
import { VaButton } from '@department-of-veterans-affairs/web-components/react-bindings';
import { useState } from 'react';

function GoodForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address');
      return;
    }

    // Submit form
    submitForm({ email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VaTextInput
        label="Email"
        value={email}
        error={error}
        onVaInput={(e) => setEmail(e.detail.value)}
      />

      <VaButton
        text="Continue"
        submit
      />
    </form>
  );
}
```

### Custom Text with Continue Icon

```html
<va-button
  text="Proceed to payment"
  continue
></va-button>
```

---

## Tokens, Utility Classes, and Styling

### CSS Classes Applied

| Class | Condition | Purpose |
|-------|-----------|---------|
| `usa-button` | Always | Base button styling from USWDS |
| `usa-button--big` | When `big` prop | Large button variant |
| `usa-button--outline` | When `back` or `secondary` | Outlined button style |
| `va-button-primary--alternate` | When `primaryAlternate` | Alternate primary styling |
| `va-button--full-width` | When `fullWidth` | Expands to full width |

### Shadow Parts for Custom Styling

The component exposes a shadow part for limited customization:

```css
va-button::part(button) {
  /* Customize button element */
}
```

**Warning:** Customizing shadow parts can break design system consistency. Only use when absolutely necessary and approved by Design System team.

---

## Content Guidance

### Button Text Best Practices

✅ **Do:**
- Use **sentence case**: "Create an account" (not "Create An Account")
- Keep labels **concise**: Under 35 characters
- Use **clear action verbs**: Create, Save, Delete, Send, Continue
- Make labels **descriptive of outcomes**: "File a complaint" (not "Complaint filing")
- Be **specific**: "Create an account" (not "Get started")

❌ **Don't:**
- Avoid vague labels: "Click here", "Submit", "OK"
- Don't use jargon or internal terminology
- Avoid overly long text that wraps multiple lines

### Good vs. Bad Examples

| Good | Bad | Why |
|------|-----|-----|
| "Create an account" | "Get started" | Specific action vs. vague |
| "File a complaint" | "Complaint filing" | Active verb vs. gerund |
| "Save changes" | "Submit" | Clear outcome vs. vague |
| "Delete account" | "Delete" | Specific object vs. ambiguous |
| "Continue to payment" | "Next" | Descriptive vs. generic |

### Privacy Warnings

⚠️ **CRITICAL: Button text and analytics**

- **Never include PII or PHI in button text**
- **Never reference PII/PHI in button labels or aria-describedby**
- **Use `disableAnalytics` if button text must contain sensitive info**

Example:
```html
<!-- WRONG: Contains PII -->
<va-button text="Save John Smith's data"></va-button>

<!-- CORRECT: Generic, no PII -->
<va-button text="Save changes"></va-button>
```

---

## Pitfalls and Anti-Patterns

### ❌ Anti-Pattern: Using Buttons for Navigation

```html
<!-- WRONG: Button for navigation -->
<va-button
  text="Go to homepage"
  onClick={() => window.location = '/'}
></va-button>
```

**Why it's wrong:**
- Buttons are for actions, not navigation
- Screen readers announce "button" (confusing for navigation)
- Can't right-click to "Open in new tab"
- Breaks browser history/back button expectations

**Fix:**

```html
<!-- CORRECT: Link for navigation -->
<a href="/">Go to homepage</a>

<!-- OR use va-link component -->
<va-link href="/">Go to homepage</va-link>

<!-- OR for prominent CTAs -->
<va-action-link href="/apply">Apply now</va-action-link>
```

### ❌ Anti-Pattern: Disabled Submit Button

```jsx
// WRONG: Disabled button until form is valid
function BadForm() {
  const [email, setEmail] = useState('');
  const isValid = email.includes('@');

  return (
    <form>
      <VaTextInput
        label="Email"
        value={email}
        onVaInput={(e) => setEmail(e.detail.value)}
      />

      <VaButton
        text="Submit"
        disabled={!isValid}  // ❌ DON'T DO THIS
      />
    </form>
  );
}
```

**Why it's wrong:**
- User can't discover what's wrong
- Screen reader users can't even find the button
- Particularly harmful for cognitive disabilities
- No explanation of what's missing

**Fix:** See "Submit with Validation" example above (validate on submit, show specific errors)

### ❌ Anti-Pattern: Vague Button Text

```html
<!-- WRONG: Not specific -->
<va-button text="Submit"></va-button>
<va-button text="OK"></va-button>
<va-button text="Click here"></va-button>
```

**Fix:**

```html
<!-- CORRECT: Specific and descriptive -->
<va-button text="Submit application"></va-button>
<va-button text="Save changes"></va-button>
<va-button text="Close dialog"></va-button>
```

### ❌ Anti-Pattern: Missing Loading State for Async

```jsx
// WRONG: No loading state, allows double-clicks
function BadSaveButton() {
  const handleSave = async () => {
    await saveData();  // Takes 2 seconds
  };

  return (
    <VaButton
      text="Save"
      onClick={handleSave}
    />
  );
}
```

**Why it's wrong:**
- User can click multiple times
- No feedback that action is processing
- Potential duplicate submissions

**Fix:**

```jsx
// CORRECT: Loading state prevents double-clicks
function GoodSaveButton() {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await saveData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <VaButton
      text="Save"
      loading={loading}
      onClick={handleSave}
    />
  );
}
```

### ❌ Anti-Pattern: Icon-Only Button Without Label

```html
<!-- WRONG: No accessible name -->
<va-button>
  <va-icon icon="close"></va-icon>
</va-button>
```

**Fix:**

```html
<!-- CORRECT: Accessible label provided -->
<va-button
  label="Close dialog"
>
  <va-icon icon="close"></va-icon>
</va-button>

<!-- OR better, use text -->
<va-button text="Close"></va-button>
```

### ❌ Anti-Pattern: Primary and Secondary Swapped

```html
<!-- WRONG: Cancel is primary (visually prominent) -->
<va-button text="Cancel"></va-button>
<va-button text="Delete account" secondary></va-button>
```

**Why it's wrong:**
- Most important action should be primary (solid)
- Destructive action should be more prominent than cancel

**Fix:**

```html
<!-- CORRECT: Delete is primary, Cancel is secondary -->
<va-button text="Delete account"></va-button>
<va-button text="Cancel" secondary></va-button>
```

**Note:** For destructive actions, always pair with confirmation dialog first.

---

## Related Skills

### Related Components

- **`component.va-button-pair`** – Grouped primary and secondary buttons
- **`component.va-link`** – Links for navigation
- **`component.va-action-link`** – Prominent call-to-action links
- **`component.va-modal`** – Modal dialogs often triggered by buttons

### Related Patterns

- **`pattern.help-users-to.confirm-actions`** – Confirmation dialogs for destructive actions
- **`pattern.buttons`** – Button placement and grouping patterns
- **`pattern.form-progression`** – Continue/back button usage in forms

### Related Cross-Cutting Skills

- **`cross-cutting.accessibility`** – Baseline accessibility standards
- **`cross-cutting.content-style`** – Voice, tone, and content guidelines
- **`cross-cutting.form-building`** – General form construction patterns

---

## Update Checklist

Use this checklist when updating this skill file:

- [ ] **Props/Events table updated** – Compare with current component source (`va-button.tsx`)
- [ ] **Examples tested** – Verify code examples work with latest component version
- [ ] **Links checked** – Ensure guidance, Storybook, and code URLs are valid
- [ ] **Accessibility guidance reviewed** – Confirm WCAG standards still met
- [ ] **Anti-patterns reviewed** – Add any new misuse patterns discovered
- [ ] **Version bumped** – Update `version` in metadata (semantic versioning)
- [ ] **`last-synced` date updated** – Set to current date (YYYY-MM-DD)
- [ ] **Related skills checked** – Verify related component/pattern links are current

---

## Additional Resources

- **Design System Guidance:** https://design.va.gov/components/button
- **Storybook (Interactive Examples):** https://design.va.gov/storybook/?path=/docs/components-va-button--default
- **Source Code:** https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-button
- **USWDS Button:** https://designsystem.digital.gov/components/button/
- **WCAG 2.2 Target Size:** https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

---

**Skill maintained by:** VA Design System Team
**Questions or issues?** Post in `#vfs-platform-support` or `#platform-design-system` on Slack
