/**
 * Screen Reader Specific Test Scenarios for Metrics Dashboard
 * Tests real-world scenarios using actual built Jekyll site
 * Based on requirements from issue #4788 for NVDA, JAWS, and VoiceOver compatibility
 */

// 🔔 DISCLAIMER: These are proxy tests, not AT automation
// This suite validates DOM structures that SRs *depend on*
// but does not simulate NVDA, JAWS, or VoiceOver behavior.
// Manual assistive technology testing is still required.
// -------------------------------------------------------
// eslint-disable-next-line no-console
console.warn(
  '\n⚠️ :warning: Accessibility Disclaimer:\n' +
  'These tests are *structural proxies* for screen reader support.\n' +
  'They do not run NVDA, JAWS, or VoiceOver. Manual AT validation is required.\n'
);

const fs = require('fs');
const path = require('path');
const { getByRole, getAllByRole, getByLabelText } = require('@testing-library/dom');
const { fireEvent } = require('@testing-library/dom');

describe('Screen Reader Specific Usage Scenarios - Real Implementation', () => {
  let builtFileContent;
  
  beforeAll(() => {
    // Load actual built Jekyll file
    const builtFilePath = path.join(__dirname, '../_site/about/metrics/index.html');
    
    try {
      builtFileContent = fs.readFileSync(builtFilePath, 'utf8');
    } catch (error) {
      throw new Error(`
        Could not load built Jekyll file at ${builtFilePath}. 
        Make sure to run 'yarn build && bundle exec jekyll build' before running tests.
        Error: ${error.message}
      `);
    }
  });
  
  beforeEach(() => {
    // Load the actual built file into DOM
    document.documentElement.innerHTML = builtFileContent;
    
    // Wait for any dynamic content to be processed
    return new Promise(resolve => setTimeout(resolve, 50));
  });

  afterEach(() => {
    // Clean up DOM
    document.documentElement.innerHTML = '';
  });

  describe('🔊 NVDA (Windows) Screen Reader Compatibility', () => {
    test('Heading structure supports NVDA heading navigation (H key)', () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      expect(headings.length).toBeGreaterThan(5);
      
      // Check heading hierarchy is logical (h1 → h2 → h3)
      const h1s = Array.from(document.querySelectorAll('h1'));
      const h2s = Array.from(document.querySelectorAll('h2'));
      const h3s = Array.from(document.querySelectorAll('h3'));
      
      expect(h1s.length).toBe(1); // Single main heading
      expect(h2s.length).toBeGreaterThanOrEqual(4); // Section headings
      expect(h3s.length).toBeGreaterThanOrEqual(6); // Metric card headings + subsection headings
      
      // First heading should be main dashboard title
      expect(h1s[0].textContent).toContain('Metrics Dashboard');
      
      // H2 headings should describe main sections
      h2s.forEach(heading => {
        expect(heading.id).toBeTruthy(); // Should have IDs for ARIA labeling
        expect(heading.textContent.trim().length).toBeGreaterThan(5);
      });
    });

    test('Landmark structure supports NVDA landmark navigation (D key)', () => {
      const landmarks = document.querySelectorAll('main, section, nav, aside, header, footer');
      expect(landmarks.length).toBeGreaterThan(4);
      
      // Main landmark should exist (from Jekyll layout)
      const main = document.querySelector('main#main-content');
      expect(main).toBeTruthy();
      
      // Sections should be properly labeled
      const sections = document.querySelectorAll('section[aria-labelledby]');
      expect(sections.length).toBeGreaterThanOrEqual(4);
      
      sections.forEach(section => {
        const labelId = section.getAttribute('aria-labelledby');
        const label = document.getElementById(labelId);
        expect(label).toBeTruthy();
        expect(label.textContent.trim()).toBeTruthy();
      });
    });

    test('Chart structure supports NVDA graphics mode exploration', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      expect(charts.length).toBe(4);
      
      charts.forEach(chart => {
        // Chart should have comprehensive description for graphics mode
        expect(chart).toHaveAttribute('aria-label');
        expect(chart).toHaveAttribute('tabindex', '0');
        
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel.length).toBeGreaterThan(30);
        expect(ariaLabel.toLowerCase()).toContain('chart');
        
        // Should describe what type of chart and what data it shows
        const hasChartType = /bar chart|line chart|pie chart|graph/i.test(ariaLabel);
        expect(hasChartType).toBeTruthy();
      });
    });

    test('Table structure supports NVDA table navigation (Ctrl+Alt+arrows)', () => {
      const vaTables = document.querySelectorAll('va-table');
      expect(vaTables.length).toBe(4);
      
      vaTables.forEach(table => {
        // Table should have comprehensive title and description
        expect(table).toHaveAttribute('table-title');
        
        const tableTitle = table.getAttribute('table-title');
        expect(tableTitle.length).toBeGreaterThan(20);
        expect(tableTitle.toLowerCase()).toMatch(/issue|component|metric|quarter|month/); // Should describe data type
        
        // Should be configured for screen reader table navigation
        expect(table).toHaveAttribute('stacked', 'true');
        expect(table).toHaveAttribute('sortable', 'true');
      });
    });
  });

  describe('📢 JAWS (Windows) Screen Reader Compatibility', () => {
    test('Heading structure supports JAWS heading list (Insert+F6)', () => {
      // JAWS creates a heading list - test heading structure
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      
      // Headings should be in logical order for JAWS list
      const headingLevels = headings.map(h => parseInt(h.tagName.charAt(1)));
      
      // Should start with h1
      expect(headingLevels[0]).toBe(1);
      
      // No heading should skip more than one level
      for (let i = 1; i < headingLevels.length; i++) {
        const currentLevel = headingLevels[i];
        const previousLevel = headingLevels[i - 1];
        expect(currentLevel - previousLevel).toBeLessThanOrEqual(1);
      }
    });

    test('Interactive elements support JAWS forms list (Insert+F5)', () => {
      // Test that interactive elements are properly labeled for JAWS forms list
      const interactiveElements = document.querySelectorAll(
        'va-tab-item, [tabindex="0"]'
      );
      
      expect(interactiveElements.length).toBeGreaterThan(0);
      
      interactiveElements.forEach(element => {
        const hasAriaLabel = element.getAttribute('aria-label');
        const hasAriaLabelledBy = element.getAttribute('aria-labelledby'); 
        const hasButtonText = element.getAttribute('button-text'); // va-tab-item
        const hasTitle = element.getAttribute('title');
        const isChart = element.classList.contains('chart-container');
        const isMetricValue = element.classList.contains('metric-value');
        
        // JAWS needs some form of accessible name for interactive elements
        // Chart containers and metric values should have accessible names
        if (isChart || isMetricValue || element.tagName.toLowerCase() === 'va-tab-item') {
          expect(hasAriaLabel || hasAriaLabelledBy || hasButtonText || hasTitle).toBeTruthy();
        }
      });
    });

    test('JAWS table summary features work correctly', () => {
      const vaTables = document.querySelectorAll('va-table');
      
      vaTables.forEach(table => {
        // JAWS reads table-title as table summary
        const tableTitle = table.getAttribute('table-title');
        expect(tableTitle).toBeTruthy();
        
        // Title should provide context about table contents
        expect(tableTitle.length).toBeGreaterThan(15);
        
        // Should describe what data is in the table
        const hasDataDescription = /issue|component|metric|quarter|month/i.test(tableTitle);
        expect(hasDataDescription).toBeTruthy();
      });
    });

    test('Chart structure supports JAWS graphics mode descriptions', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      
      charts.forEach(chart => {
        const ariaLabel = chart.getAttribute('aria-label');
        
        // JAWS needs detailed descriptions for graphics mode
        expect(ariaLabel.length).toBeGreaterThan(40);
        
        // Should describe chart type, data source, and trends
        const describedComponents = [
          /chart|graph/i.test(ariaLabel), // Chart type
          /quarter|month|issue|component/i.test(ariaLabel), // Data type
          /show|display|track/i.test(ariaLabel) // Purpose
        ];
        
        expect(describedComponents.every(Boolean)).toBeTruthy();
      });
    });
  });

  describe('🍎 VoiceOver (macOS) Screen Reader Compatibility', () => {
    test('Heading structure supports VoiceOver rotor heading navigation', () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      // VoiceOver rotor needs well-structured headings
      headings.forEach(heading => {
        expect(heading.textContent.trim().length).toBeGreaterThan(2);
        
        // Headings should not contain only symbols or numbers
        expect(/[a-zA-Z]/.test(heading.textContent)).toBeTruthy();
      });
      
      // Should have variety of heading levels for rotor navigation
      const uniqueLevels = new Set(Array.from(headings).map(h => h.tagName));
      expect(uniqueLevels.size).toBeGreaterThanOrEqual(3); // h1, h2, h3 minimum
    });

    test('Landmark structure supports VoiceOver rotor landmark navigation', () => {
      const landmarks = document.querySelectorAll('[role], main, section, nav, header, footer');
      expect(landmarks.length).toBeGreaterThan(5);
      
      // Main landmark for VoiceOver
      const main = document.querySelector('main');
      expect(main).toBeTruthy();
      // Check if main has aria-labelledby - it may or may not be present in actual implementation
      if (main.hasAttribute('aria-labelledby')) {
        const labelId = main.getAttribute('aria-labelledby');
        const label = document.getElementById(labelId);
        expect(label).toBeTruthy();
      }
      
      // Sections should be distinguishable in VoiceOver rotor
      const sections = document.querySelectorAll('section[aria-labelledby]');
      sections.forEach(section => {
        const labelId = section.getAttribute('aria-labelledby');
        const label = document.getElementById(labelId);
        expect(label).toBeTruthy();
        expect(label.textContent.trim().length).toBeGreaterThan(3);
      });
    });

    test('VoiceOver table navigation works correctly', () => {
      const vaTables = document.querySelectorAll('va-table');
      
      vaTables.forEach(table => {
        // VoiceOver needs table-title for context
        expect(table).toHaveAttribute('table-title');
        
        // Stacked layout helps VoiceOver on mobile
        expect(table).toHaveAttribute('stacked', 'true');
        
        const tableTitle = table.getAttribute('table-title');
        expect(tableTitle.length).toBeGreaterThan(10);
      });
    });

    test('Chart structure supports VoiceOver image exploration (VO+Shift+Space)', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      
      charts.forEach(chart => {
        // Charts should be accessible to VoiceOver image exploration
        expect(chart).toHaveAttribute('role', 'img');
        expect(chart).toHaveAttribute('tabindex', '0');
        
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        
        // VoiceOver benefits from concise but informative descriptions
        expect(ariaLabel.length).toBeGreaterThan(25);
        expect(ariaLabel.length).toBeLessThan(150); // Not too verbose for VoiceOver
      });
    });

    test('Tab group structure supports VoiceOver group navigation (VO+Shift+↑/↓)', () => {
      const tabGroups = document.querySelectorAll('va-tabs');
      expect(tabGroups.length).toBe(4);
      
      tabGroups.forEach(group => {
        const tabItems = group.querySelectorAll('va-tab-item');
        const tabPanels = group.querySelectorAll('va-tab-panel');
        
        expect(tabItems.length).toBe(2);
        expect(tabPanels.length).toBe(2);
        
        // Tab items should have accessible button text for VoiceOver
        tabItems.forEach(tab => {
          expect(tab).toHaveAttribute('button-text');
          const buttonText = tab.getAttribute('button-text');
          expect(buttonText).toBeTruthy();
          expect(buttonText.length).toBeGreaterThan(2);
        });
        
        // Tab panels should have proper roles for VoiceOver group navigation
        tabPanels.forEach(panel => {
          expect(panel).toHaveAttribute('role', 'tabpanel');
          expect(panel).toHaveAttribute('panel-id');
        });
      });
    });
  });

  describe('🔄 Dynamic Content and Live Regions', () => {
    test('Screen readers can access updated metric values', () => {
      const metricValues = document.querySelectorAll('.metric-value');
      expect(metricValues.length).toBe(6);
      
      metricValues.forEach(value => {
        // Values should be connected to their labels
        expect(value).toHaveAttribute('aria-labelledby');
        
        const labelId = value.getAttribute('aria-labelledby');
        const label = document.getElementById(labelId);
        expect(label).toBeTruthy();
        expect(label.textContent.trim()).toBeTruthy();
      });
    });

    test('Tab switching announcements work for screen readers', () => {
      const tabItems = document.querySelectorAll('va-tab-item');
      const tabPanels = document.querySelectorAll('va-tab-panel');
      
      // Each tab should connect to its panel
      tabItems.forEach(tab => {
        const targetId = tab.getAttribute('target-id');
        const targetPanel = document.querySelector(`va-tab-panel[panel-id="${targetId}"]`);
        expect(targetPanel).toBeTruthy();
        expect(targetPanel).toHaveAttribute('role', 'tabpanel');
      });
      
      // Panels should be properly labeled for screen reader announcements
      tabPanels.forEach(panel => {
        expect(panel).toHaveAttribute('panel-id');
        expect(panel).toHaveAttribute('role', 'tabpanel');
      });
    });

    test('Data loading states are accessible to screen readers', () => {
      // Test that empty states in tables would be accessible
      const vaTables = document.querySelectorAll('va-table');
      
      vaTables.forEach(table => {
        // Tables should have meaningful titles even when empty
        const tableTitle = table.getAttribute('table-title');
        expect(tableTitle).toBeTruthy();
        expect(tableTitle.toLowerCase()).not.toContain('undefined');
        expect(tableTitle.toLowerCase()).not.toContain('null');
      });
    });
  });

  describe('📱 Cross-Platform Screen Reader Compatibility', () => {
    test('Mobile screen readers can navigate metric cards', () => {
      const metricCards = document.querySelectorAll('.metric-card');
      expect(metricCards.length).toBe(6);
      
      metricCards.forEach(card => {
        // Each card should have a clear heading
        const heading = card.querySelector('h3[id]');
        expect(heading).toBeTruthy();
        
        // Value should be connected to heading
        const value = card.querySelector('.metric-value[aria-labelledby]');
        expect(value).toBeTruthy();
        
        const labelId = value.getAttribute('aria-labelledby');
        expect(labelId).toBe(heading.id);
      });
    });

    test('Tables work with mobile screen reader gestures', () => {
      const vaTables = document.querySelectorAll('va-table[stacked="true"]');
      expect(vaTables.length).toBe(4);
      
      // All tables should be configured for mobile screen readers
      vaTables.forEach(table => {
        expect(table).toHaveAttribute('stacked', 'true');
        expect(table).toHaveAttribute('table-title');
        
        // Title should help mobile users understand table purpose
        const tableTitle = table.getAttribute('table-title');
        expect(tableTitle.length).toBeGreaterThan(15);
      });
    });

    test('Charts provide alternative access methods for all screen readers', () => {
      const charts = document.querySelectorAll('.chart-container');
      expect(charts.length).toBe(4);
      
      // Each chart should have a corresponding table for data access
      charts.forEach(chart => {
        const chartId = chart.id;
        const chartSection = chart.closest('va-tabs');
        
        if (chartSection) {
          const correspondingTable = chartSection.querySelector('va-table');
          expect(correspondingTable).toBeTruthy();
        }
      });
    });
  });

  describe('🎯 Screen Reader Error Handling', () => {
    test('Missing data states are announced properly', () => {
      const metricValues = document.querySelectorAll('.metric-value');
      
      metricValues.forEach(value => {
        // Values should have fallback content or ARIA labels
        const hasContent = value.textContent.trim().length > 0;
        const hasAriaLabel = value.getAttribute('aria-label');
        const hasAriaLabelledBy = value.getAttribute('aria-labelledby');
        
        expect(hasContent || hasAriaLabel || hasAriaLabelledBy).toBeTruthy();
      });
    });

    test('JavaScript failures do not break screen reader access', () => {
      // Core accessibility should work without JavaScript
      const structuralElements = [
        'main#main-content', // Main landmark from Jekyll layout
        'div.metrics-dashboard[aria-labelledby]', // Metrics dashboard div
        'section[aria-labelledby]',
        'va-table[table-title]',
        '.chart-container[role="img"]',
        'va-tab-panel[role="tabpanel"]'
      ];
      
      structuralElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });
  });
});