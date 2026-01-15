import React from 'react';
import styles from './styles.module.css';

type Platform = 'web' | 'mobile';

interface PlatformTagProps {
  /** Which platform this tag represents */
  platform: Platform;
  /** Size variant */
  size?: 'small' | 'medium';
}

const platformLabels: Record<Platform, string> = {
  web: 'Web',
  mobile: 'Mobile',
};

/**
 * A simple tag/badge indicating which platform content applies to.
 */
export default function PlatformTag({
  platform,
  size = 'medium',
}: PlatformTagProps): JSX.Element {
  return (
    <span className={`${styles.tag} ${styles[platform]} ${styles[size]}`}>
      {platformLabels[platform]}
    </span>
  );
}

interface PlatformTagsProps {
  /** Which platforms to show tags for */
  platforms: Platform[];
  /** Size variant */
  size?: 'small' | 'medium';
}

/**
 * Shows multiple platform tags together.
 */
export function PlatformTags({ platforms, size = 'medium' }: PlatformTagsProps): JSX.Element {
  return (
    <span className={styles.tags}>
      {platforms.map((p) => (
        <PlatformTag key={p} platform={p} size={size} />
      ))}
    </span>
  );
}
