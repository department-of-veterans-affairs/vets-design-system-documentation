import React, { useState, useEffect } from 'react';

interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  source: 'design-system' | 'confluence';
}

interface GlobalSearchProps {
  placeholder?: string;
  className?: string;
}

/**
 * GlobalSearch component demonstrates centralized search across multiple documentation sites.
 * In a real implementation, this would connect to Algolia DocSearch or similar service
 * that indexes content from both the design system and confluence migration apps.
 */
export const GlobalSearch: React.FC<GlobalSearchProps> = ({ 
  placeholder = "Search across all documentation...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock search function - in real implementation would call search API
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      // Mock results from both documentation sites
      const mockResults: SearchResult[] = [
        {
          title: 'Button Component',
          excerpt: 'Primary and secondary button variants for user actions...',
          url: '/docs/components/button',
          source: 'design-system' as const
        },
        {
          title: 'Development Workflow',
          excerpt: 'Standard development workflow for VA projects using GitHub...',
          url: '/confluence/docs/processes/development-workflow',
          source: 'confluence' as const
        },
        {
          title: 'Color Tokens',
          excerpt: 'Design tokens for brand colors, semantic colors, and themes...',
          url: '/docs/foundation/colors',
          source: 'design-system' as const
        },
        {
          title: 'Development Setup Guide',
          excerpt: 'Complete guide to setting up your local development environment...',
          url: '/confluence/docs/guides/setup',
          source: 'confluence' as const
        }
      ].filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
      setIsOpen(mockResults.length > 0);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const getSourceIcon = (source: SearchResult['source']) => {
    switch (source) {
      case 'design-system':
        return '🎨';
      case 'confluence':
        return '📚';
      default:
        return '📄';
    }
  };

  const getSourceLabel = (source: SearchResult['source']) => {
    switch (source) {
      case 'design-system':
        return 'Design System';
      case 'confluence':
        return 'Engineering Wiki';
      default:
        return 'Documentation';
    }
  };

  return (
    <div className={`global-search ${className}`} style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
        />
        
        {loading && (
          <div style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            ⏳
          </div>
        )}
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10
            }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Results dropdown */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '8px',
            backgroundColor: 'white',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            zIndex: 20,
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            {results.length === 0 ? (
              <div style={{ padding: '16px', color: '#6b7280' }}>
                No results found for "{query}"
              </div>
            ) : (
              <>
                <div style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #f3f4f6',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </div>
                
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      borderBottom: index < results.length - 1 ? '1px solid #f3f4f6' : 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: '#6b7280',
                        marginTop: '2px'
                      }}>
                        <span>{getSourceIcon(result.source)}</span>
                        <span>{getSourceLabel(result.source)}</span>
                      </div>
                      
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontWeight: '600',
                          color: '#111827',
                          marginBottom: '4px'
                        }}>
                          {result.title}
                        </div>
                        <div style={{
                          fontSize: '14px',
                          color: '#6b7280',
                          lineHeight: '1.4'
                        }}>
                          {result.excerpt}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};