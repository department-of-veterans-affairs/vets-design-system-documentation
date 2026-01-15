---
title: For developers
description: How developers can use the VA.gov Design System
sidebar_label: Overview
sidebar_position: 1
---

# For Developers

This guide helps developers implement the VA.gov Design System. Learn how to install packages, use components, and contribute to the design system.

## Overview

The VA.gov Design System consists of two main parts:

1. **CSS Library** - Styling foundation including utilities, tokens, and base styles
2. **Component Library** - Web Components for building interfaces

## Installation

### For vets-website Projects

If you're working in the vets-website repository, the design system is already available. See the [frontend developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/) for details.

### For Other Projects

Install the packages via npm:

```bash
# CSS Library
npm install @department-of-veterans-affairs/css-library

# Component Library
npm install @department-of-veterans-affairs/component-library
```

### Import Styles

```scss
// Import the full CSS library
@import '@department-of-veterans-affairs/css-library/dist/stylesheets/core.scss';
```

### Import Components

```javascript
// Import web components
import '@department-of-veterans-affairs/component-library';

// Or import specific components
import '@department-of-veterans-affairs/component-library/dist/components/va-button';
```

## Using Web Components

VA Design System components are implemented as Web Components, which work with any JavaScript framework.

### Basic Usage

```html
<!-- Button -->
<va-button text="Continue" />

<!-- Alert -->
<va-alert status="info" visible>
  <h2 slot="headline">Information</h2>
  <p>This is an informational alert.</p>
</va-alert>

<!-- Text Input -->
<va-text-input
  label="First name"
  name="firstName"
  required
/>
```

### Event Handling

Web Components dispatch custom events:

```javascript
// Listen for component events
document.querySelector('va-button').addEventListener('click', (event) => {
  console.log('Button clicked');
});

// Form input changes
document.querySelector('va-text-input').addEventListener('input', (event) => {
  console.log('Value:', event.target.value);
});
```

### React Integration

```jsx
import { VaButton, VaAlert } from '@department-of-veterans-affairs/component-library/dist/react-bindings';

function MyComponent() {
  return (
    <VaAlert status="success" visible>
      <h2 slot="headline">Success!</h2>
      <p>Your form has been submitted.</p>
    </VaAlert>
  );
}
```

## CSS Utilities

The CSS library includes utility classes for rapid styling:

### Spacing

```html
<div class="vads-u-margin--2 vads-u-padding--3">
  <!-- 16px margin, 24px padding -->
</div>
```

### Typography

```html
<p class="vads-u-font-size--lg vads-u-font-weight--bold">
  Large bold text
</p>
```

### Colors

```html
<div class="vads-u-background-color--primary vads-u-color--white">
  Primary background with white text
</div>
```

### Layout

```html
<div class="vads-l-grid-container">
  <div class="vads-l-row">
    <div class="vads-l-col--12 tablet:vads-l-col--6">
      Half width on tablet and up
    </div>
  </div>
</div>
```

## Design Tokens

Use CSS custom properties for design tokens:

```css
.my-component {
  color: var(--vads-color-primary);
  background: var(--vads-color-base-lightest);
  padding: var(--vads-spacing-2);
  font-family: var(--vads-font-family-sans);
}
```

## Accessibility Requirements

All implementations must meet WCAG 2.1 AA standards:

### Required Practices

- Use semantic HTML elements
- Provide text alternatives for images
- Ensure keyboard navigation works
- Maintain focus management
- Support screen readers

### Testing Tools

- **axe DevTools** - Automated accessibility testing
- **WAVE** - Web accessibility evaluation
- **VoiceOver/NVDA** - Screen reader testing

```javascript
// Example: axe-core integration
import axe from 'axe-core';

axe.run(document, (err, results) => {
  console.log('Violations:', results.violations);
});
```

## Contributing

### Report Issues

Submit bugs and feature requests via GitHub:

```bash
# Clone the repository
git clone https://github.com/department-of-veterans-affairs/component-library.git

# Create an issue
# https://github.com/department-of-veterans-affairs/component-library/issues
```

### Submit Code

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

### Development Setup

```bash
# Clone and install
git clone https://github.com/department-of-veterans-affairs/component-library.git
cd component-library
npm install

# Run development server
npm run dev

# Run tests
npm test
```

## Browser Support

The design system supports:

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

Progressive enhancement ensures basic functionality in older browsers.

## Resources

- [Component Library GitHub](https://github.com/department-of-veterans-affairs/component-library)
- [CSS Library Documentation](/docs/foundation/)
- [Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Contributing Guide](/docs/about/contributing/)
