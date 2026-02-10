/**
 * Tests for llms.txt build output
 *
 * Verifies that llms.txt is correctly generated during the Jekyll build
 * and served at the site root (/llms.txt).
 *
 * Run `yarn build:full` (or `yarn build && bundle exec jekyll build`)
 * before executing these tests.
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '../_site');
const LLMS_FILE = path.join(SITE_DIR, 'llms.txt');

describe('llms.txt build output', () => {
  let content;

  beforeAll(() => {
    try {
      content = fs.readFileSync(LLMS_FILE, 'utf8');
    } catch (error) {
      throw new Error(
        `Could not read ${LLMS_FILE}. ` +
        `Run 'yarn build:full' before running tests. ` +
        `Error: ${error.message}`
      );
    }
  });

  test('llms.txt exists in _site root', () => {
    expect(fs.existsSync(LLMS_FILE)).toBe(true);
  });

  test('does not contain Jekyll front matter', () => {
    // Front matter (---) should be stripped during build
    expect(content).not.toMatch(/^---/);
  });

  test('does not contain HTML layout markup', () => {
    expect(content).not.toContain('<!DOCTYPE');
    expect(content).not.toContain('<html');
    expect(content).not.toContain('<head');
    expect(content).not.toContain('<body');
  });

  test('starts with the expected title heading', () => {
    expect(content.trimStart()).toMatch(/^# VA Design System Documentation/);
  });

  test('contains required sections', () => {
    const requiredSections = [
      '## About This Site',
      '## Main Sections',
      '### Components',
      '### Patterns',
      '### Content Style Guide',
      '### Accessibility',
      '## Standards & Compliance',
      '## For LLMs',
    ];

    for (const section of requiredSections) {
      expect(content).toContain(section);
    }
  });

  test('contains the site URL (design.va.gov)', () => {
    expect(content).toContain('design.va.gov');
  });

  test('references WCAG 2.2 AA compliance', () => {
    expect(content).toContain('WCAG 2.2 AA');
  });

  test('lists component paths with leading slashes', () => {
    // Component links should be absolute paths
    const componentPaths = [
      '/components/',
      '/components/accordion',
      '/components/alert',
      '/components/button',
    ];

    for (const p of componentPaths) {
      expect(content).toContain(p);
    }
  });

  test('is plain text (not excessively large)', () => {
    // The file should be a reasonable size for an llms.txt summary
    const sizeKB = Buffer.byteLength(content, 'utf8') / 1024;
    expect(sizeKB).toBeGreaterThan(1);   // At least 1 KB of content
    expect(sizeKB).toBeLessThan(100);    // Not bloated with HTML/assets
  });
});
