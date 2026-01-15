# VA Documentation Monorepo

This monorepo demonstrates how multiple documentation sites can be organized together with centralized search capabilities, similar to the platform site architecture.

## 🔍 Centralized Search

**[Search Portal](http://localhost:3002/search/)** - Unified search across all documentation sites.

## 📚 Documentation Sites

### Search Portal (`apps/search/`)
- **URL**: http://localhost:3002/search/
- **Purpose**: Centralized search across all documentation
- **Technology**: Docusaurus 3.9.2
- **Features**: Google-like search, cross-site results, quick links

### Design System (`apps/design-system/`)
- **URL**: http://localhost:3000
- **Purpose**: VA Design System components, patterns, and guidelines
- **Technology**: Docusaurus 3.9.2
- **Content**: Components, patterns, templates, foundation, content style guide

### Engineering Documentation (`apps/confluence-migration/`)
- **URL**: http://localhost:3001/confluence/
- **Purpose**: Engineering processes and developer guides (Confluence migration demo)
- **Technology**: Docusaurus 3.9.2  
- **Content**: Code review processes, development guides, testing strategies

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Start all sites in development mode
pnpm dev

# Start individual sites
pnpm search:dev        # Search portal on :3002
pnpm design-system:dev # Design system on :3000
pnpm confluence:dev    # Engineering docs on :3001

# Build all packages and sites
pnpm build

# Run tests
pnpm test
```

## 🏗 Architecture

```
├── apps/
│   ├── search/                 # Centralized search portal (:3002)
│   ├── design-system/          # Main design system docs (:3000)
│   └── confluence-migration/   # Engineering docs (:3001)
├── packages/
│   ├── ui/                     # Shared React components
│   ├── tokens/                 # Design tokens (Style Dictionary)
│   └── search-config/          # Shared search configuration
└── turbo.json                  # Turborepo configuration
```

## ✨ Key Features

- **Dedicated Search App**: Independent search portal on its own port
- **Unified Results**: Search across all documentation sites from one interface
- **Shared Components**: Reusable UI components across all apps
- **Design Tokens**: Centralized design system tokens
- **Build Orchestration**: Turborepo for efficient builds and caching
- **TypeScript**: Full type safety across the monorepo

## 🔄 Adding New Documentation Sites

1. Create new app in `apps/[new-site]/`
2. Add shared dependencies from `packages/`
3. Update `turbo.json` for build pipeline
4. Add site to search portal mock data
5. Configure search indexing for unified search
6. Add dev script in root `package.json`

This structure allows unlimited documentation sites to be added while maintaining centralized search and shared components.