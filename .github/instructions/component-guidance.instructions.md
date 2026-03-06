---
applyTo: "src/_components/**"
---

# Component guidance review standards

When reviewing PRs that modify files in `src/_components/`, apply these content standards to the markdown prose only. **Never flag or suggest changes to YAML front matter** (content between `---` lines at the top of a file).

## Abbreviations and acronyms

- Spell out on first use, followed by the abbreviation in parentheses. Example: "Department of Veterans Affairs (VA)".
- These don't need to be spelled out: VA, VADS, API, URL, CSS, HTML, UI, UX, CTA.
- **e.g. and i.e. are acceptable** in VADS documentation (exception to the VA.gov Content Style Guide). Always include a comma after each (e.g., like this).

## Capitalization

- Use sentence case for headings and body text.
- Component, pattern, and template names use title case when used as proper nouns. Example: "the Alert component", "the Help users to... pattern".
- Don't capitalize "component", "pattern", or "template" when used generically. Example: "this component", "a pattern for..."
- VA and all VA office/program abbreviations are always all caps.

## Numbers

- Use numerals for all numbers, including 1 to 10.
- Spell out "one" in expressions like "one-on-one" and "one of the reasons".
- Spell out ordinal numbers up to "tenth" unless part of a series or range.
- Don't start a sentence with a numeral — spell it out or rewrite the sentence.
- Always use numerals in technical contexts (version numbers, pixel values, percentages, measurements).

## Punctuation

- Use the Oxford comma in lists of three or more items.
- Use straight quotation marks, not curly/smart quotes.
- Don't use ampersands (&) in place of "and" unless part of a proper name.
- Avoid exclamation points.

## Voice and tone

- Use active voice. Flag passive constructions and suggest active alternatives.
- Use contractions (it's, don't, you'll) — they make content friendlier and more readable.
- Write for designers and developers, but keep language plain and direct.
- Avoid jargon, buzzwords, and overly formal phrasing.
- "User" is acceptable in VADS documentation when referring to user research, user experience, and similar contexts.

## Sentence length and structure

- Flag sentences longer than 25 words and suggest breaking them up.
- Prefer simple sentences over complex compound structures.
- Lead with the main point — don't bury it in a clause.

## Branded names

- Avoid or minimize references to VA program or product brand names when a plain-language alternative exists.
- Don't use branded names as verbs. Example: don't write "Veterans used MyHealtheVet to..." — write "Veterans used the portal to...".

## Links

- Link text should describe the destination, not use generic phrases like "click here" or "learn more" alone.
- When referencing a component, pattern, or template by name, link to its documentation page on the first reference on the page.
- Use the full name for multi-step names.

## Consistency within a page

- Use the component's name in the same case throughout the page. Don't mix "Search Input" and "search input" on the same page.
- Be consistent with singular vs. plural within a bullet — don't mix "a user" and "users" in the same sentence.

## Bullet list formatting

- All items in a list must be grammatically parallel — all imperative verbs, all noun phrases, or all bold lead-ins. Don't mix forms within a list.
- Introduce bullet lists with a complete sentence, not a fragment ending in a colon. Write "Teams have three key responsibilities." not "Teams need to:".
- Don't use bold formatting inside link text. Write `[large modals]` not `[**large** modals]`.

## Referencing components, patterns, and templates

- Use title case for component, pattern, and template names.
- Link to the VADS documentation page on first reference.
- Suggest an "Also known as" section when a component has common alternate names (e.g., Search Input is also called search box or search bar).
