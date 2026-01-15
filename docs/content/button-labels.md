---
title: Button Labels
description: Guidelines for writing clear, action-oriented button text
sidebar_position: 5
---

# Button Labels

Buttons are important calls to action. Clear, action-oriented button labels help users understand what will happen when they click.

## Writing Standards

### Use Sentence Case

Capitalize only the first word and proper nouns.

**Correct:**
> Create an account

**Incorrect:**
> Create An Account

### Keep Labels Brief

Aim for **35 characters maximum** (including spaces). Shorter is better.

| Too long | Better |
|----------|--------|
| Submit your application for review | Submit application |
| Continue to the next step | Continue |
| Go back to the previous page | Back |

### Use Action Words

Start with a verb that clearly signals what will happen.

**Good examples:**
- Create an account
- Submit application
- Download form
- Sign in
- Continue
- Back

**Avoid:**
- Get started (vague)
- Complaint filing (noun-based)
- Click here (unhelpful)

## Common Button Labels

### Navigation

| Action | Label |
|--------|-------|
| Move forward | Continue |
| Move backward | Back |
| Finish a process | Submit |
| Leave without saving | Cancel |

### Account Actions

| Action | Label |
|--------|-------|
| Create new account | Create an account |
| Access existing account | Sign in |
| Leave account | Sign out |

### Form Actions

| Action | Label |
|--------|-------|
| Send form | Submit |
| Store progress | Save |
| Save and exit | Save and continue later |
| Add item to list | Add another [item] |
| Remove item | Remove |

### File Actions

| Action | Label |
|--------|-------|
| Get a file | Download |
| Send a file | Upload |
| View a document | View [document name] |

## Button vs. Link

**Use buttons for:**
- Primary actions (Submit, Save, Continue)
- Actions that change data
- Form submissions
- Important calls to action

**Use links for:**
- Navigation between pages
- Secondary actions
- External resources
- Actions that don't change data

## Accessibility

### Unique Labels

Each button on a page should have a unique, descriptive label. If you have multiple "Submit" buttons, use aria-labels to differentiate:

```html
<button type="submit" aria-label="Submit health care application">
  Submit
</button>
```

### Descriptive Text

Button text should describe the action, not just say "Submit" or "Continue."

**When context is unclear:**
> Submit application

**When context is clear:**
> Submit

### Disabled Buttons

When a button is disabled, explain why:

```html
<button disabled aria-describedby="submit-help">Submit</button>
<p id="submit-help">Complete all required fields to submit.</p>
```

## Privacy Considerations

Button text should avoid Personally Identifiable Information (PII) or Protected Health Information (PHI) whenever possible. If PII/PHI is unavoidable, click tracking becomes impossible for analytics compliance.

**Avoid:**
> Submit John Smith's application

**Use:**
> Submit your application

## Best Practices

### Do

- Start with an action verb
- Keep labels short and scannable
- Use sentence case
- Make the action clear and specific
- Test with users to ensure clarity

### Don't

- Use vague labels like "Go" or "Click here"
- Use noun-based phrases
- Include punctuation
- Use all caps
- Make buttons look like links or vice versa
