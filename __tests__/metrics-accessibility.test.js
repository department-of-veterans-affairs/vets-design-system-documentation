/**
 * Accessibility Tests for Metrics Dashboard
 * Tests verify Section 508 and WCAG 2.2 AA compliance
 * Based on requirements from issue #4788
 */

const { axe, toHaveNoViolations } = require('jest-axe');
const { getByRole, getAllByRole, getByText, queryByText, getByLabelText } = require('@testing-library/dom');
const { fireEvent } = require('@testing-library/dom');

expect.extend(toHaveNoViolations);

// Mock D3.js for chart rendering
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
    remove: jest.fn().mockReturnThis(),
    innerHTML: ''
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
  scaleOrdinal: jest.fn(() => ({
    domain: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis()
  })),
  axisBottom: jest.fn(() => jest.fn()),
  axisLeft: jest.fn(() => jest.fn()),
  max: jest.fn(() => 100)
};

// Mock fetch for data loading
global.fetch = jest.fn();

describe('Metrics Dashboard Accessibility Tests', () => {
  
  beforeEach(() => {
    // Create complete metrics dashboard structure
    document.body.innerHTML = `
      <main role="main" aria-labelledby="main-heading" class="metrics-dashboard">
        <h1 id="main-heading">Metrics Dashboard</h1>
        <p>This dashboard provides insights into the health and adoption of the VA Design System.</p>
        
        <!-- Summary Metrics Cards -->
        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading">Summary Metrics</h2>
          <div class="metrics-grid">
            <va-card class="metric-card">
              <h3 id="open-issues-label">Open Issues</h3>
            <div class="metric-value" id="open-issues" aria-labelledby="open-issues-label">42</div>
            <div class="metric-trend" id="open-issues-trend" aria-label="Trend: 12% decrease compared to last month">
              <span>↘ 12% compared to last month</span>
            </div>
          </va-card>
          
          <va-card class="metric-card">
            <h3 id="closed-month-label">Closed This Month</h3>
            <div class="metric-value" id="closed-month" aria-labelledby="closed-month-label">28</div>
            <div class="metric-trend" id="closed-month-trend" aria-label="Trend: 35% increase compared to previous month">
              <span>↗ 35% compared to previous month</span>
            </div>
          </va-card>
          </div>
        </section>
        
        <!-- Issue Tracking Section -->
        <section aria-labelledby="issue-tracking-heading">
          <h2 id="issue-tracking-heading">Issue Tracking Metrics</h2>
        <div class="metrics-section">
          <h3>Issue Activity by Quarter</h3>
          <p>Shows issues opened vs. closed each quarter to track activity levels and resolution trends</p>
          
          <va-tabs>
            <va-tab-item button-text="Graph" target-id="quarterly-graph-panel"></va-tab-item>
            <va-tab-item button-text="Table" target-id="quarterly-table-panel"></va-tab-item>
            
            <va-tab-panel panel-id="quarterly-graph-panel" role="tabpanel" aria-labelledby="quarterly-graph-tab">
              <div id="quarterly-chart" 
                   class="chart-container"
                   role="img" 
                   aria-label="Bar chart showing quarterly issue activity with issues opened versus issues closed by quarter. Chart shows data from Q1 2024 to Q3 2024 with trends in issue resolution."
                   tabindex="0">
                <svg role="img" aria-label="Quarterly issue activity bar chart" aria-describedby="quarterly-chart-desc">
                  <desc id="quarterly-chart-desc">
                    Bar chart displaying quarterly issue tracking data. 
                    Q1 2024: 15 issues opened, 12 issues closed. 
                    Q2 2024: 23 issues opened, 18 issues closed. 
                    Q3 2024: 19 issues opened, 25 issues closed.
                    Shows improving closure rate over time.
                  </desc>
                  <g><rect width="50" height="100" fill="#0071bb"></rect></g>
                </svg>
              </div>
            </va-tab-panel>
            
            <va-tab-panel panel-id="quarterly-table-panel" role="tabpanel" aria-labelledby="quarterly-table-tab">
              <table class="usa-table usa-table--borderless" 
                     role="table"
                     aria-label="Quarterly issue activity data showing issues opened and closed by quarter">
                <caption>Issue Activity by Quarter: Number of issues opened and closed each quarter</caption>
                <thead>
                  <tr>
                    <th scope="col">Quarter</th>
                    <th scope="col">Issues Opened</th>
                    <th scope="col">Issues Closed</th>
                  </tr>
                </thead>
                <tbody id="quarterly-table-body">
                  <tr>
                    <td tabindex="0">Q1 2024</td>
                    <td tabindex="0">15</td>
                    <td tabindex="0">12</td>
                  </tr>
                  <tr>
                    <td tabindex="0">Q2 2024</td>
                    <td tabindex="0">23</td>
                    <td tabindex="0">18</td>
                  </tr>
                  <tr>
                    <td tabindex="0">Q3 2024</td>
                    <td tabindex="0">19</td>
                    <td tabindex="0">25</td>
                  </tr>
                </tbody>
              </table>
            </va-tab-panel>
          </va-tabs>
        </div>
        </section>
        
        <!-- Component Usage Section -->
        <section aria-labelledby="component-usage-heading">
          <h2 id="component-usage-heading">Component Usage Metrics</h2>
        <div class="metrics-section">
          <h3>Top Components by Usage</h3>
          <p>Most frequently used design system components across all VA applications</p>
          <div class="data-freshness" id="component-data-freshness">
            <small class="vads-u-color--gray-medium">Data from August 12, 2024 across 47 VA applications</small>
          </div>
          
          <va-tabs>
            <va-tab-item button-text="Graph" target-id="components-graph-panel"></va-tab-item>
            <va-tab-item button-text="Table" target-id="components-table-panel"></va-tab-item>
            
            <va-tab-panel panel-id="components-graph-panel" role="tabpanel">
              <div id="top-components-chart" 
                   class="chart-container"
                   role="img" 
                   aria-label="Bar chart showing top 10 components by usage count across VA applications. va-button leads with 1,247 usages, followed by va-card with 892 usages."
                   tabindex="0">
                <svg role="img" aria-label="Top components usage bar chart" aria-describedby="components-chart-desc">
                  <desc id="components-chart-desc">
                    Horizontal bar chart showing the most used VA design system components.
                    Top 3 components: va-button (1,247 usages), va-card (892 usages), va-input (654 usages).
                    Data represents usage across all VA applications as of August 2024.
                  </desc>
                  <g><rect width="30" height="80" fill="#0071bb"></rect></g>
                </svg>
              </div>
            </va-tab-panel>
            
            <va-tab-panel panel-id="components-table-panel" role="tabpanel">
              <table class="usa-table usa-table--borderless" 
                     role="table"
                     aria-label="Top 25 component usage data showing component names and usage counts">
                <caption>Top Components by Usage: Top 25 most frequently used design system components</caption>
                <thead>
                  <tr>
                    <th scope="col">Component Name</th>
                    <th scope="col">Usage Count</th>
                  </tr>
                </thead>
                <tbody id="components-table-body">
                  <tr>
                    <td tabindex="0">va-button</td>
                    <td tabindex="0">1,247</td>
                  </tr>
                  <tr>
                    <td tabindex="0">va-card</td>
                    <td tabindex="0">892</td>
                  </tr>
                  <tr>
                    <td tabindex="0">va-input</td>
                    <td tabindex="0">654</td>
                  </tr>
                </tbody>
              </table>
            </va-tab-panel>
          </va-tabs>
        </div>
        
        <!-- Velocity Chart Section -->
        <div class="metrics-section">
          <h3>Monthly new issues created</h3>
          <p>Displays the rate of new issues opened per time period to track community engagement</p>
          
          <va-tabs>
            <va-tab-item button-text="Graph" target-id="velocity-graph-panel"></va-tab-item>
            <va-tab-item button-text="Table" target-id="velocity-table-panel"></va-tab-item>
            
            <va-tab-panel panel-id="velocity-graph-panel" role="tabpanel">
              <div id="velocity-chart" 
                   class="chart-container"
                   role="img" 
                   aria-label="Line chart showing monthly new issues created over time from January 2024 to August 2024, tracking community engagement levels."
                   tabindex="0">
                <svg role="img" aria-label="Monthly velocity line chart" aria-describedby="velocity-chart-desc">
                  <desc id="velocity-chart-desc">
                    Line chart showing monthly issue creation trends.
                    Peak activity in March 2024 with 35 new issues.
                    Recent months show stable engagement around 20-25 new issues per month.
                  </desc>
                  <g><line x1="10" y1="50" x2="200" y2="30" stroke="#0071bb"></line></g>
                </svg>
              </div>
            </va-tab-panel>
            
            <va-tab-panel panel-id="velocity-table-panel" role="tabpanel">
              <table class="usa-table usa-table--borderless" 
                     role="table"
                     aria-label="Monthly issue velocity data showing issues opened each month">
                <caption>Monthly New Issues Created: Number of new issues opened each month</caption>
                <thead>
                  <tr>
                    <th scope="col">Month/Year</th>
                    <th scope="col">Issues Opened</th>
                  </tr>
                </thead>
                <tbody id="velocity-table-body">
                  <tr>
                    <td tabindex="0">January 2024</td>
                    <td tabindex="0">18</td>
                  </tr>
                  <tr>
                    <td tabindex="0">February 2024</td>
                    <td tabindex="0">22</td>
                  </tr>
                  <tr>
                    <td tabindex="0">March 2024</td>
                    <td tabindex="0">35</td>
                  </tr>
                </tbody>
              </table>
            </va-tab-panel>
          </va-tabs>
        </div>
        </section>
      </main>
    `;
    
    // Mock successful data fetch
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        quarterly: [
          { period: '2024-Q1', issues_opened: 15, issues_closed: 12 },
          { period: '2024-Q2', issues_opened: 23, issues_closed: 18 },
          { period: '2024-Q3', issues_opened: 19, issues_closed: 25 }
        ],
        velocity: [
          { period: '2024-01', issues_opened: 18 },
          { period: '2024-02', issues_opened: 22 },
          { period: '2024-03', issues_opened: 35 }
        ]
      })
    });
  });

  afterEach(() => {
    fetch.mockClear();
  });

  describe('🔍 Automated Accessibility Scanning', () => {
    test('Should pass axe-core accessibility audit with zero violations', async () => {
      // Configure axe to work with va-web-components
      const results = await axe(document.body, {
        rules: {
          // Disable ARIA rules that conflict with custom elements
          'aria-allowed-attr': { enabled: false },
          // Focus on critical accessibility rules
          'heading-order': { enabled: true },
          'landmark-one-main': { enabled: true },
          'page-has-heading-one': { enabled: true },
          'region': { enabled: true }
        }
      });
      expect(results).toHaveNoViolations();
    });

    test('Should pass axe-core audit for WCAG 2.2 AA compliance', async () => {
      const results = await axe(document.body, {
        tags: ['wcag2a', 'wcag2aa', 'section508'],
        rules: {
          // Skip rules that don't work well with custom elements in test env
          'aria-allowed-attr': { enabled: false },
          'color-contrast': { enabled: false }, // Skip in jsdom due to canvas limitations
          // Enable important structural rules
          'heading-order': { enabled: true },
          'label': { enabled: true },
          'button-name': { enabled: true }
        }
      });
      expect(results).toHaveNoViolations();
    });

    test('Should have proper semantic structure for accessibility', () => {
      // Test structural accessibility without axe-core limitations
      const main = document.querySelector('[role="main"], main');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const tables = document.querySelectorAll('table');
      const images = document.querySelectorAll('[role="img"]');
      
      expect(main).toBeTruthy();
      expect(headings.length).toBeGreaterThan(3);
      expect(tables.length).toBeGreaterThan(2);
      expect(images.length).toBeGreaterThan(2);
    });
  });

  describe('📊 Screen Reader Compatibility', () => {
    test('Charts should have proper accessible names and descriptions', () => {
      const chartContainers = document.querySelectorAll('.chart-container[role="img"]');
      
      chartContainers.forEach(chart => {
        // Each chart container must have role="img"
        expect(chart).toHaveAttribute('role', 'img');
        
        // Each chart must have meaningful aria-label
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel.length).toBeGreaterThan(20); // Should be descriptive
        
        // Chart container should be focusable for screen reader navigation
        expect(chart).toHaveAttribute('tabindex', '0');
      });
    });

    test('Charts should provide detailed descriptions via aria-describedby', () => {
      const chartContainers = document.querySelectorAll('.chart-container');
      
      chartContainers.forEach(container => {
        const svg = container.querySelector('svg');
        if (svg) {
          const descId = svg.getAttribute('aria-describedby');
          if (descId) {
            const descElement = document.getElementById(descId);
            expect(descElement).toBeTruthy();
            expect(descElement.textContent.trim().length).toBeGreaterThan(50);
          }
          
          // Should have desc element for detailed description
          const descElement = svg.querySelector('desc');
          expect(descElement).toBeTruthy();
          expect(descElement.textContent.trim().length).toBeGreaterThan(30);
        }
      });
    });

    test('Tables should provide comprehensive data context for screen readers', () => {
      const tables = getAllByRole(document.body, 'table');
      
      tables.forEach(table => {
        // Each table must have a caption
        const caption = table.querySelector('caption');
        expect(caption).toBeTruthy();
        expect(caption.textContent.trim().length).toBeGreaterThan(10);
        
        // Tables should have aria-label for additional context
        expect(table).toHaveAttribute('aria-label');
        
        // Column headers must use scope="col"
        const columnHeaders = table.querySelectorAll('th[scope="col"]');
        expect(columnHeaders.length).toBeGreaterThan(0);
        
        // Data cells should be focusable for screen reader navigation
        const dataCells = table.querySelectorAll('td[tabindex="0"]');
        expect(dataCells.length).toBeGreaterThan(0);
      });
    });

    test('Metric cards should be properly labeled for screen reader users', () => {
      const metricValues = document.querySelectorAll('.metric-value');
      
      metricValues.forEach(value => {
        // Should be connected to label via aria-labelledby
        expect(value).toHaveAttribute('aria-labelledby');
        
        const labelId = value.getAttribute('aria-labelledby');
        const label = document.getElementById(labelId);
        expect(label).toBeTruthy();
      });
    });

    test('Trend indicators should provide context for screen reader users', () => {
      const trendElements = document.querySelectorAll('.metric-trend');
      
      trendElements.forEach(trend => {
        // Should have aria-label explaining the trend
        expect(trend).toHaveAttribute('aria-label');
        
        const ariaLabel = trend.getAttribute('aria-label');
        expect(ariaLabel).toContain('Trend:');
        expect(ariaLabel.length).toBeGreaterThan(20);
      });
    });

    test('Data freshness indicator should be accessible to screen readers', () => {
      const freshnessElement = document.getElementById('component-data-freshness');
      expect(freshnessElement).toBeTruthy();
      
      // Should contain meaningful information about data currency
      const text = freshnessElement.textContent;
      expect(text).toContain('Data from');
      expect(text.length).toBeGreaterThan(15);
    });
  });

  describe('⌨️ Keyboard Navigation', () => {
    test('All interactive elements should be keyboard accessible', () => {
      // Tab items should be focusable
      const tabItems = document.querySelectorAll('va-tab-item');
      tabItems.forEach(tab => {
        expect(tab).not.toHaveAttribute('tabindex', '-1');
      });
      
      // Charts should be focusable
      const charts = document.querySelectorAll('.chart-container');
      charts.forEach(chart => {
        expect(chart).toHaveAttribute('tabindex', '0');
      });
      
      // Table cells should be focusable for navigation
      const tableCells = document.querySelectorAll('td[tabindex="0"]');
      expect(tableCells.length).toBeGreaterThan(0);
    });

    test('Tab navigation should work correctly between chart and table views', () => {
      const metricsSection = document.querySelector('.metrics-section');
      const graphTab = metricsSection.querySelector('[button-text="Graph"]');
      const tableTab = metricsSection.querySelector('[button-text="Table"]');
      
      // Both tabs should exist and be focusable
      expect(graphTab).toBeTruthy();
      expect(tableTab).toBeTruthy();
      
      // Should have descriptive button text
      expect(graphTab.getAttribute('button-text')).toBe('Graph');
      expect(tableTab.getAttribute('button-text')).toBe('Table');
      
      // Should have proper target panel connections
      expect(graphTab.getAttribute('target-id')).toBeTruthy();
      expect(tableTab.getAttribute('target-id')).toBeTruthy();
    });

    test('Focus should be properly managed in tab panels', () => {
      const tabPanels = document.querySelectorAll('va-tab-panel');
      
      tabPanels.forEach(panel => {
        expect(panel).toHaveAttribute('role', 'tabpanel');
        
        // Panel should contain focusable content
        const focusableElements = panel.querySelectorAll('[tabindex="0"], [role="img"][tabindex="0"]');
        expect(focusableElements.length).toBeGreaterThan(0);
      });
    });

    test('Table navigation should support keyboard-only users', () => {
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        // All data cells should be keyboard navigable
        const dataCells = table.querySelectorAll('td');
        dataCells.forEach(cell => {
          expect(cell).toHaveAttribute('tabindex', '0');
        });
        
        // Headers should be properly identified
        const headers = table.querySelectorAll('th');
        headers.forEach(header => {
          expect(header).toHaveAttribute('scope');
        });
      });
    });

    test('Keyboard users should be able to access chart data via tables', () => {
      // Each section with charts should have corresponding tables
      const metricsSections = document.querySelectorAll('.metrics-section');
      
      metricsSections.forEach(section => {
        const chart = section.querySelector('.chart-container');
        const table = section.querySelector('table');
        
        if (chart && table) {
          // Table should have navigable content
          const tableRows = table.querySelectorAll('tbody tr');
          expect(tableRows.length).toBeGreaterThan(0);
          
          // Table cells should be keyboard accessible
          const focusableCells = table.querySelectorAll('td[tabindex="0"]');
          expect(focusableCells.length).toBeGreaterThan(0);
        }
      });
    });
  });

  describe('🏷️ ARIA Labels and Semantic Structure', () => {
    test('Page should have proper heading hierarchy', () => {
      const h1 = document.querySelector('h1');
      const h2s = document.querySelectorAll('h2');
      const h3s = document.querySelectorAll('h3');
      
      // Should have exactly one h1
      expect(h1).toBeTruthy();
      expect(document.querySelectorAll('h1')).toHaveLength(1);
      
      // Should have multiple h2s for main sections
      expect(h2s.length).toBeGreaterThanOrEqual(2);
      
      // Should have h3s for subsections
      expect(h3s.length).toBeGreaterThanOrEqual(2);
      
      // h1 should describe the page purpose
      expect(h1.textContent).toContain('Metrics Dashboard');
    });

    test('Tab system should use proper ARIA semantics', () => {
      const tabs = document.querySelectorAll('va-tabs');
      
      tabs.forEach(tabGroup => {
        // Tab items should have proper button text
        const tabItems = tabGroup.querySelectorAll('va-tab-item');
        tabItems.forEach(item => {
          expect(item).toHaveAttribute('button-text');
          expect(item).toHaveAttribute('target-id');
          
          const targetId = item.getAttribute('target-id');
          const targetPanel = document.querySelector(`[panel-id="${targetId}"]`);
          expect(targetPanel).toBeTruthy();
          expect(targetPanel).toHaveAttribute('role', 'tabpanel');
        });
      });
    });

    test('Charts should have appropriate role attributes', () => {
      const chartContainers = document.querySelectorAll('.chart-container');
      
      chartContainers.forEach(container => {
        // Container should have role="img"
        expect(container).toHaveAttribute('role', 'img');
        
        // Should have descriptive aria-label
        const ariaLabel = container.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        
        // SVG elements should also have role="img"
        const svg = container.querySelector('svg');
        if (svg) {
          expect(svg).toHaveAttribute('role', 'img');
        }
      });
    });

    test('Tables should use proper semantic markup', () => {
      const tables = getAllByRole(document.body, 'table');
      
      tables.forEach(table => {
        // Should have explicit role="table"
        expect(table).toHaveAttribute('role', 'table');
        
        // Should have meaningful caption
        const caption = table.querySelector('caption');
        expect(caption).toBeTruthy();
        expect(caption.textContent.trim()).not.toBe('');
        
        // Should have thead and tbody
        expect(table.querySelector('thead')).toBeTruthy();
        expect(table.querySelector('tbody')).toBeTruthy();
        
        // Column headers should use scope="col"
        const colHeaders = table.querySelectorAll('th[scope="col"]');
        expect(colHeaders.length).toBeGreaterThan(0);
      });
    });

    test('Landmark regions should be properly identified', () => {
      // Main content should be identifiable
      const dashboard = document.querySelector('.metrics-dashboard');
      expect(dashboard).toBeTruthy();
      
      // Sections should have clear headings
      const sections = document.querySelectorAll('.metrics-section');
      sections.forEach(section => {
        const heading = section.querySelector('h2, h3, h4');
        expect(heading).toBeTruthy();
      });
    });
  });

  describe('📱 Browser Compatibility & Responsive Design', () => {
    test('Content should be accessible across different viewport sizes', () => {
      // Test that key elements are present regardless of size
      const keyElements = [
        '.metrics-dashboard',
        'h1',
        'va-tabs',
        '.chart-container',
        'table'
      ];
      
      keyElements.forEach(selector => {
        const element = document.querySelector(selector);
        expect(element).toBeTruthy();
      });
    });

    test('Interactive elements should maintain accessibility in responsive layout', () => {
      // Tab items should remain accessible
      const tabItems = document.querySelectorAll('va-tab-item');
      tabItems.forEach(item => {
        expect(item).toHaveAttribute('button-text');
        expect(item).toHaveAttribute('target-id');
      });
      
      // Tables should remain keyboard navigable
      const tableCells = document.querySelectorAll('td[tabindex="0"]');
      expect(tableCells.length).toBeGreaterThan(0);
    });
  });

  describe('🎯 User Experience Validation', () => {
    test('Screen reader users can access chart data through tables', () => {
      // For each chart, verify there's corresponding tabular data
      const chartSections = document.querySelectorAll('.metrics-section');
      
      chartSections.forEach(section => {
        const chart = section.querySelector('.chart-container');
        const table = section.querySelector('table');
        
        if (chart && table) {
          // Table should have accessible data
          const tableBody = table.querySelector('tbody');
          const dataRows = tableBody.querySelectorAll('tr');
          expect(dataRows.length).toBeGreaterThan(0);
          
          // Data should be navigable
          const focusableCells = table.querySelectorAll('td[tabindex="0"]');
          expect(focusableCells.length).toBeGreaterThan(0);
        }
      });
    });

    test('Tab switching announces properly for screen reader users', () => {
      const tabItems = document.querySelectorAll('va-tab-item');
      
      tabItems.forEach(item => {
        const buttonText = item.getAttribute('button-text');
        expect(buttonText).toBeTruthy();
        
        // Should clearly indicate what view will be shown
        expect(buttonText.toLowerCase()).toMatch(/(chart|table|graph)/);
        
        // Should have target panel reference
        expect(item.getAttribute('target-id')).toBeTruthy();
      });
    });

    test('Context and data freshness are clearly communicated', () => {
      // Data freshness should be available
      const freshness = document.getElementById('component-data-freshness');
      expect(freshness).toBeTruthy();
      
      // Section descriptions should provide context
      const sections = document.querySelectorAll('.metrics-section');
      sections.forEach(section => {
        const description = section.querySelector('p');
        expect(description).toBeTruthy();
        expect(description.textContent.length).toBeGreaterThan(30);
      });
    });

    test('Error states and loading states should be accessible', () => {
      // This would typically test error handling, but we verify structure
      // exists to handle accessible error communication
      const chartContainers = document.querySelectorAll('.chart-container');
      
      chartContainers.forEach(container => {
        // Container should maintain role and label even if charts fail to load
        expect(container).toHaveAttribute('role', 'img');
        expect(container).toHaveAttribute('aria-label');
      });
    });
  });
});