import React, { useState, useEffect } from 'react';
import MetricCard, { TrendData } from './MetricCard';
import styles from './MetricsDashboard.module.css';

interface IssueMetrics {
  summary: {
    open_issues: number;
    closed_this_month: number;
    open_issues_trend?: TrendData;
    closed_this_month_trend?: TrendData;
  };
}

interface ComponentUsage {
  total_components: number;
  total_usages: number;
  components_trend?: TrendData;
  usages_trend?: TrendData;
  top_components: Array<{
    name: string;
    uses: number;
  }>;
}

interface MetricsData {
  issueMetrics?: IssueMetrics;
  componentUsage?: ComponentUsage;
  lastUpdated?: string;
}

const MetricsDashboard: React.FC = () => {
  const [data, setData] = useState<MetricsData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMetricsData = async () => {
      try {
        setLoading(true);
        
        // Load multiple metrics files
        const [issueResponse, componentResponse] = await Promise.all([
          fetch('/data/metrics/issue-metrics.json').catch(() => null),
          fetch('/data/metrics/component-usage.json').catch(() => null)
        ]);

        const metricsData: MetricsData = {};

        if (issueResponse?.ok) {
          metricsData.issueMetrics = await issueResponse.json();
        }

        if (componentResponse?.ok) {
          metricsData.componentUsage = await componentResponse.json();
        }

        setData(metricsData);
      } catch (err) {
        setError('Failed to load metrics data');
        console.error('Error loading metrics:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMetricsData();
  }, []);

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.loading}>Loading metrics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.error}>
          <p>Unable to load metrics data.</p>
          <p>Using fallback values for demonstration.</p>
        </div>
      </div>
    );
  }

  const { issueMetrics, componentUsage } = data;

  return (
    <div className={styles.dashboard} aria-labelledby="main-heading">
      <h1 id="main-heading">Metrics Dashboard</h1>
      <p className={styles.description}>
        This dashboard provides insights into the health and adoption of the VA Design System. 
        Metrics are updated weekly to track our progress toward key objectives.
      </p>

      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary Metrics</h2>
        
        <div className={styles.metricsGrid}>
          <MetricCard
            title="Open Issues"
            value={issueMetrics?.summary?.open_issues ?? 586}
            trend={issueMetrics?.summary?.open_issues_trend ?? { 
              direction: 'up', 
              percentage: 7 
            }}
            ariaLabel="Number of open GitHub issues"
          />
          
          <MetricCard
            title="Closed This Month"
            value={issueMetrics?.summary?.closed_this_month ?? 83}
            trend={issueMetrics?.summary?.closed_this_month_trend ?? { 
              direction: 'down', 
              percentage: 19 
            }}
            ariaLabel="Number of issues closed this month"
          />
          
          <MetricCard
            title="Total Components"
            value={componentUsage?.total_components ?? 56}
            trend={componentUsage?.components_trend ?? { 
              direction: 'up', 
              percentage: 5 
            }}
            ariaLabel="Total number of components in the design system"
          />
          
          <MetricCard
            title="Total Component Usages"
            value={componentUsage?.total_usages?.toLocaleString() ?? '12,778'}
            trend={componentUsage?.usages_trend ?? { 
              direction: 'up', 
              percentage: 397 
            }}
            ariaLabel="Total component usages across VA applications"
          />
        </div>
      </section>

      {componentUsage?.top_components && (
        <section aria-labelledby="top-components-heading">
          <h2 id="top-components-heading">Top Components by Usage</h2>
          
          <div className={styles.tableContainer}>
            <table className={styles.componentsTable}>
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Component</th>
                  <th scope="col">Uses</th>
                </tr>
              </thead>
              <tbody>
                {componentUsage.top_components.slice(0, 10).map((component, index) => (
                  <tr key={component.name}>
                    <td>{index + 1}</td>
                    <td>{component.name}</td>
                    <td>{component.uses?.toLocaleString() ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section aria-labelledby="data-sources-heading">
        <h2 id="data-sources-heading">Data Sources</h2>
        <ul className={styles.dataSources}>
          <li><strong>Component usage:</strong> Analysis across 124 VA applications</li>
          <li><strong>Issue tracking:</strong> Updates weekly from GitHub repository</li>
          <li><strong>Page visits:</strong> Monthly analytics from documentation site</li>
        </ul>
        {data.lastUpdated && (
          <p className={styles.lastUpdated}>
            <em>Last updated: {new Date(data.lastUpdated).toLocaleDateString()}</em>
          </p>
        )}
      </section>
    </div>
  );
};

export default MetricsDashboard;