/**
 * Checklist item definitions
 * These define the criteria descriptions for each checklist category
 */

export const maturityDefinitions = [
  {
    name: 'Guidance',
    description:
      'Examples, usage, code usage, content considerations, and accessibility considerations are all complete.',
  },
  {
    name: 'Research',
    description: 'VFS team conducted research on this component which is linked from this page.',
  },
  {
    name: 'Stability',
    description:
      'Component has been in production for more than 3 months with no significant issues found.',
  },
  {
    name: 'Adoption',
    description: 'Multiple teams have adopted this component.',
  },
];

export const codeAssetsDefinitions = [
  {
    name: 'Variations',
    description:
      'Storybook includes all variations (style, size, orientation, optional iconography, selection, error state, etc.)',
  },
  {
    name: 'Responsive',
    description: 'Component depicted in all responsive breakpoints.',
  },
  {
    name: 'Interactive states',
    description:
      'Includes all interactive states that are applicable (hover, active, focus, keyboard focus, disabled).',
  },
  {
    name: 'Tokens',
    description: 'All design attributes (color, typography, layout, etc.) are available as tokens.',
  },
  {
    name: 'Internationalization',
    description: 'Describes i18n attributes.',
  },
];

export const visualAssetsDefinitions = [
  {
    name: 'Variations',
    description:
      'Figma library includes all variations (style, size, orientation, optional iconography, selection, error state, etc.)',
  },
  {
    name: 'Responsive',
    description: 'Component designed to work in all responsive breakpoints.',
  },
  {
    name: 'Interactive states',
    description:
      'Includes all interactive states that are applicable (hover, active, focus, keyboard focus, disabled).',
  },
  {
    name: 'Tokens',
    description: 'All design attributes (color, typography, layout, etc.) are available as tokens.',
  },
];

export const accessibilityCategories = [
  { key: 'codeReview', label: 'Code review' },
  { key: 'readability', label: 'Readability' },
  { key: 'automatedScans', label: 'Automated scans' },
  { key: 'useOfColor', label: 'Use of color' },
  { key: 'textResizing', label: 'Text resizing, zoom, and magnification' },
  { key: 'screenReaders', label: 'Screen readers' },
  { key: 'inputMethods', label: 'Input and interaction methods' },
];
