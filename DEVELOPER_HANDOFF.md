# Developer Handoff: Unified Documentation System

**Project**: Centralized Documentation Platform for Design System & Engineering  
**Status**: Planning → Implementation  
**Last Updated**: December 2024  
**Document Owner**: [Your Name]

---

## Executive Summary

This project consolidates our current fragmented documentation (Confluence, design system site, developer site) into a unified, monorepo-based documentation platform stored in GitHub. The system will support design system documentation, engineering guides, and internal documentation with AI-powered search capabilities.

### Success Criteria
- ✅ Single source of truth for all documentation
- ✅ Everything stored in GitHub (version controlled)
- ✅ AI-powered search and assistance for users
- ✅ Interactive component documentation
- ✅ Efficient monorepo workflow with caching
- ✅ Sub-10 second build times with cache hits

---

## Architecture Overview

### Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Monorepo Tool** | Turborepo | Build orchestration, caching, task management |
| **Package Manager** | pnpm | Fast, disk-efficient package management |
| **Prose Documentation** | Docusaurus | Guides, tutorials, conceptual documentation |
| **Component Documentation** | Storybook | Interactive component previews and props |
| **Design Tokens** | Style Dictionary | Token transformation and documentation |
| **AI Integration** | Algolia DocSearch + Ask AI | Semantic search and conversational assistance |
| **Deployment** | Vercel/Netlify | Static site hosting with preview deployments |

### Directory Structure

```
design-system-monorepo/
├── apps/
│   ├── docs/                      # Docusaurus site
│   │   ├── docs/                  # Markdown documentation
│   │   │   ├── getting-started/
│   │   │   ├── components/        # Component usage guides
│   │   │   ├── design-tokens/
│   │   │   ├── patterns/
│   │   │   └── processes/
│   │   ├── blog/                  # Release notes, updates
│   │   ├── src/
│   │   │   ├── components/        # Custom React components
│   │   │   ├── css/               # Custom styles
│   │   │   └── pages/             # Landing pages
│   │   ├── static/                # Images, assets
│   │   ├── docusaurus.config.js
│   │   └── package.json
│   │
│   ├── storybook/                 # Centralized Storybook
│   │   ├── .storybook/
│   │   │   ├── main.ts            # Stories from all packages
│   │   │   ├── preview.ts         # Global decorators
│   │   │   └── manager.ts         # Storybook customization
│   │   ├── stories/               # Global documentation stories
│   │   └── package.json
│   │
│   └── [your-existing-apps]/
│
├── packages/
│   ├── ui/                        # Component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.stories.tsx
│   │   │   │   │   └── Button.test.tsx
│   │   │   │   └── [other-components]/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── tokens/                    # Design tokens
│   │   ├── tokens/
│   │   │   ├── color.json
│   │   │   ├── typography.json
│   │   │   └── spacing.json
│   │   ├── build.js               # Style Dictionary build
│   │   └── package.json
│   │
│   ├── icons/                     # Icon library
│   │   ├── src/
│   │   └── package.json
│   │
│   └── eslint-config/             # Shared linting
│       └── package.json
│
├── turbo.json                     # Turborepo configuration
├── package.json                   # Root package.json
├── pnpm-workspace.yaml            # pnpm workspaces
└── README.md
```

---

## Phase 1: Foundation Setup (Week 1-2)

### 1.1 Initialize Monorepo

**Step 1: Create monorepo structure**
```bash
# Use Turborepo design system starter
pnpm dlx create-turbo@latest design-system-docs -e design-system

cd design-system-docs
```

This creates:
- Basic Turborepo configuration
- Example packages/ui library
- Storybook app pre-configured
- TypeScript configurations
- Shared ESLint/Prettier configs

**Step 2: Configure pnpm workspace**

Verify `pnpm-workspace.yaml`:
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

**Step 3: Configure Turborepo**

Update `turbo.json`:
```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", "!**/*.stories.{tsx,jsx,ts,js,mdx}"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**", ".docusaurus/**", "build/**", "storybook-static/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "docs:dev": {
      "cache": false,
      "persistent": true
    },
    "storybook": {
      "cache": false,
      "persistent": true,
      "interactive": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "type-check": {
      "dependsOn": ["^type-check"]
    }
  }
}
```

**Deliverable**: Working monorepo with package hoisting and task orchestration

---

### 1.2 Add Docusaurus

**Step 1: Create Docusaurus app**
```bash
cd apps
pnpm create docusaurus@latest docs classic --typescript
cd ..
```

**Step 2: Configure Docusaurus for design system**

Update `apps/docs/docusaurus.config.ts`:
```typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Design System Documentation',
  tagline: 'Design system, component library, and development guides',
  favicon: 'img/favicon.ico',
  url: 'https://your-domain.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'design-system-docs',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-org/design-system-docs/tree/main/apps/docs/',
          remarkPlugins: [],
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Release Notes',
          blogDescription: 'Design system updates and releases',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Design System',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tokensSidebar',
          position: 'left',
          label: 'Design Tokens',
        },
        {
          href: '/storybook',
          label: 'Storybook',
          position: 'left',
        },
        {
          href: 'https://github.com/your-org/design-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started'},
            {label: 'Components', to: '/docs/components'},
            {label: 'Design Tokens', to: '/docs/tokens'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Storybook', to: '/storybook'},
            {label: 'GitHub', href: 'https://github.com/your-org'},
            {label: 'Figma', href: 'https://figma.com/@your-org'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Organization`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // AI Search will be configured in Phase 2
  } satisfies Preset.ThemeConfig,
};

export default config;
```

**Step 3: Create sidebar structure**

Update `apps/docs/sidebars.ts`:
```typescript
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  gettingStartedSidebar: [
    'getting-started/introduction',
    'getting-started/installation',
    'getting-started/quickstart',
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'getting-started/design-principles',
        'getting-started/accessibility',
        'getting-started/responsive-design',
      ],
    },
  ],
  
  componentsSidebar: [
    'components/overview',
    {
      type: 'category',
      label: 'Actions',
      items: [
        'components/button',
        'components/icon-button',
        'components/menu',
      ],
    },
    {
      type: 'category',
      label: 'Inputs',
      items: [
        'components/text-field',
        'components/select',
        'components/checkbox',
        'components/radio',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        'components/stack',
        'components/grid',
        'components/container',
      ],
    },
  ],
  
  tokensSidebar: [
    'tokens/overview',
    'tokens/colors',
    'tokens/typography',
    'tokens/spacing',
    'tokens/shadows',
    'tokens/usage',
  ],
};

export default sidebars;
```

**Step 4: Add to Turborepo**

Update root `package.json`:
```json
{
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "docs:dev": "turbo docs:dev --filter=docs",
    "storybook": "turbo storybook --filter=storybook"
  }
}
```

**Deliverable**: Working Docusaurus site accessible via `pnpm docs:dev`

---

### 1.3 Configure Storybook for Monorepo

The Turborepo template includes Storybook, but we need to configure it to pull stories from our packages.

**Step 1: Update Storybook configuration**

Edit `apps/storybook/.storybook/main.ts`:
```typescript
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    // Import stories from all packages
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/icons/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // Global documentation stories
    '../stories/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-designs', // For Figma integration
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@repo/ui': '../../../packages/ui/src',
        },
      },
    });
  },
};

export default config;
```

**Step 2: Add preview configuration**

Edit `apps/storybook/.storybook/preview.ts`:
```typescript
import type { Preview } from '@storybook/react';
import '../src/styles.css'; // Import your design system styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
```

**Step 3: Create example story in packages/ui**

Create `packages/ui/src/components/Button/Button.stories.tsx`:
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FIGMA_FILE',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};
```

**Deliverable**: Storybook running at `pnpm storybook` showing components from packages

---

## Phase 2: AI Integration (Week 3)

### 2.1 Algolia DocSearch Setup

**Step 1: Apply for Algolia DocSearch**
- Visit https://docsearch.algolia.com/apply/
- Fill out application with your docs URL
- Wait for approval (usually 1-3 days)

**Step 2: Configure Algolia in Docusaurus**

Once approved, update `apps/docs/docusaurus.config.ts`:
```typescript
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'your-docs',
    contextualSearch: true,
    searchParameters: {},
    searchPagePath: 'search',
  },
}
```

**Step 3: Configure crawler**

Algolia will provide a crawler config. Ensure your sitemap is accessible at `https://your-domain.com/sitemap.xml`.

---

### 2.2 AI Chat Integration Options

Choose ONE of these options based on your budget and requirements:

#### Option A: Algolia Ask AI (Recommended - New Feature)

**Requirements**: Algolia DocSearch already configured

**Step 1: Enable in Algolia dashboard**
- Go to your Algolia index
- Enable "Ask AI" assistant
- Select your LLM provider (OpenAI, Anthropic, etc.)

**Step 2: Update Docusaurus config**
```typescript
themeConfig: {
  algolia: {
    // ... existing config
    askAi: {
      enabled: true,
      // You'll provide API keys via environment variables
    },
  },
}
```

**Cost**: Free plugin + LLM API costs (~$10-50/month depending on usage)

---

#### Option B: Markprompt (Open Source)

**Step 1: Install dependencies**
```bash
cd apps/docs
pnpm add @markprompt/react @markprompt/css
```

**Step 2: Sign up and get API key**
- Visit https://markprompt.com
- Create project
- Get anonymous API key

**Step 3: Swizzle SearchBar**
```bash
pnpm swizzle @docusaurus/theme-classic SearchBar --eject
```

**Step 4: Replace SearchBar component**

Create `apps/docs/src/theme/SearchBar/index.tsx`:
```typescript
import React from 'react';
import { Markprompt } from '@markprompt/react';
import '@markprompt/css';

export default function SearchBar() {
  return (
    <Markprompt
      projectKey="YOUR_PROJECT_KEY"
      placeholder="Ask AI or search docs..."
      references={{
        getHref: (reference) => reference.file?.path || '#',
        getLabel: (reference) => reference.meta?.title || reference.file?.path || '',
      }}
    />
  );
}
```

**Cost**: $49/month for 5,000 requests

---

#### Option C: Biel.ai (Fastest Setup)

**Step 1: Install**
```bash
cd apps/docs
pnpm add biel-react biel-search
```

**Step 2: Swizzle SearchBar and Footer**
```bash
pnpm swizzle @docusaurus/theme-classic SearchBar --eject
pnpm swizzle @docusaurus/theme-classic Footer --eject
```

**Step 3: Add to Footer**

Update `apps/docs/src/theme/Footer/index.tsx`:
```typescript
import React from 'react';
import Footer from '@theme-original/Footer';
import { BielButton } from 'biel-react';
import { defineCustomElements } from 'biel-search/loader';
import 'biel-search/dist/biel-search/biel-search.css';

defineCustomElements();

export default function FooterWrapper(props) {
  return (
    <>
      <BielButton projectId="YOUR_PROJECT_ID" buttonText="Ask AI" />
      <Footer {...props} />
    </>
  );
}
```

**Cost**: $79/month

---

### 2.3 GitHub Copilot for Documentation

**Step 1: Enable GitHub Copilot for your organization**
- Requires GitHub Copilot Business ($19/user/month) or Enterprise
- Enable for your repository

**Step 2: Install VS Code extension**
- Install "GitHub Copilot" extension
- Install "GitHub Copilot Chat" extension

**Step 3: Create documentation templates**

Add `.github/copilot-instructions.md`:
```markdown
# Documentation Standards

When writing component documentation:

1. Start with a brief description (1-2 sentences)
2. Include usage example with TypeScript
3. Document all props with descriptions
4. Add accessibility guidelines
5. Link to Figma designs when available
6. Include do's and don'ts
7. Add related components section

Example format:
# ComponentName

Brief description of the component purpose and use cases.

## Usage

\`\`\`tsx
import { ComponentName } from '@repo/ui';

export function Example() {
  return <ComponentName prop="value" />;
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop | string | undefined | Description |

## Accessibility

- Keyboard navigation details
- ARIA attributes used
- Screen reader considerations

## Design Resources

[View in Figma](https://figma.com/...)

## Related Components

- [OtherComponent](/docs/components/other)
```

**Step 4: Use Copilot Chat for doc generation**

In VS Code, select a component file and use Copilot Chat:
```
@workspace Generate documentation for this component following our documentation standards in .github/copilot-instructions.md
```

**Deliverable**: AI-powered search and chat on documentation site

---

## Phase 3: Design Tokens Integration (Week 4)

### 3.1 Setup Style Dictionary

**Step 1: Create tokens package**
```bash
mkdir -p packages/tokens
cd packages/tokens
pnpm init
```

**Step 2: Install Style Dictionary**
```bash
pnpm add -D style-dictionary
```

**Step 3: Create token files**

`packages/tokens/tokens/color.json`:
```json
{
  "color": {
    "base": {
      "white": { "value": "#ffffff" },
      "black": { "value": "#000000" }
    },
    "brand": {
      "primary": {
        "50": { "value": "#eff6ff" },
        "100": { "value": "#dbeafe" },
        "500": { "value": "#3b82f6" },
        "900": { "value": "#1e3a8a" }
      }
    },
    "semantic": {
      "background": {
        "primary": { "value": "{color.base.white}" },
        "secondary": { "value": "{color.brand.primary.50}" }
      },
      "text": {
        "primary": { "value": "{color.base.black}" },
        "secondary": { "value": "#6b7280" }
      }
    }
  }
}
```

**Step 4: Create Style Dictionary config**

`packages/tokens/config.js`:
```javascript
export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
};
```

**Step 5: Add build script**

`packages/tokens/build.js`:
```javascript
import StyleDictionary from 'style-dictionary';
import config from './config.js';

const sd = new StyleDictionary(config);
await sd.buildAllPlatforms();
console.log('✓ Design tokens built successfully');
```

**Step 6: Update package.json**
```json
{
  "name": "@repo/tokens",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "build": "node build.js",
    "dev": "node build.js --watch"
  },
  "devDependencies": {
    "style-dictionary": "^4.0.0"
  }
}
```

**Step 7: Document tokens in Docusaurus**

Create `apps/docs/docs/tokens/colors.mdx`:
```mdx
---
title: Color Tokens
description: Color palette and semantic color usage
---

import ColorTokens from '@site/src/components/ColorTokens';

# Color Tokens

Our color system is built on a foundation of base colors that are then
mapped to semantic tokens for consistent usage across the design system.

## Brand Colors

<ColorTokens category="brand.primary" />

## Semantic Colors

Semantic tokens map to specific use cases:

<ColorTokens category="semantic.background" />
<ColorTokens category="semantic.text" />

## Usage

\`\`\`tsx
import '@repo/tokens/dist/css/variables.css';

// Use in CSS
.my-component {
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
}

// Or import JavaScript tokens
import tokens from '@repo/tokens/dist/js/tokens.js';

const styles = {
  backgroundColor: tokens.color.background.primary,
};
\`\`\`
```

**Deliverable**: Design tokens package generating CSS variables and JS tokens

---

## Phase 4: Migration & Content (Week 5-6)

### 4.1 Confluence Content Migration

**Step 1: Audit existing content**

Create a spreadsheet with:
- Page title
- URL
- Owner/maintainer
- Last updated
- Migration priority (High/Medium/Low)
- New location (Docusaurus path)
- Status (Not started/In progress/Complete)

**Step 2: Export Confluence content**
- Use Confluence's built-in export (Space Tools > Content Tools > Export)
- Choose "HTML" format
- This preserves links and structure

**Step 3: Convert HTML to Markdown**

Create migration script `scripts/migrate-confluence.js`:
```javascript
import TurndownService from 'turndown';
import fs from 'fs/promises';
import path from 'path';

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

async function convertFile(inputPath, outputPath) {
  const html = await fs.readFile(inputPath, 'utf-8');
  const markdown = turndown.turndown(html);
  
  // Add frontmatter
  const frontmatter = `---
title: ${path.basename(outputPath, '.md')}
---

`;
  
  await fs.writeFile(outputPath, frontmatter + markdown);
  console.log(`✓ Converted ${outputPath}`);
}

// Usage: node scripts/migrate-confluence.js input.html output.md
const [inputPath, outputPath] = process.argv.slice(2);
await convertFile(inputPath, outputPath);
```

**Step 4: Manual cleanup**
- Fix image paths
- Update internal links
- Add proper frontmatter
- Reformat code blocks
- Add component examples

**Step 5: Set up redirects**

Create `apps/docs/static/_redirects` (for Netlify) or configure in Vercel:
```
/old-confluence-url  /docs/new-path  301
```

---

### 4.2 Component Documentation Template

Create consistent component documentation. Template:

`apps/docs/docs/components/_template.mdx`:
```mdx
---
title: ComponentName
description: Brief component description
---

import { ComponentDemo } from '@site/src/components/ComponentDemo';

# ComponentName

Brief description (1-2 sentences) of what this component does and when to use it.

<ComponentDemo component="ComponentName" />

## Usage

Basic usage example with the most common props:

\`\`\`tsx
import { ComponentName } from '@repo/ui';

export function Example() {
  return (
    <ComponentName
      variant="primary"
      onClick={() => console.log('clicked')}
    >
      Label
    </ComponentName>
  );
}
\`\`\`

## Variants

### Primary
Use for main call-to-action buttons.

<ComponentDemo component="ComponentName" variant="primary" />

### Secondary
Use for secondary actions.

<ComponentDemo component="ComponentName" variant="secondary" />

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'text' | 'primary' | Visual style variant |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the component |
| disabled | boolean | false | Disables interaction |
| onClick | () => void | - | Click handler |

## Accessibility

- **Keyboard Navigation**: Focusable via Tab key, activates with Enter/Space
- **ARIA Attributes**: Automatically includes `role="button"` when needed
- **Screen Readers**: Announce button purpose and state

## Best Practices

### ✅ Do
- Use primary variant sparingly (1-2 per page)
- Provide clear, action-oriented labels
- Ensure sufficient color contrast

### ❌ Don't
- Use multiple primary buttons in close proximity
- Use generic labels like "Click here"
- Rely on color alone to convey meaning

## Design Resources

- [View in Figma](https://figma.com/file/...)
- [View in Storybook](/storybook/?path=/docs/components-componentname)

## Related Components

- [IconButton](/docs/components/icon-button) - Button with icon only
- [Link](/docs/components/link) - Navigation component
```

---

## Phase 5: Deployment & CI/CD (Week 7)

### 5.1 GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Documentation

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
  TURBO_TEAM: ${{ vars.TURBO_TEAM }}

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV
          
      - name: Setup pnpm cache
        uses: actions/cache@v3
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-
            
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Build all packages
        run: pnpm turbo build
        
      - name: Upload Docusaurus build
        uses: actions/upload-artifact@v4
        with:
          name: docusaurus-build
          path: apps/docs/build
          
      - name: Upload Storybook build
        uses: actions/upload-artifact@v4
        with:
          name: storybook-build
          path: apps/storybook/storybook-static

  deploy-vercel:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Download artifacts
        uses: actions/download-artifact@v4
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

### 5.2 Vercel Configuration

**Option A: Deploy as single site with subpaths**

Create `vercel.json` in root:
```json
{
  "buildCommand": "pnpm turbo build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/storybook/:path*",
      "destination": "/apps/storybook/storybook-static/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/apps/docs/build/:path*"
    }
  ]
}
```

Create `dist/` folder script:
```bash
#!/bin/bash
mkdir -p dist
cp -r apps/docs/build/* dist/
mkdir -p dist/storybook
cp -r apps/storybook/storybook-static/* dist/storybook/
```

**Option B: Deploy as separate projects**

Deploy Docusaurus and Storybook as separate Vercel projects:
- `docs.yourcompany.com` → Docusaurus
- `storybook.yourcompany.com` → Storybook

Link between them in navigation.

---

### 5.3 Preview Deployments

Vercel automatically creates preview deployments for pull requests.

Add comment to PRs with deployment URLs:

`.github/workflows/comment-preview.yml`:
```yaml
name: Comment Preview URLs

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - name: Comment PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## 📚 Documentation Preview

Preview your changes:
- 📖 Docs: https://docs-preview-${context.issue.number}.vercel.app
- 📦 Storybook: https://docs-preview-${context.issue.number}.vercel.app/storybook

These previews will update with new commits.`
            })
```

---

## Phase 6: Team Onboarding (Week 8)

### 6.1 Documentation for Developers

Create `CONTRIBUTING.md` in root:
```markdown
# Contributing to Documentation

## Getting Started

1. **Clone and setup**
   \`\`\`bash
   git clone https://github.com/your-org/design-system-docs.git
   cd design-system-docs
   pnpm install
   \`\`\`

2. **Run locally**
   \`\`\`bash
   # Run documentation site
   pnpm docs:dev
   # Runs at http://localhost:3000
   
   # Run Storybook
   pnpm storybook
   # Runs at http://localhost:6006
   
   # Run both
   pnpm dev
   \`\`\`

## Adding Documentation

### Component Documentation

1. Create component with story:
   \`\`\`
   packages/ui/src/components/NewComponent/
   ├── NewComponent.tsx
   ├── NewComponent.test.tsx
   └── NewComponent.stories.tsx
   \`\`\`

2. Create usage guide:
   \`\`\`
   apps/docs/docs/components/new-component.mdx
   \`\`\`

3. Add to sidebar in `apps/docs/sidebars.ts`

### Design Token Documentation

1. Add token to `packages/tokens/tokens/*.json`
2. Run `pnpm --filter tokens build`
3. Document in `apps/docs/docs/tokens/*.mdx`

## Pull Request Process

1. Create branch from `main`
2. Make changes
3. Run `pnpm lint` and `pnpm type-check`
4. Commit with conventional commits format:
   - `docs: add Button component documentation`
   - `feat: add new color tokens`
   - `fix: correct Typography story`
5. Push and create PR
6. Preview deployment link will be added automatically
7. Request review from docs team
8. Merge after approval

## Documentation Standards

- Use sentence case for headings
- Include code examples for all components
- Add accessibility information
- Link to Figma designs
- Keep paragraphs short (2-3 sentences)
- Use MDX components for interactive examples

## Using AI Assistance

GitHub Copilot is enabled for this repository. Use it to:
- Generate initial documentation drafts
- Create story templates
- Suggest component descriptions

Use the prompt:
\`\`\`
@workspace Generate documentation for this component following our standards
\`\`\`
```

---

### 6.2 Video Tutorials

Create screen recordings for:
1. **Setup walkthrough** (5 min) - Clone, install, run locally
2. **Adding component docs** (10 min) - Full workflow from component to published docs
3. **Using AI search** (3 min) - How to ask questions and get help
4. **Editing existing docs** (5 min) - Make changes, preview, submit PR

Host on internal wiki or YouTube (unlisted).

---

### 6.3 Office Hours

Set up weekly 30-minute office hours for first 4 weeks:
- Slack channel: `#design-system-docs`
- Office hours: Tuesdays 2-2:30pm
- Document common questions in FAQ

---

## Success Metrics

Track these metrics after launch:

### Technical Metrics
- [ ] Build time with cache: <10 seconds
- [ ] Build time without cache: <2 minutes
- [ ] Page load time: <2 seconds
- [ ] Lighthouse score: >90

### Usage Metrics (Google Analytics)
- [ ] Monthly active users
- [ ] Most viewed pages
- [ ] Search queries (via Algolia)
- [ ] AI chat interactions
- [ ] Average time on site

### Content Metrics
- [ ] Total pages documented
- [ ] Components with full documentation (target: 100%)
- [ ] Documentation coverage (what % has been migrated)
- [ ] Outdated pages (last updated >6 months)

### Team Adoption
- [ ] PRs per week updating docs
- [ ] Number of contributors
- [ ] Documentation feedback (via survey)
- [ ] Support ticket reduction (target: 20% reduction)

---

## Rollout Plan

### Week 1-2: Soft Launch
- Deploy to staging environment
- Share with design system team (5-10 people)
- Gather initial feedback
- Fix critical issues

### Week 3: Internal Beta
- Share with engineering team (50-100 people)
- Announce in all-hands meeting
- Send onboarding email with tutorials
- Monitor Slack channel for questions

### Week 4: Public Launch
- Migrate DNS to new documentation site
- Sunset Confluence (read-only mode for 30 days)
- Blog post announcing new docs
- Update all external links

### Week 5-8: Optimization
- Analyze usage metrics
- Add most-requested content
- Fix usability issues
- Continue migration of edge case content

---

## Troubleshooting

### Common Issues

**Issue**: `pnpm install` fails with permission errors
**Solution**: Check Node version (requires v18+), clear pnpm cache: `pnpm store prune`

**Issue**: Turborepo cache not working
**Solution**: 
1. Check `turbo.json` outputs are correct
2. Verify `TURBO_TOKEN` is set for remote caching
3. Clear cache: `pnpm turbo run build --force`

**Issue**: Storybook not showing components from packages
**Solution**: 
1. Verify stories path in `.storybook/main.ts`
2. Check package is built: `pnpm --filter ui build`
3. Restart Storybook dev server

**Issue**: Docusaurus build fails with "Cannot resolve component"
**Solution**: 
1. Check component import paths
2. Ensure component is exported from package
3. Verify TypeScript paths in `tsconfig.json`

**Issue**: AI search not returning results
**Solution**:
1. Verify Algolia has crawled site (check dashboard)
2. Trigger manual recrawl
3. Check API keys are correct
4. Verify sitemap is accessible

---

## Resources & References

### Documentation
- [Turborepo Docs](https://turbo.build/repo/docs)
- [Docusaurus Docs](https://docusaurus.io/docs)
- [Storybook Docs](https://storybook.js.org/docs)
- [Style Dictionary Docs](https://amzn.github.io/style-dictionary)
- [Algolia DocSearch](https://docsearch.algolia.com/)

### Example Projects
- [Shopify Polaris](https://polaris.shopify.com/) - Design system docs
- [Stripe Docs](https://stripe.com/docs) - Developer documentation
- [Material UI](https://mui.com/) - Component documentation
- [Chakra UI](https://chakra-ui.com/) - Design system + docs

### Team Contacts
- **Project Lead**: [Name] - @slack-handle
- **Design System Owner**: [Name] - @slack-handle
- **DevOps Lead**: [Name] - @slack-handle
- **Technical Writer**: [Name] - @slack-handle

### Slack Channels
- `#design-system` - General design system discussion
- `#design-system-docs` - Documentation specific questions
- `#frontend-guild` - Frontend architecture discussions

---

## Timeline Summary

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| 1: Foundation | 2 weeks | Monorepo setup, Docusaurus, Storybook |
| 2: AI Integration | 1 week | Search, chatbot, Copilot |
| 3: Design Tokens | 1 week | Style Dictionary, token docs |
| 4: Migration | 2 weeks | Confluence content, component docs |
| 5: Deployment | 1 week | CI/CD, hosting, previews |
| 6: Onboarding | 1 week | Training, docs, support |
| **Total** | **8 weeks** | Fully launched documentation system |

---

## Next Steps

1. **Review this document** with stakeholders
2. **Assign ownership** for each phase
3. **Set up repository** and initial access
4. **Schedule kickoff meeting** with dev team
5. **Begin Phase 1** implementation

---

## Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Sponsor | | | |
| Technical Lead | | | |
| Design Lead | | | |
| Engineering Manager | | | |

---

**Document Version**: 1.0  
**Last Updated**: December 2024  
**Next Review**: After Phase 3 completion
