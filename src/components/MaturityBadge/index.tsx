import React from 'react';
import styles from './styles.module.css';

type MaturityLevel = 'deployed' | 'use-with-caution' | 'dont-use' | 'best-practice' | 'deprecated';

interface MaturityBadgeProps {
  /** The maturity level of the component */
  level: MaturityLevel;
}

const maturityConfig: Record<MaturityLevel, { label: string; className: string }> = {
  deployed: {
    label: 'Use: Deployed',
    className: styles.deployed,
  },
  'use-with-caution': {
    label: 'Use with caution',
    className: styles.caution,
  },
  'dont-use': {
    label: "Don't use",
    className: styles.dontUse,
  },
  'best-practice': {
    label: 'Best practice',
    className: styles.bestPractice,
  },
  deprecated: {
    label: 'Deprecated',
    className: styles.deprecated,
  },
};

export default function MaturityBadge({ level }: MaturityBadgeProps): JSX.Element {
  const config = maturityConfig[level];

  return (
    <span className={`${styles.badge} ${config.className}`}>
      {config.label}
    </span>
  );
}
