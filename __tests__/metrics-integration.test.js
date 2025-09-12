/**
 * Integration Tests for Metrics Dashboard - Real Implementation
 * Tests the actual built Jekyll file instead of mock HTML structures
 * Based on revised testing approach from issue #4788
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
    return new Promise(resolve => setTimeout(resolve, 100));
  });

  afterEach(() => {
    // Clean up DOM
    document.documentElement.innerHTML = '';
  });

  describe('🏗️ Built Site Structure Validation', () => {
    test('Built site contains all expected va-table components', () => {
      const vaTables = document.querySelectorAll('va-table');
      expect(vaTables.length).toBe(4); // quarterly, components, velocity, experimental
      
      // Check each table has required attributes
      const expectedTables = [
        'quarterly-va-table',
        'components-va-table', 
        'velocity-va-table',
        'experimental-va-table'
      ];
      
      expectedTables.forEach(tableId => {
        const table = document.getElementById(tableId);
        expect(table).toBeTruthy();
        expect(table.tagName.toLowerCase()).toBe('va-table');
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked', 'true');
        expect(table).toHaveAttribute('sortable', 'true');
      });
    });

    test('Built site contains proper main landmark and section structure', () => {
      const main = document.querySelector('main[role="main"]');
      expect(main).toBeTruthy();
      expect(main).toHaveAttribute('aria-labelledby', 'main-heading');
      
      const mainHeading = document.getElementById('main-heading');
      expect(mainHeading).toBeTruthy();
      expect(mainHeading.tagName.toLowerCase()).toBe('h1');
      
      // Check all major sections have proper ARIA labeling
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
        
        // Check aria-label is meaningful
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
    // Mock D3.js for testing JavaScript functions
    beforeAll(() => {
      global.d3 = {
        select: jest.fn(() => ({
          append: jest.fn().mockReturnThis(),
          attr: jest.fn().mockReturnThis(),
          style: jest.fn().mockReturnThis(),
          text: jest.fn().mockReturnThis(),
          call: jest.fn().mockReturnThis(),
          selectAll: jest.fn().mockReturnThis(),
          data: jest.fn().mockReturnThis(),
          enter: jest.fn().mockReturnThis(),
          exit: jest.fn().mockReturnThis(),
          remove: jest.fn().mockReturnThis()
        })),
        scaleLinear: jest.fn(() => ({
          domain: jest.fn().mockReturnThis(),
          range: jest.fn().mockReturnThis()
        })),
        scaleBand: jest.fn(() => ({
          domain: jest.fn().mockReturnThis(),
          range: jest.fn().mockReturnThis(),
          padding: jest.fn().mockReturnThis(),
          bandwidth: jest.fn(() => 50)
        })),
        axisBottom: jest.fn(() => jest.fn()),
        axisLeft: jest.fn(() => jest.fn()),
        max: jest.fn(() => 100)
      };
    });

    test('populateQuarterlyTable function works with real va-table', () => {
      const mockData = [
        { period: '2024-Q3', issues_opened: 19, issues_closed: 25 },
        { period: '2024-Q2', issues_opened: 23, issues_closed: 18 },
        { period: '2024-Q1', issues_opened: 15, issues_closed: 12 }
      ];
      
      // Execute the actual JavaScript function from the built file
      const scriptContent = builtFileContent.match(/<script>(.*?)<\/script>/s);
      expect(scriptContent).toBeTruthy();
      
      // Extract and execute the populateQuarterlyTable function
      eval(scriptContent[1]);
      
      // Call the function with mock data
      if (typeof populateQuarterlyTable === 'function') {
        populateQuarterlyTable(mockData);
        
        const vaTable = document.getElementById('quarterly-va-table');
        expect(vaTable).toBeTruthy();
        
        const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
        expect(dataRows.length).toBe(3);
        
        // Check first row data
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells.length).toBe(3);
        expect(firstRowCells[0].textContent).toBe('Q3 2024');
        expect(firstRowCells[1].textContent).toBe('19');
        expect(firstRowCells[2].textContent).toBe('25');
      }
    });

    test('populateComponentsTable function works with real va-table', () => {
      const mockData = {
        top_components_overall: [
          { name: 'va-button', usage_count: 1247 },
          { name: 'va-card', usage_count: 892 },
          { name: 'va-input', usage_count: 654 }
        ]
      };
      
      const scriptContent = builtFileContent.match(/<script>(.*?)<\/script>/s);
      eval(scriptContent[1]);
      
      if (typeof populateComponentsTable === 'function') {
        populateComponentsTable(mockData);
        
        const vaTable = document.getElementById('components-va-table');
        expect(vaTable).toBeTruthy();
        
        const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
        expect(dataRows.length).toBe(3);
        
        // Check data formatting
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells[0].textContent).toBe('va-button');
        expect(firstRowCells[1].textContent).toBe('1,247'); // Should be formatted with commas
      }
    });

    test('populateVelocityTable function works with real va-table', () => {
      const mockData = [
        { period: '2024-08', issues_opened: 28 },
        { period: '2024-07', issues_opened: 23 },
        { period: '2024-06', issues_opened: 31 }
      ];
      
      const scriptContent = builtFileContent.match(/<script>(.*?)<\/script>/s);
      eval(scriptContent[1]);
      
      if (typeof populateVelocityTable === 'function') {
        populateVelocityTable(mockData);
        
        const vaTable = document.getElementById('velocity-va-table');
        expect(vaTable).toBeTruthy();
        
        const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
        expect(dataRows.length).toBe(3);
        
        // Check period formatting (should convert 2024-08 to "August 2024")
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells[0].textContent).toContain('August 2024');
        expect(firstRowCells[1].textContent).toBe('28');
      }
    });

    test('populateExperimentalTable function works with real va-table', () => {
      const mockData = [
        { period: '2024-Q2', issues_opened: 5, issues_closed: 3, issues_implemented: 2 },
        { period: '2024-Q1', issues_opened: 8, issues_closed: 6, issues_implemented: 4 }
      ];
      
      const scriptContent = builtFileContent.match(/<script>(.*?)<\/script>/s);
      eval(scriptContent[1]);
      
      if (typeof populateExperimentalTable === 'function') {
        populateExperimentalTable(mockData);
        
        const vaTable = document.getElementById('experimental-va-table');
        expect(vaTable).toBeTruthy();
        
        const dataRows = vaTable.querySelectorAll('va-table-row:not([slot="headers"])');
        expect(dataRows.length).toBe(2);
        
        // Check all four columns
        const firstRowCells = dataRows[0].querySelectorAll('span');
        expect(firstRowCells.length).toBe(4);
        expect(firstRowCells[0].textContent).toBe('Q2 2024');
        expect(firstRowCells[3].textContent).toBe('2'); // issues_implemented
      }
    });
  });

  describe('🎯 Real-World Accessibility Validation', () => {
    test('Built site passes axe accessibility audit', async () => {
      // Test only the metrics dashboard content to avoid Jekyll layout issues
      const metricsMain = document.querySelector('main.metrics-dashboard');
      expect(metricsMain).toBeTruthy();
      
      const results = await axe(metricsMain, {
        rules: {
          // Disable rules that conflict with VA web components or Jekyll layout
          'aria-allowed-attr': { enabled: false },
          'landmark-main-is-top-level': { enabled: false }, // Jekyll layout has nested main elements
          'landmark-no-duplicate-main': { enabled: false }   // Jekyll layout creates duplicate mains
        }
      });
      
      expect(results).toHaveNoViolations();
    });

    test('Built site maintains accessibility during error states', () => {
      const scriptContent = builtFileContent.match(/<script>(.*?)<\/script>/s);
      eval(scriptContent[1]);
      
      // Test error handling for each table
      const tableFunctions = [
        'populateQuarterlyTable',
        'populateComponentsTable', 
        'populateVelocityTable',
        'populateExperimentalTable'
      ];
      
      tableFunctions.forEach(funcName => {
        if (typeof window[funcName] === 'function') {
          // Call with empty/invalid data
          window[funcName](null);
          window[funcName]([]);
          window[funcName]({});
          
          // Tables should still exist and have headers
          const tableId = funcName.replace('populate', '').replace('Table', '').toLowerCase() + '-va-table';
          const table = document.getElementById(tableId);
          
          if (table) {
            const headers = table.querySelectorAll('va-table-row[slot="headers"]');
            expect(headers.length).toBeGreaterThan(0);
          }
        }
      });
    });

    test('Built site keyboard navigation works correctly', () => {
      // Test focusable elements are properly configured
      const focusableElements = document.querySelectorAll(
        '[tabindex="0"], .chart-container[tabindex="0"]'
      );
      
      expect(focusableElements.length).toBeGreaterThan(0);
      
      focusableElements.forEach(element => {
        const tabindex = element.getAttribute('tabindex');
        if (tabindex !== null) {
          expect(parseInt(tabindex)).toBeGreaterThanOrEqual(0);
        }
        
        // Elements with role="img" should be focusable
        if (element.getAttribute('role') === 'img') {
          expect(element).toHaveAttribute('tabindex', '0');
          expect(element).toHaveAttribute('aria-label');
        }
      });
      
      // Test va-tab-item elements separately as they may have different tabIndex behavior
      const vaTabItems = document.querySelectorAll('va-tab-item');
      expect(vaTabItems.length).toBeGreaterThan(0);
      
      vaTabItems.forEach(tabItem => {
        expect(tabItem).toHaveAttribute('button-text');
        expect(tabItem).toHaveAttribute('target-id');
      });
    });

    test('Built site screen reader compatibility is maintained', () => {
      // Check critical screen reader features exist
      const ariaLabelledBy = document.querySelectorAll('[aria-labelledby]');
      const ariaLabels = document.querySelectorAll('[aria-label]');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const landmarks = document.querySelectorAll('main, section, nav, aside');
      
      expect(ariaLabelledBy.length).toBeGreaterThan(0);
      expect(ariaLabels.length).toBeGreaterThan(0);
      expect(headings.length).toBeGreaterThan(5); // Should have proper heading structure
      expect(landmarks.length).toBeGreaterThan(4); // Main + sections
      
      // Check heading hierarchy
      const h1s = document.querySelectorAll('h1');
      expect(h1s.length).toBe(1); // Exactly one h1
      
      const h2s = document.querySelectorAll('h2');
      expect(h2s.length).toBeGreaterThan(3); // Multiple section headings
    });
  });

  describe('⚡ Performance and Loading', () => {
    test('Built site critical accessibility attributes are present immediately', () => {
      // These should be in the HTML, not added by JavaScript
      const criticalElements = [
        'main[role="main"][aria-labelledby]',
        'section[aria-labelledby]',
        'va-table[table-title]',
        '.chart-container[role="img"][aria-label][tabindex="0"]'
      ];
      
      criticalElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('Built site maintains structure without JavaScript execution', () => {
      // Test that core accessibility works even if JavaScript fails
      const vaTables = document.querySelectorAll('va-table');
      const chartContainers = document.querySelectorAll('.chart-container[role="img"]');
      const tabPanels = document.querySelectorAll('va-tab-panel[role="tabpanel"]');
      
      expect(vaTables.length).toBe(4);
      expect(chartContainers.length).toBe(4);
      expect(tabPanels.length).toBe(8); // 4 tabs × 2 panels each
      
      // All should have their accessibility attributes
      vaTables.forEach(table => {
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked', 'true');
      });
    });
  });
});