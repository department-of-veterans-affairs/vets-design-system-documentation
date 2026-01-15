import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import PropsTable from '../PropsTable';
import {
  getWebComponentDoc,
  getMobileComponentDoc,
  transformWebPropsForTable,
  transformWebEventsForTable,
  transformMobilePropsForTable,
  transformMobileEventsForTable,
  WebComponentDoc,
  MobileComponentDoc,
  UnifiedProp,
  UnifiedEvent,
} from '../../utils/componentDocs';

type Platform = 'web' | 'mobile';

interface AutoPropsTableProps {
  /** The component tag name (e.g., "va-button") */
  componentTag: string;
  /** Platform: 'web' or 'mobile' */
  platform?: Platform;
  /** Whether to show events table */
  showEvents?: boolean;
}

interface LoadingState {
  loading: boolean;
  error: string | null;
  props: UnifiedProp[];
  events: UnifiedEvent[];
}

function AutoPropsTableInner({
  componentTag,
  platform = 'web',
  showEvents = true,
}: AutoPropsTableProps): JSX.Element {
  const [state, setState] = useState<LoadingState>({
    loading: true,
    error: null,
    props: [],
    events: [],
  });

  useEffect(() => {
    let cancelled = false;

    async function loadDocs() {
      try {
        let props: UnifiedProp[] = [];
        let events: UnifiedEvent[] = [];

        if (platform === 'web') {
          const doc = await getWebComponentDoc(componentTag);
          if (!doc) {
            throw new Error(`Web component "${componentTag}" not found`);
          }
          props = transformWebPropsForTable(doc.props);
          events = transformWebEventsForTable(doc.events);
        } else {
          const doc = await getMobileComponentDoc(componentTag);
          if (!doc) {
            throw new Error(`Mobile component "${componentTag}" not found`);
          }
          props = transformMobilePropsForTable(doc.props);
          events = transformMobileEventsForTable(doc.events);
        }

        if (cancelled) return;
        setState({ loading: false, error: null, props, events });
      } catch (err) {
        if (cancelled) return;
        setState({
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to load component docs',
          props: [],
          events: [],
        });
      }
    }

    loadDocs();
    return () => {
      cancelled = true;
    };
  }, [componentTag, platform]);

  if (state.loading) {
    return (
      <div style={{ padding: '1rem', color: 'var(--ifm-color-emphasis-600)' }}>
        Loading {componentTag} documentation...
      </div>
    );
  }

  if (state.error) {
    return (
      <div
        style={{
          padding: '1rem',
          background: 'var(--ifm-color-danger-lightest)',
          borderRadius: '4px',
          color: 'var(--ifm-color-danger-darkest)',
        }}
      >
        {state.error}
      </div>
    );
  }

  if (state.props.length === 0) {
    return (
      <div style={{ padding: '1rem', color: 'var(--ifm-color-emphasis-600)' }}>
        No properties documented for this component.
      </div>
    );
  }

  return (
    <PropsTable
      properties={state.props}
      events={showEvents && state.events.length > 0 ? state.events : undefined}
    />
  );
}

/**
 * Auto-generates a props table by fetching from VA's component documentation
 *
 * Usage:
 * ```mdx
 * // Web component (default)
 * <AutoPropsTable componentTag="va-button" />
 *
 * // Mobile component
 * <AutoPropsTable componentTag="va-button" platform="mobile" />
 * ```
 */
export default function AutoPropsTable(props: AutoPropsTableProps): JSX.Element {
  return (
    <BrowserOnly
      fallback={
        <div style={{ padding: '1rem', color: 'var(--ifm-color-emphasis-600)' }}>
          Loading component documentation...
        </div>
      }
    >
      {() => <AutoPropsTableInner {...props} />}
    </BrowserOnly>
  );
}
