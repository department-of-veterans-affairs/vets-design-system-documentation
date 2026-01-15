import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './search.module.css';

interface SearchResult {
  title: string;
  content: string;
  url: string;
  type: 'design-system' | 'confluence' | 'other';
  section?: string;
}

const mockResults: SearchResult[] = [
  {
    title: "Button Component",
    content: "Use buttons to help users take actions quickly. Our buttons include several variations like primary, secondary, and destructive actions.",
    url: "http://localhost:3000/docs/components/button",
    type: "design-system",
    section: "Components"
  },
  {
    title: "Alert Component",
    content: "Alerts keep users informed of important and sometimes time-sensitive changes. Use them to provide feedback or system status.",
    url: "http://localhost:3000/docs/components/alert",
    type: "design-system",
    section: "Components"
  },
  {
    title: "Form Patterns",
    content: "Common form patterns for collecting user information efficiently and accessibly.",
    url: "http://localhost:3000/docs/patterns/form",
    type: "design-system",
    section: "Patterns"
  },
  {
    title: "Code Review Process",
    content: "Our code review process ensures quality, knowledge sharing, and consistency across all engineering teams.",
    url: "http://localhost:3001/confluence/docs/processes/code-review",
    type: "confluence",
    section: "Engineering Processes"
  },
  {
    title: "Frontend Development Guide",
    content: "Comprehensive guide covering frontend development practices, tooling, and best practices for the VA platform.",
    url: "http://localhost:3001/confluence/docs/guides/frontend/getting-started",
    type: "confluence",
    section: "Developer Guides"
  },
  {
    title: "Testing Strategy",
    content: "Our comprehensive testing strategy ensures quality and reliability across all applications.",
    url: "http://localhost:3001/confluence/docs/processes/testing-strategy",
    type: "confluence",
    section: "Engineering Processes"
  },
  {
    title: "Accessibility Standards",
    content: "VA accessibility standards and testing guidance for inclusive design and 508 compliance.",
    url: "http://localhost:3000/docs/accessibility/standards",
    type: "design-system",
    section: "Accessibility"
  },
  {
    title: "Deployment Process",
    content: "Step-by-step deployment process for VA applications including staging and production environments.",
    url: "http://localhost:3001/confluence/docs/processes/deployment",
    type: "confluence",
    section: "Engineering Processes"
  }
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = (searchQuery: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (searchQuery.trim() === '') {
        setResults([]);
      } else {
        const filtered = mockResults.filter(result => 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.section?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    performSearch(query);
  }, [query]);

  const getResultBadge = (result: SearchResult) => {
    switch (result.type) {
      case 'design-system':
        return 'Design System';
      case 'confluence':
        return 'Engineering Docs';
      default:
        return 'Documentation';
    }
  };

  return (
    <Layout
      title="VA Documentation Search"
      description="Unified search across all VA documentation sites">
      <main className={styles.container}>
        <div className={styles.searchHeader}>
          <h1 className={styles.title}>VA Documentation Search</h1>
          <p className={styles.subtitle}>
            Search across all VA Design System and engineering documentation
          </p>
        </div>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search components, patterns, processes, guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            autoFocus
          />
          {isLoading && (
            <div className={styles.searchLoading} aria-label="Searching">⏳</div>
          )}
        </div>

        {query && (
          <div className={styles.searchStats}>
            {isLoading ? (
              'Searching...'
            ) : (
              `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
            )}
          </div>
        )}

        <div className={styles.searchResults}>
          {results.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              <div className={styles.resultHeader}>
                <h3>
                  <a href={result.url} className={styles.resultTitle} target="_blank">
                    {result.title}
                  </a>
                </h3>
                <span className={`${styles.resultBadge} ${styles[`badge--${result.type}`]}`}>
                  {getResultBadge(result)}
                </span>
              </div>
              <p className={styles.resultContent}>{result.content}</p>
              <div className={styles.resultMeta}>
                <span className={styles.resultSection}>{result.section}</span>
                <span className={styles.resultUrl}>{result.url}</span>
              </div>
            </div>
          ))}
          
          {query && !isLoading && results.length === 0 && (
            <div className={styles.noResults}>
              <h3>No results found</h3>
              <p>Try different keywords or check the spelling.</p>
            </div>
          )}
        </div>

        {!query && (
          <div className={styles.quickLinks}>
            <a href="http://localhost:3000" className={styles.linkCard} target="_blank">
              <h3>🎨 Design System</h3>
              <p>Components, patterns, templates, and design foundation documentation</p>
              <div className={styles.linkUrl}>localhost:3000</div>
            </a>
            
            <a href="http://localhost:3001/confluence/" className={styles.linkCard} target="_blank">
              <h3>📚 Engineering Docs</h3>
              <p>Migrated Confluence content: processes, guides, and team documentation</p>
              <div className={styles.linkUrl}>localhost:3001/confluence/</div>
            </a>
          </div>
        )}

        <div className={styles.searchFooter}>
          <h2>Search Tips</h2>
          <ul>
            <li><strong>Component names:</strong> Try "button", "alert", "accordion"</li>
            <li><strong>Process docs:</strong> Try "code review", "testing", "deployment"</li>
            <li><strong>Development guides:</strong> Try "frontend", "setup", "workflow"</li>
          </ul>
          
          <div className={styles.searchInfo}>
            <h3>About Unified Search</h3>
            <p>
              <strong>Current Status:</strong> This search uses mock data to demonstrate how multiple 
              documentation sites can be indexed together. This allows us to test the user experience 
              and validate the design before implementing a production search service.
            </p>
            <p>
              <strong>For Production:</strong> To enable real unified search across all VA documentation, 
              we would need to apply for Algolia DocSearch (free for open source projects) at{' '}
              <a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noopener noreferrer">
                docsearch.algolia.com/apply
              </a>. This requires:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Public documentation sites</li>
              <li>Open source or public good project status</li>
              <li>Publicly accessible site content</li>
            </ul>
            <p>
              <strong>Alternative Options:</strong> Self-hosted Algolia, Elasticsearch, or enhanced 
              local search (each Docusaurus app already includes lunr search). The mock implementation 
              demonstrates the exact functionality and user experience regardless of the backend chosen.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
