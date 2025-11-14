#!/usr/bin/env node

// Script to analyze GitHub issues by component
const fs = require('fs');
const { execSync } = require('child_process');

// Get component names from component-maturity.json
const path = require('path');
const componentMaturityPath = path.join(__dirname, '../src/_data/component-maturity.json');
const componentMaturity = JSON.parse(fs.readFileSync(componentMaturityPath, 'utf8'));
const componentNames = Object.keys(componentMaturity);

// Fetch issues data
const issuesJson = execSync('gh api repos/department-of-veterans-affairs/vets-design-system-documentation/issues --paginate --jq \'.[] | select(.state == "open") | {number: .number, title: .title, labels: [.labels[].name]}\'').toString();

// Parse the issues
const issues = issuesJson.trim().split('\n')
  .filter(line => line.trim())
  .map(line => JSON.parse(line));

console.log(`Total open issues: ${issues.length}`);
console.log(`Total components tracked: ${componentNames.length}`);

// Initialize component data
const componentData = {};
componentNames.forEach(component => {
  componentData[component] = {
    totalIssues: 0,
    bugIssues: 0,
    accessibilityIssues: 0,
    a11yDefects: {
      'a11y-defect-0': 0,
      'a11y-defect-1': 0,
      'a11y-defect-2': 0,
      'a11y-defect-3': 0,
      'a11y-defect-4': 0
    }
  };
});

// Analyze each issue
issues.forEach(issue => {
  const labels = issue.labels || [];
  
  // Check for component labels
  const componentLabels = labels.filter(label => componentNames.includes(label));
  
  componentLabels.forEach(componentLabel => {
    // Increment total issues for this component
    componentData[componentLabel].totalIssues++;
    
    // Check if it's a bug
    const isBug = labels.includes('bug') || labels.some(label => label.toLowerCase() === 'bug');
    if (isBug) {
      componentData[componentLabel].bugIssues++;
    }
    
    // Check for accessibility issues
    const isA11y = labels.includes('accessibility') || 
                   labels.some(label => label.startsWith('a11y-defect-'));
    
    if (isA11y) {
      componentData[componentLabel].accessibilityIssues++;
      
      // Count by severity level
      labels.forEach(label => {
        if (label.startsWith('a11y-defect-')) {
          componentData[componentLabel].a11yDefects[label]++;
        }
      });
    }
  });
});

// Sort components by total issues (descending)
const sortedComponents = Object.entries(componentData)
  .filter(([_, data]) => data.totalIssues > 0)
  .sort(([_, a], [__, b]) => b.totalIssues - a.totalIssues);

// Generate report
const reportDate = new Date().toISOString().split('T')[0];
const reportContent = [];

reportContent.push(`# GitHub Issues Report by Component`);
reportContent.push(`Generated on: ${reportDate}`);
reportContent.push(`Repository: [vets-design-system-documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues)`);
reportContent.push('');
reportContent.push('Sorted by total number of open issues (highest to lowest)');
reportContent.push('');
reportContent.push('| Component | Total Issues | Bug Issues | A11y Issues | A11y Defect 0 | A11y Defect 1 | A11y Defect 2 | A11y Defect 3 | A11y Defect 4 |');
reportContent.push('|-----------|--------------|------------|-------------|---------------|---------------|---------------|---------------|---------------|');

sortedComponents.forEach(([component, data]) => {
  reportContent.push(`| ${component} | ${data.totalIssues} | ${data.bugIssues} | ${data.accessibilityIssues} | ${data.a11yDefects['a11y-defect-0']} | ${data.a11yDefects['a11y-defect-1']} | ${data.a11yDefects['a11y-defect-2']} | ${data.a11yDefects['a11y-defect-3']} | ${data.a11yDefects['a11y-defect-4']} |`);
});

// Summary statistics
reportContent.push('');
reportContent.push('## Summary');
reportContent.push('');
const totalTrackedIssues = sortedComponents.reduce((sum, [_, data]) => sum + data.totalIssues, 0);
const totalBugIssues = sortedComponents.reduce((sum, [_, data]) => sum + data.bugIssues, 0);
const totalA11yIssues = sortedComponents.reduce((sum, [_, data]) => sum + data.accessibilityIssues, 0);

reportContent.push(`- **Total open issues**: ${issues.length}`);
reportContent.push(`- **Total issues with component labels**: ${totalTrackedIssues}`);
reportContent.push(`- **Total bug issues**: ${totalBugIssues}`);
reportContent.push(`- **Total accessibility issues**: ${totalA11yIssues}`);
reportContent.push(`- **Components with issues**: ${sortedComponents.length} out of ${componentNames.length} total components`);

// Show issues without component labels
const issuesWithoutComponentLabels = issues.filter(issue => {
  const labels = issue.labels || [];
  return !labels.some(label => componentNames.includes(label));
});

reportContent.push(`- **Issues without component labels**: ${issuesWithoutComponentLabels.length}`);

reportContent.push('');
reportContent.push('## Accessibility Issues by Severity');
reportContent.push('');
reportContent.push('**Quick Links to A11y Issues:**');
reportContent.push(`- [A11y Defect 0 (Critical)](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is%3Aissue+is%3Aopen+label%3Aa11y-defect-0)`);
reportContent.push(`- [A11y Defect 1 (Serious)](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is%3Aissue+is%3Aopen+label%3Aa11y-defect-1)`);
reportContent.push(`- [A11y Defect 2 (Moderate)](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues?q=is%3Aissue+is%3Aopen+label%3Aa11y-defect-2)`);
reportContent.push('');

// Create accessibility-focused table sorted by severity
const accessibilityComponents = sortedComponents
  .filter(([_, data]) => data.a11yDefects['a11y-defect-0'] > 0 || data.a11yDefects['a11y-defect-1'] > 0 || data.a11yDefects['a11y-defect-2'] > 0)
  .sort(([_, a], [__, b]) => {
    // Sort by defect-0 first, then defect-1, then defect-2
    if (b.a11yDefects['a11y-defect-0'] !== a.a11yDefects['a11y-defect-0']) {
      return b.a11yDefects['a11y-defect-0'] - a.a11yDefects['a11y-defect-0'];
    }
    if (b.a11yDefects['a11y-defect-1'] !== a.a11yDefects['a11y-defect-1']) {
      return b.a11yDefects['a11y-defect-1'] - a.a11yDefects['a11y-defect-1'];
    }
    return b.a11yDefects['a11y-defect-2'] - a.a11yDefects['a11y-defect-2'];
  });

if (accessibilityComponents.length > 0) {
  reportContent.push('### Components with Critical/Serious/Moderate A11y Issues');
  reportContent.push('');
  reportContent.push('| Component | Critical (0) | Serious (1) | Moderate (2) | Total A11y Issues |');
  reportContent.push('|-----------|--------------|-------------|--------------|-------------------|');
  
  accessibilityComponents.forEach(([component, data]) => {
    reportContent.push(`| ${component} | ${data.a11yDefects['a11y-defect-0']} | ${data.a11yDefects['a11y-defect-1']} | ${data.a11yDefects['a11y-defect-2']} | ${data.accessibilityIssues} |`);
  });
}

reportContent.push('');
reportContent.push('## Top 10 Components by Issue Count');
reportContent.push('');
sortedComponents.slice(0, 10).forEach(([component, data], index) => {
  reportContent.push(`${index + 1}. **${component}** - ${data.totalIssues} total (${data.bugIssues} bugs, ${data.accessibilityIssues} a11y)`);
});

reportContent.push('');
reportContent.push('---');
reportContent.push('');
reportContent.push('**Note**: Issues may be associated with multiple components if they have multiple component labels.');
reportContent.push('**A11y Defect Levels**: 0=Critical, 1=Serious, 2=Moderate, 3=Minor, 4=Enhancement');

// Write to file
const outputFile = path.join(__dirname, '../component-issues-report.md');
fs.writeFileSync(outputFile, reportContent.join('\n'));

// Also output to console
console.log(reportContent.join('\n'));
console.log(`\n✅ Report saved to: component-issues-report.md`);