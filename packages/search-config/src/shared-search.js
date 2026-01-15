/**
 * Shared search configuration for indexing multiple Docusaurus sites
 * This demonstrates how to configure Algolia DocSearch to crawl and index
 * content from both the design-system and confluence-migration apps
 */

export const sharedSearchConfig = {
  // Algolia configuration that would be shared between apps
  appId: 'YOUR_ALGOLIA_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY', 
  indexName: 'va-documentation',
  
  // Configuration for cross-site search
  sitemap: [
    'https://design.va.gov/sitemap.xml',
    'https://design.va.gov/confluence/sitemap.xml'
  ],
  
  // Search parameters for unified results
  searchParameters: {
    facetFilters: [],
    hitsPerPage: 20
  },
  
  // Custom crawler configuration
  crawler: {
    startUrls: [
      {
        url: 'https://design.va.gov/',
        tags: ['design-system'],
        selectors_key: 'design-system'
      },
      {
        url: 'https://design.va.gov/confluence/',
        tags: ['confluence'],  
        selectors_key: 'confluence'
      }
    ],
    
    sitemap_urls: [
      'https://design.va.gov/sitemap.xml',
      'https://design.va.gov/confluence/sitemap.xml'
    ],
    
    selectors: {
      'design-system': {
        lvl0: '.theme-doc-sidebar-item-category-level-1 > .theme-doc-sidebar-item-link',
        lvl1: '[class*="docTitle"]',
        lvl2: 'article h2',
        lvl3: 'article h3',
        lvl4: 'article h4',
        lvl5: 'article h5',
        text: 'article p, article li',
      },
      'confluence': {
        lvl0: '.theme-doc-sidebar-item-category-level-1 > .theme-doc-sidebar-item-link',
        lvl1: '[class*="docTitle"]', 
        lvl2: 'article h2',
        lvl3: 'article h3',
        lvl4: 'article h4',
        lvl5: 'article h5',
        text: 'article p, article li',
      }
    },
    
    // Custom attributes for filtering results by source
    custom_settings: {
      attributesForFaceting: ['tags', 'type', 'source']
    }
  }
};

/**
 * Search helper functions for implementing unified search
 */
export const searchHelpers = {
  // Format search results to show source information
  formatResult: (hit) => {
    const sourceIcons = {
      'design-system': '🎨',
      'confluence': '📚'
    };
    
    const sourceLabels = {
      'design-system': 'Design System',
      'confluence': 'Engineering Wiki'  
    };
    
    const source = hit._tags?.[0] || 'unknown';
    
    return {
      ...hit,
      source: {
        icon: sourceIcons[source] || '📄',
        label: sourceLabels[source] || 'Documentation',
        key: source
      }
    };
  },
  
  // Search across multiple indices
  multiSearch: async (query, algoliaClient) => {
    const searches = [
      {
        indexName: 'va-design-system',
        query,
        params: {
          tagFilters: ['design-system'],
          hitsPerPage: 10
        }
      },
      {
        indexName: 'va-confluence',
        query,  
        params: {
          tagFilters: ['confluence'],
          hitsPerPage: 10
        }
      }
    ];
    
    const results = await algoliaClient.multipleQueries(searches);
    
    // Merge and sort results by relevance
    const allHits = results.results.flatMap(result => 
      result.hits.map(hit => searchHelpers.formatResult(hit))
    );
    
    return allHits.sort((a, b) => b._score - a._score);
  }
};