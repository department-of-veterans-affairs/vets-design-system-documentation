// Test setup for Jest
require('jest-axe/extend-expect');
require('@testing-library/jest-dom');

// Setup DOM cleanup
beforeEach(() => {
  document.body.innerHTML = '';
});