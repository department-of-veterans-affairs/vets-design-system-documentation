/**
 * Unit Tests for Component Bug Metrics Collection Script
 *
 * Tests the core logic for collecting open bug issues per component
 * and calculating defect rates relative to usage.
 */

describe('Component Bug Metrics Collector', () => {
  let collector;

  beforeAll(() => {
    collector = require('../scripts/collect-component-bug-metrics');
  });

  describe('loadComponentNames', () => {
    test('loads component names from component-maturity.json', () => {
      const names = collector.loadComponentNames();
      expect(Array.isArray(names)).toBe(true);
      expect(names.length).toBeGreaterThan(0);
    });

    test('all names start with va-', () => {
      const names = collector.loadComponentNames();
      names.forEach(name => {
        expect(name).toMatch(/^va-/);
      });
    });

    test('does not include _warning key', () => {
      const names = collector.loadComponentNames();
      expect(names).not.toContain('_warning');
    });

    test('contains expected VA component names', () => {
      const names = collector.loadComponentNames();
      const expectedNames = ['va-alert', 'va-button', 'va-modal', 'va-accordion'];
      expectedNames.forEach(name => {
        expect(names).toContain(name);
      });
    });
  });

  describe('loadUsageData', () => {
    test('returns a Map', () => {
      const usageMap = collector.loadUsageData();
      expect(usageMap instanceof Map).toBe(true);
    });

    test('maps va-* keys to usage counts', () => {
      const usageMap = collector.loadUsageData();
      // Should have some entries
      expect(usageMap.size).toBeGreaterThan(0);

      // All keys should be va-* component tags
      for (const key of usageMap.keys()) {
        expect(key).toMatch(/^va-/);
      }

      // All values should be numbers
      for (const value of usageMap.values()) {
        expect(typeof value).toBe('number');
      }
    });

    test('does not include React wrapper names (VaComponent)', () => {
      const usageMap = collector.loadUsageData();
      for (const key of usageMap.keys()) {
        expect(key).not.toMatch(/^Va[A-Z]/);
      }
    });
  });

  describe('countBugsByComponent', () => {
    const componentNames = ['va-alert', 'va-button', 'va-modal'];

    test('initializes all components with zero bugs', () => {
      const bugCounts = collector.countBugsByComponent([], componentNames);

      expect(bugCounts.size).toBe(3);
      componentNames.forEach(name => {
        expect(bugCounts.get(name)).toBe(0);
      });
    });

    test('counts bugs per component from issue labels', () => {
      const issues = [
        { labels: ['bug', 'va-alert'] },
        { labels: ['bug', 'va-alert'] },
        { labels: ['bug', 'va-button'] }
      ];

      const bugCounts = collector.countBugsByComponent(issues, componentNames);

      expect(bugCounts.get('va-alert')).toBe(2);
      expect(bugCounts.get('va-button')).toBe(1);
      expect(bugCounts.get('va-modal')).toBe(0);
    });

    test('increments count for each matching component label on multi-label issues', () => {
      const issues = [
        { labels: ['bug', 'va-alert', 'va-modal'] }
      ];

      const bugCounts = collector.countBugsByComponent(issues, componentNames);

      expect(bugCounts.get('va-alert')).toBe(1);
      expect(bugCounts.get('va-modal')).toBe(1);
    });

    test('ignores labels not in component list', () => {
      const issues = [
        { labels: ['bug', 'va-alert', 'some-other-label'] }
      ];

      const bugCounts = collector.countBugsByComponent(issues, componentNames);

      expect(bugCounts.get('va-alert')).toBe(1);
      expect(bugCounts.has('some-other-label')).toBe(false);
    });

    test('handles empty issues array', () => {
      const bugCounts = collector.countBugsByComponent([], componentNames);

      expect(bugCounts.size).toBe(3);
      componentNames.forEach(name => {
        expect(bugCounts.get(name)).toBe(0);
      });
    });
  });

  describe('buildComponentMetrics', () => {
    test('builds metrics with usage data and defect rate', () => {
      const bugCounts = new Map([
        ['va-alert', 8],
        ['va-button', 3]
      ]);
      const usageMap = new Map([
        ['va-alert', 400],
        ['va-button', 200]
      ]);

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result).toHaveLength(2);

      const alert = result.find(c => c.name === 'va-alert');
      expect(alert.bug_count).toBe(8);
      expect(alert.usage_count).toBe(400);
      expect(alert.defect_rate).toBe(2); // (8/400)*100 = 2.0
    });

    test('sets usage_count and defect_rate to null when no usage data', () => {
      const bugCounts = new Map([['va-alert', 5]]);
      const usageMap = new Map(); // no usage data

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result[0].usage_count).toBeNull();
      expect(result[0].defect_rate).toBeNull();
    });

    test('sets defect_rate to null when usage_count is 0', () => {
      const bugCounts = new Map([['va-alert', 3]]);
      const usageMap = new Map([['va-alert', 0]]);

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result[0].usage_count).toBe(0);
      expect(result[0].defect_rate).toBeNull();
    });

    test('calculates defect_rate with 2 decimal places', () => {
      const bugCounts = new Map([['va-alert', 3]]);
      const usageMap = new Map([['va-alert', 316]]);

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      // (3/316)*100 = 0.9493... rounded to 0.95
      expect(result[0].defect_rate).toBe(0.95);
    });

    test('defect_rate is 0 for zero-bug components with usage', () => {
      const bugCounts = new Map([['va-alert', 0]]);
      const usageMap = new Map([['va-alert', 500]]);

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result[0].defect_rate).toBe(0);
    });

    test('sorts by bug_count descending', () => {
      const bugCounts = new Map([
        ['va-alert', 2],
        ['va-modal', 8],
        ['va-button', 5]
      ]);
      const usageMap = new Map();

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result[0].name).toBe('va-modal');
      expect(result[1].name).toBe('va-button');
      expect(result[2].name).toBe('va-alert');
    });

    test('sorts alphabetically for tie in bug_count', () => {
      const bugCounts = new Map([
        ['va-modal', 3],
        ['va-alert', 3],
        ['va-button', 3]
      ]);
      const usageMap = new Map();

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result[0].name).toBe('va-alert');
      expect(result[1].name).toBe('va-button');
      expect(result[2].name).toBe('va-modal');
    });

    test('generates correct GitHub query URL', () => {
      const bugCounts = new Map([['va-modal', 1]]);
      const usageMap = new Map();

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      expect(result[0].github_url).toBe(
        'https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is:issue+is:open+label:bug+label:va-modal'
      );
    });

    test('handles empty bug counts', () => {
      const result = collector.buildComponentMetrics(new Map(), new Map());
      expect(result).toEqual([]);
    });
  });

  describe('buildSummary', () => {
    test('counts components with bugs', () => {
      const components = [
        { name: 'va-modal', bug_count: 8, defect_rate: 2.5 },
        { name: 'va-button', bug_count: 3, defect_rate: 1.0 },
        { name: 'va-alert', bug_count: 0, defect_rate: 0 }
      ];

      const result = collector.buildSummary(components, 10);

      expect(result.total_components_with_bugs).toBe(2);
      expect(result.total_components).toBe(3);
    });

    test('total_bug_issues reflects unique issue count (not sum of per-component)', () => {
      const components = [
        { name: 'va-modal', bug_count: 8, defect_rate: 2.5 },
        { name: 'va-button', bug_count: 5, defect_rate: 1.0 }
      ];

      // Pass 10 as unique count, even though sum of bug_counts is 13
      const result = collector.buildSummary(components, 10);

      expect(result.total_bug_issues).toBe(10);
    });

    test('identifies component with highest defect rate', () => {
      const components = [
        { name: 'va-modal', bug_count: 8, defect_rate: 2.5 },
        { name: 'va-button', bug_count: 3, defect_rate: 5.0 },
        { name: 'va-alert', bug_count: 1, defect_rate: null }
      ];

      const result = collector.buildSummary(components, 12);

      expect(result.highest_defect_rate_component).toBe('va-button');
    });

    test('identifies component with most bugs', () => {
      const components = [
        { name: 'va-modal', bug_count: 8, defect_rate: 2.5 },
        { name: 'va-button', bug_count: 3, defect_rate: 5.0 }
      ];

      const result = collector.buildSummary(components, 11);

      // First component in array (already sorted by bug_count desc)
      expect(result.most_bugs_component).toBe('va-modal');
    });

    test('handles no bugs found', () => {
      const components = [
        { name: 'va-modal', bug_count: 0, defect_rate: 0 },
        { name: 'va-button', bug_count: 0, defect_rate: 0 }
      ];

      const result = collector.buildSummary(components, 0);

      expect(result.total_components_with_bugs).toBe(0);
      expect(result.total_bug_issues).toBe(0);
      expect(result.highest_defect_rate_component).toBeNull();
      expect(result.most_bugs_component).toBeNull();
    });

    test('handles all null defect rates', () => {
      const components = [
        { name: 'va-modal', bug_count: 3, defect_rate: null },
        { name: 'va-button', bug_count: 1, defect_rate: null }
      ];

      const result = collector.buildSummary(components, 4);

      expect(result.highest_defect_rate_component).toBeNull();
    });

    test('includes last_updated timestamp', () => {
      const result = collector.buildSummary([], 0);

      expect(result.last_updated).toBeDefined();
      expect(() => new Date(result.last_updated)).not.toThrow();
    });

    test('handles empty components array', () => {
      const result = collector.buildSummary([], 0);

      expect(result.total_components).toBe(0);
      expect(result.total_components_with_bugs).toBe(0);
      expect(result.total_bug_issues).toBe(0);
    });
  });

  describe('exported functions', () => {
    test('all expected functions are exported', () => {
      expect(typeof collector.loadComponentNames).toBe('function');
      expect(typeof collector.loadUsageData).toBe('function');
      expect(typeof collector.fetchOpenBugIssues).toBe('function');
      expect(typeof collector.countBugsByComponent).toBe('function');
      expect(typeof collector.buildComponentMetrics).toBe('function');
      expect(typeof collector.buildSummary).toBe('function');
    });
  });

  describe('data validation', () => {
    test('countBugsByComponent handles issues with no matching labels', () => {
      const issues = [
        { labels: ['bug', 'unrelated-label'] },
        { labels: ['bug'] }
      ];
      const componentNames = ['va-alert'];

      const bugCounts = collector.countBugsByComponent(issues, componentNames);

      expect(bugCounts.get('va-alert')).toBe(0);
    });

    test('buildComponentMetrics handles large defect rates gracefully', () => {
      const bugCounts = new Map([['va-alert', 100]]);
      const usageMap = new Map([['va-alert', 2]]);

      const result = collector.buildComponentMetrics(bugCounts, usageMap);

      // (100/2)*100 = 5000
      expect(result[0].defect_rate).toBe(5000);
    });

    test('buildSummary excludes zero defect rates from highest calculation', () => {
      const components = [
        { name: 'va-modal', bug_count: 0, defect_rate: 0 },
        { name: 'va-button', bug_count: 2, defect_rate: 1.5 }
      ];

      const result = collector.buildSummary(components, 2);

      // Should pick va-button (1.5) not va-modal (0)
      expect(result.highest_defect_rate_component).toBe('va-button');
    });
  });
});
