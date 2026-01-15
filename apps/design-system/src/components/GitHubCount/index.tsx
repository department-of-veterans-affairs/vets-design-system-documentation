import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface GitHubCountProps {
  url: string;
  label?: string;
}

/**
 * Extracts GitHub API search parameters from a GitHub issues URL.
 * Supports URLs like:
 * - https://github.com/owner/repo/issues?q=is:issue+is:open+label:component-name
 * - https://github.com/owner/repo/issues?q=is:issue+label:"DSC: Component"
 */
function parseGitHubUrl(url: string): { owner: string; repo: string; query: string } | null {
  try {
    const urlObj = new URL(url);

    // Check if it's a GitHub URL
    if (!urlObj.hostname.includes('github.com')) {
      return null;
    }

    // Extract owner and repo from path
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    if (pathParts.length < 2) {
      return null;
    }

    const owner = pathParts[0];
    const repo = pathParts[1];

    // Get the query parameter
    const queryParam = urlObj.searchParams.get('q') || '';

    // Build the search query for GitHub API
    // Add repo qualifier to the search
    const searchQuery = `repo:${owner}/${repo} ${queryParam}`;

    return { owner, repo, query: searchQuery };
  } catch {
    return null;
  }
}

// Cache duration: 24 hours in milliseconds
const CACHE_DURATION = 24 * 60 * 60 * 1000;

/**
 * Fetches the count of issues from GitHub API.
 * Note: GitHub API has rate limits (60 requests/hour for unauthenticated).
 */
async function fetchIssueCount(query: string): Promise<number | null> {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.github.com/search/issues?q=${encodedQuery}&per_page=1`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      // Rate limited or other error
      if (response.status === 403) {
        console.warn('GitHub API rate limit reached');
      }
      return null;
    }

    const data = await response.json();
    return data.total_count ?? null;
  } catch (error) {
    console.error('Error fetching GitHub issue count:', error);
    return null;
  }
}

/**
 * Component that displays a count badge for GitHub issues.
 * Fetches the count from GitHub API based on the provided URL.
 */
export default function GitHubCount({ url, label }: GitHubCountProps): JSX.Element | null {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const parsed = parseGitHubUrl(url);

    if (!parsed) {
      setLoading(false);
      setError(true);
      return;
    }

    // Use a cache key based on the URL
    const cacheKey = `github-count-${url}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const { count: cachedCount, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        setCount(cachedCount);
        setLoading(false);
        return;
      }
    }

    fetchIssueCount(parsed.query).then((result) => {
      setCount(result);
      setLoading(false);

      if (result !== null) {
        localStorage.setItem(cacheKey, JSON.stringify({
          count: result,
          timestamp: Date.now(),
        }));
      }
    });
  }, [url]);

  if (loading) {
    return <span className={styles.badge} title="Loading...">...</span>;
  }

  if (error || count === null) {
    return null;
  }

  return (
    <span className={styles.badge} title={label || `${count} items`}>
      {count}
    </span>
  );
}

/**
 * Hook to get GitHub issue count for use in other components.
 */
export function useGitHubCount(url: string): { count: number | null; loading: boolean } {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsed = parseGitHubUrl(url);

    if (!parsed) {
      setLoading(false);
      return;
    }

    const cacheKey = `github-count-${url}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const { count: cachedCount, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        setCount(cachedCount);
        setLoading(false);
        return;
      }
    }

    fetchIssueCount(parsed.query).then((result) => {
      setCount(result);
      setLoading(false);

      if (result !== null) {
        localStorage.setItem(cacheKey, JSON.stringify({
          count: result,
          timestamp: Date.now(),
        }));
      }
    });
  }, [url]);

  return { count, loading };
}
