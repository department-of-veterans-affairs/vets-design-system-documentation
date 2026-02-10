#!/usr/bin/env node

/**
 * Integration tests for collect-pattern-adherence.js
 *
 * Requires: gh CLI installed and authenticated (for product directory tests).
 * Run: node scripts/integration-test-pattern-parser.js
 */

const assert = require('assert');

// Test data
const testFrontmatter = `---
layout: pattern
code-link: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx
---`;

async function testPatternParser() {
  const { parsePatternMetadata } = require('./collect-pattern-adherence.js');
  const result = parsePatternMetadata('test-pattern.md', testFrontmatter);

  assert.strictEqual(result.hasCodeLink, true);
  assert.strictEqual(result.codeFile, 'src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx');
  console.log('✅ Pattern parser test passed');
}

async function testPatternDiscovery() {
  const { getAllPatterns } = require('./collect-pattern-adherence.js');
  const patterns = await getAllPatterns();

  assert.ok(patterns.length > 0, 'Should find patterns');
  const emailPattern = patterns.find(p => p.title === 'Email address');
  assert.ok(emailPattern, 'Should find email pattern');
  assert.ok(emailPattern.hasCodeLink, 'Email pattern should have code link');

  console.log(`✅ Pattern discovery test passed - found ${patterns.length} patterns`);
}

async function testProductDirectory() {
  const { getFormProducts, isFormProduct } = require('./collect-pattern-adherence.js');
  const forms = await getFormProducts();

  assert.ok(forms.length > 0, 'Should find form products');
  const cgForm = forms.find(f => f.product_name.includes('10-10CG'));
  assert.ok(cgForm, 'Should find 10-10CG form');
  // Use the shared helper function to verify form categorization
  assert.ok(
    isFormProduct(cgForm),
    '10-10CG should be categorized as Forms'
  );

  console.log(`✅ Product directory test passed - found ${forms.length} forms`);
}

// Integration test runner
async function runAllTests() {
  await testPatternParser();
  await testPatternDiscovery();
  await testProductDirectory();
}

runAllTests().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
