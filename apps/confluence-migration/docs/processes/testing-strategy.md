# Testing Strategy

## Overview

Our comprehensive testing strategy ensures quality, reliability, and accessibility across the VA platform.

## Testing Pyramid

### Unit Tests (70%)
**Scope**: Individual functions, components, utilities
**Tools**: Jest, React Testing Library
**Coverage Target**: 85%

```javascript
// Example unit test
import { formatPhoneNumber } from './utils';

describe('formatPhoneNumber', () => {
  it('formats 10-digit phone number correctly', () => {
    expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
  });
});
```

### Integration Tests (20%)
**Scope**: Component interactions, API endpoints, user workflows
**Tools**: Jest, MSW (Mock Service Worker), Cypress Component Testing

```javascript
// Example integration test
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProfileForm from './ProfileForm';

describe('ProfileForm Integration', () => {
  it('saves profile data successfully', async () => {
    render(<Provider store={testStore}><ProfileForm /></Provider>);
    
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'John' }
    });
    
    fireEvent.click(screen.getByText('Save'));
    
    await waitFor(() => {
      expect(screen.getByText('Profile saved')).toBeInTheDocument();
    });
  });
});
```

### End-to-End Tests (10%)
**Scope**: Complete user journeys, critical paths
**Tools**: Cypress, Playwright

```javascript
// Example E2E test
describe('Disability Benefits Application', () => {
  it('completes application flow', () => {
    cy.visit('/disability/apply');
    cy.login('veteran-user');
    
    // Fill out form steps
    cy.get('[data-testid="personal-info"]').click();
    cy.fillPersonalInfo();
    
    // Submit application
    cy.get('[data-testid="submit-application"]').click();
    cy.contains('Application submitted successfully');
  });
});
```

## Testing Types

### Accessibility Testing
**Automated**: aXe integration in all test suites
**Manual**: Screen reader testing, keyboard navigation

```javascript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Performance Testing
**Tools**: Lighthouse CI, Web Vitals monitoring
**Metrics**: LCP, FID, CLS, TTI

```javascript
// Performance test example
describe('Performance', () => {
  it('loads page within performance budget', () => {
    cy.visit('/forms/disability-benefits');
    cy.lighthouse({
      performance: 90,
      accessibility: 100,
      'first-contentful-paint': 1800,
      'largest-contentful-paint': 3000,
    });
  });
});
```

### Security Testing
**Static Analysis**: ESLint security rules, Snyk
**Dynamic Testing**: OWASP ZAP integration

### Browser Testing
**Browsers**: Chrome, Firefox, Safari, Edge
**Devices**: Desktop, tablet, mobile
**Tools**: BrowserStack, Sauce Labs

## Test Organization

### Directory Structure
```
src/
├── __tests__/           # Global test utilities
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   └── Button.stories.jsx
├── utils/
│   ├── helpers.js
│   └── helpers.test.js
└── cypress/
    ├── integration/
    ├── fixtures/
    └── support/
```

### Naming Conventions
- Unit tests: `ComponentName.test.jsx`
- Integration tests: `ComponentName.integration.test.jsx`
- E2E tests: `feature-name.cypress.js`

## Test Data Management

### Fixtures and Factories
```javascript
// test/factories.js
export const createUser = (overrides = {}) => ({
  id: '12345',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@va.gov',
  ...overrides,
});

export const createApplication = (status = 'in-progress') => ({
  id: 'app-123',
  status,
  submittedAt: new Date().toISOString(),
});
```

### Mock Service Worker
```javascript
// mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/user/profile', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(createUser())
    );
  }),
];
```

## Continuous Integration

### GitHub Actions Workflow
```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run linting
        run: pnpm lint
      
      - name: Run unit tests
        run: pnpm test:unit --coverage
      
      - name: Run accessibility tests
        run: pnpm test:a11y
      
      - name: Run E2E tests
        run: pnpm test:e2e
```

## Quality Gates

### Coverage Requirements
- **Unit Test Coverage**: Minimum 85%
- **Critical Path Coverage**: 100%
- **New Code Coverage**: 90%

### Performance Budgets
- **Bundle Size**: < 250KB gzipped per route
- **Load Time**: < 3s on 3G connection
- **Accessibility Score**: 100%

### Definition of Done
- [ ] Unit tests written and passing
- [ ] Integration tests for user flows
- [ ] Accessibility tests passing
- [ ] Cross-browser testing completed
- [ ] Performance budget met
- [ ] Security scan clean
- [ ] Code review approved

## Testing Best Practices

### Writing Effective Tests
1. **Test behavior, not implementation**
2. **Use descriptive test names**
3. **Keep tests isolated and independent**
4. **Mock external dependencies**
5. **Test edge cases and error conditions**

### Performance Testing
- Run tests in parallel where possible
- Use shallow rendering for simple component tests
- Mock heavy dependencies
- Implement test timeouts

### Debugging Tests
```javascript
// Debugging utilities
import { screen, logRoles, prettyDOM } from '@testing-library/react';

// Debug element roles
logRoles(container);

// Debug DOM structure
console.log(prettyDOM(screen.getByTestId('my-element')));
```

## Metrics and Reporting

### Test Metrics Dashboard
- Test execution time trends
- Flaky test identification
- Coverage trends over time
- Performance regression tracking

### Reporting Tools
- **Jest**: Coverage reports and test results
- **Cypress Dashboard**: E2E test results and videos
- **Lighthouse CI**: Performance trend analysis
- **Codecov**: Coverage tracking and PR integration

---

*For testing questions, reach out in #platform-testing*