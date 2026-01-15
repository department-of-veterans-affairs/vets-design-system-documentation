---
title: Typography
description: Font families, sizes, weights, and line heights for VA.gov
sidebar_position: 3
---

# Typography

Typography in the VA.gov Design System is optimized for readability and accessibility across all devices.

## Font Families

### Source Sans Pro (Primary)

```css
.vads-u-font-family--sans
```

Source Sans Pro is the primary sans-serif typeface, designed for UI legibility. It's open-source with excellent rendering across devices and browsers, supporting multiple languages including Western European, Vietnamese, Pinyin, and Navajo.

### Bitter (Serif)

```css
.vads-u-font-family--serif
```

Bitter is a slab serif designed specifically for screen reading. It features large x-heights and manual spacing with minimal kerning pairs, maintaining consistent stroke weight for comfortable paragraph reading.

### Roboto Mono (Monospace)

```css
.vads-u-font-family--mono
```

Roboto Mono is used for code and technical content. It clearly distinguishes similar characters (0/O, 1/l/I) for clarity.

**Use sparingly.** Avoid using monospace for:
- Phone numbers
- ZIP codes
- Dates

## Font Sizes

| Level | Size | Usage |
|-------|------|-------|
| H1 | 40px | Primary page heading |
| H2 | 32px | Secondary heading |
| H3 | 20px | Tertiary heading |
| H4 | 17px | Fourth-level heading |
| H5 | 15px | Fifth-level heading |
| H6 | 15px | Sixth-level heading |
| Body Large | 20px | Prominent body text |
| Body Medium | 17px | Standard paragraph text |
| Body Small | 15px | Secondary body text |
| Eyebrow | 16px | Label above H1 (experimental) |

## Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| Line Height 1 | 1.0 | Buttons, navigation, single-line text |
| Line Height 2 | 1.2 | Headings, lead text (1-2 sentences) |
| Line Height 3 | 1.35 | Short text, captions, limited measure |
| Line Height 4 | 1.5 | Short paragraphs (1-2), narrow widths |
| Line Height 5 | 1.62 | Extended reading text |
| Line Height 6 | 1.75 | Distinguished short text, pullquotes |

## Font Weights

- **Regular (400)** - Standard weight for body text
- **Bold (700)** - Emphasis and heading hierarchy

## Heading Guidelines

### Do

- Use semantic HTML headings in proper nesting order (H1 → H2 → H3)
- Apply font-size utility classes to adjust appearance without breaking structure
- Use headings as organizational elements to structure content

### Don't

- Skip heading levels (e.g., H1 directly to H3)
- Use improper nesting purely for visual styling
- Turn headings into links in normal page content

:::note
Links in headers are acceptable only in Card components where space constraints justify combining elements.
:::

## Body Text

### Intro Paragraphs

Use the `va-introtext` class for introductory paragraphs at the top of pages.

```html
<p class="va-introtext">
  This introductory text helps Veterans understand what they'll find on this page.
</p>
```

### Line Length

Maximum line length should be **72ex** (`vads-size-line-length-5`) for optimal readability.

## Accessibility

- Always use semantic headings, logically nested in the proper order
- Proper heading hierarchy supports screen readers and assistive technologies
- Avoid using headers as links, as this creates dual functionality that can confuse users and presents keyboard navigation challenges
- Ensure sufficient color contrast for all text (4.5:1 for normal text, 3:1 for large text)

## Utility Classes

### Font Family

```css
.vads-u-font-family--sans
.vads-u-font-family--serif
.vads-u-font-family--mono
```

### Font Size

```css
.vads-u-font-size--sm    /* 15px */
.vads-u-font-size--base  /* 17px */
.vads-u-font-size--lg    /* 20px */
.vads-u-font-size--xl    /* 32px */
.vads-u-font-size--2xl   /* 40px */
```

### Font Weight

```css
.vads-u-font-weight--normal  /* 400 */
.vads-u-font-weight--bold    /* 700 */
```

### Line Height

```css
.vads-u-line-height--1  /* 1.0 */
.vads-u-line-height--2  /* 1.2 */
.vads-u-line-height--3  /* 1.35 */
.vads-u-line-height--4  /* 1.5 */
.vads-u-line-height--5  /* 1.62 */
.vads-u-line-height--6  /* 1.75 */
```
