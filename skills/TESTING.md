# Testing VA Text Input Skill

This document demonstrates how to test the `va-text-input` skill with Claude Code.

## Test Scenario 1: Basic Form Creation

### Prompt:
```
Using the va-text-input skill guidance, create a simple contact form with:
- Full name (required)
- Email (required, with validation)
- Phone number (optional)

Use React with proper error handling.
```

### Expected Output:

The skill should guide Claude Code to generate code similar to:

```jsx
import React, { useState } from 'react';
import { VaTextInput } from '@department-of-veterans-affairs/web-components/react-bindings';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleInput = (field) => (e) => {
    setFormData({ ...formData, [field]: e.detail.value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Enter your full name';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Enter your email address';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter an email address in this format: name@example.com';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VaTextInput
        label="Full name"
        name="full-name"
        required
        value={formData.fullName}
        error={errors.fullName}
        onVaInput={handleInput('fullName')}
        messageAriaDescribedby="Enter your first and last name"
      />

      <VaTextInput
        label="Email address"
        name="email"
        type="email"
        autocomplete="email"
        required
        value={formData.email}
        error={errors.email}
        onVaInput={handleInput('email')}
        hint="We'll send a confirmation to this address"
      />

      <VaTextInput
        label="Phone number"
        name="phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        value={formData.phone}
        onVaInput={handleInput('phone')}
        hint="Include area code"
        messageAriaDescribedby="We'll only call if we have questions about your request"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
```

### ✅ Verification Checklist

The generated code should demonstrate:
- [x] All required props present (label, name)
- [x] Proper `required` prop usage
- [x] Correct `type` and `inputmode` for email and phone
- [x] `autocomplete` attributes for browser assistance
- [x] Error handling with specific, actionable messages
- [x] `vaInput` event (not native input event)
- [x] Accessibility via `messageAriaDescribedby`
- [x] NO `enableAnalytics` on PII fields
- [x] Proper hint text usage

## Test Scenario 2: Currency Input with Validation

### Prompt:
```
Using the va-text-input skill, create a payment amount input field
that accepts currency with proper validation for amounts between $50 and $5000.
```

### Expected Output:

```jsx
import React, { useState } from 'react';
import { VaTextInput } from '@department-of-veterans-affairs/web-components/react-bindings';

function PaymentInput() {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    const numAmount = parseFloat(amount);

    if (!amount) {
      setError('Enter a payment amount');
      return;
    }

    if (isNaN(numAmount)) {
      setError('Enter a valid dollar amount');
      return;
    }

    if (numAmount < 50) {
      setError('Amount must be at least $50.00');
      return;
    }

    if (numAmount > 5000) {
      setError('Amount cannot exceed $5,000.00');
      return;
    }

    // Check for proper decimal places
    if (!/^\d+(\.\d{2})?$/.test(amount)) {
      setError('Enter amount with exactly 2 decimal places (e.g., 125.00)');
      return;
    }

    setError('');
  };

  return (
    <VaTextInput
      label="Payment amount"
      name="payment-amount"
      currency
      required
      value={amount}
      error={error}
      onVaInput={(e) => setAmount(e.detail.value)}
      onBlur={handleBlur}
      hint="Enter amount in dollars and cents"
      messageAriaDescribedby="Minimum payment is $50.00, maximum is $5,000.00"
    />
  );
}

export default PaymentInput;
```

### ✅ Verification Checklist

The generated code should demonstrate:
- [x] `currency` prop usage (adds "$" prefix)
- [x] Validation for proper decimal format
- [x] Min/max range validation with clear error messages
- [x] Blur event handling for validation timing
- [x] Helpful hint text
- [x] Accessible description of limits

## Test Scenario 3: Avoiding Anti-Patterns

### Prompt:
```
Using the va-text-input skill, create a Social Security number input.
Make sure to avoid common pitfalls and follow privacy best practices.
```

### Expected Output:

The skill should guide Claude Code to AVOID these anti-patterns:

❌ **What NOT to generate:**
```jsx
// WRONG: Tracks PII in analytics
<VaTextInput
  label="SSN"
  name="ssn"
  enableAnalytics  // ❌ DON'T DO THIS
  placeholder="Enter SSN"  // ❌ No placeholder-only
/>
```

✅ **What TO generate:**
```jsx
import React, { useState } from 'react';
import { VaTextInput } from '@department-of-veterans-affairs/web-components/react-bindings';

function SSNInput() {
  const [ssn, setSSN] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (!ssn) {
      setError('Enter your Social Security number');
      return;
    }

    // Validate 9 digits
    if (!/^[0-9]{9}$/.test(ssn)) {
      setError('Enter a 9-digit Social Security number with no dashes or spaces');
      return;
    }

    setError('');
  };

  return (
    <VaTextInput
      label="Social Security number"
      name="ssn"
      required
      value={ssn}
      error={error}
      errorHasPii  // ✅ Privacy protection for error messages
      pattern="^[0-9]{9}$"
      inputmode="numeric"
      maxlength={9}
      onVaInput={(e) => setSSN(e.detail.value)}
      onBlur={handleBlur}
      messageAriaDescribedby="Enter 9 digits with no dashes or spaces. We use this to verify your identity and keep your information private."
    />
  );
}

export default SSNInput;
```

### ✅ Verification Checklist

The generated code should demonstrate:
- [x] NO `enableAnalytics` prop (PII protection)
- [x] `errorHasPii` prop used for privacy
- [x] Clear label (not placeholder-only)
- [x] Proper pattern and inputmode for numeric input
- [x] Maxlength set to prevent over-entry
- [x] Privacy statement in aria description
- [x] Specific, actionable error messages

## Test Scenario 4: Character Count

### Prompt:
```
Using the va-text-input skill, create a description field limited to 200 characters
with a live character counter.
```

### Expected Output:

```jsx
import React, { useState } from 'react';
import { VaTextInput } from '@department-of-veterans-affairs/web-components/react-bindings';

function DescriptionInput() {
  const [description, setDescription] = useState('');

  return (
    <VaTextInput
      label="Brief description"
      name="description"
      maxlength={200}
      charcount
      value={description}
      onVaInput={(e) => setDescription(e.detail.value)}
      hint="Provide a short summary of your request"
      messageAriaDescribedby="This helps us route your request to the right team"
    />
  );
}

export default DescriptionInput;
```

### ✅ Verification Checklist

The generated code should demonstrate:
- [x] `maxlength` prop set
- [x] `charcount` prop enabled
- [x] Component auto-displays "X characters left"
- [x] Screen reader announcements (handled by component)
- [x] aria-invalid set automatically when limit exceeded

## Testing with Claude Code

### Step 1: Import the Skill

In Claude Code, you can reference the skill file:

```
Read the skill file at skills/components/va-text-input.skill.md
```

Or import the JSON directly if Claude Code supports skill import:

```
Import skill: skills/components/va-text-input.skill.json
```

### Step 2: Give a Task

Provide one of the test scenarios above:

```
Using the va-text-input skill guidance, create a simple contact form with:
- Full name (required)
- Email (required, with validation)
- Phone number (optional)

Use React with proper error handling.
```

### Step 3: Verify Output

Check that Claude Code's output:
1. Uses correct props from the skill's API reference
2. Follows accessibility requirements
3. Implements proper error handling
4. Avoids documented anti-patterns
5. Includes privacy protections for PII

### Step 4: Iterate

If the output is missing something, provide feedback:

```
The generated code should use the `messageAriaDescribedby` prop instead of
aria-describedby according to the skill guidance (shadow DOM limitation).
```

## Success Metrics

The skill is working correctly if Claude Code consistently:
- ✅ Generates accessible code (proper labels, ARIA attributes)
- ✅ Uses correct props and event handlers
- ✅ Avoids anti-patterns (placeholder-only, PII tracking)
- ✅ Includes privacy protections
- ✅ Provides specific, actionable error messages
- ✅ Uses appropriate input types and inputmodes
- ✅ Implements proper validation patterns

## Known Limitations

The skill currently covers:
- ✅ Web Component and React usage
- ✅ All props, events, and slots
- ✅ Accessibility requirements
- ✅ Common patterns and anti-patterns

Future improvements:
- [ ] Angular examples
- [ ] Vue examples
- [ ] Advanced composition patterns
- [ ] Integration with form validation libraries

## Feedback

If you discover:
- Missing examples
- Outdated information
- New anti-patterns
- Unclear guidance

Please open an issue in the [vets-design-system-documentation repo](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues) with:
- Skill ID: `component.va-text-input`
- Version: `0.1.0`
- Description of the issue
- Suggested improvement

---

**Last Updated:** 2025-11-13
