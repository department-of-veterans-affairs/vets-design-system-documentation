/**
 * Unit Tests for Pattern Adherence Tracking Script
 *
 * Tests the core pure functions exported by collect-pattern-adherence.js.
 * Integration tests that require gh CLI are in scripts/integration-test-pattern-parser.js.
 */

describe('Pattern Adherence Tracker', () => {
  let tracker;

  beforeAll(() => {
    tracker = require('../scripts/collect-pattern-adherence');
  });

  describe('parsePatternMetadata', () => {
    test('extracts code-link from valid frontmatter', () => {
      const content = `---
layout: pattern
title: Email address
permalink: /patterns/ask-users-for/email-address
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx
---

Some content here.`;

      const result = tracker.parsePatternMetadata('email.md', content);

      expect(result.hasCodeLink).toBe(true);
      expect(result.codeFile).toBe(
        'src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx',
      );
      expect(result.title).toBe('Email address');
      expect(result.permalink).toBe('/patterns/ask-users-for/email-address');
    });

    test('returns hasCodeLink false when no frontmatter', () => {
      const result = tracker.parsePatternMetadata('no-front.md', 'Just content');

      expect(result.hasCodeLink).toBe(false);
      expect(result.codeFile).toBeNull();
    });

    test('returns hasCodeLink false when no code-link in frontmatter', () => {
      const content = `---
layout: pattern
title: Some pattern
---`;

      const result = tracker.parsePatternMetadata('no-code.md', content);

      expect(result.hasCodeLink).toBe(false);
      expect(result.codeFile).toBeNull();
      expect(result.title).toBe('Some pattern');
    });

    test('handles quoted title values', () => {
      const content = `---
title: "Quoted title"
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/file.jsx
---`;

      const result = tracker.parsePatternMetadata('quoted.md', content);

      expect(result.title).toBe('Quoted title');
    });

    test('rejects non-GitHub code-link URLs', () => {
      const content = `---
title: Bad link
code-link: https://example.com/some/file.js
---`;

      const result = tracker.parsePatternMetadata('bad-link.md', content);

      expect(result.hasCodeLink).toBe(false);
      expect(result.codeFile).toBeNull();
    });

    test('handles blob/master URLs', () => {
      const content = `---
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/file.jsx
---`;

      const result = tracker.parsePatternMetadata('master.md', content);

      expect(result.hasCodeLink).toBe(true);
      expect(result.codeFile).toBe('src/platform/file.jsx');
    });

    test('preserves filename in result', () => {
      const content = `---
title: Test
---`;

      const result = tracker.parsePatternMetadata('my-pattern.md', content);

      expect(result.filename).toBe('my-pattern.md');
    });
  });

  describe('isFormProduct', () => {
    test('returns true for analytics_category Forms', () => {
      expect(
        tracker.isFormProduct({ analytics_category: 'Forms' }),
      ).toBe(true);
    });

    test('returns true for platform_console_category Forms', () => {
      expect(
        tracker.isFormProduct({ platform_console_category: 'Forms' }),
      ).toBe(true);
    });

    test('returns true when both categories are Forms', () => {
      expect(
        tracker.isFormProduct({
          analytics_category: 'Forms',
          platform_console_category: 'Forms',
        }),
      ).toBe(true);
    });

    test('returns false for non-form products', () => {
      expect(
        tracker.isFormProduct({ analytics_category: 'Health' }),
      ).toBe(false);
    });

    test('returns false for empty object', () => {
      expect(tracker.isFormProduct({})).toBe(false);
    });

    test('returns false for undefined categories', () => {
      expect(
        tracker.isFormProduct({
          analytics_category: undefined,
          platform_console_category: undefined,
        }),
      ).toBe(false);
    });
  });

  describe('generateMarkdownReport', () => {
    const sampleData = {
      total_patterns: 2,
      total_forms: 3,
      patterns: [
        {
          pattern_name: 'Email address',
          code_file: 'src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx',
          pattern_permalink: '/patterns/ask-users-for/email-address',
          usage_count: 2,
          total_forms: 3,
          compliance_percentage: 67,
          forms_using_pattern: [
            { product_name: 'Form A' },
            { product_name: 'Form B' },
          ],
        },
        {
          pattern_name: 'Phone numbers',
          code_file: 'src/platform/forms-system/src/js/web-component-patterns/phonePatterns.jsx',
          pattern_permalink: '/patterns/ask-users-for/phone-numbers',
          usage_count: 0,
          total_forms: 3,
          compliance_percentage: 0,
          forms_using_pattern: [],
        },
      ],
      forms: [
        { product_name: 'Form A' },
        { product_name: 'Form B' },
        { product_name: 'Form C' },
      ],
    };

    test('generates report with title', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('# Pattern Adherence Report');
    });

    test('includes summary section', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('**Total Patterns Analyzed:** 2');
      expect(report).toContain('**Total Forms:** 3');
    });

    test('includes compliance summary table', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('| Email address | 2/3 | 67% |');
      expect(report).toContain('| Phone numbers | 0/3 | 0% |');
    });

    test('links code file to GitHub source', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain(
        'https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx',
      );
    });

    test('includes docs link for patterns with permalink', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('**Docs:** [Email address](/patterns/ask-users-for/email-address)');
    });

    test('lists forms using a pattern', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('- Form A');
      expect(report).toContain('- Form B');
    });

    test('shows message for unused patterns', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('*No forms currently use this pattern*');
    });

    test('generates forms × patterns matrix', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).toContain('## Forms × Patterns Matrix');
      // Form A uses Email, so should have a checkmark
      expect(report).toMatch(/Form A.*✅/);
      // Form C uses neither pattern
      expect(report).toContain('| Form C |  |  |');
    });

    test('does not include generated_at timestamp', () => {
      const report = tracker.generateMarkdownReport(sampleData);

      expect(report).not.toContain('Generated:');
    });

    test('sorts patterns by usage count descending', () => {
      const report = tracker.generateMarkdownReport(sampleData);
      const emailPos = report.indexOf('### Email address');
      const phonePos = report.indexOf('### Phone numbers');

      expect(emailPos).toBeLessThan(phonePos);
    });
  });
});
