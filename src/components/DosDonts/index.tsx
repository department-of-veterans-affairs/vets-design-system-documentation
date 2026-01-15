import React from 'react';
import styles from './styles.module.css';

interface DosDontsProps {
  children: React.ReactNode;
}

interface DoProps {
  children: React.ReactNode;
}

interface DontProps {
  children: React.ReactNode;
}

export default function DosDonts({ children }: DosDontsProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}

export function Do({ children }: DoProps): JSX.Element {
  return (
    <div className={`${styles.item} ${styles.do}`}>
      <div className={styles.header}>
        <CheckIcon />
        <span className={styles.label}>Do</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export function Dont({ children }: DontProps): JSX.Element {
  return (
    <div className={`${styles.item} ${styles.dont}`}>
      <div className={styles.header}>
        <CrossIcon />
        <span className={styles.label}>Don't</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 5 7.5 14 4 10" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="15" y1="5" x2="5" y2="15" />
      <line x1="5" y1="5" x2="15" y2="15" />
    </svg>
  );
}
