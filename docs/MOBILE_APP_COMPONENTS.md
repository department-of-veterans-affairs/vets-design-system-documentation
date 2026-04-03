# Mobile App Component Documentation

## Overview

This documentation site supports displaying mobile app component documentation alongside web component documentation. Mobile app components are built with React Native and maintained in the [VA Mobile Library](https://github.com/department-of-veterans-affairs/va-mobile-library).

**🤖 Automated Sync**: Component data is automatically synchronized from the VA Mobile Library using `yarn sync-mobile-full`. This ensures the documentation stays current with the latest components and their props.

## Quick Start

### 🔄 Sync Latest Components
```bash
# Get fresh data from VA Mobile Library + process
yarn sync-mobile-full

# Check what components were found
git diff src/_data/mobile-app-component-docs-source.json
```

## Current Mobile App Components

The system includes **all 12 available VA Mobile Library components** (automatically synced):

- **va-alert** - Status messages and notifications
- **va-button** - Primary interaction element with multiple variants
- **va-checkbox** - Multi-select option with tile support
- **va-checkboxgroup** - Group of related checkboxes with shared validation and state management
- **va-icon** - VA design system iconography
- **va-link** - Navigation with multiple link types
- **va-loading-indicator** - Loading states with optional text
- **va-radio-button** - Single-select option with tile support  
- **va-segmented-control** - Multi-option selector
- **va-snackbar** - Brief bottom-screen messages
- **va-spacer** - Consistent spacing between elements
- **va-text** - Typography with VA design system variants

> **Last synced**: 2026-04-03 from [VA Mobile Library](https://github.com/department-of-veterans-affairs/va-mobile-library)

## How It Works

**Web Components**: Auto-generated from external npm package  
**Mobile App Components**: Auto-synced from [VA Mobile Library GitHub](https://github.com/department-of-veterans-affairs/va-mobile-library), then processed by Gulp build pipeline

### 🔗 **Data Flow**
```
VA Mobile Library (GitHub) → Sync Script → Source JSON → Gulp Processing → Jekyll Site
```

## Build Process

The mobile app component data can be synced automatically from the VA Mobile Library:

1. **Automated sync**: `scripts/sync-mobile-components.js` fetches latest component data from GitHub
2. **Source file**: Updates `src/_data/mobile-app-component-docs-source.json` automatically  
3. **Build process**: Generates `src/_data/mobile-app-component-docs.json` for Jekyll
4. **Jekyll integration**: Uses the generated file for component documentation

### Build Commands

```bash
# Sync fresh data from VA Mobile Library + process
yarn sync-mobile-full

# Sync data only (updates source file)
yarn sync-mobile

# Process existing source data into generated file
yarn process-mobile
npx gulp process-mobile-app-component-docs

# Full data processing (includes mobile app components)
npx gulp json

# Complete build (includes all assets + mobile app processing)
npx gulp build
yarn build
```

The mobile app processing is **automatically included** in all build commands.

## Recently Discovered Components

The automated sync recently discovered new components that weren't in the original manual list:

- **✨ va-checkboxgroup**: Group of related checkboxes with shared validation and state management

Regular syncing ensures no new mobile components are missed as the VA Mobile Library evolves.

## Component Maturity Tracking

**📊 Accurate Progress Tracking**: Mobile component checklist data has been updated to reflect their actual availability and maturity on the mobile platform:

- **Before**: Mobile components incorrectly showed 0% completion on their pages  
- **After**: Components display accurate completion percentages (e.g., Alert component now shows ~85% completion)

All mobile app component checklists include:
- ✅ **Completion date**: Set to 2026-04-03 when components became available in VA Mobile Library
- ✅ **Platform scores**: Accurate mobile-app-score values for research, stability, and adoption
- ✅ **Progress visibility**: Component pages now show meaningful completion percentages

The component maturity system automatically calculates percentages from checklist data in [`src/_data/component-checklist/`](src/_data/component-checklist/).

## Automated vs Manual Process

### 🤖 **Automated Sync (Recommended)**
- Fetches latest component data from [VA Mobile Library GitHub](https://github.com/department-of-veterans-affairs/va-mobile-library)
- Parses TypeScript interfaces for component props
- Updates source JSON file automatically
- Ensures you have all current components

### ✏️ **Manual Updates**
- Edit [`mobile-app-component-docs-source.json`](src/_data/mobile-app-component-docs-source.json) directly
- Useful for custom descriptions or documentation tweaks
- Run after automated sync for refinements

## Adding a New Mobile App Component

### 🤖 **When New Components Exist in VA Mobile Library**
1. **Sync fresh data**: `yarn sync-mobile-full`
2. **Review generated data**: Check [`mobile-app-component-docs-source.json`](src/_data/mobile-app-component-docs-source.json)
3. **Refine documentation**: Edit descriptions and prop docs as needed
4. **Add component page**: Create `src/_components/[component-name].md` with `mobile-app: true`

### ✏️ **For Manual Component Addition**
1. **Add component data** to [`mobile-app-component-docs-source.json`](src/_data/mobile-app-component-docs-source.json)
2. **Follow existing structure** (see va-button example)
3. **Process changes**: `yarn process-mobile` 
4. **Add component page**: Create `src/_components/[component-name].md` with `mobile-app: true`

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

**Missing components from VA Mobile Library?**
- Run `yarn sync-mobile-full` to fetch latest components
- Check network connection and GitHub API access
- Verify VA Mobile Library repository structure hasn't changed

**Mobile app tables not showing?**
- Check `mobile-app: true` is in component frontmatter  
- Verify component exists in `mobile-app-component-docs-source.json`
- Run `yarn process-mobile` to regenerate processed file
- Check that `mobile-app-component-docs.json` was generated in `src/_data/`

**Props missing descriptions?**
- Ensure props use `docs` field, not `description`
- Run sync to get latest prop information: `yarn sync-mobile`
- Manually edit source file for custom descriptions

**Build errors during mobile app processing?**
- Verify JSON syntax in `mobile-app-component-docs-source.json`
- Check file exists at `src/_data/mobile-app-component-docs-source.json`
- Try re-syncing: `yarn sync-mobile` then `yarn process-mobile`
