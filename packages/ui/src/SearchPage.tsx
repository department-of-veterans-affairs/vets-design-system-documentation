import React, { useState, useEffect } from 'react';
import './SearchPage.css';

interface SearchResult {
  title: string;
  content: string;
  url: string;
  type: 'design-system' | 'confluence';
  section?: string;
}

interface SearchPageProps {
  appType: 'design-system' | 'confluence';
  baseUrl?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({ appType, baseUrl = '' }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock search data - in real implementation, this would come from Algolia
  const mockResults: SearchResult[] = [
    {
      title: "Button Component",
      content: "Use buttons to help users take actions quickly. Our buttons include several variations.",
      url: "/docs/components/button",
      type: "design-system",
      section: "Components"
    },
    {
      title: "Alert Component", 
      content: "Alerts keep users informed of important and sometimes time-sensitive changes.",
      url: "/docs/components/alert",
      type: "design-system",
      section: "Components"
    },
    {
      title: "Code Review Process",
      content: "Our code review process ensures quality, knowledge sharing, and consistency.",
      url: "/docs/processes/code-review",
      type: "confluence",
      section: "Engineering Processes"
    },
    {
      title: "Frontend Development Guide",
      content: "This guide covers frontend development practices for the VA platform.",
      url: "/docs/guides/frontend/getting-started",
      type: "confluence",
      section: "Developer Guides"
    },
    {
      title: "Testing Strategy",
      content: "Our comprehensive testing strategy ensures quality and reliability.",
      url: "/docs/processes/testing-strategy",
      type: "confluence",
      section: "Engineering Processes"
    },
    {
      title: "Accordion Component",
      content: "Accordions are a list of headers that hide or reveal additional content.",
      url: "/docs/components/accordion",
      type: "design-system",
      section: "Components"
    }
  ];

  const performSearch = (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      if (searchQuery.trim() === '') {
        setResults([]);
      } else {
        const filtered = mockResults.filter(result => 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    performSearch(query);
  }, [query]);

  const getResultUrl = (result: SearchResult) => {
    if (result.type === 'design-system') {
      return appType === 'design-system' ? result.url : `http://localhost:3000${result.url}`;
    } else {
      return appType === 'confluence' ? result.url : `http://localhost:3001/confluence${result.url}`;
    }
  };

  const getResultBadge = (result: SearchResult) => {
    return result.type === 'design-system' ? 'Design System' : 'Confluence Docs';
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Unified Documentation Search</h1>
        <p>Search across both Design System and Confluence documentation</p>
      </div>

      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        {isLoading && (
          <div className="search-loading" aria-label="Searching">⏳</div>
        )}
      </div>

      {query && (
        <div className="search-stats">
          {isLoading ? (
            'Searching...'
          ) : (
            `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
          )}
        </div>
      )}

      <div className="search-results">
        {results.map((result, index) => (
          <div key={index} className="search-result">
            <div className="result-header">
              <h3>
                <a href={getResultUrl(result)} className="result-title">
                  {result.title}
                </a>
              </h3>
              <span className={`result-badge result-badge--${result.type}`}>
                {getResultBadge(result)}
              </span>
            </div>
            <p className="result-content">{result.content}</p>
            <div className="result-meta">
              <span className="result-section">{result.section}</span>
              <span className="result-url">{getResultUrl(result)}</span>
            </div>
          </div>
        ))}
        
        {query && !isLoading && results.length === 0 && (
          <div className="no-results">
            <h3>No results found</h3>
            <p>Try different keywords or check the spelling.</p>
          </div>
        )}
      </div>

      <div className="search-footer">
        <h2>Search Tips</h2>
        <ul>
          <li><strong>Component names:</strong> Try "button", "alert", "accordion"</li>
          <li><strong>Process docs:</strong> Try "code review", "testing", "deployment"</li>
          <li><strong>Development guides:</strong> Try "frontend", "setup", "workflow"</li>
        </ul>
        
        <div className="search-info">
          <h3>About Unified Search</h3>
          <p>
            This search demonstrates how multiple documentation sites can be indexed together 
            using Algolia DocSearch. Results include content from both the Design System 
            documentation and Confluence-migrated content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;