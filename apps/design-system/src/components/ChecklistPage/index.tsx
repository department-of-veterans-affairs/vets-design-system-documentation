import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Types matching the CMS structure
type ChecklistStatus = 'complete' | 'incomplete' | 'n/a' | 'pending';
type AuditStatus = 'pass' | 'conditional' | 'fail' | 'pending';

interface MaturityChecklist {
  guidance_web?: ChecklistStatus;
  guidance_mobile?: ChecklistStatus;
  research_web?: ChecklistStatus;
  research_mobile?: ChecklistStatus;
  stability_web?: ChecklistStatus;
  stability_mobile?: ChecklistStatus;
  adoption_web?: ChecklistStatus;
  adoption_mobile?: ChecklistStatus;
}

interface CodeAssetsChecklist {
  variations_web?: ChecklistStatus;
  variations_mobile?: ChecklistStatus;
  responsive_web?: ChecklistStatus;
  responsive_mobile?: ChecklistStatus;
  interactive_states_web?: ChecklistStatus;
  interactive_states_mobile?: ChecklistStatus;
  tokens_web?: ChecklistStatus;
  tokens_mobile?: ChecklistStatus;
  i18n_web?: ChecklistStatus;
  i18n_mobile?: ChecklistStatus;
}

interface VisualAssetsChecklist {
  variations_web?: ChecklistStatus;
  variations_mobile?: ChecklistStatus;
  responsive_web?: ChecklistStatus;
  responsive_mobile?: ChecklistStatus;
  interactive_states_web?: ChecklistStatus;
  interactive_states_mobile?: ChecklistStatus;
  tokens_web?: ChecklistStatus;
  tokens_mobile?: ChecklistStatus;
}

interface AccessibilityAudit {
  last_audit_date?: string;
  code_review?: AuditStatus;
  readability?: AuditStatus;
  automated_scans?: AuditStatus;
  use_of_color?: AuditStatus;
  text_resizing?: AuditStatus;
  screen_readers?: AuditStatus;
  input_methods?: AuditStatus;
}

export interface ChecklistData {
  web_completed?: string;
  mobile_completed?: string;
  maturity?: MaturityChecklist;
  code_assets?: CodeAssetsChecklist;
  visual_assets?: VisualAssetsChecklist;
  a11y_audit_web?: AccessibilityAudit;
  a11y_audit_mobile?: AccessibilityAudit;
}

interface ChecklistPageProps {
  componentName: string;
  componentPath: string;
  checklist: ChecklistData;
  platform?: 'web' | 'mobile' | 'both';
}

function StatusIcon({ status }: { status?: ChecklistStatus }) {
  if (status === 'complete') {
    return <span className={styles.statusPass} title="Complete">✓</span>;
  }
  if (status === 'incomplete') {
    return <span className={styles.statusFail} title="Incomplete">✗</span>;
  }
  if (status === 'n/a') {
    return <span className={styles.statusNa} title="Not applicable">N/A</span>;
  }
  return <span className={styles.statusPending} title="Pending">—</span>;
}

function AuditStatusBadge({ status }: { status?: AuditStatus }) {
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

interface ChecklistSectionProps {
  title: string;
  items: Array<{
    label: string;
    webKey: string;
    mobileKey: string;
  }>;
  data: Record<string, ChecklistStatus | undefined>;
  showWeb: boolean;
  showMobile: boolean;
}

function ChecklistSection({ title, items, data, showWeb, showMobile }: ChecklistSectionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
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
            <tr key={item.label}>
              <td>{item.label}</td>
              {showWeb && (
                <td className={styles.scoreCell}>
                  <StatusIcon status={data[item.webKey] as ChecklistStatus} />
                </td>
              )}
              {showMobile && (
                <td className={styles.scoreCell}>
                  <StatusIcon status={data[item.mobileKey] as ChecklistStatus} />
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
    { key: 'code_review', label: 'Code review' },
    { key: 'readability', label: 'Readability' },
    { key: 'automated_scans', label: 'Automated scans' },
    { key: 'use_of_color', label: 'Use of color' },
    { key: 'text_resizing', label: 'Text resizing, zoom, and magnification' },
    { key: 'screen_readers', label: 'Screen readers' },
    { key: 'input_methods', label: 'Input and interaction methods' },
  ] as const;

  return (
    <div className={styles.a11ySection}>
      <h3 className={styles.a11yPlatform}>
        {platform} accessibility audit
        {audit.last_audit_date && (
          <span className={styles.auditDate}>Last audit: {audit.last_audit_date}</span>
        )}
      </h3>
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

const maturityItems = [
  { label: 'Guidance', webKey: 'guidance_web', mobileKey: 'guidance_mobile' },
  { label: 'Research', webKey: 'research_web', mobileKey: 'research_mobile' },
  { label: 'Stability', webKey: 'stability_web', mobileKey: 'stability_mobile' },
  { label: 'Adoption', webKey: 'adoption_web', mobileKey: 'adoption_mobile' },
];

const codeAssetsItems = [
  { label: 'Variations', webKey: 'variations_web', mobileKey: 'variations_mobile' },
  { label: 'Responsive', webKey: 'responsive_web', mobileKey: 'responsive_mobile' },
  { label: 'Interactive states', webKey: 'interactive_states_web', mobileKey: 'interactive_states_mobile' },
  { label: 'Tokens', webKey: 'tokens_web', mobileKey: 'tokens_mobile' },
  { label: 'Internationalization', webKey: 'i18n_web', mobileKey: 'i18n_mobile' },
];

const visualAssetsItems = [
  { label: 'Variations', webKey: 'variations_web', mobileKey: 'variations_mobile' },
  { label: 'Responsive', webKey: 'responsive_web', mobileKey: 'responsive_mobile' },
  { label: 'Interactive states', webKey: 'interactive_states_web', mobileKey: 'interactive_states_mobile' },
  { label: 'Tokens', webKey: 'tokens_web', mobileKey: 'tokens_mobile' },
];

/**
 * ChecklistPage component for rendering component checklists.
 * Reads checklist data from the parent component's frontmatter.
 */
export default function ChecklistPage({
  componentName,
  componentPath,
  checklist,
  platform = 'both',
}: ChecklistPageProps): JSX.Element {
  const showWeb = platform === 'web' || platform === 'both';
  const showMobile = platform === 'mobile' || platform === 'both';

  const hasData = checklist && (
    checklist.maturity ||
    checklist.code_assets ||
    checklist.visual_assets ||
    checklist.a11y_audit_web ||
    checklist.a11y_audit_mobile
  );

  return (
    <div className={styles.checklistPage}>
      <Link to={componentPath} className={styles.backLink}>
        ← Back to {componentName}
      </Link>

      <p className={styles.intro}>
        This checklist tracks the maturity, code assets, visual assets, and accessibility audit
        status for the {componentName} component.
      </p>

      {!hasData ? (
        <div className={styles.emptyState}>
          <p>No checklist data available for this component yet.</p>
          <p>Edit the component in the CMS to add checklist information.</p>
        </div>
      ) : (
        <div className={styles.checklist}>
          {/* Completion Dates */}
          {(checklist.web_completed || checklist.mobile_completed) && (
            <div className={styles.completionDates}>
              {showWeb && checklist.web_completed && (
                <div className={styles.completionDate}>
                  <span className={styles.completionLabel}>Web completed:</span>
                  <span className={styles.completionValue}>{checklist.web_completed}</span>
                </div>
              )}
              {showMobile && checklist.mobile_completed && (
                <div className={styles.completionDate}>
                  <span className={styles.completionLabel}>Mobile completed:</span>
                  <span className={styles.completionValue}>{checklist.mobile_completed}</span>
                </div>
              )}
            </div>
          )}

          {/* Maturity */}
          {checklist.maturity && (
            <ChecklistSection
              title="Maturity"
              items={maturityItems}
              data={checklist.maturity as Record<string, ChecklistStatus>}
              showWeb={showWeb}
              showMobile={showMobile}
            />
          )}

          {/* Code Assets */}
          {checklist.code_assets && (
            <ChecklistSection
              title="Code assets"
              items={codeAssetsItems}
              data={checklist.code_assets as Record<string, ChecklistStatus>}
              showWeb={showWeb}
              showMobile={showMobile}
            />
          )}

          {/* Visual Assets */}
          {checklist.visual_assets && (
            <ChecklistSection
              title="Visual assets"
              items={visualAssetsItems}
              data={checklist.visual_assets as Record<string, ChecklistStatus>}
              showWeb={showWeb}
              showMobile={showMobile}
            />
          )}

          {/* Accessibility Audits */}
          {(checklist.a11y_audit_web || checklist.a11y_audit_mobile) && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Accessibility audit</h2>
              {showWeb && checklist.a11y_audit_web && (
                <AccessibilitySection audit={checklist.a11y_audit_web} platform="Web" />
              )}
              {showMobile && checklist.a11y_audit_mobile && (
                <AccessibilitySection audit={checklist.a11y_audit_mobile} platform="Mobile" />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
