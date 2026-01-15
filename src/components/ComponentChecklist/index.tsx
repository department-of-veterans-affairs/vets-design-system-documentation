import React from 'react';
import styles from './styles.module.css';

export interface ChecklistItem {
  name: string;
  description: string;
  webScore: boolean | 'n/a' | null;
  mobileScore: boolean | 'n/a' | null;
}

export interface AccessibilityAudit {
  platform: 'web' | 'mobile';
  lastAuditDate: string | null;
  codeReview: 'pass' | 'conditional' | 'fail' | null;
  readability: 'pass' | 'conditional' | 'fail' | null;
  automatedScans: 'pass' | 'conditional' | 'fail' | null;
  useOfColor: 'pass' | 'conditional' | 'fail' | null;
  textResizing: 'pass' | 'conditional' | 'fail' | null;
  screenReaders: 'pass' | 'conditional' | 'fail' | null;
  inputMethods: 'pass' | 'conditional' | 'fail' | null;
}

export interface ComponentChecklistData {
  componentName: string;
  webCompleted: string | null;
  mobileCompleted: string | null;
  maturity: ChecklistItem[];
  codeAssets: ChecklistItem[];
  visualAssets: ChecklistItem[];
  accessibility?: {
    web?: AccessibilityAudit;
    mobile?: AccessibilityAudit;
  };
}

interface ComponentChecklistProps {
  data: ComponentChecklistData;
  platform?: 'web' | 'mobile' | 'both';
}

function StatusIcon({ status }: { status: boolean | 'n/a' | null }) {
  if (status === true) {
    return <span className={styles.statusPass} title="Complete">✓</span>;
  }
  if (status === false) {
    return <span className={styles.statusFail} title="Incomplete">✗</span>;
  }
  if (status === 'n/a') {
    return <span className={styles.statusNa} title="Not applicable">N/A</span>;
  }
  return <span className={styles.statusPending} title="Pending">—</span>;
}

function AuditStatusBadge({ status }: { status: 'pass' | 'conditional' | 'fail' | null }) {
  if (status === 'pass') {
    return <span className={styles.auditPass}>Pass</span>;
  }
  if (status === 'conditional') {
    return <span className={styles.auditConditional}>Conditional</span>;
  }
  if (status === 'fail') {
    return <span className={styles.auditFail}>Fail</span>;
  }
  return <span className={styles.auditPending}>—</span>;
}

function ChecklistSection({
  title,
  items,
  showWeb,
  showMobile,
}: {
  title: string;
  items: ChecklistItem[];
  showWeb: boolean;
  showMobile: boolean;
}) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Criteria</th>
            {showWeb && <th className={styles.scoreColumn}>Web</th>}
            {showMobile && <th className={styles.scoreColumn}>Mobile</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>
                <div className={styles.criteriaName}>{item.name}</div>
                <div className={styles.criteriaDesc}>{item.description}</div>
              </td>
              {showWeb && (
                <td className={styles.scoreCell}>
                  <StatusIcon status={item.webScore} />
                </td>
              )}
              {showMobile && (
                <td className={styles.scoreCell}>
                  <StatusIcon status={item.mobileScore} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AccessibilitySection({
  audit,
  platform,
}: {
  audit: AccessibilityAudit;
  platform: string;
}) {
  const categories = [
    { key: 'codeReview', label: 'Code review' },
    { key: 'readability', label: 'Readability' },
    { key: 'automatedScans', label: 'Automated scans' },
    { key: 'useOfColor', label: 'Use of color' },
    { key: 'textResizing', label: 'Text resizing, zoom, and magnification' },
    { key: 'screenReaders', label: 'Screen readers' },
    { key: 'inputMethods', label: 'Input and interaction methods' },
  ] as const;

  return (
    <div className={styles.a11ySection}>
      <h4 className={styles.a11yPlatform}>
        {platform} accessibility audit
        {audit.lastAuditDate && (
          <span className={styles.auditDate}>Last audit: {audit.lastAuditDate}</span>
        )}
      </h4>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th className={styles.scoreColumn}>Status</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ key, label }) => (
            <tr key={key}>
              <td>{label}</td>
              <td className={styles.scoreCell}>
                <AuditStatusBadge status={audit[key]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComponentChecklist({
  data,
  platform = 'both',
}: ComponentChecklistProps): JSX.Element {
  const showWeb = platform === 'web' || platform === 'both';
  const showMobile = platform === 'mobile' || platform === 'both';

  return (
    <div className={styles.checklist}>
      {(data.webCompleted || data.mobileCompleted) && (
        <div className={styles.completionDates}>
          {showWeb && data.webCompleted && (
            <div className={styles.completionDate}>
              <span className={styles.completionLabel}>Web completed:</span>
              <span className={styles.completionValue}>{data.webCompleted}</span>
            </div>
          )}
          {showMobile && data.mobileCompleted && (
            <div className={styles.completionDate}>
              <span className={styles.completionLabel}>Mobile completed:</span>
              <span className={styles.completionValue}>{data.mobileCompleted}</span>
            </div>
          )}
        </div>
      )}

      <ChecklistSection
        title="Maturity"
        items={data.maturity}
        showWeb={showWeb}
        showMobile={showMobile}
      />

      <ChecklistSection
        title="Code assets"
        items={data.codeAssets}
        showWeb={showWeb}
        showMobile={showMobile}
      />

      <ChecklistSection
        title="Visual assets"
        items={data.visualAssets}
        showWeb={showWeb}
        showMobile={showMobile}
      />

      {data.accessibility && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Accessibility audit</h3>
          {showWeb && data.accessibility.web && (
            <AccessibilitySection audit={data.accessibility.web} platform="Web" />
          )}
          {showMobile && data.accessibility.mobile && (
            <AccessibilitySection audit={data.accessibility.mobile} platform="Mobile" />
          )}
        </div>
      )}
    </div>
  );
}
