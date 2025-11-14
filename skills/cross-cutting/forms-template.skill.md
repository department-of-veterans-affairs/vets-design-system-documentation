# Forms Template - Cross-Cutting Skill

:::skill-meta
id: cross-cutting.forms-template
version: 0.1.0
source-of-truth:
  guidance: https://design.va.gov/templates/forms/
last-synced: 2025-11-13
maturity: use-deployed

intent-classifiers: ["form", "forms", "form template", "form structure", "multi-step form", "form flow", "form design", "form pattern"]
applies-to: ["all-forms"]
skill-type: "cross-cutting"
:::end

---

## Skill Intent

**Forms template** provides overarching principles and structure for building VA forms. This skill applies to **all VA forms** regardless of specific content or purpose.

Use this skill when:
- Building any multi-step VA form
- Structuring form flow and page organization
- Implementing form-wide accessibility
- Applying consistent form patterns

**Trigger phrases:** "form", "multi-step form", "form flow", "form structure", "build a form", "form template"

---

## Five-Stage Form Flow

All VA forms follow this standardized structure:

### 1. How to Apply Page (Drupal)
**Purpose:** Landing page covering eligibility and expectations
**Location:** Drupal CMS (not in form application)
**Content:**
- Eligibility requirements
- What documents are needed
- How long the process takes
- Link to start application

### 2. Introduction Page
**Purpose:** Set expectations and provide application steps
**Required elements:**
- Form title and purpose
- Estimated time to complete
- List of information needed
- List of steps in the form
- Privacy statement
- OMB control number (if applicable)
- "Start application" button

**Example structure:**
```jsx
function IntroductionPage() {
  return (
    <div>
      <h1>Apply for [benefit name]</h1>

      <p>Estimated time to complete: 20 minutes</p>

      <h2>What you'll need</h2>
      <ul>
        <li>Personal information</li>
        <li>Contact information</li>
        <li>Military service history</li>
      </ul>

      <h2>Steps in this application</h2>
      <ol>
        <li>Personal information</li>
        <li>Contact details</li>
        <li>Service history</li>
        <li>Review and submit</li>
      </ol>

      <VaButton text="Start application" onClick={startApplication} big />
    </div>
  );
}
```

### 3. Step Form Pages
**Purpose:** Collect information following established patterns
**Principles:**
- **One thing per page** (reduce cognitive load)
- Progressive disclosure (show only what's needed)
- Clear progress indication
- Automatic progress saving

**Structure:**
```jsx
function FormStep({ stepNumber, totalSteps }) {
  return (
    <div>
      {/* Progress indicator */}
      <VaSegmentedProgressBar current={stepNumber} total={totalSteps} />

      {/* Step content - ONE THING */}
      <h2>Step title (focused question)</h2>
      <p>Additional context if needed</p>

      {/* Form fields */}
      <FormFields />

      {/* Navigation */}
      <VaButton text="Back" back />
      <VaButton text="Continue" continue />
    </div>
  );
}
```

### 4. Review Page
**Purpose:** Allow users to verify and edit all information
**Required elements:**
- All collected information displayed
- Edit links for each section
- Accordion pattern for organization
- Privacy statement reminder
- Submit button

**Example:**
```jsx
function ReviewPage({ formData, onEdit }) {
  return (
    <div>
      <h1>Review your application</h1>
      <p>Review the information below. If you need to make changes, select Edit.</p>

      <VaAccordion>
        <VaAccordionItem header="Personal information">
          <div>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Date of birth:</strong> {formData.dob}</p>
            <VaButton text="Edit" secondary onClick={() => onEdit('personal')} />
          </div>
        </VaAccordionItem>

        <VaAccordionItem header="Contact information">
          {/* Contact info display with edit button */}
        </VaAccordionItem>
      </VaAccordion>

      <VaButton text="Submit application" submit />
    </div>
  );
}
```

### 5. Confirmation Page
**Purpose:** Set post-submission expectations
**Required elements:**
- Success message
- Confirmation/tracking number
- What happens next
- Timeline for response
- What to do if there are questions
- Print option

**Example:**
```jsx
function ConfirmationPage({ confirmationNumber }) {
  return (
    <div>
      <VaAlert status="success">
        <h2>You've submitted your application</h2>
      </VaAlert>

      <p><strong>Confirmation number:</strong> {confirmationNumber}</p>
      <p>Save this number for your records.</p>

      <h2>What happens next</h2>
      <ul>
        <li>We'll review your application</li>
        <li>We may contact you if we need more information</li>
        <li>You'll get a decision within 30 days</li>
      </ul>

      <h2>How to check your application status</h2>
      <p>Sign in to your VA.gov account...</p>

      <VaButton text="Print this page" onClick={window.print} />
    </div>
  );
}
```

---

## Five Core Design Principles

### 1. One Thing Per Page

**Principle:** Reduce cognitive load by focusing on single questions or topics per page.

✅ **Good:**
```jsx
// Page 1: Just name
<VaTextInput label="What's your name?" />

// Page 2: Just date of birth
<VaMemorableDate label="What's your date of birth?" />
```

❌ **Bad:**
```jsx
// One page: Too much information
<VaTextInput label="First name" />
<VaTextInput label="Middle name" />
<VaTextInput label="Last name" />
<VaTextInput label="Suffix" />
<VaMemorableDate label="Date of birth" />
<VaTextInput label="Social Security number" />
```

**Exceptions:**
- Related fields that must be together (street address components)
- Contact information (email + phone on same page)
- Short forms (under 5 fields total)

### 2. Progressive Disclosure

**Principle:** Show only necessary content per step.

**Example with conditional questions:**
```jsx
function ServiceHistoryStep() {
  const [hasDeployments, setHasDeployments] = useState(null);

  return (
    <div>
      <VaRadio
        label="Did you deploy while in service?"
        onVaValueChange={(e) => setHasDeployments(e.detail.value === 'yes')}
      >
        <VaRadioOption label="Yes" value="yes" />
        <VaRadioOption label="No" value="no" />
      </VaRadio>

      {/* Only show if user answered yes */}
      {hasDeployments && (
        <VaTextInput
          label="When did you deploy?"
          hint="Enter month and year"
        />
      )}
    </div>
  );
}
```

### 3. Clear Progress Indication

**Principle:** Users should always know where they are in the process.

**Use va-segmented-progress-bar:**
```jsx
<VaSegmentedProgressBar
  current={3}
  total={5}
  label="Personal information"
  heading-text="Step 3 of 5: Personal information"
/>
```

**Guidelines:**
- Show on every form step page
- Update dynamically as user progresses
- Include descriptive label for current step
- Don't show on intro, review, or confirmation pages

### 4. Automatic Progress Saving

**Principle:** Prevent data loss with auto-save.

**Implementation:**
```jsx
import { useEffect } from 'react';
import { saveFormProgress } from './api';

function FormStep({ formData, stepId }) {
  useEffect(() => {
    // Auto-save on data change
    const timer = setTimeout(() => {
      saveFormProgress(stepId, formData);
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData, stepId]);

  return (
    <div>
      {/* Form fields */}
      <p className="save-status">Your progress is automatically saved</p>
    </div>
  );
}
```

**Features:**
- Save on field blur or after delay
- Show "saved" indicator
- Restore on return to form
- Works for authenticated users

### 5. Plain Language

**Principle:** Avoid government jargon, write conversationally.

✅ **Good:**
```
"What's your phone number?"
"We'll send you updates about your application"
"You have 3 dependents"
```

❌ **Bad:**
```
"Provide telephonic contact information"
"Updates will be disseminated via electronic correspondence"
"Total number of claimed dependents: 3"
```

**Guidelines:**
- Use "you" and "your"
- Active voice, not passive
- Short sentences and paragraphs
- Explain context for questions
- Follow VA word list

---

## Accessibility Requirements

### Critical for Veterans

**~25% of Veterans have service-connected disabilities.** Forms must be fully accessible.

### Required Features

**1. Labels for Every Field**
```jsx
// ✅ CORRECT: Visible label
<VaTextInput label="First name" name="first-name" />

// ❌ WRONG: Placeholder only
<VaTextInput placeholder="First name" name="first-name" />
```

**2. Keyboard Navigation**
- Tab through all fields and buttons
- Enter to submit forms
- Arrow keys for radio/checkbox groups
- Escape to close modals

**3. Focus Management**
```jsx
function navigateToNextStep(nextStepRef) {
  // Move focus to top of next page
  nextStepRef.current.focus();
  // Or to first error if validation fails
  firstErrorRef.current.focus();
}
```

**4. Error Message Association**
```jsx
<VaTextInput
  label="Email"
  error="Enter a valid email address"
  // Error auto-linked via aria-describedby
/>
```

**5. Screen Reader Support**
- Announce form step changes
- Announce validation errors
- Announce progress updates
- Describe purpose of sections

### Accessibility Annotations

**Designers must document:**
- Semantic HTML requirements (headings, lists, etc.)
- Heading levels (h1, h2, h3)
- Interaction requirements
- Focus order
- ARIA labels when needed

---

## Component Usage Guidelines

### Input Components

**Common form fields:**
- **va-text-input** - Text, email, phone, numeric
- **va-select** - Dropdown selections (many options)
- **va-radio** - Single choice (few options)
- **va-checkbox** - Multiple selections
- **va-memorable-date** - Birth dates, marriage dates
- **va-date** - Any date

**Selection criteria:**
- Few options (2-5) → va-radio
- Many options (10+) → va-select
- Multiple selections → va-checkbox
- Memorable dates → va-memorable-date
- Any date → va-date

### Navigation Components

**Button pair for form steps:**
```jsx
<div className="button-group">
  <VaButton back />
  <VaButton continue />
</div>
```

**Submit button on review page:**
```jsx
<VaButton text="Submit application" submit />
```

### Supporting Components

**va-additional-info** - Expandable help:
```jsx
<VaAdditionalInfo trigger="What if I don't know my SSN?">
  <p>You can still apply. We'll help you find it later.</p>
</VaAdditionalInfo>
```

**va-alert** - Important messages:
```jsx
<VaAlert status="warning">
  <p>You must complete this section before continuing</p>
</VaAlert>
```

---

## Validation Patterns

### When to Validate

**Three validation moments:**

1. **On blur** - For individual fields
2. **On continue** - Before moving to next step
3. **On submit** - Final check on review page

### Validation Flow

```jsx
function FormStep({ onContinue }) {
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};

    // Check each field
    if (!formData.firstName) {
      newErrors.firstName = 'Enter your first name';
    }
    if (!formData.email || !isValidEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Move focus to first error
      focusFirstError();
      return false;
    }

    return true;
  };

  const handleContinue = () => {
    if (validateStep()) {
      onContinue();
    }
  };

  return (
    <div>
      <VaTextInput
        label="First name"
        error={errors.firstName}
        // ... other props
      />

      <VaTextInput
        label="Email"
        type="email"
        error={errors.email}
        // ... other props
      />

      <VaButton text="Continue" onClick={handleContinue} continue />
    </div>
  );
}
```

### Error Handling

**Required:**
- Specific, actionable error messages
- Focus moved to first error
- All errors shown (not just first one)
- Errors clear when user corrects them

**Example error summary:**
```jsx
{Object.keys(errors).length > 0 && (
  <VaAlert status="error">
    <h2>We need more information</h2>
    <ul>
      {Object.values(errors).map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  </VaAlert>
)}
```

---

## Implementation Framework

### VA Forms Library

**Use the VA Forms Library for:**
- Standardized form functionality
- Built-in accessibility features
- Consistent user experience
- Pre-built routing logic
- Automatic progress saving

**Benefits:**
- Faster development
- Fewer accessibility issues
- Consistent patterns across VA
- Maintained by platform team

**Don't build from scratch** - leverage existing library unless there's a compelling reason.

---

## Anti-Patterns to Avoid

### ❌ Anti-Pattern 1: Multiple Topics Per Page

```jsx
// WRONG: Too much on one page
function BadFormPage() {
  return (
    <div>
      <h2>Tell us about yourself</h2>
      <VaTextInput label="Name" />
      <VaMemorableDate label="Date of birth" />
      <VaTextInput label="SSN" />
      <VaTextInput label="Email" />
      <VaTextInput label="Phone" />
      <VaTextInput label="Street address" />
      <VaTextInput label="City" />
      <VaSelect label="State" />
    </div>
  );
}
```

**Fix:** Break into multiple focused pages (one thing per page)

### ❌ Anti-Pattern 2: No Progress Indication

```jsx
// WRONG: User doesn't know where they are
function BadFormStep() {
  return (
    <div>
      <h2>Personal information</h2>
      {/* No progress bar */}
      <VaTextInput label="Name" />
    </div>
  );
}
```

**Fix:** Add progress bar to every step

### ❌ Anti-Pattern 3: Disabled Submit Until Perfect

```jsx
// WRONG: Disabled button hides what's wrong
<VaButton
  text="Continue"
  disabled={!isFormValid}
  continue
/>
```

**Fix:** Allow click, then show specific validation errors

### ❌ Anti-Pattern 4: No Auto-Save

```jsx
// WRONG: User loses work if they navigate away
function BadForm() {
  const [formData, setFormData] = useState({});
  // No auto-save logic
  return <FormFields />;
}
```

**Fix:** Implement auto-save for authenticated users

### ❌ Anti-Pattern 5: Technical Error Messages

```jsx
// WRONG: Jargon and technical details
"Error 500: Internal server error during POST request"
```

**Fix:** Plain language explanation
```jsx
"We're sorry. Something went wrong on our end. Please try again later."
```

---

## Complete Form Example

```jsx
import { useState } from 'react';
import {
  VaButton,
  VaTextInput,
  VaSegmentedProgressBar,
  VaAlert
} from '@department-of-veterans-affairs/web-components/react-bindings';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const totalSteps = 3;

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'Enter your first name';
      if (!formData.lastName) newErrors.lastName = 'Enter your last name';
    }

    if (step === 2) {
      if (!formData.email) {
        newErrors.email = 'Enter your email address';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  return (
    <div>
      {currentStep <= totalSteps && (
        <VaSegmentedProgressBar
          current={currentStep}
          total={totalSteps}
          label={`Step ${currentStep} of ${totalSteps}`}
        />
      )}

      {currentStep === 1 && (
        <div>
          <h2>What's your name?</h2>

          <VaTextInput
            label="First name"
            name="first-name"
            required
            value={formData.firstName}
            error={errors.firstName}
            onVaInput={(e) => setFormData({...formData, firstName: e.detail.value})}
          />

          <VaTextInput
            label="Last name"
            name="last-name"
            required
            value={formData.lastName}
            error={errors.lastName}
            onVaInput={(e) => setFormData({...formData, lastName: e.detail.value})}
          />

          <VaButton text="Continue" onClick={handleContinue} continue />
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2>Contact information</h2>
          <p>We'll use this to send you updates about your application.</p>

          <VaTextInput
            label="Email address"
            name="email"
            type="email"
            autocomplete="email"
            required
            value={formData.email}
            error={errors.email}
            onVaInput={(e) => setFormData({...formData, email: e.detail.value})}
          />

          <div className="button-group">
            <VaButton text="Back" onClick={handleBack} back />
            <VaButton text="Continue" onClick={handleContinue} continue />
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h1>Review your information</h1>

          <h2>Personal information</h2>
          <p>Name: {formData.firstName} {formData.lastName}</p>

          <h2>Contact information</h2>
          <p>Email: {formData.email}</p>

          <div className="button-group">
            <VaButton text="Back" onClick={handleBack} back />
            <VaButton text="Submit" submit />
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## Related Skills

### Component Skills (Commonly Used in Forms)
- `component.va-text-input`
- `component.va-button`
- `component.va-radio`
- `component.va-checkbox`
- `component.va-select`
- `component.va-memorable-date`
- `component.va-alert`
- `component.va-additional-info`

### Pattern Skills
- `pattern.ask-users-for-email-address`
- `pattern.ask-users-for-phone-number`
- `pattern.ask-users-for-addresses`

### Cross-Cutting Skills
- `cross-cutting.accessibility` - Baseline a11y requirements
- `cross-cutting.content-style` - Writing guidelines

---

## Update Checklist

- [ ] **Template guidance reviewed** - Check design.va.gov for updates
- [ ] **Component list current** - Verify all form components included
- [ ] **Examples tested** - Code examples work with current components
- [ ] **Accessibility standards updated** - WCAG version current
- [ ] **Version bumped** - Semantic versioning
- [ ] **`last-synced` updated** - Current date

---

## Additional Resources

- **Forms Template:** https://design.va.gov/templates/forms/
- **Form Patterns:** https://design.va.gov/patterns/
- **VA Forms Library:** (Internal VA documentation)
- **WCAG 2.2 Guidelines:** https://www.w3.org/WAI/WCAG22/quickref/

---

**Skill maintained by:** VA Design System Team
**Questions or issues?** Post in `#vfs-platform-support` or `#platform-design-system` on Slack
