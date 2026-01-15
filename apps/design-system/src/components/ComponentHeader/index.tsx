import React from 'react';
import MaturityBadge from '../MaturityBadge';
import { PlatformTags } from '../PlatformTag';
import GitHubCount from '../GitHubCount';
import styles from './styles.module.css';

type MaturityLevel = 'deployed' | 'use-with-caution' | 'dont-use' | 'best-practice' | 'deprecated';

interface ComponentHeaderProps {
  /** The maturity level of the component */
  maturity: MaturityLevel;
  /** URL to the GitHub issues page */
  github?: string;
  /** URL to GitHub discussions */
  discussions?: string;
  /** URL to the Figma design file */
  figma?: string;
  /** URL to research documentation */
  research?: string;
  /** URL to Storybook examples */
  storybook?: string;
  /** Platforms this component supports */
  platforms?: ('web' | 'mobile')[];
}

export default function ComponentHeader({
  maturity,
  github,
  discussions,
  figma,
  research,
  storybook,
  platforms = ['web'],
}: ComponentHeaderProps): JSX.Element {
  const hasLinks = github || discussions || figma || research || storybook;

  return (
    <div className={styles.header}>
      <div className={styles.badges}>
        <MaturityBadge level={maturity} />
        <PlatformTags platforms={platforms} />
      </div>

      {hasLinks && (
        <div className={styles.links}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <GitHubIcon />
              GitHub Issues
              <GitHubCount url={github} label="Open issues" />
            </a>
          )}
          {discussions && (
            <a
              href={discussions}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <DiscussionsIcon />
              Discussions
            </a>
          )}
          {figma && (
            <a
              href={figma}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FigmaIcon />
              Figma
            </a>
          )}
          {research && (
            <a
              href={research}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ResearchIcon />
              Research
              <GitHubCount url={research} label="Research studies" />
            </a>
          )}
          {storybook && (
            <a
              href={storybook}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <StorybookIcon />
              Storybook
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5.333 16A2.667 2.667 0 008 13.333v-2.666H5.333a2.667 2.667 0 000 5.333zM2.667 8a2.667 2.667 0 012.666-2.667H8v5.334H5.333A2.667 2.667 0 012.667 8zM2.667 2.667A2.667 2.667 0 015.333 0H8v5.333H5.333a2.667 2.667 0 01-2.666-2.666zM8 0h2.667a2.667 2.667 0 010 5.333H8V0zM13.333 8a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0z" />
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
    </svg>
  );
}

function StorybookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.117 0L11 1.094l-.058.012c-.047.01-.112.025-.19.046a3.57 3.57 0 00-.496.168c-.405.166-.888.444-1.2.89-.162.23-.27.493-.324.78H3.5A1.5 1.5 0 002 4.49v10.02a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V1.094L11.117 0zM10 2.5a.5.5 0 111 0 .5.5 0 01-1 0zM5.5 5h5a.5.5 0 010 1h-5a.5.5 0 010-1zm0 2h5a.5.5 0 010 1h-5a.5.5 0 010-1zm0 2h3a.5.5 0 010 1h-3a.5.5 0 010-1z" />
    </svg>
  );
}

function DiscussionsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z" />
    </svg>
  );
}
