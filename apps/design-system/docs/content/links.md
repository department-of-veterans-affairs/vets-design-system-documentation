---
title: Links
description: Guidelines for writing effective, accessible link text
sidebar_position: 4
---

# Links

Effective link text helps users understand where a link will take them and why they should click it. Good link text is essential for accessibility and usability.

## Writing Link Text

### Use Natural, Descriptive Language

Link text should clearly communicate the purpose and destination.

**Instead of:**
> Click here to learn more.

**Write:**
> Learn more about VA health care benefits.

### Avoid Generic Phrases

Don't use vague link text that requires surrounding context to understand.

| Avoid | Use instead |
|-------|-------------|
| Click here | [Specific action or destination] |
| Learn more | Learn more about [topic] |
| Read more | Read more about [topic] |
| Here | [Descriptive text] |

### Avoid Ability-Assumptive Words

Not all users interact with links the same way. Avoid words that assume physical abilities.

| Avoid | Use instead |
|-------|-------------|
| See our guide | Read our guide |
| View the form | Get the form |
| Watch the video | Video: [title] |
| Hear the announcement | Listen to the announcement |

## Examples

### Contextual Links

**Instead of:**
> For information about burial flags, [learn more].

**Write:**
> [Learn more about burial flags].

### Action Links

**Instead of:**
> [Click here] to apply for benefits.

**Write:**
> [Apply for VA health care benefits].

### Document Links

**Instead of:**
> Download the form [here].

**Write:**
> [Download VA Form 10-10EZ (PDF)].

## Accessibility Considerations

### Screen Reader Users

Screen reader users often navigate by jumping between links. Each link should make sense out of context.

**Test:** Read only the link text. Does it tell you where you'll go and why?

### External Links

Indicate when links leave VA.gov:

```html
<a href="https://external-site.gov">
  External resource name (opens in a new tab)
</a>
```

### Aria Labels

Use aria-labels when visual context is clear but programmatic context is not:

```html
<a href="/apply" aria-label="Apply for health care benefits">
  Apply now
</a>
```

### Link Spacing

- Avoid clustering links together—this makes selection difficult on touch devices
- Place links on separate lines when listing multiple options
- Maintain adequate spacing for users with motor impairments

## Formatting Standards

### Punctuation

- Don't punctuate link text (except question marks or colons if integral to the text)
- Place punctuation outside the link

**Correct:**
> Learn about [VA health care].

**Incorrect:**
> Learn about [VA health care.]

### Link Placement

- Position links on individual lines for scannability
- In paragraphs, place links at the end of sentences when possible
- Use link lists for multiple related links

## Privacy Guidelines

### Avoid PII in Links

Link text must not contain Personally Identifiable Information (PII) or Protected Health Information (PHI).

**Avoid:**
> View claim for [John Smith].

**Use:**
> View your claim.

### URL Parameters

URLs cannot pass PII/PHI as parameters. Generate generic identifiers instead:

**Avoid:**
> `/claims?name=john-smith&ssn=123-45-6789`

**Use:**
> `/claims?id=abc123`

## Best Practices

### Do

- Write descriptive link text that makes sense out of context
- Use consistent link text for the same destinations
- Indicate external links and new tabs
- Keep link text concise but meaningful

### Don't

- Use "click here" or "learn more" alone
- Include PII in link text
- Punctuate link text unnecessarily
- Cluster multiple links together without spacing
