import React, { useState, useEffect } from 'react';
import styles from './ReleaseNotes.module.css';

interface Release {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  prerelease: boolean;
}

interface ReleaseNotesProps {
  repoUrl: string;
  title: string;
  maxReleases?: number;
  showPrerelease?: boolean;
}

const ReleaseNotes: React.FC<ReleaseNotesProps> = ({ 
  repoUrl, 
  title, 
  maxReleases = 3,
  showPrerelease = false 
}) => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReleases = async () => {
      try {
        setLoading(true);
        
        // Extract owner/repo from URL
        const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) {
          throw new Error('Invalid GitHub repository URL');
        }
        
        const [, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch releases');
        }
        
        const allReleases: Release[] = await response.json();
        
        // Filter and limit releases
        let filteredReleases = allReleases;
        if (!showPrerelease) {
          filteredReleases = allReleases.filter(release => !release.prerelease);
        }
        
        setReleases(filteredReleases.slice(0, maxReleases));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load releases');
        console.error('Error loading releases:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReleases();
  }, [repoUrl, maxReleases, showPrerelease]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const processReleaseBody = (body: string) => {
    // Basic markdown to HTML conversion for release notes
    return body
      .replace(/^### (.+)$/gm, '<h4>$1</h4>')
      .replace(/^## (.+)$/gm, '<h3>$1</h3>')
      .replace(/^\* (.+)$/gm, '<li>$1</li>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/<\/li>\n<li>/g, '</li><li>');
  };

  if (loading) {
    return (
      <div className={styles.releaseNotes}>
        <h2>{title}</h2>
        <div className={styles.loading}>Loading releases...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.releaseNotes}>
        <h2>{title}</h2>
        <div className={styles.error}>
          <p>Unable to load releases from GitHub.</p>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.releaseNotes}>
      <h2>{title}</h2>
      
      {releases.length === 0 ? (
        <p>No releases found.</p>
      ) : (
        <div className={styles.releases}>
          {releases.map((release) => (
            <article key={release.tag_name} className={styles.release}>
              <header className={styles.releaseHeader}>
                <h3>
                  <a href={release.html_url} target="_blank" rel="noopener noreferrer">
                    {release.name || release.tag_name}
                  </a>
                  {release.prerelease && (
                    <span className={styles.prereleaseBadge}>Pre-release</span>
                  )}
                </h3>
                <time dateTime={release.published_at} className={styles.releaseDate}>
                  {formatDate(release.published_at)}
                </time>
              </header>
              
              {release.body && (
                <div 
                  className={styles.releaseBody}
                  dangerouslySetInnerHTML={{ 
                    __html: `<p>${processReleaseBody(release.body)}</p>` 
                  }}
                />
              )}
            </article>
          ))}
        </div>
      )}
      
      <div className={styles.viewAllLink}>
        <a 
          href={`${repoUrl}/releases`}
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.linkAction}
        >
          View all {title.toLowerCase()} →
        </a>
      </div>
    </div>
  );
};

export default ReleaseNotes;