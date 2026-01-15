---
title: Using Web Components
description: How to use VA Design System web components in your applications.
sidebar_position: 3
---

# Using web components

Web Components are custom, reusable HTML elements using web platform APIs. They feature framework-agnostic design with encapsulated styling and functionality.

## Core concepts

Web Components consist of three parts:

| Part | Description |
|------|-------------|
| Custom HTML element | Registers your own HTML tag |
| Shadow DOM | Separate DOM tree with scoped CSS styles |
| Templates and slots | HTML templates providing additional context |

## VA Design System web components

All VA components use a `va-` prefix (for example, `va-alert`).

### Benefits

- Framework compatibility
- Consistent syntax across projects
- Active maintenance and updates
- Performance advantages

## Implementation approaches

### Vanilla JavaScript

Use web components directly without imports when no functions, objects, arrays, or custom events are needed:

```html
<va-alert status="info" visible>
  <h2 slot="headline">Alert headline</h2>
  <p>Alert content goes here.</p>
</va-alert>
```

### React applications

Two options are available:

**Option 1: Direct vanilla component**

```jsx
<va-alert status="info" visible>
  <h2 slot="headline">Alert headline</h2>
  <p>Alert content goes here.</p>
</va-alert>
```

**Option 2: React binding (for functions/events)**

```jsx
import { VaAlert } from "@department-of-veterans-affairs/component-library/dist/react-bindings";

<VaAlert status="info" visible onCloseEvent={handleClose}>
  <h2 slot="headline">Alert headline</h2>
  <p>Alert content goes here.</p>
</VaAlert>
```

## Event handling

### Custom events in React

Prefix with `on` and use camelCase. For example, `vaChange` becomes `onVaChange`:

```jsx
<VaTextInput onVaChange={handleChange} />
```

### Custom events in vanilla JavaScript

```javascript
const input = document.querySelector('va-text-input');
input.addEventListener('vaChange', handleChange);
```

### Native events in React

Use `on` prefix with camelCase:

```jsx
<va-button onClick={(event) => console.log(event.detail)}>
  Click me
</va-button>
```

### Native events in vanilla JavaScript

Inline or event listener approach both supported:

```javascript
const button = document.querySelector('va-button');
button.addEventListener('click', handleClick);
```

## Additional resources

- Storybook documentation for specific component events and properties
- GitHub for issue submission and contributions
