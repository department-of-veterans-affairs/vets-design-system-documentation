# Component Documentation Templates

Use these templates to create new component documentation pages for the VA Design System.

## Quick Start

### 1. Create the component folder

```bash
mkdir -p docs/components/my-component
```

### 2. Copy the templates

```bash
# Main documentation page
cp static/templates/component-template.mdx docs/components/my-component/index.mdx

# Checklist page
cp static/templates/component-checklist-template.mdx docs/components/my-component/checklist.mdx

# Checklist data (JSON)
cp static/templates/component-checklist-data.json src/data/component-checklist/my-component.json
```

### 3. Update the files

1. **index.mdx**: Replace all `TODO` placeholders with actual content
2. **checklist.mdx**: Replace `ComponentName` and `component-key` values
3. **my-component.json**: Update all status values

### 4. Register the checklist data

Add your component to `src/data/component-checklist/index.ts`:

```typescript
import myComponent from './my-component.json';

export const checklistData = {
  // ... existing components
  'my-component': myComponent,
};
```

## Template Files

| File | Purpose |
|------|---------|
| `component-template.mdx` | Main component documentation page |
| `component-checklist-template.mdx` | Component maturity checklist page |
| `component-checklist-data.json` | JSON data for the checklist |

## Naming Conventions

| Type | Format | Example |
|------|--------|---------|
| Folder name | kebab-case | `my-component` |
| Component tag | va-[name] | `va-my-component` |
| GitHub label | va-[name] | `va-my-component` |
| Research label | DSC: [Name] | `DSC: My Component` |
| Storybook ID | uswds-va-[name] | `uswds-va-my-component` |

## ComponentHeader Props

| Prop | Required | Description |
|------|----------|-------------|
| `maturity` | Yes | `deployed`, `use-with-caution`, `dont-use`, or `best-practice` |
| `platforms` | No | Array: `['web']`, `['mobile']`, or `['web', 'mobile']` |
| `github` | No | URL to GitHub issues filtered by component label |
| `figma` | No | URL to Figma design file |
| `storybook` | No | URL to Storybook documentation |
| `research` | No | URL to research repository issues |

## URL Patterns

### GitHub Issues
```
https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is%3Aissue+is%3Aopen+label%3Ava-[component-name]
```

### Research Repository
```
https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue+label%3A%22DSC%3A+[Component Name]%22
```

### Storybook
```
https://design.va.gov/storybook/?path=/docs/uswds-va-[component-name]--docs
```

### Figma
```
https://www.figma.com/file/JDFpGLIojfuQwANXScQjqe/VADS-Component-Library?type=design
```

## Checklist Status Values

- `complete` - Fully implemented and tested
- `in-progress` - Currently being worked on
- `not-started` - Not yet begun
- `n/a` - Not applicable for this component

## Tips

- Remove sections that don't apply to your component
- Use the `<Tabs>` component for web/mobile variations
- Import accessibility partials for common patterns
- Include `<FeedbackSection>` at the end of every page
- Keep descriptions concise and action-oriented
