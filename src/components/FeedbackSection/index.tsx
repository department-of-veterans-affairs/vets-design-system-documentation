import React from 'react';
import styles from './styles.module.css';

interface FeedbackSectionProps {
  /** Component name for the feedback context */
  componentName?: string;
  /** URL to the GitHub discussion for this component */
  discussionUrl?: string;
  /** URL to the component's maturity checklist page */
  checklistUrl?: string;
}

export default function FeedbackSection({
  componentName,
  discussionUrl,
  checklistUrl,
}: FeedbackSectionProps): JSX.Element {
  return (
    <div className={styles.feedback}>
      {checklistUrl && (
        <div className={styles.checklist}>
          <a href={checklistUrl} className={styles.checklistLink}>
            <ChecklistIcon />
            <span>View component checklist</span>
          </a>
        </div>
      )}
      <h2>Provide feedback</h2>
      <p>
        {componentName
          ? `Share your feedback, report issues, or suggest improvements for the ${componentName} component. `
          : 'Share your feedback, report issues, or suggest improvements. '}
        Your input helps us make the design system better for everyone.
      </p>

      <div className={styles.channels}>
        {discussionUrl && (
          <a
            href={discussionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.channel}
          >
            <DiscussionIcon />
            <div className={styles.channelContent}>
              <span className={styles.channelTitle}>Join the discussion</span>
              <span className={styles.channelDescription}>
                Share feedback in this component's GitHub discussion
              </span>
            </div>
          </a>
        )}

        <a
          href="https://dsva.slack.com/channels/platform-design-system"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.channel}
        >
          <SlackIcon />
          <div className={styles.channelContent}>
            <span className={styles.channelTitle}>Slack support</span>
            <span className={styles.channelDescription}>
              Get immediate support in #platform-design-system
            </span>
          </div>
        </a>

        <a
          href="/docs/about/feedback"
          className={styles.channel}
        >
          <FeedbackIcon />
          <div className={styles.channelContent}>
            <span className={styles.channelTitle}>All feedback channels</span>
            <span className={styles.channelDescription}>
              Explore all ways to share feedback
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

function DiscussionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" />
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
      <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
    </svg>
  );
}
