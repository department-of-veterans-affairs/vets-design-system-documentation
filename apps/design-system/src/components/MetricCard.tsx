import React from 'react';
import styles from './MetricCard.module.css';

export interface TrendData {
  direction: 'up' | 'down' | 'neutral';
  percentage?: number;
  change?: number;
  label?: string;
}

export interface MetricCardProps {
  title: string;
  value: number | string;
  trend?: TrendData;
  ariaLabel: string;
  className?: string;
}

const TrendIndicator: React.FC<{ trend: TrendData; id: string }> = ({ trend, id }) => {
  const getTrendIcon = () => {
    switch (trend.direction) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      default:
        return '→';
    }
  };

  const getTrendClass = () => {
    switch (trend.direction) {
      case 'up':
        return styles.trendUp;
      case 'down':
        return styles.trendDown;
      default:
        return styles.trendNeutral;
    }
  };

  const getTrendText = () => {
    if (trend.label) {
      return trend.label;
    }
    
    if (trend.percentage !== undefined) {
      const absPercentage = Math.abs(trend.percentage);
      return `${absPercentage}% from last month`;
    }
    
    return 'No change from last month';
  };

  return (
    <div 
      className={`${styles.metricTrend} ${getTrendClass()}`}
      id={id}
      aria-label={`Trend indicator: ${getTrendText()}`}
    >
      <span className={styles.trendIcon}>{getTrendIcon()}</span>
      <span>{getTrendText()}</span>
    </div>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  trend, 
  ariaLabel, 
  className = '' 
}) => {
  const cardId = `metric-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const labelId = `${cardId}-label`;
  const trendId = `${cardId}-trend`;

  return (
    <div className={`${styles.metricCard} ${className}`}>
      <h3 id={labelId}>{title}</h3>
      <div 
        className={styles.metricValue}
        id={cardId}
        aria-labelledby={labelId}
        aria-describedby={trend ? trendId : undefined}
      >
        {value}
      </div>
      {trend && (
        <TrendIndicator trend={trend} id={trendId} />
      )}
    </div>
  );
};

export default MetricCard;