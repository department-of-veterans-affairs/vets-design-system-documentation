---
title: Image Aspect Ratios
description: Standard aspect ratios for images and banners on VA.gov
sidebar_position: 8
---

# Image Aspect Ratios

The VA.gov Design System specifies standard aspect ratios for images to maintain visual consistency across the platform.

## Supported Ratios

### 1:1 (Square)

**Use for:** Headshots or avatars on bio pages

```
┌─────────┐
│         │
│   1:1   │
│         │
└─────────┘
```

**Common dimensions:**
- 100×100px (thumbnail)
- 200×200px (small)
- 400×400px (large)

### 2:1 (Wide)

**Use for:** General purpose wide images

```
┌───────────────────┐
│                   │
│       2:1         │
└───────────────────┘
```

**Common dimensions:**
- 600×300px
- 800×400px
- 1200×600px

### 3:2 (Standard)

**Use for:**
- Teaser images (news stories)
- Promo blocks on Benefits Hub landing pages

```
┌──────────────┐
│              │
│     3:2      │
│              │
└──────────────┘
```

**Common dimensions:**
- 450×300px
- 600×400px
- 900×600px

### 7:2 (Banner)

**Use for:** Page banners and hero images

```
┌─────────────────────────────────────┐
│               7:2                   │
└─────────────────────────────────────┘
```

**Common dimensions:**
- 700×200px
- 1050×300px
- 1400×400px

## Implementation

### CSS Aspect Ratio

```css
.image-container {
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Responsive Images

```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcset="hero-desktop.jpg">
  <source
    media="(min-width: 640px)"
    srcset="hero-tablet.jpg">
  <img
    src="hero-mobile.jpg"
    alt="Description of image"
    loading="lazy">
</picture>
```

## Guidelines

### Do

- Use the standard aspect ratios for consistency
- Optimize images for web (compress, use appropriate format)
- Provide meaningful alt text for all images
- Use `loading="lazy"` for images below the fold
- Ensure adequate contrast for any text overlaid on images

### Don't

- Use arbitrary aspect ratios that don't match the standards
- Upload images larger than necessary
- Use images without alt text
- Rely on images alone to convey critical information

## Accessibility

### Alt Text

All images must have descriptive alt text:

```html
<!-- Good: Descriptive -->
<img src="veteran-counselor.jpg" alt="A veteran meeting with a counselor at a VA facility">

<!-- Bad: Non-descriptive -->
<img src="veteran-counselor.jpg" alt="Image">

<!-- Decorative images: Empty alt -->
<img src="decorative-pattern.jpg" alt="" role="presentation">
```

### Image Performance

- Use appropriate file formats (WebP with fallbacks)
- Implement responsive images with `srcset`
- Set explicit width and height to prevent layout shift
- Use lazy loading for non-critical images

## File Formats

| Format | Best For |
|--------|----------|
| WebP | Modern browsers, best compression |
| JPEG | Photographs, complex images |
| PNG | Graphics with transparency |
| SVG | Icons, logos, simple graphics |

## Related Resources

- [Card Component](../components/card)
- [Banner Component](../components/banner/)
