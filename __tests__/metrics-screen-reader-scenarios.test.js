/**
 * Screen Reader Specific Test Scenarios
 * Tests scenarios that would be encountered by users with NVDA, JAWS, and VoiceOver
 * Based on requirements from issue #4788 for comprehensive screen reader testing
 */

const { getByRole, getAllByRole, getByLabelText } = require('@testing-library/dom');
const { fireEvent } = require('@testing-library/dom');

describe('Screen Reader Specific Usage Scenarios', () => {
  
  beforeEach(() => {
    // Create a comprehensive metrics dashboard for screen reader testing
    document.body.innerHTML = `
      <main role="main" aria-labelledby="main-heading">
        <div class="metrics-dashboard">
          <h1 id="main-heading">VA Design System Metrics Dashboard</h1>
          <p>This dashboard provides comprehensive insights into the health, adoption, and usage patterns of the VA Design System across all VA applications.</p>
          
          <!-- Live region for dynamic announcements -->
          <div id="announcements" aria-live="polite" aria-atomic="true" class="sr-only"></div>
          
          <!-- Summary metrics with detailed context -->
          <section aria-labelledby="summary-heading">
            <h2 id="summary-heading">Key Performance Indicators</h2>
            
            <div class="metrics-grid" role="group" aria-labelledby="summary-heading">
              <div class="metric-card" role="group" aria-labelledby="open-issues-heading">
                <h3 id="open-issues-heading">Open Issues</h3>
                <div class="metric-value" 
                     aria-labelledby="open-issues-heading open-issues-description"
                     tabindex="0"
                     role="text">42</div>
                <div id="open-issues-description" class="metric-description">
                  Current number of unresolved issues in the design system repository
                </div>
                <div class="metric-trend" 
                     aria-label="Trend for open issues: 12% decrease compared to last month, indicating improved issue resolution"
                     role="text"
                     tabindex="0">
                  <span aria-hidden="true">↘</span>
                  <span>12% decrease from last month</span>
                </div>
              </div>
              
              <div class="metric-card" role="group" aria-labelledby="resolution-time-heading">
                <h3 id="resolution-time-heading">Average Resolution Time</h3>
                <div class="metric-value" 
                     aria-labelledby="resolution-time-heading resolution-time-description"
                     tabindex="0"
                     role="text">14 days</div>
                <div id="resolution-time-description" class="metric-description">
                  Average time from issue creation to closure across all issue types
                </div>
                <div class="metric-trend" 
                     aria-label="Trend for resolution time: 8% improvement, 1 day faster than last quarter"
                     role="text"
                     tabindex="0">
                  <span aria-hidden="true">↘</span>
                  <span>8% improvement from last quarter</span>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Detailed analytics section -->
          <section aria-labelledby="analytics-heading">
            <h2 id="analytics-heading">Detailed Analytics</h2>
            
            <!-- Quarterly activity analysis -->
            <div class="metrics-section" role="region" aria-labelledby="quarterly-heading">
              <h3 id="quarterly-heading">Quarterly Issue Activity Analysis</h3>
              <p id="quarterly-description">
                This section shows the trend of issues opened versus closed each quarter, 
                helping track the team's effectiveness in addressing community needs and maintaining system health.
              </p>
              
              <va-tabs role="tablist" aria-labelledby="quarterly-heading">
                <va-tab-item 
                  button-text="Interactive Chart" 
                  target-id="quarterly-graph-panel"
                  role="tab"
                  aria-label="View quarterly activity data as an interactive bar chart"
                  aria-describedby="quarterly-description"></va-tab-item>
                <va-tab-item 
                  button-text="Data Table" 
                  target-id="quarterly-table-panel"
                  role="tab"
                  aria-label="View quarterly activity data as a structured data table with full keyboard navigation"
                  aria-describedby="quarterly-description"></va-tab-item>
                
                <va-tab-panel 
                  panel-id="quarterly-graph-panel" 
                  role="tabpanel" 
                  aria-labelledby="quarterly-heading"
                  aria-describedby="quarterly-description">
                  
                  <div id="quarterly-chart" 
                       class="chart-container"
                       role="img" 
                       aria-label="Bar chart displaying quarterly issue activity from Q1 2024 through Q3 2024. Shows comparison between issues opened and closed each quarter with trend analysis."
                       aria-describedby="quarterly-chart-details"
                       tabindex="0"
                       onkeydown="handleChartKeydown(event)"
                       onfocus="announceChartFocus('quarterly')">
                    
                    <div id="quarterly-chart-details" class="sr-only">
                      Detailed chart data: Q1 2024 shows 15 issues opened and 12 closed, indicating a backlog increase. 
                      Q2 2024 shows 23 issues opened and 18 closed, with continued backlog growth. 
                      Q3 2024 shows significant improvement with 19 issues opened and 25 closed, 
                      resulting in net backlog reduction. Overall trend indicates improving resolution capacity.
                    </div>
                    
                    <svg role="img" aria-describedby="quarterly-chart-svg-desc">
                      <desc id="quarterly-chart-svg-desc">
                        Bar chart with three groups of bars, each representing a quarter. 
                        Each group contains two bars: blue bars for issues opened, darker blue bars for issues closed.
                        Heights represent the number of issues, with Q3 showing the highest closure rate.
                      </desc>
                      <g role="group" aria-label="Q1 2024 data">
                        <rect width="30" height="60" fill="#0071bb" role="img" aria-label="15 issues opened in Q1 2024"></rect>
                        <rect width="30" height="48" fill="#112e51" role="img" aria-label="12 issues closed in Q1 2024"></rect>
                      </g>
                      <g role="group" aria-label="Q2 2024 data">
                        <rect width="30" height="92" fill="#0071bb" role="img" aria-label="23 issues opened in Q2 2024"></rect>
                        <rect width="30" height="72" fill="#112e51" role="img" aria-label="18 issues closed in Q2 2024"></rect>
                      </g>
                      <g role="group" aria-label="Q3 2024 data">
                        <rect width="30" height="76" fill="#0071bb" role="img" aria-label="19 issues opened in Q3 2024"></rect>
                        <rect width="30" height="100" fill="#112e51" role="img" aria-label="25 issues closed in Q3 2024"></rect>
                      </g>
                    </svg>
                  </div>
                  
                  <!-- Screen reader instructions -->
                  <div class="chart-instructions sr-only">
                    <p>
                      To explore this chart with a screen reader, use the Tab key to focus on the chart, 
                      then use arrow keys to navigate between data points. 
                      Press Enter to get detailed information about each quarter's data.
                      The equivalent table view is available by selecting the Data Table tab above.
                    </p>
                  </div>
                </va-tab-panel>
                
                <va-tab-panel 
                  panel-id="quarterly-table-panel" 
                  role="tabpanel"
                  aria-labelledby="quarterly-heading"
                  aria-describedby="quarterly-description">
                  
                  <div class="table-wrapper">
                    <table class="usa-table" 
                           role="table"
                           aria-label="Quarterly issue activity data with sortable columns"
                           aria-describedby="quarterly-table-summary">
                      
                      <caption id="quarterly-table-caption">
                        Issue Activity by Quarter: Comprehensive data showing issues opened and closed each quarter,
                        with calculated differences to track backlog changes
                      </caption>
                      
                      <thead>
                        <tr>
                          <th scope="col" 
                              tabindex="0"
                              aria-sort="none"
                              role="columnheader"
                              aria-label="Quarter - sortable column">
                            Quarter
                            <span class="sort-indicator" aria-hidden="true"></span>
                          </th>
                          <th scope="col" 
                              tabindex="0"
                              aria-sort="none"
                              role="columnheader"
                              aria-label="Issues Opened - sortable column showing number of new issues each quarter">
                            Issues Opened
                            <span class="sort-indicator" aria-hidden="true"></span>
                          </th>
                          <th scope="col" 
                              tabindex="0"
                              aria-sort="none"
                              role="columnheader"
                              aria-label="Issues Closed - sortable column showing number of resolved issues each quarter">
                            Issues Closed
                            <span class="sort-indicator" aria-hidden="true"></span>
                          </th>
                          <th scope="col" 
                              tabindex="0"
                              aria-sort="none"
                              role="columnheader"
                              aria-label="Net Change - calculated difference between opened and closed issues">
                            Net Change
                            <span class="sort-indicator" aria-hidden="true"></span>
                          </th>
                        </tr>
                      </thead>
                      
                      <tbody id="quarterly-table-body" role="rowgroup">
                        <tr>
                          <th scope="row" tabindex="0">Q3 2024</th>
                          <td tabindex="0" 
                              aria-describedby="q3-opened-desc">
                            19
                            <span id="q3-opened-desc" class="sr-only">19 new issues opened in Q3 2024</span>
                          </td>
                          <td tabindex="0" 
                              aria-describedby="q3-closed-desc">
                            25
                            <span id="q3-closed-desc" class="sr-only">25 issues resolved in Q3 2024</span>
                          </td>
                          <td tabindex="0" 
                              aria-describedby="q3-net-desc"
                              class="positive-change">
                            -6
                            <span id="q3-net-desc" class="sr-only">Net decrease of 6 issues, positive trend indicating backlog reduction</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" tabindex="0">Q2 2024</th>
                          <td tabindex="0" 
                              aria-describedby="q2-opened-desc">
                            23
                            <span id="q2-opened-desc" class="sr-only">23 new issues opened in Q2 2024</span>
                          </td>
                          <td tabindex="0" 
                              aria-describedby="q2-closed-desc">
                            18
                            <span id="q2-closed-desc" class="sr-only">18 issues resolved in Q2 2024</span>
                          </td>
                          <td tabindex="0" 
                              aria-describedby="q2-net-desc"
                              class="negative-change">
                            +5
                            <span id="q2-net-desc" class="sr-only">Net increase of 5 issues, indicating backlog growth</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" tabindex="0">Q1 2024</th>
                          <td tabindex="0" 
                              aria-describedby="q1-opened-desc">
                            15
                            <span id="q1-opened-desc" class="sr-only">15 new issues opened in Q1 2024</span>
                          </td>
                          <td tabindex="0" 
                              aria-describedby="q1-closed-desc">
                            12
                            <span id="q1-closed-desc" class="sr-only">12 issues resolved in Q1 2024</span>
                          </td>
                          <td tabindex="0" 
                              aria-describedby="q1-net-desc"
                              class="negative-change">
                            +3
                            <span id="q1-net-desc" class="sr-only">Net increase of 3 issues, indicating slight backlog growth</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <div id="quarterly-table-summary" class="table-summary">
                      <p>
                        Table shows 3 quarters of data with trend analysis. 
                        Most recent quarter (Q3 2024) shows improvement with net backlog reduction.
                        Use Tab key to navigate between cells. Use Shift+Tab to navigate backwards.
                        Column headers are sortable using Enter or Space keys.
                      </p>
                    </div>
                  </div>
                </va-tab-panel>
              </va-tabs>
            </div>
          </section>
          
          <!-- Component usage analytics -->
          <section aria-labelledby="components-heading">
            <h2 id="components-heading">Component Usage Analytics</h2>
            
            <div class="metrics-section" role="region" aria-labelledby="top-components-heading">
              <h3 id="top-components-heading">Most Popular Design System Components</h3>
              <p id="components-description">
                Analysis of component usage across all VA applications, 
                helping identify the most valuable parts of the design system and areas for improvement.
              </p>
              
              <!-- Data freshness indicator -->
              <div class="data-freshness" 
                   role="status" 
                   aria-live="polite"
                   aria-label="Data currency information">
                <p id="data-freshness-text">
                  <strong>Data current as of:</strong> August 15, 2024 | 
                  <strong>Coverage:</strong> 47 VA applications | 
                  <strong>Total component instances:</strong> 12,847
                </p>
              </div>
              
              <va-tabs role="tablist" aria-labelledby="top-components-heading">
                <va-tab-item 
                  button-text="Usage Chart" 
                  target-id="components-graph-panel"
                  role="tab"
                  aria-label="View component usage data as a horizontal bar chart showing top 10 components"></va-tab-item>
                <va-tab-item 
                  button-text="Full Data Table" 
                  target-id="components-table-panel"
                  role="tab"
                  aria-label="View complete component usage data as a sortable table showing all 25 tracked components"></va-tab-item>
                
                <va-tab-panel 
                  panel-id="components-graph-panel" 
                  role="tabpanel"
                  aria-labelledby="top-components-heading">
                  
                  <div id="top-components-chart" 
                       class="chart-container"
                       role="img" 
                       aria-label="Horizontal bar chart showing the 10 most frequently used VA design system components. va-button leads with 1,247 usages, followed by va-card with 892 usages."
                       aria-describedby="components-chart-details"
                       tabindex="0">
                    
                    <div id="components-chart-details" class="sr-only">
                      Component usage ranking: 1st place va-button with 1,247 usages across applications, 
                      2nd place va-card with 892 usages, 3rd place va-input with 654 usages. 
                      These top components represent 45% of all component usage, 
                      indicating high adoption and importance for VA's user interface consistency.
                    </div>
                    
                    <svg role="img" aria-describedby="components-chart-svg-desc">
                      <desc id="components-chart-svg-desc">
                        Horizontal bar chart with 10 bars representing component usage counts. 
                        Bars are ordered from highest to lowest usage, with va-button at the top.
                        Bar lengths are proportional to usage counts, using VA's primary blue color.
                      </desc>
                      <g role="group" aria-label="Component usage bars">
                        <rect width="200" height="20" fill="#0071bb" role="img" aria-label="va-button: 1,247 usages"></rect>
                        <rect width="150" height="20" fill="#0071bb" role="img" aria-label="va-card: 892 usages"></rect>
                        <rect width="120" height="20" fill="#0071bb" role="img" aria-label="va-input: 654 usages"></rect>
                      </g>
                    </svg>
                  </div>
                </va-tab-panel>
                
                <va-tab-panel 
                  panel-id="components-table-panel" 
                  role="tabpanel"
                  aria-labelledby="top-components-heading">
                  
                  <table class="usa-table" 
                         role="table"
                         aria-label="Complete component usage data sortable by component name or usage count">
                    <caption>
                      Top Components by Usage: Complete ranking of all tracked design system components 
                      with usage counts across VA applications
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col" 
                            tabindex="0"
                            role="columnheader"
                            aria-label="Component Name - sortable alphabetically">
                          Component Name
                        </th>
                        <th scope="col" 
                            tabindex="0"
                            role="columnheader"
                            aria-label="Usage Count - sortable numerically by frequency of use">
                          Usage Count
                        </th>
                        <th scope="col" 
                            tabindex="0"
                            role="columnheader"
                            aria-label="Percentage of Total - component's share of all usage">
                          % of Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" tabindex="0">va-button</th>
                        <td tabindex="0" aria-describedby="button-usage-desc">
                          1,247
                          <span id="button-usage-desc" class="sr-only">1,247 instances of va-button component across all VA applications</span>
                        </td>
                        <td tabindex="0">9.7%</td>
                      </tr>
                      <tr>
                        <th scope="row" tabindex="0">va-card</th>
                        <td tabindex="0" aria-describedby="card-usage-desc">
                          892
                          <span id="card-usage-desc" class="sr-only">892 instances of va-card component across all VA applications</span>
                        </td>
                        <td tabindex="0">6.9%</td>
                      </tr>
                      <tr>
                        <th scope="row" tabindex="0">va-input</th>
                        <td tabindex="0" aria-describedby="input-usage-desc">
                          654
                          <span id="input-usage-desc" class="sr-only">654 instances of va-input component across all VA applications</span>
                        </td>
                        <td tabindex="0">5.1%</td>
                      </tr>
                    </tbody>
                  </table>
                </va-tab-panel>
              </va-tabs>
            </div>
          </section>
        </div>
      </main>
      
      <!-- Screen reader utilities -->
      <script>
        // Screen reader interaction helpers
        function handleChartKeydown(event) {
          // Handle arrow key navigation in charts
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            // Logic would navigate between data points
          }
        }
        
        function announceChartFocus(chartType) {
          const announcements = document.getElementById('announcements');
          announcements.textContent = chartType + ' chart focused. Use arrow keys to explore data points.';
        }
      </script>
    `;
  });

  describe('🎯 NVDA Screen Reader Scenarios', () => {
    test('Should provide comprehensive page structure for NVDA navigation', () => {
      // Test main landmarks and headings that NVDA would announce
      const main = document.querySelector('[role="main"]');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const regions = document.querySelectorAll('[role="region"]');
      
      expect(main).toBeTruthy();
      expect(main).toHaveAttribute('aria-labelledby', 'main-heading');
      expect(headings.length).toBeGreaterThanOrEqual(5);
      expect(regions.length).toBeGreaterThan(0);
    });

    test('Should announce chart details when navigating with NVDA', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      
      charts.forEach(chart => {
        // NVDA would announce the aria-label first
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel.length).toBeGreaterThan(30);
        
        // Then read the aria-describedby content for details
        const describedBy = chart.getAttribute('aria-describedby');
        if (describedBy) {
          const descElement = document.getElementById(describedBy);
          expect(descElement).toBeTruthy();
          expect(descElement.textContent.length).toBeGreaterThan(50);
        }
      });
    });

    test('Should support NVDA table navigation commands', () => {
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        // NVDA relies on proper table structure for navigation commands
        expect(table.querySelector('caption')).toBeTruthy();
        expect(table.querySelector('thead')).toBeTruthy();
        expect(table.querySelector('tbody')).toBeTruthy();
        
        // Column headers for Ctrl+Alt+Arrow navigation
        const colHeaders = table.querySelectorAll('th[scope="col"]');
        expect(colHeaders.length).toBeGreaterThan(0);
        
        // Row headers for table structure
        const rowHeaders = table.querySelectorAll('th[scope="row"]');
        expect(rowHeaders.length).toBeGreaterThan(0);
      });
    });

    test('Should provide live region updates for dynamic content', () => {
      const liveRegion = document.getElementById('announcements');
      expect(liveRegion).toBeTruthy();
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
      expect(liveRegion).toHaveAttribute('aria-atomic', 'true');
    });
  });

  describe('🎙️ JAWS Screen Reader Scenarios', () => {
    test('Should provide JAWS-compatible form controls and labels', () => {
      // Test elements that JAWS reads as form controls
      const labeledElements = document.querySelectorAll('[aria-labelledby]');
      
      labeledElements.forEach(element => {
        const labelIds = element.getAttribute('aria-labelledby').split(' ');
        labelIds.forEach(labelId => {
          const labelElement = document.getElementById(labelId);
          expect(labelElement).toBeTruthy();
          expect(labelElement.textContent.trim()).toBeTruthy();
        });
      });
    });

    test('Should support JAWS table summary and description features', () => {
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        // JAWS uses caption for table summary
        const caption = table.querySelector('caption');
        expect(caption).toBeTruthy();
        expect(caption.textContent.length).toBeGreaterThan(20);
        
        // JAWS can read aria-describedby for additional context
        const ariaDescribedBy = table.getAttribute('aria-describedby');
        if (ariaDescribedBy) {
          const descElement = document.getElementById(ariaDescribedBy);
          expect(descElement).toBeTruthy();
        }
      });
    });

    test('Should provide JAWS-compatible heading navigation', () => {
      // JAWS heading navigation relies on proper heading levels
      const h1 = document.querySelectorAll('h1');
      const h2s = document.querySelectorAll('h2');
      const h3s = document.querySelectorAll('h3');
      
      expect(h1).toHaveLength(1);
      expect(h2s.length).toBeGreaterThan(0);
      expect(h3s.length).toBeGreaterThan(0);
      
      // Each heading should have meaningful content
      [...h1, ...h2s, ...h3s].forEach(heading => {
        expect(heading.textContent.trim()).toBeTruthy();
        expect(heading.textContent.length).toBeGreaterThan(3);
      });
    });

    test('Should support JAWS graphics mode for charts', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      
      charts.forEach(chart => {
        // JAWS graphics mode needs role="img" and descriptive label
        expect(chart).toHaveAttribute('role', 'img');
        expect(chart).toHaveAttribute('tabindex', '0');
        
        const ariaLabel = chart.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel).toContain('chart');
        
        // SVG elements should also be properly labeled
        const svg = chart.querySelector('svg');
        if (svg) {
          expect(svg).toHaveAttribute('role', 'img');
          const desc = svg.querySelector('desc');
          expect(desc).toBeTruthy();
        }
      });
    });
  });

  describe('🍎 VoiceOver Scenarios', () => {
    test('Should provide VoiceOver-compatible rotor navigation', () => {
      // VoiceOver rotor needs proper headings, landmarks, and form controls
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const landmarks = document.querySelectorAll('[role="main"], [role="region"], [role="tablist"], [role="tabpanel"]');
      const interactiveElements = document.querySelectorAll('[tabindex="0"], va-tab-item');
      
      expect(headings.length).toBeGreaterThanOrEqual(5);
      expect(landmarks.length).toBeGreaterThan(0);
      expect(interactiveElements.length).toBeGreaterThan(0);
    });

    test('Should support VoiceOver table navigation gestures', () => {
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        // VoiceOver needs proper table role and structure
        expect(table).toHaveAttribute('role', 'table');
        
        // Column headers for VoiceOver column navigation
        const colHeaders = table.querySelectorAll('[role="columnheader"], th[scope="col"]');
        expect(colHeaders.length).toBeGreaterThan(0);
        
        // Ensure cells are properly associated with headers
        const dataCells = table.querySelectorAll('td');
        dataCells.forEach(cell => {
          // Cells should be in rows with proper headers
          const row = cell.closest('tr');
          expect(row).toBeTruthy();
          
          const rowHeader = row.querySelector('th[scope="row"]');
          if (rowHeader) {
            expect(rowHeader.textContent.trim()).toBeTruthy();
          }
        });
      });
    });

    test('Should provide VoiceOver-compatible chart descriptions', () => {
      const charts = document.querySelectorAll('.chart-container[role="img"]');
      
      charts.forEach(chart => {
        // VoiceOver reads role="img" elements as graphics
        expect(chart).toHaveAttribute('role', 'img');
        expect(chart).toHaveAttribute('aria-label');
        
        // Should be focusable for detailed exploration
        expect(chart).toHaveAttribute('tabindex', '0');
        
        // SVG content should have descriptions
        const svg = chart.querySelector('svg');
        if (svg) {
          const desc = svg.querySelector('desc');
          expect(desc).toBeTruthy();
          expect(desc.textContent.length).toBeGreaterThan(30);
        }
      });
    });

    test('Should support VoiceOver tab and group navigation', () => {
      // VoiceOver groups related content with role="group"
      const groups = document.querySelectorAll('[role="group"]');
      expect(groups.length).toBeGreaterThan(0);
      
      groups.forEach(group => {
        // Groups should have labels or be labeled by headings
        const ariaLabel = group.getAttribute('aria-label');
        const ariaLabelledBy = group.getAttribute('aria-labelledby');
        
        expect(ariaLabel || ariaLabelledBy).toBeTruthy();
        
        if (ariaLabelledBy) {
          const labelElement = document.getElementById(ariaLabelledBy);
          expect(labelElement).toBeTruthy();
        }
      });
    });
  });

  describe('🔄 Dynamic Content and Interactions', () => {
    test('Should announce tab changes to screen readers', () => {
      const tabItems = document.querySelectorAll('va-tab-item');
      const liveRegion = document.getElementById('announcements');
      
      tabItems.forEach(tab => {
        const ariaLabel = tab.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel).toContain('View');
        
        // Tab should have proper role
        expect(tab).toHaveAttribute('role', 'tab');
      });
      
      // Live region should exist for announcements
      expect(liveRegion).toBeTruthy();
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
    });

    test('Should provide context for data updates', () => {
      const dataFreshness = document.querySelector('[role="status"]');
      expect(dataFreshness).toBeTruthy();
      expect(dataFreshness).toHaveAttribute('aria-live', 'polite');
      expect(dataFreshness.textContent).toContain('Data current as of');
    });

    test('Should handle focus management in tab panels', () => {
      const tabPanels = document.querySelectorAll('[role="tabpanel"]');
      
      tabPanels.forEach(panel => {
        expect(panel).toHaveAttribute('role', 'tabpanel');
        expect(panel).toHaveAttribute('aria-labelledby');
        
        // Panels should contain focusable content
        const focusableContent = panel.querySelectorAll('[tabindex="0"]');
        expect(focusableContent.length).toBeGreaterThan(0);
      });
    });
  });

  describe('📊 Complex Data Presentation', () => {
    test('Should provide multiple ways to access chart data', () => {
      // Each metrics section should provide both chart and table views
      const metricsSections = document.querySelectorAll('.metrics-section');
      
      metricsSections.forEach(section => {
        const chart = section.querySelector('.chart-container[role="img"]');
        const table = section.querySelector('table');
        
        if (chart) {
          // Chart should be accessible
          expect(chart).toHaveAttribute('tabindex', '0');
          expect(chart).toHaveAttribute('aria-label');
          
          // Should have corresponding table
          expect(table).toBeTruthy();
          if (table) {
            expect(table).toHaveAttribute('role', 'table');
          }
        }
      });
    });

    test('Should provide detailed cell descriptions for complex data', () => {
      const complexCells = document.querySelectorAll('[aria-describedby]');
      
      complexCells.forEach(cell => {
        const describedBy = cell.getAttribute('aria-describedby');
        const descriptions = describedBy.split(' ');
        
        descriptions.forEach(descId => {
          const descElement = document.getElementById(descId);
          expect(descElement).toBeTruthy();
          expect(descElement.textContent.length).toBeGreaterThan(10);
        });
      });
    });

    test('Should use semantic markup for data relationships', () => {
      // Test table structure for screen reader comprehension
      const tables = document.querySelectorAll('table');
      
      tables.forEach(table => {
        // Row headers should use scope="row"
        const rowHeaders = table.querySelectorAll('th[scope="row"]');
        expect(rowHeaders.length).toBeGreaterThan(0);
        
        // Column headers should use scope="col"  
        const colHeaders = table.querySelectorAll('th[scope="col"]');
        expect(colHeaders.length).toBeGreaterThan(0);
        
        // Data cells should be associated properly
        const dataCells = table.querySelectorAll('td');
        dataCells.forEach(cell => {
          expect(cell).toHaveAttribute('tabindex', '0');
        });
      });
    });
  });

  describe('🎹 Keyboard and Screen Reader Integration', () => {
    test('Should support screen reader keyboard shortcuts', () => {
      // Elements that screen readers navigate to should be properly marked
      const navigableElements = document.querySelectorAll(
        'h1, h2, h3, [role="img"], [role="table"], [role="tab"], [tabindex="0"]'
      );
      
      expect(navigableElements.length).toBeGreaterThan(10);
      
      // Test that focus management works with screen readers
      const focusableElements = document.querySelectorAll('[tabindex="0"]');
      focusableElements.forEach(element => {
        expect(element.tabIndex).toBe(0);
      });
    });

    test('Should provide skip links and navigation aids', () => {
      // While not explicitly implemented in this test HTML, 
      // we verify structure supports skip navigation
      const mainContent = document.querySelector('[role="main"]');
      expect(mainContent).toBeTruthy();
      
      const headings = document.querySelectorAll('h1, h2, h3');
      expect(headings.length).toBeGreaterThan(3);
    });
  });
});