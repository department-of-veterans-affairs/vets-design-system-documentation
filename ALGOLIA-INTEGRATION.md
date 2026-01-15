# Algolia Integration Guide

## Current Status: Mock Implementation
The search app currently uses mock data to demonstrate the unified search concept. This is intentional to show the functionality without requiring external service setup.

## Moving to Production Algolia

### Step 1: Apply for Algolia DocSearch
1. Visit https://docsearch.algolia.com/apply/
2. Submit application with:
   - Your documentation URLs
   - Project description
   - Why you need unified search

### Step 2: Configure Algolia Integration

Replace the mock search in `apps/search/src/pages/index.tsx`:

```tsx
// Replace mock implementation with Algolia
import { DocSearch } from '@docsearch/react';

// Add to your component
<DocSearch
  appId="YOUR_APP_ID"
  indexName="YOUR_INDEX_NAME"
  apiKey="YOUR_SEARCH_API_KEY"
  insights={true}
  // Configure for multiple sites
  transformSearchClient={(searchClient) => {
    // Add custom filtering for multiple documentation sites
    return searchClient;
  }}
/>
```

### Step 3: Multi-Site Index Configuration

Configure Algolia to index all your documentation sites:

```json
// .github/algolia-config.json
{
  "index_name": "va_docs_unified",
  "start_urls": [
    {
      "url": "https://design.va.gov/",
      "tags": ["design-system"]
    },
    {
      "url": "https://confluence-migration.va.gov/",
      "tags": ["engineering-docs"]
    }
  ],
  "sitemap_urls": [
    "https://design.va.gov/sitemap.xml",
    "https://confluence-migration.va.gov/sitemap.xml"
  ],
  "selectors": {
    "lvl0": "h1",
    "lvl1": "h2",
    "lvl2": "h3",
    "text": "p, li"
  },
  "custom_settings": {
    "attributesForFaceting": ["tags", "type"]
  }
}
```

### Step 4: Alternative Solutions

If Algolia DocSearch isn't approved, consider:

1. **Self-hosted Algolia**: Pay for Algolia service directly
2. **Elastic Search**: Self-hosted search solution
3. **Local Search**: Use `docusaurus-lunr-search` (already configured in individual apps)
4. **Static Search**: Generate search index at build time

## Benefits of Current Mock Approach

1. **Immediate Demo**: Works without external dependencies
2. **Design Validation**: Test UI/UX before committing to search service
3. **Development**: Team can work on other features while waiting for Algolia approval
4. **Flexibility**: Easy to swap in different search backends

## Next Steps

1. **Keep mock for development**: Allows continued work on other features
2. **Apply for Algolia**: Submit application for production use
3. **Plan migration**: Design how to swap mock for real search
4. **Test integration**: When Algolia is approved, replace mock implementation

The current implementation demonstrates the value and shows stakeholders exactly what the unified search experience would look like!