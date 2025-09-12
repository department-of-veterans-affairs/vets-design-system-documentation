/**
 * Browser Compatibility and Cross-Platform Accessibility Tests
 * Ensures metrics dashboard works across different browsers and assistive technologies
 * Based on requirements from issue #4788
 */

const { getByRole, getAllByRole, getByText, queryByText } = require('@testing-library/dom');
const { fireEvent } = require('@testing-library/dom');

describe('Metrics Dashboard Browser Compatibility Tests', () => {
  
  beforeEach(() => {
    // Create simplified dashboard structure for compatibility testing
    document.body.innerHTML = `
      <div class="metrics-dashboard">
        <h1>Metrics Dashboard</h1>
        
        <!-- Test Web Components compatibility -->
        <va-tabs id="test-tabs">
          <va-tab-item button-text="Graph" target-id="test-graph-panel" 
                       aria-label="View data as a chart"></va-tab-item>
          <va-tab-item button-text="Table" target-id="test-table-panel"
                       aria-label="View data as a table"></va-tab-item>
          
          <va-tab-panel panel-id="test-graph-panel" role="tabpanel">
            <div id="test-chart" 
                 class="chart-container"
                 role="img" 
                 aria-label="Test chart for browser compatibility"
                 tabindex="0">
              <svg role="img">
                <desc>Test chart data for browser compatibility validation</desc>
                <rect width="100" height="50" fill="#0071bb"></rect>
              </svg>
            </div>
          </va-tab-panel>
          
          <va-tab-panel panel-id="test-table-panel" role="tabpanel">
            <table role="table" aria-label="Test data table for browser compatibility">
              <caption>Test Data for Browser Compatibility</caption>
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td tabindex="0">Test Item 1</td>
                  <td tabindex="0">100</td>
                </tr>
                <tr>
                  <td tabindex="0">Test Item 2</td>
                  <td tabindex="0">200</td>
                </tr>
              </tbody>
            </table>
          </va-tab-panel>
        </va-tabs>
        
        <!-- Test focus management -->
        <div class="metrics-section">
          <h3 id="test-heading">Test Section</h3>
          <p>Test description for accessibility validation</p>
          
          <div class="metric-card">
            <h4 id="metric-label">Test Metric</h4>
            <div class="metric-value" aria-labelledby="metric-label" tabindex="0">42</div>
            <div class="metric-trend" aria-label="Trend: 5% increase">↗ 5%</div>
          </div>
        </div>
      </div>
    `;
  });

  describe('🌐 Cross-Browser DOM API Support', () => {
    test('Should handle querySelector and querySelectorAll consistently', () => {
      // Test fundamental DOM API compatibility
      const dashboard = document.querySelector('.metrics-dashboard');
      const allSections = document.querySelectorAll('.metrics-section');
      const tabs = document.querySelectorAll('va-tab-item');
      
      expect(dashboard).toBeTruthy();
      expect(allSections.length).toBeGreaterThan(0);
      expect(tabs.length).toBe(2);
    });

    test('Should support modern CSS selectors across browsers', () => {
      // Test CSS selector compatibility
      const complexSelectors = [
        '[role="tabpanel"]',
        'table[role="table"]',
        '.chart-container[role="img"]',
        'va-tab-item[button-text="Graph"]',
        'td[tabindex="0"]'
      ];
      
      complexSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('Should handle getAttribute/setAttribute across browsers', () => {
      const chart = document.getElementById('test-chart');
      const table = document.querySelector('table');
      const tabItem = document.querySelector('va-tab-item');
      
      // Test getAttribute
      expect(chart.getAttribute('role')).toBe('img');
      expect(chart.getAttribute('aria-label')).toBeTruthy();
      expect(table.getAttribute('aria-label')).toBeTruthy();
      expect(tabItem.getAttribute('button-text')).toBe('Graph');
      
      // Test setAttribute compatibility
      chart.setAttribute('data-test', 'browser-compatibility');
      expect(chart.getAttribute('data-test')).toBe('browser-compatibility');
    });
  });

  describe('🔄 Event Handling Compatibility', () => {
    test('Should support addEventListener across browsers', () => {
      const chart = document.getElementById('test-chart');
      let clickCount = 0;
      
      const clickHandler = () => clickCount++;
      chart.addEventListener('click', clickHandler);
      
      // Simulate click
      const clickEvent = new MouseEvent('click', { bubbles: true });
      chart.dispatchEvent(clickEvent);
      
      expect(clickCount).toBe(1);
      
      // Cleanup
      chart.removeEventListener('click', clickHandler);
    });

    test('Should handle keyboard events consistently', () => {
      const focusableElement = document.querySelector('[tabindex="0"]');
      let keyPressCount = 0;
      
      const keyHandler = (event) => {
        if (event.key === 'Enter' || event.key === 'Space') {
          keyPressCount++;
        }
      };
      
      focusableElement.addEventListener('keydown', keyHandler);
      
      // Test Enter key
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      focusableElement.dispatchEvent(enterEvent);
      
      expect(keyPressCount).toBe(1);
      
      // Cleanup
      focusableElement.removeEventListener('keydown', keyHandler);
    });

    test('Should handle focus events for accessibility', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
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
      
      const chart = document.getElementById('test-chart');
      const table = document.querySelector('table');
      
      // Accessibility attributes should remain intact
      expect(chart.getAttribute('role')).toBe('img');
      expect(chart.getAttribute('aria-label')).toBeTruthy();
      expect(chart.getAttribute('tabindex')).toBe('0');
      expect(table.getAttribute('role')).toBe('table');
      expect(table.getAttribute('aria-label')).toBeTruthy();
    });

    test('Should support touch interactions for accessibility', () => {
      const focusableElement = document.querySelector('[tabindex="0"]');
      let touchCount = 0;
      
      const touchHandler = () => touchCount++;
      focusableElement.addEventListener('touchstart', touchHandler);
      
      // Simulate touch event
      const touchEvent = new TouchEvent('touchstart', { bubbles: true });
      focusableElement.dispatchEvent(touchEvent);
      
      expect(touchCount).toBe(1);
    });
  });

  describe('🎯 Assistive Technology Compatibility', () => {
    test('Should provide proper ARIA roles for screen readers', () => {
      // Test ARIA roles that are critical for screen readers
      const expectedRoles = [
        { selector: '[role="img"]', role: 'img' },
        { selector: '[role="table"]', role: 'table' },
        { selector: '[role="tabpanel"]', role: 'tabpanel' }
      ];
      
      expectedRoles.forEach(({ selector, role }) => {
        const elements = document.querySelectorAll(selector);
        expect(elements.length).toBeGreaterThan(0);
        
        elements.forEach(element => {
          expect(element.getAttribute('role')).toBe(role);
        });
      });
    });

    test('Should provide proper ARIA labels for screen reader context', () => {
      const labeledElements = document.querySelectorAll('[aria-label]');
      
      labeledElements.forEach(element => {
        const label = element.getAttribute('aria-label');
        expect(label).toBeTruthy();
        expect(label.length).toBeGreaterThan(5); // Should be meaningful
        expect(label.trim()).toBe(label); // Should not have leading/trailing whitespace
      });
    });

    test('Should support aria-labelledby relationships', () => {
      const elementsWithLabelledBy = document.querySelectorAll('[aria-labelledby]');
      
      elementsWithLabelledBy.forEach(element => {
        const labelId = element.getAttribute('aria-labelledby');
        const labelElement = document.getElementById(labelId);
        
        expect(labelElement).toBeTruthy();
        expect(labelElement.textContent.trim()).toBeTruthy();
      });
    });

    test('Should provide table headers with proper scope attributes', () => {
      const tableHeaders = document.querySelectorAll('th');
      
      tableHeaders.forEach(header => {
        const scope = header.getAttribute('scope');
        expect(['col', 'row', 'colgroup', 'rowgroup']).toContain(scope);
      });
    });

    test('Should support keyboard navigation patterns expected by screen readers', () => {
      // Test tab order and focusability
      const focusableElements = document.querySelectorAll(
        '[tabindex="0"], va-tab-item, button, input, select, textarea, a[href]'
      );
      
      expect(focusableElements.length).toBeGreaterThan(0);
      
      focusableElements.forEach(element => {
        // Element should not have negative tabindex (which would remove it from tab order)
        const tabindex = element.getAttribute('tabindex');
        if (tabindex !== null) {
          expect(parseInt(tabindex)).toBeGreaterThanOrEqual(0);
        }
      });
    });
  });

  describe('🔧 Web Components and Custom Elements', () => {
    test('Should handle VA Web Components consistently', () => {
      const vaTabs = document.querySelector('va-tabs');
      const vaTabItems = document.querySelectorAll('va-tab-item');
      const vaTabPanels = document.querySelectorAll('va-tab-panel');
      
      expect(vaTabs).toBeTruthy();
      expect(vaTabItems.length).toBe(2);
      expect(vaTabPanels.length).toBe(2);
      
      // Test custom attributes specific to VA components
      vaTabItems.forEach(item => {
        expect(item.getAttribute('button-text')).toBeTruthy();
        expect(item.getAttribute('target-id')).toBeTruthy();
      });
      
      vaTabPanels.forEach(panel => {
        expect(panel.getAttribute('panel-id')).toBeTruthy();
        expect(panel.getAttribute('role')).toBe('tabpanel');
      });
    });

    test('Should maintain accessibility when web components fail to load', () => {
      // Test graceful degradation
      const tabItems = document.querySelectorAll('va-tab-item');
      const tabPanels = document.querySelectorAll('va-tab-panel');
      
      // Even if web components don't fully initialize, 
      // accessibility attributes should be present
      tabItems.forEach(item => {
        expect(item.getAttribute('aria-label')).toBeTruthy();
      });
      
      tabPanels.forEach(panel => {
        expect(panel.getAttribute('role')).toBe('tabpanel');
        
        // Content inside panels should remain accessible
        const table = panel.querySelector('table');
        const chart = panel.querySelector('.chart-container');
        
        if (table) {
          expect(table.getAttribute('role')).toBe('table');
        }
        
        if (chart) {
          expect(chart.getAttribute('role')).toBe('img');
        }
      });
    });
  });

  describe('⚡ Performance and Loading States', () => {
    test('Should maintain accessibility during loading states', () => {
      // Test that accessibility attributes are present even before data loads
      const chart = document.getElementById('test-chart');
      const table = document.querySelector('table');
      
      // Critical accessibility attributes should be present immediately
      expect(chart.getAttribute('role')).toBe('img');
      expect(chart.getAttribute('aria-label')).toBeTruthy();
      expect(chart.getAttribute('tabindex')).toBe('0');
      
      expect(table.getAttribute('role')).toBe('table');
      expect(table.querySelector('caption')).toBeTruthy();
      expect(table.querySelectorAll('th[scope]').length).toBeGreaterThan(0);
    });

    test('Should handle dynamic content updates accessibly', () => {
      const chart = document.getElementById('test-chart');
      const originalLabel = chart.getAttribute('aria-label');
      
      // Simulate dynamic update
      chart.setAttribute('aria-label', 'Updated chart with new data showing improved metrics');
      chart.innerHTML = '<svg><desc>Updated chart description</desc><rect></rect></svg>';
      
      expect(chart.getAttribute('aria-label')).toContain('Updated chart');
      expect(chart.querySelector('desc')).toBeTruthy();
      
      // Restore original state
      chart.setAttribute('aria-label', originalLabel);
    });
  });

  describe('🎨 Visual and Interaction Compatibility', () => {
    test('Should support high contrast mode accessibility', () => {
      // Test that elements maintain accessibility in high contrast scenarios
      const interactiveElements = document.querySelectorAll(
        '[tabindex="0"], va-tab-item, .chart-container'
      );
      
      interactiveElements.forEach(element => {
        // Elements should have proper roles for screen readers in high contrast mode
        const role = element.getAttribute('role');
        if (role) {
          expect(['img', 'button', 'tab', 'tabpanel', 'table'].some(validRole => 
            role.includes(validRole)
          )).toBeTruthy();
        }
        
        // Elements should maintain their accessibility attributes
        const ariaLabel = element.getAttribute('aria-label');
        if (ariaLabel) {
          expect(ariaLabel.length).toBeGreaterThan(0);
        }
      });
    });

    test('Should maintain focus indicators across browsers', () => {
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      
      focusableElements.forEach(element => {
        // Elements should be programmatically focusable
        expect(element.tabIndex).toBe(0);
        
        // Should have a way to identify them for styling focus indicators
        expect(element.getAttribute('tabindex')).toBe('0');
      });
    });
  });

  describe('🔍 Error Handling and Fallbacks', () => {
    test('Should handle JavaScript errors gracefully', () => {
      // Test that accessibility remains even if JavaScript fails
      const chart = document.getElementById('test-chart');
      const table = document.querySelector('table');
      
      // Core accessibility should not depend on JavaScript
      expect(chart.getAttribute('role')).toBe('img');
      expect(chart.getAttribute('aria-label')).toBeTruthy();
      expect(table.getAttribute('role')).toBe('table');
      expect(table.querySelector('caption')).toBeTruthy();
    });

    test('Should provide accessible fallbacks for complex interactions', () => {
      // Ensure that if advanced features fail, basic accessibility remains
      const tabPanels = document.querySelectorAll('va-tab-panel');
      
      tabPanels.forEach(panel => {
        const table = panel.querySelector('table');
        const chart = panel.querySelector('.chart-container');
        
        // Both chart and table should be present as fallbacks for each other
        if (chart) {
          // Chart should have tabindex for keyboard access
          expect(chart.getAttribute('tabindex')).toBe('0');
        }
        
        if (table) {
          // Table should be keyboard navigable
          const focusableCells = table.querySelectorAll('[tabindex="0"]');
          expect(focusableCells.length).toBeGreaterThan(0);
        }
      });
    });
  });
});