import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface StoryEmbedProps {
  /** Storybook story ID (e.g., "uswds-va-button--default") */
  storyId: string;
  /** Height of the iframe in pixels */
  height?: number;
  /** Accessible title for the iframe */
  title?: string;
  /** Optional code snippet to display */
  code?: string;
  /** Auto-load iframe when it comes into view (default: true) */
  autoLoad?: boolean;
  /** Load iframe immediately without intersection observer (default: false) */
  eager?: boolean;
  /** Show Storybook toolbar and addons in iframe (default: false) */
  showControls?: boolean;
  /** Pass args to the story */
  args?: Record<string, any>;
  /** Global parameters for the story */
  globals?: Record<string, any>;
}

// Use local storybook if available, otherwise link to VA's
const STORYBOOK_BASE = process.env.NODE_ENV === 'development'
  ? 'http://localhost:6006'  // Port 6006 has the working Platform Design System Storybook
  : 'https://design.va.gov/storybook';

const VA_STORYBOOK = 'https://design.va.gov/storybook';

export default function StoryEmbed({
  storyId,
  height = 120,
  title,
  code,
  autoLoad = true,
  eager = false,
  showControls = false,
  args,
  globals,
}: StoryEmbedProps): JSX.Element {
  const [iframeError, setIframeError] = useState(false);
  const [showIframe, setShowIframe] = useState(eager);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for auto-loading
  useEffect(() => {
    if (!autoLoad || eager || showIframe) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        // Start loading when 10% of the component is visible
        threshold: 0.1,
        // Start loading 100px before component comes into view
        rootMargin: '100px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoLoad, eager, showIframe]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  // Build iframe URL based on showControls setting
  const buildIframeUrl = () => {
    if (showControls) {
      // Use main interface with toolbar parameters
      const params = new URLSearchParams();
      params.append('path', `/story/${storyId}`);
      params.append('addons', 'true');
      params.append('toolbar', 'true');
      params.append('panel', '1');

      // Add args if provided
      if (args && Object.keys(args).length > 0) {
        const argsString = Object.entries(args)
          .map(([key, value]) => `${key}:${encodeURIComponent(String(value))}`)
          .join(';');
        params.append('args', argsString);
      }

      // Add globals if provided
      if (globals && Object.keys(globals).length > 0) {
        const globalsString = Object.entries(globals)
          .map(([key, value]) => `${key}:${encodeURIComponent(String(value))}`)
          .join(';');
        params.append('globals', globalsString);
      }

      return `${STORYBOOK_BASE}/?${params.toString()}`;
    } else {
      // For development, try a simple screenshot approach since iframe embedding is blocked
      if (process.env.NODE_ENV === 'development') {
        return null; // Don't try to embed, show clickable preview instead
      }
      
      // For production, use iframe.html
      const params = new URLSearchParams();
      params.append('id', storyId);
      params.append('viewMode', 'story');

      // Add args if provided
      if (args && Object.keys(args).length > 0) {
        const argsString = Object.entries(args)
          .map(([key, value]) => `${key}:${encodeURIComponent(String(value))}`)
          .join(';');
        params.append('args', argsString);
      }

      // Add globals if provided
      if (globals && Object.keys(globals).length > 0) {
        const globalsString = Object.entries(globals)
          .map(([key, value]) => `${key}:${encodeURIComponent(String(value))}`)
          .join(';');
        params.append('globals', globalsString);
      }

      return `${STORYBOOK_BASE}/iframe.html?${params.toString()}`;
    }
  };

  const storybookUrl = showControls 
    ? `${STORYBOOK_BASE}/?path=/story/${storyId}&addons=true&toolbar=true&panel=1`
    : `${STORYBOOK_BASE}/iframe.html?id=${storyId}&viewMode=story`;
  const iframeSrc = buildIframeUrl();

  // In development, if iframe embedding is blocked, show a clickable preview instead
  const useClickablePreview = process.env.NODE_ENV === 'development' && !showControls && !iframeSrc;

  // Format the story ID for display (e.g., "uswds-va-button--default" -> "Default")
  const storyName = storyId.split('--').pop()?.replace(/-/g, ' ') || storyId;
  const formattedName = storyName.charAt(0).toUpperCase() + storyName.slice(1);

  return (
    <div ref={containerRef} className={styles.storyEmbed}>
      {useClickablePreview ? (
        // Show clickable preview when iframe embedding is blocked
        <div 
          className={styles.clickablePreview} 
          style={{ minHeight: height }}
          onClick={() => window.open(storybookUrl, '_blank')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.open(storybookUrl, '_blank');
            }
          }}
        >
          <div className={styles.previewContent}>
            <div className={styles.previewIcon}>
              <StorybookIcon />
            </div>
            <div className={styles.previewText}>
              <span className={styles.previewLabel}>Interactive Component</span>
              <span className={styles.previewName}>{formattedName}</span>
              <span className={styles.previewAction}>Click to open in Storybook</span>
            </div>
          </div>
        </div>
      ) : showIframe && !iframeError ? (
        <div className={styles.iframeContainer}>
          {!iframeLoaded && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingSpinner}></div>
              <span>Loading interactive example...</span>
            </div>
          )}
          <iframe
            src={iframeSrc}
            title={title || `${formattedName} example`}
            height={height}
            className={styles.iframe}
            loading="lazy"
            allow="clipboard-write"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ opacity: iframeLoaded ? 1 : 0 }}
          />
        </div>
      ) : iframeError ? (
        <div className={styles.errorState} style={{ minHeight: height }}>
          <div className={styles.errorContent}>
            <div className={styles.errorIcon}>⚠️</div>
            <div className={styles.errorText}>
              <span className={styles.errorLabel}>Unable to load interactive example</span>
              <span className={styles.errorMessage}>
                {process.env.NODE_ENV === 'production' 
                  ? 'View in Storybook for full interactive experience'
                  : 'Click to open in Storybook instead'
                }
              </span>
              <button 
                onClick={() => window.open(storybookUrl, '_blank')}
                className={styles.openButton}
              >
                Open in Storybook
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.preview} style={{ minHeight: height }}>
          <div className={styles.previewContent}>
            <div className={styles.previewIcon}>
              <StorybookIcon />
            </div>
            <div className={styles.previewText}>
              <span className={styles.previewLabel}>
                {showControls ? 'Interactive Example with Toolbar' : 'Interactive Example'}
              </span>
              <span className={styles.previewName}>{formattedName}</span>
            </div>
          </div>
        </div>
      )}

      {code && (
        <div className={styles.codeBlock}>
          <pre><code>{code}</code></pre>
        </div>
      )}

      <div className={styles.actions}>
        <a
          href={storybookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.storybookLink}
        >
          <StorybookIcon size={14} />
          {showControls ? 'View with full controls' : 'View in Storybook'}
        </a>
        {!showIframe && !autoLoad && (
          <button
            type="button"
            onClick={() => setShowIframe(true)}
            className={styles.loadButton}
          >
            {showControls ? 'Load with toolbar' : 'Load preview'}
          </button>
        )}
      </div>
    </div>
  );
}

function StorybookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.28 1.2v21.81a1.2 1.2 0 01-1.26 1.2l-14.17-.83a1.2 1.2 0 01-1.14-1.18V1.33A1.2 1.2 0 016.2.14l10.5-.02.01.1zm-5.4 10.52c0 .45 2.94.24 3.33-.08 0-2.93-1.58-4.47-4.48-4.47-2.9 0-4.53 1.57-4.53 3.92 0 4.1 5.52 4.18 5.52 6.42 0 .63-.27 1-.87 1-.78 0-1.09-.43-1.05-1.9 0-.35-3.4-.47-3.52 0-.2 3.68 2.03 4.74 4.6 4.74 2.49 0 4.44-1.32 4.44-3.7 0-4.4-5.6-4.27-5.6-6.48 0-.9.64-1.02 1.05-1.02.47 0 1.14.08 1.1 1.57z" />
    </svg>
  );
}
