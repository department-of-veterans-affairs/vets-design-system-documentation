# Scripts Documentation

This directory contains automation scripts for maintaining the VA Design System documentation site.

## Pattern Adherence Tracking

### `collect-pattern-adherence.js`

Automated tracking of design system pattern adoption across VA.gov forms.

#### Purpose

Analyzes which VA.gov forms use which codified design system patterns by:
1. Discovering patterns with `code-link` defined in frontmatter
2. Fetching product directory to identify forms
3. Analyzing vets-website codebase for pattern usage
4. Generating compliance reports (JSON + markdown)

#### Usage

```bash
# Using GitHub API (requires GITHUB_TOKEN)
node scripts/collect-pattern-adherence.js

# Using local vets-website repository (recommended)
node scripts/collect-pattern-adherence.js --vets-website-path ../vets-website
```

#### CLI Options

| Option | Description | Default |
|--------|-------------|---------|
| `--vets-website-path <path>` | Path to local vets-website repository | Uses GitHub API |

**Recommendation**: Use `--vets-website-path` to avoid GitHub API rate limits and improve performance.

#### How It Works

##### 1. Pattern Discovery

Scans `src/_patterns/**/*.md` for patterns with `code-link` defined in frontmatter:

```yaml
---
layout: pattern
permalink: /patterns/ask-users-for/names
code-link: src/platform/forms-system/src/js/web-component-patterns/fullNamePattern.js
---
```

##### 2. Pattern Detection Strategies

The script uses different detection strategies based on pattern type:

**Standard Patterns (Most patterns)**:
- Patterns in `web-component-patterns/` directory
- Forms import specific exports (e.g., `emailUI`, `emailSchema`)
- Detection: Search for export usage in form pages

Example:
```javascript
// Form imports pattern
import { emailUI, emailSchema } from 'platform/forms-system/src/js/web-component-patterns';

// Pattern defines exports
export const emailUI = { /* ... */ };
export const emailSchema = { /* ... */ };
```

**Signature Pattern (Special Case)**:
- Located in `components/FormSignature.jsx`
- Forms use declarative configuration, not imports
- Detection: Search for `statementOfTruth` in config files

Example:
```javascript
// Form configures signature declaratively
preSubmitInfo: {
  statementOfTruth: {
    body: 'I confirm that the information is accurate...',
    checkboxLabel: 'I confirm...'
  }
}
```

##### 3. Pattern Export Mapping

Defines which exports belong to each pattern:

```javascript
const PATTERN_EXPORT_MAPPING = {
  'ssnPattern.jsx': ['ssn', 'vaFileNumber', 'ssnOrVaFileNumber'],
  'emailPattern.jsx': ['email'],
  'phonePatterns.jsx': ['phone', 'Phone'],
  // ...
};
```

The script searches for these export names (with optional suffixes like `UI`, `Schema`, `NoHint`) in form code.

##### 4. Regex Pattern Matching

Handles various export naming conventions:

- Base name: `ssnOrVaFileNumber`
- With suffix: `ssnOrVaFileNumberUI`, `ssnOrVaFileNumberSchema`
- Combined suffixes: `ssnOrVaFileNumberNoHintUI`, `ssnOrVaFileNumberNoHintSchema`

Regex: `/\b${exportName}(NoHint)?(UI|Schema|Pattern)?\b/i`

##### 5. Form Matching

Cross-references applications using patterns with forms from product directory:

```javascript
// Extract app name from path (handles both formats)
"src/applications/simple-forms" → "simple-forms"
"/src/applications/caregivers" → "caregivers"

// Match against form's path_to_code
if (importingApps.includes(appName)) {
  // Form uses this pattern
}
```

#### Output Files

| File | Description |
|------|-------------|
| `src/assets/data/metrics/pattern-adherence.json` | Complete adherence data (JSON) |
| `src/_data/metrics/pattern-adherence.json` | Jekyll data file (duplicate) |
| `src/assets/data/metrics/pattern-adherence-report.md` | Human-readable report with tables |

#### Report Structure

**JSON Output**:
```json
{
  "generated_at": "2026-01-09T20:00:00.000Z",
  "total_patterns": 9,
  "total_forms": 55,
  "patterns": [
    {
      "pattern_name": "Email address",
      "code_file": "src/platform/.../emailPattern.jsx",
      "forms_using_pattern": [
        {
          "product_name": "10182 - Request a Board Appeal",
          "path_to_code": "src/applications/appeals/10182"
        }
      ],
      "usage_count": 23,
      "compliance_percentage": 42
    }
  ],
  "forms": [...]
}
```

**Markdown Output**:
- Summary statistics
- Pattern compliance table
- Detailed pattern usage (with form lists)
- Forms × Patterns matrix

#### Performance

**GitHub API Mode**:
- ~31,000 API calls (3,465 files × 9 patterns)
- Rate limit: 5,000 requests/hour
- Runtime: Hits rate limit after ~2 patterns

**Local Mode** (recommended):
- Zero API calls for pattern detection
- Only 1 API call for product directory
- Runtime: ~30-60 seconds
- File reads: ~3,000 local files per pattern

#### GitHub Actions Integration

The script runs weekly via `.github/workflows/pattern-adherence.yml`:

**Features**:
- Scheduled: Mondays at 6 AM UTC
- Sparse checkout: Only downloads `src/applications` (~200MB vs ~500MB)
- Auto-creates PR: If data changes
- Manual trigger: `workflow_dispatch`

**Workflow steps**:
1. Checkout this repo
2. Sparse checkout vets-website (`src/applications` only)
3. Run script with `--vets-website-path vets-website`
4. Commit changes to new branch
5. Create pull request with compliance summary

#### Troubleshooting

**Issue**: GitHub API rate limit exceeded
```
gh: API rate limit exceeded for user ID ...
```
**Solution**: Use `--vets-website-path` flag with local repository

**Issue**: Pattern shows 0% but form uses it
```
✓ Found 0 apps using this pattern
```
**Check**:
1. Is pattern in `PATTERN_EXPORT_MAPPING`?
2. Are export names correct?
3. Does form import from `web-component-patterns`?
4. For Signature: Does form have `statementOfTruth` config?

**Issue**: Path extraction fails
```
⚠️ Could not read src/applications/.../file.js
```
**Check**:
1. Local vets-website path is correct
2. `src/applications` directory exists
3. File permissions allow reading

#### Known Limitations

1. **GitHub API mode**: Not recommended due to rate limits
2. **Signature pattern**: Requires local mode (GitHub API not implemented)
3. **Product directory**: Always fetches from GitHub (no local option)
4. **Path format inconsistency**: Product directory has inconsistent leading slashes (handled by regex)

#### Future Enhancements

- [ ] Implement Signature pattern detection via GitHub API
- [ ] Cache product directory locally
- [ ] Add support for non-codified patterns (Phase 2)
- [ ] Add pattern version tracking
- [ ] Generate trend analysis over time

#### Related Documentation

- [Pattern adherence tracking plan](../docs/plans/2026-01-09-pattern-adherence-tracking.md)
- [VA Design System Patterns](https://design.va.gov/patterns/)
- [Forms System Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)

#### Support

For issues or questions:
1. Check existing [GitHub issues](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues)
2. Review commit history for recent changes
3. Create new issue with `pattern-adherence` label
