---
title: Multi-Site Search Architecture
description: Research and recommendations for implementing site-wide search across VA Design System documentation sites.
sidebar_label: Search Architecture
draft: true
---

# Multi-Site Search Architecture

This document outlines options for implementing a unified search experience across multiple documentation sites (e.g., Design System docs + Team Confluence docs).

## Requirements

- Search across multiple Docusaurus sites from a single search box
- Return results that link to the correct site
- Handle both public (Design System) and potentially private (Team Docs) content
- Comply with VA infrastructure and security requirements

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐
│  Design System  │     │   Team Docs     │
│  (design.va.gov)│     │(team-docs.va.gov)│
└────────┬────────┘     └────────┬────────┘
         │                       │
         └───────────┬───────────┘
                     ▼
            ┌─────────────────┐
            │  Search Index   │
            │  (unified)      │
            └────────┬────────┘
                     ▼
            ┌─────────────────┐
            │ Search Component│
            │ (shared across  │
            │     sites)      │
            └─────────────────┘
```

## Option 1: Algolia DocSearch

**Best for: Public documentation sites**

### Overview
- Industry standard for documentation search
- Free for open source and public documentation
- Crawler automatically indexes your sites
- Multi-index search returns results from all configured sites

### Pros
- Very low setup effort (~1 day)
- Excellent search relevance out of the box
- No infrastructure to maintain
- Free tier generous for most use cases
- Built-in Docusaurus plugin

### Cons
- SaaS solution (may require VA security review)
- Private docs require paid tier (~$150/mo+)
- Dependent on external service
- Crawler schedule not real-time

### Implementation Steps
1. Apply at [docsearch.algolia.com/apply](https://docsearch.algolia.com/apply/)
2. Provide URLs for all sites to be indexed
3. Receive `appId`, `apiKey`, and `indexName`
4. Configure in `docusaurus.config.ts`:

```ts
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY', // Public search-only key
    indexName: 'va-design-system',
    contextualSearch: true,
    // For multi-site, configure external URLs
    externalUrlRegex: 'team-docs\\.va\\.gov',
  },
}
```

### Multi-Index Configuration
For searching across multiple sites, configure Algolia to use multiple indices:

```ts
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'va-design-system',
  searchParameters: {
    // Search across multiple indices
    index: ['va-design-system', 'va-team-docs'],
  },
}
```

---

## Option 2: Typesense (Self-Hosted)

**Best for: Private/internal documentation or when SaaS is not permitted**

### Overview
- Open-source search engine (similar to Algolia)
- Can be self-hosted on VA infrastructure
- Very fast search with typo tolerance
- Official Docusaurus plugin available

### Pros
- Full control over data and infrastructure
- No external dependencies
- Works with private/authenticated docs
- Free (self-hosted) or affordable cloud (~$30/mo)
- No ATO concerns with self-hosting

### Cons
- More setup effort (~2-3 days)
- Requires infrastructure (Docker/Kubernetes)
- Must build/maintain indexing pipeline
- Need to handle scaling yourself

### Implementation Steps

1. **Deploy Typesense server:**
```bash
docker run -p 8108:8108 \
  -v /data/typesense:/data \
  typesense/typesense:0.25.1 \
  --data-dir /data \
  --api-key=your-api-key
```

2. **Install Docusaurus plugin:**
```bash
npm install docusaurus-theme-search-typesense
```

3. **Configure in `docusaurus.config.ts`:**
```ts
themes: ['docusaurus-theme-search-typesense'],
themeConfig: {
  typesense: {
    typesenseCollectionName: 'va-docs',
    typesenseServerConfig: {
      nodes: [{
        host: 'search.va.gov',
        port: 443,
        protocol: 'https',
      }],
      apiKey: 'search-only-api-key',
    },
  },
}
```

4. **Create indexing script** (runs at build time):
```js
// scripts/index-search.js
const Typesense = require('typesense');
const glob = require('glob');
const matter = require('gray-matter');

// Index content from multiple sites
const sites = [
  { name: 'design-system', path: '../docs/docs/**/*.{md,mdx}' },
  { name: 'team-docs', path: '../team-docs/docs/**/*.{md,mdx}' },
];

// Build unified index...
```

---

## Option 3: Meilisearch

**Best for: Similar to Typesense, alternative self-hosted option**

### Overview
- Another open-source search engine
- Rust-based, very performant
- Good Docusaurus community plugin

### Pros
- Easy to set up
- Great search relevance
- Self-hostable
- Free and open source

### Cons
- Smaller community than Algolia/Typesense
- Plugin less mature than official options

---

## Option 4: Local Search (Single Site Only)

**Best for: Single site, offline capability**

### Overview
- `@easyops-cn/docusaurus-search-local` plugin
- Builds search index at compile time
- Works offline, no external service

### Limitation
**Cannot search across multiple sites** - index is embedded in each site.

### When to Use
- Development/preview environments
- Single site deployments
- Offline documentation needs

---

## Comparison Matrix

| Feature | Algolia | Typesense | Meilisearch | Local |
|---------|---------|-----------|-------------|-------|
| Multi-site search | ✅ | ✅ | ✅ | ❌ |
| Setup effort | Low | Medium | Medium | Low |
| Self-hostable | ❌ | ✅ | ✅ | N/A |
| Private docs | Paid | ✅ | ✅ | ✅ |
| Cost | Free* | Free | Free | Free |
| VA ATO friendly | Review needed | ✅ | ✅ | ✅ |
| Real-time indexing | ❌ | ✅ | ✅ | Build time |
| Typo tolerance | ✅ | ✅ | ✅ | Limited |

*Free for public open-source docs

---

## Recommendation

### For VA Design System + Team Docs

**Phase 1: Start with Algolia DocSearch**
- Apply for free DocSearch program (public docs qualify)
- Quick win with minimal infrastructure
- Evaluate if SaaS is acceptable for VA

**Phase 2: If SaaS not approved, migrate to Typesense**
- Self-host on VA cloud infrastructure
- Build unified indexing pipeline
- Share search component between sites

### Proposed Directory Structure

```
platform/
├── apps/
│   ├── docs/              # Design System (design.va.gov)
│   ├── team-docs/         # Team Docs (team-docs.va.gov)
│   └── search-indexer/    # Shared indexing scripts
├── packages/
│   └── search-ui/         # Shared search component
```

---

## Next Steps

1. [ ] Decide on public vs private for team docs
2. [ ] Apply for Algolia DocSearch (if public)
3. [ ] Or provision Typesense infrastructure (if private)
4. [ ] Create team-docs Docusaurus site
5. [ ] Implement unified search component
6. [ ] Set up indexing pipeline in CI/CD

---

## Resources

- [Algolia DocSearch](https://docsearch.algolia.com/)
- [Typesense Documentation](https://typesense.org/docs/)
- [Meilisearch Documentation](https://www.meilisearch.com/docs)
- [Docusaurus Search Plugins](https://docusaurus.io/docs/search)
- [docusaurus-theme-search-typesense](https://github.com/typesense/docusaurus-theme-search-typesense)
