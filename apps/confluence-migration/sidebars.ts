import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Processes and procedures (typical Confluence content)
  processesSidebar: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'processes/getting-started',
    },
    {
      type: 'doc',
      label: 'Development Workflow',
      id: 'processes/development-workflow',
    },
  ],

  // Developer guides (technical documentation)
  guidesSidebar: [
    {
      type: 'doc',
      label: 'Development Setup',
      id: 'guides/setup',
    },
  ],

  // Team information (typical wiki content)
  teamsSidebar: [
    {
      type: 'doc',
      label: 'Design System Team',
      id: 'teams/design-system',
    },
  ],
};

export default sidebars;
