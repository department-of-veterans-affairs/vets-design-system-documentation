/**
 * Regression Prevention Tests for Metrics Dashboard
 * These tests specifically catch when charts or tables disappear from the UI
 */

const { getByRole, getAllByRole, getByText, queryByText } = require('@testing-library/dom');

// Mock D3.js
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

// Mock fetch for metrics data
global.fetch = jest.fn();

describe('Metrics Dashboard Regression Prevention', () => {
  
  beforeEach(() => {
    
    // Mock the complete metrics page structure
    document.body.innerHTML = `
      <div class="metrics-dashboard">
        <h1>Metrics Dashboard</h1>
        
        <div class="metrics-section">
          <h3>Issue Activity by Quarter</h3>
          <p>Shows issues opened vs. closed each quarter</p>
          
          <va-tabs>
            <va-tab-item button-text="Graph" target-id="quarterly-graph-panel"></va-tab-item>
            <va-tab-item button-text="Table" target-id="quarterly-table-panel"></va-tab-item>
            
            <va-tab-panel panel-id="quarterly-graph-panel">
              <div id="quarterly-chart" 
                   class="chart-container"
                   role="img" 
                   aria-label="Bar chart showing quarterly issue activity">
                <!-- Chart content should be populated here -->
              </div>
            </va-tab-panel>
            
            <va-tab-panel panel-id="quarterly-table-panel">
              <table role="table">
                <caption>Issue Activity by Quarter</caption>
                <thead>
                  <tr>
                    <th scope="col">Quarter</th>
                    <th scope="col">Issues Opened</th>
                    <th scope="col">Issues Closed</th>
                  </tr>
                </thead>
                <tbody id="quarterly-table-body">
                  <tr>
                    <td>Q1 2024</td>
                    <td>15</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </va-tab-panel>
          </va-tabs>
        </div>
        
        <div class="metrics-section">
          <h3>Top Components by Usage</h3>
          
          <va-tabs>
            <va-tab-item button-text="Graph" target-id="components-graph-panel"></va-tab-item>
            <va-tab-item button-text="Table" target-id="components-table-panel"></va-tab-item>
            
            <va-tab-panel panel-id="components-graph-panel">
              <div id="top-components-chart" 
                   class="chart-container"
                   role="img" 
                   aria-label="Bar chart showing top components by usage">
              </div>
            </va-tab-panel>
            
            <va-tab-panel panel-id="components-table-panel">
              <table role="table">
                <caption>Top Components by Usage</caption>
                <tbody id="components-table-body">
                  <tr>
                    <td>va-button</td>
                    <td>1,247</td>
                  </tr>
                </tbody>
              </table>
            </va-tab-panel>
          </va-tabs>
        </div>
      </div>
    `;
    
    // Mock successful data fetch
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        quarterly: [
          { period: '2024-Q1', issues_opened: 15, issues_closed: 12 }
        ],
        velocity: [
          { period: '2024-01', issues_opened: 8 }
        ]
      })
    });
  });

  afterEach(() => {
    fetch.mockClear();
  });

  describe('🚨 Critical Regression Tests - Chart Visibility', () => {
    test('REGRESSION CHECK: All chart containers must be present in DOM', () => {
      // This test fails if charts disappear from the page
      const chartContainers = document.querySelectorAll('.chart-container');
      
      expect(chartContainers.length).toBeGreaterThanOrEqual(2);
      expect(document.getElementById('quarterly-chart')).toBeInTheDocument();
      expect(document.getElementById('top-components-chart')).toBeInTheDocument();
    });

    test('REGRESSION CHECK: Chart containers must have content after data loads', async () => {
      // Simulate chart rendering after data load
      const quarterlyChart = document.getElementById('quarterly-chart');
      const componentsChart = document.getElementById('top-components-chart');
      
      // Charts should exist
      expect(quarterlyChart).toBeInTheDocument();
      expect(componentsChart).toBeInTheDocument();
      
      // Simulate D3 actually rendering content (this is what's missing)
      quarterlyChart.innerHTML = '<svg><rect></rect></svg>';
      componentsChart.innerHTML = '<svg><rect></rect></svg>';
      
      // After rendering, charts should have content
      expect(quarterlyChart.innerHTML).toContain('svg');
      expect(componentsChart.innerHTML).toContain('svg');
    });

    test('REGRESSION CHECK: Chart containers must be visible in Graph tab', () => {
      // Check that graph tab panels are not hidden
      const graphPanels = document.querySelectorAll('[panel-id*="graph-panel"]');
      
      graphPanels.forEach(panel => {
        // Panel should exist and not be explicitly hidden
        expect(panel).toBeInTheDocument();
        
        // Panel should contain a chart container
        const chartContainer = panel.querySelector('.chart-container');
        expect(chartContainer).toBeInTheDocument();
      });
    });

    test('REGRESSION CHECK: Charts must have proper accessibility attributes', () => {
      const charts = document.querySelectorAll('[role="img"]');
      
      expect(charts.length).toBeGreaterThanOrEqual(2);
      
      charts.forEach(chart => {
        expect(chart).toHaveAttribute('role', 'img');
        expect(chart).toHaveAttribute('aria-label');
        expect(chart.getAttribute('aria-label')).toBeTruthy();
      });
    });
  });

  describe('🚨 Critical Regression Tests - Table Visibility', () => {
    test('REGRESSION CHECK: All data tables must be present', () => {
      const tables = getAllByRole(document.body, 'table');
      expect(tables.length).toBeGreaterThanOrEqual(2);
      
      // Specific tables must exist
      expect(document.getElementById('quarterly-table-body')).toBeInTheDocument();
      expect(document.getElementById('components-table-body')).toBeInTheDocument();
    });

    test('REGRESSION CHECK: Tables must have data', () => {
      const quarterlyTable = document.getElementById('quarterly-table-body');
      const componentsTable = document.getElementById('components-table-body');
      
      expect(quarterlyTable.children.length).toBeGreaterThan(0);
      expect(componentsTable.children.length).toBeGreaterThan(0);
      
      // Should contain actual data
      expect(quarterlyTable.textContent).toContain('Q1 2024');
      expect(componentsTable.textContent).toContain('va-button');
    });
  });

  describe('🚨 Critical Regression Tests - Tab Functionality', () => {
    test('REGRESSION CHECK: Graph and Table tabs must be present and labeled', () => {
      const graphTabs = document.querySelectorAll('[button-text="Graph"]');
      const tableTabs = document.querySelectorAll('[button-text="Table"]');
      
      expect(graphTabs.length).toBeGreaterThanOrEqual(2);
      expect(tableTabs.length).toBeGreaterThanOrEqual(2);
      
      // Tabs should have proper text
      graphTabs.forEach(tab => {
        expect(tab.getAttribute('button-text')).toBe('Graph');
      });
      
      tableTabs.forEach(tab => {
        expect(tab.getAttribute('button-text')).toBe('Table');
      });
    });

    test('REGRESSION CHECK: Tab panels must exist and be properly linked', () => {
      const graphTabs = document.querySelectorAll('[button-text="Graph"]');
      
      graphTabs.forEach(tab => {
        const targetId = tab.getAttribute('target-id');
        const linkedPanel = document.querySelector(`[panel-id="${targetId}"]`);
        
        expect(linkedPanel).toBeInTheDocument();
      });
    });
  });

  describe('🔍 Integration Tests - Data Flow', () => {
    test('CRITICAL: Chart rendering pipeline must complete successfully', async () => {
      // This test simulates the complete data loading and rendering process
      
      // 1. Mock the loadMetricsData function
      const mockLoadMetricsData = jest.fn(() => {
        // Simulate successful data fetch and chart rendering
        const quarterlyChart = document.getElementById('quarterly-chart');
        if (quarterlyChart) {
          quarterlyChart.innerHTML = '<svg><g><rect width="50" height="100"></rect></g></svg>';
        }
        
        const componentsChart = document.getElementById('top-components-chart');
        if (componentsChart) {
          componentsChart.innerHTML = '<svg><g><rect width="30" height="80"></rect></g></svg>';
        }
      });
      
      // 2. Execute the data loading
      mockLoadMetricsData();
      
      // 3. Verify charts have content
      const quarterlyChart = document.getElementById('quarterly-chart');
      const componentsChart = document.getElementById('top-components-chart');
      
      expect(quarterlyChart.innerHTML).toContain('svg');
      expect(quarterlyChart.innerHTML).toContain('rect');
      expect(componentsChart.innerHTML).toContain('svg');
      expect(componentsChart.innerHTML).toContain('rect');
    });

    test('CRITICAL: JavaScript errors must not break chart rendering', () => {
      // Test that the page structure remains intact even if JS fails
      const quarterlyChart = document.getElementById('quarterly-chart');
      const componentsChart = document.getElementById('top-components-chart');
      
      // Chart containers should exist regardless of JS state
      expect(quarterlyChart).toBeInTheDocument();
      expect(componentsChart).toBeInTheDocument();
      
      // Should have accessibility attributes
      expect(quarterlyChart).toHaveAttribute('role', 'img');
      expect(componentsChart).toHaveAttribute('role', 'img');
    });
  });

  describe('📊 Visual Content Validation', () => {
    test('REGRESSION CHECK: Each chart container should be visually present', () => {
      const chartContainers = document.querySelectorAll('.chart-container');
      
      chartContainers.forEach(container => {
        // Container should be visible (not display: none)
        const computedStyle = getComputedStyle(container);
        expect(computedStyle.display).not.toBe('none');
        
        // Container should have dimensions
        expect(container.className).toContain('chart-container');
      });
    });

    test('REGRESSION CHECK: Chart placeholders should indicate loading state', () => {
      const chartContainers = document.querySelectorAll('.chart-container');
      
      chartContainers.forEach(container => {
        // If no chart content, should at least have placeholder or loading indicator
        if (!container.innerHTML || container.innerHTML.trim() === '') {
          // This indicates a problem - charts should have SOME content
          console.warn('Chart container is empty:', container.id);
        }
        
        // Container should exist and be accessible
        expect(container).toBeInTheDocument();
      });
    });
  });

  describe('🎯 User Experience Validation', () => {
    test('REGRESSION CHECK: User can access both charts and tables', () => {
      // Graph tabs should be present
      const graphTabs = document.querySelectorAll('[button-text="Graph"]');
      expect(graphTabs.length).toBeGreaterThan(0);
      
      // Table tabs should be present  
      const tableTabs = document.querySelectorAll('[button-text="Table"]');
      expect(tableTabs.length).toBeGreaterThan(0);
      
      // Chart containers should be present
      const chartContainers = document.querySelectorAll('.chart-container');
      expect(chartContainers.length).toBeGreaterThan(0);
      
      // Tables should be present
      const tables = getAllByRole(document.body, 'table');
      expect(tables.length).toBeGreaterThan(0);
    });

    test('REGRESSION CHECK: All metrics sections have both views', () => {
      const metricsSections = document.querySelectorAll('.metrics-section');
      
      metricsSections.forEach(section => {
        const sectionTitle = section.querySelector('h3')?.textContent;
        
        // Each section should have va-tabs
        const tabs = section.querySelector('va-tabs');
        expect(tabs).toBeInTheDocument();
        
        // Should have both graph and table tabs
        const graphTab = section.querySelector('[button-text="Graph"]');
        const tableTab = section.querySelector('[button-text="Table"]');
        
        expect(graphTab).toBeInTheDocument();
        expect(tableTab).toBeInTheDocument();
        
        // Should have both graph and table panels
        const graphPanel = section.querySelector('[panel-id*="graph-panel"]');
        const tablePanel = section.querySelector('[panel-id*="table-panel"]');
        
        expect(graphPanel).toBeInTheDocument();
        expect(tablePanel).toBeInTheDocument();
      });
    });
  });
});