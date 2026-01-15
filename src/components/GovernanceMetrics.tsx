import React, { useState, useEffect } from 'react';
import MetricCard, { TrendData } from './MetricCard';
import styles from './GovernanceMetrics.module.css';

interface GovernanceData {
  data: {
    touchpoints_held: number;
    total_staging_issues: number;
    avg_collab_cycle_time: number;
    launch_blocking_issues: number;
    quarter: string;
    year: number;
  };
}

interface GovernanceIndex {
  latest_complete_quarter: string;
  quarters: string[];
}

interface GovernanceMetrics {
  current?: GovernanceData;
  previous?: GovernanceData;
  index?: GovernanceIndex;
}

const GovernanceMetrics: React.FC = () => {
  const [data, setData] = useState<GovernanceMetrics>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGovernanceData = async () => {
      try {
        setLoading(true);
        
        // Load governance index to get latest quarter
        const indexResponse = await fetch('/data/metrics/governance-index.json');
        if (!indexResponse.ok) {
          throw new Error('Failed to load governance index');
        }
        const index: GovernanceIndex = await indexResponse.json();
        
        // Load current quarter data
        const currentKey = `governance-metrics-${index.latest_complete_quarter}`;
        const currentResponse = await fetch(`/data/metrics/${currentKey}.json`);
        let current: GovernanceData | undefined;
        if (currentResponse.ok) {
          current = await currentResponse.json();
        }

        // Calculate previous quarter
        const [year, quarter] = index.latest_complete_quarter.split('Q');
        const currentYear = parseInt(year);
        const currentQuarter = parseInt(quarter);
        
        let prevYear = currentYear;
        let prevQuarter = currentQuarter - 1;
        if (prevQuarter === 0) {
          prevYear = currentYear - 1;
          prevQuarter = 4;
        }
        
        const previousKey = `governance-metrics-${prevYear}Q${prevQuarter}`;
        const previousResponse = await fetch(`/data/metrics/${previousKey}.json`);
        let previous: GovernanceData | undefined;
        if (previousResponse.ok) {
          previous = await previousResponse.json();
        }

        setData({ current, previous, index });
      } catch (err) {
        setError('Failed to load governance metrics');
        console.error('Error loading governance metrics:', err);
      } finally {
        setLoading(false);
      }
    };

    loadGovernanceData();
  }, []);

  const calculateTrend = (current: number, previous: number): TrendData => {
    if (previous === 0) return { direction: 'neutral' };
    
    const change = current - previous;
    const percentage = Math.round((change / previous) * 100);
    
    if (change > 0) {
      return { direction: 'up', percentage: Math.abs(percentage), change };
    } else if (change < 0) {
      return { direction: 'down', percentage: Math.abs(percentage), change };
    } else {
      return { direction: 'neutral', percentage: 0, change: 0 };
    }
  };

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.loading}>Loading governance metrics...</div>
      </div>
    );
  }

  if (error || !data.current) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.error}>
          <p>Unable to load governance metrics data.</p>
          <p>Using fallback values for demonstration.</p>
        </div>
      </div>
    );
  }

  const { current, previous, index } = data;

  // Calculate trends if we have previous data
  const touchpointsTrend = previous ? 
    calculateTrend(current.data.touchpoints_held, previous.data.touchpoints_held) : 
    undefined;

  const stagingTrend = previous ? 
    calculateTrend(current.data.total_staging_issues, previous.data.total_staging_issues) : 
    undefined;

  const avgTimeTrend = previous ? 
    calculateTrend(current.data.avg_collab_cycle_time, previous.data.avg_collab_cycle_time) : 
    undefined;

  const blockingTrend = previous ? 
    calculateTrend(current.data.launch_blocking_issues, previous.data.launch_blocking_issues) : 
    undefined;

  return (
    <div className={styles.dashboard} aria-labelledby="governance-heading">
      <h1 id="governance-heading">Governance Metrics</h1>
      
      <p className={styles.description}>
        This dashboard tracks the effectiveness of the VA Design System governance process 
        through Collaboration Cycle metrics. These metrics show how VFS teams engage with 
        design system guidelines and the quality of our oversight.
      </p>

      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary ({index?.latest_complete_quarter})</h2>
        
        <div className={styles.metricsGrid}>
          <MetricCard
            title="Touchpoints Held"
            value={current.data.touchpoints_held}
            trend={touchpointsTrend}
            ariaLabel="Number of collaboration cycle touchpoints conducted"
          />
          
          <MetricCard
            title="Staging Review Findings"
            value={current.data.total_staging_issues}
            trend={stagingTrend}
            ariaLabel="Number of issues identified during staging reviews"
          />
          
          <MetricCard
            title="Avg. Collab Cycle Time"
            value={`${current.data.avg_collab_cycle_time} days`}
            trend={avgTimeTrend}
            ariaLabel="Average collaboration cycle completion time in days"
          />
          
          <MetricCard
            title="Launch Blocking Issues"
            value={current.data.launch_blocking_issues}
            trend={blockingTrend}
            ariaLabel="Number of issues that blocked application launches"
          />
        </div>
      </section>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About These Metrics</h2>
        
        <div className={styles.metricsInfo}>
          <div className={styles.infoCard}>
            <h3>Touchpoints Held</h3>
            <p>Number of scheduled collaboration cycle touchpoints completed with VFS teams. Higher numbers indicate more active engagement with the design system governance process.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Staging Review Findings</h3>
            <p>Issues identified during staging review phase. Lower numbers suggest better adherence to design system guidelines during development.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Average Collaboration Cycle Time</h3>
            <p>Time from initial request to completion. Lower times indicate more efficient governance processes and better team preparation.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Launch Blocking Issues</h3>
            <p>Critical issues that prevented applications from launching. Lower numbers indicate better quality control and design system compliance.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="data-collection-heading">
        <h2 id="data-collection-heading">Data Collection</h2>
        <ul className={styles.dataSources}>
          <li><strong>Source:</strong> VA Collaboration Cycle process data</li>
          <li><strong>Frequency:</strong> Updated quarterly</li>
          <li><strong>Scope:</strong> All VFS team collaboration cycles</li>
          <li><strong>Latest Quarter:</strong> {index?.latest_complete_quarter}</li>
        </ul>
      </section>
    </div>
  );
};

export default GovernanceMetrics;