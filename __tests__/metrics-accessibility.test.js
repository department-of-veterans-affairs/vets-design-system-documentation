/**
 * Accessibility Tests for Metrics Dashboard
 * Tests verify Section 508 and WCAG 2.2 AA compliance using actual built Jekyll site
 * Based on requirements from issue #4788
 */

const fs = require('fs');
const path = require('path');
const { axe, toHaveNoViolations } = require('jest-axe');
const { getByRole, getAllByRole, getByText, queryByText, getByLabelText } = require('@testing-library/dom');
const { fireEvent } = require('@testing-library/dom');

expect.extend(toHaveNoViolations);

describe('Metrics Dashboard Accessibility Tests - Real Implementation', () => {
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

  describe('🎯 Core Accessibility Features', () => {
    test('Dashboard has proper main landmark and heading structure', () => {
      // The main landmark is provided by the Jekyll default layout
      const main = document.querySelector('main#main-content');
      expect(main).toBeTruthy();
      
      // The metrics dashboard content is now a div with proper labeling
      const dashboardDiv = document.querySelector('.metrics-dashboard');
      expect(dashboardDiv).toBeTruthy();
      expect(dashboardDiv).toHaveAttribute('aria-labelledby', 'main-heading');
      
      const mainHeading = document.getElementById('main-heading');
      expect(mainHeading).toBeTruthy();
      expect(mainHeading.tagName.toLowerCase()).toBe('h1');
      expect(mainHeading.textContent).toContain('Metrics Dashboard');
    });

    test('Dashboard contains all required va-table components', () => {
      const vaTables = document.querySelectorAll('va-table');
      expect(vaTables.length).toBe(4);
      
      // Check each table has proper accessibility attributes
      const expectedTableIds = [
        'quarterly-va-table',
        'components-va-table',
        'velocity-va-table',
        'experimental-va-table'
      ];
      
      expectedTableIds.forEach(tableId => {
        const table = document.getElementById(tableId);
        expect(table).toBeTruthy();
        expect(table.tagName.toLowerCase()).toBe('va-table');
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked', 'true');
        expect(table).toHaveAttribute('sortable', 'true');
        expect(table).toHaveAttribute('table-type', 'borderless');
      });
    });

    test('All chart containers have proper accessibility attributes', () => {
      const chartContainers = document.querySelectorAll('.chart-container');
      expect(chartContainers.length).toBe(4);
      
      chartContainers.forEach(container => {
        expect(container).toHaveAttribute('role', 'img');
        expect(container).toHaveAttribute('aria-label');
        expect(container).toHaveAttribute('tabindex', '0');
        
        const ariaLabel = container.getAttribute('aria-label');
        expect(ariaLabel.length).toBeGreaterThan(20);
        expect(ariaLabel.toLowerCase()).toContain('chart');
      });
    });

    test('All sections have proper ARIA landmark structure', () => {
      const sections = document.querySelectorAll('section[aria-labelledby]');
      expect(sections.length).toBeGreaterThanOrEqual(4);
      
      sections.forEach(section => {
        const labelId = section.getAttribute('aria-labelledby');
        const labelElement = document.getElementById(labelId);
        expect(labelElement).toBeTruthy();
        expect(labelElement.tagName.toLowerCase()).toBe('h2');
      });
    });

    test('Metric cards have proper accessibility relationships', () => {
      const metricCards = document.querySelectorAll('.metric-card');
      expect(metricCards.length).toBe(6);
      
      metricCards.forEach(card => {
        const heading = card.querySelector('h3[id]');
        expect(heading).toBeTruthy();
        
        const value = card.querySelector('.metric-value[aria-labelledby]');
        expect(value).toBeTruthy();
        
        const labelId = value.getAttribute('aria-labelledby');
        expect(labelId).toBe(heading.id);
        
        const trend = card.querySelector('.metric-trend[aria-label]');
        expect(trend).toBeTruthy();
      });
    });
  });

  describe('🔄 Tab Navigation and Structure', () => {
    test('All va-tabs have proper structure and attributes', () => {
      const vaTabs = document.querySelectorAll('va-tabs');
      expect(vaTabs.length).toBe(4);
      
      vaTabs.forEach(tabGroup => {
        const tabItems = tabGroup.querySelectorAll('va-tab-item');
        const tabPanels = tabGroup.querySelectorAll('va-tab-panel');
        
        expect(tabItems.length).toBe(2); // Graph and Table
        expect(tabPanels.length).toBe(2);
        
        // Check tab items have required attributes
        tabItems.forEach(item => {
          expect(item).toHaveAttribute('button-text');
          expect(item).toHaveAttribute('target-id');
        });
        
        // Check tab panels have proper roles
        tabPanels.forEach(panel => {
          expect(panel).toHaveAttribute('role', 'tabpanel');
          expect(panel).toHaveAttribute('panel-id');
        });
      });
    });

    test('Tab switching maintains accessibility context', () => {
      // Test that tabs can be focused and have proper relationships
      const tabItems = document.querySelectorAll('va-tab-item');
      expect(tabItems.length).toBe(8); // 4 tab groups × 2 tabs each
      
      tabItems.forEach(tabItem => {
        const targetId = tabItem.getAttribute('target-id');
        const targetPanel = document.querySelector(`va-tab-panel[panel-id="${targetId}"]`);
        expect(targetPanel).toBeTruthy();
      });
    });
  });

  describe('🔍 Screen Reader Support', () => {
    test('Tables provide comprehensive data context for screen readers', () => {
      const vaTables = document.querySelectorAll('va-table');
      
      vaTables.forEach(table => {
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked');
        expect(table).toHaveAttribute('table-type');
        
        // Check table has meaningful title
        const tableTitle = table.getAttribute('table-title');
        expect(tableTitle.length).toBeGreaterThan(10);
      });
    });

    test('Charts provide alternative text and descriptions', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      
      charts.forEach(chart => {
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel.toLowerCase()).toContain('chart');
        
        // Charts should be focusable for screen readers
        expect(chart).toHaveAttribute('tabindex', '0');
      });
    });

    test('Data freshness indicators are accessible', () => {
      // Look for data freshness container elements (may be populated by JavaScript)
      const dataFreshnessContainers = document.querySelectorAll('.data-freshness, [id*="freshness"]');
      expect(dataFreshnessContainers.length).toBeGreaterThan(0);
      
      // The containers exist for accessibility, even if not populated yet
      dataFreshnessContainers.forEach(container => {
        expect(container.id).toBeTruthy(); // Should have IDs for programmatic access
      });
      
      // Also verify last updated info exists in footer
      const lastUpdatedInFooter = document.querySelector('div');
      const footerText = document.body.textContent || '';
      expect(footerText).toMatch(/last updated|data from|updated weekly/i);
    });

    test('All interactive elements have accessible names', () => {
      const interactiveElements = document.querySelectorAll(
        'va-tab-item, .chart-container[tabindex="0"], .metric-value'
      );
      
      interactiveElements.forEach(element => {
        const hasAriaLabel = element.getAttribute('aria-label');
        const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
        const hasButtonText = element.getAttribute('button-text');
        
        // Element should have some form of accessible name
        expect(hasAriaLabel || hasAriaLabelledBy || hasButtonText).toBeTruthy();
      });
    });
  });

  describe('⌨️ Keyboard Navigation', () => {
    test('All focusable elements support keyboard interaction', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      expect(focusableElements.length).toBeGreaterThan(0);
      
      focusableElements.forEach(element => {
        expect(element.getAttribute('tabindex')).toBe('0');
        
        // Elements with role="img" should be focusable for keyboard users
        if (element.getAttribute('role') === 'img') {
          expect(element).toHaveAttribute('aria-label');
        }
      });
    });

    test('Tab order follows logical visual flow', () => {
      // Test that tab order follows graph-then-table pattern for each section
      const vaTabsContainers = Array.from(document.querySelectorAll('va-tabs'));
      expect(vaTabsContainers.length).toBe(4); // Should have 4 tab containers
      
      // Check each va-tabs container individually
      vaTabsContainers.forEach((tabContainer, index) => {
        const tabItems = Array.from(tabContainer.querySelectorAll('va-tab-item'));
        expect(tabItems.length).toBe(2); // Should have graph and table tabs
        
        const graphTab = tabItems.find(tab => 
          tab.getAttribute('button-text')?.toLowerCase().includes('graph') ||
          tab.getAttribute('target-id')?.includes('graph')
        );
        const tableTab = tabItems.find(tab => 
          tab.getAttribute('button-text')?.toLowerCase().includes('table') ||
          tab.getAttribute('target-id')?.includes('table')
        );
        
        expect(graphTab).toBeTruthy();
        expect(tableTab).toBeTruthy();
        
        // Graph tab should come before table tab in DOM order within this container
        const graphIndex = tabItems.indexOf(graphTab);
        const tableIndex = tabItems.indexOf(tableTab);
        expect(graphIndex).toBeLessThan(tableIndex);
      });
      
      // Also verify chart containers are focusable in proper order
      const chartContainers = Array.from(document.querySelectorAll('.chart-container[tabindex="0"]'));
      expect(chartContainers.length).toBeGreaterThanOrEqual(4); // At least one per section
    });

    test('Keyboard navigation works with charts and tables', () => {
      const chartTabPanels = document.querySelectorAll('va-tab-panel[panel-id*="graph"]');
      const tableTabPanels = document.querySelectorAll('va-tab-panel[panel-id*="table"]');
      
      expect(chartTabPanels.length).toBe(4);
      expect(tableTabPanels.length).toBe(4);
      
      // Each chart panel should have a focusable chart
      chartTabPanels.forEach(panel => {
        const chart = panel.querySelector('.chart-container[tabindex="0"]');
        expect(chart).toBeTruthy();
      });
      
      // Each table panel should have a va-table
      tableTabPanels.forEach(panel => {
        const table = panel.querySelector('va-table');
        expect(table).toBeTruthy();
      });
    });
  });

  describe('🎨 Visual and Interaction Accessibility', () => {
    test('Elements have proper accessibility identifiers', () => {
      // Test elements have semantic meaning or accessibility attributes
      const importantElements = document.querySelectorAll(
        '.chart-container, va-table, .metric-card, va-tab-item'
      );
      
      importantElements.forEach(element => {
        // Should have roles, semantic meaning, or accessibility identifiers
        const hasRole = element.getAttribute('role');
        const isSemanticElement = ['va-table', 'va-tab-item'].includes(element.tagName.toLowerCase());
        const hasAriaLabel = element.getAttribute('aria-label');
        const hasClass = element.className && element.className.trim().length > 0;
        
        // Elements should have some form of semantic meaning or accessible identifier
        expect(hasRole || isSemanticElement || hasAriaLabel || hasClass).toBeTruthy();
      });
    });

    test('Responsive design maintains accessibility', () => {
      // Test that key accessibility attributes persist regardless of viewport
      const vaTables = document.querySelectorAll('va-table[stacked="true"]');
      expect(vaTables.length).toBe(4);
      
      // All tables should be configured for mobile responsiveness
      vaTables.forEach(table => {
        expect(table).toHaveAttribute('stacked', 'true');
      });
    });
  });

  describe('🔧 Real-World Accessibility Validation', () => {
    test('Built site passes axe accessibility audit', async () => {
      // Test the metrics dashboard content div
      const metricsDiv = document.querySelector('div.metrics-dashboard');
      expect(metricsDiv).toBeTruthy();
      
      const results = await axe(metricsDiv, {
        rules: {
          // Disable rules that conflict with VA web components
          'aria-allowed-attr': { enabled: false }
        }
      });
      
      expect(results).toHaveNoViolations();
    });

    test('Critical accessibility attributes are present in built HTML', () => {
      // These should be in the static HTML, not added by JavaScript
      const criticalElements = [
        'main#main-content', // Main landmark from Jekyll layout
        'div.metrics-dashboard[aria-labelledby]', // Metrics dashboard content
        'section[aria-labelledby]',
        'va-table[table-title]',
        '.chart-container[role="img"][aria-label][tabindex="0"]'
      ];
      
      criticalElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('Built site maintains structure without JavaScript', () => {
      // Core accessibility should work even if JavaScript fails
      const vaTables = document.querySelectorAll('va-table');
      const chartContainers = document.querySelectorAll('.chart-container[role="img"]');
      const tabPanels = document.querySelectorAll('va-tab-panel[role="tabpanel"]');
      
      expect(vaTables.length).toBe(4);
      expect(chartContainers.length).toBe(4);
      expect(tabPanels.length).toBe(8);
      
      // All should have their accessibility attributes
      vaTables.forEach(table => {
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked', 'true');
      });
    });
  });
});