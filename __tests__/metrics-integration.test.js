/**
 * Integration Tests for Metrics Dashboard - Real Implementation
 * Tests the actual built Jekyll site to ensure functionality works correctly
 * Based on requirements from issue #4788
 */

const fs = require('fs');
const path = require('path');
const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

describe('Metrics Dashboard - Real Implementation Integration Tests', () => {
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

  describe('🏗️ Built Site Structure Validation', () => {
    test('Built site contains all expected va-table components', () => {
      const vaTables = document.querySelectorAll('va-table');
      expect(vaTables.length).toBe(4);
      
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
      });
    });

    test('Built site contains proper main landmark and section structure', () => {
      // Main landmark is provided by Jekyll default layout
      const main = document.querySelector('main#main-content');
      expect(main).toBeTruthy();
      
      // Metrics dashboard content is now a div
      const metricsDiv = document.querySelector('div.metrics-dashboard');
      expect(metricsDiv).toBeTruthy();
      expect(metricsDiv).toHaveAttribute('aria-labelledby', 'main-heading');
      
      const mainHeading = document.getElementById('main-heading');
      expect(mainHeading).toBeTruthy();
      expect(mainHeading.tagName.toLowerCase()).toBe('h1');
      
      const sections = document.querySelectorAll('section[aria-labelledby]');
      expect(sections.length).toBeGreaterThanOrEqual(4);
      
      sections.forEach(section => {
        const labelId = section.getAttribute('aria-labelledby');
        const labelElement = document.getElementById(labelId);
        expect(labelElement).toBeTruthy();
        expect(labelElement.tagName.toLowerCase()).toBe('h2');
      });
    });

    test('Built site contains all chart containers with proper accessibility', () => {
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

    test('Built site contains all va-tabs with proper structure', () => {
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

    test('Built site metric cards have proper accessibility structure', () => {
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

  describe('🔧 JavaScript Function Integration', () => {
    test('Jekyll pre-populated quarterly table contains valid data structure', () => {
      const vaTable = document.getElementById('quarterly-va-table');
      expect(vaTable).toBeTruthy();
      expect(vaTable).toHaveAttribute('table-title');
      expect(vaTable).toHaveAttribute('stacked', 'true');
      expect(vaTable).toHaveAttribute('sortable', 'true');
      
      const tableTitle = vaTable.getAttribute('table-title');
      expect(tableTitle).toContain('Issue Activity');
      expect(tableTitle).toContain('Quarter');
      
      // Check for headers
      const headerRow = vaTable.querySelector('va-table-row[slot="headers"]');
      expect(headerRow).toBeTruthy();
      
      const headerCells = headerRow.querySelectorAll('span');
      expect(headerCells.length).toBe(3);
      expect(headerCells[0].textContent).toBe('Quarter');
      expect(headerCells[1].textContent).toBe('Issues Opened');
      expect(headerCells[2].textContent).toBe('Issues Closed');
      
      // Check for data rows (should be populated by Jekyll)
      const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
      expect(dataRows.length).toBeGreaterThan(0);
      
      // Validate first data row structure
      if (dataRows.length > 0) {
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells.length).toBe(3);
        
        // Check quarter format (should be like "2025 Q3")
        const quarterText = firstRowCells[0].textContent.trim();
        expect(quarterText).toMatch(/^\d{4} Q[1-4]$/);
        
        // Check numeric values
        const openedValue = firstRowCells[1].textContent.trim();
        const closedValue = firstRowCells[2].textContent.trim();
        expect(openedValue).toMatch(/^\d+$/);
        expect(closedValue).toMatch(/^\d+$/);
      }
    });

    test('Jekyll pre-populated components table contains valid data structure', () => {
      const vaTable = document.getElementById('components-va-table');
      expect(vaTable).toBeTruthy();
      expect(vaTable).toHaveAttribute('table-title');
      expect(vaTable).toHaveAttribute('stacked', 'true');
      expect(vaTable).toHaveAttribute('sortable', 'true');
      
      const tableTitle = vaTable.getAttribute('table-title');
      expect(tableTitle).toContain('Components');
      expect(tableTitle).toContain('Usage');
      
      // Check for headers
      const headerRow = vaTable.querySelector('va-table-row[slot="headers"]');
      expect(headerRow).toBeTruthy();
      
      const headerCells = headerRow.querySelectorAll('span');
      expect(headerCells.length).toBe(2);
      expect(headerCells[0].textContent).toBe('Component');
      expect(headerCells[1].textContent).toBe('Usage Count');
      
      // Check for data rows (should be populated by Jekyll)
      const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
      expect(dataRows.length).toBeGreaterThan(0);
      
      // Validate first data row structure
      if (dataRows.length > 0) {
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells.length).toBe(2);
        
        // Check component name format 
        const componentName = firstRowCells[0].textContent.trim();
        expect(componentName.length).toBeGreaterThan(0);
        
        // Check usage count (should be numeric, possibly with commas)
        const usageCount = firstRowCells[1].textContent.trim();
        expect(usageCount).toMatch(/^[\d,]+$/);
      }
    });

    test('Jekyll pre-populated velocity table contains valid data structure', () => {
      const vaTable = document.getElementById('velocity-va-table');
      expect(vaTable).toBeTruthy();
      expect(vaTable).toHaveAttribute('table-title');
      expect(vaTable).toHaveAttribute('stacked', 'true');
      expect(vaTable).toHaveAttribute('sortable', 'true');
      
      const tableTitle = vaTable.getAttribute('table-title');
      expect(tableTitle).toContain('Monthly');
      expect(tableTitle).toContain('Issues');
      
      // Check for headers
      const headerRow = vaTable.querySelector('va-table-row[slot="headers"]');
      expect(headerRow).toBeTruthy();
      
      const headerCells = headerRow.querySelectorAll('span');
      expect(headerCells.length).toBe(2);
      expect(headerCells[0].textContent).toBe('Period');
      expect(headerCells[1].textContent).toBe('Issues Opened');
      
      // Check for data rows (should be populated by Jekyll)
      const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
      expect(dataRows.length).toBeGreaterThan(0);
      
      // Validate first data row structure
      if (dataRows.length > 0) {
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells.length).toBe(2);
        
        // Check period format (should be like "September 2025")
        const periodText = firstRowCells[0].textContent.trim();
        expect(periodText).toMatch(/^[A-Z][a-z]+ \d{4}$/);
        
        // Check numeric value
        const openedValue = firstRowCells[1].textContent.trim();
        expect(openedValue).toMatch(/^\d+$/);
      }
    });

    test('Jekyll pre-populated experimental table contains valid data structure', () => {
      const vaTable = document.getElementById('experimental-va-table');
      expect(vaTable).toBeTruthy();
      expect(vaTable).toHaveAttribute('table-title');
      expect(vaTable).toHaveAttribute('stacked', 'true');
      expect(vaTable).toHaveAttribute('sortable', 'true');
      
      const tableTitle = vaTable.getAttribute('table-title');
      expect(tableTitle).toContain('Experimental');
      expect(tableTitle).toContain('Design');
      
      // Check for headers
      const headerRow = vaTable.querySelector('va-table-row[slot="headers"]');
      expect(headerRow).toBeTruthy();
      
      const headerCells = headerRow.querySelectorAll('span');
      expect(headerCells.length).toBe(4);
      expect(headerCells[0].textContent).toBe('Quarter');
      expect(headerCells[1].textContent).toBe('Issues Opened');
      expect(headerCells[2].textContent).toBe('Issues Closed');
      expect(headerCells[3].textContent).toBe('Issues Implemented');
      
      // Check for data rows (should be populated by Jekyll)
      const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
      expect(dataRows.length).toBeGreaterThan(0);
      
      // Validate first data row structure
      if (dataRows.length > 0) {
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells.length).toBe(4);
        
        // Check quarter format (should be like "2025 Q3")
        const quarterText = firstRowCells[0].textContent.trim();
        expect(quarterText).toMatch(/^\d{4} Q[1-4]$/);
        
        // Check numeric values
        const openedValue = firstRowCells[1].textContent.trim();
        const closedValue = firstRowCells[2].textContent.trim();
        const implementedValue = firstRowCells[3].textContent.trim();
        expect(openedValue).toMatch(/^\d+$/);
        expect(closedValue).toMatch(/^\d+$/);
        expect(implementedValue).toMatch(/^\d+$/);
      }
    });
  });

  describe('🎯 Real-World Accessibility Validation', () => {
    test('Built site passes axe accessibility audit', async () => {
      // Test the metrics dashboard div content
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

    test('Built site maintains accessibility during error states', () => {
      // Test that core accessibility works without JavaScript functions
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
      
      // Check that tables have proper accessibility attributes
      const vaTables = document.querySelectorAll('va-table');
      vaTables.forEach(table => {
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked', 'true');
        
        // Headers should exist
        const headers = table.querySelectorAll('va-table-row[slot="headers"]');
        expect(headers.length).toBe(1);
      });
    });

    test('Built site keyboard navigation works correctly', () => {
      // Test that all interactive elements are keyboard accessible
      const focusableElements = document.querySelectorAll(
        'va-tab-item, .chart-container[tabindex="0"], va-table[sortable="true"]'
      );
      
      expect(focusableElements.length).toBeGreaterThan(0);
      
      focusableElements.forEach(element => {
        // For web components and interactive elements, check they're not explicitly disabled
        // and have proper focus behavior
        const hasTabindex = element.hasAttribute('tabindex');
        const tabIndex = element.tabIndex;
        
        // Element should either have no tabindex (default behavior) or have a valid one
        if (hasTabindex) {
          expect(tabIndex).toBeGreaterThanOrEqual(0);
        }
        
        // Check that element is not disabled
        expect(element.disabled).toBeFalsy();
        expect(element.hasAttribute('disabled')).toBeFalsy();
      });
    });

    test('Built site screen reader compatibility is maintained', () => {
      // Test that screen reader specific attributes are present
      const chartContainers = document.querySelectorAll('.chart-container');
      chartContainers.forEach(chart => {
        expect(chart).toHaveAttribute('role', 'img');
        expect(chart).toHaveAttribute('aria-label');
        
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel.length).toBeGreaterThan(25); // Descriptive labels
      });
      
      // Test metric cards accessibility
      const metricCards = document.querySelectorAll('.metric-card');
      metricCards.forEach(card => {
        const value = card.querySelector('.metric-value[aria-labelledby]');
        expect(value).toBeTruthy();
        
        const labelId = value.getAttribute('aria-labelledby');
        const label = document.getElementById(labelId);
        expect(label).toBeTruthy();
      });
    });
  });

  describe('⚡ Performance and Loading', () => {
    test('Built site critical accessibility attributes are present immediately', () => {
      // Test that accessibility attributes are in the HTML, not added by JavaScript
      const criticalElements = [
        'main#main-content', // Main landmark from Jekyll layout
        'div.metrics-dashboard[aria-labelledby]', // Metrics dashboard div
        '.chart-container[role="img"]',
        'va-table[table-title]',
        'va-tab-panel[role="tabpanel"]'
      ];
      
      criticalElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('Built site maintains structure without JavaScript execution', () => {
      // Test that tables are populated by Jekyll, not JavaScript
      const vaTables = document.querySelectorAll('va-table');
      
      vaTables.forEach(table => {
        const dataRows = table.querySelectorAll('va-table-row:not([slot="headers"])');
        expect(dataRows.length).toBeGreaterThan(0); // Should have data without JS
        
        // Check first data row has content
        if (dataRows.length > 0) {
          const firstRowCells = dataRows[0].querySelectorAll('span');
          expect(firstRowCells.length).toBeGreaterThan(0);
          
          // At least one cell should have content
          const hasContent = Array.from(firstRowCells).some(cell => 
            cell.textContent.trim().length > 0
          );
          expect(hasContent).toBeTruthy();
        }
      });
    });
  });
});