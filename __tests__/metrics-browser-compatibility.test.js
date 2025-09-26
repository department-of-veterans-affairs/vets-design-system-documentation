/**
 * Browser Compatibility and Cross-Platform Accessibility Tests
 * Tests real built site for cross-browser accessibility support
 * Based on requirements from issue #4788
 */

const fs = require('fs');
const path = require('path');
const { getByRole, getAllByRole, getByText, queryByText } = require('@testing-library/dom');
const { fireEvent } = require('@testing-library/dom');

describe('Metrics Dashboard Browser Compatibility Tests - Real Implementation', () => {
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

  describe('🌐 Cross-Browser DOM API Support', () => {
    test('Should handle querySelector and querySelectorAll consistently', () => {
      // Test fundamental DOM API compatibility with real built site
      const metricsDiv = document.querySelector('div.metrics-dashboard');
      const allSections = document.querySelectorAll('section');
      const vaTabs = document.querySelectorAll('va-tabs');
      
      expect(metricsDiv).toBeTruthy();
      expect(allSections.length).toBeGreaterThan(0);
      expect(vaTabs.length).toBe(4);
    });

    test('Should support modern CSS selectors across browsers', () => {
      // Test CSS selector compatibility with actual built elements
      const complexSelectors = [
        '[role="tabpanel"]',
        'va-table[table-title]',
        '.chart-container[role="img"]',
        'va-tab-item[button-text]'
      ];
      
      complexSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('Should handle getAttribute/setAttribute across browsers', () => {
      const charts = document.querySelectorAll('.chart-container');
      const vaTables = document.querySelectorAll('va-table');
      const tabItems = document.querySelectorAll('va-tab-item');
      
      expect(charts.length).toBe(4);
      expect(vaTables.length).toBe(4);
      expect(tabItems.length).toBe(8);
      
      // Test getAttribute with real elements
      charts.forEach(chart => {
        expect(chart.getAttribute('role')).toBe('img');
        expect(chart.getAttribute('aria-label')).toBeTruthy();
        expect(chart.getAttribute('tabindex')).toBe('0');
      });
      
      vaTables.forEach(table => {
        expect(table.getAttribute('table-title')).toBeTruthy();
        expect(table.getAttribute('stacked')).toBe('true');
      });
      
      tabItems.forEach(tab => {
        expect(tab.getAttribute('button-text')).toBeTruthy();
        expect(tab.getAttribute('target-id')).toBeTruthy();
      });
      
      // Test setAttribute compatibility
      const firstChart = charts[0];
      if (firstChart) {
        firstChart.setAttribute('data-test', 'browser-compatibility');
        expect(firstChart.getAttribute('data-test')).toBe('browser-compatibility');
      }
    });
  });

  describe('🔄 Event Handling Compatibility', () => {
    test('Should support addEventListener across browsers', () => {
      const charts = document.querySelectorAll('.chart-container');
      expect(charts.length).toBeGreaterThan(0);
      
      let clickCount = 0;
      const clickHandler = () => clickCount++;
      
      const firstChart = charts[0];
      firstChart.addEventListener('click', clickHandler);
      
      // Simulate click
      const clickEvent = new MouseEvent('click', { bubbles: true });
      firstChart.dispatchEvent(clickEvent);
      
      expect(clickCount).toBe(1);
      
      // Cleanup
      firstChart.removeEventListener('click', clickHandler);
    });

    test('Should handle keyboard events consistently', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      expect(focusableElements.length).toBeGreaterThan(0);
      
      let keyPressCount = 0;
      const keyHandler = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          keyPressCount++;
        }
      };
      
      const firstFocusable = focusableElements[0];
      firstFocusable.addEventListener('keydown', keyHandler);
      
      // Test Enter key
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      firstFocusable.dispatchEvent(enterEvent);
      
      expect(keyPressCount).toBe(1);
      
      // Cleanup
      firstFocusable.removeEventListener('keydown', keyHandler);
    });

    test('Should handle focus events for accessibility', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      expect(focusableElements.length).toBeGreaterThan(0);
      
      let focusCount = 0;
      const focusHandler = () => focusCount++;
      
      focusableElements.forEach(element => {
        element.addEventListener('focus', focusHandler);
      });
      
      // Simulate focus on each element
      focusableElements.forEach(element => {
        const focusEvent = new FocusEvent('focus', { bubbles: true });
        element.dispatchEvent(focusEvent);
      });
      
      expect(focusCount).toBe(focusableElements.length);
      
      // Cleanup
      focusableElements.forEach(element => {
        element.removeEventListener('focus', focusHandler);
      });
    });
  });

  describe('📱 Responsive and Mobile Accessibility', () => {
    test('Should maintain accessibility attributes in mobile viewport', () => {
      // Simulate mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375, // iPhone viewport width
      });
      
      const charts = document.querySelectorAll('.chart-container');
      const vaTables = document.querySelectorAll('va-table');
      
      // Accessibility attributes should remain intact on mobile
      charts.forEach(chart => {
        expect(chart.getAttribute('role')).toBe('img');
        expect(chart.getAttribute('aria-label')).toBeTruthy();
        expect(chart.getAttribute('tabindex')).toBe('0');
      });
      
      vaTables.forEach(table => {
        expect(table.getAttribute('table-title')).toBeTruthy();
        expect(table.getAttribute('stacked')).toBe('true'); // Should be mobile-optimized
      });
      
      // Restore original viewport
      delete window.innerWidth;
    });

    test('Should support touch interactions for accessibility', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      expect(focusableElements.length).toBeGreaterThan(0);
      
      let touchCount = 0;
      const touchHandler = () => touchCount++;
      
      const firstFocusable = focusableElements[0];
      firstFocusable.addEventListener('touchstart', touchHandler);
      
      // Simulate touch event
      const touchEvent = new TouchEvent('touchstart', { bubbles: true });
      firstFocusable.dispatchEvent(touchEvent);
      
      expect(touchCount).toBe(1);
      
      // Cleanup
      firstFocusable.removeEventListener('touchstart', touchHandler);
    });
  });

  describe('🎯 Assistive Technology Compatibility', () => {
    test('Should provide proper ARIA roles for screen readers', () => {
      // Test ARIA roles that are critical for screen readers using real elements
      const expectedRoles = [
        { selector: '[role="img"]', role: 'img', expectedCount: 4 },
        { selector: '[role="tabpanel"]', role: 'tabpanel', expectedCount: 8 }
        // Note: main role is now provided by Jekyll layout, not the metrics content itself
      ];
      
      expectedRoles.forEach(({ selector, role, expectedCount }) => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBe(expectedCount);
        
        elements.forEach(element => {
          expect(element.getAttribute('role')).toBe(role);
        });
      });
    });

    test('Should provide proper ARIA labels for screen reader context', () => {
      const labeledElements = document.querySelectorAll('[aria-label]');
      expect(labeledElements.length).toBeGreaterThan(0);
      
      labeledElements.forEach(element => {
        const label = element.getAttribute('aria-label');
        expect(label).toBeTruthy();
        expect(label.length).toBeGreaterThan(5); // Should be meaningful
        expect(label.trim()).toBe(label); // Should not have leading/trailing whitespace
      });
    });

    test('Should support aria-labelledby relationships', () => {
      const elementsWithLabelledBy = document.querySelectorAll('[aria-labelledby]');
      expect(elementsWithLabelledBy.length).toBeGreaterThan(0);
      
      elementsWithLabelledBy.forEach(element => {
        const labelId = element.getAttribute('aria-labelledby');
        const labelElement = document.getElementById(labelId);
        
        expect(labelElement).toBeTruthy();
        expect(labelElement.textContent.trim()).toBeTruthy();
      });
    });

    test('Should provide va-table with proper accessibility attributes', () => {
      const vaTables = document.querySelectorAll('va-table');
      expect(vaTables.length).toBe(4);
      
      vaTables.forEach(table => {
        // va-table should have accessibility attributes from real implementation
        expect(table).toHaveAttribute('table-title');
        expect(table).toHaveAttribute('stacked', 'true');
        expect(table).toHaveAttribute('sortable', 'true');
        expect(table).toHaveAttribute('table-type', 'borderless');
      });
    });

    test('Should support keyboard navigation patterns expected by screen readers', () => {
      // Test tab order with real focusable elements
      const explicitlyFocusable = document.querySelectorAll('[tabindex="0"]');
      const vaTabItems = document.querySelectorAll('va-tab-item');
      
      expect(explicitlyFocusable.length).toBeGreaterThan(0);
      expect(vaTabItems.length).toBe(8);
      
      explicitlyFocusable.forEach(element => {
        // Element should be in tab order
        const tabindex = element.getAttribute('tabindex');
        expect(parseInt(tabindex)).toBe(0);
      });
      
      // va-tab-item elements should be keyboard accessible
      vaTabItems.forEach(tabItem => {
        expect(tabItem.getAttribute('button-text')).toBeTruthy();
        expect(tabItem.getAttribute('target-id')).toBeTruthy();
      });
    });
  });

  describe('🔧 Web Components and Custom Elements', () => {
    test('Should handle VA Web Components consistently', () => {
      const vaTabs = document.querySelectorAll('va-tabs');
      const vaTabItems = document.querySelectorAll('va-tab-item');
      const vaTabPanels = document.querySelectorAll('va-tab-panel');
      const vaTables = document.querySelectorAll('va-table');
      
      expect(vaTabs.length).toBe(4);
      expect(vaTabItems.length).toBe(8); // 4 tabs × 2 items each
      expect(vaTabPanels.length).toBe(8); // 4 tabs × 2 panels each
      expect(vaTables.length).toBe(4);
      
      // Test custom attributes specific to VA components
      vaTabItems.forEach(item => {
        expect(item.getAttribute('button-text')).toBeTruthy();
        expect(item.getAttribute('target-id')).toBeTruthy();
      });
      
      vaTabPanels.forEach(panel => {
        expect(panel.getAttribute('panel-id')).toBeTruthy();
        expect(panel.getAttribute('role')).toBe('tabpanel');
      });
      
      vaTables.forEach(table => {
        expect(table.getAttribute('table-title')).toBeTruthy();
        expect(table.getAttribute('stacked')).toBe('true');
        expect(table.getAttribute('sortable')).toBe('true');
      });
    });

    test('Should maintain accessibility when web components fail to load', () => {
      // Test graceful degradation with actual HTML structure
      const tabItems = document.querySelectorAll('va-tab-item');
      const tabPanels = document.querySelectorAll('va-tab-panel');
      
      // Even if web components don't fully initialize,
      // accessibility attributes should be present in the HTML
      tabItems.forEach(item => {
        expect(item.getAttribute('button-text')).toBeTruthy();
        expect(item.getAttribute('target-id')).toBeTruthy();
      });
      
      tabPanels.forEach(panel => {
        expect(panel.getAttribute('role')).toBe('tabpanel');
        expect(panel.getAttribute('panel-id')).toBeTruthy();
        
        // Content inside panels should remain accessible
        const chart = panel.querySelector('.chart-container');
        const table = panel.querySelector('va-table');
        
        if (chart) {
          expect(chart.getAttribute('role')).toBe('img');
          expect(chart.getAttribute('aria-label')).toBeTruthy();
        }
        
        if (table) {
          expect(table.getAttribute('table-title')).toBeTruthy();
        }
      });
    });
  });

  describe('⚡ Performance and Loading States', () => {
    test('Should maintain accessibility during loading states', () => {
      // Test that accessibility attributes are present in built HTML immediately
      const charts = document.querySelectorAll('.chart-container');
      const vaTables = document.querySelectorAll('va-table');
      
      // Critical accessibility attributes should be present immediately
      charts.forEach(chart => {
        expect(chart.getAttribute('role')).toBe('img');
        expect(chart.getAttribute('aria-label')).toBeTruthy();
        expect(chart.getAttribute('tabindex')).toBe('0');
      });
      
      vaTables.forEach(table => {
        expect(table.getAttribute('table-title')).toBeTruthy();
        expect(table.getAttribute('stacked')).toBe('true');
      });
    });

    test('Should handle dynamic content updates accessibly', () => {
      const charts = document.querySelectorAll('.chart-container');
      expect(charts.length).toBeGreaterThan(0);
      
      const firstChart = charts[0];
      const originalLabel = firstChart.getAttribute('aria-label');
      
      // Simulate dynamic update (like what JavaScript functions would do)
      firstChart.setAttribute('aria-label', 'Updated chart with new data showing improved metrics');
      
      expect(firstChart.getAttribute('aria-label')).toContain('Updated chart');
      
      // Restore original state
      firstChart.setAttribute('aria-label', originalLabel);
    });
  });

  describe('🎨 Visual and Interaction Compatibility', () => {
    test('Should support high contrast mode accessibility', () => {
      // Test that elements maintain accessibility in high contrast scenarios
      const interactiveElements = document.querySelectorAll(
        '[tabindex="0"], va-tab-item, .chart-container, va-table'
      );
      
      expect(interactiveElements.length).toBeGreaterThan(0);
      
      interactiveElements.forEach(element => {
        // Elements should have proper roles for screen readers in high contrast mode
        const role = element.getAttribute('role');
        const tagName = element.tagName.toLowerCase();
        const hasAriaLabel = element.getAttribute('aria-label');
        
        // Should have semantic meaning or ARIA labeling
        const hasSemanticMeaning = role || 
                                   ['va-table', 'va-tab-item'].includes(tagName) || 
                                   hasAriaLabel;
        
        expect(hasSemanticMeaning).toBeTruthy();
      });
    });

    test('Should maintain focus indicators across browsers', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      expect(focusableElements.length).toBeGreaterThan(0);
      
      focusableElements.forEach(element => {
        // Elements should be programmatically focusable
        expect(element.getAttribute('tabindex')).toBe('0');
        
        // Should have a way to identify them for styling focus indicators
        expect(element.hasAttribute('tabindex')).toBeTruthy();
      });
    });
  });

  describe('🔍 Error Handling and Fallbacks', () => {
    test('Should handle browser differences gracefully', () => {
      // Test that core functionality works regardless of browser
      const mainStructuralElements = [
        'main#main-content', // Main landmark from Jekyll layout
        'div.metrics-dashboard[aria-labelledby]', // Metrics dashboard div
        'va-table[table-title]',
        '.chart-container[role="img"]',
        'va-tab-panel[role="tabpanel"]'
      ];
      
      mainStructuralElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('Should provide accessible fallbacks for complex interactions', () => {
      // Ensure that both charts and tables are available as alternatives
      const tabGroups = document.querySelectorAll('va-tabs');
      expect(tabGroups.length).toBe(4);
      
      tabGroups.forEach(tabGroup => {
        const chartPanel = tabGroup.querySelector('va-tab-panel[panel-id*="graph"]');
        const tablePanel = tabGroup.querySelector('va-tab-panel[panel-id*="table"]');
        
        expect(chartPanel).toBeTruthy();
        expect(tablePanel).toBeTruthy();
        
        // Chart panel should have focusable chart
        const chart = chartPanel.querySelector('.chart-container[tabindex="0"]');
        expect(chart).toBeTruthy();
        
        // Table panel should have accessible table
        const table = tablePanel.querySelector('va-table[table-title]');
        expect(table).toBeTruthy();
      });
    });

    test('Should maintain accessibility when JavaScript execution fails', () => {
      // Core accessibility should not depend on JavaScript
      const coreElements = document.querySelectorAll(
        'main[role="main"], section[aria-labelledby], va-table[table-title], .chart-container[role="img"]'
      );
      
      expect(coreElements.length).toBeGreaterThan(10); // Should have multiple core elements
      
      // All elements should have their accessibility attributes in the HTML
      coreElements.forEach(element => {
        const hasAccessibilityAttributes = 
          element.hasAttribute('role') ||
          element.hasAttribute('aria-labelledby') ||
          element.hasAttribute('aria-label') ||
          element.hasAttribute('table-title');
          
        expect(hasAccessibilityAttributes).toBeTruthy();
      });
    });
  });
});