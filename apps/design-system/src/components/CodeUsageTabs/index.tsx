import React, { ReactNode } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

type Platform = 'web' | 'mobile';

interface CodeUsageTabsProps {
  /** Which platforms this component supports */
  platforms: Platform[];
  /** Content for web platform */
  web?: ReactNode;
  /** Content for mobile platform */
  mobile?: ReactNode;
  children?: ReactNode;
}

/**
 * Conditionally renders code usage content in tabs or directly.
 * - If both platforms: Shows tabs to switch between Web and Mobile
 * - If single platform: Shows content directly without tabs
 *
 * Usage:
 * ```mdx
 * <CodeUsageTabs platforms={['web', 'mobile']} web={<WebContent />} mobile={<MobileContent />} />
 * ```
 *
 * Or with children for single platform:
 * ```mdx
 * <CodeUsageTabs platforms={['web']}>
 *   <WebContent />
 * </CodeUsageTabs>
 * ```
 */
export default function CodeUsageTabs({
  platforms,
  web,
  mobile,
  children,
}: CodeUsageTabsProps): JSX.Element {
  const hasWeb = platforms.includes('web');
  const hasMobile = platforms.includes('mobile');
  const hasBoth = hasWeb && hasMobile;

  // Single platform - render content directly without tabs
  if (!hasBoth) {
    if (hasWeb && web) return <>{web}</>;
    if (hasMobile && mobile) return <>{mobile}</>;
    if (children) return <>{children}</>;
    return <></>;
  }

  // Both platforms - render with tabs
  return (
    <Tabs groupId="platform" queryString>
      {hasWeb && web && (
        <TabItem value="web" label="Web" default>
          {web}
        </TabItem>
      )}
      {hasMobile && mobile && (
        <TabItem value="mobile" label="Mobile">
          {mobile}
        </TabItem>
      )}
    </Tabs>
  );
}

/**
 * Individual tab content wrapper for cleaner MDX usage
 */
interface WebContentProps {
  children: ReactNode;
}

export function WebContent({ children }: WebContentProps): JSX.Element {
  return <>{children}</>;
}

interface MobileContentProps {
  children: ReactNode;
}

export function MobileContent({ children }: MobileContentProps): JSX.Element {
  return <>{children}</>;
}
