# Mobile App Component Documentation

## Overview

This documentation site supports displaying mobile app component documentation alongside web component documentation. Mobile app components are built with React Native and maintained in the [VA Mobile Library](https://github.com/department-of-veterans-affairs/va-mobile-library).

## Current Mobile App Components

The system includes **all 11 available VA Mobile Library components**:

- **va-alert** - Status messages and notifications
- **va-button** - Primary interaction element with multiple variants
- **va-checkbox** - Multi-select option with tile support
- **va-icon** - VA design system iconography
- **va-link** - Navigation with multiple link types
- **va-loading-indicator** - Loading states with optional text
- **va-radio-button** - Single-select option with tile support  
- **va-segmented-control** - Multi-option selector
- **va-snackbar** - Brief bottom-screen messages
- **va-spacer** - Consistent spacing between elements
- **va-text** - Typography with VA design system variants

## How It Works

**Web Components**: Auto-generated from external npm package  
**Mobile App Components**: Manual source file (`mobile-app-component-docs-source.json`) read directly by Jekyll

## Adding a New Mobile App Component

1. **Add component data** to `src/_data/mobile-app-component-docs-source.json`
2. **Follow existing structure** (see va-button example)
3. **Add `mobile-app: true`** to the component page frontmatter

## Data Structure

```json
{
  "tag": "va-component-name",
  "docs": "Component description",
  "props": [
    {
      "name": "propName",
      "type": "string",
      "docs": "Description of the prop",
      "required": true,
      "default": "defaultValue"
    }
  ],
  "events": []
}
```

## Important Notes

- Use `docs` field (not `description`) for consistency with web components
- Set `required: true` for mandatory props
- Include `default` values where applicable
- Ensure types match the actual TypeScript interfaces
- Both `web: true` and `mobile-app: true` flags control which sections display

## Troubleshooting

**Mobile app tables not showing?**
- Check `mobile-app: true` is in component frontmatter
- Verify component exists in `mobile-app-component-docs-source.json`

**Props missing descriptions?**
- Ensure props use `docs` field, not `description`
