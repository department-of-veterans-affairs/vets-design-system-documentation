# Ask Users for Email Address - Pattern Skill

:::skill-meta
id: pattern.ask-users-for-email-address
version: 0.1.0
source-of-truth:
  guidance: https://design.va.gov/patterns/ask-users-for/email-address
last-synced: 2025-11-13
maturity: use-deployed

intent-classifiers: ["email", "email address", "contact information", "email collection", "email validation", "collect email"]
component-dependencies: ["component.va-text-input"]
pattern-type: "ask-users-for"
:::end

---

## Pattern Intent

**Ask users for email address** is a pattern for collecting email addresses in VA forms. As of October 2024, capturing email is **mandatory for all digital form submissions** to enable follow-up communication.

This pattern ensures:
- Proper email collection from Veterans and form fillers
- Pre-population from VA.gov Profile when possible
- Correct validation and error messaging
- Optimal user experience

**Trigger phrases:** "email", "email address", "contact email", "collect email", "email validation"

---

## When to Use This Pattern

✅ **Use this pattern when:**

- Collecting email addresses in any VA form (now mandatory for digital submissions)
- Building contact information sections
- Enabling follow-up communication after form submission
- Collecting email from both Veteran and form filler (if different people)
- Implementing forms that require authenticated user data

---

## When NOT to Use This Pattern

❌ **Avoid this pattern when:**

- Building non-form pages (use standard links or contact info display instead)
- Email is already captured and displayed as read-only
- You're considering email confirmation fields (proven ineffective - users copy/paste)

---

## Pattern Composition

### Required Components

**Primary:**
- **va-text-input** - For email input field
  - `type="email"` for proper keyboard and validation
  - `autocomplete="email"` for browser assistance
  - `label="Email address"`
  - `required={true}` (mandatory for digital forms)

**Supporting:**
- **Prefill notification** - When pre-populating from VA.gov Profile
- **Hint text** - Purpose statement explaining why email is needed

### Component Configuration

```jsx
<VaTextInput
  label="Email address"
  name="email"
  type="email"
  autocomplete="email"
  required
  hint="We'll send you updates about your application"
  value={emailFromProfile}
  error={emailError}
  onVaInput={(e) => handleEmailChange(e.detail.value)}
/>
```

---

## Implementation Guidelines

### 1. Pre-population from Profile

**Always pre-populate email from VA.gov Profile when available:**

```jsx
import { useEffect, useState } from 'react';

function EmailField({ userProfile }) {
  const [email, setEmail] = useState('');
  const [isPrefilled, setIsPrefilled] = useState(false);

  useEffect(() => {
    if (userProfile?.email) {
      setEmail(userProfile.email);
      setIsPrefilled(true);
    }
  }, [userProfile]);

  return (
    <>
      {isPrefilled && (
        <VaAlert status="info" slim>
          <p>We've prefilled your email address from your VA.gov profile.</p>
        </VaAlert>
      )}

      <VaTextInput
        label="Email address"
        name="email"
        type="email"
        autocomplete="email"
        required
        value={email}
        onVaInput={(e) => setEmail(e.detail.value)}
      />
    </>
  );
}
```

**Key points:**
- Notify user when data is pre-filled (use va-alert or prefill component)
- Allow user to edit pre-filled data
- Don't require re-entry if profile data exists

### 2. Collecting Multiple Email Addresses

**For forms where Veteran and form filler may differ:**

```jsx
function EmailCollection({ isVeteran }) {
  return (
    <>
      <VaTextInput
        label="Veteran's email address"
        name="veteran-email"
        type="email"
        autocomplete="email"
        required
        hint="We'll use this to contact the Veteran about their application"
      />

      {!isVeteran && (
        <VaTextInput
          label="Your email address"
          name="filler-email"
          type="email"
          autocomplete="email"
          required
          hint="We'll use this to contact you if we have questions about this application"
        />
      )}
    </>
  );
}
```

### 3. Page Placement

**Email address typically appears with phone number:**

```jsx
function ContactInformationPage() {
  return (
    <div>
      <h2>Contact information</h2>
      <p>We may use your contact information to contact you if we have questions about your application.</p>

      <VaTextInput
        label="Email address"
        name="email"
        type="email"
        autocomplete="email"
        required
      />

      <VaTextInput
        label="Phone number"
        name="phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        required
      />
    </div>
  );
}
```

**Pattern guidance:**
- Group email and phone together on same page
- Provide context explaining why contact info is needed
- Use clear heading ("Contact information")

---

## Validation Requirements

### Format Validation

**Validate on blur, not on every keystroke:**

```jsx
function ValidatedEmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    if (!value) {
      return 'Enter your email address';
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Enter a valid email address without spaces using this format: email@domain.com';
    }

    // Check for invalid characters (only basic ASCII allowed)
    const invalidChars = /[^a-zA-Z0-9@._+-]/;
    if (invalidChars.test(value)) {
      return 'You entered a character we can't accept';
    }

    return '';
  };

  const handleBlur = () => {
    const validationError = validateEmail(email);
    setError(validationError);
  };

  return (
    <VaTextInput
      label="Email address"
      name="email"
      type="email"
      autocomplete="email"
      required
      value={email}
      error={error}
      onVaInput={(e) => setEmail(e.detail.value)}
      onBlur={handleBlur}
    />
  );
}
```

### Standard Error Messages

**Primary error (format):**
```
"Enter a valid email address without spaces using this format: email@domain.com"
```

**Secondary error (invalid characters):**
```
"You entered a character we can't accept"
```

**Missing error (required field):**
```
"Enter your email address"
```

**Guidance:**
- Be specific about what's wrong
- Provide example of correct format
- Validate on blur, not during typing

---

## Anti-Patterns to Avoid

### ❌ Anti-Pattern 1: Email Confirmation Field

```jsx
// WRONG: Don't ask for email confirmation
<VaTextInput label="Email address" name="email" />
<VaTextInput label="Confirm email address" name="email-confirm" />
```

**Why it's wrong:**
- Proven ineffective for error detection
- Users copy/paste from first field
- Adds friction without benefit
- Double the work for no value

**Correct approach:**
```jsx
// CORRECT: Single email field with validation
<VaTextInput
  label="Email address"
  name="email"
  type="email"
  autocomplete="email"
  required
/>
```

### ❌ Anti-Pattern 2: Vague Purpose Statement

```jsx
// WRONG: No explanation of why email is needed
<VaTextInput label="Email" name="email" required />
```

**Correct approach:**
```jsx
// CORRECT: Clear purpose statement
<p>We may use your contact information to contact you if we have questions about your application.</p>
<VaTextInput
  label="Email address"
  name="email"
  type="email"
  hint="We'll send you updates about your application"
  required
/>
```

### ❌ Anti-Pattern 3: Missing Pre-fill Notification

```jsx
// WRONG: Pre-fill without telling user
const email = userProfile.email;
<VaTextInput label="Email address" value={email} />
```

**Correct approach:**
```jsx
// CORRECT: Notify user about pre-filled data
{isPrefilled && (
  <VaAlert status="info" slim>
    <p>We've prefilled your email address from your VA.gov profile.</p>
  </VaAlert>
)}
<VaTextInput label="Email address" value={email} />
```

### ❌ Anti-Pattern 4: Validating on Every Keystroke

```jsx
// WRONG: Validates during typing
<VaTextInput
  onVaInput={(e) => {
    setValue(e.detail.value);
    setError(validate(e.detail.value)); // Too disruptive
  }}
/>
```

**Correct approach:**
```jsx
// CORRECT: Validate on blur
<VaTextInput
  onVaInput={(e) => setValue(e.detail.value)}
  onBlur={() => setError(validate(email))}
/>
```

---

## Accessibility Considerations

### Screen Reader Support

✅ **Required:**
- Label always visible and associated with input
- Error messages announced via `aria-describedby`
- Purpose statement available to screen readers
- Required fields indicated with "(*Required)" text

### Keyboard Navigation

✅ **Required:**
- Tab to/from email field
- All standard input keys work
- Error messages don't trap focus

### Example with Full Accessibility

```jsx
<VaTextInput
  label="Email address"
  name="email"
  type="email"
  autocomplete="email"
  required
  error={error}
  hint="We'll send you updates about your application"
  messageAriaDescribedby="We may need to contact you if we have questions about your form"
/>
```

**Accessibility features:**
- Visible label ("Email address")
- Required indicator ("(*Required)" auto-added)
- Hint text for context
- messageAriaDescribedby for additional screen reader info
- Error announced when present

---

## Related Patterns

### Composition Patterns

**Email + Phone (Common):**
- `pattern.ask-users-for-email-address` (this pattern)
- `pattern.ask-users-for-phone-number`

**Full Contact Information:**
- Email address
- Phone number
- Mailing address

**Veteran vs. Filler:**
- Collect from both when they're different people
- Use clear labels distinguishing who each is for

### Related Components

- **`component.va-text-input`** - Core input component
- **`component.va-alert`** - Prefill notifications
- **Prefill component** - Profile data notification

### Related Cross-Cutting Skills

- **`cross-cutting.forms-template`** - Overall form structure and flow
- **`cross-cutting.accessibility`** - Baseline accessibility requirements
- **`cross-cutting.content-style`** - Label and error message writing

---

## Complete Example

```jsx
import { useState, useEffect } from 'react';
import { VaTextInput, VaAlert } from '@department-of-veterans-affairs/web-components/react-bindings';

function EmailAddressCollection({ userProfile }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isPrefilled, setIsPrefilled] = useState(false);

  // Pre-populate from profile
  useEffect(() => {
    if (userProfile?.email) {
      setEmail(userProfile.email);
      setIsPrefilled(true);
    }
  }, [userProfile]);

  // Validation
  const validateEmail = (value) => {
    if (!value) {
      return 'Enter your email address';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Enter a valid email address without spaces using this format: email@domain.com';
    }

    const invalidChars = /[^a-zA-Z0-9@._+-]/;
    if (invalidChars.test(value)) {
      return 'You entered a character we can't accept';
    }

    return '';
  };

  const handleBlur = () => {
    setError(validateEmail(email));
  };

  const handleInput = (e) => {
    setEmail(e.detail.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  return (
    <div>
      <h2>Contact information</h2>
      <p>We may use your contact information to contact you if we have questions about your application.</p>

      {isPrefilled && (
        <VaAlert status="info" slim>
          <p>We've prefilled your email address from your VA.gov profile.</p>
        </VaAlert>
      )}

      <VaTextInput
        label="Email address"
        name="email"
        type="email"
        autocomplete="email"
        required
        value={email}
        error={error}
        onVaInput={handleInput}
        onBlur={handleBlur}
        hint="We'll send you updates about your application"
        messageAriaDescribedby="We may need to contact you if we have questions about your form"
      />
    </div>
  );
}

export default EmailAddressCollection;
```

**This example demonstrates:**
- ✅ Pre-population from profile with notification
- ✅ Proper validation on blur
- ✅ Standard error messages
- ✅ Context and purpose statement
- ✅ Full accessibility support
- ✅ No email confirmation field

---

## Update Checklist

- [ ] **Guidance reviewed** - Check design.va.gov for pattern updates
- [ ] **Component dependencies updated** - Verify va-text-input API hasn't changed
- [ ] **Error messages current** - Confirm standard error text is up-to-date
- [ ] **Examples tested** - Validate code examples work
- [ ] **Version bumped** - Update version in metadata
- [ ] **`last-synced` updated** - Set to current date

---

## Additional Resources

- **Pattern Guidance:** https://design.va.gov/patterns/ask-users-for/email-address
- **Component:** https://design.va.gov/components/form/text-input
- **Related Patterns:** https://design.va.gov/patterns/ask-users-for/

---

**Pattern maintained by:** VA Design System Team
**Questions or issues?** Post in `#vfs-platform-support` or `#platform-design-system` on Slack
