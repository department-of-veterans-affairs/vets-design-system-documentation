---
title: Error Messages
description: Guidelines for writing clear, helpful error and alert messages
sidebar_position: 3
---

# Error Messages

Error messages should be clear, direct, and have a call to action that tells the person what to do next. Good error messages help users recover and continue their task.

## Types of Messages

### System Messages

Alert users of important system-related issues or statuses initiated by the system itself, not user actions.

**Examples:**
- Scheduled maintenance notifications
- System outages
- Service disruptions

### Engagement Messages

Recommend that the user enter or update data. Can originate from either the system or another person.

**Examples:**
- Profile completion prompts
- Information update reminders
- Action recommendations

### Access Messages

Appear when users attempt to access unavailable items, such as deleted records or restricted information.

**Examples:**
- Page not found (404)
- Permission denied
- Content no longer available

### Feedback Messages

Appear as a response to a user's actions, covering create, read, update, and delete operations.

**Examples:**
- Form submission confirmation
- Save successful
- Delete confirmation

## Writing Error Messages

### Step 1: Explain the Problem

Use an alert component with a clear header. Keep titles to **50 characters maximum** (including spaces).

**If VA caused the error:**
> We're sorry. We can't process your request right now.

**If the user caused the error:**
Don't say "we're sorry," but don't blame the user either.

> We couldn't find that page.

### Step 2: Provide Recovery Steps

Make recovery steps clear, specific, and actionable.

**Vague (avoid):**
> An error occurred. Please try again.

**Specific (prefer):**
> We couldn't save your form. Check your internet connection and try saving again.

## Error Message Structure

```
[Alert heading - what went wrong]
[Body text - what they can do about it]
[Action button or link - how to proceed]
```

### Example

```html
<va-alert status="error">
  <h2 slot="headline">We can't load your saved application</h2>
  <p>
    We're having trouble loading your information. Please try again in a few minutes.
  </p>
  <p>
    If this problem continues, call us at <va-telephone contact="8006982411"></va-telephone>.
    We're here 24/7.
  </p>
</va-alert>
```

## Common Contact Information

Include appropriate contact options as secondary recovery steps:

| Type | Contact | Hours |
|------|---------|-------|
| Technical support | MyVA411: 800-698-2411 | 24/7 |
| Benefits questions | 800-827-1000 | M-F, 8am-9pm ET |
| Education benefits | GI Bill hotline: 888-442-4551 | M-F, 8am-7pm ET |
| Health benefits | 877-222-8387 | M-F, 8am-8pm ET |

## Best Practices

### Do

- Keep alert titles to approximately 50 characters
- Use neutral, non-blaming language
- Provide specific, actionable recovery steps
- Include contact options when appropriate
- Test error messages with users

### Don't

- Blame the user for errors
- Use technical jargon or error codes alone
- Leave users without a next step
- Use vague messages like "Invalid input"
- Show raw system errors

## Examples

### Form Validation Error

**Instead of:**
> Invalid file type

**Write:**
> We can't accept this file type. Upload a PDF, JPG, or PNG file.

### System Error

**Instead of:**
> Error 500: Internal Server Error

**Write:**
> We're sorry. Something went wrong on our end. Please try again in a few minutes. If this keeps happening, call us at 800-698-2411.

### Access Error

**Instead of:**
> 403 Forbidden

**Write:**
> You don't have access to this page. If you think this is a mistake, call us at 800-698-2411.

## Coordinating with Support

When creating new error messages with contact options, coordinate with the Veteran Support team. Document:

- What triggers the error
- Recovery steps for users
- Troubleshooting guidance for support staff
