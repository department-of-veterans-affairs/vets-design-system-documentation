#!/usr/bin/env node

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

testPatternParser().catch(console.error);
