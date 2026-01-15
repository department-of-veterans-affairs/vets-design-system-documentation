# Frontend Development Guide

## Getting Started

This guide covers frontend development practices for the VA platform.

## Development Environment

### Prerequisites
- Node.js 18.x or later
- pnpm 8.x for package management
- VS Code with recommended extensions

### Setup
```bash
# Clone repository
git clone https://github.com/department-of-veterans-affairs/vets-website.git
cd vets-website

# Install dependencies
pnpm install

# Start development server
pnpm start
```

## Architecture

### Technology Stack
- **Framework**: React 18
- **Routing**: React Router
- **State Management**: Redux Toolkit
- **Styling**: Sass with design tokens
- **Testing**: Jest, React Testing Library
- **Build**: Webpack 5

### Project Structure
```
src/
├── applications/          # Feature applications
├── components/           # Shared components
├── forms/               # Form configurations
├── platform/           # Core platform utilities
├── site/               # Marketing pages
└── styles/             # Global styles
```

## Component Development

### Design System Components
Use components from the VA Design System:

```jsx
import { VaButton, VaAlert } from '@department-of-veterans-affairs/web-components/react';

function MyComponent() {
  return (
    <div>
      <VaAlert status="info" class="vads-u-margin-bottom--2">
        Important information for Veterans
      </VaAlert>
      <VaButton text="Continue" onClick={handleContinue} />
    </div>
  );
}
```

### Styling Guidelines
- Use utility classes from the design system
- Follow BEM naming for custom styles
- Use CSS custom properties for theming

```scss
// Use design tokens
.my-component {
  padding: var(--vads-space-2);
  background-color: var(--vads-color-primary);
  
  &__header {
    font-size: var(--vads-font-size-h3);
    margin-bottom: var(--vads-space-1);
  }
}
```

## State Management

### Redux Store Structure
```javascript
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    form: formSlice,
  },
});
```

### React Hooks
Prefer hooks for component state:

```jsx
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MyComponent() {
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Side effects here
  }, []);
  
  return /* component JSX */;
}
```

## Forms

### Form Configuration
Use the platform form system:

```javascript
// form/config.js
export default {
  title: 'Example Form',
  subTitle: 'Subtitle here',
  formId: 'EXAMPLE_FORM',
  chapters: {
    chapter1: {
      title: 'Personal Information',
      pages: {
        page1: {
          title: 'Name and contact',
          uiSchema: {
            // UI configuration
          },
          schema: {
            // JSON schema
          }
        }
      }
    }
  }
};
```

## Testing

### Component Tests
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });
  
  it('handles user interaction', () => {
    render(<MyComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Updated text')).toBeInTheDocument();
  });
});
```

### Accessibility Testing
```javascript
import { axe } from 'jest-axe';

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Performance

### Code Splitting
```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Bundle Analysis
```bash
# Analyze bundle size
pnpm run build:analyze

# Check performance
pnpm run test:performance
```

## Deployment

### Build Process
```bash
# Production build
pnpm run build:production

# Staging build
pnpm run build:staging
```

### Environment Configuration
- Development: `localhost:3001`
- Staging: `staging.va.gov`
- Production: `va.gov`

## Best Practices

### Code Quality
- Use TypeScript for better type safety
- Follow ESLint and Prettier configurations
- Write comprehensive tests
- Use semantic commit messages

### Accessibility
- Test with screen readers
- Ensure keyboard navigation
- Maintain proper heading hierarchy
- Use ARIA labels appropriately

### Performance
- Optimize images and assets
- Use React.memo for expensive components
- Implement proper loading states
- Monitor Core Web Vitals

---

*For frontend questions, reach out in #platform-frontend*