# Pattern Adherence Tracking Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create automated tracking system to monitor which VA.gov forms use which codified patterns.

**Architecture:** Weekly GitHub Actions workflow that fetches product directory, parses pattern code-links from frontmatter, analyzes vets-website imports, and generates compliance reports (HTML + markdown).

**Tech Stack:** Node.js (built-in modules only), GitHub CLI, GitHub Actions, Jekyll frontmatter parsing

---

## Task 1: Create Pattern Metadata Parser

**Files:**
- Create: `scripts/collect-pattern-adherence.js`
- Reference: `scripts/collect-issue-metrics.js` (for code style)

**Step 1: Write test skeleton**

Create test file to verify pattern parsing:

```javascript
// scripts/test-pattern-parser.js
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
```

**Step 2: Run test to verify it fails**

Run: `node scripts/test-pattern-parser.js`
Expected: Error - "Cannot find module './collect-pattern-adherence.js'"

**Step 3: Create pattern parser implementation**

```javascript
#!/usr/bin/env node

/**
 * Pattern Adherence Tracking Script
 *
 * Analyzes which VA.gov forms use which codified design patterns
 * by tracking imports in vets-website codebase.
 *
 * Usage: node scripts/collect-pattern-adherence.js
 * Requires: gh CLI authenticated
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const PATTERNS_DIR = path.join(__dirname, '../src/_patterns');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/data/metrics');
const JEKYLL_DATA_DIR = path.join(__dirname, '../src/_data/metrics');
const PRODUCT_DIRECTORY_REPO = 'department-of-veterans-affairs/product-directory';
const VETS_WEBSITE_REPO = 'department-of-veterans-affairs/vets-website';

/**
 * Parse frontmatter from a markdown file
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split('\n');

  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      frontmatter[key] = value.replace(/^["']|["']$/g, ''); // Remove quotes
    }
  });

  return frontmatter;
}

/**
 * Parse pattern metadata from markdown file
 */
function parsePatternMetadata(filename, content) {
  const frontmatter = parseFrontmatter(content);
  const codeLink = frontmatter['code-link'];

  if (!codeLink) {
    return {
      filename,
      title: frontmatter.title || filename,
      hasCodeLink: false,
      codeLink: null,
      codeFile: null
    };
  }

  // Extract file path from GitHub URL
  // Format: https://github.com/department-of-veterans-affairs/vets-website/blob/main/PATH
  const pathMatch = codeLink.match(/vets-website\/blob\/main\/(.+)$/);
  const codeFile = pathMatch ? pathMatch[1] : null;

  return {
    filename,
    title: frontmatter.title || filename,
    permalink: frontmatter.permalink || null,
    hasCodeLink: true,
    codeLink,
    codeFile
  };
}

module.exports = { parsePatternMetadata, parseFrontmatter };
```

**Step 4: Run test to verify it passes**

Run: `node scripts/test-pattern-parser.js`
Expected: "✅ Pattern parser test passed"

**Step 5: Commit**

```bash
git add scripts/collect-pattern-adherence.js scripts/test-pattern-parser.js
git commit -m "feat: add pattern metadata parser

- Parse frontmatter from pattern markdown files
- Extract code-link URLs and file paths
- Add test for pattern parser"
```

---

## Task 2: Add Pattern Discovery

**Files:**
- Modify: `scripts/collect-pattern-adherence.js`
- Test: `scripts/test-pattern-parser.js`

**Step 1: Write test for pattern discovery**

Add to test file:

```javascript
async function testPatternDiscovery() {
  const { getAllPatterns } = require('./collect-pattern-adherence.js');
  const patterns = await getAllPatterns();

  assert.ok(patterns.length > 0, 'Should find patterns');
  const emailPattern = patterns.find(p => p.title === 'Email address');
  assert.ok(emailPattern, 'Should find email pattern');
  assert.ok(emailPattern.hasCodeLink, 'Email pattern should have code link');

  console.log(`✅ Pattern discovery test passed - found ${patterns.length} patterns`);
}

// Update main test runner
async function runAllTests() {
  await testPatternParser();
  await testPatternDiscovery();
}

runAllTests().catch(console.error);
```

**Step 2: Run test to verify it fails**

Run: `node scripts/test-pattern-parser.js`
Expected: Error - "getAllPatterns is not a function"

**Step 3: Implement pattern discovery**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Recursively find all pattern markdown files
 */
async function findPatternFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip HTML directories and other non-pattern dirs
      if (entry.name !== 'html') {
        files.push(...await findPatternFiles(fullPath));
      }
    } else if (entry.isFile() && entry.name.endsWith('.md') &&
               entry.name !== 'index.md' &&
               entry.name !== 'template.md' &&
               entry.name !== 'intentional-omissions.md' &&
               entry.name !== 'wizards.md') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Get all patterns with their metadata
 */
async function getAllPatterns() {
  console.log('Discovering patterns...');

  const patternFiles = await findPatternFiles(PATTERNS_DIR);
  const patterns = [];

  for (const filePath of patternFiles) {
    const content = await fs.readFile(filePath, 'utf8');
    const relativePath = path.relative(PATTERNS_DIR, filePath);
    const metadata = parsePatternMetadata(relativePath, content);
    patterns.push(metadata);
  }

  console.log(`Found ${patterns.length} patterns`);
  const withCodeLinks = patterns.filter(p => p.hasCodeLink).length;
  console.log(`${withCodeLinks} patterns have code-link defined`);

  return patterns;
}

// Update module.exports
module.exports = { parsePatternMetadata, parseFrontmatter, getAllPatterns, findPatternFiles };
```

**Step 4: Run test to verify it passes**

Run: `node scripts/test-pattern-parser.js`
Expected: "✅ Pattern discovery test passed - found N patterns"

**Step 5: Commit**

```bash
git add scripts/collect-pattern-adherence.js scripts/test-pattern-parser.js
git commit -m "feat: add pattern file discovery

- Recursively scan pattern directories
- Filter out non-pattern files
- Report pattern statistics"
```

---

## Task 3: Add Product Directory Integration

**Files:**
- Modify: `scripts/collect-pattern-adherence.js`
- Modify: `scripts/test-pattern-parser.js`

**Step 1: Write test for product directory fetching**

Add to test file:

```javascript
async function testProductDirectory() {
  const { getFormProducts } = require('./collect-pattern-adherence.js');
  const forms = await getFormProducts();

  assert.ok(forms.length > 0, 'Should find form products');
  const cgForm = forms.find(f => f.product_name.includes('10-10CG'));
  assert.ok(cgForm, 'Should find 10-10CG form');
  assert.strictEqual(cgForm.analytics_category, 'Forms');

  console.log(`✅ Product directory test passed - found ${forms.length} forms`);
}

// Add to runAllTests
async function runAllTests() {
  await testPatternParser();
  await testPatternDiscovery();
  await testProductDirectory();
}
```

**Step 2: Run test to verify it fails**

Run: `node scripts/test-pattern-parser.js`
Expected: Error - "getFormProducts is not a function"

**Step 3: Implement product directory fetching**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Fetch product directory JSON from GitHub
 */
async function fetchProductDirectory() {
  console.log('Fetching product directory...');

  try {
    const output = execSync(
      `gh api repos/${PRODUCT_DIRECTORY_REPO}/contents/product-directory.json --jq '.content'`,
      { encoding: 'utf8' }
    );

    // Decode base64 content
    const jsonContent = Buffer.from(output.trim(), 'base64').toString('utf8');
    return JSON.parse(jsonContent);
  } catch (error) {
    console.error('Failed to fetch product directory:', error.message);
    throw error;
  }
}

/**
 * Filter products to only include forms
 */
async function getFormProducts() {
  const products = await fetchProductDirectory();

  const forms = products.filter(product =>
    product.analytics_category === 'Forms' ||
    product.platform_console_category === 'Forms'
  );

  console.log(`Found ${forms.length} form products in product directory`);

  return forms.map(form => ({
    product_id: form.product_id,
    product_name: form.product_name,
    path_to_code: form.path_to_code,
    analytics_category: form.analytics_category,
    github_product_label: form.github_product_label
  }));
}

// Update module.exports
module.exports = {
  parsePatternMetadata,
  parseFrontmatter,
  getAllPatterns,
  findPatternFiles,
  fetchProductDirectory,
  getFormProducts
};
```

**Step 4: Run test to verify it passes**

Run: `node scripts/test-pattern-parser.js`
Expected: "✅ Product directory test passed - found N forms"

**Step 5: Commit**

```bash
git add scripts/collect-pattern-adherence.js scripts/test-pattern-parser.js
git commit -m "feat: add product directory integration

- Fetch product-directory.json via gh CLI
- Filter to forms by analytics_category
- Extract relevant form metadata"
```

---

## Task 4: Add Import Analysis for vets-website

**Files:**
- Modify: `scripts/collect-pattern-adherence.js`

**Step 1: Add import analysis function (no test - requires vets-website access)**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Find which applications import a specific file from vets-website
 * Returns array of application paths that import the file
 */
async function findImporters(patternCodeFile) {
  console.log(`Analyzing imports for ${patternCodeFile}...`);

  try {
    // Extract just the filename for searching
    const filename = path.basename(patternCodeFile);

    // Search vets-website for imports of this file using grep
    // We need to clone or have access to vets-website repo
    // For now, use gh api to search code
    const searchQuery = `repo:${VETS_WEBSITE_REPO} "from.*${filename.replace('.jsx', '').replace('.js', '')}"`;

    const output = execSync(
      `gh api search/code --method GET -f q='${searchQuery}' --paginate --jq '.items[] | {path: .path, repository: .repository.full_name}'`,
      {
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
        stdio: ['pipe', 'pipe', 'ignore'] // Suppress stderr warnings
      }
    );

    if (!output.trim()) {
      return [];
    }

    // Parse JSONL output
    const lines = output.trim().split('\n').filter(line => line.trim());
    const results = lines.map(line => JSON.parse(line));

    // Extract application paths from file paths
    // Format: src/applications/{app-name}/...
    const appPaths = new Set();

    results.forEach(result => {
      const match = result.path.match(/src\/applications\/([^\/]+)/);
      if (match) {
        appPaths.add(match[1]);
      }
    });

    return Array.from(appPaths);
  } catch (error) {
    // GitHub code search may fail due to rate limits or missing results
    console.warn(`Could not analyze imports for ${patternCodeFile}: ${error.message}`);
    return [];
  }
}

// Update module.exports
module.exports = {
  parsePatternMetadata,
  parseFrontmatter,
  getAllPatterns,
  findPatternFiles,
  fetchProductDirectory,
  getFormProducts,
  findImporters
};
```

**Step 2: Test manually with a known pattern**

Run:
```bash
node -e "
const { findImporters } = require('./scripts/collect-pattern-adherence.js');
findImporters('src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx')
  .then(apps => console.log('Found apps:', apps))
  .catch(console.error);
"
```

Expected: Array of application names that import emailPattern

**Step 3: Commit**

```bash
git add scripts/collect-pattern-adherence.js
git commit -m "feat: add vets-website import analysis

- Search GitHub code API for pattern imports
- Extract application names from file paths
- Handle rate limit and search failures gracefully"
```

---

## Task 5: Build Pattern-to-Forms Mapping

**Files:**
- Modify: `scripts/collect-pattern-adherence.js`

**Step 1: Implement cross-reference logic**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Build mapping of patterns to forms that use them
 */
async function buildPatternAdherence() {
  const patterns = await getAllPatterns();
  const forms = await getFormProducts();

  // Only process patterns with code-link
  const codifiedPatterns = patterns.filter(p => p.hasCodeLink);

  console.log(`\nAnalyzing adherence for ${codifiedPatterns.length} codified patterns...`);

  const adherenceData = [];

  for (const pattern of codifiedPatterns) {
    console.log(`\nProcessing: ${pattern.title}`);

    // Find applications that import this pattern
    const importingApps = await findImporters(pattern.codeFile);

    // Cross-reference with form products
    const matchingForms = forms.filter(form => {
      if (!form.path_to_code) return false;

      // Extract app name from path_to_code (e.g., "src/applications/caregivers" -> "caregivers")
      const appName = form.path_to_code.replace(/^src\/applications\//, '').split('/')[0];
      return importingApps.includes(appName);
    });

    adherenceData.push({
      pattern_name: pattern.title,
      pattern_file: pattern.filename,
      pattern_permalink: pattern.permalink,
      code_file: pattern.codeFile,
      forms_using_pattern: matchingForms.map(f => ({
        product_name: f.product_name,
        path_to_code: f.path_to_code,
        github_label: f.github_product_label
      })),
      usage_count: matchingForms.length,
      total_forms: forms.length,
      compliance_percentage: Math.round((matchingForms.length / forms.length) * 100)
    });

    console.log(`  ✓ ${matchingForms.length} forms use this pattern`);
  }

  return {
    generated_at: new Date().toISOString(),
    total_patterns: codifiedPatterns.length,
    total_forms: forms.length,
    patterns: adherenceData,
    forms: forms
  };
}

// Update module.exports
module.exports = {
  parsePatternMetadata,
  parseFrontmatter,
  getAllPatterns,
  findPatternFiles,
  fetchProductDirectory,
  getFormProducts,
  findImporters,
  buildPatternAdherence
};
```

**Step 2: Test the full pipeline**

Run:
```bash
node -e "
const { buildPatternAdherence } = require('./scripts/collect-pattern-adherence.js');
buildPatternAdherence()
  .then(data => {
    console.log('\n=== SUMMARY ===');
    console.log('Total patterns:', data.total_patterns);
    console.log('Total forms:', data.total_forms);
    console.log('Pattern compliance:');
    data.patterns.forEach(p => {
      console.log(\`  \${p.pattern_name}: \${p.usage_count}/\${p.total_forms} (\${p.compliance_percentage}%)\`);
    });
  })
  .catch(console.error);
"
```

Expected: Summary report showing pattern compliance statistics

**Step 3: Commit**

```bash
git add scripts/collect-pattern-adherence.js
git commit -m "feat: build pattern-to-forms mapping

- Cross-reference importing apps with form products
- Calculate usage counts and compliance percentages
- Generate structured adherence data"
```

---

## Task 6: Add Report Generation

**Files:**
- Modify: `scripts/collect-pattern-adherence.js`

**Step 1: Implement JSON output**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Save adherence data as JSON
 */
async function saveAdherenceData(data) {
  // Ensure output directories exist
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(JEKYLL_DATA_DIR, { recursive: true });

  const outputFile = path.join(OUTPUT_DIR, 'pattern-adherence.json');
  const jekyllFile = path.join(JEKYLL_DATA_DIR, 'pattern-adherence.json');

  const jsonContent = JSON.stringify(data, null, 2);

  await fs.writeFile(outputFile, jsonContent, 'utf8');
  await fs.writeFile(jekyllFile, jsonContent, 'utf8');

  console.log(`\n✅ Saved pattern adherence data to:`);
  console.log(`   ${outputFile}`);
  console.log(`   ${jekyllFile}`);
}
```

**Step 2: Implement markdown report generation**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Generate markdown report
 */
function generateMarkdownReport(data) {
  const lines = [];

  lines.push('# Pattern Adherence Report');
  lines.push('');
  lines.push(`Generated: ${new Date(data.generated_at).toLocaleString()}`);
  lines.push('');

  // Summary section
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total Patterns Analyzed:** ${data.total_patterns}`);
  lines.push(`- **Total Forms:** ${data.total_forms}`);
  lines.push('');

  // Sort patterns by usage count (descending)
  const sortedPatterns = [...data.patterns].sort((a, b) => b.usage_count - a.usage_count);

  lines.push('## Pattern Compliance Summary');
  lines.push('');
  lines.push('| Pattern | Forms Using | Compliance % |');
  lines.push('|---------|-------------|--------------|');

  sortedPatterns.forEach(pattern => {
    lines.push(`| ${pattern.pattern_name} | ${pattern.usage_count}/${pattern.total_forms} | ${pattern.compliance_percentage}% |`);
  });

  lines.push('');

  // Detailed section
  lines.push('## Detailed Pattern Usage');
  lines.push('');

  sortedPatterns.forEach(pattern => {
    lines.push(`### ${pattern.pattern_name}`);
    lines.push('');
    lines.push(`**Code:** [\`${pattern.code_file}\`](${data.patterns.find(p => p.pattern_name === pattern.pattern_name)?.pattern_permalink || '#'})`);
    lines.push('');
    lines.push(`**Usage:** ${pattern.usage_count} forms (${pattern.compliance_percentage}%)`);
    lines.push('');

    if (pattern.forms_using_pattern.length > 0) {
      lines.push('**Forms using this pattern:**');
      lines.push('');
      pattern.forms_using_pattern.forEach(form => {
        lines.push(`- ${form.product_name}`);
      });
      lines.push('');
    } else {
      lines.push('*No forms currently use this pattern*');
      lines.push('');
    }
  });

  // Forms matrix
  lines.push('## Forms × Patterns Matrix');
  lines.push('');

  // Create matrix header
  const patternNames = sortedPatterns.map(p => p.pattern_name);
  lines.push('| Form | ' + patternNames.join(' | ') + ' |');
  lines.push('|------|' + patternNames.map(() => '---').join('|') + '|');

  // Create matrix rows
  data.forms.forEach(form => {
    const row = [form.product_name];

    patternNames.forEach(patternName => {
      const pattern = data.patterns.find(p => p.pattern_name === patternName);
      const usesPattern = pattern.forms_using_pattern.some(f =>
        f.product_name === form.product_name
      );
      row.push(usesPattern ? '✅' : '');
    });

    lines.push('| ' + row.join(' | ') + ' |');
  });

  return lines.join('\n');
}

/**
 * Save markdown report
 */
async function saveMarkdownReport(data) {
  const reportContent = generateMarkdownReport(data);
  const reportFile = path.join(OUTPUT_DIR, 'pattern-adherence-report.md');

  await fs.writeFile(reportFile, reportContent, 'utf8');

  console.log(`✅ Saved markdown report to: ${reportFile}`);
}
```

**Step 3: Add main execution function**

Add to `collect-pattern-adherence.js`:

```javascript
/**
 * Main execution
 */
async function main() {
  console.log('=== VA.gov Pattern Adherence Analysis ===\n');

  try {
    const data = await buildPatternAdherence();

    await saveAdherenceData(data);
    await saveMarkdownReport(data);

    console.log('\n✅ Pattern adherence analysis complete!');

    // Print summary
    console.log('\n=== SUMMARY ===');
    console.log(`Analyzed ${data.total_patterns} patterns across ${data.total_forms} forms`);
    console.log('\nTop patterns by usage:');

    const top5 = [...data.patterns]
      .sort((a, b) => b.usage_count - a.usage_count)
      .slice(0, 5);

    top5.forEach((pattern, i) => {
      console.log(`  ${i + 1}. ${pattern.pattern_name}: ${pattern.usage_count} forms (${pattern.compliance_percentage}%)`);
    });

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Update module.exports
module.exports = {
  parsePatternMetadata,
  parseFrontmatter,
  getAllPatterns,
  findPatternFiles,
  fetchProductDirectory,
  getFormProducts,
  findImporters,
  buildPatternAdherence,
  generateMarkdownReport,
  saveMarkdownReport,
  saveAdherenceData,
  main
};
```

**Step 4: Test the full script**

Run: `node scripts/collect-pattern-adherence.js`

Expected:
- Console output showing progress
- JSON file created at `src/assets/data/metrics/pattern-adherence.json`
- Markdown report created at `src/assets/data/metrics/pattern-adherence-report.md`

**Step 5: Commit**

```bash
git add scripts/collect-pattern-adherence.js
git commit -m "feat: add report generation

- Generate JSON data files for consumption
- Create markdown report with summary and matrix
- Add main execution function
- Sort patterns by usage for readability"
```

---

## Task 7: Create GitHub Actions Workflow

**Files:**
- Create: `.github/workflows/pattern-adherence.yml`
- Reference: `.github/workflows/metrics-dashboard.yml`

**Step 1: Create workflow file**

```yaml
name: Update Pattern Adherence Tracking

on:
  schedule:
    # Run weekly on Mondays at 6 AM UTC (2 AM ET / 1 AM EDT)
    - cron: '0 6 * * 1'
  pull_request:
    types: [opened, reopened, synchronize, ready_for_review]
    branches-ignore:
      - 'pattern-adherence-update-**'
      - '*pattern-adherence*'
    paths:
      - '.github/workflows/pattern-adherence.yml'
      - 'scripts/collect-pattern-adherence.js'
      - 'src/_patterns/**/*.md'
  workflow_dispatch:
    # Allow manual triggering for testing

jobs:
  update-pattern-adherence:
    runs-on: ubuntu-latest

    # Skip if last commit was made by GitHub Action
    if: |
      github.event.head_commit.author.email != 'action@github.com' &&
      !contains(github.event.head_commit.message, '📊 Update pattern adherence data')

    permissions:
      contents: write
      pull-requests: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.VADS_WORKFLOWS }}
          ref: ${{ github.head_ref || github.ref_name }}
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Skip dependency installation
        run: |
          echo "📝 Pattern adherence script uses built-in Node.js modules only"
          echo "🚀 Skipping yarn install to avoid dependency conflicts"
          echo "✅ Node.js $(node --version) is ready"

      - name: Setup GitHub CLI
        run: |
          echo "Using pre-installed GitHub CLI"
          gh --version
        env:
          GITHUB_TOKEN: ${{ secrets.VADS_WORKFLOWS }}

      - name: Verify GitHub CLI authentication
        run: |
          gh auth status
          gh api user --jq '.login'
        env:
          GITHUB_TOKEN: ${{ secrets.VADS_WORKFLOWS }}

      - name: Create data directories
        run: |
          mkdir -p src/assets/data/metrics
          mkdir -p src/_data/metrics

      - name: Collect pattern adherence data
        run: |
          echo "Starting pattern adherence analysis..."
          node scripts/collect-pattern-adherence.js
          echo "Pattern adherence analysis completed"
        env:
          GITHUB_TOKEN: ${{ secrets.VADS_WORKFLOWS }}

      - name: Verify generated data files
        run: |
          echo "Checking for generated files..."
          ls -la src/assets/data/metrics/

          if [ -f "src/assets/data/metrics/pattern-adherence.json" ]; then
            echo "✅ pattern-adherence.json generated"
            echo "File size: $(du -h src/assets/data/metrics/pattern-adherence.json)"
          else
            echo "❌ pattern-adherence.json not found"
            exit 1
          fi

          if [ -f "src/assets/data/metrics/pattern-adherence-report.md" ]; then
            echo "✅ pattern-adherence-report.md generated"
            echo "File size: $(du -h src/assets/data/metrics/pattern-adherence-report.md)"
          else
            echo "❌ pattern-adherence-report.md not found"
            exit 1
          fi

      - name: Check for changes
        id: git-check
        run: |
          git add src/assets/data/metrics/pattern-adherence.json
          git add src/assets/data/metrics/pattern-adherence-report.md
          git add src/_data/metrics/pattern-adherence.json

          if git diff --staged --quiet; then
            echo "changes=false" >> $GITHUB_OUTPUT
            echo "No changes detected"
          else
            echo "changes=true" >> $GITHUB_OUTPUT
            echo "Changes detected"
            git diff --staged --stat
          fi

      - name: Create branch and commit changes
        if: steps.git-check.outputs.changes == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"

          CURRENT_DATE=$(date -u '+%Y-%m-%d')
          BRANCH_NAME="pattern-adherence-update-${CURRENT_DATE}"

          git checkout -b "$BRANCH_NAME"

          TOTAL_PATTERNS=$(jq -r '.total_patterns // "unknown"' src/assets/data/metrics/pattern-adherence.json)
          TOTAL_FORMS=$(jq -r '.total_forms // "unknown"' src/assets/data/metrics/pattern-adherence.json)

          git commit -m "📊 Update pattern adherence data - ${CURRENT_DATE}

          - Analyzed ${TOTAL_PATTERNS} codified patterns
          - Tracked ${TOTAL_FORMS} VA.gov forms
          - Updated pattern-to-forms mapping
          - Generated compliance reports

          🤖 Automated update via GitHub Actions"

          git push origin "$BRANCH_NAME"

          echo "BRANCH_NAME=$BRANCH_NAME" >> $GITHUB_ENV

      - name: Create Pull Request
        if: steps.git-check.outputs.changes == 'true'
        run: |
          CURRENT_DATE=$(date -u '+%Y-%m-%d %H:%M UTC')

          PR_BODY="## Summary
          Automated weekly update of pattern adherence tracking data.

          ### What Changed
          - Pattern-to-forms mapping updated
          - Compliance percentages recalculated
          - Forms × Patterns matrix regenerated

          ### Files Updated
          - \`src/assets/data/metrics/pattern-adherence.json\`
          - \`src/assets/data/metrics/pattern-adherence-report.md\`
          - \`src/_data/metrics/pattern-adherence.json\`

          ### Test Plan
          - [ ] Verify JSON structure is valid
          - [ ] Check markdown report renders correctly
          - [ ] Review compliance percentages for accuracy

          🤖 Generated with automated workflow - ${CURRENT_DATE}"

          gh pr create \
            --title "📊 Update pattern adherence data - $(date -u '+%Y-%m-%d')" \
            --body "$PR_BODY" \
            --head "$BRANCH_NAME" \
            --base main

          PR_URL=$(gh pr view "$BRANCH_NAME" --json url --jq '.url')
          echo "PR_URL=$PR_URL" >> $GITHUB_ENV
        env:
          GITHUB_TOKEN: ${{ secrets.VADS_WORKFLOWS }}

      - name: Create summary
        if: always()
        run: |
          echo "## 📊 Pattern Adherence Update Summary" >> $GITHUB_STEP_SUMMARY
          echo "" >> $GITHUB_STEP_SUMMARY

          if [ -f "src/assets/data/metrics/pattern-adherence.json" ]; then
            TOTAL_PATTERNS=$(jq -r '.total_patterns // "unknown"' src/assets/data/metrics/pattern-adherence.json)
            TOTAL_FORMS=$(jq -r '.total_forms // "unknown"' src/assets/data/metrics/pattern-adherence.json)

            echo "### ✅ Pattern Adherence Data Updated" >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY
            echo "- **Patterns Analyzed:** ${TOTAL_PATTERNS}" >> $GITHUB_STEP_SUMMARY
            echo "- **Forms Tracked:** ${TOTAL_FORMS}" >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY

            if [ "${{ steps.git-check.outputs.changes }}" == "true" ]; then
              echo "### 🚀 Pull Request Created" >> $GITHUB_STEP_SUMMARY
              if [ -n "${PR_URL:-}" ]; then
                echo "**PR URL:** $PR_URL" >> $GITHUB_STEP_SUMMARY
              fi
            else
              echo "### ℹ️ No Changes" >> $GITHUB_STEP_SUMMARY
              echo "Pattern adherence data is up to date." >> $GITHUB_STEP_SUMMARY
            fi
          else
            echo "### ❌ Update Failed" >> $GITHUB_STEP_SUMMARY
            echo "Pattern adherence data was not generated." >> $GITHUB_STEP_SUMMARY
          fi

          echo "" >> $GITHUB_STEP_SUMMARY
          echo "### 📅 Next Update" >> $GITHUB_STEP_SUMMARY
          echo "Next automatic update: Monday 6 AM UTC" >> $GITHUB_STEP_SUMMARY

      - name: Notify on failure
        if: failure()
        run: |
          echo "❌ Pattern adherence workflow failed"
          echo "Check logs for details"
```

**Step 2: Test workflow syntax**

Run: `gh workflow view pattern-adherence.yml 2>&1 || echo "Workflow file needs to be committed first"`

Expected: No YAML syntax errors

**Step 3: Commit workflow**

```bash
git add .github/workflows/pattern-adherence.yml
git commit -m "feat: add pattern adherence workflow

- Schedule weekly runs on Mondays
- Auto-create PRs with updated data
- Mirror structure of metrics-dashboard workflow
- Use VADS_WORKFLOWS token for GitHub API access"
```

---

## Task 8: Create GitHub Issue Template

**Files:**
- Create: `docs/issues/pattern-adherence-tracking.md`

**Step 1: Create comprehensive issue template**

```markdown
# Pattern Adherence Tracking System

## Background

We need to track which VA.gov forms are using codified design patterns from the VA Design System. This tracking will help us:

1. Measure pattern adoption across forms
2. Identify forms that need pattern updates
3. Report on design system compliance
4. Prioritize pattern improvements based on usage

## Current State

We have a manual accounting in [VA.gov-team-forms/Product/pattern.md](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/pattern.md) that shows which forms use which patterns, determined through one-off analysis.

## Proposed Solution

### Automated Pattern Tracking Script

Create `scripts/collect-pattern-adherence.js` that:

1. **Discovers patterns** - Scans `src/_patterns/` for markdown files with `code-link` frontmatter
2. **Fetches form list** - Pulls `product-directory.json` from product-directory repo, filters to `analytics_category: "Forms"`
3. **Analyzes imports** - For each pattern's code file, searches vets-website to find which applications import it
4. **Cross-references** - Matches importing applications with form products from product directory
5. **Generates reports** - Produces JSON data and markdown reports showing:
   - High-level compliance summary (forms using each pattern)
   - Detailed forms × patterns matrix

### Weekly GitHub Actions Workflow

Create `.github/workflows/pattern-adherence.yml` that:

- Runs weekly (Monday mornings)
- Executes the tracking script
- Creates PR with updated data if changes detected
- Follows same pattern as `metrics-dashboard.yml`

### Output Files

- `src/assets/data/metrics/pattern-adherence.json` - Structured data for programmatic access
- `src/_data/metrics/pattern-adherence.json` - Jekyll data file
- `src/assets/data/metrics/pattern-adherence-report.md` - Human-readable report

## Implementation Tasks

- [ ] Task 1: Create pattern metadata parser
- [ ] Task 2: Add pattern file discovery
- [ ] Task 3: Add product directory integration
- [ ] Task 4: Add vets-website import analysis
- [ ] Task 5: Build pattern-to-forms mapping
- [ ] Task 6: Add report generation (JSON + markdown)
- [ ] Task 7: Create GitHub Actions workflow
- [ ] Task 8: Test end-to-end with manual run
- [ ] Task 9: Document the system in README
- [ ] Task 10: Add future iteration notes for non-codified patterns

## Future Enhancements

### Phase 2: Non-Codified Patterns

For patterns without `code-link`, determine "thumbprints" to detect usage:

- Analyze pattern documentation for identifying characteristics
- Search for specific component combinations
- Look for content patterns or page structures
- Manual review and tagging

### Phase 3: Pattern Quality Metrics

- Track pattern implementation variations
- Measure accessibility compliance
- Monitor pattern performance metrics

## Testing

Manual test run:
```bash
node scripts/collect-pattern-adherence.js
```

Workflow test:
```bash
gh workflow run pattern-adherence.yml
```

## Acceptance Criteria

- ✅ Script successfully identifies patterns with code-link
- ✅ Product directory is fetched and filtered to forms
- ✅ Import analysis finds applications using patterns
- ✅ Forms are correctly matched with patterns
- ✅ JSON output is well-structured and complete
- ✅ Markdown report is readable and accurate
- ✅ Workflow runs weekly without errors
- ✅ PRs are created automatically with updated data

## Links

- Product Directory: https://github.com/department-of-veterans-affairs/product-directory
- Current Manual Tracking: https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/pattern.md
- Pattern Documentation: https://design.va.gov/patterns/

## Notes

- Initially focusing on patterns with `code-link` only
- GitHub Code Search API has rate limits - script handles gracefully
- vets-website is the source of truth for pattern usage
- Product directory determines which applications are "forms"
```

**Step 2: Commit issue template**

```bash
git add docs/issues/pattern-adherence-tracking.md
git commit -m "docs: add pattern adherence tracking issue template

- Complete background and requirements
- Implementation task breakdown
- Future enhancement planning
- Testing and acceptance criteria"
```

---

## Task 9: Add Documentation

**Files:**
- Create: `scripts/README.md` (or update if exists)

**Step 1: Create/update scripts README**

```markdown
# Scripts Documentation

This directory contains automation scripts for the VA Design System documentation site.

## Pattern Adherence Tracking

**Script:** `collect-pattern-adherence.js`

Tracks which VA.gov forms use which codified design patterns.

### Usage

```bash
node scripts/collect-pattern-adherence.js
```

Requires `gh` CLI to be authenticated.

### What It Does

1. Scans `src/_patterns/` for patterns with `code-link` frontmatter
2. Fetches product directory from `department-of-veterans-affairs/product-directory`
3. Filters to products with `analytics_category: "Forms"`
4. Searches vets-website codebase for imports of pattern code files
5. Matches importing applications with form products
6. Generates compliance reports

### Outputs

- `src/assets/data/metrics/pattern-adherence.json` - Full data structure
- `src/_data/metrics/pattern-adherence.json` - Jekyll data file
- `src/assets/data/metrics/pattern-adherence-report.md` - Markdown report

### Data Structure

```json
{
  "generated_at": "ISO-8601 timestamp",
  "total_patterns": 9,
  "total_forms": 50,
  "patterns": [
    {
      "pattern_name": "Email address",
      "pattern_file": "ask-users-for/email-address.md",
      "pattern_permalink": "/patterns/ask-users-for/email-address",
      "code_file": "src/platform/forms-system/.../emailPattern.jsx",
      "forms_using_pattern": [
        {
          "product_name": "10-10CG - Apply for Caregiver",
          "path_to_code": "src/applications/caregivers",
          "github_label": "1010-cg"
        }
      ],
      "usage_count": 25,
      "total_forms": 50,
      "compliance_percentage": 50
    }
  ],
  "forms": [ ... ]
}
```

### Automated Updates

The workflow `.github/workflows/pattern-adherence.yml` runs this script weekly (Mondays 6 AM UTC) and creates a PR if data changes.

### Testing

```bash
# Test pattern parser
node scripts/test-pattern-parser.js

# Run full analysis
node scripts/collect-pattern-adherence.js

# Manual workflow trigger
gh workflow run pattern-adherence.yml
```

## Other Scripts

- `collect-issue-metrics.js` - GitHub issue tracking metrics
- `collect-experimental-metrics.js` - Experimental design metrics
- `collect-governance-metrics.js` - Governance and collaboration metrics
- `process-ds-components.js` - Component usage statistics

See individual script headers for usage details.
```

**Step 2: Commit documentation**

```bash
git add scripts/README.md
git commit -m "docs: add pattern adherence script documentation

- Explain purpose and workflow
- Document data structure
- Add usage examples and testing instructions"
```

---

## Task 10: Create Initial Test Run

**Files:**
- None (validation task)

**Step 1: Run script manually**

Run:
```bash
cd /Users/OITCODingeM/repos/vets-design-system-documentation
node scripts/collect-pattern-adherence.js
```

Expected:
- Script completes successfully
- Console shows progress for each pattern
- Output files created

**Step 2: Validate JSON output**

Run:
```bash
cat src/assets/data/metrics/pattern-adherence.json | jq '.patterns[] | {name: .pattern_name, usage: .usage_count}'
```

Expected: Valid JSON showing pattern names and usage counts

**Step 3: Validate markdown report**

Run:
```bash
head -50 src/assets/data/metrics/pattern-adherence-report.md
```

Expected: Properly formatted markdown with summary table

**Step 4: Test workflow (if possible)**

Run:
```bash
gh workflow run pattern-adherence.yml
```

Then check status:
```bash
gh run list --workflow=pattern-adherence.yml --limit 1
```

Expected: Workflow starts and runs successfully

**Step 5: Document results**

Create summary comment:
```
Tested pattern adherence system end-to-end:
- ✅ Script runs without errors
- ✅ Discovers N patterns with code-link
- ✅ Fetches M forms from product directory
- ✅ Generates valid JSON output
- ✅ Creates readable markdown report
- ✅ Workflow executes successfully
```

---

## Completion Checklist

- [ ] Pattern metadata parser implemented and tested
- [ ] Pattern file discovery working
- [ ] Product directory integration functional
- [ ] Import analysis operational (with rate limit handling)
- [ ] Pattern-to-forms mapping accurate
- [ ] JSON and markdown reports generated correctly
- [ ] GitHub Actions workflow configured
- [ ] Weekly schedule set (Mondays 6 AM UTC)
- [ ] Auto-PR creation working
- [ ] Documentation complete
- [ ] End-to-end test successful

## Future Iterations

### Non-Codified Pattern Detection

For patterns without `code-link`, implement thumbprint matching:

1. Document identifying characteristics per pattern
2. Create search queries for component combinations
3. Build heuristics for pattern detection
4. Add manual review/override mechanism

Example thumbprints:
- "Check answers" pattern → Look for review page with va-summary-box + edit links
- "Navigate benefit applications" → Search for va-process-list component
- "Stay informed of status" → Detect confirmation page + status tracking links

### Enhanced Reporting

- HTML reports with interactive charts
- Trend tracking over time
- Pattern adoption velocity metrics
- Form-level compliance scorecards
- Team/product-area aggregations

### Integration

- Post results to Slack for visibility
- Create GitHub issues for non-compliant forms
- Dashboard page on design.va.gov
- API endpoint for programmatic access
