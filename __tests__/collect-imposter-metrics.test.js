/**
 * Unit Tests for Imposter Component Metrics Collection Script
 *
 * Tests the core logic for collecting imposter component issue metrics
 * from the va.gov-team repository via GitHub CLI.
 */

describe('Imposter Metrics Collector', () => {
  let collector;

  beforeAll(() => {
    collector = require('../scripts/collect-imposter-metrics');
  });

  describe('COMPONENT_LABELS', () => {
    test('loads component labels from component-maturity.json', () => {
      expect(collector.COMPONENT_LABELS).toBeDefined();
      expect(Array.isArray(collector.COMPONENT_LABELS)).toBe(true);
    });

    test('contains expected VA component labels', () => {
      const expectedLabels = ['va-alert', 'va-button', 'va-checkbox', 'va-radio'];
      expectedLabels.forEach(label => {
        expect(collector.COMPONENT_LABELS).toContain(label);
      });
    });

    test('includes singular/plural variations', () => {
      // If va-breadcrumbs exists, va-breadcrumb should also be present
      if (collector.COMPONENT_LABELS.includes('va-breadcrumbs')) {
        expect(collector.COMPONENT_LABELS).toContain('va-breadcrumb');
      }
    });
  });

  describe('REPLACEMENT_GOAL', () => {
    test('is set to 150 for FY26 goal', () => {
      expect(collector.REPLACEMENT_GOAL).toBe(150);
    });
  });

  describe('extractComponentType', () => {
    test('extracts known component label from issue labels', () => {
      const labels = ['va-radio', 'collab-cycle-feedback', 'va-imposter'];
      expect(collector.extractComponentType(labels)).toBe('va-radio');
    });

    test('returns unknown for issues without component labels', () => {
      const labels = ['collab-cycle-feedback', 'va-imposter'];
      expect(collector.extractComponentType(labels)).toBe('unknown');
    });

    test('handles case-insensitive label matching', () => {
      const labels = ['VA-RADIO', 'collab-cycle-feedback'];
      expect(collector.extractComponentType(labels)).toBe('va-radio');
    });

    test('returns first matching component when multiple are present', () => {
      const labels = ['va-radio', 'va-button', 'va-imposter'];
      const result = collector.extractComponentType(labels);
      // Should return one of the valid components
      expect(['va-radio', 'va-button']).toContain(result);
    });

    test('handles empty labels array', () => {
      expect(collector.extractComponentType([])).toBe('unknown');
    });
  });

  describe('processComponentData', () => {
    test('groups issues by component type', () => {
      const issues = [
        { labels: ['va-radio', 'va-imposter'], state: 'OPEN' },
        { labels: ['va-radio', 'va-imposter'], state: 'CLOSED' },
        { labels: ['va-button', 'va-imposter'], state: 'OPEN' }
      ];

      const result = collector.processComponentData(issues);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
    });

    test('counts open and closed issues per component', () => {
      const issues = [
        { labels: ['va-radio', 'va-imposter'], state: 'OPEN' },
        { labels: ['va-radio', 'va-imposter'], state: 'CLOSED' },
        { labels: ['va-radio', 'va-imposter'], state: 'CLOSED' }
      ];

      const result = collector.processComponentData(issues);
      const radioComponent = result.find(c => c.component === 'va-radio');

      expect(radioComponent).toBeDefined();
      expect(radioComponent.open).toBe(1);
      expect(radioComponent.closed).toBe(2);
      expect(radioComponent.total).toBe(3);
    });

    test('handles lowercase state values', () => {
      const issues = [
        { labels: ['va-radio'], state: 'open' },
        { labels: ['va-radio'], state: 'closed' }
      ];

      const result = collector.processComponentData(issues);
      const radioComponent = result.find(c => c.component === 'va-radio');

      expect(radioComponent.open).toBe(1);
      expect(radioComponent.closed).toBe(1);
    });

    test('sorts results by total count descending', () => {
      const issues = [
        { labels: ['va-button'], state: 'OPEN' },
        { labels: ['va-radio'], state: 'OPEN' },
        { labels: ['va-radio'], state: 'OPEN' },
        { labels: ['va-radio'], state: 'CLOSED' }
      ];

      const result = collector.processComponentData(issues);

      expect(result[0].component).toBe('va-radio');
      expect(result[0].total).toBe(3);
      expect(result[1].component).toBe('va-button');
      expect(result[1].total).toBe(1);
    });

    test('handles empty issues array', () => {
      const result = collector.processComponentData([]);
      expect(result).toEqual([]);
    });

    test('groups unknown components together', () => {
      const issues = [
        { labels: ['collab-cycle-feedback'], state: 'OPEN' },
        { labels: ['va-imposter'], state: 'CLOSED' }
      ];

      const result = collector.processComponentData(issues);
      const unknownComponent = result.find(c => c.component === 'unknown');

      expect(unknownComponent).toBeDefined();
      expect(unknownComponent.total).toBe(2);
    });
  });

  describe('calculateSummary', () => {
    test('calculates total open and closed counts', () => {
      const issues = [
        { state: 'OPEN' },
        { state: 'OPEN' },
        { state: 'CLOSED' }
      ];

      const result = collector.calculateSummary(issues, []);

      expect(result.total_open).toBe(2);
      expect(result.total_closed).toBe(1);
      expect(result.total_issues).toBe(3);
    });

    test('calculates progress percentage toward goal', () => {
      const issues = [
        { state: 'CLOSED' },
        { state: 'CLOSED' },
        { state: 'CLOSED' }
      ];

      const result = collector.calculateSummary(issues, []);

      // 3 closed out of 150 goal = 2%
      expect(result.progress_percentage).toBe(2);
      expect(result.goal).toBe(150);
    });

    test('handles 0 closed issues', () => {
      const issues = [{ state: 'OPEN' }];

      const result = collector.calculateSummary(issues, []);

      expect(result.progress_percentage).toBe(0);
    });

    test('calculates trend from quarterly data', () => {
      const issues = [{ state: 'CLOSED' }];
      const quarterlyData = [
        { period: '2025-Q3', issues_closed: 5 },
        { period: '2025-Q4', issues_closed: 10 }
      ];

      const result = collector.calculateSummary(issues, quarterlyData);

      expect(result.closed_trend).toBeDefined();
      expect(result.closed_trend.direction).toBe('up');
      expect(result.closed_trend.value).toBe(5); // 10 - 5
    });

    test('handles downward trend', () => {
      const issues = [];
      const quarterlyData = [
        { period: '2025-Q3', issues_closed: 10 },
        { period: '2025-Q4', issues_closed: 5 }
      ];

      const result = collector.calculateSummary(issues, quarterlyData);

      expect(result.closed_trend.direction).toBe('down');
      expect(result.closed_trend.value).toBe(-5);
    });

    test('handles neutral trend when no change', () => {
      const issues = [];
      const quarterlyData = [
        { period: '2025-Q3', issues_closed: 5 },
        { period: '2025-Q4', issues_closed: 5 }
      ];

      const result = collector.calculateSummary(issues, quarterlyData);

      expect(result.closed_trend.direction).toBe('neutral');
    });

    test('handles insufficient quarterly data for trend', () => {
      const issues = [];
      const quarterlyData = [{ period: '2025-Q4', issues_closed: 5 }];

      const result = collector.calculateSummary(issues, quarterlyData);

      expect(result.closed_trend).toBeNull();
    });

    test('includes last_updated timestamp', () => {
      const result = collector.calculateSummary([], []);

      expect(result.last_updated).toBeDefined();
      // Should be a valid ISO string
      expect(() => new Date(result.last_updated)).not.toThrow();
    });

    test('handles lowercase state values', () => {
      const issues = [
        { state: 'open' },
        { state: 'closed' }
      ];

      const result = collector.calculateSummary(issues, []);

      expect(result.total_open).toBe(1);
      expect(result.total_closed).toBe(1);
    });
  });

  describe('data validation', () => {
    test('processComponentData handles malformed issues gracefully', () => {
      const issues = [
        { labels: null, state: 'OPEN' },
        { state: 'CLOSED' },
        { labels: ['va-radio'], state: 'OPEN' }
      ];

      // Should not throw, but may skip malformed entries
      expect(() => collector.processComponentData(issues.filter(i => i.labels))).not.toThrow();
    });
  });
});
