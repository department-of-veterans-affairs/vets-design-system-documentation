---
title: Component Documentation Guide
description: How to write and update component documentation pages
sidebar_position: 10
---

# Component Documentation Guide

This guide explains how to create and update component documentation pages to ensure consistency across the design system.

## Page Structure

Every component page follows this structure:

```text
1. Title & Description (frontmatter)
2. Component Header (maturity badge, platform tags, resource links)
3. Related Components
4. Examples
5. Usage (when to use, when not to use, behavior, placement)
6. Code Usage (per platform)
7. Content Considerations
8. Accessibility Considerations
9. Related Components (footer)
```

## Required Imports

At the top of each component MDX file, include these imports:

```mdx
// For components with both platforms (tabs)
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// Core components
import ComponentHeader from '@site/src/components/ComponentHeader';
import StoryEmbed from '@site/src/components/StoryEmbed';
import AutoPropsTable from '@site/src/components/AutoPropsTable';
import DosDonts, { Do, Dont } from '@site/src/components/DosDonts';
```

For single-platform components, you can skip the Tabs imports.

## Component Header

The `ComponentHeader` component displays the maturity status and platform availability:

```mdx
<ComponentHeader
  maturity="deployed"
  platforms={['web', 'mobile']}
  github="https://github.com/..."
  figma="https://figma.com/..."
/>
```

### Props

| Prop        | Type                                                                          | Description                              |
| ----------- | ----------------------------------------------------------------------------- | ---------------------------------------- |
| `maturity`  | `'deployed'` \| `'use-with-caution'` \| `'dont-use'` \| `'best-practice'`     | Component maturity level                 |
| `platforms` | `('web' \| 'mobile')[]`                                                       | Which platforms support this component   |
| `github`    | `string`                                                                      | Link to GitHub issues/source             |
| `figma`     | `string`                                                                      | Link to Figma designs                    |
| `research`  | `string`                                                                      | Link to research documentation           |

### Platform Combinations

```mdx
// Web only
platforms={['web']}

// Mobile only
platforms={['mobile']}

// Both platforms
platforms={['web', 'mobile']}
```

## Platform Tags

Use `PlatformTag` to label platform-specific sections within the page. This keeps all content visible while clearly indicating which platform it applies to.

### When to Use Platform Tags

- **Code examples** that differ between web and mobile
- **Props/API tables** that are platform-specific
- **Examples** that only exist on one platform
- **Behavior notes** that differ by platform

### How to Use

Add the tag inline with headings:

```mdx
### Web component <PlatformTag platform="web" size="small" />

### React Native component <PlatformTag platform="mobile" size="small" />

### Destructive variant <PlatformTag platform="mobile" size="small" />
```

### Tag Sizes

- `size="small"` - Use inline with headings
- `size="medium"` - Default, use standalone

## Auto-Generated Props Tables

Use `AutoPropsTable` to automatically fetch and display component properties from VA's published component documentation. This keeps props in sync with the actual component libraries.

### How It Works

Props are fetched at runtime from:

- **Web components**: `@department-of-veterans-affairs/web-components` package (component-docs.json)
- **Mobile components**: VA Design System documentation repository (mobile-app-component-docs-source.json)

### Usage

```mdx
// Web component props (default)
<AutoPropsTable componentTag="va-button" />

// Mobile component props
<AutoPropsTable componentTag="va-button" platform="mobile" />

// Hide events table
<AutoPropsTable componentTag="va-button" showEvents={false} />
```

### Props

| Prop           | Type                  | Default | Description                                |
| -------------- | --------------------- | ------- | ------------------------------------------ |
| `componentTag` | `string`              | —       | The component tag name (e.g., "va-button") |
| `platform`     | `'web'` \| `'mobile'` | `'web'` | Which platform's props to display          |
| `showEvents`   | `boolean`             | `true`  | Whether to show the events table           |

### Benefits

- **Always up-to-date**: Props automatically sync with the published component libraries
- **No manual maintenance**: Changes to component APIs are reflected automatically
- **Consistent formatting**: All props tables look the same across the site

## Platform Tabs

For components available on **both** platforms, use tabs to organize platform-specific content. This keeps the page clean while allowing users to switch between Web and Mobile documentation.

### When to Use Tabs

- Component supports **both** Web and Mobile platforms
- Examples, code, or props differ between platforms

### When NOT to Use Tabs

- Component only supports **one** platform (just show the content directly)
- Content is the same for both platforms (no need to duplicate)

### Implementation

Import the Docusaurus Tabs components:

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Use `groupId="platform"` and `queryString` to sync tabs across sections:

```mdx
<Tabs groupId="platform" queryString>
  <TabItem value="web" label="Web" default>
    Web content here...
  </TabItem>
  <TabItem value="mobile" label="Mobile">
    Mobile content here...
  </TabItem>
</Tabs>
```

### Key Features

- **Synced tabs**: All tab groups with `groupId="platform"` stay in sync
- **URL persistence**: `queryString` saves the selection in the URL (e.g., `?platform=mobile`)
- **Default tab**: Use `default` on the TabItem to set the initial selection

## Code Usage Section

For components available on both platforms, structure the Code Usage section with tabs:

```mdx
## Code usage

<Tabs groupId="platform" queryString>
  <TabItem value="web" label="Web" default>

\`\`\`html
<va-button text="Continue"></va-button>
\`\`\`

### Properties

<AutoPropsTable componentTag="va-button" />

  </TabItem>
  <TabItem value="mobile" label="Mobile">

\`\`\`jsx
import { Button } from '@department-of-veterans-affairs/mobile-component-library';

<Button label="Continue" onPress={() => {}} />
\`\`\`

### Props

<AutoPropsTable componentTag="va-button" platform="mobile" />

  </TabItem>
</Tabs>
```

For single-platform components, skip the tabs entirely:

```mdx
## Code usage

\`\`\`html
<va-alert status="info">...</va-alert>
\`\`\`

### Properties

<AutoPropsTable componentTag="va-alert" />
```

## Manual Props Tables

For components not in the VA component libraries, or when you need to override the auto-generated props, use `PropsTable`:

```mdx
import PropsTable from '@site/src/components/PropsTable';

<PropsTable
  properties={[
    {
      name: 'text',
      type: 'string',
      default: 'undefined',
      required: true,
      description: 'Button display text'
    },
  ]}
  events={[
    {
      name: 'click',
      description: 'Fires when clicked',
      detail: 'MouseEvent'
    },
  ]}
/>
```

## Storybook Embeds

Use `StoryEmbed` to show interactive examples from VA's Storybook:

```mdx
<StoryEmbed
  storyId="uswds-va-button--primary"
  height={80}
  title="Primary button example"
/>
```

### Finding Story IDs

1. Go to [design.va.gov/storybook](https://design.va.gov/storybook)
2. Navigate to the component
3. The story ID is in the URL: `?path=/story/{story-id}`

## Dos and Donts

Use `DosDonts` for content guidelines:

```mdx
<DosDonts>
  <Do>
    - Create an account
    - Submit application
  </Do>
  <Dont>
    - Click here
    - Submit
  </Dont>
</DosDonts>
```

## Shared Content (Partials)

Reusable content lives in `docs/_partials/`. Import and use them:

```mdx
import ButtonsVsLinks from '@site/docs/_partials/accessibility/buttons-vs-links.mdx';
import TargetSize from '@site/docs/_partials/accessibility/target-size.mdx';

## Accessibility

<TargetSize />
<ButtonsVsLinks />
```

### Available Partials

| Partial          | Path                                            | Use for                   |
| ---------------- | ----------------------------------------------- | ------------------------- |
| Buttons vs Links | `_partials/accessibility/buttons-vs-links.mdx`  | Interactive elements      |
| Target Size      | `_partials/accessibility/target-size.mdx`       | Clickable/tappable elements |
| Disabled Buttons | `_partials/accessibility/disabled-buttons.mdx`  | Form controls             |

## Complete Example

Here's a minimal component page template:

```mdx
---
title: ComponentName
description: Brief description of the component
---

import ComponentHeader from '@site/src/components/ComponentHeader';
import StoryEmbed from '@site/src/components/StoryEmbed';
import AutoPropsTable from '@site/src/components/AutoPropsTable';
import PlatformTag from '@site/src/components/PlatformTag';

# ComponentName

Brief description of what the component does and when to use it.

<ComponentHeader
  maturity="deployed"
  platforms={['web', 'mobile']}
  github="https://github.com/..."
  figma="https://figma.com/..."
/>

## Examples

### Default

<StoryEmbed storyId="component--default" height={100} />

---

## Usage

### When to use

- Use case 1
- Use case 2

### When to consider something else

- Alternative scenario 1

---

## Code usage

### Web component <PlatformTag platform="web" size="small" />

\`\`\`html
<va-component></va-component>
\`\`\`

#### Properties

<AutoPropsTable componentTag="va-component" />

### React Native component <PlatformTag platform="mobile" size="small" />

\`\`\`jsx
<Component />
\`\`\`

#### Props

<AutoPropsTable componentTag="va-component" platform="mobile" />

---

## Accessibility considerations

Accessibility guidance here.
```

## Template File

A complete component template is available in the `static/templates/` directory. Copy this file to create new component documentation.

## Component Checklist Pages

Each component should have a checklist subpage that tracks maturity, code assets, visual assets, and accessibility audit status. This data helps teams understand the completeness and readiness of each component.

### File Structure

Components with checklists should use a folder structure:

```
components/
  button/
    index.mdx          # Main component documentation
    checklist.mdx      # Component checklist page
```

### Creating a Checklist Page

1. **Create a data file** in `src/data/component-checklist/[component-name].json`:

```json
{
  "componentName": "Button",
  "webCompleted": "August 15, 2025",
  "mobileCompleted": "August 20, 2025",
  "maturity": [
    { "name": "Guidance", "webScore": true, "mobileScore": true },
    { "name": "Research", "webScore": true, "mobileScore": true },
    { "name": "Stability", "webScore": true, "mobileScore": true },
    { "name": "Adoption", "webScore": true, "mobileScore": true }
  ],
  "codeAssets": [
    { "name": "Variations", "webScore": true, "mobileScore": true },
    { "name": "Responsive", "webScore": true, "mobileScore": true },
    { "name": "Interactive states", "webScore": true, "mobileScore": true },
    { "name": "Tokens", "webScore": "n/a", "mobileScore": "n/a" },
    { "name": "Internationalization", "webScore": "n/a", "mobileScore": "n/a" }
  ],
  "visualAssets": [
    { "name": "Variations", "webScore": true, "mobileScore": true },
    { "name": "Responsive", "webScore": true, "mobileScore": true },
    { "name": "Interactive states", "webScore": true, "mobileScore": true },
    { "name": "Tokens", "webScore": "n/a", "mobileScore": "n/a" }
  ],
  "accessibility": {
    "web": {
      "platform": "web",
      "lastAuditDate": "August 2025",
      "codeReview": "pass",
      "readability": "pass",
      "automatedScans": "pass",
      "useOfColor": "pass",
      "textResizing": "pass",
      "screenReaders": "pass",
      "inputMethods": "pass"
    }
  }
}
```

2. **Register the data** in `src/data/component-checklist/index.ts`

3. **Create the checklist page** using the template at `static/templates/component-checklist-template.mdx`:

```mdx
---
title: Button - Component checklist
description: Maturity and asset checklist for the Button component
sidebar_label: Checklist
---

import ComponentChecklist from '@site/src/components/ComponentChecklist';
import { checklistData } from '@site/src/data/component-checklist';
import ChecklistDefinitions from '@site/docs/_partials/checklist-definitions.mdx';
import Link from '@docusaurus/Link';

# Button checklist

<Link to="/components/button">← Back to Button</Link>

This checklist tracks the maturity, code assets, visual assets, and accessibility audit status for the Button component.

<ComponentChecklist data={checklistData.button} platform="both" />

<ChecklistDefinitions />
```

### Score Values

- `true` - Criteria is complete
- `false` - Criteria is incomplete
- `"n/a"` - Criteria is not applicable
- `null` - Not yet evaluated

### Accessibility Audit Statuses

- `"pass"` - Passed accessibility audit
- `"conditional"` - Passed with conditions
- `"fail"` - Failed accessibility audit
- `null` - Not yet audited

## Checklist for New Components

- [ ] Front matter with title and description
- [ ] ComponentHeader with correct maturity and platforms
- [ ] Related components section
- [ ] Examples with StoryEmbed (where available)
- [ ] Usage guidelines (when to use, when not to)
- [ ] Code examples for each platform with PlatformTag
- [ ] AutoPropsTable for each platform's API
- [ ] Content considerations (if applicable)
- [ ] Accessibility considerations
- [ ] Footer with related components
- [ ] Component checklist data file (JSON)
- [ ] Component checklist subpage (MDX)
